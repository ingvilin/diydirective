  var app = angular.module('directiveDemo');
    
    app.directive('twitterDirective', function(){
      return{ 
         template: '<p> {{teller}} </p>',
        link: function (scope) {
            scope.teller = 140;

            scope.$watch(function () {
                return scope.tweet;
            }, function (newValue, oldValue) {
                scope.teller = 140 - newValue.length;
                return newValue;
            });
        }
      };
}); 