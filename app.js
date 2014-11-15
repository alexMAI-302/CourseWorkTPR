Ext.require('Ext.slider.*');

var a = 0.5, b = 0.5, c = 0.5;

Ext.onReady(function(){

    Ext.create('Ext.slider.Single', {
        renderTo: 'custom-tip-slider1',
        hideLabel: true,
        width: 260,
        increment: 1,
        minValue: 0,
        maxValue: 100,
		value: 50,
        tipText: function(thumb){
			a = thumb.value/100;
			return Ext.String.format('<b>{0}% важность</b>', thumb.value);
        }
		
    });
	
	Ext.create('Ext.slider.Single', {
        renderTo: 'custom-tip-slider2',
        hideLabel: true,
        width: 267,
        increment: 1,
        minValue: 0,
        maxValue: 100,
		value: 50,
        tipText: function(thumb){
			b = thumb.value/100;
            return Ext.String.format('<b>{0}% важность</b>', thumb.value);
        }
    });
	
	Ext.create('Ext.slider.Single', {
        renderTo: 'custom-tip-slider3',
        hideLabel: true,
        width: 275,
        increment: 1,
        minValue: 0,
        maxValue: 100,
		value: 50,
        tipText: function(thumb){
			c = thumb.value/100;
            return Ext.String.format('<b>{0}% важность</b>', thumb.value);
        }
    });
   
});