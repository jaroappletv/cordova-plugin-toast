module.exports = {
    getAvailableWindows: function (success, fail, args) {
    },
    setSource: function(success, fail, args){
    }
};

require("cordova/exec/proxy").add("Toast.tvwindow",module.exports);