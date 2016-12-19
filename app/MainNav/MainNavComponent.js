angular
    .module('myApp')
    .component("mainNav", {
        templateUrl: "MainNav/MainNavComponent.html",
        controller: function() {
            this.items = [
                {title: "Список", sref: "list"},
                {title: "Добавить нового", sref: "createNewPokemon"},
                {title: "Личный кабинет", sref: "myaccount"}
            ];
        }
    });
