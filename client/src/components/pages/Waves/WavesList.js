import WaveCard from './WaveCard'
import { Row } from 'react-bootstrap'

const WavesList = ({ waves, loggedUser}) => {

    return (
        <Row>
            {waves?.map((elm, idx) => { return elm.isAccepted && <WaveCard key={idx} {...elm} role={loggedUser?.role}/>})}
        </Row>
    )
}

export default WavesList