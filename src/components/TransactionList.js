import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'
export const TransactionList = () => {

  const {transactions}=useContext(GlobalContext)

  return (
    <>
        <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map(indTrans=>(
            <Transaction key={indTrans.id} transProp={indTrans}/>
        ))}

      </ul>
    </>
  )
}

