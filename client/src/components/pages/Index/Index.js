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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu</p>
                    <Row className="wave-link">
                        <Link to="/continents" className="btn btn-outline-light btn-lg searchBtn">Search</Link>
                    </Row>

                </Container>

                <small> Photo: Brent Bielmann</small>
            </section>

            <section className="second-section">
                <h2>OUR WAVES</h2>
                <Carousel style={{ height: 600 }} >
                    <Carousel.Item>
                        <img height={600}
                            className="d-block w-100 h-200"
                            src="https://www.surkawa.com/blog/wp-content/uploads/2017/01/la-ola-perfecta-jon-aspuru-entrevista.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <Link to={{ pathname: '/Europe', state: { lat: 52.310768, lng: 8.679055, zoom: 4 } }} className="btn btn-outline-light btn-lg searchBtn carouselBtn" >Europe</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height={600}
                            className="d-block w-100"
                            src="https://images.squarespace-cdn.com/content/v1/527c03e4e4b03247a686bb74/1463006042573-IFOIIUNKCG3VUP1TT0T7/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fmUlfgh0PDRwdBlKSZS7d3uXFJOxHRx9nL7VEpwjp7Evlv90AApd9Yk_mbh9SCYVMOqpeNLcJ80NK65_fV7S1UYWlBJirb5kIoml_M6l_hD-TWfngdmVtRt4YaIDL0rNceDIgQJrH6xrLDqB5rjhOSA/seascapes004.JPG?format=1500w"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <Link to={{ pathname: '/Africa', state: { lat: 1.667755, lng: 21.262689, zoom: 3 } }} className=" carouselBtn btn btn-outline-light btn-lg searchBtn" >Africa</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height={600}
                            className="d-block w-100"
                            src="https://www.surfholidays.com/assets/images/blog/2016-05-26-desert-point-lombok-indo-3-jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <Link to={{ pathname: '/Asia', state: { lat: 22.908563, lng: 105.228742, zoom: 3 } }} className="carouselBtn btn btn-outline-light btn-lg searchBtn">Asia</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height={600}
                            className="d-block w-100"
                            src="https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2018/12/21091328/The_Reef_Sloane_Tombstones_Lineup.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <Link to={{ pathname: '/AustraliaNZ', state: { lat: -30.697441, lng: 142.698648, zoom: 4 } }} className="carouselBtn btn btn-outline-light btn-lg searchBtn">Australia and NZ</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height={600}
                            className="d-block w-100"
                            src="https://margruesa.com/wp-content/uploads/2013/06/13-P-Pipeline-peak-Oahu-Hi-1975-jeff-divine-divine-.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <Link to={{ pathname: '/Pacific', state: { lat: 12.094258, lng: - 165.853220, zoom: 3 } }} className="carouselBtn btn btn-outline-light btn-lg searchBtn" >Pacific</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height={600}
                            className="d-block w-100"
                            src="http://earthdayalliance.com/wordpress/wp-content/uploads/2020/03/001227_BURKARD_20350.jpg"
                            alt="Third slide"
                        />


                        <Carousel.Caption>
                            <Link to={{ pathname: '/America', state: { lat: 9.795061, lng: - 83.979147, zoom: 2 } }} className="carouselBtn btn btn-outline-light btn-lg searchBtn" >America</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>

            <section className="third-section">
                <h2>Comuninity</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="linkbtn">
                    <Link to="/login" className=" btn btn-dark btn-lg searchBtn">Log in</Link>
                    <Link to="/signup" className=" btn btn-outline-dark btn-lg searchBtn">Sign up</Link>
                </div>
            </section>

        </>
    )
}

export default IndexPage

