<script>
    export default {
        props: ['inputType', 'placeHolder', 'label'],
    };
</script>

<template>
    <div class="mb-3">
        <label class="form-label" v-html="label"></label>
        <input :type="inputType" class="form-control" :placeholder="placeHolder">
    </div>
</template>