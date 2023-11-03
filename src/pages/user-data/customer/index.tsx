// ** MUI Imports
import Grid from '@mui/material/Grid'


// ** Demo Components Imports
import CustomerTable from 'src/views/user-data/customer/CustomerTable'
import ActionCustomer from 'src/views/user-data/customer/ActionCustomer'




const CustomerView = () => {
  return (
    <Grid container spacing={6}>
        <Grid item xs={12}>
            <ActionCustomer />
        </Grid>
        <Grid item xs={12}>
            <CustomerTable />
        </Grid>
    </Grid>
  )
}

export default CustomerView
