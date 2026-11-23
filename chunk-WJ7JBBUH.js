import{A as Q,e as Nt,j as at,k as jt,l as Vt,m as w,n as I,o as H,q as zt,r as Gt,s as Ht,v as W,x as Wt}from"./chunk-USX7OFGN.js";import{$a as Dt,Bb as Ot,Da as D,E,Eb as Tt,K as P,Ka as p,Kc as it,L as F,La as f,M as u,Na as vt,O as r,Oa as Ct,Ob as kt,Rc as nt,Sc as Pt,U as m,Ua as K,Uc as Ft,V as ht,Va as V,Vc as Lt,Wc as Rt,X as L,Xc as Bt,Y as ut,_ as gt,a as c,ab as At,b as ct,ba as R,bb as xt,ca as B,ec as z,f as h,ga as b,gc as wt,h as Z,ha as pt,hb as X,hc as et,ia as ft,jb as _,jc as It,ka as _t,kb as T,lb as J,pa as g,qa as N,r as M,ra as O,rc as St,sa as yt,sc as Mt,ta as bt,u as mt,ua as C,v as x,va as j,vc as Et,wc as G,yb as tt,z as v,zc as k}from"./chunk-KIGBPPSW.js";function re(i,a){}var y=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var rt=(()=>{class i extends Vt{_elementRef=r(B);_focusTrapFactory=r(Mt);_config;_interactivityChecker=r(St);_ngZone=r(ut);_focusMonitor=r(It);_renderer=r(_t);_changeDetectorRef=r(Tt);_injector=r(m);_platform=r(wt);_document=r(ht);_portalOutlet;_focusTrapped=new h;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=r(y,{optional:!0})||new y,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}attachDomPortal=t=>{this._portalOutlet.hasAttached();let e=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),e};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{o(),l(),t.removeAttribute("tabindex")},o=this._renderer.listen(t,"blur",n),l=this._renderer.listen(t,"mousedown",n)})),t.focus(e)}_focusByCssSelector(t,e){let n=this._elementRef.nativeElement.querySelector(t);n&&this._forceFocus(n,e)}_trapFocus(t){this._isDestroyed||pt(()=>{let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus(t);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',t);break;default:this._focusByCssSelector(this._config.autoFocus,t);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t=="string"?e=this._document.querySelector(t):typeof t=="boolean"?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus=="function"){let n=z(),o=this._elementRef.nativeElement;(!n||n===this._document.body||n===o||o.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,e=z();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=z()))}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(e,n){if(e&1&&Dt(w,7),e&2){let o;At(o=xt())&&(n._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,n){e&2&&D("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},features:[C],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,n){e&1&&j(0,re,0,0,"ng-template",0)},dependencies:[w],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return i})(),S=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new h;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,t){this.overlayRef=a,this.config=t,this.disableClose=t.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!G(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(a,t){if(this._canClose(a)){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(a),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",t=""){return this.overlayRef.updateSize({width:a,height:t}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(a,t,this.componentInstance))}},se=new u("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=r(m);return()=>H(i)}}),le=new u("DialogData"),de=new u("DefaultDialogConfig");function ce(i){let a=gt(i),t=new L;return{valueSignal:a,get value(){return a()},change:t,ngOnDestroy(){t.complete()}}}var st=(()=>{class i{_injector=r(m);_defaultOptions=r(de,{optional:!0});_parentDialog=r(i,{optional:!0,skipSelf:!0});_overlayContainer=r(Gt);_idGenerator=r(k);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new h;_afterOpenedAtThisLevel=new h;_ariaHiddenElements=new Map;_scrollStrategy=r(se);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=M(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(E(void 0)));constructor(){}open(t,e){let n=this._defaultOptions||new y;e=c(c({},n),e),e.id=e.id||this._idGenerator.getId("cdk-dialog-"),e.id&&this.getDialogById(e.id);let o=this._getOverlayConfig(e),l=Wt(this._injector,o),s=new S(l,e),d=this._attachContainer(l,s,e);if(s.containerInstance=d,!this.openDialogs.length){let $=this._overlayContainer.getContainerElement();d._focusTrapped?d._focusTrapped.pipe(v(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology($)}):this._hideNonDialogContentFromAssistiveTechnology($)}return this._attachDialogContent(t,s,d,e),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){ot(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){ot(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),ot(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new zt({positionStrategy:t.positionStrategy||W().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,n){let o=n.injector||n.viewContainerRef?.injector,l=[{provide:y,useValue:n},{provide:S,useValue:e},{provide:Ht,useValue:t}],s;n.container?typeof n.container=="function"?s=n.container:(s=n.container.type,l.push(...n.container.providers(n))):s=rt;let d=new at(s,n.viewContainerRef,m.create({parent:o||this._injector,providers:l}));return t.attach(d).instance}_attachDialogContent(t,e,n,o){if(t instanceof ft){let l=this._createInjector(o,e,n,void 0),s={$implicit:o.data,dialogRef:e};o.templateContext&&(s=c(c({},s),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),n.attachTemplatePortal(new jt(t,null,s,l))}else{let l=this._createInjector(o,e,n,this._injector),s=n.attachComponentPortal(new at(t,o.viewContainerRef,l));e.componentRef=s,e.componentInstance=s.instance}}_createInjector(t,e,n,o){let l=t.injector||t.viewContainerRef?.injector,s=[{provide:le,useValue:t.data},{provide:S,useValue:e}];return t.providers&&(typeof t.providers=="function"?s.push(...t.providers(e,t,n)):s.push(...t.providers)),t.direction&&(!l||!l.get(nt,null,{optional:!0}))&&s.push({provide:nt,useValue:ce(t.direction)}),m.create({parent:l||o,providers:s})}_removeOpenDialog(t,e){let n=this.openDialogs.indexOf(t);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,l)=>{o?l.setAttribute("aria-hidden",o):l.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let e=t.parentElement.children;for(let n=e.length-1;n>-1;n--){let o=e[n];o!==t&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(e){return new(e||i)};static \u0275prov=P({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function ot(i,a){let t=i.length;for(;t--;)a(i[t])}var qt=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=N({type:i});static \u0275inj=F({providers:[st],imports:[Q,I,Et,I]})}return i})();function me(i,a){}var Y=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},lt="mdc-dialog--open",Ut="mdc-dialog--opening",Yt="mdc-dialog--closing",he=150,ue=75,ge=(()=>{class i extends rt{_animationStateChanged=new L;_animationsEnabled=!it();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Zt(this._config.enterAnimationDuration)??he:0;_exitAnimationDuration=this._animationsEnabled?Zt(this._config.exitAnimationDuration)??ue:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty($t,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ut,lt)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(lt),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(lt),this._animationsEnabled?(this._hostElement.style.setProperty($t,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Yt)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Ut,Yt)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(i)))(n||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,n){e&2&&(K("id",n._config.id),D("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),X("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},features:[C],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,n){e&1&&(p(0,"div",0)(1,"div",1),j(2,me,0,0,"ng-template",2),f()())},dependencies:[w],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return i})(),$t="--mat-dialog-transition-duration";function Zt(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?et(i.substring(0,i.length-2)):i.endsWith("s")?et(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var U=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(U||{}),A=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Z(1);_beforeClosed=new Z(1);_result;_closeFallbackTimeout;_state=U.OPEN;_closeInteractionType;constructor(a,t,e){this._ref=a,this._config=t,this._containerInstance=e,this.disableClose=t.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),e._animationStateChanged.pipe(x(n=>n.state==="opened"),v(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(x(n=>n.state==="closed"),v(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),mt(this.backdropClick(),this.keydownEvents().pipe(x(n=>n.keyCode===27&&!this.disableClose&&!G(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),pe(this,n.type==="keydown"?"keyboard":"mouse"))})}close(a){let t=this._config.closePredicate;t&&!t(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(x(e=>e.state==="closing"),v(1)).subscribe(e=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=U.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let t=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?t.left(a.left):t.right(a.right):t.centerHorizontally(),a&&(a.top||a.bottom)?a.top?t.top(a.top):t.bottom(a.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",t=""){return this._ref.updateSize(a,t),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=U.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function pe(i,a,t){return i._closeInteractionType=a,i.close(t)}var dt=new u("MatMdcDialogData"),fe=new u("mat-mdc-dialog-default-options"),_e=new u("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=r(m);return()=>H(i)}}),Kt=(()=>{class i{_defaultOptions=r(fe,{optional:!0});_scrollStrategy=r(_e);_parentDialog=r(i,{optional:!0,skipSelf:!0});_idGenerator=r(k);_injector=r(m);_dialog=r(st);_animationsDisabled=it();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new h;_afterOpenedAtThisLevel=new h;dialogConfigClass=Y;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=M(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(E(void 0)));constructor(){this._dialogRefConstructor=A,this._dialogContainerType=ge,this._dialogDataToken=dt}open(t,e){let n;e=c(c({},this._defaultOptions||new Y),e),e.id=e.id||this._idGenerator.getId("mat-mdc-dialog-"),e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(t,ct(c({},e),{positionStrategy:W(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||e.enterAnimationDuration?.toLocaleString()==="0"||e.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:y,useValue:e}]},templateContext:()=>({dialogRef:n}),providers:(l,s,d)=>(n=new this._dialogRefConstructor(l,e,d),n.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:d},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=o.componentRef,n.componentInstance=o.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let l=this.openDialogs.indexOf(n);l>-1&&(this.openDialogs.splice(l,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static \u0275fac=function(e){return new(e||i)};static \u0275prov=P({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Xt=(()=>{class i{_dialogRef=r(A,{optional:!0});_elementRef=r(B);_dialog=r(Kt);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=ye(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i})}return i})(),Jt=(()=>{class i extends Xt{id=r(k).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(i)))(n||i)}})();static \u0275dir=O({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(e,n){e&2&&K("id",n.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[C]})}return i})(),te=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[bt([Nt])]})}return i})(),ee=(()=>{class i extends Xt{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(i)))(n||i)}})();static \u0275dir=O({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(e,n){e&2&&X("mat-mdc-dialog-actions-align-start",n.align==="start")("mat-mdc-dialog-actions-align-center",n.align==="center")("mat-mdc-dialog-actions-align-end",n.align==="end")},inputs:{align:"align"},features:[C]})}return i})();function ye(i,a){let t=i.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?a.find(e=>e.id===t.id):null}var ie=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=N({type:i});static \u0275inj=F({providers:[Kt],imports:[qt,Q,I,Pt]})}return i})();var ne=class i{dialogRef=r(A);data=r(dt);static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["app-confirm-dialog"]],decls:14,vars:4,consts:[[1,"dialog-header"],["aria-hidden","true",1,"danger-badge"],["mat-dialog-title",""],[1,"dialog-message"],["align","end"],["matButton","outlined","type","button",3,"click"],["matButton","filled","type","button",1,"danger-confirm-btn",3,"click"]],template:function(t,e){t&1&&(p(0,"div",0)(1,"span",1)(2,"mat-icon"),_(3,"warning_amber"),f()(),p(4,"h2",2),_(5),f()(),p(6,"mat-dialog-content")(7,"p",3),_(8),f()(),p(9,"mat-dialog-actions",4)(10,"button",5),V("click",function(){return e.dialogRef.close(!1)}),_(11),f(),p(12,"button",6),V("click",function(){return e.dialogRef.close(!0)}),_(13),f()()),t&2&&(b(5),T(e.data.title),b(3),T(e.data.message),b(3),J(" ",e.data.cancelLabel??"Cancel"," "),b(2),J(" ",e.data.confirmLabel??"Delete"," "))},dependencies:[ie,Jt,ee,te,Lt,Ft,Bt,Rt],styles:[".dialog-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:20px 24px 0}.dialog-header[_ngcontent-%COMP%]   h2[mat-dialog-title][_ngcontent-%COMP%]{margin:0;padding:0}.danger-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;flex-shrink:0;border-radius:50%;background-color:var(--mat-sys-error-container);color:var(--mat-sys-on-error-container)}.dialog-message[_ngcontent-%COMP%]{margin:8px 0 0;color:var(--mat-sys-on-surface-variant)}.danger-confirm-btn[_ngcontent-%COMP%]{--mat-button-filled-container-color: var(--mat-sys-error);--mat-button-filled-label-text-color: var(--mat-sys-on-error)}"],changeDetection:0})};var ae=class i{status=Ot.required();label=tt(()=>this.status()||"Unknown");variant=tt(()=>{switch(this.status()){case"Active":return"active";case"On Leave":return"leave";case"Probation":return"probation";default:return"inactive"}});static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["app-status-badge"]],inputs:{status:[1,"status"]},decls:2,vars:2,consts:[[1,"status-pill"]],template:function(t,e){t&1&&(vt(0,"span",0),_(1),Ct()),t&2&&(D("data-variant",e.variant()),b(),T(e.label()))},styles:[".status-pill[_ngcontent-%COMP%]{display:inline-flex;align-items:center;padding:3px 10px;border-radius:9999px;border:1px solid transparent;font:var(--mat-sys-label-medium);white-space:nowrap;flex-shrink:0}.status-pill[data-variant=active][_ngcontent-%COMP%]{background-color:light-dark(#dcfce7,#14532d);border-color:light-dark(#86efac,#166534);color:light-dark(#166534,#bbf7d0)}.status-pill[data-variant=leave][_ngcontent-%COMP%]{background-color:var(--mat-sys-tertiary-container);border-color:var(--mat-sys-tertiary-fixed-dim);color:var(--mat-sys-on-tertiary-container)}.status-pill[data-variant=probation][_ngcontent-%COMP%]{background-color:var(--mat-sys-primary-container);border-color:light-dark(#81aaff,#2973e5);color:var(--mat-sys-on-primary-container)}.status-pill[data-variant=inactive][_ngcontent-%COMP%]{background-color:var(--mat-sys-surface-container-high);border-color:var(--mat-sys-outline-variant);color:var(--mat-sys-on-surface-variant)}"],changeDetection:0})};var oe=class i{decimalPipe=new kt("id-ID");transform(a){return a==null||Number.isNaN(a)?"Rp. 0,00":`Rp. ${this.decimalPipe.transform(a,"1.2-2","id-ID")??"0,00"}`}static \u0275fac=function(t){return new(t||i)};static \u0275pipe=yt({name:"rupiah",type:i,pure:!0})};export{Kt as a,ne as b,ae as c,oe as d};
