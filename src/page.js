import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const LikePage = () => {
  const navigation = useNavigation();
  const users = [
    { 
      id: 1, 
      name: 'DR.JD shah', 
      role: 'user', 
      designation: 'Professor', 
      joiningDate: '01/01/2023',
      photo: require('./assets/6024190.png') 
    },
    { 
      id: 2,
      name: 'Ms. Enna', 
      role: 'user', 
      designation: 'Teacher', 
      joiningDate: '01/01/2023', 
      photo: require('./assets/6024190.png') 
    },
    { 
      id: 3,
      name: 'Mr. vinesh', 
      role: 'user', 
      designation: 'Engineer', 
      joiningDate: '01/01/2020', 
      photo: require('./assets/6024190.png') 
    },
    { 
      id: 4, 
      name: 'Ms. Enna', 
      role: 'user', 
      designation: 'Teacher', 
      joiningDate: '01/01/2020', 
      photo: require('./assets/6024190.png') 
    },
    { 
      id: 5, 
      name: 'Ms. Reon', 
      role: 'user',
      designation: 'Teacher', 
      joiningDate: '21/01/2020', 
      photo: require('./assets/6024190.png') 
    },
    {
      id: 6, 
      name: 'Ms. Enna', 
      role: 'user', 
      designation: 'Teacher', 
      joiningDate: '30/09/2002', 
      photo: require('./assets/6024190.png') 
    },
    { 
      id: 7, 
      name: 'Ms. Enna', 
      role: 'user', 
      designation: 'student', 
      joiningDate: '23/09/2002', 
      photo: require('./assets/6024190.png') 
    },
    { 
      id: 8, 
      name: 'Ms. Enna', 
      role: 'user', 
      designation: 'Teacher', 
      joiningDate: '30/09/2002', 
      photo: require('./assets/6024190.png') 
    },
    { 
      id: 9, 
      name: 'Ms. Enna', 
      role: 'user', 
      designation: 'Teacher', 
      joiningDate: '15/02/2023', 
      photo: require('./assets/6024190.png') 
    },
    { 
      id: 10, 
      name: 'Ms. Enna', 
      role: 'user', 
      designation: 'Teacher',
      joiningDate: '30/09/2005', 
      photo: require('./assets/6024190.png') 
    },
  ];
  const [showActionButtons, setShowActionButtons] = useState(null);
  const handleRemoveUser = (userId) => {
    console.log("Remove user with ID:", userId);
  };
  const handleViewUser = (userId) => {
    console.log("View user with ID:", userId);
    // Navigate to the user's page
    navigation.navigate('search', { search });
  };
  const handleLogoPress = (userId) => {
    if (showActionButtons === userId) {
      setShowActionButtons(null);
    } else {
      setShowActionButtons(userId);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchBar}>
        <Image
          source={require('./assets/search.png')}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search users"
          placeholderTextColor="#888"
        />
      </View>
      <View style={styles.userList}>
        {users.map(user => (
          <View key={user.id} style={styles.backgroundBox}>
            <View style={styles.userContainer}>
              <Image source={user.photo} style={styles.userPhoto} />
              <View>
                <Text style={styles.userName}>{user.name}</Text>
                <View style={styles.userInfo}>
                  <Text style={styles.userRole}>{user.role}</Text>
                  <Text style={styles.userDesignation}>{user.designation}</Text>
                  <View style={styles.joiningDateContainer}>
                    <Text style={styles.joiningDate}>{user.joiningDate}</Text>
                    <TouchableOpacity onPress={() => handleLogoPress(user.id)}>
                      <Image
                        source={require('./assets/dot.png')}
                        style={styles.logo}
                      />
                    </TouchableOpacity>
                  </View>
                  {showActionButtons === user.id && (
  <View style={styles.actionButtonsContainer}>
    <TouchableOpacity onPress={() => handleRemoveUser(user.id)}>
      <Text style={styles.actionButton}>Remove</Text>
    </TouchableOpacity>
    <View style={{ height: 10 }} />
    <TouchableOpacity onPress={() => handleViewUser(user.id)}>
      <Text style={styles.actionButton}>View</Text>
    </TouchableOpacity>
  </View>
)}
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#ddd',
    borderRadius: 20, 
    height: 40,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  backgroundBox: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  userRole: {
    marginRight: 10,
  },
  userDesignation: {
    marginRight: 10,
  },
  joiningDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  joiningDate: {
    color: 'gray',
    fontSize: 12,
    fontWeight: 'bold',
  },
  logo: {
    width: 10,
    height: 20,
    marginLeft: 65,
    bottom: 20,
  },
  actionButtonsContainer: {
    flexDirection: 'column',
  },
  actionButton: {
    right: 65,
    color: 'black',
    fontSize: 12,
    bottom: 15,
  },
});

export default LikePage;
