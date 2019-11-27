import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/time-picker',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-time-picker' */'@/docs/time-picker')} />
        )
    }
]
export default routes