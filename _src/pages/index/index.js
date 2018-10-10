import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button} from '@tarojs/components'
import './index.styl'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () {
    console.log('willMount')
  }

  componentDidMount () {
    console.log('didMout')
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goGoods(e) {
    e.stopPropagation()
    console.log('跳转到商品页面')
    Taro.navigateTo({
      url: 'pages/goods/goods'
    })
  }

  render () {
    return (
      <View className='index'>
        <Text className='in-block'>Hello world!</Text>
        <Text>add by myself</Text>
        <Button onClick={this.goGoods}>goods page jump</Button>
      </View>
    )
  }
}

