import React from "react";
import PropTypes from "prop-types";

function Greeting({ name = "Guest" }) {
  return <h2 className="greeting">Hello, {name}!</h2>;
}
class GreetingClass extends React.Component {
  render() {
    return <h2 className="greeting">Hello, {this.props.name || "Guest"}!</h2>;
  }
}
Greeting.defaultProps = {
  name: "Guest",
};
GreetingClass.defaultProps = {
  name: "Guest",
};
Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};
GreetingClass.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Greeting;
export { GreetingClass };
