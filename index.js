"use strict";
function handleGetModelos() {
    const linkApiGetModelos = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos';
    fetch(linkApiGetModelos)
        .then((response) => response.json())
        .then((data) => {
        const modelosList = document.getElementById('modelos');
        if (modelosList) {
            modelosList.innerHTML = '';
            data.modelos.forEach((modelo) => {
                const modeloItem = document.createElement('li');
                modeloItem.textContent = modelo.nome;
                modeloItem.classList.add('modelos');
                if (modelosList) {
                    modelosList.appendChild(modeloItem);
                }
            });
        }
    })
        .catch((error) => {
        console.error('Erro ao obter modelos:', error);
    });
}
