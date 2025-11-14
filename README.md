

## **README.md**

### **Proyecto: Sistema de Usuarios – React (SPA)**

Este proyecto es una aplicación web creada con **React + Vite**, sin SSR, que permite gestionar usuarios, roles y autenticación básica.



🚀 Funcionalidades

* Registro de usuarios
* Login con validación
* Simulación de base de datos con `users.json`
* Context global para manejar sesión (UserContext)
* Página Admin protegida
* Listado de usuarios
* Logout
* Navegación con React Router
* Estilos básicos con CSS



📌 Tecnologías usadas

* React
* Vite
* React Router DOM
* JavaScript
* CSS



📂 Estructura principal

```
src/
 ├─ components/
 ├─ pages/
 ├─ context/
 ├─ services/
 ├─ data/
 └─ styles.css
```

---

### **▶ Cómo ejecutar**

1. Instalar dependencias:

```
npm install
```

2. Ejecutar el proyecto:

```
npm run dev
```

3. Abrir en el navegador:

```
http://localhost:5173
```

---

### **👤 Autenticación**

* Si no hay sesión → no se puede entrar a `/admin`
* Al registrar → se inicia sesión automáticamente
* Logout disponible desde el header

---

Si quieres, te lo hago más largo, más formal o con imágenes.
