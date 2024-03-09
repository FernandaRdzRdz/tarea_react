import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>¡¡Bienvenido!!</h1>
      <h1>Empieza a calcular!</h1>
      </header>
      <div class="container">
      <main className="App-main">
        <Calculator />
      </main>
      </div>
    </div>
  );
}

export default App;
