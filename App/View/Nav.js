'use strict';

// const ServerURL = require('./../constants/Service');

import React , {
    StyleSheet,
    ScrollView,
    ListView,
    Text,
    Image,
    View,
} from 'react-native';

import Util from './common/Util.js';

class Nav extends React.Component{
    fetchData = () => {
        Util.fetch('http://jsdig.com/js/data.min.json',function(data){
            // console.log("data::",data);
        })
    }

    constomPressHandler = (enableCallback) => {
        this.timer = setTimeout(() => {
            enableCallback()
        },3000)
    }

    constructor(props) {
        super(props)
        this.state={
            show:false
        }
    }

    componentDidMount = () => {
        this.fetchData();
    }
    render() {
        console.log("testt::",this.state);
        return (
            <ScrollView>
                {
                    this.state.show ?
                    <View>
                        <Text>sdsd</Text>
                    </View>
                    :Util.loading
                }
            </ScrollView>
        )
    }
    _renderRow(){

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