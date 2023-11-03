// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import Paper from '@mui/material/Paper'
import { visuallyHidden } from '@mui/utils'
import Checkbox from '@mui/material/Checkbox'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableContainer from '@mui/material/TableContainer'
import TableSortLabel from '@mui/material/TableSortLabel'
import TablePagination from '@mui/material/TablePagination'


type Order = 'asc' | 'desc'

interface Data {
  starting_point: string
  travel_route: string
  end_point: string
  status: string
}

interface HeadCell {
  disablePadding: boolean
  id: keyof Data
  label: string
  numeric: boolean
}

interface EnhancedTableProps {
  numSelected: number
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  order: Order
  orderBy: string
  rowCount: number
}


const createData = (starting_point: string, travel_route: string, end_point: string, status: string): Data => {
  return { starting_point, travel_route, end_point, status }
}

const rows = [
  createData('Jl. Semangka', 'https://maps.app.goo.gl/uStLWFUP4zFSdMhs7', 'Jl. Melon', 'success'),
  createData('Jl. Jeruk', 'https://maps.app.goo.gl/uStLWFUP4zFSdMhs7', 'Jl. Nanas', 'success'),
  createData('Jl. Rambutan', 'https://maps.app.goo.gl/uStLWFUP4zFSdMhs7', 'Jl. Jambu', 'success'),
  createData('Jl. Jambu', 'https://maps.app.goo.gl/uStLWFUP4zFSdMhs7', 'Jl. Rambutan', 'success'),
  createData('Jl. Nanas', 'https://maps.app.goo.gl/uStLWFUP4zFSdMhs7', 'Jl. Jeruk', 'success'),
  createData('Jl. Melon', 'https://maps.app.goo.gl/uStLWFUP4zFSdMhs7', 'Jl. Semangka', 'success'),
]
  

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }

  return 0
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order

    return a[1] - b[1]
  })

  return stabilizedThis.map(el => el[0])
}

const headCells: readonly HeadCell[] = [
  {
    id: 'starting_point',
    numeric: false,
    disablePadding: true,
    label: 'Starting Point'
  },
  {
    id: 'travel_route',
    numeric: true,
    disablePadding: false,
    label: 'Travel Route'
  },
  {
    id: 'end_point',
    numeric: true,
    disablePadding: false,
    label: 'End Point'
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status'
  },
]

function EnhancedTableHead(props: EnhancedTableProps) {
  // ** Props
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props
  const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            onChange={onSelectAllClick}
            checked={rowCount > 0 && numSelected === rowCount}
            inputProps={{ 'aria-label': 'select all desserts' }}
            indeterminate={numSelected > 0 && numSelected < rowCount}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              onClick={createSortHandler(headCell.id)}
              direction={orderBy === headCell.id ? order : 'asc'}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
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



const TrackingTableHistory = () => {
  // ** States
  const [page, setPage] = useState<number>(0)
  const [order, setOrder] = useState<Order>('asc')
  const [rowsPerPage, setRowsPerPage] = useState<number>(5)
  const [orderBy, setOrderBy] = useState<keyof Data>('travel_route')
  const [selected, setSelected] = useState<readonly string[]>([])

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.starting_point)
      setSelected(newSelecteds)

      return
    }
    setSelected([])
  }

  const handleClick = (event: React.MouseEvent<unknown>, starting_point: string) => {
    const selectedIndex = selected.indexOf(starting_point)
    let newSelected: readonly string[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, starting_point)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
    }

    setSelected(newSelected)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const isSelected = (starting_point: string) => selected.indexOf(starting_point) !== -1

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750 }} aria-labelledby='tableTitle'>
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            rowCount={rows.length}
            numSelected={selected.length}
            onRequestSort={handleRequestSort}
            onSelectAllClick={handleSelectAllClick}
          />
          <TableBody>
            {/* if you don't need to support IE11, you can replace the `stableSort` call with: rows.slice().sort(getComparator(order, orderBy)) */}
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(row.starting_point)
                const labelId = `enhanced-table-checkbox-${index}`

                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.starting_point}
                    role='checkbox'
                    selected={isItemSelected}
                    aria-checked={isItemSelected}
                    onClick={event => handleClick(event, row.starting_point)}
                  >
                    <TableCell padding='checkbox'>
                      <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                    </TableCell>
                    <TableCell component='th' id={labelId} scope='row' padding='none'>
                      {row.starting_point}
                    </TableCell>
                    <TableCell align='right'>{row.travel_route}</TableCell>
                    <TableCell align='right'>{row.end_point}</TableCell>
                    <TableCell align='right'>{row.status}</TableCell>
                  </TableRow>
                )
              })}
            {emptyRows > 0 && (
              <TableRow
                sx={{
                  height: 53 * emptyRows
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        page={page}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  )
}

export default TrackingTableHistory
