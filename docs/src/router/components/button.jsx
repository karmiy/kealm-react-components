import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/button',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-button' */'@/docs/button')} />
        )
    }
]
export default routes