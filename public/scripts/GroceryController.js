angular.module('groceryApp').controller("GroceryList", function($http){
  var vm = this;

  vm.grocery = {};
  vm.groceries = [];
  vm.tempGrocery = {};

  var getGroceries = function(){
    $http.get('/groceries').then(function(response){
      console.log('groceries we have:', response.data);
      vm.grocery = {};
      vm.groceries = response.data;
    });
  };

  vm.add = function (grocery){
    console.log("sending grocery from client", grocery);
    $http.post('/add_grocery', grocery).then(getGroceries);
  }

  vm.remove = function(grocery){
    console.log("removing grocery: ", grocery);
    $http.post('/remove_grocery', grocery).then(getGroceries);
  }

  vm.updateName = function(grocery){
    $http.post('/update_name', grocery).then(getGroceries);
    console.log("updating to", name);
  }

  vm.updateQuantity = function(grocery){
    $http.post('/update_quantity', grocery).then(getGroceries);
    console.log("updating to", name);
  }


  getGroceries();
});
