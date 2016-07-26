import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'

export default class Spinner extends React.Component {

  constructor(props) {super(props)}

  render() {
    return (
      <div>
        <CircularProgress
          size={3}
          style={{
            margin: '45%',
            marginTop: '35%'
          }}
        />
      </div>
    )
  }

}
