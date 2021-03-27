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

$(".deleteAttribute").on("click", function(){
	var currentAttribute = parseInt($("#currentAttribute").val());
	if (currentAttribute - 1 >= 1) {
		$(this).parents('#attribute').remove();
		$("#currentAttribute").val(currentAttribute - 1);
	}
})

$("#addAttribute").on("click", function(){
	var maxOfAttribute = parseInt($("#maxOfAttribute").val());
	var currentAttribute = parseInt($("#currentAttribute").val());
	if (currentAttribute + 1 <= maxOfAttribute) {
		$("#attribute").clone(true).appendTo("#attributeWrapper");
		$("#currentAttribute").val(currentAttribute + 1);
	}
})