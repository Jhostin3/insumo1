import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

interface IconButtonProps {
  icon: JSX.Element;      
  onPress: () => void;
}

const IconButton = ({ icon, onPress }: IconButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {icon}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IconButton;
