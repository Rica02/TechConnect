import React from "react";
import GoogleMapReact from 'google-map-react';
import { MapContainer } from "./GoogleMapsStyle";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMaps(){

    const defaultProps = {
        // Placeholder coordinates, since TechConnect doesn't actually have an office.
        // Bonus: these coordinates link to Google's headquarters
        center: { lat: 37.40456685200401, lng: -122.08124615222034 },
        zoom: 11
        ,
    };

    return(
        <MapContainer>
            <GoogleMapReact
                // IMPORTANT: Need Google API key
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text={"Our office"}
                />
            </GoogleMapReact>
        </MapContainer>
    )
}
