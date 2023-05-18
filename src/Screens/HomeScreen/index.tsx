import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import useApiHandler from '../../Helpers/ApiHandler';
import {AppConstants} from '../../Constants/Constants';

import styles from './styles';
import UserList from '../../Components/UserList';
import Button from '../../Components/Button';

export default function HomePage() {
  const {data, loading, error} = useApiHandler(AppConstants.apiUrl);

  const [Users, setUsers] = useState<User[]>([]);
  const [showUserForm, setShowUserForm] = useState(false);

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  const editPressHandler = (User: User) => {
    const allUsers = [...Users];
    const currentUserIndex = allUsers.findIndex(
      currentUser => currentUser.id == User.id,
    );
    if (currentUserIndex !== -1) {
      allUsers[currentUserIndex] = {
        ...allUsers[currentUserIndex],
        address: {
          ...allUsers[currentUserIndex].address,
          street: randomWord.length + '@' + randomWord + randomWord.length,
        },
      };
    }
    setUsers(allUsers);
  };

  const deletePressHandler = (User: User) => {
    const allUsers = [...Users];
    const currentUserIndex = allUsers.findIndex(
      currentUser => currentUser.id == User.id,
    );
    if (currentUserIndex !== -1) {
      allUsers.splice(currentUserIndex, 1);
    }
    setUsers(allUsers);
  };

  const randomWords = [
    'Text',
    'Lorem',
    'Ipsum',
    'User',
    'Biryani',
    'Pulao',
    'Steak',
    'Tikka',
    'Taufeeq',
    'Ali',
  ];
  const randomWord =
    randomWords[Math.floor(Math.random() * randomWords.length)];
  const onAddUserPressHandler = () => {
    const allUsers = [...Users];

    const randomUser: User = {
      id: allUsers.length + 1,
      name: randomWord,
      address: {
        street: randomWord + randomWord + '@' + randomWord.length,
        suite: '',
        zipcode: '',
      },
      company: {bs: '', catchPhrase: '', name: randomWord},
      email: randomWord,
      phone: randomWord,
      username: randomWord,
      website: randomWord,
    };
    allUsers.push(randomUser);
    console.log(randomUser);
    setUsers(allUsers);
  };
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <React.Fragment>
          <Button
            onPress={onAddUserPressHandler}
            text={AppConstants.buttonsText.addUserText}
          />
          <UserList
            editPressHandler={editPressHandler}
            deletePressHandler={deletePressHandler}
            Users={Users}
          />
        </React.Fragment>
      )}
    </View>
  );
}
