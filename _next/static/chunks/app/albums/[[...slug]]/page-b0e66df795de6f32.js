(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54],{9634:function(e,n,t){Promise.resolve().then(t.bind(t,3947)),Promise.resolve().then(t.t.bind(t,3492,23))},3947:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Modal}});var r=t(2987),o=t(7317),l=t(6396),c=t(8221);function ClientOnlyPortal(e){let{children:n,selector:t}=e,r=(0,o.useRef)(null),[l,s]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{r.current=document.querySelector(t),s(!0)},[t]),l?(0,c.createPortal)(n,r.current):null}function Modal(e){let{isOpen:n,onClose:t,closeHref:c,children:s}=e,u=(0,l.useRouter)();(0,o.useEffect)(()=>{let handleKeyDown=e=>"Escape"===e.key&&i();return document.addEventListener("keydown",handleKeyDown),()=>document.removeEventListener("keydown",handleKeyDown)},[]);let i=(0,o.useCallback)(e=>{if("function"==typeof t){t(e);return}"string"==typeof c&&u.push(c)},[t,c]),a=(0,o.useCallback)(e=>{let findAncestorBySelector=(e,n)=>(null==e?void 0:e.matches(n))?e:(null==e?void 0:e.parentElement)?findAncestorBySelector(e.parentElement,n):null;findAncestorBySelector(e.target,".content")||i(e)},[i]);return n?(0,r.jsx)(ClientOnlyPortal,{selector:"body",children:(0,r.jsxs)("div",{className:"modal",onClick:a,children:[(0,r.jsx)("div",{className:"close",onClick:i,children:"X"}),(0,r.jsx)("div",{className:"content",children:s})]})}):null}},8245:function(e,n,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t(7317),o=Symbol.for("react.element"),l=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function q(e,n,t){var r,u={},i=null,a=null;for(r in void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,r)&&!s.hasOwnProperty(r)&&(u[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===u[r]&&(u[r]=n[r]);return{$$typeof:o,type:e,key:i,ref:a,props:u,_owner:c.current}}n.jsx=q,n.jsxs=q},2987:function(e,n,t){"use strict";e.exports=t(8245)},6396:function(e,n,t){e.exports=t(3763)}},function(e){e.O(0,[492,195,338,744],function(){return e(e.s=9634)}),_N_E=e.O()}]);