$("#owl-example").owlCarousel({
    loop: false,
    items: 4,
    autoplayTimeout: 3000,
    smartSpeed: 500,
    autoHeight: false,
    autoplay: false,
});

$("#tab_image").owlCarousel({
    loop: false,
    items: 4,
    autoplay: false,
});

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
            $("#colorWrapper").empty();
            var colorsRender = '';
            data.forEach(function(item) {
                colorsRender += '<label class="color" style="background: ' + item.color.code + '" for="sp-1">'+
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
});

$("#quantity").on("keyup", function() {
    let max_qty = parseInt($("#max_qty").val());
    let qty = parseInt($(this).val());
    $("#addToCartBtn").removeAttr("disabled");
    if (isNaN($("#quantity").val()) || qty > max_qty || qty < 0) {
        $("#addToCartBtn").attr("disabled", "disabled");
    }
});

$(".increase").on("click", function() {
    let quantity = parseInt($(this).siblings(".quantityValue").val());
    let max_qty = parseInt($(this).siblings("#max_qty").val());
    if (quantity + 1 <= max_qty) {
        $(this).siblings(".quantityValue").val(quantity + 1);
        var price = (quantity + 1) * parseFloat($(this).parents("tr").find("#price_after_discount").text());
        $(this).parents("tr")
            .children(".cart__price")
            .text(price.toLocaleString('vi', {style : 'currency', currency : 'VND'}));
    }
});

$(".decrease").on("click", function() {
    let quantity = parseInt($(this).siblings(".quantityValue").val());
    if (quantity - 1 > 0) {
        $(this).siblings(".quantityValue").val(quantity - 1);
        var price = (quantity - 1) * parseFloat($(this).parents("tr").find("#price_after_discount").text());
        $(this).parents("tr")
            .children(".cart__price")
            .text(price.toLocaleString('vi', {style : 'currency', currency : 'VND'}));
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
        var price = qty * parseFloat($(this).parents("tr").find("#price_after_discount").text());
        $(this).parents("tr")
            .children(".cart__price")
            .text(price.toLocaleString('vi', {style : 'currency', currency : 'VND'}));
    }
});

$(".deleteBtn").on("click", function() {
    var t = $(this);
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
        }
    });
    $.ajax({
        url: "/cart/" + $(this).parents("tr").find("#product_id").val(),
        type: "delete",
        dataType: "JSON",
        success: function() {
            t.parents("tr").remove();
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

$(".category").on("click", function(){
    $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active");
    var category_id = $(this).children("#category_id").val();
    var currentCategory = "category=" + $("#categorySelected").val();
    var splitCategory = $("#categorySelected").val().split(",");

    $("#categorySelected").val($("#categorySelected").val() + category_id + ',');
    if (splitCategory.indexOf(category_id) != -1) {
        splitCategory.splice(splitCategory.indexOf(category_id), 1);
        $("#categorySelected").val(splitCategory);
    }

    $("#filterUrl").val(function(i, v) {return v.replace(currentCategory, "category=" + $("#categorySelected").val());}).val();
    ajaxFilter();
})

$(".sub-category").on("click", function(){
    $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active");
    var sub_category_id = $(this).children("#sub_category_id").val();
    var currentSubCategory = "subcategory=" + $("#subCategorySelected").val();
    var splitSubCategory = $("#subCategorySelected").val().split(",");

    $("#subCategorySelected").val($("#subCategorySelected").val() + sub_category_id + ',');
    if (splitSubCategory.indexOf(sub_category_id) != -1) {
        splitSubCategory.splice(splitSubCategory.indexOf(sub_category_id), 1);
        $("#subCategorySelected").val(splitSubCategory);
    }

    $("#filterUrl").val(function(i, v) {return v.replace(currentSubCategory, "subcategory=" + $("#subCategorySelected").val());}).val();
    ajaxFilter();
})

$(".price").on("click", function(){
    $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active");
    var price = $(this).children("#price").val();
    var currentPrice = "price=" + $("#priceSelected").val();
    var splitPrice = $("#priceSelected").val().split(",");

    $("#priceSelected").val($("#priceSelected").val() + price + ',');
    if (splitPrice.indexOf(price) != -1) {
        splitPrice.splice(splitPrice.indexOf(price), 1);
        $("#priceSelected").val(splitPrice);
    }

    $("#filterUrl").val(function(i, v) {return v.replace(currentPrice, "price=" + $("#priceSelected").val());}).val();
    ajaxFilter();
})

$(".sizeFilter").on("click", function() {
    var parent = $(this).parent("label");
    parent.hasClass("active") ? parent.removeClass("active") : parent.addClass("active");
    var size_id = $(this).val();
    var currentSize = "size=" + $("#sizeSelected").val();
    var splitSize = $("#sizeSelected").val().split(",");

    $("#sizeSelected").val($("#sizeSelected").val() + size_id + ',');
    if (splitSize.indexOf(size_id) != -1) {
        splitSize.splice(splitSize.indexOf(size_id), 1);
        $("#sizeSelected").val(splitSize);
    }

    $("#filterUrl").val(function(i, v) {return v.replace(currentSize, "size=" + $("#sizeSelected").val());}).val();
    ajaxFilter();
})

$(".colorFilter").on("click", function() {
    var parent = $(this).parent("label");
    parent.hasClass("active") ? parent.removeClass("active") : parent.addClass("active");
    var color_id = $(this).val();
    var currentColor = "color=" + $("#colorSelected").val();
    var splitColor = $("#colorSelected").val().split(",");

    $("#colorSelected").val($("#colorSelected").val() + color_id + ',');
    if (splitColor.indexOf(color_id) != -1) {
        splitColor.splice(splitColor.indexOf(color_id), 1);
        $("#colorSelected").val(splitColor);
    }

    $("#filterUrl").val(function(i, v) {return v.replace(currentColor, "color=" + $("#colorSelected").val());}).val();
    ajaxFilter();
})

$("#nameFilter").on("keyup", function() {
    var name = $(this).val();
    var currentUrl = $("#filterUrl").val();
    var currentName = currentUrl.slice(currentUrl.indexOf("name="), currentUrl.length);
    $("#filterUrl").val(function(i, v) {return v.replace(currentName, "name=" + name);}).val();
    ajaxFilter();
})

$("#sortby").on("change", function(){
    var sortby = $(this).val();
    var currentUrl = $("#filterUrl").val();
    var currentSortBy = currentUrl.slice(8, currentUrl.indexOf("&category="));
    $("#filterUrl").val(function(i, v) {return v.replace(currentSortBy, "sortby=" + sortby);}).val();
    ajaxFilter();
})

function ajaxFilter() {
    $.ajax({
        url: $("#filterUrl").val(),
        type: "get",
        success: function(data) {
            $("#products").empty();
            data.forEach(function(item) {
                renderProducts(item);
            });
        }
    });
}

function renderProducts(item) {
    var price = parseInt(item.price).toLocaleString('vi', {style : 'currency', currency : 'VND'});
    var discountRender =  item.discount > 0 ? '<span>' + price + '</span>': '';
    var saleRender =  item.discount > 0 ? '<span class="label">Sale</span>': '';
    var starRender = '';
    for (var i = 0; i < item.rating_star; i++)
        starRender += '<i class="fa fa-star"></i> ';

    for (var i = 5; i > item.rating_star; i--)
        starRender += '<i class="fa fa-star-o"></i> ';
    
    $("#products").append(
        '<div class="col-lg-4 col-md-6 col-sm-6">' + 
        '<div class="product__item sale">' +
            '<div class="product__item__pic set-bg" style="background-image: url(/' + item.first_image + ')">' +
                saleRender +
                '<ul class="product__hover">' + 
                    '<li>' + 
                        '<form action="/wishlist" method="post">' + 
                            '<input type="hidden" name="_token" value="' + $('meta[name="csrf-token"]').attr("content") + '">' +
                            '<input type="hidden" value="' + item.id + '" name="product_id">' + 
                            '<button type="submit" class="wishlist">' +
                                '<i class="fa fa-heart-o" aria-hidden="true"></i>' +
                            '</button>' +
                        '</form>' +
                    '</li>' +
                   ' <li>' +
                        '<a href="/product-details/' + item.id + '">' + 
                            '<button type="submit" class="wishlist">' +
                                '<i class="fa fa-search"></i>' +
                            '</button>' +
                        '</a>' +
                    '</li>' +
                '</ul>' +
            '</div>' +
            '<div class="product__item__text">' +
                '<h6>' + item.name + '</h6>' +
                '<a href="/product-details/' + item.id + '" class="add-cart">+ Add To Cart</a>' +
                '<div class="rating">' +
                    starRender +
                '</div>' +
                '<h5 class="discount">' +
                    item.after_discount.toLocaleString('vi', {style : 'currency', currency : 'VND'}) +
                    discountRender +
                '</h5>' +
            '</div>' +
        '</div>' +
    '</div>'
    );
}

