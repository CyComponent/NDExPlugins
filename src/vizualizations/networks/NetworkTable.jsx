
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

  time(T) {
    var d = new Date(0)
    d.setUTCSeconds(T/1000.0)
    return d.toLocaleDateString()
  }

  modSortFunc(a, b, order) {
    if (order == "asc") {
      return a.modificationTime - b.modificationTime
    } else  {
      return b.modificationTime - a.modificationTime
    }
  }

  createSortFunc(a, b, order) {
    if (order == "asc") {
      return a.creationTime - b.creationTime
    } else  {
      return b.creationTime - a.creationTime
    }
  }

  getSelectedRows() {
    console.log(
      "Getting selected"
    )
    console.log(Object.keys(this.props.cart))
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
    const networkSummaries = this.props.networks.toArray()
    var networks = networkSummaries.map(N => {
      N.modificationDate = this.time(N.modificationTime)
      N.creationDate = this.time(N.creationTime)
      return N
    })
    const selectRow = {
      mode: 'checkbox',
      onSelect: this.handleSelection.bind(this, networkSummaries),
      selected: this.getSelectedRows(),
      search: true,
      multiColumnSearch: true,
      clickToSelect: true,
      striped: true
    }
    return (
      <div style={{ height: '95%' }}>
        <RaisedButton
          label="Clear all"
          onClick={this.clearAll}
        />
        <BootstrapTable
          data={networks}
          selectRow={selectRow}
          striped={true}
          height="95%"
          columnFilter={true}
        >
          <TableHeaderColumn dataField="externalId"
            width="400px"
            hidden={true}
            isKey={true}
            dataSort={true}
            columnFilter={true}
          >
            ID
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="name"
            dataSort={true}
            columnFilter={true}
          >
            Name
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="owner"
            dataSort={true}
            columnFilter={true}
          >
            Owner
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="visibility"
            dataSort={true}
            columnFilter={true}
          >
            Visibility
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="edgeCount"
            dataSort={true}
          >
            Edges
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="nodeCount"
            dataSort={true}
          >
            Nodes
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="creationDate"
            dataSort={true}
            sortFunc={this.createSortFunc.bind(this)}
          >
            Created
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="modificationDate"
            dataSort={true}
            sortFunc={this.modSortFunc.bind(this)}
          >
            Modified
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}