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

$("#owl-example").owlCarousel({
    loop: true,
    items: 4,
    autoplayTimeout: 3000,
    smartSpeed: 500,
    autoHeight: false,
    autoplay: true
});

$("#increase").on("click", function() {
    let quantity = parseInt($("#quantity").val());
    let max_quantity = parseInt($("#max_quantity").val());
    if (quantity + 1 <= max_quantity) {
        $("#quantity").val(quantity + 1);
    }
});

$("#decrease").on("click", function() {
    let quantity = parseInt($("#quantity").val());
    if (quantity - 1 > 0) {
        $("#quantity").val(quantity - 1);
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
