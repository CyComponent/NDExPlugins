
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


  modSortFunc(a, b, order) {
    if (order == "asc") {
      return new Date(a.modificationTime).getTime() - new Date(b.modificationTime).getTime()
    } else  {
      return new Date(b.modificationTime).getTime() - new Date(a.modificationTime).getTime()
    }
  }

  createSortFunc(a, b, order) {
    if (order == "asc") {
      return new Date(a.creationTime).getTime() - new Date(b.creationTime).getTime()
    } else  {
      return new Date(b.creationTime).getTime() - new Date(a.creationTime).getTime()
    }
  }

  getSelectedRows() {
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
    const networks = this.props.summaries.toArray()
    const selectRow = {
      mode: 'checkbox',
      onSelect: this.handleSelection.bind(this, networks),
      selected: this.getSelectedRows(),
      search: true,
      multiColumnSearch: true,
      clickToSelect: true,
      striped: true
    }
    return (
      <div style={{ height: '95%' }}>
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
            dataField="creationTime"
            dataSort={true}
            sortFunc={this.createSortFunc.bind(this)}
          >
            Created
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="modificationTime"
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
