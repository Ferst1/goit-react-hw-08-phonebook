"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[663],{5663:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(5043),s=a(5137),r=a(4287),o=a(2454),i=a(1498),l=a(3726),c=a.n(l),u=a(579);const d=()=>{const[e,t]=(0,n.useState)(""),[a,l]=(0,n.useState)(""),[d]=(0,r.Yi)(),p=(0,s.wA)();return(0,u.jsxs)("form",{onSubmit:async t=>{t.preventDefault();try{const t=await d({email:e,password:a}).unwrap();p((0,o.O5)(t.token)),localStorage.setItem("token",t.token),c().Notify.success("Login success!")}catch(s){var n;c().Notify.failure((null===s||void 0===s||null===(n=s.data)||void 0===n?void 0:n.message)||"Login failed. Please try again.")}},children:[(0,u.jsxs)("label",{children:["Email:",(0,u.jsx)("input",{type:"email",value:e,onChange:e=>t(e.target.value),required:!0})]}),(0,u.jsxs)("label",{children:["Password:",(0,u.jsx)("input",{type:"password",value:a,onChange:e=>l(e.target.value),required:!0})]}),(0,u.jsx)(i.$,{type:"submit",children:"Log In"})]})};var p=a(7119);const h=()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(p.H1,{children:"Log in into your account"}),(0,u.jsx)(d,{})]})},7119:(e,t,a)=>{a.d(t,{H1:()=>r});var n,s=a(7528);const r=a(927).Ay.h1(n||(n=(0,s.A)(["\n  text-align: center;\n  margin-top: 24px;\n  font-size: 20px;\n"])))}}]);
//# sourceMappingURL=663.05245830.chunk.js.map