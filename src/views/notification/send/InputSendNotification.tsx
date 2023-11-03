// ** MUI IMPORT 
import { Autocomplete, Grid, TextField,} from '@mui/material'


// ** MUI Imports
import Typography from '@mui/material/Typography'


const role = [
    { title: 'Customer' },
    { title: 'Driver' },
    { title: 'Partner' },
]  



const InputsAddAccount = () => {


    return (
        <>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={12} >
                    <Typography variant="subtitle2">Username*</Typography>
                    <TextField
                    fullWidth
                    required
                    placeholder='Input Username'
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Typography variant="subtitle2">Role*</Typography>
                    <Autocomplete
                        multiple
                        id="role"
                        options={role}
                        getOptionLabel={(option) => option.title}
                        filterSelectedOptions
                        renderInput={(params) => (
                        <TextField
                            required
                            {...params}
                            placeholder="Role"
                        />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={12} >
                    <Typography variant="subtitle2">Description Notification*</Typography>
                    <TextField
                    fullWidth
                    multiline
                    rows={6}
                    required
                    placeholder='Describe the notification here'
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default InputsAddAccount