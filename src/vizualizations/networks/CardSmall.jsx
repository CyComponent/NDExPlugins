import React from 'react'
import CardOverlaySmall from './CardOverlaySmall'
import {
  Card,
  CardMedia,
} from 'material-ui/Card'


export default class CardSmall extends React.Component {

  static getIcon = () => ("view_module")

  render() {

    const networks = this.props.summaries.toArray()

    const cardContainer = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItem: 'center',
      flexDirection: 'row',
      height: '100%',
      overflowY: 'auto',
      overflowX: 'hidden'
    }

    const cardStyle = {
      margin: '0',
      padding: '0',
      marginTop: '0.7em',
      marginRight: '0.5em',
      flex: '1',
      alignSelf: 'flex-end'
    }



    return (

      <div style={cardContainer}>
        {
          networks.map(N => (
            <Card style={cardStyle}>
              <CardMedia
                overlayContentStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
                overlay={
                  <CardOverlaySmall
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
          ))
        }
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
        backgroundColor: '#DFDFDF',
        color: '#AAAAAA',
        width: '100%',
        height: '35%',
        minWidth: '200px',
        fontSize: '3em',
      }

      return (
        <div style={imgStyle}>
          No Image
        </div>
      )
    } else {
      const imgStyle = {
        width: '100%',
        height: '35%',
        minWidth: '200px',
        margin: 0,
        padding: 0,
        objectFit: 'cover'
      }

      return (
        <img
          src={"http://storage.cytoscape.io/images/" + this.props.N.externalId + ".png"}
          onError={this.error}
          style={imgStyle}
        />
      )
    }
  }
}
