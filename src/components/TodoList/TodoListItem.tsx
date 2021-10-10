import { Todo } from "./TodoList";
import { useMutation } from '@apollo/client'
import { SOFT_DELETE_ITEM } from '../../repositories/TodoListData';
import './TodoListItem.css';

type TodoListItemProps = { 
  todo: Todo 
}

function TodoListItem({todo} :  TodoListItemProps) {

  const [deleteItem, { loading }] = useMutation(SOFT_DELETE_ITEM, {
    update(_, result){
      if(!loading) console.log(result);
      window.location.reload();
    },
    onError(err){
      console.log(err);
    }
  });

  function handleDelete() {
    deleteItem({variables: { id: todo.id }});
  }

  return (
    <div className="listitem-container flex items-center my-2 p-4 rounded filter drop-shadow">
      <div className="container-info flex-1">
        <p>{ todo.title }</p>
        { todo.dueDate!= null && <small className="italic">Due on: { todo.dueDate }</small>}
      </div>
      {/* <span className="material-icons">check</span> */}
      <span className="material-icons" onClick={handleDelete}>delete</span>
    </div>
  );
}

export default TodoListItem;
