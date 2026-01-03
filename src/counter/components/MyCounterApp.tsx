import { useCounter } from '../hooks/useConter'

export const MyCounterApp = () => {

    const { counter, handleReset , handleSubtract, handleAdd } = useCounter();

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1>Counter: {counter}</h1>
        <div style={{display: 'flex', gap: '10px'}}>
            <button onClick={handleReset}>reset</button>
            <button onClick={handleSubtract}>-1</button>
            <button onClick={handleAdd}>+1</button>
        </div>
    </div>
  )
}
