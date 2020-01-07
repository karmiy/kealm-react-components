import React from 'react'
import { Bundle } from "@/components";
import ComponentsRoute from './components';

const routes = [
    {
        path: '/',
        exact: true,
        redirect: '/component'
    },
    {
        path: '/component',
        component: props => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-component' */'@/views/component')} />
        ),
        routes: [
            ...ComponentsRoute
        ]
    }
]

export default routes;