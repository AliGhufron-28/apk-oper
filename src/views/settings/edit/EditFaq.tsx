// ** MUI Imports
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import EditFaqCard from 'src/views/settings/edit/EditFaqCard'



const FaqEdit = () => {
  return (
    <>
        <Grid mt={5} container spacing={6}>
            <Grid xs={12}>
            <EditFaqCard/>
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
                    <Button href='/settings/faq/' variant="outlined">cancel</Button>
                    <Button variant="contained">add</Button>
                </Stack>
            </Box>
        </Grid>
    </>
  )
}

export default FaqEdit
