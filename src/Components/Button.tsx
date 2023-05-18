import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {AppConstants} from '../Constants/Constants';
import styles from './styles';

const Button: React.FC<ButtonType> = ({text, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.actionButton}
      activeOpacity={AppConstants.buttonsActiveOpacity}>
      <Text style={[styles.whiteText]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
