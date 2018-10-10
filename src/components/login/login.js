import Taro, {
  Component
} from '@tarojs/taro'
import {
  Text, View
} from '@tarojs/components'

export default class Login extends Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn
    let status = null
    if (isLoggedIn) {
      status = <Text>已登录</Text>
    } else {
      status = <Text>未登录</Text>
    }
    return (
        <View>
            {status}
        </View>
    )

  }
}
