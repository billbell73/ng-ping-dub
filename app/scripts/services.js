var pingpongServices = angular.module('pingpongServices', ['ngResource']);

pingpongServices.factory('Start', ['$resource',
    
    function($resource){
    	return $resource('http://localhost:3000/api/matches', 
				{}, {
						sendNames: { 
						method: 'POST', 
						// params: { p1: '@p1_name', p2: '@p2_name' }, 
						isArray: false 	
						}
				}
    	)
    }
]).factory('Data', ['$resource',
    
    function($resource){
    	return $resource('http://localhost:3000/api/matches/:id', 
				{ id: '@id' }, { 
						increment: { 
						method: 'PUT', 
						// params: { p_number: '@p_number' }, 
						isArray: false 
						}, 
						decrement: { 
						method: 'PUT', 
						params: { p_number: '@p_number', decrement: true }, 
						isArray: false 	
						}					
				}
    	)
    }
]);


