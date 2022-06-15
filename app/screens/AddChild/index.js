import { Button, Header, Icon, SafeAreaView, TextInput, PSelectOption } from "@components";
import { BaseColor, BaseStyle, useTheme, Images } from "@config";
import React, { useState } from "react";
import { ScrollView, View, Text, Image, TouchableOpacity, ToastAndroid } from "react-native";
import styles from "./styles";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { ChildActions } from "@actions";
import { PProjectType } from "@data";
import { useRoute } from "@react-navigation/native";

const successInit = {
  name: true,
  email: true,
};

const { addChild } = ChildActions;

const addingChild = (props) => {
  const dispatch = useDispatch();
  const { navigation } = props;
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [name, setName] = useState("");
  const route = useRoute();
  const joining_type = route?.params?.type;
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [optionData, setOptionData] = useState(PProjectType);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(successInit);
  const [type, setType] = useState([]);

  const onAddChild = () => {
    if (name == "" || email == "") {
      setSuccess({
        ...success,
        name: name != "" ? true : false,
        email: email != "" ? true : false,
       
      });
    } else {
      setLoading(true);
      dispatch(
        addChild({ name, email, gender, age }, (response) => {
          setLoading(false);
          if (response.success) {
            ToastAndroid.show("Child Added Successfully", ToastAndroid.SHORT);
          }
        })
      );
    }
  };

  function onChangeType(_type) {
    type.checked = false;
    if(_type.checked){
      _type.checked = false;
    }
    else{
      _type.checked = true;
    }
    setOptionData(PProjectType);
    setType(_type);
  }

  return (
    <SafeAreaView style={BaseStyle.safeAreaView} edges={['right', 'top', 'left']}>
      <Header
        title={t("Add Child")}
        renderLeft={() => {
          return (
            <Icon
              name="angle-left"
              size={20}
              color={colors.primary}
              enableRTL={true}
            />
          );
        }}
        onPressLeft={() => {
          navigation.goBack();
        }}
      />
      <ScrollView>
      <View style={{ padding: 20, marginTop: 50,}}>
          <View style={{ padding: 10, alignItems: 'center' }}>
            <Image source={Images.logo} style={{ height: 130, width: 130 }}/>
            <View style={{ marginTop: 50, width: '100%' }}>
              <Text style={{ fontSize: 40, fontWeight: 'bold', color: colors.text }}>Add Child</Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.text }}>Child Tracker App</Text>
            </View>

          </View>
          
          <TextInput
            style={[BaseStyle.textInput, { marginTop: 50 }]}
            onChangeText={(text) => setName(text)}
            autoCorrect={false}
            placeholder={t("name")}
            placeholderTextColor={
              success.name ? BaseColor.grayColor : colors.primary
            }
            value={name}
          />
          <TextInput
            style={[BaseStyle.textInput, { marginTop: 20, marginBottom: 10 }]}
            onChangeText={(text) => setEmail(text)}
            autoCorrect={false}
            placeholder={t("email")}
            keyboardType="email-address"
            placeholderTextColor={
              success.email ? BaseColor.grayColor : colors.primary
            }
            value={email}
          />
          <TextInput
            style={[BaseStyle.textInput, { marginTop: 10, marginBottom: 10 }]}
            onChangeText={(text) => setGender(text)}
            autoCorrect={false}
            placeholder={t("gender")}
           // keyboardType="male"
            placeholderTextColor={
              success.email ? BaseColor.grayColor : colors.primary
            }
            value={gender}
          />
          <TextInput
            style={[BaseStyle.textInput, { marginTop: 10, marginBottom: 10 }]}
            onChangeText={(text) => setAge(text)}
            autoCorrect={false}
            placeholder={t("age")}
            keyboardType="numeric"
            placeholderTextColor={
              success.email ? BaseColor.grayColor : colors.primary
            }
            value={age}
          />
        
          <View style={{ width: "100%" }}>
            <Button
              full
              style={{ marginTop: 20 }}
              loading={loading}
              onPress={() => onAddChild()}
            >
              {t("Add")}
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default addingChild;
