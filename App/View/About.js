//首页分类模块

'use strict';

import React , {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

import Loading from './Loading';
import ListItemWrapper from './ListItemWrapper';
import Util from '../Common/Util.js';


//cat 数据
var MockData = [{
  id: 1,
  img : 'http://gtms02.alicdn.com/tps/i2/TB1hbkyHpXXXXboXXXXcy0wIpXX-70-70.png',
  text : '手机圈儿',
  link : 'http://3c.m.tmall.com'                      
},{
  id: 2,
  img : 'http://gtms01.alicdn.com/tps/i1/TB13zsxHpXXXXX8XpXXcy0wIpXX-70-70.png',
  text : '发现好玩',
  link : 'http://3c.m.tmall.com'                      
},{
  id: 3,
  img : 'http://gtms01.alicdn.com/tps/i1/TB1wpUtHpXXXXb1XVXXcy0wIpXX-70-70.png',
  text : '我爱我家',
  link : 'http://3c.m.tmall.com'                      
},{
  id: 4,
  img : 'http://gtms03.alicdn.com/tps/i3/TB14NwyHpXXXXaUXXXXcy0wIpXX-70-70.png',
  text : '生活圈儿',
  link : 'http://3c.m.tmall.com'                      
},{
  id: 5,
  img : 'http://gtms04.alicdn.com/tps/i4/TB1ODktHpXXXXXZXVXXcy0wIpXX-70-70.png',
  text : '试用中心',
  link : 'http://3c.m.tmall.com'                      
}];

// 组件样式
const styles = StyleSheet.create({
    logo:{
      // flexDirection: 'column',
      flex: 1,
      alignItems: 'center',
      marginTop:78
    },
    contentContainer:{
      paddingVertical: 10,
    },
    scrollView:{
      backgroundColor : '#eeeeee',
      bottom:0,

    },
    boxImg:{

    }
});



class About extends React.Component{
  renderItems(data){
    return data.map(function(result){
      return (
        <ListItemWrapper key={result.id} data={result}/>
      )
    })
  }
  render() {
    return (
      <View style={{flexDirection: 'row',height:Util.size.height-49,backgroundColor:"#fefefe"}}>
        <View style={{flex: 1, flexDirection:'column',backgroundColor:"#fff"}}>  
            <View style={{flexDirection: 'column', height: 200}}>  
              <View style={styles.logo}>
                <Image source={require('./../img/LOGO.png')} style={styles.boxImg} />
                <Text style={{textAlign:'center'}}>一个很酷炫的前端导航网</Text>
              </View>
            </View>
            <ScrollView style={{flex: 1, backgroundColor:"#F4F4F5"}}
              automaticallyAdjustContentInsets={false}>
              <Text>一个很酷炫的前端导航网2</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网</Text>
              <Text>一个很酷炫的前端导航网2323</Text>
            </ScrollView>
        </View>
      </View>
    );
  }
}

module.exports = About