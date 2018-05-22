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
        <div>
            <h3>About</h3>
            <p>Welcome to the About page!</p>
        </div>
    )
};

module.exports = About;