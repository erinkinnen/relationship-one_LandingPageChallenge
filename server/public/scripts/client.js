$(document).ready(function() {
    //array for clients as added, empties on refresh
    var clients = [];
    //creates newClient object on submit and pushes object to clients[]
    $("#addClient").on("click", function() {
        var newClient = {
            firstName: $("#first_name").val(),
            lastName: $("#last_name").val(),
            email: $("#email").val(),
            company: $("#company").val(),
            title: $("#title").val(),
            country: $("#country_id").val(),
            state: $("#state_id").val(),
            comments: $("#comments").val(),
        };
        clients.push(newClient);
        showNewClients(newClient);
        $("#form")[0].reset();
    });
    //displays to DOM
    function showNewClients(newClient) {
        $("#each").empty();
        for (var i = 0; i < clients.length; i++) {
            $("#each").append("<br> Name: " + clients[i].firstName + " " + clients[i].lastName +
                "<br> Email: " + clients[i].email +
                "<br> Company: " + clients[i].company +
                "<br> Title: " + clients[i].title +
                "<br> State: " + clients[i].state +
                "<br> Country: " + clients[i].country +
                "<br> Comments: " + clients[i].comments + "<br>" +
                "__________________________________ <br>");
        }
    }

}); // end doc ready
