//crear un documento 
// Documentos -> Objetos de tipo JSON

user1 = {
    'username':'user1',
    'age':27,
    'email':'user1@gmail.com'
};

//Insertaremos este objeto en la collección 
//base de datos.nombre de collección. metodo insert()

db.users.insert(user1);

//si queremos ingresar un nuevo documento en una collección se validan los siguientes datos
//1- Que la base de datos existacion
//2- Que la colección exista

user2 = {
    'username':'user2',
    'age':30,
    'email':'user2@gmail.com'
};