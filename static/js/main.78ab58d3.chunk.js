(this.webpackJsonpBondi=this.webpackJsonpBondi||[]).push([[0],{42:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var i=t(7),c=t.n(i),o=t(33),a=t.n(o),r=(t(42),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,52)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),i(e),c(e),o(e),a(e)}))}),s=t(11),l=t(49),p=t(48),u=t(51),h=t(1),y=t(50),b=t(12);function j(e){var n=Object(l.a)("assets/Bondi.glb"),t=n.nodes,i=(n.materials,n.animations),c=n.scene,o=Object(p.a)(i).clips,a=Object(s.d)();t.Text.position.y=100,t.Circle.position.y=150,t.Text001.position.y=62,t.Circle001.position.y=125,t.Text002.position.y=64,t.Circle002.position.y=127,t.Text003.position.y=64,t.Circle003.position.y=127;var r=new h.Quaternion(.7071068286895752,0,-0,.7071067094802856),j=new h.Quaternion(.7071032524108887,.002244439208880067,-.002244439208880067,.7071031928062439);t.Text.quaternion.copy(j),t.Circle.quaternion.copy(r),t.Text001.quaternion.copy(j),t.Circle001.quaternion.copy(r),t.Text002.quaternion.copy(j),t.Circle002.quaternion.copy(r),t.Text003.quaternion.copy(j),t.Circle003.quaternion.copy(r),console.log(o),t.Cube004.scale.set(0,0,0),t.Cube005.scale.set(0,0,0),t.Cube006.scale.set(0,0,0),t.Cube007.scale.set(0,0,0);var v=function(e,n,i,c,o,r,s,l){var p=e.clone();p.y=c;var u=n.clone();u.y=c;var y=(new h.Vector3).subVectors(u,p);y.setLength(y.length()+i);for(var b=y.length()/2*(y.length()/2)/(-4*o),j=0;j<r;j++){var v=y.clone();v.setLength(y.length()*(j/(r-1)));var m=(new h.Vector3).addVectors(p,v),C=m.clone();C.y=Math.pow(y.length()/2-v.length(),2)/(4*b)+m.y;var x,f=t.Cube004.clone();x=new h.Euler(0,l,Math.atan(2*(y.length()/2-v.length())/(4*b))),f.position.copy(C),f.rotation.copy(x),f.name="cube".concat(s,".").concat(j),a.scene.add(f)}};v(t.Cube004.position,t.Circle.position,50,160,120,30,1,0);var m=t.Circle.position.clone();m.y=0;var C=[];v(t.Circle001.position,m,50,180,150,30,2,.5),v(t.Circle002.position,t.Circle001.position,0,70,50,6,3,-.5),v(t.Circle002.position,t.Circle003.position,0,50,10,3,4,-.3);var x=a.scene.getObjectByName("cube2.29").position.clone();function f(e,n,t,i){for(var c=0;c<n;c++){for(var o,r=[],s=[],l=0;l<n;l++)c<=l?s.push(11.11,3.15,-3.9):s.push(0,0,0),r.push(l/((n-1)/i)+t);for(var p=2;p<=15;p++)r.push(p),s.push(11.11,3.15,-3.9);o=new h.VectorKeyframeTrack(".scale",r,s);var u=new h.AnimationClip("test".concat(c),-1,[o]),y=new h.AnimationMixer(a.scene.getObjectByName("cube".concat(e,".").concat(c)));C.push(y),y.clipAction(u).play()}}function d(e,n,t,i){for(var c=n-1;c>=0;c--){for(var o,r=[],s=[],l=0;l<n;l++)c<=l?s.push(11.11,3.15,-3.9):s.push(0,0,0),r.push(l/((n-1)/i)+t);for(var p=2;p<=15;p++)r.push(p),s.push(11.11,3.15,-3.9);o=new h.VectorKeyframeTrack(".scale",r,s);var u=new h.AnimationClip("proj".concat(c),-1,[o]),y=new h.AnimationMixer(a.scene.getObjectByName("cube".concat(e,".").concat(n-c-1)));C.push(y),y.clipAction(u).play()}}function w(e,n){for(var i=[],c=[],o=0;o<=60;o++)i.push(o/4),o/4<2*e+4-n?c.push(0,0,0):c.push(23.53,23.53,23.53);var a=new h.VectorKeyframeTrack(".scale",i,c),r=new h.AnimationClip("circleClip".concat(e),-1,[a]),s=new h.AnimationMixer(t["Circle00".concat(e)]);s.clipAction(r).play();var l=new h.VectorKeyframeTrack(".scale",i,c),p=new h.AnimationClip("textClip".concat(e),-1,[l]),u=new h.AnimationMixer(t["Text00".concat(e)]);u.clipAction(p).play(),C.push(s,u)}x.x=x.x+-400,x.y=x.y+300,x.z=x.z+200,f(1,30,2,2),d(2,30,4,2),d(3,6,6,.7),f(4,3,8,.2);for(var g=[],O=[],A=0;A<=60;A++)g.push(A/4),A/4<4?O.push(0,0,0):O.push(23.53,23.53,23.53);var T=new h.VectorKeyframeTrack(".scale",g,O),k=new h.AnimationClip("circleClip",-1,[T]),M=new h.AnimationMixer(t.Circle);M.clipAction(k).play();var V=new h.VectorKeyframeTrack(".scale",g,O),B=new h.AnimationClip("textClip",-1,[V]),q=new h.AnimationMixer(t.Text);return q.clipAction(B).play(),C.push(M,q),w(1,-.1),w(2,.8),w(3,1.3),Object(s.b)((function(e,n){for(var t=0;t<C.length;t++){var i;null===(i=C[t])||void 0===i||i.update(n)}e.camera.position.set(550,800,200),e.camera.lookAt(e.scene.getObjectByName("cube3.0").position),e.camera.zoom=1,e.camera.updateProjectionMatrix()})),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("group",{dispose:null,children:[Object(b.jsx)("primitive",{object:c}),Object(b.jsx)(u.a,{makeDefault:!0}),Object(b.jsx)(y.a,{})]})})}var v=function(e){var n=Object(i.useRef)(null);return Object(b.jsx)("div",{ref:n,children:Object(b.jsxs)(s.a,{onCreated:function(e){var n=e.gl;e.camera;n.setSize(window.innerWidth,window.innerHeight)},children:[Object(b.jsx)("ambientLight",{intensity:.6}),Object(b.jsx)("directionalLight",{intensity:.8}),Object(b.jsx)(i.Suspense,{fallback:null,children:Object(b.jsx)(j,{})})]})})};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)("div",{className:"canvas",children:Object(b.jsx)(v,{})})}),document.getElementById("root")),r()}},[[47,1,2]]]);
//# sourceMappingURL=main.78ab58d3.chunk.js.map