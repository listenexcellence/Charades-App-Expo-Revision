import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Gyroscope } from 'expo-sensors';

const TiltHandler = () => {
  const [gyroscopeData, setGyroscopeData] = useState({ y: 0 });

  useEffect(() => {
    let subscription = Gyroscope.addListener(gyroscopeData => {
      setGyroscopeData(gyroscopeData);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const { y } = gyroscopeData;

  let backgroundColor = `rgb( 0, 0, 72)`;
  let display = 'block';
  if (y > 3.5){
    backgroundColor = 'red';
    display = 'none';
  } else if (y <= -3.5) {
    backgroundColor = "green";
  }

  return (
    <View style={{ flex: 1, borderWidth: 100, borderColor: backgroundColor, backgroundColor: '#fff', }} >
        <Text style={{ color: 'blue', display }}>Helooo { y }</Text>
    </View>
  );
};

export default TiltHandler;
