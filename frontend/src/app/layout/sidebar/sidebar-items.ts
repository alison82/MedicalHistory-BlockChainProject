import { RouteInfo } from './sidebar.metadata';
import { Roles } from 'src/app/shared/models/user.model';
export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Home',
    icon: 'fas fa-home',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/dashboard/main',
        title: 'Dashboard 1',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/dashboard/dashboard2',
        title: 'Dashboard 2',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Appointments',
    icon: 'fas fa-clipboard-list',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/appointment/viewAppointment',
        title: 'View Appointment',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/appointment/bookAppointment',
        title: 'Book Appointment',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/appointment/edit-ppointment',
        title: 'Edit Appointment',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Doctors',
    icon: 'fas fa-user-md',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/doctors/allDoctors',
        title: 'All Doctor',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/doctors/add-doctor',
        title: 'Add Doctor',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/doctors/edit-doctor',
        title: 'Edit Doctor',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/doctors/doctor-profile',
        title: 'Doctor Profile',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Staff',
    icon: 'fas fa-user-friends',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/staff/all-staff',
        title: 'All Staff',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/staff/add-staff',
        title: 'Add Staff',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/staff/edit-staff',
        title: 'Edit Staff',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/staff/staff-profile',
        title: 'Staff Profile',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Patient',
    icon: 'fab fa-accessible-icon',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/patient/all-patient',
        title: 'All Patient',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/patient/add-patient',
        title: 'Add Patient',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/patient/edit-patient',
        title: 'Edit Patient',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/patient/patient-profile',
        title: 'Patient Profile',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Room Allotment',
    icon: 'fas fa-procedures',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/room/all-rooms',
        title: 'Alloted Rooms',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/room/add-allotment',
        title: 'New Allotment',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/room/edit-allotment',
        title: 'Edit Allotment',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Payment',
    icon: 'fas fa-hand-holding-usd',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/payment/all-payment',
        title: 'All Payment',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/payment/add-payment',
        title: 'Add Payment',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/payment/invoice',
        title: 'Invoice',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Email',
    icon: 'fas fa-mail-bulk',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/email/inbox',
        title: 'Inbox',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/email/compose',
        title: 'Compose',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/email/read-mail',
        title: 'Read Email',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Apps',
    icon: 'fab fa-google-play',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/apps/calendar',
        title: 'Calendar',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/apps/chat',
        title: 'Chat',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/apps/dragdrop',
        title: 'Drag & Drop',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/apps/contact-list',
        title: 'Contact List',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/apps/contact-grid',
        title: 'Contact Grid',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/apps/support',
        title: 'Support',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Widgets',
    icon: 'fab fa-pagelines',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/widget/chart-widget',
        title: 'Chart Widget',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/widget/data-widget',
        title: 'Data Widget',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'User Interface (UI)',
    icon: 'fas fa-drafting-compass',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/ui/alerts',
        title: 'Alerts',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/animations',
        title: 'Animations',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/badges',
        title: 'Badges',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/chips',
        title: 'Chips',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/modal',
        title: 'Modal',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/buttons',
        title: 'Buttons',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/expansion-panel',
        title: 'Expansion Panel',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/bottom-sheet',
        title: 'Bottom Sheet',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/dialogs',
        title: 'Dialogs',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/cards',
        title: 'Cards',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/labels',
        title: 'Labels',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/list-group',
        title: 'List Group',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/media-object',
        title: 'Media Object',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/snackbar',
        title: 'Snackbar',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/preloaders',
        title: 'Preloaders',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/progressbars',
        title: 'Progress Bars',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/tabs',
        title: 'Tabs',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/typography',
        title: 'Typography',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/helper-classes',
        title: 'Helper Classes',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Forms',
    icon: 'fab fa-wpforms',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/forms/form-controls',
        title: 'Form Controls',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/forms/advance-controls',
        title: 'Advanced Controls',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/forms/form-example',
        title: 'Form Examples',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/forms/form-validation',
        title: 'Form Validation',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/forms/wizard',
        title: 'Form Wizard',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/forms/editors',
        title: 'Editors',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Tables',
    icon: 'fas fa-table',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/tables/basic-tables',
        title: 'Basic Tables',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/tables/material-tables',
        title: 'Material Tables',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/tables/ngx-datatable',
        title: 'ngx-datatable',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Medias',
    icon: 'far fa-images',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/media/gallery',
        title: 'Image Gallery',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/media/carousel',
        title: 'Carousel',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Charts',
    icon: 'fas fa-chart-line',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/charts/echart',
        title: 'Echart',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/charts/morris',
        title: 'Morris',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/charts/apex',
        title: 'Apex',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/charts/chartjs',
        title: 'ChartJS',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/charts/ngx-charts',
        title: 'Ngx-Charts',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/charts/gauge',
        title: 'Gauge',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/charts/sparkline',
        title: 'Sparkline',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Timeline',
    icon: 'fab fa-hubspot',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/timeline/timeline1',
        title: 'Timeline 1',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/timeline/timeline2',
        title: 'Timeline 2',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Icons',
    icon: 'fas fa-paw',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/icons/material',
        title: 'Material Icons',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/icons/font-awesome',
        title: 'Font Awesome',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Authentication',
    icon: 'fas fa-id-card',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/authentication/signin',
        title: 'Sign In',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/authentication/signup',
        title: 'Sign Up',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/authentication/forgot-password',
        title: 'Forgot Password',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/authentication/locked',
        title: 'Locked',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/authentication/page404',
        title: '404 - Not Found',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/authentication/page500',
        title: '500 - Server Error',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Extra Pages',
    icon: 'far fa-file-alt',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/extra-pages/profile',
        title: 'Profile',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/extra-pages/pricing',
        title: 'Pricing',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/extra-pages/invoice',
        title: 'Invoice',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/extra-pages/faqs',
        title: 'Faqs',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/extra-pages/blank',
        title: 'Blank Page',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Maps',
    icon: 'fas fa-globe-americas',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/maps/google',
        title: 'Google Map',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Multi level Menu',
    icon: 'fas fa-angle-double-down',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '#',
        title: 'First',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/',
        title: 'Second',
        icon: '',
        class: 'ml-sub-menu',
        groupTitle: false,
        submenu: [
          {
            path: '/',
            title: 'Second 1',
            icon: '',
            class: '',
            groupTitle: false,
            submenu: []
          },
          {
            path: '/',
            title: 'Second 2',
            icon: '',
            class: '',
            groupTitle: false,
            submenu: []
          }
        ]
      },
      {
        path: '#',
        title: 'Third',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  }
];
