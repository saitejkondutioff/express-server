import express from "express";


var app = express();
var PORT = 3000;

// For parsing application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/profile', function (req, res) {
//console.log(req.body);
res.send("I am ok");
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
