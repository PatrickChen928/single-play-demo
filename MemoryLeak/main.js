$("#start_button").click(function() {
    if (leak !== null || leak !== undefined) {
        return;
    }
    leak = new Leaker();
    leak.init();
    console.log("start");
});
$("#destory_button").click(function() {
    leak = null;
})
var leak = new Leaker();