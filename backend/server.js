const express = require('express')
const app = express()
const port = 4000
const cors = require('cors') // require cross origin resource sharing npm package
const bodyParser = require('body-parser') // require body parser middleware
const mongoose = require('mongoose')

app.use(cors()); // get express to use cors

app.use(function (req, res, next) { // headers to allow cross origin stuff 
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

main().catch(err => console.log(err)); // call main() and catch any errors to console

async function main() { // async function definition, connect to hosted mongodb instance
	await mongoose.connect('mongodb+srv://peter:oo3LSFr1qXPXam1n@cluster0.qg7sc.mongodb.net/movies?retryWrites=true&w=majority');
}

let movieSchema = new mongoose.Schema({ // set up actual Schema instance
	title:String,
	year:String,
	poster:String
})

let MovieModel = mongoose.model("movie", movieSchema); // set model from schema

app.get('/api/movies', (req, res) => { // route for GET on /api/movies
	MovieModel.find((err, data) => { // find() all data + callback function
		res.json(data); // return data
	})
})

app.get('/api/movies/:id', (req,res) => { // route with dynamic :id parameter
	console.log(req.params.id)
	MovieModel.findById(req.params.id, (err, data) => { // find by req.params.id
		res.json(data); // return data
	})
})

app.post('/api/movies', (req, res) => { // route for POST on /api/movies
	console.log("Movie Received!"); // message to confirm POST request
	console.log(req.body.Title); // log the various name/value pairs to console
	console.log(req.body.Year);
	console.log(req.body.Poster);
	MovieModel.create({ 
		title:req.body.Title,
		year:req.body.Year,
		poster:req.body.Poster
	})

	res.send("Item Added") // need this to prevent client retry
})

app.listen(port, () => { // default listen function
	console.log(`Example app listening at http://localhost:${port}`)
})