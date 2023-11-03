// ** MUI Imports
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import AddCustomerCard from 'src/views/user-data/customer/add/AddCustomerCard'



const CustomerUserAdd = () => {
  return (
    <>
        <Grid mt={5} container spacing={6}>
            <Grid xs={12}>
            <AddCustomerCard/>
            </Grid>
            <Box mt={5}
                sx={{
                    p: 5,
                    pb: 3,
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'end'
                }}
            >
                <Stack spacing={2} direction="row">
                    <Button href='/user-data/customer/' variant="outlined">cancel</Button>
                    <Button variant="contained">add</Button>
                </Stack>
            </Box>
        </Grid>
    </>
  )
}

export default CustomerUserAdd
