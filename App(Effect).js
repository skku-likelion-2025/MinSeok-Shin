import { useState, useEffect } from "react";

function App() {
  const [keyword, setKeyword] = useState("");
	const onChange = (event) => setKeyword(event.target.value);
	
	useEffect(() => {
		if (keyword !== "" && keyword.length > 5) {
			console.log("SEARCH FOR", keyword);
		}
	}, [keyword]);

	useEffect(() => {
		console.log("I run when 'counter' changes.");
	}, [counter]);
  
	useEffect(() => {
		console.log("I run when keyword & counter change.");
	}, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;