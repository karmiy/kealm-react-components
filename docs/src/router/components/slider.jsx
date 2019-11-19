import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/slider',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-slider' */'@/docs/slider')} />
        )
    }
]
export default routes