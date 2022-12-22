
//Creating function
function Equilateral(n){
    //Row creation 
    for (i=1;i<=n;i++){
    //Printing white spaces for the triangle
        for (j=0;j<n-i;j++){
            process.stdout.write(' ')
        }
    //Printing stars for the triangle
        for (k=0;k<i;k++){
            process.stdout.write('* ')
        }
        console.log()
    }
    }
    
    //Function call and passing no of rows as argument
    Equilateral(10)