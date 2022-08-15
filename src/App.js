import axios from "axios";
import { Component } from "react";
import { useEffect, useState } from "react";
import Card from "./components/Card/";
import Drawer from "./components/Drawer/";
import Header from "./components/Header/Header";



function App() {

  
  const [cartOpened, setCartOpened] = useState(false)

 
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    axios.get('https://62f865c1e05644803527e267.mockapi.io/items')
      .then((res) => {
        setItems(res.data)
      })
  },[])

  const onAddToCard = (item,isAdded) => {
    console.log(isAdded)
    setCartItems(prev => [...prev, item])
    
  }

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value)
  }
  
  
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)}/>}
      <Header onClickCart={() => {setCartOpened(true)}}/>
      <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">{searchValue ? `Поиск по "${searchValue}"` : "Все кроссовки"}</h1>
          <div className="search-block d-flex align-center">
            <img  src="img/search.svg" alt="search"/>
            <input placeholder="Поиск..." value={searchValue} onChange={onChangeSearch}/>
            {searchValue && <img width={32} height={32} src="img/btn-remove.svg" className="cu-p" alt="remove" onClick={() => setSearchValue('')}/>}
          </div>

        </div>
        
        <div className="d-flex flex-wrap">

          {items ? items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => {
            return <Card 
              title={item.title} 
              price={item.price} 
              imgUrl={item.imgUrl}
              onFavorite={() => console.log('favorite')}
              onPlus={(isAdded) => onAddToCard(item, isAdded)}
              />
          }) : null}

        </div> 
        
      </div>
    </div>
  );
}

export default App;
