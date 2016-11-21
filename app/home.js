import React, {
	Component
} from 'react';
import {
	StyleSheet,
	StatusBar,
	ScrollView,
	Text,
	View
} from 'react-native';

import ItemBlock from './home/itemBlock';
import Util from './util';
import FirstBar from './navBar/First';

export default class Home extends Component {
	constructor(props) {
		super(props);
		var width = Math.floor(((Util.size.width - 20) - 50) / 4);
		var items = [{
			id: 1,
			title: '研发',
			partment: '框架研发',
			color: '#126AFF',
		}, {
			id: 2,
			title: '研发',
			partment: 'BU研发',
			color: '#FFD600',
		}, {
			id: 3,
			title: '产品',
			partment: '公共产品',
			color: '#F80728',
		}, {
			id: 4,
			title: '产品',
			partment: 'BU产品',
			color: '#05C147',
		}, {
			id: 5,
			title: '产品',
			partment: '启明星',
			color: '#FF4EB9',
		}, {
			id: 6,
			title: '项目',
			partment: '项目管理',
			color: '#EE810D',
		}];
		console.log(width);
		this.state = {
			items: items,
			width: width
		}

	}

	render() {
		var Items1 = [];
		var Items2 = [];
		var items = this.state.items; 
		for (var i = 0; i < 4; i++) {
			Items1.push(
				<ItemBlock
          key={items[i].id}
          title={items[i].title}
          partment={items[i].partment}
          width={this.state.width}
          color={items[i].color}
          navigator={this.props.navigator}
          />
			);
		}

		for (var i = 4; i < items.length; i++) {
			Items2.push(
				<ItemBlock
          key={items[i].id}
          title={items[i].title}
          partment={items[i].partment}
          width={this.state.width}
          color={items[i].color}
          navigator={this.props.navigator}
          />
			);
		}

		return (
			<View>
			<StatusBar
     backgroundColor="#0093fa"
     barStyle="light-content"
   />
				 
				<FirstBar title={'主页'} />
				<ScrollView style={styles.container}>
			        <View style={styles.itemRow}>
			          {Items1}
			        </View>
			        <View style={styles.itemRow}>
			          {Items2}
			        </View> 
			    </ScrollView>
      		</View>
		);
	}
}

var styles = StyleSheet.create({
	top: { 
		height: 40,
		backgroundColor: '#0093fa',
		alignItems: 'center',
		justifyContent: 'center',
	},
	topTitle: {
		fontSize: 20, 
		color: 'white',
	},
	container: {
		flex: 1,
		padding: 10, 
	},
	itemRow: {
		flexDirection: 'row',
		marginBottom: 20,
	}
});