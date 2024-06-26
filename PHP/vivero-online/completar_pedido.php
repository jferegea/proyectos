<?php

session_start();

if($_SERVER['REQUEST_METHOD'] ==='POST'){

    require 'funciones.php';
    require 'vendor/autoload.php';

    if(isset($_SESSION['carrito']) && !empty($_SESSION['carrito'])){

    $cliente = new frikiplantas\Cliente;

    $_params = array(
        'nombre' => $_POST['nombre'],
        'apellidos' => $_POST['apellidos'],
        'email' => $_POST['email'],
        'telefono' => $_POST['telefono'],
        'comentario' => $_POST['comentario']
    );

    $cliente_id = $cliente->registrar($_params);

    $pedido = new frikiplantas\Pedido;

    $_params = array(
        'cliente_id' => $cliente_id,
        'total' => calculartotal(),
        'fecha' => date('Y-m-d')
    );

    $pedido_id = $pedido->registrar($_params);

    foreach($_SESSION['carrito'] as $indice => $value){

        $_params = array(
            "pedido_id" => $pedido_id,
            "articulo_id" => $value['id'],
            "precio" => $value['precio'],
            "cantidad" => $value['cantidad'],  
        );

        $pedido -> registrarDetalle($_params);

        }

        $_SESSION['carrito'] = array();

        header('Location: gracias.php');

    }

    

    

}

?>