export const formartCurrency = (value, currency) => {
    return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: currency,
    });
};

//Esse arquvio formata o vpreço de acordo com a moeda.. chama a função e passa os dois valores
