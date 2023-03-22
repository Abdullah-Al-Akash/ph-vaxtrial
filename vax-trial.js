function vaxTrail(arr) {
        let age20To30;
        let age31To40;
        let age41To50;
        let highTempThan100;
        // Age 20 to 30:
        age20To30 = arr.filter(a => a.age >= 20 && a.age <= 30 && a.temperature < 100);

        // Age 31 to 40:
        age31To40 = arr.filter(a => a.age >= 31 && a.age <= 40 && a.temperature < 100);

        // Age 41 to 50:
        age41To50 = arr.filter(a => a.age >= 41 && a.age <= 50 && a.temperature < 100);

        // Any People But Temp Higher Than 100:
        highTempThan100 = arr.filter(a => a.temperature >= 100);
        return {
                A: age20To30,
                B: age31To40,
                C: age41To50,
                D: highTempThan100
        }
}

const arr = [
        { name: 'Biplap', age: 22, temperature: 98 },
        { name: 'sunil', age: 21, temperature: 98 },
        { name: 'Kabir', age: 36, temperature: 99 },
        { name: 'Rahul', age: 37, temperature: 99 },
        { name: 'Paul', age: 42, temperature: 98 },
        { name: 'Kat', age: 41, temperature: 98 },
        { name: 'Nayem', age: 50, temperature: 100 },
        { name: 'Sabnaj', age: 51, temperature: 101 }
];

console.log(vaxTrail(arr));