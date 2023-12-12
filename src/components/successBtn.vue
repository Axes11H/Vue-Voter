<template>
    <div>
        <button class="btn btn-outline-success w-100" @click="func()" :type="type"  v-html="value"></button>
    </div>
</template>

<script>
    export default{
        props:['func', 'value', 'type']
    }
</script>