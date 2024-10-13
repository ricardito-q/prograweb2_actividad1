<?php
//gen 27/6/2024 19:50:44 dst
class comprasemanal_Ctrl
{
    public $M_Usuariologueado = null;
    public function __construct()
    {
        $this->M_Usuariologueado = new M_Usuariologueado();
    }

    public function selComprasemanal($f3)
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
            $Con = $oDav_Ctrol->fnDevuelveConsulta('viscomprasemanal', $pCampo0, $pValor0, $pCampo1, $pValor1, $pCampo2, $pValor2, $pCampo3, $pValor3, $pCampo4, $pValor4, $pCampo5, $pValor5, $pCampo6, $pValor6, $pCampo7, $pValor7);
            $sql = $Con;
            try {
                $resulto = $f3->get('DB')->exec($sql);
                $items = array();
                $msg = 'Lista de Comprasemanals';
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
                $msg = 'Comprasemanal seleccionadas';
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

    public function addComprasemanal($f3)
    {
        $idusuario = is_null($f3->get('POST.idusuario')) ? 'T' : $f3->get('POST.idusuario');
        $llave = is_null($f3->get('POST.llave')) ? 'T' : $f3->get('POST.llave');
        if ($this->M_Usuariologueado->ValidaSession($idusuario, $llave)) {
            $Tipo = 'C';
            $idcomprasemanal = is_null($f3->get('POST.pidcomprasemanal')) ? 'T' : $f3->get('POST.pidcomprasemanal');
            $fechacompra = is_null($f3->get('POST.pfechacompra')) ? 'T' : $f3->get('POST.pfechacompra');
            $idproducto = is_null($f3->get('POST.pidproducto')) ? 'T' : $f3->get('POST.pidproducto');
            $cantidad = is_null($f3->get('POST.pcantidad')) ? 'T' : $f3->get('POST.pcantidad');
            $preciototal = is_null($f3->get('POST.ppreciototal')) ? 'T' : $f3->get('POST.ppreciototal');
            $sql = "CALL pcruComprasemanal('" . $Tipo . "','" . $idcomprasemanal . "','" . $fechacompra . "','" . $idproducto . "','" . $cantidad . "','" . $preciototal . "'); ";
            try {
                $resulto = $f3->get('DB')->exec($sql);
                $items = array();
                $msg = 'add Comprasemanal';
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
                $msg = 'Comprasemanal registrada';
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

    public function getComprasemanal($f3)
    {
        $idusuario = is_null($f3->get('POST.idusuario')) ? 'T' : $f3->get('POST.idusuario');
        $llave = is_null($f3->get('POST.llave')) ? 'T' : $f3->get('POST.llave');
        if ($this->M_Usuariologueado->ValidaSession($idusuario, $llave)) {
            $Tipo = 'R';
            $idcomprasemanal = is_null($f3->get('POST.pidcomprasemanal')) ? 'T' : $f3->get('POST.pidcomprasemanal');
            $fechacompra = is_null($f3->get('POST.pfechacompra')) ? 'T' : $f3->get('POST.pfechacompra');
            $idproducto = is_null($f3->get('POST.pidproducto')) ? 'T' : $f3->get('POST.pidproducto');
            $cantidad = is_null($f3->get('POST.pcantidad')) ? 'T' : $f3->get('POST.pcantidad');
            $preciototal = is_null($f3->get('POST.ppreciototal')) ? 'T' : $f3->get('POST.ppreciototal');
            $sql = "CALL pcruComprasemanal('" . $Tipo . "','" . $idcomprasemanal . "','" . $fechacompra . "','" . $idproducto . "','" . $cantidad . "','" . $preciototal . "'); ";
            try {
                $resulto = $f3->get('DB')->exec($sql);
                $items = array();
                $msg = 'getComprasemanal';
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
                $msg = 'Comprasemanal encontrada';
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

    public function updComprasemanal($f3)
    {
        $idusuario = is_null($f3->get('POST.idusuario')) ? 'T' : $f3->get('POST.idusuario');
        $llave = is_null($f3->get('POST.llave')) ? 'T' : $f3->get('POST.llave');
        if ($this->M_Usuariologueado->ValidaSession($idusuario, $llave)) {
            $Tipo = 'U';
            $idcomprasemanal = is_null($f3->get('POST.pidcomprasemanal')) ? 'T' : $f3->get('POST.pidcomprasemanal');
            $fechacompra = is_null($f3->get('POST.pfechacompra')) ? 'T' : $f3->get('POST.pfechacompra');
            $idproducto = is_null($f3->get('POST.pidproducto')) ? 'T' : $f3->get('POST.pidproducto');
            $cantidad = is_null($f3->get('POST.pcantidad')) ? 'T' : $f3->get('POST.pcantidad');
            $preciototal = is_null($f3->get('POST.ppreciototal')) ? 'T' : $f3->get('POST.ppreciototal');
            $sql = "CALL pcruComprasemanal('" . $Tipo . "','" . $idcomprasemanal . "','" . $fechacompra . "','" . $idproducto . "','" . $cantidad . "','" . $preciototal . "'); ";
            try {
                $resulto = $f3->get('DB')->exec($sql);
                $items = array();
                $msg = 'update Comprasemanal';
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
                $msg = 'Comprasemanal encontrada';
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

    public function papComprasemanal($f3)
    {
        $idusuario = is_null($f3->get('POST.idusuario')) ? 'T' : $f3->get('POST.idusuario');
        $llave = is_null($f3->get('POST.llave')) ? 'T' : $f3->get('POST.llave');
        if ($this->M_Usuariologueado->ValidaSession($idusuario, $llave)) {
            $Tipo = is_null($f3->get('POST.tipo')) ? 'T' : $f3->get('POST.tipo');
            $procedure = is_null($f3->get('POST.procedure')) ? 'T' : $f3->get('POST.procedure');
            $idcomprasemanal = is_null($f3->get('POST.pidcomprasemanal')) ? 'T' : $f3->get('POST.pidcomprasemanal');
            $fechacompra = is_null($f3->get('POST.pfechacompra')) ? 'T' : $f3->get('POST.pfechacompra');
            $idproducto = is_null($f3->get('POST.pidproducto')) ? 'T' : $f3->get('POST.pidproducto');
            $cantidad = is_null($f3->get('POST.pcantidad')) ? 'T' : $f3->get('POST.pcantidad');
            $preciototal = is_null($f3->get('POST.ppreciototal')) ? 'T' : $f3->get('POST.ppreciototal');
            $sql = "CALL " . $procedure . "('" . $Tipo . "','" . $idcomprasemanal . "','" . $fechacompra . "','" . $idproducto . "','" . $cantidad . "','" . $preciototal . "'); ";
            try {
                $resulto = $f3->get('DB')->exec($sql);
                $items = array();
                $msg = 'update Comprasemanal';
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
                $msg = 'Comprasemanal encontrada';
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
