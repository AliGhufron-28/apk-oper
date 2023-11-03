// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'


import InputAddPartner from 'src/views/user-data/partner/add/InputAddPartner'


const PartnerUserAdd = () => {
  return (
    <Card>
        <Box
            sx={{ 
                backgroundColor:'#d50000',
                width: 'auto',
                height:50
             }}
            >
        </Box>
        <Box sx={{ margin:5 }}>
            <Typography variant='h5'>Add Partner</Typography>
        </Box>
        <CardContent>
            <InputAddPartner />
        </CardContent>
    </Card>
  )
}

export default PartnerUserAdd
