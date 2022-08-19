import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./Home";
import Administracao from "./Administracao";
import Info from "./Info";
import Fotografia from "./Fotografia";
import Estar from "./Estar";

const Stack = createStackNavigator();


export default function App() {

  return (

<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Administracao" component={Administracao}/>
    <Stack.Screen name="Info" component={Info}/>
    <Stack.Screen name="Fotografia" component={Fotografia}/>
    <Stack.Screen name="Estar" component={Estar}/>
  </Stack.Navigator>

</NavigationContainer>
  );
}

