import react , { useState } from "react"
import "./App.css"
import ToDOList from "./ToDoList"

const App = () =>{
    const [itemName , setItemName] = useState("")
    const [listOfItems , setItemList] = useState([])

    const itemGetter = (event) =>{
        setItemName(event.target.value)
    }

    const listAdder = () =>{
        if(itemName != ""){
            setItemList((items) => {
                return [...items , itemName]
            })
            setItemName("")
        }
    }

    const deleteItems = (id) =>{
        setItemList((theList) => {
            return theList.filter((element , index) =>{
                return index !== id
            })
        })
    }


    return(
        <div className = "container">
            <div className = "to_do_box">
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input type = "text" placeholder = "Add task" onChange = {itemGetter} value = {itemName}></input>
                <button className = "Adder" onClick = {listAdder}> ✔ </button>
                <br/>
                <br/>
            <ol>
                {
                    listOfItems.map((value , id) =>
                    {
                        return <ToDOList 
                        item = {value}
                        index = {id}
                        delete = {deleteItems}
                        ></ToDOList>
                    }
                    )
                }
                {/* {console.log(itemName)}
                {console.log(listOfItems)} */}
            </ol>
            </div>
        </div>

    )
}

export default App