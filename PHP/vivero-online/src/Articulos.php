<?php
namespace frikiplantas;

class Articulos{
    private $config;
    private $cn = null;

    public function __construct()
    {   
        /*lee el contenido de config*/
        $this->config = parse_ini_file(__DIR__.'/../config.ini') ;

        /*en cn almacenamos la conexion*/
        $this->cn = new \PDO( $this->config['dns'], $this->config['usuario'],$this->config['clave'],array(
            \PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'
        ));      


    }

    public function registrar($_params){
        $sql = "INSERT INTO `articulos`(`titulo`, `descripcion`, `foto`, `precio`, `categoria_id`, `fecha`) 
        VALUES (:titulo,:descripcion,:foto,:precio,:categoria_id,:fecha)";

        $resultado = $this->cn->prepare($sql);

        $_array = array(
            ":titulo" => $_params['titulo'],
            ":descripcion" => $_params['descripcion'],
            ":foto" => $_params['foto'],
            ":precio" => $_params['precio'],
            ":categoria_id" => $_params['categoria_id'],
            ":fecha" => $_params['fecha'],
        );

        if($resultado->execute($_array))
            return true;

        return false;
    }

    public function actualizar($_params){
        $sql = "UPDATE `articulos` SET `titulo`=:titulo,`descripcion`=:descripcion,`foto`=:foto,`precio`=:precio,`categoria_id`=:categoria_id,`fecha`=:fecha  WHERE `id`=:id";

        $resultado = $this->cn->prepare($sql);

        $_array = array(
            ":titulo" => $_params['titulo'],
            ":descripcion" => $_params['descripcion'],
            ":foto" => $_params['foto'],
            ":precio" => $_params['precio'],
            ":categoria_id" => $_params['categoria_id'],
            ":fecha" => $_params['fecha'],
            ":id" =>  $_params['id']
        );

        if($resultado->execute($_array))
            return true;

        return false;
    }

    public function eliminar($id){
        $sql = "DELETE FROM `articulos` WHERE `id`=:id ";

        $resultado = $this->cn->prepare($sql);
        
        $_array = array(
            ":id" =>  $id
        );

        if($resultado->execute($_array))
            return true;

        return false;
    }

    public function mostrar(){
        $sql = "SELECT articulos.id, titulo, descripcion,foto,nombre,precio,fecha,estado FROM articulos 
        
        INNER JOIN categorias
        ON articulos.categoria_id = categorias.id ORDER BY articulos.id DESC
        ";
        
        $resultado = $this->cn->prepare($sql);

        if($resultado->execute())
            return $resultado->fetchAll();

        return false;
    }

    public function mostrarPorId($id){
        
        $sql = "SELECT * FROM `articulos` WHERE `id`=:id ";
        
        $resultado = $this->cn->prepare($sql);
        $_array = array(
            ":id" =>  $id
        );

        if($resultado->execute($_array))
            return $resultado->fetch();

        return false;
    }
}