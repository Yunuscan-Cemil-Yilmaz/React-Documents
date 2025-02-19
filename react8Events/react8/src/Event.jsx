const Event = () => {
    function firstEvent(){
        console.log('first event run!');
    }

    const firstArrowEvent = () => {
        console.log('firs arrow event run!');
    }

    const eventObject = () => {
        console.log(`Event Target: ${event.target}`);
        console.log(`Event Type: ${event.type}`);
        console.log("event object: ", event);
        // This may achieve the desired results, but it is not recommended or best practice.
    }

    // trurhly use: 
    const eventObjectTrueUse = (event) => {
        console.log(`Event Target: ${event.target}`);
        console.log(`Event Type: ${event.type}`);
        console.log("event object: ", event);
    }

    return (
        <>
            <button onClick={firstEvent}>first event</button>
            <button onClick={firstArrowEvent}> first arrow </button>
            <div>
                <button onClick={eventObject}>event object</button>
                <button onClick={eventObjectTrueUse}>event object true use!</button>
            </div>
        </>
    );
}

export default Event;