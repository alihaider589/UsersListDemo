import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './styles';
import {AppConstants} from '../Constants/Constants';
import Button from './Button';

const ListComponent: React.FC<ListComponent> = ({
  item,
  deletePressHandler,
  editPressHandler,
}) => {
  return (
    <View style={styles.userContainer}>
      <View>
        <Text style={[styles.whiteText]}>{item.name}</Text>
        <Text style={[styles.whiteText]}>{item.address.street}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {item.id == 2 && (
          <Button
            onPress={() => editPressHandler(item)}
            text={AppConstants.buttonsText.editText}
          />
        )}
        <Button
          onPress={() => deletePressHandler(item)}
          text={AppConstants.buttonsText.deleteText}
        />
      </View>
    </View>
  );
};

export default ListComponent;
