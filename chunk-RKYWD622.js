import{a as lt}from"./chunk-4UUAYOZE.js";import{a as mt,b as ct}from"./chunk-ZBUC7ZC4.js";import{a as st}from"./chunk-4Z63DLWQ.js";import{a as rt}from"./chunk-6HSSLFWY.js";import{a as ut,b as dt}from"./chunk-QW6FFKIU.js";import"./chunk-UY67IPPV.js";import{A as at,h as $e,k as et,p as tt,q as nt,t as it,x as ot}from"./chunk-USX7OFGN.js";import{$a as Ie,$b as Fe,Da as f,E as j,Ea as E,Eb as G,F as oe,Fa as O,G as he,Gb as D,Ja as A,Ka as s,Kc as se,L as z,La as l,M as S,Ma as C,Na as ae,O as a,Oa as De,Oc as Xe,Pc as Qe,Q as h,Qc as Ue,R as g,Rc as We,S as ge,Sc as q,Ta as F,Tc as Ke,U as Y,Ua as Te,Uc as Ge,V as X,Va as b,Vc as qe,Wa as Pe,Wc as Ze,X as Q,Xa as u,Xc as Je,Y as _e,Ya as B,Za as v,Zb as Oe,_ as fe,_a as W,_b as Ae,a as ne,ab as y,b as ue,bb as M,bc as Be,c as L,ca as w,cc as Ne,da as be,dc as Le,f as H,fb as Se,ga as c,gc as He,ha as ve,hb as x,ia as ye,ib as K,jb as m,jc as re,ka as Me,kb as k,lc as Ve,m as ie,ma as xe,na as we,pa as _,qa as U,qb as Re,ra as R,u as V,ua as Ce,v as de,wa as ke,wc as je,yb as Ee,yc as ze,z as pe,zc as Ye}from"./chunk-KIGBPPSW.js";var Dt=["mat-menu-item",""],Tt=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Pt=["mat-icon, [matMenuItemIcon]","*"];function It(i,d){i&1&&(ge(),s(0,"svg",2),C(1,"polygon",3),l())}var St=["*"];function Rt(i,d){if(i&1){let e=F();ae(0,"div",0),Pe("click",function(){h(e);let n=u();return g(n.closed.emit("click"))})("animationstart",function(n){h(e);let o=u();return g(o._onAnimationStart(n.animationName))})("animationend",function(n){h(e);let o=u();return g(o._onAnimationDone(n.animationName))})("animationcancel",function(n){h(e);let o=u();return g(o._onAnimationDone(n.animationName))}),ae(1,"div",1),v(2),De()()}if(i&2){let e=u();K(e._classList),x("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Te("id",e.panelId),f("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var me=new S("MAT_MENU_PANEL"),N=(()=>{class i{_elementRef=a(w);_document=a(X);_focusMonitor=a(re);_parentMenu=a(me,{optional:!0});_changeDetectorRef=a(G);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new H;_focused=new H;_highlighted=!1;_triggersSubmenu=!1;constructor(){a(Ve).load(Qe),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,n){t&1&&b("click",function(r){return n._checkDisabled(r)})("mouseenter",function(){return n._handleMouseEnter()}),t&2&&(f("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),x("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",D],disableRipple:[2,"disableRipple","disableRipple",D]},exportAs:["matMenuItem"],attrs:Dt,ngContentSelectors:Pt,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){t&1&&(B(Tt),v(0),s(1,"span",0),v(2,1),l(),C(3,"div",1),E(4,It,2,0,":svg:svg",2)),t&2&&(c(3),A("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),c(),O(n._triggersSubmenu?4:-1))},dependencies:[Xe],encapsulation:2,changeDetection:0})}return i})();var Et=new S("MatMenuContent");var Ot=new S("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),le="_mat-menu-enter",Z="_mat-menu-exit",P=(()=>{class i{_elementRef=a(w);_changeDetectorRef=a(G);_injector=a(Y);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=se();_allItems;_directDescendantItems=new be;_classList={};_panelAnimationState="void";_animationDone=new H;_isAnimating=fe(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,n=ne({},this._classList);t&&t.length&&t.split(" ").forEach(o=>{n[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{n[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new Q;close=this.closed;panelId=a(Ye).getId("mat-menu-panel-");constructor(){let e=a(Ot);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new ze(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(j(this._directDescendantItems),oe(e=>V(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let n=e.toArray(),o=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[o]&&!n[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(j(this._directDescendantItems),oe(t=>V(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:je(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=ve(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=ue(ne({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===Z;(t||e===le)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===le||e===Z)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Z),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?le:Z)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(j(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["mat-menu"]],contentQueries:function(t,n,o){if(t&1&&W(o,Et,5)(o,N,5)(o,N,4),t&2){let r;y(r=M())&&(n.lazyContent=r.first),y(r=M())&&(n._allItems=r),y(r=M())&&(n.items=r)}},viewQuery:function(t,n){if(t&1&&Ie(ye,5),t&2){let o;y(o=M())&&(n.templateRef=o.first)}},hostVars:3,hostBindings:function(t,n){t&2&&f("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",D],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:D(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Re([{provide:me,useExisting:i}])],ngContentSelectors:St,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,n){t&1&&(B(),ke(0,Rt,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),At=new S("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=a(Y);return()=>tt(i)}});var T=new WeakMap,Ft=(()=>{class i{_canHaveBackdrop;_element=a(w);_viewContainerRef=a(we);_menuItemInstance=a(N,{optional:!0,self:!0});_dir=a(We,{optional:!0});_focusMonitor=a(re);_ngZone=a(_e);_injector=a(Y);_scrollStrategy=a(At);_changeDetectorRef=a(G);_animationsDisabled=se();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=L.EMPTY;_menuCloseSubscription=L.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=a(me,{optional:!0});this._parentMaterialMenu=t instanceof P?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&T.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=T.get(t);T.set(t,this),n&&n!==this&&n._closeMenu();let o=this._createOverlay(t),r=o.getConfig(),p=r.positionStrategy;this._setPosition(t,p),this._canHaveBackdrop?r.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:r.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof P&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(he(t.close)).subscribe(()=>{p.withLockedPosition(!1).reapplyLastPosition(),p.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof P&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(pe(1)).subscribe(()=>{t.detach(),T.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&T.delete(n),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=ot(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof P&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new nt({positionStrategy:it(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let o=n.connectionPair.overlayX==="start"?"after":"before",r=n.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,r)})})}_setPosition(e,t){let[n,o]=e.xPosition==="before"?["end","start"]:["start","end"],[r,p]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[J,$]=[r,p],[ee,te]=[n,o],I=0;if(this._triggersSubmenu()){if(te=n=e.xPosition==="before"?"start":"end",o=ee=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let ce=this._parentMaterialMenu.items.first;this._parentInnerPadding=ce?ce._getHostElement().offsetTop:0}I=r==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(J=r==="top"?"bottom":"top",$=p==="top"?"bottom":"top");t.withPositions([{originX:n,originY:J,overlayX:ee,overlayY:r,offsetY:I},{originX:o,originY:J,overlayX:te,overlayY:r,offsetY:I},{originX:n,originY:$,overlayX:ee,overlayY:p,offsetY:-I},{originX:o,originY:$,overlayX:te,overlayY:p,offsetY:-I}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:ie(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(de(r=>this._menuOpen&&r!==this._menuItemInstance)):ie();return V(e,n,o,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new et(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return T.get(e)===this}_triggerIsAriaDisabled(){return D(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){xe()};static \u0275dir=R({type:i})}return i})(),_t=(()=>{class i extends Ft{_cleanupTouchstart;_hoverSubscription=L.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new Q;onMenuOpen=this.menuOpened;menuClosed=new Q;onMenuClose=this.menuClosed;constructor(){super(!0);let e=a(Me);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{Le(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Ne(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,n){t&1&&b("click",function(r){return n._handleClick(r)})("mousedown",function(r){return n._handleMousedown(r)})("keydown",function(r){return n._handleKeydown(r)}),t&2&&f("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu==null?null:n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[Ce]})}return i})();var ft=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=z({imports:[Ke,at,q,$e]})}return i})();var Nt=["*",[["mat-toolbar-row"]]],Lt=["*","mat-toolbar-row"],Ht=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),bt=(()=>{class i{_elementRef=a(w);_platform=a(He);_document=a(X);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["mat-toolbar"]],contentQueries:function(t,n,o){if(t&1&&W(o,Ht,5),t&2){let r;y(r=M())&&(n._toolbarRows=r)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,n){t&2&&(K(n.color?"mat-"+n.color:""),x("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Lt,decls:2,vars:0,template:function(t,n){t&1&&(B(Nt),v(0),v(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var vt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=z({imports:[q]})}return i})();function jt(i,d){i&1&&(s(0,"nav",8)(1,"a",11),m(2,"Employees"),l()())}function zt(i,d){if(i&1){let e=F();s(0,"button",12)(1,"mat-icon"),m(2,"menu"),l()(),s(3,"mat-menu",null,0)(5,"div",13)(6,"span",14),m(7),l(),s(8,"span"),m(9),l()(),C(10,"mat-divider"),s(11,"a",15)(12,"mat-icon"),m(13,"badge"),l(),s(14,"span"),m(15,"Employees"),l()(),s(16,"button",16),b("click",function(){h(e);let n=u();return g(n.logout())}),s(17,"mat-icon"),m(18,"logout"),l(),s(19,"span"),m(20,"Logout"),l()()()}if(i&2){let e=Se(4),t=u();A("matMenuTriggerFor",e),c(7),k(t.userInitial()),c(2),k(t.authState.username())}}function Yt(i,d){if(i&1){let e=F();s(0,"div",17)(1,"span",14),m(2),l(),s(3,"span"),m(4),l()(),s(5,"button",18),b("click",function(){h(e);let n=u();return g(n.logout())}),s(6,"mat-icon"),m(7,"logout"),l(),m(8," Logout "),l()}if(i&2){let e=u();c(2),k(e.userInitial()),c(2),k(e.authState.username())}}var yt=class i{router=a(Oe);listState=a(mt);authState=a(Be);theme=a(lt);viewport=a(ct);userInitial=Ee(()=>{let d=this.authState.username().trim();return d?d.charAt(0).toUpperCase():"A"});logout(){this.authState.logout(),this.listState.resetAll(),this.router.navigate(["/login"])}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-navbar"]],decls:17,vars:7,consts:[["mobileMenu","matMenu"],["aria-hidden","true",1,"brand-accent-bar"],[1,"app-toolbar"],[1,"toolbar-inner"],[1,"toolbar-left"],["routerLink","/employees",1,"brand"],["aria-hidden","true",1,"brand-mark"],[1,"brand-name"],["aria-label","Main navigation",1,"nav-links"],[1,"toolbar-right"],["matIconButton","","type","button",1,"theme-toggle-btn",3,"click","matTooltip"],["routerLink","/employees","routerLinkActive","is-active",1,"nav-link"],["matIconButton","","type","button","aria-label","Open navigation menu",3,"matMenuTriggerFor"],[1,"menu-user"],["aria-hidden","true",1,"user-avatar"],["mat-menu-item","","routerLink","/employees"],["mat-menu-item","","type","button",3,"click"],[1,"user-chip"],["matButton","","type","button",1,"logout-btn",3,"click"]],template:function(e,t){e&1&&(C(0,"div",1),s(1,"mat-toolbar",2)(2,"div",3)(3,"div",4)(4,"a",5)(5,"span",6)(6,"mat-icon"),m(7,"groups"),l()(),s(8,"span",7),m(9,"Employee Management"),l()(),E(10,jt,3,0,"nav",8),l(),s(11,"div",9)(12,"button",10),b("click",function(o){return t.theme.toggle(o)}),s(13,"mat-icon"),m(14),l()(),E(15,zt,21,3)(16,Yt,9,2),l()()()),e&2&&(c(10),O(t.viewport.isMobile()?-1:10),c(2),x("is-dark",t.theme.isDark()),A("matTooltip",t.theme.isDark()?"Switch to light mode":"Switch to dark mode"),f("aria-label",t.theme.isDark()?"Switch to light mode":"Switch to dark mode"),c(2),k(t.theme.isDark()?"light_mode":"dark_mode"),c(),O(t.viewport.isMobile()?15:16))},dependencies:[Ae,Fe,vt,bt,qe,Ge,Ue,Je,Ze,ft,P,N,_t,st,rt,dt,ut],styles:["[_nghost-%COMP%]{position:sticky;top:0;z-index:800;display:block}.app-toolbar[_ngcontent-%COMP%]{height:auto;min-height:64px;padding:0;background-color:light-dark(#ffffff,#1d1f27);color:var(--mat-sys-on-surface);border-bottom:1px solid var(--mat-sys-outline-variant)}.toolbar-inner[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:16px;width:100%;max-width:1280px;height:64px;margin:0 auto;padding:0 24px}.toolbar-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:28px;height:100%;min-width:0}.brand[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:10px;color:var(--mat-sys-on-surface);font:var(--mat-sys-title-medium);font-weight:600;text-decoration:none;white-space:nowrap}.brand-mark[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:8px;background-color:var(--mat-sys-primary);color:var(--mat-sys-on-primary);box-shadow:inset 0 -3px 0 var(--mat-sys-tertiary-fixed-dim)}.brand-mark[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.nav-links[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%}.nav-link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;height:100%;padding:0 4px;border-bottom:2px solid transparent;color:var(--mat-sys-on-surface-variant);font:var(--mat-sys-label-large);font-weight:500;text-decoration:none}.nav-link[_ngcontent-%COMP%]:hover{color:var(--mat-sys-on-surface)}.nav-link.is-active[_ngcontent-%COMP%]{color:var(--mat-sys-primary);border-bottom-color:var(--mat-sys-primary)}.toolbar-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.theme-toggle-btn[_ngcontent-%COMP%]{color:var(--mat-sys-primary)}.theme-toggle-btn.is-dark[_ngcontent-%COMP%]{color:var(--mat-sys-tertiary-fixed-dim)}.user-chip[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:8px;padding:4px 12px 4px 5px;border-radius:9999px;border:1px solid light-dark(#aec6ff,#004395);background-color:var(--mat-sys-primary-container);color:var(--mat-sys-on-primary-container);font:var(--mat-sys-label-large);font-weight:500}.user-avatar[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:9999px;background-color:var(--mat-sys-primary);color:var(--mat-sys-on-primary);font:var(--mat-sys-label-medium);font-weight:600}.logout-btn[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant)}.menu-user[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:10px 16px;font:var(--mat-sys-label-large);color:var(--mat-sys-on-surface)}@media(max-width:599.98px){.toolbar-inner[_ngcontent-%COMP%]{padding:0 16px}}"],changeDetection:0})};export{yt as NavbarComponent};
