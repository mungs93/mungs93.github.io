app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [ 
	  { 
	    icon: 'images/obedience2.jpg', 
	    title: 'Obedience', 
	    developer: 'Memorial Church, Cambridge, MA.', 
	    link: " ",
	    price: 100
	  }, 
	  { 
	    icon: 'images/pearl2.jpg', 
	    title: 'Loyalty', 
	    developer: 'Arch Iron Gate, New Haven, CT.', 
	    link: " ",
	    price: 100
	  },
	  {
	    icon: 'images/disclosure.png',
	    title: 'Disclosure',
	    developer: 'Memorial Church, Stanford, CA.',
	    link: " ",
	    price: 100%
	  },
	  {
	    icon: 'images/confidential.png',
	    title: 'Confidentiality',
	    developer: 'College Hall, Philadelphia, PA.',
	    link: " ",
	    price: 100%
	  },
	   {
	    icon: 'images/accounting.jpg',
	    title: 'Accounting',
	    developer: 'College Hall, Philadelphia, PA.',
	    link: " ",
	    price: 100% 
	  },
	  {
	    icon: 'images/reasonable.png',
	    title: 'Reasonable Care and Diligence',
	    developer: 'Silverman Hall, Philadelphia, PA',
	    link: " ",
	    price: 100%
	  }
	];
}]);