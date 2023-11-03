// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'


import InputEditFaq from 'src/views/settings/edit/InputEditFaq'


const FaqCardEdit = () => {
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
            <Typography variant='h5'>Edit Faq</Typography>
        </Box>
        <CardContent>
            <InputEditFaq />
        </CardContent>
    </Card>
  )
}

export default FaqCardEdit
