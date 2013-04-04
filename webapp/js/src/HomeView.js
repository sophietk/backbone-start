var HomeView = Backbone.View.extend({

    id: 'home-view',

    render: function () {
        this.$el.html('<div class="page-header"><h1>HomeView</h1></div>'
            + '<p class="lead">Welcome on the home view.</p>'
            + '<p>The <span class="router">router</span> displays this view when you call <a href="#home">#home</a> route, and it is also the <a href="#whatever">default route</a>.</p>'
            + '<p>Here is the application we want to build :</p>'
            + '<img src="img/diagram.png" alt="Backbone app diagram">'
            + '<ol>'
            + '<li>Try to make your own <span class="view">view</span> (PeopleView) connected to <a href="#people">#people</a> route.</li>'
            + '<li>In this view, call a new <span class="collection">collection</span> (PeopleCollection) that fetches the <a href="/people">/people</a> url resources.</li>'
            + '</ol>'
        );

        return this;
    }

});