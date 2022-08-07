import { Image, StyleSheet } from 'react-native';
import { ScrollView, Text, View, ViewOverlay } from '../../components/Themed';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { addressToString, getFullName } from '../../services/users.service';
import { RootStackScreenProps } from '../../types/globals.type';
import User from '../../types/user.type';
import styles from './styles';

type Props = RootStackScreenProps<'UserInfo'>;
type UserKey = keyof User;
type RowData = {
  label: string;
  key: UserKey;
  innerKey?: string;
};
const ROWS: RowData[] = [
  { label: 'First Name', key: 'firstName' },
  { label: 'Last Name', key: 'lastName' },
  { label: 'Email', key: 'email' },
  { label: 'Phone', key: 'phone' },
  { label: 'Company', key: 'company', innerKey: 'name' }
];

export default function UserInfoScreen({ route }: Props) {
  const colorScheme = useColorScheme();
  const user = route.params.user;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <ViewOverlay style={styles.backgroundView}>
          <Image
            source={{ uri: user.image }}
            resizeMode="cover"
            style={styles.backgroundImage}
            blurRadius={10}
          />
        </ViewOverlay>
        <Image source={{ uri: user.image }} style={styles.avatar} />
        <Text style={styles.name}>{getFullName(user)}</Text>
        <Text style={[styles.age, { color: Colors[colorScheme].tint }]}>
          {user.age}
        </Text>
      </View>
      {ROWS.map((row) => (
        <UserRow
          key={row.key}
          title={row.label}
          value={user[row.key]}
          innerKey={row.innerKey}
        />
      ))}
      {user.address && (
        <UserRow title="Address" value={addressToString(user.address)} />
      )}
      {user.company && (
        <UserRow
          title="Company Address"
          value={addressToString(user.company.address)}
        />
      )}
    </ScrollView>
  );
}

const UserRow = ({
  title,
  value,
  innerKey
}: {
  title: string;
  value: any;
  innerKey?: string;
}) => (
  <View style={styles.row}>
    <Text
      lightColor={Colors.light.tint}
      darkColor={Colors.dark.tint}
      style={styles.rowTitle}
    >
      {title}
    </Text>
    <Text style={styles.rowValue}>{(innerKey ? value?.[innerKey] : value) ?? 'Not Assigned'}</Text>
  </View>
);
