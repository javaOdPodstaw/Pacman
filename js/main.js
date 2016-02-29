(function(configObj){

    //Tablica z koordynatami kafelek sciezki. Koordynaty lewych gornych rogow kafelek kwadratowych o boku 16px. Zarowno PACMAN jak i duchy moga sie poruszac
    // wylacznie po tychy kafelkach. Wszelkie ruchu PACMANA sa uzaleznione czy w jego kolejna lokalizacja po wykonaniu ruchu w danym kierunku bedzie sie znajdowala w tej tablicy
    /// TO SA CZERWONE KAFELKI
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
    //Koordynaty kafelek ze skrzyzowaniami. To jest tablica koordynatow lewych gornych rogow kwadratowych kafelek o boku 16 px .
    //Te kafelki sa istotne z punku widzenia duchow. Jezli duch natrafi podczas swojego ruchu na kafelke dostepna w tej tablicy assocjacyjnej to bedzie musial
    // podjac decyzja odnosnie kierunku skretu
    // TO SA ZIELONE KAFELKI
    var crossRoadsTilesArray =[{"left":96,"top":64},{"left":96,"top":128},{"left":16,"top":128},{"left":144,"top":128},
    {"left":192,"top":128},{"left":240,"top":128},{"left":288,"top":128},{"left":336,"top":128},{"left":336,"top":64},
    {"left":416,"top":128},{"left":336,"top":176},{"left":336,"top":272},{"left":288,"top":272},{"left":336,"top":368},
    {"left":336,"top":416},{"left":288,"top":416},{"left":288,"top":368},{"left":288,"top":320},{"left":144,"top":320},
    {"left":144,"top":272},{"left":96,"top":272},{"left":96,"top":368},{"left":144,"top":368},{"left":144,"top":416},
    {"left":96,"top":416},{"left":48,"top":464},{"left":384,"top":464},{"left":240,"top":512},{"left":192,"top":512},{"left":96,"top":176}];


    //tablica z koordynatami kafelek gdzie beda zlokalizowane specjalne kulki
    var specialDotsTilesArray = [{"left":16,"top":368},{"left":416,"top":368},{"left":16,"top":176},{"left":416,"top":176}];
    //tablica z koordynatami kafelek gdzie beda zlokalizowane normalne kulki
    var normalDotsTilesArray = [{"left":16,"top":64},{"left":32,"top":64},{"left":48,"top":64},{"left":64,"top":64},
    {"left":80,"top":64},{"left":96,"top":64},{"left":112,"top":64},{"left":128,"top":64},{"left":144,"top":64},
    {"left":160,"top":64},{"left":176,"top":64},{"left":192,"top":64},{"left":240,"top":64},{"left":256,"top":64},
    {"left":272,"top":64},{"left":288,"top":64},{"left":304,"top":64},{"left":320,"top":64},{"left":336,"top":64},
    {"left":352,"top":64},{"left":368,"top":64},{"left":384,"top":64},{"left":400,"top":64},{"left":416,"top":64},
    {"left":16,"top":80},{"left":16,"top":96},{"left":16,"top":112},{"left":16,"top":128},{"left":32,"top":128},
    {"left":16,"top":144},{"left":16,"top":160},{"left":32,"top":176},{"left":48,"top":128},{"left":64,"top":128},
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
    {"left":352,"top":176},{"left":368,"top":176},{"left":384,"top":176},{"left":400,"top":176},{"left":416,"top":160},
    {"left":416,"top":144},{"left":336,"top":112},{"left":336,"top":96},{"left":336,"top":80},{"left":96,"top":192},
    {"left":96,"top":208},{"left":96,"top":224},{"left":96,"top":240},{"left":96,"top":256},{"left":336,"top":192},
    {"left":336,"top":208},{"left":336,"top":224},{"left":336,"top":240},{"left":336,"top":256},{"left":96,"top":288},
    {"left":96,"top":304},{"left":96,"top":320},{"left":96,"top":336},{"left":96,"top":352},{"left":96,"top":368},
    {"left":112,"top":368},{"left":80,"top":368},{"left":64,"top":368},{"left":48,"top":368},{"left":32,"top":368},
    {"left":16,"top":384},{"left":16,"top":400},{"left":16,"top":416},{"left":32,"top":416},{"left":48,"top":416},
    {"left":48,"top":432},{"left":48,"top":448},{"left":48,"top":464},{"left":32,"top":464},{"left":16,"top":464},
    {"left":16,"top":480},{"left":16,"top":496},{"left":16,"top":512},{"left":32,"top":512},{"left":48,"top":512},
    {"left":64,"top":512},{"left":80,"top":512},{"left":96,"top":512},{"left":112,"top":512},{"left":128,"top":512},
    {"left":144,"top":512},{"left":160,"top":512},{"left":176,"top":512},{"left":192,"top":512},{"left":208,"top":512},
    {"left":224,"top":512},{"left":240,"top":512},{"left":256,"top":512},{"left":272,"top":512},{"left":288,"top":512},
    {"left":304,"top":512},{"left":320,"top":512},{"left":336,"top":512},{"left":352,"top":512},{"left":368,"top":512},
    {"left":384,"top":512},{"left":400,"top":512},{"left":416,"top":512},{"left":416,"top":496},{"left":416,"top":480},
    {"left":416,"top":464},{"left":400,"top":464},{"left":384,"top":464},{"left":368,"top":464},{"left":384,"top":448},
    {"left":384,"top":432},{"left":384,"top":416},{"left":400,"top":416},{"left":416,"top":416},{"left":416,"top":400},
    {"left":416,"top":384},{"left":400,"top":368},{"left":384,"top":368},{"left":368,"top":368},{"left":352,"top":368},
    {"left":336,"top":368},{"left":336,"top":352},{"left":336,"top":336},{"left":336,"top":320},{"left":336,"top":304},
    {"left":336,"top":288},{"left":128,"top":368},{"left":144,"top":368},{"left":160,"top":368},{"left":176,"top":368},
    {"left":192,"top":368},{"left":240,"top":368},{"left":256,"top":368},{"left":272,"top":368},{"left":288,"top":368},
    {"left":304,"top":368},{"left":320,"top":368},{"left":240,"top":384},{"left":240,"top":400},{"left":240,"top":416},
    {"left":192,"top":384},{"left":192,"top":400},{"left":192,"top":416},{"left":64,"top":464},{"left":80,"top":464},
    {"left":96,"top":464},{"left":96,"top":448},{"left":96,"top":432},{"left":96,"top":416},{"left":96,"top":400},
    {"left":96,"top":384},{"left":352,"top":464},{"left":336,"top":464},{"left":336,"top":448},{"left":336,"top":432},
    {"left":336,"top":416},{"left":336,"top":400},{"left":336,"top":384},{"left":256,"top":416},{"left":272,"top":416},
    {"left":288,"top":416},{"left":304,"top":416},{"left":320,"top":416},{"left":288,"top":432},{"left":288,"top":448},
    {"left":288,"top":464},{"left":272,"top":464},{"left":256,"top":464},{"left":240,"top":464},{"left":240,"top":480},
    {"left":240,"top":496},{"left":176,"top":416},{"left":160,"top":416},{"left":144,"top":416},{"left":128,"top":416},
    {"left":112,"top":416},{"left":144,"top":432},{"left":144,"top":448},{"left":144,"top":464},{"left":160,"top":464},
    {"left":176,"top":464},{"left":192,"top":464},{"left":192,"top":480},{"left":192,"top":496},{"left":208,"top":128},
    {"left":224,"top":128},{"left":144,"top":336},{"left":144,"top":352},{"left":288,"top":336},{"left":288,"top":352}];
    //kafelki na ktorych pacman podejmuje decyzje
    var pacmanTurningTilesArray = [{"left":96,"top":64},{"left":96,"top":128},{"left":16,"top":128},{"left":144,"top":128},
    {"left":192,"top":128},{"left":240,"top":128},{"left":288,"top":128},{"left":336,"top":128},{"left":336,"top":64},
    {"left":416,"top":128},{"left":336,"top":176},{"left":336,"top":272},{"left":288,"top":272},{"left":336,"top":368},
    {"left":336,"top":416},{"left":288,"top":416},{"left":288,"top":368},{"left":288,"top":320},{"left":144,"top":320},
    {"left":144,"top":272},{"left":96,"top":272},{"left":96,"top":368},{"left":144,"top":368},{"left":144,"top":416},
    {"left":96,"top":416},{"left":48,"top":464},{"left":384,"top":464},{"left":240,"top":512},{"left":192,"top":512},{"left":96,"top":176},
    {"left":192,"top":416},{"left":240,"top":416},{"left":192,"top":224},{"left":240,"top":224},{"left":16,"top":64},
    {"left":192,"top":64},{"left":16,"top":176},{"left":240,"top":64},{"left":416,"top":64},{"left":416,"top":176},
    {"left":288,"top":176},{"left":144,"top":176},{"left":144,"top":224},{"left":288,"top":224},{"left":16,"top":368},
    {"left":192,"top":368},{"left":240,"top":368},{"left":416,"top":368},{"left":416,"top":416},{"left":384,"top":416},
    {"left":416,"top":464},{"left":416,"top":512},{"left":336,"top":464},{"left":288,"top":464},{"left":240,"top":464},
    {"left":192,"top":464},{"left":144,"top":464},{"left":96,"top":464},{"left":16,"top":464},{"left":16,"top":512},
    {"left":48,"top":416},{"left":16,"top":416}];

    var possibleTurnsTilesArray =[{"left":32,"top":64},{"left":16,"top":80},{"left":16,"top":112},{"left":32,"top":128},
    {"left":16,"top":144},{"left":16,"top":160},{"left":32,"top":176},{"left":80,"top":176},{"left":96,"top":160},
    {"left":96,"top":192},{"left":96,"top":144},{"left":80,"top":128},{"left":96,"top":112},{"left":112,"top":128},
    {"left":80,"top":64},{"left":96,"top":80},{"left":112,"top":64},{"left":176,"top":64},{"left":192,"top":80},
    {"left":128,"top":128},{"left":160,"top":128},{"left":144,"top":144},{"left":176,"top":128},{"left":208,"top":128},
    {"left":192,"top":112},{"left":224,"top":128},{"left":256,"top":128},{"left":240,"top":112},{"left":272,"top":128},
    {"left":304,"top":128},{"left":288,"top":144},{"left":240,"top":80},{"left":256,"top":64},{"left":320,"top":64},
    {"left":336,"top":80},{"left":352,"top":64},{"left":400,"top":64},{"left":416,"top":80},{"left":416,"top":112},
    {"left":400,"top":128},{"left":416,"top":144},{"left":320,"top":128},{"left":336,"top":112},{"left":352,"top":128},
    {"left":336,"top":144},{"left":416,"top":160},{"left":400,"top":176},{"left":352,"top":176},{"left":336,"top":160},
    {"left":336,"top":192},{"left":288,"top":160},{"left":272,"top":176},{"left":256,"top":176},{"left":240,"top":192},
    {"left":192,"top":192},{"left":176,"top":176},{"left":160,"top":176},{"left":144,"top":160},{"left":192,"top":208},
    {"left":208,"top":224},{"left":224,"top":224},{"left":240,"top":208},{"left":256,"top":224},{"left":176,"top":224},
    {"left":160,"top":224},{"left":144,"top":240},{"left":272,"top":224},{"left":288,"top":240},{"left":288,"top":256},
    {"left":304,"top":272},{"left":320,"top":272},{"left":336,"top":256},{"left":352,"top":272},{"left":336,"top":288},
    {"left":288,"top":288},{"left":288,"top":304},{"left":288,"top":336},{"left":272,"top":320},{"left":288,"top":352},
    {"left":304,"top":368},{"left":272,"top":368},{"left":320,"top":368},{"left":336,"top":352},{"left":352,"top":368},
    {"left":336,"top":384},{"left":400,"top":368},{"left":416,"top":384},{"left":416,"top":400},{"left":400,"top":416},
    {"left":384,"top":432},{"left":384,"top":448},{"left":400,"top":464},{"left":368,"top":464},{"left":416,"top":480},
    {"left":416,"top":496},{"left":400,"top":512},{"left":256,"top":512},{"left":240,"top":496},{"left":224,"top":512},
    {"left":240,"top":480},{"left":256,"top":464},{"left":272,"top":464},{"left":288,"top":448},{"left":352,"top":464},
    {"left":336,"top":448},{"left":336,"top":432},{"left":336,"top":400},{"left":320,"top":416},{"left":304,"top":416},
    {"left":288,"top":432},{"left":272,"top":416},{"left":256,"top":416},{"left":224,"top":416},{"left":240,"top":400},
    {"left":240,"top":384},{"left":256,"top":368},{"left":208,"top":416},{"left":192,"top":400},{"left":176,"top":416},
    {"left":192,"top":384},{"left":176,"top":368},{"left":160,"top":368},{"left":144,"top":352},{"left":128,"top":368},
    {"left":144,"top":336},{"left":160,"top":320},{"left":144,"top":304},{"left":144,"top":288},{"left":144,"top":256},
    {"left":128,"top":272},{"left":112,"top":272},{"left":96,"top":288},{"left":80,"top":272},{"left":96,"top":256},
    {"left":96,"top":352},{"left":112,"top":368},{"left":80,"top":368},{"left":96,"top":384},{"left":32,"top":368},
    {"left":16,"top":384},{"left":16,"top":400},{"left":32,"top":416},{"left":48,"top":432},{"left":48,"top":448},
    {"left":64,"top":464},{"left":80,"top":464},{"left":96,"top":448},{"left":96,"top":432},{"left":112,"top":416},
    {"left":96,"top":400},{"left":128,"top":416},{"left":160,"top":416},{"left":144,"top":432},{"left":144,"top":448},
    {"left":160,"top":464},{"left":176,"top":464},{"left":192,"top":480},{"left":192,"top":496},{"left":208,"top":512},
    {"left":176,"top":512},{"left":32,"top":512},{"left":16,"top":496},{"left":32,"top":464},{"left":16,"top":480}];
    //Koordynaty specjlanych skrzyzowan na ktorych duchy nie moga isc do gory, gdy nadchodza z lewej albo prawej,
    //TO SA ZOLTE KAFELKI
    var specialCrossRoadsArray = [{"left":192,"top":416},{"left":240,"top":416},{"left":192,"top":224},{"left":240,"top":224}];

    //To sa koordynaty kafelek na ktorych PACMAN i duchy sa przenoszone na przeciwlegla strone planszy
    var teleportTilesArray = [{"left":0,"top":272},{"left":432,"top":272}];

    // Uchwyty do elementow HTML kontener( canvas) i wrapper ktory bedzie centrowany
    var container = document.querySelector("#container");
    var wrapper = document.querySelector("#wrapper");

    //Dlugosc boku kafelki
    var tileSide = 16;

    // Obiekt inicjujacy gre
    function GameInit(){

        //Przypisanie kontekstu tej przestrzeni nazw tj. this z tego poziomu do zmiennej
        var selfGame = this;

        //Przypiasnie długości i szerokosci kontenera do zmiennych
        var containerWidth = container.clientWidth;
        var containerHeight = container.clientHeight;

        //Koordynaty polozenia kontenera na stronie
        var containerPosition= {
            "topLeft":{"left":container.offsetLeft, "top": container.offsetTop},
            "topRight":{"left":container.offsetLeft+containerWidth, "top": container.offsetTop},
            "bottomRight":{"left":container.offsetLeft+containerWidth, "top": container.offsetTop+containerHeight},
            "bottomLeft": {"left":container.offsetLeft, "top": container.offsetTop+containerHeight}
        };
        // Wyliczenie ile rzedow i kolum kafalek znajdzie sie na planszy
        var tilesWidth = containerWidth/tileSide;
        var tilesHeight = containerHeight/tileSide;

        ///Tworzenie tablicy z polozeniami kazdej plytki
        var tilesArray = [];

        // to jest moteoda pomocnicza ktora rysuje cala siatke na planszy za pomoca rysowania kwadratow w canvas
        selfGame.drawRectangle = function(){
            var ctx = container.getContext('2d');// zlapanie kontektu canvasa , tak trzeba zrobic
            var posX = 0;
            var posY = 0 ;

            for (var i = 0; i < tilesHeight; i++) {//ilosc kolum
                for (var j = 0; j <tilesWidth; j++) {//ilosc rzedow
                    tilesArray.push({"posX":posX,"posY":posY});// wstawinie koordynatu narysowanej kafelki do tablicy, a moze sie przyda
                    //rysowanie
                    ctx.rect(posX, posY, tileSide, tileSide);
                    ctx.stroke();
                    //przeduniecie w prawo o długosc kafelka
                    posX+=tileSide;
                }
                //zerowanie pozycji po rysysowaniu calego rzedu
                posX=0;
                // przesuwanie w doł obszaru rysoania po wyrysowaniu caleo rzedu
                posY+=tileSide;
            }
        };
        //Ta metoda jest jedynie metoda pomocnicza ktora zaznacza kolorami odpowiednie kafelki. Bierze tablice pathTilesArray i koloruje kafelki z koordynatami
        // z tej tablicy na czerwono, crossRoadsTilesArray na zielono, specialCrossRoadsArray na zolto, teleportTilesArray na kolor maroon
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
        // Przwym klikiem zaznaczamy kafelki o długosci tileSide i tym samym wrzucamy ja do tablicy. Tablicę nalezy najpierw zadeklarowac.
        // Z kazdym kolejnym klikiem ta tablica bedzie uzupelniana kolejnymi koordynatami (podzielnymi przez długosc kafelki).
        // Po skonczeniu zaznaczania kafalek nalezy kliknac prawym przyciskiem myszki i caly obiekt zostanie wyswietlony w konsoli przegladarki.
        // Stamtad nalezy skopiowac dane i wklejic je do zadeklarowanej tablicy.

        // przykladaowa tablica na uzytek zaznaczania koordynatow
        var przykladowaTablica =[];

        selfGame.helperCross = function(){
            var ctx = container.getContext('2d');
            //zanaczanie na lewy klik myszki
            container.addEventListener('click', function(e){
                //wyliczanie koordynatow na siatce podzielnych prze dlugosc kafelka
                var posX = e.offsetX-e.offsetX%tileSide;
                var posY = e.offsetY-e.offsetY%tileSide;

                //deklaracja dowolnego koloru zaznaczania i kolorowanie zaznaczenia
                ctx.fillStyle="brown";
                ctx.fillRect(posX, posY, tileSide, tileSide);
                przykladowaTablica.push({"left":posX, "top":posY});/// tutaj nalezy podac przykladowa tablice do ktorej wstawiane sa koordynaty
            }, false);

            //wyswietlanie koordynatow z uzupelnionej tablicy w konsoli
            container.addEventListener('contextmenu', function(){
                console.log(JSON.stringify(przykladowaTablica, null, 0));
            }, false);
        };


    }
    //pozycja startowa pacmana
    var startingPacmanPosition = {"left":216,"top":416};
    //funkcja ustawiajaca pacmana na pozycji startowej
    function setPosition(element, stylesObject){
        for (var variable in stylesObject) {
            if (stylesObject.hasOwnProperty(variable)) {
                element.style[variable] = stylesObject[variable]+"px";
            }
        }
    }
    function Pacman(){

        var selfPac = this;
        //tworzenie elementu HTML PACMANA
        var pacmanElement = document.createElement('SPAN');

        // Tworzenie PACMANA i wstawianie go do wrappera HTML, ktory nie jest canvasem. Nie da sie wstawic elementu to canvasa
        selfPac.createPacman = function(){
            pacmanElement.id="pacman";
            wrapper.insertBefore(pacmanElement, wrapper.children[0]);
            setPosition(pacmanElement, startingPacmanPosition);//wywolanie funkcji ustawiajacej pacmana na pozycji startowej
        };
        //flaga pomocnicza od ktorej wartosci zalezy rodzaj sprite'a pacmana
        var spriteChangeFlag = true;

        //metoda ktora zmienia sprite pacmana w zaleznosci od jego kierunku i wartosc flagi
        selfPac.spriteChange = function(){
            if(spriteChangeFlag&&pacmanMovementDirection.left){
                pacmanElement.style.width = "23px";
                pacmanElement.style.backgroundPosition ="-45px 0";
            }else if (!spriteChangeFlag&&pacmanMovementDirection.left) {
                pacmanElement.style.width = "18px";
                pacmanElement.style.backgroundPosition ="0 0";
            }else if (spriteChangeFlag&&pacmanMovementDirection.right) {
                pacmanElement.style.width = "21px";
                pacmanElement.style.backgroundPosition ="-91px 0";
            }else if (!spriteChangeFlag&&pacmanMovementDirection.right) {
                pacmanElement.style.width = "21px";
                pacmanElement.style.backgroundPosition ="-140px 0";
            }else if (spriteChangeFlag&&pacmanMovementDirection.top) {
                pacmanElement.style.width = "22px";
                pacmanElement.style.backgroundPosition ="-20px 0";
            }else if (!spriteChangeFlag&&pacmanMovementDirection.top) {
                pacmanElement.style.width = "21px";
                pacmanElement.style.backgroundPosition ="-69px 0";
            }else if (spriteChangeFlag&&pacmanMovementDirection.bottom){
                pacmanElement.style.width = "22px";
                pacmanElement.style.backgroundPosition ="-117px 0";
            }else if (!spriteChangeFlag&&pacmanMovementDirection.bottom){
                pacmanElement.style.width = "22px";
                pacmanElement.style.backgroundPosition ="-163px 0";
            }
            //zmiana wartosci flagi tak zeby przy nastepnym wywolaniu zostal zastosowany inny sprite
            spriteChangeFlag = !spriteChangeFlag;
        };

        //metoda ruchu pacmana
        selfPac.movement = function(e){
            //wywolanie metody zmiany sprite'a pacmana
            selfPac.spriteChange();
            switch(e.keyCode){
                case 37://kod klawisza strzalka w lewo
                    //parsowanie atrybutow Pacmana
                    var currentL = parseInt(pacmanElement.style.left, 10);
                    var currentT = parseInt(pacmanElement.style.top, 10);
                    currentL--;//odejmowanie 1px od wartosci left Pacmana
                    var currentAvailableTail =currentL-currentL%tileSide;//wyliczanie koordynata płyti względem kierunku poruszania sie pacmana
                    var flag = true;// flaga uzywana do sprawdzenia czy pacman udezyl w sciane,

                    //to jest ograniczenie ruchu pacmana wzgledem wyznaczonej sciezki

                    for (var i = 0; i < pathTilesArray.length; i++) {//iteracja przez elementy tablicy
                        if(pathTilesArray[i].left==currentAvailableTail&&pathTilesArray[i].top==currentT){//sprawdanie
                            pacmanElement.style.left =--currentL+'px';
                            flag = false; // jezeli pacman nie udezyl w sciane to idz dalej
                            break;
                        }

                    }
                    //obsluga kafelek teleportu. Jezeli znajduje sie na jednej z nich to zmien jego polozenie na druga ka
                    if(teleportTilesArray[0].left == parseInt(pacmanElement.style.left, 10)&&teleportTilesArray[0].top == parseInt(pacmanElement.style.top, 10)){
                        pacmanElement.style.left = teleportTilesArray[1].left + "px";
                    }
                    // jezeli pacman uderzyl w sciane to zatrzymaj jego ruch
                    if(flag){
                        clearInterval(interval1);// jezeli pacman udezyl w sciane, tzn w jego kierunku pouszania sie nie znajduje sie plytka w tablicy pathTilesArray
                    }
                    return flag;// zwraca wartosc flagi
                case 39:
                    var currentL2 = parseInt(pacmanElement.style.left, 10);
                    var currentT2 = parseInt(pacmanElement.style.top, 10);
                    currentL2++;
                    var currentAvailableTail2 =currentL2-currentL2%tileSide;
                    //to jest ograniczenie ruchu pacmana wzgledem wyznaczonej sciezki
                    var flag2 = true;
                    for (var j = 0; j < pathTilesArray.length; j++) {
                        if(pathTilesArray[j].left==currentAvailableTail2+tileSide&&pathTilesArray[j].top==currentT2){
                            currentL2++;
                            pacmanElement.style.left =currentL2+'px';
                            flag2 = false;
                        }
                    }
                    if(teleportTilesArray[1].left == parseInt(pacmanElement.style.left, 10)&&teleportTilesArray[1].top == parseInt(pacmanElement.style.top, 10)){
                        pacmanElement.style.left = teleportTilesArray[0].left + "px";
                    }
                    if(flag2){
                        clearInterval(interval1);
                    }
                    return flag;
                case 40:
                    var currentL3 = parseInt(pacmanElement.style.left, 10);
                    var currentT3 = parseInt(pacmanElement.style.top, 10);
                    currentT3++;
                    var currentAvailableTail3 =currentT3-currentT3%tileSide;
                    var flag3 = true;
                    //to jest ograniczenie ruchu pacmana wzgledem wyznaczonej sciezki
                    for (var k = 0; k < pathTilesArray.length; k++) {
                            if(pathTilesArray[k].top==currentAvailableTail3+tileSide&&pathTilesArray[k].left==currentL3){
                                currentT3++;
                                pacmanElement.style.top =currentT3+'px';
                                flag3 = false;
                            }
                    }
                    if(flag3){
                        clearInterval(interval1);
                    }
                    return flag;
                case 38:
                    var currentT4 = parseInt(pacmanElement.style.top, 10);
                    var currentL4 = parseInt(pacmanElement.style.left, 10);
                    currentT4--;
                    var currentAvailableTail4 =currentT4-currentT4%tileSide;
                    var flag4 = true;
                    //to jest ograniczenie ruchu pacmana wzgledem wyznaczonej sciezki
                    for (var l = 0; l < pathTilesArray.length; l++) {
                            if(pathTilesArray[l].top==currentAvailableTail4&&pathTilesArray[l].left==currentL4){
                                currentT4--;
                                pacmanElement.style.top =currentT4+'px';
                                flag4 = false;
                            }
                    }

                    if(flag4){
                        clearInterval(interval1);
                    }
                    return flag;
            }
        };//selfPac.movement end


        //tablica asocjacyjna z aktualnym kierunkiem ruchu Pacmana.
        var pacmanMovementDirection = {"left":false, "right":false, "top":false, "bottom":false};

        //deklaracja zmiennej do ktorej zostanie przypisany interwal, zmienna deklarowana na zewnatrz poniewaz bedzie uzywana w wielu miejscach
        var interval1;
        //metoda ktora zwraca aktualny kierunek ruchu Pacmana i ustawia w tablicy asocjacyjnej pacmanMovementDirection
        selfPac.setMovementDirection = function(direction){
            for (var variable in pacmanMovementDirection) {
                if (pacmanMovementDirection.hasOwnProperty(variable)) {
                    if(variable == direction){
                        pacmanMovementDirection[variable] = true;
                    }else {
                        pacmanMovementDirection[variable] = false;
                    }
                }
            }
        };
        var count = 0;
        ///dodawanie event listenerow do klawiszy
        window.addEventListener('keydown', function movePacman(e){
            // wywoluwanie funkcji ruchu pacmana za pomoca set interval, jezeli nie zostala jeszcze wczescniej wywolana,
            if(!interval1){
                //ustawianie kierunku ruchu pacmana na pocztku gry
                if(e.keyCode==37){
                    selfPac.setMovementDirection("left");
                }else if (e.keyCode == 39) {
                    selfPac.setMovementDirection("right");
                }
                interval1 = setInterval(function(){
                    selfPac.movement(e);},configObj.pacmanSpeed);

                }
                //sprawdzenie czy pacman podczas ruchu gdy nacisniety jest klawisz ma gdzie skrecic
                // czy ma dostepna plytke
                var currentT4 = parseInt(pacmanElement.style.top, 10);
                var currentL4 = parseInt(pacmanElement.style.left, 10);
                switch (e.keyCode) {

                    // sprawdzanie ponownie kodow klawiszy naciskanych
                    case 37:
                        var currentLCheck = currentL4-tileSide;
                        //tem warunek zapobiega kolejnemu wywołaniu funkcji jeżel pacman juz idzie w tym kierunku
                        if(!pacmanMovementDirection.left){
                            if(pacmanMovementDirection.right){
                                clearInterval(interval1);
                                interval1 = setInterval(function(){
                                    selfPac.movement(e);},configObj.pacmanSpeed);
                                selfPac.setMovementDirection("left");
                                return;
                            }

                            for (var l = 0, len = possibleTurnsTilesArray.length; l < len; l++) {
                                if(possibleTurnsTilesArray[l].top!=currentT4){
                                    continue;
                                }
                                if(possibleTurnsTilesArray[l].left==currentLCheck&&possibleTurnsTilesArray[l].top==currentT4){
                                    //wyczyszczenie interwalu przed ponownym jego dodanie, zapobiega przyspieszaniu pacmana gdy gracz nasinie klawisz strzalki
                                    // w kierunku w ktorym juz porusza sie pacman
                                    clearInterval(interval1);

                                    //wywolanie funcji ruchu pacmana w setInterval z szybbkoscia poruszania sie pacmana, ktora przekazana jest w obiekcie konfiguracyjnym,
                                    // przt wywolaniu funkcji
                                    interval1 = setInterval(function(){
                                        selfPac.movement(e);},configObj.pacmanSpeed)
                                        selfPac.setMovementDirection("left");
                                        return;
                                }
                            }
                        }
                        break;
                    case 39:
                        var currentLCheck2 = currentL4+tileSide;
                        if(!pacmanMovementDirection.right){
                            if(pacmanMovementDirection.left){
                                selfPac.setMovementDirection("right");
                                clearInterval(interval1);
                                interval1 = setInterval(function(){
                                    selfPac.movement(e);},configObj.pacmanSpeed);
                                return;
                            }

                            for (var l = 0,len = possibleTurnsTilesArray.length; l < len; l++) {
                                if(possibleTurnsTilesArray[l].top!=currentT4){
                                    continue;
                                }
                                if(possibleTurnsTilesArray[l].left==currentLCheck2&&possibleTurnsTilesArray[l].top==currentT4){
                                    clearInterval(interval1);
                                    interval1 = setInterval(function(){
                                        selfPac.movement(e);},configObj.pacmanSpeed)
                                        selfPac.setMovementDirection("right");
                                        return;
                                }
                            }
                        }
                        break;
                    case 40:
                        var currentLCheck3 = currentT4+tileSide;
                        if(!pacmanMovementDirection.bottom){
                            if(pacmanMovementDirection.top){
                                clearInterval(interval1);
                                interval1 = setInterval(function(){
                                    selfPac.movement(e);},configObj.pacmanSpeed);
                                    selfPac.setMovementDirection("bottom");
                                return;
                            }
                            for (var l = 0, len = possibleTurnsTilesArray.length; l < len; l++) {
                                if(possibleTurnsTilesArray[l].top!=currentLCheck3){
                                    continue;
                                }

                                if(possibleTurnsTilesArray[l].left==currentL4&&possibleTurnsTilesArray[l].top==currentLCheck3){
                                    clearInterval(interval1);
                                    interval1 = setInterval(function(){
                                        selfPac.movement(e);},configObj.pacmanSpeed)
                                        selfPac.setMovementDirection("bottom");
                                        return;
                                }
                            }
                        }
                        break;
                    case 38:
                        var currentLCheck4 = currentT4-tileSide;
                        if(!pacmanMovementDirection.top){
                            if(pacmanMovementDirection.bottom){
                                selfPac.setMovementDirection("top");
                                clearInterval(interval1);
                                interval1 = setInterval(function(){
                                    selfPac.movement(e);},configObj.pacmanSpeed);
                                return;

                            }
                            for (var l = 0, len = possibleTurnsTilesArray.length; l < len; l++) {
                                if(possibleTurnsTilesArray[l].top!=currentLCheck4){
                                    continue;
                                }
                                if(possibleTurnsTilesArray[l].left==currentL4&&possibleTurnsTilesArray[l].top==currentLCheck4){
                                    clearInterval(interval1);
                                    interval1 = setInterval(function(){
                                        selfPac.movement(e);},configObj.pacmanSpeed)
                                        selfPac.setMovementDirection("top");
                                        return;
                                }
                            }
                        }

                }
        }, false);


        //wywolanie metody tworzacej elementu HTML pacmana przy tworzeniu instacji obiektu Pacman
        selfPac.createPacman();

    }

    //Wrzucanie to metody init prototypu obiektu GameInit metod ktore sa odpowiedzialne za uruchomienie gry i wyrysowanie sciezki
     GameInit.prototype.init = function(){
         //metody rysowania
         this.drawRectangle();//siatka
         this.drawPath();//dostapna sciezka poruszania sie

         //tworzeni instacji pacmana
         var pac1 = new Pacman();

        //  this.helperCross();//metoda pomocnicza do zaznaczania kafelek i wrzucaniu ich do tablicy
     };
     //towrzenie instancji gry
     var game1 = new GameInit();
     //wywolanie metody inicjujacej  init
     game1.init();

})({"pacmanSpeed":40});
