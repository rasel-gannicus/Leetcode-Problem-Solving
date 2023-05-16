

// 25

function dummy (numb){
    if(numb == 1){
        return 1 ; 
    }
    let leftPoint = 2 ;
    let rightPoint = numb/2 ; 
    while(leftPoint <= rightPoint){
        let mid = Math.floor(leftPoint + ((rightPoint - leftPoint) / 2));
        if((mid * mid ) == numb){
            return true;
        }else if((mid * mid) > numb){
            rightPoint = mid - 1;
        }else if((mid * mid) < numb){
            leftPoint = mid + 1;
        }
    }
    return false ; 
}

console.log(dummy(2000105819))