// i18n.js — Diccionario central de traducciones Estudio33 (ES = idioma por defecto)
// El HTML está en español; initLanguageFlags()/setLanguage() (basic.html) llaman a
// applyLanguage() para traducir [data-i18n], [data-i18n-alt] y el <title>.
// Para añadir textos nuevos: marcar con data-i18n en el HTML y añadir la clave AQUÍ en es y en.

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
            'alt.cart': 'Carrito'
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
            'alt.cart': 'Cart'
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
        if (val !== undefined) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const val = dict.text[el.getAttribute('data-i18n-alt')];
        if (val !== undefined) el.setAttribute('alt', val);
    });

    const page = location.pathname.split('/').pop() || 'index.html';
    if (dict.titles[page]) document.title = dict.titles[page];
}
