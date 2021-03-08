import { Card, Col, Button} from 'react-bootstrap'
import WaveService from './../../../service/wave.service'
import { Link } from 'react-router-dom'

const WaveCard = ({ title, images, _id}) => {
const waveService = new WaveService()

function deleteWave(wave){

    waveService 
    .deleteWave(wave._id)
    .then(response => console.log(response))
    .catch(err=>console.log(err))
}

    return (
        <Col md={4} className="wave-card">
            <Card>
                <Card.Img variant="top" src={images[0].url} />
                <Card.Body>
                    <h3>{title}</h3>
                    <Link to={`/details/${_id}`} className="btn btn-dark btn-sm btn-block">See details</Link>
                    <Button  onClick={()=>deleteWave({_id})}className="btn btn-dark btn-sm btn-block">Delete wave</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default WaveCard 