// ** MUI Imports
import Grid from '@mui/material/Grid'


// ** Demo Components Imports
import FinanceTable from 'src/views/finance/FinanceTable'
import FinanceAction from 'src/views/finance/FinanceAction'




const FinanceView = () => {
  return (
    <Grid container spacing={6}>
        <Grid item xs={12}>
            <FinanceAction />
        </Grid>
        <Grid item xs={12}>
            <FinanceTable />
        </Grid>
    </Grid>
  )
}

export default FinanceView
