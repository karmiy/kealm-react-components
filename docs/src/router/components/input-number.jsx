import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/input-number',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-input-number' */'@/docs/input-number')} />
        )
    }
]
export default routes