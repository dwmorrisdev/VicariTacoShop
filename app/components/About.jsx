var React = require('react');

var About = () => {
  return (
    <div >
      <h1 className="text-center page-title">About</h1>
      <div className="container text-center">
        <h4>Location</h4>
        <p>V Taco is located in historic downtown Corinth, MS.
          Use the map to get directions if you are coming from out of
          town. Below is the physical address:
        </p>
        <h4>V Taco<br/>
        some address Cruise St<br/>
        Corinth, MS 38834
        </h4>

        <h3>Check Out <a target="_blank" href="http://www.vicarigrill.com">Vicari Grill</a></h3>
        <p>Built by <a target="_blank" href="http://www.github.com/dwmorrisdev/VicariTacoShop">Dustin Morris</a>  2016.</p>
      </div>
      <div>
         <p>insert google map here.</p>
      </div>


    </div>
  )
};

module.exports = About;
