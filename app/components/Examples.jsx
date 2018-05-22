var React = require('react');

// ****simple presentational component only with render function, can be refactored, see below****
// var Examples = React.createClass({
//     render: function () {
//         return (
//             <h3>Examples Component</h3>
//         );
//     }
// });

var Examples = (props) => {
    return (
        <div>
            <h3>Examples</h3>
            <p>Welcome to examples page!</p>
        </div>
    )
};

module.exports = Examples;