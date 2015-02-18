Ext.require('Ext.slider.*');
var criterion = ["Price", "Color", "Speed", "Engine"];

var SlidersCount;
if(criterion.length == 2)
    SlidersCount = 1;
if((criterion.length%2) != 0)
    SlidersCount = criterion.length*(Math.floor(criterion.length/2));
else
    SlidersCount = (criterion.length-1)+(criterion.length-1)*(Math.floor((criterion.length-1)/2));


var LCriterion = new Array(SlidersCount);
var RCriterion = new Array(SlidersCount);
k=0;
for(i=0; i<criterion.length; i++)
    for(j=i+1; j<criterion.length; j++)
    {
        LCriterion[k] = criterion[i];
        RCriterion[k] = criterion[j];
        k++;
    }

var criterionValue = new Array(SlidersCount);
    for(i = 0; i < SlidersCount; i++)
        criterionValue[i] = 0.5;

Ext.onReady(function(){
    for(i = 0; i < SlidersCount; i++)
    {
        Ext.create('Ext.panel.Panel', {
            title: 'Установите соотношение №' + (i+1) + ':',
            width: 350,
            height: 70,
            lbar: [LCriterion[i]],
            rbar: [RCriterion[i]],
            id : 'TitlePanel' + i,
            renderTo: Ext.getBody()
        });
        Ext.create('Ext.slider.Single', {
            renderTo: Ext.getBody(), 
            hideLabel: false,
            fieldLabel: '',
            clickToChange: true,
            width: 350,
            increment: 1,
            minValue: 0,
            maxValue: 100,
            value: 50,
            id: LCriterion[i] + RCriterion[i] + 'Slider',
            tipText: function(thumb){
                return Ext.String.format('<b>{0}% важность</b>', thumb.value);
            }        
        });
    }
});