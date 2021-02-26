import { Container } from 'react-bootstrap'

const Profile = ({ loggedUser }) => {

    return (
        <Container>
            <h1>¡Hola, {loggedUser.username}!</h1>
        </Container>
    )
}

export default Profile