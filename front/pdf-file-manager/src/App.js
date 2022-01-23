import './App.css';
import Button from '@material-ui/core/Button';

import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { useTable } from 'react-table'


function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <TableCell {...column.getHeaderProps()}>
                {column.render('Header')}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableCell>
                )
              })}
            </TableRow>
          )
        })}
      </TableBody>
    </MaUTable>
  )
}

function App() {
    const columns = React.useMemo(
    () => [
      {
        Header: 'File Name',
        accessor: 'filename',
      },
      {
        Header: 'Import Date',
        accessor: 'importDate',
      },
      {
        Head: 'Tags',
        accessor: 'tags',
      },
    ],
    []
  )
   
  const data = [{filename: "file1", importDate: "2021/01/01", tags: ["tag1", "tag2"]}]

  return (
    <div className="App">
      <header>
      </header>
        <h1>
            PDF File Manager
        </h1>
        <label htmlFor="upload-button">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
        <CssBaseline />
        <Table columns={columns} data={data} />
      </label>
    </div>
  );
}

export default App;
