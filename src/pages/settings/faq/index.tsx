// ** MUI Imports
import Grid from '@mui/material/Grid'


// ** Demo Components Imports
import SettingsFaqTable from 'src/views/settings/SettingsFaqTable'
import ActionSettingsFaq from 'src/views/settings/ActionSettingsFaq'




const SettingsFaqView = () => {
  return (
    <Grid container spacing={6}>
        <Grid item xs={12}>
            <ActionSettingsFaq />
        </Grid>
        <Grid item xs={12}>
            <SettingsFaqTable />
        </Grid>
    </Grid>
  )
}

export default SettingsFaqView
