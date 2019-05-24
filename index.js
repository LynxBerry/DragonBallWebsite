var app = new Vue({
    el: '#app',
    data: {
        posts:["aa"],
        msg:''
    },
    methods:{
        insertPost: function (message){
            this.posts.push(message);
            this.msg = '';
        }
    }
});