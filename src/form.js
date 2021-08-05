const request = new XMLHttpRequest();
const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/x0cx9BASKmFtpOWDZ6De/scores';

const send = (e, nameInput, scoreInput) => {
  e.preventDefault();
  const params = `user=${nameInput.value}&score=${scoreInput.value}`;
  request.open('POST', requestURL, true);
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      alert(request.responseText);
    }
  };
  request.send(params);
};

const numberValidation = (scoreInput) => {
  const n = parseInt(scoreInput.value, 10);
  if (Number.isNaN(n)) {
    alert('insert a numeric value for score');
    return false;
  }
  return true;
};

const textLimit = (input) => {
  if (input.value.length > 30) {
    alert('the name is too long');
    return false;
  }
  return true;
};

const submitOrNota = (event, scoreInput, nameInput) => {
  let preventOrNot = false;
  event.preventDefault();
  if (numberValidation(scoreInput) === false) {
    preventOrNot = true;
  }
  if (textLimit(nameInput) === false) {
    preventOrNot = true;
  }
  if (!preventOrNot) {
    send(event, nameInput, scoreInput);
  }
}

export default submitOrNota;