<template>
    <form v-if="registerSeen" action="#" class="login-container">
      <h3>Login</h3>
      <div class="mb-3">
        <label class="form-label">Username</label>
        <input class="form-control" placeholder="Enter username..." v-model="userName">
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input class="form-control" type="password" placeholder="Enter password..." v-model="password">
      </div>
      <div class="mb-3">
        <label class="form-label">Submit password</label>
        <input class="form-control" type="password" placeholder="Submit password..." v-model="submitedPassword">
      </div>
      <div class="mb-3">
        <successBtn class="btn-outline-dark" :value="'Sign In'" :func="validationRegForm"/>
      </div>
    </form>
</template>
  
<script>
  import Swal from 'sweetalert2';
  import successBtn from './successBtn.vue';
  
    export default {
      data(){
        return{
          userName : "",
          password : "",
          submitedPassword : "",
        }
      },
      components: {
        successBtn
      },
      props : {
        registerSeen : Boolean
      },
      methods: {
        validationRegForm(){
          if(this.password.trim() === this.submitedPassword.trim()){
            this.getUserNames()
          }else{
            Swal.fire({
              title: 'Your passwords are different',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }
        },
        getUserNames(){
          fetch('./../../data/userData.json')
            .then((responce) => {
              return responce.json()
            })
            .then(data => {
              let isFound = false

              for(let i = 0; i < data.length; i++){
                if(data[i].userName === this.userName.trim()){
                  isFound = true
                  Swal.fire({
                    title: 'This username already taken',
                    icon: 'error',
                    confirmButtonText: 'OK'
                  })
                }
              }

              if(!(isFound)){
                this.addUserToData(data)
              }
            })
            .catch(error => console.error('Ошибка: Разраб даун', error));
        },
        addUserToData(data){
          let newUser = {
            userName : this.userName,
            password : this.password,
            posts: {}
          }

          data.push(newUser)

          this.userName = ""
          this.password = ""
          this.submitedPassword = ""

          return fetch('./../../data/userData.json', {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
          })
            .then(() => {
              Swal.fire({
                title: 'Registration completed!',
                icon: 'success',
                confirmButtonText: 'OK'
              })
            })
        }
      },
    };
</script>

<style>
    .login-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 400px;
        padding: 40px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: white;
    }
</style>