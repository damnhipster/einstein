/** @jsx React.DOM */
var Einstein = React.createClass({displayName: 'Einstein',
  render: function () {
    return (
      React.DOM.div({id: "einstein"}, 
        React.DOM.h1(null, "Einstein will find who you're looking for"), 
        Ember({people: this.props.data})
      )
    );
  }
});

var people = [
  { name: "Aaron Chambers", github: "aaronc" },
  { name: "Hem Brahmbhatt", github: "damnhipster" },
  { name: "Antonio Nalesso", github: "acnalesso" }
];

var Ember = React.createClass({displayName: 'Ember',
  render: function () {
    return (
      React.DOM.div(null, 
        React.DOM.h2(null, "Emberinos"), 
        EmberinoList({emberinos: this.props.people})
      )
    );
  }
});

var EmberinoList = React.createClass({displayName: 'EmberinoList',
  render: function () {
    var emberinoNodes = this.props.emberinos.map(function (person) {
      return (
        React.DOM.li(null, 
          person.name, " (", GithubUser({name: person.github}), ")"
        )
      );
    });
    return (
      React.DOM.ul(null, 
        emberinoNodes
      )
    );
  }
});


var GithubUser = React.createClass({displayName: 'GithubUser',
  render: function () {
    var link = "http://github.com/" + this.props.name;
    return (
      React.DOM.a({href: link}, this.props.name)
    );
  }
});

React.renderComponent(
  Einstein({data: people}),
  document.getElementById('app')
);
