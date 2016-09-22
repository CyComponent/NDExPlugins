import React from 'react'

import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton'
import AddIcon from 'material-ui/svg-icons/action/add-shopping-cart'


import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
} from 'material-ui/Card'


export default class CardSmall extends React.Component {

  static getIcon() { return "view_module" }


  handleSelection(network) {
    console.log('* Add to cart: ')
    console.log(network)
    this.props.addToCart(network.externalID, network)
  }


  render() {

    const networks = this.props.summaries.toArray()


    const cardContainer = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItem: 'center',
      flexDirection: 'row',
      height: '100%',
      overflowY: 'scroll',
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


    const titleStyle = {
      width: '100%',
      fontSize: '1em',
      lineHeight: '1.1em',
      fontWeight: '300',
      wordWrap: 'break-word',
    }

    const actionStyle = {
      width: '10%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'

    }

    const subStyle = {
      fontSize: '0.9em',
      marginTop: '0.2em'
    }


    return (

      <div style={cardContainer}>

        {
          networks.map(N => (

            <Card style={cardStyle}>

              <CardMedia
                overlayContentStyle={{backgroundColor: 'rgba(100, 100, 100, 0.7)'}}
                overlay={
                  <div style={{display: 'flex'}}>
                    <div style={{width: '90%'}}>
                      <CardTitle
                        title={N.name}
                        titleColor={'#FFFFFF'}
                        titleStyle={titleStyle}
                        subtitle={
                          <div>
                            Owner: {N.owner}, Created: {N.creationTime}, Modified: {N.modificationTime}
                          </div>
                        }
                        subtitleColor={'#DDDDDD'}
                        subtitleStyle={subStyle}
                      />
                    </div>
                    <CardActions style={actionStyle}>
                      <IconButton
                        iconStyle={{color: '#FFFFFF'}}
                        onClick={this.handleSelection.bind(this, N)}
                      >
                        <AddIcon/>
                      </IconButton>
                    </CardActions>
                  </div>
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
        color: '#CCCCCC',
        width: '100%',
        minWidth: '280px',
        minHeight: '200px',
        fontSize: '1em',
      }

      return (
        <div style={imgStyle}>
          No Image
        </div>
      )
    } else {
      const imgStyle = {
        width: '100%',
        minWidth: '280px',
        maxHeight: '40%',
        margin: 0,
        padding: 0
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
