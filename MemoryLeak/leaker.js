var Leaker = function() {

};
Leaker.prototype = {
    init: function() {
        this._interval = null;
        this.start();
    },
    start: function() {
        var self = this;
        this._interval = setInterval(function() {
            self.onInterval();
        }, 100);
    },
    destory: function() {
        if (this._interval !== null) {
            clearInterval(this._interval);
        }
    },
    onInterval: function() {
        console.log("Interval");
    }
}