<template>
    <form action="#" class="container makePost shadow rounded mt-5">
      <div class="close d-flex justify-content-between align-items-center cursor-pointer">
        <h3 class="mb-2">Make Post!</h3>
      </div>
      <div class="form-inputs">
        <label class="form-label">Post Name</label>
        <input type="text" class="form-control" placeholder="Enter Post Name" v-model="postName"/>
        <label class="form-label mt-2">Post Text</label>
        <input type="textarea" class="form-control" placeholder="Enter Post Text" v-model="postText"/>
      </div>
      <successBtn :value="'Publish'" :type="submit" :func="validateAndAddPost" class="mt-2"/>
    </form>
</template>
  
<script>
  import successBtn from './successBtn.vue';
  import Swal from 'sweetalert2';
  
  export default {
    data(){
      return{
        postName : "",
        postText : "",
        data : []
      }
    },
    components: {
      successBtn,
    },
    methods: {
      addPostToData(){
        this.data.push({
          postName : this.postName,
          postText : this.postText,
          postId : Date.now()
        })
        this.postFormSeen = false;
      },
      validateAndAddPost(){
        if(this.postName === ""){
          Swal.fire({
            title: 'Wrong post value',
            text: 'Name of post and text on this post must not be empty',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }else{
          this.addPostToData();
          this.postName = "";
          this.postText = ""
        }
      },
      }
    }
</script>
  
  <style>
    .makePost{
      width: 100%;
      padding: 20px 40px;
      z-index: 0;
      background-color: white;
    }
  </style>
  