/** @jsx React.DOM */
var Einstein = React.createClass({displayName: 'Einstein',
  render: function () {
    return (
      React.DOM.h1(null, "Einstein will find who you're looking for")
    );
  }
});

React.renderComponent(
  Einstein(null),
  document.getElementById('einstein')
);
