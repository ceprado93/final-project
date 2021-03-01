# SURF
-------------------------------------------------------------------


## Introducción


-------------------------------------------------------------------
-------------------------------------------------------------------


## Endpoints 

Base Url => `heroku/api`

|       Route        | HTTP Verb |          Description          |
|--------------------|-----------|-------------------------------|
| `/signup` |    POST    | Te registra en la base de datos y te redirige al perfil |
| `/login` |    POST    | Te lleva a tu perfil |
| `/loggedIn` |    GET    | Mantener la sesión iniciada |
| `/logout` |    POST    | Cerrar la sesión y redirigir al inicio |
| `/profile` |    GET    | Al perfil de usuario. |
| `/profile/edit/:id` |    PUT    | Modificar el perfil de usuario en la BBDD |
| `/profile/delete/:id` |    POST    | Dar de baja la cuenta de usuario |
| `/wave` |    GET    | Mostrar los lugares con olas en lista o en mapa |
| `/wave/details/:wave_id` |    GET    | Te lleva a los detalles de la ola |
| `/wave/new` |    POST    | Te crea la ola en la BBDD y redirige al componente waves |
| `/wave/edit/:wave_id` |    PUT    | Te modifica la ola en la BBDD |
| `/wave/delete/:wave_id` |    POST    | Te elimina la ola en la BBDD |


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
- `createdBy` - mongoose.Schema.Types.ObjectId
- `wave` - mongoose.Schema.Types.ObjectId
- `description` - String
- `title` - String

