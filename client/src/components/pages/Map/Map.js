import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import waveService from './../../../service/wave.service'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  constructor() {
    super()
    this.state = {
      center: {
        lat: undefined,
        lng: undefined
      },
      waves: [],
      ready: false,
      zoom: undefined
    }
    this.waveService = new waveService()
  }
  componentDidMount() {
    this.setValues()
  }
  //   static defaultProps = {
  //     center: {
  //       lat: 29.708085, 
  //       lng: 16.350792
  //     },
  //     zoom: 1
  //   };
  setValues() {
    this.setState({
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: this.props.zoom
    }, () => {
      this.waveService
        .getWaves()
        .then(response => {
          this.setState({ waves: response.data, ready: true })
          console.log(response.data[2].location.coordinates)
        })
        .catch(err => console.log(err))
    })

  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDWox-Ew5Z4Wm2OMqZSFRhM-IIwzPtxRgU' }}
          defaultCenter={this.state?.center}
          defaultZoom={this.state?.zoom}
        >
          {this.state.ready && this.state.waves.map(elm => <AnyReactComponent
            key={elm._id}
            lat={elm.location.coordinates[0]}
            lng={elm.location.coordinates[1]}
            text={elm.title}
          />)}
        </GoogleMapReact>

      </div>
    );
  }
}

export default Map