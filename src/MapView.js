import React from 'react'
import PropTypes from 'prop-types'
import { requireNativeComponent } from 'react-native'

class MapView extends React.Component {
	static propTypes = {
		/**
		  * When this property is set to `true` and a valid camera is associated
		  * with the map, the camera’s pitch angle is used to tilt the plane
		  * of the map. When this property is set to `false`, the camera’s pitch
		  * angle is ignored and the map is always displayed as if the user
		  * is looking straight down onto it.
		  */
		pitchEnabled: PropTypes.bool,

		/**
		 * The region to be displayed by the map.
		 *
		 * The region is defined by the center coordinates and the span of
		 * coordinates to display.
		 */
		region: PropTypes.shape({
			/**
		     * Coordinates for the center of the map.
		     */
			latitude: PropTypes.number.isRequired,
			longitude: PropTypes.number.isRequired,

			/**
		     * Distance between the minimum and the maximum latitude/longitude
		     * to be displayed.
		     */
			latitudeDelta: PropTypes.number.isRequired,
			longitudeDelta: PropTypes.number.isRequired,
		}),
	}

	render () {
		return <EGOMap {...this.props} />
	}
}

const EGOMap = requireNativeComponent('EGOMap', MapView)


export default MapView
