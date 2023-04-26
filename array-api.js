// 1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(',');
    console.log(result);
}
// 2. make an array out of a string
{
    const fruits = 'apple, orange, kiwi, banana';
    const result = fruits.split(',',2)
    console.log(result);
}
// 3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
}
// 4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array);
}
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 29, false, 80),
    new Student('C', 29, true, 90),
    new Student('D', 29, false, 66),
    new Student('E', 29, true, 88),
]
// 5. find a student with the score 90
{
    const result = students.find((student, index, object) => student.score === 90);
    console.log(result);
}
// 6. make an array of enrolled students
{
    const result = students.filter(student => student.enrolled === true)
    console.log(result);
}
// 7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map(student => student.score)
    console.log(result);
}
// 8. check if there is a student with the score lower than 50
// result should be : true or false
{
    const result = students.some(student => student.score < 51)
    console.log(result);

    const result2 = !students.every(student => student.score >= 51)
    console.log(result2);
}
console.clear()
// 9. compute students' average score
{
    const result = students.reduce((preV, currV) => {
        console.log('---------');
        console.log(preV);
        console.log(currV);
        return preV + currV.score;
    },0);
    console.log(result / students.length);
}

// 10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students.map(student => student.score).join()
    console.log(result);
}

// Bonus! Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map(student => student.score).sort((a, b) => a - b).join()
    console.log(result);
}