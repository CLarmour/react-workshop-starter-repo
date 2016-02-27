import React from 'react';
import AppHeader from './app-header';
import TodoList from './todo-list';
import TodoInput from './todo-input';

export default React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          task: "Learn React",
          done: true
        }, {
          task: "Buy watch battery",
          done: false
        }, {
          task: "Get haircuit",
          done: false
        }, {
          task: "Wash car",
          done: true
        }
      ]
    };
  },
  
  addTodo: function(task) {
    var todo= {
      task: task,
      done: false
    };
    var todos = [
      ...this.state.todos,
      todo
    ];
    this.setState({todos: todos});
  },
  
  render: function () {
    return (
      <div>
        <AppHeader
          title="MY TODOS!"
          tagline="Get 'em todone."
        />
        <TodoList
          todos= {this.state.todos}
        />
        <TodoInput 
          onSubmit={this.addTodo}
        />
      </div>
    );
  }
});
