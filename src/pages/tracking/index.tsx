// ** MUI Imports
import Grid from '@mui/material/Grid'


// ** Demo Components Imports
import TrackingTable from 'src/views/tracking/TrackingTable'
import ActionTracking from 'src/views/tracking/ActionTracking'




const TrackingView = () => {
  return (
    <Grid container spacing={6}>
        <Grid item xs={12}>
            <ActionTracking />
        </Grid>
        <Grid item xs={12}>
            <TrackingTable />
        </Grid>
    </Grid>
  )
}

export default TrackingView
