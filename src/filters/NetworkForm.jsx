import React from 'react'
import TextField from 'material-ui/TextField'

export default class NetworkForm extends React.Component {

  static getIcon() { return "device_hub" }

  render() {
    const style = {
      margin: '2%',
      marginBottom: 0,
      height: '80%',
      width: '95%',
      resize: 'none',
      border: 0,
      overflowY: 'auto'
    }
    return (
      <div style={style}>
        <TextField
          floatLabelText="Maximum node count"
          floatLabelFixed={false}
        />
        <TextField
          floatLabelText="Minimum node count"
          floatLabelFixed={false}
        />
        <TextField
          floatLabelText="Maximum edge count"
          floatLabelFixed={false}
        />
        <TextField
          floatLabelText="Maximum edge count"
          floatLabelFixed={false}
        />
      </div>
    )
  }

}
