//Crea vatiables de tipo 'const' y las enlaca el ID
const Boton = document.getElementById('Cambiar_Color')
const Parrafo = document.getElementById('Parrafo') 

const colores = {
    'verde':'green',
    'rojo':'red',
    'azul':'blue',
    'naranja':'orange',
    'rosado':'pink',
    'celeste': 'cyan'
};

const NombreColor = Object.keys(colores)

Boton.addEventListener('click', ()=> {
    const ColorEs = NombreColor[Math.floor(Math.random() *NombreColor.length)]
    const ColorEn = colores[ColorEs]
    
    Parrafo.textContent = `...Es la curiosidad constante la que desvela secretos; no una carrera contra el tiempo".  Albert Einstein `;
    Parrafo.style.color = ColorEn;
});