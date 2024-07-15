"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[72],{72:(e,n,t)=>{t.r(n),t.d(n,{default:()=>_});var a,r=t(5043),o=t(7528),s=t(927);const i=s.Ay.form(a||(a=(0,o.A)(["\n  display: flex;\n  flex-direction: column;\n\n  input {\n    margin-bottom: 14px;\n  }\n"])));var c=t(6954),l=t(1498),d=t(3726),u=t.n(d),x=t(579);const m=()=>{const[e,n]=(0,r.useState)(""),[t,a]=(0,r.useState)(""),{data:o,refetch:s}=(0,c.PM)(),[d,{isLoading:m}]=(0,c.ev)();return(0,x.jsxs)(i,{onSubmit:async r=>{r.preventDefault();if(Array.isArray(o)?o.find((n=>n.name.toLowerCase()===e.toLowerCase())):null)return u().Notify.failure("".concat(e," is already in contacts")),!1;try{await d({name:e,number:t}).unwrap(),u().Notify.success("Contact added successfully"),n(""),a(""),s()}catch(i){u().Notify.failure("Failed to add contact. Please try again.")}},children:[(0,x.jsx)("label",{htmlFor:"inputName",children:"Name"}),(0,x.jsx)("input",{type:"text",name:"name",value:e,id:"inputName",required:!0,onChange:e=>n(e.target.value)}),(0,x.jsx)("label",{htmlFor:"inputNumber",children:"Number"}),(0,x.jsx)("input",{type:"tel",name:"number",value:t,id:"inputNumber",required:!0,onChange:e=>a(e.target.value)}),(0,x.jsx)(l.$,{colorScheme:"blue",size:"sm",type:"submit",isLoading:m,children:"Add contact"})]})};var p,h=t(5137);const f=s.Ay.li(p||(p=(0,o.A)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n\n  button {\n    padding: 0 10px;\n  }\n"])));function g(e){let{contact:n,refetchContacts:t}=e;const{_id:a,name:r,number:o}=n,[s,{isLoading:i}]=(0,c.ql)();return(0,x.jsxs)(f,{children:[(0,x.jsxs)("p",{children:[r," : ",o]}),(0,x.jsx)(l.$,{colorScheme:"blue",size:"xs",type:"button",onClick:async()=>{try{await s(a).unwrap(),u().Notify.success("Contact deleted"),t()}catch(e){u().Notify.failure("Failed to delete contact"),console.error("Error deleting contact:",e)}},isLoading:i,children:"Delete"})]})}var y=t(2222);const b=e=>e.filter;(0,y.Mz)([e=>e.contacts.items,b],((e,n)=>e.filter((e=>e.name.toLowerCase().includes(n.toLowerCase(),0)))));var j=t(9336);function w(){const e=(0,h.d4)(b),{data:n,error:t,isLoading:a,refetch:r}=(0,c.PM)(),o=n?((e,n)=>e.filter((e=>e.name.toLowerCase().includes(n.toLowerCase()))))(n,e):[];return a?(0,x.jsx)(j.a,{}):t?(0,x.jsxs)("p",{children:["Error loading contacts: ",t.message]}):(0,x.jsxs)("ul",{children:[0===o.length&&(0,x.jsx)(f,{children:"No contacts for your search"}),o.length>0&&o.map((e=>(0,x.jsx)(g,{contact:e,refetchContacts:r},e._id)))]})}var v,C=t(8877);const A=s.Ay.div(v||(v=(0,o.A)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 14px;\n"]))),L=()=>{const e=(0,h.wA)(),n=(0,h.d4)(b);return(0,x.jsxs)(A,{children:[(0,x.jsx)("label",{children:"Find by name:"}),(0,x.jsx)("input",{type:"text",value:n,onChange:n=>{e((0,C.R)(n.target.value))},placeholder:"Enter name"})]})};var N;const k=s.Ay.div(N||(N=(0,o.A)(["\n  margin: 20px auto 0 auto;\n  background-color: #f4f6f7;\n  max-width: 600px;\n  height: 100%;\n  padding: 20px 100px;\n  border-radius: 6px;\n\n  h1 {\n    text-align: center;\n    font-size: 32px;\n  }\n\n  h2 {\n    text-align: center;\n    font-size: 24px;\n    margin-top: 20px;\n    margin-bottom: 16px;\n  }\n  p {\n    text-align: center;\n  }\n"]))),_=()=>{const{data:e,error:n,isLoading:t}=(0,c.PM)();return(0,x.jsxs)(k,{children:[(0,x.jsx)("h1",{children:"Phonebook"}),(0,x.jsx)("p",{children:"Add contact name & phone:"}),(0,x.jsx)(m,{}),(0,x.jsx)("h2",{children:"Contacts"}),(0,x.jsx)(L,{}),n&&(0,x.jsxs)("b",{children:["Error: ",n.message]}),t&&(0,x.jsx)(j.a,{}),e&&(0,x.jsx)(w,{})]})}}}]);
//# sourceMappingURL=72.cf6c0764.chunk.js.map