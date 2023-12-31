export const inquirer_question = {
    firstquestion: [
        {
            name: 'mainpage',
            type: 'list',
            choices: ['Students information', 'Courses information', 'Exit'],
            message: 'Please select main menu',
        },
    ],
    mainMenuQuestion: [
        {
            name: 'go_back',
            type: 'list',
            choices: ['Go Back'],
            message: 'Select "Go Back" to return to the main menu',
        },
    ],
    studentMenu: [
        {
            name: 'studentMenuItem',
            type: 'list',
            choices: [
                'Add new student',
                'Edit student',
                'Delete student',
                'View all students',
                'Exit',
            ],
            message: 'Please select student menu',
        },
    ],
    addStudentQuestion: [
        {
            name: 'student_Name',
            type: 'string',
            message: "Please enter the student's Name",
        },
        {
            name: 'Roll_No',
            type: 'number',
            message: "Please enter the student's Roll No",
        },
        {
            name: 'link_Course_Name',
            type: 'list',
            choices: [],
            message: "Please select  course",
        },
    ],
    studentEditMenu: [
        {
            name: 'student_edit',
            type: 'list',
            message: 'Please select a student to edit',
        },
    ],
    sixthquestion: [
        {
            name: 'new_student_Name',
            type: 'string',
            message: "Please enter the updated student's Name",
        },
        {
            name: 'new_link_Course_Name',
            type: 'list',
            choices: [],
            message: "Please select the updated student's favorite course",
        },
    ],
    seventhquestion: [
        {
            name: 'student_delete',
            type: 'list',
            message: 'Please select a student to delete',
        },
    ],
};
