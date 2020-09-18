//import { StackView } from "react-navigation-stack";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SignIn from "../screens/signin";
import SignUp from "../screens/signup";

const Screens = {
  SignIn: {
    screen: SignIn,
  },

  SignUp: {
    screen: SignUp,
  },
};

const AccountsStack = createStackNavigator(Screens);

export default createAppContainer(AccountsStack);
