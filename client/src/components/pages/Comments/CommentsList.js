import { Component } from 'react'
import { Container, Button, Modal } from 'react-bootstrap'
import CommentCard from './CommentCard'
import Spinner from '../../shared/Spinner/Spinner'
import CommentForm from './CommentForm'
import CommentService from '../../../service/comment.service'

class Comments extends Component {

    constructor() {
        super()
        this.state = {
            comments: [],
            showForm: false
        }

        this.CommentService = new CommentService()
    }


    componentDidMount() {
        this.loadComments()
    }

    loadComments() {
       
        this.CommentService
            .getComments()
            .then(response => {
                console.log(response)
                const filteredArr = response.data.filter(elm => elm.wave === this.props.wave_id)
                console.log(filteredArr)

                this.setState({ comments: filteredArr })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (

            <>
              
                <Container as="section">
                    
                    <h3>Comments</h3>
                    <CommentForm wave={this.props.wave_id} refreshList={() => this.loadComments()}/>
                    {this.state.comments ?.map(elm=> <CommentCard key={elm._id}{...elm}/>)}
                </Container>


                {/* <Modal show={this.state.showForm} onHide={() => this.togglemodalForm(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>New wave</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <WaveForm closeModal={() => this.togglemodalForm(false)} refreshList={() => this.loadWaves()} />
                    </Modal.Body>
                </Modal> */}

            </>

        )
    }
}

export default Comments