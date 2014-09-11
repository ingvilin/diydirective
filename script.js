  var app = angular.module('directiveDemo', []);
    
    app.directive('demoButton', function(){
      return {
      	link: function(scope, element, attrs){
      		scope.buttonTitle = attrs.title || "Send";
      	},
      	scope: true,
		template: '<button type="button" class="btn btn-default btn-default"><span class="glyphicon glyphicon-send"></span> {{buttonTitle}}</button>' 
      };
}); 