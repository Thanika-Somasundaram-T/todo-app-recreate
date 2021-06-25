import TaskList from './taskList';
import './default.css';
import './style.css';
import './light.css';

const TaskPane = () =>
	<div className="task-pane">
		<h3>TASKS</h3>
		<div>{ TaskList() }</div>
	</div>

export default TaskPane;
