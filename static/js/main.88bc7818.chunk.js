(this["webpackJsonpkanban-board"]=this["webpackJsonpkanban-board"]||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),r=a(6),o=a.n(r),c=(a(13),a(1)),i=a(7),l=a(3);a(14);var u=function(t){var e=Object(s.useState)(""),a=Object(l.a)(e,2),r=a[0],o=a[1];return n.a.createElement("div",null,!t.isAddTaskFormOpen&&n.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){t.openAddTaskForm()}},"Add task"),t.isAddTaskFormOpen&&n.a.createElement("form",null,n.a.createElement("input",{className:"form-control form-control-sm",type:"text",value:r,onChange:function(t){return o(t.target.value)}}),n.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:r.trim().length<4,onClick:function(){t.addTask(r),o("")}},"Submit"),n.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){t.cancelAddTask(),o("")}},"Cancel")))};var m=function(t){return n.a.createElement("div",{className:"card shadow bg-white rounded"},n.a.createElement("div",{className:"card-body"},n.a.createElement("button",null,"Priority: ",t.task.priority),n.a.createElement("p",{className:"card-text"},t.task.name),n.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-left",onClick:function(){t.deleteTask(t.task.id)}},n.a.createElement("i",{className:"fa fa-trash-o"})),"closed"!==t.status&&n.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:function(){t.moveTaskRight(t.task.id)}},n.a.createElement("i",{className:"fa fa-arrow-right"})),"todo"!==t.status&&n.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:function(){t.moveTaskLeft(t.task.id)}},n.a.createElement("i",{className:"fa fa-arrow-left"}))))};var d=function(t){return n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"card shadow bg-white rounded"},n.a.createElement("div",{className:"card-body"},t.taskListName)),t.tasks.filter((function(e){return e.status===t.taskListStatus})).sort((function(t,e){return t.priority-e.priority})).map((function(e){return n.a.createElement(m,{task:e,deleteTask:t.deleteTask,moveTaskLeft:t.moveTaskLeft,moveTaskRight:t.moveTaskRight})})))},b=[{id:1,name:"Do Components",status:"todo",priority:3},{id:2,name:"Watch Last Lesson Video",status:"resolved",priority:2},{id:3,name:"Learn React",status:"in progress",priority:1},{id:4,name:"Write Todo App from Scratch",status:"closed",priority:2},{id:5,name:"Make Kanban Board",status:"todo",priority:1}];var k=function(){var t=Object(s.useState)(b),e=Object(l.a)(t,2),a=e[0],r=e[1],o=Object(s.useState)(!1),m=Object(l.a)(o,2),k=m[0],f=m[1],p=function(t){var e=a.filter((function(e){return e.id!==t}));r(e)},v=function(t){var e=a.map((function(e){return e.id===t?"todo"===e.status?Object(c.a)(Object(c.a)({},e),{},{status:"in progress"}):"in progress"===e.status?Object(c.a)(Object(c.a)({},e),{},{status:"resolved"}):Object(c.a)(Object(c.a)({},e),{},{status:"closed"}):e}));r(e)},E=function(t){var e=a.map((function(e){return e.id===t?"in progress"===e.status?Object(c.a)(Object(c.a)({},e),{},{status:"todo"}):"resolved"===e.status?Object(c.a)(Object(c.a)({},e),{},{status:"in progress"}):Object(c.a)(Object(c.a)({},e),{},{status:"resolved"}):e}));r(e)};return n.a.createElement("div",null,n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"Kanban"),n.a.createElement(u,{isAddTaskFormOpen:k,openAddTaskForm:function(){f(!0)},cancelAddTask:function(){f(!1)},addTask:function(t){f(!1);var e=Object(i.a)(a);e.push({id:Math.random(),name:t,status:"todo",priority:null}),r(e)}}),n.a.createElement("hr",null),n.a.createElement("div",{className:"row"},n.a.createElement(d,{taskListName:"To Do",taskListStatus:"todo",tasks:a,deleteTask:p,moveTaskRight:v}),n.a.createElement(d,{taskListName:"In Progress",taskListStatus:"in progress",tasks:a,deleteTask:p,moveTaskLeft:E,moveTaskRight:v}),n.a.createElement(d,{taskListName:"Resolved",taskListStatus:"resolved",tasks:a,deleteTask:p,moveTaskLeft:E,moveTaskRight:v}),n.a.createElement(d,{taskListName:"Closed",taskListStatus:"closed",tasks:a,deleteTask:p,moveTaskLeft:E}))))};o.a.render(n.a.createElement(k,null),document.getElementById("root"))},8:function(t,e,a){t.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.88bc7818.chunk.js.map