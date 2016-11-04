import React from 'react'
import IconButton from 'material-ui/IconButton'

import {
  CardActions,
  CardTitle,
  CardText
} from 'material-ui/Card'

import CardOverlay from './CardOverlay'


class CardOverlayLarge extends CardOverlay {

  render() {
    const network = this.props.network;

    const titleStyle = {
      width: '100%',
      fontSize: '1.5em',
      fontWeight: '300',
      wordWrap: 'break-word',
      margin: '0',
      color: this.getColor()
    }

    const actionStyle = {
      width: '3%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: this.getColor()

    }

    const iconStyle = {
      color: this.getColor()
    }

    return (
      <div style={{display: 'flex', maxHeight: '250px', paddingBottom: '1em', margin: '0'}}>

        <div style={{width: '95%', overflowY: 'auto'}}>
          <CardTitle
            title={network.name}
            titleColor={'#FFFFFF'}
            titleStyle={titleStyle}
            subtitle={
              <div>
                Owner: {network.owner}, Created: {network.creationTime}, Modified: {network.modificationTime}
              </div>
            }
            subtitleColor={this.getColor()}
          />

          <CardText color={this.getColor()}>
            <section>
              Nodes: {network.nodeCount} / Edges: {network.edgeCount}
            </section>
            <section>
              {network.description}
            </section>
          </CardText>
        </div>

        <CardActions style={actionStyle}>
          <IconButton
            iconStyle={iconStyle}
            onClick={this.handleSelection}
          >
            {this.getIcon()}
          </IconButton>
        </CardActions>
      </div>
    )
  }
}


export default CardOverlayLarge

