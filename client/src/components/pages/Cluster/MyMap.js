import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import waveService from './../../../service/wave.service'

import supercluster from 'points-cluster';
import Marker from './Marker';
import ClusterMarker from './ClusterMarker';
import mapStyles from './mapStyles.json';
import { markersData, susolvkaCoords } from './Data';
import MapWrapper from './MapWrapper';

const AnyReactComponent = ({ text }) => <div>{text}</div>

const MAP = {
    defaultZoom: 3,
    defaultCenter: { lat: 60.814305, lng: 47.051773 },
    options: {
      styles: mapStyles,
      maxZoom: 19,
    },
  };

class MyMap extends Component {
  constructor() {
    super()
    this.state = {
     mapOptions:{
        center: { lat: 60.814305, lng: 47.051773 },
        zoom: undefined
     }
        
      ,
      waves: [],
      ready: false,
      clusters:[]
    }
    this.waveService = new waveService()
  }
  getClusters = () => {
    const clusters = supercluster(markersData, {
      minZoom: 0,
      maxZoom: 16,
      radius: 60,
    });

    return clusters(this.state.mapOptions);
  }
  createClusters = props => {
    this.setState({
        clusters: this.state.mapOptions.bounds
        ? this.getClusters(props).map(({ wx, wy, numPoints, points }) => ({
            lat: wy,
            lng: wx,
            numPoints,
            id: `${numPoints}_${points[0].id}`,
            points,
          }))
        : [],
    });
    
  };
  
  handleMapChange = ({ center, zoom, bounds }) => {
    console.log(this.state.clusters)
    this.setState(
      {
        mapOptions: {
          center,
          zoom,
          bounds,
        },
      },
      () => {
        this.createClusters(this.props);
      }
    );
  };

  componentDidMount() {
    this.setValues()
  }

  setValues() {
    this.setState({
     mapOptions:{center:{ lat: 40.814305, lng: 7.051773 }, zoom:2}
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
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDWox-Ew5Z4Wm2OMqZSFRhM-IIwzPtxRgU' }}
          defaultCenter={ this.state.mapOptions.center }
          defaultZoom={4}
          onChange={this.handleMapChange}
        >
            {this.state.clusters.map(item => {
            if (item.numPoints === 1) {
              return (
                <Marker
                  key={item.id}
                  lat={item.points[0].lat}
                  lng={item.points[0].lng}
                />
              );
            }
            return (
                <ClusterMarker
                  key={item.id}
                  lat={item.lat}
                  lng={item.lng}
                  points={item.points}
                />
              );
            })}
        {/* //   {this.state.ready && this.state.waves.map(elm => <AnyReactComponent */}
        {/* //     key={elm._id}
        //     lat={elm.location.coordinates[0]}
        //     lng={elm.location.coordinates[1]}
        //     text={elm.title}
        //   />)} */}

        </GoogleMapReact>

      </div>
    );
  }
}

export default MyMap