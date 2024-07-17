function calculateSum() {
    const inputberatbadan = parseFloat(document.getElementById('inputberatbadan').value);
    const inputtinggibadan = parseFloat(document.getElementById('inputtinggibadan').value);

    if (!isNaN(inputberatbadan) && !isNaN(inputtinggibadan)) {
        const sum = (inputberatbadan / (inputtinggibadan*inputtinggibadan));

    document.getElementById('Result').textContent = '${sum}';

        let Message; 
        if ( onclick button == bmi < 18.5) {
            bmi = "Anda Memiliki Berat Badan Kurang";
        } else if (bmiValue >= 18.5 && bmi <= 24.9) {
            bmi = "Anda Memiliki Berat Badan Normal";
        } else if (bmiValue >= 25 && bmi <= 29.9) {
            bmi = "Anda Memiliki Berat Badan Berlebih";
        } else {
            bmi = "Anda Memiliki Berat Badan Obesitas";
        }

        document.getElementById('bmiValue').textContent = bmi;
    } else {
        alert("Masukkan nilai yang valid untuk berat badan dan tinggi badan.");
    }
}