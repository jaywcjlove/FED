import React,{
    WebView,
    View
} from 'react-native'

import NavigationBar from 'react-native-navigationbar'

class WebViewPage extends React.Component{
    constructor(props) {
      super(props);
    
      this.state = {};
    }
    render(){
        return(
            <View style={{flex: 1}}>
                <NavigationBar 
                    title={this.props.title}
                    barTintColor='white'
                    backHidden={flase}
                    backFunc={() => {
                      this.props.navigator.pop()
                    }}/>
                <WebView
                    source={{uri: this.props.url}}/>
            </View>
        )
    }
}

module.exports = WebViewPage;