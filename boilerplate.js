/**
 * MyPlugin
 * @version 1.0
 * @author Nelson Polanco <nelson.polanco@stylecaster.com>
 * @description A simple plugin starter point.
 */


(function ($) {
    $.fn.MyPlugin = function( settings ){

        /***********************************
        Vars
        ***********************************/
        var el = this; // create a reference for the element

        // If multiple elements found, loop through each and apply the plugin
        if (el.length > 1)
            return el.each( function() { $(this).MyPlugin(settings) } );

        /***********************************
        Settings default
        ***********************************/
        settings = $.extend({
            callback: false
        }, settings );


        /***********************************
        Private Functions
        ***********************************/
        /**
         * Setup on the elements
         */
        function setup(){
            // Setup the plugin

            // Sample Callback
            if(typeof settings.callback === 'function')
                settings.callback();

        }

        /***********************************
        Public Functions
        ***********************************/
        /**
         * Initialize Plugin on the object
         *
         * @return this object the element
         */
        el.init = function(){

            // load images, setup fires when they have loaded
            setup();

            // Object must be returned here
            return this;
        }

        /**
         * Public Function
         *
         * @return {string} bar
         *
         * @usage $(element).foo();
         */
        el.foo = function(){
            return 'bar';
        }

        /***********************************
        Initialize the element
        ***********************************/
        return el.init();

    }
})(jQuery);