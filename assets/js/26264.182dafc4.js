"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[26264],{26264:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var n=r(73037),o=r(84950);const u={class:"network-key-converter"};var a=r(4421);const l=(0,n.pM)({name:"NetworkKeyConverter",setup(e,t){const r=(0,a.KR)(""),o=(0,a.KR)("");return(0,n.wB)(r,(e=>{if(!e.trim().length)return void(o.value="");let t=[];try{t=JSON.parse(e)}catch(r){t=e.split(/\n\r?/).map((e=>{const t=e.match(/(\d)+/);return t&&t[0]||0}))}16!=t.length?o.value="Sorry, could not parse 16 bytes from you input":o.value=t.map((e=>("0"+parseInt(e,10).toString(16)).slice(-2).toUpperCase())).join(":")})),{inputKey:r,outputKey:o}}}),p=(0,r(94533).A)(l,[["render",function(e,t,r,a,l,p){return(0,n.uX)(),(0,n.CE)("div",u,[(0,n.bo)((0,n.Lk)("textarea",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.inputKey=t),placeholder:"Paste your Network-Key in DEC here"},null,512),[[o.Jo,e.inputKey]]),(0,n.bo)((0,n.Lk)("textarea",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.outputKey=t),placeholder:"Network-Key in HEX",disabled:""},null,512),[[o.Jo,e.outputKey]])])}]])}}]);