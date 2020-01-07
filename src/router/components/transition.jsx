import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/transition',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-transition' */'@/docs/transition')} />
        )
    }
]
export default routes