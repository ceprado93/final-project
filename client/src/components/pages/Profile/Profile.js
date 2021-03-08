import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import WaveService from './../../../service/wave.service'
import CommentService from './../../../service/comment.service'

class Profile extends Component {
constructor(){
    super()
    this.state ={
        waves:[],
        comments:[]
    }
    this.waveService = new WaveService()
    this.commentService = new CommentService()
}
componentDidMount(){
    this.load()
}
load(){
const promise1 = this.waveService.getWaves()
const promise2 = this.commentService.getComments()
    Promise
    .all([promise1, promise2])
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
}

render(){
    return (
        <Container style={{ marginTop: 100 }}>
            <h1>Welcome, {this.props.loggedUser.username}!</h1>
            <Row>
                <Col md={4}>
                    <img src={this.props.loggedUser.avatar}/>
                    <h3>{this.props.loggedUser.username}</h3>
                </Col>
                <Col md={4}>wefwe</Col>
                <Col md={4}>ffewf</Col>
            </Row>
        </Container>
    )
}
}
export default Profile