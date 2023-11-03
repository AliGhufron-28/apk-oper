// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'


import InputSendNotification from 'src/views/notification/send/InputSendNotification'


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
            <Typography variant='h5'>Send Notification</Typography>
        </Box>
        <CardContent>
            <InputSendNotification />
        </CardContent>
    </Card>
  )
}

export default AccountUserAdd
