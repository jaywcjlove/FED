import React , {
    // PixelRatio,
    Dimensions,
    ActivityIndicatorIOS
} from 'react-native'


module.exports = {
    /**
     * 获取屏幕高度，什么时候能详细一下文档呢？
     */
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    /**
     * 基于fetch的get方法
     * @method post
     * @param {string} url
     * @param {function} callback 请求成功回调
     */
    fetch: function(url, successCallback, failCallback){
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                successCallback(JSON.parse(responseText));
            })
            .catch(function(err){
                failCallback(err);
            });
    },
    /**
     * loading 加载效果
     */
    loading: <ActivityIndicatorIOS color="#3E00FF" style={{marginTop:10}}/>
}