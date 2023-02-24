import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
		<Title />

		<h1>Todo App</h1>

		<form>
			<p><input type="text" naem="task" placeholder="Escribe una nueva tarea" /></p>
			<p><button type="button">+</button></p>
		</form>
		
		<ol>
			<li>Comprar patatas<button type="button"></button></li>
			<li>Aprobar Lenguaje de marcas<button type="button"></button></li>
			<li>Aprender POO<button type="button"></button></li>
		</ol>

		<p>Tienes<strong>3</strong> tareas pendientes</p>
	  </main>
    </div>
  );
}

export default App;
