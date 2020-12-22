import TodoContext from "./context/TodoContext";
import TodoListPage from "./pages/TodoListPage";


function App() {
  return (
    <TodoContext>
      <TodoListPage />
    </TodoContext>
  );
}

export default App;
