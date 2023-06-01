interface IDataModelos {
    codigo: number;
    nome: string;
  }
  
  function handleGetModelos() {
    const linkApiGetModelos: string = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos';
  
    fetch(linkApiGetModelos)
      .then((response: Response) => response.json())
      .then((data: { modelos: IDataModelos[] }) => {
        const modelosList: HTMLElement | null = document.getElementById('modelos');
        if (modelosList) {
          modelosList.innerHTML = '';
  
          data.modelos.forEach((modelo: IDataModelos) => {
            const modeloItem: HTMLLIElement = document.createElement('li');
            modeloItem.textContent = modelo.nome;
            modeloItem.classList.add('modelos'); 
            if (modelosList) {
              modelosList.appendChild(modeloItem);
            }
          });
        }
      })
      .catch((error: any) => {
        console.error('Erro ao obter modelos:', error);
      });
  }
  
  