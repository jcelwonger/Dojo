 var students = [{
         first_name: 'Michael',
         last_name: 'Jordan'
     },
     {
         first_name: 'John',
         last_name: 'Rosales'
     },
     {
         first_name: 'Mark',
         last_name: 'Guillen'
     },
     {
         first_name: 'KB',
         last_name: 'Tonel'
     }
 ];
 for (var student in students) {
     console.log(students[student].first_name + ' ' + students[student].last_name)
 }
 var users = {
     'Students': [{
             first_name: 'Michael',
             last_name: 'Jordan'
         },
         {
             first_name: 'John',
             last_name: 'Rosales'
         },
         {
             first_name: 'Mark',
             last_name: 'Guillen'
         },
         {
             first_name: 'KB',
             last_name: 'Tonel'
         }
     ],
     'Instructors': [{
             first_name: 'Michael',
             last_name: 'Choi'
         },
         {
             first_name: 'Martin',
             last_name: 'Puryear'
         }
     ]
 }
 var keys = Object.keys(users);
 for (var i = 0; i < keys.length; i++) {
     var user = users[keys[i]];
     console.log(keys[i]);
     for (var x = 0; x < user.length; x++) {
         var position = x + 1;
         var firstName = user[x].first_name;
         var lastName = user[x].last_name;
         var nameLength = (firstName.length + lastName.length);
         console.log(position + ' - ' + firstName + ' ' + lastName + ' - ' + nameLength);
     }
 }
