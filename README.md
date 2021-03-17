# WAVE MAPS
-------------------------------------------------------------------


![](wavemaps.gif)


-------------------------------------------------------------------
-------------------------------------------------------------------


## Endpoints 

Base Url => `heroku/api`

|       Route        | HTTP Verb |          Description          |
|--------------------|-----------|-------------------------------|
| `/signup` |    POST    | Registrar en la base de datos y te redirigir al perfil |
| `/login` |    POST    | Ir a tu perfil |
| `/loggedIn` |    GET    | Mantener la sesión iniciada |
| `/logout` |    POST    | Cerrar la sesión y redirigir al inicio |
| `/profile` |    GET    | Ir al perfil de usuario. |
| `/profile/edit/:id` |    PUT    | Modificar el perfil de usuario en la BBDD |
| `/profile/delete/:id` |    POST    | Dar de baja la cuenta de usuario |
| `/wave` |    GET    | Mostrar los lugares con olas en lista o en mapa |
| `/wave/details/:wave_id` |    GET    | Mostrar a los detalles de la ola |
| `/wave/new` |    POST    | Crear la ola en la BBDD y redirigir al componente waves |
| `/wave/edit/:wave_id` |    PUT    | Modificar la ola en la BBDD |
| `/wave/delete/:wave_id` |    POST    | Eliminar la ola en la BBDD |


-------------------------------------------------------------------


## Modelos

El modelo `User` debe tener:
- `username` - String
- `password` - String
- `description` - String
- `avatar` - String
- `role` - String


El modelo `Wave` debe tener:

- `title` - String
- `description` - String
- `image` - String
- `location` - String
- `type` - String
- `seaBed` - String
- `swellDirections` - String
- `windDirections` - String
- `swellRange` - String
- `swellConsistency` - String
- `crowd` - String
- `quality` - Number
- `createdBy` - mongoose.Schema.Types.ObjectId

El modelo `Comment` debe tener:
- `writtenBy` - mongoose.Schema.Types.ObjectId
- `wave` - mongoose.Schema.Types.ObjectId
- `description` - String
- `title` - String

