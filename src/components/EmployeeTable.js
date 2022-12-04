import React, { useState, useContext } from 'react'
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  Paper,
} from '@mui/material'
import { EmployeeContext } from '../utilities/EmployeeContext'
import EmployeeTableHead from './EmployeeTableHead'

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function EmployeeTable() {
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('calories')
  //   const [selected, setSelected] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const { employee } = useContext(EmployeeContext)

  console.log(employee)

  const rows = employee

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  //   const handleSelectAllClick = (event) => {
  //     if (event.target.checked) {
  //       const newSelected = rows.map((n) => n.name)
  //       setSelected(newSelected)
  //       return
  //     }
  //     setSelected([])
  //   }

  //   const handleClick = (event, name) => {
  //     const selectedIndex = selected.indexOf(name)
  //     let newSelected = []

  //     if (selectedIndex === -1) {
  //       newSelected = newSelected.concat(selected, name)
  //     } else if (selectedIndex === 0) {
  //       newSelected = newSelected.concat(selected.slice(1))
  //     } else if (selectedIndex === selected.length - 1) {
  //       newSelected = newSelected.concat(selected.slice(0, -1))
  //     } else if (selectedIndex > 0) {
  //       newSelected = newSelected.concat(
  //         selected.slice(0, selectedIndex),
  //         selected.slice(selectedIndex + 1)
  //       )
  //     }

  //     setSelected(newSelected)
  //   }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <EmployeeTableHead
              //   numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              //   onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {rows
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" variant="head">
                      {row.lastName}
                    </TableCell>
                    <TableCell align="right">{row.firstName}</TableCell>
                    <TableCell align="right">{row.startDate}</TableCell>
                    <TableCell align="right">{row.department}</TableCell>
                    <TableCell align="right">{row.dateOfBirth}</TableCell>
                    <TableCell align="right">{row.street}</TableCell>
                    <TableCell align="right">{row.city}</TableCell>
                    <TableCell align="right">{row.state}</TableCell>
                    <TableCell align="right">{row.zip}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  )
}

export default EmployeeTable
