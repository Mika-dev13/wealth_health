import React from 'react'
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Box,
} from '@mui/material'
import { visuallyHidden } from '@mui/utils'

const headCells = [
  {
    id: 'lastName',
    numeric: false,
    disablePadding: true,
    label: 'Last Name',
  },
  {
    id: 'firstName',
    numeric: true,
    disablePadding: false,
    label: 'First Name',
  },
  {
    id: 'startDate',
    numeric: true,
    disablePadding: false,
    label: 'Start Date',
  },
  {
    id: 'department',
    numeric: true,
    disablePadding: false,
    label: 'Department',
  },
  {
    id: 'dateOfBirth',
    numeric: true,
    disablePadding: false,
    label: 'Date of Birth',
  },
  {
    id: 'street',
    numeric: true,
    disablePadding: false,
    label: 'Street',
  },
  {
    id: 'city',
    numeric: true,
    disablePadding: false,
    label: 'City',
  },
  {
    id: 'state',
    numeric: true,
    disablePadding: false,
    label: 'State',
  },
  {
    id: 'zip',
    numeric: true,
    disablePadding: false,
    label: 'Zip Code',
  },
]

function EmployeeTableHead(props) {
  const { order, orderBy, onRequestSort } = props

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.id === 'lastName' ? 'left' : 'right'}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default EmployeeTableHead
