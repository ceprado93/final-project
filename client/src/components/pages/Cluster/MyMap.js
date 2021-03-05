import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import waveService from './../../../service/wave.service'

import supercluster from 'points-cluster';
import Marker from './Marker';
import ClusterMarker from './ClusterMarker';
import mapStyles from './mapStyles.json';


class MyMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mapOptions:{
        center:{ lat: this.props.lat, lng: this.props.lng }, 
        zoom: this.props.zoom,
        styles: mapStyles},
      waves: [],
      ready: false,
      clusters:[]
    }
    this.waveService = new waveService()
  }

  getWaves =   () =>{

    return this.waveService.getWaves()
    .then(response => {
        console.log(response.data)
        const markersData = [...response.data].map((elm, index) => ({
          id: index,
          lat: elm.location.coordinates[0],
          lng: elm.location.coordinates[1]
        }))
       return markersData
    })
    .catch(err => [])

  }

  getClusters =  () => this.getWaves().then(markers => {
console.log(markers)
      const clusters = supercluster(markers, {
        minZoom: 0,
        maxZoom: 16,
        radius: 60,
      });
      console.log(clusters(this.state.mapOptions))
      return clusters(this.state.mapOptions);
    })
  

  createClusters = props => {
    this.getClusters().then(clusters => {
console.log(clusters)
      const mappedClusters = clusters.map(({ wx, wy, numPoints, points }) => ({
          lat: wy,
          lng: wx,
          numPoints,
          id: `${numPoints}_${points[0].id}`,
          points,
        }))
      this.setState({
          clusters: this.state.mapOptions.bounds 
          ? mappedClusters
          : [],
      });
    })
    
  };
  
  handleMapChange = ({ center, zoom, bounds }) => {
    this.setValues()
    console.log(center, zoom, bounds)
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

 
  setValues() {
  
      this.waveService
        .getWaves()
        .then(response => {
          this.setState({ waves: response.data, ready: true })
          console.log(response.data[2].location.coordinates)
        })
        .catch(err => console.log(err))
  

  }

  render() {
    return (
      <div style={{ height: '1000px', width: '1000px' }}>
        <GoogleMapReact
        id="map"
        yesIWantToUseGoogleMapApiInternals
          bootstrapURLKeys={{ key: 'AIzaSyDWox-Ew5Z4Wm2OMqZSFRhM-IIwzPtxRgU' }}
          defaultCenter={ this.state.mapOptions.center}
          defaultZoom={this.state.mapOptions.zoom}
          onChange={(e)=>this.handleMapChange(e)}
          // options={MAP.options}
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