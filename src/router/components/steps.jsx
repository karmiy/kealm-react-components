import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/steps',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-steps' */'@/docs/steps')} />
        )
    }
]
export default routes