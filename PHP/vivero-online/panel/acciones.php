<?php
require '../vendor/autoload.php';

$articulos = new frikiplantas\Articulos;

if($_SERVER['REQUEST_METHOD'] ==='POST'){

    if ($_POST['accion']==='Registrar'){

        if(empty($_POST['titulo']))
            exit('Completar titulo');
        
        if(empty($_POST['descripcion']))
            exit('Completar titulo');

        if(empty($_POST['categoria_id']))
            exit('Seleccionar una Categoria');

        if(!is_numeric($_POST['categoria_id']))
            exit('Seleccionar una Categoria válida');

        
        $_params = array(
            'titulo'=>$_POST['titulo'],
            'descripcion'=>$_POST['descripcion'],
            'foto'=> subirFoto(),
            'precio'=>$_POST['precio'],
            'categoria_id'=>$_POST['categoria_id'],
            'fecha'=> date('Y-m-d')
        );

        $rpt = $articulos->registrar($_params);

        /* Se redirige automaticamente al listado de productos*/
        if($rpt)
            header('Location: articulos/index.php');
        else
            print 'Error al registrar un articulo';

    }

    if ($_POST['accion']==='Actualizar'){
        
        if(empty($_POST['titulo']))
            exit('Completar titulo');
        
        if(empty($_POST['descripcion']))
            exit('Completar titulo');

        if(empty($_POST['categoria_id']))
            exit('Seleccionar una Categoria');

        if(!is_numeric($_POST['categoria_id']))
            exit('Seleccionar una Categoria válida');

        
        $_params = array(
            'titulo'=>$_POST['titulo'],
            'descripcion'=>$_POST['descripcion'],            
            'precio'=>$_POST['precio'],
            'categoria_id'=>$_POST['categoria_id'],
            'fecha'=> date('Y-m-d'),
            'id' =>$_POST['id']
        );
        
        /* Si no esta vacio que suba el archivo */
        if(!empty($_POST['foto_temp']))
            $_params['foto'] = $_POST['foto_temp'];
        if(!empty($_FILE['foto']['name']))
            $_params['foto'] = subirFoto();


        $rpt = $articulos->actualizar($_params);

        /* Se redirige automaticamente al listado de productos*/
        if($rpt)
            header('Location: articulos/index.php');
        else
            print 'Error al actualizar un articulo';
    }

}

if($_SERVER['REQUEST_METHOD'] ==='GET'){

    $id = $_GET['id'];
    $rpt = $articulos->eliminar($id);

        /* Se redirige automaticamente al listado de productos*/
        if($rpt)
            header('Location: articulos/index.php');
        else
            print 'Error al eliminar un articulo';

}


function subirFoto() {

    $carpeta = __DIR__.'/../upload/';

    $archivo = $carpeta.$_FILES['foto']['name'];

    move_uploaded_file($_FILES['foto']['tmp_name'],$archivo);

    return $_FILES['foto']['name'];


}



/*
print '<pre>';
print_r($_POST);
print_r($_FILES); ver informacón de la foto
*/
