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
                overlayContentStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
                overlay={

                  <div style={{display: 'flex', maxHeight: '250px', paddingBottom: '1em'}}>
                    <div style={{width: '83%', overflowY: 'auto'}}>
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
                        <section>
                          Nodes: {N.nodeCount} / Edges: {N.edgeCount}
                        </section>
                        <section>
                          {N.description}
                        </section>
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
