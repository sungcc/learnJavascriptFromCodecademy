const finalGrade = (int1, int2, int3) => {
    if ((int1 < 0 || int1 > 100) || (int2 < 0 || int2 > 100) || (int3 < 0 || int3 > 100)) {
        return 'You have entered an invalid grade.'
    }
    let average = (int1 + int2 + int3) / 3
    if (average < 60) {
        return 'F'
    }
    else if (average < 70) {
        return 'D'
    }
    else if (average < 80) {
        return 'C'
    }
    else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
}

console.log((finalGrade(100, 100, 101)));
console.log((finalGrade(80, 1, 50)));
console.log((finalGrade(100, 100, 101)));

console.log((finalGrade(99, 1, 80)));
console.log((finalGrade(70, 60, 99)));
