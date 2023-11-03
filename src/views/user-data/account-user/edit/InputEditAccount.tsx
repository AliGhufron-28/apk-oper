// ** MUI IMPORT 
import { Autocomplete, Grid, TextField, InputLabel,} from '@mui/material'

// ** React Imports
import { ChangeEvent, MouseEvent, useState } from 'react'

// ** MUI Imports
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'

// ** React Imports
import { Fragment, SyntheticEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'


// ** Third Party Imports
import { useDropzone } from 'react-dropzone'

interface FileProp {
  name: string
  type: string
  size: number
}


// Styled component for the heading inside the dropzone area
const HeadingTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(4)
  }
}))

const role = [
    { title: 'Customer' },
    { title: 'Driver' },
    { title: 'Partner' },
]  



interface State {
  weight: string
  password: string
  showPassword: boolean
}


const InputsEditAccount = () => {

    // ** State
    
    const [values, setValues] = useState<State>({
        weight: '',
        password: '12345678',
        showPassword: false
    })

    const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value })
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword })
    }

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    // ** State
    const [files, setFiles] = useState<File[]>([])

    // ** Hooks
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles: File[]) => {
        setFiles(acceptedFiles.map((file: File) => Object.assign(file)))
        }
    })

    const renderFilePreview = (file: FileProp) => {
        if (file.type.startsWith('image')) {
        return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file as any)} />
        } else {
        return <Icon icon='mdi:file-document-outline' />
        }
    }

    const handleRemoveFile = (file: FileProp) => {
        const uploadedFiles = files
        const filtered = uploadedFiles.filter((i: FileProp) => i.name !== file.name)
        setFiles([...filtered])
    }

    const fileList = files.map((file: FileProp) => (
        <ListItem key={file.name}>
        <div className='file-details'>
            <div className='file-preview'>{renderFilePreview(file)}</div>
            <div>
            <Typography className='file-name'>{file.name}</Typography>
            <Typography className='file-size' variant='body2'>
                {Math.round(file.size / 100) / 10 > 1000
                ? `${(Math.round(file.size / 100) / 10000).toFixed(1)} mb`
                : `${(Math.round(file.size / 100) / 10).toFixed(1)} kb`}
            </Typography>
            </div>
        </div>
        <IconButton onClick={() => handleRemoveFile(file)}>
            <Icon icon='mdi:close' fontSize={20} />
        </IconButton>
        </ListItem>
    ))

    const handleLinkClick = (event: SyntheticEvent) => {
        event.preventDefault()
    }

    const handleRemoveAllFiles = () => {
        setFiles([])
    }

    return (
        <>
            <Grid container spacing={5}>
                <Grid item xs={6} sm={6} >
                    <Typography variant="subtitle2">ID*</Typography>
                    <TextField
                    fullWidth
                    required
                    placeholder='#123456789'
                    value={'#123456789'}
                    disabled
                    />
                </Grid>
                <Grid item xs={6} sm={6} >
                    <Typography variant="subtitle2">Username*</Typography>
                    <TextField
                    fullWidth
                    required
                    placeholder='Historia'
                    />
                </Grid>
                <Grid item xs={6} sm={6} >
                    <Typography variant="subtitle2">Email*</Typography>
                    <TextField
                    fullWidth
                    required
                    placeholder='historia@gmail.com'
                    />
                </Grid>
                <Grid item xs={6} sm={6} >
                    <Typography variant="subtitle2">Phone*</Typography>
                    <TextField
                    fullWidth
                    required
                    placeholder='089762546561'
                    />
                </Grid>
                <Grid item xs={6} sm={6} >
                    <Typography variant="subtitle2">Password*</Typography>
                    <InputLabel htmlFor='icons-adornment-password'></InputLabel>
                    <OutlinedInput
                    fullWidth
                    placeholder='masukan password'
                    value={values.password}
                    id='icons-adornment-password'
                    onChange={handleChange('password')}
                    type={values.showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position='end'>
                        <IconButton
                            edge='end'
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            aria-label='toggle password visibility'
                        >
                            <Icon fontSize={20} icon={values.showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                        </IconButton>
                        </InputAdornment>
                    }
                    />
                </Grid>
                <Grid item xs={6} sm={6} >
                    <Typography variant="subtitle2">Photo*</Typography>
                    <Fragment>
                    <div {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: ['center', 'center', 'inherit'] }}>
                                <HeadingTypography variant="caption">Drag an Drop or</HeadingTypography>
                                <Typography variant="caption" color='textSecondary'>
                                click{' '}
                                <Link href='/' onClick={handleLinkClick}>
                                    here 
                                </Link>{' '}
                                to select file
                                </Typography>
                            </Box>
                        </Box>
                    </div>
                    {files.length ? (
                        <Fragment>
                        <List>{fileList}</List>
                        <div className='buttons'>
                            <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>
                            Remove All
                            </Button>
                            <Button variant='contained'>Upload Files</Button>
                        </div>
                        </Fragment>
                    ) : null}
                    </Fragment>
                </Grid>
                <Grid item xs={6} sm={6} >
                <Typography variant="subtitle2">Repeat Password*</Typography>
                    <InputLabel htmlFor='icons-adornment-password'></InputLabel>
                    <OutlinedInput
                    fullWidth
                    placeholder='confirm password'
                    value={values.password}
                    id='icons-adornment-password'
                    onChange={handleChange('password')}
                    type={values.showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position='end'>
                        <IconButton
                            edge='end'
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            aria-label='toggle password visibility'
                        >
                            <Icon fontSize={20} icon={values.showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                        </IconButton>
                        </InputAdornment>
                    }
                    />
                </Grid>
                <Grid item xs={6} sm={6} >
                </Grid>
                <Grid item xs={6} sm={6} sx={{marginTop:1}}>
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
                            placeholder="Select role.."
                        />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={12} >
                </Grid>
            </Grid>
        </>
    )
}

export default InputsEditAccount