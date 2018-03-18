!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PI2=2*Math.PI;var n={canvas:null,ctx:null};n.canvas=document.createElement("canvas"),n.canvas.className="fixed",document.body.appendChild(n.canvas),n.ctx=n.canvas.getContext("2d"),n.w=n.canvas.width=window.innerWidth,n.h=n.canvas.height=window.innerHeight,n.canvas.style.width="100%",n.canvas.style.height="100%",n.ctx=n.canvas.getContext("2d"),n.ctx.lineWidth=1.5,n.ctx.strokeStyle="white",window.addEventListener("resize",function(){n.w=n.canvas.width=window.innerWidth,n.h=n.canvas.height=window.innerHeight,n.ctx=n.canvas.getContext("2d"),n.ctx.strokeStyle="white"}),e.default=n,window.G=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),r=i(2),s=i(4),a=i(5),o=[new r.StarsLayer(.5),new r.StarsLayer(1),new r.StarsLayer(2),new r.StarsLayer(3),new r.StarsLayer(4),new r.StarsLayerWithUI(5)];window.addEventListener("resize",function(){s.planet.changeCenter(n.default.w/2,n.default.h/2)}),document.addEventListener("mousemove",function(t){for(var e=t.clientX-n.default.w/2,i=t.clientY-n.default.h/2,r=0;r<o.length;r++)o[r].move(e,i);s.planet.think(e,i)}),function t(){n.default.ctx.fillRect(0,0,n.default.w,n.default.h),o[0].draw(n.default.ctx),o[1].draw(n.default.ctx),o[2].draw(n.default.ctx),o[3].draw(n.default.ctx),o[4].draw(n.default.ctx),s.planet.draw(n.default.ctx),o[5].draw(n.default.ctx),requestAnimationFrame(t)}(),a.init();var h=4;o[5].each(function(t){t.x>100&&t.x<n.default.w-200&&t.y>100&&t.y<n.default.h-100&&h-- >0&&new a.PlanetDescription(t)})},function(t,e,i){"use strict";var n,r=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var s=i(3),a=function(){function t(t){this.stars=[];for(var e=0;e<400/(2*t);e++)this.stars.push(new s.Star(t))}return t.prototype.draw=function(t){for(var e=0;e<this.stars.length;e++)this.stars[e].draw(t)},t.prototype.move=function(t,e){for(var i=0;i<this.stars.length;i++)this.stars[i].move(t,e)},t.prototype.each=function(t){for(var e=0;e<this.stars.length;e++)t(this.stars[e],e,this.stars)},t}();e.StarsLayer=a;var o=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e}(a);e.StarsLayerWithUI=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),r=function(){function t(t){this.layerIndex=t,this.origLayerIndex=this.layerIndex,this.x=Math.random()*(n.default.w+200)-100,this.y=Math.random()*(n.default.h+200)-100,this.origX=this.x,this.origY=this.y,this.events={}}return t.prototype.draw=function(t){t.beginPath(),t.arc(this.x,this.y,this.layerIndex,0,n.PI2),t.stroke()},t.prototype.move=function(t,e){this.x=this.origX+t*(.01+this.layerIndex/50),this.y=this.origY+e*(.01+this.layerIndex/50),this.dispatchEvent("positionChange")},t.prototype.addEventListener=function(t,e){this.events[t]=e},t.prototype.dispatchEvent=function(t){this.events[t]&&this.events[t](this)},t}();e.Star=r},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),r=function(){function t(){this.x=n.default.w/2,this.y=n.default.h/2,this.origX=this.x,this.origY=this.y,this.radius=100,this.cradius=this.radius+50,this.mv=20}return t.prototype.drawBackCircle=function(t,e,i){i=i||0,t.beginPath(),t.moveTo(this.x-e,this.y-this.mv),t.bezierCurveTo(this.x-e,this.y-i-50-this.mv,this.x+e,this.y-i-50+this.mv,this.x+e,this.y+this.mv),t.stroke()},t.prototype.drawFrontCircle=function(t,e,i){i=i||0,t.beginPath(),t.moveTo(this.x-e,this.y-this.mv),t.bezierCurveTo(this.x-e,this.y+i+50-this.mv,this.x+e,this.y+i+50+this.mv,this.x+e,this.y+this.mv),t.stroke()},t.prototype.draw=function(t){this.drawBackCircle(t,this.cradius),this.drawBackCircle(t,this.cradius+10,4),t.beginPath(),t.arc(this.x,this.y,100,0,n.PI2),t.fillStyle="black",t.fill(),t.stroke(),t.beginPath(),t.arc(this.x,this.y-50,30,0,n.PI2),t.fillStyle="black",t.fill(),t.stroke(),t.beginPath(),t.arc(this.x-40,this.y-20,10,0,n.PI2),t.fillStyle="black",t.fill(),t.stroke(),t.beginPath(),t.arc(this.x-45,this.y-45,5,0,n.PI2),t.fillStyle="black",t.fill(),t.stroke(),this.drawFrontCircle(t,this.cradius),this.drawFrontCircle(t,this.cradius+10,12)},t.prototype.think=function(t,e){this.mv=e/100+t/100,this.x=this.origX+t/30,this.y=this.origY+e/30},t.prototype.changeCenter=function(t,e){this.origX=t,this.origY=e,this.x=t,this.y=e},t}();e.planet=new r},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=window.Snap,r=null;e.init=function(){(r=n(window.innerWidth,window.innerHeight)).node.setAttribute("class","fixed")};var s=function(){function t(t){var e=this;this.pulseOn=function(){e.circle.animate({r:8},600,mina.elastic,e.pulseOut)},this.pulseOut=function(){e.circle.animate({r:5},600,mina.elastic,e.pulseOn)},this.star=t,this.x=this.star.x,this.y=this.star.y,this.animating=!0,this.circle=r.circle(0,0,10).attr({fill:"transparent",stroke:"#FFFF00",strokeWidth:2}),this.element=r.group(this.circle,r.rect(0,0,1,1)),this.element[1].attr({stroke:"#fff"}),this.element.attr({transform:"translate("+this.x+", "+this.y+")"}),this.connectWithStar(),this.mouseEvents(),this.pulseOn()}return t.prototype.connectWithStar=function(){var t=this;this.star.addEventListener("positionChange",function(e){t.x=e.x,t.y=e.y,t.update()})},t.prototype.update=function(){this.element.attr({transform:"translate("+this.x+", "+this.y+")"})},t.prototype.mouseEvents=function(){var t=this,e=!1;this.element.click(function(){e&&t.element[1].animate({height:1},400,mina.linear,function(){t.element[1].animate({width:1},400,mina.linear,function(){return e=!1})})}),this.element.click(function(){e||t.element[1].animate({width:180},400,mina.linear,function(){t.element[1].animate({height:80},400,mina.linear,function(){e=!0})})})},t}();e.PlanetDescription=s}]);