import { useState } from "react";

const Counter = () => {
	const [result, setResult] = useState(0);

	function handleclick() {
		setResult(result + 1);
	}

	return (
		<>
			<p>Result : {result}</p>
			<button onClick={handleclick}>click !</button>
		</>
	);
};

export default Counter;
