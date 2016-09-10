import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'

export default class TextBox extends React.Component {

  static getIcon() { return "note" }

  handleChange(event) {
    this.props.updateQuery(event.target.value)
  }

  clear() {
    this.props.updateQuery("")
  }

  render() {
    const boxStyle={
      height: '100%',
      width: '100%',
    }
    const textStyle = {
      margin: '2%',
      marginTop: '5%',
      marginBottom: 0,
      height: '90%',
      resize: 'none',
      border: 0,
      fontSize: 20,
      overflowY: 'auto'
    }
    return (
        <div style={boxStyle}>
          <textarea
            style={textStyle}
            placeholder="Enter your search terms here..."
            value={this.props.query}
            onChange={this.handleChange.bind(this)}
          />
          <RaisedButton
            style={{ margin: 0, padding: 0 }}
            onClick={this.clear.bind(this)}
            label="Clear"
            primary={true}
            fullWidth={true}
          />
        </div>
    )
  }

}
