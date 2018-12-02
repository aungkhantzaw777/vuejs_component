<template>
    <div>
        <h1>i am success to export</h1>
        <p>{{name}}</p>
    </div>
</template>

<script>
    export default {
        name:'show',
        data(){
            return{
                name:'vuejs header'
            }
        }
    }
    

</script>

<style scoped>
.header{
    height: 300;
    background-color: aquamarine;
    color: black;
}
</style>
