window.onload = () => {
    const form = document.forms.searchForm;
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const valor = form.busqueda.value;
        const url = `https://www.google.com/search?q=${valor}`;
        

        //redireccionarBusqueda(url);
        guardarBusqueda(valor);
    });

    /*
    function redireccionarBusqueda(url) {
        location.href = url;
    }*/

    function guardarBusqueda(valor) {
        if(localStorage.length === 0) {
            localStorage.setItem("historial", JSON.stringify([valor]));
        } else {
            const historial = JSON.parse(localStorage.getItem("historial"));
            historial.push(valor);
            localStorage.setItem("historial", JSON.stringify(historial));
        }   
    }

    // renderizar
}