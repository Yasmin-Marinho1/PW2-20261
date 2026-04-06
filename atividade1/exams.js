class Exams {
    constructor(Weight, Answer) {
        this.weight = Weight;
        this.answer = Answer;
        this.exams = [];
        this.grades = [];
    }
    add(studentsAnswers) {
        let grade = 0
        this.exams.push(studentsAnswers);
        for (let i = 0; i < this.answer.length; i++) {
            if (this.exams[this.exams.length - 1][i] === this.answer[i]) {
                grade += this.weight[i]; 
            }
        }
        this.grades.push(grade);
        this.grades.sort((a, b) => a - b);
    }
    avg() {
        const avg = this.grades.reduce((addition, value) => addition + value, 0) / this.exams.length;
        return avg;
    }
    min(count) {
        return this.grades.slice(0, count);
    }
    max(count) {
        return this.grades.slice(this.grades.length - count, this.grades.length);
    }
    lt(limit) {
        return this.grades.filter((grade) => grade < limit);
    }
    gt(limit) {
        return this.grades.filter((grade) => grade > limit);
    }
}
// Testando
const pw2 = new Exams([2, 4, 4], ['a', 'd', 'b']);
pw2.add(['b', 'b', 'b']); // 4
pw2.add(['a', 'b', 'c']); // 2
pw2.add(['c', 'c' , 'c']); // 0
pw2.add(['b', 'b', 'b']); // 4
pw2.add(['c', 'c' , 'c']); // 0
pw2.add(['c', 'c' , 'c']); // 0
pw2.add(['a', 'b', 'c']); // 2
console.log(pw2.min(2)); // [0, 0]
console.log(pw2.max(4)); // [2, 2, 4, 4]
console.log(pw2.min(6)); // [0, 0, 2, 2, 4, 4]
console.log(pw2.max(2)); // [4, 4]
console.log(pw2.lt(2)); // [0, 0, 0]
console.log(pw2.gt(4)); // []
console.log(pw2.lt(6)); // [0, 0, 0, 2, 2, 4, 4]
console.log(pw2.gt(2)); // [4, 4]
console.log(pw2.avg()); // 1.7142857142857142
console.log(pw2.lt(1)); // [0, 0, 0]
console.log(pw2.gt(3)); // [4, 4]
console.log(pw2.lt(3)); // [0, 0, 0, 2, 2]