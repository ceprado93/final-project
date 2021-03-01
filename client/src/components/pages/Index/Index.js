import { Container } from 'react-bootstrap'
// import Spinner from './../../shared/Spinner/Spinner'
import { Link } from 'react-router-dom'

const IndexPage = () => {
    return (
        <>
        <Container as="section">
            <h1>Welcome</h1>
           
            <Link to="/waves" className="btn btn-light btn-sm">See waves</Link>
        </Container>
         </>
    )
}

export default IndexPage