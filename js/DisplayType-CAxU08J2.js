import{n as u}from"./other-qP_wSEGc.js";import{aj as e,_ as V}from"./common-s8mLMzRm.js";import"./vendor-CvG_Gu8L.js";const t=n=>(Vue.pushScopeId("data-v-1a0a98b7"),n=n(),Vue.popScopeId(),n),_={class:"DisplayType"},p=t(()=>Vue.createElementVNode("span",{class:"f16"},"展示范围",-1)),m={class:"content"},y=t(()=>Vue.createElementVNode("div",{class:"left"},"公开可见",-1)),E={key:0,class:"right"},f=t(()=>Vue.createElementVNode("img",{src:u,alt:""},null,-1)),T=[f],v=t(()=>Vue.createElementVNode("div",{class:"left"},"校友可见",-1)),h={key:0,class:"right"},k=t(()=>Vue.createElementVNode("img",{src:u,alt:""},null,-1)),L=[k],N=t(()=>Vue.createElementVNode("div",{class:"left"},"仅自己可见",-1)),P={key:0,class:"right"},Y=t(()=>Vue.createElementVNode("img",{src:u,alt:""},null,-1)),S=[Y],C=Vue.defineComponent({name:"DisplayType"}),D=Vue.defineComponent({...C,setup(n){const r=VueRouter.useRouter(),d=VueRouter.useRoute(),s=Vue.reactive({displayType:e.DISPLAY_TYPE.ALL});Vue.onMounted(()=>{s.displayType=~~d.query.displayType});function c(a){s.displayType=a,localStorage.setItem("changeDisplayType",a),r.back()}return(a,o)=>{const i=Vue.resolveComponent("BaseHeader");return Vue.openBlock(),Vue.createElementBlock("div",_,[Vue.createVNode(i,null,{center:Vue.withCtx(()=>[p]),_:1}),Vue.createElementVNode("div",m,[Vue.createElementVNode("div",{class:"row",onClick:o[0]||(o[0]=l=>c(Vue.unref(e).DISPLAY_TYPE.ALL))},[y,s.displayType===Vue.unref(e).DISPLAY_TYPE.ALL?(Vue.openBlock(),Vue.createElementBlock("div",E,T)):Vue.createCommentVNode("",!0)]),Vue.createElementVNode("div",{class:"row",onClick:o[1]||(o[1]=l=>c(Vue.unref(e).DISPLAY_TYPE.SCHOOL))},[v,s.displayType===Vue.unref(e).DISPLAY_TYPE.SCHOOL?(Vue.openBlock(),Vue.createElementBlock("div",h,L)):Vue.createCommentVNode("",!0)]),Vue.createElementVNode("div",{class:"row",onClick:o[2]||(o[2]=l=>c(Vue.unref(e).DISPLAY_TYPE.ME))},[N,s.displayType===Vue.unref(e).DISPLAY_TYPE.ME?(Vue.openBlock(),Vue.createElementBlock("div",P,S)):Vue.createCommentVNode("",!0)])])])}}}),g=V(D,[["__scopeId","data-v-1a0a98b7"]]);export{g as default};