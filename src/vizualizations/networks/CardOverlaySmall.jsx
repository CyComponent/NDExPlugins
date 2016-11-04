import React, {Component, PropTypes} from 'react'

import IconButton from 'material-ui/IconButton'

import {
  CardActions,
  CardTitle,
} from 'material-ui/Card'

import CardOverlay from './CardOverlay'


class CardOverlaySmall extends CardOverlay {

  render() {
    const network = this.props.network;

    const titleStyle = {
      width: '100%',
      fontSize: '1em',
      lineHeight: '1.1em',
      fontWeight: '300',
      wordWrap: 'break-word',
      color: this.getColor()
    }

    const actionStyle = {
      width: '10%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'

    }

    const subStyle = {
      fontSize: '0.9em',
      marginTop: '0.2em',
      color: this.getColor()
    }

    return (
      <div style={{display: 'flex', height: '9em', paddingBottom: '1em'}}>
        <div style={{width: '90%', overflowY: 'hidden'}}>
          <CardTitle
            onClick={this.handleSelection}
            title={network.name}
            titleColor={'#FFFFFF'}
            titleStyle={titleStyle}
            subtitle={
              <div>
                Owner: {network.owner}, Created: {network.creationTime}, Modified: {network.modificationTime}
              </div>
            }
            subtitleColor={'#DDDDDD'}
            subtitleStyle={subStyle}
          />
        </div>
        <CardActions style={actionStyle}>
          <IconButton
            iconStyle={{color: '#FFFFFF', marginRight: '0.3em'}}
            onClick={this.handleSelection}
          >
            {this.getIcon()}
          </IconButton>
        </CardActions>
      </div>
    )
  }
}


export default CardOverlaySmall
