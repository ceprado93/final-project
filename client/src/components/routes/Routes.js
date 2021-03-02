import { Switch, Route, Redirect } from 'react-router-dom'

import IndexPage from '../pages/Index/Index'
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login'
import Profile from '../pages/Profile/Profile'
import Waves from './../pages/Waves/Waves'
import WaveDetails from './../pages/Wave-details/Wave-details'
import Continents from './../pages/Regions/Continents'
import Regions from './../pages/Regions/Regions'


const Routes = ({ storeUser, loggedUser }) => {

    return (
        <>
        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route exact path="/waves" render={() => <Continents />} />
            <Route exact path="/wavesdet" render={() => <Waves loggedUser={loggedUser} />} />
            <Route path="/waves/:continent" render={props => <Regions {...props} />} />
            <Route path="/details/:id" render={props => <WaveDetails {...props} />} />
            <Route path="/signup" render={props => <Signup storeUser={storeUser}  {...props} />} />
            <Route path="/login" render={props => <Login storeUser={storeUser} {...props} />} />
            <Route path="/profile" render={() => loggedUser ? <Profile loggedUser={loggedUser} /> : <Redirect to="/" />} />
        </Switch>
        </>
    )
}

export default Routes