var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleStatusChange', () => {
    it('should set state to started', () => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      expect(timer.state.timerStatus).toBe('started');
    });

    it('should set state to paused', () => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('paused');

      expect(timer.state.timerStatus).toBe('paused');
    });

    it('should set state to stopped', () => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('stopped');

      expect(timer.state.timerStatus).toBe('stopped');
    });
  });

  describe('Timer Change ', () => {
    it('should increment timer on started status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');
      setTimeout(() => {
        expect(timer.state.count).toBe(3);
        done();
      }, 3000);
    });

    it('should pause timer on paused status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');
      setTimeout(() => {
        timer.handleStatusChange('paused');
        expect(timer.state.count).toBe(2);
        done();
      }, 2000);
    });

    it('should reset timer on stopped status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('stopped');
      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        done();
      }, 3000);
    });
  });
});
