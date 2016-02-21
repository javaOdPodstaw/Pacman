/*
1. oznaczyc pole
2. podzielic pole
3. wyznaczyc sciezki
4. wyznaczyc skrzyzowania

*/

(function(){

    //Tablica z koordynatami kafelek sciezki
    var  pathTilesArray = [{"left":16,"top":64},{"left":32,"top":64},{"left":48,"top":64},{"left":64,"top":64},{"left":80,"top":64},
    {"left":96,"top":64},{"left":112,"top":64},{"left":128,"top":64},{"left":144,"top":64},{"left":160,"top":64},
    {"left":176,"top":64},{"left":192,"top":64},{"left":240,"top":64},{"left":256,"top":64},{"left":272,"top":64},
    {"left":288,"top":64},{"left":304,"top":64},{"left":320,"top":64},{"left":336,"top":64},{"left":352,"top":64},
    {"left":368,"top":64},{"left":384,"top":64},{"left":400,"top":64},{"left":416,"top":64},{"left":16,"top":80},
    {"left":16,"top":96},{"left":16,"top":112},{"left":16,"top":128},{"left":32,"top":128},{"left":16,"top":144},
    {"left":16,"top":160},{"left":16,"top":176},{"left":32,"top":176},{"left":48,"top":128},{"left":64,"top":128},
    {"left":80,"top":128},{"left":96,"top":128},{"left":96,"top":112},{"left":96,"top":96},{"left":96,"top":80},
    {"left":96,"top":144},{"left":96,"top":160},{"left":96,"top":176},{"left":48,"top":176},{"left":64,"top":176},
    {"left":80,"top":176},{"left":192,"top":80},{"left":192,"top":96},{"left":192,"top":112},{"left":192,"top":128},
    {"left":112,"top":128},{"left":128,"top":128},{"left":144,"top":128},{"left":160,"top":128},{"left":176,"top":128},
    {"left":144,"top":144},{"left":144,"top":160},{"left":144,"top":176},{"left":160,"top":176},{"left":176,"top":176},
    {"left":192,"top":176},{"left":192,"top":192},{"left":192,"top":208},{"left":192,"top":224},{"left":208,"top":224},
    {"left":176,"top":224},{"left":160,"top":224},{"left":144,"top":224},{"left":224,"top":224},{"left":240,"top":224},
    {"left":240,"top":208},{"left":256,"top":224},{"left":272,"top":224},{"left":288,"top":224},{"left":288,"top":240},
    {"left":288,"top":256},{"left":288,"top":272},{"left":304,"top":272},{"left":288,"top":288},{"left":288,"top":304},
    {"left":288,"top":320},{"left":272,"top":320},{"left":256,"top":320},{"left":240,"top":320},{"left":224,"top":320},
    {"left":208,"top":320},{"left":192,"top":320},{"left":176,"top":320},{"left":160,"top":320},{"left":144,"top":320},
    {"left":144,"top":304},{"left":144,"top":288},{"left":144,"top":272},{"left":144,"top":256},{"left":144,"top":240},
    {"left":128,"top":272},{"left":112,"top":272},{"left":96,"top":272},{"left":80,"top":272},{"left":64,"top":272},
    {"left":48,"top":272},{"left":32,"top":272},{"left":16,"top":272},{"left":0,"top":272},{"left":320,"top":272},
    {"left":336,"top":272},{"left":352,"top":272},{"left":368,"top":272},{"left":384,"top":272},{"left":400,"top":272},
    {"left":416,"top":272},{"left":432,"top":272},{"left":240,"top":192},{"left":240,"top":176},{"left":256,"top":176},
    {"left":272,"top":176},{"left":288,"top":176},{"left":288,"top":160},{"left":288,"top":144},{"left":288,"top":128},
    {"left":272,"top":128},{"left":256,"top":128},{"left":240,"top":128},{"left":304,"top":128},{"left":320,"top":128},
    {"left":336,"top":128},{"left":352,"top":128},{"left":368,"top":128},{"left":384,"top":128},{"left":400,"top":128},
    {"left":416,"top":128},{"left":416,"top":112},{"left":416,"top":96},{"left":416,"top":80},{"left":240,"top":112},
    {"left":240,"top":96},{"left":240,"top":80},{"left":336,"top":144},{"left":336,"top":160},{"left":336,"top":176},
    {"left":352,"top":176},{"left":368,"top":176},{"left":384,"top":176},{"left":400,"top":176},{"left":416,"top":176},
    {"left":416,"top":160},{"left":416,"top":144},{"left":336,"top":112},{"left":336,"top":96},{"left":336,"top":80},
    {"left":96,"top":192},{"left":96,"top":208},{"left":96,"top":224},{"left":96,"top":240},{"left":96,"top":256},
    {"left":336,"top":192},{"left":336,"top":208},{"left":336,"top":224},{"left":336,"top":240},{"left":336,"top":256},
    {"left":96,"top":288},{"left":96,"top":304},{"left":96,"top":320},{"left":96,"top":336},{"left":96,"top":352},
    {"left":96,"top":368},{"left":112,"top":368},{"left":80,"top":368},{"left":64,"top":368},{"left":48,"top":368},
    {"left":32,"top":368},{"left":16,"top":368},{"left":16,"top":384},{"left":16,"top":400},{"left":16,"top":416},
    {"left":32,"top":416},{"left":48,"top":416},{"left":48,"top":432},{"left":48,"top":448},{"left":48,"top":464},
    {"left":32,"top":464},{"left":16,"top":464},{"left":16,"top":480},{"left":16,"top":496},{"left":16,"top":512},
    {"left":32,"top":512},{"left":48,"top":512},{"left":64,"top":512},{"left":80,"top":512},{"left":96,"top":512},
    {"left":112,"top":512},{"left":128,"top":512},{"left":144,"top":512},{"left":160,"top":512},{"left":176,"top":512},
    {"left":192,"top":512},{"left":208,"top":512},{"left":224,"top":512},{"left":240,"top":512},{"left":256,"top":512},
    {"left":272,"top":512},{"left":288,"top":512},{"left":304,"top":512},{"left":320,"top":512},{"left":336,"top":512},
    {"left":352,"top":512},{"left":368,"top":512},{"left":384,"top":512},{"left":400,"top":512},{"left":416,"top":512},
    {"left":416,"top":496},{"left":416,"top":480},{"left":416,"top":464},{"left":400,"top":464},{"left":384,"top":464},
    {"left":368,"top":464},{"left":384,"top":448},{"left":384,"top":432},{"left":384,"top":416},{"left":400,"top":416},
    {"left":416,"top":416},{"left":416,"top":400},{"left":416,"top":384},{"left":416,"top":368},{"left":400,"top":368},
    {"left":384,"top":368},{"left":368,"top":368},{"left":352,"top":368},{"left":336,"top":368},{"left":336,"top":352},
    {"left":336,"top":336},{"left":336,"top":320},{"left":336,"top":304},{"left":336,"top":288},{"left":128,"top":368},
    {"left":144,"top":368},{"left":160,"top":368},{"left":176,"top":368},{"left":192,"top":368},{"left":240,"top":368},
    {"left":256,"top":368},{"left":272,"top":368},{"left":288,"top":368},{"left":304,"top":368},{"left":320,"top":368},
    {"left":240,"top":384},{"left":240,"top":400},{"left":240,"top":416},{"left":192,"top":384},{"left":192,"top":400},
    {"left":192,"top":416},{"left":64,"top":464},{"left":80,"top":464},{"left":96,"top":464},{"left":96,"top":448},
    {"left":96,"top":432},{"left":96,"top":416},{"left":96,"top":400},{"left":96,"top":384},{"left":352,"top":464},
    {"left":336,"top":464},{"left":336,"top":448},{"left":336,"top":432},{"left":336,"top":416},{"left":336,"top":400},
    {"left":336,"top":384},{"left":256,"top":416},{"left":272,"top":416},{"left":288,"top":416},{"left":304,"top":416},
    {"left":320,"top":416},{"left":288,"top":432},{"left":288,"top":448},{"left":288,"top":464},{"left":272,"top":464},
    {"left":256,"top":464},{"left":240,"top":464},{"left":240,"top":480},{"left":240,"top":496},{"left":176,"top":416},
    {"left":160,"top":416},{"left":144,"top":416},{"left":128,"top":416},{"left":112,"top":416},{"left":144,"top":432},
    {"left":144,"top":448},{"left":144,"top":464},{"left":160,"top":464},{"left":176,"top":464},{"left":192,"top":464},
    {"left":192,"top":480},{"left":192,"top":496},{"left":208,"top":128},{"left":224,"top":128},{"left":144,"top":336},
    {"left":144,"top":352},{"left":288,"top":336},{"left":288,"top":352},{"left":208,"top":416},{"left":224,"top":416}];

    //Koordynaty kafelek ze skrzyzowaniami
    var crossRoadsTilesArray =[{"left":96,"top":64},{"left":96,"top":128},{"left":16,"top":128},{"left":144,"top":128},
    {"left":192,"top":128},{"left":240,"top":128},{"left":288,"top":128},{"left":336,"top":128},{"left":336,"top":64},
    {"left":416,"top":128},{"left":336,"top":176},{"left":336,"top":272},{"left":288,"top":272},{"left":336,"top":368},
    {"left":336,"top":416},{"left":288,"top":416},{"left":288,"top":368},{"left":288,"top":320},{"left":144,"top":320},
    {"left":144,"top":272},{"left":96,"top":272},{"left":96,"top":368},{"left":144,"top":368},{"left":144,"top":416},
    {"left":96,"top":416},{"left":48,"top":464},{"left":384,"top":464},{"left":240,"top":512},{"left":192,"top":512},{"left":96,"top":176}];
    //Koordynaty specjlanych skrzyzowan na ktorych duchy nie moga isc do gory, gdy nadchodza z lewej albo prawej,
    var specialCrossRoadsArray = [{"left":192,"top":416},{"left":240,"top":416},{"left":192,"top":224},{"left":240,"top":224}];

    var teleportTilesArray = [{"left":0,"top":272},{"left":432,"top":272}];

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
        //Ta metoda jest jedynie metoda pomocnicz ktora zaznacza kolorami odpowiednie kafelki
        selfGame.drawPath = function(){
            var ctx = container.getContext('2d');

            for (var i = 0; i < pathTilesArray.length; i++) {
                ctx.fillStyle="red";
                ctx.fillRect(pathTilesArray[i].left, pathTilesArray[i].top, tileSide, tileSide);
            }
            for (var i = 0; i < crossRoadsTilesArray.length; i++) {
                ctx.fillStyle="green";
                ctx.fillRect(crossRoadsTilesArray[i].left, crossRoadsTilesArray[i].top, tileSide, tileSide);
            }
            for (var i = 0; i < specialCrossRoadsArray.length; i++) {
                ctx.fillStyle="yellow";
                ctx.fillRect(specialCrossRoadsArray[i].left, specialCrossRoadsArray[i].top, tileSide, tileSide);
            }
            for (var i = 0; i < teleportTilesArray.length; i++) {
                ctx.fillStyle="maroon";
                ctx.fillRect(teleportTilesArray[i].left, teleportTilesArray[i].top, tileSide, tileSide);
            }
        };

        //ta metoda jest metoda pomocnicza do zaznaczania konkretych kafelek i wrzucaniu ich do tablicy a nastepnie kopiowania z konsoli do pliku
        selfGame.helperCross = function(){
            var ctx = container.getContext('2d');
            container.addEventListener('click', function(e){
                var posX = e.offsetX-e.offsetX%tileSide;
                var posY = e.offsetY-e.offsetY%tileSide;
                ctx.fillStyle="yellow";
                ctx.fillRect(posX, posY, tileSide, tileSide);
                teleportTilesArray.push({"left":posX, "top":posY});
            }, false);
            container.addEventListener('contextmenu', function(){
                console.log(JSON.stringify(teleportTilesArray, null, 0));

            }, false);
        };


    }
     GameInit.prototype.init = function(){
         this.drawRectangle();
         this.drawPath();
         this.helperCross();
     };
     var game1 = new GameInit();
     game1.init();

})();
