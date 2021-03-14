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
