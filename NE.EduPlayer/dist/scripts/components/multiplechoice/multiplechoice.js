if(null===NE||void 0===NE)var NE={};if((null===NE.Plugin||void 0===NE.Plugin)&&(NE.Plugin={}),NE.Plugin.multiplechoice=function(i_params){function _addToDOM(i_content){_params.node.replaceWith(i_content)}var _MyDOMContent,_params=i_params,_settings={},me={Name:"multiplechoice",Dependencies:["multiplechoice.css","multiplechoice.EventHandlers.js"],Items:{},SelectOne:!1,Init:function(){_settings=_params.settings,me.SelectOne=_settings.SelectOne&&_settings.SelectOne===!0,NE.Plugin.ApplyTemplate(this,function(data){_MyDOMContent=$(data.replace(/{PanelID}/g,_settings.ID)),_addToDOM(_MyDOMContent);for(var i=0;i<_settings.options.length;i++)me.Items[_settings.OptionIDPrefix+i]={selected:!1,DOMItem:$("#"+_settings.OptionIDPrefix+i)};$(".NE-multiple-chioce-option").hover(function(){NE.Plugin.multiplechoice.EventHandlers.OptionEnter($(this),me)},function(){NE.Plugin.multiplechoice.EventHandlers.OptionLeave($(this),me)}),$(".NE-multiple-chioce-option").on("click",function(){NE.Plugin.multiplechoice.EventHandlers.OptionClick($(this),me),me.OnChanged(me.Items)}),me.OnLoaded()})},RenderOption:function(params){for(var value="",i=0;i<_settings.options.length;i++){var option=_settings.options[i],html=params[0].data;html=html.replace(/{optionID}/g,_settings.OptionIDPrefix+i);var imgBase=NE.Constants.CONTENT_BASE_PATH+"/content/media/";html=html.replace(/{optionImage}/g,imgBase+option.Images[0]),html=html.replace(/{hoverImage}/g,imgBase+option.Images[1]),html=html.replace(/{activeImage}/g,imgBase+option.Images[2]);for(var j=1;j<option.Images.length;j++){var preLoad=new Image;preLoad.src=NE.Constants.CONTENT_BASE_PATH+"/content/media/"+option.Images[j]}html=html.replace(/{optionitle}/g,option.Title),html=html.replace(/{optionText}/g,option.Text),value+=html}return value},OnLoaded:function(){},OnChanged:function(){},eof:null};return me},null===NE||void 0===NE)var NE={};(null===NE.Plugin||void 0===NE.Plugin)&&(NE.Plugin={}),(null===NE.Plugin.multiplechoice||void 0===NE.Plugin.multiplechoice)&&(NE.Plugin.multiplechoice={}),NE.Plugin.multiplechoice.EventHandlers=function(){function _setToState(jqObj,instance){var item=instance.Items[jqObj.attr("id")],img=jqObj.find("img").first();item.selected?(jqObj.addClass("active"),img.attr("src",img.data("activesrc"))):(jqObj.removeClass("active"),img.attr("src",img.data("src")))}return{OptionEnter:function(sender){sender.addClass("hover");var img=sender.find("img").first();img.attr("src",img.data("hoversrc"))},OptionLeave:function(sender,instance){sender.removeClass("hover"),_setToState(sender,instance)},OptionClick:function(sender,instance){var item=instance.Items[sender.attr("id")],state=!item.selected;if(instance.SelectOne)for(var opt in instance.Items){var o=instance.Items[opt];o.selected=!1,_setToState(o.DOMItem,instance)}item.selected=state,_setToState(sender,instance)},eof:null}}();