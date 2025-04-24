const express = require('express');
 const app = express();
 
 app.use(express.urlencoded());

 app.get('/', (req, res, next) => {
 res.send(`<form method="POST" action="/">
 Enter username:<input type="text" name="username" placeholder="username">
 </br></br>
 Enter phone number:<input type="text" name="phone" placeholder="phone">
 </br></br>
 Enter email:<input type="text" name="email" placeholder="email"> 
</br></br>
 Enter City:<input type="text" name="city" placeholder="city"> 
</br> </br>
 <input type="submit">
 </form>`);
 });

 app.post('/', function (req, res, next)
 {res.send(JSON.stringify(req.body));
 });

 app.listen(3000);

