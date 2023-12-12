<template>
    <div>
        <logInForm :loginSeen="loginSeen" :isUnLogined="isUnLogined" @closeForm="openLogForm" @updateIsUnLogined="handleIsUnLoginedChange"/>
        <signInForm :registerSeen="registerSeen"/>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
              <a class="navbar-brand" href="#"><span class="text-success">Vue</span>.js</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                </ul>
                <div class="d-flex gap-1" v-if="isUnLogined">
                  <successBtn v-if="isUnLogined" :value="'Log In'" :func="openLogForm"/>
                  <successBtn :value="'Sign In'" :func="openRegForm"/>
                </div>
              </div>
            </div>
          </nav>
        </div>
</template>

<script>
  import logInForm from './logInForm.vue';
  import signInForm from './signInForm.vue';
  import successBtn from './successBtn.vue';
  import mitt from 'mitt';

  const emitter = mitt();

  export default {
    data() {
        return {
            loginSeen: false,
            registerSeen: false,
            isUnLogined: true,
        }
    },
    methods: {
        openRegForm() {
          this.registerSeen = !this.registerSeen;
          this.loginSeen = false;
        },
        openLogForm(value) {
          if(value){
            this.loginSeen = value;
          }else{
            this.loginSeen = !this.loginSeen;
            this.registerSeen = false;
          }
        },
        handleIsUnLoginedChange(newValue) {
          this.isUnLogined = newValue;
        },
    },
    mounted() {
      emitter.on('updateIsUnLogined', this.handleIsUnLoginedChange);
    },
    components:{
      logInForm,
      signInForm,
      successBtn
    }
  };
</script>

<style>
</style>