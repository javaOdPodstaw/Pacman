/*
1. oznaczyc pole
2. podzielic pole
3. wyznaczyc sciezki
4. wyznaczyc skrzyzowania

*/

(function(){

    var container = document.querySelector("#container");

    function GameInit(){
        var selfGame = this;

        var containerPosition= {
            "topLeft":{"left":container.offsetLeft, "top": container.offsetTop},
            "topRight":{"left":container.offsetLeft+containerWidth, "top": container.offsetTop},
            "bottomRight":{"left":container.offsetLeft+containerWidth, "top": container.offsetTop+containerHeight},
            "bottomLeft": {"left":container.offsetLeft, "top": container.offsetTop+containerHeight}
        };
        var containerWidth = container.clientWidth;
        var containerHeight = container.clientHeight;
        var tileSide = 16;
        var tilesWidth = containerWidth/tileSide;
        var tilesHeight = containerHeight/tileSide;
        ///Tworzenie tablicy z polozeniami kazdej plytki
        var tilesArray = [];
        selfGame.drawRectangle = function(){
            var ctx = container.getContext('2d');
            var posX = 0;
            var posY = 0 ;

            for (var i = 0; i < tilesHeight; i++) {
                for (var j = 0; j <tilesWidth; j++) {
                    tilesArray.push({"posX":posX,"posY":posY});
                    ctx.rect(posX, posY, tileSide, tileSide);
                    ctx.stroke();
                    posX+=tileSide;
                }
                posX=0;
                posY+=tileSide;
            }
        };
    }
     GameInit.prototype.init = function(){
         this.drawRectangle();
     };
     var game1 = new GameInit();
     game1.init();

})();
