import React from 'react'

class TextBox extends React.Component {

  static const icon = "reorder"

  handleChange(event) {
    this.props.fieldActions.updateQuery(event.target.value)
  }

  render() {
    const style = {
      margin: '2%',
      marginTop: '5%',
      marginBottom: 0,
      height: '80%',
      width: '95%',
      resize: 'none',
      border: 0,
      fontSize: 20,
      overflowY: 'auto'
    }
    return (
        <textarea
          style={style}
          placeholder="Enter your search terms here..."
          value={this.props.fields.get('query')}
          onChange={this.handleChange.bind(this)}
        />
    )
  }
