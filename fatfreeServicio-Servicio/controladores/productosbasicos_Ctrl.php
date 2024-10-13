<?php
//gen 27/6/2024 19:50:46 dst
class productosbasico_Ctrl
{
public $M_Usuariologueado = null;public function __construct()
{
$this->M_Usuariologueado = new M_Usuariologueado();
}

public function selProductosbasico($f3)
{
$idusuario = is_null($f3->get('POST.idusuario')) ? 'T' : $f3->get('POST.idusuario');
$llave = is_null($f3->get('POST.llave')) ? 'T' : $f3->get('POST.llave');
if ($this->M_Usuariologueado->ValidaSession($idusuario, $llave)) {
$pCampo0 = is_null($f3->get('POST.pCampo0')) ? 'T' : $f3->get('POST.pCampo0');
$pValor0 = is_null($f3->get('POST.pValor0')) ? '' : $f3->get('POST.pValor0');
$pCampo1 = is_null($f3->get('POST.pCampo1')) ? 'T' : $f3->get('POST.pCampo1');
$pValor1 = is_null($f3->get('POST.pValor1')) ? '' : $f3->get('POST.pValor1');
$pCampo2 = is_null($f3->get('POST.pCampo2')) ? 'T' : $f3->get('POST.pCampo2');
$pValor2 = is_null($f3->get('POST.pValor2')) ? '' : $f3->get('POST.pValor2');
$pCampo3 = is_null($f3->get('POST.pCampo3')) ? 'T' : $f3->get('POST.pCampo3');
$pValor3 = is_null($f3->get('POST.pValor3')) ? '' : $f3->get('POST.pValor3');
$pCampo4 = is_null($f3->get('POST.pCampo4')) ? 'T' : $f3->get('POST.pCampo4');
$pValor4 = is_null($f3->get('POST.pValor4')) ? '' : $f3->get('POST.pValor4');
$pCampo5 = is_null($f3->get('POST.pCampo5')) ? 'T' : $f3->get('POST.pCampo5');
$pValor5 = is_null($f3->get('POST.pValor5')) ? '' : $f3->get('POST.pValor5');
$pCampo6 = is_null($f3->get('POST.pCampo6')) ? 'T' : $f3->get('POST.pCampo6');
$pValor6 = is_null($f3->get('POST.pValor6')) ? '' : $f3->get('POST.pValor6');
$pCampo7 = is_null($f3->get('POST.pCampo7')) ? 'T' : $f3->get('POST.pCampo7');
$pValor7 = is_null($f3->get('POST.pValor7')) ? '' : $f3->get('POST.pValor7');
$oDav_Ctrol = new Dav_Ctrol();
$Con = $oDav_Ctrol->fnDevuelveConsulta('visproductosbasico' , $pCampo0  , $pValor0  , $pCampo1  , $pValor1  , $pCampo2  , $pValor2  , $pCampo3  , $pValor3  , $pCampo4  , $pValor4  , $pCampo5  , $pValor5  , $pCampo6  , $pValor6  , $pCampo7  , $pValor7 );
$sql = $Con;
try {
$resulto = $f3->get('DB')->exec($sql);
$items = array();
$msg = 'Lista de Productosbasicos';
$items = $resulto;
echo json_encode([
'mesaje' => $msg,
'info' => [
'item' => $items
]
]);
} catch (PDOException $e) {
echo json_encode('{"error" : { "text":' . $e->getMessage() . '}');
$resulto = $f3->get('DB')->exec($sql);
$items = array();
$msg = 'Productosbasico seleccionadas';
$items = $resulto;
echo json_encode([
'mesaje' => $msg,
'info' => [
'item' => $items
]
]);
} catch (PDOException $e) {
echo json_encode('{"error" : { "text":' . $e->getMessage() . '}');
}
} else {
 $msg = 'llave no valida';
$items = '';
echo json_encode([
'mesaje' => $msg,
'info' => [
'item' => $items
]
]);
}
}

public function addProductosbasico($f3)
{
$idusuario = is_null($f3->get('POST.idusuario')) ? 'T' : $f3->get('POST.idusuario');
$llave = is_null($f3->get('POST.llave')) ? 'T' : $f3->get('POST.llave');
if ($this->M_Usuariologueado->ValidaSession($idusuario, $llave)) {
$Tipo = 'C';
$idproductosbasico = is_null($f3->get('POST.pidproductosbasico')) ? 'T' : $f3->get('POST.pidproductosbasico');
$nombre = is_null($f3->get('POST.pnombre')) ? 'T' : $f3->get('POST.pnombre');
$categoria = is_null($f3->get('POST.pcategoria')) ? 'T' : $f3->get('POST.pcategoria');
$unidadmedida = is_null($f3->get('POST.punidadmedida')) ? 'T' : $f3->get('POST.punidadmedida');
$cantidad = is_null($f3->get('POST.pcantidad')) ? 'T' : $f3->get('POST.pcantidad');
$preciounitario = is_null($f3->get('POST.ppreciounitario')) ? 'T' : $f3->get('POST.ppreciounitario');
$fechacompra = is_null($f3->get('POST.pfechacompra')) ? 'T' : $f3->get('POST.pfechacompra');
$fechacaducidad = is_null($f3->get('POST.pfechacaducidad')) ? 'T' : $f3->get('POST.pfechacaducidad');
$observaciones = is_null($f3->get('POST.pobservaciones')) ? 'T' : $f3->get('POST.pobservaciones');
$sql = "CALL pcruProductosbasico('" . $Tipo . "','". $idproductosbasico . "','". $nombre . "','". $categoria . "','". $unidadmedida . "','". $cantidad . "','". $preciounitario . "','". $fechacompra . "','". $fechacaducidad . "','". $observaciones. "'); "; 
try {
$resulto = $f3->get('DB')->exec($sql);
$items = array();
$msg = 'add Productosbasico';
$items = $resulto;
echo json_encode([
'mesaje' => $msg,
'info' => [
'item' => $items
]
]);
} catch (PDOException $e) {
echo json_encode('{"error" : { "text":' . $e->getMessage() . '}');
$resulto = $f3->get('DB')->exec($sql);
$items = array();
$msg = 'Productosbasico registrada';
$items = $resulto;
echo json_encode([
'mesaje' => $msg,
'info' => [
'item' => $items
]
]);
} catch (PDOException $e) {
echo json_encode('{"error" : { "text":' . $e->getMessage() . '}');
}
} else {
 $msg = 'llave no valida';
$items = '';
echo json_encode([
'mesaje' => $msg,
'info' => [
'item' => $items
]
]);
}
}

public function getProductosbasico($f3)
{
$idusuario = is_null($f3->get('POST.idusuario')) ? 'T' : $f3->get('POST.idusuario');
$llave = is_null($f3->get('POST.llave')) ? 'T' : $f3->get('POST.llave');
if ($this->M_Usuariologueado->ValidaSession($idusuario, $llave)) {
$Tipo = 'R';
$idproductosbasico = is_null($f3->get('POST.pidproductosbasico')) ? 'T' : $f3->get('POST.pidproductosbasico');
$nombre = is_null($f3->get('POST.pnombre')) ? 'T' : $f3->get('POST.pnombre');
$categoria = is_null($f3->get('POST.pcategoria')) ? 'T' : $f3->get('POST.pcategoria');
$unidadmedida = is_null($f3->get('POST.punidadmedida')) ? 'T' : $f3->get('POST.punidadmedida');
$cantidad = is_null($f3->get('POST.pcantidad')) ? 'T' : $f3->get('POST.pcantidad');
$preciounitario = is_null($f3->get('POST.ppreciounitario')) ? 'T' : $f3->get('POST.ppreciounitario');
$fechacompra = is_null($f3->get('POST.pfechacompra')) ? 'T' : $f3->get('POST.pfechacompra');
$fechacaducidad = is_null($f3->get('POST.pfechacaducidad')) ? 'T' : $f3->get('POST.pfechacaducidad');
$observaciones = is_null($f3->get('POST.pobservaciones')) ? 'T' : $f3->get('POST.pobservaciones');
$sql = "CALL pcruProductosbasico('" . $Tipo . "','". $idproductosbasico . "','". $nombre . "','". $categoria . "','". $unidadmedida . "','". $cantidad . "','". $preciounitario . "','". $fechacompra . "','". $fechacaducidad . "','". $observaciones. "'); "; 
try {
$resulto = $f3->get('DB')->exec($sql);
$items = array();
$msg = 'getProductosbasico';
$items = $resulto;
echo json_encode([
'mesaje' => $msg,
'info' => [
'item' => $items
]
]);
} catch (PDOException $e) {
echo json_encode('{"error" : { "text":' . $e->getMessage() . '}');
$resulto = $f3->get('DB')->exec($sql);
$items = array();
$msg = 'Productosbasico encontrada';
$items = $resulto;
echo json_encode([
'mesaje' => $msg,
'info' => [
'item' => $items
]
]);
} catch (PDOException $e) {
echo json_encode('{"error" : { "text":' . $e->getMessage() . '}');
}
} else {
 $msg = 'llave no valida';
$items = '';
echo json_encode([
'mesaje' => $msg,
'info' => [
'item' => $items
]
]);
}
}

public function updProductosbasico($f3)
{
$idusuario = is_null($f3->get('POST.idusuario')) ? 'T' : $f3->get('POST.idusuario');
$llave = is_null($f3->get('POST.llave')) ? 'T' : $f3->get('POST.llave');
if ($this->M_Usuariologueado->ValidaSession($idusuario, $llave)) {
$Tipo = 'U';
$idproductosbasico = is_null($f3->get('POST.pidproductosbasico')) ? 'T' : $f3->get('POST.pidproductosbasico');
$nombre = is_null($f3->get('POST.pnombre')) ? 'T' : $f3->get('POST.pnombre');
$categoria = is_null($f3->get('POST.pcategoria')) ? 'T' : $f3->get('POST.pcategoria');
$unidadmedida = is_null($f3->get('POST.punidadmedida')) ? 'T' : $f3->get('POST.punidadmedida');
$cantidad = is_null($f3->get('POST.pcantidad')) ? 'T' : $f3->get('POST.pcantidad');
$preciounitario = is_null($f3->get('POST.ppreciounitario')) ? 'T' : $f3->get('POST.ppreciounitario');
$fechacompra = is_null($f3->get('POST.pfechacompra')) ? 'T' : $f3->get('POST.pfechacompra');
$fechacaducidad = is_null($f3->get('POST.pfechacaducidad')) ? 'T' : $f3->get('POST.pfechacaducidad');
$observaciones = is_null($f3->get('POST.pobservaciones')) ? 'T' : $f3->get('POST.pobservaciones');
$sql = "CALL pcruProductosbasico('" . $Tipo . "','". $idproductosbasico . "','". $nombre . "','". $categoria . "','". $unidadmedida . "','". $cantidad . "','". $preciounitario . "','". $fechacompra . "','". $fechacaducidad . "','". $observaciones. "'); "; 
try {
$resulto = $f3->get('DB')->exec($sql);
$items = array();
$msg = 'update Productosbasico';
$items = $resulto;
echo json_encode([
'mesaje' => $msg,
'info' => [
'item' => $items
]
]);
} catch (PDOException $e) {
echo json_encode('{"error" : { "text":' . $e->getMessage() . '}');
$resulto = $f3->get('DB')->exec($sql);
$items = array();
$msg = 'Productosbasico encontrada';
$items = $resulto;
echo json_encode([
'mesaje' => $msg,
'info' => [
'item' => $items
]
]);
} catch (PDOException $e) {
echo json_encode('{"error" : { "text":' . $e->getMessage() . '}');
}
} else {
 $msg = 'llave no valida';
$items = '';
echo json_encode([
'mesaje' => $msg,
'info' => [
'item' => $items
]
]);
}
}

public function papProductosbasico($f3)
{
$idusuario = is_null($f3->get('POST.idusuario')) ? 'T' : $f3->get('POST.idusuario');
$llave = is_null($f3->get('POST.llave')) ? 'T' : $f3->get('POST.llave');
if ($this->M_Usuariologueado->ValidaSession($idusuario, $llave)) {
$Tipo = is_null($f3->get('POST.tipo')) ? 'T' : $f3->get('POST.tipo');
$procedure = is_null($f3->get('POST.procedure')) ? 'T' : $f3->get('POST.procedure');
$idproductosbasico = is_null($f3->get('POST.pidproductosbasico')) ? 'T' : $f3->get('POST.pidproductosbasico');
$nombre = is_null($f3->get('POST.pnombre')) ? 'T' : $f3->get('POST.pnombre');
$categoria = is_null($f3->get('POST.pcategoria')) ? 'T' : $f3->get('POST.pcategoria');
$unidadmedida = is_null($f3->get('POST.punidadmedida')) ? 'T' : $f3->get('POST.punidadmedida');
$cantidad = is_null($f3->get('POST.pcantidad')) ? 'T' : $f3->get('POST.pcantidad');
$preciounitario = is_null($f3->get('POST.ppreciounitario')) ? 'T' : $f3->get('POST.ppreciounitario');
$fechacompra = is_null($f3->get('POST.pfechacompra')) ? 'T' : $f3->get('POST.pfechacompra');
$fechacaducidad = is_null($f3->get('POST.pfechacaducidad')) ? 'T' : $f3->get('POST.pfechacaducidad');
$observaciones = is_null($f3->get('POST.pobservaciones')) ? 'T' : $f3->get('POST.pobservaciones');
$sql = "CALL " . $procedure . "('" . $Tipo . "','". $idproductosbasico . "','". $nombre . "','". $categoria . "','". $unidadmedida . "','". $cantidad . "','". $preciounitario . "','". $fechacompra . "','". $fechacaducidad . "','". $observaciones. "'); "; 
try {
$resulto = $f3->get('DB')->exec($sql);
$items = array();
$msg = 'update Productosbasico';
$items = $resulto;
echo json_encode([
'mesaje' => $msg,
'info' => [
'item' => $items
]
]);
} catch (PDOException $e) {
echo json_encode('{"error" : { "text":' . $e->getMessage() . '}');
$resulto = $f3->get('DB')->exec($sql);
$items = array();
$msg = 'Productosbasico encontrada';
$items = $resulto;
echo json_encode([
'mesaje' => $msg,
'info' => [
'item' => $items
]
]);
} catch (PDOException $e) {
echo json_encode('{"error" : { "text":' . $e->getMessage() . '}');
}
} else {
 $msg = 'llave no valida';
$items = '';
echo json_encode([
'mesaje' => $msg,
'info' => [
'item' => $items
]
]);
}
}
}
