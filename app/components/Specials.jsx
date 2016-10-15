var React = require('react');

var Specials = () => {
  return (
    <div className="text-center">
      <h1 className="text-center page-title">Specials</h1>
      <p>Below is a list of our current specials:</p>
      <ul>
        <li>Happy Hour every day from 4-7pm. $1 off all drinks!</li>
        <li>Tuesday - 2 for 1 Frozen Margaritas</li>
        <li>Thursday - Fish Tacos</li>
        <li>Friday and Saturday - Prime Rib Tacos</li>
      </ul>

    </div>
  )
};

module.exports = Specials;
