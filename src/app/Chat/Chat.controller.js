angular.module('starter.controllers')
  .controller('ChatCtrl', function($scope, Chats) { console.log('ChatCtrl');
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };
  })
