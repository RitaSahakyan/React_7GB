import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Список задач</h1>
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
