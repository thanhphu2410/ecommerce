$(".increase").on("click", function() {
    let quantity = parseInt($(this).siblings(".quantityValue").val());
    let max_qty = parseInt($(this).siblings("#max_qty").val());
    if (quantity + 1 <= max_qty) {
        $(this).siblings(".quantityValue").val(quantity + 1);
        var price = (quantity + 1) * parseFloat($(this).parents("tr").find("#price_after_discount").val());
        $(this).parents("tr")
            .children(".cart__price")
            .text(price.toLocaleString('en', {style : 'currency', currency : 'USD'}));
    }
});

$(".decrease").on("click", function() {
    let quantity = parseInt($(this).siblings(".quantityValue").val());
    if (quantity - 1 > 0) {
        $(this).siblings(".quantityValue").val(quantity - 1);
        var price = (quantity - 1) * parseFloat($(this).parents("tr").find("#price_after_discount").val());
        $(this).parents("tr")
            .children(".cart__price")
            .text(price.toLocaleString('en', {style : 'currency', currency : 'USD'}));
    }
});

$(".quantityValue").on("keyup", function() {
    let max_qty = parseInt($(this).siblings("#max_qty").val());
    let qty = parseInt($(this).val());
    $("#updateBtn").removeAttr("disabled");
    if (isNaN($(this).val()) || parseInt($(this).val()) > max_qty || parseInt($(this).val()) < 0) {
        $(this).parents("tr")
            .children(".cart__price")
            .text("NaN");
        $("#updateBtn").attr("disabled", "disabled");
    }else{
        var price = qty * parseFloat($(this).parents("tr").find("#price_after_discount").val());
        $(this).parents("tr")
            .children(".cart__price")
            .text(price.toLocaleString('en', {style : 'currency', currency : 'USD'}));
    }
});

$(".deleteBtn").on("click", function() {
    var t = $(this);
    var cart_amount = parseInt($("#cart_amount").text()) - parseInt(t.parents("tr").find(".quantityValue").val());
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
        }
    });
    $.ajax({
        url: "/cart/" + $(this).parents("tr").find("#product_id").val() + "?index=" + $(this).parents("tr").find("#indexValue").val(),
        type: "delete",
        dataType: "JSON",
        success: function() {
            t.parents("tr").remove();
            $("#cart_amount").text(cart_amount);
            if (cart_amount == 0) {
                $("#updateBtn").attr("disabled", "disabled");
            }
            $('#liveToastSuccess').show();
        }
    });
});