import React from 'react';
import setinha from "../../assets/img/setinha.svg"
import Icon from '../Icon'


function CardFechado ( {status, index, turnCard}) {

        return (
           
        <div className={`card ${status} ${status !== '' ? 'tachado' : ''}`} onClick={() => turnCard(index)}>
        {`Pergunta ${index + 1}`}
        <Icon status={status}/>
        </div> 
       
        )
        
    

}

function QACard ( { perguntas, respostas, status, index, buttons }) {

    const [view, setView] = React.useState(false);

return (
    <>
    { !view ? (

            <div className="card virado">
            <h2>{perguntas}</h2>
            <img onClick={() => setView(true)} src={setinha} alt="setinha" />
            </div>
        ) : (

             <div className="card virado resposta">
             <h2>{respostas}</h2>

             <div className="botoes">
                    <button onClick={() => buttons(index, 'wrong' )} className="red">Não lembrei</button>
                    <button onClick={() => buttons(index, 'almost')} className="orange">Quase não lembrei</button>
                    <button onClick={() => buttons(index, 'right')} className="green">Zap!</button>
            </div>

             </div>

        )  }
    </>

)
}

export default function Card ( {status, index, turnCard, perguntas, respostas, click, buttons} ) {

    return (
        <>
        { !click ? <CardFechado
                status={status}
                index={index}
                turnCard={turnCard} /> :
                <QACard
                perguntas={perguntas}
                respostas={respostas}
                index={index}
                buttons={buttons}
                />}
        </>
    )
}
