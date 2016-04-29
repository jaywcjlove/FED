/**
 * Navigation 过场动画封装？ 
 * 
 * 我擦啥也没有嘛，忽悠哥尼玛😄
 */

import React , {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

export default class Navigation extends React.Component{
  render(){
    return(
      <Navigator
        initialRoute={{name: '', component: this.props.component, index:0}}
        configureScene={()=>{return Navigator.SceneConfigs.FloatFromBottom;}}
        renderScene={(route, navigator) => {
          const Component = route.component;
          return (
            <View style={{flex: 1}}>
              <Component navigator={navigator} route={route} {...route.passProps}/>
            </View>
          );
        }}/>
    );
  }
}
// module.exports = Navigation