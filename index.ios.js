import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  AlertIOS,
  TouchableHighlight
} from 'react-native';

export default class polnexus extends Component {

  constructor(props) {
    super(props)

    this.state = {
      sentence: ['Hello']
    }
  }

  ImageClick(e) {
    // AlertIOS.alert('onPressssssss', '111');

    // var settings = {
    //   "async": true,
    //   "crossDomain": true,
    //   "url": "http://lpolnexusserver.herokuapp.com/api/clients/587b64ba2d0aaaedc92f6614",
    //   "method": "PUT",
    //   "headers": {
    //     "content-type": "application/x-www-form-urlencoded",
    //     "cache-control": "no-cache",
    //     "postman-token": "b6c398da-2a79-298a-fa46-3dc7fa64d021"
    //   },
    //   "data": {
    //     "like": "gg"
    //   }
    // }
    //
    // $.ajax(settings).done(function (response) {
    //   console.log(response);
    // });

    fetch('https://polnexusserver.herokuapp.com/api/clients/587b66786c867e001150cd10', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        like: 10,
        dislike: 2,
      })
    })

    // return fetch('https://polnexusserver.herokuapp.com/api/clients')
    //       .then((response) => response.json())
    //       .then((responseJson) => {
    //         console.log(responseJson);
    //         return responseJson.movies;
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
  }

  render() {
    return (

      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View>

          <TouchableHighlight
            onPress={this.ImageClick.bind(this)}
            activeOpacity={75 / 100}
            underlayColor={"rgb(210,210,210)"}>

            <Image
                style={styles.goImages}
                resizeMode={"contain"}
                source={{uri:'https://res.cloudinary.com/drrwovgv6/image/upload/v1484491467/bluestar_pj5ecu.png'}}
              />
          </TouchableHighlight>
        </View>

        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <Text style={ {height: 50, backgroundColor: 'steelblue'} }>{this.state.sentence}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  goImages: {
    width: 300,
    height: 200,
  }

});

AppRegistry.registerComponent('polnexus', () => polnexus);
