
let str:string = ""
const diamond = (n:number):void=> {
// for upper triangle
for (let i=1;i<=n;i++){
// for spaces in the upper triangle
    for (let j=0;j<n-i;j++){
        str += " ";
    }
// for star in the upper triangle
    for (let k=0;k<2*i-1;k++){
        str += "*";
    }
    str += "\n";
}
// for lower triangle
for (let i=1;i<n;i++){
// for spaces in the lower triangle
    for (let j=0;j<i;j++){
        str += " ";
    }
// for star in the lower triangle
    for (let k=0;k<2 * (n - i) - 1;k++){
        str += "*";
    }
    str += "\n";
} 
console.log(str)
};

export default diamond;
