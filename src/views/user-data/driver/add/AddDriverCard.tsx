// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'


import InputAddDriver from 'src/views/user-data/driver/add/InputAddDriver'


const DriverUserAdd = () => {
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
            <Typography variant='h5'>Add Driver</Typography>
        </Box>
        <CardContent>
            <InputAddDriver />
        </CardContent>
    </Card>
  )
}

export default DriverUserAdd
