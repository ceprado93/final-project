import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import WaveService from '../../../service/wave.service'
import Spinner from '../../shared/Spinner/Spinner'

class Regions extends Component {

    constructor() {
        super()
        this.state = {
            region: [],
            numberOfWaves: 0
        }
        this.waveService = new WaveService()
    }

    componentDidMount() {

        // const continent = this.props.match.params.continent
        console.log(this.props.match.params)
        const newRegion = []

        this.waveService
            .getRegion()
            .then(response => {
                console.log(response.data)
                response.data.map(elm => newRegion.push(elm))
                const filteredSet = new Set(newRegion)
                const filteredArr = [...filteredSet]
                //to do
                console.log(filteredArr)

                this.setState({
                    region: filteredArr
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
                                    {this.state.region.map(elm => <li key={elm._id}> <Link to={`/waves/${elm.region}`} {...this.props} >{elm.region}</Link></li>)}
                                </ul>
                                <hr />
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