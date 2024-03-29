/** @license Copyright (c) 2018-2021 by Stephen R. van den Berg <srb@cuci.nl> */

/** @define {number} */ var DEBUG = 1;
/** @define {number} */ var ALERTS = 0;
                            // error context length
/** @define {number} */ var RUNTIMEDEBUG = 64;
/** @define {number} */ var MEASUREMENT = 0;
/** @define {number} */ var ASSERT = 1;
/** @define {number} */ var VERBOSE = 0;

// Cut BEGIN delete
(() =>
{ "use strict";
// Cut END delete

  // Cut BEGIN for externs
  // Cut BEGIN for prepend
  // Cut END for prepend
  // Cut END for externs
  // Cut BEGIN for prepend
  // Cut END for prepend

  const O = Object;

  const /** !Object */ g =
  { "encode": encpath,
  };

  const /** !RegExp */ nonalphanumrx = /(?:&(?:[^&;\s]*;)?|[^&a-z0-9])+/g;
  const /** !RegExp */ pathendingsrx = /^-+|[\u0300-\u036f]+|-+$/g;

  function /** string */ encpath(/** string */ s)
  { return toascii(s.toLowerCase())
            .replace(nonalphanumrx, "-")
            .replace(pathendingsrx, "");
  }

  var /** function(string):string */ toascii;

  function /** !Object */ factory(/** !Object */ rxml,/** !Object */ diac)
  { toascii = diac["toascii"];
    rxml["add_filter"]("path", encpath);
    return g;
  }

  const /** string */ rxs = "remixml";
  const /** string */ tdcs = "transdiacritics";

  if (typeof define == "function" && define["amd"])
    define("remixml-pathencode", [rxs, tdcs], factory);
  else if (typeof exports == "object")
    O.assign(/** @type{!Object} */(exports),
     factory(require(rxs), require(tdcs)));
  else {
    var W = window;
    W["RemixmlPathencode"] = factory(W["Remixml"], W["Transdiacritics"]);
  }

// Cut BEGIN delete
}).call(this);
// Cut BEGIN end
