  var app = angular.module('directiveDemo');
    
    app.directive('twitterDirective', function(){
      return{ 
        scope: true,
         template: '<p> {{teller}} </p>',
        link: function (scope) {
            scope.teller = 140;
            console.log(scope.tweet)

            scope.$watch(function () {
                return scope.tweet;
            }, function (newValue) {
                scope.teller = 140 - newValue.length;
            });
        }
      };
}); 

