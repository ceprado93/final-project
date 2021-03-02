import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import WaveService from '../../../service/wave.service'
import Spinner from '../../shared/Spinner/Spinner'

class Regions extends Component {

    constructor() {
        super()
        this.state = {
            region : '',
            numberOfWaves: 0
        }
        this.waveService = new WaveService()
    }
    
    componentDidMount() {

        const continent = this.props.match.params.continent
        console.log(this.props.match.params.continent)

        this.waveService
            .getRegion()
            .then(response =>{
                console.log(response.data)
                this.setState({
                    region:response.data.region,
                    // numberOfWaves
                })
            } 
)
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container as="section">
                hola

                {/* {this.state.wave

                    ?
                    <Row>
                        <Col md={{ span: 6 }}>
                            <h1>{this.state.wave?.title}</h1>
                            <hr />
                            <p>{this.state.wave?.description}</p>
                            <hr />
                            <p><strong>Swell Range:</strong> {this.state.wave?.swellRange} m | <strong>Quality</strong> {this.state.wave?.quality}</p>
                            <Link to="/waves" className="btn btn-dark">Back to {this.state.wave?.region}</Link>
                        </Col>

                        <Col md={6}>
                            <h3>Photos</h3>
                            <img style={{ width: '100%', marginBottom: 20 }} src={this.state.wave?.images[0].url} alt={this.state.wave?.images[0].title} />
                            <small>{this.state.wave?.images[0].title}</small>
                        </Col>
                    </Row>
                    :
                    <Spinner />} */}
            </Container>
        )
    }
}


export default Regions