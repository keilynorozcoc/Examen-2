(function() {
  'use strict'
  angular
      .module('myApp')
      .service('teacherService', teacherService);
  teacherService.$inject = ['$http'];
  function teacherService($http) {
    var teachers = [];

    var publicAPI = {
      getTeacher: _getTeacher,
      setTeachers: _setTeachers,
      getTeachers: _getTeachers,
      updateTeacher: _updateTeacher
      // valNewTeacher: _valNewTeacher
    };
    return publicAPI;


    function _setTeachers(pTeacher) {
      // var teachersList = _getTeachers();
      // teachersList.push(pTeacher);
      // localStorage.setItem('lsTeachersList', JSON.stringify(teachersList));
      return $http.post('http://localhost:3000/api/save_teacher',pTeacher);
    }

    function _getTeachers() {
      // var teachersList = JSON.parse(localStorage.getItem('lsTeachersList'));
      // if (teachersList == null) {
      //     teachersList = teachers;
      // }
      // return teachersList;
      return $http.get('http://localhost:3000/api/get_all_teacher');
    }

            function _updateTeacher(pteacherModified) {
                // var teachersList = _getTeachers();
                // for (var i = 0; i < teachersList.length; i++) {
                //     if (teachersList[i].id === pTeacherModified.id) {
                //         teachersList[i] = pTeacherModified;
                //     }
                // }
                // localStorage.setItem('lsTeachersList', JSON.stringify(teachersList));
                return $http.put('http://localhost:3000/api/edit_teacher',pteacherModified);
            }

      var user = null;

      for (var i = 0; i < teachersList.length; i++) {
        if ( teachersList[i].id == uniqueId) {
            user = teachersList[i];
            return user ;
        }
      }

    function _updateTeacher(pTeacherModified) {
      // var teachersList = _getTeachers();
      // for (var i = 0; i < teachersList.length; i++) {
      //     if (teachersList[i].id === pTeacherModified.id) {
      //         teachersList[i] = pTeacherModified;
      //     }
      // }
      // localStorage.setItem('lsTeachersList', JSON.stringify(teachersList));
      return $http.put('http://localhost:3000/api/update_teacher',pTeacherModified);
    }
    // Función para obtener el id único del usuario logeado, se usa para perfiles
    function _getTeacherid(uniqueId) {
      // var studentList = JSON.parse(localStorage.getItem('lsStudentList'));
      var allTeachers = _getTeachers();
      var user = null;

      for (var i = 0; i < allTeachers.length; i++) {
        if (allTeachers[i].id == uniqueId) {
           user = allTeachers[i];
           return user;
        }
      }
    }
  }
})();
