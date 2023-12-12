<script setup>
  import mainNav from './components/mainNav.vue';
  import accountInf from './components/accountInf.vue';
  import makeNewPostForm from './components/makeNewPostForm.vue';
  import postsOutput from './components/postsOutput.vue';
</script>

<template>
  <mainNav/>
  <div class="d-flex container justify-content-between gap-5">
    <accountInf/> 
    <makeNewPostForm/>
  </div>
  <postsOutput/>
</template>
