/*
*Author : Tenison Osei-Owusu
*File :  Create a function that will return a
*        Boolean value indicating if two circles
*        defined by center coordinates and radius
*        are intersecting? // cirles A and B respectfully 
*/

var intersectingCirles = (aCenterCord, aRadius, bCenterCord, bRadius) => {
    let aCenterCordX = aCenterCord[0] > bCenterCord[0] ? aCenterCord[0] - aRadius : aCenterCord[0] + aRadius;
    let aCenterCordY = aCenterCord[1] > bCenterCord[1] ? aCenterCord[1] - aRadius : aCenterCord[1] + aRadius;
    let bCenterCordX = bCenterCord[0] > aCenterCord[0] ? bCenterCord[0] - bRadius : bCenterCord[0] + bRadius;
    let bCenterCordY = bCenterCord[1] > aCenterCord[1] ? bCenterCord[1] - bRadius : bCenterCord[1] + bRadius;

    //console.log(bCenterCordX);
    //if()
    
   
}

intersectingCirles([5,2],4,[-4,6],9);