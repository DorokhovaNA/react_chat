(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(28),r=a.n(s),i=a(29),o=a(60),l=a(6),u=a(25),j=a(48),d=Object(o.b)({name:"chat",isAuth:!1,initialState:{messageArray:{2:[{lastUpdate:(new Date).toLocaleString(),userId:1,author:"Diana",messageText:"Hi",isRead:!0},{lastUpdate:(new Date).toLocaleString(),userId:3,author:"Tom",messageText:"How are U?",isRead:!1}],3:[{lastUpdate:(new Date).toLocaleString(),userId:2,author:"Jack",messageText:"Have you made your notes yet?",isRead:!0},{lastUpdate:(new Date).toLocaleString(),userId:1,author:"Diana",messageText:"Yes, I have",isRead:!1},{lastUpdate:(new Date).toLocaleString(),userId:1,author:"Diana",messageText:"What you doing?",isRead:!1}]},users:[{id:2,name:"\u0411\u043e\u043b\u0442\u0430\u043b\u043a\u0430"},{id:3,name:"FAQ"}],myId:1},reducers:{addMessage:function(e,t){var a=t.payload,n=a.chatId,c=a.messageText,s=a.userId;e.messageArray=Object(j.a)(Object(j.a)({},e.messageArray),{},Object(l.a)({},n,[].concat(Object(u.a)(e.messageArray[n]),[{text:c,lastUpdate:(new Date).toLocaleString(),isRead:!1,userId:s}])))},setMessages:function(e,t){var a=t.payload,n=a.chatId,c=a.messages;e.messageArray=Object(j.a)(Object(j.a)({},e.messageArray),{},Object(l.a)({},n,c))},incrementWithoutMessage:function(e){e.value+=1},incrementWithMessage:function(e,t){e.value+=1,e.lastMessageText=t.payload},changeIsAuth:function(e,t){e.isAuth=t.payload}}}),b=d.actions,h=(b.incrementWithMessage,b.incrementWithoutMessage,b.addMessage,b.changeIsAuth),p=b.setMessages,O=d.reducer,m=Object(o.b)({name:"user",initialState:{userName:[],userMail:[]},reducers:{yourName:function(e,t){e.userName.push(t.payload)},yourMail:function(e,t){e.userMail.push(t.payload)}}}),x=m.actions,f=x.yourName,g=x.yourMail,v=m.reducer,N=Object(o.b)({name:"weather",initialState:{loading:!1,error:!1,data:null},reducers:{setLoading:function(e,t){e.loading=t.payload},setError:function(e,t){e.error=t.payload},setData:function(e,t){e.data=t.payload}}}),y=N.actions,w=y.setLoading,k=y.setError,I=y.setData,A=(y.data,N.reducer),S=a(73),C=Object(o.a)({reducer:{chat:O,user:v,weather:A},middleware:[S.a]}),W=a(41),T=a(30),M=a(111),D=a(98),U=a(0),E=a.n(U),B=a(4),L=function(e){var t=[];return e.forEach((function(e){t.push(e.val())})),{chatId:e.key,messages:t}},R=function(e,t){return Object(B.a)(E.a.mark((function a(){return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:we.ref("messages").child(e).child(t.id).set(t);case 1:case"end":return a.stop()}}),a)})))},P=a(21),F=a(195),H=a(205),_=(a(94),a(8)),z=function(e){var t=e.onButtonClick,a=Object(n.useState)(""),c=Object(P.a)(a,2),s=c[0],r=c[1],i=function(){var e=s.trim();""!==e&&(t(e),r(""))};return Object(_.jsxs)("div",{className:"input__block",children:[Object(_.jsx)(H.a,{id:"standard-multiline-static",variant:"outlined",multiline:!0,fullWidth:!0,rows:3,value:s,onChange:function(e){return r(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&i()},className:"input__text",type:"text",placeholder:"\u0412\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),Object(_.jsx)("br",{}),Object(_.jsx)(F.a,{variant:"contained",onClick:i,type:"submit",className:"button",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})},J=function(e){var t=e.messageArray,a=Object(i.c)((function(e){return e.chat})).myId;return Object(_.jsx)("div",{className:"list",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(_.jsxs)("div",{className:"\n                  ".concat(e.userId===a?"userMessage":"senderMessage"," ","message"),children:[Object(_.jsx)("div",{className:"messageAuthor",children:e.userId===a?"Me":e.author}),Object(_.jsx)("hr",{}),Object(_.jsx)("div",{className:"messageText",children:e.messageText}),Object(_.jsx)("div",{className:"messageDate",children:e.lastUpdate})]},t)}))})};var K=function(){var e=Object(T.h)(),t=Number.parseInt(e.id),a=Object(i.c)((function(e){return e.chat.messageArray[t]})),c=Object(i.c)((function(e){return e.chat.myId})),s=Object(i.b)();return Object(n.useEffect)((function(){a.length>0&&setTimeout((function(){console.log("\u0412\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e!")}),2e3)}),[a]),Object(_.jsxs)("div",{className:"appWrapper",children:[Object(_.jsx)("div",{className:"appFlex",children:Object(_.jsx)(J,{messageArray:a})}),Object(_.jsx)(z,{onButtonClick:function(e){var n;s((n={chatId:t,messageText:e,userId:c},function(){var e=Object(B.a)(E.a.mark((function e(t,a){var c,s,r,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=a(),s=c.chat,r=n.chatId,i=s.messageArray[r]||[],t(R(r,Object(j.a)(Object(j.a)({},n),{},{id:"".concat(r,"-").concat((null===i||void 0===i?void 0:i.length)||0,"-").concat(Date.now())})));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())),console.log(a)}})]})},Y=a(196),q=a(200),Q=a(198),V=a(199),G=a(197),X=(a(144),function(){var e=c.a.useState(!1),t=Object(P.a)(e,2),a=t[0],n=t[1],s=Object(i.c)((function(e){return e.user})).userName,r=Object(i.c)((function(e){return e.user})).userMail,o=Object(i.b)(),l=function(){n(!1)};return Object(_.jsxs)("div",{className:"btnContainer",children:[Object(_.jsx)(F.a,{variant:"outlined",onClick:function(){n(!0)},children:"Open for log in"}),Object(_.jsxs)(Y.a,{open:a,onClose:l,"aria-labelledby":"form-dialog-title",children:[Object(_.jsx)(G.a,{id:"form-dialog-title",children:"Authorization"}),Object(_.jsxs)(Q.a,{children:[Object(_.jsx)(V.a,{children:"To authorize to this website, please enter your name and your email address here."}),Object(_.jsx)(H.a,{autoFocus:!0,id:"name",value:s,onChange:function(e){o(f(e.target.value||""))},label:"Name",type:"name"})," ",Object(_.jsx)("br",{}),Object(_.jsx)(H.a,{autoFocus:!0,id:"name",value:r,onChange:function(e){o(g(Number(e.target.value)||""))},label:"Email Address",type:"email"})]}),Object(_.jsxs)(q.a,{children:[Object(_.jsx)(F.a,{onClick:l,variant:"outlined",children:"Cancel"}),Object(_.jsx)(F.a,{onClick:l,variant:"outlined",children:"Continue"})]})]})]})}),Z=(a(145),function(){return Object(_.jsx)("div",{className:"homePage",children:Object(_.jsx)("h4",{className:"title",children:"\u041e\u0431\u0449\u0430\u0439\u0442\u0435\u0441\u044c \u0432 \u0441\u0432\u043e\u0435 \u0443\u0434\u043e\u0432\u043e\u043b\u044c\u0441\u0442\u0432\u0438\u0435!"})})}),$=a(201),ee=(a(146),function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.weather})),a=t.data,c=t.loading,s=t.error,r=Object(n.useCallback)((function(){return e(function(){var e=Object(B.a)(E.a.mark((function e(t,a){var n,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a().weather.loading){e.next=22;break}return e.prev=2,t(k(!1)),t(w(!0)),e.next=7,fetch("https://openweathermap.org/city/524305");case 7:if((n=e.sent).ok){e.next=10;break}throw new Error("Something went wrong");case 10:return e.next=12,n.json();case 12:c=e.sent,t(I(c)),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),t(k(!0));case 19:return e.prev=19,t(w(!1)),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[2,16,19,22]])})));return function(t,a){return e.apply(this,arguments)}}())}),[e]);return Object(n.useEffect)((function(){r()}),[r]),Object(_.jsxs)("div",{className:"weatherWrapper",children:[Object(_.jsxs)("div",{children:[c&&Object(_.jsx)($.a,{}),s&&Object(_.jsx)("div",{className:"errorTable",children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"}),!c&&!s&&a&&Object(_.jsxs)("div",{className:"forecastWrapper",children:[Object(_.jsx)("h5",{className:"forecastTitle",children:"Weather in Murmansk"}),Object(_.jsx)("div",{className:"forecastText",children:a.temperature}),Object(_.jsx)("div",{className:"forecastText",children:a.wind}),Object(_.jsx)("div",{className:"forecastText",children:a.description})]})]}),Object(_.jsx)(F.a,{variant:"contained",onClick:function(){return r()},type:"submit",disabled:c,children:"\u0423\u0437\u043d\u0430\u0439 \u043f\u043e\u0433\u043e\u0434\u0443"})]})}),te=a(76),ae=a(152),ne=(a(106),function(){var e=Object(n.useState)(""),t=Object(P.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(P.a)(s,2),o=r[0],l=r[1],u=Object(n.useState)(""),j=Object(P.a)(u,2),d=j[0],b=j[1],p=Object(i.b)(),O=Object(T.g)(),m=function(){var e=Object(B.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),b(""),e.prev=2,e.next=5,te.a.auth().signInWithEmailAndPassword(a,o);case 5:p(h(!0)),O.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),b(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsx)("div",{className:"root",children:Object(_.jsxs)(ae.a,{elevation:3,className:"loginWrapper",children:[Object(_.jsx)("div",{className:"loginHeading",children:Object(_.jsx)("h1",{className:"brandTitle",children:"\u0412\u0445\u043e\u0434"})}),Object(_.jsxs)("form",{onSubmit:m,className:"loginForm",children:[Object(_.jsx)("div",{className:"inputWrapper",children:Object(_.jsx)("input",{placeholder:"E-mail",name:"email",type:"email",onChange:function(e){c(e.target.value)},value:a,className:"input"})}),Object(_.jsx)("div",{className:"inputWrapper",children:Object(_.jsx)("input",{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",onChange:function(e){l(e.target.value)},value:o,type:"password",className:"input"})}),Object(_.jsxs)("div",{className:"buttonWrapper",children:[d&&Object(_.jsx)("p",{className:"error",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d!"}),Object(_.jsx)(F.a,{type:"submit",variant:"contained",children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(_.jsx)("p",{className:"signUp",children:Object(_.jsx)(W.b,{to:"/signup",className:"signUpLink",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442"})})]})]})})}),ce=function(){var e=Object(n.useState)(""),t=Object(P.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(P.a)(s,2),o=r[0],l=r[1],u=Object(n.useState)(""),j=Object(P.a)(u,2),d=j[0],b=j[1],p=Object(T.g)(),O=Object(i.b)(),m=te.a.apps[0],x=function(){var e=Object(B.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),b(""),e.prev=2,e.next=5,te.a.auth().createUserWithEmailAndPassword(a,o);case 5:O(h(!0)),p.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),b(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsx)("div",{className:"root",children:Object(_.jsxs)(ae.a,{elevation:3,className:"signupWrapper",children:[Object(_.jsx)("div",{className:"signUpHeading",children:Object(_.jsx)("h1",{className:"brandTitle",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(_.jsxs)("form",{onSubmit:x,className:"signUpForm",children:[Object(_.jsx)("div",{className:"inputWrapper",children:Object(_.jsx)("input",{placeholder:"E-mail",name:"email",type:"email",onChange:function(e){c(e.target.value)},value:a,className:"input"})}),Object(_.jsx)("div",{className:"inputWrapper",children:Object(_.jsx)("input",{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",onChange:function(e){l(e.target.value)},value:o,type:"password",className:"input"})}),Object(_.jsxs)("div",{className:"buttonWrapper",children:[d&&Object(_.jsx)("p",{className:"error",children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!"}),Object(_.jsx)(F.a,{type:"submit",variant:"contained",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]}),Object(_.jsx)("p",{className:"logIn",children:Object(_.jsx)(W.b,{to:"/login",className:"logInLink",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"})})]}),Object(_.jsx)("code",{children:Object(_.jsx)("pre",{children:JSON.stringify(m.options,null,2)})})]})})},se=a(119),re=a(202),ie=a(207),oe=a(204),le=a(203),ue=a(116),je=a.n(ue),de=a(117),be=a.n(de),he=a(118),pe=a(206),Oe=a(208),me=a(99),xe=function(e){var t=e.messageArray,a=e.user,n=Object(T.g)(),c=a.name,s=a.id,r=t.length>0?t[t.length-1]:{text:"",lastUpdate:null},i=t.reduce((function(e,t){return t.userId!==s||t.isRead||e++,e}),1);return Object(_.jsxs)(pe.a,{className:"chatBox",children:[Object(_.jsxs)(pe.a,{className:"chatWrapper",onClick:function(){return n.push("/chat/".concat(s))},children:[Object(_.jsx)(me.a,{variant:"subtitle2",children:c}),Object(_.jsx)(me.a,{variant:"caption",children:r.messageText})]}),Object(_.jsxs)(pe.a,{className:"chatInfo",children:[Object(_.jsx)(me.a,{variant:"caption",children:r.lastUpdate}),Object(_.jsx)("span",{children:i>0?Object(_.jsx)("span",{className:"countMsg",children:i}):""})]})]})},fe=(a(107),Object(re.a)((function(){return{input:{"& div":{borderRadius:"40px","& input":{padding:"10px 10px",width:"10vw"}}}}}))),ge=function(){var e=fe(),t=Object(i.c)((function(e){return e.chat})),a=t.users,c=t.messageArray,s=Object(n.useState)(null),r=Object(P.a)(s,2),o=r[0],l=r[1],u=Object(i.c)((function(e){return e.chat})).isAuth,j=Boolean(o),d=Object(T.g)();return Object(_.jsxs)(ie.a,{variant:"permanent",anchor:"left",children:[Object(_.jsx)("div",{}),Object(_.jsxs)(pe.a,{className:"searchBox",children:[Object(_.jsx)(le.a,{onClick:function(e){l(e.currentTarget)},children:Object(_.jsx)(je.a,{})}),Object(_.jsxs)(he.a,{id:"menu",anchorEl:o,keepMounted:!0,open:j,onClose:function(){l(null)},anchorOrigin:{horizontal:"left",vertical:"bottom"},anchorPosition:{top:50,left:25},anchorReference:"anchorPosition",children:[Object(_.jsx)(Oe.a,{className:"menuBurg",children:Object(_.jsx)(W.b,{to:"/",onClick:function(){return d.push("/")},className:"link",children:"Home"})},1),Object(_.jsx)(Oe.a,{children:Object(_.jsx)(W.b,{to:"/weather",onClick:function(){return d.push("/weather")},className:"link",children:"Weather"})},2),Object(_.jsx)(Oe.a,{children:Object(_.jsx)(W.b,{to:"/users",onClick:function(){return d.push("/users")},className:"link",children:"Users"})},3)]}),Object(_.jsx)(H.a,{variant:"outlined",className:e.input,placeholder:"\u041f\u043e\u0438\u0441\u043a",InputProps:{startAdornment:Object(_.jsx)(oe.a,{position:"start",children:Object(_.jsx)(be.a,{})})}})]}),Object(_.jsx)(pe.a,{className:"mainWrapper",children:u?a.map((function(e){return Object(_.jsx)(xe,{user:e,messageArray:c[e.id]},e.id)})):Object(_.jsxs)("span",{children:[Object(_.jsx)("p",{className:"text",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u0434\u043b\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"}),Object(_.jsx)(W.b,{className:"text text-link",to:"/login",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438"})]})})]})},ve=["secured","children","withAppBar"],Ne=function(e){var t=e.secured,a=e.children,c=e.withAppBar,s=Object(se.a)(e,ve),r=Object(i.c)((function(e){return e.chat})).isAuth,o=Object(i.b)();return Object(n.useEffect)((function(){o((function(e){we.ref("messages").on("child_changed",(function(t){var a=L(t);e(p(a))})),we.ref("messages").on("child_added",(function(t){var a=L(t);e(p(a))}))}))}),[o]),t&&r||!t?Object(_.jsxs)(T.b,Object(j.a)(Object(j.a)({},s),{},{children:[c&&Object(_.jsx)(ge,{}),a]})):Object(_.jsx)(T.a,{to:{pathname:"/login"}})},ye=(a(148),{apiKey:"AIzaSyBfqb0DecmSsgY_r05gR6HP2Lv16PFVKmI",authDomain:"gb-react-628c1.firebaseapp.com",databaseURL:"https://gb-react-628c1-default-rtdb.europe-west1.firebasedatabase.app",projectId:"gb-react-628c1",storageBucket:"gb-react-628c1.appspot.com",messagingSenderId:"755336690900",appId:"1:755336690900:web:e50cdda7c502b8bc890f41"});D.a.initializeApp(ye);var we=D.a.database(),ke=function(){return Object(n.useEffect)((function(){Object(M.a)(ye)}),[]),Object(_.jsxs)(W.a,{children:[Object(_.jsx)(ge,{}),Object(_.jsxs)(T.d,{children:[Object(_.jsx)(Ne,{path:"/chat/:id",children:Object(_.jsx)(K,{})}),Object(_.jsx)(Ne,{path:"/users",secured:!0,withAppBar:!0,children:Object(_.jsx)(X,{})}),Object(_.jsx)(T.b,{path:"/login",children:Object(_.jsx)(ne,{})}),Object(_.jsx)(T.b,{path:"/signup",children:Object(_.jsx)(ce,{})}),Object(_.jsx)(T.b,{path:"/weather",secured:!0,withAppBar:!0,children:Object(_.jsx)(ee,{})}),Object(_.jsx)(T.b,{path:"/",withAppBar:!1,children:Object(_.jsx)(Z,{})})]})]})};r.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(i.a,{store:C,children:Object(_.jsx)(ke,{})})}),document.getElementById("root"))},94:function(e,t,a){}},[[149,1,2]]]);
//# sourceMappingURL=main.a65a8f7d.chunk.js.map