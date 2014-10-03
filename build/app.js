/** @jsx React.DOM */
var Einstein = React.createClass({displayName: 'Einstein',
  render: function () {
    return (
      React.DOM.div({id: "einstein"}, 
        React.DOM.h1(null, "Einstein will find who you're looking for"), 
        React.DOM.h2(null, "Emberinos"), 
        React.DOM.ul(null, 
          React.DOM.li(null, "Aaron Chambers"), 
          React.DOM.li(null, "Hem Brahmbhatt (", React.DOM.a({href: "http://github.com/damnhipster"}, "damnhipster"), ")"), 
          React.DOM.li(null, "Chris Game")
        )
      )
    );
  }
});

React.renderComponent(
  Einstein(null),
  document.getElementById('app')
);
