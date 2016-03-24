var $ = require('jquery');
var formTemplate = require('../templates/form.html');
require('font-awesome/css/font-awesome.min.css');
require('../styles.css');


$.get('http://json-data.herokuapp.com/forms', function(data){
    render(data);
});

function render(formData) {
    var templateData = {};
        templateData.data = formData;

    var newTempData = formData.map(function(value){
        if (value.type === 'select') {
            value.select = true;
            return value;
        } else if (value.type === 'textarea') {
            value.textarea = true;
            return value;
        } else {
            return value;
        }
    });

    newTempData = {data:newTempData};

$("#container").html(formTemplate(newTempData));

}