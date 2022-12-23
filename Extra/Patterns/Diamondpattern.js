// Function creation
function Diamondpattern(n){
    // for upper triangle
    for (var i=1;i<=n;i++){
    // for spaces in the upper triangle
        for (var j=0;j<n-i;j++){
            process.stdout.write(' ')
        }
    // for star in the upper triangle
        for (var k=0;k<2*i-1;k++){
            process.stdout.write('*')
        }
        console.log()
    }
    // for lower triangle
    for (var i=1;i<n;i++){
    // for spaces in the lower triangle
        for (var j=0;j<i;j++){
            process.stdout.write(' ')
        }
    // for star in the lower triangle
        for (var k=0;k<2 * (n - j) - 1;k++){
            process.stdout.write('*')
        }
        console.log()
    
    }
    }
    
    //Calling function by number of rows as argument
    Diamondpattern(10);
    