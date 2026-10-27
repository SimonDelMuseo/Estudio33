// i18n.js — Diccionario central de traducciones Estudio33 (ES = idioma por defecto)
// El HTML está en español; initLanguageFlags()/setLanguage() (basic.html) llaman a
// applyLanguage() para traducir [data-i18n], [data-i18n-alt] y el <title>.
// Para añadir textos nuevos: marcar con data-i18n en el HTML y añadir la clave AQUÍ en es y en.
// Se admite HTML inline en los valores (<strong>, <em>, clases) — se inserta con innerHTML.

const I18N = {
    es: {
        text: {
            'nav.services': 'SERVICIOS',
            'nav.obs': 'RECURSOS OBS',
            'nav.about': 'SOBRE NOSOTROS',
            'nav.contact': 'CONTACTO',
            'nav.support': 'SOPORTE',
            'nav.plugins': 'PLUGINS',
            'nav.sources': 'FUENTES',
            'nav.shaders': 'SHADERS',
            'nav.scripts': 'SCRIPTS',
            'nav.themes': 'TEMAS',
            'sub.slogan': 'Desarrollo de proyectos audiovisuales y de diseño',
            'footer.prefix': 'Web diseñada por ',
            'footer.suffix': ' para Estudio33',
            'alt.cart': 'Carrito',
            'about.p1': 'Llevamos <strong>una década</strong> desarrollando proyectos y nunca hemos parado de estudiar y adaptarnos a los nuevos recursos. Nuestra especialidad es el diseño de programas para transmisiones en directo y la realización de los mismos. Nos encargamos del diseño de todos los recursos necesarios y los adecuamos a las características técnicas que requiera el proyecto.',
            'about.p2': 'Nuestra prioridad es trabajar con <strong>aplicaciones de código abierto</strong> siempre que sea posible. A diferencia de lo que se pueda pensar en un principio, los proyectos finalizados alcanzan una solidez que ofrece al usuario la tranquilidad de controlar un proyecto estable y equilibrado con una calidad profesional.',
            'about.p3': 'Siempre estamos abiertos a escuchar vuestros proyectos, y en asesoraros si fuera posible, pero no desarrollamos todos los proyectos que nos llegan por mucho dinero que ofrezcan para el desarrollo. Tenemos que sentirnos afinados con el proyecto para poder aceptar su desarrollo. En Estudio33 sólo abordamos <strong>un proyecto al mismo tiempo</strong>.',
            'about.svc1': 'Podemos dejar tu OBS <strong>totalmente optimizado</strong> para tu producción.',
            'about.svc2': 'Dependiendo de la complejidad del proyecto también programamos la botonera para el control de OBS.',
            'about.svc3': 'Si el proyecto lo hemos desarrollado en Estudio33, contamos con los medios necesarios para producir la realización en remoto a 1920x1080 (full HD) a 60fps.',
            'about.customLead': 'Podemos encargarnos de la personalización de:',
            'about.custom1': 'Diseño de transiciones.',
            'about.custom2': 'Diseño y gestión de sonido.',
            'about.custom3': 'Diseño de tercios/rótulos.',
            'about.custom4': 'Diseño de intros/salidas.',
            'about.custom5': 'Diseño de publicidad emergente.',
            'about.custom6': 'Colecciones de escenas.',
            'about.custom7': 'Efectos de animación.',
            'about.custom8': 'Integración de elementos de proveedores externos (chat, teléfono, etc...).',
            'about.p4': 'En definitiva podemos producir transmisiones en vivo desde el principio de su desarrollo hasta su finalización, <em>y más allá, la realización</em>, todo ello de forma sólida y con calidad profesional.',
            'about.h2': 'PROYECTOS QUE ENCAJAN CON NUESTRO ESPÍRITU.',
            'about.fit1': 'Programa en directo.',
            'about.fit2': 'Eventos en directo.',
            'about.fit3': 'Seminarios y clases online.',
            'about.fit4': 'Realización de directos <em>(producidos anteriormente por nosotros)</em>.',
            'about.fit5': 'Edición de video <em>(podemos hacerlo, pero solemos descartarlos porque nos aburre)</em>.',
            'about.p5': 'Aquí en la web podrás descargar algunos recursos de OBS totalmente gratis. Suscríbete a nuestra newsletter, tienes nuestro compromiso de no bombardearte el correo, pero te mantendremos al tanto si subimos algún video a YouTube o hemos actualizado alguno de los plugins de OBS.',
            'about.p6': 'En Estudio33 somos <strong>obsesivos con los compromisos adquiridos</strong> y su cumplimiento. Detestamos la mentira y el engaño, pero admiramos la buena voluntad y el ánimo de cooperación.',
            'about.p7': 'Envía un correo a <strong>Simón del Museo</strong> para plantearle tu idea, con que medios cuentas y tus necesidades. <strong class="e33-text-accent">Contesta siempre.</strong>'
        },
        titles: {
            'index.html': 'Estudio33 - Inicio',
            'services.html': 'Estudio33 - Servicios',
            'obs-resources.html': 'Estudio33 - Recursos OBS',
            'plugins.html': 'Estudio33 - Plugins',
            'sources.html': 'Estudio33 - Fuentes',
            'shaders.html': 'Estudio33 - Shaders',
            'scripts.html': 'Estudio33 - Scripts',
            'themes.html': 'Estudio33 - Temas',
            'about-us.html': 'Estudio33 - Sobre nosotros',
            'contact.html': 'Estudio33 - Contacto',
            'basic.html': 'Estudio33 - Plataforma Web'
        }
    },
    en: {
        text: {
            'nav.services': 'SERVICES',
            'nav.obs': 'OBS RESOURCES',
            'nav.about': 'ABOUT US',
            'nav.contact': 'CONTACT',
            'nav.support': 'SUPPORT',
            'nav.plugins': 'PLUGINS',
            'nav.sources': 'SOURCES',
            'nav.shaders': 'SHADERS',
            'nav.scripts': 'SCRIPTS',
            'nav.themes': 'THEMES',
            'sub.slogan': 'Development of audiovisual and design projects',
            'footer.prefix': 'Web designed by ',
            'footer.suffix': ' for Estudio33',
            'alt.cart': 'Cart',
            'about.p1': 'For a decade we have been developing projects and we have never stopped studying and adapting to new resources. Our specialty is designing programs for live broadcasts and producing them. We design all the necessary resources and adapt them to the technical specifications the project requires.',
            'about.p2': 'Our priority is to work with open-source applications whenever possible. Contrary to what might first appear, finished projects reach a solidity that gives the user the peace of mind of running a stable, balanced project with professional quality.',
            'about.p3': 'We are always open to hearing your projects, and to advising you if possible, but we do not develop every project that reaches us no matter how much money is offered for the development. We need to feel in tune with the project in order to accept it. At Estudio33 we only take on <strong>one project at a time</strong>.',
            'about.svc1': 'We can leave your OBS <strong>totally optimized</strong> for your production.',
            'about.svc2': 'Depending on the complexity of the project, we also program the button panel for controlling OBS.',
            'about.svc3': 'If we developed the project at Estudio33, we have the means to produce it remotely at 1920x1080 (full HD) at 60fps.',
            'about.customLead': 'We can take care of personalizing:',
            'about.custom1': 'Transition design.',
            'about.custom2': 'Sound design and management.',
            'about.custom3': 'Lower thirds and titles design.',
            'about.custom4': 'Intro and outro design.',
            'about.custom5': 'Pop-up advertising design.',
            'about.custom6': 'Scene collections.',
            'about.custom7': 'Animation effects.',
            'about.custom8': 'Integration of elements from external providers (chat, phone, etc...).',
            'about.p4': 'In short, we can produce live broadcasts from the beginning of their development to their completion, <em>and beyond, the live production itself</em>, all of it in a solid way and with professional quality.',
            'about.h2': 'PROJECTS THAT FIT OUR SPIRIT.',
            'about.fit1': 'Live programs.',
            'about.fit2': 'Live events.',
            'about.fit3': 'Seminars and online classes.',
            'about.fit4': 'Live production <em>(previously produced by us)</em>.',
            'about.fit5': 'Video editing <em>(we can do it, but we usually drop them because they bore us)</em>.',
            'about.p5': 'Here on the website you will be able to download some totally free OBS resources. Subscribe to our newsletter: we promise not to bombard your inbox, but we will keep you posted if we upload a video to YouTube or have updated one of the OBS plugins.',
            'about.p6': 'At Estudio33 we are <strong>obsessive about the commitments we make</strong> and about fulfilling them. We detest lies and deceit, but we admire goodwill and the spirit of cooperation.',
            'about.p7': 'Send an email to <strong>Simón del Museo</strong> to lay out your idea, what resources you have and your needs. <strong class="e33-text-accent">He always answers.</strong>'
        },
        titles: {
            'index.html': 'Estudio33 - Home',
            'services.html': 'Estudio33 - Services',
            'obs-resources.html': 'Estudio33 - OBS Resources',
            'plugins.html': 'Estudio33 - Plugins',
            'sources.html': 'Estudio33 - Sources',
            'shaders.html': 'Estudio33 - Shaders',
            'scripts.html': 'Estudio33 - Scripts',
            'themes.html': 'Estudio33 - Themes',
            'about-us.html': 'Estudio33 - About Us',
            'contact.html': 'Estudio33 - Contact',
            'basic.html': 'Estudio33 - Web Platform'
        }
    }
};

function applyLanguage(lang) {
    const dict = I18N[lang] || I18N.es;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const val = dict.text[el.getAttribute('data-i18n')];
        if (val !== undefined) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const val = dict.text[el.getAttribute('data-i18n-alt')];
        if (val !== undefined) el.setAttribute('alt', val);
    });

    const page = location.pathname.split('/').pop() || 'index.html';
    if (dict.titles[page]) document.title = dict.titles[page];
}
