(function(l,s,r,a,o,i,S,R,A,M){"use strict";function _(){return r.before("uploadLocalFiles",s.findByProps("uploadLocalFiles"),function(e){if(!a.storage.sendAsVM||e[0].flags==8192)return;const t=e[0].items[0];t.mimeType.startsWith("audio")&&(t.mimeType="audio/ogg",e[0].flags=8192,t.waveform=t.item.waveform="AEtWPyUaGA4OEAcA",t.durationSecs=t.item.durationSecs=60)})}function v(){return r.before("actionHandler",o.FluxDispatcher._actionHandlers._computeOrderedActionHandlers("LOAD_MESSAGES_SUCCESS").find(function(e){return e.name==="MessageStore"}),function(e){a.storage.allAsVM&&e[0].messages.forEach(function(t){t.flags!=8192&&t.attachments.forEach(function(n){n.content_type?.startsWith?.("audio")&&(t.flags|=8192,n.waveform="AEtWPyUaGA4OEAcA",n.duration_secs=60)})})})}function w(){return r.before("actionHandler",o.FluxDispatcher._actionHandlers._computeOrderedActionHandlers("MESSAGE_CREATE").find(function(e){return e.name==="MessageStore"}),function(e){if(!a.storage.allAsVM||e[0].message.flags==8192)return;let t=e[0].message;t?.attachments?.[0]?.content_type?.startsWith("audio")&&(t.flags|=8192,t.attachments.forEach(function(n){n.waveform="AEtWPyUaGA4OEAcA",n.duration_secs=60}))})}function P(){return r.before("actionHandler",o.FluxDispatcher._actionHandlers._computeOrderedActionHandlers("MESSAGE_UPDATE").find(function(e){return e.name==="MessageStore"}),function(e){if(!a.storage.allAsVM||e[0].message.flags==8192)return;let t=e[0].message;t?.attachments?.[0]?.content_type?.startsWith("audio")&&(t.flags|=8192,t.attachments.forEach(function(n){n.waveform="AEtWPyUaGA4OEAcA",n.duration_secs=60}))})}const{FormRow:m}=A.Forms,f=s.findByProps("ActionSheetRow")?.ActionSheetRow;function g(e){let{label:t,icon:n,onPress:u}=e;const c=o.stylesheet.createThemedStyleSheet({iconComponent:{width:24,height:24,tintColor:R.semanticColors.INTERACTIVE_NORMAL}});return f?React.createElement(f,{label:t,icon:React.createElement(f.Icon,{source:n,IconComponent:function(){return React.createElement(o.ReactNative.Image,{resizeMode:"cover",style:c.iconComponent,source:n})}}),onPress:function(){return u?.()}}):React.createElement(m,{label:t,leading:React.createElement(m.Icon,{source:n}),onPress:function(){return u?.()}})}const V=s.findByProps("openLazy","hideActionSheet");function p(){return r.before("openLazy",V,function(e){const[t,n,u]=e,c=u?.message;n!=="MessageLongPressActionSheet"||!c||t.then(function(B){const D=r.after("default",B,function(H,y){o.React.useEffect(function(){return function(){D()}},[]);const d=S.findInReactTree(y,function(U){return U?.[0]?.type?.name==="ButtonRow"});if(!d)return y;c.hasFlag(8192)&&d.splice(5,0,o.React.createElement(g,{label:"Download Voice Message",icon:i.getAssetIDByName("ic_download_24px"),onPress:async function(){await s.findByProps("downloadMediaAsset").downloadMediaAsset(c.attachments[0].url,0),s.findByProps("hideActionSheet").hideActionSheet()}})),d.splice(6,0,o.React.createElement(g,{label:"Copy Voice Message URL",icon:i.getAssetIDByName("copy"),onPress:async function(){o.clipboard.setString(c.attachments[0].url),s.findByProps("hideActionSheet").hideActionSheet()}}))})})})}const{FormDivider:b,FormIcon:h,FormSwitchRow:E}=A.Forms;function C(){return M.useProxy(a.storage),React.createElement(o.ReactNative.ScrollView,null,React.createElement(E,{label:"Send audio files as Voice Message",leading:React.createElement(h,{source:i.getAssetIDByName("voice_bar_mute_off")}),onValueChange:function(e){return a.storage.sendAsVM=e},value:a.storage.sendAsVM}),React.createElement(b,null),React.createElement(E,{label:"Show every audio file as a Voice Message",leading:React.createElement(h,{source:i.getAssetIDByName("ic_stage_music")}),onValueChange:function(e){return a.storage.allAsVM=e},value:a.storage.allAsVM}))}a.storage.sendAsVM??=!0,a.storage.allAsVM??=!1;const F=[_(),w(),v(),P(),p()],I=function(){F.forEach(function(e){return e()})};return l.onUnload=I,l.settings=C,l})({},vendetta.metro,vendetta.patcher,vendetta.plugin,vendetta.metro.common,vendetta.ui.assets,vendetta.utils,vendetta.ui,vendetta.ui.components,vendetta.storage);
