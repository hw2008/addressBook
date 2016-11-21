 import React, {
   Component,
   PixelRatio
 } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   Dimensions,
   View
 } from 'react-native';

 export default class Util extends Component {
   //单位像素
   pixel: 1 / PixelRatio.get(),
   //屏幕尺寸
   size: {
     width: Dimensions.get('window').width,
     height: Dimensions.get('window').height
   },

   //post请求
   post: function(url, data, callback) {
     var fetchOptions = {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(data)
     };

     fetch(url, fetchOptions)
       .then((response) => response.text())
       .then((responseText) => {
         callback(JSON.parse(responseText));
       });
   },
   //Key
   key: 'HSHHSGSGGSTWSYWSYUSUWSHWBS-REACT-NATIVE'

 };