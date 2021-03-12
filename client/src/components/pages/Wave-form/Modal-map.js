import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import mapStyles from './../Cluster/mapStyles.json'
import Marker from './../Cluster/Marker'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MAP = {
    options: {
        styles: mapStyles,
        maxZoom: 19,
    },
}

class ModalMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mapOptions: {
                center: { lat: 42.024512, lng: -23.099698 },
                zoom: 1,
                styles: mapStyles
            },
            point: {
                lat: undefined,
                lng: undefined
            }
        }
    }


    handleMapChange = ({ center, zoom, bounds }) => {

        this.setState({ mapOptions: { center, zoom, bounds, }, });
    }

    drawMarker(e) {
        this.setState({ point: { lat: e.lat, lng: e.lng } }, () => { this.props.sendLocation(this.state.point) })
    }

    render() {
        return (
            <div style={{ height: '500px', width: '100%' }}>

                <GoogleMapReact
                    id="map"
                    yesIWantToUseGoogleMapApiInternals
                    bootstrapURLKeys={{ key: 'AIzaSyDWox-Ew5Z4Wm2OMqZSFRhM-IIwzPtxRgU' }}
                    defaultCenter={this.state.mapOptions.center}
                    center={this.state.mapOptions.center}
                    defaultZoom={this.state.mapOptions.zoom}
                    zoom={this.state.mapOptions.zoom}
                    options={MAP.options}
                    onChange={(e) => this.handleMapChange(e)}
                    onClick={(e) => this.drawMarker(e)}

                >
                    {this.state.point.lat && <Marker

                        lat={this.state.point.lat}
                        lng={this.state.point.lng}
                        text='Your wave'

                    />}
                </GoogleMapReact>

            </div>
        )
    }
}

export default ModalMap