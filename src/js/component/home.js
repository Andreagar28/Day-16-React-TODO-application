import React, { useState } from "react";
import TareaForm, { useState } from "./tareaform.jsx";
import Tarea from "./tarea.jsx";

function App() {
	const [listaTareas, setListaTareas] = [];

	const nuevaTarea = tarea => {
		setListaTareas([tarea, ...listaTareas]);
	};

	return (
		<div className="App">
			<TareaForm nuevaTarea={nuevaTarea} />

			<div className="lista">
				{listaTareas.map(e => (
					<Tarea tarea={e} />
				))}
			</div>
		</div>
	);
}
export default App;
