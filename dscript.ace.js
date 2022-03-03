/*
* To try in Ace editor, copy and paste into the mode creator
* here : http://ace.c9.io/tool/mode_creator.html
*/

define(function(require, exports, module) {
    "use strict";
    var oop = require("../lib/oop");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
    /* --------------------- START ----------------------------- */
    var DscriptHighlightRules = function() {
    this.$rules = {
    "start" : [
       {
          "token" : "punctuation",
          "regex" : "(\\[)",
          "push" : "main__1"
       },
       {
          "token" : "punctuation",
          "regex" : "(^\\..*\\[)",
          "push" : "main__2"
       },
       {
          "token" : "keyword",
          "regex" : "(^\\\\\\\\.*$)"
       },
       {
          "token" : "comment",
          "regex" : "(^//.*$)"
       },
       {
          "token" : "text",
          "regex" : "(\\`)",
          "push" : "main__3"
       },
       {
          defaultToken : "text",
       }
    ], 
    "main__1" : [
       {
          "token" : "punctuation",
          "regex" : "(\\])",
          "next" : "pop"
       },
       {
          "token" : "variable",
          "regex" : "(.*)(?=\\])"
       },
       {
          "token" : "entity.name.function",
          "regex" : "({,})"
       },
       {
          defaultToken : "text",
       }
    ], 
    "main__2" : [
       {
          "token" : "punctuation",
          "regex" : "(\\])",
          "next" : "pop"
       },
       {
          "token" : "variable",
          "regex" : "(.*)(?=\\])"
       },
       {
          "token" : "entity.name.function",
          "regex" : "({,})"
       },
       {
          defaultToken : "text",
       }
    ], 
    "main__3" : [
       {
          "token" : "text",
          "regex" : "(\\`)",
          "next" : "pop"
       },
       {
          defaultToken : "text",
       }
    ]
    };
    this.normalizeRules();
    };
    /* ------------------------ END ------------------------------ */
    oop.inherits(DscriptHighlightRules, TextHighlightRules);
    exports.DscriptHighlightRules = DscriptHighlightRules;
    });
    