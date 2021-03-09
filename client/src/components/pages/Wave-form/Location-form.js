import { Component } from 'react'
import WaveService from '../../../service/wave.service'
import { Form, Button, Container, Modal } from 'react-bootstrap'
import ModalMap from './Modal-map'

class LocationForm extends Component {

    constructor(props) {
        super(props)
        this.state = {

            latitude: 0,
            longitude: 0

        }

        this.waveService = new WaveService()
    }

    handleInputChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    togglemodalForm(value) {
        this.setState({ showForm: value })
    }

    setLocation(point) {
        this.setState({ latitude: point.lat, longitude: point.lng })
    }

    handleSubmit(e) {

        e.preventDefault()
        alert('soy location')
        const place = this.state
        this.props.searchPlace(place)
        this.setState({ title: '' })
    }


    render() {
        return (
            <Container
            >
                <Form onSubmit={e => this.handleSubmit(e)} style={{ position: "relative" }}>

                    <Form.Group>
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control type="number" name="latitude" value={this.state.latitude} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Longitude</Form.Label>
                        <Form.Control type="number" name="longitude" value={this.state.longitude} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Button variant="dark" block type="submit" > Save location</Button>
                    <ModalMap sendLocation={point => this.setLocation(point)}></ModalMap>


                </Form>
            </Container >
        )
    }
}



export default LocationForm