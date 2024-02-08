import React, {useEffect, useState} from 'react';
import './estilo.css';

function App(){

  const [nutri, setNutri] = useState([]);



  useEffect( () =>{

    function carregaDados(){

      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';



      fetch(url)

      .then((r) => r.json())

      .then((json) => {

        setNutri(json);

      })

    }



    carregaDados();



  },[]);



  return(

    <div className='container'>

      <header>

        <strong className='titulo'>React Nutri</strong>

      </header>



      {nutri.map((item) => {

        return(

          <article className='post' key={item.id}>

          <strong className='titulo'>{item.titulo}</strong>

          <img src={item.capa}/>

          <p className='subtitulo'>{item.subtitulo}</p>

          <a href='' className='botao'>Acessar</a>

          </article>

        );

      })}

   

    </div>

  );

}

export default App;