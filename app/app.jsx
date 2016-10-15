var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//pages
var Main = require('Main');
var Contact = require('Contact');
var About = require('About');
var Catering = require('Catering');
var Menu = require('Menu');
var Carosel = require('Carosel');
var Specials = require('Specials');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//app css
require('style!css!sass!applicationStyles');

//render
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main} >
      <Route path="catering" component={Catering}/>
      <Route path="contact" component={Contact}/>
      <Route path="menu" component={Menu}/>
      <Route path="specials" component={Specials}/>
      <Route path="about" component={About}/>
      <IndexRoute component={Carosel}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
