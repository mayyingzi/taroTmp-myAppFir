import Taro, {Component} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './goods.styl'

export default class Goods extends Component {
    config = {
        navigationBarTitleText: '商品'
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

      render () {
        return (
            <View className='goods'>
                <Text className='in-block'>goods</Text>
                <Text>goods page inin</Text>
            </View>
        )
      }
}