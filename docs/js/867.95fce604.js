"use strict";(self["webpackChunksefact"]=self["webpackChunksefact"]||[]).push([[867],{3867:function(t,e,s){s.r(e),s.d(e,{default:function(){return r}});var i=s(2482);class a extends Phaser.Scene{constructor(t){super(t||{key:"LayoutGame"})}init(t){}preload(){}create(){}resize(){}update(){}}class h extends a{constructor(){super({key:"Start"}),(0,i.Z)(this,"width",0),(0,i.Z)(this,"height",0),(0,i.Z)(this,"container",void 0)}preload(){super.preload(),this.load.image("bg","assets/images/bg.jpeg")}init(t){super.preload(),this.width=this.sys.canvas.width,this.height=this.sys.canvas.height}create(){super.create(),this.initGame()}initGame(){console.log("game: ",this.width,this.height);const t=this.add.graphics().fillStyle(0,1).fillRect(this.sys.canvas.width/2,0,this.width,this.height);this.container&&this.container.add(t)}}var r=h}}]);
//# sourceMappingURL=867.95fce604.js.map