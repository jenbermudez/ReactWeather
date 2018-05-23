var React = require('react');

// ***simple presentational component, only has render function, can be refactored, see below***
// var WeatherMessage = React.createClass({

//     render: function () {
//         var { temp, location } = this.props;

//         return (
//             <h3>It's {temp} in {location}.</h3>
//         );
//     }
// });

var WeatherMessage = ({ temp, location }) => {
    return (
        <h3 className="text-center">It's {temp} in {location}.</h3>
    );
}

module.exports = WeatherMessage;