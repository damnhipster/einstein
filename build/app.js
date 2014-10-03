/** @jsx React.DOM */
var Einstein = React.createClass({displayName: 'Einstein',
  render: function () {
    return (
      React.DOM.div({id: "einstein"}, 
        React.DOM.h1(null, "Einstein will find who you're looking for"), 
        Ember(null)
      )
    );
  }
});

var Ember = React.createClass({displayName: 'Ember',
  render: function () {
    return (
      React.DOM.div(null, 
        React.DOM.h2(null, "Emberinos"), 
        React.DOM.ul(null, 
          React.DOM.li(null, "Aaron Chambers"), 
          React.DOM.li(null, "Hem Brahmbhatt (", GithubUser({name: "damnhipster"}), ")"), 
          React.DOM.li(null, "Chris Game")
        )
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
  Einstein(null),
  document.getElementById('app')
);
