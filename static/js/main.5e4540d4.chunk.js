(this["webpackJsonpreact-store"]=this["webpackJsonpreact-store"]||[]).push([[0],{19:function(e,t,c){},24:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var r=c(0),n=(c(19),c(2)),s=c.n(n),a=c(14),i=c.n(a),o=c(5),l=c.n(o),u=c(15),d=c(3),j=(c(24),c(16)),p=c.n(j).a.create({baseURL:"https://zs5utiv3ul.execute-api.us-east-1.amazonaws.com/dev"});c(42);function m(e){var t=e.product,c=function(e){var t=e.decimals,c=e.integers;t=Number(t),c=Number(c.replace(/\./g,""));var r=Number("".concat(c,".").concat(t));return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(r)};return Object(r.jsxs)("div",{className:function(){var e="product";return t.offer?"".concat(e," product-in-offer"):e}(),title:t.name,children:[t.tag?Object(r.jsx)("span",{className:"product__tag",children:t.tag.label}):null,Object(r.jsx)("img",{alt:t.name,src:t.picture,className:"product__picture"}),t.offer?Object(r.jsxs)("div",{className:"product__offer-label",children:[Object(r.jsx)("span",{children:t.offer.label}),Object(r.jsxs)("span",{children:[t.offer.value,"%"]})]}):null,Object(r.jsxs)("div",{className:"product__info",children:[Object(r.jsx)("div",{className:"product__info--name",children:t.name}),Object(r.jsx)("button",{className:"product__info--button",children:"Adicionar ao Carrinho"}),Object(r.jsxs)("div",{className:"product__info--price",children:[Object(r.jsxs)("strong",{className:"product__info--price__main",children:[c(t.price.to)," ",t.unit]}),t.price.from?Object(r.jsx)("small",{className:"product__info--price__old",children:c(t.price.from)}):null,function(){if(!t.installment)return null;var e=t.installment.value.split(","),n=Object(d.a)(e,2),s=n[0],a=n[1],i=c({integers:s,decimals:a});return Object(r.jsxs)("small",{className:"product__info--price__installment",children:[Object(r.jsx)("strong",{children:t.installment.amount}),"x de",Object(r.jsx)("strong",{children:i})," s/juros"]})}()]})]})]})}function f(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],a=function(){var e=Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("products");case 3:t=e.sent,c=t.data,s(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){a()}),[]),Object(r.jsxs)("div",{className:"products",children:[Object(r.jsx)("h1",{className:"products__title",children:"Produtos"}),Object(r.jsx)("section",{className:"products__list",children:c.map((function(e){return Object(r.jsx)("div",{className:"products__list--item",children:Object(r.jsx)(m,{product:e})},e.id)}))})]})}i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.5e4540d4.chunk.js.map