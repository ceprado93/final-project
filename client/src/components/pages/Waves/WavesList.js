import WaveCard from './WaveCard'

import { Row } from 'react-bootstrap'

const WavesList = ({ waves }) => {
    return (
        <Row>
            {waves?.map((elm,idx) => <WaveCard key={idx} {...elm} />)}
        </Row>
    )
}

export default WavesList