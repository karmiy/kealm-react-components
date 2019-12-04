import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/date-picker',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-date-picker' */'@/docs/date-picker')} />
        )
    }
]
export default routes