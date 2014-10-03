/** @jsx React.DOM */
var Einstein = React.createClass({
  render: function () {
    return (
      <h1>Einstein will find who you're looking for</h1>
    );
  }
});

React.renderComponent(
  <Einstein/>,
  document.getElementById('einstein')
);
