$(document).ready(function () {

    var add_win = function() {
        $.ajax({
            type: "POST",
            url: "/edit",
            data: {add_win: true},
            dataType: "json",
            success: function (response) {
                console.log(response);
            }
        });
    }

    var add_loose = function() {
        $.ajax({
            type: "POST",
            url: "/edit",
            data: {add_loose: true},
            dataType: "json",
            success: function (response) {
                console.log(response);
            }
        });
    }

    var remove_win = function() {
        $.ajax({
            type: "POST",
            url: "/edit",
            data: {remove_win: true},
            dataType: "json",
            success: function (response) {
                console.log(response);
            }
        });
    }

    var remove_loose = function() {
        $.ajax({
            type: "POST",
            url: "/edit",
            data: {remove_loose: true},
            dataType: "json",
            success: function (response) {
                console.log(response);
            }
        });
    }

    var reset = function() {
        $.ajax({
            type: "POST",
            url: "/edit",
            data: {reset: true},
            dataType: "json",
            success: function (response) {
                console.log(response);
            }
        });
    }

    $("#add_win").click(function (e) { 
        e.preventDefault();
        add_win();
    });

    $("#add_loose").click(function (e) { 
        e.preventDefault();
        add_loose();
    });

    $("#remove_win").click(function (e) { 
        e.preventDefault();
        remove_win();
    });

    $("#remove_loose").click(function (e) { 
        e.preventDefault();
        remove_loose();
    });

    $("#reset").click(function (e) { 
        e.preventDefault();
        reset();
    });

    $("body").keypress(function (e) {
        if (e.which == "38") add_win();
        if (e.which == "233") add_loose();
        if (e.which == "34") remove_win();
        if (e.which == "39") remove_loose();
        if (e.which == "40") reset();
    });

});