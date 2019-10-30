import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/tooltip',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-tooltip' */'@/docs/tooltip')} />
        )
    }
]
export default routes