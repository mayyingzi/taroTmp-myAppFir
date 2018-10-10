import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button} from '@tarojs/components'
import Login from '../../components/login/login'
import './index.styl'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentWillMount () {
    console.log('willMount')
  }

  componentDidMount () {
    // dom渲染完成
    this.timerId = setInterval(()=> this.tick(), 1000)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  tick() {
    // 更新时间
    this.setState({
      date: new Date()
    })
  }

  goGoods(e) {
    e.stopPropagation()
    console.log('跳转到商品页面')
    Taro.navigateTo({
      url: 'pages/goods/goods'
    })
  }

  render () {
    const numbers = [...Array(100).keys()];
    const doubled = numbers.map((number, ind) => {
      return <View key={String(number)} > {number *2}-索引{ind}</View>
    })

    return (
      <View className='index'>
        <Login isLoggedIn></Login>
        <Text className='in-block'>Hello world!</Text>
        <Text>add by myself</Text>
        <Text>现在时间是： {this.state.date.toLocaleTimeString()}</Text>
        <Button onClick={this.goGoods}>goods page jump</Button>
        {doubled}
      </View>
    )
  }
}

