const express = require("express");
const app = express();

/**
 * Caminhos estáticos
 */
app.use('/bscss', express.static('./node_modules/bootstrap/dist/css'));
app.use('/bsjs', express.static('./node_modules/bootstrap/dist/js'));
app.use('/jquery', express.static('./node_modules/jquery/dist'));
app.use('/popperjs', express.static('./node_modules/@popperjs/core/dist/umd'));
app.use('/css', express.static(__dirname + '/publico/css'));
app.use('/mask', express.static('./node_modules/jquery-mask-plugin/dist'));

app.use('/js', express.static(__dirname + '/publico/js'));


app.listen(3000,function(){
    console.log('Servidor rodando na porta 3000');
});

app.get('/', function(req, resp){
    resp.sendFile(__dirname + '/views/formulario.html')
});