define(["knockout"], function(ko) {
    return function AppViewModel() {
        this.firstName = ko.observable("Zteven");
        this.lastName = ko.observable("Shao");

        this.fullName = ko.computed(function() {
            return this.firstName() + " " + this.lastName();
        }, this);

        this.capitalizeLastName = function() {
            var currentVal = this.lastName();
            this.lastName(currentVal.toUpperCase());
        };
    }

    //return { AppViewModel:AppViewModel};

});