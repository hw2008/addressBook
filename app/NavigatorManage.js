import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Navigator,
	StatusBar,
	ScrollView,
	Text,
	View
} from 'react-native';

 import Manage from './Manage';

export default class NavigatorManage extends Component {
	constructor(props) {
		super(props);
		  
	}

	render() {  
		let defaultName = '4';
            let defaultComponent = Manage;
            let params = {};
            let data = null;
            data = this.props.data;
            return (
            <Navigator
              initialRoute={{ name: defaultName, component: defaultComponent ,params: {data:data}}}
		configureScene = {
			(route) => {
				return Navigator.SceneConfigs.VerticalDownSwipeJump;
			}
		}
              renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
              }} />
            );
	}
}

var styles = StyleSheet.create({
	 
});