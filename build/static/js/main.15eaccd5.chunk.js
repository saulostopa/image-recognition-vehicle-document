(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,n){e.exports=n.p+"static/media/CoopLogoSmall.5bc1a5df.svg"},42:function(e,t,n){e.exports=n(87)},85:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a,r,o,l,i,c,s,d,u=n(0),p=n.n(u),m=n(27),g=n.n(m),f=n(13),h=n.n(f),x=n(28),b=n(39),v=n(7),E=n(8),y=n(10),R=n(9),O=n(5),S=n(29),j=n(30),k=n.n(j),w=n(12),z=n.n(w).a.create({baseURL:"http://52.45.53.91"}),D=n(2),N=n(3),I=(n(67),Object(N.a)(a||(a=Object(D.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 14px;\n    background: #fff;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n\n  h4 {\n    margin:14px 0 0 0;\n  }\n"])))),F=N.c.div(r||(r=Object(D.a)(["\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),U=N.c.div(o||(o=Object(D.a)(["\n  width: 100%;\n  max-width: 400px;\n  margin: 30px;\n  background: #fff;\n  border-radius: 4px;\n  padding: 20px;\n"]))),A=(N.c.div(l||(l=Object(D.a)(["\n  margin:0 auto;\n  display:block;\n"]))),n(38)),M=Object(N.b)(i||(i=Object(D.a)(["\n  border-color: #78e5d5;\n"]))),V=Object(N.b)(c||(c=Object(D.a)(["\n  border-color: #e57878;\n"]))),T=N.c.div.attrs({className:"dropzone"})(s||(s=Object(D.a)(["\n  border: 1px dashed #ddd;\n  border-radius: 4px;\n  cursor: pointer;\n\n  transition: height 1.5s ease;\n\n  ",";\n  ",";\n"])),function(e){return e.isDragActive&&M},function(e){return e.isDragReject&&V}),P={default:"#999",error:"#e57878",success:"#78e5d5"},Y=N.c.p(d||(d=Object(D.a)(["\n  display: flex;\n  color: ",";\n  justify-content: center;\n  align-items: center;\n  padding: 15px 0;\n  height:100px;\n"])),function(e){return P[e.type||"default"]});function H(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(O.a)(e);if(t){var r=Object(O.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(R.a)(this,n)}}var L,B,C,_,J=function(e){Object(y.a)(n,e);var t=H(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).renderDragMessage=function(e,t){return e?t?p.a.createElement(Y,{type:"error"},"File not supported"):p.a.createElement(Y,{type:"success"},"Drag and Drop Image Here"):p.a.createElement(Y,null,"Drag and Drop Image Here...")},e}return Object(E.a)(n,[{key:"render",value:function(){var e=this,t=this.props.onUpload;return p.a.createElement(A.a,{accept:"image/*",onDropAccepted:t},function(t){var n=t.getRootProps,a=t.getInputProps,r=t.isDragActive,o=t.isDragReject;return p.a.createElement(T,Object.assign({},n(),{isDragActive:r,isDragReject:o}),p.a.createElement("input",a()),e.renderDragMessage(r,o))})}}]),n}(u.Component),W=n(35),q=n(6),G=N.c.ul(L||(L=Object(D.a)(["\n  margin-top: 20px;\n\n  li.imgUploaded {\n    display:block;\n    text-align:center;\n    div {\n      div {\n        width: 360px;\n        height: 168px;\n        background-position: 100% 100%;\n        margin-right:0px;\n      }\n    }\n  }\n\n  .btDelete {\n    background-color: transparent;\n    border: none;\n  }\n\n  .zoomOverFlow {\n    overflow: hidden;\n  }\n  .zoomHover {\n    transition: all 0.3s ease 0s;\n    width: 100%;\n  }\n  .zoomHover:hover {\n    transform:scale(4.00);\n  }\n\n  .svgDelete {\n    height: 24px!important;\n    width: 26px!important;\n  }\n\n  div.delete {\n    height:47px;\n    overflow:visible;\n  }\n\n  div.svg svg {\n    margin-right:8px;\n  }\n\n  li {\n    display:block;\n    div.link {\n      height:200px;\n      div {\n        width: auto;\n        height: auto;\n        background-position: 100% 100%;\n        margin-right: 0px;\n        /* display: inline-block; */\n        padding: 10px;\n      }\n      div.delete {\n        \n      }\n    }\n  }\n\n  li {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: #444;\n\n    & + li {\n      margin-top: 15px;\n    }\n  }\n"]))),K=N.c.div(B||(B=Object(D.a)(["\n  margin-top: 20px;\n  min-height:47px;\n  display: block;\n  text-align: center;\n  border: 1px dashed #f85731;\n  border-radius: 4px;\n  transition: height 0.2s ease;\n  padding: 5px;\n\n  div {\n    display: flex;\n    flex-direction: column;\n\n    span {\n      font-size: 12px;\n      color: #999;\n      margin-top: 5px;\n    }\n  }\n"]))),Q=N.c.div(C||(C=Object(D.a)(["\n  display: flex;\n  align-items: center;\n\n  div {\n    display: flex;\n    flex-direction: column;\n\n    span {\n      font-size: 12px;\n      color: #999;\n      margin-top: 5px;\n\n      button {\n        border: 0;\n        background: transparent;\n        color: #e57878;\n        margin-left: 5px;\n        cursor: pointer;\n      }\n    }\n  }\n"]))),X=N.c.div(_||(_=Object(D.a)(["\n  width: 36px;\n  height: 36px;\n  border-radius: 5px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  margin-right: 10px;\n"])),function(e){return e.src}),Z=n(36),$=n.n(Z),ee=function(e){var t=e.files,n=e.onDelete;e.odometer;return p.a.createElement(G,null,t.map(function(e){return p.a.createElement("li",{key:e.id,className:"imgUploaded"},p.a.createElement(Q,{className:"zoomOverFlow"},p.a.createElement($.a,null,p.a.createElement(X,{src:e.preview,className:"zoomHover_"}))),p.a.createElement("div",{className:"link"},p.a.createElement("div",{className:"svg"},e.uploaded&&p.a.createElement(q.a,{size:24,color:"#78e5d5"}),e.error&&p.a.createElement(q.c,{size:24,color:"#e57878"})),p.a.createElement("div",null,p.a.createElement("strong",null,e.name),p.a.createElement("span",null," | ",e.readableSize," ")),p.a.createElement("div",null,"Image Link:",p.a.createElement("br",null),e.url&&p.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},p.a.createElement(q.d,{style:{marginRight:8},size:24,color:"#222"}))),!e.uploaded&&!e.error&&p.a.createElement(W.a,{styles:{root:{width:24},path:{stroke:"#7159c1"}},strokeWidth:10,percentage:e.progress}),p.a.createElement("div",{className:"delete"},!!e.url&&p.a.createElement("button",{className:"btDelete",onClick:function(){return n(e.id)}},p.a.createElement(q.b,{className:"svgDelete",style:{marginRight:8},size:24,color:"#222"})))))}))},te=(n(85),n(37)),ne=n.n(te),ae=function(e){e.user;return p.a.createElement("header",null,p.a.createElement("div",{className:"wrapper"},p.a.createElement("div",null,p.a.createElement("img",{src:ne.a}),p.a.createElement("h1",null,"COOP"))))};function re(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(O.a)(e);if(t){var r=Object(O.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(R.a)(this,n)}}var oe=n(12),le="Analysing your document...",ie=function(e){Object(y.a)(n,e);var t=re(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={uploadedFiles:[],textOdometer:[],textVIN:[],textYear:[],textDateExp:[],textState:[],textModel:[],textType:[],key:[],currentImgId:[0]},e.handleUpload=function(t){e.setState({textOdometer:le}),e.setState({textVIN:le}),e.setState({textYear:le}),e.setState({textDateExp:le}),e.setState({textState:le}),e.setState({textModel:le}),e.setState({textType:le}),e.state.currentImgId!==[0]&&e.handleDelete(e.state.currentImgId);var n=t.map(function(e){return{file:e,id:Object(S.uniqueId)(),name:e.name,readableSize:k()(e.size),preview:URL.createObjectURL(e),progress:0,uploaded:!1,error:!1,url:null,odometer:null}});e.setState({uploadedFiles:e.state.uploadedFiles.concat(n)}),n.forEach(e.processUpload)},e.updateFile=function(t,n){e.setState({uploadedFiles:e.state.uploadedFiles.map(function(e){return t===e.id?Object(b.a)({},e,n):e})})},e.callApiRekognition=function(t){return new Promise(function(n){var a=[],r=[];oe.post("https://3y8s7s4phc.execute-api.us-east-1.amazonaws.com/rekognition-coop-vehicle-document?key="+t).then(function(e){e.data.getVIN.length>0&&(a=e.data.getVIN),e.data.getVIN.length>0&&(r=e.data.getDateExp)}).catch(function(e){console.log(e)}).then(function(){0===a.length?(e.setState({textVIN:"Not Recognized"}),e.setState({textYear:"Not Recognized"}),e.setState({textState:"Not Recognized"}),e.setState({textModel:"Not Recognized"}),e.setState({textType:"Not Recognized"})):(e.setState({textVIN:a}),e.callApiVinNHTSA(a)),0===r.length?e.setState({textDateExp:"Not Recognized"}):e.setState({textDateExp:r})})})},e.callApiVinNHTSA=function(t){return new Promise(function(n){var a=[],r=[],o=[],l=[];oe.get("https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended/"+t+"?format=json").then(function(e){if(null!=e.data&&e.data.Results.length>0)for(var t=0;t<e.data.Results.length;t++)""!==e.data.Results[t].ModelYear&&a.push(e.data.Results[t].ModelYear),""!==e.data.Results[t].PlantState&&r.push(e.data.Results[t].PlantState),e.data.Results[t].Model&&o.push(e.data.Results[t].Model),e.data.Results[t].VehicleType&&l.push(e.data.Results[t].VehicleType)}).catch(function(e){console.log(e)}).then(function(){0===a.length?e.setState({textYear:"Not Recognized"}):e.setState({textYear:a}),0===r.length?e.setState({textState:"Not Recognized"}):e.setState({textState:r}),0===o.length?e.setState({textModel:"Not Recognized"}):e.setState({textModel:o}),0===l.length?e.setState({textType:"Not Recognized"}):e.setState({textType:l})})})},e.processUpload=function(t){var n=new FormData;n.append("file",t.file,t.name);var a="";z.post("posts",n,{onUploadProgress:function(n){var a=parseInt(Math.round(100*n.loaded/n.total));e.updateFile(t.id,{progress:a})}}).then(function(n){a=n.data.key,e.callApiRekognition(a),e.setState({currentImgId:n.data._id}),e.updateFile(t.id,{uploaded:!0,id:n.data._id,url:n.data.url})})},e.handleDelete=function(){var t=Object(x.a)(h.a.mark(function t(n){var a;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z.delete("posts/".concat(n));case 2:a="",a=e.state.textOdometer!==le?"":le,e.setState({uploadedFiles:e.state.uploadedFiles.filter(function(e){return e.id!==n}),textOdometer:a});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e}return Object(E.a)(n,[{key:"componentWillUnmount",value:function(){this.state.uploadedFiles.forEach(function(e){return URL.revokeObjectURL(e.preview)})}},{key:"render",value:function(){var e=this.state.uploadedFiles;return p.a.createElement(p.a.Fragment,null,p.a.createElement(ae,null),p.a.createElement(F,null,p.a.createElement(U,null,p.a.createElement(J,{onUpload:this.handleUpload}),!!e.length&&p.a.createElement(ee,{files:e,onDelete:this.handleDelete}),p.a.createElement(K,null,p.a.createElement("h2",null,"Document Recognized"),p.a.createElement("h4",null,"VIN"),this.state.textVIN,p.a.createElement("br",null),p.a.createElement("h4",null,"Vehicle Year"),this.state.textYear,p.a.createElement("br",null),p.a.createElement("h4",null,"Date Expiration"),this.state.textDateExp,p.a.createElement("br",null),p.a.createElement("h4",null,"State"),this.state.textState,p.a.createElement("br",null),p.a.createElement("h4",null,"Model"),this.state.textModel,p.a.createElement("br",null),p.a.createElement("h4",null,"Type"),this.state.textType)),p.a.createElement(I,null)))}}]),n}(u.Component);g.a.render(p.a.createElement(ie,null),document.getElementById("root"))}},[[42,2,1]]]);
//# sourceMappingURL=main.15eaccd5.chunk.js.map