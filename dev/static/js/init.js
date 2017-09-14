(function ()
{
    if (!(window.TV && window.TV.Core))
    {
        if (!window.TVCoreLoad)
        {
            var tourvisorfindGET = function (name, search)
            {
                var result = false,
                    tmp = [];
                search = search !== undefined ? search : location.search;

                search
                    //.replace ( "?", "" ) 
                    // this is better, there might be a question mark inside
                    .substr(1)
                    .split('&')
                    .forEach(function (item)
                    {
                        tmp = item.split('=');
                        if (tmp[0] === name) result = decodeURIComponent(tmp[1]);
                    });
                return result;
            };

            window.TVCoreLoad = true;

            var js = document.createElement('script'),
                head = document.head || document.getElementsByTagName('head')[0],
                folder = '';

            if (tourvisorfindGET('tvtest') == 'ok')
                folder = 'test/';

            js.setAttribute('type', 'text/javascript');
            js.setAttribute('charset', 'utf-8');
            js.setAttribute('src', '//tourvisor.ru/module/newform/modules/' + folder + 'core.min.js?v=126');
            head.insertBefore(js, head.firstChild);

            if (js.onload === null)
            {
                js.onload = function ()
                {
                    TV.loadModules();
                };
            }
            else
            {
                js.onreadystatechange = function ()
                {
                    if (this.readyState == 'complete')
                    {
                        TV.loadModules();
                    }
                };
            }
        }
    }
    else
    {
        TV.loadModules();
    }
})();
