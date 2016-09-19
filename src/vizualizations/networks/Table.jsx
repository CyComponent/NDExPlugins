
import React from 'react'

import { Map } from 'immutable'

import {
  BootstrapTable,
  TableHeaderColumn
} from 'react-bootstrap-table'

import RaisedButton from 'material-ui/RaisedButton'

import 'react-bootstrap-table/css/react-bootstrap-table.css'
import '../../style/react-bootstrap-table-helper'

export default class Table extends React.Component {

  static getIcon() { return "reorder" }

  getSelectedRows() {
    return Object.keys(this.props.cart)
  }

  handleSelection(NWS, NW, isSelected) {
    if (!isSelected) {
      this.props.removeFromCart(NW.externalId)
    } else {
      this.props.addToCart(NW.externalId, NW)
    }
  }

  clearAll = () => {
    this.props.cartActions.clear()
    this.forceUpdate()
  }

  render() {
    const nameStyle = {
      wordWrap: 'break-line',
      width: 40
    }
    const networks = this.props.summaries.toArray()
    return (
      <div style={{ height: '95%' }}>
        <table>
          <tr>
            <th align="left">Name</th>
            <th>Owner</th>
            <th>Visibility</th>
            <th>Edges</th>
            <th>Nodes</th>
            <th>Created</th>
            <th>Modified</th>
          </tr>
            {networks.map(N => (
              <tr>
                <td style={nameStyle}>{N.name}</td>
                <td>{N.owner}</td>
                <td>{N.visiblity}</td>
                <td>{N.edgeCount}</td>
                <td>{N.creationTime}</td>
                <td>{N.modificatonTime}</td>
              </tr>
              )
            )}
        </table>
      </div>
    )
  }
}
