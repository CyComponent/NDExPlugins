import React from 'react'

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card'

import RaisedButton from 'material-ui/RaisedButton'


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

    const titleStyle = {
      width: '100%',
      fontWeight: '300',
      wordWrap: 'break-word',
    }

    const actionStyle = {
      width: '17%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'

    }

    const networks = this.props.summaries.toArray()

    return (

       <div style={cardContainer}>

         {networks.map(N => (

            <Card style={cardStyle}>

              <CardMedia
                overlayContentStyle={{backgroundColor: 'rgba(100, 100, 100, 0.7)'}}
                overlay={

                  <div style={{display: 'flex'}}>
                    <div style={{width: '83%'}}>
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
                      />
                      <CardText
                        color={'#FFFFFF'}
                      >
                        {N.description}
                      </CardText>
                    </div>

                    <CardActions style={actionStyle}>
                      <RaisedButton
                        labelColor={'#666666'}
                        label="Add"
                        onClick={this.handleSelection.bind(this, N)}
                      />
                    </CardActions>
                  </div>
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
    console.log("Called error")
    this.setState({ error: true })
  }

  render() {

    if (this.state.error) {
      const imgStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40%',
        paddingTop: '2em',
        backgroundColor: '#DFDFDF',
        color: '#DDDDDD',
        fontSize: '4em'
      }

      return (
        <div style={imgStyle}>
          No Image
        </div>
      )
    } else {
      const imgStyle = {
        width: '100%',
        minWidth: 0,
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
