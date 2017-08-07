// Code Product Component Here
import React from "react"
import PropTypes from "prop-types"

class Product extends React.Component{
  render(){
    return (
      <div>
        <p>name: {this.props.name}</p>
        <p>producer: {this.props.producer}</p>
        <p>hasWatermark: {this.props.hasWatermark}</p>
        <p>color: {this.props.color}</p>
        <p>weight: {this.props.weight}</p>
      </div>
    );
  }
}

function validateWeight(props, propName, componentName){
  var prop = props["weight"];
  if (prop < 80 || prop > 300) {
    return new Error("Prop must exist and be a number!")
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  hasWatermark: PropTypes.bool,
  producer: PropTypes.string,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.number.isRequired, validateWeight
}

export default Product
