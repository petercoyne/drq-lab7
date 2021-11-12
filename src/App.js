import './App.css';
import { Component } from 'react';
import { Read } from './components/read';
import { Create } from './components/create';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/read' component={Read} exact />
            <Route path='/create' component={Create} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
