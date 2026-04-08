/**
 * El Ranchito - Restaurante
 * Script principal del sitio web
 */
'use strict';

(() => {
  // =========================================================================
  // 1. Efecto de scroll en la barra de navegacion
  // =========================================================================
  const navbar = document.getElementById('navbar');

  const handleNavbarScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  };

  window.addEventListener('scroll', handleNavbarScroll);

  // =========================================================================
  // 2. Menu movil (toggle hamburguesa)
  // =========================================================================
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('navbar__nav--open');
      navToggle.classList.toggle('navbar__toggle--active');
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Cerrar menu al hacer clic en un enlace
    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('navbar__nav--open');
        navToggle.classList.remove('navbar__toggle--active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // =========================================================================
  // 3. Scroll suave con offset para enlaces internos
  // =========================================================================
  const SCROLL_OFFSET = 70;

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // =========================================================================
  // 4. Pestanas del menu de platillos
  // =========================================================================
  const menuTabs = document.querySelectorAll('.menu__tab');
  const menuCategories = document.querySelectorAll('.menu__category');

  menuTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      // Desactivar todas las pestanas
      menuTabs.forEach((t) => t.classList.remove('menu__tab--active'));
      tab.classList.add('menu__tab--active');

      // Ocultar todas las categorias y mostrar la seleccionada
      const category = tab.dataset.category;
      menuCategories.forEach((cat) => {
        cat.classList.remove('menu__category--active');
        if (cat.dataset.category === category) {
          cat.classList.add('menu__category--active');
        }
      });
    });
  });

  // =========================================================================
  // 5. Validacion del formulario de reservaciones
  // =========================================================================
  const reservationForm = document.getElementById('reservationForm');
  const reservationStatus = document.getElementById('reservationStatus');

  /**
   * Muestra error en un campo de entrada
   * @param {HTMLElement} input - Campo de formulario
   */
  const setError = (input) => input.classList.add('input--error');

  /**
   * Limpia el error de un campo al escribir
   */
  const clearErrorOnInput = (input) => {
    input.addEventListener('input', () => input.classList.remove('input--error'));
  };

  if (reservationForm) {
    // Limpiar errores en tiempo real
    reservationForm.querySelectorAll('input, select').forEach(clearErrorOnInput);

    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      const nombre = reservationForm.querySelector('#nombre') ||
                     reservationForm.querySelector('[name="nombre"]');
      const telefono = reservationForm.querySelector('#telefono') ||
                       reservationForm.querySelector('[name="telefono"]');
      const comensales = reservationForm.querySelector('#comensales') ||
                         reservationForm.querySelector('[name="comensales"]');
      const fecha = reservationForm.querySelector('#fecha') ||
                    reservationForm.querySelector('[name="fecha"]');
      const hora = reservationForm.querySelector('#hora') ||
                   reservationForm.querySelector('[name="hora"]');

      // Validar nombre (requerido, minimo 2 caracteres)
      if (!nombre || nombre.value.trim().length < 2) {
        setError(nombre);
        valid = false;
      }

      // Validar telefono (requerido)
      if (!telefono || !telefono.value.trim()) {
        setError(telefono);
        valid = false;
      }

      // Validar comensales (requerido, entre 1 y 20)
      const numComensales = parseInt(comensales?.value, 10);
      if (!comensales || isNaN(numComensales) || numComensales < 1 || numComensales > 20) {
        setError(comensales);
        valid = false;
      }

      // Validar fecha (requerida, hoy o posterior)
      if (!fecha || !fecha.value) {
        setError(fecha);
        valid = false;
      } else {
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        const fechaSeleccionada = new Date(fecha.value + 'T00:00:00');
        if (fechaSeleccionada < hoy) {
          setError(fecha);
          valid = false;
        }
      }

      // Validar hora (requerida)
      if (!hora || !hora.value) {
        setError(hora);
        valid = false;
      }

      if (!valid) return;

      // Exito: mostrar mensaje de confirmacion
      if (reservationStatus) {
        reservationStatus.classList.add('reservation-status--success');
        reservationStatus.textContent =
          '\u00a1Reserva confirmada! Te enviaremos un mensaje de confirmación al teléfono proporcionado.';
      }

      // Reiniciar formulario despues de 3 segundos
      setTimeout(() => {
        reservationForm.reset();
        if (reservationStatus) {
          reservationStatus.classList.remove('reservation-status--success');
          reservationStatus.textContent = '';
        }
      }, 3000);
    });
  }

  // =========================================================================
  // 6. Calculadora de cotizacion para eventos
  // =========================================================================
  const eventGuests = document.getElementById('eventGuests');
  const quoteBreakdown = document.getElementById('quoteBreakdown');
  const quoteTotal = document.getElementById('quoteTotal');
  const serviceCheckboxes = document.querySelectorAll('.events__services input[type="checkbox"]');

  /**
   * Definicion de servicios con su logica de precio
   * id: corresponde al id del checkbox
   * label: nombre visible del servicio
   * perGuest: true si el precio se multiplica por invitados
   * price: precio base (por invitado o fijo)
   */
  const SERVICES = [
    { id: 'svcBasic',   label: 'Paquete Básico',     perGuest: true,  price: 350 },
    { id: 'svcPremium', label: 'Paquete Premium',     perGuest: true,  price: 550 },
    { id: 'svcBar',     label: 'Barra de Bebidas',    perGuest: true,  price: 200 },
    { id: 'svcDecor',   label: 'Decoración',          perGuest: false, price: 5000 },
    { id: 'svcMusic',   label: 'Música en Vivo',      perGuest: false, price: 8000 },
    { id: 'svcWaiters', label: 'Meseros Adicionales',  perGuest: false, price: 1500 },
  ];

  /**
   * Formatea un numero con comas como separador de miles
   * @param {number} num
   * @returns {string} Numero formateado con signo de peso
   */
  const formatCurrency = (num) => {
    return '$' + num.toLocaleString('en-US');
  };

  /**
   * Calcula y actualiza la cotizacion en tiempo real
   */
  const calculateQuote = () => {
    if (!quoteBreakdown || !quoteTotal) return;

    const guests = parseInt(eventGuests?.value, 10) || 0;

    // Determinar cuales servicios estan seleccionados
    const checkedIds = new Set();
    serviceCheckboxes.forEach((cb) => {
      if (cb.checked) checkedIds.add(cb.id);
    });

    // Si Premium esta seleccionado, ignorar Basico (Premium prevalece)
    const basicChecked = checkedIds.has('svcBasic');
    const premiumChecked = checkedIds.has('svcPremium');

    let total = 0;
    const breakdownItems = [];

    SERVICES.forEach((svc) => {
      if (!checkedIds.has(svc.id)) return;

      // Si ambos paquetes estan marcados, solo contar Premium
      if (svc.id === 'svcBasic' && premiumChecked) return;

      const amount = svc.perGuest ? guests * svc.price : svc.price;
      total += amount;

      breakdownItems.push({ label: svc.label, amount });
    });

    // Actualizar desglose visual
    quoteBreakdown.innerHTML = '';
    breakdownItems.forEach((item) => {
      const div = document.createElement('div');
      div.className = 'events__breakdown-item';
      div.innerHTML = `<span>${item.label}</span><span>${formatCurrency(item.amount)}</span>`;
      quoteBreakdown.appendChild(div);
    });

    // Actualizar total
    quoteTotal.textContent = formatCurrency(total);
  };

  // Escuchar cambios en el numero de invitados y en los checkboxes
  if (eventGuests) {
    eventGuests.addEventListener('input', calculateQuote);
  }

  serviceCheckboxes.forEach((cb) => {
    cb.addEventListener('change', calculateQuote);
  });

  // Calcular estado inicial
  calculateQuote();

  // =========================================================================
  // 7. Animaciones de aparicion al hacer scroll (fade-in)
  // =========================================================================
  const fadeElements = document.querySelectorAll('.fade-in');

  if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in--visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    fadeElements.forEach((el) => fadeObserver.observe(el));
  }

  // =========================================================================
  // 8. Resaltado del enlace activo en la navegacion segun la seccion visible
  // =========================================================================
  const navLinks = document.querySelectorAll('.navbar__link');
  const sections = [];

  // Recopilar secciones que tienen un enlace correspondiente en la navegacion
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      const section = document.querySelector(href);
      if (section) {
        sections.push({ el: section, link });
      }
    }
  });

  const highlightActiveLink = () => {
    if (sections.length === 0) return;

    const scrollPos = window.scrollY + SCROLL_OFFSET + 1;
    let currentSection = null;

    // Encontrar la seccion actualmente visible
    sections.forEach(({ el, link }) => {
      if (el.offsetTop <= scrollPos) {
        currentSection = link;
      }
    });

    navLinks.forEach((link) => link.classList.remove('navbar__link--active'));
    if (currentSection) {
      currentSection.classList.add('navbar__link--active');
    }
  };

  window.addEventListener('scroll', highlightActiveLink);

  // Ejecutar al cargar la pagina
  handleNavbarScroll();
  highlightActiveLink();
})();
