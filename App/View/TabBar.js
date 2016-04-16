'use strict';

import React,{
    TabBarIOS,
    Component,
    View,
    Text,
    StyleSheet

} from 'react-native';

const base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';


class TabBar extends React.Component{
    constructor(props) {
      super(props)
      this.state={
        selectedTab: 'top'
      }
    }
    render() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item 
                  title="前端头条"
                  selected={this.state.selectedTab === 'top'}
                  // icon={{uri: base64Icon, scale: 3}}
                  icon={require('./../img/icon-top.png')}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'top'
                    })
                  }}>
                  <View style={styles.tabContent}>
                    <Text style={styles.tabText}> Tab one </Text>
                  </View>
                </TabBarIOS.Item>
                <TabBarIOS.Item 
                  title="前端导航"
                  selected={this.state.selectedTab === 'nav'}
                  icon={require('./../img/icon-nav.png')}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'nav'
                    })
                  }}>
                  <View style={styles.tabContent}>
                    <Text style={styles.tabText}> Tab one </Text>
                  </View>
                </TabBarIOS.Item>
                <TabBarIOS.Item 
                  title="导航搜索"
                  selected={this.state.selectedTab === 'search'}
                  icon={require('./../img/icon-search.png')}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'search'
                    })
                  }}>
                  <View style={styles.tabContent}>
                    <Text style={styles.tabText}> 搜索 </Text>
                  </View>
                </TabBarIOS.Item>
                <TabBarIOS.Item 
                  title="关于我们"
                  selected={this.state.selectedTab === 'about'}
                  // icon={{uri: base64Icon, scale: 3}}
                  icon={require('./../img/icon-about.png')}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'about'
                    })
                  }}>
                  <View style={styles.tabContent}>
                    <Text style={styles.tabText}> Tab two </Text>
                  </View>
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tabContent: {
    flex: 1,
    alignItems: 'center'
  },
  tabText: {
    margin: 50,
    fontSize: 45
  }
});


module.exports = TabBar;