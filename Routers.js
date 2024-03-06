const express = require ('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());


app.get('/', async (req, res) =>{
    res.send('Servidor de APIs!');
})
 

app.get('/posts', async(req,res)=>{
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/posts')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error:'Api não encontrada'});
    }
});
 

 
app.get('/comments', async(req,res)=>{
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/comments')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: 'Api não encontrada'})
    }
})
 

 
app.get('/albums', async(req,res)=>{
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/albums')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: 'Api não encontrada'});
    }
});
 
 

 
app.get('/photos', async(req,res)=>{
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/photos')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: 'Api não encontrada'});
    }
});
 

 
app.get('/todos', async(req,res)=>{
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/todos')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: 'Api não encontrada'});
    }
});
 
 

 
app.get('/users', async(req,res)=>{
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/users')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: 'Api não encontrada'});
    }
});
 
 

 
app.listen(port, () =>{
    console.log(`Servidor na página http://localhost:${port}`);
})
