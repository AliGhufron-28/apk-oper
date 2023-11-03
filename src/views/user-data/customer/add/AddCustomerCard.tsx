// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'


import InputAddCustomer from 'src/views/user-data/customer/add/InputAddCustomer'


const CustomerUserAdd = () => {
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
            <Typography variant='h5'>Add Customer</Typography>
        </Box>
        <CardContent>
            <InputAddCustomer />
        </CardContent>
    </Card>
  )
}

export default CustomerUserAdd
