/** @jsx React.DOM */
var Einstein = React.createClass({
  render: function () {
    return (
      <div id='einstein'>
        <h1>Einstein will find who you're looking for</h1>
        <Ember people={this.props.data}/>
      </div>
    );
  }
});

var people = [
  { name: "Aaron Chambers", github: "aaronc" },
  { name: "Hem Brahmbhatt", github: "damnhipster" },
  { name: "Antonio Nalesso", github: "acnalesso" }
];

var Ember = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Emberinos</h2>
        <EmberinoList emberinos={this.props.people}/>
      </div>
    );
  }
});

var EmberinoList = React.createClass({
  render: function () {
    var emberinoNodes = this.props.emberinos.map(function (person) {
      return (
        <li>
          {person.name} (<GithubUser name={person.github}/>)
        </li>
      );
    });
    return (
      <ul>
        {emberinoNodes}
      </ul>
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
  <Einstein data={people}/>,
  document.getElementById('app')
);
