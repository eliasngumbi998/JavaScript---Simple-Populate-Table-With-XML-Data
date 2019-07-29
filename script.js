$(document).ready(function(){
	$('#generate').on('click', function(){
		var data = $.parseXML(xml); 
 
		var $xml = $(data);
 
		var $user = $xml.find("user");
 
		var content = "";
		$user.each(function(){
 
			var firstname = $(this).find('firstname').text();
			var lastname = $(this).find('lastname').text();
 
			content += "<tr>"
				+ "<td>"+firstname+"</td>"
				+ "<td>"+lastname+"</td>"
				+ "</tr>";
 
			$("#result" ).html(content);
 
		});
	});
 
	var xml = 
	"<?xml version='1.0' ?>"
	+ "<doc>"
	+"		<user>"
	+"			<firstname>Tony</firstname>"
	+"			<lastname>Stark</lastname>"
	+"		</user>"
	+"		<user>"
	+"			<firstname>Claire</firstname>"
	+"			<lastname>Temple</lastname>"
	+"		</user>"
	+"		<user>"
	+"			<firstname>John</firstname>"
	+"			<lastname>Smith</lastname>"
	+"		</user>"
	+"</doc>";
});
