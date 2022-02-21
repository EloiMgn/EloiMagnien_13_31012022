import { useState } from 'react';
import './Transaction.css'

const Transaction = ({datas}) => {
  const [selectedTransaction, setSelectedTransaction] = useState(false)
  const [updateCategory, setUpdateCategory] = useState(false)
  const [updateNotes, setUpdateNotes] = useState(false)

  const toogleTransaction = () => {
    setSelectedTransaction(!selectedTransaction)
  }
  const toogleCategory = () => {
    setUpdateCategory(!updateCategory)
  }
  const toogleNotes = () => {
    setUpdateNotes(!updateNotes)
  }
 
  return (
    <div className="transaction" onClick={toogleTransaction}>
      <i className={selectedTransaction? 'fa fa-chevron-up' : 'fa fa-chevron-down'}></i>
      <div className="transaction-content-wrapper">
        <p className="transaction-date">{datas.date}</p>
        <div className={selectedTransaction? 'transaction-type-wrapper' : 'hidden'}>
          <p>Transaction type:</p> 
          <p>{datas.type}</p>
        </div>
        <div className={selectedTransaction? 'transaction-category-wrapper' : 'hidden'}>
          <label htmlFor="category-select">Category:</label>
          <p className="transaction-category">{datas.category}</p>
          <i className="fa fa-pencil" onClick={toogleCategory}></i>
          <select name="category" id="category-select" className={updateCategory? 'show' : 'hidden'}>
            <option value="">--Sélectionnez une catégorie--</option>
            <option value="alimentation">Alimentation</option>
            <option value="services">Services</option>
            <option value="transports">Transports</option>
            <option value="loisirs">Loisirs</option>
            <option value="communications">Communications</option>
            <option value="finances">Finances</option>
          </select>
        </div>
        <div className={selectedTransaction? 'transaction-notes-wrapper' : 'hidden'}>
          <label htmlFor="category">Notes:</label>
          <p className="transaction-notes">{datas.notes}</p>
          <i className={updateNotes? 'hidden' : 'fa fa-pencil'} onClick={toogleNotes}></i>
          <input type="text" className={updateNotes? 'show' : 'hidden'} id="notes" name="notes"/>
        </div>
      </div>
      <div className="transaction-body-wrapper">
        <p className="transaction-description">{datas.description}</p>
        <p className="transaction-amount">{datas.amount}</p>
        <p className="transaction-balance">{datas.balance}</p>
      </div>
    </div>
  );
}

export default Transaction;