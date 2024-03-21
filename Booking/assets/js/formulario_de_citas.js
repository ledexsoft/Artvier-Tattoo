const ReservarCitaFormulario = document.getElementById("ReservarCitaFormulario");
const BtnEnviarFormulario = document.getElementById(BtnEnviarFormulario)

ReservarCitaFormulario.addEventListener("submit", async function (event) {
    event.preventDefault();
    const X = BtnEnviarFormulario.value;

    await addDoc(colection(firestore, "2"), {
        Y: X
    });
} 
);