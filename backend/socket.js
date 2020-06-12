'use strict'

var pruebas = {
    hola: (socket) => {
        socket.emit("Hola");
    }
};

module.exports = pruebas;