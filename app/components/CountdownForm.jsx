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

    if(strSeconds.match(/^[0-9]*$/)){
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },

  render: function(){
    return(
      <div>
        <form ref = "form" onSubmit = {this.onSubmit} className = "countdown-form">
          <input type="text" placeholder = "Enter time in seconds" ref ="seconds"/>
          <button className = "button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
