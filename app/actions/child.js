import * as actionTypes from "./actionTypes";
import APIJSON from '../config/API.json';
import { ToastAndroid } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';



const onAddChild = data => {
    const token = AsyncStorage.getItem('loggedUser');
    console.log(token);
    console.log("kajdslksajkdj");
    return fetch(APIJSON.API + 'child', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      
    },
    body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((json) => {
        if(json.errors != undefined) {
            console.log(json.errors.msg);
            if(Array.isArray(json.errors.msg)){
                ToastAndroid.show(json.errors.msg[0].msg, ToastAndroid.SHORT);
            }
            else{
                console.log(465456);
                ToastAndroid.show(json.errors.msg, ToastAndroid.SHORT);
            }
            return false;
        } else if (json._id != undefined) {
            return true;
        }
      })
      .catch((error) => {
          console.log(error);
        // ToastAndroid.show(error, ToastAndroid.SHORT);
      });
};

export const addChild = (data, callback) => async dispatch => {
    //call api and dispatch action case
    const response = await onAddChild(data);
    if (response) {
        console.log("json here");
     //  AsyncStorage.setItem('userLoginToken', response.token);
        callback({ success: true });
       
    } else {
        callback({ success: false });
    }
};