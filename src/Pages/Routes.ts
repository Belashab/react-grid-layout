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
    component: ComponentType<RouteComponentProps<any>> | ComponentType<any>
}

export const Pages: Array<Route> = [
    {
        link: '/Dashboard',
        title: 'Dashboard',
        component: Dashboard,
    },
    {
        link: '/Courses',
        title: 'Courses',
        component: Courses,
    },
    {
        link: '/Materials',
        title: 'Materials',
        component: Materials,
    },
    {
        link: '/Calendar',
        title: 'Calendar',
        component: Calendar,
    },
    {
        link: '/Transcripts',
        title: 'Transcripts',
        component: Transcripts,
    },
    {
        link: '/Grades',
        title: 'Grades',
        component: Grades,
    },
    {
        link: '/Attendance',
        title: 'Attendance',
        component: Attendance,
    },
    {
        link: '/Settings',
        title: 'Settings',
        component: Settings,
    },
]