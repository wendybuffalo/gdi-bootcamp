var ourApp = {
    init: function ()
    {
        $('#btnLogin').click(ourApp.login);
    },

    login: function ()
    {
        $('#user-status').addClass('logged-in').text('Logged In');
        $(this).text('Logout');
        $(this).off('click').click(ourApp.logout);
    },

    logout: function ()
    {
        $('#user-status').removeClass('logged-in').text('Logged Out');
        $(this).text('Login');
        $(this).off('click').click(ourApp.login);
    }
};

$(ourApp.init);
