import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import StoreMarker from "./StoreMarker";

const StoresMap = withScriptjs(withGoogleMap((props) =>{

  // console.log("stores map props", props);
  const markers = props.stores.map( store => <StoreMarker
                    key={store.id}
                    store={store}
                    location={{lat: store.latitude, lng: -store.longitude}}
                  />);

  return (
      <GoogleMap
        defaultZoom={14}
        center={ { lat: 40.7053, lng: -74.0141 } }
        >
        {markers}
      </GoogleMap>
    );
  }
))

export default StoresMap;
