////////angular stuff ///////////////

var tttApp = angular.module('TicTacToe', []);
tttApp.controller('tttController',function($scope){

/////////set the board /////////////
$scope.sizeBox = 3;
$scope.newBoard = function(size) {
	$scope.board = [];
	for (var i=0; i<size; ++i) {
		var colset = [];
		for (var j=0; j<size; ++j) {
			colset.push({
				x:(j+1),
				y:(i+1)
				//mark:null,
				// active:false
			});	
		}
		$scope.board.push(colset)
	}	
};
$scope.newBoard($scope.sizeBox);

////////////CLICK//////////////////

$scope.playCounter=0;

$scope.count = function(){
	
	if ($scope.playCounter%2 == 0) {
		//alert("player1");
		$scope.playCounter++;
		$scope.player1 = 'p1';  


	} else {
		

		//alert("player2");
		$scope.playCounter++;
		$scope.player2 = 'p2';
	}
}
// $scope.clicked = function(x,y){
// alert(x + " , " + y);
// }

// var $scope.isCell


}); //////////////////////////////END OF SCOPE	


//TODO
// define players

// ng-click swaps players
// playerSelect();




