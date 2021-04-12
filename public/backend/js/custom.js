$("#summernote").summernote({
	placeholder: "Type something ...",
	tabsize: 2,
	height: 80,
	toolbar: [
		['style', ['style']],
		['font', ['bold', 'underline', 'clear']],
		['color', ['color']],
		['para', ['ul', 'ol', 'paragraph']],
		['table', ['table']],
		['insert', ['link', 'picture', 'video']],
	]
});

$("#province").on("change", function() {
	$.ajax({
        url: "/districts/" + $("#province").val(),
        type: "get",
        success: function(data) {
            $("#district").empty();
            $("#district").empty();
            data.forEach(function(item) {
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
            $("#ward").empty();
            $("#ward").empty();
            data.forEach(function(item) {
                $("#ward").append(
                    "<option value='" + item.id + "'>" + item.name + "</option>"
                );
            });
        }
    });
});

$("#month").on("change", function(){
	$(location).attr('href', '/dashboard/?m=' + $("#month").val());
})

$(document).on("click", ".deleteAttribute" , function() {
	var currentAttribute = parseInt($("#currentAttribute").val());
	if (currentAttribute - 1 >= 1) {
		$(this).parents('#attribute').remove();
		$("#currentAttribute").val(currentAttribute - 1);
	}
});

$("#addAttribute").on("click", function(){
	var maxOfAttribute = parseInt($("#maxOfAttribute").val());
	var currentAttribute = parseInt($("#currentAttribute").val());
	$.ajax({
        url: "/products/attributes",
        type: "get",
        success: function(data) {
			var sizes = '';
			data.sizes.forEach(function(item) { 
			 	sizes += '<option value="' + item.id+ '">' + item.name + '</option>'
			});

			var colors = '';
			data.colors.forEach(function(item) { 
			 	colors += '<option value="' + item.id+ '">' + item.name + '</option>'
			});

			if (currentAttribute + 1 <= maxOfAttribute) {
				$("#attributeWrapper").append(
					'<div class="row align-items-center mt-5" id="attribute">' +
						'<div class="col-10 row">' +
							'<div class="form-group col-6">' +
								'<label>Select sizes</label>' +
								'<select class="custom-select" name="sizes[]">' +
									'<option selected value="">Sizes</option>' +
									sizes +
								'</select>' +
							'</div>' +

							'<div class="form-group col-6">' +
								'<label>Product Quantity</label>' +
								'<input type="number" class="form-control" placeholder="Enter Quantity" name="quantity[]" value="">' +
							'</div>' +

							'<div class="form-group col-6">' +
								'<label>Select colors</label>' +
								'<select class="custom-select" name="colors[]">' +
									'<option selected value="">Colors</option>' +
									colors +
								'</select>' +
							'</div>' +

							'<div class="form-group col-6">' +
								'<label>Images</label>' +
								'<div class="input-group">' +
									'<div class="custom-file">' +
										'<input type="file" multiple class="custom-file-input" name="images' + currentAttribute + '[]" accept="image/*">' +
										'<label class="custom-file-label">Choose images</label>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +

						'<div class="col-2 text-center">' +
							'<button type="button" class="btn btn-dark deleteAttribute">' +
								'<i class="fas fa-trash"></i>' +
							'</button>' +
						'</div>' +
					'</div>'
				)
				$("#currentAttribute").val(currentAttribute + 1);
			}
        }
    });
})

$('#files').on('change', function(){ 
	$("#files ~ .custom-file-label").text($(this).get(0).files.length + " files choose");
});

$('#order_status').on('change', function(){
	$.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
        }
    });
	$.ajax({
        url: "/orders/" + $('#order_id').val(),
        type: "patch",
		data: { 
			'status': $(this).val()
		},
        success: function(data) {
            console.log(data);
        }
    });
});

$('#search').on('keyup', function() {
	var $rows = $('#table tr');
	var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
	$rows.show().filter(function() {
		var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
		if (text.indexOf(val) == -1) {
			return true;
		}
		return false;
		// return !~text.indexOf(val);
	}).hide();
});