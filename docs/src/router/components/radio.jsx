import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/radio',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-radio' */'@/docs/radio')} />
        )
    }
]
export default routes