var React = require('react');

var CountdownForm = React.createClass({
  onSubmit : function(e){
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    /*  Regular Expression
    *  / / => Contains RE
    *  [0-9] => Any "single" character from 0 to 9
    *  [0-9]* => Any "multiple" number of characters
    *  ^[0-9]* => ^ lets RE know that, it starts from 0-9 (By default is 'a')
    *  ^[0-9]*$ => $ lets RE know that, it will end with 0-9
    */
    var errorMessage;
    if(strSeconds.match(/^[0-9]*$/) && parseInt(strSeconds) < 3600){
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
    else if(strSeconds.match(/^[0-9]*$/) && parseInt(strSeconds) > 3599){
      this.refs.seconds.value = '';
      errorMessage = "Error : Please enter seconds less than 3600"
    }
    else{
      this.refs.seconds.value = '';
      errorMessage = "Error : Please enter valid input"
    }
    document.getElementById("errorMessageId").innerHTML = errorMessage;
  },

  render: function(){
    return(
      <div>
        <form ref = "form" onSubmit = {this.onSubmit} className = "countdown-form">
          <input type="text" placeholder = "Enter time in seconds" ref ="seconds"/>
          <button className = "button expanded">Start</button>
          <h4 id = "errorMessageId" className = "page-title"></h4>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
