var pingpongServices = angular.module('pingpongServices', ['ngResource']);

pingpongServices.factory('Data', ['$resource',
    
    function($resource){
    	return $resource('http://localhost:3000/api/matches/:id', 
				{ id: '@id' }, { 
						increment: { 
						method: 'PUT', 
						params: { p_number: '@p_number' }, 
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


