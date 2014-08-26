  var app = angular.module('directiveDemo', []);
    
    app.directive('demoButton', function(){
      return{ 
        link: function(scope, element, attrs){
          scope.buttonTitle = attrs.title;
        },
        template: '<button type="button" class="btn btn-default btn-default"><span class="glyphicon glyphicon-send"></span> {{buttonTitle}}</button>',      
        scope: true
      };
}); 