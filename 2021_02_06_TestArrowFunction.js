var TestObj = {
    foo: function() {
        setTimeout(() => {
            this.bar();
            setTimeout(()=>{this.bar()},1000);
        }, 10);
    },
    foo3: function() {
        setTimeout((function(self){
            return function () {
                self.bar();
                setTimeout((function(self){
                    return function(){
                        self.bar();
                    };  
                })(self),1000);
            };
        })(this),10);
    }

    ,
    foo2: function() {
        setTimeout((function(self) {
                        return function(){
                            return (function () {
                                this.bar();
                            }).apply(self, arguments);
                        }
        })(this),10);
    }
    ,
    foo5: function() {
        (()=>{this.bar()})();
    },
    bar: ()=>{
        console.log("I am Bar inside TestObj");
    }

}


var TestObj2 = {
    foo: function() {
        var self = this;
        (function() {
            setTimeout(function() {
                console.log("start");
                self.bar();
                console.log("end");
            }, 10);
        }) ();
    },
    bar: ()=>{
        console.log("Dinasor");
    }
}


var TestObj3 = {
    msg: "abc",
    foo: ()=>{
        console.log(this.msg);
    },
    foo2: (function (self) {
        return function() {
            console.log(self.msg);
        };
    })(this)

};

var TestObj4 = (function() {
    var self = this;
    return {
        msg: "abc",
        foo: function() {
            console.log(self.msg);
        }
    };

}) ();

var TestObj5 = {
    msg: "abc",
    foo: (function(){
        var self = this;
        return function(){
            console.log(self.msg);
        };

    })()

};


function bar () {
    console.log("I am Bar outside TestObj");
};

// TestObj.foo();
// bar();

var xyz;
function test()
{
    console.log("hhhh");
    xyz = this;
}
//var hello = TestObj.foo;
//hello
// test();
// console.log(xyz === this);

function outsider(){
    var obj = "hello world";
    function inside(){
        console.log(obj);
    } 

    inside();
}

TestObj.foo5();

