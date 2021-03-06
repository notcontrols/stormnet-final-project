import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import HomePage from '../Home';
import Demos from '../Demos';
import Features from '../Features';
import Shortcodes from '../Shortcodes';
import Shop from '../Shop';
import Blog from '../Blog';
import Portfolio from '../Portfolio';

import './style.css';
import logo from './img/Logo.png';
import search from './img/search_icon.png';

class Header extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
        <nav className='navigation'>
          <img src={logo} alt={'logo'} className='logo' />
          <div className='mainLogo'>THEFOX BUSINESS</div>
          <Link to='/'>HOME</Link>
          <Link to='/demos'>DEMOS</Link>
          <Link to='/features'>FEATURES</Link>
          <Link to='/shortcodes'>SHORTCODES</Link>
          <Link to='/shop'>SHOP</Link>
          <Link to='/blog'>BLOG</Link>
          <Link to='/portfolio'>PORTFOLIO</Link>
          <Link><img src={search}></img></Link>
        </nav>
        </div>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/demos' exact component={Demos} />
          <Route path='/features' exact component={Features} />
          <Route path='/shortcodes' exact component={Shortcodes} />
          <Route path='/shop' exact component={Shop} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/portfolio' exact component={Portfolio} />
        </Switch>
      </Router>
    );
  }
}

export default Header;
