if(null===NE||void 0===NE)var NE={};(null===NE.Plugin||void 0===NE.Plugin)&&(NE.Plugin={}),NE.Plugin.quiz=function(i_params){function _addToDOM(i_content){_params.node.replaceWith(i_content)}function _onComplete(){_adjustButtons(),$("#"+_settings.ID).on("click",".NE-quiz-option-button",function(){_onButtonClick($(this))}),me.OnLoaded()}function _onButtonClick(i_sender){_toggleButtons(i_sender),_displayFeedback(i_sender,function(){_onAfterOption(i_sender)})}function _onAfterOption(i_sender){_quizdata.autoSubmit&&me.OnSubmit(i_sender)}function _toggleButtons(i_sender){"singleChoice"==_quizdata.questions[_currentQuestion].questionType&&($(".NE-quiz-option-button","#"+_settings.ID).removeClass("active"),i_sender.addClass("active"))}function _displayFeedback(i_sender,i_callback){var fbIndex=i_sender.data("fb"),fbArea=$("#"+_settings.ID+"-fb-"+fbIndex);if(_openFeedback){if(_openFeedback.attr("id")==fbArea.attr("id"))return;fbArea.parent().css("height",fbArea.parent().outerHeight()+"px"),_openFeedback.fadeOut(300,function(){fbArea.removeClass("hidden").fadeOut(0).fadeIn(300,function(){i_callback&&i_callback()})})}else fbArea.removeClass("hidden").slideUp(0).slideDown(300,function(){NE.Scroll.ToElementY(fbArea,"middle",i_callback)});_openFeedback=fbArea}function _padRow(i_row,i_height,i_rowCount){for(var i=0;i<i_row.length;i++){var item=i_row[i],diff=i_height-item.outerHeight();diff>0&&(diff=15+diff/2,item.css({"padding-top":diff+"px","padding-bottom":diff+"px"})),i_rowCount>0&&item.parent().addClass("mt-xs")}}function _adjustButtons(){var cnt=0,highst=0,limit=3,row=[],rowCount=0;$(".NE-quiz-option-button","#"+_settings.ID).each(function(){var h=$(this).outerHeight();highst=h>highst?h:highst,row.push($(this)),cnt++==limit-1&&(_padRow(row,highst,rowCount),rowCount++,highst=null,cnt=0,row=[])}),_padRow(row,highst,rowCount)}var _myDOMContent,_openFeedback,_params=i_params,_settings={},_quizdata=null,_currentQuestion=0,me={Name:"quiz",Dependencies:["quiz.css"],Init:function(){_settings=_params.settings,_settings.datafile?NE.Net.LoadJsonFile(_settings.datafile,function(jsonData){_quizdata=jsonData,NE.Plugin.ApplyTemplate(me,function(data){_myDOMContent=$(data.replace(/{quizID}/g,_settings.ID)),_addToDOM(_myDOMContent),_onComplete()})}):_onComplete()},Render:function(params){var returnVal="";(""!==_quizdata.title||""!==_quizdata.introContent)&&(returnVal+=params[0].data.replace(/{title}/g,_quizdata.title).replace(/{introContent}/g,_quizdata.introContent));for(var i=0;i<_quizdata.questions.length;i++){var question=_quizdata.questions[i];(""!==question.title||""!==question.introContent)&&(returnVal+=params[1].data.replace(/{title}/g,question.title).replace(/{introContent}/g,question.introContent)),returnVal+=params[2].data;for(var j=0;j<question.options.length;j++){var option=question.options[j],optData=params[3].data,classes="";"singleChoice"==question.questionType&&(classes+=" toggle"),optData=optData.replace(/{content}/g,option.content),optData=optData.replace(/{answerData}/g,option.answerData),optData=optData.replace(/{feedbackIndex}/g,option.feedbackIndex),optData=optData.replace(/{optionButtonClasses}/g,classes),returnVal+=optData}for(var k=0;k<question.feedback.length;k++){var feedback=question.feedback[k],fbData=params[4].data;fbData=fbData.replace(/{content}/g,feedback.content),fbData=fbData.replace(/{mood}/g,feedback.mood),fbData=fbData.replace(/{id}/g,_settings.ID+"-fb-"+k),returnVal+=fbData}returnVal+=params[5].data}return returnVal},OnLoaded:function(){},OnSubmit:function(){},eof:null};return me};