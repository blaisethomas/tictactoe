////////angular stuff ///////////////

var tttApp = angular.module('TicTacToe', []);
tttApp.controller('tttController',function($scope){

/////////set the board /////////////
$scope.sizeBoard = 3;
$scope.newBoard = function(size) {
	$scope.board = [];
	for (var i=0; i<size; ++i) {
		var boxSet = [];
		for (var j=0; j<size; ++j) {
			boxSet.push({ 
				x:[(j+1),(i+1)],
				//y:(i+1),
				mark:null,
				active:false,
				p1owns:false,
				p2owns:false
			});	
		}
		$scope.board.push(boxSet)
	}	
};
$scope.newBoard($scope.sizeBoard);

////////////CLICK//////////////////

$scope.playCounter=0;

$scope.cellClick = function(box){
	if(box.active == false) {
		if ($scope.playCounter%2 == 0) {
			//alert("player1");
			box.active = true;
			box.p1owns = true;
			//box.mark = 'X';
			$scope.playCounter++;
			p1moves.push(box.x);
			// $scope.player1 = 'p1'; 
			//push to new array or object called playerOne 
		} else {
			//alert("player2");
			box.active = true;
			box.p2owns = true;
			//box.mark = 'Y';
			$scope.playCounter++;
			p2moves.push(box.x);
			//$scope.player2 = 'p2';
		}

	} else {
		alert('taken')
	}
}

p1moves = [];
p2moves = [];

winCombo1 = [[1,1],[1,2],[1,3]]
winCombo2 = [[2,1],[2,2],[2,3]]
winCombo3 = [[3,1],[3,2],[3,3]]
winCombo4 = [[1,1],[2,1],[3,1]]
winCombo5 = [[1,2],[2,2],[3,2]]
winCombo6 = [[1,3],[2,3],[3,3]]
winCombo7 = [[1,1],[2,2],[3,3]]
winCombo8 = [[1,3],[2,2],[3,1]]


$scope.winCheck = function () {
	for (k=0; k<p1moves.length; k++) {
		console.log("still looping");
		if (p1moves[k].toString() == winCombo1[0].toString() && p1moves[k+1].toString() == winCombo1[1].toString() && p1moves[k+2].toString() == winCombo1[2].toString()) {
		// if (p1moves.toString() == winCombo1.toString()) {
			alert("player one wins!");
		}
	}

	console.log('p1moves: ' + p1moves);
	console.log('wincombo1' + winCombo1);
	console.log(p1moves.toString() == winCombo1.toString());



	
}




// if (arrayCell == "x: 2, y: 2") {
// 			alert("winner!");
// 		} else {
// 			alert("searching")
// 		}


















// $scope.winCheck(playerOne);
// $scope.winCheck(playerTwo)
// if (playCounter >=4 ) {
// for  {
// 	
// } 
// }

 // $scope.winCheck = function(arrayCount){
// 			while ($scope.playCounter < 9) {
// 				if (arrayCount == "x: 2, y: 2") {
// 				alert("p1wins!!");
// 				} else {
// 				alert("debug");
// 				}
// 			}
// 		}
// }	






//////////////GAME LOGIC\\\\\\\\\\\\\\\\\\






}); //////////////////////////////END OF SCOPE	







