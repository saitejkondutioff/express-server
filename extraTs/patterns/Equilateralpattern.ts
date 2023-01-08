
//Creating function
let str:string = ""
const equilateral = (n:number):void =>{
//Row creation 
for (let i=1;i<=n;i++){
//Printing white spaces for the triangle
    for (let j=0;j<n-i;j++){
        str += " ";
    }
//Printing stars for the triangle
    for (let k=0;k<i;k++){
        str += "* ";

    }
    str += "\n";
    }
    console.log(str)

}
;
 export default equilateral;

