require('dotenv').config();

const app=require('./app')
require('./databases')

const main=()=>{
    const port=(app.get('port'))
    app.listen(port,()=>{
        console.log('servidor corriendo en el puerto: '+port)
    })
}
main()
