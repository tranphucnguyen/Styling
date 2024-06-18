// App.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Square from '@/components/Square';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Square color="#00BFFF" title="Square 1" />
      <Square color="#3CB371" title="Square 2" />
      <Square color="#FF6347" title="Square 3" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default App;
