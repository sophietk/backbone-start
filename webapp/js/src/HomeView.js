var HomeView = Backbone.View.extend({

    id: 'home-view',

    render: function () {
        this.$el.html('<div class="page-header"><h1>HomeView</h1></div>'
            + '<p class="lead">Welcome on the home view.</p>'
            + '<p>The router displays this view when you call <a href="#home">#home route</a>, and it is also the <a href="#whatever">default route</a>.</p>'
            + '<p>Try to make your <a href="#people">own view</a> connected to #people route.</p>'
        );

        return this;
    }

});