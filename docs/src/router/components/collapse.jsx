import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/collapse',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-collapse' */'@/docs/collapse')} />
        )
    }
]
export default routes