if(null===NE||void 0===NE)var NE={};if((null===NE.Plugin||void 0===NE.Plugin)&&(NE.Plugin={}),NE.Plugin.nextbutton=function(i_params){function _addToDOM(i_content){_params.node.replaceWith(i_content)}var _MyDOMContent,_params=i_params,_settings={},me={Name:"nextbutton",Dependencies:["nextbutton.css","nextbutton.EventHandlers.js"],Init:function(){_settings=_params.settings,NE.Plugin.ApplyTemplate(this,function(data){_MyDOMContent=$(data),_addToDOM(_MyDOMContent),_settings.html&&_MyDOMContent.first().html(_settings.html),_MyDOMContent.first().on("click",function(e){me.ClickOverride?me.ClickOverride(_MyDOMContent.first(),e,NE.Plugin.nextbutton.EventHandlers.OnClick):NE.Plugin.nextbutton.EventHandlers.OnClick($(this),e)}),me.OnLoaded()})},Render:function(params){var data=params[0].data,initClasses=_settings.initclasses?" "+_settings.initclasses:"",iconClass=_settings.iconclass||"fa-angle-down",navtarget=_settings.navtarget?'data-navtarget="'+_settings.navtarget+'"':"";return data=data.replace(/{ID}/g,_settings.ID),data=data.replace(/{text}/g,_settings.text),data=data.replace(/{initClasses}/g,initClasses),data=data.replace(/{iconclass}/g,iconClass),data=data.replace(/{navtarget}/g,navtarget)},OnLoaded:function(){},ClickOverride:null,eof:null};return me},null===NE||void 0===NE)var NE={};(null===NE.Plugin||void 0===NE.Plugin)&&(NE.Plugin={}),(null===NE.Plugin.nextbutton||void 0===NE.Plugin.nextbutton)&&(NE.Plugin.nextbutton={}),NE.Plugin.nextbutton.EventHandlers=function(){return{OnClick:function(sender,e){var that=sender;if(!that.hasClass("disable")){var parentToHide=that.closest(".NE-hidden-visited").first();parentToHide.length>0&&parentToHide.slideUp(300,function(){parentToHide.addClass("hidden")});var parentPage=that.parents(".NE-page").first(),navTarget=that.data("navtarget");return navTarget?NE.UI.RevealPage(!1,!1,$("#"+navTarget)):(NE.Navigation.CurrentChapterIndex=parseInt(parentPage.data("chapter"),10),NE.Navigation.CurrentPageIndex=parseInt(parentPage.data("index"),10),NE.Navigation.Next(),NE.UI.RevealPage()),e.preventDefault(),!1}},eof:null}}();