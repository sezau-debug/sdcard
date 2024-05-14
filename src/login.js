import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, ScrollView, Platform  } from 'react-native';
  const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };
  const handleForgotPassword = () =>{
    console.log('Forgot Password');
  };
  return (
     <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.header}>
       <Image source={require('./assets/5435904.png')} style={styles.logo} />
         </View>
          <View style={styles.bottomContainer}>
          <View style={styles.loginContainer}>
          <Text style={styles.adminSignIn}>Admin Sign In</Text>
          <Text style={styles.signInText}>Sign into your account</Text>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIconContainer}>
              <Image
                source={showPassword ? require('./assets/11541247.png') : require('./assets/5062877.png')}
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.rememberMeContainer}>
            <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} style={[styles.checkbox, rememberMe && styles.checked]}>
              {rememberMe && <Image source={require('./assets/images (1).png')} style={styles.checkmark} />}
            </TouchableOpacity>
            <Text style={styles.rememberMeText}>Remember me</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.chartContainer}>
        <Text style={styles.activityHeading}>Activity</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2680eb',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  logo: {
    width: 140,
    height: 150,
    resizeMode: 'contain',
    top: 10
  },
  bottomContainer: {
    flex: 1,
    borderTopLeftRadius: 40, 
    borderTopRightRadius: 40, 
    backgroundColor: 'white',
    overflow: 'hidden',    
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adminSignIn: {
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'flex-start',
    marginBottom: 5,
    marginLeft: '10%',
    bottom: 10
  },
  signInText: {
    alignSelf: 'flex-start',
    color: 'gray',
    marginBottom: 20,
    marginLeft: '10%',
    bottom: 10
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 5,
    color: 'black',
    fontWeight: '500',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#DBE7F3',
    marginVertical: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
  },
  eyeIcon: {
    width: 20,
    height: 20,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    marginRight: '36%',
    marginTop: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 3,
    borderWidth: 1,
  },
  checked: {
    backgroundColor: '#1a73e8',
    borderColor: '#1a73e8',
  },
  checkmark: {
    width: 18,
    height: 18,
  },
  rememberMeText: {
    marginLeft: 20,
  },
  button: {
    backgroundColor: '#2680eb',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  forgotPasswordText: {
    color: '#2680eb',
    textDecorationLine: 'underline',
    top: 80
  },
  chartContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  activityHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default LoginScreen;
