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
        <div>
          <h3>Physical Address:</h3>
          <p>Vicari Taco Shop<br/>
             someNumber Cruise St<br/>
             Corinth, MS 38834
          </p>
          <h3>Call:</h3>
          <p>662-xxx-xxxx</p>
          <h3>Email:</h3>
          <p>yadayada@thisplace.com</p>
        </div>
        <div>
          <ContactForm/>
        </div>


      </div>
    )
  }


});


module.exports = Contact;
