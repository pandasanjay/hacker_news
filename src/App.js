import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './styles/style.scss'
import Story from './containers/Story'
import NoMatch from './containers/NoMatch'
const App = () => {
    return (
        <>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Story />
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default App
