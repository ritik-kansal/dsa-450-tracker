(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},240:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a.n(s),i=a(93),r=a.n(i),n=(a(103),a(3)),l=a(4),o=a(6),d=a(5),u=(a(104),a(105),a(9)),p=a(13),b=a(0);function j(e){return Object(b.jsx)("div",{children:Object(b.jsx)("nav",{className:"navbar r-nav navbar-expand-lg navbar-dark bg-secondary-black pt-16 pb-16",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(p.b,{className:"navbar-brand",to:"/",children:"Navbar"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[e.loggedIn?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("ul",{className:"navbar-nav mx-auto fw-600 f-12",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(p.b,{className:"nav-link"+(e.ques?" active":""),"aria-current":"page",to:"/",children:"Ques"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(p.b,{className:"nav-link"+(e.performance?" active":""),"aria-current":"page",to:"/profile",children:"Performance"})})]}),Object(b.jsx)("ul",{className:"navbar-nav fw-600 f-12",children:Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(p.b,{className:"nav-link pr-0","aria-current":"page",to:"/signin",children:"Logout"})})})]}):e.signUp?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("ul",{className:"navbar-nav ms-auto",children:Object(b.jsx)("li",{className:"nav-item bg-orange pr-36 pl-36 br-5",children:Object(b.jsx)(p.b,{className:"nav-link white","aria-current":"page",to:"/signup",children:"Sign Up"})})})}):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("ul",{className:"navbar-nav ms-auto",children:Object(b.jsx)("li",{className:"nav-item bg-orange pr-36 pl-36 br-5",children:Object(b.jsx)(p.b,{className:"nav-link white","aria-current":"page",to:"/signin",children:"Sign In"})})})})," "]})]})})})}var h=a(41);function m(e){var t=Object(s.useState)(!1),a=Object(h.a)(t,2),c=a[0],i=a[1];return Object(b.jsxs)(b.Fragment,{children:[" ",Object(b.jsxs)("span",{onClick:function(t){return function(t){i(!c),e.filterData(t,!c)}(t)},level_id:e.level_id,topic_id:e.topic_id,status_id:e.status_id,className:"filter"+(c?" selected":""),children:[" ",e.filter]})]})}var g=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={difficulty_levels:[{id:0,name:"Easy"},{id:1,name:"Medium"},{id:2,name:"Hard"}],status:[{id:2,name:"Done"},{id:1,name:"Revise"},{id:0,name:"To-Do"},{id:"null",name:"Unattempted"}]},s}return Object(l.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.filter_update}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"bg-secondary-black gray p-16 br-5 mb-32",children:[Object(b.jsx)("div",{className:"filter-heading mb-8 f-16 fw-500 secondary-gray",children:"Topics"}),Object(b.jsxs)("div",{className:"filters f-12",children:[this.props.topics.map((function(t,a){return Object(b.jsx)(m,{topic_id:t.id,filter:t.name,filterData:e.props.filterData},t.id)}))," "]}),Object(b.jsx)("div",{className:"filter-heading mt-4 mb-8 f-16 fw-500 secondary-gray",children:"Difficulty"}),Object(b.jsxs)("div",{className:"filters f-12",children:[this.state.difficulty_levels.map((function(t,a){return Object(b.jsx)(m,{level_id:t.id,filter:t.name,filterData:e.props.filterData},t.id)}))," "]}),Object(b.jsx)("div",{className:"filter-heading mt-4 mb-8 f-16 fw-500 secondary-gray",children:"Status"}),Object(b.jsxs)("div",{className:"filters f-12",children:[this.state.status.map((function(t,a){return Object(b.jsx)(m,{status_id:t.id,filter:t.name,filterData:e.props.filterData},t.id)}))," "]})]})}}]),a}(s.Component);function v(e){var t=e.question_data,a=2===t.level?"Hard":1===t.level?"Medium":"Easy";return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"question-box",children:[Object(b.jsxs)("div",{className:"question",children:[Object(b.jsxs)("span",{className:"gray",children:[t.id,"."]})," ",Object(b.jsx)("a",{className:"question-link",href:t.link,target:"blank",children:t.name})]}),Object(b.jsxs)("div",{className:"mb-16",children:[Object(b.jsx)("span",{className:"filter f-12",style:{cursor:"default"},children:a}),Object(b.jsx)("span",{className:"filter f-12",style:{cursor:"default"},children:t.topic_name})]}),Object(b.jsx)("div",{className:"footer pt-8",children:Object(b.jsxs)("div",{className:"status white",children:[Object(b.jsxs)("label",{className:"r-radio-label",children:["Done",Object(b.jsx)("input",{type:"radio",name:t.id,id:"",status:2,defaultChecked:2===t.mark,onClick:function(t){return e.status_update(t)}}),Object(b.jsx)("span",{className:"r-radio"})]}),Object(b.jsxs)("label",{className:"r-radio-label",children:["Need to Revise",Object(b.jsx)("input",{type:"radio",name:t.id,id:"",status:1,defaultChecked:1===t.mark,onClick:function(t){return e.status_update(t)}}),Object(b.jsx)("span",{className:"r-radio"})]}),Object(b.jsxs)("label",{className:"r-radio-label",children:["To-Do",Object(b.jsx)("input",{type:"radio",name:t.id,id:"",status:0,defaultChecked:0===t.mark,onClick:function(t){return e.status_update(t)}}),Object(b.jsx)("span",{className:"r-radio"})]}),Object(b.jsxs)("div",{className:"friends-stats gray float-end",children:[t.friends," of your friends have already solved the ques"]})]})})]})})}var f=c.a.memo(v,(function(e,t){return!t.questions_update})),O=a(27),x=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.question_chart_update}},{key:"render",value:function(){return Object(b.jsxs)("div",{onLoad:window.loadQuestionSolved,className:"bg-secondary-black gray p-16 br-5",children:[Object(b.jsx)("div",{className:"filter-heading f-16 fw-500 secondary-gray mb-16",children:"Questions"}),Object(b.jsxs)("div",{className:"row align-items-center",children:[Object(b.jsx)("div",{className:"col-6",children:Object(b.jsxs)("div",{className:"questions-pie f-12 position-relative",children:[Object(b.jsx)(O.b,{data:{datasets:[{label:"My First Dataset",data:this.props.chartData,backgroundColor:["rgba(82, 196, 26, 1)","rgba(245, 132, 70, 1)","rgba(245, 34, 45, 1)","rgba(245, 34, 45, 0)"],hoverOffset:4}]},options:{cutout:"85%",offset:5,borderWidth:0,plugins:{legend:{display:!1}},radius:"98%"}}),Object(b.jsxs)("div",{className:"number gray text-center",children:[Object(b.jsx)("div",{className:"f-32",style:{borderBottom:"1px solid #565656"},children:this.props.count}),Object(b.jsx)("div",{className:"f-16",children:"450"})]})]})}),this.props.flag?Object(b.jsxs)("div",{className:"col-6 legend pl-16",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"green float-start",children:"Easy"}),Object(b.jsx)("span",{className:"value ms-auto float-end",children:this.props.chartData[0]})]}),Object(b.jsx)("div",{className:"clearfix"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"orange float-start",children:"Medium"}),Object(b.jsx)("span",{className:"value ms-auto float-end",children:this.props.chartData[1]})]}),Object(b.jsx)("div",{className:"clearfix"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"red float-start",children:"Hard"}),Object(b.jsx)("span",{className:"value ms-auto float-end",children:this.props.chartData[2]})]}),Object(b.jsx)("div",{className:"clearfix"})]}):Object(b.jsxs)("div",{className:"col-6 legend pl-16",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"green float-start",children:"Done"}),Object(b.jsx)("span",{className:"value ms-auto float-end",children:this.props.chartData[0]})]}),Object(b.jsx)("div",{className:"clearfix"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"orange float-start",children:"Revise"}),Object(b.jsx)("span",{className:"value ms-auto float-end",children:this.props.chartData[1]})]}),Object(b.jsx)("div",{className:"clearfix"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"red float-start",children:"Pending"}),Object(b.jsx)("span",{className:"value ms-auto float-end",children:this.props.chartData[2]})]}),Object(b.jsx)("div",{className:"clearfix"})]})]})]})}}]),a}(s.Component),N=a(97),y=a.n(N),_=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).search=function(e){var t=s.state.filters.search,a={};a.search=t,console.log(e.target.parentNode.firstChild.value),a.search.name=e.target.parentNode.firstChild.value;var c=s.props.apiCall(a,"post","http://https://dsa-tracker-450.herokuapp.com/api/filter/general/"+s.state.activePage);console.log(c),c.then((function(e){var t=s.state.api;t.apiData.data.questions_data=e.data,s.setState({api:t,child_conditions:{question_chart_update:!1,filter_update:!1,questions_update:!0}})})).catch((function(e){s.setState({api:{success:!1,apiError:e}})}))},s.filter_data=function(){var e=s.state.filters.topic,t=s.state.filters.level,a=s.state.filters.status,c={};0!==e.size&&(c.topic_id=Object(u.a)(e)),0!==t.size&&(c.level=Object(u.a)(t)),0!==a.size&&(c.mark=Object(u.a)(a));var i=s.props.apiCall(c,"post","http://https://dsa-tracker-450.herokuapp.com/api/filter/general/"+s.state.activePage);console.log(i),i.then((function(e){var t=s.state.api;t.apiData.data.questions_data=e.data,s.setState({api:t,child_conditions:{question_chart_update:!1,filter_update:!1,questions_update:!0}})})).catch((function(e){s.setState({api:{success:!1,apiError:e}})}))},s.filter=function(e,t){var a=s.state.filters,c=e.currentTarget.getAttribute("topic_id"),i=e.currentTarget.getAttribute("level_id"),r=e.currentTarget.getAttribute("status_id");t?(c&&a.topic.add(c),i&&a.level.add(i),r&&a.status.add(r)):(c&&a.topic.delete(c),i&&a.level.delete(i),r&&a.status.delete(r)),s.setState({filters:a,activePage:1},(function(){s.filter_data()}))},s.status_update=function(e){var t={question_id:e.currentTarget.getAttribute("name"),mark:e.currentTarget.getAttribute("status")};s.props.apiCall(t,"post","http://https://dsa-tracker-450.herokuapp.com/api/test_question_user_mark_public").then((function(e){s.props.apiCall({},"get","http://https://dsa-tracker-450.herokuapp.com/api/questions_solved").then((function(e){var t=s.state.api;t.apiData.data.questions_solved=e.data.questions_solved,s.setState({api:t,child_conditions:{question_chart_update:!0,filter_update:!1,questions_update:!1}})})).catch((function(e){s.setState({api:{success:!1,apiError:e}})}))}))},s.state={url:"http://https://dsa-tracker-450.herokuapp.com/api/pages/index",api:{success:!1},child_conditions:{question_chart_update:!1,filter_update:!1,questions_update:!1},filters:{topic:new Set,level:new Set,status:new Set,search:{name:"array"}},activePage:1},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=JSON.stringify({});this.props.apiCall(t,"get",this.state.url).then((function(t){e.setState({api:{success:!0,apiData:t}})})).catch((function(t){e.setState({api:{success:!1,apiError:t}})}))}},{key:"handlePageChange",value:function(e){var t=this;this.setState({activePage:e},(function(){t.filter_data()}))}},{key:"render",value:function(){var e=this;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{loggedIn:!0,ques:!0}),Object(b.jsxs)("div",{className:"container pt-32 pr-16 pl-16",style:{minHeight:"100vh"},children:[Object(b.jsxs)("div",{className:"row pb-32",children:[Object(b.jsx)("div",{className:"col-6 gray br-5 pl-0",children:Object(b.jsx)("div",{className:"row r-tabs text-center",children:this.state.api.success?Object(b.jsx)(y.a,{activePage:this.state.activePage,itemsCountPerPage:10,totalItemsCount:this.state.api.apiData.data.questions_data.total_length,pageRangeDisplayed:5,itemClass:"page-item",linkClass:"page-link",onChange:this.handlePageChange.bind(this)}):""})}),Object(b.jsx)("div",{className:"col-3"}),Object(b.jsxs)("div",{className:"col-3",style:{padding:0},children:[Object(b.jsx)("input",{className:"bg-secondary-black gray search-bar pl-8",placeholder:"search question"}),Object(b.jsx)("button",{className:"text-start bg-orange white search-bar",type:"submit",onClick:function(t){return e.search(t)},children:"search"})]})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-3 pl-0 pr-16",children:this.state.api.success?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"mb-32",children:Object(b.jsx)(x,{chartData:this.state.api.apiData.data.questions_solved.difficulty_levels,count:this.state.api.apiData.data.questions_solved.count,question_chart_update:this.state.child_conditions.question_chart_update,flag:!0})}),Object(b.jsx)(g,{topics:this.state.api.apiData.data.topics,filterData:this.filter,filter_update:this.state.child_conditions.filter_update})]}):""}),Object(b.jsx)("div",{className:"col-9 pl-16 pr-0",children:this.state.api.success?this.state.api.apiData.data.questions_data.questions.map((function(t){return Object(b.jsx)(f,{question_data:t,status_update:e.status_update,questions_update:e.state.child_conditions.questions_update},t.id)})):""})]})]})]})}}]),a}(s.Component);function k(e){return Object(b.jsxs)("div",{className:"mb-40",children:[Object(b.jsx)("div",{className:"f-48 fw-800 mb-20",children:"Login To Your Account"}),Object(b.jsx)("div",{className:"gray f-24",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique facilis neque minus impedit dignissimos, tempore labore voluptas adipisci soluta voluptatum!"})]})}var w=a(8),C=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).handle=function(e){var t=s.state.data;t[e.target.id]=e.target.value,console.log(t),s.setState({data:t})},s.state={url:"http://https://dsa-tracker-450.herokuapp.com/api/login",data:{username:"admin",password:"admin"}},s}return Object(l.a)(a,[{key:"submit",value:function(e){e.preventDefault();var t=JSON.stringify({username:this.state.data.username,password:this.state.data.password});this.props.saveToken(t,"post",this.state.url)}},{key:"render",value:function(){var e=this;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{signUp:!0}),Object(b.jsxs)("div",{className:"mx-auto text-center white pt-100 w-65",children:[Object(b.jsx)(k,{primary:"Login To Your Account",secondary:"Login To Your Account"}),Object(b.jsxs)("div",{className:"row align-items-center text-start mb-60",children:[Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("form",{onSubmit:function(t){return e.submit(t)},children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("input",{onChange:function(t){return e.handle(t)},id:"username",value:this.state.data.username,type:"text",className:"form-control bg-secondary-black mb-24 pl-16 pr-16 pt-16 pb-16",placeholder:"username"}),Object(b.jsx)("input",{onChange:function(t){return e.handle(t)},id:"password",value:this.state.data.password,type:"password",className:"form-control bg-secondary-black mb-24 pl-16 pr-16 pt-16 pb-16",placeholder:"Password"}),Object(b.jsx)("input",{id:"submit",type:"submit",className:"text-start bg-orange white pl-16 pr-16 pt-16 pb-16 br-5 w-100",value:"Login in to your account ->"})]})})}),Object(b.jsx)("div",{className:"col text-center f-48 gray",children:"/"}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)(p.b,{to:"",children:Object(b.jsxs)("div",{className:"gray-border w-100 pl-16 pr-16 pt-16 pb-16 fw-800 secondary-gray br-5 mb-20",children:[Object(b.jsx)("img",{src:"./images/google.png",width:"24",className:"align-middle mr-12",alt:""})," Google"]})}),Object(b.jsx)(p.b,{to:"",children:Object(b.jsxs)("div",{className:"gray-border w-100 pl-16 pr-16 pt-16 pb-16 fw-800 secondary-gray br-5 mb-20",children:[Object(b.jsx)("img",{src:"./images/facebook.png",width:"24",className:"align-middle mr-12",alt:""})," Github"]})})]})]}),Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)("img",{width:"700",src:"./images/bg-abstract.jpg",alt:""})})]})]})}}]),a}(s.Component),D=Object(w.f)(C),q=a(7),S=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).handle=function(e){var t=s.state.data;t[e.target.id]=e.target.value,console.log(t),s.setState({data:t})},s.state={url:"http://https://dsa-tracker-450.herokuapp.com/api/register",data:{username:"admin",email:"",name:"",password:"admin"}},s}return Object(l.a)(a,[{key:"submit",value:function(e){e.preventDefault();var t=JSON.stringify({username:this.state.data.username,email:this.state.data.email,name:this.state.data.name,password:this.state.data.password});this.props.saveToken(t,"post",this.state.url)}},{key:"render",value:function(){var e,t,a,s,c=this;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{signUp:!1}),Object(b.jsxs)("div",{className:"mx-auto text-center white pt-100 w-65",children:[Object(b.jsx)(k,{primary:"Sign Up and Stay Connected",secondary:"Sign Up and Stay Connected"}),Object(b.jsx)("form",{onSubmit:function(e){return c.submit(e)},children:Object(b.jsxs)("div",{className:"row align-items-center text-start mb-60",children:[Object(b.jsx)("div",{className:"col-4",children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("input",(e={type:"text",onChange:function(e){return c.handle(e)},id:"username",className:"form-control gray bg-secondary-black mb-24 pl-16 pr-16 pt-16 pb-16"},Object(q.a)(e,"id","username"),Object(q.a)(e,"placeholder","Username"),e)),Object(b.jsx)("input",(t={type:"text",onChange:function(e){return c.handle(e)},id:"name",className:"form-control gray bg-secondary-black mb-24 pl-16 pr-16 pt-16 pb-16"},Object(q.a)(t,"id","name"),Object(q.a)(t,"placeholder","Name"),t))]})}),Object(b.jsx)("div",{className:"col-4 text-center f-48 gray"}),Object(b.jsx)("div",{className:"col-4",children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("input",(a={type:"email",onChange:function(e){return c.handle(e)},id:"email",className:"form-control gray bg-secondary-black mb-24 pl-16 pr-16 pt-16 pb-16"},Object(q.a)(a,"id","email"),Object(q.a)(a,"placeholder","Email"),a)),Object(b.jsx)("input",(s={type:"password",onChange:function(e){return c.handle(e)},id:"password",className:"form-control gray bg-secondary-black mb-24 pl-16 pr-16 pt-16 pb-16"},Object(q.a)(s,"id","password"),Object(q.a)(s,"placeholder","Password"),s))]})}),Object(b.jsx)("div",{className:"col-4 offset-4",children:Object(b.jsx)("input",{type:"submit",className:"text-start bg-orange white pl-16 pr-16 pt-16 pb-16 br-5 w-100",value:"Create Account"})})]})}),Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)("img",{width:"700",src:"./images/bg-abstract.jpg",alt:""})})]})]})}}]),a}(s.Component),T=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return console.log(e.bar_chart_update),e.bar_chart_update}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"p-16 pt-32 bg-secondary-black br-5",children:Object(b.jsx)(O.a,{data:{labels:this.props.labels,datasets:[{data:this.props.values,backgroundColor:["rgba(245,132,70,0.5)","rgba(245,132,70,0.5)","rgba(245,132,70,0.5)","rgba(245,132,70,0.5)","rgba(245,132,70,0.5)","rgba(245,132,70,0.5)"],borderColor:["rgba(245,132,70,1)","rgba(245,132,70,1)","rgba(245,132,70,1)","rgba(245,132,70,1)","rgba(245,132,70,1)","rgba(245,132,70,1)"],borderWidth:1}]},options:{plugins:{legend:!1},scales:{xAxis:{grid:{color:"#1D1C1F"}},yAxis:{suggestedMax:10,grid:{color:"#1D1C1F"}}}}})})}}]),a}(s.Component),F=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={chartData:{}},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)(O.c,{data:{labels:["Mon","Tue","Thu","Fri","Sat","Sun"],datasets:[{backgroundColor:"rgba(245,132,70,0.5)",borderColor:"rgba(245,132,70,1)",borderWidth:1,data:this.props.chartData}]},options:{plugins:{legend:!1},scales:{r:{suggestedMin:0,grid:{color:"#565656"},pointLabels:{color:"#565656"},ticks:{beginAtZero:!0,color:"#565656",backdropColor:"rgba(0,0,0,0)"}}}}})}}]),a}(s.Component),P=a(98),A=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).convert=function(e){var t=e,a=("0"+(t.getMonth()+1)).slice(-2),s=("0"+t.getDate()).slice(-2);return[t.getFullYear(),a,s].join("-")},s.callDay=function(e){console.log(e),console.log(s.convert(e));var t={day:s.convert(e)};s.props.apiCall(t,"post",s.state.url).then((function(e){s.setState({api:{success:!0,apiData:e}})})).catch((function(e){s.setState({api:{success:!1,apiError:e}})}))},s.state={url:"http://https://dsa-tracker-450.herokuapp.com/api/pages/profile",api:{success:!1},child_conditions:{question_chart_update:!1,bar_chart_update:!1}},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.apiCall({day:null},"post",this.state.url).then((function(t){e.setState({api:{success:!0,apiData:t}})})).catch((function(t){e.setState({api:{success:!1,apiError:t}})}))}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{loggedIn:!0,performance:!0}),Object(b.jsx)("div",{className:"container pt-32 pr-16 pl-16",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-9 pl-0 pr-16 h-100",children:[Object(b.jsxs)("div",{className:"row mb-32",children:[Object(b.jsx)("div",{className:"col pr-16",children:Object(b.jsxs)("div",{className:"bg-secondary-black gray p-16 br-5 h-100",children:[Object(b.jsx)("div",{className:"filter-heading f-16 fw-500 secondary-gray mb-16",children:"Ranking"}),Object(b.jsxs)("div",{className:"row align-items-center",children:[Object(b.jsxs)("div",{className:"col-7",children:[Object(b.jsx)("span",{className:"fw-400 white",children:"Your Rank:"}),Object(b.jsxs)("span",{className:"f-24 orange",children:[" ","3",Object(b.jsx)("sub",{children:"rd"})]})]}),Object(b.jsxs)("div",{className:"col-5 legend pl-16",style:{borderLeft:"1px solid #565656"},children:[Object(b.jsx)("div",{className:"user white",children:"Ramesh"}),Object(b.jsx)("div",{className:"user white",children:"Suresh"}),Object(b.jsx)("div",{className:"user orange",children:"Ramesh"}),Object(b.jsx)("div",{className:"user white",children:"Ramesh"})]})]})]})}),Object(b.jsx)("div",{className:"col pl-16 pr-16",children:this.state.api.success?Object(b.jsx)(x,{chartData:this.state.api.apiData.data.questions_solved.difficulty_levels,count:this.state.api.apiData.data.questions_solved.count,question_chart_update:this.state.child_conditions.question_chart_update,flag:!0}):""}),Object(b.jsx)("div",{className:"col pl-16",children:this.state.api.success?Object(b.jsx)(x,{chartData:this.state.api.apiData.data.question_marked.marks,count:this.state.api.apiData.data.question_marked.count,question_chart_update:this.state.child_conditions.question_chart_update,flag:!1}):""})]}),this.state.api.success?Object(b.jsx)(T,{values:this.state.api.apiData.data.topic_wise_freq.values,bar_chart_update:this.state.child_conditions.bar_chart_update,labels:this.state.api.apiData.data.topic_wise_freq.labels}):""]}),Object(b.jsxs)("div",{className:"col-3 pl-16 pr-0",children:[Object(b.jsxs)("div",{className:"bg-secondary-black gray p-16 br-5 mb-32",children:[Object(b.jsx)("div",{className:"filter-heading mb-8 f-16 fw-500 secondary-gray",children:"Weekly Report"}),this.state.api.success?Object(b.jsx)(F,{chartData:this.state.api.apiData.data.week_data}):""]}),Object(b.jsx)("div",{className:"bg-secondary-black gray p-16 br-5 mb-32",children:Object(b.jsx)(P.a,{onClickDay:this.callDay,showNeighboringMonth:!1})})]})]})})]})}}]),a}(s.Component),M=a(61),L=a(60),E=a.n(L),U=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).test=function(){console.log("hi")},s.saveToken=function(e,t,a){var c=new M.a,i={method:t,url:a,headers:{"Content-Type":"application/json"},data:e};E()(i).then((function(e){c.set("token",e.data.token,{path:"/",secure:!0,sameSite:"strict"}),s.props.history.push("/")})).catch((function(e){console.log(e.response.data)}))},s.apiCall=function(e,t,a){var s={method:t,url:a,headers:{"Content-Type":"application/json",Authorization:"Token "+(new M.a).get("token")},data:e};return E()(s)},s.state={chartData:{},api:{}},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getChartData()}},{key:"getChartData",value:function(){this.setState({chartData:{labels:["Boston","Worcester","Springfield","Lowell","Cambridge","New Bedford"],datasets:[{label:"Population",data:[617594,181045,153060,106519,105162,95072],backgroundColor:["rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(255, 99, 132, 0.6)"]}]}})}},{key:"render",value:function(){return Object(b.jsxs)(w.c,{children:[Object(b.jsx)(w.a,{exact:!0,path:"/signin",children:Object(b.jsx)(D,{saveToken:this.saveToken,test:this.test})}),Object(b.jsx)(w.a,{exact:!0,path:"/signup",children:Object(b.jsx)(S,{saveToken:this.saveToken})}),Object(b.jsx)(w.a,{exact:!0,path:"/profile",children:Object(b.jsx)(A,{apiCall:this.apiCall})}),Object(b.jsx)(w.a,{exact:!0,path:"/",children:Object(b.jsx)(_,{apiCall:this.apiCall})})]})}}]),a}(s.Component),R=Object(w.f)(U),I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,241)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(p.a,{children:Object(b.jsx)(R,{})})}),document.getElementById("root")),I()}},[[240,1,2]]]);
//# sourceMappingURL=main.91c5bb97.chunk.js.map