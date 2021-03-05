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
        })
        
        .then(function (result) {
            location.reload();
        });
    });

    $(".eatBurger").on("click", function (event) {
        let id = $(this).data("id");

        console.log(id);

        const devouredHamburgers = {
            hamburger_devoured: 1
        };

        $.ajax({
            url: "/api/hamburgers/" + id,
            method: "PUT",
            data:devouredHamburgers
        })
        
        .then(function () {
            location.reload();
        });
    });

    $(".deleteBurger").on("click", function (event) {
        let id = $(this).data("id");

        console.log(id);

        $.ajax({
            url: "/api/hamburgers/" + id,
            method: "DELETE",
        })
        
        .then(function () {
            location.reload();
        });
    })
});