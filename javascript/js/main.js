// Types {{{

    // string
    var my_string = "test string";

    // number
    var my_number = 5;

    // boolean
    var my_boolean = false;

    // Special types

    // null
    var my_variable = null;

    // undefined
    my_variable = undefined; // You will rarely ever manually assign a variable to undefined

// }}}

// Concatenation (adding strings together) {{{

    my_string = "Part " + " A";
    my_other_string = my_string + ", Part B";
    my_other_string += " " + my_number;

// }}}

// Seeing the type of a variable {{{

    console.log(typeof nonexistent_variable);
    console.log(typeof my_other_string); // Try out console.log(typeof ...) with the other variables to see their types

// }}}

// Complex types {{{

    // objects
    var my_object = {
        name: "Shawn",
        age: 26
    };

    // arrays
    var my_array = [ 'a', 'b', 'c', 'd' ];
    my_array[2]; // the 3rd item of the array
    my_array.length; // Get the length property of the array

// }}}

// Conditions and Operators {{{

    // if( expression )
    // If the expression evaluates to true it will execute the code within the braces

    var first_number = 5;
    var second_number = 10;
//               operator
//  left operand     |    right operand
//          |        |      |
    if (first_number < second_number) {
        console.log("Less than");
    }

    // Operators: <, >, ==, ===, !=, >=, <=

    // You can use else and else if for when the condition fails
    var is_administrator = false;
    if (is_administrator) {
        console.log("Admin");
    } else if (first_number === 7) {
        console.log('Something');
    } else {
        console.log("None of the rest are true");
    }

    // === checks type as well as value, == only checks value
    console.log("0" == 0); // true - Javascript will turn "0" into a 0 within certain contexts
    console.log("0" === 0); // false - You almost always want to use ===, better safe than sorry

    // The ! operator negates an expression
    if (!is_administrator) {
        console.log("Not admin");
    }

    // Combining expressions 
    // And - &&
    // Or  - ||
    if (first_number < second_number && is_administrator) {
        // stuff
    }

    // Use parenthesis to be absolutely clear about your intent
    var has_permissions = true;
    if (first_number < second_number && (is_administrator || has_permissions)) {
        // stuff
    }

// }}}

// Loops {{{

    // For loop

    // for (initialize; continue condition; step)
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    my_array = [ 'a', 'b', 'c', 'd' ];
    for (i = 0; i < my_array.length; i++) {
        console.log(my_array[i]);
    }

// }}}

// Functions {{{

    // defined with a function statement
    function add(number_one, number_two)
    {
        return number_one + number_two;
    }

    console.log(add(1, 2));


    // Defined with a function expression
    var subtract = function (number_one, number_two)
    {
        return number_one - number_two;
    };

    console.log(subtract(2, 1));

    // Functions are a type of variable just like a number, they can be assigned to variables and can be passed around
    var processFile = function (filename, callback)
    {
        console.log(filename);
        callback(filename);
    };

    processFile('myFile', function (processed_file)
    {
        console.log('Finished processing file: ' + processed_file);
    });
// }}}

// vim: set fdm=marker fdl=0 :
