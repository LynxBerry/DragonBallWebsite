var config = {
    baseUrl: "/scripts",
    paths: {
        jquery: "jquery-3.5.1",
        knockout: "knockout-3.5.1.debug"
    }
};

requirejs.config(config);
requirejs(["Main"]);