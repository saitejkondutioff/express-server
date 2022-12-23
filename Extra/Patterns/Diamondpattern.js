// Function creation
    function Diamond(n){
        // for upper triangle
        for (let i=1;i<=n;i++){
        // for spaces in the upper triangle
            for (let j=0;j<n-i;j++){
                process.stdout.write(' ')
            }
        // for star in the upper triangle
            for (let k=0;k<2*i-1;k++){
                process.stdout.write('*')
            }
            console.log()
        }
        // for lower triangle
        for (let i=1;i<n;i++){
        // for spaces in the lower triangle
            for (let j=0;j<i;j++){
                process.stdout.write(' ')
            }
        // for star in the lower triangle
            for (let k=0;k<2 * (n - i) - 1;k++){
                process.stdout.write('*')
            }
            console.log()
        
        }
        }
    
module.exports = Diamond
    