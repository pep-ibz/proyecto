!function(t,n){angular.module("widgetkit").run(["$rootScope","$rootElement","$timeout","$filter",function(e,a,o,i){function s(){r.find("#toolbar-apply button, #toolbar-save button").prop("disabled",a.find("form.ng-invalid").length)}n.parent.document.updateUploader=n.parent.document.updateUploader||function(){};var c=t("body.com_widgetkit"),l=c.find(".header .container-title").append('<h1 class="page-title"><span class="icon-widgetkit"></span>Widgetkit: <span></span></h1>').find(".page-title span").eq(1),r=c.find(".subhead .btn-toolbar"),p='<div class="btn-wrapper" id="toolbar-create"><button class="btn btn-small btn-success"></span>'+i("trans")("New")+"</button></div>",d='<div class="btn-wrapper" id="toolbar-apply"><button class="btn btn-small btn-success"><span class="icon-apply icon-white"></span> '+i("trans")("Save")+'</button></div>                           <div class="btn-wrapper" id="toolbar-save"><button class="btn btn-small"><span class="icon-save"></span> '+i("trans")("Save & Close")+'</button></div>                           <div class="btn-wrapper" id="toolbar-cancel"><button class="btn btn-small"><span class="icon-cancel"></span> '+i("trans")("Close")+"</button></div>",u='<div class="btn-wrapper" id="toolbar-options"><button class="btn btn-small"><span class="icon-options"></span> '+i("trans")("Options")+"</button></div>";r.on("click","#toolbar-create button",function(){a.scope().vm.createContent()}).on("click","#toolbar-apply",function(){a.scope().vm.saveContent()}).on("click","#toolbar-save",function(){var t=a.scope();t.vm.saveContent().$promise.then(function(){t.vm.setView("content")})}).on("click","#toolbar-cancel",function(){var t=a.scope();t.vm.setView("content"),t.$apply()}).on("click","#toolbar-options",function(){location.href="index.php?option=com_config&view=component&component=com_widgetkit"}),c.on("keyup",'[ng-model="content.name"]',s),e.$on("wk.change.view",function(t,n){o(function(){l.text(a.find("h2.js-header").text()),r.empty().html("content"==n?p:"contentEdit"==n?d:"").append(u),s()})})}]),t(function(){t(document).on("click",'[rel="widgetkit"], [aria-label="Widgetkit"]',function(e){e.preventDefault(),e.stopPropagation();for(var a=t(this);a.length&&!a.has("textarea").length;)a=a.parent();n.widgetkit.env.editor(a.find("textarea:first"))});var e=t(".view-module .widgetkit-widget, #modules-form .widgetkit-widget"),a=e.nextAll("input"),o={value:function(){try{return JSON.parse(a.val())}catch(t){return{}}},update:function(){var t=this.value().name;e.text(t?Translator.trans("Widget: %widget%",{widget:t}):Translator.trans("Select Widget"))}};e.on("click",function(t){t.preventDefault(),n.widgetkit.env.init("widget",o.value(),function(t){a.val(JSON.stringify(t)),o.update()})}),o.update()})}(jQuery,window);