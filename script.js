function appendToResult(value) {
    document.getElementById('result').value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function deleteLast() {
    const current = document.getElementById('result').value;
    document.getElementById('result').value = current.slice(0, -1);
  }
  
  function calculateResult() {
    const result = document.getElementById('result').value;
    try {
      document.getElementById('result').value = eval(result);
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }