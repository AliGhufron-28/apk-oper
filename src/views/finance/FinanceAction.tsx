// ** MUI Imports
import * as React from 'react'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}
  


const FinanceActions = () => {



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
            <TextField
            sx={{ mr:2 }}
            size='small'
            id="outlined-select-currency"
            select
            defaultValue="Month"
            >   
                <MenuItem value="Month" sx={{ color:'black' }}>Month</MenuItem>
                <MenuItem value="Jan" sx={{ color:'black' }}>Jan</MenuItem>
                <MenuItem value="Feb" >Feb</MenuItem>
                <MenuItem value="March" sx={{ color:'black' }}>March</MenuItem>
                <MenuItem value="Apr" sx={{ color:'black' }}>Apr</MenuItem>
                <MenuItem value="Mei" sx={{ color:'black' }}>Mei</MenuItem>
            </TextField>

            <TextField
            size='small'
            id="outlined-select-currency"
            select
            defaultValue="Year"
            >   
                <MenuItem value="Year" sx={{ color:'black' }}>Year</MenuItem>
                <MenuItem value="2020" sx={{ color:'black' }}>2020</MenuItem>
                <MenuItem value="2021" sx={{ color:'black' }}>2021</MenuItem>
                <MenuItem value="2022" sx={{ color:'black' }}>2022</MenuItem>
                <MenuItem value="2023" sx={{ color:'black' }}>2023</MenuItem>
            </TextField>
        </Box>
    </Box>
  )
}

export default FinanceActions
