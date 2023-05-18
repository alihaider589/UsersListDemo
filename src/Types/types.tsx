declare global {
  interface UserList {
    Users: User[];
    editPressHandler: (arg0: User) => void;
    deletePressHandler: (arg0: User) => void;
  }
  interface ListComponent {
    item: User;
    editPressHandler: (arg0: User) => void;
    deletePressHandler: (arg0: User) => void;
  }
  interface Input {
    placeholder: string;
    onChangeText: () => void;
    value: any;
  }
  interface ButtonType {
    text: string;
    onPress: () => void;
  }
  interface User {
    address: Address;
    company: Company;
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
  }
  interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }
  interface Address {
    street: string;
    suite: string;
    zipcode: string;
  }
}

const test = {};
export default test;
