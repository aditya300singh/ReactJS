//increment the counter when the button is clicked
function Button() {
  const [counter, setCounter] = useState(0);
	return <button onClick={()=>setCounter(counter+1)}>{counter}</button>;
}

ReactDOM.render(
  <Button />,
  document.getElementById('mountNode'),
);
