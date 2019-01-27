import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './views/Navbar';
import Home from './views/Home';
import Contact from './views/Contact';
import Gallery from './views/Gallery';
import Footerbar from './views/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route exact path='/gallery' component={Gallery} />
            <Route exact path='/contact' component={Contact} />
            <Footerbar/>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
