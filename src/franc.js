'use strict';

module.exports = function (RED) {

    var franc = require("franc");

    function FrancNode(config) {
        var _this = this;

        RED.nodes.createNode(this, config);
        this.minLength = config.minLength;
        this.on('input', function (msg) {
            if (typeof msg.payload === 'string') {
                var options = {};
				var all = false;
				options.minLength = _this.minlength;
				if (msg.francoptions){
					if (msg.francoptions.minLength){
						options.minLength = msg.francoptions.minLength;
					}
					if (msg.francoptions.whiteList){
						options.whiteList = msg.francoptions.whiteList;
					}
					if (msg.francoptions.blackList){
						options.blackList = msg.francoptions.blackList;
					}
					if (msg.francoptions.all){
						all = msg.francoptions.all;
					}
					
				}
				if (all){
					var resall = franc.all(msg.payload, options );
					var lang = "";
					if (resall[0]){
						lang = resall[0][0];
					}
					var francObj = { iso639_3: lang, all:resall };
				} else {
					var lang = franc(msg.payload, options );
					var francObj = { iso639_3: lang };
				}
                msg.franc = francObj;
            }
            _this.send(msg);
        });
    }
    RED.nodes.registerType("franc", FrancNode);
};
