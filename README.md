# SURF
-------------------------------------------------------------------


## Introducción


**1. Ver los mejores olas y dónde encontrarlas**
**2. Poder llevar un registro de tus baños**
-------------------------------------------------------------------
-------------------------------------------------------------------


## Endpoints 

Base Url : heroku/api

|       Route        | HTTP Verb |          Description          |
|--------------------|-----------|-------------------------------|
| `/signup` |    POST    | Te registra en la base de datos y te redirige al perfil |
| `/login` |    POST    | Te lleva a tu perfil |
| `/loggedIn` |    GET    | Mantener la sesión iniciada |
| `/logout` |    POST    | Cerrar la sesión y redirigir al inicio |
| `/profile` |    GET    | Al perfil de usuario. |
| `/profile/edit/:id` |    PUT    | Modificar el perfil de usuario en la BBDD |
| `/profile/delete/:id` |    POST    | Dar de baja la cuenta de usuario |
| `/waves` |    GET    | Mostrar los lugares con olas en lista o en mapa |
| `/waves/details/:waves_id` |    GET    | Te lleva a los detalles de la ola |
| `/waves/new` |    POST    | Te crea la ola en la BBDD y redirige al componente waves |
| `/waves/edit/:waves_id` |    PUT    | Te modifica la ola en la BBDD |
| `/waves/delete/:waves_id` |    POST    | Te elimina la ola en la BBDD |


-------------------------------------------------------------------


## Modelos

El modelo `User` debe de tener:
- `username` - String
- `password` - String
- `description` - String
- `avatar` - String
- `role` - String


El modelo `Waves` debe de tener:

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
- `rating` - Number
- `createdBy` - mongoose.Schema.Types.ObjectId

