define(["jquery","knockout","AppViewModel"], function ($, ko, AppViewModel) {
    $(document).ready(function myfunc() {
        // window.alert("The JQuery Version is " +  $().jquery + ".");
        
        ko.applyBindings(new AppViewModel());

    });
    
});