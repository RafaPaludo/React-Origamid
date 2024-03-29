// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const Exercice = () => {
  const dados = luana;
  const totalCompras = (compras) => {
    const comprasSanitizadas = compras.map(compra => Number(compra.preco.replace('R$ ', '')))
    return comprasSanitizadas.reduce((acc, current) => acc + current, 0)
  }

  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Situação: <span style={dados.ativa ? {color: 'green'} : {color: 'red'}}>{dados.ativa ? 'Ativa' : 'Inativa'}</span></p>
      <p>Total: {totalCompras(dados.compras)}</p>
      <p>
        {totalCompras(dados.compras) >= 10000 ? 'Você está gastanto muito' : ''}
      </p>
    </>
  );
};

export default Exercice;