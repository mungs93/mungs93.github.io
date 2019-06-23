app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Community Partnerships'; 
  $scope.promo = 'Let\'s make meaningful and lasting changes around us';
  $scope.apps = [

	{ 
	    cover: 'images/texas.png', 
	    name: 'Fort Bend Pets Alive',
 		url: "https://www.fortbendpetsalive.org",
		url2: "https://www.facebook.com/FortBendPetsAlive/",
		url3: "https://www.fortbendpetsalive.org/donations/"
	  }, 
	{ 
	    cover: 'images/WhiteFlower.jpg', 
	    name: 'Saving Our Companion Animals', 
 		url: "http://soca-fbc.org",
		url2: "https://www.facebook.com/soca.fortbendcounty/",
		url3: "https://www.paypal.com/fundraiser/charity/2249273"    
	  }, 
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
}]);