(this.webpackJsonpjuniortest=this.webpackJsonpjuniortest||[]).push([[0],{69:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n(0),i=n.n(a),o=n(12),r=n.n(o),s=n(41),l=n(17),u=n(107),j=n(108),d=n(109),b=n(70),f=n(110),O=n(115),h=n(111),m=n(112),g=n(114),v=n(106),x=n(113),k=n(116),p=n(99),y=n(117),C=n(103),N=n(104),S=n(105),J=n(4),B=Object(p.a)({card:{marginBottom:20},CardContent:{paddingBottom:5},CardActions:{padding:16}}),A=Object(J.a)({root:{marginTop:10,marginBottom:10}})(y.a);function I(e){var t=e.joke,n=e.likeJoke,a=e.unlikeJoke,i=e.index,o=B();return Object(c.jsxs)(C.a,{className:o.card,id:"joke-".concat(i),children:[Object(c.jsxs)(N.a,{className:o.CardContent,children:[t.categories.length>0?t.categories.map((function(e){return Object(c.jsx)(A,{label:e,variant:"outlined",style:{background:"#1e7984",color:"#fff"}},e)})):Object(c.jsx)(A,{label:"Uncategorized",variant:"outlined",style:{background:"#7e7c71"}}),Object(c.jsx)(b.a,{children:t.joke})]}),Object(c.jsxs)(S.a,{className:o.cardActions,children:[Object(c.jsx)(v.a,{variant:"contained",color:"primary",onClick:function(){return n(t.id)},children:"Like"}),Object(c.jsx)(v.a,{variant:"contained",color:"default",onClick:function(){return a(t.id)},children:"Unlike"})]})]},t.id)}var T=Object(p.a)({form:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{margin:20,width:"25ch"},tab:{"&:hover":{background:"#efefef"}}}});function w(){return Object(c.jsx)("div",{style:{textAlign:"center",padding:"2rem"},children:Object(c.jsx)(u.a,{})})}var E=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)([]),r=Object(l.a)(o,2),u=r[0],p=r[1],y=Object(a.useState)([]),C=Object(l.a)(y,2),N=C[0],S=C[1],J=Object(a.useState)([]),B=Object(l.a)(J,2),A=B[0],E=B[1],L=Object(a.useState)([]),D=Object(l.a)(L,2),F=D[0],U=D[1],z=Object(a.useState)(0),H=Object(l.a)(z,2),M=H[0],P=H[1],R=Object(a.useState)("Chuck"),V=Object(l.a)(R,2),q=V[0],G=V[1],K=Object(a.useState)("Norris"),Q=Object(l.a)(K,2),W=Q[0],X=Q[1],Y=Object(a.useState)(!1),Z=Object(l.a)(Y,2),$=Z[0],_=Z[1],ee=T();Object(a.useEffect)((function(){_(!0),te(),fetch("https://api.icndb.com/categories").then((function(e){return e.json()})).then((function(e){S(e.value),E(e.value),_(!1)})).catch((function(e){return console.log(e)}))}),[]);var te=function(){fetch("https://api.icndb.com/jokes?firstName=".concat(q,"&lastName=").concat(W)).then((function(e){return e.json()})).then((function(e){console.log(e),i(e.value),p(e.value.slice(0,10)),_(!1)})).catch((function(e){return console.log(e)}))},ne=function(e){if(!F.find((function(t){return t.id===e}))){var t=n.find((function(t){return t.id===e}));U([t].concat(Object(s.a)(F)))}},ce=function(e){var t=F.filter((function(t){return t.id!==e}));U(t)},ae=function(e){if(e){var t=new IntersectionObserver((function(c){!0===c[0].isIntersecting&&(console.log("Adding more jokes"),_(!0),setTimeout((function(){p(n.slice(0,u.length+10)),_(!1)}),400),t.unobserve(e))}),{threshold:1});t.observe(e)}};Object(a.useEffect)((function(){var e=document.getElementById("joke-".concat(u.length-1));ae(e)}),[u]);var ie=function(e){var t=e.target.name;if(A.includes(t)){var n=Object(s.a)(A),c=n.indexOf(t);n.splice(c,1),E(n)}else E([].concat(Object(s.a)(A),[t]))};return Object(c.jsxs)("div",{className:"App",style:{background:"#dfdcd3"},children:[Object(c.jsx)(j.a,{}),Object(c.jsxs)(d.a,{children:[Object(c.jsx)(b.a,{variant:"h3",align:"center",style:{marginTop:"50px",fontFamily:"Roboto"},children:"Apprenticeship Program Test"}),Object(c.jsx)(f.a,{style:{marginBottom:10,background:"#246e43"},children:Object(c.jsxs)(O.a,{value:M,onChange:function(e,t){P(t)},children:[Object(c.jsx)(h.a,{label:"Home",id:"home-tab","aria-controls":"home-panel",className:ee.Tab}),Object(c.jsx)(h.a,{label:Object(c.jsx)(m.a,{color:"secondary",badgeContent:F.length>0?F.length:null,children:"Likes"}),id:"like-tab","aria-controls":"like-panel"})]})}),Object(c.jsxs)("div",{role:" tabpanel",hidden:0!==M,children:[Object(c.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==q&&""!==W&&te()},noValidate:!0,className:ee.form,children:[Object(c.jsx)(g.a,{id:"firstName",label:"First value",value:q,onChange:function(e){return G(e.target.value)}}),Object(c.jsx)(g.a,{id:"lastName",label:"Last value",value:W,onChange:function(e){return X(e.target.value)}}),Object(c.jsx)(v.a,{type:"submit",variant:"contained",color:"primary",style:{background:"#229653"},children:"submit"})]})}),N.map((function(e){return Object(c.jsx)(x.a,{control:Object(c.jsx)(k.a,{name:e,color:"primary",checked:A.includes(e),style:{background:"#af8f20",marginBottom:7},onChange:ie}),label:e},e)})),u.map((function(e,t){if(0===e.categories.length||function(e){for(var t=0;t<e.length;t++)if(A.includes(e[t]))return!0;return!1}(e.categories))return Object(c.jsx)(I,{joke:e,likeJoke:ne,unlikeJoke:ce,index:t},e.id)})),$&&Object(c.jsx)(w,{})]}),Object(c.jsx)("div",{role:"tabpanel",hidden:1!==M,children:F.map((function(e){return Object(c.jsx)(I,{joke:e,likeJoke:ne,unlikeJoke:ce},e.id)}))})]})]})};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(E,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.856cd1ab.chunk.js.map