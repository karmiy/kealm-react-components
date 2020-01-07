import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/card',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-card' */'@/docs/card')} />
        )
    }
]
export default routes