// ** MUI Imports
import Grid from '@mui/material/Grid'


// ** Demo Components Imports
import SettingsRateTable from 'src/views/settings/SettingsRateTable'
import ActionSettingsRate from 'src/views/settings/ActionSettingsRate'




const SettingsRateView = () => {
  return (
    <Grid container spacing={6}>
        <Grid item xs={12}>
            <ActionSettingsRate />
        </Grid>
        <Grid item xs={12}>
            <SettingsRateTable />
        </Grid>
    </Grid>
  )
}

export default SettingsRateView
