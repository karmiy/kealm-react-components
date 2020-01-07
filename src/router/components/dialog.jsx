import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/dialog',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-dialog' */'@/docs/dialog')} />
        )
    }
]
export default routes