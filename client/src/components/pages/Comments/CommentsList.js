import { Component } from 'react'
import CommentCard from './CommentCard'
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
            .getCommentsWave(this.props.wave_id)
            .then(response => {
                this.setState({ comments: response.data })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>

                <h3 style={{ marginTop: 30, letterSpacing: '.1em' }}>Comments</h3>
                <CommentForm wave={this.props.wave_id} refreshList={() => this.loadComments()} handleAlert={this.props.handleAlert} />
                {this.state.comments?.map(elm => { return elm.isAccepted && <CommentCard userId={this.props.commentUser} refreshList={() => this.loadComments()} key={elm._id}{...elm} /> })}

            </>
        )
    }
}

export default Comments