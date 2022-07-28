// Section 1 we add the express package import
const express = require('express');
const axios = require('axios'); //the import statement for axios
const path = require('path');
// Section 2 we are calling the express function to initialize the application
const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));
// Section 3 we are sending back HTML content with the h1 tag by adding it to the response object when we access the application
app.get('/', (req, res) => { 
 res.send("<h1>Home page</h1>");
});
app.get('/users', (req, res) => {
    axios.get('https://randomuser.me/api/?page=1&results=10')
     .then(response => {
       res.send(response.data);
     });
   });
// Section 4 we are starting the express js server on port 3000
app.listen(3000, () => {
 console.log('server started on port 3000');
});