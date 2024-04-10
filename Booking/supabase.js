import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
        // Primero, inicializa Supabase
        const supabase = createClient('https://gtewqedyzmyneudamaoc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0ZXdxZWR5em15bmV1ZGFtYW9jIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMTg0MDIzNCwiZXhwIjoyMDI3NDE2MjM0fQ.73G9ftJfKNBzBaepT2DWlRCa11usXXbyZD-ZSFT24HM');

        // Luego, captura el evento de envío del formulario
        document.getElementById('finish').addEventListener('click', async (e) => {
            e.preventDefault();
            const form = document.getElementById('ReservarCitaFormulario');
            const formData = new FormData(form);
            const nombre = formData.get('nombre');
            const apellidos = formData.get('apellidos');
            const telefono = formData.get('telefono');
            const estudio = formData.get('estudio');
            const tamaño = formData.get('tamaño');
            const disponibilidad = formData.get('disponibilidad');
            const zona = formData.get('zona');
            const invitación = formData.get('CodigoInvitacion');
            const imageUrl = uploadedImageUrl;

            // Envía los datos a Supabase
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

            // Maneja los errores
            if (error) console.error('Error al insertar datos:', error);
            else Swal.fire({
                title: "Se ha enviado tu solicitud!",
                text: "Pronto serás contactado para confirmar la cita",
                icon: "success"
              });;
        });