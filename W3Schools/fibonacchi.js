/* 
    1. প্রথমে ২টা ভ্যারিয়েবল নিতে হবে, ২টা ফিবোনাচ্চি নাম্বার এর মান ধরে রাখার জন্য 
    2. আরেকটা ভ্যারিয়েবল নিতে হবে, নতুন ফিবোনাচ্চি নাম্বার এর মান রাখার জন্য 
    3. তারপরে একটা ফর লুপ চালাতে হবে। 
    4. নাম্বারগুলা আপডেট করতে হবে। নতুন ফিবোনাচ্চি নাম্বার তো পাবোই। এটা পাওয়ার পর বাকী ২টা আপডেট করতে হবে। 
    5. ফিবোনাচ্চি নাম্বারগুলা প্রিন্ট করতে হবে। 
*/


let a = 0 ; 
let b = 1 ; 
let c ;

function with_loop(a,b,c){
    console.log(a);
    console.log(b);
    for (i=0; i<18; i++){
        c = a + b ;
        console.log(c);
        a = b ; 
        b = c ; 
    }
}
// with_loop(a,b,c) ;

let count = 0 ;

function with_recursion(a, b){

    if(count < 18){
        c = a + b ;
        console.log(c);
        a = b ;
        b = c ; 
        count ++ ;
        with_recursion(a, b) ;
    }else{
        return ;
    }
}

with_recursion(a, b) ; 