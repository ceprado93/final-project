import { Switch, Route, Redirect } from 'react-router-dom'

import IndexPage from '../pages/Index/Index'
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login'
import Profile from '../pages/Profile/Profile'
import Waves from './../pages/Waves/Waves'
import WaveDetails from './../pages/Wave-details/Wave-details'
import Continents from './../pages/Regions/Continents'
import Regions from './../pages/Regions/Regions'
import MyMap from '../pages/Cluster/MyMap'


const Routes = ({ storeUser, loggedUser }) => {

    return (
        <>
            <Switch>
                <Route path="/" exact render={() => <IndexPage />} />
                <Route exact path="/gmap" render={() => <MyMap/>} />
                <Route exact path="/signup" render={props => <Signup storeUser={storeUser}  {...props} />} />
                <Route exact path="/login" render={props => <Login storeUser={storeUser} {...props} />} />
                <Route exact path="/profile" render={() => loggedUser ? <Profile loggedUser={loggedUser} /> : <Redirect to="/" />} />
                <Route exact path="/continents" render={() => <Continents />} />
                <Route exact path="/waves/:region" render={props => <Waves {...props} loggedUser={loggedUser} />} />
                <Route exact path="/:continent" render={(props) => <Regions {...props} />} />
                <Route exact path="/details/:id" render={props => <WaveDetails {...props} />} />
              


            </Switch>
        </>
    )
}

export default Routes