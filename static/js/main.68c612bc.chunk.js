(this.webpackJsonpacceldata_task=this.webpackJsonpacceldata_task||[]).push([[0],{12:function(e,t,a){},19:function(e,t,a){e.exports=a.p+"static/media/heading.9686fd5a.png"},22:function(e,t,a){e.exports=a(33)},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),c=a.n(r),s=(a(27),a(6)),m=a(7),o=a(9),i=a(8),u=a(20),d=a(1),h=(a(12),a(19)),g=a.n(h),E=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).ChangeTheme=function(){"cartoon"===n.state.theme?n.setState({theme:"real"}):n.setState({theme:"cartoon"})},n.state={theme:"real"},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"ChangeThemeButton",onClick:this.ChangeTheme},"Change theme"),l.a.createElement("img",{className:"welcome",src:g.a,alt:"The Burger Bank"}),"cartoon"===this.state.theme?l.a.createElement("div",null,l.a.createElement("div",{className:"burger_background1"}),l.a.createElement("div",{className:"UIbutton1 buy",onClick:function(e){return window.location.href="/TheBurgerBank/#/buy/"}},l.a.createElement("span",null,"Grab a Burger")),l.a.createElement("div",{className:"UIbutton1 past_orders",onClick:function(e){return window.location.href="/TheBurgerBank/#/pastOrders/"}},l.a.createElement("span",null,"Past Orders"))):l.a.createElement("div",null,l.a.createElement("div",{className:"burger_background2"}),l.a.createElement("div",{className:"UIbutton2 buy2",onClick:function(e){return window.location.href="/TheBurgerBank/#/buy/"}},l.a.createElement("span",null,"Grab a Burger")),l.a.createElement("div",{className:"UIbutton2 past_orders2",onClick:function(e){return window.location.href="/TheBurgerBank/#/pastOrders/"}},l.a.createElement("span",null,"Past Orders"))))}}]),a}(l.a.Component),p=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).SubmitName=function(){n.setState({name:n.state.nameChange,nameChange:""})},n.nameChange=function(e){n.setState({nameChange:e.target.value})},n.SaladToggle=function(){n.setState({salad:!n.state.salad})},n.CheeseSliceChange=function(e){n.setState({cheeseSlices:e.target.value})},n.CutletChange=function(e){n.setState({cutlets:e.target.value})},n.AddOrder=function(){if(n.state.name){var e=JSON.parse(localStorage.getItem("name"));e.push(n.state.name);var t=JSON.parse(localStorage.getItem("salad"));t.push("".concat(n.state.salad));var a=JSON.parse(localStorage.getItem("cheese"));a.push("".concat(n.state.cheeseSlices));var l=JSON.parse(localStorage.getItem("cutlets"));l.push("".concat(n.state.cutlets)),localStorage.setItem("name",JSON.stringify(e)),localStorage.setItem("salad",JSON.stringify(t)),localStorage.setItem("cheese",JSON.stringify(a)),localStorage.setItem("cutlets",JSON.stringify(l)),window.location.href="/TheBurgerBank/#/"}else alert("Please enter your name to place the order.")},n.state={name:null,nameChange:"",salad:!0,cheeseSlices:0,cutlets:1},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"OrderBackground"},l.a.createElement("div",{className:"Order_back_image"}),l.a.createElement("div",{className:"BackToHome",onClick:function(e){return window.location.href="/TheBurgerBank/#/"}},"Home"),this.state.name?l.a.createElement("div",{className:"EnteredName"},"Welcome, ",this.state.name,"."):l.a.createElement("div",{className:"EnterName"},"Please enter your name:",l.a.createElement("input",{className:"EnterNameArea",type:"text",placeholder:"Full Name",value:this.state.name,onChange:function(t){return e.nameChange(t)}}),l.a.createElement("input",{className:"NameSubmit",type:"submit",value:"Submit",onClick:this.SubmitName})),l.a.createElement("div",{className:"Instruction"},"Here is the cost of the ingredients. Please specify the quantity of ingredients wherever necessary."),l.a.createElement("h1",{id:"title"},"Invoice details"),l.a.createElement("table",{id:"ingredients"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Ingredients"),l.a.createElement("td",null,"Quantity"),l.a.createElement("td",null,"Price per piece"),l.a.createElement("td",null,"Amount")),l.a.createElement("tr",null,l.a.createElement("td",null,"Bun"),l.a.createElement("td",null,"2"),l.a.createElement("td",null,"Rs. 5"),l.a.createElement("td",{style:{fontWeight:800}},"Rs. 10")),l.a.createElement("tr",null,l.a.createElement("td",null,"Salad"),l.a.createElement("td",null,l.a.createElement("input",{className:"Check",type:"checkbox",checked:this.state.salad,onClick:this.SaladToggle})),l.a.createElement("td",null,"Rs. 5"),l.a.createElement("td",{style:{fontWeight:800}},"Rs. ",this.state.salad?"5":"0")),l.a.createElement("tr",null,l.a.createElement("td",null,"Cheese Slices"),l.a.createElement("td",null,l.a.createElement("input",{className:"NumberSpecify",type:"number",placeholder:"0",onChange:function(t){return e.CheeseSliceChange(t)}})),l.a.createElement("td",null,"Rs. 1"),l.a.createElement("td",{style:{fontWeight:800}},"Rs. ",this.state.cheeseSlices)),l.a.createElement("tr",{style:{borderBottom:"7px solid #000"}},l.a.createElement("td",null,"Cutlets"),l.a.createElement("td",null,l.a.createElement("input",{className:"NumberSpecify",type:"number",placeholder:"1",onChange:function(t){return e.CutletChange(t)}})),l.a.createElement("td",null,"Rs. 2"),l.a.createElement("td",{style:{fontWeight:800}},"Rs. ",2*this.state.cutlets)),l.a.createElement("tr",{style:{borderBottom:"7px solid #000"}},l.a.createElement("td",{className:"TotalAmount",style:{textAlign:"right"},colSpan:"3"},"Total Amount:"," "),l.a.createElement("td",{className:"TotalAmount",style:{fontWeight:800}},"Rs."," ",10+Number(this.state.salad?5:0)+Number(this.state.cheeseSlices)+Number(2*this.state.cutlets))))),l.a.createElement("div",{className:"PlaceOrder",onClick:this.AddOrder},"Place Order"))}}]),a}(l.a.Component),N=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).ToggleSearch=function(){0===n.state.SearchName?(console.log("Hello"),n.setState({SearchName:1})):n.setState({SearchName:0})},n.SubmitName=function(){n.setState({name:n.state.nameChange,nameChange:""})},n.nameChange=function(e){n.setState({nameChange:e.target.value})},n.viewPastOrders=function(){for(var e=JSON.parse(localStorage.getItem("name")),t=JSON.parse(localStorage.getItem("salad")),a=JSON.parse(localStorage.getItem("cheese")),n=JSON.parse(localStorage.getItem("cutlets")),r=[],c=0,s=0,m=0;m<e.length;m++)c=10+Number(t[m]?5:0)+Number(a[m])+Number(2*n[m]),r.push(l.a.createElement("tr",null,l.a.createElement("td",null,e[m]),l.a.createElement("td",null,"true"===t[m]?"Yes":"No"),l.a.createElement("td",null,a[m]),l.a.createElement("td",null,n[m]),l.a.createElement("td",{style:{fontWeight:800}},c))),s+=c;return r.push(l.a.createElement("tr",{style:{borderBottom:"7px solid #000",borderTop:"7px solid #000"}},l.a.createElement("td",{className:"TotalAmount",style:{textAlign:"right"},colSpan:"4"},"Total earnings:"," "),l.a.createElement("td",{className:"TotalAmount",style:{fontWeight:800}},s))),r},n.viewPastOrdersOfName=function(){for(var e=JSON.parse(localStorage.getItem("name")),t=JSON.parse(localStorage.getItem("salad")),a=JSON.parse(localStorage.getItem("cheese")),r=JSON.parse(localStorage.getItem("cutlets")),c=[],s=0,m=0,o=0,i=0;i<e.length;i++)n.state.name===e[i]&&(o=1,s=10+Number(t[i]?5:0)+Number(a[i])+Number(2*r[i]),c.push(l.a.createElement("tr",null,l.a.createElement("td",null,e[i]),l.a.createElement("td",null,"true"===t[i]?"Yes":"No"),l.a.createElement("td",null,a[i]),l.a.createElement("td",null,r[i]),l.a.createElement("td",{style:{fontWeight:800}},s))),m+=s);return c.push(l.a.createElement("tr",{style:{borderBottom:"7px solid #fff",borderTop:"7px solid #fff"}},l.a.createElement("td",{className:"TotalAmount",style:{textAlign:"right"},colSpan:"4"},"Total earnings:"," "),l.a.createElement("td",{className:"TotalAmount",style:{fontWeight:800}},m))),0===o?[l.a.createElement("td",{className:"NoResult",colSpan:"5"},"No results found.")]:c},n.setNametoNull=function(){n.setState({name:null})},n.state={name:null,nameChange:"",SearchName:0,NameDiv:"HiddenDiv"},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"OrderBackground Past"},l.a.createElement("div",{className:"Order_back_image2"}),l.a.createElement("div",{className:"BackToHome",style:{textAlign:"center"},onClick:function(e){return window.location.href="/TheBurgerBank/#/"}},"Home"),l.a.createElement("div",{className:"ListHeading"},"List of past orders"),l.a.createElement("div",{style:{postion:"absolute",width:"60%",marginLeft:"20%",height:"6px",backgroundColor:"black",borderRadius:"3px",marginTop:"10px"}}),l.a.createElement("div",{className:"Display"},l.a.createElement("table",{id:"ingredients1"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Name"),l.a.createElement("td",null,"Salad"),l.a.createElement("td",null,"Cheese Slices"),l.a.createElement("td",null,"Cutlets"),l.a.createElement("td",null,"Amount (in Rs.)")),this.viewPastOrders()))),l.a.createElement("div",{className:"Search",onClick:this.ToggleSearch},"Search by person name"),1===this.state.SearchName?l.a.createElement("div",{className:"EnterName",style:{paddingTop:"20px",paddingBottom:"30px"}},"Enter the name:",l.a.createElement("input",{className:"EnterNameArea",type:"text",placeholder:"Full Name",onChange:function(t){return e.nameChange(t)}}),l.a.createElement("input",{className:"NameSubmit",type:"submit",value:"Submit",onClick:this.SubmitName})):l.a.createElement("div",null),this.state.name?l.a.createElement("div",{className:"SearchByName"},l.a.createElement("div",{className:"EnteredName",style:{fontSize:"40px",paddingTop:"10px"}},this.state.name),l.a.createElement("div",{className:"Display2"},l.a.createElement("table",{id:"ingredients2"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Name"),l.a.createElement("td",null,"Salad"),l.a.createElement("td",null,"Cheese Slices"),l.a.createElement("td",null,"Cutlets"),l.a.createElement("td",null,"Amount (in Rs.)")),this.viewPastOrdersOfName()))),l.a.createElement("div",{className:"NoResult",style:{userSelect:"none"},onClick:this.setNametoNull},l.a.createElement("span",null,"Close"))):l.a.createElement("div",null))}}]),a}(l.a.Component),S=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/"},l.a.createElement(E,null)),l.a.createElement(d.a,{path:"/buy/"},l.a.createElement(p,null)),l.a.createElement(d.a,{path:"/pastOrders/"},l.a.createElement(N,null))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.68c612bc.chunk.js.map