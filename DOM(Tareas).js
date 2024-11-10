const InputTarea = document.getElementById('TareaNueva');
const BotonAgregar = document.getElementById('Agregar');
const ListaTareas = document.getElementById('ListaTareas');

BotonAgregar.addEventListener('click', () => {
    const NuevaTarea = document.createElement('li');
    NuevaTarea.textContent = InputTarea.value;
    
    ListaTareas.appendChild(NuevaTarea);
    InputTarea.value = '';

    const BotonEliminar = document.createElement('button');
    BotonEliminar.textContent = 'Eliminar';
    BotonEliminar.addEventListener('click', () => {
        ListaTareas.removeChild(NuevaTarea);
    }) 
    NuevaTarea.appendChild(BotonEliminar)
})



