$("#owl-example").owlCarousel({
    loop: true,
    items: 4,
    autoplayTimeout: 3000,
    smartSpeed: 500,
    autoHeight: false,
    autoplay: true
});

$("#review").on("keyup", function() {
    $("#reviewBtn").removeAttr("disabled");
    if (this.value == "") {
        $("#reviewBtn").attr("disabled", "disabled");
    }
});

function readURL(input) {
    $(".image-review").remove();
    for (let index = 0; index < input.files.length; index++) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $(".modal-body").append(
                '<img class="image-review mr-2" src="' +
                    e.target.result +
                    '" width="64" height="44" />'
            );
        };

        // convert to base64 string
        reader.readAsDataURL(input.files[index]);
    }
}

$("#imgInp").on("change", function() {
    readURL(this);
});

$(".size").on("click", function() {
    let qty = $("#size_qty" + $(this).val()).val();
    $("#quantity").val(0);
    $("#max_qty").val(qty);
    $("#in_stock").empty();
    $("#in_stock").append("<span>In stock:</span> " + qty);
});

$("#increase").on("click", function() {
    let quantity = parseInt($("#quantity").val());
    let max_qty = parseInt($("#max_qty").val());
    if (quantity + 1 <= max_qty) {
        $("#quantity").val(quantity + 1);
        if ($("#addToCartBtn").length) {
            $("#addToCartBtn").removeAttr("disabled");
        }
    }
});

$("#decrease").on("click", function() {
    let quantity = parseInt($("#quantity").val());
    if (quantity - 1 > 0) {
        $("#quantity").val(quantity - 1);
    }
});

$("#quantity").on("keyup", function() {
    let max_qty = parseInt($("#max_qty").val());
    let qty = parseInt($(this).val());
    $("#updateBtn").removeAttr("disabled");
    if (isNaN($("#quantity").val()) || qty > max_qty || qty == 0) {
        $("#updateBtn").attr("disabled", "disabled");
    }
});

$("#quantity").on("keyup", function() {
    let max_qty = parseInt($("#max_qty").val());
    let qty = parseInt($(this).val());
    $("#addToCartBtn").removeAttr("disabled");
    if (isNaN($("#quantity").val()) || qty > max_qty || qty == 0) {
        $("#addToCartBtn").attr("disabled", "disabled");
    }
});

$("#deleteBtn").on("click", function() {
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
        }
    });
    $.ajax({
        url: "cart/" + $("#product_id").val(),
        type: "delete",
        dataType: "JSON",
        success: function() {
            location.reload();
        }
    });
});

$("#province").on("change", function() {
    $.ajax({
        url: "/districts/" + $("#province").val(),
        type: "get",
        success: function(data) {
            $("#district ~ .nice-select .list").empty();
            $("#district").empty();
            data.forEach(function(item) {
                $("#district ~ .nice-select .list").append(
                    "<li data-value='" +
                        item.id +
                        "' class='option'>" +
                        item.name +
                        "</li>"
                );
                $("#district").append(
                    "<option value='" + item.id + "'>" + item.name + "</option>"
                );
            });
        }
    });
});

$("#district").on("change", function() {
    $.ajax({
        url: "/wards/" + $("#district").val(),
        type: "get",
        success: function(data) {
            $("#ward ~ .nice-select .list").empty();
            $("#ward").empty();
            data.forEach(function(item) {
                $("#ward ~ .nice-select .list").append(
                    '<li data-value="' +
                        item.id +
                        '" class="option">' +
                        item.name +
                        "</li>"
                );
                $("#ward").append(
                    "<option value='" + item.id + "'>" + item.name + "</option>"
                );
            });
        }
    });
});

$("#loadmore").on("click", function() {
    $("#next_blogs").val(parseInt($("#next_blogs").val()) + 3);
    $.ajax({
        url: "/load-more-blogs/" + $("#current_blogs").val() + "/" + $("#next_blogs").val(),
        type: "get",
        success: function(data) {
            if (data.length == 0) {
                $("#loadmore").css("display", "none");
            }
            $("#current_blogs").val(data.length + parseInt($("#current_blogs").val()));
            data.forEach(function(item) {
                $("#blog").append(
                    '<div class="col-lg-4 col-md-6 col-sm-6"><div class="blog__item">' +
                    '<div class="blog__item__pic set-bg" style="background-image: url(/' + item.image_path + ')"></div>' +
                    '<div class="blog__item__text"><span><i class="far fa-calendar"></i> ' + item.created_date +  '</span>' +
                    '<h5>' + item.title + '</h5>' +
                    '<a href="blog-details/' + item.id + '">Read More</a></div></div></div>'
                );
            });
        }
    });
});