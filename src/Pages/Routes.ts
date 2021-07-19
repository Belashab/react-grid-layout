import { ComponentType } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { Courses } from 'Pages/Courses'
import { Dashboard } from 'Pages/Dashboard'
import { Materials } from 'Pages/Materials'
import { Calendar } from 'Pages/Calendar'
import { Transcripts } from 'Pages/Transcripts'
import { Grades } from 'Pages/Grades'
import { Attendance } from 'Pages/Attendance'
import { Settings } from 'Pages/Settings'




interface Route {
    link: string
    title: string
    icon: string
    component: ComponentType<RouteComponentProps<any>> | ComponentType<any>
}

export const Pages: Array<Route> = [
    {
        link: '/Dashboard',
        title: 'Dashboard',
        icon: `${require('../Resources/Navbar/dashboard.png')}`,
        component: Dashboard,
    },
    {
        link: '/Courses',
        title: 'Courses',
        icon: 'src\Resources\Navbar\dashboard.png',
        component: Courses,
    },
    {
        link: '/Materials',
        title: 'Materials',
        icon: 'src\Resources\Navbar\dashboard.png',
        component: Materials,
    },
    {
        link: '/Calendar',
        title: 'Calendar',
        icon: 'src\Resources\Navbar\dashboard.png',
        component: Calendar,
    },
    {
        link: '/Transcripts',
        title: 'Transcripts',
        icon: 'src\Resources\Navbar\dashboard.png',
        component: Transcripts,
    },
    {
        link: '/Grades',
        title: 'Grades',
        icon: 'src\Resources\Navbar\dashboard.png',
        component: Grades,
    },
    {
        link: '/Attendance',
        title: 'Attendance',
        icon: 'src\Resources\Navbar\dashboard.png',
        component: Attendance,
    },
    {
        link: '/Settings',
        title: 'Settings',
        icon: 'src\Resources\Navbar\dashboard.png',
        component: Settings,
    },
]