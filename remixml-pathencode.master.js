   /** @license
   ** remixml-pathencode v4.0.0: Encodes generic text lossy to URI component
  ** Copyright (c) 2018-2021 by Stephen R. van den Berg <srb@cuci.nl>
 ** License: ISC OR GPL-3.0
** Sponsored by: Cubic Circle, The Netherlands
*/

/** @define {number} */ var DEBUG = 1;
/** @define {number} */ var ALERTS = 0;
                            // error context length
/** @define {number} */ var RUNTIMEDEBUG = 64;
/** @define {number} */ var MEASUREMENT = 0;
/** @define {number} */ var ASSERT = 1;
/** @define {number} */ var VERBOSE = 0;

// Cut BEGIN delete
(function()
{ "use strict";
// Cut END delete

  // Cut BEGIN for externs
  // Cut BEGIN for prepend
  // Cut END for prepend
  // Cut END for externs
  // Cut BEGIN for prepend
  // Cut END for prepend

  const O = Object;

  var g =
  { "encode": encpath,
  };

  if (!O.assign)
    O.defineProperty(O, "assign",
    { "value": function(d, s, i)
      { if (s) for (i in s) d[i] = s[i]; return d;
      }
    });

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
    rxml["addfilter"]("path", encpath);
    return g;
  }

  if (typeof define == "function" && define["amd"])
    define("remixml-pathencode", ["remixml", "transdiacritics"], factory);
  else if (typeof exports == "object")
    O.assign(/** @type{!Object} */(exports),
     factory(require("remixml"), require("transdiacritics")));
  else {
    var W = window;
    factory(W["Remixml"], W["transdiacritics"]);
    W["RemixmlPathencode"] = g;
  }

// Cut BEGIN delete
}).call(this);
// Cut BEGIN end
