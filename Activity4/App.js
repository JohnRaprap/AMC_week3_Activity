import React from 'react';
import {StyleSheet, TextInput, Image, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeName] = React.useState('');
  const [age, onChangeAge] = React.useState('');
  const [address, onChangeAdd] = React.useState('');
  const [school, onChangeSchool] = React.useState('');
  const [course, onChangeCourse] = React.useState('');
   const [email, onChangeEmail] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
    const [value, onChangeText] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
      <View style={styles.container}>
       <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/028/569/170/original/single-man-icon-people-icon-user-profile-symbol-person-symbol-businessman-stock-vector.jpg',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="name"
          keyboardType="numeric"
        />
          </View>

         <View style={styles.container}>
       <Image
          source={{
            uri: 'https://as2.ftcdn.net/v2/jpg/00/89/06/29/1000_F_89062950_j0D7XXprsIKbQ7ao4FLoQwPirLZnLdNv.jpg',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value={age}
          placeholder="age"
          keyboardType="numeric"
        />
        </View>
         <View style={styles.container}>
       <Image
          source={{
            uri: 'https://img.freepik.com/vetores-premium/logo-do-google-maps_578229-304.jpg',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAdd}
          value={address}
          placeholder="address"
          keyboardType="numeric"
        />
        </View>
         <View style={styles.container}>
       <Image
          source={{
            uri: 'https://www.erovoutika.ph/assets/images/logo/universities-logo/univ-logo36.webp',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={school}
          placeholder="School"
          keyboardType="numeric"
        />
        </View>
         <View style={styles.container}>
       <Image
          source={{
            uri: 'https://grc.edu.ph/wp-content/uploads/elementor/thumbs/it-outu8f4vazq9hp49ntbuxv3pe85vgr5rndrar3lmiw.jpg',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={course}
          placeholder="Course"
          keyboardType="numeric"
        />
        </View>
         <View style={styles.container}>
       <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/029/284/964/original/google-logo-on-transparent-background-popular-search-engine-google-logotype-symbol-icon-google-sign-stock-free-vector.jpg',
          }}
          style={{width: 50, height: 50}}
        />
          <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
          keyboardType="numeric"
        />
        </View>
         <View style={styles.container}>
       <Image
          source={{
            uri: 'https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-7.png',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Contact"
          keyboardType="numeric"
        />
        </View>
         <View style={styles.container}>
       <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.D_uAU4mxD1Wofri3tNiS6QAAAA?rs=1&pid=ImgDetMain',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={60}
           style={styles.textInput}
          onChangeText={text => onChangeText(text)}
          value={value}
         
          placeholder="About ME"
          keyboardType="numeric"
        />
        </View>



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
   textInput: {
      borderWidth: 1,
      margin: 12,
    padding: 2,
  },
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
  }
 
});


export default TextInputExample;