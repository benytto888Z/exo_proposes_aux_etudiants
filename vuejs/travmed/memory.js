//---------1-----------------

const app = Vue.createApp({
    template:'<h1>Hello {{firstName}}</h1>',
    data(){
        return{
            firstName:'John'
        }
    }
})

app.mount('#app')


//---------------------ou

//----js---
const app = Vue.createApp({
    template:'<h1>Hello {{firstName}}</h1>',
    data(){
        return{
            firstName:'John'
        }
    }
})

app.mount('#app')

//----html--

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Random User Generator</title>
</head>
<body>
    <div id="app">
         <h1>Hello {{firstName}}</h1>
    </div>


    <script src="https://unpkg.com/vue@next"></script>
    <script src="app.js"></script>
</body>
</html>*/