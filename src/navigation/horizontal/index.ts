// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => {
  return [
    {
      title: 'Dashboards',
      icon: 'mdi:home-outline',
      path: '/dashboards'
    },
    {
      title: 'Users Data',
      icon: 'mdi:user-group',
      children: [
        {
          title: 'Account User',
          path: '/user-data/account-user'
        },
        {
          title: 'Customer',
          path: '/user-data/customer'
        },
        {
          title: 'Driver',
          path: '/user-data/driver'
        },
        {
          title: 'Partner',
          path: '/user-data/partner'
        }
      ]
    },
    {
      title: 'Tracking',
      icon: 'mdi:laptop',
      path: '/tracking'
    },
    {
      title: 'Finance',
      icon: 'mdi:hand-coin-outline',
      path: '/finance'
    },
    {
      title: 'Notification',
      icon: 'mdi:message',
      path: '/notification'
    },
    {
      title: 'Feedback',
      icon: 'mdi:user-star',
      path: '/feedback'
    },
    {
      title: 'Settings',
      icon: 'mdi:settings',
      children: [
        {
          title: 'Rates',
          path: '/settings/rates'
        },
        {
          title: 'FAQ',
          path: '/settings/faq'
        },
      ]
    }
  ]
}

export default navigation
