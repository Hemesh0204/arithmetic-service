const express = require('express');
const cors = require('cors') 
const app = express();
app.use(cors()); 
const port = 3000; 
app.get('/', (req, res) => {
  res.send('Arithmetic service - Hello World!');
}); 

app.get('/add/:expression', (req, res) => {
  // Extracting expression from URL parameters
  const expression = req.params.expression;

  // Evaluating the expression
  let result;
  try {
      result = eval(expression);
      res.send(${result});
  } catch (error) {
      res.status(400).send('Invalid expression');
  }
}); 
 
app.listen(port);