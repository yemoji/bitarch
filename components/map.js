import React from "react";
import GoogleMapReact from "google-map-react";
import { FaHashtag } from "react-icons/fa";
const map = ({ location, zoomLevel }) => (
  <div className="map">
    <div className="google-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12943.012952923767!2d51.3999083!3d35.8059908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e09cddd7a19d1%3A0x1312b1a160138807!2z2LPYp9iu2KrZhdin2YYg2YfZiNmF2Kc!5e0!3m2!1sen!2s!4v1696076821505!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "dqjslkmdqjdkljsdkl" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact> */}
    </div>
  </div>
);
export default map;
const LocationPin = ({ text }) => (
  <div className="pin">
    <FaHashtag className="w-8 h-8 text-gray-500  p-1" />
    <p className="pin-text">{text}</p>
  </div>
);

