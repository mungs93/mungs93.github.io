app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [ 
	  { 
	    icon: 'images/obedience2.jpeg', 
	    title: 'Obedience', 
	    developer: 'Memorial Church, Cambridge, MA.', 
	    link: " "
	  }, 
	  { 
	    icon: 'images/pearl2.jpg', 
	    title: 'Loyalty', 
	    developer: 'Arch Iron Gate, New Haven, CT.', 
	    link: " "
	  },
	  {
	    icon: 'images/disclosure.png',
	    title: 'Disclosure',
	    developer: 'Memorial Church, Stanford, CA.',
	    link: " "
	  },
	  {
	    icon: 'images/confidential.png',
	    title: 'Confidentiality',
	    developer: 'College Hall, Philadelphia, PA.',
	    link: " "
	  },
	   {
	    icon: 'images/accounting.jpg',
	    title: 'Accounting',
	    developer: 'College Hall, Philadelphia, PA.',
	    link: " "
	  },
	  {
	    icon: 'images/reasonable.png',
	    title: 'Reasonable Care and Diligence',
	    developer: 'Silverman Hall, Philadelphia, PA',
	    link: " "
	  }
	];
}]);