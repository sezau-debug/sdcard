import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
const DATA1 = [ 
  { id: '1', heading: 'Order', description: '30' },
  { id: '2', heading: 'User', description: '38' },
  { id: '3', heading: 'Team', description: '20' },
  { id: '4', heading: 'Payment', description: '18'},
];
const Home = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [chartData, setChartData] = useState(null); 
  useEffect(() => {
    const generateDynamicData = () => {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      const data = labels.map(() => Math.floor(Math.random() * 50)); 
      return {
        labels,
        datasets: [{ data }],
      };
    };
    setChartData(generateDynamicData());
    const interval = setInterval(() => {
      setChartData(generateDynamicData());
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const toggleItemSelection = (item) => {
    setSelectedItem(item);
    navigation.navigate('search', { heading: item.heading });
  };
  const isItemSelected = (item) => {
    return selectedItem === item;
  };
  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <Text style={styles.heading1}>Review</Text>
        <FlatList
          data={DATA1}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => toggleItemSelection(item)}
              style={[
                styles.item,
                { backgroundColor: '#2680eb'},
                isItemSelected(item) && { borderColor: 'white' },
              ]}
            >
              <Text style={styles.heading}>{item.heading}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
      <View style={styles.chartContainer}>
        <Text style={styles.activityHeading}>Activity</Text>
        {chartData && (
          <LineChart
            data={chartData}
            width={340}
            height={210}
            yAxisLabel="$"
            chartConfig={{
              backgroundGradientTo: '#2680eb', 
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(225, 225, 225, ${opacity})`, 
              style: {
                borderRadius: 16,
              },
            }}
            bezier
          />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2680eb',
    borderTopLeftRadius: 40, 
    borderTopRightRadius: 40,
    
  },
  flatListContainer: {
    flex: 0.9,
    backgroundColor: '#f0f0f0', 
    padding: 8,
    marginTop:20 ,
   // bottom:2 ,
   // height: 150
                                                                                                        
  },
  heading1: {
    fontSize: 17,
    fontWeight: 'bold',
   // textAlign: 'center',
    //marginBottom: 10,
   
  },
  heading: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
   
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    width: 150,
    height: 105,
    marginHorizontal: 4,
    borderWidth: 1,
    borderRadius: 15,
    overflow: 'hidden',
   // padding: 10,
    borderColor: 'white',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 10,
    fontWeight: '500',
    color: 'white',
  },
  flatListContent: {
    //paddingBottom: 20,
  },
  chartContainer: {
   marginTop: 20,
   //alignItems: 'center',
   backgroundColor:'#f0f0f0',
  // marginRight:40
  
  },
  activityHeading: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft:10
  //  marginBottom: 10,
  
  },
});

export default Home;
