// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'


import InputAddAccount from 'src/views/user-data/account-user/add/InputAddAccount'


const AccountUserAdd = () => {
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
            <Typography variant='h5'>Add Account</Typography>
        </Box>
        <CardContent>
            <InputAddAccount />
        </CardContent>
    </Card>
  )
}

export default AccountUserAdd
