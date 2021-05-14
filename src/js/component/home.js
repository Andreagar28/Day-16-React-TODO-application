import React from "react";
import TareaForm from "./tareaform.jsx";
import Tarea from "./tarea.jsx";
import PropTypes from "prop-types";

function Home() {
	const [listaTareas, setListaTareas] = [];

	const nuevaTarea = tarea => {
		setListaTareas([tarea, ...listaTareas]);
	};

	const borrar = id => {
		const listaFiltrada = listaTareas.filter((e, index) => index !== id);
		setListaTareas(listaFiltrada);
	};

	const actualizarTarea = (id, tarea) => {
		const listaActualizada = listaTareas.map((e, index) => {
			if (index === id) {
				e = tarea;
			}
			return e;
		});
		setListaTareas(listaActualizada);
	};

	return (
		<div className="App">
			<TareaForm nuevaTarea={nuevaTarea} />

			<div className="lista">
				{listaTareas.map((e, index) => (
					<Tarea
						key={index}
						tarea={e}
						borrar={borrar}
						id={index}
						editar={actualizarTarea}
					/>
				))}
			</div>
		</div>
	);
}
export default Home;
