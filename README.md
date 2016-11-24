# node-red-contrib-franc

Language identification for Node-RED

Analyses the **msg.payload** and adds a **msg.franc** object that contains the identified language [ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3) code as **msg.franc.iso639_3**.

Also optionally accepts **msg.francoptions** which can contain **maxLength** **whiteList** **blackList** an **all**.

If **msg.francoptions.all** is non-zero, then franc.all is called, and an **additional** output of **msg.franc.all** containing the franc.all() output is added.
