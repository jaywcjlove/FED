'use strict';
import About from './About'
import Navigation from './common/Navigation'
import Nav from './Nav'
import React,{
  TabBarIOS,
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native';

const TOP_TAB = 'topTab';
const NAV_TAB = 'navTab';
const SEARCH_TAB = 'searchTab';
const ABOUT_TAB = 'aboutTab';
class TabBar extends React.Component{
    constructor(props) {
      super(props)
      this.state={
        selectedTab: TOP_TAB,
        notifCount: 0,
        presses: 0,
      }
    }
    //更新分类ID
    handleUpdateList(cateId) {
        this.setState({
            cateId : cateId
        })
    }
    setTab(tabId){
      this.setState({selectedTab: tabId})
    }
    render() {
        return (
            <TabBarIOS style={styles.tabBar}>
                <TabBarIOS.Item 
                  title="前端头条"
                  selected={this.state.selectedTab === TOP_TAB}
                  // icon={{uri: base64Icon, scale: 3}}
                  icon={require('./../img/icon-top.png')}
                  onPress={() => this.setTab(TOP_TAB)}>
                  <View style={styles.tabContent}>
                    <Text style={styles.tabText}> 前端头条 </Text>
                  </View>
                </TabBarIOS.Item>
                <TabBarIOS.Item 
                  title="前端导航"
                  selected={this.state.selectedTab === NAV_TAB}
                  icon={require('./../img/icon-nav.png')}
                  onPress={() => this.setTab(NAV_TAB)}>
                  <Navigation component={Nav}/>
                </TabBarIOS.Item>
                <TabBarIOS.Item 
                  title="导航搜索"
                  selected={this.state.selectedTab === SEARCH_TAB}
                  icon={require('./../img/icon-search.png')}
                  onPress={() => this.setTab(SEARCH_TAB)}>
                  <View style={styles.tabContent}>
                    <Text style={styles.tabText}> 搜索 </Text>
                  </View>
                </TabBarIOS.Item>
                <TabBarIOS.Item 
                  title="关于我们"
                  selected={this.state.selectedTab === ABOUT_TAB}
                  // icon={{uri: base64Icon, scale: 3}}
                  icon={require('./../img/icon-about.png')}
                  onPress={() => this.setTab(ABOUT_TAB)}>
                  <Navigation component={About}/>
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center'
  },
  tabText: {
    margin: 50,
    fontSize: 45
  },
  tabBar:{
    height:50
  }
});


module.exports = TabBar;