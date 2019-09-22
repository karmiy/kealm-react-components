import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/input',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-input' */'@/docs/input')} />
        )
    }
]
export default routes