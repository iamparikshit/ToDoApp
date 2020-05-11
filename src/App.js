import React from 'react';
import "./App.css";
import ListItem from "./ListItems";


import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash);
class App extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            items:[],
            currentItem:{
                text:'',
                key:''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
    }

    handleInput(e)
    {
        this.setState({
            currentItem : {
                text : e.target.value,
                key:Date.now()
            }
        })
    }
    
    addItem(e)
    {
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);

        if(newItem.text!=="")
        {
            const items =[...this.state.items, newItem];
            this.setState({
                items:items,
                currentItem:{
                    text:'',
                    key:''
                }
            })
        }
    }

    deleteItem(key)
    {
       const filterItems = this.state.items.filter(items=>
         items.key!==key);
         this.setState({
             items:filterItems
         }) 
    }

    setUpdate(text, key)
    {
        const items = this.state.items;
        items.map(items=>{
            if(items.key===key)
            {
                items.text=text;
            }

        })
        this.setState(
            {
                items:items
            }
        )
    }

    render(){
        return(
            <div className="App">
                <div className="headername">
                    <h1>To do App! </h1>
                </div>
                
                <div className="main">
                    <header>
                        <form id="to-do-form" onSubmit={this.addItem}>
                            <input type="text" placeholder="Enter Task" value={this.state.currentItem.text} onChange={this.handleInput}></input>
                            <button type="submit"> Add</button>
                        </form>
                    </header>
                    <ListItem items= {this.state.items } deleteItem = {this.deleteItem} setUpdate={this.setUpdate}> </ListItem>
                </div>

                <div className="footer">
                
                        <p> Parikshit Jagtap <span>❣️</span> <br/>
                        Copyright © 2020 All rights reserved.</p>
                </div>

                
            </div>
        );
    }
}
export default App;