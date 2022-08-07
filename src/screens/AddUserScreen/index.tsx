import { KeyboardTypeOptions } from 'react-native';
import CustomInputField from '../../components/CustomInputField';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from '../../components/Themed';
import { Formik } from 'formik';
import * as yup from 'yup';
import styles from './styles';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { addUser } from '../../slices/usersSlice';
import UserCreateDto from '../../types/user-create.dto';
import { RootStackScreenProps } from '../../types/globals.type';

type Props = RootStackScreenProps<'AddUser'>;
export function AddUserScreen({ navigation }: Props) {
  const dispatch = useAppDispatch();

  const initialValues: UserCreateDto = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@mail.com',
    phone: '+380991234567',
    age: Math.floor(Math.random() * 80 + 20),
    image: 'https://picsum.photos/' + (Math.floor(Math.random() * 100) + 200)
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerTitle}>New User Form</Text>
      <Formik
        validationSchema={UserCreationValidationSchema}
        onSubmit={(values) => {
          dispatch(addUser(values));
          navigation.goBack();
        }}
        initialValues={initialValues}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid
        }) => (
          <>
            {INPUT_FIELDS.map((inputField) => (
              <CustomInputField
                key={inputField.label}
                label={inputField.label}
                containerStyle={styles.inputFieldContainer}
                keyboardType={inputField.type}
                onChangeText={handleChange(inputField.name)}
                onBlur={handleBlur(inputField.name)}
                value={values[inputField.name].toString()}
                error={errors[inputField.name]}
              />
            ))}
            <View style={styles.addButtonContainer}>
              <TouchableOpacity
                style={[
                  styles.addButton,
                  {
                    opacity: isValid ? 1 : 0.5
                  }
                ]}
                onPress={() => handleSubmit()}
                disabled={!isValid}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </ScrollView>
  );
}

type InputField = {
  label: string;
  name: keyof UserCreateDto;
  type?: KeyboardTypeOptions;
};

const INPUT_FIELDS: InputField[] = [
  {
    label: 'First Name',
    name: 'firstName'
  },
  {
    label: 'Last Name',
    name: 'lastName'
  },
  {
    label: 'Age',
    type: 'numeric',
    name: 'age'
  },
  {
    label: 'Email',
    type: 'email-address',
    name: 'email'
  },
  {
    label: 'Phone',
    type: 'phone-pad',
    name: 'phone'
  },
  {
    label: 'Image (URL)',
    name: 'image'
  }
];

const UserCreationValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  age: yup
    .number()
    .min(1, ({ min }) => `Age must be at least ${min}`)
    .max(160, ({ max }) => `Age must be less than ${max}`)
    .required('Age is required'),
  firstName: yup
    .string()
    .min(3, ({ min }) => `First Name must be at least ${min} characters`)
    .max(20, ({ max }) => `First Name must be less than ${max} characters`)
    .required('First Name is required'),
  lastName: yup
    .string()
    .min(3, ({ min }) => `Last Name must be at least ${min} characters`)
    .max(20, ({ max }) => `Last Name must be less than ${max} characters`)
    .required('Last Name is required'),
  phone: yup
    .string(),
  image: yup.string().url('Please enter valid URL')
});
