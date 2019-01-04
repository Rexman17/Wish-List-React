import React from "react";
import StoresMap from "../components/StoresMap";

const API_KEY = process.env.REACT_APP_GOOGLE_API
export default class StoreMapContainer extends React.Component {


	render() {
    // console.log("store map container", this.props);
		return (
			<StoresMap
				stores={this.props.stores}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `600px` }} />}
				mapElement={<div style={{ height: `100%` }} />}

			/>
		);
	}
}
