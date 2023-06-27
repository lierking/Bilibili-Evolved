!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/show-upload-time"]=t():e["video/player/show-upload-time"]=t()}(globalThis,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{component:()=>m});const n=coreApis.componentApis.define,o=coreApis.observer,i=coreApis.utils,r=coreApis.utils.urls,a=coreApis.componentApis.feeds.api,s=coreApis.componentApis.video.videoInfo,l=coreApis.utils.log,c=coreApis.settings,d="显示视频投稿时间",p=(0,l.useScopedConsole)(d),m=(0,n.defineComponentMetadata)({author:{name:"wisokey",link:"https://github.com/wisokey"},name:"showUploadTime",displayName:d,description:"为视频播放页面的推荐列表中的视频添加显示视频投稿时间.\r\n\r\n`时间格式` 替换up名的文本格式 (默认为'up · yyyy-MM-dd'):\r\n  - y: 年\r\n  - M: 月\r\n  - d: 日\r\n  - h: 时\r\n  - m: 分\r\n  - s: 秒\r\n  - q: 季度\r\n  - up: up名\r\n",tags:[componentsTags.video],urlInclude:r.videoUrls,options:{formatString:{displayName:"文本格式",defaultValue:"up · yyyy-MM-dd",validator:(e,t)=>e?.trim()?e:t}},entry:async e=>{let{metadata:t}=e;const n=(e,t,n)=>{const o={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3)};let i=t.match(/(y+)/);null!==i&&(t=t.replace(i[0],`${e.getFullYear()}`.substring(4-i[0].length)));for(const e in o)e&&(i=t.match(new RegExp(`(${e})`)),null!==i&&(t=t.replace(i[0],1===i[0].length?o[e]:`00${o[e]}`.substring(`${o[e]}`.length))));return i=t.match(/(up)/),null!==i&&(t=t.replace(i[0],n)),t},r=function(e){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(!i){const{options:e}=(0,c.getComponentSettings)(t.name);i=e.formatString?.toString()}e.forEach((async e=>{if(o||!e.item.owner.mark){if(e.item.owner.mark=!0,o||!e.mark){let t;if(e.mark=!0,e.item.ctime)t=new Date(1e3*e.item.ctime);else{const n=new s.VideoInfo(e.item.aid);await n.fetchInfo(),t=n.createTime,e.item.ctime=t.getTime()/1e3}e.oldname||(e.oldname=e.name),e.name=n(t,i,e.oldname)}e.item.owner.name=e.name}}))},l=()=>{const e=dq("#reco_list");let t=(0,a.getVueData)(e);return void 0===t.isOpen&&(t=t.$children[0],void 0===t.isOpen&&(p.log("结构获取失败"),p.log(document.URL),p.log(t))),t};(0,c.addComponentListener)(`${t.name}.formatString`,(e=>{const t=l().$children.filter((e=>-1===e.$el.className.indexOf("special")));r(t,!0,e)}),!1),(0,o.urlChange)((async()=>{await(0,i.playerReady)();const e=l().$children.filter((e=>-1===e.$el.className.indexOf("special")));r(e)})),await(0,i.playerReady)(),(0,o.childList)(dq("#reco_list .rec-list"),(async()=>{const e=l();if(e.isOpen){const t=e.$children.filter((e=>-1===e.$el.className.indexOf("special")));r(t)}}))},commitHash:"81f08cb507412b0112f6d0e15bd713bd8bc89d8d",coreVersion:"2.7.2"});return t=t.component})()));