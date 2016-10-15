var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">V Taco Logo Here</li>
            <li>
              <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink>
            </li>
            <li>
              <Link to="menu" activeClassName="active-link"  activeStyle={{fontWeight: 'bold'}}>Menu</Link>
            </li>
            <li>
              <Link to="catering" activeClassName="active-link"  activeStyle={{fontWeight: 'bold'}}>Catering</Link>
            </li>
            <li>
              <Link to="specials" activeClassName="active-link"  activeStyle={{fontWeight: 'bold'}}>Specials</Link>
            </li>
            <li>
              <Link to="about" activeClassName="active-link"  activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="contact" activeClassName="active-link"  activeStyle={{fontWeight: 'bold'}}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul clasName="menu">
            <li className="menu-text">
              <p>Call: <a href="tel:xxx-xxx-xxxx">xxx-xxx-xxxx</a></p>
              <p>follow us:
                <a href="https://www.facebook.com/Vicari-Italian-Grill-197021270344570/?fref=ts" target="_blank">fb</a>
                <a href="http://www.twitter.com" target="_blank">T</a></p>
            </li>
          </ul>
        </div>
      </div>
    );
};

module.exports = Nav;
