import { useState, useEffect } from "react";

const Counter = () => {
    let [angka, setAngka] = useState(0)

    function addAngka() {
        setAngka(angka + 1);
        console.log('## angka', angka);
    }

    useEffect(() => {
        console.log('## Component di-mount/di-update');

        document.title = `Angka: ${angka}`;
    }, [angka]);

    console.log(`## component di render`);

    return (
        <div id="counter">
            <p>Hasil: {angka}</p>
            <button onClick={addAngka}>Add</button>
        </div>
    )
}

export default Counter;