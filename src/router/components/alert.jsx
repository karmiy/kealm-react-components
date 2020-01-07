import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/alert',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-alert' */'@/docs/alert')} />
        )
    }
]
export default routes