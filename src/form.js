const request = new XMLHttpRequest();
const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/x0cx9BASKmFtpOWDZ6De/scores';

function send(e, nameInput, scoreInput) {
  e.preventDefault();
  const params = `user=${nameInput.value}&score=${scoreInput.value}`;
  request.open('POST', requestURL, true);
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
    alert(request.responseText);
    }
  };
  request.send(params);
}

function numberValidation(scoreInput) {
  var n = parseInt(scoreInput.value, 10);
  if (isNaN(n)) {
    alert("insert a numeric value for score");
    return false;
    } else {
    return true;
    }
}

function textLimit(input) {
  if (input.value.length > 30) {
    alert("the name is too long");
    return false;
  }
  return true;
}

export default function submitOrNota(event, scoreInput, nameInput) {
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