import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon';
import deckJSX from '../data'
import Card from './Card'

import logo from '../../assets/img/image 2.svg';

export default function Flashcards () {
    const [answered, setAnswered] = useState(0)
    const [results, setResults] = useState([])

    let perguntasData = deckJSX.map(value => {
        return {
            ...value,
            click: false,
            status: ''
        }
    })
    
const [perguntas, setPerguntas] = useState(perguntasData);

function turnCard (cardIndex) {
        let newDeck = perguntas.map((value, index) => {
                
    if (index === cardIndex) {
        return { ...value, click: true, } 
            } 
            else { 
                return {  ...value, click: false }  }
          
            }) 

    setPerguntas([...newDeck]);

}

    function buttons (cardIndex, status) {
        let answeredDeck = perguntas.map( (value, index) => {
            if (index === cardIndex) {
                return { ...value, click: false, status: status}
            } else { 
                return {...value, click: false,}}
        })

        setPerguntas([...answeredDeck]);
        setAnswered( answered + 1)
        setResults( [...results, status])
       
    }
    

    function result () {
        
           const check = results.find( (value) => value === 'wrong' )
        
       return (
        <>
            {check ?
                <><h1> 😓 Putz...</h1> 
                <h2> Ainda falta alguns... Mas não desanime!</h2></>
                
                : <><h1>🥳 Parabéns!</h1>
                <h2>Você não esqueceu de nenhum flashcard!</h2></>}
        </>
       )
    }

return (
    <>
        <div className="header">
                <img className="logo" src={logo} alt=""></img>
              <h1>ZapRecall</h1>
            </div>

            <div className="deck">
                {perguntas.map( (value, index) => 

            <Card 
            status={value.status} 
            index={index} 
            turnCard={turnCard}
            perguntas={value.pergunta}
            respostas={value.resposta}
            click={value.click} 
            key={index}
            buttons={buttons}
            />
            
            )}
            </div>

            <div className="footer">
                {results.length === perguntas.length ? result() : null}

                <h3>{`${results.length}/${perguntas.length} CONCLUÍDOS`}</h3>

                <div className='icon'>
                {results.map((value) => (<Icon status={value} />) )} 
                </div>
                  
                <Link to="/">
                <button>
                    <p>REINICIAR RECALL</p>
                </button></Link>
            </div>
    </>

                    
    
    )

    
}
