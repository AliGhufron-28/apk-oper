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
import Link from '@mui/material/Link'

// ** Icon Imports
import Icon from 'src/@core/components/icon'


type Order = 'asc' | 'desc'

interface Data {
  name: string
  gender: string
  address: string
  no_tlp: number
  name_emergency: string
  owner: string
  bank: string
  account_num: number
  ktp: string
  account_book: string
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


const createData = (name: string, gender: string, address: string, no_tlp: number, name_emergency: string, owner: string, bank: string, account_num: number, ktp: string, account_book: string): Data => {
  return { name, gender, address, no_tlp, name_emergency, owner, bank, account_num, ktp, account_book }
}

const rows = [
  createData('Samanta Wiliam', 'Female', 'Jakarta', +6289765435618, 'Angelina', 'Samanta', 'BRI', 4118765467, '', ''),
  createData('Tony Soop', 'Female', 'Jakarta', +6289765435618, 'Tyas', 'Tina', 'BNI', 4118765467, '', ''),
  createData('Karen Hub', 'Female', 'Jakarta', +6289765435618, 'Karina', 'Karen', 'BNI', 4118765467, '', ''),
  createData('Jordan Nico', 'Female', 'Jakarta', +6289765435618, 'Jenifer', 'Diana', 'BTN', 4118765467, '', ''),
  createData('Nadila Adja', 'Female', 'Jakarta', +6289765435618, 'Nadia', 'Nadila', 'BNI', 4118765467, '', ''),
  createData('Johny Ahmad', 'Female', 'Jakarta', +6289765435618, 'Jeje', 'Mawar', 'BRI', 4118765467, '', ''),
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
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name'
  },
  {
    id: 'gender',
    numeric: true,
    disablePadding: false,
    label: 'Gender'
  },
  {
    id: 'address',
    numeric: true,
    disablePadding: false,
    label: 'Address'
  },
  {
    id: 'no_tlp',
    numeric: true,
    disablePadding: false,
    label: 'Emergency Contact'
  },
  {
    id: 'name_emergency',
    numeric: true,
    disablePadding: false,
    label: 'Name Emergency Contact'
  },
  {
    id: 'owner',
    numeric: true,
    disablePadding: false,
    label: 'Account Owner Name'
  },
  {
    id: 'bank',
    numeric: true,
    disablePadding: false,
    label: 'Bank Name'
  },
  {
    id: 'account_num',
    numeric: true,
    disablePadding: false,
    label: 'Account Number'
  },
  {
    id: 'ktp',
    numeric: true,
    disablePadding: false,
    label: 'KTP'
  },
  {
    id: 'account_book',
    numeric: true,
    disablePadding: false,
    label: 'Account Book'
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



const PartnerTable = () => {
  // ** States
  const [page, setPage] = useState<number>(0)
  const [order, setOrder] = useState<Order>('asc')
  const [rowsPerPage, setRowsPerPage] = useState<number>(5)
  const [orderBy, setOrderBy] = useState<keyof Data>('gender')
  const [selected, setSelected] = useState<readonly string[]>([])

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name)
      setSelected(newSelecteds)

      return
    }
    setSelected([])
  }

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected: readonly string[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
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

  const isSelected = (name: string) => selected.indexOf(name) !== -1

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
                const isItemSelected = isSelected(row.name)
                const labelId = `enhanced-table-checkbox-${index}`

                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.name}
                    role='checkbox'
                    selected={isItemSelected}
                    aria-checked={isItemSelected}
                    onClick={event => handleClick(event, row.name)}
                  >
                    <TableCell padding='checkbox'>
                      <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                    </TableCell>
                    <TableCell component='th' id={labelId} scope='row' padding='none'>
                      {row.name}
                    </TableCell>
                    <TableCell align='right'>{row.gender}</TableCell>
                    <TableCell align='right'>{row.address}</TableCell>
                    <TableCell align='right'>{row.no_tlp}</TableCell>
                    <TableCell align='right'>{row.name_emergency}</TableCell>
                    <TableCell align='right'>{row.owner}</TableCell>
                    <TableCell align='right'>{row.bank}</TableCell>
                    <TableCell align='right'>{row.account_num}</TableCell>
                    <TableCell align='right'><Link sx={{ color:'blue' }}><Icon icon='mdi:file' /></Link></TableCell>
                    <TableCell align='right'><Link sx={{ color:'blue' }}><Icon icon='mdi:file' /></Link></TableCell>
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

export default PartnerTable
