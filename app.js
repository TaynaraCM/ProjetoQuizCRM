
const form = document.querySelector('form');
const button = document.querySelector('button');
const result = document.createElement('p');
button.insertAdjacentElement('beforebegin', result);

const allAnswers = document.querySelectorAll('.form-check');
const allInputs = document.querySelectorAll('input');

const rightAnswers = ["D", "C", "A", "B"];

const highlightAnswers = () => {
    let i = 0;
    const wichAnswerHighlight = input => {
        if(!input.checked){
             i++;
        }else if(input.className === 'T' && input.checked){
             allAnswers[i].classList.add('correct-answer');
             i++;
        }else if(input.className === 'F' && input.checked){
             allAnswers[i].classList.add('wrong-answer'); 
             i++;
         }   
     }
    allInputs.forEach(wichAnswerHighlight);
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

        const CheckAndaddScore = (answer, index) => {
            if(answer === rightAnswers[index]) {
                counter += 25;
            }
        }

        playerAnswers.forEach(CheckAndaddScore)  
        result.style.marginTop = '20px';
        result.style.fontSize = '30px';
        result.textContent = `Sua pontuação foi ${counter}/100`;
       
        returnGrade(counter);
        highlightAnswers();
        }

form.addEventListener('submit', checkRightAnswers);





















