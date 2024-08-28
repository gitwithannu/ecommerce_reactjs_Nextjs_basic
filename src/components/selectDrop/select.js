'use client'
import { useState } from 'react';
import '../selectDrop/select.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClickAwayListener from 'react-click-away-listener';
import { FilterList } from '@mui/icons-material';

const Select = (props) => {
  console.log(props);

  const [isOpenSelect, setisOpenSelect] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(0);
  const [seletedItem , setselectedItem]  = useState('All Categories');
  const [listData , setListData] = useState(props.data);
  const [listData2 , setListData2] = useState(props.data);
  
  const openSelect =() =>{
    setisOpenSelect(!isOpenSelect);
  }
  const closeSelect=(index,item)=>{
      setselectedIndex(index);
      setisOpenSelect(false);
      setselectedItem(item)
  }
  const filterList = (e) =>{
    const keyword  =  e.target.value.toLowerCase();
    const list  = listData2.filter((item,index)=>{    
      return  item.toLowerCase().includes(keyword)
    })

    const list2  = list.filter((item,index)=>{
        return list.indexOf(item) == index
    })

    setListData(list2);
    
  }

  return (
    <div className="selecrDrop cursor position-relative ">
     {props.icon}
     <span className='openSelect' onClick={openSelect} > { seletedItem.length>14 ? seletedItem.substring(0,14)+'...': seletedItem } <KeyboardArrowDownIcon className='arrow' /> </span>
      {
        isOpenSelect === true &&          
         <div className="selectDrop">
          <div className='searchField' >
            <input type='text' placeholder='Search Here ..' onChange={filterList} />
          </div>
          <ul className='searchResult'>
          <li key={0} onClick={()=>closeSelect(0, props.placeholder)} className={`${selectedIndex=== 0 ? 'active' : ""}`}> { props.placeholder }  </li>
            {
              listData?.map((item,index)=>{
                return(
                  <li key={index+1} onClick={()=>closeSelect(index+1,item)} className={`${selectedIndex=== index+1 ? 'active' : ""}`}> { item }  </li>
                )
              })
            }
            
              {/* <li onClick={()=>closeSelect(0,"All Category")} className={`${selectedIndex=== 0 ? 'active' : ""}`}>All Category</li>
              <li onClick={()=>closeSelect(1,"Milks and Dairies")} className={`${selectedIndex=== 1 ? 'active' : ""}`}>Milks and Dairies</li>
              <li onClick={()=>closeSelect(2,"Clothing & beauty")} className={`${selectedIndex=== 2 ? 'active' : ""}`}>Clothing & beauty</li>
              <li onClick={()=>closeSelect(3,"Pet Foods & Toy")} className={`${selectedIndex=== 3 ? 'active' : ""}`}>Pet Foods & Toy</li>
              <li onClick={()=>closeSelect(4,"Baking material")} className={`${selectedIndex=== 4 ? 'active' : ""}`}>Baking material</li> 
              <li onClick={()=>closeSelect(5,"Fresh Fruit")} className={`${selectedIndex=== 5 ? 'active' : ""}`}>Fresh Fruit</li> */}
            </ul>
         </div>
      }

    </div>
  )
};

export default Select
