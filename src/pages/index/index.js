import Taro, { Component } from '@tarojs/taro'
import { View,
  Text,
  Button,
  Input,
  Video,
  CoverImage,
  ScrollView,
  MovableArea,
  MovableView,
  Icon,
  Progress,
  RichText,
  Radio,
  Label,
  RadioGroup,
  Checkbox,
  Form,
  Switch,
  CoverView} from '@tarojs/components'
import Login from '../../components/login/login'
import './index.styl'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
    this.state = {
      inTipsNum: '输入一个数字',
      date: new Date(),
      videoSrc: 'http://vod.pigkeeping.cn/f237fb11ad7449ef977baaeeeef38499/8eb68b5ee7224b559c0a8378789c153c-7d420e9249348c2da4db07483ca21930-fd.mp4',
      imgSrc:'http://vod.pigkeeping.cn/f237fb11ad7449ef977baaeeeef38499/covers/0372a0b208cd4c77a95a6fbcc1a5df06-00001.jpg',
      nodes: [{
        name: 'div',
        attrs: {
          class: 'div_class',
          style: 'line-height: 60px; color: red;'
        },
        children: [{
          type: 'text',
          text: 'Hello World!'
        }]
      }]
    }
  }

  componentWillMount () {
    console.log('willMount')
  }

  componentDidMount () {
    // dom渲染完成
    this.timerId = setInterval(()=> this.tick(), 1000)
    // console.log(this.refs.myinput)
    console.log(process.env.TARO_ENV)
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

  refLogin = (node) => this.loginRef = node

  conLoginName() {
    this.loginRef.getMyName()
  }
  onScrolltoupper() {
    console.log('onScrolltoupper')
  }
  onScroll() {
    console.log('onScroll')
  }


  render () {
    const numbers = [...Array(1).keys()];
    const doubled = numbers.map((number, ind) => {
      return <View key={String(number)} > {number *2}-索引{ind}</View>
    })
    const inPlace = '设置我的搜索'

    return (

      <View className='index'>
        <ScrollView
          class='scrollview'
          scrollY
          scrollWidthAnimation
          scrollTop='0'
          style='height:150px'
          lowerThreshold='20'
          upperThreshold='20'
          onScrolltoupper={this.onScrolltoupper}
          onScroll={this.onScroll}
        >
          <View style='height: 150px; background-color: rgb(26,173, 25)'>A</View>
          <View style='height: 150px; background-color: rgb(39,130, 215)'>B</View>
          <View style='height: 150px; background-color: rgb(241,241, 241)'>C</View>
        </ScrollView>
        <Login isLoggedIn ref={this.refLogin} ></Login>
        <Button onClick={this.conLoginName.bind(this)}>查看登陆组建ref</Button>
        <Text className='in-block'>Hello world!</Text>
        <Text>add by myself</Text>
        <Text>现在时间是： {this.state.date.toLocaleTimeString()}</Text>
        <Button onClick={this.goGoods}>goods page jump</Button>
        {doubled}
        <Input ref='myinput'  type='text' placeholder={inPlace} value='20' />

        {/* 视频 */}
        <Video id='myVideo' src={this.state.videoSrc}>
          <CoverView class='controls'>
            <CoverView class='paly' onClick='play'>
              <CoverImage class='img' src={this.state.imgSrc} />
            </CoverView>
          </CoverView>
        </Video>
        {/* FIXME:仅微信小程序支持 */}
        <MovableArea style='height: 200px; width: 200px; background: red;'>
          <MovableView style='height: 50px; width: 50px; background: blue;' direction='all'></MovableView>
        </MovableArea>
        {/* icon */}
        <Icon size='60' type='success' />
        <Icon size='60' type='info' />
        <Icon size='60' type='warn' />
        <Icon size='60' type='waiting' />
        <Icon size='60' type='success_no_circle' />
        <Icon size='60' type='download' />
        <Icon size='60' type='clear' color='red' />
        <Icon size='60' type='search' />
        {/* 进度条 */}
        <Progress percent={20} showInfo strokeWidth={2} />
        <Progress percent={40} showInfo strokeWidth={2} active />
        <Progress percent={60} showInfo strokeWidth={2} active />
        <Progress percent={80} showInfo strokeWidth={3} active activeColor='#ff4d6a' />
        {/* 富文本 */}
        <RichText nodes={this.state.nodes} />
        {/* 多选项目 */}
        <Label className='checkbox-list_label'>
          <Checkbox value='选中' checked>选中</Checkbox>
        </Label>
        <Checkbox value='选中' checked>选中</Checkbox>
        {/* 表单 */}
        <Form onSubmint={this.formSubmit} onRest={this.formReset}>
          <View className='example-body'>
            <Switch name='swicth' className='form-switch'></Switch>
            <Input type='number' maxLength='10' placeholder={this.state.inTipsNum} />
            <RadioGroup>
              <Label className='example-body__label' for='1' key='1'>
                <Radio value='USA'>USA</Radio>
              </Label>
              <Label className='example-body__label' for='2' key='2'>
                <Radio value='CHN' checked>
                CHN
                </Radio>
              </Label>
            </RadioGroup>
          </View>
        </Form>
      </View>
    )
  }
}

