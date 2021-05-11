

// from https://stackoverflow.com/a/9899701/8569383
(function(funcName, baseObj) {
    // The public function name defaults to window.docReady
    // but you can pass in your own object and own function name and those will be used
    // if you want to put them in a different namespace
    funcName = funcName || "docReady";
    baseObj = baseObj || window;
    var readyList = [];
    var readyFired = false;
    var readyEventHandlersInstalled = false;

    // call this when the document is ready
    // this function protects itself against being called more than once
    function ready() {
        if (!readyFired) {
            // this must be set to true before we start calling callbacks
            readyFired = true;
            for (var i = 0; i < readyList.length; i++) {
                // if a callback here happens to add new ready handlers,
                // the docReady() function will see that it already fired
                // and will schedule the callback to run right after
                // this event loop finishes so all handlers will still execute
                // in order and no new ones will be added to the readyList
                // while we are processing the list
                readyList[i].fn.call(window, readyList[i].ctx);
            }
            // allow any closures held by these functions to free
            readyList = [];
        }
    }

    function readyStateChange() {
        if ( document.readyState === "complete" ) {
            ready();
        }
    }

    // This is the one public interface
    // docReady(fn, context);
    // the context argument is optional - if present, it will be passed
    // as an argument to the callback
    baseObj[funcName] = function(callback, context) {
        if (typeof callback !== "function") {
            throw new TypeError("callback for docReady(fn) must be a function");
        }
        // if ready has already fired, then just schedule the callback
        // to fire asynchronously, but right away
        if (readyFired) {
            setTimeout(function() {callback(context);}, 1);
            return;
        } else {
            // add the function and context to the list
            readyList.push({fn: callback, ctx: context});
        }
        // if document already ready to go, schedule the ready function to run
        if (document.readyState === "complete") {
            setTimeout(ready, 1);
        } else if (!readyEventHandlersInstalled) {
            // otherwise if we don't have event handlers installed, install them
            if (document.addEventListener) {
                // first choice is DOMContentLoaded event
                document.addEventListener("DOMContentLoaded", ready, false);
                // backup is window load event
                window.addEventListener("load", ready, false);
            } else {
                // must be IE
                document.attachEvent("onreadystatechange", readyStateChange);
                window.attachEvent("onload", ready);
            }
            readyEventHandlersInstalled = true;
        }
    }
})("docReady", window);


docReady(function() {
  /*
  document.getElementById("code-fragment-row-definition").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---global-redraw-and-no-observer---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source-raw-definition");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment-initial-values-in-list").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---global-redraw-and-no-observer---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source-initial-values-in-list");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment-some-settings-in-main").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---global-redraw-and-no-observer---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source-some-settings-in-main");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment-getKey").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---global-redraw-and-no-observer---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source-getKey");
    animateHighlight(elem, wrapper);
  };
  */
  document.getElementById("code-fragment---observer-in-final-style-monad---state-adt").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-final-style-monad---state-adt");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-final-style-monad---adding-listeners").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-final-style-monad---adding-listeners");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-final-style-monad---descriptive-adt").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-final-style-monad---descriptive-adt");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-final-style-monad---descriptive-adt-getters").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-final-style-monad---descriptive-adt-getters");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-final-style-monad---descriptive-adt-setters").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-final-style-monad---descriptive-adt-setters");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-final-style-monad---target-monad").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-final-style-monad---target-monad");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-final-style-monad---target-monad-instance-of-descriptive-monad").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-final-style-monad---target-monad-instance-of-descriptive-monad");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-final-style-monad---performStateAction").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-final-style-monad---performStateAction");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-final-style-monad---main-func").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-final-style-monad---main-func");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-final-style-monad---initialState").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-final-style-monad---initialState");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-final-style-monad---creating-listeners").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-final-style-monad---creating-listeners");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-final-style-monad---initRows").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-final-style-monad---initRows");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-final-style-monad---loop").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-final-style-monad---loop");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---initial-style---state-adt").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---initial-style---state-adt");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---initial-style---functions-that-add-listeners").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elems = document.getElementsByClassName("source---initial-style---functions-that-add-listeners");
    animateHighlightMultiple(arr(elems), wrapper);
  };
  document.getElementById("code-fragment---initial-style---declaring-monad-operations-as-adt").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---initial-style---declaring-monad-operations-as-adt");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---initial-style---getters-in-decriptive-adt").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---initial-style---getters-in-decriptive-adt");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---initial-style---setters-in-decriptive-adt").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---initial-style---setters-in-decriptive-adt");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---initial-style---making-descriptive-adt-a-monad").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---initial-style---making-descriptive-adt-a-monad");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---initial-style---smart-constructors").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---initial-style---smart-constructors");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---initial-style---making-descriptive-adt-monadio").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---initial-style---making-descriptive-adt-monadio");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---initial-style---declaring-a-target-monad").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---initial-style---declaring-a-target-monad");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---initial-style---interpreter-function").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---initial-style---interpreter-function");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---initial-style---perform-state-action").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---initial-style---perform-state-action");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---initial-style---main").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---initial-style---fragment-of-main");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---initial-style---initial-state").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---initial-style---initial-state");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---initial-style---initListeners").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---initial-style---initListeners");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---initial-style---initRows").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---initial-style---initRows");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---initial-style---loop").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---initial-style---loop");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---free-monads---declaring-operations-as-adt").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---free-monads---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---free-monads---declaring-operations-as-adt");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---free-monads---getters-in-adt").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---free-monads---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---free-monads---getters-in-adt");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---free-monads---setters-in-adt").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---free-monads---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---free-monads---setters-in-adt");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---free-monads---smart-constructors").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---free-monads---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---free-monads---smart-constructors");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---free-monads---monadio-instance").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---free-monads---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---free-monads---monadio-instance");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---free-monads---declaring-target-monad").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---free-monads---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---free-monads---declaring-target-monad");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---free-monads---interpreter-function-foldFree").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---free-monads---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---free-monads---interpreter-function-foldFree");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---free-monads---inner-interpreter-function").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---free-monads---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---free-monads---inner-interpreter-function");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---free-monads---type-signatures-of-listeners-and-loop").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---free-monads---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elems = document.getElementsByClassName("source---free-monads---type-signatures-of-listeners-and-loop");
    animateHighlightMultiple(arr(elems), wrapper);
  };
  document.getElementById("code-fragment---operational-style---state-data-types").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---operational-style---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---operational-style---state-data-types");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---operational-style---functions-that-add-listeners").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---operational-style---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elems = document.getElementsByClassName("source---operational-style---functions-that-add-listeners");
    animateHighlightMultiple(arr(elems), wrapper);
  };
  document.getElementById("code-fragment---operational-style---declaring-monad-operations-as-gadt").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---operational-style---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---operational-style---declaring-monad-operations-as-gadt");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---operational-style---getters-in-ops-gadt").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---operational-style---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---operational-style---getters-in-ops-gadt");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---operational-style---setters-in-ops-gadt").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---operational-style---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---operational-style---setters-in-ops-gadt");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---operational-style---making-gadt-a-monad").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---operational-style---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---operational-style---making-gadt-a-monad");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---operational-style---making-gadt-a-monadio").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---operational-style---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---operational-style---making-gadt-a-monadio");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---operational-style---smart-constructors").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---operational-style---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---operational-style---smart-constructors");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---operational-style---target-monad").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---operational-style---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---operational-style---target-monad");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---operational-style---interpreter-function").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---operational-style---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---operational-style---interpreter-function");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---operational-style---performStateAction").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---operational-style---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---operational-style---performStateAction");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---operational-style---main").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---operational-style---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---operational-style---fragment-of-main");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---operational-style---initialState").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---operational-style---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---operational-style---initialState");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---operational-style---initListeners").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---operational-style---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---operational-style---initListeners");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---operational-style---initRows").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---operational-style---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---operational-style---initRows");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---operational-style---loop").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---operational-style---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---operational-style---loop");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---freer---operations-as-gadt").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---freer---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---freer---operations-as-gadt");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---freer---getters-in-gadt").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---freer---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---freer---getters-in-gadt");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---freer---setters-in-gadt").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---freer---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---freer---setters-in-gadt");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---freer---smart-constructors").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---freer---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---freer---smart-constructors");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---freer---monadio-instance").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---freer---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---freer---monadio-instance");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---freer---target-monad").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---freer---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---freer---target-monad");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---freer---interpreter-function").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---freer---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---freer---interpreter-function");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---freer---type-signatures-of-listeners-and-loop").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---freer---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elems = document.getElementsByClassName("source---freer---type-signatures-of-listeners-and-loop");
    animateHighlightMultiple(arr(elems), wrapper);
  };
  /*
  document.getElementById("code-fragment---freer---").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---freer---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---freer---");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("");
    animateHighlight(elem, wrapper);
  };
  */
//document.getElementById("").onclick = function (eve) {
//document.getElementById("").onclick = function (eve) {
//document.getElementById("").onclick = function (eve) {
//document.getElementById("").onclick = function (eve) {
//document.getElementById("").onclick = function (eve) {
//document.getElementById("").onclick = function (eve) {
//document.getElementById("").onclick = function (eve) {
//document.getElementById("").onclick = function (eve) {
//

  function Position(x, y) {
    this.x = x;
    this.y = y;
  }

  function Size(width, height) {
    this.width = width;
    this.height = height;
  }

  function DiagramElement(position, size, clickHandler) {
    this.originalPosition = position;
    this.currentPosition = new Position(position.x, position.y);
    this.originalSize = size;
    this.currentSize = new Size(size.width, size.height);
    this.clickHandler = clickHandler;
  }

  DiagramElement.prototype.currentlyContains = function(x, y) {
    return this.currentPosition.x < x &&
           this.currentPosition.y < y &&
           (this.currentPosition.x + this.currentSize.width) > x &&
           (this.currentPosition.y + this.currentSize.height) > y;
  }

  function Diagram(width, height, elements) {
    this.originalSize = new Size(width, height);
    this.currentSize = new Size(width, height);
    this.elements = elements;
  }

  Diagram.prototype.handleResize = function(width, height) {
    this.currentSize.width = width;
    this.currentSize.height = height;
    let widthRatio = width * 1.0 / this.originalSize.width;
    let heightRatio = height * 1.0 / this.originalSize.height;
    this.elements.forEach(el => {
      el.currentPosition.x = el.originalPosition.x * widthRatio;
      el.currentPosition.y = el.originalPosition.y * heightRatio;
      el.currentSize.width = el.originalSize.width * widthRatio;
      el.currentSize.height = el.originalSize.height * heightRatio;
    });
  };

  Diagram.prototype.findElementByPosition = function(x, y) {
    for (let elem of this.elements) {
      /*
      console.log("findElementByPosition elem.originalSize.width " + elem.originalSize.width +
      " elem.originalSize.height " + elem.originalSize.height);
      console.log("findElementByPosition elem.currentSize.width " + elem.currentSize.width +
      " elem.currentSize.height " + elem.currentSize.height);
      */
      if (elem.currentlyContains(x, y)) {
        return elem;
      }
    }
  }

  let diagramFinalStyleMonad = new Diagram(700, 1200, [
    // loop
    new DiagramElement(new Position(60, 125), new Size(40, 20), function() {
      console.log("highlight loop");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---loop-definition-2-lines");
      animateHighlight(elem, wrapper);
    })
    // getKey
    , new DiagramElement(new Position(60, 151), new Size(85, 38), function() {
      console.log("highlight getKey");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---getKey");
      animateHighlight(elem, wrapper);
    })
    // case key of
    , new DiagramElement(new Position(75, 218), new Size(82, 18), function() {
      console.log("highlight case key of");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---case-key-of");
      animateHighlight(elem, wrapper);
    })
    // key up
    , new DiagramElement(new Position(75, 257), new Size(75, 24), function() {
      console.log("highlight key up");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---case-key-up");
      animateHighlight(elem, wrapper);
    })
    // key down
    , new DiagramElement(new Position(75, 296), new Size(75, 25), function() {
      console.log("highlight key down");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---case-key-down");
      animateHighlight(elem, wrapper);
    })
    // key enter
    , new DiagramElement(new Position(75, 336), new Size(75, 25), function() {
      console.log("highlight key enter");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---case-key-enter");
      animateHighlight(elem, wrapper);
    })
    // key otherwise
    , new DiagramElement(new Position(75, 375), new Size(98, 27), function() {
      console.log("highlight key otherwise");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---case-key-otherwise");
      animateHighlight(elem, wrapper);
    })
    // exit
    , new DiagramElement(new Position(394, 372), new Size(26, 31), function() {
      console.log("highlight exit");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elems = document.getElementsByClassName("source---observer-in-final-style-monad---exit");
      animateHighlightMultiple(arr(elems), wrapper);
    })
    // main rows field
    , new DiagramElement(new Position(58, 522), new Size(77, 16), function() {
      console.log("highlight main rows field");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---main-rows-field");
      animateHighlight(elem, wrapper);
    })
    // active cell y field
    , new DiagramElement(new Position(58, 565), new Size(89, 18), function() {
      console.log("highlight active cell y field");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---highlighted-row-index-field");
      animateHighlight(elem, wrapper);
    })
    // debug messages field
    , new DiagramElement(new Position(60, 611), new Size(122, 16), function() {
      console.log("highlight debug messages field");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---debug-messages-field");
      animateHighlight(elem, wrapper);
    })
    // main rows listener
    , new DiagramElement(new Position(73, 709), new Size(134, 16), function() {
      console.log("highlight main rows listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---list-listener");
      animateHighlight(elem, wrapper);
    })
    // active cell y listener
    , new DiagramElement(new Position(73, 836), new Size(145, 18), function() {
      console.log("highlight active cell y listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---active-cell-y-listener");
      animateHighlight(elem, wrapper);
    })
    // debug messages listener
    , new DiagramElement(new Position(73, 956), new Size(181, 17), function() {
      console.log("highlight debug messages listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---logs-listener");
      animateHighlight(elem, wrapper);
    })
    // triggering main rows listener
    , new DiagramElement(new Position(463, 678), new Size(14, 13), function() {
      console.log("highlight triggering main rows listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---triggering-main-rows-listener");
      animateHighlight(elem, wrapper);
    })
    // triggering active cell y listener
    , new DiagramElement(new Position(444, 804), new Size(12, 12), function() {
      console.log("highlight triggering active cell y listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---triggering-highlighted-cell-listener");
      animateHighlight(elem, wrapper);
    })
    // triggering debug messages listener
    , new DiagramElement(new Position(424, 929), new Size(13, 12), function() {
      console.log("highlight triggering debug messages listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---triggering-debug-messages-listener");
      animateHighlight(elem, wrapper);
    })
    // draw on screen of main rows listener
    , new DiagramElement(new Position(486, 702), new Size(156, 33), function() {
      console.log("highlight draw on screen of main rows listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---main-rows-listener-draw");
      animateHighlight(elem, wrapper);
    })
    // log of main rows listener
    , new DiagramElement(new Position(486, 748), new Size(61, 33), function() {
      console.log("highlight log of main rows listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---main-rows-listener-log");
      animateHighlight(elem, wrapper);
    })
    // draw on screen of active cell y listener
    , new DiagramElement(new Position(486, 827), new Size(156, 33), function() {
      console.log("highlight draw on screen of active cell y listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elems = document.getElementsByClassName("source---observer-in-final-style-monad---active-cell-y-listener-draw");
      animateHighlightMultiple(arr(elems), wrapper);
    })
    // log of active cell y listener
    , new DiagramElement(new Position(486, 873), new Size(61, 33), function() {
      console.log("highlight log of active cell y listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---active-cell-y-listener-log");
      animateHighlight(elem, wrapper);
    })
    // draw on screen of debug messages listener
    , new DiagramElement(new Position(486, 952), new Size(156, 33), function() {
      console.log("highlight draw on screen of debug messages listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---debug-messages-listener-draw");
      animateHighlight(elem, wrapper);
    })
    // write to active cell y field from up button press
    , new DiagramElement(new Position(239, 558), new Size(31, 32), function() {
      console.log("highlight write to active cell y field from up button press");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---write2field-active-cell-y-from-up-key-press");
      animateHighlight(elem, wrapper);
    })
    // write to debug messages field from up button press
    , new DiagramElement(new Position(241, 602), new Size(31, 33), function() {
      console.log("highlight write to debug messages field from up button press");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---write2field-debug-messages-from-up-key-press");
      animateHighlight(elem, wrapper);
    })
    // write to active cell y field from down button press
    , new DiagramElement(new Position(281, 559), new Size(33, 31), function() {
      console.log("highlight write to active cell y field from down button press");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---write2field-active-cell-y-from-down-key-press");
      animateHighlight(elem, wrapper);
    })
    // write to debug messages field from down button press
    , new DiagramElement(new Position(282, 602), new Size(35, 33), function() {
      console.log("highlight write to debug messages field from down button press");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---write2field-debug-messages-from-down-key-press");
      animateHighlight(elem, wrapper);
    })
    // write to main rows field from enter button press
    , new DiagramElement(new Position(320, 513), new Size(34, 32), function() {
      console.log("highlight write to main rows field from enter button press");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---write2field-main-rows-from-enter-key-press");
      animateHighlight(elem, wrapper);
    })
    // write to debug messages field from enter button press
    , new DiagramElement(new Position(324, 605), new Size(30, 30), function() {
      console.log("highlight write to debug messages field from enter button press");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---write2field-debug-messages-from-enter-key-press");
      animateHighlight(elem, wrapper);
    })
  ]);

  let resizeObserverOfFinalStyleMonadDiagram = new ResizeObserver(entries => {
    let img = entries[0];
    if (img.contentRect) {
      console.log("resize observer x = " + img.contentRect.width + ", y = " + img.contentRect.height)
      diagramFinalStyleMonad.handleResize(img.contentRect.width, img.contentRect.height);
    } else if (img.contentBoxSize && img.contentBoxSize.constructor === Array) {
      let width = img.contentBoxSize[0].inlineSize;
      let height = img.contentBoxSize[0].blockSize;
      diagramFinalStyleMonad.handleResize(width, height);
    } else if (img.contentBoxSize && img.contentBoxSize.constructor === Object) {
      let width = img.contentBoxSize.inlineSize;
      let height = img.contentBoxSize.blockSize;
      diagramFinalStyleMonad.handleResize(width, height);
    } else {
      console.log("resize observer x = " + img.contentRect.width + ", y = " + img.contentRect.height)
      diagramFinalStyleMonad.handleResize(img.contentRect.width, img.contentRect.height);
    }
  });
  resizeObserverOfFinalStyleMonadDiagram.observe(document.querySelector("#diagram-observer-in-final-style-monad"));

  let imgFinalStyleMonad = document.getElementById("diagram-observer-in-final-style-monad");

  imgFinalStyleMonad.onmousemove = function(eve) {
    //console.log("imgFinalStyleMonad.onmousemove. " + eve.offsetX + " " + eve.offsetY);
    if (diagramFinalStyleMonad.findElementByPosition(eve.offsetX, eve.offsetY)) {
      imgFinalStyleMonad.classList.add("with-pointer");
      //console.log("imgFinalStyleMonad.onmousemove. " + eve.offsetX + " " + eve.offsetY + " found");
    } else {
      imgFinalStyleMonad.classList.remove("with-pointer");
      //console.log("imgFinalStyleMonad.onmousemove. " + eve.offsetX + " " + eve.offsetY + " no");
    }
  };

  imgFinalStyleMonad.onclick = function(eve) {
    //console.log("imgFinalStyleMonad.onclick. " + eve.offsetX + " " + eve.offsetY);
    let diagramElement = diagramFinalStyleMonad.findElementByPosition(eve.offsetX, eve.offsetY);
    if (diagramElement) {
      diagramElement.clickHandler.call();
    }
  };


  // StateHolder.png

  let diagramFinalStyleTargetMonad = new Diagram(1024, 768, [
    // StateHolder
    new DiagramElement(new Position(78, 105), new Size(124, 24), function() {
      console.log("highlight StateHolder");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---target-monad");
      animateHighlight(elem, wrapper);
    })
    // updateList
    , new DiagramElement(new Position(40, 225), new Size(150, 40), function() {
      console.log("highlight updateList");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---updateList");
      animateHighlight(elem, wrapper);
    })
    // updateActiveCellY
    , new DiagramElement(new Position(40, 285), new Size(220, 40), function() {
      console.log("highlight updateActiveCellY");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---updateActiveCellY");
      animateHighlight(elem, wrapper);
    })
    // log
    , new DiagramElement(new Position(40, 345), new Size(85, 40), function() {
      console.log("highlight log");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---log");
      animateHighlight(elem, wrapper);
    })
    // getList
    , new DiagramElement(new Position(815, 225), new Size(169, 40), function() {
      console.log("highlight getList");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---getList");
      animateHighlight(elem, wrapper);
    })
    // getActiveCellY
    , new DiagramElement(new Position(815, 285), new Size(169, 40), function() {
      console.log("highlight getActiveCellY");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---getActiveCellY");
      animateHighlight(elem, wrapper);
    })
    // getLogs
    , new DiagramElement(new Position(815, 345), new Size(169, 40), function() {
      console.log("highlight getLogs");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---getLogs");
      animateHighlight(elem, wrapper);
    })
    // AppStateData
    , new DiagramElement(new Position(444, 161), new Size(130, 24), function() {
      console.log("highlight AppStateData");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---AppStateData");
      animateHighlight(elem, wrapper);
    })
    // rows
    , new DiagramElement(new Position(375, 225), new Size(190, 40), function() {
      console.log("highlight rows");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---main-rows-field");
      animateHighlight(elem, wrapper);
    })
    // activeCellY
    , new DiagramElement(new Position(375, 285), new Size(245, 40), function() {
      console.log("highlight activeCellY");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---highlighted-row-index-field");
      animateHighlight(elem, wrapper);
    })
    // debugMessages
    , new DiagramElement(new Position(375, 345), new Size(260, 40), function() {
      console.log("highlight debugMessages");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---debug-messages-field");
      animateHighlight(elem, wrapper);
    })
    // listeners
    , new DiagramElement(new Position(386, 413), new Size(333, 24), function() {
      console.log("highlight listeners");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---listeners-field");
      animateHighlight(elem, wrapper);
    })
    // rowsListeners
    , new DiagramElement(new Position(405, 465), new Size(155, 40), function() {
      console.log("highlight rowsListeners");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---rowsListeners");
      animateHighlight(elem, wrapper);
    })
    // activeCellYListeners
    , new DiagramElement(new Position(405, 525), new Size(210, 40), function() {
      console.log("highlight activeCellYListeners");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---activeCellYListeners");
      animateHighlight(elem, wrapper);
    })
    // debugMessagesListeners
    , new DiagramElement(new Position(405, 585), new Size(250, 40), function() {
      console.log("highlight debugMessagesListeners");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-final-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-final-style-monad---debugMessagesListeners");
      animateHighlight(elem, wrapper);
    })
  ]);

  let resizeObserverOfFinalStyleTargetMonadDiagram = new ResizeObserver(entries => {
    let img = entries[0];
    if (img.contentRect) {
      console.log("resize observer x = " + img.contentRect.width + ", y = " + img.contentRect.height)
      diagramFinalStyleTargetMonad.handleResize(img.contentRect.width, img.contentRect.height);
    } else if (img.contentBoxSize && img.contentBoxSize.constructor === Array) {
      let width = img.contentBoxSize[0].inlineSize;
      let height = img.contentBoxSize[0].blockSize;
      diagramFinalStyleTargetMonad.handleResize(width, height);
    } else if (img.contentBoxSize && img.contentBoxSize.constructor === Object) {
      let width = img.contentBoxSize.inlineSize;
      let height = img.contentBoxSize.blockSize;
      diagramFinalStyleTargetMonad.handleResize(width, height);
    } else {
      console.log("resize observer x = " + img.contentRect.width + ", y = " + img.contentRect.height)
      diagramFinalStyleTargetMonad.handleResize(img.contentRect.width, img.contentRect.height);
    }
  });
  resizeObserverOfFinalStyleTargetMonadDiagram.observe(document.querySelector("#diagram-final-style-target-monad"));

  let imgFinalStyleTargetMonad = document.getElementById("diagram-final-style-target-monad");

  imgFinalStyleTargetMonad.onmousemove = function(eve) {
    //console.log("imgFinalStyleTargetMonad.onmousemove. " + eve.offsetX + " " + eve.offsetY);
    if (diagramFinalStyleTargetMonad.findElementByPosition(eve.offsetX, eve.offsetY)) {
      imgFinalStyleTargetMonad.classList.add("with-pointer");
      //console.log("imgFinalStyleTargetMonad.onmousemove. " + eve.offsetX + " " + eve.offsetY + " found");
    } else {
      imgFinalStyleTargetMonad.classList.remove("with-pointer");
      //console.log("imgFinalStyleTargetMonad.onmousemove. " + eve.offsetX + " " + eve.offsetY + " no");
    }
  };

  imgFinalStyleTargetMonad.onclick = function(eve) {
    //console.log("imgFinalStyleTargetMonad.onclick. " + eve.offsetX + " " + eve.offsetY);
    let diagramElement = diagramFinalStyleTargetMonad.findElementByPosition(eve.offsetX, eve.offsetY);
    if (diagramElement) {
      diagramElement.clickHandler.call();
    }
  };

  // initial-style-monad.png
  // 770, 1270
  // StateHolder context: new Position(10, 60), new Size(190, 25)
  // loop EditableListOps context: new Position(60, 130), new Size(225, 30)
  // loop interpret: new Position(50, 114), new Size(63, 13)
  // loop: new Position(110, 195), new Size(40, 19)
  // getKey: new Position(110, 221), new Size(85, 38)
  // case key of: new Position(125, 290), new Size(82, 16)
  // up: new Position(125, 327), new Size(75, 24)
  // down: new Position(125, 366), new Size(75, 25)
  // enter: new Position(125, 406), new Size(75, 25)
  // otherwise: new Position(125, 445), new Size(98, 27)
  // exit: new Position(445, 445), new Size(23, 25)
  //
  // main rows: new Position(110, 593), new Size(74, 14)
  // active cell y: new Position(110, 637), new Size(85, 16)
  // debug messages: new Position(110, 682), new Size(121, 16)
  //
  // from up to active cell y: new Position(290, 635), new Size(30, 25)
  // from up to debug messages: new Position(290, 675), new Size(30, 30)
  // from down to active cell y: new Position(330, 630), new Size(30, 30)
  // from down to debug messages: new Position(334, 675), new Size(26, 28)
  // from enter to main rows: new Position(370, 581), new Size(30, 34)
  // from enter to debug messages: new Position(375, 677), new Size(28, 28)
  //
  // main rows listener interpret: new Position(70, 758), new Size(63, 14)
  // main rows listener EditableListOps context: new Position(65, 780), new Size(220, 20)
  // main rows listener: new Position(125, 817), new Size(168, 17)
  // main rows listener trigger: new Position(515, 750), new Size(10, 10)
  // main rows listener draw: new Position(536, 785), new Size(156, 20)
  // main rows listener log: new Position(536, 815), new Size(62, 20)
  //
  // active cell y listener interpret: new Position(70, 882), new Size(63, 15)
  // active cell y listener EditableListOps context: new Position(68, 906), new Size(217, 20)
  // active cell y listener: new Position(125, 941), new Size(184, 19)
  // active cell y listener trigger: new Position(495, 875), new Size(10, 10)
  // active cell y listener draw: new Position(536, 910), new Size(156, 20)
  // active cell y listener log: new Position(536, 940), new Size(61, 20)
  //
  // debug messages listener interpret: new Position(70, 1007), new Size(62, 14)
  // debug messages listener EditableListOps context: new Position(68, 1032), new Size(214, 18)
  // debug messages listener: new Position(125, 1067), new Size(225, 18)
  // debug messages listener trigger: new Position(475, 1000), new Size(10, 10)
  // debug messages listener draw: new Position(536, 1042), new Size(156, 33)

  // initial-style-monad.png
  let diagramInitialStyleMonad = new Diagram(770, 1270, [
    // StateHolder context
    new DiagramElement(new Position(10, 60), new Size(190, 25), function() {
      console.log("highlight StateHolder context");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---StateHolder-context");
      animateHighlight(elem, wrapper);
    })
    // loop EditableListOps context
    , new DiagramElement(new Position(60, 130), new Size(225, 30), function() {
      console.log("highlight loop EditableListOps context");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---loop-EditableListOps-context");
      animateHighlight(elem, wrapper);
    })
    // loop interpret
    , new DiagramElement(new Position(50, 114), new Size(63, 13), function() {
      console.log("highlight loop interpret");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---loop-interpret");
      animateHighlight(elem, wrapper);
    })
    // loop
    , new DiagramElement(new Position(110, 195), new Size(40, 19), function() {
      console.log("highlight loop");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elems = document.getElementsByClassName("source---initial-style---loop-invokation-and-definition");
      animateHighlightMultiple(arr(elems), wrapper);
    })
    // getKey
    , new DiagramElement(new Position(110, 221), new Size(85, 38), function() {
      console.log("highlight getKey");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---getKey");
      animateHighlight(elem, wrapper);
    })
    // case key of
    , new DiagramElement(new Position(125, 290), new Size(82, 16), function() {
      console.log("highlight case key of");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---case-key-of");
      animateHighlight(elem, wrapper);
    })
    // up
    , new DiagramElement(new Position(125, 327), new Size(75, 24), function() {
      console.log("highlight up");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---up");
      animateHighlight(elem, wrapper);
    })
    // down
    , new DiagramElement(new Position(125, 366), new Size(75, 25), function() {
      console.log("highlight down");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---down");
      animateHighlight(elem, wrapper);
    })
    // enter
    , new DiagramElement(new Position(125, 406), new Size(75, 25), function() {
      console.log("highlight enter");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---enter");
      animateHighlight(elem, wrapper);
    })
    // otherwise
    , new DiagramElement(new Position(125, 445), new Size(98, 27), function() {
      console.log("highlight otherwise");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---case-key-otherwise");
      animateHighlight(elem, wrapper);
    })
    // exit
    , new DiagramElement(new Position(445, 445), new Size(23, 25), function() {
      console.log("highlight exit");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elems = document.getElementsByClassName("source---initial-style---exit");
      animateHighlightMultiple(arr(elems), wrapper);
    })
    // main rows
    , new DiagramElement(new Position(110, 593), new Size(74, 14), function() {
      console.log("highlight main rows");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---main-rows-field");
      animateHighlight(elem, wrapper);
    })
    // active cell y
    , new DiagramElement(new Position(110, 637), new Size(85, 16), function() {
      console.log("highlight active cell y");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---active-cell-y-field");
      animateHighlight(elem, wrapper);
    })
    // debug messages
    , new DiagramElement(new Position(110, 682), new Size(121, 16), function() {
      console.log("highlight debug messages");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---debug-messages-field");
      animateHighlight(elem, wrapper);
    })
    // from up to active cell y
    , new DiagramElement(new Position(290, 635), new Size(30, 25), function() {
      console.log("highlight from up to active cell y");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---from-up-to-active-cell-y");
      animateHighlight(elem, wrapper);
    })
    // from up to debug messages
    , new DiagramElement(new Position(290, 675), new Size(30, 30), function() {
      console.log("highlight from up to debug messages");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---from-up-to-debug-messages");
      animateHighlight(elem, wrapper);
    })
    // from down to active cell y
    , new DiagramElement(new Position(330, 630), new Size(30, 30), function() {
      console.log("highlight from down to active cell y");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---from-down-to-active-cell-y");
      animateHighlight(elem, wrapper);
    })
    // from down to debug messages
    , new DiagramElement(new Position(334, 675), new Size(26, 28), function() {
      console.log("highlight from down to debug messages");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---from-down-to-debug-messages");
      animateHighlight(elem, wrapper);
    })
    // from enter to main rows
    , new DiagramElement(new Position(370, 581), new Size(30, 34), function() {
      console.log("highlight from enter to main rows");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---from-enter-to-main-rows");
      animateHighlight(elem, wrapper);
    })
    // from enter to debug messages
    , new DiagramElement(new Position(375, 677), new Size(28, 28), function() {
      console.log("highlight from enter to debug messages");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---from-enter-to-debug-messages");
      animateHighlight(elem, wrapper);
    })
    // main rows listener interpret
    , new DiagramElement(new Position(70, 758), new Size(63, 14), function() {
      console.log("highlight main rows listener interpret");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---main-rows-listener-interpret");
      animateHighlight(elem, wrapper);
    })
    // main rows listener EditableListOps context
    , new DiagramElement(new Position(65, 780), new Size(220, 20), function() {
      console.log("highlight main rows listener EditableListOps context");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---main-rows-listener-EditableListOps-context");
      animateHighlight(elem, wrapper);
    })
    // main rows listener
    , new DiagramElement(new Position(125, 817), new Size(168, 17), function() {
      console.log("highlight main rows listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---main-rows-listener");
      animateHighlight(elem, wrapper);
    })
    // main rows listener trigger
    , new DiagramElement(new Position(515, 750), new Size(10, 10), function() {
      console.log("highlight main rows listener trigger");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---main-rows-listener-trigger");
      animateHighlight(elem, wrapper);
    })
    // main rows listener draw
    , new DiagramElement(new Position(536, 785), new Size(156, 20), function() {
      console.log("highlight main rows listener draw");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---main-rows-listener-draw");
      animateHighlight(elem, wrapper);
    })
    // main rows listener log
    , new DiagramElement(new Position(536, 815), new Size(62, 20), function() {
      console.log("highlight main rows listener log");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---main-rows-listener-log");
      animateHighlight(elem, wrapper);
    })
    // active cell y listener interpret
    , new DiagramElement(new Position(70, 882), new Size(63, 15), function() {
      console.log("highlight active cell y listener interpret");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---active-cell-y-listener-interpret");
      animateHighlight(elem, wrapper);
    })
    // active cell y listener EditableListOps context
    , new DiagramElement(new Position(68, 906), new Size(217, 20), function() {
      console.log("highlight active cell y listener EditableListOps context");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---active-cell-y-listener-EditableListOps-context");
      animateHighlight(elem, wrapper);
    })
    // active cell y listener
    , new DiagramElement(new Position(125, 941), new Size(184, 19), function() {
      console.log("highlight active cell y listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---active-cell-y-listener");
      animateHighlight(elem, wrapper);
    })
    // active cell y listener trigger
    , new DiagramElement(new Position(495, 875), new Size(10, 10), function() {
      console.log("highlight active cell y listener trigger");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---active-cell-y-listener-trigger");
      animateHighlight(elem, wrapper);
    })
    // active cell y listener draw
    , new DiagramElement(new Position(536, 910), new Size(156, 20), function() {
      console.log("highlight active cell y listener draw");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elems = document.getElementsByClassName("source---initial-style---active-cell-y-listener-draw");
      animateHighlightMultiple(arr(elems), wrapper);
    })
    // active cell y listener log
    , new DiagramElement(new Position(536, 940), new Size(61, 20), function() {
      console.log("highlight active cell y listener log");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---active-cell-y-listener-log");
      animateHighlight(elem, wrapper);
    })
    // debug messages listener interpret
    , new DiagramElement(new Position(70, 1007), new Size(62, 14), function() {
      console.log("highlight debug messages listener interpret");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---debug-messages-listener-interpret");
      animateHighlight(elem, wrapper);
    })
    // debug messages listener EditableListOps context
    , new DiagramElement(new Position(68, 1032), new Size(214, 18), function() {
      console.log("highlight debug messages listener EditableListOps context");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---debug-messages-listener-EditableListOps-context");
      animateHighlight(elem, wrapper);
    })
    // debug messages listener
    , new DiagramElement(new Position(125, 1067), new Size(225, 18), function() {
      console.log("highlight debug messages listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---debug-messages-listener");
      animateHighlight(elem, wrapper);
    })
    // debug messages listener trigger
    , new DiagramElement(new Position(475, 1000), new Size(10, 10), function() {
      console.log("highlight debug messages listener trigger");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---debug-messages-listener-trigger");
      animateHighlight(elem, wrapper);
    })
    // debug messages listener draw
    , new DiagramElement(new Position(536, 1042), new Size(156, 33), function() {
      console.log("highlight debug messages listener draw");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---debug-messages-listener-draw");
      animateHighlight(elem, wrapper);
    })
  ]);


  let resizeObserverOfInitialStyleMonadDiagram = new ResizeObserver(entries => {
    let img = entries[0];
    if (img.contentRect) {
      console.log("resize observer x = " + img.contentRect.width + ", y = " + img.contentRect.height)
      diagramInitialStyleMonad.handleResize(img.contentRect.width, img.contentRect.height);
    } else if (img.contentBoxSize && img.contentBoxSize.constructor === Array) {
      let width = img.contentBoxSize[0].inlineSize;
      let height = img.contentBoxSize[0].blockSize;
      diagramInitialStyleMonad.handleResize(width, height);
    } else if (img.contentBoxSize && img.contentBoxSize.constructor === Object) {
      let width = img.contentBoxSize.inlineSize;
      let height = img.contentBoxSize.blockSize;
      diagramInitialStyleMonad.handleResize(width, height);
    } else {
      console.log("resize observer x = " + img.contentRect.width + ", y = " + img.contentRect.height)
      diagramInitialStyleMonad.handleResize(img.contentRect.width, img.contentRect.height);
    }
  });
  resizeObserverOfInitialStyleMonadDiagram.observe(document.querySelector("#diagram-initial-style"));

  let imgInitialStyleMonad = document.getElementById("diagram-initial-style");

  imgInitialStyleMonad.onmousemove = function(eve) {
    //console.log("imgInitialStyleMonad.onmousemove. " + eve.offsetX + " " + eve.offsetY);
    if (diagramInitialStyleMonad.findElementByPosition(eve.offsetX, eve.offsetY)) {
      imgInitialStyleMonad.classList.add("with-pointer");
      //console.log("imgInitialStyleMonad.onmousemove. " + eve.offsetX + " " + eve.offsetY + " found");
    } else {
      imgInitialStyleMonad.classList.remove("with-pointer");
      //console.log("imgInitialStyleMonad.onmousemove. " + eve.offsetX + " " + eve.offsetY + " no");
    }
  };

  imgInitialStyleMonad.onclick = function(eve) {
    //console.log("imgInitialStyleMonad.onclick. " + eve.offsetX + " " + eve.offsetY);
    let diagramElement = diagramInitialStyleMonad.findElementByPosition(eve.offsetX, eve.offsetY);
    if (diagramElement) {
      diagramElement.clickHandler.call();
    }
  };

  ////////////////////////////////////


  // initial-style-monad.png - free monad
  let diagramFreeMonad = new Diagram(770, 1270, [
    // StateHolder context
    new DiagramElement(new Position(10, 60), new Size(190, 25), function() {
      console.log("highlight StateHolder context");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---StateHolder-context");
      animateHighlight(elem, wrapper);
    })
    // loop EditableListOps context
    , new DiagramElement(new Position(64, 138), new Size(267, 17), function() {
      console.log("highlight loop EditableListOps context");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---loop-EditableListOps-context");
      animateHighlight(elem, wrapper);
    })
    // loop interpret
    , new DiagramElement(new Position(50, 114), new Size(63, 13), function() {
      console.log("highlight loop interpret");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---loop-interpret");
      animateHighlight(elem, wrapper);
    })
    // loop
    , new DiagramElement(new Position(110, 195), new Size(40, 19), function() {
      console.log("highlight loop");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elems = document.getElementsByClassName("source---free---loop-invokation-and-definition");
      animateHighlightMultiple(arr(elems), wrapper);
    })
    // getKey
    , new DiagramElement(new Position(110, 221), new Size(85, 38), function() {
      console.log("highlight getKey");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---getKey");
      animateHighlight(elem, wrapper);
    })
    // case key of
    , new DiagramElement(new Position(125, 290), new Size(82, 16), function() {
      console.log("highlight case key of");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---case-key-of");
      animateHighlight(elem, wrapper);
    })
    // up
    , new DiagramElement(new Position(125, 327), new Size(75, 24), function() {
      console.log("highlight up");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---up");
      animateHighlight(elem, wrapper);
    })
    // down
    , new DiagramElement(new Position(125, 366), new Size(75, 25), function() {
      console.log("highlight down");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---down");
      animateHighlight(elem, wrapper);
    })
    // enter
    , new DiagramElement(new Position(125, 406), new Size(75, 25), function() {
      console.log("highlight enter");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---enter");
      animateHighlight(elem, wrapper);
    })
    // otherwise
    , new DiagramElement(new Position(125, 445), new Size(98, 27), function() {
      console.log("highlight otherwise");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---case-key-otherwise");
      animateHighlight(elem, wrapper);
    })
    // exit
    , new DiagramElement(new Position(445, 445), new Size(23, 25), function() {
      console.log("highlight exit");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elems = document.getElementsByClassName("source---free---exit");
      animateHighlightMultiple(arr(elems), wrapper);
    })
    // main rows
    , new DiagramElement(new Position(110, 593), new Size(74, 14), function() {
      console.log("highlight main rows");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---main-rows-field");
      animateHighlight(elem, wrapper);
    })
    // active cell y
    , new DiagramElement(new Position(110, 637), new Size(85, 16), function() {
      console.log("highlight active cell y");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---active-cell-y-field");
      animateHighlight(elem, wrapper);
    })
    // debug messages
    , new DiagramElement(new Position(110, 682), new Size(121, 16), function() {
      console.log("highlight debug messages");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---debug-messages-field");
      animateHighlight(elem, wrapper);
    })
    // from up to active cell y
    , new DiagramElement(new Position(290, 635), new Size(30, 25), function() {
      console.log("highlight from up to active cell y");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---from-up-to-active-cell-y");
      animateHighlight(elem, wrapper);
    })
    // from up to debug messages
    , new DiagramElement(new Position(290, 675), new Size(30, 30), function() {
      console.log("highlight from up to debug messages");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---from-up-to-debug-messages");
      animateHighlight(elem, wrapper);
    })
    // from down to active cell y
    , new DiagramElement(new Position(330, 630), new Size(30, 30), function() {
      console.log("highlight from down to active cell y");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---from-down-to-active-cell-y");
      animateHighlight(elem, wrapper);
    })
    // from down to debug messages
    , new DiagramElement(new Position(334, 675), new Size(26, 28), function() {
      console.log("highlight from down to debug messages");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---from-down-to-debug-messages");
      animateHighlight(elem, wrapper);
    })
    // from enter to main rows
    , new DiagramElement(new Position(370, 581), new Size(30, 34), function() {
      console.log("highlight from enter to main rows");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---from-enter-to-main-rows");
      animateHighlight(elem, wrapper);
    })
    // from enter to debug messages
    , new DiagramElement(new Position(375, 677), new Size(28, 28), function() {
      console.log("highlight from enter to debug messages");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---from-enter-to-debug-messages");
      animateHighlight(elem, wrapper);
    })
    // main rows listener interpret
    , new DiagramElement(new Position(70, 758), new Size(63, 14), function() {
      console.log("highlight main rows listener interpret");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---main-rows-listener-interpret");
      animateHighlight(elem, wrapper);
    })
    // main rows listener EditableListOps context
    , new DiagramElement(new Position(68, 782), new Size(267, 16), function() {
      console.log("highlight main rows listener EditableListOps context");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---main-rows-listener-EditableListOps-context");
      animateHighlight(elem, wrapper);
    })
    // main rows listener
    , new DiagramElement(new Position(125, 817), new Size(168, 17), function() {
      console.log("highlight main rows listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---main-rows-listener");
      animateHighlight(elem, wrapper);
    })
    // main rows listener trigger
    , new DiagramElement(new Position(515, 750), new Size(10, 10), function() {
      console.log("highlight main rows listener trigger");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---main-rows-listener-trigger");
      animateHighlight(elem, wrapper);
    })
    // main rows listener draw
    , new DiagramElement(new Position(536, 785), new Size(156, 20), function() {
      console.log("highlight main rows listener draw");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---main-rows-listener-draw");
      animateHighlight(elem, wrapper);
    })
    // main rows listener log
    , new DiagramElement(new Position(536, 815), new Size(62, 20), function() {
      console.log("highlight main rows listener log");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---main-rows-listener-log");
      animateHighlight(elem, wrapper);
    })
    // active cell y listener interpret
    , new DiagramElement(new Position(70, 882), new Size(63, 15), function() {
      console.log("highlight active cell y listener interpret");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---active-cell-y-listener-interpret");
      animateHighlight(elem, wrapper);
    })
    // active cell y listener EditableListOps context
    , new DiagramElement(new Position(68, 908), new Size(267, 15), function() {
      console.log("highlight active cell y listener EditableListOps context");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---active-cell-y-listener-EditableListOps-context");
      animateHighlight(elem, wrapper);
    })
    // active cell y listener
    , new DiagramElement(new Position(125, 941), new Size(184, 19), function() {
      console.log("highlight active cell y listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---active-cell-y-listener");
      animateHighlight(elem, wrapper);
    })
    // active cell y listener trigger
    , new DiagramElement(new Position(495, 875), new Size(10, 10), function() {
      console.log("highlight active cell y listener trigger");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---active-cell-y-listener-trigger");
      animateHighlight(elem, wrapper);
    })
    // active cell y listener draw
    , new DiagramElement(new Position(536, 910), new Size(156, 20), function() {
      console.log("highlight active cell y listener draw");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elems = document.getElementsByClassName("source---free---active-cell-y-listener-draw");
      animateHighlightMultiple(arr(elems), wrapper);
    })
    // active cell y listener log
    , new DiagramElement(new Position(536, 940), new Size(61, 20), function() {
      console.log("highlight active cell y listener log");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---active-cell-y-listener-log");
      animateHighlight(elem, wrapper);
    })
    // debug messages listener interpret
    , new DiagramElement(new Position(70, 1007), new Size(62, 14), function() {
      console.log("highlight debug messages listener interpret");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---debug-messages-listener-interpret");
      animateHighlight(elem, wrapper);
    })
    // debug messages listener EditableListOps context
    , new DiagramElement(new Position(68, 1033), new Size(267, 15), function() {
      console.log("highlight debug messages listener EditableListOps context");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---debug-messages-listener-EditableListOps-context");
      animateHighlight(elem, wrapper);
    })
    // debug messages listener
    , new DiagramElement(new Position(125, 1067), new Size(225, 18), function() {
      console.log("highlight debug messages listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---debug-messages-listener");
      animateHighlight(elem, wrapper);
    })
    // debug messages listener trigger
    , new DiagramElement(new Position(475, 1000), new Size(10, 10), function() {
      console.log("highlight debug messages listener trigger");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---debug-messages-listener-trigger");
      animateHighlight(elem, wrapper);
    })
    // debug messages listener draw
    , new DiagramElement(new Position(536, 1042), new Size(156, 33), function() {
      console.log("highlight debug messages listener draw");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---free-monads---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---free---debug-messages-listener-draw");
      animateHighlight(elem, wrapper);
    })
  ]);


  let resizeObserverOfFreeMonadDiagram = new ResizeObserver(entries => {
    let img = entries[0];
    if (img.contentRect) {
      console.log("resize observer x = " + img.contentRect.width + ", y = " + img.contentRect.height)
      diagramFreeMonad.handleResize(img.contentRect.width, img.contentRect.height);
    } else if (img.contentBoxSize && img.contentBoxSize.constructor === Array) {
      let width = img.contentBoxSize[0].inlineSize;
      let height = img.contentBoxSize[0].blockSize;
      diagramFreeMonad.handleResize(width, height);
    } else if (img.contentBoxSize && img.contentBoxSize.constructor === Object) {
      let width = img.contentBoxSize.inlineSize;
      let height = img.contentBoxSize.blockSize;
      diagramFreeMonad.handleResize(width, height);
    } else {
      console.log("resize observer x = " + img.contentRect.width + ", y = " + img.contentRect.height)
      diagramFreeMonad.handleResize(img.contentRect.width, img.contentRect.height);
    }
  });
  resizeObserverOfFreeMonadDiagram.observe(document.querySelector("#diagram-free"));

  let imgFreeMonad = document.getElementById("diagram-free");

  imgFreeMonad.onmousemove = function(eve) {
    //console.log("imgFreeMonad.onmousemove. " + eve.offsetX + " " + eve.offsetY);
    if (diagramFreeMonad.findElementByPosition(eve.offsetX, eve.offsetY)) {
      imgFreeMonad.classList.add("with-pointer");
      //console.log("imgFreeMonad.onmousemove. " + eve.offsetX + " " + eve.offsetY + " found");
    } else {
      imgFreeMonad.classList.remove("with-pointer");
      //console.log("imgFreeMonad.onmousemove. " + eve.offsetX + " " + eve.offsetY + " no");
    }
  };

  imgFreeMonad.onclick = function(eve) {
    //console.log("imgFreeMonad.onclick. " + eve.offsetX + " " + eve.offsetY);
    let diagramElement = diagramFreeMonad.findElementByPosition(eve.offsetX, eve.offsetY);
    if (diagramElement) {
      diagramElement.clickHandler.call();
    }
  };

  /*
 
  // initial-style-monad.png
  let diagramInitialStyleMonad = new Diagram(770, 1270, [
    // StateHolder context
    , new DiagramElement(new Position(10, 60), new Size(190, 25), function() {
      console.log("highlight StateHolder context");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // loop EditableListOps context
    , new DiagramElement(new Position(60, 130), new Size(225, 30), function() {
      console.log("highlight loop EditableListOps context");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // loop interpret
    , new DiagramElement(new Position(50, 114), new Size(63, 13), function() {
      console.log("highlight loop interpret");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // loop
    , new DiagramElement(new Position(110, 195), new Size(40, 19), function() {
      console.log("highlight loop");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // getKey
    , new DiagramElement(new Position(110, 221), new Size(85, 38), function() {
      console.log("highlight getKey");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // case key of
    , new DiagramElement(new Position(125, 290), new Size(82, 16), function() {
      console.log("highlight case key of");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // up
    , new DiagramElement(new Position(125, 327), new Size(75, 24), function() {
      console.log("highlight up");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // down
    , new DiagramElement(new Position(125, 366), new Size(75, 25), function() {
      console.log("highlight down");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // enter
    , new DiagramElement(new Position(125, 406), new Size(75, 25), function() {
      console.log("highlight enter");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // otherwise
    , new DiagramElement(new Position(125, 445), new Size(98, 27), function() {
      console.log("highlight otherwise");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // exit
    , new DiagramElement(new Position(445, 445), new Size(23, 25), function() {
      console.log("highlight exit");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // main rows
    , new DiagramElement(new Position(110, 593), new Size(74, 14), function() {
      console.log("highlight main rows");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // active cell y
    , new DiagramElement(new Position(110, 637), new Size(85, 16), function() {
      console.log("highlight active cell y");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // debug messages
    , new DiagramElement(new Position(110, 682), new Size(121, 16), function() {
      console.log("highlight debug messages");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // from up to active cell y
    , new DiagramElement(new Position(290, 635), new Size(30, 25), function() {
      console.log("highlight from up to active cell y");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // from up to debug messages
    , new DiagramElement(new Position(290, 675), new Size(30, 30), function() {
      console.log("highlight from up to debug messages");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // from down to active cell y
    , new DiagramElement(new Position(330, 630), new Size(30, 30), function() {
      console.log("highlight from down to active cell y");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // from down to debug messages
    , new DiagramElement(new Position(334, 675), new Size(26, 28), function() {
      console.log("highlight from down to debug messages");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // from enter to main rows
    , new DiagramElement(new Position(370, 581), new Size(30, 34), function() {
      console.log("highlight from enter to main rows");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // from enter to debug messages
    , new DiagramElement(new Position(375, 677), new Size(28, 28), function() {
      console.log("highlight from enter to debug messages");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // main rows listener interpret
    , new DiagramElement(new Position(70, 758), new Size(63, 14), function() {
      console.log("highlight main rows listener interpret");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // main rows listener EditableListOps context
    , new DiagramElement(new Position(65, 780), new Size(220, 20), function() {
      console.log("highlight main rows listener EditableListOps context");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // main rows listener
    , new DiagramElement(new Position(125, 817), new Size(168, 17), function() {
      console.log("highlight main rows listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // main rows listener trigger
    , new DiagramElement(new Position(515, 750), new Size(10, 10), function() {
      console.log("highlight main rows listener trigger");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // main rows listener draw
    , new DiagramElement(new Position(536, 785), new Size(156, 20), function() {
      console.log("highlight main rows listener draw");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // main rows listener log
    , new DiagramElement(new Position(536, 815), new Size(62, 20), function() {
      console.log("highlight main rows listener log");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // active cell y listener interpret
    , new DiagramElement(new Position(70, 882), new Size(63, 15), function() {
      console.log("highlight active cell y listener interpret");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // active cell y listener EditableListOps context
    , new DiagramElement(new Position(68, 906), new Size(217, 20), function() {
      console.log("highlight active cell y listener EditableListOps context");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // active cell y listener
    , new DiagramElement(new Position(125, 941), new Size(184, 19), function() {
      console.log("highlight active cell y listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // active cell y listener trigger
    , new DiagramElement(new Position(495, 875), new Size(10, 10), function() {
      console.log("highlight active cell y listener trigger");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // active cell y listener draw
    , new DiagramElement(new Position(536, 910), new Size(156, 20), function() {
      console.log("highlight active cell y listener draw");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // active cell y listener log
    , new DiagramElement(new Position(536, 940), new Size(61, 20), function() {
      console.log("highlight active cell y listener log");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // debug messages listener interpret
    , new DiagramElement(new Position(70, 1007), new Size(62, 14), function() {
      console.log("highlight debug messages listener interpret");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // debug messages listener EditableListOps context
    , new DiagramElement(new Position(68, 1032), new Size(214, 18), function() {
      console.log("highlight debug messages listener EditableListOps context");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // debug messages listener
    , new DiagramElement(new Position(125, 1067), new Size(225, 18), function() {
      console.log("highlight debug messages listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // debug messages listener trigger
    , new DiagramElement(new Position(475, 1000), new Size(10, 10), function() {
      console.log("highlight debug messages listener trigger");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
    // debug messages listener draw
    , new DiagramElement(new Position(536, 1042), new Size(156, 33), function() {
      console.log("highlight debug messages listener draw");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-initial-style-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---initial-style---");
      animateHighlight(elem, wrapper);
    })
  ]);
  */
});

function animateHighlight(elem, wrapper) {

  if (!isElementInViewport(elem)) {
    wrapper.scrollTop = elem.offsetTop - 40;
  }

  if (window.isRunningTransition) {
    return;
  } else {
    window.isRunningTransition = true;
  }

  let prevColor = elem.style.backgroundColor;
  elem.style.backgroundColor = "rgba(0,0,0,1)";
  let op = 1.0;
  let fadeEffect = setInterval(function() {
    if (op <= 0) {
      window.isRunningTransition = false;
      elem.style.backgroundColor = prevColor;
      clearInterval(fadeEffect);
    } else {
      op = op - 0.1;
      elem.style.backgroundColor = "rgba(0,0,0," + op.toFixed(1) + ")";
    }
  }, 80);
}


function animateHighlightMultiple(elems, wrapper) {

  let topmost = elems.reduce((a, b) => {
    if (a.offsetTop < b.offsetTop) return a;
    else return b;
  });

  if (!isElementInViewport(topmost)) {
    wrapper.scrollTop = topmost.offsetTop - 40;
  }

  if (window.isRunningTransition) {
    return;
  } else {
    window.isRunningTransition = true;
  }

  let prevColor = topmost.style.backgroundColor;
  elems.forEach(elem => {
    elem.style.backgroundColor = "rgba(0,0,0,1)";
  });
  let op = 1.0;
  let fadeEffect = setInterval(function() {
    if (op <= 0) {
      window.isRunningTransition = false;
      elems.forEach(elem => {
        elem.style.backgroundColor = prevColor;
      });
      clearInterval(fadeEffect);
    } else {
      op = op - 0.1;
      let opStr = op.toFixed(1);
      elems.forEach(elem => {
        elem.style.backgroundColor = "rgba(0,0,0," + opStr + ")";
      });
    }
  }, 80);
}

function isElementInViewport (el) { // from https://stackoverflow.com/a/7557433/8569383

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}

function arr(elems) {
  return Array.prototype.slice.call(elems);
}
