<template>
    <div class="footer">
        {{copyright}}
    </div>
</template>

<script>
    export default {
        name:'Footer',
        data(){
            return{
                copyright:'copyright '+new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>
.footer{
    height: 100px;
    background-color: rgb(233, 104, 87);
    color: black;
    text-align: center;
    font-size: 20mm;
}
</style>