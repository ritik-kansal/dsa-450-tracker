(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},240:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a.n(s),i=a(93),r=a.n(i),n=(a(103),a(3)),l=a(4),o=a(6),d=a(5),u=(a(104),a(105),a(9)),p=a(13),j=a(0);function b(e){return Object(j.jsx)("div",{children:Object(j.jsx)("nav",{className:"navbar r-nav navbar-expand-lg navbar-dark bg-secondary-black pt-16 pb-16",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(p.b,{className:"navbar-brand",to:"/",children:"Navbar"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[e.loggedIn?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("ul",{className:"navbar-nav mx-auto fw-600 f-12",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(p.b,{className:"nav-link"+(e.ques?" active":""),"aria-current":"page",to:"/dsa-450-tracker",isLoggedin:e.loggedIn,children:"Ques"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(p.b,{className:"nav-link"+(e.performance?" active":""),"aria-current":"page",to:"/dsa-450-tracker/profile",isLoggedin:e.loggedIn,children:"Performance"})})]}),Object(j.jsx)("ul",{className:"navbar-nav fw-600 f-12",children:Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(p.b,{className:"nav-link pr-0","aria-current":"page",to:"/dsa-450-tracker/signin",isLoggedin:e.loggedIn,children:"Logout"})})})]}):e.signUp?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{className:"navbar-nav ms-auto",children:Object(j.jsx)("li",{className:"nav-item bg-orange pr-36 pl-36 br-5",children:Object(j.jsx)(p.b,{className:"nav-link white","aria-current":"page",to:"/dsa-450-tracker/signup",isLoggedin:e.loggedIn,children:"Sign Up"})})})}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{className:"navbar-nav ms-auto",children:Object(j.jsx)("li",{className:"nav-item bg-orange pr-36 pl-36 br-5",children:Object(j.jsx)(p.b,{className:"nav-link white","aria-current":"page",to:"/dsa-450-tracker/signin",isLoggedin:e.loggedIn,children:"Sign In"})})})})," "]})]})})})}var h=a(41);function m(e){var t=Object(s.useState)(!1),a=Object(h.a)(t,2),c=a[0],i=a[1];return Object(j.jsxs)(j.Fragment,{children:[" ",Object(j.jsxs)("span",{onClick:function(t){return function(t){i(!c),e.filterData(t,!c)}(t)},level_id:e.level_id,topic_id:e.topic_id,status_id:e.status_id,className:"filter"+(c?" selected":""),children:[" ",e.filter]})]})}var g=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={difficulty_levels:[{id:0,name:"Easy"},{id:1,name:"Medium"},{id:2,name:"Hard"}],status:[{id:2,name:"Done"},{id:1,name:"Revise"},{id:0,name:"To-Do"},{id:"null",name:"Unattempted"}]},s}return Object(l.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.filter_update}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"bg-secondary-black gray p-16 br-5 mb-32",children:[Object(j.jsx)("div",{className:"filter-heading mb-8 f-16 fw-500 secondary-gray",children:"Topics"}),Object(j.jsxs)("div",{className:"filters f-12",children:[this.props.topics.map((function(t,a){return Object(j.jsx)(m,{topic_id:t.id,filter:t.name,filterData:e.props.filterData},t.id)}))," "]}),Object(j.jsx)("div",{className:"filter-heading mt-4 mb-8 f-16 fw-500 secondary-gray",children:"Difficulty"}),Object(j.jsxs)("div",{className:"filters f-12",children:[this.state.difficulty_levels.map((function(t,a){return Object(j.jsx)(m,{level_id:t.id,filter:t.name,filterData:e.props.filterData},t.id)}))," "]}),Object(j.jsx)("div",{className:"filter-heading mt-4 mb-8 f-16 fw-500 secondary-gray",children:"Status"}),Object(j.jsxs)("div",{className:"filters f-12",children:[this.state.status.map((function(t,a){return Object(j.jsx)(m,{status_id:t.id,filter:t.name,filterData:e.props.filterData},t.id)}))," "]})]})}}]),a}(s.Component);function v(e){var t=e.question_data,a=2===t.level?"Hard":1===t.level?"Medium":"Easy";return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"question-box",children:[Object(j.jsxs)("div",{className:"question",children:[Object(j.jsxs)("span",{className:"gray",children:[t.id,"."]})," ",Object(j.jsx)("a",{className:"question-link",href:t.link,target:"blank",children:t.name})]}),Object(j.jsxs)("div",{className:"mb-16",children:[Object(j.jsx)("span",{className:"filter f-12",style:{cursor:"default"},children:a}),Object(j.jsx)("span",{className:"filter f-12",style:{cursor:"default"},children:t.topic_name})]}),Object(j.jsx)("div",{className:"footer pt-8",children:Object(j.jsxs)("div",{className:"status white",children:[Object(j.jsxs)("label",{className:"r-radio-label",children:["Done",Object(j.jsx)("input",{type:"radio",name:t.id,id:"",status:2,defaultChecked:2===t.mark,onClick:function(t){return e.status_update(t)}}),Object(j.jsx)("span",{className:"r-radio"})]}),Object(j.jsxs)("label",{className:"r-radio-label",children:["Need to Revise",Object(j.jsx)("input",{type:"radio",name:t.id,id:"",status:1,defaultChecked:1===t.mark,onClick:function(t){return e.status_update(t)}}),Object(j.jsx)("span",{className:"r-radio"})]}),Object(j.jsxs)("label",{className:"r-radio-label",children:["To-Do",Object(j.jsx)("input",{type:"radio",name:t.id,id:"",status:0,defaultChecked:0===t.mark,onClick:function(t){return e.status_update(t)}}),Object(j.jsx)("span",{className:"r-radio"})]}),Object(j.jsxs)("div",{className:"friends-stats gray float-end",children:[t.friends," of your friends have already solved the ques"]})]})})]})})}var O=c.a.memo(v,(function(e,t){return!t.questions_update})),f=a(27),x=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.question_chart_update}},{key:"render",value:function(){return Object(j.jsxs)("div",{onLoad:window.loadQuestionSolved,className:"bg-secondary-black gray p-16 br-5",children:[Object(j.jsx)("div",{className:"filter-heading f-16 fw-500 secondary-gray mb-16",children:"Questions"}),Object(j.jsxs)("div",{className:"row align-items-center",children:[Object(j.jsx)("div",{className:"col-6",children:Object(j.jsxs)("div",{className:"questions-pie f-12 position-relative",children:[Object(j.jsx)(f.b,{data:{datasets:[{label:"My First Dataset",data:this.props.chartData,backgroundColor:["rgba(82, 196, 26, 1)","rgba(245, 132, 70, 1)","rgba(245, 34, 45, 1)","rgba(245, 34, 45, 0)"],hoverOffset:4}]},options:{cutout:"85%",offset:5,borderWidth:0,plugins:{legend:{display:!1}},radius:"98%"}}),Object(j.jsxs)("div",{className:"number gray text-center",children:[Object(j.jsx)("div",{className:"f-32",style:{borderBottom:"1px solid #565656"},children:this.props.count}),Object(j.jsx)("div",{className:"f-16",children:"450"})]})]})}),this.props.flag?Object(j.jsxs)("div",{className:"col-6 legend pl-16",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"green float-start",children:"Easy"}),Object(j.jsx)("span",{className:"value ms-auto float-end",children:this.props.chartData[0]})]}),Object(j.jsx)("div",{className:"clearfix"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"orange float-start",children:"Medium"}),Object(j.jsx)("span",{className:"value ms-auto float-end",children:this.props.chartData[1]})]}),Object(j.jsx)("div",{className:"clearfix"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"red float-start",children:"Hard"}),Object(j.jsx)("span",{className:"value ms-auto float-end",children:this.props.chartData[2]})]}),Object(j.jsx)("div",{className:"clearfix"})]}):Object(j.jsxs)("div",{className:"col-6 legend pl-16",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"green float-start",children:"Done"}),Object(j.jsx)("span",{className:"value ms-auto float-end",children:this.props.chartData[0]})]}),Object(j.jsx)("div",{className:"clearfix"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"orange float-start",children:"Revise"}),Object(j.jsx)("span",{className:"value ms-auto float-end",children:this.props.chartData[1]})]}),Object(j.jsx)("div",{className:"clearfix"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"red float-start",children:"Pending"}),Object(j.jsx)("span",{className:"value ms-auto float-end",children:this.props.chartData[2]})]}),Object(j.jsx)("div",{className:"clearfix"})]})]})]})}}]),a}(s.Component),N=a(97),y=a.n(N),_=a(8),k=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).search=function(e){var t=s.state.filters.search,a={};a.search=t,console.log(e.target.parentNode.firstChild.value),a.search.name=e.target.parentNode.firstChild.value;var c=s.props.apiCall(a,"post","https://dsa-tracker-450.herokuapp.com/api/filter/general/"+s.state.activePage);console.log(c),c.then((function(e){var t=s.state.api;t.apiData.data.questions_data=e.data,s.setState({api:t,child_conditions:{question_chart_update:!1,filter_update:!1,questions_update:!0}})})).catch((function(e){s.setState({api:{success:!1,apiError:e}})}))},s.filter_data=function(){var e=s.state.filters.topic,t=s.state.filters.level,a=s.state.filters.status,c={};0!==e.size&&(c.topic_id=Object(u.a)(e)),0!==t.size&&(c.level=Object(u.a)(t)),0!==a.size&&(c.mark=Object(u.a)(a));var i=s.props.apiCall(c,"post","https://dsa-tracker-450.herokuapp.com/api/filter/general/"+s.state.activePage);console.log(i),i.then((function(e){var t=s.state.api;t.apiData.data.questions_data=e.data,s.setState({api:t,child_conditions:{question_chart_update:!1,filter_update:!1,questions_update:!0}})})).catch((function(e){s.setState({api:{success:!1,apiError:e}})}))},s.filter=function(e,t){var a=s.state.filters,c=e.currentTarget.getAttribute("topic_id"),i=e.currentTarget.getAttribute("level_id"),r=e.currentTarget.getAttribute("status_id");t?(c&&a.topic.add(c),i&&a.level.add(i),r&&a.status.add(r)):(c&&a.topic.delete(c),i&&a.level.delete(i),r&&a.status.delete(r)),s.setState({filters:a,activePage:1},(function(){s.filter_data()}))},s.status_update=function(e){var t={question_id:e.currentTarget.getAttribute("name"),mark:e.currentTarget.getAttribute("status")};s.props.apiCall(t,"post","https://dsa-tracker-450.herokuapp.com/api/test_question_user_mark_public").then((function(e){s.props.apiCall({},"get","https://dsa-tracker-450.herokuapp.com/api/questions_solved").then((function(e){var t=s.state.api;t.apiData.data.questions_solved=e.data.questions_solved,s.setState({api:t,child_conditions:{question_chart_update:!0,filter_update:!1,questions_update:!1}})})).catch((function(e){s.setState({api:{success:!1,apiError:e}})}))}))},s.state={url:"https://dsa-tracker-450.herokuapp.com/api/pages/index",api:{success:!1},child_conditions:{question_chart_update:!1,filter_update:!1,questions_update:!1},filters:{topic:new Set,level:new Set,status:new Set,search:{name:"array"}},activePage:1},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=JSON.stringify({});this.props.apiCall(t,"get",this.state.url).then((function(t){e.setState({api:{success:!0,apiData:t}})})).catch((function(t){e.setState({api:{success:!1,apiError:t}})}))}},{key:"handlePageChange",value:function(e){var t=this;this.setState({activePage:e},(function(){t.filter_data()}))}},{key:"render",value:function(){var e=this;return this.props.isLoggedin?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{loggedIn:!0,ques:!0}),Object(j.jsxs)("div",{className:"container pt-32 pr-16 pl-16",style:{minHeight:"100vh"},children:[Object(j.jsxs)("div",{className:"row pb-32",children:[Object(j.jsx)("div",{className:"col-6 gray br-5 pl-0",children:Object(j.jsx)("div",{className:"row r-tabs text-center",children:this.state.api.success?Object(j.jsx)(y.a,{activePage:this.state.activePage,itemsCountPerPage:10,totalItemsCount:this.state.api.apiData.data.questions_data.total_length,pageRangeDisplayed:5,itemClass:"page-item",linkClass:"page-link",onChange:this.handlePageChange.bind(this)}):""})}),Object(j.jsx)("div",{className:"col-3"}),Object(j.jsxs)("div",{className:"col-3",style:{padding:0},children:[Object(j.jsx)("input",{className:"bg-secondary-black gray search-bar pl-8",placeholder:"search question"}),Object(j.jsx)("button",{className:"text-start bg-orange white search-bar",type:"submit",onClick:function(t){return e.search(t)},children:"search"})]})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-3 pl-0 pr-16",children:this.state.api.success?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"mb-32",children:Object(j.jsx)(x,{chartData:this.state.api.apiData.data.questions_solved.difficulty_levels,count:this.state.api.apiData.data.questions_solved.count,question_chart_update:this.state.child_conditions.question_chart_update,flag:!0})}),Object(j.jsx)(g,{topics:this.state.api.apiData.data.topics,filterData:this.filter,filter_update:this.state.child_conditions.filter_update})]}):""}),Object(j.jsx)("div",{className:"col-9 pl-16 pr-0",children:this.state.api.success?this.state.api.apiData.data.questions_data.questions.map((function(t){return Object(j.jsx)(O,{question_data:t,status_update:e.status_update,questions_update:e.state.child_conditions.questions_update},t.id)})):""})]})]})]}):Object(j.jsx)(_.a,{to:{pathname:"/dsa-450-tracker/signin"}})}}]),a}(s.Component);function w(e){return Object(j.jsxs)("div",{className:"mb-40",children:[Object(j.jsx)("div",{className:"f-48 fw-800 mb-20",children:"Login To Your Account"}),Object(j.jsx)("div",{className:"gray f-24",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique facilis neque minus impedit dignissimos, tempore labore voluptas adipisci soluta voluptatum!"})]})}var C=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).handle=function(e){var t=s.state.data;t[e.target.id]=e.target.value,console.log(t),s.setState({data:t})},s.state={url:"https://dsa-tracker-450.herokuapp.com/api/login",data:{username:"",password:""}},s}return Object(l.a)(a,[{key:"submit",value:function(e){e.preventDefault();var t=JSON.stringify({username:this.state.data.username,password:this.state.data.password});this.props.saveToken(t,"post",this.state.url)}},{key:"render",value:function(){var e=this;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{signUp:!0}),Object(j.jsxs)("div",{className:"mx-auto text-center white pt-100 w-65",children:[Object(j.jsx)(w,{primary:"Login To Your Account",secondary:"Login To Your Account"}),Object(j.jsxs)("div",{className:"row align-items-center text-start mb-60",children:[Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("form",{onSubmit:function(t){return e.submit(t)},children:Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("input",{onChange:function(t){return e.handle(t)},id:"username",value:this.state.data.username,type:"text",className:"form-control bg-secondary-black mb-24 pl-16 pr-16 pt-16 pb-16",placeholder:"username"}),Object(j.jsx)("input",{onChange:function(t){return e.handle(t)},id:"password",value:this.state.data.password,type:"password",className:"form-control bg-secondary-black mb-24 pl-16 pr-16 pt-16 pb-16",placeholder:"Password"}),Object(j.jsx)("input",{id:"submit",type:"submit",className:"text-start bg-orange white pl-16 pr-16 pt-16 pb-16 br-5 w-100",value:"Login in to your account ->"})]})})}),Object(j.jsx)("div",{className:"col text-center f-48 gray",children:"/"}),Object(j.jsxs)("div",{className:"col",children:[Object(j.jsx)(p.b,{to:"",children:Object(j.jsxs)("div",{className:"gray-border w-100 pl-16 pr-16 pt-16 pb-16 fw-800 secondary-gray br-5 mb-20",children:[Object(j.jsx)("img",{src:"./images/google.png",width:"24",className:"align-middle mr-12",alt:""})," Google"]})}),Object(j.jsx)(p.b,{to:"",children:Object(j.jsxs)("div",{className:"gray-border w-100 pl-16 pr-16 pt-16 pb-16 fw-800 secondary-gray br-5 mb-20",children:[Object(j.jsx)("img",{src:"./images/facebook.png",width:"24",className:"align-middle mr-12",alt:""})," Github"]})})]})]}),Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)("img",{width:"700",src:"./images/bg-abstract.jpg",alt:""})})]})]})}}]),a}(s.Component),D=Object(_.g)(C),q=a(7),S=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).handle=function(e){var t=s.state.data;t[e.target.id]=e.target.value,console.log(t),s.setState({data:t})},s.state={url:"https://dsa-tracker-450.herokuapp.com/api/register",data:{username:"admin",email:"",name:"",password:"admin"}},s}return Object(l.a)(a,[{key:"submit",value:function(e){e.preventDefault();var t=JSON.stringify({username:this.state.data.username,email:this.state.data.email,name:this.state.data.name,password:this.state.data.password});this.props.saveToken(t,"post",this.state.url)}},{key:"render",value:function(){var e,t,a,s,c=this;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{signUp:!1}),Object(j.jsxs)("div",{className:"mx-auto text-center white pt-100 w-65",children:[Object(j.jsx)(w,{primary:"Sign Up and Stay Connected",secondary:"Sign Up and Stay Connected"}),Object(j.jsx)("form",{onSubmit:function(e){return c.submit(e)},children:Object(j.jsxs)("div",{className:"row align-items-center text-start mb-60",children:[Object(j.jsx)("div",{className:"col-4",children:Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("input",(e={type:"text",onChange:function(e){return c.handle(e)},id:"username",className:"form-control gray bg-secondary-black mb-24 pl-16 pr-16 pt-16 pb-16"},Object(q.a)(e,"id","username"),Object(q.a)(e,"placeholder","Username"),e)),Object(j.jsx)("input",(t={type:"text",onChange:function(e){return c.handle(e)},id:"name",className:"form-control gray bg-secondary-black mb-24 pl-16 pr-16 pt-16 pb-16"},Object(q.a)(t,"id","name"),Object(q.a)(t,"placeholder","Name"),t))]})}),Object(j.jsx)("div",{className:"col-4 text-center f-48 gray"}),Object(j.jsx)("div",{className:"col-4",children:Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("input",(a={type:"email",onChange:function(e){return c.handle(e)},id:"email",className:"form-control gray bg-secondary-black mb-24 pl-16 pr-16 pt-16 pb-16"},Object(q.a)(a,"id","email"),Object(q.a)(a,"placeholder","Email"),a)),Object(j.jsx)("input",(s={type:"password",onChange:function(e){return c.handle(e)},id:"password",className:"form-control gray bg-secondary-black mb-24 pl-16 pr-16 pt-16 pb-16"},Object(q.a)(s,"id","password"),Object(q.a)(s,"placeholder","Password"),s))]})}),Object(j.jsx)("div",{className:"col-4 offset-4",children:Object(j.jsx)("input",{type:"submit",className:"text-start bg-orange white pl-16 pr-16 pt-16 pb-16 br-5 w-100",value:"Create Account"})})]})}),Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)("img",{width:"700",src:"./images/bg-abstract.jpg",alt:""})})]})]})}}]),a}(s.Component),T=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return console.log(e.bar_chart_update),e.bar_chart_update}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"p-16 pt-32 bg-secondary-black br-5",children:Object(j.jsx)(f.a,{data:{labels:this.props.labels,datasets:[{data:this.props.values,backgroundColor:["rgba(245,132,70,0.5)","rgba(245,132,70,0.5)","rgba(245,132,70,0.5)","rgba(245,132,70,0.5)","rgba(245,132,70,0.5)","rgba(245,132,70,0.5)"],borderColor:["rgba(245,132,70,1)","rgba(245,132,70,1)","rgba(245,132,70,1)","rgba(245,132,70,1)","rgba(245,132,70,1)","rgba(245,132,70,1)"],borderWidth:1}]},options:{plugins:{legend:!1},scales:{xAxis:{grid:{color:"#1D1C1F"}},yAxis:{suggestedMax:10,grid:{color:"#1D1C1F"}}}}})})}}]),a}(s.Component),L=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={chartData:{}},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsx)(f.c,{data:{labels:["Mon","Tue","Thu","Fri","Sat","Sun"],datasets:[{backgroundColor:"rgba(245,132,70,0.5)",borderColor:"rgba(245,132,70,1)",borderWidth:1,data:this.props.chartData}]},options:{plugins:{legend:!1},scales:{r:{suggestedMin:0,grid:{color:"#565656"},pointLabels:{color:"#565656"},ticks:{beginAtZero:!0,color:"#565656",backdropColor:"rgba(0,0,0,0)"}}}}})}}]),a}(s.Component),F=a(98),P=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).convert=function(e){var t=e,a=("0"+(t.getMonth()+1)).slice(-2),s=("0"+t.getDate()).slice(-2);return[t.getFullYear(),a,s].join("-")},s.callDay=function(e){console.log(e),console.log(s.convert(e));var t={day:s.convert(e)};s.props.apiCall(t,"post",s.state.url).then((function(e){s.setState({api:{success:!0,apiData:e}})})).catch((function(e){s.setState({api:{success:!1,apiError:e}})}))},s.state={url:"https://dsa-tracker-450.herokuapp.com/api/pages/profile",api:{success:!1},child_conditions:{question_chart_update:!1,bar_chart_update:!1}},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.apiCall({day:null},"post",this.state.url).then((function(t){e.setState({api:{success:!0,apiData:t}})})).catch((function(t){e.setState({api:{success:!1,apiError:t}})}))}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{loggedIn:!0,performance:!0}),Object(j.jsx)("div",{className:"container pt-32 pr-16 pl-16",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-9 pl-0 pr-16 h-100",children:[Object(j.jsxs)("div",{className:"row mb-32",children:[Object(j.jsx)("div",{className:"col pr-16",children:Object(j.jsxs)("div",{className:"bg-secondary-black gray p-16 br-5 h-100",children:[Object(j.jsx)("div",{className:"filter-heading f-16 fw-500 secondary-gray mb-16",children:"Ranking"}),Object(j.jsxs)("div",{className:"row align-items-center",children:[Object(j.jsxs)("div",{className:"col-7",children:[Object(j.jsx)("span",{className:"fw-400 white",children:"Your Rank:"}),Object(j.jsxs)("span",{className:"f-24 orange",children:[" ","3",Object(j.jsx)("sub",{children:"rd"})]})]}),Object(j.jsxs)("div",{className:"col-5 legend pl-16",style:{borderLeft:"1px solid #565656"},children:[Object(j.jsx)("div",{className:"user white",children:"Ramesh"}),Object(j.jsx)("div",{className:"user white",children:"Suresh"}),Object(j.jsx)("div",{className:"user orange",children:"Ramesh"}),Object(j.jsx)("div",{className:"user white",children:"Ramesh"})]})]})]})}),Object(j.jsx)("div",{className:"col pl-16 pr-16",children:this.state.api.success?Object(j.jsx)(x,{chartData:this.state.api.apiData.data.questions_solved.difficulty_levels,count:this.state.api.apiData.data.questions_solved.count,question_chart_update:this.state.child_conditions.question_chart_update,flag:!0}):""}),Object(j.jsx)("div",{className:"col pl-16",children:this.state.api.success?Object(j.jsx)(x,{chartData:this.state.api.apiData.data.question_marked.marks,count:this.state.api.apiData.data.question_marked.count,question_chart_update:this.state.child_conditions.question_chart_update,flag:!1}):""})]}),this.state.api.success?Object(j.jsx)(T,{values:this.state.api.apiData.data.topic_wise_freq.values,bar_chart_update:this.state.child_conditions.bar_chart_update,labels:this.state.api.apiData.data.topic_wise_freq.labels}):""]}),Object(j.jsxs)("div",{className:"col-3 pl-16 pr-0",children:[Object(j.jsxs)("div",{className:"bg-secondary-black gray p-16 br-5 mb-32",children:[Object(j.jsx)("div",{className:"filter-heading mb-8 f-16 fw-500 secondary-gray",children:"Weekly Report"}),this.state.api.success?Object(j.jsx)(L,{chartData:this.state.api.apiData.data.week_data}):""]}),Object(j.jsx)("div",{className:"bg-secondary-black gray p-16 br-5 mb-32",children:Object(j.jsx)(F.a,{onClickDay:this.callDay,showNeighboringMonth:!1})})]})]})})]})}}]),a}(s.Component),A=a(42),I=a(61),M=a.n(I),E=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).saveToken=function(e,t,a){var c=new A.a,i={method:t,url:a,headers:{"Content-Type":"application/json"},data:e};M()(i).then((function(e){c.set("token",e.data.token,{path:"/",secure:!0,sameSite:"strict"}),s.setState({isLoggedin:!0},(function(){s.props.history.push("/dsa-450-tracker")}))})).catch((function(e){console.log(e.response.data)}))},s.apiCall=function(e,t,a){var s={method:t,url:a,headers:{"Content-Type":"application/json",Authorization:"Token "+(new A.a).get("token")},data:e};return M()(s)},s.state={api:{},isLoggedin:!1},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsxs)(_.d,{children:[Object(j.jsx)(_.b,{exact:!0,path:"/dsa-450-tracker/signin",children:Object(j.jsx)(D,{saveToken:this.saveToken})}),Object(j.jsx)(_.b,{exact:!0,path:"/dsa-450-tracker/signup",children:Object(j.jsx)(S,{saveToken:this.saveToken})}),Object(j.jsx)(_.b,{exact:!0,path:"/dsa-450-tracker/profile",children:Object(j.jsx)(P,{apiCall:this.apiCall,isLoggedin:this.state.isLoggedin})}),Object(j.jsx)(_.b,{exact:!0,path:"/dsa-450-tracker",children:Object(j.jsx)(k,{apiCall:this.apiCall,isLoggedin:this.state.isLoggedin})})]})}}]),a}(s.Component),U=Object(_.g)(E),R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,241)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(p.a,{children:Object(j.jsx)(U,{})})}),document.getElementById("root")),R()}},[[240,1,2]]]);
//# sourceMappingURL=main.5fb55b2b.chunk.js.map