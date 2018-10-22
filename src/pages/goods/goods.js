import  Taro,{
    Component
} from '@tarojs/taro'
import {
    View,
    Text,
    Picker,
    Head,
    Radio,
    RadioGroup,
    Label,
    Slider,
    Switch,
    Textarea,
    Image,
} from '@tarojs/components'
import './goods.styl'

export default class Goods extends Component {
    config = {
        navigationBarTitleText: '商品'
    }
    state = {
        selector: ['美国', '中国', '巴西', '日本'],
        selectorChecked: '美国',
        timeSel: '12:01',
        dateSel: '2018-04-22',
        selectorObj: [
            {'name': '美国', 'id': '01'},
            {'name': '中国', 'id': '02'},
            {'name': '巴西', 'id': '03'},
            {'name': '日本', 'id': '04'},
        ],
        selectorObjKey: 'name',
        selectorObjInd: 2,
        selectorObjVal: '巴西',
        list: [
            {
                value: '美国',
                text: '美国',
                checked: false
            },
            {
                value: '中国',
                text: '中国',
                checked: true
            },
            {
                value: '巴西',
                text: '巴西',
                checked: false
            },
            {
                value: '日本',
                text: '日本',
                checked: false
            },
            {
                value: '英国',
                text: '英国',
                checked: false
            },
            {
                value: '法国',
                text: '法国',
                checked: false
            },
        ]

    }

    componentWillMount() {
        console.log('willMount')
        console.log(Taro.getEnv())
    }

    componentDidMount() {
        console.log('didMout')
    }

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    onChange = e => {
        this.setState({
            selectorChecked: this.state.selector[e.detail.value]
        })
    }

    onTimeChange = e => {
        this.setState({
            timeSel: e.detail.value
        })
    }

    onObjChange = e => {
        this.setState({
            selectorObjInd: e.detail.value,
            selectorObjVal: this.state.selectorObj[e.detail.value].name
        })
    }

    onDateChange = e => {
        this.setState({
            dateSel: e.detail.value.join('-')
        })
    }

    render() {
        return (
            <View className='goods'>
                <Text className='in-block inner-txt'> goods </Text>
                <Text > goods page inin </Text>
                <View className='container'>
                    <View className='page-body'>

                        <View className='page-section'>
                            <Text>地区选择器obj</Text>
                            <View>
                                <Picker
                                  mode='selector'
                                  value={this.state.selectorObjInd}
                                  rangeKey={this.state.selectorObjKey}
                                  range={this.state.selectorObj}
                                  onChange={this.onObjChange}
                                >
                                    <View className='picker' data-ind={this.state.selectorObjInd}>
                                    当前选择：{this.state.selectorObjVal}
                                    </View>
                                </Picker>
                            </View>
                        </View>

                        <View className='page-section'>
                            <Text>地区选择器</Text>
                            <View>
                                <Picker mode='selector' value={this.state.selectorChecked} range={this.state.selector} onChange={this.onChange}>
                                    <View className='picker'>
                                    当前选择：{this.state.selectorChecked}
                                    </View>
                                </Picker>
                            </View>
                        </View>

                        <View className='page-section'>
                            <Text>时间选择</Text>
                            <Picker mode='time' onChange={this.onTimeChange} value={this.state.timeSel}>
                                <View className='picker'>
                                当前选择：{this.state.timeSel}
                                </View>
                            </Picker>
                        </View>

                        <View className='page-section'>
                            <Text>日期选择器</Text>
                            <Picker mode='date' onChange={this.onDateChange} value={this.state.dateSel}>
                                <View className='picker'>
                                当前选择：{this.state.dateSel}
                                </View>
                            </Picker>
                        </View>

                    </View>
                </View>

                <View className='container'>
                    <Head title='Radio' />
                    <View className='page-body'>
                        <View className='page-section'>
                            <Text>默认样式</Text>
                            <Radio value='选中' checked>选中</Radio>
                            <Radio value='未选中' style='margin-left: 20rpx' >未选中</Radio>
                        </View>
                        <View className='page-section'>
                            <Text>推荐展示样式</Text>
                            <View className='radio-list'>
                                <RadioGroup>
                                    {this.state.list.map((item, i)=>{
                                        return (
                                            <Label className='radio-list__label' for={i} key={i}>
                                                <Radio className='radio-list__radio' value={item.value} checked={item.checked}>{item.text}</Radio>
                                            </Label>
                                        )
                                    })}

                                </RadioGroup>
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <Text>设置 step</Text>
                    <Slider step={1} value={50} />
                    <Text>显示当前 value</Text>
                    <Slider step={1} value={50} />
                    <Text>设置最小/最大值</Text>
                    <Slider step={1} value={100} min={50} max={200} />
                </View>

                <View className='contianer'>
                    <View className='page-section'>
                        <Text>默认样式</Text>
                        <Switch checked></Switch>
                        <Text>推荐样式</Text>
                        <Switch checked></Switch>
                    </View>
                </View>
                <View className='page-section'>
                    <Text>输入区域高度自适应，不会出现滚动条</Text>
                    <Textarea style='background: #fff; width: 100%; min-height: 80px; padding: 0: 30rpx' autoHeight />
                </View>
                <View className='page-section'>
                    <Image style='width: 300px; height: 100px; background-color: #fff;' src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67' />
                </View>



            </View>

        )
    }
}
