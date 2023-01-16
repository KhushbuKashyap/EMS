import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [

  {
    label: 'Attendance (Admin)',
    icon: 'file-text',
    subItems: [
      {
        label: 'Today Attendance',
        link: '/base/admin-pages/todayAttendence'
      },
      {
        label: 'Employee Attendance Sheet',
        link: '/base/admin-pages/adminView'
      },
      // {
      //   label: 'Employee Attendance Info',
      //   link: '/base/pages/attendanceinfo'
      // },
    ]
  },
  // {
  //   label: 'Log-out',
  //   icon: 'log-out',
  //   link: '/adminlogin',
  // } 


];
