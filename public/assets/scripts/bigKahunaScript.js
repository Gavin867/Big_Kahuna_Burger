$(function () {
    $("#createBurger").on("click", function () {
        const newBurger = $("#newBurger").val().trim();
        
        console.log(newBurger);
        
        const body = {
            hamburger_name: newBurger,
            hamburger_devoured: 0
        }

        if (newBurger === "") {
            alert("Hamburgers must have a valid name");
            return;
        }
        $.ajax({
            url: "/api/hamburgers",
            method: "POST",
            data: body
        }).then(function (result) {
            location.reload();
        });
    });
});