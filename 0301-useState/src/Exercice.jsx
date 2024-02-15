// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado


import React from 'react';

const Exercice = () => {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  
  const handleClick = ({ target }) => {
    const productName = target.innerText.toLowerCase()
    setProduct(null)
    setLoading(l => !l)
    setTimeout(() => {
      fetchProduct(productName)
    }, 2000)
  }
  
  const fetchProduct = async (productName) => {
    const resp = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${productName}`)
    const json = await resp.json()
    setLoading(l => !l)
    return setProduct(json)
  }

  return (
    <section style={{ border: '2px solid #fcd', padding: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <button onClick={handleClick}>Tablet</button>
      <button onClick={handleClick}>Smartphone</button>
      <button onClick={handleClick}>Notebook</button>

      {
        loading 
        &&
        <div style={{ flexBasis: '100%' }}>
          Carregando...
        </div>
      }

      {
        product 
        &&
        <div style={{ flexBasis: '100%' }}>
          <p>Descrição: {product.descricao}</p>
          <p>Nome: {product.nome}</p>
          <p>Preço: R$ {product.preco}</p>
          <p>{ product.vendido === "true" ? 'Vendido': 'Disponível'}</p>
          { product.fotos.map(foto => <img src={foto.src} alt={foto.titulo} key={foto.titulo}/> )}
        </div>
      }
      
    </section>
  )
}

export default Exercice;