import React, { useState } from 'react'

export default function page() {

    const[produto, setProduto] = useState({
        id:"",
        nome:"",
        desc:"",
        preco:"",
        img:""
      });
  
      const handleChange = (e)=>{
        //Destructuring
        const {name,value} = e.target;
        //Inserir as propriedades no produto.
        setProduto({...produto,[name]:value});
      }
  


    return (
        <div className={styles.container}>
          <h1>CADASTRO DE PRODUTOS</h1>
  
          <div>
            <form className="formGroup" onSubmit={handleSubmit}>
              <fieldset>
          <span  className="btnClose" onClick={()=> props.setOpen(false)}>X</span>
                <legend>Novo Produto</legend>
                <div className="formInput">
                  <label htmlFor="idNome">Nome</label>
                  <input type="text" name="nome" id="idNome" placeholder="Digite o nome do produto." value={produto.nome} onChange={handleChange}/>
                </div>
                <div className="formInput">
                  <label htmlFor="idDesc">Descrição</label>
                  <input type="text" name="desc" id="idDesc" placeholder="Digite a descrição do produto." value={produto.desc} onChange={handleChange}/>
                </div>
                <div className="formInput">
                  <label htmlFor="idPreco">Preço</label>
                  <input type="number" name="preco" id="idPreco" placeholder="Digite o valor do produto." value={produto.preco} onChange={handleChange}/>
                </div>
                <div className="formInput">
                  <label htmlFor="idImg">Imagem</label>
                  <input type="url" name="img" id="idImg" placeholder="Digite a url da imagem." value={produto.img} onChange={handleChange}/>
                </div>
                <div className="formInput">
                  <button>CADASTRAR</button>
                </div>
              </fieldset>
            </form>
          </div>
  
        </div>
      );
    }
