import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {

  const [name, onChangeName] = React.useState(' ');
  const [age, onChangeAge] = React.useState(' ');
  const [address, onChangeAddress] = React.useState(' ');
  const [school, onChangeSchool] = React.useState(' ');
  const [course, onChangeCourse] = React.useState(' ');
  const [email, onChangeEmail] = React.useState(' ');
  const [contact, onChangeContact] = React.useState(' ');
  


  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="name"
          
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value={age}
          placeholder="age"
          
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
          placeholder="address"
          
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={school}
          placeholder="school"
          
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={course}
          placeholder="course"
          
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="email"
          
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeContact}
          value={contact}
          placeholder="contact"        
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;