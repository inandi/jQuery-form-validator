/*	
 *
 * This file is created to ease your form validation, feel free use this
 * if you want to contribute, please fork in github link (https://github.com/inandi/jQuery-form-validator)
 * Author : Gobinda Nandi 2017, https://stackoverflow.com/users/7991798/gobinda-nandi?tab=profile
 *
 * HAPPY CODING !!!
 *
 */

var inputGbnEmailFlag = false;

/* use gbnCurrentYear to get current year */
var gbnCurrentYear = new Date().getFullYear();

/*ten digit mobile no*/
$('.input-gbn-mobile-ten').keypress(function (event) {
	$(this).attr('maxlength','10');
	return /\d/.test(String.fromCharCode(event.keyCode));
}).on('paste',function(e){  
	$(this).attr('maxlength','10');
	return /\d/.test(String.fromCharCode(event.keyCode));
});

/* only alphanumeric  and -_ */
$('.input-gbn-slug').keypress(function (e) {
	var regex = new RegExp("^[a-zA-Z-_]+$");
	var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
	if (regex.test(str)) {
		return true;
	}
	e.preventDefault();
	return false;
}).on('paste',function(e){  
	var regex = new RegExp("^[a-zA-Z-_]+$");
	var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
	if (regex.test(str)) {
		return true;
	}
	e.preventDefault();
	return false;
});

/*prevent hit 'Enter' in element*/
$('.input-gbn-prv-ent').keypress(function (event) { 
	/*enter keycode = "13" */
	if(event.keyCode == 13){			
		event.preventDefault();
	}
});

/*prevent hit 'Space' in element*/
$('.input-gbn-prv-space').keypress(function (event) { 
	/*space keycode = "32" */
	if(event.keyCode == 32){			
		event.preventDefault();
	}
});

/*only integer*/
$('.input-gbn-int').keypress(function (event) { 
	return /\d/.test(String.fromCharCode(event.keyCode));
}).on('paste',function(e){  
	return /\d/.test(String.fromCharCode(event.keyCode));
});

/*only alpha no space*/
$('.input-gbn-alpha').keypress(function (e) {
	var regex = new RegExp("^[a-zA-Z]+$");
	var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
	if (regex.test(str)) {
		return true;
	}
	e.preventDefault();
	return false;
}).on('paste',function(e){  
	var regex = new RegExp("^[a-zA-Z]+$");
	var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
	if (regex.test(str)) {
		return true;
	}
	e.preventDefault();
	return false;
});

/*only alpha with space*/
$('.input-gbn-alpha-spc').keypress(function (e) {
	var regex = new RegExp("^[a-zA-Z ]+$");
	var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
	if (regex.test(str)) {
		return true;
	}
	e.preventDefault();
	return false;
}).on('paste', function(e) {
	var regex = new RegExp("^[a-zA-Z ]+$");
	var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
	if (regex.test(str)) {
		return true;
	}
	e.preventDefault();
	return false;
});
;

/*only nemuric*/
$('.input-gbn-numeric').on('keydown',function(e){
	var allowedKeyCodesArr = [9,96,97,98,99,100,101,102,103,104,105,48,49,50,51,52,53,54,55,56,57,8,37,39,109,189,46,110,190];   
	if($.inArray(e.keyCode,allowedKeyCodesArr) === -1 && (e.keyCode != 17 && e.keyCode != 86)){   
		e.preventDefault();
	} else if($.trim($(this).val()).indexOf('.') > -1 && $.inArray(e.keyCode,[110,190]) != -1){  
		e.preventDefault();
	} else {
		return true;
	};  
}).on('paste',function(e){  
	var allowedKeyCodesArr = [9,96,97,98,99,100,101,102,103,104,105,48,49,50,51,52,53,54,55,56,57,8,37,39,109,189,46,110,190];   
	if($.inArray(e.keyCode,allowedKeyCodesArr) === -1 && (e.keyCode != 17 && e.keyCode != 86)){   
		e.preventDefault();
	} else if($.trim($(this).val()).indexOf('.') > -1 && $.inArray(e.keyCode,[110,190]) != -1){  
		e.preventDefault();
	} else {
		return true;
	};  
});

/*all capital*/
$('.input-gbn-cap').keyup(function(e) {
	$(this).val($(this).val().toUpperCase());
}).on('paste',function(e){ 
	$(this).val($(this).val().toUpperCase());
});

/*all small*/
$('.input-gbn-small').keyup(function(e) {
	$(this).val($(this).val().toLowerCase());
}).on('paste',function(e){ 
	$(this).val($(this).val().toLowerCase());
});

/*sentence case*/
$('.input-gbn-sentence').keyup(function(e) {
	var string=$(this).val().toLowerCase();
	var n=string.split(".");
	var vfinal=""
	for(i=0;i<n.length;i++)
	{
		var spaceput=""
		var spaceCount=n[i].replace(/^(\s*).*$/,"$1").length;
		n[i]=n[i].replace(/^\s+/,"");
		var newstring=n[i].charAt(n[i]).toUpperCase() + n[i].slice(1);
		for(j=0;j<spaceCount;j++)
			spaceput=spaceput+" ";
		vfinal=vfinal+spaceput+newstring+".";
	}
	vfinal=vfinal.substring(0, vfinal.length - 1);
	$(this).val((vfinal));
}).on('paste',function(e){ 
	var string=$(this).val().toLowerCase();
	var n=string.split(".");
	var vfinal=""
	for(i=0;i<n.length;i++)
	{
		var spaceput=""
		var spaceCount=n[i].replace(/^(\s*).*$/,"$1").length;
		n[i]=n[i].replace(/^\s+/,"");
		var newstring=n[i].charAt(n[i]).toUpperCase() + n[i].slice(1);
		for(j=0;j<spaceCount;j++)
			spaceput=spaceput+" ";
		vfinal=vfinal+spaceput+newstring+".";
	}
	vfinal=vfinal.substring(0, vfinal.length - 1);
	$(this).val((vfinal));
});

function ucWordsGBN (str) {
	return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
		return $1.toUpperCase();
	});
}

/*Each first letter capital*/
$('.input-gbn-each-cap').keyup(function (e)  {
	let str = $(this).val();
	$(this).val(ucWordsGBN(str));
}).on('paste',function(e){ 
	let str = $(this).val();
	$(this).val(ucWordsGBN(str));
});

/*count character*/
$('.input-gbn-count_char').change(function() {
	let len = $(this).val().length;
	$(this).attr('gbn-char-count', len);
});

/*alpha-nemuric only no space allowed*/
$('.input-gbn-alpha-neu').keypress(function (e) {
	var regex = new RegExp("^[a-zA-Z0-9]+$");
	var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
	if (regex.test(str)) {
		return true;
	}
	e.preventDefault();
	return false;
}).on('paste',function(e){  
	var regex = new RegExp("^[a-zA-Z0-9]+$");
	var pastedTxt = e.originalEvent.clipboardData.getData('Text').replace(/[^a-zA-Z0-9]/g, ''); 
	if (regex.test(pastedTxt)) {
		e.originalEvent.target.value = pastedTxt;
		e.preventDefault();
	} else {  
		e.originalEvent.target.value = ""; 
		e.preventDefault();  
	};
});

/*alpha-nemuric only but space allowed*/
$('.input-gbn-alpha-neu-space').keypress(function (e) {
	var regex = new RegExp("^[a-zA-Z0-9 ]+$");
	var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
	if (regex.test(str)) {
		return true;
	}
	e.preventDefault();
	return false;
}).on('paste',function(e){
	var regex = new RegExp("^[a-zA-Z0-9 ]+$");
	var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
	if (regex.test(str)) {
		return true;
	}
	e.preventDefault();
	return false;
});

/*end of js file*/