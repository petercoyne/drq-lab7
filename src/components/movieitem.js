
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

export class MovieItem extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem', float: 'left', margin: '1rem' }}>
                    <Card.Img variant="top" src={this.props.movie.poster} />
                    <Card.Body>
                        <Card.Title>{this.props.movie.title}</Card.Title>
                        <Card.Text>{this.props.movie.year}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}