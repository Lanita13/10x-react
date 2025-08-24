import React, { useState } from 'react';
import styles from "./CounterWidget.module.css"

function CounterWidget() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : 0);
    const reset = () => setCount(count * 0);
    return (
        <div className={styles.dynamic}>
            <h3>დინამიური მრიცხველი</h3>
            <p>{count}</p>
           <div className={styles.btn}> 
             <button className={styles.btn-1} onClick = {decrement}>შემცირება</button>
             <button className={styles.btn-1} onClick = {reset}>გადატვირთვა</button>
             <button className={styles.btn-1} onClick = {increment}>გაზრდა</button>
           </div>
        </div>
    );
}

export default CounterWidget;


