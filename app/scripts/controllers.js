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
]).controller('WelcomeCtrl', ['$scope', '$routeParams', 'Start', '$location',
	function($scope, $routeParams, Start, $location) {

		$scope.master = {};
 
    $scope.sendNames = function(match) {
      Start.sendNames({p1_name: match.p1, 
			                 p2_name: match.p2,
			                 best_of: 5,
			                 p1_first_server: false,
			                 p1_starts_left: false
	 		},  function(response){
	 					$location.path("/" + response.match_id);
	 				})
    };
 
    $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
    };
 
    $scope.reset();

	}
]);

