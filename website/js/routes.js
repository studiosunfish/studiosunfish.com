window.app = Sammy("#templateContainer", function() {
    this.use('Template');
    var context = this;
    this.get("#/", function () {
        console.log("Sammy is running")
    });
    this.get("#/contact", function() {
        this.load('templates/contact.template').then(function(page) {
            context.$element().html(page);       
        });
    });
});