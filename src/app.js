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
      <div>
        <h2>Emberinos</h2>
        <ul>
          <li>Aaron Chambers</li>
          <li>Hem Brahmbhatt (<GithubUser name="damnhipster"/>)</li>
          <li>Chris Game</li>
        </ul>
      </div>
    );
  }
});

var GithubUser = React.createClass({
  render: function () {
    var link = "http://github.com/" + this.props.name;
    return (
      <a href={link}>{this.props.name}</a>
    );
  }
});

React.renderComponent(
  <Einstein/>,
  document.getElementById('app')
);
