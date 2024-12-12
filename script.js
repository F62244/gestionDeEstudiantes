let alumnos=[
    {
        "nombre": "Ana",
        "edad": 28,
        "calificaciones": [3,9,10,10],
    }, 
    {   "nombre": "Luis",
        "edad": 30,
        "calificaciones": [4,5,5,6],
    }, 
    {   "nombre": "María",
        "edad": 34,
        "calificaciones": [8,10,10,9.2],
    }, 
    {   "nombre": "Carlos",
        "edad": 32,
        "calificaciones": [9,3,8,4],
    }, 
    {   "nombre": "Sofía",
        "edad": 40,
        "calificaciones": [9.6,9.6,9.3,9.9],
    },
    {   "nombre": "Pedro",
        "edad": 38,
        "calificaciones": [9,8,4,7],
    },];


    function promediar(){
        let estudiantes = document.querySelector(".estudiantes");
        let estudiantesAprobados = document.querySelector(".estudiantesAprobados");
        let estudiantesDesaprobados = document.querySelector(".estudiantesDesaprobados");
        

        for(i=0; i < alumnos.length; i++){
                let promedio = ((alumnos[i].calificaciones[0]+alumnos[i].calificaciones[1]+alumnos[i].calificaciones[2]+alumnos[i].calificaciones[3])/alumnos[i].calificaciones.length);
                alumnos[i].promedio;
                estudiantes.innerHTML += alumnos[i].nombre + " tiene un promedio de " + "<b>"+ promedio + "."+"</b>" + "<br>";
                 console.log(alumnos[i].nombre + " tiene un promedio de " + promedio);
            
                if(promedio >=7){
                    estudiantesAprobados.innerHTML += `<li style="color: green;">${alumnos[i].nombre} </li>`;
                    console.log(alumnos[i].nombre + " aprobó la materia. ¡Va muy bien!");
                    console.log("");
                    
                }else{
                    estudiantesDesaprobados.innerHTML += `<li style="color: red;">${alumnos[i].nombre} </li>`;
                    console.log(alumnos[i].nombre + " desaprobó la materia. ¡Debe seguir estudiando!");
                    console.log("");
                }
            }
}
        let alumnosNombres = document.querySelector(".alumnosNombres");

        function mostrarNombreAlumnos(){

            for(let i=0; i < alumnos.length; i++){

            alumnosNombres.innerHTML += `${alumnos[i].nombre} <button class="btnInfo" data-index="${i} ">Más información</button> <p class="informacion"></p> <br>`;
            }            
        
        const botones = document.querySelectorAll(".btnInfo");
        const informacion = document.querySelectorAll(".informacion");
    
        botones.forEach((boton)=>{
            boton.addEventListener("click", function(){
                const index = parseInt(this.dataset.index.trim(),10);
                informacion[index].innerHTML = "Edad: " + alumnos[index].edad + "." + "<br> Calificaciones: " + `<b>${alumnos[index].calificaciones.join(", ")}</b>` + ".";
                console.log("Datos de " + alumnos[index].nombre + ": " + "Edad: " + alumnos[index].edad + ". " + "Calificaciones: " + alumnos[index].calificaciones.join(", ") + ".");
            })
        })
    }
       