import HelloUser from "./HelloUser";

const Hello = () => {
    const user = "John Doe";

    return (
        <>
            <h1>Hello World !</h1>
            <h1>Hello Every One !</h1>
            <HelloUser userName={user} />
        </>
    )
}

export default Hello;