'use strict';

// const ServerURL = require('./../constants/Service');

import React , {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    // TouchableHighlight
} from 'react-native';

import Button from './common/Button.js'

class Nav extends React.Component{
    fetchData = (enableCallback) => {
        fetch('http://jsdig.com/js/data.min.json',{
            method: 'GET',
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
            },
        })
          .then((response) => response.text())
          .then((responseText) => {
            console.log(responseText);
          })
          .catch((error) => {
            console.warn(error);
          });
    }
    constomPressHandler = (enableCallback) => {
        this.timer = setTimeout(() => {
            enableCallback()
        },3000)
    }
    componentDidMount = () => {
        this.timer && clearTimeout(this.timer);
    }
    render() {
        return (
            <View>
                <Text>狗</Text>
                <Text>一个很酷炫的前端导航网</Text>
                <Text>一个很酷炫的前端导航网</Text>
                <Text>一个很酷炫的前端导航网</Text>
                <Text>一个很酷炫的前端导航网</Text>
                <Text>一个很酷炫的前端导航网</Text>
                <Text>一个很酷炫的前端导航网</Text>
                <Text>一个很酷炫的前端导航网</Text>
                <Button ref="buttons" text="取消"  onPress={this.constomPressHandler}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // buttons:{
    //     backgroundColor:'green',
    //     height: 24,
    //     width:110,
    //     borderRadius:10,
    //     justifyContent:'center',
    //     overflow:'hidden'
    // },
    // buttonsText:{
    //     textAlign:'center',
    //     color:'#fff'
    // }
})

module.exports = Nav