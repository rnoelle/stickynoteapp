angular.module('noteApp')
  .controller('mainCtrl', mainCtrl);

function mainCtrl($scope, noteService) {
  // $scope.test = "working";
  // $scope.serviceTest = "Service working";

  $scope.saveNote = function (note) {
    noteService.addNote(note);
    $scope.note = {};
    getNotes();
  };

  function getNotes() {
    noteService.getNotes().then(function (response) {
      $scope.notes = response;
    });
  }
  getNotes();
}
