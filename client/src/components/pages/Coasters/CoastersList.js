import CoasterCard from './CoasterCard'

import { Row } from 'react-bootstrap'

const CoastersList = ({ coasters, loggedUser }) => {
    return (
        <Row>
            {coasters?.map(elm => <CoasterCard key={elm._id} {...elm} user_id={loggedUser._id} />)}
        </Row>
    )
}

export default CoastersList