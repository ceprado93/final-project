import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import CoasterService from '../../../service/coasters.service'
import Spinner from './../../shared/Spinner/Spinner'


class CoasterDetails extends Component {

    constructor() {
        super()
        this.state = {
            coaster: undefined
        }
        this.coasterService = new CoasterService()
    }


    componentDidMount() {

        const coaster_id = this.props.match.params.coaster_id

        this.coasterService
            .getCoaster(coaster_id)
            .then(response => this.setState({ coaster: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container as="section">

                {this.state.coaster

                    ?

                    <Row>
                        <Col md={{ span: 6, offset: 1 }}>
                            <h1>{this.state.coaster?.title}</h1>
                            <hr />
                            <p>{this.state.coaster?.description}</p>
                            <hr />
                            <p><strong>Longitud:</strong> {this.state.coaster?.length} metros | <strong>Inversiones:</strong> {this.state.coaster?.inversions}</p>
                            <Link to="/listado-montañas" className="btn btn-dark">Volver al listado</Link>
                        </Col>

                        <Col md={4}>
                            <h3>Fotos</h3>
                            <img style={{ width: '100%', marginBottom: 20 }} src={this.state.coaster?.imageUrl} alt={this.state.coaster?.title} />
                        </Col>
                    </Row>

                    :

                    <Spinner />}
            </Container>
        )
    }
}


export default CoasterDetails