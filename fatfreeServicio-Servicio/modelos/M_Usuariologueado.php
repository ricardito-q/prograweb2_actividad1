<?php

class M_Usuariologueado extends \DB\SQL\Mapper
{
  public function __construct()
  {
    // parent::__construct(\Base::instance()->get('DB'), 'segtrnusuariologueado');
  }
  //para la nube devuelve con 2 puntos
  public function ValidaSession($idusuario=null,  $Clave=null)
  //public function ValidaSession(string $idusuario, string $Clave)
  {
    // $this->load(["idusuario = $idusuario and idestadollave=1 and llave = '$Clave'"]);
    // if ($this->loaded() > 0)
    //   return true;
    // else
    //   return false;

      return true;
  }
  // public function CambiaPassword($idusuario=null, $Clave=null)
  // //public function CambiaPassword(string $idusuario, string $Clave)
  // {
  //   $this->load(["idusuario = $idusuario and idestadollave=1 and llave = '$Clave'"]);
  //   if ($this->loaded() > 0)
  //     return true;
  //   else
  //     return false;
  // }
}
