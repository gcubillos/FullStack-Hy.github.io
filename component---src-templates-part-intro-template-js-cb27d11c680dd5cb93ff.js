(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"64fX":function(e,a,t){},CN8t:function(e,a,t){"use strict";var n=t("Wbzz"),r=t("q1tI"),o=t.n(r),l=t("9Koi"),i=(t("64fX"),t("jsr+")),c=t("AxK6"),s=t("98iT"),u=t.n(s),m=t("TiAl"),d=t("0Yyr"),p=[{src:t.n(d).a,alt:"Helsingin yliopiston logo",href:"https://www.helsinki.fi/"},{src:u.a,alt:"Houston inc. logo",href:"https://www.houston-inc.com/"}];a.a=function(){var e=Object(l.a)(),a=e.t,t=e.i18n,r=Object(m.b)(t.language,a);return o.a.createElement(i.a,{id:"footer",className:"container spacing--after-small spacing--mobile",flex:!0},o.a.createElement(i.a,{className:"col-5 push-right-3 col-10--mobile order-2--mobile order-2--tablet footer__links",flex:!0,spaceBetween:!0},p.map((function(e){return o.a.createElement("a",{key:e.alt,href:e.href,className:"col-5 col-4--mobile spacing--mobile"},o.a.createElement(c.a,{contain:!0,src:e.src,alt:e.alt,className:"col-6"}))}))),o.a.createElement(i.a,{flex:!0,className:"col-5 col-5--mobile order-1--mobile order-1--tablet footer__navigation"},o.a.createElement("div",{className:"footer__navigation-link-container"},r.map((function(e){return o.a.createElement(n.Link,{key:e.path,to:e.path,className:"footer__navigation-link nav-item-hover",style:{marginLeft:"4.5rem"}},e.text)})))))}},"E+oP":function(e,a,t){var n=t("A90E"),r=t("QqLw"),o=t("03A+"),l=t("Z0cm"),i=t("MMmD"),c=t("DSRE"),s=t("6sVZ"),u=t("c6wG"),m=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(i(e)&&(l(e)||"string"==typeof e||"function"==typeof e.splice||c(e)||u(e)||o(e)))return!e.length;var a=r(e);if("[object Map]"==a||"[object Set]"==a)return!e.size;if(s(e))return!n(e).length;for(var t in e)if(m.call(e,t))return!1;return!0}},GGGK:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return A}));var n=t("KQm4"),r=(t("Ppn1"),t("XFRJ")),o=t("mt4B"),l=t("jsr+"),i=t("CN8t"),c=t("Bl7J"),s=t("76ZC"),u=t.n(s),m=t("kl3L"),d=t("q1tI"),p=t.n(d),b=t("vrFN"),f=t("u1fg"),k=t("GkXj"),g=t.n(k),v=t("KJAY"),E=t.n(v),h=t("gqR3"),y=t.n(h),N=t("5I0T"),x=t.n(N),C=t("ymbu"),w=t.n(C),j=t("Zosa"),R=t("33yf"),_=t.n(R),F=t("c7NW"),L=t.n(F),P=t("xB9W");function A(e){var a=e.data.markdownRemark,t=a.frontmatter,s=a.html,d=t.mainImage,k=t.part,v=t.lang,h=E()(w.a[v][k])?[]:Object.keys(w.a[v][k]),N={replace:function(e){var a=e.type,t=e.attribs,n=e.children;if("tag"===a&&"intro"===t.class)return p.a.createElement("div",{className:"col-7"},g()(n,N))}};return p.a.createElement(c.a,null,p.a.createElement(b.a,{lang:v,title:"Fullstack "+("fi"===v?"osa":"part")+k,description:y.a[v],keywords:[].concat(Object(n.a)(x.a),[w.a[v][k]?Object.values(w.a[v][k]):[]])}),p.a.createElement("div",{className:"spacing--after"},p.a.createElement(o.a,{className:"part-intro__banner spacing--mobile--small",style:{backgroundImage:"url("+_.a.resolve(d.publicURL)+")",backgroundColor:f[j.a[k]]}},p.a.createElement(l.a,{className:"container"},p.a.createElement(r.a,{className:"breadcrumb",content:[{backgroundColor:f[j.a[k]],text:"Fullstack",link:"/"+("fi"===v?"":v+"/")+"#course-contents"},{backgroundColor:f.black,text:("fi"===v?"Osa":"Part")+" "+k}]}),p.a.createElement("div",{className:"part-intro col-7 col-10--mobile spacing--after-small"},u()(s,N)),h&&p.a.createElement(r.a,{wrapperClassName:"spacing--mobile--large",stack:!0,content:h.map((function(e){return{backgroundColor:f.white,letter:e,path:Object(P.a)(v,k,"/"+L()(w.a[v][k][e])),text:e+" "+w.a[v][k][e]}}))}))),p.a.createElement(m.a,{part:k,lang:v})),p.a.createElement(i.a,{lang:v}))}},KJAY:function(e,a,t){var n=t("sZCt")("isEmpty",t("E+oP"),t("Eszj"));n.placeholder=t("wuTn"),e.exports=n},Ppn1:function(e,a,t){},XFRJ:function(e,a,t){"use strict";var n=t("zLVn"),r=(t("m4Pe"),t("jsr+")),o=t("Wbzz"),l=t("q1tI"),i=t.n(l),c=t("u1fg"),s=function(e){var a,t=e.className,l=e.wrapperClassName,s=e.link,u=e.content,m=e.stack,d=e.bold,p=e.thickBorder,b=e.upperCase,f=Object(n.a)(e,["className","wrapperClassName","link","content","stack","bold","thickBorder","upperCase"]),k=i.a.createElement("div",{className:"arrow__container arrows--horizontal "+t},u.map((function(e,a){var t={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===c.black?"white":c.black};return i.a.createElement("div",Object.assign({key:"arrow"+a,className:"arrow__wrapper"},f),i.a.createElement("div",{className:"arrow__rectangle "+(d?"bold":"")+" "+(p?"arrow__rectangle--thick-border":""),style:t},e.link?i.a.createElement(o.Link,{to:e.link},b?e.text.toUpperCase():e.text):b?e.text.toUpperCase():e.text),i.a.createElement("div",{className:"arrow__point "+(p?"arrow__point--thick-border":""),style:t}))})));return m||s?!m&&s?a=i.a.createElement("div",{className:"spacing--after-small auto-bottom-margin"},i.a.createElement(o.Link,{to:s,style:{display:"inline-block"}},k)):m&&(a=i.a.createElement("div",{className:"col-10 spacing--after "+l},i.a.createElement("div",{className:"arrow__container arrow__container--with-link",style:{display:"flex",flexDirection:"column"}},u.map((function(e){var a={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===c.black?"white":c.black};return i.a.createElement(o.Link,Object.assign({key:e.text,to:e.path,className:"arrow__wrapper--stacked "+t},f),i.a.createElement(r.a,{flex:!0,className:"arrow__rectangle",style:a},i.a.createElement("p",{className:"arrow--stacked-title"},i.a.createElement("span",null,e.text))),i.a.createElement("div",{className:"arrow__point",style:a}))}))))):a=i.a.createElement("div",{className:"col-10 spacing--after"},k),a};s.defaultProps={className:"",wrapperClassName:""},a.a=s},Zosa:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n={0:"light-violet",1:"green",2:"dark-orange",3:"light-orange",4:"yellow",5:"pink",6:"violet",7:"light-blue",8:"turquoise",9:"light-green",10:"part10-light-blue",11:"purple"}},gqR3:function(e,a){e.exports={fi:"Helsingin yliopiston ja Houston Inc:n kaikille avoin ja ilmainen moderniin Javascript-pohjaiseen web-sovelluskehitykseen keskittyvä kurssi. Osallistujilta edellytetään vahvaa ohjelmointirutiinia, pitkäjänteistyyttä ja valmiuksia omatoimiseen ongelmanratkaisuun.",en:"Open online course on Javascript based modern web development by University of Helsinki and Houston Inc.."}},kl3L:function(e,a,t){"use strict";t("l54/");var n=t("jsr+"),r=t("Wbzz"),o=t("q1tI"),l=t.n(o),i=t("ymbu"),c=t.n(i),s=t("c7NW"),u=t.n(s),m=t("9Koi"),d=(t("UX5x"),function(e){return String.fromCharCode(e.charCodeAt(0)-1)}),p=function(e){return String.fromCharCode(e.charCodeAt(0)+1)},b=function(e,a){return Object.keys(c.a[a]).includes(e.toString())},f=function(e,a,t){return p(e)in c.a[t][a]},k=function(e,a,t){return!e&&b(a+1,t)||e&&f(e,a,t)},g=function(e){return"fi"===e?"Osa":"Part"},v=function(e){return"fi"===e?"/osa":"/"+e+"/part"},E=function(e){var a=e.part,t=e.letter,o=e.lang,i=Object(m.a)().t;return l.a.createElement(n.a,{className:"container spacing spacing--after-large prev-next__container"},!t&&b(a-1,o)?l.a.createElement(l.a.Fragment,null,l.a.createElement(r.Link,{to:""+v(o)+(a-1),className:"col-4--mobile push-right-1 prev"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,g(o)," ",a-1),l.a.createElement("b",null,i("previousPart")))),k(t,a,o)&&l.a.createElement("div",{className:"col-1--mobile separator"})):t?"a"!==t?l.a.createElement(l.a.Fragment,null,l.a.createElement(r.Link,{to:""+v(o)+a+"/"+u()(c.a[o][a][d(t)]),className:"col-4--mobile push-right-1 prev"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,g(o)," ",""+a+d(t)),l.a.createElement("b",null,i("previousPart")))),k(t,a,o)&&l.a.createElement("div",{className:"col-1--mobile separator"})):b(a-1,o)?l.a.createElement(l.a.Fragment,null,l.a.createElement(r.Link,{to:""+v(o)+(a-1),className:"col-4--mobile push-right-1 prev"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,g(o)," ",a-1),l.a.createElement("b",null,i("previousPart")))),k(t,a,o)&&l.a.createElement("div",{className:"col-1--mobile separator"})):l.a.createElement(n.a,{className:"push-right-1"}):l.a.createElement(n.a,{className:"push-right-1"}),!t&&b(a+1,o)?l.a.createElement(r.Link,{to:""+v(o)+(a+1),className:"col-4--mobile push-left-1 next"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,g(o)," ",a+1),l.a.createElement("b",null,i("nextPart")))):t?f(t,a,o)?l.a.createElement(r.Link,{to:""+v(o)+a+"/"+u()(c.a[o][a][p(t)]),className:"col-4--mobile push-left-1 next"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,g(o)," ",""+a+p(t)),l.a.createElement("b",null,i("nextPart")))):b(a+1,o)?l.a.createElement(r.Link,{to:""+v(o)+(a+1),className:"col-4--mobile push-left-1 next"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,g(o)," ",a+1),l.a.createElement("b",null,i("nextPart")))):l.a.createElement(n.a,{className:"push-left-1"}):l.a.createElement(n.a,{className:"push-left-1"}))};E.defaultProps={part:void 0,letter:void 0},a.a=E},"l54/":function(e,a,t){},m4Pe:function(e,a,t){},mt4B:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("zLVn"),r=(t("rXWv"),t("q1tI")),o=t.n(r),l=function(e){var a=e.className,t=e.backgroundColor,r=Object(n.a)(e,["className","backgroundColor"]),l=t?{backgroundColor:t}:null;return o.a.createElement("div",Object.assign({className:"banner "+a,style:l},r))};l.defaultProps={className:""}},rXWv:function(e,a,t){},u1fg:function(e){e.exports=JSON.parse('{"white":"#ffffff","black":"#33332d","main":"#e1e1e1","violet":"#B795F3","turquoise":"#82F7EB","green":"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D","yellow":"#F7F382","pink":"#E693CB","blue":"#706BE4","light-blue":"#82D2F7","light-violet":"#B2BBF0","light-green":"#D4FCB5","smartly-purple":"#f8f5f9","part10-light-blue":"#AFF4FE","purple":"#D4A8E2"}')},xB9W:function(e,a,t){"use strict";a.a=function(e,a,t){return void 0===t&&(t=""),"fi"===e?"/osa"+a+t:"/"+e+"/part"+a+t}},ymbu:function(e,a){e.exports={fi:{0:{a:"Yleistä",b:"Web-sovelluksen toimintaperiaatteita"},1:{a:"Reactin alkeet",b:"Javascriptiä",c:"Komponentin tila ja tapahtumankäsittely",d:"Monimutkaisempi tila, Reactin debuggaus"},2:{a:"Kokoelmien renderöinti ja moduulit",b:"Lomakkeiden käsittely",c:"Palvelimella olevan datan hakeminen",d:"Palvelimella olevan datan muokkaaminen",e:"Tyylien lisääminen React-sovellukseen"},3:{a:"Node.js ja Express",b:"Sovellus internetiin",c:"Tietojen tallettaminen MongoDB-tietokantaan",d:"Validointi ja ESLint"},4:{a:"Sovelluksen rakenne ja testauksen alkeet",b:"Backendin testaaminen",c:"Käyttäjien hallinta",d:"Token-perustainen kirjautuminen"},5:{a:"Kirjautuminen frontendissä",b:"props.children ja proptypet",c:"React-sovellusten testaaminen",d:"End to end -testaus"},6:{a:"Flux-arkkitehtuuri ja Redux",b:"Monta reduseria",c:"Redux-sovelluksen kommunikointi palvelimen kanssa",d:"connect"},7:{a:"React-router",b:"custom-hookit",c:"Lisää tyyleistä",d:"Webpack",e:"Luokkakomponentit, Sekalaista",f:"Tehtäviä: blogilistan laajennus"}},en:{0:{a:"General info",b:"Fundamentals of Web apps"},1:{a:"Introduction to React",b:"JavaScript",c:"Component state, event handlers",d:"A more complex state, debugging React apps"},2:{a:"Rendering a collection, modules",b:"Forms",c:"Getting data from server",d:"Altering data in server",e:"Adding styles to React app"},3:{a:"Node.js and Express",b:"Deploying app to internet",c:"Saving data to MongoDB",d:"Validation and ESLint"},4:{a:"Structure of backend application, introduction to testing",b:"Testing the backend",c:"User administration",d:"Token authentication"},5:{a:"Login in frontend",b:"props.children and proptypes",c:"Testing React apps",d:"End to end -testing"},6:{a:"Flux-architecture and Redux",b:"Many reducers",c:"Communicating with server in a redux application",d:"connect"},7:{a:"React-router",b:"Custom hooks",c:"More about styles",d:"Webpack",e:"Class components, Miscellaneous",f:"Exercises: extending the bloglist"}},zh:{0:{a:"基础知识",b:"Web 应用的基础设施"},1:{a:"React 简介",b:"JavaScript",c:"组件状态，事件处理",d:"深入React 应用调试"},2:{a:"从渲染集合到模块学习",b:"表单",c:"从服务器获取数据",d:"在服务端将数据Alert出来",e:"给React应用加点样式"},3:{a:"Node.js 与 Express",b:"把应用部署到网上",c:"将数据存入MongoDB",d:"ESLint与代码检查"},4:{a:"从后端结构到测试入门",b:"测试后端应用",c:"用户管理",d:"密钥认证"},5:{a:"完成前台的登录功能",b:"props.children 与 proptypes",c:"测试React 应用",d:"端到端测试"},6:{a:"Flux架构与Redux",b:"再来点 reducers",c:"在Redux应用中与后端通信",d:"connect方法"},7:{a:"React-router",b:"自定义 hooks",c:"样式进阶",d:"Webpack",e:"各种各样的Class components",f:"练习：扩展你的博客列表"},8:{a:"GraphQL服务器",b:"React 与 GraphQL",c:"数据库与用户管理",d:"登录与更新缓存",e:"Fragments 与 subscriptions"},9:{a:"背景与介绍",b:"Typescript的一小步",c:"Typescript版的express应用",d:"利用Typescript编写React应用"},10:{a:"React Native 介绍",b:"React Native 入门",c:"与服务端通信",d:"测试与扩展我们的应用"},11:{a:"CI/CD 简介",b:"开始认识 GitHub Actions 吧",c:"部署",d:"保持健康状态",e:"再扩展一下"}},es:{0:{a:"Información general",b:"Fundamentos de las aplicaiones web"},1:{a:"Introducción a React",b:"JavaScript",c:"Estado del componente, controladores de eventos",d:"Un estado más complejo, depurando aplicaciones React"},2:{a:"Renderizando una colección, módulos",b:"Formularios",c:"Obteniendo datos del servidor",d:"Alterando datos en el servidor",e:"Agregar estilos a la aplicación React"},3:{a:"Node.js y Express",b:"Implementación de la aplicación en Internet",c:"Guardando datos en MongoDB",d:"Validación y ESLint"},4:{a:"Estructura de la aplicación backend, introducción a las pruebas",b:"Porbando el backend",c:"Administración de usuarios",d:"Autenticación de token"},5:{a:"Iniciar sesión en la interfaz",b:"props.children y proptypes",c:"Probando aplicaciones React",d:"Pruebas de extremo a extremo"},6:{a:"Flux-architecture y Redux",b:"Muchos reducers",c:"Comunicarse con el servidor en una aplicación redux",d:"conectar"},7:{a:"React-router",b:"Hooks personalizados",c:"Más sobre estilos",d:"Webpack",e:"Componentes de clases, varios",f:"Ejercicios: ampliar la lista de blogs"},8:{a:"Servidor GraphQL",b:"React y GraphQL",c:"Administración de bases de datos y usuarios",d:"Iniciar sesión y actualizar la caché",e:"Fragmentos y suscripciones"},9:{a:"Antecedentes e introducción",b:"Primeros pasos con Typescript",c:"Escribiendo la aplicación express",d:"React con tipos"},10:{a:"Introducción a React Native",b:"Conceptos básicos de React Native",c:"Comunicandose con el servidor",d:"Probar y ampliar nuestra aplicación"},11:{a:"Introducción a CI/CD",b:"Introducción a las acciones de Github",c:"Despliegue",d:"Manteniéndose verde",e:"Expandiéndose aún más"}}}}}]);
//# sourceMappingURL=component---src-templates-part-intro-template-js-cb27d11c680dd5cb93ff.js.map