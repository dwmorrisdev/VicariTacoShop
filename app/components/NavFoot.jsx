var React = require('react');
var {Link, IndexLink} = require('react-router');

var NavFoot = () => {
  return(
    <div >
      <div >
        <ul className="menu">
          <li>
            <Link to="/" activeClassName="active-link" >Home</Link>
          </li>
          <li>
            <Link to="menu" activeClassName="active-link"  >Menu</Link>
          </li>
          <li>
            <Link to="catering" activeClassName="active-link"  >Catering</Link>
          </li>
          <li>
            <Link to="specials" activeClassName="active-link"  >Specials</Link>
          </li>
          <li>
            <Link to="about" activeClassName="active-link"  >About</Link>
          </li>
          <li>
            <Link to="contact" activeClassName="active-link"  >Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = NavFoot;
