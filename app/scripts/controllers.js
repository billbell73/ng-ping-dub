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

	 	$scope.sendNextServer = function(firstServer){
	 		Data.sendNextServer({id: $routeParams.id, nextServer: firstServer
	 		},  function(score){
	 					$scope.score = score;
	 				}
	 		)
	 	}

	}
]).controller('WelcomeCtrl', ['$scope', '$routeParams', 'Start', '$location',
	function($scope, $routeParams, Start, $location) {
 
    $scope.sendNames = function(match) {
      Start.sendNames({p1_name: match.p1, 
			                 p2_name: match.p2,
			                 best_of: match.bestOf,
			                 p1_first_server: match.p1StartsLeft,
			                 p1_starts_left: match.p1StartsServing,
			                 partner_a_name: match.partnerA,
			                 partner_b_name: match.partnerB,
			                 partner_c_name: match.partnerC,
			                 partner_d_name: match.partnerD,
			                 initial_server_first_partner: match.initialServerFirstPartner,
			                 initial_receiver_first_partner: match.initialReceiverFirstPartner,
			                 doubles_match: match.doubles

	 		},  function(response){
	 					$location.path("/" + response.match_id);
	 				})
    };
 


	}
]);

