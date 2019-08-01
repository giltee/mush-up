import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import LOCATION from '../utils/locations'
import WeatherBar from './weather'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CancelIcon from '@material-ui/icons/Cancel'


// Display the map and markers, open weather data on marker click
export class MapContainer extends React.Component {
    //
    state = {
        openModal: false,
        location: "",
    }
    // set the center of the map to roughly the center of British Columbia, zoom to see all locations
    static defaultProps = {
        center: {
            lat: 53.746012,
            lng: -123.227990,
        },
        zoom: 5
    };
    // get the click even and open corresponding weather feed as a modal
    handleOpen = (props) => {
        this.setState({ openModal: true});
        switch (props.name) {
            case "Dease Lake": this.setState({location: LOCATION.DEASE_LAKE.URL}); break;
            case "Creston": this.setState({location: LOCATION.CRESTON.URL}); break;
            case "Terrace": this.setState({location: LOCATION.TERRACE.URL}); break;
            case "Prince George": this.setState({location: LOCATION.PRINCE_GEORGE.URL}); break;
            case "Revelstoke": this.setState({location: LOCATION.REVELSTOKE.URL}); break;
            case "Whistler": this.setState({location: LOCATION.WHISTLER.URL}); break;
            case "Fort Nelson": this.setState({location: LOCATION.FORT_NELSON.URL}); break ;
        }
    }
    handleClose = () => {
        this.setState({ openModal: false});
    }

    // React Map component to hold place markers
    render() {

        return (
            <div>
            <Map google={this.props.google}
                 zoom={5}
                 initialCenter={{
                     lat: 53.746012,
                     lng: -123.227990
                 }}
            >

                <Marker onClick={this.handleOpen}
                        name={LOCATION.DEASE_LAKE.TITLE}
                        title={LOCATION.DEASE_LAKE.TITLE}
                        position={{lat: LOCATION.DEASE_LAKE.LAT, lng: LOCATION.DEASE_LAKE.LONG}}

                />
                <Marker onClick={this.handleOpen}
                        name={LOCATION.FORT_NELSON.TITLE}
                        title={LOCATION.FORT_NELSON.TITLE}
                        position={{lat: LOCATION.FORT_NELSON.LAT, lng: LOCATION.FORT_NELSON.LONG}}
                />
                <Marker onClick={this.handleOpen}
                        name={LOCATION.TERRACE.TITLE}
                        title={LOCATION.TERRACE.TITLE}
                        position={{lat: LOCATION.TERRACE.LAT, lng: LOCATION.TERRACE.LONG}}
                />
                <Marker onClick={this.handleOpen}
                        name={LOCATION.PRINCE_GEORGE.TITLE}
                        title={LOCATION.PRINCE_GEORGE.TITLE}
                        position={{lat: LOCATION.PRINCE_GEORGE.LAT, lng: LOCATION.PRINCE_GEORGE.LONG}}
                />
                <Marker onClick={this.handleOpen}
                        name={LOCATION.WHISTLER.TITLE}
                        title={LOCATION.WHISTLER.TITLE}
                        position={{lat: LOCATION.WHISTLER.LAT, lng: LOCATION.WHISTLER.LONG}}
                />
                <Marker onClick={this.handleOpen}
                        name={LOCATION.REVELSTOKE.TITLE}
                        title={LOCATION.REVELSTOKE.TITLE}
                        position={{lat: LOCATION.REVELSTOKE.LAT, lng: LOCATION.REVELSTOKE.LONG}}
                />
                <Marker onClick={this.handleOpen}
                        name={LOCATION.CRESTON.TITLE}
                        title={LOCATION.CRESTON.TITLE}
                        position={{lat: LOCATION.CRESTON.LAT, lng: LOCATION.CRESTON.LONG}}
                />


                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>

                    </div>
                </InfoWindow>

            </Map>
                <Modal
                    open={this.state.openModal}
                    onClose={this.handleClose}
                    disableAutoFocus={true}
                    className="modal"
                >

                    <div className="weatherModal">

                        <iframe title="Environment Canada Weather"
                                src={this.state.location}
                                allowTransparency="true"
                                frameBorder="0"
                                className="iframe-container"></iframe>
                        <CancelIcon className="cancel"
                                    onClick={this.handleClose}
                        />
                    </div>

                </Modal>

            </div>

        );
    }

}


export default GoogleApiWrapper({
    apiKey: ('AIzaSyA0h0z5UwtcKMGQTDoOe7DeY6UF_9R1jP8')
})(MapContainer)
