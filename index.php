<!DOCTYPE html>
<html lang="en">




<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title class="text-primary">Talonario de fallas</title>
        <link rel="shortcut icon" href="https://genfavicon.com/tmp/icon_3e436be7614b3486fb5c4498fb252a38.ico"> 
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
		<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="//cdn.datatables.net/1.10.24/css/jquery.dataTables.min.css" rel="stylesheet"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <!-- Including Font Awesome CSS from CDN to show icons -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"> 
        <link rel="stylesheet" href="css/styles.css">
</script>


</head>
<body>
    <div>
        <h2 class="text-secondary mt-4 ml-4">Talonario de fallas<h2>
    </div>


   <form>
        <div class="container ml-4 pt-4">
            <div class="row">
                <div class="col-3"><label for="Artículo">Artículo</label></div>
                <div class="col-4"><label for="Artículo">Descripción de artículo</label></div>
                <div class="col-5"><label for="Artículo">Descripción de falla</label></div>
            </div>
            
            <div class="row">
                <div class="col-3"><input type="text" class="form-control" placeholder="Ingrese artículo" id="codigo" tabindex=1></div>
                <div class="col-4"><input type="text" class="form-control" placeholder="Descripción de artículo" id="descripcion_articulo" readonly disabled></div>
                <div class="col-4"><input type="text" class="form-control" placeholder="Descripción de falla" id="descripcion_falla" tabindex=2></div>
                <div class="btn-toolbar pt-4">
                    <div class="col"><button type="submit" class="btn btn-success" action="./talonario.php" target="_blank"><span class="fa fa-print"></span><a href="javascript:openPage()"> Imprimir</a></button></div>
                    <div class="col"><button type="reset" class="btn btn-primary"><span class="fa fa-eraser"></span> Borrar</button></div>
                </div>
            </div>
        </div>
    </form>

            
    



    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="js/functions.js"></script>

</body>
</html>