
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

  idFormat(cell, row) {
    return '<a href="http://www.ndexbio.org/#/newNetwork/' + cell + '">View</a>'
  }


  render() {
    const networks = this.props.summaries.toArray()
    return (
      <div style={{ height: '95%', overflow: 'scroll' }}>
        <BootstrapTable
          data={networks}
          striped={true}
          columnFilter={true}
          height="95%"
        >
          <TableHeaderColumn dataField="externalId"
            width="200px"
            isKey={true}
            columnFilter={true}
            dataFormat={this.idFormat}
          >
            View
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
