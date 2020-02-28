STORE.namespace('STORE.pagination');
STORE.pagination = {
    /* * * * * * * * * * * * * * * * *
     * Pagination
     * javascript page navigation
     * * * * * * * * * * * * * * * * */



    code: '',

    // --------------------
    // Utility
    // --------------------

    // converting initialize data
    Constructor: function (data) {
        data = data || {};
        STORE.pagination.size = data.size;
        STORE.pagination.page = data.page || 1;
        STORE.pagination.step = data.step || 3;
        STORE.pagination.functionClick=data.functionClick;
    },

    // add pages by number (from [s] to [f])
    Add: function (s, f) {
        for (var i = s; i < f; i++) {
            STORE.pagination.code += '<a>' + i + '</a>';
        }
    },

    // add last page with separator
    Last: function () {
        STORE.pagination.code += '<i>...</i><a>' + STORE.pagination.size + '</a>';
    },

    // add first page with separator
    First: function () {
        STORE.pagination.code += '<a>1</a><i>...</i>';
    },
    LastBtn: function () {
        STORE.pagination.page = STORE.pagination.size;
        STORE.pagination.Start();
        STORE.getActivePageCarrousel();
        STORE.pagination.functionClick();
    },
    FirstBtn: function () {
        STORE.pagination.page = 1;
        STORE.pagination.Start();
        STORE.getActivePageCarrousel();
        STORE.pagination.functionClick();
    },


    // --------------------
    // Handlers
    // --------------------

    // change page
    Click: function () {
        STORE.pagination.page = +this.innerHTML;
        STORE.getActivePageCarrousel();
        STORE.pagination.Start();
        STORE.pagination.functionClick();
    },

    // previous page
    Prev: function () {
        STORE.pagination.page--;
        if (STORE.pagination.page < 1) {
            STORE.pagination.page = 1;
        }
        STORE.getActivePageCarrousel();
        STORE.pagination.Start();
        STORE.pagination.functionClick();
    },

    // next page
    Next: function () {
        STORE.pagination.page++;
        if (STORE.pagination.page > STORE.pagination.size) {
            STORE.pagination.page = STORE.pagination.size;
        }
        STORE.getActivePageCarrousel();
        STORE.pagination.Start();
        STORE.pagination.functionClick();
    },


    // --------------------
    // Script
    // --------------------

    // binding pages
    Bind: function () {
        var a = STORE.pagination.e.getElementsByTagName('a');
        for (var i = 0; i < a.length; i++) {
            if (+a[i].innerHTML === STORE.pagination.page) a[i].className = 'current';
            a[i].addEventListener('click', STORE.pagination.Click, false);
        }
    },

    // write pagination
    Finish: function () {
        STORE.pagination.e.innerHTML = STORE.pagination.code;
        STORE.pagination.code = '';
        STORE.pagination.Bind();

    },

    // find pagination type
    Start: function () {
        if (STORE.pagination.size < STORE.pagination.step * 2 + 6) {
            STORE.pagination.Add(1, STORE.pagination.size + 1);
        } else if (STORE.pagination.page < STORE.pagination.step * 2 + 1) {
            STORE.pagination.Add(1, STORE.pagination.step * 2 + 4);
            STORE.pagination.Last();
        } else if (STORE.pagination.page > STORE.pagination.size - STORE.pagination.step * 2) {
            STORE.pagination.First();
            STORE.pagination.Add(STORE.pagination.size - STORE.pagination.step * 2 - 2, STORE.pagination.size + 1);
        } else {
            STORE.pagination.First();
            STORE.pagination.Add(STORE.pagination.page - STORE.pagination.step, STORE.pagination.page + STORE.pagination.step + 1);
            STORE.pagination.Last();
        }
        STORE.pagination.Finish();
    },


    // --------------------
    // Initialization
    // --------------------

    // binding buttons
    Buttons: function (e) {
        var nav = e.getElementsByTagName('a');
        nav[0].addEventListener('click', STORE.pagination.FirstBtn, false);
        nav[1].addEventListener('click', STORE.pagination.Prev, false);
        nav[2].addEventListener('click', STORE.pagination.Next, false);
        nav[3].addEventListener('click', STORE.pagination.LastBtn, false);
    },

    // create skeleton
    Create: function (e) {

        var html = [
            '<a>First;</a>', // previous button
            '<a>&#9668;</a>', // previous button

            '<span></span>',  // pagination container
            '<a>&#9658;</a>', // previous button

            '<a>Last</a>'  // next button
        ];

        e.innerHTML = html.join('');
        STORE.pagination.e = e.getElementsByTagName('span')[0];
        STORE.pagination.Buttons(e);
    },

    // init
    Init: function (e, data) {
        STORE.pagination.Constructor(data);
        STORE.pagination.Create(e);
        STORE.pagination.Start();
    },
    getActivePage: function () {
        return STORE.pagination.page;
    }
};


STORE.getActivePageCarrousel = function () {
    return STORE.pagination.getActivePage();
};

