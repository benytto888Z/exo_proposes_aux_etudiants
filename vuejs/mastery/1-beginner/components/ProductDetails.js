app.component('product-details',{

    props:{
        details:{
            type:Object,
            required:true
        }
    },
    template:`
     <div>
     <h4>Details :</h4>
            <h4 v-for="detail in details">{{detail}}</h4>
     </div>
    `,
    data(){
        return{

        }
    },
    methods:{

    },
    computed:{

    }

})