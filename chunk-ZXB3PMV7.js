import{b as we}from"./chunk-5DULZMXP.js";import{A as he,B as _e,b as U,d as H,f as Q,g as $,i as K,j as Z,k as J,l as X,m as Y,n as ee,o as ce,p as le,s as de,v as pe,w as ue}from"./chunk-SPNBFBMR.js";import{a as ae,b as se,c as me}from"./chunk-JDY6RHQM.js";import{a as G}from"./chunk-7OXFOKTQ.js";import{a as ye}from"./chunk-4UUAYOZE.js";import{a as be}from"./chunk-4Z63DLWQ.js";import{a as ve}from"./chunk-6HSSLFWY.js";import"./chunk-USX7OFGN.js";import{$a as A,Da as l,Ea as g,Fa as f,Hb as C,Ja as d,Jc as re,K as P,Ka as n,L as E,La as o,M as O,Ma as u,Mb as q,O as c,Qc as te,S as k,Sa as v,Sc as ne,T,Ub as V,Uc as ie,Va as b,Vc as oe,Wc as ge,Xa as y,Xc as fe,Zb as j,_ as h,ab as L,bb as N,bc as z,ca as I,fb as B,ga as a,gb as w,hb as x,ib as W,jb as s,kb as S,pa as _,qa as D,va as R,vb as F}from"./chunk-KIGBPPSW.js";var Pe=["determinateSpinner"];function Ee(t,m){if(t&1&&(k(),n(0,"svg",11),u(1,"circle",12),o()),t&2){let e=y();l("viewBox",e._viewBox()),a(),w("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),l("r",e._circleRadius())}}var Oe=new O("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Se})}),Se=100,Te=10,Ce=(()=>{class t{_elementRef=c(I);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=c(Oe),r=re(),i=this._elementRef.nativeElement;this._noopAnimations=r==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=i.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&r==="reduced-motion"&&i.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Se;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Te)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=_({type:t,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(r,i){if(r&1&&A(Pe,5),r&2){let p;L(p=N())&&(i._determinateCircle=p.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(r,i){r&2&&(l("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",i.mode==="determinate"?i.value:null)("mode",i.mode),W("mat-"+i.color),w("width",i.diameter,"px")("height",i.diameter,"px")("--mat-progress-spinner-size",i.diameter+"px")("--mat-progress-spinner-active-indicator-width",i.diameter+"px"),x("_mat-animation-noopable",i._noopAnimations)("mdc-circular-progress--indeterminate",i.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",C],diameter:[2,"diameter","diameter",C],strokeWidth:[2,"strokeWidth","strokeWidth",C]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(r,i){if(r&1&&(R(0,Ee,2,8,"ng-template",null,0,F),n(2,"div",2,1),k(),n(4,"svg",3),u(5,"circle",4),o()(),T(),n(6,"div",5)(7,"div",6)(8,"div",7),v(9,8),o(),n(10,"div",9),v(11,8),o(),n(12,"div",10),v(13,8),o()()()),r&2){let p=B(1);a(4),l("viewBox",i._viewBox()),a(),w("stroke-dasharray",i._strokeCircumference(),"px")("stroke-dashoffset",i._strokeDashOffset(),"px")("stroke-width",i._circleStrokeWidth(),"%"),l("r",i._circleRadius()),a(4),d("ngTemplateOutlet",p),a(2),d("ngTemplateOutlet",p),a(2),d("ngTemplateOutlet",p)}},dependencies:[q],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Me=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=D({type:t});static \u0275inj=E({imports:[ne]})}return t})();var M=class t{http=c(V);baseUrl=G.apiBaseUrl;login(m){return this.http.post(`${this.baseUrl}/auth/login`,m)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})};function De(t,m){if(t&1&&(n(0,"div",9)(1,"mat-icon",18),s(2,"error_outline"),o(),n(3,"span"),s(4),o()()),t&2){let e=y();a(4),S(e.authError())}}function Re(t,m){t&1&&(n(0,"mat-error"),s(1,"Username is required"),o())}function Ae(t,m){t&1&&(n(0,"mat-error"),s(1,"Password is required"),o())}function Le(t,m){t&1&&(n(0,"span",16),u(1,"mat-spinner",19),n(2,"span"),s(3,"Signing in..."),o()())}function Ne(t,m){t&1&&(n(0,"span"),s(1,"Sign in"),o())}var ke=class t{fb=c(Y);authApi=c(M);authState=c(z);router=c(j);theme=c(ye);showPassword=h(!1);submitting=h(!1);authError=h("");form=this.fb.nonNullable.group({username:["",[we()]],password:["",[H.required]]});togglePassword(){this.showPassword.update(m=>!m)}onSubmit(){if(this.authError.set(""),this.form.invalid){this.form.markAllAsTouched();return}if(this.submitting())return;let{username:m,password:e}=this.form.getRawValue();this.submitting.set(!0),this.authApi.login({username:m.trim(),password:e}).subscribe({next:r=>{this.authState.setSession(r.token,r.username),this.submitting.set(!1),this.router.navigate(["/employees"])},error:r=>{this.authError.set(r?.error?.message??"Invalid username or password"),this.submitting.set(!1)}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=_({type:t,selectors:[["app-login"]],decls:35,vars:14,consts:[["matIconButton","","type","button",1,"theme-corner-btn",3,"click","matTooltip"],[1,"login-page"],["appearance","outlined","aria-labelledby","login-heading",1,"login-card"],["aria-hidden","true",1,"brand-accent-bar"],[1,"card-body"],[1,"login-header"],["aria-hidden","true",1,"brand-mark"],["id","login-heading",1,"login-title"],[1,"login-subtitle"],["role","alert",1,"alert-error"],["novalidate","",1,"login-form",3,"ngSubmit","formGroup"],["appearance","outline",1,"full-width"],["matInput","","type","text","formControlName","username","placeholder","Enter username","autocomplete","username","required",""],["matInput","","formControlName","password","placeholder","Enter password","autocomplete","current-password",3,"type"],["matIconButton","","matSuffix","","type","button",3,"click"],["matButton","filled","type","submit",1,"submit-btn",3,"disabled"],[1,"submit-content"],[1,"demo-hint"],["aria-hidden","true"],["diameter","18",1,"submit-spinner"]],template:function(e,r){e&1&&(n(0,"button",0),b("click",function(p){return r.theme.toggle(p)}),n(1,"mat-icon"),s(2),o()(),n(3,"div",1)(4,"mat-card",2),u(5,"div",3),n(6,"mat-card-content",4)(7,"div",5)(8,"span",6)(9,"mat-icon"),s(10,"groups"),o()(),n(11,"h1",7),s(12,"Employee Management"),o(),n(13,"p",8),s(14,"Sign in to continue"),o()(),g(15,De,5,1,"div",9),n(16,"form",10),b("ngSubmit",function(){return r.onSubmit()}),n(17,"mat-form-field",11)(18,"mat-label"),s(19,"Username"),o(),u(20,"input",12),g(21,Re,2,0,"mat-error"),o(),n(22,"mat-form-field",11)(23,"mat-label"),s(24,"Password"),o(),u(25,"input",13),n(26,"button",14),b("click",function(){return r.togglePassword()}),n(27,"mat-icon"),s(28),o()(),g(29,Ae,2,0,"mat-error"),o(),n(30,"button",15),g(31,Le,4,0,"span",16)(32,Ne,2,0,"span"),o()(),n(33,"div",17),s(34,"Demo credentials: admin / 123"),o()()()()),e&2&&(x("is-dark",r.theme.isDark()),d("matTooltip",r.theme.isDark()?"Switch to light mode":"Switch to dark mode"),l("aria-label",r.theme.isDark()?"Switch to light mode":"Switch to dark mode"),a(2),S(r.theme.isDark()?"light_mode":"dark_mode"),a(13),f(r.authError()?15:-1),a(),d("formGroup",r.form),a(5),f(r.form.controls.username.touched&&(r.form.controls.username.errors!=null&&r.form.controls.username.errors.required)?21:-1),a(4),d("type",r.showPassword()?"text":"password"),a(),l("aria-label",r.showPassword()?"Hide password":"Show password"),a(2),S(r.showPassword()?"visibility_off":"visibility"),a(),f(r.form.controls.password.touched&&(r.form.controls.password.errors!=null&&r.form.controls.password.errors.required)?29:-1),a(),d("disabled",r.submitting()),a(),f(r.submitting()?31:32))},dependencies:[ee,K,U,Q,$,X,J,Z,me,ae,se,ue,pe,ce,le,de,_e,he,oe,ie,te,fe,ge,Me,Ce,be,ve],styles:["[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column;min-height:100dvh;position:relative}.theme-corner-btn[_ngcontent-%COMP%]{position:fixed;top:16px;right:16px;z-index:10;color:var(--mat-sys-primary)}.theme-corner-btn.is-dark[_ngcontent-%COMP%]{color:var(--mat-sys-tertiary-fixed-dim)}.login-page[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;justify-content:center;padding:24px 16px}.login-card[_ngcontent-%COMP%]{width:100%;max-width:420px;overflow:hidden}.card-body[_ngcontent-%COMP%]{padding:28px 28px 24px}.login-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;margin-bottom:24px}.brand-mark[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;margin-bottom:12px;border-radius:8px;background-color:var(--mat-sys-primary);color:var(--mat-sys-on-primary);box-shadow:inset 0 -3px 0 var(--mat-sys-tertiary-fixed-dim)}.login-title[_ngcontent-%COMP%]{margin:0;font:var(--mat-sys-headline-small);font-weight:600;color:var(--mat-sys-on-surface)}.login-subtitle[_ngcontent-%COMP%]{margin:4px 0 0;font:var(--mat-sys-body-medium);color:var(--mat-sys-on-surface-variant)}.alert-error[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:16px;padding:10px 12px;border-radius:8px;background-color:var(--mat-sys-error-container);color:var(--mat-sys-on-error-container);font:var(--mat-sys-body-medium);font-weight:500}.login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.full-width[_ngcontent-%COMP%]{width:100%}.submit-btn[_ngcontent-%COMP%]{width:100%;margin-top:8px}.submit-content[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:8px}.submit-spinner[_ngcontent-%COMP%]{--mat-progress-spinner-active-indicator-color: currentColor}.demo-hint[_ngcontent-%COMP%]{margin-top:18px;padding:10px 12px;border-radius:8px;border:1px solid light-dark(#aec6ff,#253b64);background-color:light-dark(var(--mat-sys-primary-container),#192438);color:light-dark(var(--mat-sys-on-primary-container),#aec6ff);text-align:center;font:var(--mat-sys-body-small);font-weight:500}@media(max-width:599.98px){.card-body[_ngcontent-%COMP%]{padding:24px 20px 20px}}"],changeDetection:0})};export{ke as LoginComponent};
