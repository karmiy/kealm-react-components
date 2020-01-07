import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/tabs',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-tabs' */'@/docs/tabs')} />
        )
    }
]
export default routes