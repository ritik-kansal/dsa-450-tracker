(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},240:function(e,t,a){"use strict";a.r(t);var s=a(2),i=a.n(s),c=a(93),r=a.n(c),n=(a(103),a(3)),l=a(4),o=a(6),d=a(5),p=(a(104),a(105),a(9)),u=a(17),j=a(8),h=a(0),b=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).logout=function(t){e.props.apiCall({},"post","https://dsa-tracker-450.herokuapp.com/api/logoutall/").then((function(t){e.props.history.push("/dsa-450-tracker/signin")})).catch((function(t){e.props.history.push("/dsa-450-tracker/signin")}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{children:Object(h.jsx)("nav",{className:"navbar r-nav navbar-expand-lg navbar-dark bg-secondary-black pt-16 pb-16",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(u.b,{className:"navbar-brand",to:"/",children:"Dsa-450-Tracker"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[this.props.loggedIn?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("ul",{className:"navbar-nav mx-auto fw-600 f-12",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(u.b,{className:"nav-link"+(this.props.ques?" active":""),"aria-current":"page",to:"/dsa-450-tracker",isLoggedin:this.props.loggedIn,children:"Ques"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(u.b,{className:"nav-link"+(this.props.performance?" active":""),"aria-current":"page",to:"/dsa-450-tracker/profile",isLoggedin:this.props.loggedIn,children:"Performance"})})]}),Object(h.jsx)("ul",{className:"navbar-nav fw-600 f-12",children:Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("div",{className:"nav-link pr-0","aria-current":"page",to:"/dsa-450-tracker/signin",isLoggedin:this.props.loggedIn,onClick:function(t){return e.logout(t)},children:"Logout"})})})]}):this.props.signUp?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{className:"navbar-nav ms-auto",children:Object(h.jsx)("li",{className:"nav-item bg-orange pr-36 pl-36 br-5",children:Object(h.jsx)(u.b,{className:"nav-link white","aria-current":"page",to:"/dsa-450-tracker/signup",isLoggedin:this.props.loggedIn,children:"Sign Up"})})})}):Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{className:"navbar-nav ms-auto",children:Object(h.jsx)("li",{className:"nav-item bg-orange pr-36 pl-36 br-5",children:Object(h.jsx)(u.b,{className:"nav-link white","aria-current":"page",to:"/dsa-450-tracker/signin",isLoggedin:this.props.loggedIn,children:"Sign In"})})})})," "]})]})})})}}]),a}(s.Component),m=Object(j.f)(b),g=a(41);function f(e){var t=Object(s.useState)(!1),a=Object(g.a)(t,2),i=a[0],c=a[1];return Object(h.jsxs)(h.Fragment,{children:[" ",Object(h.jsxs)("span",{onClick:function(t){return function(t){c(!i),e.filterData(t,!i)}(t)},level_id:e.level_id,topic_id:e.topic_id,status_id:e.status_id,className:"filter"+(i?" selected":""),children:[" ",e.filter]})]})}var v=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={difficulty_levels:[{id:0,name:"Easy"},{id:1,name:"Medium"},{id:2,name:"Hard"}],status:[{id:2,name:"Done"},{id:1,name:"Revise"},{id:0,name:"To-Do"},{id:"null",name:"Unattempted"}]},s}return Object(l.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.filter_update}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"bg-secondary-black gray p-16 br-5 mb-32",children:[Object(h.jsx)("div",{className:"filter-heading mb-8 f-16 fw-500 secondary-gray",children:"Topics"}),Object(h.jsxs)("div",{className:"filters f-12",children:[this.props.topics.map((function(t,a){return Object(h.jsx)(f,{topic_id:t.id,filter:t.name,filterData:e.props.filterData},t.id)}))," "]}),Object(h.jsx)("div",{className:"filter-heading mt-4 mb-8 f-16 fw-500 secondary-gray",children:"Difficulty"}),Object(h.jsxs)("div",{className:"filters f-12",children:[this.state.difficulty_levels.map((function(t,a){return Object(h.jsx)(f,{level_id:t.id,filter:t.name,filterData:e.props.filterData},t.id)}))," "]}),Object(h.jsx)("div",{className:"filter-heading mt-4 mb-8 f-16 fw-500 secondary-gray",children:"Status"}),Object(h.jsxs)("div",{className:"filters f-12",children:[this.state.status.map((function(t,a){return Object(h.jsx)(f,{status_id:t.id,filter:t.name,filterData:e.props.filterData},t.id)}))," "]})]})}}]),a}(s.Component);function O(e){var t=e.question_data,a=2===t.level?"Hard":1===t.level?"Medium":"Easy";return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"question-box",children:[Object(h.jsxs)("div",{className:"question",children:[Object(h.jsxs)("span",{className:"gray",children:[t.id,"."]})," ",Object(h.jsx)("a",{className:"question-link",href:t.link,target:"blank",children:t.name})]}),Object(h.jsxs)("div",{className:"mb-16",children:[Object(h.jsx)("span",{className:"filter f-12",style:{cursor:"default"},children:a}),Object(h.jsx)("span",{className:"filter f-12",style:{cursor:"default"},children:t.topic_name})]}),Object(h.jsx)("div",{className:"footer pt-8",children:Object(h.jsxs)("div",{className:"status white",children:[Object(h.jsxs)("label",{className:"r-radio-label",children:["Done",Object(h.jsx)("input",{type:"radio",name:t.id,id:"",status:2,defaultChecked:2===t.mark,onClick:function(t){return e.status_update(t)}}),Object(h.jsx)("span",{className:"r-radio"})]}),Object(h.jsxs)("label",{className:"r-radio-label",children:["Need to Revise",Object(h.jsx)("input",{type:"radio",name:t.id,id:"",status:1,defaultChecked:1===t.mark,onClick:function(t){return e.status_update(t)}}),Object(h.jsx)("span",{className:"r-radio"})]}),Object(h.jsxs)("label",{className:"r-radio-label",children:["To-Do",Object(h.jsx)("input",{type:"radio",name:t.id,id:"",status:0,defaultChecked:0===t.mark,onClick:function(t){return e.status_update(t)}}),Object(h.jsx)("span",{className:"r-radio"})]}),Object(h.jsxs)("div",{className:"friends-stats gray float-end",children:[t.friends," of your friends have already solved the ques"]})]})})]})})}var x=i.a.memo(O,(function(e,t){return!t.questions_update})),N=a(27),k=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.question_chart_update}},{key:"render",value:function(){return Object(h.jsxs)("div",{onLoad:window.loadQuestionSolved,className:"bg-secondary-black gray p-16 br-5",children:[Object(h.jsx)("div",{className:"filter-heading f-16 fw-500 secondary-gray mb-16",children:"Questions"}),Object(h.jsxs)("div",{className:"row align-items-center",children:[Object(h.jsx)("div",{className:"col-6",children:Object(h.jsxs)("div",{className:"questions-pie f-12 position-relative",children:[Object(h.jsx)(N.b,{data:{datasets:[{label:"My First Dataset",data:this.props.chartData,backgroundColor:["rgba(82, 196, 26, 1)","rgba(245, 132, 70, 1)","rgba(245, 34, 45, 1)","rgba(245, 34, 45, 0)"],hoverOffset:4}]},options:{cutout:"85%",offset:5,borderWidth:0,plugins:{legend:{display:!1}},radius:"98%"}}),Object(h.jsxs)("div",{className:"number gray text-center",children:[Object(h.jsx)("div",{className:"f-32",style:{borderBottom:"1px solid #565656"},children:this.props.count}),Object(h.jsx)("div",{className:"f-16",children:"450"})]})]})}),this.props.flag?Object(h.jsxs)("div",{className:"col-6 legend pl-16",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"green float-start",children:"Easy"}),Object(h.jsx)("span",{className:"value ms-auto float-end",children:this.props.chartData[0]})]}),Object(h.jsx)("div",{className:"clearfix"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"orange float-start",children:"Medium"}),Object(h.jsx)("span",{className:"value ms-auto float-end",children:this.props.chartData[1]})]}),Object(h.jsx)("div",{className:"clearfix"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"red float-start",children:"Hard"}),Object(h.jsx)("span",{className:"value ms-auto float-end",children:this.props.chartData[2]})]}),Object(h.jsx)("div",{className:"clearfix"})]}):Object(h.jsxs)("div",{className:"col-6 legend pl-16",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"green float-start",children:"Done"}),Object(h.jsx)("span",{className:"value ms-auto float-end",children:this.props.chartData[0]})]}),Object(h.jsx)("div",{className:"clearfix"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"orange float-start",children:"Revise"}),Object(h.jsx)("span",{className:"value ms-auto float-end",children:this.props.chartData[1]})]}),Object(h.jsx)("div",{className:"clearfix"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"red float-start",children:"Pending"}),Object(h.jsx)("span",{className:"value ms-auto float-end",children:this.props.chartData[2]})]}),Object(h.jsx)("div",{className:"clearfix"})]})]})]})}}]),a}(s.Component),y=a(97),_=a.n(y),C=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).search=function(e){var t=s.state.filters.search,a={};a.search=t,console.log(e.target.parentNode.firstChild.value),a.search.name=e.target.parentNode.firstChild.value;var i=s.props.apiCall(a,"post","https://dsa-tracker-450.herokuapp.com/api/filter/general/"+s.state.activePage);console.log(i),i.then((function(e){var t=s.state.api;t.apiData.data.questions_data=e.data,s.setState({api:t,child_conditions:{question_chart_update:!1,filter_update:!1,questions_update:!0}})})).catch((function(e){s.setState({api:{success:!1,apiError:e}})}))},s.filter_data=function(){var e=s.state.filters.topic,t=s.state.filters.level,a=s.state.filters.status,i={};0!==e.size&&(i.topic_id=Object(p.a)(e)),0!==t.size&&(i.level=Object(p.a)(t)),0!==a.size&&(i.mark=Object(p.a)(a));var c=s.props.apiCall(i,"post","https://dsa-tracker-450.herokuapp.com/api/filter/general/"+s.state.activePage);console.log(c),c.then((function(e){var t=s.state.api;t.apiData.data.questions_data=e.data,s.setState({api:t,child_conditions:{question_chart_update:!1,filter_update:!1,questions_update:!0}})})).catch((function(e){s.setState({api:{success:!1,apiError:e}})}))},s.filter=function(e,t){var a=s.state.filters,i=e.currentTarget.getAttribute("topic_id"),c=e.currentTarget.getAttribute("level_id"),r=e.currentTarget.getAttribute("status_id");t?(i&&a.topic.add(i),c&&a.level.add(c),r&&a.status.add(r)):(i&&a.topic.delete(i),c&&a.level.delete(c),r&&a.status.delete(r)),s.setState({filters:a,activePage:1},(function(){s.filter_data()}))},s.status_update=function(e){var t={question_id:e.currentTarget.getAttribute("name"),mark:e.currentTarget.getAttribute("status")};s.props.apiCall(t,"post","https://dsa-tracker-450.herokuapp.com/api/test_question_user_mark_public").then((function(e){s.props.apiCall({},"get","https://dsa-tracker-450.herokuapp.com/api/questions_solved").then((function(e){var t=s.state.api;t.apiData.data.questions_solved=e.data.questions_solved,s.setState({api:t,child_conditions:{question_chart_update:!0,filter_update:!1,questions_update:!1}})})).catch((function(e){s.setState({api:{success:!1,apiError:e}})}))}))},s.state={url:"https://dsa-tracker-450.herokuapp.com/api/pages/index",api:{success:!1},child_conditions:{question_chart_update:!1,filter_update:!1,questions_update:!1},filters:{topic:new Set,level:new Set,status:new Set,search:{name:"array"}},activePage:1},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=JSON.stringify({});this.props.apiCall(t,"get",this.state.url).then((function(t){e.setState({api:{success:!0,apiData:t}})})).catch((function(t){e.setState({api:{success:!1,apiError:t}})}))}},{key:"handlePageChange",value:function(e){var t=this;this.setState({activePage:e},(function(){t.filter_data()}))}},{key:"render",value:function(){var e=this;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m,{apiCall:this.props.apiCall,loggedIn:!0,ques:!0}),Object(h.jsxs)("div",{className:"container pt-32 pr-16 pl-16",style:{minHeight:"100vh"},children:[Object(h.jsxs)("div",{className:"row pb-32",children:[Object(h.jsx)("div",{className:"col-6 gray br-5 pl-0",children:Object(h.jsx)("div",{className:"row r-tabs text-center",children:this.state.api.success?Object(h.jsx)(_.a,{activePage:this.state.activePage,itemsCountPerPage:10,totalItemsCount:this.state.api.apiData.data.questions_data.total_length,pageRangeDisplayed:5,itemClass:"page-item",linkClass:"page-link",onChange:this.handlePageChange.bind(this)}):""})}),Object(h.jsx)("div",{className:"col-3"}),Object(h.jsxs)("div",{className:"col-3",style:{padding:0},children:[Object(h.jsx)("input",{className:"bg-secondary-black gray search-bar pl-8",placeholder:"search question"}),Object(h.jsx)("button",{className:"text-start bg-orange white search-bar",type:"submit",onClick:function(t){return e.search(t)},children:"search"})]})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-3 pl-0 pr-16",children:this.state.api.success?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"mb-32",children:Object(h.jsx)(k,{chartData:this.state.api.apiData.data.questions_solved.difficulty_levels,count:this.state.api.apiData.data.questions_solved.count,question_chart_update:this.state.child_conditions.question_chart_update,flag:!0})}),Object(h.jsx)(v,{topics:this.state.api.apiData.data.topics,filterData:this.filter,filter_update:this.state.child_conditions.filter_update})]}):""}),Object(h.jsx)("div",{className:"col-9 pl-16 pr-0",children:this.state.api.success?this.state.api.apiData.data.questions_data.questions.map((function(t){return Object(h.jsx)(x,{question_data:t,status_update:e.status_update,questions_update:e.state.child_conditions.questions_update},t.id)})):""})]})]})]})}}]),a}(s.Component),w=Object(j.f)(C);function D(e){return Object(h.jsxs)("div",{className:"mb-40",children:[Object(h.jsx)("div",{className:"f-48 fw-800 mb-20",children:e.primary}),Object(h.jsx)("div",{className:"gray f-24",children:e.secondary})]})}var q=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).handle=function(e){var t=s.state.data;t[e.target.id]=e.target.value,console.log(t),s.setState({data:t})},s.state={url:"https://dsa-tracker-450.herokuapp.com/api/login",data:{username:"",password:""}},s}return Object(l.a)(a,[{key:"submit",value:function(e){e.preventDefault();var t=JSON.stringify({username:this.state.data.username,password:this.state.data.password});this.props.saveToken(t,"post",this.state.url)}},{key:"render",value:function(){var e=this;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m,{apiCall:this.props.apiCall,signUp:!0}),Object(h.jsxs)("div",{className:"mx-auto text-center white pt-100 w-65",children:[Object(h.jsx)(D,{primary:"Login To Your Account",secondary:"Hang tight. We're almost there..."}),Object(h.jsx)("div",{className:"row align-items-center text-start mb-60",children:Object(h.jsx)("div",{className:"col-4 offset-4",children:Object(h.jsx)("form",{onSubmit:function(t){return e.submit(t)},children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("input",{onChange:function(t){return e.handle(t)},id:"username",value:this.state.data.username,type:"text",className:"form-control bg-secondary-black white mb-24 pl-16 pr-16 pt-16 pb-16",placeholder:"username"}),Object(h.jsx)("input",{onChange:function(t){return e.handle(t)},id:"password",value:this.state.data.password,type:"password",className:"form-control bg-secondary-black white mb-24 pl-16 pr-16 pt-16 pb-16",placeholder:"Password"}),Object(h.jsx)("input",{id:"submit",type:"submit",className:"text-start bg-orange white pl-16 pr-16 pt-16 pb-16 br-5 w-100",value:"Login in to your account ->"})]})})})}),Object(h.jsx)("div",{className:"text-center",children:Object(h.jsx)("img",{width:"700",src:"./images/bg-abstract.jpg",alt:""})})]})]})}}]),a}(s.Component),S=Object(j.f)(q),T=a(7),F=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).handle=function(e){var t=s.state.data;t[e.target.id]=e.target.value,console.log(t),s.setState({data:t})},s.state={url:"https://dsa-tracker-450.herokuapp.com/api/register",data:{username:"",email:"",name:"",password:""}},s}return Object(l.a)(a,[{key:"submit",value:function(e){e.preventDefault();var t=JSON.stringify({username:this.state.data.username,email:this.state.data.email,name:this.state.data.name,password:this.state.data.password});this.props.saveToken(t,"post",this.state.url)}},{key:"render",value:function(){var e,t,a,s,i=this;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m,{apiCall:this.props.apiCall,signUp:!1}),Object(h.jsxs)("div",{className:"mx-auto text-center white pt-100 w-65",children:[Object(h.jsx)(D,{primary:"Sign Up and Stay Connected",secondary:"Hang tight. We're almost there..."}),Object(h.jsx)("form",{onSubmit:function(e){return i.submit(e)},children:Object(h.jsxs)("div",{className:"row align-items-center text-start mb-60",children:[Object(h.jsx)("div",{className:"col-4",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("input",(e={type:"text",onChange:function(e){return i.handle(e)},id:"username",className:"form-control bg-secondary-black white mb-24 pl-16 pr-16 pt-16 pb-16"},Object(T.a)(e,"id","username"),Object(T.a)(e,"placeholder","Username"),e)),Object(h.jsx)("input",(t={type:"text",onChange:function(e){return i.handle(e)},id:"name",className:"form-control bg-secondary-black white mb-24 pl-16 pr-16 pt-16 pb-16"},Object(T.a)(t,"id","name"),Object(T.a)(t,"placeholder","Name"),t))]})}),Object(h.jsx)("div",{className:"col-4 text-center f-48 gray"}),Object(h.jsx)("div",{className:"col-4",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("input",(a={type:"email",onChange:function(e){return i.handle(e)},id:"email",className:"form-control bg-secondary-black white mb-24 pl-16 pr-16 pt-16 pb-16"},Object(T.a)(a,"id","email"),Object(T.a)(a,"placeholder","Email"),a)),Object(h.jsx)("input",(s={type:"password",onChange:function(e){return i.handle(e)},id:"password",className:"form-control bg-secondary-black white mb-24 pl-16 pr-16 pt-16 pb-16"},Object(T.a)(s,"id","password"),Object(T.a)(s,"placeholder","Password"),s))]})}),Object(h.jsx)("div",{className:"col-4 offset-4",children:Object(h.jsx)("input",{type:"submit",className:"text-start bg-orange white pl-16 pr-16 pt-16 pb-16 br-5 w-100",value:"Create Account"})})]})}),Object(h.jsx)("div",{className:"text-center",children:Object(h.jsx)("img",{width:"700",src:"./images/bg-abstract.jpg",alt:""})})]})]})}}]),a}(s.Component),P=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return console.log(e.bar_chart_update),e.bar_chart_update}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"p-16 pt-32 bg-secondary-black br-5",children:Object(h.jsx)(N.a,{data:{labels:this.props.labels,datasets:[{data:this.props.values,backgroundColor:["rgba(245,132,70,0.5)","rgba(245,132,70,0.5)","rgba(245,132,70,0.5)","rgba(245,132,70,0.5)","rgba(245,132,70,0.5)","rgba(245,132,70,0.5)"],borderColor:["rgba(245,132,70,1)","rgba(245,132,70,1)","rgba(245,132,70,1)","rgba(245,132,70,1)","rgba(245,132,70,1)","rgba(245,132,70,1)"],borderWidth:1}]},options:{plugins:{legend:!1},scales:{xAxis:{grid:{color:"#1D1C1F"}},yAxis:{suggestedMax:10,grid:{color:"#1D1C1F"}}}}})})}}]),a}(s.Component),L=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={chartData:{}},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsx)(N.c,{data:{labels:["Mon","Tue","Thu","Fri","Sat","Sun"],datasets:[{backgroundColor:"rgba(245,132,70,0.5)",borderColor:"rgba(245,132,70,1)",borderWidth:1,data:this.props.chartData}]},options:{plugins:{legend:!1},scales:{r:{suggestedMin:0,grid:{color:"#565656"},pointLabels:{color:"#565656"},ticks:{beginAtZero:!0,color:"#565656",backdropColor:"rgba(0,0,0,0)"}}}}})}}]),a}(s.Component),A=a(98),I=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).convert=function(e){var t=e,a=("0"+(t.getMonth()+1)).slice(-2),s=("0"+t.getDate()).slice(-2);return[t.getFullYear(),a,s].join("-")},s.callDay=function(e){console.log(e),console.log(s.convert(e));var t={day:s.convert(e)};s.props.apiCall(t,"post",s.state.url).then((function(e){s.setState({api:{success:!0,apiData:e}})})).catch((function(e){s.setState({api:{success:!1,apiError:e}})}))},s.state={url:"https://dsa-tracker-450.herokuapp.com/api/pages/profile",api:{success:!1},child_conditions:{question_chart_update:!1,bar_chart_update:!1}},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.apiCall({day:null},"post",this.state.url).then((function(t){e.setState({api:{success:!0,apiData:t}})})).catch((function(t){e.setState({api:{success:!1,apiError:t}})}))}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m,{apiCall:this.props.apiCall,loggedIn:!0,performance:!0}),Object(h.jsx)("div",{className:"container pt-32 pr-16 pl-16",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-9 pl-0 pr-16 h-100",children:[Object(h.jsxs)("div",{className:"row mb-32",children:[Object(h.jsx)("div",{className:"col-4 pl-16 pr-16",children:this.state.api.success?Object(h.jsx)(k,{chartData:this.state.api.apiData.data.questions_solved.difficulty_levels,count:this.state.api.apiData.data.questions_solved.count,question_chart_update:this.state.child_conditions.question_chart_update,flag:!0}):""}),Object(h.jsx)("div",{className:"col-4 pl-16",children:this.state.api.success?Object(h.jsx)(k,{chartData:this.state.api.apiData.data.question_marked.marks,count:this.state.api.apiData.data.question_marked.count,question_chart_update:this.state.child_conditions.question_chart_update,flag:!1}):""})]}),this.state.api.success?Object(h.jsx)(P,{values:this.state.api.apiData.data.topic_wise_freq.values,bar_chart_update:this.state.child_conditions.bar_chart_update,labels:this.state.api.apiData.data.topic_wise_freq.labels}):""]}),Object(h.jsxs)("div",{className:"col-3 pl-16 pr-0",children:[Object(h.jsxs)("div",{className:"bg-secondary-black gray p-16 br-5 mb-32",children:[Object(h.jsx)("div",{className:"filter-heading mb-8 f-16 fw-500 secondary-gray",children:"Weekly Report"}),this.state.api.success?Object(h.jsx)(L,{chartData:this.state.api.apiData.data.week_data}):""]}),Object(h.jsx)("div",{className:"bg-secondary-black gray p-16 br-5 mb-32",children:Object(h.jsx)(A.a,{onClickDay:this.callDay,showNeighboringMonth:!1})})]})]})})]})}}]),a}(s.Component),M=a(42),E=a(61),U=a.n(E),H=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).saveToken=function(e,t,a){var i=new M.a,c={method:t,url:a,headers:{"Content-Type":"application/json"},data:e};U()(c).then((function(e){i.set("token",e.data.token,{path:"/",secure:!0,sameSite:"strict"}),s.setState({isLoggedin:!0},(function(){s.props.history.push("/dsa-450-tracker")}))})).catch((function(e){var t="";for(var a in e.response.data)t+=e.response.data[a]+"\n";alert(t)}))},s.apiCall=function(e,t,a){var s={method:t,url:a,headers:{"Content-Type":"application/json",Authorization:"Token "+(new M.a).get("token")},data:e};return U()(s)},s.state={api:{},isLoggedin:!1},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{exact:!0,path:"/dsa-450-tracker/signin",children:Object(h.jsx)(S,{saveToken:this.saveToken})}),Object(h.jsx)(j.a,{exact:!0,path:"/dsa-450-tracker/signup",children:Object(h.jsx)(F,{saveToken:this.saveToken})}),Object(h.jsx)(j.a,{exact:!0,path:"/dsa-450-tracker/profile",children:this.state.isLoggedin?Object(h.jsx)(I,{apiCall:this.apiCall}):Object(h.jsx)(S,{saveToken:this.saveToken})}),Object(h.jsx)(j.a,{exact:!0,path:"/dsa-450-tracker",children:this.state.isLoggedin?Object(h.jsx)(w,{apiCall:this.apiCall}):Object(h.jsx)(S,{saveToken:this.saveToken})})]})}}]),a}(s.Component),W=Object(j.f)(H),J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,241)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),i(e),c(e),r(e)}))};r.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(u.a,{children:Object(h.jsx)(W,{})})}),document.getElementById("root")),J()}},[[240,1,2]]]);
//# sourceMappingURL=main.3c807092.chunk.js.map