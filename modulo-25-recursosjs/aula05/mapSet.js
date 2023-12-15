//Aqui iremos Responder a exercicios dos metodos MAP e SET


//****************************************************//

//Adicione diferentes cores a um Set, garantindo que não haja cores duplicadas.//

// Criando um Set para armazenar cores (garantindo unicidade)
const coresSet = new Set();

// Adicionando cores ao Set
coresSet.add('Azul');
coresSet.add('Preto');
coresSet.add('Azul'); // Este valor não será adicionado, pois Sets não aceitam duplicatas

// Verificando o tamanho do Set (deve ser 2, devido à unicidade)
console.log(`Número total de cores: ${coresSet.size}`);



//*******************************************************//
//Associe nomes de produtos a seus códigos de barras usando um Map.//

// Criando um Map para armazenar informações de produtos aos codigos de barras (ID como codigo e produto como valor)
const produtosMap = new Map();

// Associando produtos aos seus códigos de barras
produtosMap.set(25433, 'Bone');
produtosMap.set(37345, 'Cadeira');
produtosMap.set(1847, 'Tv');
produtosMap.set(1847, 'Tv');

// Recuperando o nome do produto com o codigo 1847
const codigoProduto = produtosMap.get(1847);
console.log(`Produto com o codigo de barra: ${codigoProduto}`);

