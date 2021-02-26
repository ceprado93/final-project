import { Component } from 'react'
import { Container, Button, Modal } from 'react-bootstrap'
import CoastersList from './CoastersList'
import CoasterForm from './../Coaster-form/Coaster-form'
import Spinner from './../../shared/Spinner/Spinner'

import './Coasters.css'

import CoasterService from './../../../service/coasters.service'

class Coasters extends Component {

    constructor() {
        super()
        this.state = {
            coasters: [],
            showForm: false
        }

        this.coasterService = new CoasterService()
    }


    componentDidMount() {
        this.loadCoasters()
    }

    loadCoasters() {
        this.coasterService
            .getCoasters()
            .then(response => this.setState({ coasters: response.data }))
            .catch(err => console.log(err))
    }


    togglemodalForm(value) {
        this.setState({ showForm: value })
    }


    render() {
        return (

            <>
                <Container as="section">
                    <h1>Listado de montañas rusas</h1>
                    {this.props.loggedUser && <Button onClick={() => this.togglemodalForm(true)} variant="dark" className="new-coaster-btn">Crear montaña rusa</Button>}
                    {this.state.coasters.length ? <CoastersList coasters={this.state.coasters} loggedUser={this.props.loggedUser} /> : <Spinner />}
                </Container>


                <Modal show={this.state.showForm} onHide={() => this.togglemodalForm(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nueva montaña rusa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CoasterForm closeModal={() => this.togglemodalForm(false)} refreshList={() => this.loadCoasters()} />
                    </Modal.Body>
                </Modal>

            </>

        )
    }
}

export default Coasters