import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/checkbox',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-checkbox' */'@/docs/checkbox')} />
        )
    }
]
export default routes