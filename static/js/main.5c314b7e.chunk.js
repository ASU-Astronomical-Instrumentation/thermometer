(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{23:function(e,t,n){e.exports=n(39)},28:function(e,t,n){},29:function(e,t,n){},38:function(e,t,n){e.exports=n.p+"static/media/Orbitron-Bold.10f7e47e.ttf"},39:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"setTemperature",(function(){return j}));var a=n(0),o=n.n(a),i=n(12),c=n.n(i),u=(n(28),n(2)),s=n(3),l=n(8),p=n(7),m=(n(29),n(6)),v=n(13),h=n(14);function b(){var e=Object(v.a)(["\n  font-family: Orbitron;\n  color: white;\n  font-size: 5vw;\n"]);return b=function(){return e},e}var d=h.a.h1(b()),f=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){var e=parseFloat(this.props.degrees).toFixed(2);return isNaN(e)?o.a.createElement(d,{id:"info"},"Loading..."):o.a.createElement(d,{id:"temp"},e,"\xb0",this.props.scale)}}]),n}(o.a.Component),y=n(1),g=n(10),O=n(5);function j(e){return{type:"SET_TEMPERATURE",newTemperature:e}}var w=n(11),E=n.n(w),k=n(16),C=function(e,t){var n=e.getInt8(t+2)>>>31,r=[e.getUint8(t),e.getUint8(t+1),e.getUint8(t+2),e.getInt8(t+3)],a=r[3],o=r[0]|r[1]<<8|r[2]<<16;return n&&(o|=255<<24),o*Math.pow(10,a)},_={health_thermometer:{str:"health_thermometer",id:6153}},x={temperature_measurement:{str:"temperature_measurement",id:10945},temperature_type:{str:"temperature_type",id:10781},intermediate_temperature:{str:"intermediate_temperature",id:10782},measurement_interval:{str:"measurement_interval",id:10785}},I=function(){var e=Object(k.a)(E.a.mark((function e(){var t,n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.bluetooth.requestDevice({filters:[{services:[_.health_thermometer.str]}]});case 2:if(void 0!=(t=e.sent)){e.next=8;break}return console.error("No connection to device"),e.abrupt("return",{});case 8:console.log("Conencted to: ",t.name);case 9:return e.next=11,t.gatt.connect();case 11:if(void 0!=(n=e.sent)){e.next=17;break}return console.error("No connection to server"),e.abrupt("return",{});case 17:console.log("Connected to server");case 18:return e.next=20,n.getPrimaryService(_.health_thermometer.str);case 20:if(void 0!=(r=e.sent)){e.next=26;break}return console.error("No connection to service"),e.abrupt("return",{});case 26:console.log("Connected to service");case 27:return e.abrupt("return",{device:t,service:r});case 28:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(k.a)(E.a.mark((function e(t,n){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n!=x.temperature_measurement.str){e.next=15;break}return e.next=3,t.service.getCharacteristic(x.temperature_measurement.str);case 3:if(void 0!=(r=e.sent)){e.next=9;break}return console.log("No connection to characteristic"),e.abrupt("return",{});case 9:console.log("Conencted to characteristic");case 10:return e.t0=C,e.next=13,r.readValue();case 13:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1,1));case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function T(){var e=Object(v.a)(["\n  font-family: Orbitron;\n  color: white;\n  font-size: 5vw;\n  background-color: Transparent;\n  background-repeat:no-repeat;\n  border: none;\n  cursor:pointer;\n  overflow: hidden;\n  outline:none;\n"]);return T=function(){return e},e}var z=h.a.button(T()),D=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={currentTemperature:0,bluetoothConnection:void 0},r.temperatureInterval=void 0,r.initializeBluetoothInterval=r.initializeBluetoothInterval.bind(Object(g.a)(r)),r.initializeBluetoothConnection=r.initializeBluetoothConnection.bind(Object(g.a)(r)),r}return Object(s.a)(n,[{key:"componentWillUnmount",value:function(){void 0!=this.temperatureInterval&&clearInterval(this.temperatureInterval)}},{key:"initializeBluetoothConnection",value:function(){var e=this,t=I();document.getElementById("info").style.display="inline",document.getElementById("button").style.display="none",t.then((function(t){e.setState({bluetoothConnection:t},e.initializeBluetoothInterval)}),(function(t){console.log(t),e.setState({bluetoothError:t})}))}},{key:"initializeBluetoothInterval",value:function(){var e=this;console.log(this.state.bluetoothConnection),this.temperatureInterval=setInterval((function(){B(e.state.bluetoothConnection,x.temperature_measurement.str).then((function(t){e.props.actions.setTemperature(t)}),(function(t){console.log(t),e.setState({readTemperatureError:t})}))}),1e3)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(z,{id:"button",type:"button",onClick:this.initializeBluetoothConnection}," > Connect to Device"))}}]),n}(o.a.Component);var N=Object(m.b)((function(e){return{temperatureDisplay:e.temperatureDisplay}}),(function(e){return{actions:Object(O.a)(Object(y.a)({},r),e)}}))(D),S=(n(38),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(N,null),o.a.createElement(f,{degrees:this.props.temperatureDisplay.temperature,scale:"F"}))}}]),n}(o.a.Component)),U=Object(m.b)((function(e){return{temperatureDisplay:e.temperatureDisplay}}))(S);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M={temperatureDisplay:{temperature:"#.##"}};var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEMPERATURE":return Object(y.a)(Object(y.a)({},e),{},{temperatureDisplay:Object(y.a)(Object(y.a)({},e.temperatureDisplay),{},{temperature:t.newTemperature})});default:return e}},A=Object(O.b)(R);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m.a,{store:A},o.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.5c314b7e.chunk.js.map