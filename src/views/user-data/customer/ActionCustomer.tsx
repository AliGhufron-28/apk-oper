// ** MUI Imports
import * as React from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button'
import { Paper } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import TextField from '@mui/material/TextField';

// ** Icon Imports
import Icon from 'src/@core/components/icon'

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}
  


const AccountActions = () => {


    const [openDialog, setOpenDialog] = React.useState(false);

    const handleClickOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };


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
            defaultValue="Action"
            >   
                <MenuItem value="Action"><Button sx={{ color:'black' }} size="small">Action</Button></MenuItem>
                <MenuItem value="Edit"><Button sx={{ color:'black' }}  size="small" href='/user-data/customer/edit'>Edit</Button></MenuItem>
                <MenuItem value="Delete" onClick={handleClickOpenDialog}><Button sx={{ color:'black' }} size="small">Delete</Button></MenuItem>
            </TextField>

            <Button sx={{ mb: 1, mr:2 }} color='secondary' variant="contained">Run</Button>
            <Button sx={{ mb: 1 }} color='error' href='/user-data/customer/add' variant="contained">Add</Button>
        </Box>
        <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                <Box
                sx={{ 
                    p: 5,
                    pb: 3,
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center', 
                    justifyContent: 'center' 
                 }}
                >
                    <Typography variant='h5' color='black'>Delete Customer</Typography>
                </Box>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography color='black'>Are you sure you want to delete <strong>Charles Kasasira</strong></Typography>
                    <Alert severity="error">
                        <AlertTitle>Warning</AlertTitle>
                        <AlertTitle>
                            <Typography color='error' variant="caption">
                                By deleting this account, you wan't be able to access
                            </Typography>
                        </AlertTitle>
                        <AlertTitle>
                            <Typography color='error' variant="caption">
                                the system
                            </Typography>
                        </AlertTitle>
                    </Alert>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Box
                sx={{ 
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center', 
                    justifyContent: 'start' 
                 }}
                >
                    <Button onClick={handleCloseDialog} variant='contained'>No, Cancel</Button>
                </Box>
                <Box
                sx={{ 
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center', 
                    justifyContent: 'end' 
                 }}
                >
                    <Button onClick={handleCloseDialog} variant='outlined'>Yes, Delete</Button>
                </Box>
                
            </DialogActions>
        </Dialog>
    </Box>
  )
}

export default AccountActions
