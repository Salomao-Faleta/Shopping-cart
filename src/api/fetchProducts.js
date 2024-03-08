//Função para fazer a requisaão
export const fetchProducts = async (query)=>{

    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);

    const data = await response.json();

    return data.results;
    // O results é um array, e o data só retorna os produtos e suas informações.


};
