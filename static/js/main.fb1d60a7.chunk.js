(this.webpackJsonpjuniortest=this.webpackJsonpjuniortest||[]).push([[0],{69:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n(0),i=n.n(a),o=n(12),r=n.n(o),l=n(41),s=n(17),u=n(107),j=n(108),d=n(109),b=n(70),f=n(110),m=n(115),O=n(111),h=n(112),g=n(114),x=n(106),p=n(113),v=n(116),k=n(99),y=n(117),C=n(103),N=n(104),S=n(105),J=n(4),B=Object(k.a)({card:{marginBottom:20},CardContent:{paddingBottom:5},CardActions:{padding:16}}),A=Object(J.a)({root:{marginTop:10,marginBottom:10}})(y.a);function T(e){var t=e.joke,n=e.likeJoke,a=e.unlikeJoke,i=e.index,o=B();return Object(c.jsxs)(C.a,{className:o.card,id:"joke-".concat(i),children:[Object(c.jsxs)(N.a,{className:o.CardContent,children:[t.categories.length>0?t.categories.map((function(e){return Object(c.jsx)(A,{label:e,variant:"outlined",style:{background:"#1e7984",color:"#fff"}},e)})):Object(c.jsx)(A,{label:"Uncategorized",variant:"outlined",style:{background:"#7e7c71"}}),Object(c.jsx)(b.a,{children:t.joke})]}),Object(c.jsxs)(S.a,{className:o.cardActions,children:[Object(c.jsx)(x.a,{variant:"contained",color:"primary",style:{background:"#0481d9"},onClick:function(e){n(t.id)},children:"Like"}),Object(c.jsx)(x.a,{variant:"contained",color:"primary",style:{background:"#908787"},onClick:function(){return a(t.id)},children:"Unlike"})]})]},t.id)}var I=Object(k.a)({form:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{margin:20,width:"25ch"},tab:{"&:hover":{background:"#efefef"}}}});function w(){return Object(c.jsx)("div",{style:{textAlign:"center",padding:"2rem",color:"#1c1818"},children:Object(c.jsx)(u.a,{})})}var E=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)([]),r=Object(s.a)(o,2),u=r[0],k=r[1],y=Object(a.useState)([]),C=Object(s.a)(y,2),N=C[0],S=C[1],J=Object(a.useState)([]),B=Object(s.a)(J,2),A=B[0],E=B[1],F=Object(a.useState)([]),D=Object(s.a)(F,2),L=D[0],R=D[1],U=Object(a.useState)(0),z=Object(s.a)(U,2),H=z[0],M=z[1],P=Object(a.useState)("Chuck"),V=Object(s.a)(P,2),q=V[0],G=V[1],K=Object(a.useState)("Norris"),Q=Object(s.a)(K,2),W=Q[0],X=Q[1],Y=Object(a.useState)(!1),Z=Object(s.a)(Y,2),$=Z[0],_=Z[1],ee=I();Object(a.useEffect)((function(){_(!0),te(),fetch("https://api.icndb.com/categories").then((function(e){return e.json()})).then((function(e){S(e.value),E(e.value),_(!1)})).catch((function(e){return console.log(e)}))}),[]);var te=function(){fetch("https://api.icndb.com/jokes?firstName=".concat(q,"&lastName=").concat(W)).then((function(e){return e.json()})).then((function(e){console.log(e),i(e.value),k(e.value.slice(0,10)),_(!1)})).catch((function(e){return console.log(e)}))},ne=function(e){if(!L.find((function(t){return t.id===e}))){var t=n.find((function(t){return t.id===e}));R([t].concat(Object(l.a)(L)))}},ce=function(e){var t=L.filter((function(t){return t.id!==e}));R(t)},ae=function(e){if(e){var t=new IntersectionObserver((function(c){!0===c[0].isIntersecting&&(console.log("Adding more jokes"),_(!0),setTimeout((function(){k(n.slice(0,u.length+10)),_(!1)}),400),t.unobserve(e))}),{threshold:1});t.observe(e)}};Object(a.useEffect)((function(){var e=document.getElementById("joke-".concat(u.length-1));ae(e)}),[u]);var ie=function(e){var t=e.target.name;if(A.includes(t)){var n=Object(l.a)(A),c=n.indexOf(t);n.splice(c,1),E(n)}else E([].concat(Object(l.a)(A),[t]))};return Object(c.jsxs)("div",{className:"App",style:{background:"#dfdcd3"},children:[Object(c.jsx)(j.a,{}),Object(c.jsxs)(d.a,{children:[Object(c.jsx)(b.a,{variant:"h3",align:"center",style:{marginTop:"50px",fontFamily:"Roboto"},children:"Apprenticeship Program Test"}),Object(c.jsx)("a",{variant:"a",href:"mailto:brianmurithi65@gmail.com",align:"center",style:{marginTop:"5px",fontFamily:"Roboto",color:"#1e99f8",padding:"10px",cursor:"pointer",textDecoration:"none"},children:"For brianmurithi65@gmail.com"}),Object(c.jsx)(f.a,{style:{marginBottom:10,background:"#246e43"},children:Object(c.jsxs)(m.a,{value:H,onChange:function(e,t){M(t)},children:[Object(c.jsx)(O.a,{label:"Home",id:"home-tab","aria-controls":"home-panel",className:ee.Tab}),Object(c.jsx)(O.a,{label:Object(c.jsx)(h.a,{color:"secondary",badgeContent:L.length>0?L.length:null,children:"Likes"}),id:"like-tab","aria-controls":"like-panel"})]})}),Object(c.jsxs)("div",{role:" tabpanel",hidden:0!==H,children:[Object(c.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==q&&""!==W&&te()},noValidate:!0,className:ee.form,children:[Object(c.jsx)(g.a,{id:"firstName",label:"First value",value:q,onChange:function(e){return G(e.target.value)}}),Object(c.jsx)(g.a,{id:"lastName",label:"Last value",value:W,onChange:function(e){return X(e.target.value)}}),Object(c.jsx)(x.a,{type:"submit",variant:"contained",color:"primary",style:{background:"#229653"},children:"submit"})]})}),N.map((function(e){return Object(c.jsx)(p.a,{control:Object(c.jsx)(v.a,{name:e,color:"primary",checked:A.includes(e),style:{background:"#af8f20",marginBottom:7},onChange:ie}),label:e},e)})),u.map((function(e,t){if(0===e.categories.length||function(e){for(var t=0;t<e.length;t++)if(A.includes(e[t]))return!0;return!1}(e.categories))return Object(c.jsx)(T,{joke:e,likeJoke:ne,unlikeJoke:ce,index:t},e.id)})),$&&Object(c.jsx)(w,{})]}),Object(c.jsx)("div",{role:"tabpanel",hidden:1!==H,children:L.map((function(e){return Object(c.jsx)(T,{joke:e,likeJoke:ne,unlikeJoke:ce},e.id)}))})]})]})};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(E,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.fb1d60a7.chunk.js.map