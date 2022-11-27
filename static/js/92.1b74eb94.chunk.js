"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[92],{6092:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var r,i=t(2791),u=t(9434),a=t(4270),o=t(168),c=t(4934),l=c.Z.li(r||(r=(0,o.Z)(["\n  display: flex;\n  margin-bottom: 10px;\n  p {\n    margin: 0;\n    margin-right: 20px;\n  }\n"]))),s="NOT_FOUND";var f=function(n,e){return n===e};function p(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,i=void 0===r?f:r,u=t.maxSize,a=void 0===u?1:u,o=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}}(i),l=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:s},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return s}return{get:r,put:function(e,i){r(e)===s&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,c);function p(){var e=l.get(arguments);if(e===s){if(e=n.apply(null,arguments),o){var t=l.getEntries(),r=t.find((function(n){return o(n.value,e)}));r&&(e=r.value)}l.put(arguments,e)}return e}return p.clearCache=function(){return l.clear()},p}function d(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function m(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var u,a=0,o={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(o=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=o,s=l.memoizeOptions,f=void 0===s?t:s,p=Array.isArray(f)?f:[f],m=d(r),h=n.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(p)),v=n((function(){for(var n=[],e=m.length,t=0;t<e;t++)n.push(m[t].apply(null,arguments));return u=h.apply(null,n)}));return Object.assign(v,{resultFunc:c,memoizedResultFunc:h,dependencies:m,lastResult:function(){return u},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),v};return i}var h,v,x=m(p),y=function(n){return n.contacts.items},g=function(n){return n.contacts.isLoading},b=x([y,function(n){return n.filter.value}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e)}))})),j=t(3634),k=t(184),w=function(n){var e=n.contact,t=(0,u.I0)();return(0,k.jsxs)("div",{children:[(0,k.jsxs)("p",{children:[e.name,": ",(0,k.jsx)("span",{children:e.number})]}),(0,k.jsx)("button",{onClick:function(){return t((0,j.GK)(e.id))},children:"Delete"})]})},A=function(){var n=(0,u.v9)(b);return(0,k.jsx)("div",{children:n.length>0?(0,k.jsx)("ul",{children:n.map((function(n){return(0,k.jsx)(l,{children:(0,k.jsx)(w,{contact:n})},n.id)}))}):(0,k.jsx)("div",{children:"No contacts "})})},C=c.Z.form(h||(h=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  padding: 10px 15px;\n  border: 1px solid grey;\n  label {\n    margin-bottom: 15px;\n  }\n  input {\n    display: block;\n    margin-top: 5px;\n  }\n  button {\n    margin-top: 15px;\n    width: 130px;\n  }\n"]))),Z=function(){var n=(0,u.v9)(y),e=(0,u.I0)();return(0,k.jsxs)(C,{onSubmit:function(t){t.preventDefault();var r=t.target,i=r.elements.name.value,u=r.elements.number.value;n.find((function(n){return n.name===i}))?alert("".concat(i," is already in contacts")):e((0,j.uK)({name:i,number:u})),r.reset()},children:[(0,k.jsxs)("label",{children:["Name",(0,k.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,k.jsxs)("label",{children:["Number",(0,k.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,k.jsx)("button",{type:"submit",children:"Add contact"})]})},z=t(4808),q=c.Z.input(v||(v=(0,o.Z)(["\n  display: block;\n  margin-top: 5px;\n"]))),E=function(){var n=(0,u.I0)();return(0,k.jsxs)("label",{children:[(0,k.jsx)("span",{children:"Find contacts by name"}),(0,k.jsx)(q,{type:"text",onChange:function(e){n((0,z.T)(e.currentTarget.value.toLowerCase().trim()))}})]})};function F(){var n=(0,u.I0)(),e=(0,u.v9)(g);return(0,i.useEffect)((function(){n((0,j.yF)())}),[n]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(a.q,{children:(0,k.jsx)("title",{children:"Your contacts"})}),(0,k.jsx)(Z,{}),(0,k.jsx)("div",{children:e&&"Request in progress..."}),(0,k.jsx)(E,{}),(0,k.jsx)(A,{})]})}}}]);
//# sourceMappingURL=92.1b74eb94.chunk.js.map