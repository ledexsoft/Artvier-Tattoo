import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Inicializa Supabase
const supabase = createClient(
  'https://gtewqedyzmyneudamaoc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0ZXdxZWR5em15bmV1ZGFtYW9jIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMTg0MDIzNCwiZXhwIjoyMDI3NDE2MjM0fQ.73G9ftJfKNBzBaepT2DWlRCa11usXXbyZD-ZSFT24HM'
);

// Captura el evento de envío del formulario
document.getElementById('finish').addEventListener('click', async (e) => {
    e.preventDefault();
    const form = document.getElementById('ReservarCitaFormulario');
    const formData = new FormData(form);
  
    // Obtener valores de los campos del formulario
    const nombre = formData.get('nombre');
    const apellidos = formData.get('apellidos');
    const telefono = formData.get('telefono');
    const tamaño = formData.get('tamaño');
    const zona = formData.get('zona');
    const invitación = formData.get('CodigoInvitacion');
    const imageUrl = uploadedImageUrl;
  
    // Obtener y convertir el valor de disponibilidad
    const disponibilidadSelect = formData.get('AgendaAbierta');
    let disponibilidad;
    if (disponibilidadSelect === "Si, estoy dispinible cualquier día") {
      disponibilidad = true;
    } else if (disponibilidadSelect === "No, solo días específicos") {
      disponibilidad = false;
    } else {
      console.error("Opción de disponibilidad no válida:", disponibilidadSelect);
      disponibilidad = null;
    }
  
    // Obtener el valor del estudio directamente del input hidden
    const estudioInput = document.getElementById('estudioInput');
    const estudio = estudioInput.value; 
  
    // Enviar datos a Supabase
    var { data, error } = await supabase
      .from('Solicitud de citas')
      .insert([
        {
          nombre: nombre,
          apellidos: apellidos,
          telefono: telefono,
          imageUrl: imageUrl,
          estudio: estudio,
          tamaño: tamaño,
          zona: zona,
          disponibilidad: disponibilidad,
          invitación: invitación,
        },
      ]);
  
    // Manejar errores
    if (error) console.error('Error al insertar datos:', error);
    else
      Swal.fire({
        title: 'Se ha enviado tu solicitud!',
        text: 'Pronto serás contactado por WhatsApp para confirmar la cita desde el # +53 56093974',
        icon: 'success',
      });
  });
  
  // Actualizar valor del input hidden al seleccionar una opción de estudio
  const estudioInput = document.getElementById('estudioInput');
  const estudioDiv = document.getElementById('estudio');
  estudioDiv.querySelectorAll('input[name="type"]').forEach(opcion => {
    opcion.addEventListener('change', () => {
      if (opcion.checked) {
        estudioInput.value = opcion.value;
      }
    });
  });