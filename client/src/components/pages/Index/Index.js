import { Container, Row, Carousel, CarouselItem } from 'react-bootstrap'
// import Spinner from './../../shared/Spinner/Spinner'
import { Link } from 'react-router-dom'
import './Home.css'

const IndexPage = () => {
    return (
        <>
            <section className="first-section">
                <Container >
                    <h1>WAVE MAPS</h1>
                    <Row className="wave-link">
                        <Link to="/continents" className="btn btn-dark btn-sm">See waves</Link>
                    </Row>

                </Container>

                <small> Photo: Chris Buckard</small>
            </section>

            <section className="second-section">
                <h2>Best waves</h2>
                <Carousel style={{ height: 300 }} >
                    <Carousel.Item>
                        <img height={600}
                            className="d-block w-100 h-200"
                            src="https://www.singlequiver.com/enelpico/wp-content/uploads/2019/07/la-barra-mundaka.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height={600}
                            className="d-block w-100"
                            src="http://galaxypro.s3.amazonaws.com/spot-media/322/322-rodiles-spain.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height={600}
                            className="d-block w-100"
                            src="https://www.upsurfboard.com/wp-content/uploads/2019/04/Foz.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>

            <section className="third-button">
                <h2>Comuninity</h2>
                <p>lots of benefits when you join in</p>
                <p>If you already have an account, log in here</p>
                <p>subscribe</p>
            </section>

        </>
    )
}

export default IndexPage