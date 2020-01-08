const  express  =  require ( ' express ' );
const  aplicación  = express ();  

const  mockUserData = [
	{nombre : ' Mark ' },
	{nombre : ' Jill ' }
]

aplicación . get ( ' / users ' , function ( req , res ) {
	 res . json ({
		éxito :  verdadero ,
		mensaje :  ' consiguió usuarios con éxito. ¡Agradable! ' ,
		usuarios : mockUserData
	})
})

aplicación . listen ( 8000 , function () { console . log ( 'el servidor está escuchando ' )})