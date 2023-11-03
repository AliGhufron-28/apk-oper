// ** MUI Imports
import Grid from '@mui/material/Grid'


// ** Demo Components Imports
import AccountTable from 'src/views/user-data/account-user/AccountTable'
import ActionAccount from 'src/views/user-data/account-user/ActionAccount'




const AccountUser = () => {
  return (
    <Grid container spacing={6}>
        <Grid item xs={12}>
            <ActionAccount />
        </Grid>
        <Grid item xs={12}>
            <AccountTable />
        </Grid>
    </Grid>
  )
}

export default AccountUser
