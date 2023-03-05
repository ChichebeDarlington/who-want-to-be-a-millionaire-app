import './Money.css'
import { money } from '../moneyData'
import { useGlobalContext } from '../context'

const Money = () => {
  const {moneyCount} = useGlobalContext()

  return (
    <div className='money-container'>
      <ul className='money-list'>
        {money.map((moneyList)=>{
          const {id, amount} = moneyList
          return <li className={moneyCount===id?"money-list-item active":"money-list-item"} key={id}>
            <span className='money-list-id'>{id}</span>
            <span className='money-list-amount'>{amount}</span>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Money