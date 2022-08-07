import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView, Text, TextInput, View } from '../../components/Themed';
import { getAllUsers, getFullName } from '../../services/users.service';
import User from '../../types/user.type';
import UserCard from '../../components/UserCard';
import styles from './styles';
import { RootStackScreenProps } from '../../types/globals.type';
import { removeUser, setUsers } from '../../slices/usersSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

type Props = RootStackScreenProps<'Root'>;

export default function UsersScreen({ navigation }: Props) {
  const users = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getAllUsers()
      .then((users) => {
        dispatch(setUsers(users));
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  const handleDelete = (user: User) => () => dispatch(removeUser(user.id));

  const handleUserPress = (user: User) => () =>
    navigation.navigate('UserInfo', { user });

  const handleAddUser = () => navigation.navigate('AddUser');

  const filterUsers = () =>
    users.filter((user) =>
      getFullName(user)
        .toLowerCase()
        .includes(search.replace(/\s+/g, '').toLowerCase())
    );

  const ListHeader = (): JSX.Element =>
    loading ? (
      <ActivityIndicator size="large" />
    ) : users.length === 0 ? (
      <Text style={styles.emptyText}>No users found</Text>
    ) : (
      <Text style={styles.infoText}>Users count: {users.length}</Text>
    );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        onChangeText={setSearch}
      />
      <FlatList
        data={filterUsers()}
        renderItem={({ item }) => (
          <UserCard
            containerStyle={{
              margin: 5
            }}
            user={item}
            onDelete={handleDelete(item)}
            onPress={handleUserPress(item)}
          />
        )}
        ListHeaderComponent={ListHeader}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        key="hv"
      />
      <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddUser}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
