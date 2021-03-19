const express = require('express');
const app = express();

const mockUserData=[
	{name:'Mark'},
	{name:'Jill'}
]

app.get('/users', function(req,res){
	res.json({
		success:true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})

app.get('/users/:id', function(req, res){
	console.log(req.params.id)
	res.json({
		success:true,
		message: 'got one user',
		user: req.params.id
	})
})

app.post('/login', function(req,res){
	const username = req.body.username;
	const password = req.body.password;

	const mockUsername = "lol";
	const mockPassword = "lmao";

	if(username==mockUsername && password==mockPassword){
		res.json({
			success: true,
			message: 'pwd and username match',
			token: 'encrypted token'
		})
	} else {
		res.json({
			success:false,
			message: 'username and pwd dont match'
		})
	}
})
			
app.listen(8000, function(){
	console.log("server is running")
})
