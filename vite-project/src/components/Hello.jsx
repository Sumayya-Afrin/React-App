// eslint-disable-next-line react/prop-types
function Hello()
{

    function displayMessage()
    {
       console.log('Event listener from react..')
    }

    
    return (
        
        
<button onClick={displayMessage}>Click me !</button>
    )
}

export default Hello