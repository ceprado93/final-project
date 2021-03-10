import { Component } from 'react'
import { Button, Form } from 'react-bootstrap'


class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            title: ''
        }
    }
    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    handleSubmit(e) {
        e.preventDefault()
        const place = this.state
        this.props.searchPlace(place)
        this.setState({ title: '' })
    }

    render() {
        return (
            <div className="field">
                <div className="control">
                    <Form onSubmit={e => this.handleSubmit(e)}>
                        <Form.Group>
                            <Form.Label className="input"></Form.Label>
                            <Form.Control type="text" name="title" value={this.state.title} onChange={e => this.handleInputChange(e)} placeholder="Find your location" />
                        </Form.Group>

                        <Button variant="outline-dark" block type="submit" className="log-button">Search</Button>
                    </Form>

                </div>
            </div>
        )
    }
}

export default SearchBar
