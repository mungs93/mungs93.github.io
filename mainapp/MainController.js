app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [ 
	  { 
	    icon: 'images/Harvard.jpg', 
	    title: 'Obedience', 
	    developer: 'Memorial Church, Cambridge, MA.', 
	    link: " "
	  }, 
	  { 
	    icon: 'images/Yale2.jpg', 
	    title: 'Loyalty', 
	    developer: 'Arch Iron Gate, New Haven, CT.', 
	    link: " "    
	  },
	  {
	    icon: 'images/Stanford2.jpg',
	    title: 'Disclosure',
	    developer: 'Memorial Church, Stanford, CA.',
	    link: " "   
	  },
	  {
	    icon: 'images/Penn2.jpg',
	    title: 'Confidentiality',
	    developer: 'College Hall, Philadelphia, PA.',
	    link: " "
	  },
	   {
	    icon: 'images/Penn2.jpg',
	    title: 'Accounting',
	    developer: 'College Hall, Philadelphia, PA.',
	    link: " "   
	  },
	  {
	    icon: 'images/All2.jpg',
	    title: 'Reasonable Care and Diligence',
	    developer: 'Silverman Hall, Philadelphia, PA',
	    link: " "
	  }
	];
}]);