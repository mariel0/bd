var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'node'
});
connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});
var query = connection.query('SELECT nombre, apellido FROM prueba', function(error, result){
      if(error){
         throw error;
      }else{
         if(result.length > 0){
         	//console.log(result);
            console.log(result[1].nombre);
         }else{
            console.log('Registro no encontrado');
         }
      }
   }
);
connection.end();