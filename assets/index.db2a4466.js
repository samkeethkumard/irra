import{S as o}from"./vendor.192389c2.js";const a=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=c(e);fetch(e.href,i)}};a();o();o().reveal(".navbar",{mobile:!1,scale:.55});o().reveal(".navbar-brand",{mobile:!1,viewFactor:0,delay:100,distance:"75px",scale:.85,origin:"top",easing:"ease-in-out"});o().reveal(".nav-item",{mobile:!1,viewFactor:0,delay:100,distance:"75px",scale:.85,origin:"top",easing:"ease-in-out"});function l(n){let r=window.scrollY;var c=0;if(r%200!=c){c=r%200;var t=-60+r/(window.innerHeight>window.innerWidth?20:12),e=100-r/100;e=e<50?50:e,t=t>200?200:t,document.querySelector(".about-section").style.backdropFilter="hue-rotate("+t+"deg) brightness("+e+"%)",document.querySelector(".team-section").style.backdropFilter="hue-rotate("+t+"deg) brightness("+e+"%)",document.querySelector(".story-section").style.backdropFilter="hue-rotate("+t+"deg) brightness("+e+"%)",document.querySelector(".solution-section").style.backdropFilter="hue-rotate("+t+"deg) brightness("+e+"%)",document.querySelector(".works-section").style.backdropFilter="hue-rotate("+t+"deg) brightness("+e+"%)",document.querySelector(".technology-section").style.backdropFilter="hue-rotate("+t+"deg) brightness("+e+"%)",document.querySelector(".contact-section").style.backdropFilter="hue-rotate("+t+"deg) brightness("+e+"%)",document.querySelector(".about-section").style.webkitBackdropFilter="hue-rotate("+t+"deg) brightness("+e+"%)",document.querySelector(".team-section").style.webkitBackdropFilter="hue-rotate("+t+"deg) brightness("+e+"%)",document.querySelector(".story-section").style.webkitBackdropFilter="hue-rotate("+t+"deg) brightness("+e+"%)",document.querySelector(".solution-section").style.webkitBackdropFilter="hue-rotate("+t+"deg) brightness("+e+"%)",document.querySelector(".works-section").style.webkitBackdropFilter="hue-rotate("+t+"deg) brightness("+e+"%)",document.querySelector(".technology-section").style.webkitBackdropFilter="hue-rotate("+t+"deg) brightness("+e+"%)",document.querySelector(".contact-section").style.webkitBackdropFilter="hue-rotate("+t+"deg) brightness("+e+"%)",document.getElementById("asteroid").style.objectPosition="50% "+.1*r*50+"%"}r>=150&&!document.querySelector(".navbar").classList.contains(".scrolled")?document.querySelector(".navbar").classList.add("scrolled"):r<150&&document.querySelector(".navbar").classList.contains(".scrolled")&&document.querySelector(".navbar").classList.remove("scrolled")}document.addEventListener("scroll",l);o().reveal("#hero",{mobile:!1,scale:.85});setTimeout(()=>{scrollTo(0,0)},500);o({reset:!0}).reveal(".hero-heading",{scale:.85});o({reset:!0}).reveal(".hero-headline",{delay:100,distance:"50px",scale:.85,origin:"bottom",easing:"ease-in-out",viewFactor:.5});o({reset:!0}).reveal(".feature-icon",{delay:100,distance:"50px",scale:.85,origin:"left",easing:"ease-in-out",viewFactor:.5});o({reset:!0}).reveal(".data-content",{delay:150,distance:"30px",scale:.9,origin:"bottom",easing:"ease-in-out",viewFactor:.5});o({reset:!1}).reveal(".list-content",{delay:150,distance:"150px",scale:.9,origin:"right",easing:"ease-in-out",viewFactor:.5});o({reset:!0}).reveal(".subhead",{delay:150});o({reset:!0}).reveal(".rounded-circle",{delay:150});o({reset:!0}).reveal(".member-name",{delay:100,distance:"50px",scale:.9,origin:"bottom",easing:"ease-in-out",viewFactor:.5});
