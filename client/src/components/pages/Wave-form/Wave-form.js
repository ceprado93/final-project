import { Component } from 'react'
import WaveService from '../../../service/wave.service'
import { Form, Button, Container } from 'react-bootstrap'

class WaveForm extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            imageUrl: '',
            imageAuthor: '',
            latitude: 0,
            longitude: 0,
            region: '',
            continent: '',
            type: '',
            seaBed: '',
            swellDirections: 0,
            windDirections: 0,
            swellRange: '',
            bestSeason: '',
            crowd: '',
            quality: 0,
            level: '',
            tide: ''
        }

        this.waveService = new WaveService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {

        e.preventDefault()

        this.waveService
            .saveWave(this.state)
            .then(() => {
                this.props.closeModal()
                this.props.refreshList()
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Container>

                <Form onSubmit={e => this.handleSubmit(e)}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" value={this.state.title} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" value={this.state.description} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Image Url</Form.Label>
                        <Form.Control type="text" name="imageUrl" value={this.state.imageUrl} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Image Author</Form.Label>
                        <Form.Control type="text" name="imageAuthor" value={this.state.imageAuthor} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control type="number" name="latitude" value={this.state.latitude} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Longitude</Form.Label>
                        <Form.Control type="number" name="longitude" value={this.state.longitude} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Region</Form.Label>
                        <Form.Control type="text" name="region" value={this.state.region} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Continent</Form.Label>
                        <Form.Control type="text" name="continent" value={this.state.continent} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Type</Form.Label>
                        <Form.Control type="text" name="type" value={this.state.type} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Sea bed</Form.Label>
                        <Form.Control type="text" name="seaBed" value={this.state.seaBed} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Swell Directions</Form.Label>
                        <Form.Control type="number" name="swellDirections" value={this.state.swellDirections} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Wind Directions</Form.Label>
                        <Form.Control type="number" name="windDirections" value={this.state.windDirections} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Swell Range</Form.Label>
                        <Form.Control type="text" name="swellRange" value={this.state.swellRange} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Best season</Form.Label>
                        <Form.Control type="text" name="bestSeason" value={this.state.bestSeason} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Crowd</Form.Label>
                        <Form.Control type="text" name="crowd" value={this.state.crowd} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Quality</Form.Label>
                        <Form.Control type="number" name="quality" value={this.state.quality} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Level</Form.Label>
                        <Form.Control type="text" name="level" value={this.state.level} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tide</Form.Label>
                        <Form.Control type="text" name="tide" value={this.state.tide} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>

                    <Button variant="dark" block type="submit">New wave</Button>
                </Form>
            </Container>
        )
    }
}



export default WaveForm