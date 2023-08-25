import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./state/store";

function App() {
   return (
      <>
         <Provider store={store}>
            <div>
               <Head />
               <Body />
            </div>
         </Provider>
      </>
   );
}

export default App;
