var pingpongControllers = angular.module('pingpongControllers', []);


pingpongControllers.controller('ScorerCtrl', ['$scope', '$routeParams', 'Data', 
	function($scope, $routeParams, Data) {

		Data.get({id: $routeParams.id}, function(data){
	 		$scope.score = data;
	 	})

	 	$scope.increment = function(number){
	 		Data.increment({id: $routeParams.id, p_number: number
	 		}, function(score){
	 			$scope.score = score;
	 			})
	 	}

	 	$scope.decrement = function(number){
	 		Data.decrement({id: $routeParams.id, p_number: number
	 		},  function(score){
	 					$scope.score = score;
	 				}
	 		)
	 	}

	}
]).controller('WelcomeCtrl', ['$scope', '$routeParams', 'Data', '$location',
	function($scope, $routeParams, Data, $location) {

		$scope.master = {};
 
    $scope.sendNames = function(match) {
      Data.sendNames({p1_name: match.p1, p2_name: match.p2
	 		},  function(score){
	 					$location.path("/1");
	 				})
    };
 
    $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
    };
 
    $scope.reset();

	}
]);

