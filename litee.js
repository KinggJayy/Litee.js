/**

litee.js javascript library.

Created by Jeremiah Ford.

Lightweight javascript library for my development projects.

> Version 1.0

Existing Functionality.
> Selectors litee("SELECTOR");
  * SELECTOR must be wrapped in quoation marks. This can be a html tag, .class or #id
> DOM Manipulation
  - Select litee(selector).select(index);
    * INDEX parameter can be left blank and will automatically be set to 0 by default.
    * 0 INDEX is the first element found, 1 INDEX is the second element and so on...
  - Change HTML contents on Elements. litee(selector).html("CONTENTS");
    * CONTENTS must be wrapped in quation marks
  - Return HTML contents on Elements. litee(selector).html();
  - Change html tags input values litee(selector).value("CONTENTS");
    * CONTENTS must be wrapped in quotation marks
  - Return html tags input values litee(selector).value();
  - Modify html tags attributes litee(selector).attr("AttributeName", "New Contents");
    * Both parameters must be wrapped in quotation marks
  - Return html tags attributes litee(selector).attr("AttributeName");
    * AttributeName parameter must be wrapped in quotation marks.
  - Toggle elements litee(selector).toggle();
  - Show Elements litee(selector).show();
  - Hide Elements litee(selector).hide();
  - Append Elements litee(selector).append("CONTENTS");
    * Will add contents in addition to existing contents.
    * New contents will be added AFTER existing contents.
  - Prepend Elements litee(selector).preAppend("CONTENTS");
    * Will add contents in addition to existing contents
    * New contents will be added BEFORE existing contents.
  - Event listeners litee(selector).on("selector1 selector2 selector3 selector4 etc", function(){ ... })
    * "Unlimited selectors supported"
> Ajax
  - POST $(document).post("FilePath/Url", {'parameter1':'value1', 'parameter2':'value2'}, function(resultContents){ ... });
    * resultContents contains the result of the ajax request
  - GET $(document).get("FilePath/Url", function(resultContents){ ... });
    * resultContents contains the result of the ajax request
  - BOOT $(SELECTOR).post("FilePath/Url");
    * Results of Ajax request will be placed into the elements matching the supplied selector.


GOALS:
1) The goal of this library is to create an effective, cross-browser and light weight javascript library which includes all the primary functions I use in other
javascript libraries that are much "heavier" in code. This library will be fast loading, small in size and easy to use.

2) Improve my personal javascript skills. I've found that I have personally become dependent on jquery for tasks that should not
require an entire javascript library for, especially if I'm only using one function out of the entire library. This project will force me to improve my personal coding skills while practicing the most
effective techniques of accomplishing these functions.

**/


/*
USAGE:
litee("SELECTOR");
Selector can be a HTML Tag, Class (.ClassName) or Id (#TagId)

$ syntax is turned on by default.
$ syntax can be used when turned on.
USAGE:
$("SELECTOR");
*/
function litee(selector) {

  var inst = {}; // Instance

  if(selector != document) {

    inst.selector = selector; // Passed selector
    inst.elements = document.querySelectorAll(selector); // Searching for all elements matching the selector
    inst.length   = inst.elements.length; // Amount of elements found.

  }

  inst.inlineTags  = ['span','a','img','b','strong','i','em','u','big','small','code','sub','sup','button','input','label','select','textarea'];

  /* FUNCTIONS  */
  
  // Ready function

  inst.ready  = function(callback) {

    window.onload = function() {

      callback();

    }

  };

  // Event listeners
  inst.on = function(selectors, callback) {

    var selectors = selectors.split(" "), selector; // Split selectors into an array

    for(i = 0; i < inst.length; i++) { // Looping through each element to preform function on;

      inst.thisElement  = inst.elements[i]; // This specific element the function will be preformed on.

      for(ii = 0; ii < selectors.length; ii++) { // Loop through each selector instance

        selector  = selectors[ii]; // Specified selector to create event listener for

        inst.thisElement.addEventListener(selector, callback); // Create event listener for elements.

      }

    }

    return inst; // Return instance;

  };

  // Select first element
  inst.select = function(index) {

    if(!index) {

      return inst.elements[0].select();

    } else {

      return inst.elements[index].select();

    }

  };

  // Return or set contents of html element(s).
  inst.html = function(newContents) {

    if(newContents) {

      for(i = 0; i < inst.length; i++) { // Looping through each element to preform function on;

        inst.thisElement  = inst.elements[i]; // This specific element the function will be preformed on.
        inst.thisElement.innerHTML  = newContents; // Set new contents to this element

      }

      return inst; // Return instance

    } else { // Check if new value to be set is not present

      return inst.elements[0].innerHTML; // Return existing contents of element since a newContents is not present.

    }

  };

  // Append to contents of html element(s).
  inst.append = function(addContents) {

    for(i = 0; i < inst.length; i++) { // Looping through each element to preform function on;

      inst.thisElement  = inst.elements[i]; // This specific element the function will be preformed on.
      inst.thisElement.innerHTML  = inst.thisElement.innerHTML + addContents; // Append new contents to this element

    }

    return inst; // Return instance

  };

  // Pre append to contents of html element(s).
  inst.preAppend = function(addContents) {

    for(i = 0; i < inst.length; i++) { // Looping through each element to preform function on;

      inst.thisElement  = inst.elements[i]; // This specific element the function will be preformed on.
      inst.thisElement.innerHTML  = addContents + inst.thisElement.innerHTML; // Pre-append new contents to this element

    }

    return inst; // Return instance

  };

  // Return or set value of html element(s).
  inst.value = function(newValue) {

    if(newValue) {

      for(i = 0; i < inst.length; i++) { // Looping through each element to preform function on;

        inst.thisElement  = inst.elements[i]; // This specific element the function will be preformed on.
        inst.thisElement.value  = newValue; // Set new value to this element

      }

      return inst; // Return instance

    } else { // Check if new value to be set is not present

      return inst.elements[0].value; // Return existing value of element since a newValue is not present.

    }

  };

  // Return or set attributes on HTML elements.
  inst.attr = function(name, newContents) {

    if(newContents) { // Check if new contents exist to set attribute.

      for(i = 0; i < inst.length; i++) { // Looping through each element to preform function on;

        inst.thisElement  = inst.elements[i]; // This specific element the function will be preformed on.
        inst.thisElement.setAttribute(name, newContents); // Set new attribute and value to this element

      }

      return inst; // Return instance

    } else { // Check if new value to be set is not present

      return inst.elements[0].getAttribute(name); // Return existing value of element since a newValue is not present.

    }

  };

  // Toggle display of elements
  inst.toggle = function() {

    for(i = 0; i < inst.length; i++) { // Looping through each element to preform function on;

      inst.thisElement  = inst.elements[i]; // This specific element the function will be preformed on.

      if(!inst.thisElement.style.display) { // Setting visible state to NONE.

        inst.thisElement.style.display  = 'none';

      } else {

        if(inst.thisElement.style.display != 'none') { // Check if is already set to be hidden

          inst.thisElement.style.display  = 'none'; // Hide if not hidden

        } else {

          // Show if hidden
          if(inst.inlineTags.indexOf(inst.thisElement.tagName.toLowerCase()) != -1) { // If tagName of this element is found in the array of Tags

            inst.thisElement.style.display  = 'initial'; // Display as initial

          } else {

            inst.thisElement.style.display  = 'block'; // Display as block

          }

        }

      }

    }

    return inst;

  };

  // Hide html elements
  inst.hide = function() {

    for(i = 0; i < inst.length; i++) { // Looping through each element to preform function on;

      inst.thisElement  = inst.elements[i]; // This specific element the function will be preformed on.

      inst.thisElement.style.display  = 'none'; // Hide Element

    }

    return inst;

  };

  // Display/Show elements
  inst.show = function() {

    for(i = 0; i < inst.length; i++) { // Looping through each element to preform function on;

      inst.thisElement  = inst.elements[i]; // This specific element the function will be preformed on.

      if(inst.inlineTags.indexOf(inst.thisElement.tagName.toLowerCase()) != -1) { // If tagName of this element is found in the array of Tags

        inst.thisElement.style.display  = 'initial'; // Display as initial

      } else {

        inst.thisElement.style.display  = 'block'; // Display as block

      }

    }

    return inst;

  };

  // Load file contents into a HTML element with Ajax
  inst.boot = function(reqFileName) {

    var xhttp = new XMLHttpRequest(); // Ajax Request

    xhttp.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200) {

        for(i = 0; i < inst.length; i++) { // Looping through each element to preform function on;

          inst.thisElement  = inst.elements[i]; // This specific element the function will be preformed on.
          inst.thisElement.innerHTML  = this.responseText; // Set new contents to this element

        }

      }

    };

    xhttp.open("GET", reqFileName, true); // Open ajax Request
    xhttp.send();

    return inst;

  };

  // Return result of an Ajax GET request
  inst.get = function(reqFileName, callback) {

    var xhttp = new XMLHttpRequest(); // Ajax Request

    xhttp.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200) { // OK

        callback(ajaxContentsResponse = this.responseText); // Trigger callback

      }

    };

    xhttp.open("GET", reqFileName, true); // Open ajax Request
    xhttp.send();

    return inst;

  };

  // Return result of an Ajax POST request
  inst.post = function(reqFileName, postParams, callback) {

    var postParamsResult = "", // Posted paramters
        xhttp = new XMLHttpRequest(); // Ajax Request

    // postParams is expected to be a json object
    for (var pKey in postParams) { // Looping through postParams

      if(postParams.hasOwnProperty(pKey)) {

        if(postParamsResult == "") { // Checking if a paremeter has already been set

           postParamsResult =  pKey + "=" + postParams[pKey]; // name=value

        } else {

          postParamsResult =  postParamsResult + "&" + pKey + "=" + postParams[pKey]; // &name=value

        }

      }

    }

    xhttp.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200) { // OK

        callback(ajaxContentsResponse = this.responseText); // Trigger callback

      }

    };

    xhttp.open("POST", reqFileName, true); // Open ajax Request
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(postParamsResult);

    return inst;

  };

  return inst; // Returning instance;

};

var $ = litee; // Turn $ Syntax ON
