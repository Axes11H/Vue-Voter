<template>
    <form action="#" v-if="loginSeen" class="login-container">
      <h3>Login</h3>
      <div class="mb-3">
        <label class="form-label">Username</label>
        <input class="form-control" type="text" placeholder="Enter username..." v-model="username">
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input class="form-control" type="password" placeholder="Enter password..." v-model="password">
      </div>
      <div class="mb-3">
        <successBtn class="btn-outline-dark" :value="'Log In'" :func="validationLogInForm"/>
      </div>
    </form>
</template>
  
<script>
  import successBtn from './successBtn.vue';
  import { mapGetters } from 'vuex';
  import Swal from 'sweetalert2';
  
    export default {
        data(){
          return{
            username : "",
            password : "",
          }
        },
        props : ['loginSeen', 'isUnLogined', 'handleIsUnLoginedChange', 'openLogForm'],
        components: {
            successBtn,
        },
        computed: {
          ...mapGetters(['allInfo']),
        },
        methods : {
          getUserData(){
            let data = this.$store.dispatch('getUserData');
            console.log(data)
            data.then(response => {
                for(let i = 0; i < response.length; i++){
                  if(response[i].userName === this.username.toLocaleLowerCase().trim()){
                    if(response[i].password === this.password.trim()){
                      Swal.fire({
                        title: 'You are loggined!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      });

                      this.username = ""
                      this.password = ""

                      this.emitUpdate()
                    }else{
                      Swal.fire({
                        title: 'Wrong password',
                        icon: 'error',
                        confirmButtonText: 'OK'
                      });
                    }
                  }else{
                    Swal.fire({
                      title: 'Wrong password or username',
                      icon: 'error',
                      confirmButtonText: 'OK'
                    });
                  }
                }
              })
          },
          emitUpdate() {
            const updatedIsUnLogined = false;
            this.$emit('updateIsUnLogined', updatedIsUnLogined);
            const closeForm = false
            this.$emit('closeForm', closeForm)
          },
          validationLogInForm(){
            if(!this.username || !this.password){
              Swal.fire({
                title: 'Empty input',
                text: 'Username and password must be not empty',
                icon: 'error',
                confirmButtonText: 'OK'
              });
            }else{
              this.getUserData()
            }
          }
        },
        }
</script>

<style>
    .login-container{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 400px;
        padding: 40px;
        z-index: 2;
        border: 1px solid #ccc;
        background-color: white;
        border-radius: 5px;
    }
</style>