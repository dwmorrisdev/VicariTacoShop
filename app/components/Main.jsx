var React = require('react');
var Nav = require('Nav');
var Footer = require('Footer');


var Main = (props) => {
  return (
    <div >
      <Nav/>
      <div>
        <div>
          {props.children}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

module.exports = Main;
