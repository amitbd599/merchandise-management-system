"use strict";(self.webpackChunkclient_side=self.webpackChunkclient_side||[]).push([[471],{989:(t,a,e)=>{e.d(a,{J3:()=>h,_C:()=>w,iW:()=>W,ky:()=>u,pY:()=>m,rI:()=>f,sz:()=>g});var s=e(854),i=e.n(s),r=e(7716),n=e(8322),o=e(5316),c=e(8965),d=e(3606),l=e(267);const p={headers:{token:(0,c.gf)()}};async function h(t,a){try{n.A.dispatch((0,o.P6)());let e=l.X+"/Login",s={email:t,password:a};return await i().post(e,s,{withCredentials:!0}).then((t=>(console.log(t.data.status),"success"===t.data.status?((0,c.WG)(t.data.token),(0,c.m5)(t.data.data),(0,r.rQ)("Login Success"),n.A.dispatch((0,o.W9)()),!0):((0,r.Qp)("Invalid Email or Password"),n.A.dispatch((0,o.W9)()),!1))))}catch(e){return n.A.dispatch((0,o.W9)()),(0,r.Qp)("Invalid Email or Password"),!1}}async function m(t,a,e,s,c,d){try{n.A.dispatch((0,o.P6)());let p=l.X+"/Registration",h={email:t,firstName:a,lastName:e,mobile:s,password:c,photo:d},m=await i().post(p,h);return n.A.dispatch((0,o.W9)()),200===m.status?"fail"===m.data.status?1===m.data.data.keyPattern.email?((0,r.Qp)("Email Already Exist"),!1):((0,r.Qp)("Something Went Wrong"),!1):((0,r.rQ)("Registration Success"),!0):((0,r.Qp)("Something Went Wrong"),!1)}catch(p){return n.A.dispatch((0,o.W9)()),(0,r.Qp)("Something Went Wrong"),!1}}async function u(){try{n.A.dispatch((0,o.P6)());let t=l.X+"/ProfileDetails",a=await i().get(t,p);n.A.dispatch((0,o.W9)()),200===a.status?n.A.dispatch((0,d.OY)(a.data.data[0])):(0,r.Qp)("Something Went Wrong")}catch(t){n.A.dispatch((0,o.W9)()),(0,r.Qp)("Something Went Wrong")}}async function W(t,a,e,s,d,h){try{n.A.dispatch((0,o.P6)());let m=l.X+"/ProfileUpdate",u={email:t,firstName:a,lastName:e,mobile:s,password:d,photo:h},W={email:t,firstName:a,lastName:e,mobile:s,photo:h},f=await i().post(m,u,p);return n.A.dispatch((0,o.W9)()),200===f.status?((0,r.rQ)("Profile Update Success"),(0,c.m5)(W),!0):((0,r.Qp)("Something Went Wrong"),!1)}catch(m){return(0,r.Qp)("Something Went Wrong"),n.A.dispatch((0,o.W9)()),!1}}async function f(t){try{n.A.dispatch((0,o.P6)());let a=l.X+"/RecoverVerifyEmail/"+t,e=await i().get(a);return n.A.dispatch((0,o.W9)()),200===e.status?"fail"===e.data.status?((0,r.Qp)("No user found"),!1):((0,c.xI)(t),(0,r.rQ)("A 6 Digit verification code has been sent to your email address. "),!0):((0,r.Qp)("Something Went Wrong"),!1)}catch(a){return(0,r.Qp)("Something Went Wrong"),n.A.dispatch((0,o.W9)()),!1}}async function g(t,a){try{n.A.dispatch((0,o.P6)());let e=l.X+"/RecoverVerifyOTP/"+t+"/"+a,s=await i().get(e);return n.A.dispatch((0,o.W9)()),200===s.status?"fail"===s.data.status?((0,r.Qp)("Code Verification Fail"),!1):((0,c.ot)(a),(0,r.rQ)("Code Verification Success"),!0):((0,r.Qp)("Something Went Wrong"),!1)}catch(e){return(0,r.Qp)("Something Went Wrong"),n.A.dispatch((0,o.W9)()),!1}}async function w(t,a,e){try{n.A.dispatch((0,o.P6)());let s=l.X+"/RecoverResetPass",d={email:t,OTP:a,password:e},p=await i().post(s,d);return n.A.dispatch((0,o.W9)()),200===p.status?"fail"===p.data.status?((0,r.Qp)(p.data.data),!1):((0,c.ot)(a),(0,r.rQ)("NEW PASSWORD CREATED"),!0):((0,r.Qp)("Something Went Wrong"),!1)}catch(s){return(0,r.Qp)("Something Went Wrong"),n.A.dispatch((0,o.W9)()),!1}}},7471:(t,a,e)=>{e.r(a),e.d(a,{default:()=>d});var s=e(5043),i=e(7716),r=e(989),n=e(8965),o=e(6971),c=e(579);const d=()=>{let t,a=(0,s.useRef)(),e=(0,o.Zp)();return(0,c.jsx)(s.Fragment,{children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row justify-content-center",children:(0,c.jsx)("div",{className:"col-md-7 text-start col-lg-6 center-screen",children:(0,c.jsx)("div",{className:"card w-90 p-4",children:(0,c.jsxs)("div",{className:"card-body",children:[(0,c.jsx)("h4",{children:"SET NEW PASSWORD"}),(0,c.jsx)("br",{}),(0,c.jsx)("label",{children:"Your email address"}),(0,c.jsx)("input",{readOnly:!0,value:(0,n.hS)(),placeholder:"User Email",className:"form-control animated fadeInUp",type:"email"}),(0,c.jsx)("br",{}),(0,c.jsx)("label",{children:"New Password"}),(0,c.jsx)("input",{ref:a=>t=a,placeholder:"New Password",className:"form-control animated fadeInUp",type:"password"}),(0,c.jsx)("br",{}),(0,c.jsx)("label",{children:"Confirm Password"}),(0,c.jsx)("input",{ref:t=>a=t,placeholder:"Confirm Password",className:"form-control animated fadeInUp",type:"password"}),(0,c.jsx)("br",{}),(0,c.jsx)("button",{onClick:async()=>{let s=t.value,o=a.value;if((0,i.wo)(s))(0,i.Qp)("Password Required");else if((0,i.wo)(o))(0,i.Qp)("Confirm Password Required");else if(s!==o)(0,i.Qp)("Password & Confirm Password Should be Same");else{!0===await(0,r._C)((0,n.hS)(),(0,n.yQ)(),s)&&e("/Login")}},className:"btn w-100 btn-success",children:"Next"})]})})})})})})}}}]);
//# sourceMappingURL=471.e6f81d43.chunk.js.map