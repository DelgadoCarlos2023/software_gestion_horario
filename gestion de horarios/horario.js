function asignarAsignatura(celdaId, asignatura) {
    var celda = document.getElementById(celdaId);
    if (celda !== null) {
        celda.value = asignatura;
    }
}

var ingresarHorarioBtn = document.getElementById("ingresar-horario-btn");

if (ingresarHorarioBtn) {
    ingresarHorarioBtn.addEventListener("click", function () {
        var confirmarIngreso = confirm("¿Desea ingresar los nombres de las asignaturas?");
        if (confirmarIngreso) {
            // Ingrese las asignaturas del dia lunes
            asignarAsignatura("lunes_7_8", prompt("Ingrese la asignatura para el lunes de 7:00 a 8:00"));
            asignarAsignatura("lunes_8_9", prompt("Ingrese la asignatura para el lunes de 8:00 a 9:00"));
            asignarAsignatura("lunes_9_10", prompt("Ingrese la asignatura para el lunes de 9:00 a 10:00"));
            asignarAsignatura("lunes_10_11", prompt("Ingrese la asignatura para el lunes de 10:00 a 11:00"));
            asignarAsignatura("lunes_11_12", prompt("Ingrese la asignatura para el lunes de 11:00 a 12:00"));
            asignarAsignatura("lunes_12_13", prompt("Ingrese la asignatura para el lunes de 12:00 a 13:00"));
            // Ingresa las asignaturas del dia martes
            asignarAsignatura("martes_7_8", prompt("Ingrese la asignatura para el martes de 7:00 a 8:00"));
            asignarAsignatura("martes_8_9", prompt("Ingrese la asignatura para el martes de 8:00 a 9:00"));
            asignarAsignatura("martes_9_10", prompt("Ingrese la asignatura para el martes de 9:00 a 10:00"));
            asignarAsignatura("martes_10_11", prompt("Ingrese la asignatura para el martes de 10:00 a 11:00"));
            asignarAsignatura("martes_11_12", prompt("Ingrese la asignatura para el martes de 11:00 a 12:00"));
            asignarAsignatura("martes_12_13", prompt("Ingrese la asignatura para el martes de 12:00 a 13:00"));
            // Ingresa las asignaturas del dia miercoles
            asignarAsignatura("miercoles_7_8", prompt("Ingrese la asignatura para el miercoles de 7:00 a 8:00"));
            asignarAsignatura("miercoles_8_9", prompt("Ingrese la asignatura para el miercoles de 8:00 a 9:00"));
            asignarAsignatura("miercoles_9_10", prompt("Ingrese la asignatura para el miercoles de 9:00 a 10:00"));
            asignarAsignatura("miercoles_10_11", prompt("Ingrese la asignatura para el miercoles de 10:00 a 11:00"));
            asignarAsignatura("miercoles_11_12", prompt("Ingrese la asignatura para el miercoles de 11:00 a 12:00"));
            asignarAsignatura("miercoles_12_13", prompt("Ingrese la asignatura para el miercoles de 12:00 a 13:00"));
            // Ingresa las asignaturas del dia jueves
            asignarAsignatura("jueves_7_8", prompt("Ingrese la asignatura para el jueves de 7:00 a 8:00"));
            asignarAsignatura("jueves_8_9", prompt("Ingrese la asignatura para el jueves de 8:00 a 9:00"));
            asignarAsignatura("jueves_9_10", prompt("Ingrese la asignatura para el jueves de 9:00 a 10:00"));
            asignarAsignatura("jueves_10_11", prompt("Ingrese la asignatura para el jueves de 10:00 a 11:00"));
            asignarAsignatura("jueves_11_12", prompt("Ingrese la asignatura para el jueves de 11:00 a 12:00"));
            asignarAsignatura("jueves_12_13", prompt("Ingrese la asignatura para el jueves de 12:00 a 13:00"));
            // Ingresa las asignaturas del dia viernes
            asignarAsignatura("viernes_7_8", prompt("Ingrese la asignatura para el viernes de 7:00 a 8:00"));
            asignarAsignatura("viernes_8_9", prompt("Ingrese la asignatura para el viernes de 8:00 a 9:00"));
            asignarAsignatura("viernes_9_10", prompt("Ingrese la asignatura para el viernes de 9:00 a 10:00"));
            asignarAsignatura("viernes_10_11", prompt("Ingrese la asignatura para el viernes de 10:00 a 11:00"));
            asignarAsignatura("viernes_11_12", prompt("Ingrese la asignatura para el viernes de 11:00 a 12:00"));
            asignarAsignatura("viernes_12_13", prompt("Ingrese la asignatura para el viernes de 12:00 a 13:00"));
        }
    });
}
