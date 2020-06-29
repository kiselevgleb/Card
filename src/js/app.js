const divParent = document.createElement('div');
const classParent = 'hole-task';
divParent.classList.add(classParent);
divParent.setAttribute('data-id', 'div');

document.body.appendChild(divParent);

const pTitle = document.createElement('p');
pTitle.innerText = 'Check your credit card number';
divParent.appendChild(pTitle);

const cardList = document.createElement('ul');
cardList.classList.add('cards');
divParent.appendChild(cardList);

const cardVisa = document.createElement('li');
cardList.appendChild(cardVisa);
const spanVisa = document.createElement('span');
spanVisa.classList.add('visa');
spanVisa.classList.add('card');
cardVisa.appendChild(spanVisa);

const cardMaster = document.createElement('li');
cardList.appendChild(cardMaster);
const spanMaster = document.createElement('span');
spanMaster.classList.add('master');
spanMaster.classList.add('card');
spanMaster.setAttribute('data-id', 'master');
cardMaster.appendChild(spanMaster);

const cardAmer = document.createElement('li');
cardList.appendChild(cardAmer);
const spanAmer = document.createElement('span');
spanAmer.classList.add('amer');
spanAmer.classList.add('card');
spanAmer.setAttribute('data-id', 'amer');
cardAmer.appendChild(spanAmer);

const cardDis = document.createElement('li');
cardList.appendChild(cardDis);
const spanDis = document.createElement('span');
spanDis.classList.add('dis');
spanDis.classList.add('card');
cardDis.appendChild(spanDis);

const cardJcb = document.createElement('li');
cardList.appendChild(cardJcb);
const spanJcb = document.createElement('span');
spanJcb.classList.add('jcb');
spanJcb.classList.add('card');
cardJcb.appendChild(spanJcb);

const cardDin = document.createElement('li');
cardList.appendChild(cardDin);
const spanDin = document.createElement('span');
spanDin.classList.add('din');
spanDin.classList.add('card');
cardDin.appendChild(spanDin);

const cardMir = document.createElement('li');
cardList.appendChild(cardMir);
const spanMir = document.createElement('span');
spanMir.classList.add('mir');
spanMir.classList.add('card');
cardMir.appendChild(spanMir);

const pInput = document.createElement('input');
pInput.classList.add('hole-input');
pInput.setAttribute('data-id', 'inputId');
divParent.appendChild(pInput);

const butInput = document.createElement('a');
butInput.classList.add('btn-success');
butInput.innerText = 'check';
butInput.setAttribute('data-id', 'butInputId');
divParent.appendChild(butInput);


function luhnAlgorithm(digits) {
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    let cardNum = Number(digits[i]);

    if ((digits.length - i) % 2 === 0) {
      cardNum *= 2;

      if (cardNum > 9) {
        cardNum -= 9;
      }
    }
    sum += cardNum;
  }
  return sum % 10 === 0;
}

const pPinned = document.createElement('p');
pPinned.setAttribute('data-id', 'pinned');
divParent.appendChild(pPinned);

export default function findPaySys(num) {
  let testData = 'null';
  const corrent = luhnAlgorithm(num);
  document.body.querySelectorAll('span').forEach((element) => {
    element.classList.remove('cdisabled');
  });
  pPinned.innerText = '';
  if (corrent) {
    const firstChar = num.substring(0, 1);
    const firstAndSec = num.substring(0, 2);

    switch (firstChar) {
      case '2':
        document.body.querySelectorAll('span').forEach((element) => {
          if (element.classList.contains('mir')) {
            testData = 'mir';
          } else {
            element.classList.add('cdisabled');
          }
        });
        break;
      case '3':
        if (firstAndSec === '30' || firstAndSec === '36' || firstAndSec === '38') {
          document.body.querySelectorAll('span').forEach((element) => {
            if (element.classList.contains('din')) {
              testData = 'din';
            } else {
              element.classList.add('cdisabled');
            }
          });
        } else if (firstAndSec === '31' || firstAndSec === '35') {
          document.body.querySelectorAll('span').forEach((element) => {
            if (element.classList.contains('jcb')) {
              testData = 'jcb';
            } else {
              element.classList.add('cdisabled');
            }
          });
        } else if (firstAndSec === '34' || firstAndSec === '37') {
          document.body.querySelectorAll('span').forEach((element) => {
            if (element.classList.contains('amer')) {
              testData = 'amer';
            } else {
              element.classList.add('cdisabled');
            }
          });
        } else {
          pPinned.innerText = 'Error1';
        }
        break;
      case '4':
        document.body.querySelectorAll('span').forEach((element) => {
          if (element.classList.contains('visa')) {
            testData = 'visa';
          } else {
            element.classList.add('cdisabled');
          }
        });
        break;
      case '5':
        if (firstAndSec === '51' || firstAndSec === '52' || firstAndSec === '53' || firstAndSec === '54' || firstAndSec === '55') {
          document.body.querySelectorAll('span').forEach((element) => {
            if (element.classList.contains('master')) {
              testData = 'master';
            } else {
              element.classList.add('cdisabled');
            }
          });
        } else {
          pPinned.innerText = 'Error2';
        }
        break;
      case '6':
        if (firstAndSec === '60') {
          document.body.querySelectorAll('span').forEach((element) => {
            if (element.classList.contains('dis')) {
              testData = 'dis';
            } else {
              element.classList.add('cdisabled');
            }
          });
        } else {
          pPinned.innerText = 'Error3';
        }
        break;
      default:
        pPinned.innerText = 'Error33';
        break;
    }
  } else {
    pPinned.innerText = 'Error4';
  }
  return testData;
}

butInput.addEventListener('click', () => {
  const numb = pInput.value;
  findPaySys(numb);
});
