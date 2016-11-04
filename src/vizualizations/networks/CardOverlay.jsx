import React, {Component, PropTypes} from 'react'

import AddIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank'
import AddedIcon from 'material-ui/svg-icons/toggle/check-box'

const SELECTED_COLOR = '#FFAF00'
const UNSELECTED_COLOR = '#FFFFFF'


class CardOverlay extends Component {

  isInCart = id => (this.props.cart.hasOwnProperty(id))

  handleSelection = () => {
    const network = this.props.network;
    const inCart = this.isInCart(network.externalId)

    console.log(inCart)

    if(!inCart) {
      this.props.addToCart(network.externalId, network)
    } else {
      this.props.removeFromCart(network.externalId)
    }
  }

  getIcon = () => {

    const inCart = this.isInCart(this.props.network.externalId)
    if(inCart) {
      return (<AddedIcon color={this.getColor()} />)
    } else {
      return (<AddIcon color={this.getColor()} />)
    }
  }

  getColor = () => {
    const inCart = this.isInCart(this.props.network.externalId)
    if(inCart) {
      return SELECTED_COLOR
    } else {
      return UNSELECTED_COLOR
    }
  }

  render() {
    return(<div></div>);
  }
}


CardOverlay.propTypes = {
  network: PropTypes.object,
  addToCart: PropTypes.function,
  removeFromCart: PropTypes.function,
  cart: PropTypes.object
};


export default CardOverlay