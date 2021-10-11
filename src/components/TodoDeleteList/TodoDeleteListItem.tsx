import { Todo } from "./TodoDeleteList";
import './TodoDeleteListItem.css';

type TodoListItemProps = { 
  todo: Todo 
  handleDelete: (id: number) => void;
}

function TodoDeleteListItem({todo, handleDelete} :  TodoListItemProps) {

  return (
    <div className="listitem-container flex items-center p-4">
      <div className="container-info flex-1">
        <p>{ todo.title }</p>
        { todo.dueDate!= null && <small className="italic">Due on: { todo.dueDate }</small>}
      </div>
      <span className="material-icons cursor-pointer" onClick={() => handleDelete(todo.id)}>delete</span>
    </div>
  );
}

export default TodoDeleteListItem;
