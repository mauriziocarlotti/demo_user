$(function(){
	// solving the menu problem
	switch(menu){
	
	case 'Chi siamo noi...':
		$('#about').addClass('active');
		break;
	case 'Contatti':
		$('#contact').addClass('active');
		break;
	default:
		$('#home').addClass('active');
		break;
	}
});