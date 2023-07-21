function arabToRoman(arabNum) {
    const translation = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    
        let result = ""
        for (let key in translation) {
            while (arabNum >= translation[key]) {
                result += key
                arabNum -= translation[key]
            }
        }
        return result;
        
}
alert(arabToRoman(prompt()));


function romain(str) { // easy
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }   

    let prev = 0
    let result = 0

    for(let i = str.length - 1; i >= 0; i--) {
        let curr = map[str[i]]

        if(curr < prev) {
            result -= curr
        } else {
            result += curr
        }

        prev = curr
    }

    return result
}

console.log(romain("CXI"));
