// ** MUI IMPORT 
import { Grid, TextField,} from '@mui/material'

// ** React Imports
import { Fragment } from 'react'

// ** MUI Imports
import Typography from '@mui/material/Typography'




const InputsEditFaq = () => {


    return (
        <>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={12} >
                    <Typography variant="subtitle2">Title*</Typography>
                    <TextField
                    fullWidth
                    required
                    value='Lorem ipsum dolor sit amet'
                    placeholder='Input title'
                    />
                </Grid>
                <Grid item xs={12} sm={12} >
                    <Typography variant="subtitle2">Description*</Typography>
                    <TextField
                    fullWidth
                    multiline
                    rows={6}
                    required
                    value='Lorem ipsum dolor sit amet...'
                    placeholder='Description'
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default InputsEditFaq