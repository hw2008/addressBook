import React, {
  Component
} from 'react';
import {
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Linking,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Util from './../util';
import Service from './../service';
import ActionSheet from 'react-native-actionsheet';
import HeadBar from './../navBar/HeadBar';

export default class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tel: '',
      email: '',
      name: '',
      options: ['拨打电话给：', '发送短信给：', '发送邮件给：', '取消']
    }


  }
  
  render() {



    var view = [];

    var items = this.props.data.status ? this.props.data.data : [];
    var colors = ['#E20079', '#FFD602', '#25BFFE', '#F90000', '#04E246', '#04E246', '#00AFC9'];
    var color = {
      backgroundColor: colors[parseInt(Math.random() * 7)]
    };
    for (var i in items) {
      view.push(
        <View key={'addressItem' + i} style={styles.row}>
          <View style={[styles.text, color]}>
            <Text style={{fontSize:25, color:'#fff', fontWeight:'bold'}}>
              {items[i].username.substr(0, 1) || '未'}
            </Text>
          </View>
          <View style={styles.part}>
            <Text>
              {items[i].username}
            </Text>
            <Text style={styles.unColor}>
              {(items[i].partment||'') + '部－' + (items[i].tag||'') + '人员'}
            </Text>
          </View>
          <View style={{flex:1}}>
            <TouchableHighlight underlayColor="#fff"
               onPress={this.showActionSheet.bind(this, items[i].tel, items[i].email, items[i].username)}>
              <Text style={styles.link}>
                {items[i].tel}
              </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#fff"
               onPress={this.showActionSheet.bind(this, items[i].tel, items[i].email, items[i].username)}>
              <Text style={styles.link}>
                {items[i].email}
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
      <StatusBar
     backgroundColor="#0093fa"
     barStyle="light-content"
   />
        
        <HeadBar title={'主页'} navigator={this.props.navigator}/>
         <ScrollView >
        {view}
      </ScrollView>
      <ActionSheet 
                    ref={(o) => this.ActionSheet = o}
                      
                    options={this.state.options}
                    cancelButtonIndex={3}  
                    onPress={this._handlePress.bind(this)}
                />
          </View>
    );
  }

  _handlePress(index) {
    switch (index) {
      case 0:
        {
          Linking.openURL('tel:' + this.state.tel);
          break;

        };
      case 1:
        {
          Linking.openURL('sms:' + this.state.tel);
          break;
        };
      case 2:
        {
          Linking.openURL('mailto:' + this.state.email);
          break;
        };
      case 3:
        {};
    }

  }


  showActionSheet(tel, email, name) {


    const options = [];
    options.push('拨打电话给：' + name);
    options.push('发送短信给：' + name);
    options.push('发送邮件给：' + name);
    options.push('取消');



    this.setState({
      tel: tel,
      email: email,
      name: name,
      options: options,
    })

    this.ActionSheet.show();



  }

}

var styles = StyleSheet.create({
  content: {
    flex: 1
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
  },
  top: {
    height: 40,
    backgroundColor: '#0093fa',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  topTitle: {
    fontSize: 20,
    color: 'white',
  },
  row: {
    height: 80,
    borderBottomWidth: Util.pixel,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E30082',
  },
  part: {
    marginLeft: 5,
    flex: 1,
  },
  link: {
    color: '#1BB7FF',
    marginTop: 2,
  },
  unColor: {
    color: '#575656',
    marginTop: 8,
    fontSize: 12,
  }
});