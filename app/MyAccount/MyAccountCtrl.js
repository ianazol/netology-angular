'use strict';

angular
    .module("myApp")
    .controller('MyAccountCtrl', function(AccountInfo){
        var vm = this;

        vm.accountData = AccountInfo.getInfo();

        vm.saveInfo = function(formData){
            AccountInfo.save(formData);
            vm.info = {};
            vm.myAccountForm.$setPristine();
            vm.accountData = AccountInfo.getInfo();
        };
    });