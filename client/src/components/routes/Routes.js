import { Switch, Route, Redirect } from 'react-router-dom'

import IndexPage from '../pages/Index/Index'
import Coasters from '../pages/Coasters/Coasters'
import CoasterDetails from '../pages/Coaster-details/Coaster-details'
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login'
import Profile from '../pages/Profile/Profile'

const Routes = ({ storeUser, loggedUser }) => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/listado-montañas" render={() => <Coasters loggedUser={loggedUser} />} />
            <Route path="/detalles/:coaster_id" render={props => <CoasterDetails {...props} />} />
            <Route path="/registro" render={props => <Signup storeUser={storeUser}  {...props} />} />
            <Route path="/inicio-sesión" render={props => <Login storeUser={storeUser} {...props} />} />
            <Route path="/perfil" render={() => loggedUser ? <Profile loggedUser={loggedUser} /> : <Redirect to="/" />} />
        </Switch>
    )
}

export default Routes