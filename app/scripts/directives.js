var pingpongDirectives = angular.module('pingpongDirectives', []);

pingpongDirectives.directive('serveball', function() {

  return {
    restrict: "E",
    replace: true,
    scope: {
      pairnumber: '@'
    },
    template: '<img id="p{{pairnumber}}marker" class="p{{pairnumber}}serveball"' + 
               'src="images/serveball.svg">'
  }
})



