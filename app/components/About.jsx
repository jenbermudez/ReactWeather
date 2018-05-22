var React = require('react');

// *****simple presentational component only has render function can be refactored, see below***
// var About = React.createClass({
//     render: function () {
//         return (
//             <h3>About Component</h3>
//         );
//     }
// });

// stateless function component
var About = (props) => {
    return (
        <h3>About Component</h3>
    )
};

module.exports = About;