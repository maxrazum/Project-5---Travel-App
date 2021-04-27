function handleSubmit(event) {
  event.preventDefault();

  // check what url was put into the form field
  let formUrl = document.getElementById('url').value;

  if (Client.validURL(formUrl)) {
    fetch('http://localhost:8081/apiData', {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formUrl }),
    })
    .then(res => res.json())
    .then(function(res) {
      let element = document.getElementById('results');
      Client.updateUI(element, res);
    }),
    console.log('::: Form Submitted :::');
  }
  else {
    alert('Please enter a valid Url');
    console.log('Invalid url');
  }
}

// function to update the UI with the results of the analysis
function updateUI(element, content) {
  if(content.irony === undefined) {
    element.innerHTML = `<i class="fas fa-exclamation-triangle">It's not possible to analyze the text`;
  }
  else {
    element.innerHTML = `<strong>Confidence: </strong>${content.confidence} %<br>
    <strong>Agreement: </strong>${content.agreement}<br>
    <strong>Irony: </strong>${content.irony}`;
  }
}

export { handleSubmit };
export { updateUI };