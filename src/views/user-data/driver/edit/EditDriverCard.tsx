// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'


import InputEditDriver from 'src/views/user-data/driver/edit/InputEditDriver'


const DriverCardUserEdit = () => {
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
            <Typography variant='h5'>Edit driver</Typography>
        </Box>
        <CardContent>
            <InputEditDriver />
        </CardContent>
    </Card>
  )
}

export default DriverCardUserEdit
