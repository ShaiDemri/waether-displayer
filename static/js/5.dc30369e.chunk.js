(this["webpackJsonpshai-demri-05-08-2020"]=this["webpackJsonpshai-demri-05-08-2020"]||[]).push([[5],{150:function(e,t,a){"use strict";var r={1:"https://developer.accuweather.com/sites/default/files/01-s.png",2:"https://developer.accuweather.com/sites/default/files/02-s.png",3:"https://developer.accuweather.com/sites/default/files/03-s.png",4:"https://developer.accuweather.com/sites/default/files/04-s.png",5:"https://developer.accuweather.com/sites/default/files/05-s.png",6:"https://developer.accuweather.com/sites/default/files/06-s.png",7:"https://developer.accuweather.com/sites/default/files/07-s.png",8:"https://developer.accuweather.com/sites/default/files/08-s.png",11:"https://developer.accuweather.com/sites/default/files/11-s.png",12:"https://developer.accuweather.com/sites/default/files/12-s.png",13:"https://developer.accuweather.com/sites/default/files/13-s.png",14:"https://developer.accuweather.com/sites/default/files/14-s.png",15:"https://developer.accuweather.com/sites/default/files/15-s.png",16:"https://developer.accuweather.com/sites/default/files/16-s.png",17:"https://developer.accuweather.com/sites/default/files/17-s.png",18:"https://developer.accuweather.com/sites/default/files/18-s.png",19:"https://developer.accuweather.com/sites/default/files/19-s.png",20:"https://developer.accuweather.com/sites/default/files/20-s.png",21:"https://developer.accuweather.com/sites/default/files/21-s.png",22:"https://developer.accuweather.com/sites/default/files/22-s.png",23:"https://developer.accuweather.com/sites/default/files/23-s.png",24:"https://developer.accuweather.com/sites/default/files/24-s.png",25:"https://developer.accuweather.com/sites/default/files/25-s.png",26:"https://developer.accuweather.com/sites/default/files/26-s.png",29:"https://developer.accuweather.com/sites/default/files/29-s.png",30:"https://developer.accuweather.com/sites/default/files/30-s.png",31:"https://developer.accuweather.com/sites/default/files/31-s.png",32:"https://developer.accuweather.com/sites/default/files/32-s.png",33:"https://developer.accuweather.com/sites/default/files/33-s.png",34:"https://developer.accuweather.com/sites/default/files/34-s.png",35:"https://developer.accuweather.com/sites/default/files/35-s.png",36:"https://developer.accuweather.com/sites/default/files/36-s.png",37:"https://developer.accuweather.com/sites/default/files/37-s.png",38:"https://developer.accuweather.com/sites/default/files/38-s.png",39:"https://developer.accuweather.com/sites/default/files/39-s.png",40:"https://developer.accuweather.com/sites/default/files/40-s.png",41:"https://developer.accuweather.com/sites/default/files/41-s.png",42:"https://developer.accuweather.com/sites/default/files/42-s.png",43:"https://developer.accuweather.com/sites/default/files/43-s.png",44:"https://developer.accuweather.com/sites/default/files/44-s.png"};t.a=function(e){return r[e]}},151:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=function(e){return(9*e/5+32).toFixed(2)}},152:function(e,t,a){"use strict";a.d(t,"a",(function(){return f})),a.d(t,"c",(function(){return h})),a.d(t,"b",(function(){return d})),a.d(t,"d",(function(){return m}));var r=a(153),n=a.n(r),c=a(154),s=a(157),i=a.n(s),o="Jk0eCaZKTjS35inGGK8R9r8R0bFxgGB5",u=function(e){return"https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(o,"&q=").concat(e)},l=function(e){return"https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=").concat(o,"&metric=true")},p=function(e){return"https://dataservice.accuweather.com/forecasts/v1/daily/1day/".concat(e,"?apikey=").concat(o,"&metric=true")},f=function(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){var r,c,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",a({type:"FETCH_CITIES_CODE",payload:[]}));case 2:return t.prev=2,r=u(e),t.next=6,i.a.get(r);case 6:if(!((c=t.sent).data.length>1)){t.next=12;break}return s=c.data.map((function(e){return{key:e.Key,name:e.LocalizedName,country:e.AdministrativeArea.LocalizedName+","+e.Country.LocalizedName}})),t.abrupt("return",a({type:"FETCH_CITIES_CODE",payload:s}));case 12:return t.abrupt("return",a(h(c.data[0].Key)));case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(2),console.log("Got an error!",JSON.stringify(t.t0));case 18:case"end":return t.stop()}}),t,null,[[2,15]])})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){var r,c,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=l(e),t.next=4,i.a.get(r);case 4:return c=t.sent,s={DailyForecasts:c.data.DailyForecasts.map((function(e){return{Date:e.Date,Unit:e.Temperature.Minimum.Unit,Temperature:{Minimum:e.Temperature.Minimum.Value,Maximum:e.Temperature.Maximum.Value},Day:{Icon:e.Day.Icon,IconPhrase:e.Day.IconPhrase,HasPrecipitation:e.Day.HasPrecipitation},Night:{Icon:e.Night.Icon,IconPhrase:e.Night.IconPhrase,HasPrecipitation:e.Night.HasPrecipitation}}}))},t.abrupt("return",a({type:"FETCH_WEATHER",payload:{Key:e,DailyForecasts:s.DailyForecasts}}));case 9:t.prev=9,t.t0=t.catch(0),console.log("Got an error!",JSON.stringify(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(t){try{e.forEach(function(){var e=Object(c.a)(n.a.mark((function e(a){var r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p(a),e.next=3,i.a.get(r);case 3:return c=e.sent,e.abrupt("return",t({type:"FETCH_ONE_DAY_WEATHER",payload:{response:c.data,locationCode:a}}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}catch(a){console.log("Got an error!",JSON.stringify(a))}}},m=function(e){return function(t){return t({type:"TOGGLE_FAVORITE",payload:e})}}},214:function(e,t,a){"use strict";a.r(t);var r=a(153),n=a.n(r),c=a(154),s=a(0),i=a.n(s),o=a(63),u=a(21),l=a(39),p=a(152),f=a(42),h=a(128),d=a(137),m=a(102),v=a(201),g=a(202),w=a(203),y=a(150),E=a(151),b=a(188),k=Object(h.a)((function(e){return{card:{minWidth:275},media:{height:0,paddingTop:"56.25%"},title:{fontSize:14},pos:{marginBottom:12},container:{marginBottom:e.spacing(2)}}})),T=function(e){var t=e.favoriteWeather,a=e.favorite,r=k(),n=i.a.useState("Day"),c=Object(f.a)(n,2),s=c[0],o=c[1],u=i.a.useState(!1),p=Object(f.a)(u,2),h=p[0],T=p[1],O=function(e){return h?Object(E.a)(e):e};return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{className:r.container,container:!0,direction:"row",spacing:3,justify:"center",alignItems:"center"},i.a.createElement(m.a,{size:"small",onClick:function(){return T((function(e){return!e}))}},"Change To ",h?"Celsius":"Fahrenheit"),i.a.createElement(m.a,{size:"small",onClick:function(){return o((function(e){return"Day"===e?"Night":"Day"}))}},"View ","Day"===s?"Night":"Day")),i.a.createElement(d.a,{className:r.container,container:!0,direction:"row",spacing:3,justify:"space-around",alignItems:"center"},a.map((function(e){var a=t[e.key],n=e.name;return Object(b.isEmpty)(a)?i.a.createElement("h1",{key:e.key},"loading..."):i.a.createElement(d.a,{key:e.key,item:!0,xs:"auto"},i.a.createElement(v.a,{className:r.card,variant:"outlined"},i.a.createElement(g.a,null,i.a.createElement(l.a,{variant:"h5",component:"h2"},n),i.a.createElement(l.a,{className:r.pos},"The Temperature will range"," ",i.a.createElement("br",null),"from ".concat(O(a.Temperature.Minimum)).concat(h?"F":"C"," to ").concat(O(a.Temperature.Maximum)).concat(h?"F":"C")),i.a.createElement(l.a,{variant:"body2",component:"p"},"The ",s," will be ",a[s].IconPhrase)),i.a.createElement(w.a,{className:r.media,image:Object(y.a)(a[s].Icon),title:a[s].IconPhrase})))}))))};t.default=Object(o.b)((function(e){return{favoriteWeather:e.oneDayWeather,favorite:e.favorite}}),(function(e){return Object(u.b)({fetchFavoriteWeather:p.b},e)}))((function(e){var t=e.favorite,a=e.favoriteWeather,r=e.fetchFavoriteWeather,s=i.a.useCallback(Object(c.a)(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.map((function(e){return e.key})),e.next=3,r(a);case 3:case"end":return e.stop()}}),e)}))),[t,r]);return i.a.useEffect((function(){s()}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,null,"Your Favorite Locations"),i.a.createElement(T,{key:t.length,favoriteWeather:a,favorite:t}))}))}}]);
//# sourceMappingURL=5.dc30369e.chunk.js.map