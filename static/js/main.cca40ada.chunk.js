(this["webpackJsonptodo-list-app"]=this["webpackJsonptodo-list-app"]||[]).push([[0],{25:function(t,e,o){},27:function(t,e,o){},28:function(t,e,o){},29:function(t,e,o){},30:function(t,e,o){},31:function(t,e,o){"use strict";o.r(e);var n=o(1),s=o.n(n),a=o(9),r=o.n(a),c=o(8),i=o(12),d=o(3),l=o(4),u=o(6),h=o(5),j=o(10),b=o.n(j),f=(o(25),o(0));var m=function(t){var e=t.todos,o=t.doneTodos;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("p",{children:["Total items:",e.length]}),Object(f.jsxs)("p",{children:["Done:",o]})]})},p=o(11),g=o.n(p);o(27);var O=function(t){var e=t.todos,o=t.onToggleCompleted,n=t.onDeleteToDo;return Object(f.jsx)("ul",{className:"TodoList",children:e.map((function(t){var e=t.id,s=t.text,a=t.completed;return Object(f.jsxs)("li",{className:g()("TodoList__item",{"TodoList__item--completed":a}),children:[Object(f.jsx)("input",{type:"checkbox",checked:a,onChange:function(){return o(e)}}),Object(f.jsx)("p",{className:"TodoList__text",children:s}),Object(f.jsx)("button",{className:"TodoList__btn",type:"button",onClick:function(){return n(e)},children:"Remove"})]},e)}))})},v=(o(28),function(t){Object(u.a)(o,t);var e=Object(h.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={message:""},t.handleChange=function(e){e.preventDefault(),t.setState({message:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.message),t.setState({message:""})},t}return Object(l.a)(o,[{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("form",{className:"TodoEditor",onSubmit:this.handleSubmit,children:[Object(f.jsx)("textarea",{className:"TodoEditor__textarea",placeholder:"Type in text",value:this.state.message,onChange:this.handleChange}),Object(f.jsx)("button",{className:"TodoEditor__button",type:"submit",children:"Save"})]})})}}]),o}(n.Component));o(29);function x(t){var e=t.filter,o=t.onChange;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("label",{children:["Filter"," ",Object(f.jsx)("input",{type:"text",placeholder:"Search",value:e,onChange:o})]})})}var T=function(t){Object(u.a)(o,t);var e=Object(h.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={todos:[],filter:""},t.addToDo=function(e){var o={id:b.a.generate(),text:e,completed:!1};t.setState((function(t){var e=t.todos;return{todos:[o].concat(Object(i.a)(e))}}))},t.deleteTodo=function(e){t.setState((function(t){return{todos:t.todos.filter((function(t){return t.id!==e}))}}))},t.toggleCompleted=function(e){t.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e?Object(c.a)(Object(c.a)({},t),{},{completed:!t.completed}):t}))}}))},t.changeFilter=function(e){t.setState({filter:e.target.value})},t.getVisibleTodos=function(){var e=t.state,o=e.todos,n=e.filter.toLowerCase();return o.filter((function(t){return t.text.toLowerCase().includes(n)}))},t.getCompletedTodos=function(){return t.state.todos.reduce((function(t,e){return e.completed?t+1:t}),0)},t}return Object(l.a)(o,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("todos"),e=JSON.parse(t);e&&this.setState({todos:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.todos!==e.todos&&localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"render",value:function(){var t=this.state,e=t.todos,o=t.filter,n=this.getCompletedTodos(),s=this.getVisibleTodos();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(m,{todos:e,doneTodos:n}),Object(f.jsx)(v,{onSubmit:this.addToDo}),Object(f.jsx)(x,{filter:o,onChange:this.changeFilter}),Object(f.jsx)(O,{todos:s,onDeleteToDo:this.deleteTodo,onToggleCompleted:this.toggleCompleted})]})}}]),o}(n.Component),S=T;o(30);r.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.cca40ada.chunk.js.map