import React from "react";

const Todo = (props) => {
	console.log(props);
	return (
		<li key={props.todo.id}>
			<span>{props.todo.text}</span>
			<button onClick={() => props.delete(props.todo.id)}>DELETE</button>
		</li>
	);
};

export default Todo;
