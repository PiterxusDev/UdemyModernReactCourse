
import Button from '../components/Button';   
import useCounter from '../hooks/use-counter';  



function CounterPage({initialCount}) {
     const {count, increment}= useCounter(initialCount);

    return (
        <div>
            <p>You clicked {count} times</p>
            <Button success onClick={increment}>Click me</Button>
       
        </div>
    )
}

export default CounterPage;