
import globals from './styles/globals.module.scss'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import DataConatiner from './components/DataConatiner/DataConatiner'
import cardData from './data/cardData'

export default function Home() {
  return <div className={globals.mainContiner}>
    <Header cardData={cardData}/>
    <div className={globals.dataConatiner}>
      <DataConatiner cardData={cardData}/>
    </div>

    
  </div>;
}
