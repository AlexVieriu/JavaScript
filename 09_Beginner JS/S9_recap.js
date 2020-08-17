bmiCalculator(65, 1.8)

function bmiCalculator(weight, height){
    var bmi =  parseInt(weight/Math.pow(height,2));
    return bmi;    
}


