const ID='project-tirta-employee-home-visual-v2';
const CSS=`
.employee-portal-cosmic{
  position:relative;
  min-height:100vh;
  background:
    radial-gradient(circle at 12% 12%, rgba(49,121,255,.13), transparent 27%),
    radial-gradient(circle at 88% 34%, rgba(123,67,255,.12), transparent 28%),
    linear-gradient(180deg,#020914 0%,#061327 52%,#020814 100%)!important;
  color:#eef5ff;
}
.employee-portal-cosmic:before{
  content:"";position:fixed;inset:0;pointer-events:none;opacity:.34;z-index:0;
  background-image:radial-gradient(circle at 20% 35%,rgba(255,255,255,.9) 0 1px,transparent 1.5px),radial-gradient(circle at 70% 18%,rgba(154,218,255,.85) 0 1px,transparent 1.5px),radial-gradient(circle at 82% 72%,rgba(255,220,132,.6) 0 1px,transparent 1.5px),radial-gradient(circle at 34% 84%,rgba(255,255,255,.55) 0 1px,transparent 1.5px);
  background-size:97px 97px,131px 131px,173px 173px,211px 211px;
}
.employee-portal-cosmic .employee-topbar{
  position:sticky;top:0;z-index:60;display:flex;align-items:center;gap:12px;
  min-height:64px;padding:10px 18px;border-bottom:1px solid rgba(143,196,255,.14)!important;
  background:rgba(3,11,26,.76)!important;backdrop-filter:blur(18px);box-shadow:0 10px 30px rgba(0,0,0,.22);
}
.employee-portal-cosmic .employee-topbar img{width:38px!important;height:38px!important;border-radius:12px!important;padding:5px;background:linear-gradient(145deg,#0e2c5c,#061329)!important;border:1px solid rgba(231,199,106,.55)!important;box-shadow:0 0 18px rgba(216,181,99,.14)}
.employee-portal-cosmic .employee-topbar strong,.employee-portal-cosmic .employee-topbar b{color:#fff!important;letter-spacing:.1px}
.employee-portal-cosmic .employee-topbar small,.employee-portal-cosmic .employee-topbar span{color:#9eafd0!important}
.employee-portal-cosmic .employee-page{position:relative;z-index:1}
.pt-home-hero{
  border-color:rgba(124,196,255,.28)!important;
  background:radial-gradient(circle at 78% 30%,rgba(77,167,255,.18),transparent 25%),linear-gradient(135deg,rgba(7,24,55,.96),rgba(13,39,83,.86),rgba(21,17,55,.88))!important;
  box-shadow:0 30px 90px rgba(0,0,0,.34),inset 0 1px rgba(255,255,255,.08)!important;
}
.pt-home-hero:after{content:"";position:absolute;inset:1px;border-radius:25px;pointer-events:none;border:1px solid rgba(255,255,255,.035)}
.pt-home-eyebrow{display:inline-flex;align-items:center;gap:7px}
.pt-home-eyebrow:before{content:"";width:7px;height:7px;border-radius:50%;background:#f5d47d;box-shadow:0 0 14px rgba(245,212,125,.8)}
.pt-feature-section,.pt-activity-section{position:relative}
.pt-feature-card{position:relative;overflow:hidden}
.pt-feature-card:after{content:"";position:absolute;inset:auto 0 0;height:1px;background:linear-gradient(90deg,transparent,rgba(135,205,255,.42),transparent);opacity:0;transition:opacity .18s ease}
.pt-feature-card:hover:after{opacity:1}
.pt-feature-icon{color:#fff!important;border:1px solid rgba(255,255,255,.14);box-shadow:inset 0 1px rgba(255,255,255,.2),0 8px 22px rgba(28,94,202,.18)!important}
.pt-feature-icon svg,.pt-summary-icon svg,.pt-camera-glyph svg,.pt-activity-icon svg,.pt-mobile-bottom-nav svg{display:block}
.pt-summary-card,.pt-activity-row{box-shadow:inset 0 1px rgba(255,255,255,.05),0 16px 38px rgba(0,0,0,.16)!important}
.pt-summary-icon{border:1px solid rgba(116,201,255,.18)!important}
.pt-summary-icon.clock{border-color:rgba(231,191,102,.18)!important}
.pt-gold-button{box-shadow:0 12px 28px rgba(227,184,79,.22)!important}
.pt-mobile-bottom-nav{bottom:max(12px,env(safe-area-inset-bottom))!important;border-color:rgba(125,192,255,.22)!important;background:rgba(2,9,23,.82)!important;box-shadow:0 22px 55px rgba(0,0,0,.5),inset 0 1px rgba(255,255,255,.05)!important}
.pt-mobile-bottom-nav button span{display:grid;place-items:center;width:24px;height:24px;margin:0 auto 3px;border-radius:8px}
.pt-mobile-bottom-nav button.active span{background:rgba(102,176,255,.12);color:#d6b761}
@media(max-width:520px){
  .employee-portal-cosmic .employee-topbar{padding:8px 12px;min-height:58px}
  .employee-portal-cosmic .employee-topbar img{width:34px!important;height:34px!important}
  .employee-portal-cosmic .employee-page{padding-left:10px!important;padding-right:10px!important}
  .pt-home-hero{border-radius:24px!important}
  .pt-feature-section,.pt-activity-section{margin-top:16px}
  .pt-section-heading h2{font-size:20px!important}
  .pt-section-heading>button{font-size:10px!important;padding:7px 10px!important}
  .pt-feature-grid{margin-top:8px!important}
  .pt-selfie-banner{box-shadow:0 18px 50px rgba(0,0,0,.26)!important}
}
@media(prefers-reduced-motion:no-preference){
  .pt-home-orbit{animation:ptFloat 7s ease-in-out infinite}
  .pt-home-eyebrow:before{animation:ptPulse 2.4s ease-in-out infinite}
  @keyframes ptFloat{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-6px) rotate(1.2deg)}}
  @keyframes ptPulse{0%,100%{opacity:.7;transform:scale(.9)}50%{opacity:1;transform:scale(1.08)}}
}
`;
export function installProjectTirtaEmployeeHomeVisualV2(){if(typeof document==='undefined'||document.getElementById(ID))return;const style=document.createElement('style');style.id=ID;style.textContent=CSS;document.head.appendChild(style)}
