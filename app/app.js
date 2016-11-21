import React, {
	Component
} from 'react';
import {   
	StyleSheet, 
	AsyncStorage, 
	Alert,
	Text,
	Image,
	ScrollView,
	TouchableHighlight,
	ActivityIndicator,
	TextInput,
	View
} from 'react-native';

import DeviceInfo from 'react-native-device-info';

import ScrollableTabView, {
	DefaultTabBar,
	ScrollableTabBar
} from 'react-native-scrollable-tab-view';
import WeixinTabBar from './WeixinTabBar';
import NavigatorHome from './NavigatorHome';
import NavigatorGonggao from './NavigatorGonggao';
import NavigatorManage from './NavigatorManage';
import NavigatorAbout from './NavigatorAbout';

import Util from './util';
import Service from './service';


export default class App extends Component {
	constructor(props) {
		super(props); 
		console.log("Device ID", DeviceInfo.getDeviceId());
		console.log("Device Unique ID", DeviceInfo.getUniqueID());
		AsyncStorage.removeItem('token');
		this.state = {
			tabNames: ['首页', '公告', '管理', '关于'],
			tabIconNames: ['md-call', 'md-clipboard', 'md-settings', 'md-information-circle'],
			selectedTab: 'home',
			showIndex: {
				height:0,
				opacity:0
			},
			showLogin:{
				flex:1,
				opacity:1
			},
			isLoadingShow: false,
			email: 'test0@126.com',
			password: '123',
		};
	}
componentDidMount(){
    var that = this;
    AsyncStorage.getItem('token', function(err, token){
    	console.log(!err && token);
      if(!err && token){
        var path = Service.host + Service.loginByToken;
        Util.post(path, {
          token: token
        },function(data){
          if(data.status){
            that.setState({
              showLogin: {
                height:0,
                width:0,
                flex:0,
              },
              showIndex:{
                flex:1,
                opacity:1
              },
              isLoadingShow: false
            });
          }
        });
      }else{
        that.setState({
          showIndex: {
            height:0,
            opacity:0
          },
          showLogin:{
            flex:1,
            opacity:1
          },
          isLoadingShow: false
        });
      }
    });

    var path = Service.host + Service.getMessage;
    var that = this;
    Util.post(path, {
      key: Util.key
    }, function(data){
      that.setState({
        data: data
      });
    });
  }
	render() {
		let tabNames = this.state.tabNames;
    	let tabIconNames = this.state.tabIconNames;
		return (
			<View style={{flex:1}}>
			{this.state.isLoadingShow ?
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size="small" color="#268DFF"></ActivityIndicator>
          </View>:null
        }
			{!this.state.isLoadingShow ?
			<ScrollableTabView style={this.state.showIndex} renderTabBar={() => <WeixinTabBar tabNames={tabNames} tabIconNames={tabIconNames}/>} tabBarPosition='bottom'> 
		     	<NavigatorHome tabLabel='1' />
				<NavigatorGonggao tabLabel='2' data={this.state.data}/>  
		     	<NavigatorManage tabLabel='3' />   
		     	<NavigatorAbout tabLabel='4' />  
    		</ScrollableTabView>: null
    		 }
    		 <ScrollView style={[this.state.showLogin]}>
          <View style={styles.container}>
            <View>
              <Image style={styles.logo} source={require('./images/logo.png')} ></Image>
            </View>

            <View style={styles.inputRow}>
              <Text>邮箱</Text>
              <TextInput 
              	style={styles.input} 
              	placeholder="请输入邮箱"  
              	defaultValue="test0@126.com"
              	onChangeText={(email) => this.setState({email})}/>
            </View>
            <View style={styles.inputRow}>
              <Text>密码</Text>
              <TextInput 
              	style={styles.input} 
              	placeholder="请输入密码" 
              	defaultValue="123"
              	password={true} 
              	onChangeText={(password) => this.setState({password})}/>
            </View>

            <View>
              <TouchableHighlight underlayColor="#fff" style={styles.btn} onPress={this._login.bind(this)}>
                <Text style={{color:'#fff'}}>登录</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
        </View>
		)
	} 

_login(){ 
    var email = this.state.email;
    var password = this.state.password;
    console.log("email", email);
    console.log("password", password);

    var deviceId = DeviceInfo.getDeviceId();
    var path = Service.host + Service.login;
    var that = this;

    //隐藏登录页 & 加载loading
    that.setState({
      showLogin: {
        height:0,
        width:0,
        flex:0,
      },
      isLoadingShow: true
    });
    console.log("path", path);
        Util.post(path, {
          email: email,
          password: password,
          deviceId: deviceId,
        }, function(data){
        	console.log("login data", data);
          if(data.status){
            var user = data.data;
            //加入数据到本地
            AsyncStorage.multiSet([
              ['username', user.username],
              ['token', user.token],
              ['userid', user.userid],
              ['email', user.email],
              ['tel', user.tel],
              ['partment', user.partment],
              ['tag', user.tag],
            ], function(err){
              if(!err){
                that.setState({
                  showLogin: {
                    height:0,
                    width:0,
                    flex:0,
                  },
                  showIndex:{
                    flex:1,
                    opacity:1
                  },
                  isLoadingShow: false
                });
              }
            });

          }else{
            Alert.alert('登录', '用户名或者密码错误');
            that.setState({
              showLogin: {
                flex:1,
                opacity:1
              },
              showIndex:{
                height:0,
                width:0,
                flex:0,
              },
              isLoadingShow: false
            });
          }
        });
      
  }








}
var styles = StyleSheet.create({
  container:{
    marginTop:50,
    alignItems:'center',
  },
  logo:{
    width:100,
    height:100,
    resizeMode: Image.resizeMode.contain
  },
  inputRow:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    marginBottom:10,
  },
  input:{
    marginLeft:10,
    width:220,
    borderWidth:Util.pixel,
    height:35,
    paddingLeft:8,
    borderRadius:5,
    borderColor:'#ccc'
  },
  btn:{
    marginTop:10,
    width:80,
    height:35,
    backgroundColor:'#3BC1FF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 4,
  }
});