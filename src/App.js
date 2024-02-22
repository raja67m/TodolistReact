
import TodoList from "./todolist";
import { Provider } from 'react-redux';
import store from "./reducer";
function App() {
  return (
    <Provider store={store}>
       <div>

<TodoList/>
   </div>

    </Provider>
  
  );
}

export default App;
