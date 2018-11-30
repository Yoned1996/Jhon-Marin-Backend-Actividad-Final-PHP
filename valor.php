<?php
	$range = explode(";", $_POST["precio"]);
	$data_file = fopen("./data-1.json","r");
	$data_readed = fread($data_file, filesize("./data-1.json"));
	$data = json_encode($data_readed, true);
	
	foreach ($data as $key => $value) {
		echo $data;
	}
	?>