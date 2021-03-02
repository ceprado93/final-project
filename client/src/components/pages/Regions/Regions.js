import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import WaveService from '../../../service/wave.service'
import Spinner from '../../shared/Spinner/Spinner'

class Regions extends Component {

    constructor() {
        super()
        this.state = {
            region : [],
            numberOfWaves: 0
        }
        this.waveService = new WaveService()
    }
    
    componentDidMount() {

        const continent = this.props.match.params.continent
        console.log(this.props.match.params.continent)
        const newRegion =[]

        this.waveService
            .getRegion()
            .then(response =>{
                console.log(response.data)
                response.data.map(elm=>newRegion.push(elm))
                const filteredSet = new Set(newRegion)
                const filteredArr = [...filteredSet]
                console.log(filteredArr)
              
                this.setState({
                    region:filteredArr
                    // numberOfWaves:this.state.region.length
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
            <Container as="section">
               
                {this.state.region

                    ?
                    <Row>
                        <Col md={{ span: 6 }}>
                            <ul>
                                <li>{this.state.region.map(elm=><Link to='/'key={elm._id}>{elm.region}</Link>)}</li>
                            </ul>
                            <hr />
                        </Col>

                        <Col md={6}>
                            <h3>Photos</h3>
                            <img style={{ width: '100%', marginBottom: 20 }} src={this.state.wave?.images[0].url} alt={this.state.wave?.images[0].title} />
                            <small>{this.state.wave?.images[0].title}</small>
                        </Col>
                    </Row>
                    :
                    <Spinner />}
            </Container>
            </>
        )
    }
}


export default Regions