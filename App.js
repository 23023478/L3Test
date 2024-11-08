import React from 'react';
import {Alert, Button, Text, TextInput, ToastAndroid, TouchableOpacity, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

// Custom Components
const InputBox = ({label, onChangeText}) => {
    return(
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText}/>
        </View>
    )
}
const MyApp = () => {

    const [pw, setPw] = React.useState('');
    const [name, setName] = React.useState('');
    const [type, setType] = React.useState('');
    const [add, setAdd] = React.useState('');

    return (
      <View style={{padding: 20, paddingTop:50 }}>

        {/*Excercise 1B*/}
        <Text>User Type:</Text>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
            { label: 'Admin', value: 'Admin' },
            { label: 'Guest', value: 'Guest' },
          ]}
        />

        {/*EXCERCISE 1A*/}
        <Text>Password:</Text>
        <TextInput style={{borderWidth: 1}} />

        {/*EXCERCISE 1C and 1D*/}
        <Button
          title="Submit Answers"
          onPress={() =>Alert.alert("Another Thing!")}
        />

        {/*EXCERCISE 1E*/}
        <TouchableOpacity
          onPress={() =>Alert.alert("Welcome!")}>
          <Text>Submit Answers</Text>
        </TouchableOpacity>

        {/*EXCERCISE 1F*/}
        <TouchableOpacity
          onPress={() => ToastAndroid.show("Welcome!", ToastAndroid.SHORT)}>
          <Text>LOG IN</Text>
        </TouchableOpacity>

          {/*EXCERCISE 1G*/}
          <InputBox label="User Name:" onChangeText={(text) => setName(text)} />

          <InputBox label="Password:" onChangeText={(text) => setType(text)} />

          <TouchableOpacity OnPress={() =>
              ToastAndroid.show('Welcome'+ type + '' + name, ToastAndroid.SHORT)}>
              <Text>LOG IN</Text>
          </TouchableOpacity>
          <Text>{pw}</Text>
      </View>

  );
};

export default MyApp;
