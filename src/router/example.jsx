import React from 'react'
import { Bundle } from "@/components";

const routes = [
    {
        path: '/example',
        component: props => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-example' */'@/views/example')} />
        ),
    }
]

export default routes;