import { Component } from 'react'
import { Container } from 'react-bootstrap'
import waveservice from '../../../service/wave.service'
import PendingWaves from './Pending-waves'
import CommentService from './../../../service/comment.service'
import PendingComments from './PendingComments'
import { List } from 'immutable'

class AdminPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            waves: [],
            comment: []
        }

        this.Waveservice = new waveservice()
        this.CommentService = new CommentService()

    }

    componentDidMount() {
        this.loadWaves()
        this.loadComments()

    }

    loadWaves() {
        this.Waveservice
            .getWaves()
            .then(response => {
                const pendingWaves = response.data.filter(elm => !elm.isAccepted)
                console.log(pendingWaves)
                this.setState({ waves: pendingWaves })
            })
            .catch(err => console.log(err))
    }
    loadComments() {

        this.CommentService
            .getComments()
            .then(response => {
                const filteredArr = response.data.filter(elm =>  !elm.isAccepted)
                this.setState({ comments: filteredArr })
            })
            .catch(err => console.log(err))
    }

 

    render() {
        return (
            <Container style={{ marginTop: 100 }}>
                <h1>Pending waves</h1>
                <ul>
                    {this.state.waves?.map(elm => <PendingWaves key={elm._id}{...elm} refreshWaves={() => this.loadWaves()}/>)}
                </ul>
                <hr></hr>
                <h1>Pending comments</h1>
                <ul>
                    {this.state.comments?.map(elm => <PendingComments key={elm._id}{...elm} refreshComments={() => this.loadComments()}/>)}
                </ul>

            </Container >
        )

    }
}

export default AdminPage 