const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// For serving static files
app.use('/static', express.static('static'))

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))
 
// Our pug demo endpoint
app.get('/', (req, res)=>{
    // const con = "best content" 
    // const params = {};
    res.status(200).render(
        'index.pug',
        // params
    )
})


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
