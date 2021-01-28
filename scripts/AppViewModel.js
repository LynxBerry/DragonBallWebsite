define(["knockout"], function(ko) {

    function View1(countDown)
    {
        this.name = "view1";
        this.data = { 
            name: "loading...",
            number: countDown

        };
    }

    function View2()
    {
        this.name = "view2";
        this.data ={ fruit: ["grape", "waterlemon", "banana"]};
    }


    return function AppViewModel() {
        this.firstName = ko.observable("Zteven");
        this.lastName = ko.observable("Shao");
        this.totalSeconds = 20;
        this.countDown = ko.observable(this.totalSeconds);
        this.View1 = new View1(this.countDown); // loading view
        this.View2 = new View2();

       
        this.isStillLoading = ko.observable(true);
        // this.currentView = ko.observable(this.View1);
        var self = this;
        /*
        this.currentView = ko.pureComputed(function() {
            if (self.isStillLoading() === true) {
                console.log("hello world");
                return self.View1;
            }

            return self.View2;

        });
        */

        this.currentView = this.View1;


        this.init = function __init(){
            var self = this;
            var countDown = function () {
                setTimeout(() => {
                    if (self.countDown() === 0) {
                        self.isStillLoading(false);
                    } else {
                        self.countDown(self.countDown() - 1)
                        countDown();
                    }     
                }, 1000);
            };

            countDown();
        };

        this.fullName = ko.computed(function() {
            return this.firstName() + " " + this.lastName();
        }, this);

        this.capitalizeLastName = function() {
            var currentVal = this.lastName();
            this.lastName(currentVal.toUpperCase());
        };

        this.changeView = function() {
            if (this.currentView().name === "view1")
                this.currentView(this.View2);
            else
                this.currentView(this.View1);

        };
    }

    //return { AppViewModel:AppViewModel};

});