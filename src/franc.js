module.exports = function(RED) {
    
    const franc = require("franc");
    
    function FrancNode(config) {
        RED.nodes.createNode(this, config);
        this.minLength = config.minLength;
        this.on('input', msg => {
            let francObj = {iso639_3: franc(msg.payload, {'minLength': this.minLength})};
            msg.franc = francObj;
            this.send(msg);
        });
    }
    RED.nodes.registerType("franc", FrancNode);
}
