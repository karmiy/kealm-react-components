import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/quick-start',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-quick-start' */'@/docs/quick-start')} />
        )
    }
]
export default routes