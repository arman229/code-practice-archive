#! /usr/bin/env node
// @ts-ignore
import inquirer from 'inquirer';
import showBanner from "node-banner";
import { inquirer_question } from "./data/questionbank.js";
import { courses_db, students_db } from "./data/Database.js";
import chalk from "chalk";
async function studentMenu() {
    const studentMenuResp = await inquirer.prompt(inquirer_question.studentMenu);
    const students = students_db.map((std) => std.name + "(" + std.rollNo + ")");
    const courses = courses_db.map((course) => course.name);
    switch (studentMenuResp.studentMenuItem) {
        case 'Add new student':
            const finalCourseQuestionAddStu = { ...inquirer_question.addStudentQuestion[2], choices: courses };
            const addStudentResp = await inquirer.prompt([inquirer_question.addStudentQuestion[0], inquirer_question.addStudentQuestion[1], finalCourseQuestionAddStu]);
            const course = courses_db.find(cor => cor.name == addStudentResp.link_Course_Name);
            const new_student = {
                name: addStudentResp.student_Name,
                rollNo: addStudentResp.Roll_No,
                courseId: course.id,
            };
            students_db.push(new_student);
            console.log(chalk.green(`Successfully registered ${addStudentResp.student_Name} with Roll No ${addStudentResp.Roll_No} in the course ${addStudentResp.link_Course_Name}`));
            await studentMenu();
            break;
        case 'Edit student':
            var editMenu = { ...inquirer_question.studentEditMenu[0], choices: students };
            const ans = await inquirer.prompt([editMenu]);
            const selected_student = students_db.find(stu => stu.name + "(" + stu.rollNo + ")" === ans.student_edit);
            const finalCourseQuestion = { ...inquirer_question.sixthquestion[1], choices: courses };
            const resp = await inquirer.prompt([inquirer_question.sixthquestion[0], finalCourseQuestion]);
            const studentNewCourse = courses_db.find(course => course.name === resp.new_link_Course_Name);
            const finalStudent = { ...selected_student, name: resp.new_student_Name, courseId: studentNewCourse.id };
            const oldIndex = students_db.findIndex(stu => stu.rollNo === selected_student?.rollNo);
            students_db[oldIndex] = finalStudent;
            console.log(chalk.green('Student information has been updated.'));
            await studentMenu();
            break;
        case 'Delete student':
            var deleteMenu = { ...inquirer_question.seventhquestion[0], choices: students };
            const deleteAns = await inquirer.prompt([deleteMenu]);
            const selectedStudentIndex = students_db.findIndex(stu => stu.name + "(" + stu.rollNo + ")" === deleteAns.student_delete);
            const deletedstu = students_db.splice(selectedStudentIndex, 1);
            console.log(chalk.red(`${deletedstu[0].name} has been deleted as a student.`));
            await studentMenu();
            break;
        case 'View all students':
            console.log(chalk.blue('List of Students:'));
            const finalres = students_db.map(std => {
                const course = courses_db.find(cour => cour.id === std.courseId);
                return { ...std, courseName: course?.name };
            });
            console.table(finalres);
            await studentMenu();
            break;
        case 'Exit':
            console.log(chalk.green('Goodbye...'));
            break;
    }
}
async function mainMenu() {
    const resp = await inquirer.prompt(inquirer_question.firstquestion);
    if (resp.mainpage === 'Courses information') {
        console.table(courses_db);
        const mQAns = await inquirer.prompt(inquirer_question.mainMenuQuestion);
        await mainMenu();
    }
    else if (resp.mainpage === 'Students information') {
        await studentMenu();
    }
    else if (resp.mainpage === 'Exit') {
        console.log(chalk.green('Goodbye...'));
    }
}
await showBanner('LMS', 'Welcome to Learning Managment System', 'red', 'blue');
await mainMenu();
