$(document).ready(function () {
    // Object containing the validation rules
    let myRules =
        {
        firstName:
            {
                required: true
            },
        grade:
            {
                required: true,
                min: 5,
                max: 8,
                digits:true
            }

        };

    // Object containing the error messages
    let myMessages =
        {
            firstName:
                {
                    required: "Please Enter your Name"
                },
            grade:
                {
                    required: "Please enter the grade between 5-8",
                    min: "Please enter the grade between 5-8",
                    max: "Please enter the grade between 5-8",
                    digits: "Please enter number only"
                }

        };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: runMyProgram,
            rules: myRules,
            messages: myMessages
        }
    );


    function runMyProgram() {
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.

        let name = $("input#firstName").val();

        let campGrade = parseInt($("input#grade").val());

        $("p#message").text(`You have registered ${name} for grade ${campGrade} camp.`)

    }

});







