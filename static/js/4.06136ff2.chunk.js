(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{312:function(t,e,a){t.exports={slider:"slider_slider__2uix0",btnn:"slider_btnn__1lfjo",images:"slider_images__3iyiJ",input:"slider_input__2af7Z",title:"slider_title__3a2EF",input__inner:"slider_input__inner__sbt62",warn:"slider_warn__3Bpvk",btn:"slider_btn__1vK-Z",btn__inner:"slider_btn__inner__33sh0",btn_left:"slider_btn_left__2waUm",btn_right:"slider_btn_right__1nO_k"}},313:function(t,e,a){t.exports=a.p+"static/media/down-arrow.78cd7621.svg"},314:function(t,e,a){"use strict";a.r(e);var s=a(23),n=a(24),i=a(26),r=a(25),c=a(0),l=a.n(c),o=a(312),u=a.n(o),m=a(15),p=a(313),d=a.n(p),h=function(t){Object(i.a)(a,t);var e=Object(r.a)(a);function a(){var t;return Object(s.a)(this,a),(t=e.call(this)).state={images:["https://img3.akspic.ru/image/104645-pagoda-vesna-dostoprimechatelnost-tsvetok-otdyx-1920x1080.jpg","http://il-viaggio.mamatours.it/FOTO/ELEMENTI/Viaggi-di-Lusso-Asia_03.jpg","https://www.pixel-creation.com/wp-content/uploads/cherry-blossoms-japan-e29da4-4k-hd-desktop-wallpaper-for-4k-ultra-hd-tv-5.jpg","https://img3.goodfon.ru/original/1920x1080/e/91/daygo-kioto-yaponiya.jpg","https://ifly-selections-axaxzmkc.netdna-ssl.com/10301486-klm-selections/content/image/_f_hd/Japan-Osaka_Header_first-frame-1522228470.jpg"],currentImage:0,isCucle:!1,pass:"",incorr:""},t.PassInput=l.a.createRef(),t.Img_inn=l.a.createRef(),t.nextBtn=l.a.createRef(),t.prevBtn=l.a.createRef(),t}return Object(n.a)(a,[{key:"disabled",value:function(t){this.Img_inn.current.classList.add("animSlider"),t.current.disabled=!0,setTimeout((function(){t.current.disabled=!1}),1050)}},{key:"prevStep",value:function(){0===this.state.currentImage&&this.setState({currentImage:this.state.currentImage=this.state.images.length}),this.setState({currentImage:this.state.currentImage+-1}),this.disabled(this.prevBtn)}},{key:"nextStep",value:function(){this.state.currentImage===this.state.images.length-1&&this.setState({currentImage:this.state.currentImage=-1}),this.setState({currentImage:this.state.currentImage+1}),this.disabled(this.nextBtn)}},{key:"password",value:function(t){"leve"===this.PassInput.current.value?(this.setState({pass:this.PassInput.current.value}),this.setState({incorr:"yes"})):this.setState({incorr:"no"})}},{key:"animation",value:function(t){}},{key:"render",value:function(){return"leve"!==this.state.pass?l.a.createElement("div",{className:u.a.input__inner},l.a.createElement("h1",{className:u.a.title},"Write password"),"no"===this.state.incorr?l.a.createElement("h6",{className:u.a.warn},"Incorrect password"):"",l.a.createElement("input",{ref:this.PassInput,className:u.a.input,type:"password"}),l.a.createElement("button",{className:u.a.btnn,onClick:this.password.bind(this)},"submit")):l.a.createElement("div",{className:u.a.slider},l.a.createElement("div",{className:u.a.btn__inner},l.a.createElement("button",{className:u.a.btn+" "+u.a.btn_left,"data-direction":"prev",onClick:this.prevStep.bind(this),ref:this.prevBtn,style:{backgroundImage:"url(".concat(d.a||"https://www.flaticon.com/svg/static/icons/svg/814/814031.svg",")")}}," ")),l.a.createElement("div",{ref:this.Img_inn,className:u.a.images,style:{backgroundImage:"url(".concat(this.state.images[this.state.currentImage],")")}}),l.a.createElement("div",{className:u.a.btn__inner},l.a.createElement("button",{className:u.a.btn+" "+u.a.btn_right,"data-direction":"next",onClick:this.nextStep.bind(this),ref:this.nextBtn,style:{backgroundImage:"url(".concat(d.a||"https://www.flaticon.com/svg/static/icons/svg/814/814031.svg",")")}}," ")))}}]),a}(c.Component);e.default=Object(m.b)((function(t){return{imagesMy:t.photosPage.pixels}}),{})(h)}}]);
//# sourceMappingURL=4.06136ff2.chunk.js.map