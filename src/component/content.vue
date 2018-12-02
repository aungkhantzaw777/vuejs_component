<template>
    <div class="content">
        <div class="center">
            
            <ul>
                <li v-for="todo in todos" v-bind:key="todos">
                    {{todo.name}}
                </li>
                
             </ul>
             <input type="text" v-model="Newtodo.name"><button @click='add'>add more</button>
             
        </div>
    </div>
</template>

<script>


    export default {
        name:'Content',
        data(){
            return{
                todos:[
                    {id:1,name:'read book'},
                    {id:2,name:'doing great'},
                    {id:3,name:'social media surfing!'}
                ],
                Newtodo:{id:'',name:''} // to put data them clear

            }
        },
        methods:{
            add:function(){
                
                let id = this.todos[this.todos.length - 1].id
                let name = this.Newtodo.name.trim()
                id++;
                // get data value and push it
                this.todos.push({id:id,name:name})
                this.Newtodo = {id:'',name:''}

            }
        }
    }
</script>

<style scoped>
.content{
    height: 500px;
    background-color: rgb(205, 202, 226);
    color: black;
}
.center{
    margin: 1px auto;
}
</style>