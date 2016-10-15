var React = require('react');
var NavFoot = require('NavFoot');

var Footer = () => {
  return(
    <div>
      <hr/>
      <div>
        <p>{String.fromCharCode(169) + ' Copyright V Taco 2016' }</p>
      </div>
      <div>
        <NavFoot/>


      </div>
    </div>
  );

};

module.exports = Footer;
