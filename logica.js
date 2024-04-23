window.addEventListener('load', () => {
    const form = document.querySelector("#lista-nueva");
	const input = document.querySelector("#lista");
	const list_el = document.querySelector("#tareas");
    //aqui ya nos esta resviendo lo que escribimos en agregar tarea el evento submit del foro se activa
    form.addEventListener('submit', (e) => {
		e.preventDefault();
       
        const tarea = input.value;

        if(!tarea) {
            alert("Por favor introduce tu tarea");
            return;
        }

        /*aqui es creamos el texto y lo anadimos a tarea que sigue en el html */
        const tarea_el = document.createElement("div");
		tarea_el.classList.add("tarea");

        /**esta es la  parte del contenedor osea la caja donde esta el texto */
		const tarea_contenido = document.createElement("div");
        tarea_contenido.classList.add("contenedor");
        //        tarea_contenido.innerHTML = tarea; si dejo esta parte se duplicara el texto        
        tarea_el.appendChild(tarea_contenido);

        const tarea_input = document.createElement("input");
        tarea_input.classList.add("text");
        tarea_input.type = "text";
        tarea_input.value = tarea;
        tarea_input.setAttribute("readonly", "readonly");
        
        tarea_contenido.appendChild(tarea_input);

        const tarea_acciones = document.createElement("div");
		tarea_acciones.classList.add("acciones");
		
		const tarea_editar = document.createElement("button");
		tarea_editar.classList.add("editar");
		tarea_editar.innerText = "editar";

		const tarea_eliminar = document.createElement("button");
		tarea_eliminar.classList.add("eliminar");
		tarea_eliminar.innerText = "eliminar";

		tarea_acciones.appendChild(tarea_editar);
		tarea_acciones.appendChild(tarea_eliminar);

		tarea_el.appendChild(tarea_acciones);

        list_el.appendChild(tarea_el);

        input.value = '';

		tarea_editar.addEventListener('click', (e) => {
			if (tarea_editar.innerText.toLowerCase() == "editar") {
				tarea_editar.innerText = "Save";
				tarea_input.removeAttribute("readonly");
				tarea_input.focus();
			} else {
				tarea_editar.innerText = "editar";
				tarea_input.setAttribute("readonly", "readonly");
			}
		});

		tarea_eliminar.addEventListener('click', (e) => {
			list_el.removeChild(tarea_el);
		});
    });
});
//anti clonar tareas y transiicon de fondo de colores falta hacer
