import { FontAwesome5 } from '@expo/vector-icons';
import { Image, StyleProp, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { getFullName } from '../services/users.service';
import User from '../types/user.type';
import { Text, TouchableOpacity } from './Themed';

export type UserCardProps = {
  user: User;
  containerStyle?: StyleProp<any>;
  onPress?: () => void;
  onDelete?: () => void;
};

export default function UserCard({
  user,
  containerStyle,
  onPress,
  onDelete
}: UserCardProps) {
  user = user ?? {};

  const colorScheme = useColorScheme();

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      <Image
        source={{ uri: user.image }}
        style={[
          styles.avatar,
          {
            backgroundColor: Colors[colorScheme].background
          }
        ]}
      />
      <Text style={styles.name}>{getFullName(user)}</Text>
      <Text style={[styles.age, { color: Colors[colorScheme].tint }]}>
        {user.age}
      </Text>
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <FontAwesome5 name="times" size={26} color="#f44336" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 75,
    marginBottom: 16
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '900',
    margin: 8
  },
  age: {
    fontSize: 16
  },
  deleteButton: {
    position: 'absolute',
    top: 15,
    right: 15
  }
});
