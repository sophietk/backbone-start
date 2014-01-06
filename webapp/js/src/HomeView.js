var HomeView = Backbone.View.extend({

    id: 'home-view',

    render: function () {
        var template = $("#homeview-tutorial-tpl").html();
        this.$el.html(template);

        return this;
    }

});