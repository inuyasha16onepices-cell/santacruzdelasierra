document.addEventListener('DOMContentLoaded', () => {
            // 1. Control del menú móvil
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');

            if (mobileMenuBtn && mobileMenu) {
                mobileMenuBtn.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                });

                // Cerrar menú móvil al hacer clic en un enlace
                const mobileLinks = mobileMenu.querySelectorAll('a');
                mobileLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.add('hidden');
                    });
                });
            }

            // 2. Filtro interactivo del Menú de Comidas Típicas
            const filtroBtns = document.querySelectorAll('.filtro-btn');
            const platoCards = document.querySelectorAll('.plato-card');

            filtroBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Actualizar estilos de botones activos
                    filtroBtns.forEach(b => {
                        b.classList.remove('bg-[#007A33]', 'text-white', 'shadow');
                        b.classList.add('bg-[#E6F4EA]', 'text-[#007A33]');
                    });
                    btn.classList.remove('bg-[#E6F4EA]', 'text-[#007A33]');
                    btn.classList.add('bg-[#007A33]', 'text-white', 'shadow');

                    const categoriaSeleccionada = btn.getAttribute('data-categoria');

                    platoCards.forEach(card => {
                        const categoriaPlato = card.getAttribute('data-categoria');
                        if (categoriaSeleccionada === 'todos' || categoriaSeleccionada === categoriaPlato) {
                            card.classList.remove('hidden');
                        } else {
                            card.classList.add('hidden');
                        }
                    });
                });
            });

            // 3. Botón interactivo para mostrar/ocultar la lista de curiosidades
            const toggleBtn = document.getElementById('toggle-curiosidades-btn');
            const listaCuriosidades = document.getElementById('lista-curiosidades');
            const btnText = document.getElementById('btn-text');
            const btnIcon = document.getElementById('btn-icon');

            // Estado inicial: visible para que el usuario vea el contenido de inmediato,
            // y el botón permite ocultarlo o volverlo a mostrar con animación.
            let isVisible = true;
            btnText.textContent = 'Ocultar Curiosidades de Santa Cruz';
            btnIcon.style.transform = 'rotate(180deg)';

            if (toggleBtn && listaCuriosidades) {
                toggleBtn.addEventListener('click', () => {
                    isVisible = !isVisible;

                    if (isVisible) {
                        listaCuriosidades.classList.remove('hidden');
                        // Pequeño retraso para transición de opacidad
                        setTimeout(() => {
                            listaCuriosidades.style.opacity = '1';
                        }, 10);
                        btnText.textContent = 'Ocultar Curiosidades de Santa Cruz';
                        btnIcon.style.transform = 'rotate(180deg)';
                    } else {
                        listaCuriosidades.style.opacity = '0';
                        setTimeout(() => {
                            listaCuriosidades.classList.add('hidden');
                        }, 300);
                        btnText.textContent = 'Mostrar Curiosidades de Santa Cruz';
                        btnIcon.style.transform = 'rotate(0deg)';
                    }
                });
            }
        });
