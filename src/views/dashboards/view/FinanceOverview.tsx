// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'


// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const series = [
  {
    type: 'column',
    name: 'Earning',
    data: [90, 52, 67, 45, 75, 55, 48, 30, 62, 80, 50, 90]
  },
  {
    type: 'column',
    name: 'Expense',
    data: [-90, -52, -67, -45, -75, -55, -48, -30, -62, -80, -50, -90]
  },
  {
    type: 'line',
    name: 'Expense',
    data: [90, 52, 67, 45, 75, 55, 48, 30, 62, 80, 50, 90]
  }
]

const FinanceReportView = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: '57%',
        endingShape: 'flat',
        startingShape: 'rounded'
      }
    },
    markers: {
      size: 4,
      strokeWidth: 3,
      fillOpacity: 1,
      strokeOpacity: 1,
      colors: [theme.palette.background.paper],
      strokeColors: hexToRGBA(theme.palette.warning.main, 1)
    },
    stroke: {
      curve: 'smooth',
      width: [0, 0, 3],
      colors: [hexToRGBA(theme.palette.warning.main, 1)]
    },
    colors: [hexToRGBA(theme.palette.primary.main, 1), hexToRGBA(theme.palette.primary.main, 0.12)],
    dataLabels: { enabled: false },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    legend: { show: false },
    grid: {
      yaxis: {
        lines: { show: false }
      },
      padding: {
        top: -28,
        left: -6,
        right: -8,
        bottom: -5
      }
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'],
      labels: {
        style: { colors: theme.palette.text.disabled }
      }
    },
    yaxis: {
      max: 100,
      min: -90,
      show: false
    }
  }

  return (
    <Card>
      <CardHeader
        title='Finance Report'
        titleTypographyProps={{ sx: { letterSpacing: '0.15px' } }}
      />
      <CardContent
        sx={{
          '& .apexcharts-series[rel="2"]': { transform: 'translateY(-8px)' },
          pt: { xs: `${theme.spacing(0)} !important`, md: `${theme.spacing(2.5)} !important` }
        }}
      >
        <ReactApexcharts type='line' height={251} series={series} options={options} />
      </CardContent>
    </Card>
  )
}

export default FinanceReportView
