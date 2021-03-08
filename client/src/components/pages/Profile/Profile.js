import { Container } from 'react-bootstrap'

const Profile = ({ loggedUser }) => {

    return (
        <Container style={{ marginTop: 100 }}>
            <h1>¡Hola, {loggedUser.username}!</h1>
        </Container>
    )
}

export default Profile