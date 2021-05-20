import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Badges from '../pages/Badges'
import BadgeNew from '../pages/BadgeNew'
import Home from '../pages/Home'
import Layout from './Layout'
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';
import BadgeEdit from '../pages/BadgeEdit';

function App() {
    return(
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/badges' component={Badges} />
                <Route exact path='/badges/new' component={BadgeNew} />
                <Route exact path='/badges/:badgeId' component={BadgeDetailsContainer} />
                <Route exact path='/badges/:badgeId/edit' component={BadgeEdit} />
            </Switch>
        </Layout>
    </BrowserRouter>
    )
}

export default App 