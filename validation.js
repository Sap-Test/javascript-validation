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
                    required: "Please Enter your First Name"
                },
            grade:
                {
                    required: "Please enter the grade between 5-8",
                    min: "Please enter more than 4",
                    max: "Please enter less than 9",
                    digits: "Please enter number only"
                }

        };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {

            submitHandler: runMyProgram,
            rules: myRules,
            message: myMessages
        }
    );

    function runMyProgram(event) {
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.
        event.preventDefault();
        let firstName = $("input#firstName").val();

        let grade = parseInt($("input#grade").val());

        $("p#message").text(`You have registered ${firstName} for grade ${grade} camp.`)

    }

});