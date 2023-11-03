// ** MUI Import
import Box, { BoxProps } from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

const FallbackSpinner = ({ sx }: { sx?: BoxProps['sx'] }) => {
  

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx
      }}
    >
      <img src="/images/apple-touch-icon.png" alt="" width={60} height={60} />
      <CircularProgress disableShrink sx={{ mt: 6 }} />
    </Box>
  )
}

export default FallbackSpinner
