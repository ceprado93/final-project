import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  constructor() {
    super()
    this.state = {
      center: {
        lat: undefined,
        lng: undefined
      },
      zoom: undefined
    }
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
    this.setState({ center: { lat: this.props.lat, lng: this.props.lng }, zoom: this.props.zoom })
  }
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={this.state?.center}
          defaultZoom={this.state?.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map