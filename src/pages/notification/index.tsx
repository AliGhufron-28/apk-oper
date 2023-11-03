// ** MUI Imports
import Grid from '@mui/material/Grid'


// ** Demo Components Imports
import NotificationTable from 'src/views/notification/NotificationTable'
import ActionNotification from 'src/views/notification/ActionNotification'



const NotificationView = () => {
  return (
    <Grid container spacing={6}>
        <Grid item xs={12}>
            <ActionNotification />
        </Grid>
        <Grid item xs={12}>
            <NotificationTable />
        </Grid>
    </Grid>
  )
}

export default NotificationView
