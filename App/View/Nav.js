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
        var that = this
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        Util.fetch('http://jsdig.com/js/data.min.json',function(data){
            // console.log("data::",data);
            that.setState({
                dataSource:ds.cloneWithRows(data),
                show:true
            })
        },function(err){
            console.log(err);
            that.setState({
                show:false
            })
        })
    }

    constomPressHandler = (enableCallback) => {
        this.timer = setTimeout(() => {
            enableCallback()
        },3000)
    }

    constructor(props) {
        super(props)
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state={
            dataSource: ds.cloneWithRows([]),
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
                    <ListView
                      dataSource={this.state.dataSource}
                      renderRow={this._renderRow}
                    />
                    :Util.loading
                }
            </ScrollView>
        )
    }
    _renderRow(row){
        console.log("row:===:",row);
        return(
            <View style={styles.rowStyle}>
                <Text style={styles.rowTitle}>{row.name}</Text>
                <Text style={styles.rowDes}>{row.des}</Text>
                <Text style={styles.rowDes}>{row.tags.join(',')}</Text>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    rowStyle:{
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:10,
        paddingRight:10
        // paddingVertical:10
    },
    rowTitle:{
        fontWeight:'bold',
        fontSize:14,
        paddingBottom:5
    },
    rowDes:{
        fontSize:12,
        color:'#848484'
    }
})

module.exports = Nav