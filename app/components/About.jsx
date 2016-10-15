var React = require('react');

var About = () => {
  return (
    <div >
      <h1 className="text-center page-title">About</h1>
      <div className="container">
        <p>This is an app built with node.js and react.js. Weather information
          is pulled from the Open Weather API by user request and the resulting
          weather is displayed for the user in a message just below the search box.
        </p>
        <p>Built by Dustin Morris 2016.</p>
      </div>

    </div>
  )
};

module.exports = About;
