app.controller("myCtrl", function($scope) {
    $scope.side1=0;
	$scope.side2=0;
	$scope.side3=0;
	
	 $scope.checktrangle = function() {
        
		
		if($scope.side1==0 || $scope.side2==0 || $scope.side3==0)
		{
		  return $scope.result='Please enter all sides!';
		 
		}
		
		if((($scope.side1+$scope.side2) > $scope.side3 && ($scope.side1+$scope.side3) > $scope.side2 && ($scope.side3+$scope.side2)>$scope.side1))
		{
	     
		  if(angular.equals($scope.side1, $scope.side2) &&  angular.equals($scope.side2, $scope.side3))
		   $scope.result ='equilateral';
		  else if(( angular.equals($scope.side1, $scope.side2) ||  angular.equals($scope.side2, $scope.side3) ) && ( !angular.equals($scope.side1, $scope.side2) ||  !angular.equals($scope.side2, $scope.side3) ) )
		   $scope.result ='isosceles';
		  else
		   $scope.result ='scalene';
		  
		}
		else
		 $scope.result='not a triangle';
		
		
    }
});