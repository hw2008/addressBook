import Icon from 'react-native-vector-icons/Ionicons';

import React, { Component } from 'react';
import {
  CameraRoll,
  Image,
  Slider,
  StyleSheet,
  Switch,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class WeixinTabBar  extends Component {

	static propTypes = {
		goToPage: React.PropTypes.func, // 跳转到对应tab的方法
		activeTab: React.PropTypes.number, // 当前被选中的tab下标
		tabs: React.PropTypes.array, // 所有tabs集合

		tabNames: React.PropTypes.array, // 保存Tab名称
		tabIconNames: React.PropTypes.array, // 保存Tab图标
	}


setAnimationValue({value}) {
		//console.log(value);
	}

componentDidMount() {
		// Animated.Value监听范围 [0, tab数量-1]
		this.props.scrollValue.addListener(this.setAnimationValue);
	}
render() {
  return (
    <View  style={styles.tabs}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
    </View>
  );
}

renderTabOption(tab, i) {
  const color = this.props.activeTab == i? "#6B8E23" : "#ADADAD";   
  return (

    <TouchableOpacity  key={i} onPress={()=>this.props.goToPage(i)} style={styles.tab}>
        <View style={styles.tabItem}>
            <Icon
                name={this.props.tabIconNames[i]} 
                size={30}
                color={color}/>
            <Text style={{color: color}}>
                {this.props.tabNames[i]}
            </Text>
        </View>
    </TouchableOpacity>
   );
}



};

const styles = StyleSheet.create({
	tabs: {
		flexDirection: 'row',
		height: 50,
	},

	tab: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	tabItem: {
		flexDirection: 'column',
		alignItems: 'center',
	},
});