// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'


import InputAddFaq from 'src/views/settings/add/InputAddFaq'


const FaqCardAdd = () => {
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
            <Typography variant='h5'>Add Faq</Typography>
        </Box>
        <CardContent>
            <InputAddFaq />
        </CardContent>
    </Card>
  )
}

export default FaqCardAdd
