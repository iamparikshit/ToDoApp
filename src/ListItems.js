import React from 'react';
import "./ListItems.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';
function ListItems(props)
{
    const items = props.items;
    const listItems= items.map(items =>
        {
            return <div className="list" key={items.key}>
                <p>
                    <input type="text" id={items.key} value={items.text} onChange={(e)=>{
                        props.setUpdate(e.target.value, items.key)}} />
                <span>
                    <FontAwesomeIcon
                    className="faicons" onClick= {() => props.deleteItem(items.key)} icon="trash" > 
                    </FontAwesomeIcon>
                </span>
                </p>
               
            </div>
        })
    return(
    <div>
        <FlipMove duration={400} easing ="ease-in-out">
        {listItems}
        </FlipMove>
        </div>
    )
}

export default ListItems;