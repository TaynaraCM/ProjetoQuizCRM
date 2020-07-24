/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, tente fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.

Depois de fazer o que foi pedido acima, crie um repositório no GitHub para a sua aplicação e abra uma issue no repositório do curso com:

- O link da sua versão do quiz;
- Quais foram as suas maiores dúvidas ou dificuldades durante a execução desse exercício;
- Quais foram as suas menores dificuldades durante a execução desse exercício.

Link do repositório do curso: https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo/issues

Ps: se você não conseguiu fazer tudo o que foi pedido acima, abra a issue mesmo assim =)
*/

const form = document.querySelector('form');
const button = document.querySelector('button');
const result = document.createElement('p');
button.insertAdjacentElement('beforebegin', result);
const allAnswers = document.querySelectorAll('.form-check');
const allInputs = document.querySelectorAll('input');

const rightAnswers = ["B", "B", "A", "A"];

const highlightAnswers = () => {
    let i = 0;
    allInputs.forEach(input => {
        if(!input.checked){
            console.log('não colore');
             i++;
        }else if(input.className === 'T' && input.checked){
             allAnswers[i].classList.add('correct-answer');
             i++;
        }else if(input.className === 'F' && input.checked){
             allAnswers[i].classList.add('wrong-answer'); 
             i++;
         }   
     })
}


const returnGrade = (counter) => {
    switch(counter) {
        case 0:
            result.style.background = 'red';
            break;
        case 25:
            result.style.background = 'orange';
            break;
        case 50:
            result.style.background = 'yellow';
            break;
        case 75:
            result.style.background = 'lightblue';
            break;
        case 100:
            result.style.background = 'lightgreen';
            break;
        default:
            console.log('Erro ao calcular nota');                
             }
    }

    const checkRightAnswers = event => {
        event.preventDefault();
        //dar refresh nas cores
        const refreshClass = answer => {
            answer.className = 'form-check my-2 text-dark-50';
        }
        allAnswers.forEach(refreshClass);
     
        let counter = 0;    
        let playerAnswers = [
            event.target.inputQuestion1.value,
            event.target.inputQuestion2.value,
            event.target.inputQuestion3.value,
            event.target.inputQuestion4.value ];


        playerAnswers.forEach((answer, index) => {
            if(answer === rightAnswers[index]) {
                counter += 25;
            }
    
        })  
        result.style.marginTop = '20px';
        result.style.fontSize = '30px';
        result.textContent = `Sua pontuação foi ${counter}/100`;
       
        returnGrade(counter);
        highlightAnswers();
        }

form.addEventListener('submit', checkRightAnswers);





















