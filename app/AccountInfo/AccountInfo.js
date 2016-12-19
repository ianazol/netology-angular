'use strict';

angular
    .module("myApp")
    .factory("AccountInfo", function(){
        const state = {
            data: {}
        };

        return {
            save(formData){
                state.data = formData;
            },
            getInfo(){
                var formShow = true;

                for (var prop in state.data) {
                    if (state.data.hasOwnProperty(prop)) {
                        formShow = false;
                        break;
                    }
                }

                return {
                    data: state.data,
                    formShow: formShow
                };
            }
        }
    });