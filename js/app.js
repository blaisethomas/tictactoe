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
			playerOne.push([box.x]);
			// $scope.player1 = 'p1'; 
			//push to new array or object called playerOne 
		} else {
			//alert("player2");
			box.active = true;
			box.p2owns = true;
			//box.mark = 'Y';
			$scope.playCounter++;
			playerTwo.push([box.x]);
			//$scope.player2 = 'p2';
		}

	} else {
		alert('taken')
	}
}

$scope.winCheck = function () {
	if ($scope.playCounter > 8) {
	var results = playerOne.map(function(arrayCell){
		console.log(playerOne + "\n" + playerTwo);
		});
	} else {
		console.log("playing")
	}
}

playerOne = [];
playerTwo = [];

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


// $scope.winFind = function(box) {

// 	if (box.p1owns != true){ 
// 		//alert("p2")
// 	}
// 	else if (box.p2owns != true) {
// 		//alert("p1")
// 	}
// }


// $scope.clicked = function(x,y){
// alert(x + " , " + y);
// }




}); //////////////////////////////END OF SCOPE	







