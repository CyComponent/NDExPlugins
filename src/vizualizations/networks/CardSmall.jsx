
import {GridList, GridTile} from 'material-ui/GridList'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
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

export default class CardSmall extends React.Component {

  static getIcon() { return "view_module" }

  handleSelection(network) {
    this.props.addToCart(network.externalID, network)
  }

  render() {
    const cardStackStyle = {
      height: '95%'
    }
    var networks = this.props.summaries.toArray()
    console.log(networks)
    return (
     <div style = {cardStackStyle}>
       <div style={{
         overflow: 'scroll',
         height: '95%',
         display: 'flex',
         flexWrap: 'wrap'
       }}>
         {networks.map(N => (
           <Card style={{ margin: '20px', width: '255', flex: '1' }}>
             <CardHeader
               title={"Created on " + N.creationTime}
               subtitle={"Modified on " + N.modificationTime}
             />
             <CardMedia>
               <NetworkImage N={N}/>
             </CardMedia>
             <CardTitle title={
               <p style={{
                 wordWrap: 'break-word',
                 fontSize: '14px',
                 lineHeight: '16px'
               }}>{N.name}</p>
             } subtitle={N.owner}/>
             <CardActions>
               <RaisedButton
                 label="Add to Cart"
                 primary={true}
                 onClick={this.handleSelection.bind(this, N)}
               />
             </CardActions>
           </Card>
          ))}
        </div>
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
    var style = {}
    if (this.state.error) {
      style = { display: 'none' }
    }
    return (
      <img
        src={"http://ci-dev-serv.ucsd.edu/" + this.props.N.externalId + ".png"}
        onError={this.error}
        style={Object.assign({ width: '50%', margin: 'auto', display: 'block', minWidth: 0 }, style)}
      />
    )

  }

}
