var confs = {
            name: "New Global Widget",
            width: 2,
            height: 1,
            x: 6,
            y: 6
};
var plugin = function(self){
        var i = 0;
        setInterval(function(){
            self.content = i++;
            self.refresh();
        }, 1000);
};
