import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  Animated,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MapView, { MAP_TYPES } from 'react-native-maps';
import TargetSteps from './TargetSteps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4111;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class extends Component {

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [],
      createTarget: false,
      step: 0,
      targetData: {
        radius: 600,
        coordinates: {
          latitude: LATITUDE,
          longitude: LONGITUDE
        }
      }
    };
  }

  componentDidMount() {
    this.getUserPosition({enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})
      .then((position) => {
        let {coords: { latitude, longitude, ...rest }} = position;
        let region = { ...this.state.region, latitude: latitude, longitude: longitude };
        this.setState({...this.state, region });
        this.refs.map.animateToRegion(region);
      }).catch((error) => alert(error));
  }

  getUserPosition(options) {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  openCreateTarget = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    this.refs.map.animateToRegion(e.nativeEvent.coordinate);
    this.setState({
      ...this.state,
      targetData: {
        ...this.state.targetData,
        coordinates: { latitude, longitude }
      },
      createTarget: true
    });
  }

  closeCreateTarget = () => {
    this.setState({
      ...this.state,
      createTarget: false
    });
  }

  animateRandom() {
    this.getUserPosition({enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})
      .then((position) => {
        this.setMapToLocation(position);
      }).catch((error) => alert(error));
  }

  setMapToLocation(position) {
    let { coords: { latitude, longitude }} = position;
    let region = { ...this.state.region, latitude, longitude };
    this.setState({ ...this.state, region });
    this.refs.map.animateToRegion(region);
  }

  onRegionChange(region) {
    if(this.state.createTarget) return;
    const { latitude, longitude } = region;
    this.setState({
      ...this.state,
      targetData: {
        ...this.state.targetData,
        coordinates: { latitude, longitude }
      }
    });
  }

  onTargetDataChange = (targetData) => {
    this.setState({targetData});
  }

  render(){

    const renderTargetRadius =
      (
        <MapView.Circle
          key={(this.state.targetData.coordinates + this.state.targetData.radius).toString()}
          center={this.state.targetData.coordinates}
          radius={this.state.targetData.radius}
          strokeColor="#efc638"
          strokeWidth={3}
          fillColor="white"
        />
      )

      const renderTargetMarker =
        (
          <MapView.Marker
            key="marker"
            coordinate={this.state.targetData.coordinates}
            image={require('../../images/pin.png')}
            strokeColor="#efc638"
            strokeWidth={3}
            centerOffset={{x: 0, y: -17}}
            fillColor="white"
          />
        )

    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.animateRandom()}
            style={[styles.bubble, styles.button]}
           >
            <Text>Go To Position</Text>
          </TouchableOpacity>
        </View>
        {  !this.state.createTarget && <Image style={styles.pin} source={require('../../images/pin.png')}/>}
        <MapView
          ref="map"
          style={styles.container}
          initialRegion={this.state.region}
          onRegionChange={(e) => this.onRegionChange(e)}
          onLongPress={this.openCreateTarget}
          onPress={this.closeCreateTarget}
        >
        {
          this.state.createTarget &&
          renderTargetRadius
        }
        {
          this.state.createTarget &&
          renderTargetMarker
        }
         {this.state.markers.map(marker => (
              <MapView.Marker
                key={marker.key}
                coordinate={marker.coordinate}
                image={flagPinkImg}
                pinColor={marker.color}
              />
            ))
          }
       </MapView>
       <TargetSteps isActive={this.state.createTarget} onSubmit={this.onSubmitTarget} targetData={this.state.targetData} onTargetDataChange={this.onTargetDataChange}/>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 64
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    zIndex: 5,
    backgroundColor: 'transparent',
  },
  targetProcessWindow: {
    position: 'absolute',
    bottom: 0,
    width: width,
    backgroundColor: 'white',
    alignSelf: 'flex-end'
  },
  pin: {
    position: 'absolute',
    marginVertical: (height - 64)/2,
    marginHorizontal: width/2 - 21,

    alignSelf: 'center',
    zIndex: 5
  }
});
