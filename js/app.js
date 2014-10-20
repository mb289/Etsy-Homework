 _.templateSettings.interpolate = /{([\s\S]+?)}/g;


 /*var api_key = "9pd4mhlgcqva2kfk9bd4i1vd";

 var etsy_url = [
     "https://openapi.etsy.com",
     "v2/",
     "listings/",
     "active.js",
     "?",
     "api_key=",
     api_key,
     "&callback=?"
 ].join('');

 $.getJSON(etsy_url).then(function(data) {
     console.log(data);
 });*/


 function EtsyClient(options) {
     if (!options.api_key) {
         throw new Error("Yo dawg, I heard you like APIs. Y U NO APIKEY!?!?");
     }
     this.etsy_url = "https://openapi.etsy.com/";
     this.version = options.api_version || "v2/";
     this.api_key = options.api_key;
     this.complete_api_url = this.etsy_url + this.version;

     //this.init;
 }

 EtsyClient.prototype.pullAllActiveListings = function() {
     var model = 'listings/';
     var filter = 'active';
     return $.getJSON(this.complete_api_url + model + filter + ".js?api_key=" + this.api_key + "&callback=?").then(function(data) {
         console.log(data);
     });
 };

 EtsyClient.prototype.getListingInfo = function(id) {
     var model = 'listings';
     return $.getJSON(this.complete_api_url + model + '/' + id + ".js?api_key=" + this.api_key + "&callback=?").then(function(data) {
         console.log(data);
     });
 };

/*EtsyClient.prototype.getUserInfo= function() {
    var model = 'listings/';
    var person = 'user_id';
    return $.getJson(this.complete_api_url + model + person + ".js?api_key=" + this.api_key + "&callback=?").then(function(data) {
        console.log(data);
    });
}

EtsyClient.prototype.loadTemplateFile = function(templateName) {
    return $.get('./templates/' + templateName + '.html').then(function(htmlstring) {
        return htmlstring;
    });
};

EtsyClient.prototype.putActiveListingDataOnPage = function(listingsHtml, listings) {
    document.querySelector('').innerHtml = _.templates(listingsHtml, listings);
};

 EtsyClient.prototype.putListingDataOnPage = function(listingHtml, listing) {
    document.querySelector('').innerHtml = _.templates(listingHtml, listing);
 };

 EtsyClient.prototype.putUserDataOnPage = function(userhtml, user) {
     document.querySelector('').innerHtml = _.templates(userhtml, user);
 };




 EtsyClient.prototype.init = function() 
    var self = 'this';

    $.when(
        this.pullAllActiveListings(),
        this.getListingInfo(),
        this.getUserInfo(),
        this.loadTemplateFile('listings'),
        this.loadTemplateFile('listing'),
        this.loadTemplateFile('user')
      ).then(function(listings, listing, user, listingsHtml, listingHtml, userHtml) {
            self.putActiveListingDataOnPage(listingshtml, listings)
            self.putListingDataOnPage(listinghtml, listing)
            self.putUserDataOnPage(userhtml, user)
      })
 };

 /*$.getJSON(etsy_url).then(function(data) {
     console.log(data);*/

 window.onload = app;

 function app () {
    var Etsy = new EtsyClient({api_key:"9pd4mhlgcqva2kfk9bd4i1vd"});
    Etsy.pullAllActiveListings();
 }
