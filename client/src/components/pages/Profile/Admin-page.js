import { Component } from 'react'
import { Container } from 'react-bootstrap'
import AuthService from '../../../service/auth.service'
import PendingWaves from './Pending-waves'
import PendingComments from './PendingComments'
import './Admin-profile.css'

class AdminPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            waves: [],
            comments: []
        }

        this.authservice = new AuthService()
    }

    componentDidMount() {
        this.load()

    }

    load() {
        this.authservice
            .verifyChanges()
            .then(response => {
                this.setState({ waves: response.data[0], comments: response.data[1] })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <section className="admin-header">
                    <h1>Admin page</h1>
                </section>
                <Container style={{ marginTop: 100, marginBottom: 100 }}>
                    <h1 style={{ letterSpacing: '0.1em' }}>Pending waves</h1>
                    <ul>
                        {this.state.waves?.map(elm => <PendingWaves key={elm._id}{...elm} refreshWaves={() => this.load()} />)}
                    </ul>
                    <hr></hr>
                    <h1 style={{ letterSpacing: '0.1em' }}>Pending comments</h1>
                    <ul>
                        {this.state.comments?.map(elm => <PendingComments key={elm._id}{...elm} refreshComments={() => this.load()} />)}
                    </ul>

                </Container >
            </>
        )
    }
}

export default AdminPage