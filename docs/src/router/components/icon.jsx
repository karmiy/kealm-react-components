import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/icon',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-icon' */'@/docs/icon')} />
        )
    }
]
export default routes