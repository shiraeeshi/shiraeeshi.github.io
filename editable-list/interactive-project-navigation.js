

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
  document.getElementById("code-fragment-global-redraw-loop-definition").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---global-redraw-and-no-observer---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source-global-redraw-loop-definition");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-on-tvars---state-adt").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-on-tvars---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-on-tvars---state-adt");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-on-tvars---initial-state").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-on-tvars---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-on-tvars---initial-state");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-on-tvars---logs-listener").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-on-tvars---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-on-tvars---logs-listener");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-on-tvars---list-listener").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-on-tvars---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-on-tvars---list-listener");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-on-tvars---active-cell-y-listener").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-on-tvars---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-on-tvars---active-cell-y-listener");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-on-tvars---clear-screen").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-on-tvars---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-on-tvars---clear-screen");

    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-on-tvars---keepListeningToKeyPresses").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-on-tvars---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-on-tvars---keepListeningToKeyPresses");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-primitive---state-adt").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-primitive---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-primitive---state-adt");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-primitive---add-listeners").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-primitive---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-primitive---add-listeners");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-primitive---initListeners-invokation").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-primitive---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-primitive---initListeners-invokation");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-primitive---listeners").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-primitive---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-primitive---listeners");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-primitive---clearScreen").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-primitive---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-primitive---clearScreen");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-primitive---initial-listener-call").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-primitive---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-primitive---initial-listener-call");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-primitive---loop-invokation").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-primitive---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-primitive---loop-invokation");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-primitive---loop-definition").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-primitive---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-primitive---loop-definition");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-custom-monad---state-adt").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-custom-monad---state-adt");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-custom-monad---adding-listeners").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-custom-monad---adding-listeners");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-custom-monad---descriptive-adt").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-custom-monad---descriptive-adt");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-custom-monad---descriptive-adt-getters").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-custom-monad---descriptive-adt-getters");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-custom-monad---descriptive-adt-setters").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-custom-monad---descriptive-adt-setters");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-custom-monad---target-monad").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-custom-monad---target-monad");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-custom-monad---target-monad-instance-of-descriptive-monad").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-custom-monad---target-monad-instance-of-descriptive-monad");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-custom-monad---performStateAction").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-custom-monad---performStateAction");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-custom-monad---main-func").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-custom-monad---main-func");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-custom-monad---initialState").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-custom-monad---initialState");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-custom-monad---creating-listeners").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-custom-monad---creating-listeners");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-custom-monad---initRows").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-custom-monad---initRows");
    animateHighlight(elem, wrapper);
  };
  document.getElementById("code-fragment---observer-in-custom-monad---loop").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
    let wrapper = document.getElementById("code-wrapper");
    let elem = document.getElementById("source---observer-in-custom-monad---loop");
    animateHighlight(elem, wrapper);
  };
  /*
  document.getElementById("").onclick = function (eve) {
    document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
    document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
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
  let diagramGlobalRedraw = new Diagram(1024, 768, [
    // initial state
    new DiagramElement(new Position(60, 265), new Size(52, 40), function() {
      // highlight initial state
      console.log("highlight initial state");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---global-redraw-and-no-observer---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---global-redraw-and-no-observer---initial-state");
      animateHighlight(elem, wrapper);
    })
    // loop
    , new DiagramElement(new Position(198, 273), new Size(41, 23), function() {
      // highlight loop
      console.log("highlight loop");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---global-redraw-and-no-observer---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source-global-redraw-loop-definition");
      animateHighlight(elem, wrapper);
    })
    // draw on screen
    , new DiagramElement(new Position(195, 317), new Size(185, 56), function() {
      // highlight drawing on screen
      console.log("highlight drawing on screen");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---global-redraw-and-no-observer---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---global-redraw-and-no-observer---draw-on-screen");
      animateHighlight(elem, wrapper);
    })
    // getKey
    , new DiagramElement(new Position(195, 390), new Size(185, 54), function() {
      // highlight getKey
      console.log("highlight getKey");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---global-redraw-and-no-observer---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---global-redraw-and-no-observer---getKey-invokation");
      animateHighlight(elem, wrapper);
    })
    // case key of
    , new DiagramElement(new Position(212, 475), new Size(107, 24), function() {
      // highlight "case key of"
      console.log("highlight 'case key of'");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---global-redraw-and-no-observer---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---global-redraw-and-no-observer---case-key-of");
      animateHighlight(elem, wrapper);
    })
    // up/down/enter
    , new DiagramElement(new Position(214, 521), new Size(169, 41), function() {
      // highlight a case when key is up/down/enter
      console.log("highlight a case when key is up/down/enter");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---global-redraw-and-no-observer---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elems = document.getElementsByClassName("source---global-redraw-and-no-observer---case-key-up-down-enter");
      animateHighlightMultiple(arr(elems), wrapper);
    })
    // otherwise
    , new DiagramElement(new Position(215, 583), new Size(169, 41), function() {
      // highlight a case when key is otherwise
      console.log("highlight a case when key is otherwise");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---global-redraw-and-no-observer---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---global-redraw-and-no-observer---case-key-otherwise");
      animateHighlight(elem, wrapper);
    })
    // new state
    , new DiagramElement(new Position(521, 606), new Size(95, 27), function() {
      // highlight new state
      console.log("highlight new state");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---global-redraw-and-no-observer---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elems = document.getElementsByClassName("source---global-redraw-and-no-observer---new-state");
      animateHighlightMultiple(arr(elems), wrapper);
    })
    // exit
    , new DiagramElement(new Position(420, 740), new Size(83, 25), function() {
      // highlight exit
      console.log("highlight exit");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---global-redraw-and-no-observer---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elems = document.getElementsByClassName("source---global-redraw-and-no-observer---exit");
      animateHighlightMultiple(arr(elems), wrapper);
    })
  ]);

  let resizeObserverOfGlobalRedrawDiagram = new ResizeObserver(entries => {
    let img = entries[0];
    if (img.contentRect) {
      console.log("resize observer x = " + img.contentRect.width + ", y = " + img.contentRect.height)
      diagramGlobalRedraw.handleResize(img.contentRect.width, img.contentRect.height);
    } else if (img.contentBoxSize && img.contentBoxSize.constructor === Array) {
      let width = img.contentBoxSize[0].inlineSize;
      let height = img.contentBoxSize[0].blockSize;
      diagramGlobalRedraw.handleResize(width, height);
    } else if (img.contentBoxSize && img.contentBoxSize.constructor === Object) {
      let width = img.contentBoxSize.inlineSize;
      let height = img.contentBoxSize.blockSize;
      diagramGlobalRedraw.handleResize(width, height);
    } else {
      console.log("resize observer x = " + img.contentRect.width + ", y = " + img.contentRect.height)
      diagramGlobalRedraw.handleResize(img.contentRect.width, img.contentRect.height);
    }
  });
  resizeObserverOfGlobalRedrawDiagram.observe(document.querySelector("#diagram-global-redraw"));

  let imgGlobalRedraw = document.getElementById("diagram-global-redraw");

  imgGlobalRedraw.onmousemove = function(eve) {
    //console.log("imgGlobalRedraw.onmouseover. " + eve.offsetX + " " + eve.offsetY);
    if (diagramGlobalRedraw.findElementByPosition(eve.offsetX, eve.offsetY)) {
      imgGlobalRedraw.classList.add("with-pointer");
      //console.log("imgGlobalRedraw.onmouseover. " + eve.offsetX + " " + eve.offsetY + " found");
    } else {
      imgGlobalRedraw.classList.remove("with-pointer");
      //console.log("imgGlobalRedraw.onmouseover. " + eve.offsetX + " " + eve.offsetY + " no");
    }
  };

  imgGlobalRedraw.onclick = function(eve) {
    //console.log("imgGlobalRedraw.onclick. " + eve.offsetX + " " + eve.offsetY);
    let diagramElement = diagramGlobalRedraw.findElementByPosition(eve.offsetX, eve.offsetY);
    if (diagramElement) {
      diagramElement.clickHandler.call();
    }
  };

  let diagramTVars = new Diagram(700, 1200, [
    // keepListeningToKeyPress
    new DiagramElement(new Position(60, 121), new Size(194, 19), function() {
      console.log("highlight keepListeningToKeyPress");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---keepListeningToKeyPresses-definition-line");
      animateHighlight(elem, wrapper);
    })
    // getKey
    , new DiagramElement(new Position(60, 151), new Size(85, 38), function() {
      console.log("highlight getKey");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---getKey");
      animateHighlight(elem, wrapper);
    })
    // case key of
    , new DiagramElement(new Position(75, 218), new Size(82, 18), function() {
      console.log("highlight case key of");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---case-key-of");
      animateHighlight(elem, wrapper);
    })
    // key up
    , new DiagramElement(new Position(75, 257), new Size(75, 24), function() {
      console.log("highlight key up");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---case-key-up");
      animateHighlight(elem, wrapper);
    })
    // key down
    , new DiagramElement(new Position(75, 296), new Size(75, 25), function() {
      console.log("highlight key down");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---case-key-down");
      animateHighlight(elem, wrapper);
    })
    // key enter
    , new DiagramElement(new Position(75, 336), new Size(75, 25), function() {
      console.log("highlight key enter");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---case-key-enter");
      animateHighlight(elem, wrapper);
    })
    // key otherwise
    , new DiagramElement(new Position(75, 375), new Size(98, 27), function() {
      console.log("highlight key otherwise");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---case-key-otherwise");
      animateHighlight(elem, wrapper);
    })
    // exit
    , new DiagramElement(new Position(394, 372), new Size(26, 31), function() {
      console.log("highlight exit");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elems = document.getElementsByClassName("source---observer-on-tvars---exit");
      animateHighlightMultiple(arr(elems), wrapper);
    })
    // main rows TVar
    , new DiagramElement(new Position(57, 521), new Size(115, 16), function() {
      console.log("highlight main rows TVar");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---main-rows-tvar");
      animateHighlight(elem, wrapper);
    })
    // active cell y TVar
    , new DiagramElement(new Position(58, 566), new Size(125, 17), function() {
      console.log("highlight active cell y TVar");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---highlighted-row-index-tvar");
      animateHighlight(elem, wrapper);
    })
    // debug messages TVar
    , new DiagramElement(new Position(58, 610), new Size(161, 18), function() {
      console.log("highlight debug messages TVar");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---debug-messages-tvar");
      animateHighlight(elem, wrapper);
    })
    // thread of main rows listener
    , new DiagramElement(new Position(42, 708), new Size(185, 17), function() {
      console.log("highlight thread of main rows listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---list-listener");
      animateHighlight(elem, wrapper);
    })
    // thread of active cell y listener
    , new DiagramElement(new Position(43, 836), new Size(195, 17), function() {
      console.log("highlight thread of active cell y listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---active-cell-y-listener");
      animateHighlight(elem, wrapper);
    })
    // thread of debug messages listener
    , new DiagramElement(new Position(43, 956), new Size(231, 17), function() {
      console.log("highlight thread of debug messages listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---logs-listener");
      animateHighlight(elem, wrapper);
    })
    // triggering main rows listener
    , new DiagramElement(new Position(463, 678), new Size(14, 13), function() {
      console.log("highlight triggering main rows listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---triggering-main-rows-listener");
      animateHighlight(elem, wrapper);
    })
    // triggering active cell y listener
    , new DiagramElement(new Position(444, 804), new Size(12, 12), function() {
      console.log("highlight triggering active cell y listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---triggering-highlighted-cell-listener");
      animateHighlight(elem, wrapper);
    })
    // triggering debug messages listener
    , new DiagramElement(new Position(424, 929), new Size(13, 12), function() {
      console.log("highlight triggering debug messages listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---triggering-debug-messages-listener");
      animateHighlight(elem, wrapper);
    })
    // draw on screen of main rows listener
    , new DiagramElement(new Position(486, 702), new Size(156, 33), function() {
      console.log("highlight draw on screen of main rows listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---main-rows-listener-draw");
      animateHighlight(elem, wrapper);
    })
    // log of main rows listener
    , new DiagramElement(new Position(486, 748), new Size(61, 33), function() {
      console.log("highlight log of main rows listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---main-rows-listener-log");
      animateHighlight(elem, wrapper);
    })
    // draw on screen of active cell y listener
    , new DiagramElement(new Position(486, 827), new Size(156, 33), function() {
      console.log("highlight draw on screen of active cell y listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---active-cell-y-listener-draw");
      animateHighlight(elem, wrapper);
    })
    // log of active cell y listener
    , new DiagramElement(new Position(486, 873), new Size(61, 33), function() {
      console.log("highlight log of active cell y listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---active-cell-y-listener-log");
      animateHighlight(elem, wrapper);
    })
    // draw on screen of debug messages listener
    , new DiagramElement(new Position(486, 952), new Size(156, 33), function() {
      console.log("highlight draw on screen of debug messages listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---debug-messages-listener-draw");
      animateHighlight(elem, wrapper);
    })
    // write to active cell y TVar from up button press
    , new DiagramElement(new Position(239, 558), new Size(31, 32), function() {
      console.log("highlight write to active cell y TVar from up button press");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---write2tvar-active-cell-y-from-up-key-press");
      animateHighlight(elem, wrapper);
    })
    // write to debug messages TVar from up button press
    , new DiagramElement(new Position(241, 602), new Size(31, 33), function() {
      console.log("highlight write to debug messages TVar from up button press");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---write2tvar-debug-messages-from-up-key-press");
      animateHighlight(elem, wrapper);
    })
    // write to active cell y TVar from down button press
    , new DiagramElement(new Position(281, 559), new Size(33, 31), function() {
      console.log("highlight write to active cell y TVar from down button press");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---write2tvar-active-cell-y-from-down-key-press");
      animateHighlight(elem, wrapper);
    })
    // write to debug messages TVar from down button press
    , new DiagramElement(new Position(282, 602), new Size(35, 33), function() {
      console.log("highlight write to debug messages TVar from down button press");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---write2tvar-debug-messages-from-down-key-press");
      animateHighlight(elem, wrapper);
    })
    // write to main rows TVar from enter button press
    , new DiagramElement(new Position(320, 513), new Size(34, 32), function() {
      console.log("highlight write to main rows TVar from enter button press");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---write2tvar-main-rows-from-enter-key-press");
      animateHighlight(elem, wrapper);
    })
    // write to debug messages TVar from enter button press
    , new DiagramElement(new Position(324, 605), new Size(30, 30), function() {
      console.log("highlight write to debug messages TVar from enter button press");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-on-tvars---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-on-tvars---write2tvar-debug-messages-from-enter-key-press");
      animateHighlight(elem, wrapper);
    })
  ]);

  let resizeObserverOfTVarsDiagram = new ResizeObserver(entries => {
    let img = entries[0];
    if (img.contentRect) {
      console.log("resize observer x = " + img.contentRect.width + ", y = " + img.contentRect.height)
      diagramTVars.handleResize(img.contentRect.width, img.contentRect.height);
    } else if (img.contentBoxSize && img.contentBoxSize.constructor === Array) {
      let width = img.contentBoxSize[0].inlineSize;
      let height = img.contentBoxSize[0].blockSize;
      diagramTVars.handleResize(width, height);
    } else if (img.contentBoxSize && img.contentBoxSize.constructor === Object) {
      let width = img.contentBoxSize.inlineSize;
      let height = img.contentBoxSize.blockSize;
      diagramTVars.handleResize(width, height);
    } else {
      console.log("resize observer x = " + img.contentRect.width + ", y = " + img.contentRect.height)
      diagramTVars.handleResize(img.contentRect.width, img.contentRect.height);
    }
  });
  resizeObserverOfTVarsDiagram.observe(document.querySelector("#diagram-tvars"));

  let imgTVars = document.getElementById("diagram-tvars");

  imgTVars.onmousemove = function(eve) {
    //console.log("imgTVars.onmousemove. " + eve.offsetX + " " + eve.offsetY);
    if (diagramTVars.findElementByPosition(eve.offsetX, eve.offsetY)) {
      imgTVars.classList.add("with-pointer");
      //console.log("imgTVars.onmousemove. " + eve.offsetX + " " + eve.offsetY + " found");
    } else {
      imgTVars.classList.remove("with-pointer");
      //console.log("imgTVars.onmousemove. " + eve.offsetX + " " + eve.offsetY + " no");
    }
  };

  imgTVars.onclick = function(eve) {
    //console.log("imgTVars.onclick. " + eve.offsetX + " " + eve.offsetY);
    let diagramElement = diagramTVars.findElementByPosition(eve.offsetX, eve.offsetY);
    if (diagramElement) {
      diagramElement.clickHandler.call();
    }
  };

  // primitive-observer-in-io.png
  // canvas size: 1024, 768
  // initial state: new Position(59, 265), new Size(52, 39)
  // loop: new Position(197, 273), new Size(42, 22)
  // getKey: new Position(195, 316), new Size(149, 45)
  // case key of: new Position(213, 398), new Size(106, 24)
  // up/down/enter: new Position(225, 444), new Size(133, 21)
  // invoke listeners: new Position(228, 482), new Size(183, 74)
  // otherwise: new Position(215, 583), new Size(169, 41)
  // new state: new Position(520, 529), new Size(96, 22)
  // exit: new Position(421, 738), new Size(79, 28)
  // : new Position(), new Size()
  
  let diagramPrimitiveObserver = new Diagram(1024, 768, [
    // initial state
    new DiagramElement(new Position(59, 265), new Size(52, 39), function() {
      console.log("highlight initial state");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-primitive---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-primitive---initListeners-invokation");
      animateHighlight(elem, wrapper);
    })
    // loop
    , new DiagramElement(new Position(197, 273), new Size(42, 22), function() {
      console.log("highlight loop");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-primitive---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-primitive---loop-definition-2-lines");
      animateHighlight(elem, wrapper);
    })
    // getKey
    , new DiagramElement(new Position(195, 316), new Size(149, 45), function() {
      console.log("highlight getKey");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-primitive---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-primitive---getKey");
      animateHighlight(elem, wrapper);
    })
    // case key of
    , new DiagramElement(new Position(213, 398), new Size(106, 24), function() {
      console.log("highlight case key of");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-primitive---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-primitive---case-key-of");
      animateHighlight(elem, wrapper);
    })
    // up/down/enter
    , new DiagramElement(new Position(225, 444), new Size(133, 21), function() {
      console.log("highlight up/down/enter");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-primitive---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elems = document.getElementsByClassName("source---observer-primitive---case-key-up-down-enter");
      animateHighlightMultiple(arr(elems), wrapper);
    })
    // invoke listeners
    , new DiagramElement(new Position(228, 482), new Size(183, 74), function() {
      console.log("highlight invoke listeners");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-primitive---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elems = document.getElementsByClassName("source---observer-primitive---invoke-listeners");
      animateHighlightMultiple(arr(elems), wrapper);
    })
    // otherwise
    , new DiagramElement(new Position(215, 583), new Size(169, 41), function() {
      console.log("highlight otherwise");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-primitive---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-primitive---otherwise");
      animateHighlight(elem, wrapper);
    })
    // new state
    , new DiagramElement(new Position(520, 529), new Size(96, 22), function() {
      console.log("highlight new state");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-primitive---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elems = document.getElementsByClassName("source---observer-primitive---new-state");
      animateHighlightMultiple(arr(elems), wrapper);
    })
    // exit
    , new DiagramElement(new Position(421, 738), new Size(79, 28), function() {
      console.log("highlight exit");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-primitive---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elems = document.getElementsByClassName("source---observer-primitive---exit");
      animateHighlightMultiple(arr(elems), wrapper);
    })
  ]);

  let resizeObserverOfPrimitiveObserverDiagram = new ResizeObserver(entries => {
    let img = entries[0];
    if (img.contentRect) {
      console.log("resize observer x = " + img.contentRect.width + ", y = " + img.contentRect.height)
      diagramPrimitiveObserver.handleResize(img.contentRect.width, img.contentRect.height);
    } else if (img.contentBoxSize && img.contentBoxSize.constructor === Array) {
      let width = img.contentBoxSize[0].inlineSize;
      let height = img.contentBoxSize[0].blockSize;
      diagramPrimitiveObserver.handleResize(width, height);
    } else if (img.contentBoxSize && img.contentBoxSize.constructor === Object) {
      let width = img.contentBoxSize.inlineSize;
      let height = img.contentBoxSize.blockSize;
      diagramPrimitiveObserver.handleResize(width, height);
    } else {
      console.log("resize observer x = " + img.contentRect.width + ", y = " + img.contentRect.height)
      diagramPrimitiveObserver.handleResize(img.contentRect.width, img.contentRect.height);
    }
  });
  resizeObserverOfPrimitiveObserverDiagram.observe(document.querySelector("#diagram-primitive-observer-in-io"));

  let imgPrimitiveObserver = document.getElementById("diagram-primitive-observer-in-io");

  imgPrimitiveObserver.onmousemove = function(eve) {
    //console.log("imgPrimitiveObserver.onmousemove. " + eve.offsetX + " " + eve.offsetY);
    if (diagramPrimitiveObserver.findElementByPosition(eve.offsetX, eve.offsetY)) {
      imgPrimitiveObserver.classList.add("with-pointer");
      //console.log("imgPrimitiveObserver.onmousemove. " + eve.offsetX + " " + eve.offsetY + " found");
    } else {
      imgPrimitiveObserver.classList.remove("with-pointer");
      //console.log("imgPrimitiveObserver.onmousemove. " + eve.offsetX + " " + eve.offsetY + " no");
    }
  };

  imgPrimitiveObserver.onclick = function(eve) {
    //console.log("imgPrimitiveObserver.onclick. " + eve.offsetX + " " + eve.offsetY);
    let diagramElement = diagramPrimitiveObserver.findElementByPosition(eve.offsetX, eve.offsetY);
    if (diagramElement) {
      diagramElement.clickHandler.call();
    }
  };

  let diagramCustomMonad = new Diagram(700, 1200, [
    // loop
    new DiagramElement(new Position(60, 125), new Size(40, 20), function() {
      console.log("highlight loop");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---loop-definition-2-lines");
      animateHighlight(elem, wrapper);
    })
    // getKey
    , new DiagramElement(new Position(60, 151), new Size(85, 38), function() {
      console.log("highlight getKey");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---getKey");
      animateHighlight(elem, wrapper);
    })
    // case key of
    , new DiagramElement(new Position(75, 218), new Size(82, 18), function() {
      console.log("highlight case key of");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---case-key-of");
      animateHighlight(elem, wrapper);
    })
    // key up
    , new DiagramElement(new Position(75, 257), new Size(75, 24), function() {
      console.log("highlight key up");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---case-key-up");
      animateHighlight(elem, wrapper);
    })
    // key down
    , new DiagramElement(new Position(75, 296), new Size(75, 25), function() {
      console.log("highlight key down");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---case-key-down");
      animateHighlight(elem, wrapper);
    })
    // key enter
    , new DiagramElement(new Position(75, 336), new Size(75, 25), function() {
      console.log("highlight key enter");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---case-key-enter");
      animateHighlight(elem, wrapper);
    })
    // key otherwise
    , new DiagramElement(new Position(75, 375), new Size(98, 27), function() {
      console.log("highlight key otherwise");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---case-key-otherwise");
      animateHighlight(elem, wrapper);
    })
    // exit
    , new DiagramElement(new Position(394, 372), new Size(26, 31), function() {
      console.log("highlight exit");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elems = document.getElementsByClassName("source---observer-in-custom-monad---exit");
      animateHighlightMultiple(arr(elems), wrapper);
    })
    // main rows field
    , new DiagramElement(new Position(58, 522), new Size(77, 16), function() {
      console.log("highlight main rows field");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---main-rows-field");
      animateHighlight(elem, wrapper);
    })
    // active cell y field
    , new DiagramElement(new Position(58, 565), new Size(89, 18), function() {
      console.log("highlight active cell y field");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---highlighted-row-index-field");
      animateHighlight(elem, wrapper);
    })
    // debug messages field
    , new DiagramElement(new Position(60, 611), new Size(122, 16), function() {
      console.log("highlight debug messages field");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---debug-messages-field");
      animateHighlight(elem, wrapper);
    })
    // main rows listener
    , new DiagramElement(new Position(73, 709), new Size(134, 16), function() {
      console.log("highlight main rows listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---list-listener");
      animateHighlight(elem, wrapper);
    })
    // active cell y listener
    , new DiagramElement(new Position(73, 836), new Size(145, 18), function() {
      console.log("highlight active cell y listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---active-cell-y-listener");
      animateHighlight(elem, wrapper);
    })
    // debug messages listener
    , new DiagramElement(new Position(73, 956), new Size(181, 17), function() {
      console.log("highlight debug messages listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---logs-listener");
      animateHighlight(elem, wrapper);
    })
    // triggering main rows listener
    , new DiagramElement(new Position(463, 678), new Size(14, 13), function() {
      console.log("highlight triggering main rows listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---triggering-main-rows-listener");
      animateHighlight(elem, wrapper);
    })
    // triggering active cell y listener
    , new DiagramElement(new Position(444, 804), new Size(12, 12), function() {
      console.log("highlight triggering active cell y listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---triggering-highlighted-cell-listener");
      animateHighlight(elem, wrapper);
    })
    // triggering debug messages listener
    , new DiagramElement(new Position(424, 929), new Size(13, 12), function() {
      console.log("highlight triggering debug messages listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---triggering-debug-messages-listener");
      animateHighlight(elem, wrapper);
    })
    // draw on screen of main rows listener
    , new DiagramElement(new Position(486, 702), new Size(156, 33), function() {
      console.log("highlight draw on screen of main rows listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---main-rows-listener-draw");
      animateHighlight(elem, wrapper);
    })
    // log of main rows listener
    , new DiagramElement(new Position(486, 748), new Size(61, 33), function() {
      console.log("highlight log of main rows listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---main-rows-listener-log");
      animateHighlight(elem, wrapper);
    })
    // draw on screen of active cell y listener
    , new DiagramElement(new Position(486, 827), new Size(156, 33), function() {
      console.log("highlight draw on screen of active cell y listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elems = document.getElementsByClassName("source---observer-in-custom-monad---active-cell-y-listener-draw");
      animateHighlightMultiple(arr(elems), wrapper);
    })
    // log of active cell y listener
    , new DiagramElement(new Position(486, 873), new Size(61, 33), function() {
      console.log("highlight log of active cell y listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---active-cell-y-listener-log");
      animateHighlight(elem, wrapper);
    })
    // draw on screen of debug messages listener
    , new DiagramElement(new Position(486, 952), new Size(156, 33), function() {
      console.log("highlight draw on screen of debug messages listener");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---debug-messages-listener-draw");
      animateHighlight(elem, wrapper);
    })
    // write to active cell y field from up button press
    , new DiagramElement(new Position(239, 558), new Size(31, 32), function() {
      console.log("highlight write to active cell y field from up button press");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---write2field-active-cell-y-from-up-key-press");
      animateHighlight(elem, wrapper);
    })
    // write to debug messages field from up button press
    , new DiagramElement(new Position(241, 602), new Size(31, 33), function() {
      console.log("highlight write to debug messages field from up button press");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---write2field-debug-messages-from-up-key-press");
      animateHighlight(elem, wrapper);
    })
    // write to active cell y field from down button press
    , new DiagramElement(new Position(281, 559), new Size(33, 31), function() {
      console.log("highlight write to active cell y field from down button press");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---write2field-active-cell-y-from-down-key-press");
      animateHighlight(elem, wrapper);
    })
    // write to debug messages field from down button press
    , new DiagramElement(new Position(282, 602), new Size(35, 33), function() {
      console.log("highlight write to debug messages field from down button press");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---write2field-debug-messages-from-down-key-press");
      animateHighlight(elem, wrapper);
    })
    // write to main rows field from enter button press
    , new DiagramElement(new Position(320, 513), new Size(34, 32), function() {
      console.log("highlight write to main rows field from enter button press");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---write2field-main-rows-from-enter-key-press");
      animateHighlight(elem, wrapper);
    })
    // write to debug messages field from enter button press
    , new DiagramElement(new Position(324, 605), new Size(30, 30), function() {
      console.log("highlight write to debug messages field from enter button press");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---write2field-debug-messages-from-enter-key-press");
      animateHighlight(elem, wrapper);
    })
  ]);

  let resizeObserverOfCustomMonadDiagram = new ResizeObserver(entries => {
    let img = entries[0];
    if (img.contentRect) {
      console.log("resize observer x = " + img.contentRect.width + ", y = " + img.contentRect.height)
      diagramCustomMonad.handleResize(img.contentRect.width, img.contentRect.height);
    } else if (img.contentBoxSize && img.contentBoxSize.constructor === Array) {
      let width = img.contentBoxSize[0].inlineSize;
      let height = img.contentBoxSize[0].blockSize;
      diagramCustomMonad.handleResize(width, height);
    } else if (img.contentBoxSize && img.contentBoxSize.constructor === Object) {
      let width = img.contentBoxSize.inlineSize;
      let height = img.contentBoxSize.blockSize;
      diagramCustomMonad.handleResize(width, height);
    } else {
      console.log("resize observer x = " + img.contentRect.width + ", y = " + img.contentRect.height)
      diagramCustomMonad.handleResize(img.contentRect.width, img.contentRect.height);
    }
  });
  resizeObserverOfCustomMonadDiagram.observe(document.querySelector("#diagram-observer-in-custom-monad"));

  let imgCustomMonad = document.getElementById("diagram-observer-in-custom-monad");

  imgCustomMonad.onmousemove = function(eve) {
    //console.log("imgCustomMonad.onmousemove. " + eve.offsetX + " " + eve.offsetY);
    if (diagramCustomMonad.findElementByPosition(eve.offsetX, eve.offsetY)) {
      imgCustomMonad.classList.add("with-pointer");
      //console.log("imgCustomMonad.onmousemove. " + eve.offsetX + " " + eve.offsetY + " found");
    } else {
      imgCustomMonad.classList.remove("with-pointer");
      //console.log("imgCustomMonad.onmousemove. " + eve.offsetX + " " + eve.offsetY + " no");
    }
  };

  imgCustomMonad.onclick = function(eve) {
    //console.log("imgCustomMonad.onclick. " + eve.offsetX + " " + eve.offsetY);
    let diagramElement = diagramCustomMonad.findElementByPosition(eve.offsetX, eve.offsetY);
    if (diagramElement) {
      diagramElement.clickHandler.call();
    }
  };


  // DictStateHolder-6.png

  let diagramTargetMonad = new Diagram(1024, 768, [
    // DictStateHolder
    new DiagramElement(new Position(78, 105), new Size(124, 24), function() {
      console.log("highlight DictStateHolder");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---target-monad");
      animateHighlight(elem, wrapper);
    })
    // updateList
    , new DiagramElement(new Position(40, 225), new Size(150, 40), function() {
      console.log("highlight updateList");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---updateList");
      animateHighlight(elem, wrapper);
    })
    // updateActiveCellY
    , new DiagramElement(new Position(40, 285), new Size(220, 40), function() {
      console.log("highlight updateActiveCellY");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---updateActiveCellY");
      animateHighlight(elem, wrapper);
    })
    // log
    , new DiagramElement(new Position(40, 345), new Size(85, 40), function() {
      console.log("highlight log");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---log");
      animateHighlight(elem, wrapper);
    })
    // getList
    , new DiagramElement(new Position(815, 225), new Size(169, 40), function() {
      console.log("highlight getList");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---getList");
      animateHighlight(elem, wrapper);
    })
    // getActiveCellY
    , new DiagramElement(new Position(815, 285), new Size(169, 40), function() {
      console.log("highlight getActiveCellY");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---getActiveCellY");
      animateHighlight(elem, wrapper);
    })
    // getLogs
    , new DiagramElement(new Position(815, 345), new Size(169, 40), function() {
      console.log("highlight getLogs");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---getLogs");
      animateHighlight(elem, wrapper);
    })
    // AppStateData
    , new DiagramElement(new Position(444, 161), new Size(130, 24), function() {
      console.log("highlight AppStateData");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---AppStateData");
      animateHighlight(elem, wrapper);
    })
    // rows
    , new DiagramElement(new Position(375, 225), new Size(190, 40), function() {
      console.log("highlight rows");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---main-rows-field");
      animateHighlight(elem, wrapper);
    })
    // activeCellY
    , new DiagramElement(new Position(375, 285), new Size(245, 40), function() {
      console.log("highlight activeCellY");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---highlighted-row-index-field");
      animateHighlight(elem, wrapper);
    })
    // debugMessages
    , new DiagramElement(new Position(375, 345), new Size(260, 40), function() {
      console.log("highlight debugMessages");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---debug-messages-field");
      animateHighlight(elem, wrapper);
    })
    // listeners
    , new DiagramElement(new Position(386, 413), new Size(333, 24), function() {
      console.log("highlight listeners");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---listeners-field");
      animateHighlight(elem, wrapper);
    })
    // rowsListeners
    , new DiagramElement(new Position(405, 465), new Size(155, 40), function() {
      console.log("highlight rowsListeners");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---rowsListeners");
      animateHighlight(elem, wrapper);
    })
    // activeCellYListeners
    , new DiagramElement(new Position(405, 525), new Size(210, 40), function() {
      console.log("highlight activeCellYListeners");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---activeCellYListeners");
      animateHighlight(elem, wrapper);
    })
    // debugMessagesListeners
    , new DiagramElement(new Position(405, 585), new Size(250, 40), function() {
      console.log("highlight debugMessagesListeners");
      document.querySelectorAll("#code-wrapper > div").forEach((el) => el.style.display = "none");
      document.getElementById("source---observer-in-custom-monad---main").style.display = "block";
      let wrapper = document.getElementById("code-wrapper");
      let elem = document.getElementById("source---observer-in-custom-monad---debugMessagesListeners");
      animateHighlight(elem, wrapper);
    })
  ]);

  let resizeObserverOfTargetMonadDiagram = new ResizeObserver(entries => {
    let img = entries[0];
    if (img.contentRect) {
      console.log("resize observer x = " + img.contentRect.width + ", y = " + img.contentRect.height)
      diagramTargetMonad.handleResize(img.contentRect.width, img.contentRect.height);
    } else if (img.contentBoxSize && img.contentBoxSize.constructor === Array) {
      let width = img.contentBoxSize[0].inlineSize;
      let height = img.contentBoxSize[0].blockSize;
      diagramTargetMonad.handleResize(width, height);
    } else if (img.contentBoxSize && img.contentBoxSize.constructor === Object) {
      let width = img.contentBoxSize.inlineSize;
      let height = img.contentBoxSize.blockSize;
      diagramTargetMonad.handleResize(width, height);
    } else {
      console.log("resize observer x = " + img.contentRect.width + ", y = " + img.contentRect.height)
      diagramTargetMonad.handleResize(img.contentRect.width, img.contentRect.height);
    }
  });
  resizeObserverOfTargetMonadDiagram.observe(document.querySelector("#diagram-target-monad"));

  let imgTargetMonad = document.getElementById("diagram-target-monad");

  imgTargetMonad.onmousemove = function(eve) {
    //console.log("imgTargetMonad.onmousemove. " + eve.offsetX + " " + eve.offsetY);
    if (diagramTargetMonad.findElementByPosition(eve.offsetX, eve.offsetY)) {
      imgTargetMonad.classList.add("with-pointer");
      //console.log("imgTargetMonad.onmousemove. " + eve.offsetX + " " + eve.offsetY + " found");
    } else {
      imgTargetMonad.classList.remove("with-pointer");
      //console.log("imgTargetMonad.onmousemove. " + eve.offsetX + " " + eve.offsetY + " no");
    }
  };

  imgTargetMonad.onclick = function(eve) {
    //console.log("imgTargetMonad.onclick. " + eve.offsetX + " " + eve.offsetY);
    let diagramElement = diagramTargetMonad.findElementByPosition(eve.offsetX, eve.offsetY);
    if (diagramElement) {
      diagramElement.clickHandler.call();
    }
  };

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
