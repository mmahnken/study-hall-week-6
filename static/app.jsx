'use strict';

var TodoItem = React.createClass({
    render: function(){
        return (<li>{ this.props.itemText }</li>);
    },
});

var TodoApp = React.createClass({
    getInitialState: function(){
        var initialItems = {
                'items': [
                    'smash the patriarchy', 
                    'go to grocery store',
                    'do laundry'
                ]
        };
        return initialItems;
    },
    handleClick: function(e){
        var newItem = this.refs.newItem.value;
        
        // Don't do this! Treat state like it's immutable.
        // this.state.items.push(newItem);

        // Make a new items array, 
        // using the old one, adding the new one.
        var oldItems = this.state.items;
        oldItems.push(newItem);
        this.setState({'items': oldItems});
    },
    render: function(){
        var itemComponents = [];
        for (var i=0; i < this.state.items.length; i++){
            var thisItem = this.state.items[i];
           itemComponents.push(<TodoItem key={thisItem} itemText={thisItem} />);
        }
        return (
            <div>
                <h1>My Groovy Todo List</h1>
                <ul>
                { itemComponents }
                </ul>
                <label>Add item</label>
                <input type="text" ref="newItem" />
                <button onClick={this.handleClick}>Add!</button>

            </div>
        );
    },
});

var myNum = 10;

ReactDOM.render(
    <TodoApp />, 
    document.getElementById('root')
);