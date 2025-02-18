import { useEffect, useState } from "react";

const EmpityDependency = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
            console.log("EmpityDependency component executed : ", json);
            setData(json[0]);
        })
    }, []);
    // if u get empity array for dependency like this
    // efect function will execute just 1 time
    // it's useles for api calls

    return (
        <div>
            <h1>API Data:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default EmpityDependency;