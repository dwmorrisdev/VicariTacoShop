var React = require('react');
var Slider = require('react-slick');

//carousel images
var imgOne = {location:'../assets/img/sparkler.jpg', alt: 'sparkeler image'};
// var imgTwo = asset_path('../assets/img/city.jpg');
// var imgThree = asset_path('../assets/img/boat.jpg');
// var imgFour = asset_path('../assets/img/sparkler.jpg');
// var imgFive = asset_path('../assets/img/city.jpg');

var Carosel = React.createClass({
  render: function (){
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return(
      <div>
        <Slider>
          <div><img src="{imgOne.location}" alt="{imgOne.alt}"/></div>
          <div><img src="{imgTwo}" alt="city"/></div>
          <div><img src="{imgThree}" alt="boat"/></div>
          <div><img src="{imgFour}" alt="sparkler"/></div>
          <div><img src="{imgFive}" alt="city"/></div>
        </Slider>
        <p className="text-center">
          <a href='https://react.rocks/example/react-slick'>react-slick</a>
        </p>
      </div>
    );
  }
});


module.exports = Carosel;
