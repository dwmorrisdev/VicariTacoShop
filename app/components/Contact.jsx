var React = require('react');
var ContactForm = require('ContactForm');


var Contact = React.createClass({
  getInitialState: function () {
    return {
      email: true,
      question: true,
      submitted: null
    }
  },
  render: function () {
    return (
      <div >
        <h1 className="text-center page-title">Contact</h1>
        <div className="text-center">
          <h3>Physical Address:</h3>
          <p>V Taco<br/>
             someNumber Cruise St<br/>
             Corinth, MS 38834
          </p>
          <h3>Call:</h3>
          <p><a href="tel:xxx-xxx-xxxx">662-xxx-xxxx</a></p>
          <h3>Email:</h3>
          <p><a href="mailto:thisguy@yadayada.com">yadayada@thisplace.com</a></p>
        </div>
        <div>
          <ContactForm/>
        </div>


      </div>
    )
  }


});


module.exports = Contact;
