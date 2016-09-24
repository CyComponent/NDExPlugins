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

                overlayContentStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
                overlay={
                  <div style={{display: 'flex', height: '8.5em', paddingBottom: '1em'}}>
                    <div style={{width: '90%', overflowY: 'scroll'}}>
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
          src={"http://ci-dev-serv.ucsd.edu/" + this.props.N.externalId + ".png"}
          onError={this.error}
          style={imgStyle}
        />
      )
    }
  }
}
