import "./ToDoList.css"

const ToDOList = (props) => {
    return(
        <>
        <li>{props.item}<button className = "delete_button"
        onClick = {() =>
            props.delete(props.index)
        }>X</button></li>
    </>
    )
}

export default ToDOList