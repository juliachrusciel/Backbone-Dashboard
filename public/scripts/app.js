$(document).ready(function(event) {

  var halfCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-half shadow",
    template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      $('body').append(this.$el);
      var row = $('.row')[1];
      $(row).append(this.$el);
    }
  });

  var data = { title: "First-half", content: "Do, a deer, a female deer", id: "first-half"};
  var newCard = new halfCardView(data);

  var dataTwo = { title: "Second-half", content: "Re, a drop of golden sun", id: "second-half"};
  var anotherCard = new halfCardView(dataTwo);

  var thirdCardView = Backbone.View.extend({
    tagName: "article",
    className: "block-third shadow",
    template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      $('body').append(this.$el);
      var row = $('.row')[2];
      $(row).append(this.$el);
    }
  });

  var dataThree = { title: "First-third", content: "Me, a name I call myself", id: "first-third"};
  var thirdCard = new thirdCardView(dataThree);

  var dataFour = { title: "Second-third", content: "Fa, a long, long way to run", id: "second-third"};
  var anotherCard = new thirdCardView(dataFour);

  var dataFive = { title: "Third-third", content: "So, a needle pulling thread", id: "third-third"};
  var anotherCard = new thirdCardView(dataFive);

  var quarterCardView = Backbone.View.extend({
    tagName: "article",
    className: "block-quarter shadow",
    template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      $('body').append(this.$el);
      var row = $('.row')[3];
      $(row).append(this.$el);
    }
  });

  var dataSix = { title: "First-quarter", content: "La, a note to follow so", id: "first-quarter"}
  var fourCard = new quarterCardView(dataSix);

  var dataSeven = { title: "Second-quarter", content: "Ti, a drink with jam and bread", id: "second-quarter"};
  var anotherCard = new quarterCardView(dataSeven);

  var dataEight = { title: "Third-quarter", content: "And that leads us back to do, do, do, do.", id: "third-quarter"};
  var anotherCard = new quarterCardView(dataEight);

  var dataNine = { title: "Fourth-quarter", content: "Do, a deer, a female deer.", id: "fourth-quarter"};
  var anotherCard = new quarterCardView(dataNine);


});
