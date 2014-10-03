/** @jsx React.DOM */
var Einstein = React.createClass({
  render: function () {
    return (
      <div id='einstein'>
        <h1>Einstein will find who you're looking for</h1>
        <Ember/>
      </div>
    );
  }
});

var Ember = React.createClass({
  render: function () {
    return (
      <h2>Emberinos</h2>
      <ul>
        <li>Aaron Chambers</li>
        <li>Hem Brahmbhatt (<a href="http://github.com/damnhipster">damnhipster</a>)</li>
        <li>Chris Game</li>
      </ul>
    );
  }
});

React.renderComponent(
  <Einstein/>,
  document.getElementById('app')
);
