import { Container, Row } from 'react-bootstrap'
// import Spinner from './../../shared/Spinner/Spinner'
import { Link } from 'react-router-dom'

const IndexPage = () => {
    return (
        <>

        
            <img className='front-image' src='https://offgridhideaways.com/worldwide/assets/uploads/CB_AleutianIslands_wp-1200x816.jpg' alt='aleutians-wave' />
            <Container as="section">
                <small> Photo: Chris Buckard</small>
                <Row>
                    <h1>Welcome</h1>
                    <Link to="/continents" className="btn btn-dark btn-sm">See waves</Link>
                </Row>

            </Container>
        </>
    )
}

export default IndexPage

