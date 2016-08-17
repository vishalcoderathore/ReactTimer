var React = require('react');
var Controls = require('Controls');
var Clock = require('Clock');

var Timer = React.createClass({
  getInitialState : function(){
    return{
      count : 0,
      timerStatus : 'stopped'
    };
  },
  // Is called after any props or state update
  componentDidUpdate : function(prevProps, prevState){
      if(this.state.timerStatus !== prevState.timerStatus){
        switch(this.state.timerStatus){
          case 'started':
          this.handleStart();
          break;
          case 'stopped' :
          this.setState({
           count: 0
         });
         case 'paused' :
         clearInterval(this.timer)
         this.timer = undefined;
         break;
       }
     }
  },
  componentWillUnmount : function(){
      clearInterval(this.timer)
  },
  handleStart : function(){

       this.timer = setInterval(() => {
         var upperLimit = this.state.count + 1;
         if(upperLimit < 3600){
           this.setState({
             count : this.state.count + 1
           });
         }
         else{
           this.handleStatusChange('stopped');
         }
       }, 1000);
   },
  handleStatusChange : function(newTimerStatus){
    this.setState({
      timerStatus: newTimerStatus
    });
  },
  render : function(){
    var {count, timerStatus} = this.state;
    return(
      <div>
      <h1 className = "page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus = {timerStatus} onStatusChange = {this.handleStatusChange}/>
      </div>
    );
  }
});

module.exports = Timer;
