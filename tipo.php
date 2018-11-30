<?php
	$data_file = fopen("./data-1.json","r");
	$data_readed = fread($data_file, filesize("./data-1.json"));
	$data = json_decode($data_readed, true);
	fclose($data_file);
	$tipos=[];
	foreach ($data as $key => $value) {
		$tipos[]=$value['Tipo'];
	}
	$tipos= array_unique($tipos);
	$tiposInmuebles='';
	foreach ($tipos as $Tipo) {
		$tiposInmuebles='<option value="'.$Tipo.'">'.$Tipo.'</option>';
		echo $tiposInmuebles;
	}

	
?>