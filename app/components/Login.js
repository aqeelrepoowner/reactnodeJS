/** @jsx React.DOM */
var React = require('react/addons');
/* create factory with griddle component 
var Griddle = React.createFactory(require('griddle-react'));

var fakeData = require('../data/fakeData.js').fakeData;
var columnMeta = require('../data/columnMeta.js').columnMeta;*/
var resultsPerPage = 20;

var Login = React.createClass({

      componentDidMount: function () {
        console.log(fakeData);
      },
      render: function () {
        return (
          <div id="table-area">
            
          </div>
        )
      }
});

/* Module.exports instead of normal dom mounting */
module.exports = Login;