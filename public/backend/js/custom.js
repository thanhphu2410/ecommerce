$(".size").on("click", function() {
	for (let index = 0; index < $(".size").length; index++) {
		var size = $(".size")[index];
		var qty_input = $("#qty_input" + size.value).val();
		$("#qty_input" + size.value).remove();
		$("#qty_label" + size.value).remove();
		if (size.checked) {
			$("#quantity").append(
				`<p class="mt-2" id="qty_label${size.value}">Quantity Size ${$(".size ~ label")[index].innerText}</p>
				<input type="number" class="form-control" placeholder="Enter Quantity" name="quantity[]" id="qty_input${size.value}" value="${qty_input}">`
			);
		}
	}
});

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
