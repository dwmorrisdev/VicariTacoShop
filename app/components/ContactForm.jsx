var React = require('react');

var ContactForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
  },
  render: function () {
    return (
        <div>
          <h3>Send us a message.</h3>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" placeholder="First Name" ref="fname"/>
            <input type="text" placeholder="Last Name" ref="lname"/>
            <input type="email" placeholder="iam@email.com" ref="email"/>
            <input type="textarea" placeholder="Enter message here." ref="contactMessage"/>
            <button className="button">Submit</button>
          </form>
        </div>
    );
  }
});

module.exports = ContactForm;
