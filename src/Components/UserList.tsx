import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

import {AppConstants} from '../Constants/Constants';

import styles from './styles';
import ListComponent from './ListComponent';
const UserList: React.FC<UserList> = ({
  Users,
  editPressHandler,
  deletePressHandler,
}) => {
  return (
    <View>
      {Users.length > 0 ? (
        <FlatList
          renderItem={({item}) => (
            <ListComponent
              item={item}
              deletePressHandler={deletePressHandler}
              editPressHandler={editPressHandler}
            />
          )}
          data={Users}
        />
      ) : (
        <Text>No Users Found</Text>
      )}
    </View>
  );
};

export default UserList;
