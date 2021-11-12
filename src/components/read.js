import { Component } from "react";
import { Movies } from "./movies";
import axios from 'axios';

export class Read extends Component {

	state = {
		movies: [] // set this.state.movies to blank array
	};

	componentDidMount() { // on mount function
		axios.get('http://localhost:4000/api/movies') // request movies from our backend
			.then((res) => { // happy path
				this.setState({ movies: res.data }); // set state to response from backend
			})
			.catch((err) => {
				console.log(err); // else log error
			});
	}

	render() {
		return ( // return movies component in a div
			<div>
				<Movies movies={this.state.movies} />
			</div>
		);
	}
}
export default Read;