import {useEffect, useState} from "react";

const Home = () => {
    const [count, setCount] = useState(0);


    useEffect(() => {
        console.log('Component Mounted')
        return () => {
            console.log('Component unmounted')
        }
    }, []);

    return (
        <>
        <h1> Counter Value is : {count}</h1>
            <button onClick={() => setCount(count+1)}> Increase Count</button>
        </>
    )
}
export default Home