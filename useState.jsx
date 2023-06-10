import { useState } from "react";

const Home = () => {
    // let name = "Guandarus";
    const [name, setName] = useState("Guahdaru");
    const [age, setAge] = useState(20);

    const handleClick = () => {
        setName('Kimathi');
        setAge(21);
} 

    return(
        <div className="Home">
            <h2>HOMEPAGE</h2>
            <p>{ name } is { age } yrs old. </p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;