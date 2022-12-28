
//Creating function
    const Equilateral = (n) => {
        //Row creation 
        for (let i=1;i<=n;i++){
        //Printing white spaces for the triangle
            for (let j=0;j<n-i;j++){
                process.stdout.write(' ')
            }
        //Printing stars for the triangle
            for (let k=0;k<i;k++){
                process.stdout.write('* ')
            }
            console.log()
        }
        }

//Exporting Equilateral function
module.exports = Equilateral 
    
    