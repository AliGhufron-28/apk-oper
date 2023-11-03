// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import CardStatisticsCharacter from 'src/@core/components/card-statistics/card-stats-with-image'

// ** Styled Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import UserOverview from 'src/views/dashboards/view/UserOverview'
import FinanceOverview from 'src/views/dashboards/view/FinanceOverview'




const Dashboard = () => {
  return (
    <ApexChartWrapper>
        <KeenSliderWrapper>
            <Grid container spacing={6} className='match-height'>
                <Grid item xs={12} md={4}>
                    <CardStatisticsCharacter
                        data={{
                        stats: '',
                        title: 'Hello',
                        chipColor: 'success',
                        trendNumber: 'to dashbord admin oper',
                        chipText: 'Welcome',
                        src: '/images/cards/card-stats-img-1.png'
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <UserOverview />
                </Grid>
                <Grid item xs={12} md={6}>
                    <FinanceOverview />
                </Grid>
                <Grid item xs={12} md={6}>
                    
                </Grid>
            </Grid>
        </KeenSliderWrapper>
    </ApexChartWrapper>
  )
}

export default Dashboard
