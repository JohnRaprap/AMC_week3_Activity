import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {

  const [name, onChangeName] = React.useState('name ');
  const [age, onChangeAge] = React.useState('age ');
  const [address, onChangeAddress] = React.useState('address ');
  const [school, onChangeSchool] = React.useState('school ');
  const [course, onChangeCourse] = React.useState('course');
  const [email, onChangeEmail] = React.useState('email');
  const [contact, onChangeContact] = React.useState('contact');
  const [about_me, onChangeText] = React.useState('about me: ');
  


  

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

        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => onChangeText(text)}
          value={about_me}
          style={styles.multiline}
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
  multiline: {
    borderBottomColor: '#000',
    borderWidth: 1,
    margin: 12
  }
});

export default TextInputExample;
