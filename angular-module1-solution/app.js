(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.inputBox="";
    
    $scope.checkNumOfItems = function() {
        if ($scope.inputBox.length === 0) {
            $scope.message = "Please enter data first";
            return;
        }
        
        var numOfItems = $scope.inputBox.split(',').length;
        if (numOfItems <= 3) {
            $scope.message = "Enjoy!";
        } else {
            $scope.message = "Too Much!";
        }
    }

}

})();