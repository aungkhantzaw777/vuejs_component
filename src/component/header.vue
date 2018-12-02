<template>
    <div class="header">
        {{intro}}
    </div>
</template>

<script>
    export default {
        name:'Header',
        data(){
            return{
                intro:'i am vuejs header'
            }
        }
    }
</script>

<style scoped>
.header{
    height: 100px;
    background-color: aquamarine;
    color: black;
    text-align: center;
    font-size: 20mm;
}
</style>