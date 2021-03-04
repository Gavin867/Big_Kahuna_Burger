$(function() {
    $(".devoured-state").on("click", function(e) {
        let id = $(this).data("hamburger_id");

        let newBurger = $(this).data("newburger");

        let burgerAte = {
            hamburger_devoured: newBurger
        };

        $.ajax("/api/hamburgers/" + id, {
            type: "PUT",
            data: burgerAte
        })
        .then(function() {
            location.reload();
        });
    });

    $(".create-form").on("submit", function(e) {

        e.preventDefault();

        let newBurger = {
            hamburger_name: $("#hamburger_name").val().trim(),
        };

        $.ajax("/api/hamburgers", {
            type: "POST",
            data: newBurger
        })
        .then(function() {
            location.reload();
        });
    });

});