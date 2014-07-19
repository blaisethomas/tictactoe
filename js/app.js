////////angular stuff ///////////////

var tttApp = angular.module('TicTacToe', []);
tttApp.controller('tttController',function($scope){

/////////set the board /////////////
$scope.sizeBox = 13;
$scope.newBoard = function(size) {
	$scope.board = [];
	for (var i=0; i<size; ++i) {
		var colset = [];
		for (var j=0; j<size; ++j) {
			colset.push({
				x:(j+1),
				y:(i+1),
				mark:null,
				active:false,
				p1owns:false,
				p2owns:false
			});	
		}
		$scope.board.push(colset)
	}	
};
$scope.newBoard($scope.sizeBox);

////////////CLICK//////////////////

$scope.playCounter=0;

$scope.cellClick = function(box){
	if(box.active == false) {
		if ($scope.playCounter%2 == 0) {
			//alert("player1");
			box.active = true;
			box.p1owns = true;
			box.mark = 'X';
			$scope.playCounter++;
			// $scope.player1 = 'p1';  
		} else {
			//alert("player2");
			box.active = true;
			box.p2owns = true;
			box.mark = 'Y';
			$scope.playCounter++;
			$scope.player2 = 'p2';
		}
	} 
	else {
		alert('taken')
	}	
}
// $scope.clicked = function(x,y){
// alert(x + " , " + y);
// }




}); //////////////////////////////END OF SCOPE	


//TODO
// define players

// ng-click swaps players
// playerSelect();




