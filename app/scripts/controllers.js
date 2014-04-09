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
]);

