// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'






const FinanceView = () => {
  return (
    <Grid container spacing={6}>
        <Grid item xs={12}>
            <Card>
                <CardContent>
                    <Typography>Feedback</Typography>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
  )
}

export default FinanceView
