var MyApp = angular.module('DemoApp', ['firebase']);

MyApp.constant(
    
       'FIREBASE_URL',
       'https://anothertodo.firebaseio.com/todolist/todos');

MyApp.controller('TodoCtrl', function(
    $firebaseArray, FIREBASE_URL
    ){
   // Sync to Firebase 
   this.todos = $firebaseArray(new Firebase(FIREBASE_URL));
   
   // Add TODO
   this.addTodo = function() {
       this.todos.$add({
           name: this.title,
           date: new Date().valueOf()
       });
       this.title = null;
   }.bind(this)
        
    // Remove Todo
    this.removeItem = function (item){
        
        this.todos.$remove(item);
    };
    });
