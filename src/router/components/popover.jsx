import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/popover',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-popover' */'@/docs/popover')} />
        )
    }
]
export default routes