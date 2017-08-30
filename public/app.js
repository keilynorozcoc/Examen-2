(function() {
  angular
    .module('myApp', ['appRoutes','angular-filepicker','ngFileUpload'])

    .config(function (filepickerProvider) {
      filepickerProvider.setKey('AnnsVcG28ROObHy8cVFNkz');
    })

})();