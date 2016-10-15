var React = require('react');
var Nav = require('Nav');


var Main = (props) => {
  return (
    <div >
      <Nav/>
      <div>
        <div>
          {props.children}
          <h1 className="text-center">This is the Main page.</h1>
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
