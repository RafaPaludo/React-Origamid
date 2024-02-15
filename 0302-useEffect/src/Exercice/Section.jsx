// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo


import React from 'react';

const Section = () => {
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    if (window.localStorage.length) {
      const productName = window.localStorage.getItem('product');
      fetchProduct(productName);
    }
  }, [])

  const handleClick = ({ target }) => {
    const productName = target.innerText;
    fetchProduct(productName);
  }

  const fetchProduct = async (productName) => {
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${productName}`);
    const json = await response.json()
    setProduct(json);
    window.localStorage.setItem('product', productName);
  }

  return (
    <>
      <h1>
        Preferência: {product && product.nome}
      </h1>

      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>

      {
        product &&
        <div>
          <h1>{ product.nome }</h1>
          <p>R$ { product.preco }</p>
        </div>
      }    
    </>
  )
}

export default Section;