import { UserMenuItem } from "./user-menu.model";


export const USERMENU: UserMenuItem[] = [
    {
    label: 'Attendence (Employee)',
    icon: 'pie-chart',
    subItems: [
      {
        label: 'Attendence',
        link: '/base/user-pages/location'
      },
      {
        label: 'Employee Holidays',
        link: '/base/user-pages/holiday'
      },
      {
        label: 'Employee Leave',
        link: '/base/user-pages/leave'
      },
     
    ]
  },

  // {
  //   label: 'Log-out',
  //   icon: 'log-out',
  //   link: '/userlogin',
  // } 
]