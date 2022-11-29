import React, { useContext } from 'react'
import { Container } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import EnhancedTableHead from '../components/TableHead'
import { EmployeeContext } from '../utilities/EmployeeContext'

// const rows = [
//   {
//     id: 1,
//     firstName: 'Mac',
//     lastName: 'Clark',
//     startDate: '12/12/2020',
//     department: 'Marketing',
//     dateOfBirth: '12/01/1980',
//     street: 'les peupliers',
//     city: 'Marseille',
//     state: 'BDR',
//     zip: '13000',
//   },
//   {
//     id: 2,
//     firstName: 'John',
//     lastName: 'Doe',
//     startDate: '12/12/2020',
//     department: 'Marketing',
//     dateOfBirth: '12/01/1980',
//     street: 'les peupliers',
//     city: 'Marseille',
//     state: 'BDR',
//     zip: '13000',
//   },
//   {
//     id: 3,
//     firstName: 'Melvin',
//     lastName: 'Stark',
//     startDate: '12/12/2020',
//     department: 'Marketing',
//     dateOfBirth: '12/01/1980',
//     street: 'les peupliers',
//     city: 'Marseille',
//     state: 'BDR',
//     zip: '13000',
//   },
// ]

export default function BasicTable() {
  const { employee } = useContext(EmployeeContext)

  console.log(employee)

  const rows = [
    // {
    //   id: 3,
    //   firstName: 'Melvin',
    //   lastName: 'Stark',
    //   startDate: '12/12/2020',
    //   department: 'Marketing',
    //   dateOfBirth: '12/01/1980',
    //   street: 'les peupliers',
    //   city: 'Marseille',
    //   state: 'BDR',
    //   zip: '13000',
    // },
    employee,
  ]

  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: '80px',
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <EnhancedTableHead />
          <TableBody>
            {rows.map((row, index) => (
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
    </Container>
  )
}
