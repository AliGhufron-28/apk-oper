// ** MUI Imports
import Grid from '@mui/material/Grid'


// ** Demo Components Imports
import PartnerTable from 'src/views/user-data/partner/PartnerTable'
import ActionPartner from 'src/views/user-data/partner/ActionPartner'




const PartnerView = () => {
  return (
    <Grid container spacing={6}>
        <Grid item xs={12}>
            <ActionPartner />
        </Grid>
        <Grid item xs={12}>
            <PartnerTable />
        </Grid>
    </Grid>
  )
}

export default PartnerView
