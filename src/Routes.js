import React from 'react'
import loadable from '@loadable/component'
import App from './App'
import { loadData } from './containers/Story'
const Story = loadable(() => import('./containers/Story'), {
    fallback: <div>Loading...</div>,
})
const NoMatch = loadable(() => import('./containers/NoMatch'), {
    fallback: <div>Loading...</div>,
})
export default [
    {
        component: App,
        routes: [
            {
                component: Story,
                loadData,
                path: '/',
                exact: true,
            },
            {
                component: NoMatch,
            },
        ],
    },
]
