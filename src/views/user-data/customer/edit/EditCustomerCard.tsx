// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'


import InputEditCustomer from 'src/views/user-data/customer/edit/InputEditCustomer'


const AccountUserEdit = () => {
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
            <Typography variant='h5'>Edit Customer</Typography>
        </Box>
        <CardContent>
            <InputEditCustomer />
        </CardContent>
    </Card>
  )
}

export default AccountUserEdit
