$(".tab-image").on("mouseover", function(){
    var path = $(this).find("input").val();
    $("#main-image").attr("src", path);
    $(".tab-image").removeClass("active");
    $(this).addClass("active");
})

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

$("#increase").on("click", function() {
    let quantity = parseInt($("#quantity").val());
    let max_qty = parseInt($("#max_qty").val());
    if (quantity + 1 <= max_qty) {
        $("#quantity").val(quantity + 1);
        if (quantity + 1 > 0 && quantity + 1 <= max_qty) {
            $("#addToCartBtn").removeAttr("disabled");
        }
    }
});

$("#decrease").on("click", function() {
    let max_qty = parseInt($("#max_qty").val());
    let quantity = parseInt($("#quantity").val());
    if (quantity - 1 > 0) {
        $("#quantity").val(quantity - 1);
        if (quantity - 1 > 0 && quantity - 1 <= max_qty) {
            $("#addToCartBtn").removeAttr("disabled");
        }
    }
});

$(".size").on("click", function() {
    let qty = $("#size_qty" + $(this).val()).val();
    $("#quantity").val(0);
    $("#max_qty").val(qty);
    $("#in_stock").empty();
    $("#in_stock").append("<span>In stock:</span> " + qty);
    $.ajax({
        url: "/get-colors/" + $("#product_id").val() + "/" + $(this).val(),
        type: "get",
        dataType: "JSON",
        success: function(data) {
            $("#colorValue").val(data[0].color_id);
            $("#colorWrapper").empty();
            var colorsRender = '';
            var active = "";
            data.forEach(function(item, index) {
                active = index == 0 ? "active" : "";
                console.log(active);
                colorsRender += '<label class="color ' + active + '" style="background: ' + item.color.code + '" for="sp-1">'+
                '<input type="hidden" value="' + item.color_id+ '">'+
                '<i class="fas fa-check"></i>'+
                '</label>';
            });
            $("#colorWrapper").append(
                '<span>Color:</span>'+
                colorsRender
            );
        }
    });
});

$(document).on("click", ".color", function(){
    $(".color").removeClass("active");
    $(this).addClass("active");
    $("#colorValue").val($(this).find("input").val());
    var path = $("#attribute" + $(this).attr("id").replace('attribute_id', '')).val();
    $("#main-image").attr("src", path);
    console.log(path);
});

$("#quantity").on("keyup", function() {
    let max_qty = parseInt($("#max_qty").val());
    let qty = parseInt($(this).val());
    $("#addToCartBtn").removeAttr("disabled");
    if (isNaN($("#quantity").val()) || qty > max_qty || qty < 0) {
        $("#addToCartBtn").attr("disabled", "disabled");
    }
});