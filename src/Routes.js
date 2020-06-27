import App from './App'
import Story from './containers/Story'
import NoMatch from './containers/NoMatch'
export default [
    {
        ...App,
        routes: [
            {
                ...Story,
                path: '/',
                exact: true,
            },
            {
                ...NoMatch,
            },
        ],
    },
]
