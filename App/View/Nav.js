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
    constructor(props) {
      super(props);
    
      this.state = {status:1};
    }
    constomPressHandler = () => {
        alert('你摁下了按钮，当前状态是'+this.state.status)
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
                <TouchableOpacity
                 onPress={this.constomPressHandler}
                 style={styles.buttons}>
                    <Text style={styles.buttonsText}>按钮</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttons:{
        backgroundColor:'green',
        height: 24,
        width:110,
        borderRadius:10,
        justifyContent:'center',
        overflow:'hidden'
    },
    buttonsText:{
        textAlign:'center',
        color:'#fff'
    }
})

module.exports = Nav