import React, { useState, useContext } from 'react'
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  TextField,
  InputAdornment,
  Paper,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items
    },
  })

  const handleSearch = (e) => {
    let target = e.target
    setFilterFn({
      fn: (items) => {
        if (target.value === '') return items
        else
          return items.filter((x) =>
            x.lastName.toLowerCase().includes(target.value)
          )
      },
    })
  }

  return (
    <>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TextField
          label="Search employee"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            margin: '20px',
            width: '50%',
            marginTop: 3,
          }}
          onChange={handleSearch}
        />
        <TableContainer sx={{ paddingLeft: 2, paddingRight: 2 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <EmployeeTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {filterFn
                .fn(rows)
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
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ borderTop: '1px solid #9e9e9e' }}
        />
      </Paper>
    </>
  )
}

export default EmployeeTable
