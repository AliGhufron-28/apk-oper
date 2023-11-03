// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'


import InputEditPartner from 'src/views/user-data/partner/edit/InputEditPartner'


const PartnerCardUserEdit = () => {
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
            <Typography variant='h5'>Edit Partner</Typography>
        </Box>
        <CardContent>
            <InputEditPartner />
        </CardContent>
    </Card>
  )
}

export default PartnerCardUserEdit
