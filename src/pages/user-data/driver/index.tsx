// ** MUI Imports
import Grid from '@mui/material/Grid'


// ** Demo Components Imports
import DriverTable from 'src/views/user-data/driver/DriverTable'
import ActionDriver from 'src/views/user-data/driver/ActionDriver'




const DriverView = () => {
  return (
    <Grid container spacing={6}>
        <Grid item xs={12}>
            <ActionDriver />
        </Grid>
        <Grid item xs={12}>
            <DriverTable />
        </Grid>
    </Grid>
  )
}

export default DriverView
