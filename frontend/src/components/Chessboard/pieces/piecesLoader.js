function initialBoardState(){

    const peices = [];

    for(let i = 0; i < 8; i++){
        
        peices.push({image: "assets/images/pawn_b.png",x: i,y: 6,});

    }
    for(let i = 0; i < 8; i++){
        
        peices.push({image: "assets/images/pawn_w.png",x: i,y: 1,});

    }

    for(let p = 0; p < 2; p++){

        const type = (p === 0) ? "b" : "w";

        const y = (p === 0) ? 7 : 0;

        peices.push({image: `assets/images/rook_${type}.png`,x: 0,y: y,});
        peices.push({image: `assets/images/rook_${type}.png`,x: 7,y: y,});

        peices.push({image: `assets/images/knight_${type}.png`,x: 1,y: y,});
        peices.push({image: `assets/images/knight_${type}.png`,x: 6,y: y,});

        peices.push({image: `assets/images/bishop_${type}.png`,x: 2,y: y,});
        peices.push({image: `assets/images/bishop_${type}.png`,x: 5,y: y,});

        peices.push({image: `assets/images/queen_${type}.png`,x: 3,y: y,});
        peices.push({image: `assets/images/king_${type}.png`,x: 4,y: y,});

    }

    return peices;

}

export default initialBoardState;