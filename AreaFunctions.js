module.exports = {
    
    areaCuadrado: function (l,d){
        return l * d;
    },

    areaTriangulo: function (base,altura) {
        return base * altura/2;
    },
    areaCirculo: function (radio) {
        let pi = 3.1416;
        return pi * (radio * radio);
    }
}

