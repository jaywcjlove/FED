'use strict';

import React , {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native';

// 组件样式
var styles = StyleSheet.create({
    boxImg : {
        width : 35,
        height: 35,
        marginBottom : 10
    },
    boxItem: {
        flex: 1,
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 2
    },
    boxText: {
        color : '#333333',
        fontSize : 12
    }

});

class ListItemWrapper extends React.Component{
  render() {
    return(
        <View style={styles.boxItem} >
           <Image source={{uri : this.props.data.img}} style={styles.boxImg} />
           <Text style={styles.boxText}>{this.props.data.text}</Text>
        </View>
    )
  }

}

module.exports =ListItemWrapper