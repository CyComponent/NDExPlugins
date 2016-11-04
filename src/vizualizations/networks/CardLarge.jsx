import React from 'react'

import {
  Card,
  CardMedia,
} from 'material-ui/Card'

import CardOverlayLarge from './CardOverlayLarge'


export default class CardLarge extends React.Component {

  static getIcon() { return "view_stream" }


  handleSelection(network) {
    this.props.addToCart(network.externalId, network)
  }


  render() {

    const cardContainer = {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflowY: 'scroll',
      overflowX: 'hidden'
    }

    const cardStyle = {
      margin: '0',
      marginRight: '1em',
      marginTop: '0.7em',
    }

    const networks = this.props.summaries.toArray()

    return (

       <div style={cardContainer}>

         {networks.map(N => (

            <Card style={cardStyle}>

              <CardMedia
                overlayContentStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
                overlay={
                  <CardOverlayLarge
                    network={N}
                    addToCart={this.props.addToCart}
                    removeFromCart={this.props.removeFromCart}
                    cart={this.props.cart}
                  />
                }
              >
                <NetworkImage N={N}/>
              </CardMedia>

            </Card>

            )
          )}
        </div>
    )
  }
}

class NetworkImage extends React.Component {

  constructor(props) {
    super(props)
    this.state = { error: false }
  }

  error = () => {
    this.setState({ error: true })
  }

  render() {

    if (this.state.error) {
      const imgStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '30%',
        minHeight: '250px',
        backgroundColor: '#DFDFDF',
        color: '#AAAAAA',
        fontSize: '5em',
      }

      return (
        <div style={imgStyle}>
          No Image
        </div>
      )
    } else {
      const imgStyle = {
        width: '100%',
        height: '95%',
        objectFit: 'cover'
      }

      return (
          <img
            src={"http://ci-dev-serv.ucsd.edu/" + this.props.N.externalId + ".png"}
            onError={this.error}
            style={imgStyle}
          />
      )
    }
  }
}
