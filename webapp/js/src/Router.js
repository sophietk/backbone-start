var Router = Backbone.Router.extend({

    routes: {
        'home': 'goHome',
        '*path': 'goHome'
    },

    goHome: function () {
        $('#content').html(new HomeView().render().el);
    }

});