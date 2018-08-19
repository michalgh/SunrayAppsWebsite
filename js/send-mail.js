
$(function() {
	
	var contactForm = $('#contact-form');
	
	contactForm.submit(function()
	{
		if(contactForm.valid())
		{
			contactForm.find('.submit-area').addClass('loading');
			var formValues = $(this).serialize();
			
			$.post($(this).attr('action'), formValues, function(data){
				contactForm.before(data);
				contactForm.slideUp(400, function(){
					$(this).remove()
				});
			});
		}
		return false
	});
		
});