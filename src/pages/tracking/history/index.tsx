// ** MUI Imports
import Grid from '@mui/material/Grid'


// ** Demo Components Imports
import TrackingTableHistory from 'src/views/tracking/TrackingTableHistory'
import ActionTrackingHistory from 'src/views/tracking/ActionTrackingHistory'




const TrackingViewHistory = () => {
  return (
    <Grid container spacing={6}>
        <Grid item xs={12}>
            <ActionTrackingHistory />
        </Grid>
        <Grid item xs={12}>
            <TrackingTableHistory />
        </Grid>
    </Grid>
  )
}

export default TrackingViewHistory
