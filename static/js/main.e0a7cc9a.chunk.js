(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{52:function(e,t,n){e.exports=n(86)},79:function(e,t){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(41),c=n.n(r),o=n(19),i=n(10),u=n(6),m=n(42),s=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"About the project"),l.a.createElement("p",null,"This is a simple app to interchange data in realtime."),l.a.createElement("p",null,"The idea is to send some data from one device to another."),l.a.createElement("h2",null,"You need to use minimum two devices:"),l.a.createElement("ul",null,l.a.createElement("li",null,"one of them should has accelerometer (it will send position data)"),l.a.createElement("li",null,"another device to display received data")),l.a.createElement("h2",null,"Used technologies"),l.a.createElement("ul",null,l.a.createElement("li",null,"React.js"),l.a.createElement("li",null,"Node.js"),l.a.createElement("li",null,"Socket.io")))},d=n(44),h=function(e){var t=e.socket;return l.a.createElement(d.a,null,function(e){return e?(t.emit("dataFromSensor",JSON.stringify({position:{x:Math.round(e.x),y:Math.round(e.y),z:Math.round(e.z)}})),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,"x: ",Math.round(e.x)),l.a.createElement("li",null,"y: ",Math.round(e.y)),l.a.createElement("li",null,"z: ",Math.round(e.z))))):l.a.createElement("div",null,l.a.createElement("h1",null,"Accelerometer isn't supported on this device"),l.a.createElement("p",null,"You can use this device as a client part of app"))})},E=n(45);function p(){var e=Object(E.a)(["\n  height: 10vw;\n  width: 10vw;\n  background: rgb(\n    ",",\n    ",",\n    ","\n  );\n  margin: 0 auto;\n"]);return p=function(){return e},e}var v=n(46).a.div(p(),function(e){return e.position.x},function(e){return e.position.y},function(e){return e.position.z}),f=function(e){var t=e.socket,n=Object(a.useState)(null),r=Object(o.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)(function(){t.on("dataFromServer",function(e){var t=JSON.parse(e).position;i({x:Math.abs(25*t.x),y:Math.abs(25*t.y),z:Math.abs(25*t.z)})})},[]),c?l.a.createElement("div",null,l.a.createElement(v,{position:c}),l.a.createElement("h2",null,"rgb(",c.x,", ",c.y,", ",c.z,")")):l.a.createElement("div",null,l.a.createElement("h1",null,"One more thing!"),l.a.createElement("p",null,"Now open this site in sensor mode on device with accelerometer and ..."),l.a.createElement("p",null,"... let's the magic begin!"))},w=function(){var e=Object(m.a)("https://kraw3k.ct8.pl/"),t=Object(o.a)(e,1)[0];return l.a.createElement(i.a,null,l.a.createElement("div",{id:"menu"},l.a.createElement(i.b,{exact:!0,to:"/accelerometer/",activeClassName:"activeLink"},"Home"),l.a.createElement(i.b,{exact:!0,to:"/accelerometer/sensor",activeClassName:"activeLink"},"Sensor"),l.a.createElement(i.b,{exact:!0,to:"/accelerometer/client",activeClassName:"activeLink"},"Client")),l.a.createElement("div",{id:"content"},l.a.createElement(u.a,{exact:!0,path:"".concat("/accelerometer","/")},l.a.createElement(s,null)),l.a.createElement(u.a,{exact:!0,path:"".concat("/accelerometer","/client")},l.a.createElement(f,{socket:t})),l.a.createElement(u.a,{exact:!0,path:"".concat("/accelerometer","/sensor")},l.a.createElement(h,{socket:t}))),l.a.createElement("a",{id:"websiteLink",href:"https://kraw3k.github.io"},"kraw3k.github.io"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[52,1,2]]]);
//# sourceMappingURL=main.e0a7cc9a.chunk.js.map