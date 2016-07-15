angular.module('noteApp')
  .service('noteService', noteService);

function noteService($q) {
  // this.test = "WORKING";

  this.addNote = function (note) {
    var existingNotes = JSON.parse(localStorage.getItem('notes'));
    if (!existingNotes) {
      existingNotes = [];
    }
    existingNotes.push(note);
    localStorage.setItem('notes', JSON.stringify(existingNotes));
  };
  this.getNotes = function () {
    var deferred = $q.defer();
    deferred.resolve(JSON.parse(localStorage.getItem('notes')));

    return deferred.promise;
  };
}
