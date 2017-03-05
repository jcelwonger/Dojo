var students = [{
        name: 'Bogdan',
        iq: 101
    },
    {
        name: 'Jason',
        iq: 120
    }
];

function projectedIQ(students) {
    for (var student in students) {
        var iqPoint = .01
        for (var i = 1; i < 98; i++) {
            students[student].iq += iqPoint;
            iqPoint += .01;
        }
        console.log(students[student].name + "'s IQ is now " + students[student].iq);
    }

}
projectedIQ(students);
