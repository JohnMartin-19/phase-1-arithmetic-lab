
// Write your code here
function multiply(num1,num2){
    total = num1*num2
    console.log(total)
}
multiply(31,2);

function generate(){
    let counter = 0;
    if (counter <= 0){
        counter++;
    }
   // newCount = counter.append();
    console.log(counter);
}
generate();

function mod(val1,val2){
    rem = val1 % val2;
    console.log(rem);
};
mod(12,8);

function max(){
    let mySet= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    let maxi = -1;
    console.log(maxi)
    for (i in mySet){
        if(i> maxi){
            maxi = i
           console.log(maxi) 
        };
    };
    console.log('Largest:', i)
};
max()