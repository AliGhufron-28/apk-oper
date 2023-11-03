// ** MUI Imports
import * as React from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button'
import { Paper } from '@mui/material'
import TextField from '@mui/material/TextField';

// ** Icon Imports
import Icon from 'src/@core/components/icon'

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}
  


const SettingsRateActions = () => {


  return (
    <Box
        sx={{
            p: 5,
            pb: 3,
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}
    >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <Paper
                component="form"
                sx={{ p: '6px 8px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search.."
                    inputProps={{ 'aria-label': 'search..' }}
                />
            </Paper>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button color='secondary'><Icon icon='mdi:printer' fontSize={40}/></Button>

            <TextField
            sx={{ mr:2 }}
            size='small'
            id="outlined-select-currency"
            select
            defaultValue="Travel-Fees"
            >   
                <MenuItem value="Travel-Fees"><Button sx={{ color:'black' }} size="small" href='/settings/rates'>Travel Fees</Button></MenuItem>
                <MenuItem value="Service-Fees"><Button sx={{ color:'black' }}  size="small" href=''>Service Fees</Button></MenuItem>
                <MenuItem value="Maintenence"><Button sx={{ color:'black' }}  size="small" href=''>Maintenence</Button></MenuItem>
            </TextField>

            <Button sx={{ mb: 1, mr:2 }} color='secondary' variant="contained">Run</Button>
            <Button sx={{ mb: 1 }} color='error' href='' variant="contained">Add</Button>
        </Box>
    </Box>
  )
}

export default SettingsRateActions
