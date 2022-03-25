

var randomPick = (n, min, max) => {
    var numbers = [];
    var range = max - min;
    
    for(i = 0; numbers.length <= n - 1; i++) {
        var random = Math.floor(Math.random() * range) + min;
        
            if(!numbers.includes(random)){
                numbers.push(random);
            }

    }
    return numbers;  
  }

  console.log(randomPick(10, 10, 100));

  

  