var React = require('react');
var Nav = require('Nav');
/*Arrow function
*/
var Main = (props) => {
  return(
    <div>
      <div>
        <div>
          <Nav></Nav>
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
