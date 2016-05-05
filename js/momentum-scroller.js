;(function(){var $JSCompiler_prototypeAlias$$, $goog$global$$ = this;
function $goog$typeOf$$($value$$75$$) {
  var $s$$2$$ = typeof $value$$75$$;
  if ("object" == $s$$2$$) {
    if ($value$$75$$) {
      if ($value$$75$$ instanceof Array) {
        return "array";
      }
      if ($value$$75$$ instanceof Object) {
        return $s$$2$$;
      }
      var $className$$1$$ = Object.prototype.toString.call($value$$75$$);
      if ("[object Window]" == $className$$1$$) {
        return "object";
      }
      if ("[object Array]" == $className$$1$$ || "number" == typeof $value$$75$$.length && "undefined" != typeof $value$$75$$.splice && "undefined" != typeof $value$$75$$.propertyIsEnumerable && !$value$$75$$.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == $className$$1$$ || "undefined" != typeof $value$$75$$.call && "undefined" != typeof $value$$75$$.propertyIsEnumerable && !$value$$75$$.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == $s$$2$$ && "undefined" == typeof $value$$75$$.call) {
      return "object";
    }
  }
  return $s$$2$$;
}
function $goog$isArrayLike$$($val$$4$$) {
  var $type$$84$$ = $goog$typeOf$$($val$$4$$);
  return "array" == $type$$84$$ || "object" == $type$$84$$ && "number" == typeof $val$$4$$.length;
}
function $goog$isString$$($val$$6$$) {
  return "string" == typeof $val$$6$$;
}
function $goog$isObject$$($val$$10$$) {
  var $type$$85$$ = typeof $val$$10$$;
  return "object" == $type$$85$$ && null != $val$$10$$ || "function" == $type$$85$$;
}
var $goog$UID_PROPERTY_$$ = "closure_uid_" + (1E9 * Math.random() >>> 0), $goog$uidCounter_$$ = 0, $goog$now$$ = Date.now || function() {
  return +new Date;
};
function $goog$exportSymbol$$($publicPath$$, $object$$) {
  var $parts$$inline_22$$ = $publicPath$$.split("."), $cur$$inline_23$$ = $goog$global$$;
  $parts$$inline_22$$[0] in $cur$$inline_23$$ || !$cur$$inline_23$$.execScript || $cur$$inline_23$$.execScript("var " + $parts$$inline_22$$[0]);
  for (var $part$$inline_24$$;$parts$$inline_22$$.length && ($part$$inline_24$$ = $parts$$inline_22$$.shift());) {
    $parts$$inline_22$$.length || void 0 === $object$$ ? $cur$$inline_23$$[$part$$inline_24$$] ? $cur$$inline_23$$ = $cur$$inline_23$$[$part$$inline_24$$] : $cur$$inline_23$$ = $cur$$inline_23$$[$part$$inline_24$$] = {} : $cur$$inline_23$$[$part$$inline_24$$] = $object$$;
  }
}
function $goog$inherits$$($childCtor$$, $parentCtor$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$$.prototype;
  $childCtor$$.$superClass_$ = $parentCtor$$.prototype;
  $childCtor$$.prototype = new $tempCtor$$;
  $childCtor$$.prototype.constructor = $childCtor$$;
  $childCtor$$.$base$ = function $$childCtor$$$$base$$($me$$, $methodName$$, $var_args$$46$$) {
    for (var $args$$1$$ = Array(arguments.length - 2), $i$$9$$ = 2;$i$$9$$ < arguments.length;$i$$9$$++) {
      $args$$1$$[$i$$9$$ - 2] = arguments[$i$$9$$];
    }
    return $parentCtor$$.prototype[$methodName$$].apply($me$$, $args$$1$$);
  };
}
;var $rflect$browser$transitionend$VENDOR_TRANSITION_END_NAMES$$ = ["webkitTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd"];
"CSSMatrix" in $goog$global$$ || function() {
  function $CSSMatrix$$1$$($opt_matrix$$3$$) {
    $opt_matrix$$3$$ ? this.setMatrixValue($opt_matrix$$3$$) : this.$i$();
    return this;
  }
  $CSSMatrix$$1$$.prototype.setMatrixValue = function $$CSSMatrix$$1$$$$setMatrixValue$($parts$$3_string$$3$$) {
    $parts$$3_string$$3$$ = String($parts$$3_string$$3$$).trim();
    this.$i$();
    if ("none" != $parts$$3_string$$3$$) {
      var $type$$87$$ = $parts$$3_string$$3$$.slice(0, $parts$$3_string$$3$$.indexOf("("));
      if ("matrix3d" == $type$$87$$) {
        $parts$$3_string$$3$$ = $parts$$3_string$$3$$.slice(9, -1).split(",").map(function($part$$2$$) {
          return parseFloat($part$$2$$);
        }), this.m11 = this.$b$ = $parts$$3_string$$3$$[0], this.m12 = this.$f$ = $parts$$3_string$$3$$[1], this.m13 = $parts$$3_string$$3$$[2], this.m14 = $parts$$3_string$$3$$[3], this.m21 = this.$g$ = $parts$$3_string$$3$$[4], this.m22 = this.$a$ = $parts$$3_string$$3$$[5], this.m23 = $parts$$3_string$$3$$[6], this.m24 = $parts$$3_string$$3$$[7], this.m31 = $parts$$3_string$$3$$[8], this.m32 = $parts$$3_string$$3$$[9], this.m33 = $parts$$3_string$$3$$[10], this.m34 = $parts$$3_string$$3$$[11], 
        this.m41 = this.$c$ = $parts$$3_string$$3$$[12], this.m42 = this.$h$ = $parts$$3_string$$3$$[13], this.m43 = $parts$$3_string$$3$$[14], this.m44 = $parts$$3_string$$3$$[15];
      } else {
        if ("matrix" == $type$$87$$) {
          this.$j$ = !0, $parts$$3_string$$3$$ = $parts$$3_string$$3$$.slice(7, -1).split(",").map(function($part$$3$$) {
            return parseFloat($part$$3$$);
          }), this.m11 = this.$b$ = $parts$$3_string$$3$$[0], this.m12 = this.$f$ = $parts$$3_string$$3$$[2], this.m41 = this.$c$ = $parts$$3_string$$3$$[4], this.m21 = this.$g$ = $parts$$3_string$$3$$[1], this.m22 = this.$a$ = $parts$$3_string$$3$$[3], this.m42 = this.$h$ = $parts$$3_string$$3$$[5];
        } else {
          throw new TypeError("Invalid Matrix Value");
        }
      }
    }
  };
  $CSSMatrix$$1$$.prototype.multiply = function $$CSSMatrix$$1$$$$multiply$($m44_secondMatrix$$1$$) {
    var $m11$$2$$ = $m44_secondMatrix$$1$$.m11 * this.m11 + $m44_secondMatrix$$1$$.m12 * this.m21 + $m44_secondMatrix$$1$$.m13 * this.m31 + $m44_secondMatrix$$1$$.m14 * this.m41, $m12$$2$$ = $m44_secondMatrix$$1$$.m11 * this.m12 + $m44_secondMatrix$$1$$.m12 * this.m22 + $m44_secondMatrix$$1$$.m13 * this.m32 + $m44_secondMatrix$$1$$.m14 * this.m42, $m13$$ = $m44_secondMatrix$$1$$.m11 * this.m13 + $m44_secondMatrix$$1$$.m12 * this.m23 + $m44_secondMatrix$$1$$.m13 * this.m33 + $m44_secondMatrix$$1$$.m14 * 
    this.m43, $m14$$ = $m44_secondMatrix$$1$$.m11 * this.m14 + $m44_secondMatrix$$1$$.m12 * this.m24 + $m44_secondMatrix$$1$$.m13 * this.m34 + $m44_secondMatrix$$1$$.m14 * this.m44, $m21$$2$$ = $m44_secondMatrix$$1$$.m21 * this.m11 + $m44_secondMatrix$$1$$.m22 * this.m21 + $m44_secondMatrix$$1$$.m23 * this.m31 + $m44_secondMatrix$$1$$.m24 * this.m41, $m22$$2$$ = $m44_secondMatrix$$1$$.m21 * this.m12 + $m44_secondMatrix$$1$$.m22 * this.m22 + $m44_secondMatrix$$1$$.m23 * this.m32 + $m44_secondMatrix$$1$$.m24 * 
    this.m42, $m23$$ = $m44_secondMatrix$$1$$.m21 * this.m13 + $m44_secondMatrix$$1$$.m22 * this.m23 + $m44_secondMatrix$$1$$.m23 * this.m33 + $m44_secondMatrix$$1$$.m24 * this.m43, $m24$$ = $m44_secondMatrix$$1$$.m21 * this.m14 + $m44_secondMatrix$$1$$.m22 * this.m24 + $m44_secondMatrix$$1$$.m23 * this.m34 + $m44_secondMatrix$$1$$.m24 * this.m44, $m31$$ = $m44_secondMatrix$$1$$.m31 * this.m11 + $m44_secondMatrix$$1$$.m32 * this.m21 + $m44_secondMatrix$$1$$.m33 * this.m31 + $m44_secondMatrix$$1$$.m34 * 
    this.m41, $m32$$ = $m44_secondMatrix$$1$$.m31 * this.m12 + $m44_secondMatrix$$1$$.m32 * this.m22 + $m44_secondMatrix$$1$$.m33 * this.m32 + $m44_secondMatrix$$1$$.m34 * this.m42, $m33$$ = $m44_secondMatrix$$1$$.m31 * this.m13 + $m44_secondMatrix$$1$$.m32 * this.m23 + $m44_secondMatrix$$1$$.m33 * this.m33 + $m44_secondMatrix$$1$$.m34 * this.m43, $m34$$ = $m44_secondMatrix$$1$$.m31 * this.m14 + $m44_secondMatrix$$1$$.m32 * this.m24 + $m44_secondMatrix$$1$$.m33 * this.m34 + $m44_secondMatrix$$1$$.m34 * 
    this.m44, $m41$$ = $m44_secondMatrix$$1$$.m41 * this.m11 + $m44_secondMatrix$$1$$.m42 * this.m21 + $m44_secondMatrix$$1$$.m43 * this.m31 + $m44_secondMatrix$$1$$.m44 * this.m41, $m42$$ = $m44_secondMatrix$$1$$.m41 * this.m12 + $m44_secondMatrix$$1$$.m42 * this.m22 + $m44_secondMatrix$$1$$.m43 * this.m32 + $m44_secondMatrix$$1$$.m44 * this.m42, $m43$$ = $m44_secondMatrix$$1$$.m41 * this.m13 + $m44_secondMatrix$$1$$.m42 * this.m23 + $m44_secondMatrix$$1$$.m43 * this.m33 + $m44_secondMatrix$$1$$.m44 * 
    this.m43;
    $m44_secondMatrix$$1$$ = $m44_secondMatrix$$1$$.m41 * this.m14 + $m44_secondMatrix$$1$$.m42 * this.m24 + $m44_secondMatrix$$1$$.m43 * this.m34 + $m44_secondMatrix$$1$$.m44 * this.m44;
    var $m$$ = new $CSSMatrix$$1$$;
    $m$$.m11 = $m11$$2$$;
    $m$$.m12 = $m12$$2$$;
    $m$$.m13 = $m13$$;
    $m$$.m14 = $m14$$;
    $m$$.m21 = $m21$$2$$;
    $m$$.m22 = $m22$$2$$;
    $m$$.m23 = $m23$$;
    $m$$.m24 = $m24$$;
    $m$$.m31 = $m31$$;
    $m$$.m32 = $m32$$;
    $m$$.m33 = $m33$$;
    $m$$.m34 = $m34$$;
    $m$$.m41 = $m41$$;
    $m$$.m42 = $m42$$;
    $m$$.m43 = $m43$$;
    $m$$.m44 = $m44_secondMatrix$$1$$;
    return $m$$;
  };
  $CSSMatrix$$1$$.prototype.inverse = function $$CSSMatrix$$1$$$$inverse$() {
    throw Error("the inverse() method is not implemented (yet).");
  };
  $CSSMatrix$$1$$.prototype.translate = function $$CSSMatrix$$1$$$$translate$($opt_x$$2_x$$60$$, $opt_y$$2_y$$42$$, $opt_z$$2_z$$8$$) {
    $opt_x$$2_x$$60$$ = $opt_x$$2_x$$60$$ || 0;
    $opt_y$$2_y$$42$$ = $opt_y$$2_y$$42$$ || 0;
    $opt_z$$2_z$$8$$ = $opt_z$$2_z$$8$$ || 0;
    var $m$$1$$ = new $CSSMatrix$$1$$;
    $m$$1$$.m41 = $m$$1$$.$c$ = $opt_x$$2_x$$60$$;
    $m$$1$$.m42 = $m$$1$$.$h$ = $opt_y$$2_y$$42$$;
    $m$$1$$.m43 = $opt_z$$2_z$$8$$;
    return this.multiply($m$$1$$);
  };
  $CSSMatrix$$1$$.prototype.scale = function $$CSSMatrix$$1$$$$scale$($opt_scaleX$$1$$, $opt_scaleY$$1$$) {
    var $x$$61$$ = $opt_scaleX$$1$$, $y$$43$$ = $opt_scaleY$$1$$, $z$$9$$ = $opt_scaleY$$1$$;
    null == $x$$61$$ && ($x$$61$$ = 1);
    null == $y$$43$$ && ($y$$43$$ = $x$$61$$);
    null == $z$$9$$ && ($z$$9$$ = 1);
    var $m$$2$$ = new $CSSMatrix$$1$$;
    $m$$2$$.m11 = $m$$2$$.$b$ = $x$$61$$;
    $m$$2$$.m22 = $m$$2$$.$a$ = $y$$43$$;
    $m$$2$$.m33 = $z$$9$$;
    return this.multiply($m$$2$$);
  };
  $CSSMatrix$$1$$.prototype.rotate = function $$CSSMatrix$$1$$$$rotate$($opt_rotX$$1_rx_sinx$$, $cosx_opt_rotY$$1$$, $opt_rotZ$$1_rz_sinz$$) {
    $opt_rotX$$1_rx_sinx$$ = $opt_rotX$$1_rx_sinx$$ || 0;
    var $ry_siny$$;
    null == $opt_rotZ$$1_rz_sinz$$ && ($opt_rotZ$$1_rz_sinz$$ = null == $cosx_opt_rotY$$1$$ ? $opt_rotX$$1_rx_sinx$$ : 0);
    $opt_rotX$$1_rx_sinx$$ *= Math.PI / 180;
    $ry_siny$$ = Math.PI / 180 * ($cosx_opt_rotY$$1$$ || 0);
    $opt_rotZ$$1_rz_sinz$$ *= Math.PI / 180;
    $cosx_opt_rotY$$1$$ = Math.cos($opt_rotX$$1_rx_sinx$$);
    $opt_rotX$$1_rx_sinx$$ = -Math.sin($opt_rotX$$1_rx_sinx$$);
    var $cosy$$ = Math.cos($ry_siny$$);
    $ry_siny$$ = -Math.sin($ry_siny$$);
    var $cosz$$ = Math.cos($opt_rotZ$$1_rz_sinz$$);
    $opt_rotZ$$1_rz_sinz$$ = -Math.sin($opt_rotZ$$1_rz_sinz$$);
    var $m$$3$$ = new $CSSMatrix$$1$$;
    $m$$3$$.m11 = $m$$3$$.$b$ = $cosy$$ * $cosz$$;
    $m$$3$$.m12 = $m$$3$$.$f$ = -$cosy$$ * $opt_rotZ$$1_rz_sinz$$;
    $m$$3$$.m13 = $ry_siny$$;
    $m$$3$$.m21 = $m$$3$$.$g$ = $opt_rotX$$1_rx_sinx$$ * $ry_siny$$ * $cosz$$ + $cosx_opt_rotY$$1$$ * $opt_rotZ$$1_rz_sinz$$;
    $m$$3$$.m22 = $m$$3$$.$a$ = $cosx_opt_rotY$$1$$ * $cosz$$ - $opt_rotX$$1_rx_sinx$$ * $ry_siny$$ * $opt_rotZ$$1_rz_sinz$$;
    $m$$3$$.m23 = -$opt_rotX$$1_rx_sinx$$ * $cosy$$;
    $m$$3$$.m31 = $opt_rotX$$1_rx_sinx$$ * $opt_rotZ$$1_rz_sinz$$ - $cosx_opt_rotY$$1$$ * $ry_siny$$ * $cosz$$;
    $m$$3$$.m32 = $opt_rotX$$1_rx_sinx$$ * $cosz$$ + $cosx_opt_rotY$$1$$ * $ry_siny$$ * $opt_rotZ$$1_rz_sinz$$;
    $m$$3$$.m33 = $cosx_opt_rotY$$1$$ * $cosy$$;
    return this.multiply($m$$3$$);
  };
  $CSSMatrix$$1$$.prototype.rotateAxisAngle = function $$CSSMatrix$$1$$$$rotateAxisAngle$($opt_x$$3_x$$62$$, $opt_y$$3_y$$44$$, $opt_z$$3_z$$10$$, $opt_angle$$1_sinA$$) {
    $opt_x$$3_x$$62$$ = $opt_x$$3_x$$62$$ || 0;
    $opt_y$$3_y$$44$$ = $opt_y$$3_y$$44$$ || 0;
    $opt_z$$3_z$$10$$ = $opt_z$$3_z$$10$$ || 0;
    var $angle$$1_cosA$$;
    $angle$$1_cosA$$ = Math.PI / 360 * ($opt_angle$$1_sinA$$ || 0);
    $opt_angle$$1_sinA$$ = Math.sin($angle$$1_cosA$$);
    $angle$$1_cosA$$ = Math.cos($angle$$1_cosA$$);
    var $sinA2$$ = $opt_angle$$1_sinA$$ * $opt_angle$$1_sinA$$, $length$$15_x2$$1$$ = Math.sqrt($opt_x$$3_x$$62$$ * $opt_x$$3_x$$62$$ + $opt_y$$3_y$$44$$ * $opt_y$$3_y$$44$$ + $opt_z$$3_z$$10$$ * $opt_z$$3_z$$10$$);
    0 === $length$$15_x2$$1$$ ? ($opt_y$$3_y$$44$$ = $opt_x$$3_x$$62$$ = 0, $opt_z$$3_z$$10$$ = 1) : ($opt_x$$3_x$$62$$ /= $length$$15_x2$$1$$, $opt_y$$3_y$$44$$ /= $length$$15_x2$$1$$, $opt_z$$3_z$$10$$ /= $length$$15_x2$$1$$);
    var $length$$15_x2$$1$$ = $opt_x$$3_x$$62$$ * $opt_x$$3_x$$62$$, $y2$$1$$ = $opt_y$$3_y$$44$$ * $opt_y$$3_y$$44$$, $z2$$ = $opt_z$$3_z$$10$$ * $opt_z$$3_z$$10$$, $m$$4$$ = new $CSSMatrix$$1$$;
    $m$$4$$.m11 = $m$$4$$.$b$ = 1 - 2 * ($y2$$1$$ + $z2$$) * $sinA2$$;
    $m$$4$$.m12 = $m$$4$$.$f$ = 2 * ($opt_x$$3_x$$62$$ * $opt_y$$3_y$$44$$ * $sinA2$$ + $opt_z$$3_z$$10$$ * $opt_angle$$1_sinA$$ * $angle$$1_cosA$$);
    $m$$4$$.m13 = 2 * ($opt_x$$3_x$$62$$ * $opt_z$$3_z$$10$$ * $sinA2$$ - $opt_y$$3_y$$44$$ * $opt_angle$$1_sinA$$ * $angle$$1_cosA$$);
    $m$$4$$.m21 = $m$$4$$.$g$ = 2 * ($opt_y$$3_y$$44$$ * $opt_x$$3_x$$62$$ * $sinA2$$ - $opt_z$$3_z$$10$$ * $opt_angle$$1_sinA$$ * $angle$$1_cosA$$);
    $m$$4$$.m22 = $m$$4$$.$a$ = 1 - 2 * ($z2$$ + $length$$15_x2$$1$$) * $sinA2$$;
    $m$$4$$.m23 = 2 * ($opt_y$$3_y$$44$$ * $opt_z$$3_z$$10$$ * $sinA2$$ + $opt_x$$3_x$$62$$ * $opt_angle$$1_sinA$$ * $angle$$1_cosA$$);
    $m$$4$$.m31 = 2 * ($opt_z$$3_z$$10$$ * $opt_x$$3_x$$62$$ * $sinA2$$ + $opt_y$$3_y$$44$$ * $opt_angle$$1_sinA$$ * $angle$$1_cosA$$);
    $m$$4$$.m32 = 2 * ($opt_z$$3_z$$10$$ * $opt_y$$3_y$$44$$ * $sinA2$$ - $opt_x$$3_x$$62$$ * $opt_angle$$1_sinA$$ * $angle$$1_cosA$$);
    $m$$4$$.m33 = 1 - 2 * ($length$$15_x2$$1$$ + $y2$$1$$) * $sinA2$$;
    $m$$4$$.m14 = $m$$4$$.m24 = $m$$4$$.m34 = 0;
    $m$$4$$.m41 = $m$$4$$.$c$ = $m$$4$$.m42 = $m$$4$$.$h$ = $m$$4$$.m43 = 0;
    $m$$4$$.m44 = 1;
    return this.multiply($m$$4$$);
  };
  $CSSMatrix$$1$$.prototype.$i$ = function $$CSSMatrix$$1$$$$$i$$() {
    this.m11 = this.$b$ = 1;
    this.m21 = this.$g$ = this.m14 = this.m13 = this.m12 = this.$f$ = 0;
    this.m22 = this.$a$ = 1;
    this.m32 = this.m31 = this.m24 = this.m23 = 0;
    this.m33 = 1;
    this.m43 = this.m42 = this.$h$ = this.m41 = this.$c$ = this.m34 = 0;
    this.m44 = 1;
  };
  $CSSMatrix$$1$$.prototype.toString = function $$CSSMatrix$$1$$$$toString$() {
    return this.$j$ ? "matrix(" + [this.$b$, this.$f$, this.$g$, this.$a$, this.$c$, this.$h$].join(", ") + ")" : "matrix3d(" + [this.m11, this.m12, this.m13, this.m14, this.m21, this.m22, this.m23, this.m24, this.m31, this.m32, this.m33, this.m34, this.m41, this.m42, this.m43, this.m44].join(", ") + ")";
  };
  $goog$exportSymbol$$("CSSMatrix", $CSSMatrix$$1$$);
}();
function $goog$debug$Error$$($opt_msg$$) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, $goog$debug$Error$$);
  } else {
    var $stack$$ = Error().stack;
    $stack$$ && (this.stack = $stack$$);
  }
  $opt_msg$$ && (this.message = String($opt_msg$$));
}
$goog$inherits$$($goog$debug$Error$$, Error);
$goog$debug$Error$$.prototype.name = "CustomError";
function $goog$string$subs$$($str$$12$$, $var_args$$48$$) {
  for (var $splitParts$$ = $str$$12$$.split("%s"), $returnString$$ = "", $subsArguments$$ = Array.prototype.slice.call(arguments, 1);$subsArguments$$.length && 1 < $splitParts$$.length;) {
    $returnString$$ += $splitParts$$.shift() + $subsArguments$$.shift();
  }
  return $returnString$$ + $splitParts$$.join("%s");
}
var $goog$string$trim$$ = String.prototype.trim ? function($str$$26$$) {
  return $str$$26$$.trim();
} : function($str$$27$$) {
  return $str$$27$$.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
function $goog$string$htmlEscape$$($str$$33$$) {
  if (!$goog$string$ALL_RE_$$.test($str$$33$$)) {
    return $str$$33$$;
  }
  -1 != $str$$33$$.indexOf("&") && ($str$$33$$ = $str$$33$$.replace($goog$string$AMP_RE_$$, "&amp;"));
  -1 != $str$$33$$.indexOf("<") && ($str$$33$$ = $str$$33$$.replace($goog$string$LT_RE_$$, "&lt;"));
  -1 != $str$$33$$.indexOf(">") && ($str$$33$$ = $str$$33$$.replace($goog$string$GT_RE_$$, "&gt;"));
  -1 != $str$$33$$.indexOf('"') && ($str$$33$$ = $str$$33$$.replace($goog$string$QUOT_RE_$$, "&quot;"));
  -1 != $str$$33$$.indexOf("'") && ($str$$33$$ = $str$$33$$.replace($goog$string$SINGLE_QUOTE_RE_$$, "&#39;"));
  -1 != $str$$33$$.indexOf("\x00") && ($str$$33$$ = $str$$33$$.replace($goog$string$NULL_RE_$$, "&#0;"));
  return $str$$33$$;
}
var $goog$string$AMP_RE_$$ = /&/g, $goog$string$LT_RE_$$ = /</g, $goog$string$GT_RE_$$ = />/g, $goog$string$QUOT_RE_$$ = /"/g, $goog$string$SINGLE_QUOTE_RE_$$ = /'/g, $goog$string$NULL_RE_$$ = /\x00/g, $goog$string$ALL_RE_$$ = /[\x00&<>"']/;
function $goog$string$compareElements_$$($left$$3$$, $right$$3$$) {
  return $left$$3$$ < $right$$3$$ ? -1 : $left$$3$$ > $right$$3$$ ? 1 : 0;
}
function $goog$string$toTitleCase$$($str$$52$$) {
  var $delimiters$$ = $goog$isString$$(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
  return $str$$52$$.replace(new RegExp("(^" + ($delimiters$$ ? "|[" + $delimiters$$ + "]+" : "") + ")([a-z])", "g"), function($all$$1$$, $p1$$, $p2$$) {
    return $p1$$ + $p2$$.toUpperCase();
  });
}
;function $goog$asserts$AssertionError$$($messagePattern$$, $messageArgs$$) {
  $messageArgs$$.unshift($messagePattern$$);
  $goog$debug$Error$$.call(this, $goog$string$subs$$.apply(null, $messageArgs$$));
  $messageArgs$$.shift();
}
$goog$inherits$$($goog$asserts$AssertionError$$, $goog$debug$Error$$);
$goog$asserts$AssertionError$$.prototype.name = "AssertionError";
function $goog$asserts$assert$$($condition$$1$$, $opt_message$$8$$, $var_args$$50$$) {
  if (!$condition$$1$$) {
    var $message$$inline_30$$ = "Assertion failed";
    if ($opt_message$$8$$) {
      var $message$$inline_30$$ = $message$$inline_30$$ + (": " + $opt_message$$8$$), $args$$inline_31$$ = Array.prototype.slice.call(arguments, 2)
    }
    throw new $goog$asserts$AssertionError$$("" + $message$$inline_30$$, $args$$inline_31$$ || []);
  }
}
;function $goog$object$forEach$$($obj$$29$$, $f$$1$$, $opt_obj$$2$$) {
  for (var $key$$24$$ in $obj$$29$$) {
    $f$$1$$.call($opt_obj$$2$$, $obj$$29$$[$key$$24$$], $key$$24$$, $obj$$29$$);
  }
}
var $goog$object$PROTOTYPE_FIELDS_$$ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function $goog$object$extend$$($target$$53$$, $var_args$$61$$) {
  for (var $key$$48$$, $source$$13$$, $i$$24$$ = 1;$i$$24$$ < arguments.length;$i$$24$$++) {
    $source$$13$$ = arguments[$i$$24$$];
    for ($key$$48$$ in $source$$13$$) {
      $target$$53$$[$key$$48$$] = $source$$13$$[$key$$48$$];
    }
    for (var $j$$2$$ = 0;$j$$2$$ < $goog$object$PROTOTYPE_FIELDS_$$.length;$j$$2$$++) {
      $key$$48$$ = $goog$object$PROTOTYPE_FIELDS_$$[$j$$2$$], Object.prototype.hasOwnProperty.call($source$$13$$, $key$$48$$) && ($target$$53$$[$key$$48$$] = $source$$13$$[$key$$48$$]);
    }
  }
}
;var $goog$array$indexOf$$ = Array.prototype.indexOf ? function($arr$$8$$, $obj$$58$$, $opt_fromIndex$$6$$) {
  $goog$asserts$assert$$(null != $arr$$8$$.length);
  return Array.prototype.indexOf.call($arr$$8$$, $obj$$58$$, $opt_fromIndex$$6$$);
} : function($arr$$9$$, $obj$$59$$, $fromIndex_i$$27_opt_fromIndex$$7$$) {
  $fromIndex_i$$27_opt_fromIndex$$7$$ = null == $fromIndex_i$$27_opt_fromIndex$$7$$ ? 0 : 0 > $fromIndex_i$$27_opt_fromIndex$$7$$ ? Math.max(0, $arr$$9$$.length + $fromIndex_i$$27_opt_fromIndex$$7$$) : $fromIndex_i$$27_opt_fromIndex$$7$$;
  if ($goog$isString$$($arr$$9$$)) {
    return $goog$isString$$($obj$$59$$) && 1 == $obj$$59$$.length ? $arr$$9$$.indexOf($obj$$59$$, $fromIndex_i$$27_opt_fromIndex$$7$$) : -1;
  }
  for (;$fromIndex_i$$27_opt_fromIndex$$7$$ < $arr$$9$$.length;$fromIndex_i$$27_opt_fromIndex$$7$$++) {
    if ($fromIndex_i$$27_opt_fromIndex$$7$$ in $arr$$9$$ && $arr$$9$$[$fromIndex_i$$27_opt_fromIndex$$7$$] === $obj$$59$$) {
      return $fromIndex_i$$27_opt_fromIndex$$7$$;
    }
  }
  return -1;
}, $goog$array$forEach$$ = Array.prototype.forEach ? function($arr$$12$$, $f$$9$$, $opt_obj$$7$$) {
  $goog$asserts$assert$$(null != $arr$$12$$.length);
  Array.prototype.forEach.call($arr$$12$$, $f$$9$$, $opt_obj$$7$$);
} : function($arr$$13$$, $f$$10$$, $opt_obj$$8$$) {
  for (var $l$$2$$ = $arr$$13$$.length, $arr2$$ = $goog$isString$$($arr$$13$$) ? $arr$$13$$.split("") : $arr$$13$$, $i$$29$$ = 0;$i$$29$$ < $l$$2$$;$i$$29$$++) {
    $i$$29$$ in $arr2$$ && $f$$10$$.call($opt_obj$$8$$, $arr2$$[$i$$29$$], $i$$29$$, $arr$$13$$);
  }
};
function $goog$array$toArray$$($object$$2$$) {
  var $length$$20$$ = $object$$2$$.length;
  if (0 < $length$$20$$) {
    for (var $rv$$6$$ = Array($length$$20$$), $i$$45$$ = 0;$i$$45$$ < $length$$20$$;$i$$45$$++) {
      $rv$$6$$[$i$$45$$] = $object$$2$$[$i$$45$$];
    }
    return $rv$$6$$;
  }
  return [];
}
;var $goog$labs$userAgent$util$userAgent_$$;
a: {
  var $navigator$$inline_34$$ = $goog$global$$.navigator;
  if ($navigator$$inline_34$$) {
    var $userAgent$$inline_35$$ = $navigator$$inline_34$$.userAgent;
    if ($userAgent$$inline_35$$) {
      $goog$labs$userAgent$util$userAgent_$$ = $userAgent$$inline_35$$;
      break a;
    }
  }
  $goog$labs$userAgent$util$userAgent_$$ = "";
}
;var $goog$userAgent$OPERA$$ = -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf("Opera"), $goog$userAgent$IE$$ = -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf("Trident") || -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf("MSIE"), $goog$userAgent$EDGE$$ = -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf("Edge"), $goog$userAgent$GECKO$$ = -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf("Gecko") && !(-1 != $goog$labs$userAgent$util$userAgent_$$.toLowerCase().indexOf("webkit") && 
-1 == $goog$labs$userAgent$util$userAgent_$$.indexOf("Edge")) && !(-1 != $goog$labs$userAgent$util$userAgent_$$.indexOf("Trident") || -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf("MSIE")) && -1 == $goog$labs$userAgent$util$userAgent_$$.indexOf("Edge"), $goog$userAgent$WEBKIT$$ = -1 != $goog$labs$userAgent$util$userAgent_$$.toLowerCase().indexOf("webkit") && -1 == $goog$labs$userAgent$util$userAgent_$$.indexOf("Edge");
function $goog$userAgent$getDocumentMode_$$() {
  var $doc$$5$$ = $goog$global$$.document;
  return $doc$$5$$ ? $doc$$5$$.documentMode : void 0;
}
var $goog$userAgent$VERSION$$;
a: {
  var $version$$inline_37$$ = "", $arr$$inline_38$$ = function() {
    var $userAgent$$5$$ = $goog$labs$userAgent$util$userAgent_$$;
    if ($goog$userAgent$GECKO$$) {
      return /rv\:([^\);]+)(\)|;)/.exec($userAgent$$5$$);
    }
    if ($goog$userAgent$EDGE$$) {
      return /Edge\/([\d\.]+)/.exec($userAgent$$5$$);
    }
    if ($goog$userAgent$IE$$) {
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec($userAgent$$5$$);
    }
    if ($goog$userAgent$WEBKIT$$) {
      return /WebKit\/(\S+)/.exec($userAgent$$5$$);
    }
    if ($goog$userAgent$OPERA$$) {
      return /(?:Version)[ \/]?(\S+)/.exec($userAgent$$5$$);
    }
  }();
  $arr$$inline_38$$ && ($version$$inline_37$$ = $arr$$inline_38$$ ? $arr$$inline_38$$[1] : "");
  if ($goog$userAgent$IE$$) {
    var $docMode$$inline_39$$ = $goog$userAgent$getDocumentMode_$$();
    if (null != $docMode$$inline_39$$ && $docMode$$inline_39$$ > parseFloat($version$$inline_37$$)) {
      $goog$userAgent$VERSION$$ = String($docMode$$inline_39$$);
      break a;
    }
  }
  $goog$userAgent$VERSION$$ = $version$$inline_37$$;
}
var $goog$userAgent$isVersionOrHigherCache_$$ = {};
function $goog$userAgent$isVersionOrHigher$$($version$$13$$) {
  var $JSCompiler_temp$$2_order$$inline_43$$;
  if (!($JSCompiler_temp$$2_order$$inline_43$$ = $goog$userAgent$isVersionOrHigherCache_$$[$version$$13$$])) {
    $JSCompiler_temp$$2_order$$inline_43$$ = 0;
    for (var $v1Subs$$inline_44$$ = $goog$string$trim$$(String($goog$userAgent$VERSION$$)).split("."), $v2Subs$$inline_45$$ = $goog$string$trim$$(String($version$$13$$)).split("."), $subCount$$inline_46$$ = Math.max($v1Subs$$inline_44$$.length, $v2Subs$$inline_45$$.length), $subIdx$$inline_47$$ = 0;0 == $JSCompiler_temp$$2_order$$inline_43$$ && $subIdx$$inline_47$$ < $subCount$$inline_46$$;$subIdx$$inline_47$$++) {
      var $v1Sub$$inline_48$$ = $v1Subs$$inline_44$$[$subIdx$$inline_47$$] || "", $v2Sub$$inline_49$$ = $v2Subs$$inline_45$$[$subIdx$$inline_47$$] || "", $v1CompParser$$inline_50$$ = /(\d*)(\D*)/g, $v2CompParser$$inline_51$$ = /(\d*)(\D*)/g;
      do {
        var $v1Comp$$inline_52$$ = $v1CompParser$$inline_50$$.exec($v1Sub$$inline_48$$) || ["", "", ""], $v2Comp$$inline_53$$ = $v2CompParser$$inline_51$$.exec($v2Sub$$inline_49$$) || ["", "", ""];
        if (0 == $v1Comp$$inline_52$$[0].length && 0 == $v2Comp$$inline_53$$[0].length) {
          break;
        }
        $JSCompiler_temp$$2_order$$inline_43$$ = $goog$string$compareElements_$$(0 == $v1Comp$$inline_52$$[1].length ? 0 : parseInt($v1Comp$$inline_52$$[1], 10), 0 == $v2Comp$$inline_53$$[1].length ? 0 : parseInt($v2Comp$$inline_53$$[1], 10)) || $goog$string$compareElements_$$(0 == $v1Comp$$inline_52$$[2].length, 0 == $v2Comp$$inline_53$$[2].length) || $goog$string$compareElements_$$($v1Comp$$inline_52$$[2], $v2Comp$$inline_53$$[2]);
      } while (0 == $JSCompiler_temp$$2_order$$inline_43$$);
    }
    $JSCompiler_temp$$2_order$$inline_43$$ = $goog$userAgent$isVersionOrHigherCache_$$[$version$$13$$] = 0 <= $JSCompiler_temp$$2_order$$inline_43$$;
  }
  return $JSCompiler_temp$$2_order$$inline_43$$;
}
var $doc$$inline_55$$ = $goog$global$$.document, $goog$userAgent$DOCUMENT_MODE$$ = $doc$$inline_55$$ && $goog$userAgent$IE$$ ? $goog$userAgent$getDocumentMode_$$() || ("CSS1Compat" == $doc$$inline_55$$.compatMode ? parseInt($goog$userAgent$VERSION$$, 10) : 5) : void 0;
function $goog$math$Size$$($width$$12$$, $height$$11$$) {
  this.width = $width$$12$$;
  this.height = $height$$11$$;
}
$JSCompiler_prototypeAlias$$ = $goog$math$Size$$.prototype;
$JSCompiler_prototypeAlias$$.clone = function $$JSCompiler_prototypeAlias$$$clone$() {
  return new $goog$math$Size$$(this.width, this.height);
};
$JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$() {
  return "(" + this.width + " x " + this.height + ")";
};
$JSCompiler_prototypeAlias$$.ceil = function $$JSCompiler_prototypeAlias$$$ceil$() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
$JSCompiler_prototypeAlias$$.floor = function $$JSCompiler_prototypeAlias$$$floor$() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
$JSCompiler_prototypeAlias$$.round = function $$JSCompiler_prototypeAlias$$$round$() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
var $goog$dom$BrowserFeature$CAN_ADD_NAME_OR_TYPE_ATTRIBUTES$$ = !$goog$userAgent$IE$$ || 9 <= Number($goog$userAgent$DOCUMENT_MODE$$);
!$goog$userAgent$GECKO$$ && !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && 9 <= Number($goog$userAgent$DOCUMENT_MODE$$) || $goog$userAgent$GECKO$$ && $goog$userAgent$isVersionOrHigher$$("1.9.1");
$goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("9");
function $goog$dom$setProperties$$($element$$12$$, $properties$$) {
  $goog$object$forEach$$($properties$$, function($val$$24$$, $key$$55$$) {
    "style" == $key$$55$$ ? $element$$12$$.style.cssText = $val$$24$$ : "class" == $key$$55$$ ? $element$$12$$.className = $val$$24$$ : "for" == $key$$55$$ ? $element$$12$$.htmlFor = $val$$24$$ : $goog$dom$DIRECT_ATTRIBUTE_MAP_$$.hasOwnProperty($key$$55$$) ? $element$$12$$.setAttribute($goog$dom$DIRECT_ATTRIBUTE_MAP_$$[$key$$55$$], $val$$24$$) : 0 == $key$$55$$.lastIndexOf("aria-", 0) || 0 == $key$$55$$.lastIndexOf("data-", 0) ? $element$$12$$.setAttribute($key$$55$$, $val$$24$$) : $element$$12$$[$key$$55$$] = 
    $val$$24$$;
  });
}
var $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", nonce:"nonce", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function $goog$dom$createDom$$($tagName$$10$$, $opt_attributes$$9$$, $var_args$$79$$) {
  var $args$$inline_63$$ = arguments, $doc$$inline_64$$ = document, $element$$inline_69_tagName$$inline_65_tagNameArr$$inline_67$$ = $args$$inline_63$$[0], $attributes$$inline_66$$ = $args$$inline_63$$[1];
  if (!$goog$dom$BrowserFeature$CAN_ADD_NAME_OR_TYPE_ATTRIBUTES$$ && $attributes$$inline_66$$ && ($attributes$$inline_66$$.name || $attributes$$inline_66$$.type)) {
    $element$$inline_69_tagName$$inline_65_tagNameArr$$inline_67$$ = ["<", $element$$inline_69_tagName$$inline_65_tagNameArr$$inline_67$$];
    $attributes$$inline_66$$.name && $element$$inline_69_tagName$$inline_65_tagNameArr$$inline_67$$.push(' name="', $goog$string$htmlEscape$$($attributes$$inline_66$$.name), '"');
    if ($attributes$$inline_66$$.type) {
      $element$$inline_69_tagName$$inline_65_tagNameArr$$inline_67$$.push(' type="', $goog$string$htmlEscape$$($attributes$$inline_66$$.type), '"');
      var $clone$$inline_68$$ = {};
      $goog$object$extend$$($clone$$inline_68$$, $attributes$$inline_66$$);
      delete $clone$$inline_68$$.type;
      $attributes$$inline_66$$ = $clone$$inline_68$$;
    }
    $element$$inline_69_tagName$$inline_65_tagNameArr$$inline_67$$.push(">");
    $element$$inline_69_tagName$$inline_65_tagNameArr$$inline_67$$ = $element$$inline_69_tagName$$inline_65_tagNameArr$$inline_67$$.join("");
  }
  $element$$inline_69_tagName$$inline_65_tagNameArr$$inline_67$$ = $doc$$inline_64$$.createElement($element$$inline_69_tagName$$inline_65_tagNameArr$$inline_67$$);
  $attributes$$inline_66$$ && ($goog$isString$$($attributes$$inline_66$$) ? $element$$inline_69_tagName$$inline_65_tagNameArr$$inline_67$$.className = $attributes$$inline_66$$ : "array" == $goog$typeOf$$($attributes$$inline_66$$) ? $element$$inline_69_tagName$$inline_65_tagNameArr$$inline_67$$.className = $attributes$$inline_66$$.join(" ") : $goog$dom$setProperties$$($element$$inline_69_tagName$$inline_65_tagNameArr$$inline_67$$, $attributes$$inline_66$$));
  2 < $args$$inline_63$$.length && $goog$dom$append_$$($doc$$inline_64$$, $element$$inline_69_tagName$$inline_65_tagNameArr$$inline_67$$, $args$$inline_63$$);
  return $element$$inline_69_tagName$$inline_65_tagNameArr$$inline_67$$;
}
function $goog$dom$append_$$($doc$$17$$, $parent$$6$$, $args$$5$$) {
  function $childHandler$$($child$$) {
    $child$$ && $parent$$6$$.appendChild($goog$isString$$($child$$) ? $doc$$17$$.createTextNode($child$$) : $child$$);
  }
  for (var $i$$65$$ = 2;$i$$65$$ < $args$$5$$.length;$i$$65$$++) {
    var $arg$$5$$ = $args$$5$$[$i$$65$$];
    if (!$goog$isArrayLike$$($arg$$5$$) || $goog$isObject$$($arg$$5$$) && 0 < $arg$$5$$.nodeType) {
      $childHandler$$($arg$$5$$);
    } else {
      var $JSCompiler_inline_result$$8$$;
      a: {
        if ($arg$$5$$ && "number" == typeof $arg$$5$$.length) {
          if ($goog$isObject$$($arg$$5$$)) {
            $JSCompiler_inline_result$$8$$ = "function" == typeof $arg$$5$$.item || "string" == typeof $arg$$5$$.item;
            break a;
          }
          if ("function" == $goog$typeOf$$($arg$$5$$)) {
            $JSCompiler_inline_result$$8$$ = "function" == typeof $arg$$5$$.item;
            break a;
          }
        }
        $JSCompiler_inline_result$$8$$ = !1;
      }
      $goog$array$forEach$$($JSCompiler_inline_result$$8$$ ? $goog$array$toArray$$($arg$$5$$) : $arg$$5$$, $childHandler$$);
    }
  }
}
;function $goog$reflect$sinkValue$$($x$$70$$) {
  $goog$reflect$sinkValue$$[" "]($x$$70$$);
  return $x$$70$$;
}
$goog$reflect$sinkValue$$[" "] = function $$goog$reflect$sinkValue$$$__0$() {
};
function $goog$style$evaluateWithTemporaryDisplay_$$($element$$55_retVal$$1$$) {
  var $fn$$5$$ = $goog$style$getSizeWithDisplay_$$, $JSCompiler_inline_result$$231_doc$$inline_243_style$$13_styles$$inline_244$$;
  a: {
    $goog$asserts$assert$$($element$$55_retVal$$1$$, "Node cannot be null or undefined.");
    $JSCompiler_inline_result$$231_doc$$inline_243_style$$13_styles$$inline_244$$ = 9 == $element$$55_retVal$$1$$.nodeType ? $element$$55_retVal$$1$$ : $element$$55_retVal$$1$$.ownerDocument || $element$$55_retVal$$1$$.document;
    if ($JSCompiler_inline_result$$231_doc$$inline_243_style$$13_styles$$inline_244$$.defaultView && $JSCompiler_inline_result$$231_doc$$inline_243_style$$13_styles$$inline_244$$.defaultView.getComputedStyle && ($JSCompiler_inline_result$$231_doc$$inline_243_style$$13_styles$$inline_244$$ = $JSCompiler_inline_result$$231_doc$$inline_243_style$$13_styles$$inline_244$$.defaultView.getComputedStyle($element$$55_retVal$$1$$, null))) {
      $JSCompiler_inline_result$$231_doc$$inline_243_style$$13_styles$$inline_244$$ = $JSCompiler_inline_result$$231_doc$$inline_243_style$$13_styles$$inline_244$$.display || $JSCompiler_inline_result$$231_doc$$inline_243_style$$13_styles$$inline_244$$.getPropertyValue("display") || "";
      break a;
    }
    $JSCompiler_inline_result$$231_doc$$inline_243_style$$13_styles$$inline_244$$ = "";
  }
  if ("none" != ($JSCompiler_inline_result$$231_doc$$inline_243_style$$13_styles$$inline_244$$ || ($element$$55_retVal$$1$$.currentStyle ? $element$$55_retVal$$1$$.currentStyle.display : null) || $element$$55_retVal$$1$$.style && $element$$55_retVal$$1$$.style.display)) {
    return $fn$$5$$($element$$55_retVal$$1$$);
  }
  $JSCompiler_inline_result$$231_doc$$inline_243_style$$13_styles$$inline_244$$ = $element$$55_retVal$$1$$.style;
  var $originalDisplay$$ = $JSCompiler_inline_result$$231_doc$$inline_243_style$$13_styles$$inline_244$$.display, $originalVisibility$$ = $JSCompiler_inline_result$$231_doc$$inline_243_style$$13_styles$$inline_244$$.visibility, $originalPosition$$ = $JSCompiler_inline_result$$231_doc$$inline_243_style$$13_styles$$inline_244$$.position;
  $JSCompiler_inline_result$$231_doc$$inline_243_style$$13_styles$$inline_244$$.visibility = "hidden";
  $JSCompiler_inline_result$$231_doc$$inline_243_style$$13_styles$$inline_244$$.position = "absolute";
  $JSCompiler_inline_result$$231_doc$$inline_243_style$$13_styles$$inline_244$$.display = "inline";
  $element$$55_retVal$$1$$ = $fn$$5$$($element$$55_retVal$$1$$);
  $JSCompiler_inline_result$$231_doc$$inline_243_style$$13_styles$$inline_244$$.display = $originalDisplay$$;
  $JSCompiler_inline_result$$231_doc$$inline_243_style$$13_styles$$inline_244$$.position = $originalPosition$$;
  $JSCompiler_inline_result$$231_doc$$inline_243_style$$13_styles$$inline_244$$.visibility = $originalVisibility$$;
  return $element$$55_retVal$$1$$;
}
function $goog$style$getSizeWithDisplay_$$($doc$$inline_78_element$$56$$) {
  var $offsetWidth$$ = $doc$$inline_78_element$$56$$.offsetWidth, $offsetHeight$$ = $doc$$inline_78_element$$56$$.offsetHeight, $webkitOffsetsZero$$ = $goog$userAgent$WEBKIT$$ && !$offsetWidth$$ && !$offsetHeight$$;
  if ((void 0 === $offsetWidth$$ || $webkitOffsetsZero$$) && $doc$$inline_78_element$$56$$.getBoundingClientRect) {
    var $clientRect_rect$$inline_77$$;
    a: {
      try {
        $clientRect_rect$$inline_77$$ = $doc$$inline_78_element$$56$$.getBoundingClientRect();
      } catch ($e$$inline_79$$) {
        $clientRect_rect$$inline_77$$ = {left:0, top:0, right:0, bottom:0};
        break a;
      }
      $goog$userAgent$IE$$ && $doc$$inline_78_element$$56$$.ownerDocument.body && ($doc$$inline_78_element$$56$$ = $doc$$inline_78_element$$56$$.ownerDocument, $clientRect_rect$$inline_77$$.left -= $doc$$inline_78_element$$56$$.documentElement.clientLeft + $doc$$inline_78_element$$56$$.body.clientLeft, $clientRect_rect$$inline_77$$.top -= $doc$$inline_78_element$$56$$.documentElement.clientTop + $doc$$inline_78_element$$56$$.body.clientTop);
    }
    return new $goog$math$Size$$($clientRect_rect$$inline_77$$.right - $clientRect_rect$$inline_77$$.left, $clientRect_rect$$inline_77$$.bottom - $clientRect_rect$$inline_77$$.top);
  }
  return new $goog$math$Size$$($offsetWidth$$, $offsetHeight$$);
}
;var $goog$events$Listenable$IMPLEMENTED_BY_PROP$$ = "closure_listenable_" + (1E6 * Math.random() | 0), $goog$events$ListenableKey$counter_$$ = 0;
function $goog$events$Listener$$($listener$$42$$, $src$$13$$, $type$$91$$, $capture$$, $opt_handler$$) {
  this.listener = $listener$$42$$;
  this.$a$ = null;
  this.src = $src$$13$$;
  this.type = $type$$91$$;
  this.$capture$ = !!$capture$$;
  this.$b$ = $opt_handler$$;
  this.$goog_events_ListenableKey_prototype$key$ = ++$goog$events$ListenableKey$counter_$$;
  this.$removed$ = this.$callOnce$ = !1;
}
function $JSCompiler_StaticMethods_markAsRemoved$$($JSCompiler_StaticMethods_markAsRemoved$self$$) {
  $JSCompiler_StaticMethods_markAsRemoved$self$$.$removed$ = !0;
  $JSCompiler_StaticMethods_markAsRemoved$self$$.listener = null;
  $JSCompiler_StaticMethods_markAsRemoved$self$$.$a$ = null;
  $JSCompiler_StaticMethods_markAsRemoved$self$$.src = null;
  $JSCompiler_StaticMethods_markAsRemoved$self$$.$b$ = null;
}
;function $goog$events$ListenerMap$$($src$$14$$) {
  this.src = $src$$14$$;
  this.$a$ = {};
  this.$b$ = 0;
}
function $JSCompiler_StaticMethods_removeByKey$$($JSCompiler_StaticMethods_removeByKey$self$$, $listener$$45$$) {
  var $type$$95$$ = $listener$$45$$.type;
  if ($type$$95$$ in $JSCompiler_StaticMethods_removeByKey$self$$.$a$) {
    var $arr$$inline_81$$ = $JSCompiler_StaticMethods_removeByKey$self$$.$a$[$type$$95$$], $i$$inline_83$$ = $goog$array$indexOf$$($arr$$inline_81$$, $listener$$45$$), $rv$$inline_84$$;
    if ($rv$$inline_84$$ = 0 <= $i$$inline_83$$) {
      $goog$asserts$assert$$(null != $arr$$inline_81$$.length), Array.prototype.splice.call($arr$$inline_81$$, $i$$inline_83$$, 1);
    }
    $rv$$inline_84$$ && ($JSCompiler_StaticMethods_markAsRemoved$$($listener$$45$$), 0 == $JSCompiler_StaticMethods_removeByKey$self$$.$a$[$type$$95$$].length && (delete $JSCompiler_StaticMethods_removeByKey$self$$.$a$[$type$$95$$], $JSCompiler_StaticMethods_removeByKey$self$$.$b$--));
  }
}
;var $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ = !$goog$userAgent$IE$$ || 9 <= Number($goog$userAgent$DOCUMENT_MODE$$), $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$ = $goog$userAgent$IE$$ && !$goog$userAgent$isVersionOrHigher$$("9");
!$goog$userAgent$WEBKIT$$ || $goog$userAgent$isVersionOrHigher$$("528");
$goog$userAgent$GECKO$$ && $goog$userAgent$isVersionOrHigher$$("1.9b") || $goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("8") || $goog$userAgent$OPERA$$ && $goog$userAgent$isVersionOrHigher$$("9.5") || $goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersionOrHigher$$("528");
$goog$userAgent$GECKO$$ && !$goog$userAgent$isVersionOrHigher$$("8") || $goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("9");
function $goog$Disposable$$() {
  0 != $goog$Disposable$MonitoringMode$OFF$$ && ($goog$Disposable$instances_$$[this[$goog$UID_PROPERTY_$$] || (this[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$)] = this);
  this.$h$ = this.$h$;
  this.$j$ = this.$j$;
}
var $goog$Disposable$MonitoringMode$OFF$$ = 0, $goog$Disposable$instances_$$ = {};
$goog$Disposable$$.prototype.$h$ = !1;
$goog$Disposable$$.prototype.$w$ = function $$goog$Disposable$$$$$w$$() {
  if (!this.$h$ && (this.$h$ = !0, this.$disposeInternal$(), 0 != $goog$Disposable$MonitoringMode$OFF$$)) {
    var $uid$$ = this[$goog$UID_PROPERTY_$$] || (this[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$);
    delete $goog$Disposable$instances_$$[$uid$$];
  }
};
$goog$Disposable$$.prototype.$disposeInternal$ = function $$goog$Disposable$$$$$disposeInternal$$() {
  if (this.$j$) {
    for (;this.$j$.length;) {
      this.$j$.shift()();
    }
  }
};
function $goog$events$Event$$($type$$100$$, $opt_target$$1$$) {
  this.type = $type$$100$$;
  this.$b$ = this.$f$ = $opt_target$$1$$;
  this.$g$ = !1;
}
$goog$events$Event$$.prototype.$c$ = function $$goog$events$Event$$$$$c$$() {
  this.$g$ = !0;
};
$goog$events$Event$$.prototype.preventDefault = function $$goog$events$Event$$$$preventDefault$() {
};
function $goog$events$BrowserEvent$$($opt_e$$, $opt_currentTarget$$) {
  $goog$events$Event$$.call(this, $opt_e$$ ? $opt_e$$.type : "");
  this.$b$ = this.$f$ = null;
  this.clientY = this.clientX = 0;
  this.$a$ = this.state = null;
  if ($opt_e$$) {
    this.type = $opt_e$$.type;
    var $relevantTouch$$inline_90$$ = $opt_e$$.changedTouches ? $opt_e$$.changedTouches[0] : null;
    this.$f$ = $opt_e$$.target || $opt_e$$.srcElement;
    this.$b$ = $opt_currentTarget$$;
    var $relatedTarget$$inline_91$$ = $opt_e$$.relatedTarget;
    if ($relatedTarget$$inline_91$$ && $goog$userAgent$GECKO$$) {
      try {
        $goog$reflect$sinkValue$$($relatedTarget$$inline_91$$.nodeName);
      } catch ($e$$inline_250$$) {
      }
    }
    null === $relevantTouch$$inline_90$$ ? (this.clientX = void 0 !== $opt_e$$.clientX ? $opt_e$$.clientX : $opt_e$$.pageX, this.clientY = void 0 !== $opt_e$$.clientY ? $opt_e$$.clientY : $opt_e$$.pageY) : (this.clientX = void 0 !== $relevantTouch$$inline_90$$.clientX ? $relevantTouch$$inline_90$$.clientX : $relevantTouch$$inline_90$$.pageX, this.clientY = void 0 !== $relevantTouch$$inline_90$$.clientY ? $relevantTouch$$inline_90$$.clientY : $relevantTouch$$inline_90$$.pageY);
    this.state = $opt_e$$.state;
    this.$a$ = $opt_e$$;
    $opt_e$$.defaultPrevented && this.preventDefault();
  }
}
$goog$inherits$$($goog$events$BrowserEvent$$, $goog$events$Event$$);
$goog$events$BrowserEvent$$.prototype.$c$ = function $$goog$events$BrowserEvent$$$$$c$$() {
  $goog$events$BrowserEvent$$.$superClass_$.$c$.call(this);
  this.$a$.stopPropagation ? this.$a$.stopPropagation() : this.$a$.cancelBubble = !0;
};
$goog$events$BrowserEvent$$.prototype.preventDefault = function $$goog$events$BrowserEvent$$$$preventDefault$() {
  $goog$events$BrowserEvent$$.$superClass_$.preventDefault.call(this);
  var $be$$ = this.$a$;
  if ($be$$.preventDefault) {
    $be$$.preventDefault();
  } else {
    if ($be$$.returnValue = !1, $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$) {
      try {
        if ($be$$.ctrlKey || 112 <= $be$$.keyCode && 123 >= $be$$.keyCode) {
          $be$$.keyCode = -1;
        }
      } catch ($ex$$1$$) {
      }
    }
  }
};
var $goog$events$LISTENER_MAP_PROP_$$ = "closure_lm_" + (1E6 * Math.random() | 0), $goog$events$onStringMap_$$ = {}, $goog$events$listenerCountEstimate_$$ = 0;
function $goog$events$listen$$($JSCompiler_temp$$12_src$$15$$, $type$$102$$, $capture$$inline_99_listener$$48$$, $listenerObj$$inline_101_listenerObj$$inline_260_opt_capt$$, $opt_handler$$1_proxy$$inline_102$$) {
  if ("array" == $goog$typeOf$$($type$$102$$)) {
    for (var $i$$79_listener$$inline_95$$ = 0;$i$$79_listener$$inline_95$$ < $type$$102$$.length;$i$$79_listener$$inline_95$$++) {
      $goog$events$listen$$($JSCompiler_temp$$12_src$$15$$, $type$$102$$[$i$$79_listener$$inline_95$$], $capture$$inline_99_listener$$48$$, $listenerObj$$inline_101_listenerObj$$inline_260_opt_capt$$, $opt_handler$$1_proxy$$inline_102$$);
    }
    return null;
  }
  $capture$$inline_99_listener$$48$$ = $goog$events$wrapListener$$($capture$$inline_99_listener$$48$$);
  if ($JSCompiler_temp$$12_src$$15$$ && $JSCompiler_temp$$12_src$$15$$[$goog$events$Listenable$IMPLEMENTED_BY_PROP$$]) {
    $JSCompiler_temp$$12_src$$15$$ = $JSCompiler_temp$$12_src$$15$$.$f$($type$$102$$, $capture$$inline_99_listener$$48$$, $listenerObj$$inline_101_listenerObj$$inline_260_opt_capt$$, $opt_handler$$1_proxy$$inline_102$$);
  } else {
    $i$$79_listener$$inline_95$$ = $capture$$inline_99_listener$$48$$;
    if (!$type$$102$$) {
      throw Error("Invalid event type");
    }
    $capture$$inline_99_listener$$48$$ = !!$listenerObj$$inline_101_listenerObj$$inline_260_opt_capt$$;
    var $listenerArray$$inline_259_listenerMap$$inline_100$$ = $goog$events$getListenerMap_$$($JSCompiler_temp$$12_src$$15$$);
    $listenerArray$$inline_259_listenerMap$$inline_100$$ || ($JSCompiler_temp$$12_src$$15$$[$goog$events$LISTENER_MAP_PROP_$$] = $listenerArray$$inline_259_listenerMap$$inline_100$$ = new $goog$events$ListenerMap$$($JSCompiler_temp$$12_src$$15$$));
    var $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$self$$inline_252$$ = $listenerArray$$inline_259_listenerMap$$inline_100$$, $typeStr$$inline_258$$ = $type$$102$$.toString(), $listenerArray$$inline_259_listenerMap$$inline_100$$ = $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$self$$inline_252$$.$a$[$typeStr$$inline_258$$];
    $listenerArray$$inline_259_listenerMap$$inline_100$$ || ($listenerArray$$inline_259_listenerMap$$inline_100$$ = $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$self$$inline_252$$.$a$[$typeStr$$inline_258$$] = [], $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$self$$inline_252$$.$b$++);
    var $i$$inline_286_index$$inline_261$$;
    b: {
      for ($i$$inline_286_index$$inline_261$$ = 0;$i$$inline_286_index$$inline_261$$ < $listenerArray$$inline_259_listenerMap$$inline_100$$.length;++$i$$inline_286_index$$inline_261$$) {
        var $listenerObj$$inline_287$$ = $listenerArray$$inline_259_listenerMap$$inline_100$$[$i$$inline_286_index$$inline_261$$];
        if (!$listenerObj$$inline_287$$.$removed$ && $listenerObj$$inline_287$$.listener == $i$$79_listener$$inline_95$$ && $listenerObj$$inline_287$$.$capture$ == !!$listenerObj$$inline_101_listenerObj$$inline_260_opt_capt$$ && $listenerObj$$inline_287$$.$b$ == $opt_handler$$1_proxy$$inline_102$$) {
          break b;
        }
      }
      $i$$inline_286_index$$inline_261$$ = -1;
    }
    -1 < $i$$inline_286_index$$inline_261$$ ? ($listenerObj$$inline_101_listenerObj$$inline_260_opt_capt$$ = $listenerArray$$inline_259_listenerMap$$inline_100$$[$i$$inline_286_index$$inline_261$$], $listenerObj$$inline_101_listenerObj$$inline_260_opt_capt$$.$callOnce$ = !1) : ($listenerObj$$inline_101_listenerObj$$inline_260_opt_capt$$ = new $goog$events$Listener$$($i$$79_listener$$inline_95$$, $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$self$$inline_252$$.src, $typeStr$$inline_258$$, 
    !!$listenerObj$$inline_101_listenerObj$$inline_260_opt_capt$$, $opt_handler$$1_proxy$$inline_102$$), $listenerObj$$inline_101_listenerObj$$inline_260_opt_capt$$.$callOnce$ = !1, $listenerArray$$inline_259_listenerMap$$inline_100$$.push($listenerObj$$inline_101_listenerObj$$inline_260_opt_capt$$));
    if (!$listenerObj$$inline_101_listenerObj$$inline_260_opt_capt$$.$a$) {
      $opt_handler$$1_proxy$$inline_102$$ = $goog$events$getProxy$$();
      $listenerObj$$inline_101_listenerObj$$inline_260_opt_capt$$.$a$ = $opt_handler$$1_proxy$$inline_102$$;
      $opt_handler$$1_proxy$$inline_102$$.src = $JSCompiler_temp$$12_src$$15$$;
      $opt_handler$$1_proxy$$inline_102$$.listener = $listenerObj$$inline_101_listenerObj$$inline_260_opt_capt$$;
      if ($JSCompiler_temp$$12_src$$15$$.addEventListener) {
        $JSCompiler_temp$$12_src$$15$$.addEventListener($type$$102$$.toString(), $opt_handler$$1_proxy$$inline_102$$, $capture$$inline_99_listener$$48$$);
      } else {
        if ($JSCompiler_temp$$12_src$$15$$.attachEvent) {
          $JSCompiler_temp$$12_src$$15$$.attachEvent($goog$events$getOnString_$$($type$$102$$.toString()), $opt_handler$$1_proxy$$inline_102$$);
        } else {
          throw Error("addEventListener and attachEvent are unavailable.");
        }
      }
      $goog$events$listenerCountEstimate_$$++;
    }
    $JSCompiler_temp$$12_src$$15$$ = $listenerObj$$inline_101_listenerObj$$inline_260_opt_capt$$;
  }
  return $JSCompiler_temp$$12_src$$15$$;
}
function $goog$events$getProxy$$() {
  var $proxyCallbackFunction$$ = $goog$events$handleBrowserEvent_$$, $f$$32$$ = $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ ? function($eventObject$$) {
    return $proxyCallbackFunction$$.call($f$$32$$.src, $f$$32$$.listener, $eventObject$$);
  } : function($eventObject$$1_v$$1$$) {
    $eventObject$$1_v$$1$$ = $proxyCallbackFunction$$.call($f$$32$$.src, $f$$32$$.listener, $eventObject$$1_v$$1$$);
    if (!$eventObject$$1_v$$1$$) {
      return $eventObject$$1_v$$1$$;
    }
  };
  return $f$$32$$;
}
function $goog$events$unlistenByKey$$($key$$59$$) {
  if ("number" != typeof $key$$59$$ && $key$$59$$ && !$key$$59$$.$removed$) {
    var $src$$20$$ = $key$$59$$.src;
    if ($src$$20$$ && $src$$20$$[$goog$events$Listenable$IMPLEMENTED_BY_PROP$$]) {
      $JSCompiler_StaticMethods_removeByKey$$($src$$20$$.$a$, $key$$59$$);
    } else {
      var $listenerMap$$2_type$$106$$ = $key$$59$$.type, $proxy$$2$$ = $key$$59$$.$a$;
      $src$$20$$.removeEventListener ? $src$$20$$.removeEventListener($listenerMap$$2_type$$106$$, $proxy$$2$$, $key$$59$$.$capture$) : $src$$20$$.detachEvent && $src$$20$$.detachEvent($goog$events$getOnString_$$($listenerMap$$2_type$$106$$), $proxy$$2$$);
      $goog$events$listenerCountEstimate_$$--;
      ($listenerMap$$2_type$$106$$ = $goog$events$getListenerMap_$$($src$$20$$)) ? ($JSCompiler_StaticMethods_removeByKey$$($listenerMap$$2_type$$106$$, $key$$59$$), 0 == $listenerMap$$2_type$$106$$.$b$ && ($listenerMap$$2_type$$106$$.src = null, $src$$20$$[$goog$events$LISTENER_MAP_PROP_$$] = null)) : $JSCompiler_StaticMethods_markAsRemoved$$($key$$59$$);
    }
  }
}
function $goog$events$getOnString_$$($type$$110$$) {
  return $type$$110$$ in $goog$events$onStringMap_$$ ? $goog$events$onStringMap_$$[$type$$110$$] : $goog$events$onStringMap_$$[$type$$110$$] = "on" + $type$$110$$;
}
function $goog$events$fireListeners_$$($i$$83_listenerMap$$7_obj$$81$$, $listenerArray$$7_type$$112$$, $capture$$8$$, $eventObject$$3$$) {
  var $retval$$ = !0;
  if ($i$$83_listenerMap$$7_obj$$81$$ = $goog$events$getListenerMap_$$($i$$83_listenerMap$$7_obj$$81$$)) {
    if ($listenerArray$$7_type$$112$$ = $i$$83_listenerMap$$7_obj$$81$$.$a$[$listenerArray$$7_type$$112$$.toString()]) {
      for ($listenerArray$$7_type$$112$$ = $listenerArray$$7_type$$112$$.concat(), $i$$83_listenerMap$$7_obj$$81$$ = 0;$i$$83_listenerMap$$7_obj$$81$$ < $listenerArray$$7_type$$112$$.length;$i$$83_listenerMap$$7_obj$$81$$++) {
        var $listener$$56_result$$13$$ = $listenerArray$$7_type$$112$$[$i$$83_listenerMap$$7_obj$$81$$];
        $listener$$56_result$$13$$ && $listener$$56_result$$13$$.$capture$ == $capture$$8$$ && !$listener$$56_result$$13$$.$removed$ && ($listener$$56_result$$13$$ = $goog$events$fireListener$$($listener$$56_result$$13$$, $eventObject$$3$$), $retval$$ = $retval$$ && !1 !== $listener$$56_result$$13$$);
      }
    }
  }
  return $retval$$;
}
function $goog$events$fireListener$$($listener$$57$$, $eventObject$$4$$) {
  var $listenerFn$$ = $listener$$57$$.listener, $listenerHandler$$ = $listener$$57$$.$b$ || $listener$$57$$.src;
  $listener$$57$$.$callOnce$ && $goog$events$unlistenByKey$$($listener$$57$$);
  return $listenerFn$$.call($listenerHandler$$, $eventObject$$4$$);
}
function $goog$events$handleBrowserEvent_$$($listener$$58$$, $opt_evt$$) {
  if ($listener$$58$$.$removed$) {
    return !0;
  }
  if (!$goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$) {
    var $JSCompiler_temp$$0_evt$$21_parts$$inline_106$$;
    if (!($JSCompiler_temp$$0_evt$$21_parts$$inline_106$$ = $opt_evt$$)) {
      a: {
        $JSCompiler_temp$$0_evt$$21_parts$$inline_106$$ = ["window", "event"];
        for (var $cur$$inline_107_retval$$1$$ = $goog$global$$, $ancestors$$1_ieEvent_part$$inline_108$$;$ancestors$$1_ieEvent_part$$inline_108$$ = $JSCompiler_temp$$0_evt$$21_parts$$inline_106$$.shift();) {
          if (null != $cur$$inline_107_retval$$1$$[$ancestors$$1_ieEvent_part$$inline_108$$]) {
            $cur$$inline_107_retval$$1$$ = $cur$$inline_107_retval$$1$$[$ancestors$$1_ieEvent_part$$inline_108$$];
          } else {
            $JSCompiler_temp$$0_evt$$21_parts$$inline_106$$ = null;
            break a;
          }
        }
        $JSCompiler_temp$$0_evt$$21_parts$$inline_106$$ = $cur$$inline_107_retval$$1$$;
      }
    }
    $ancestors$$1_ieEvent_part$$inline_108$$ = $JSCompiler_temp$$0_evt$$21_parts$$inline_106$$;
    $JSCompiler_temp$$0_evt$$21_parts$$inline_106$$ = new $goog$events$BrowserEvent$$($ancestors$$1_ieEvent_part$$inline_108$$, this);
    $cur$$inline_107_retval$$1$$ = !0;
    if (!(0 > $ancestors$$1_ieEvent_part$$inline_108$$.keyCode || void 0 != $ancestors$$1_ieEvent_part$$inline_108$$.returnValue)) {
      a: {
        var $parent$$17_type$$113_useReturnValue$$inline_111$$ = !1;
        if (0 == $ancestors$$1_ieEvent_part$$inline_108$$.keyCode) {
          try {
            $ancestors$$1_ieEvent_part$$inline_108$$.keyCode = -1;
            break a;
          } catch ($ex$$inline_112$$) {
            $parent$$17_type$$113_useReturnValue$$inline_111$$ = !0;
          }
        }
        if ($parent$$17_type$$113_useReturnValue$$inline_111$$ || void 0 == $ancestors$$1_ieEvent_part$$inline_108$$.returnValue) {
          $ancestors$$1_ieEvent_part$$inline_108$$.returnValue = !0;
        }
      }
      $ancestors$$1_ieEvent_part$$inline_108$$ = [];
      for ($parent$$17_type$$113_useReturnValue$$inline_111$$ = $JSCompiler_temp$$0_evt$$21_parts$$inline_106$$.$b$;$parent$$17_type$$113_useReturnValue$$inline_111$$;$parent$$17_type$$113_useReturnValue$$inline_111$$ = $parent$$17_type$$113_useReturnValue$$inline_111$$.parentNode) {
        $ancestors$$1_ieEvent_part$$inline_108$$.push($parent$$17_type$$113_useReturnValue$$inline_111$$);
      }
      for (var $parent$$17_type$$113_useReturnValue$$inline_111$$ = $listener$$58$$.type, $i$$84$$ = $ancestors$$1_ieEvent_part$$inline_108$$.length - 1;!$JSCompiler_temp$$0_evt$$21_parts$$inline_106$$.$g$ && 0 <= $i$$84$$;$i$$84$$--) {
        $JSCompiler_temp$$0_evt$$21_parts$$inline_106$$.$b$ = $ancestors$$1_ieEvent_part$$inline_108$$[$i$$84$$];
        var $result$$14$$ = $goog$events$fireListeners_$$($ancestors$$1_ieEvent_part$$inline_108$$[$i$$84$$], $parent$$17_type$$113_useReturnValue$$inline_111$$, !0, $JSCompiler_temp$$0_evt$$21_parts$$inline_106$$), $cur$$inline_107_retval$$1$$ = $cur$$inline_107_retval$$1$$ && $result$$14$$;
      }
      for ($i$$84$$ = 0;!$JSCompiler_temp$$0_evt$$21_parts$$inline_106$$.$g$ && $i$$84$$ < $ancestors$$1_ieEvent_part$$inline_108$$.length;$i$$84$$++) {
        $JSCompiler_temp$$0_evt$$21_parts$$inline_106$$.$b$ = $ancestors$$1_ieEvent_part$$inline_108$$[$i$$84$$], $result$$14$$ = $goog$events$fireListeners_$$($ancestors$$1_ieEvent_part$$inline_108$$[$i$$84$$], $parent$$17_type$$113_useReturnValue$$inline_111$$, !1, $JSCompiler_temp$$0_evt$$21_parts$$inline_106$$), $cur$$inline_107_retval$$1$$ = $cur$$inline_107_retval$$1$$ && $result$$14$$;
      }
    }
    return $cur$$inline_107_retval$$1$$;
  }
  return $goog$events$fireListener$$($listener$$58$$, new $goog$events$BrowserEvent$$($opt_evt$$, this));
}
function $goog$events$getListenerMap_$$($listenerMap$$8_src$$24$$) {
  $listenerMap$$8_src$$24$$ = $listenerMap$$8_src$$24$$[$goog$events$LISTENER_MAP_PROP_$$];
  return $listenerMap$$8_src$$24$$ instanceof $goog$events$ListenerMap$$ ? $listenerMap$$8_src$$24$$ : null;
}
var $goog$events$LISTENER_WRAPPER_PROP_$$ = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function $goog$events$wrapListener$$($listener$$59$$) {
  $goog$asserts$assert$$($listener$$59$$, "Listener can not be null.");
  if ("function" == $goog$typeOf$$($listener$$59$$)) {
    return $listener$$59$$;
  }
  $goog$asserts$assert$$($listener$$59$$.handleEvent, "An object listener must have handleEvent method.");
  $listener$$59$$[$goog$events$LISTENER_WRAPPER_PROP_$$] || ($listener$$59$$[$goog$events$LISTENER_WRAPPER_PROP_$$] = function $$listener$$59$$$$goog$events$LISTENER_WRAPPER_PROP_$$$($e$$20$$) {
    return $listener$$59$$.handleEvent($e$$20$$);
  });
  return $listener$$59$$[$goog$events$LISTENER_WRAPPER_PROP_$$];
}
;function $goog$events$EventHandler$$($opt_scope$$1$$) {
  $goog$Disposable$$.call(this);
  this.$B$ = $opt_scope$$1$$;
  this.$i$ = {};
}
$goog$inherits$$($goog$events$EventHandler$$, $goog$Disposable$$);
var $goog$events$EventHandler$typeArray_$$ = [];
$goog$events$EventHandler$$.prototype.$f$ = function $$goog$events$EventHandler$$$$$f$$($src$$25$$, $type$$114_type$$inline_117$$, $opt_fn$$, $opt_capture$$2$$) {
  "array" != $goog$typeOf$$($type$$114_type$$inline_117$$) && ($type$$114_type$$inline_117$$ && ($goog$events$EventHandler$typeArray_$$[0] = $type$$114_type$$inline_117$$.toString()), $type$$114_type$$inline_117$$ = $goog$events$EventHandler$typeArray_$$);
  for (var $i$$inline_121$$ = 0;$i$$inline_121$$ < $type$$114_type$$inline_117$$.length;$i$$inline_121$$++) {
    var $listenerObj$$inline_122$$ = $goog$events$listen$$($src$$25$$, $type$$114_type$$inline_117$$[$i$$inline_121$$], $opt_fn$$ || this.handleEvent, $opt_capture$$2$$ || !1, this.$B$ || this);
    if (!$listenerObj$$inline_122$$) {
      break;
    }
    this.$i$[$listenerObj$$inline_122$$.$goog_events_ListenableKey_prototype$key$] = $listenerObj$$inline_122$$;
  }
  return this;
};
function $JSCompiler_StaticMethods_goog_events_EventHandler_prototype$removeAll$$($JSCompiler_StaticMethods_goog_events_EventHandler_prototype$removeAll$self$$) {
  $goog$object$forEach$$($JSCompiler_StaticMethods_goog_events_EventHandler_prototype$removeAll$self$$.$i$, function($listenerObj$$8$$, $key$$64$$) {
    this.$i$.hasOwnProperty($key$$64$$) && $goog$events$unlistenByKey$$($listenerObj$$8$$);
  }, $JSCompiler_StaticMethods_goog_events_EventHandler_prototype$removeAll$self$$);
  $JSCompiler_StaticMethods_goog_events_EventHandler_prototype$removeAll$self$$.$i$ = {};
}
$goog$events$EventHandler$$.prototype.$disposeInternal$ = function $$goog$events$EventHandler$$$$$disposeInternal$$() {
  $goog$events$EventHandler$$.$superClass_$.$disposeInternal$.call(this);
  $JSCompiler_StaticMethods_goog_events_EventHandler_prototype$removeAll$$(this);
};
$goog$events$EventHandler$$.prototype.handleEvent = function $$goog$events$EventHandler$$$$handleEvent$() {
  throw Error("EventHandler.handleEvent not implemented");
};
function $rflect$browser$css$setTransition$$($aElement$$, $aTransitionString$$) {
  var $props$$inline_135$$ = $rflect$browser$css$findAndCacheProperty_$$("transition");
  $aElement$$.style[$props$$inline_135$$[1]] = $aTransitionString$$;
}
function $rflect$browser$css$setTransform$$($aElement$$1$$, $aTransformString$$) {
  var $props$$inline_140$$ = $rflect$browser$css$findAndCacheProperty_$$("transform");
  $aElement$$1$$.style[$props$$inline_140$$[1]] = $aTransformString$$;
}
var $rflect$browser$css$propertyToPrefixedProperties_$$ = {};
function $rflect$browser$css$findAndCacheProperty_$$($aPropertyName$$) {
  if (!$rflect$browser$css$propertyToPrefixedProperties_$$[$aPropertyName$$]) {
    var $property$$7$$, $style$$23$$ = document.createElement("div").style;
    " Webkit ms Ms Moz O o webkit moz".split(" ").some(function($aPrefix$$inline_142_vendorPrefix$$) {
      $property$$7$$ = $aPrefix$$inline_142_vendorPrefix$$ + $goog$string$toTitleCase$$($aPropertyName$$).replace(/\-/, "");
      return $property$$7$$ in $style$$23$$ ? ($aPrefix$$inline_142_vendorPrefix$$ = $aPrefix$$inline_142_vendorPrefix$$.toLowerCase(), $rflect$browser$css$propertyToPrefixedProperties_$$[$aPropertyName$$] = [($aPrefix$$inline_142_vendorPrefix$$ ? "-" : "") + $aPrefix$$inline_142_vendorPrefix$$ + ($aPrefix$$inline_142_vendorPrefix$$ ? "-" : "") + $aPropertyName$$, $property$$7$$], !0) : !1;
    });
  }
  return $rflect$browser$css$propertyToPrefixedProperties_$$[$aPropertyName$$];
}
function $rflect$browser$css$getSelectorCasedProperty$$() {
  return $rflect$browser$css$findAndCacheProperty_$$("transform")[0];
}
;var $rflect$math$sign$$ = Math.sign ? Math.sign : function($x$$73$$) {
  return 0 == $x$$73$$ ? 0 : 0 > $x$$73$$ ? -1 : 1;
};
function $rflect$ui$MomentumScroller$$() {
  $goog$events$EventHandler$$.call(this);
}
$goog$inherits$$($rflect$ui$MomentumScroller$$, $goog$events$EventHandler$$);
var $rflect$ui$MomentumScroller$SCROLLBAR_STYLESHEET$$ = ["\n  .scrollbar-vertical-cont {\n    box-sizing: border-box;\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding-right: 3px;\n    transition: opacity .2s;\n    opacity: 0;\n    z-index: 10;\n  }\n  ", "\n  .scrollbar-hidden {\n    opacity: 0;\n  }\n  ", "\n  .scrollbar-vertical-edge {\n    box-sizing: border-box;\n    width: 3px;\n    height: 3px;\n    background-color: rgb(181, 181, 181);\n  }\n  ", "\n  .scrollbar-vertical-top {\n    border-radius: 3px\n        3px 0 0;\n  }\n  ", 
"\n  .scrollbar-vertical-bottom {\n    border-radius: 0 0 3px\n        3px;\n  }\n  ", "\n  .scrollbar-vertical-line {\n    box-sizing: border-box;\n    width: 3px;\n    height: 1px;\n    background-color: rgb(181, 181, 181);\n  }\n  "], $rflect$ui$MomentumScroller$instancesCount_$$ = 0;
$JSCompiler_prototypeAlias$$ = $rflect$ui$MomentumScroller$$.prototype;
$JSCompiler_prototypeAlias$$.$startTouchY$ = 0;
$JSCompiler_prototypeAlias$$.$contentOffsetY$ = 0;
$JSCompiler_prototypeAlias$$.$contentStartOffsetY$ = 0;
$JSCompiler_prototypeAlias$$.$previousPoint_$ = 0;
$JSCompiler_prototypeAlias$$.$previousMoment_$ = 0;
$JSCompiler_prototypeAlias$$.$currentPoint_$ = 0;
$JSCompiler_prototypeAlias$$.$currentMoment_$ = 0;
$JSCompiler_prototypeAlias$$.$isDragging_$ = !1;
$JSCompiler_prototypeAlias$$.$isDecelerating_$ = !1;
$JSCompiler_prototypeAlias$$.$stopPropagationOnTouchEnd_$ = !1;
$JSCompiler_prototypeAlias$$.$queuedTransitionStage_$ = -1;
function $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$$($JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$, $aAddGlobalStyleSheet$$inline_161_aEnabled$$1_doc$$inline_292_node$$inline_289$$, $JSCompiler_inline_result$$279_aShouldRemoveGlobalStyleSheet$$inline_181_element$$inline_291_useScrollPos$$) {
  if ($JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$A$ != $aAddGlobalStyleSheet$$inline_161_aEnabled$$1_doc$$inline_292_node$$inline_289$$) {
    if ($JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$A$ = $aAddGlobalStyleSheet$$inline_161_aEnabled$$1_doc$$inline_292_node$$inline_289$$) {
      $aAddGlobalStyleSheet$$inline_161_aEnabled$$1_doc$$inline_292_node$$inline_289$$ = 1 == ++$rflect$ui$MomentumScroller$instancesCount_$$;
      var $$jscomp$destructuring$var0$$inline_162_overflow$$inline_164$$ = document.defaultView.getComputedStyle($JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$b$, null), $position$$inline_163$$ = $$jscomp$destructuring$var0$$inline_162_overflow$$inline_164$$.position, $$jscomp$destructuring$var0$$inline_162_overflow$$inline_164$$ = $$jscomp$destructuring$var0$$inline_162_overflow$$inline_164$$.overflow;
      console.log("frameElementInitialStyle overflow: ", $$jscomp$destructuring$var0$$inline_162_overflow$$inline_164$$);
      console.log("frameElementInitialStyle position: ", $position$$inline_163$$);
      $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$g$ = {overflow:$$jscomp$destructuring$var0$$inline_162_overflow$$inline_164$$, position:$position$$inline_163$$};
      $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$b$.style.overflow = "hidden";
      $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$b$.style.position = "relative";
      $aAddGlobalStyleSheet$$inline_161_aEnabled$$1_doc$$inline_292_node$$inline_289$$ && $JSCompiler_StaticMethods_addStyleSheet$$();
      $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$s$ = $goog$style$evaluateWithTemporaryDisplay_$$($JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$a$);
      $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$c$ = $goog$style$evaluateWithTemporaryDisplay_$$($JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$b$);
      "scroll" == $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$g$.overflow ? ($JSCompiler_inline_result$$279_aShouldRemoveGlobalStyleSheet$$inline_181_element$$inline_291_useScrollPos$$ ? $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$setScrollTop$($JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$b$.scrollTop) : $JSCompiler_StaticMethods_animateWithinBounds$$($JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$, 
      $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$contentOffsetY$), $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$b$.scrollTop = 0) : $JSCompiler_StaticMethods_animateWithinBounds$$($JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$, $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$contentOffsetY$);
      $rflect$browser$css$setTransform$$($JSCompiler_StaticMethods_getScrollBarLine$$($JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$), "scaleY(" + $JSCompiler_StaticMethods_getScrollBarLineHeight$$($JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$) + ")");
      $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$b$.appendChild($JSCompiler_StaticMethods_getScrollBarContainer$$($JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$));
      $JSCompiler_StaticMethods_enterDocument$$($JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$);
    } else {
      $JSCompiler_StaticMethods_goog_events_EventHandler_prototype$removeAll$$($JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$), ($aAddGlobalStyleSheet$$inline_161_aEnabled$$1_doc$$inline_292_node$$inline_289$$ = $JSCompiler_StaticMethods_getScrollBarContainer$$($JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$)) && $aAddGlobalStyleSheet$$inline_161_aEnabled$$1_doc$$inline_292_node$$inline_289$$.parentNode && $aAddGlobalStyleSheet$$inline_161_aEnabled$$1_doc$$inline_292_node$$inline_289$$.parentNode.removeChild($aAddGlobalStyleSheet$$inline_161_aEnabled$$1_doc$$inline_292_node$$inline_289$$), 
      $JSCompiler_inline_result$$279_aShouldRemoveGlobalStyleSheet$$inline_181_element$$inline_291_useScrollPos$$ && "scroll" == $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$g$.overflow && ($JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$b$.scrollTop = $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$getScrollTop$()), $rflect$browser$css$setTransform$$($JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$a$, 
      ""), $JSCompiler_inline_result$$279_aShouldRemoveGlobalStyleSheet$$inline_181_element$$inline_291_useScrollPos$$ = 0 == --$rflect$ui$MomentumScroller$instancesCount_$$, console.log("restoreStyles this.frameElementInitialStyle: ", $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$g$), $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$b$.style.overflow = $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$g$.overflow, 
      $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$b$.style.position = $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$g$.position, $JSCompiler_inline_result$$279_aShouldRemoveGlobalStyleSheet$$inline_181_element$$inline_291_useScrollPos$$ && ($JSCompiler_inline_result$$279_aShouldRemoveGlobalStyleSheet$$inline_181_element$$inline_291_useScrollPos$$ = $JSCompiler_StaticMethods_getStyleSheetId$$(), $aAddGlobalStyleSheet$$inline_161_aEnabled$$1_doc$$inline_292_node$$inline_289$$ = 
      document, ($JSCompiler_inline_result$$279_aShouldRemoveGlobalStyleSheet$$inline_181_element$$inline_291_useScrollPos$$ = $goog$isString$$($JSCompiler_inline_result$$279_aShouldRemoveGlobalStyleSheet$$inline_181_element$$inline_291_useScrollPos$$) ? $aAddGlobalStyleSheet$$inline_161_aEnabled$$1_doc$$inline_292_node$$inline_289$$.getElementById($JSCompiler_inline_result$$279_aShouldRemoveGlobalStyleSheet$$inline_181_element$$inline_291_useScrollPos$$) : $JSCompiler_inline_result$$279_aShouldRemoveGlobalStyleSheet$$inline_181_element$$inline_291_useScrollPos$$) && 
      $JSCompiler_inline_result$$279_aShouldRemoveGlobalStyleSheet$$inline_181_element$$inline_291_useScrollPos$$.parentNode && $JSCompiler_inline_result$$279_aShouldRemoveGlobalStyleSheet$$inline_181_element$$inline_291_useScrollPos$$.parentNode.removeChild($JSCompiler_inline_result$$279_aShouldRemoveGlobalStyleSheet$$inline_181_element$$inline_291_useScrollPos$$)), $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$a$ = null, $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$b$ = 
      null;
    }
  }
}
function $JSCompiler_StaticMethods_resetInternal$$($JSCompiler_StaticMethods_resetInternal$self$$) {
  $JSCompiler_StaticMethods_resetInternal$self$$.$a$ && $JSCompiler_StaticMethods_resetInternal$self$$.$b$ && $JSCompiler_StaticMethods_animateWithinBounds$$($JSCompiler_StaticMethods_resetInternal$self$$, 0);
  $JSCompiler_StaticMethods_resetInternal$self$$.$startTouchY$ = 0;
  $JSCompiler_StaticMethods_resetInternal$self$$.$contentOffsetY$ = 0;
  $JSCompiler_StaticMethods_resetInternal$self$$.$contentStartOffsetY$ = 0;
}
$JSCompiler_prototypeAlias$$.$rflect_ui_MomentumScroller_prototype$add$ = function $$JSCompiler_prototypeAlias$$$$rflect_ui_MomentumScroller_prototype$add$$($aElement$$5$$, $opt_useScrollPos$$) {
  this.$b$ = $aElement$$5$$;
  var $JSCompiler_temp$$228_node$$inline_264$$;
  if (void 0 !== $aElement$$5$$.firstElementChild) {
    $JSCompiler_temp$$228_node$$inline_264$$ = $aElement$$5$$.firstElementChild;
  } else {
    for ($JSCompiler_temp$$228_node$$inline_264$$ = $aElement$$5$$.firstChild;$JSCompiler_temp$$228_node$$inline_264$$ && 1 != $JSCompiler_temp$$228_node$$inline_264$$.nodeType;) {
      $JSCompiler_temp$$228_node$$inline_264$$ = $JSCompiler_temp$$228_node$$inline_264$$.nextSibling;
    }
  }
  this.$a$ = $JSCompiler_temp$$228_node$$inline_264$$;
  $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$$(this, !0, !!$opt_useScrollPos$$);
};
$JSCompiler_prototypeAlias$$.$rflect_ui_MomentumScroller_prototype$remove$ = function $$JSCompiler_prototypeAlias$$$$rflect_ui_MomentumScroller_prototype$remove$$($opt_useScrollPos$$1$$) {
  $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$$(this, !1, !!$opt_useScrollPos$$1$$);
};
$JSCompiler_prototypeAlias$$.$rflect_ui_MomentumScroller_prototype$reset$ = function $$JSCompiler_prototypeAlias$$$$rflect_ui_MomentumScroller_prototype$reset$$() {
  $JSCompiler_StaticMethods_resetInternal$$(this);
};
$JSCompiler_prototypeAlias$$.$getScrollTop$ = function $$JSCompiler_prototypeAlias$$$$getScrollTop$$() {
  return isNaN(this.$contentOffsetY$) || 0 == this.$contentOffsetY$ ? 0 : -this.$contentOffsetY$;
};
$JSCompiler_prototypeAlias$$.$setScrollTop$ = function $$JSCompiler_prototypeAlias$$$$setScrollTop$$($aScrollTop$$) {
  $JSCompiler_StaticMethods_animateWithinBounds$$(this, isNaN($aScrollTop$$) || 0 == $aScrollTop$$ ? 0 : -$aScrollTop$$);
};
function $JSCompiler_StaticMethods_getScrollBarLineHeight$$($JSCompiler_StaticMethods_getScrollBarLineHeight$self_height$$16$$) {
  $JSCompiler_StaticMethods_getScrollBarLineHeight$self_height$$16$$ = $JSCompiler_StaticMethods_getScrollBarLineHeight$self_height$$16$$.$c$.height / $JSCompiler_StaticMethods_getSizeRatio$$($JSCompiler_StaticMethods_getScrollBarLineHeight$self_height$$16$$);
  return 5 > $JSCompiler_StaticMethods_getScrollBarLineHeight$self_height$$16$$ ? 5 : $JSCompiler_StaticMethods_getScrollBarLineHeight$self_height$$16$$;
}
function $JSCompiler_StaticMethods_getSizeRatio$$($JSCompiler_StaticMethods_getSizeRatio$self$$) {
  return $JSCompiler_StaticMethods_getSizeRatio$self$$.$s$.height / $JSCompiler_StaticMethods_getSizeRatio$self$$.$c$.height;
}
function $JSCompiler_StaticMethods_enterDocument$$($JSCompiler_StaticMethods_enterDocument$self$$) {
  $JSCompiler_StaticMethods_enterDocument$self$$.$f$($JSCompiler_StaticMethods_enterDocument$self$$.$b$, "touchstart", function($aEvent$$) {
    $aEvent$$.preventDefault();
  });
  $JSCompiler_StaticMethods_enterDocument$self$$.$f$($JSCompiler_StaticMethods_enterDocument$self$$.$a$, "touchstart", $JSCompiler_StaticMethods_enterDocument$self$$.$onTouchStart$, !0);
  $JSCompiler_StaticMethods_enterDocument$self$$.$f$($JSCompiler_StaticMethods_enterDocument$self$$.$a$, "touchmove", $JSCompiler_StaticMethods_enterDocument$self$$.$onTouchMove$);
  $JSCompiler_StaticMethods_enterDocument$self$$.$f$($JSCompiler_StaticMethods_enterDocument$self$$.$a$, "touchend", $JSCompiler_StaticMethods_enterDocument$self$$.$onTouchEnd$, !0);
  $JSCompiler_StaticMethods_enterDocument$self$$.$f$($JSCompiler_StaticMethods_enterDocument$self$$.$a$, $rflect$browser$transitionend$VENDOR_TRANSITION_END_NAMES$$, $JSCompiler_StaticMethods_enterDocument$self$$.$onTransitionEnd$);
}
$JSCompiler_prototypeAlias$$.$onTouchStart$ = function $$JSCompiler_prototypeAlias$$$$onTouchStart$$($aEvent$$2$$) {
  console.log("onTouchStart");
  if (this.$isDecelerating_$) {
    var $elementMatrix$$inline_190$$ = $JSCompiler_StaticMethods_getMatrixForElement$$(this.$a$), $scrollBarContainerMatrix$$inline_191$$ = $JSCompiler_StaticMethods_getMatrixForElement$$($JSCompiler_StaticMethods_getScrollBarContainer$$(this)), $scrollBarLineMatrix$$inline_192$$ = $JSCompiler_StaticMethods_getMatrixForElement$$($JSCompiler_StaticMethods_getScrollBarLine$$(this));
    $JSCompiler_StaticMethods_setTransitionAll$$(this, "");
    $JSCompiler_StaticMethods_animateTo$$(this, $elementMatrix$$inline_190$$.m42, !0);
    $rflect$browser$css$setTransform$$($JSCompiler_StaticMethods_getScrollBarContainer$$(this), "translate3d(0, " + $scrollBarContainerMatrix$$inline_191$$.m42 + "px, 0)");
    $rflect$browser$css$setTransform$$($JSCompiler_StaticMethods_getScrollBarLine$$(this), "scaleY(" + $scrollBarLineMatrix$$inline_192$$.m22 + ")");
    this.$queuedTransitionStage_$ = -1;
    this.$stopPropagationOnTouchEnd_$ = !0;
  } else {
    this.$stopPropagationOnTouchEnd_$ = !1;
  }
  this.$isDecelerating_$ = !1;
  $JSCompiler_StaticMethods_showScrollBar$$(this, !0);
  this.$stopPropagationOnTouchEnd_$ && (console.log("aEvent touch start: ", $aEvent$$2$$), $aEvent$$2$$.$c$(), $aEvent$$2$$.preventDefault());
  this.$startTouchY$ = $aEvent$$2$$.$a$.touches[0].clientY;
  this.$v$ = $aEvent$$2$$.$a$.touches[0].clientX;
  this.$contentStartOffsetY$ = this.$contentOffsetY$;
  this.$previousPoint_$ = this.$currentPoint_$ = this.$startTouchY$;
  this.$previousMoment_$ = this.$currentMoment_$ = $goog$now$$();
  this.$a$.style.backgroundColor = "rgba(255,255,255,.5)";
  this.$isDragging_$ = !0;
};
$JSCompiler_prototypeAlias$$.$onTouchMove$ = function $$JSCompiler_prototypeAlias$$$$onTouchMove$$($aEvent$$3_currentY$$) {
  console.log("onTouchMove");
  if ($JSCompiler_StaticMethods_isDragging$$(this)) {
    $aEvent$$3_currentY$$ = $aEvent$$3_currentY$$.$a$.touches[0].clientY;
    var $deltaY_newY$$ = $aEvent$$3_currentY$$ - this.$startTouchY$;
    console.log("deltaY before: ", $deltaY_newY$$);
    console.log("this.isOutOfBounds(): ", $JSCompiler_StaticMethods_positionIsOutOfBounds$$(this, this.$contentOffsetY$));
    $JSCompiler_StaticMethods_positionIsOutOfBounds$$(this, this.$contentOffsetY$) && ($deltaY_newY$$ /= Math.exp(Math.abs($deltaY_newY$$ / 550)));
    console.log("deltaY: after", $deltaY_newY$$);
    $deltaY_newY$$ += this.$contentStartOffsetY$;
    this.$previousPoint_$ = this.$currentPoint_$;
    this.$previousMoment_$ = this.$currentMoment_$;
    this.$currentPoint_$ = $aEvent$$3_currentY$$;
    this.$currentMoment_$ = $goog$now$$();
    $JSCompiler_StaticMethods_animateTo$$(this, $deltaY_newY$$);
  }
};
$JSCompiler_prototypeAlias$$.$onTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$onTouchEnd$$($aEvent$$4_evt$$inline_204_length$$inline_276$$) {
  console.log("onTouchEnd");
  console.log("this.isDragging(): ", $JSCompiler_StaticMethods_isDragging$$(this));
  console.log("this.shouldStartMomentum(): ", $JSCompiler_StaticMethods_positionIsOutOfBounds$$(this, this.$contentOffsetY$) ? !1 : !0);
  if ($JSCompiler_StaticMethods_isDragging$$(this)) {
    if ($JSCompiler_StaticMethods_positionIsOutOfBounds$$(this, this.$contentOffsetY$)) {
      $JSCompiler_StaticMethods_snapToBounds$$(this);
    } else {
      var $aClientY$$inline_203_acceleration$$inline_270_newY$$inline_198_velocity$$inline_195$$ = $JSCompiler_StaticMethods_getEndVelocity$$(this);
      console.log("velocity", $aClientY$$inline_203_acceleration$$inline_270_newY$$inline_198_velocity$$inline_195$$);
      if (0 != $aClientY$$inline_203_acceleration$$inline_270_newY$$inline_198_velocity$$inline_195$$) {
        var $acceleration$$inline_196_displacement$$inline_271$$ = 0 > $aClientY$$inline_203_acceleration$$inline_270_newY$$inline_198_velocity$$inline_195$$ ? 5E-4 : -5E-4, $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$ = -$aClientY$$inline_203_acceleration$$inline_270_newY$$inline_198_velocity$$inline_195$$ / $acceleration$$inline_196_displacement$$inline_271$$, $aClientY$$inline_203_acceleration$$inline_270_newY$$inline_198_velocity$$inline_195$$ = 
        this.$contentOffsetY$ + -($aClientY$$inline_203_acceleration$$inline_270_newY$$inline_198_velocity$$inline_195$$ * $aClientY$$inline_203_acceleration$$inline_270_newY$$inline_198_velocity$$inline_195$$) / (2 * $acceleration$$inline_196_displacement$$inline_271$$);
        $JSCompiler_StaticMethods_positionIsOutOfBounds$$(this, $aClientY$$inline_203_acceleration$$inline_270_newY$$inline_198_velocity$$inline_195$$) ? (console.log("stage1"), $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$ = $JSCompiler_StaticMethods_getEndVelocity$$(this), $aClientY$$inline_203_acceleration$$inline_270_newY$$inline_198_velocity$$inline_195$$ = 0 > $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$ ? 
        5E-4 : -5E-4, 0 < $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$ ? ($acceleration$$inline_196_displacement$$inline_271$$ = -this.$contentOffsetY$, this.$contentOffsetY$ = 0) : ($acceleration$$inline_196_displacement$$inline_271$$ = $JSCompiler_StaticMethods_getLowestContentPosition$$(this) - this.$contentOffsetY$, this.$contentOffsetY$ = $JSCompiler_StaticMethods_getLowestContentPosition$$(this)), 
        console.log("displacement", $acceleration$$inline_196_displacement$$inline_271$$), this.$l$ = (0 > $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$ ? -1 : 1) * Math.sqrt($aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$ * $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$ + 
        2 * $acceleration$$inline_196_displacement$$inline_271$$ * $aClientY$$inline_203_acceleration$$inline_270_newY$$inline_198_velocity$$inline_195$$), console.log("this.endMomentumVelocity_", this.$l$), $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$ = .33 * Math.abs(this.$l$ / $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$), 
        $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$ = $rflect$browser$css$getSelectorCasedProperty$$() + " 3000ms cubic-bezier(.33," + (.66 - $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$) + ",.66," + (1 - $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$) + 
        ")", $rflect$browser$css$setTransition$$(this.$a$, $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$), $rflect$browser$css$setTransform$$(this.$a$, "translate3d(0, " + this.$contentOffsetY$ + "px, 0)"), $rflect$browser$css$setTransition$$($JSCompiler_StaticMethods_getScrollBarContainer$$(this), $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$), 
        $rflect$browser$css$setTransform$$($JSCompiler_StaticMethods_getScrollBarContainer$$(this), "translate3d(0, " + -(this.$contentOffsetY$ / $JSCompiler_StaticMethods_getSizeRatio$$(this) - $JSCompiler_StaticMethods_getScrollBarLineHeight$$(this) / 2) + "px, 0)"), this.$a$.style.backgroundColor = "rgba(112, 177, 229,.5)", this.$queuedTransitionStage_$ = 0) : ($aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$ = 
        $rflect$browser$css$getSelectorCasedProperty$$() + " " + $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$ + "ms cubic-bezier(0.33, 0.66, 0.66, 1)", $rflect$browser$css$setTransition$$(this.$a$, $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$), $rflect$browser$css$setTransition$$($JSCompiler_StaticMethods_getScrollBarContainer$$(this), 
        $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$), this.$contentOffsetY$ = $aClientY$$inline_203_acceleration$$inline_270_newY$$inline_198_velocity$$inline_195$$, $rflect$browser$css$setTransform$$(this.$a$, "translate3d(0, " + $aClientY$$inline_203_acceleration$$inline_270_newY$$inline_198_velocity$$inline_195$$ + "px, 0)"), $rflect$browser$css$setTransform$$($JSCompiler_StaticMethods_getScrollBarContainer$$(this), 
        "translate3d(0, " + -($aClientY$$inline_203_acceleration$$inline_270_newY$$inline_198_velocity$$inline_195$$ / $JSCompiler_StaticMethods_getSizeRatio$$(this) - $JSCompiler_StaticMethods_getScrollBarLineHeight$$(this) / 2) + "px, 0)"));
        this.$isDecelerating_$ = !0;
      } else {
        $JSCompiler_StaticMethods_showScrollBarDelayed$$(this);
      }
    }
  } else {
    $JSCompiler_StaticMethods_showScrollBarDelayed$$(this);
  }
  this.$stopPropagationOnTouchEnd_$ || 5 <= Math.abs(this.$currentPoint_$ - this.$startTouchY$) ? (console.log("aEvent touch end: ", $aEvent$$4_evt$$inline_204_length$$inline_276$$), $aEvent$$4_evt$$inline_204_length$$inline_276$$.$c$ ? $aEvent$$4_evt$$inline_204_length$$inline_276$$.$c$() : $aEvent$$4_evt$$inline_204_length$$inline_276$$.$a$.stopPropagation(), $aEvent$$4_evt$$inline_204_length$$inline_276$$.preventDefault(), this.$stopPropagationOnTouchEnd_$ = !1) : ($aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$ = 
  this.$v$, $aClientY$$inline_203_acceleration$$inline_270_newY$$inline_198_velocity$$inline_195$$ = this.$startTouchY$, $aEvent$$4_evt$$inline_204_length$$inline_276$$ = document.createEvent("MouseEvents"), $aEvent$$4_evt$$inline_204_length$$inline_276$$.initMouseEvent("click", !0, !1, window, 0, 0, 0, $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$, $aClientY$$inline_203_acceleration$$inline_270_newY$$inline_198_velocity$$inline_195$$, 
  !1, !1, !1, !1, 0, null), $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$ = document.elementFromPoint($aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$, $aClientY$$inline_203_acceleration$$inline_270_newY$$inline_198_velocity$$inline_195$$), $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$.dispatchEvent($aEvent$$4_evt$$inline_204_length$$inline_276$$), 
  $rflect$ui$MomentumScroller$needsFocus$$($aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$) && ($aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$.setSelectionRange && 0 !== $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$.type.indexOf("date") && 
  "time" !== $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$.type && "month" !== $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$.type ? ($aEvent$$4_evt$$inline_204_length$$inline_276$$ = $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$.value.length, 
  $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$.setSelectionRange($aEvent$$4_evt$$inline_204_length$$inline_276$$, $aEvent$$4_evt$$inline_204_length$$inline_276$$)) : $aClientX$$inline_202_element$$inline_205_time$$inline_197_transition$$inline_199_transition$$inline_273_valueToLowerCubicBezierWith$$inline_272_velocity$$inline_269$$.focus()));
  this.$v$ = this.$startTouchY$ = this.$previousPoint_$ = this.$previousMoment_$ = this.$currentPoint_$ = this.$currentMoment_$ = 0;
  this.$isDragging_$ = !1;
};
function $rflect$ui$MomentumScroller$needsFocus$$($aElement$$7$$) {
  switch($aElement$$7$$.nodeName.toLowerCase()) {
    case "textarea":
      return !0;
    case "select":
      return !0;
    case "input":
      switch($aElement$$7$$.type) {
        case "button":
        ;
        case "checkbox":
        ;
        case "file":
        ;
        case "image":
        ;
        case "radio":
        ;
        case "submit":
          return !1;
      }
      return !$aElement$$7$$.disabled && !$aElement$$7$$.readOnly;
    default:
      return !1;
  }
}
$JSCompiler_prototypeAlias$$.$onTransitionEnd$ = function $$JSCompiler_prototypeAlias$$$$onTransitionEnd$$($aEvent$$5_velocity$$inline_208$$) {
  if ($aEvent$$5_velocity$$inline_208$$.$f$ == this.$a$) {
    switch(this.$queuedTransitionStage_$) {
      case -1:
        $rflect$browser$css$setTransition$$(this.$a$, "");
        $rflect$browser$css$setTransition$$($JSCompiler_StaticMethods_getScrollBarContainer$$(this), "");
        $rflect$browser$css$setTransition$$($JSCompiler_StaticMethods_getScrollBarLine$$(this), "");
        $JSCompiler_StaticMethods_showScrollBarDelayed$$(this);
        this.$isDecelerating_$ = !1;
        break;
      case 0:
        console.log("stage2");
        $aEvent$$5_velocity$$inline_208$$ = this.$l$;
        var $displacement$$inline_209_scrollBarLineReduced$$inline_212$$ = -($aEvent$$5_velocity$$inline_208$$ * $aEvent$$5_velocity$$inline_208$$) / (20 * (0 > $aEvent$$5_velocity$$inline_208$$ ? 5E-4 : -5E-4));
        console.log("velocity", $aEvent$$5_velocity$$inline_208$$);
        100 < $displacement$$inline_209_scrollBarLineReduced$$inline_212$$ && ($displacement$$inline_209_scrollBarLineReduced$$inline_212$$ = 100);
        -100 > $displacement$$inline_209_scrollBarLineReduced$$inline_212$$ && ($displacement$$inline_209_scrollBarLineReduced$$inline_212$$ = -100);
        var $newY$$inline_210$$ = 0 < $aEvent$$5_velocity$$inline_208$$ ? $displacement$$inline_209_scrollBarLineReduced$$inline_212$$ : this.$contentOffsetY$ + $displacement$$inline_209_scrollBarLineReduced$$inline_212$$;
        this.$contentOffsetY$ = $newY$$inline_210$$;
        var $transition$$inline_211$$ = $rflect$browser$css$getSelectorCasedProperty$$() + " 2000ms cubic-bezier(0.33, 0.66, 0.66, 1)";
        $rflect$browser$css$setTransition$$(this.$a$, $transition$$inline_211$$);
        $rflect$browser$css$setTransform$$(this.$a$, "translate3d(0, " + $newY$$inline_210$$ + "px, 0)");
        $displacement$$inline_209_scrollBarLineReduced$$inline_212$$ = $JSCompiler_StaticMethods_getScrollBarLineHeight$$(this) - Math.abs($displacement$$inline_209_scrollBarLineReduced$$inline_212$$);
        $rflect$browser$css$setTransition$$($JSCompiler_StaticMethods_getScrollBarContainer$$(this), $transition$$inline_211$$);
        $rflect$browser$css$setTransition$$($JSCompiler_StaticMethods_getScrollBarLine$$(this), $transition$$inline_211$$);
        $rflect$browser$css$setTransform$$($JSCompiler_StaticMethods_getScrollBarLine$$(this), "scaleY(" + $displacement$$inline_209_scrollBarLineReduced$$inline_212$$ + ")");
        0 < $aEvent$$5_velocity$$inline_208$$ ? $rflect$browser$css$setTransform$$($JSCompiler_StaticMethods_getScrollBarContainer$$(this), "translate3d(0, " + $displacement$$inline_209_scrollBarLineReduced$$inline_212$$ / 2 + "px, 0)") : $rflect$browser$css$setTransform$$($JSCompiler_StaticMethods_getScrollBarContainer$$(this), "translate3d(0, " + (this.$c$.height - $displacement$$inline_209_scrollBarLineReduced$$inline_212$$ / 2) + "px, 0)");
        this.$a$.style.backgroundColor = "rgba(221, 93, 93,.5)";
        this.$queuedTransitionStage_$ = 1;
        break;
      case 1:
        $JSCompiler_StaticMethods_snapToBounds$$(this);
        this.$a$.style.backgroundColor = "rgba(72, 191, 190,.5)";
        this.$queuedTransitionStage_$ = 2;
        break;
      case 2:
        this.$queuedTransitionStage_$ = -1, $rflect$browser$css$setTransition$$(this.$a$, ""), $rflect$browser$css$setTransition$$($JSCompiler_StaticMethods_getScrollBarLine$$(this), ""), $rflect$browser$css$setTransition$$($JSCompiler_StaticMethods_getScrollBarContainer$$(this), ""), this.$a$.style.backgroundColor = "rgba(255,255,255,.5)", $JSCompiler_StaticMethods_showScrollBarDelayed$$(this), this.$isDecelerating_$ = !1;
    }
  }
};
function $JSCompiler_StaticMethods_animateTo$$($JSCompiler_StaticMethods_animateTo$self$$, $offsetY$$, $lowestContentPosition$$inline_218_opt_doNotAnimateScrollBar$$) {
  $JSCompiler_StaticMethods_animateTo$self$$.$contentOffsetY$ = $offsetY$$;
  $rflect$browser$css$setTransform$$($JSCompiler_StaticMethods_animateTo$self$$.$a$, "translate3d(0, " + $offsetY$$ + "px, 0)");
  if (!$lowestContentPosition$$inline_218_opt_doNotAnimateScrollBar$$) {
    $lowestContentPosition$$inline_218_opt_doNotAnimateScrollBar$$ = $JSCompiler_StaticMethods_getLowestContentPosition$$($JSCompiler_StaticMethods_animateTo$self$$);
    var $offsetYWithinBounds$$inline_219$$ = $offsetY$$;
    0 < $offsetY$$ ? $offsetYWithinBounds$$inline_219$$ = 0 : $offsetY$$ < $lowestContentPosition$$inline_218_opt_doNotAnimateScrollBar$$ && ($offsetYWithinBounds$$inline_219$$ = $lowestContentPosition$$inline_218_opt_doNotAnimateScrollBar$$);
    var $scrollBarLineReduced$$inline_220_scrollBarLineReducedBounded$$inline_221$$ = $JSCompiler_StaticMethods_getScrollBarLineHeight$$($JSCompiler_StaticMethods_animateTo$self$$) - Math.abs($offsetY$$ - $offsetYWithinBounds$$inline_219$$), $scrollBarLineReduced$$inline_220_scrollBarLineReducedBounded$$inline_221$$ = 5 > $scrollBarLineReduced$$inline_220_scrollBarLineReducedBounded$$inline_221$$ ? 5 : $scrollBarLineReduced$$inline_220_scrollBarLineReducedBounded$$inline_221$$;
    0 < $offsetY$$ ? $rflect$browser$css$setTransform$$($JSCompiler_StaticMethods_getScrollBarContainer$$($JSCompiler_StaticMethods_animateTo$self$$), "translate3d(0, " + $scrollBarLineReduced$$inline_220_scrollBarLineReducedBounded$$inline_221$$ / 2 + "px, 0)") : $offsetY$$ < $lowestContentPosition$$inline_218_opt_doNotAnimateScrollBar$$ ? $rflect$browser$css$setTransform$$($JSCompiler_StaticMethods_getScrollBarContainer$$($JSCompiler_StaticMethods_animateTo$self$$), "translate3d(0, " + ($JSCompiler_StaticMethods_animateTo$self$$.$c$.height - 
    $scrollBarLineReduced$$inline_220_scrollBarLineReducedBounded$$inline_221$$ / 2) + "px, 0)") : $rflect$browser$css$setTransform$$($JSCompiler_StaticMethods_getScrollBarContainer$$($JSCompiler_StaticMethods_animateTo$self$$), "translate3d(0, " + -($offsetYWithinBounds$$inline_219$$ / $JSCompiler_StaticMethods_getSizeRatio$$($JSCompiler_StaticMethods_animateTo$self$$) - $JSCompiler_StaticMethods_getScrollBarLineHeight$$($JSCompiler_StaticMethods_animateTo$self$$) / 2) + "px, 0)");
    $rflect$browser$css$setTransform$$($JSCompiler_StaticMethods_getScrollBarLine$$($JSCompiler_StaticMethods_animateTo$self$$), "scaleY(" + $scrollBarLineReduced$$inline_220_scrollBarLineReducedBounded$$inline_221$$ + ")");
  }
}
function $JSCompiler_StaticMethods_animateWithinBounds$$($JSCompiler_StaticMethods_animateWithinBounds$self$$, $aOffsetY$$) {
  var $lowestContentPosition$$1$$ = $JSCompiler_StaticMethods_getLowestContentPosition$$($JSCompiler_StaticMethods_animateWithinBounds$self$$), $offsetY$$2$$ = $aOffsetY$$;
  0 < $offsetY$$2$$ ? $offsetY$$2$$ = 0 : $offsetY$$2$$ < $lowestContentPosition$$1$$ && ($offsetY$$2$$ = $lowestContentPosition$$1$$);
  $JSCompiler_StaticMethods_animateTo$$($JSCompiler_StaticMethods_animateWithinBounds$self$$, $offsetY$$2$$);
}
function $JSCompiler_StaticMethods_snapToBounds$$($JSCompiler_StaticMethods_snapToBounds$self$$) {
  var $transition$$ = $rflect$browser$css$getSelectorCasedProperty$$() + " 2000ms ease-out";
  $JSCompiler_StaticMethods_setTransitionAll$$($JSCompiler_StaticMethods_snapToBounds$self$$, $transition$$);
  0 < $JSCompiler_StaticMethods_snapToBounds$self$$.$contentOffsetY$ ? ($JSCompiler_StaticMethods_snapToBounds$self$$.$contentOffsetY$ = 0, $rflect$browser$css$setTransform$$($JSCompiler_StaticMethods_getScrollBarContainer$$($JSCompiler_StaticMethods_snapToBounds$self$$), "translate3d(0, " + $JSCompiler_StaticMethods_getScrollBarLineHeight$$($JSCompiler_StaticMethods_snapToBounds$self$$) / 2 + "px, 0)")) : ($JSCompiler_StaticMethods_snapToBounds$self$$.$contentOffsetY$ = $JSCompiler_StaticMethods_getLowestContentPosition$$($JSCompiler_StaticMethods_snapToBounds$self$$), 
  $rflect$browser$css$setTransform$$($JSCompiler_StaticMethods_getScrollBarContainer$$($JSCompiler_StaticMethods_snapToBounds$self$$), "translate3d(0, " + ($JSCompiler_StaticMethods_snapToBounds$self$$.$c$.height - $JSCompiler_StaticMethods_getScrollBarLineHeight$$($JSCompiler_StaticMethods_snapToBounds$self$$) / 2) + "px, 0)"));
  $rflect$browser$css$setTransform$$($JSCompiler_StaticMethods_snapToBounds$self$$.$a$, "translate3d(0, " + $JSCompiler_StaticMethods_snapToBounds$self$$.$contentOffsetY$ + "px, 0)");
  $rflect$browser$css$setTransform$$($JSCompiler_StaticMethods_getScrollBarLine$$($JSCompiler_StaticMethods_snapToBounds$self$$), "scaleY(" + $JSCompiler_StaticMethods_getScrollBarLineHeight$$($JSCompiler_StaticMethods_snapToBounds$self$$) + ")");
  $JSCompiler_StaticMethods_snapToBounds$self$$.$isDecelerating_$ = !0;
}
function $JSCompiler_StaticMethods_showScrollBar$$($JSCompiler_StaticMethods_showScrollBar$self$$, $aShow$$) {
  clearTimeout($JSCompiler_StaticMethods_showScrollBar$self$$.$u$);
  $aShow$$ || $rflect$browser$css$setTransition$$($JSCompiler_StaticMethods_getScrollBarContainer$$($JSCompiler_StaticMethods_showScrollBar$self$$), "opacity .2s");
  $JSCompiler_StaticMethods_getScrollBarContainer$$($JSCompiler_StaticMethods_showScrollBar$self$$).style.opacity = $aShow$$ ? "1" : "0";
}
function $JSCompiler_StaticMethods_showScrollBarDelayed$$($JSCompiler_StaticMethods_showScrollBarDelayed$self$$) {
  clearTimeout($JSCompiler_StaticMethods_showScrollBarDelayed$self$$.$u$);
  $JSCompiler_StaticMethods_showScrollBarDelayed$self$$.$u$ = setTimeout(function() {
    $JSCompiler_StaticMethods_showScrollBar$$($JSCompiler_StaticMethods_showScrollBarDelayed$self$$, !1);
  }, 0);
}
function $JSCompiler_StaticMethods_positionIsOutOfBounds$$($JSCompiler_StaticMethods_positionIsOutOfBounds$self$$, $aPosition$$) {
  return 0 < $aPosition$$ || $aPosition$$ < $JSCompiler_StaticMethods_getLowestContentPosition$$($JSCompiler_StaticMethods_positionIsOutOfBounds$self$$);
}
function $JSCompiler_StaticMethods_getLowestContentPosition$$($JSCompiler_StaticMethods_getLowestContentPosition$self$$) {
  return -$JSCompiler_StaticMethods_getLowestContentPosition$self$$.$s$.height + $JSCompiler_StaticMethods_getLowestContentPosition$self$$.$c$.height;
}
function $JSCompiler_StaticMethods_isDragging$$($JSCompiler_StaticMethods_isDragging$self$$) {
  return $JSCompiler_StaticMethods_isDragging$self$$.$isDragging_$ || ($JSCompiler_StaticMethods_isDragging$self$$.$isDragging_$ = 5 <= Math.abs($JSCompiler_StaticMethods_isDragging$self$$.$currentPoint_$ - $JSCompiler_StaticMethods_isDragging$self$$.$startTouchY$));
}
function $JSCompiler_StaticMethods_getMatrixForElement$$($aComputedStyle$$inline_225_aElement$$8_style$$24$$) {
  $aComputedStyle$$inline_225_aElement$$8_style$$24$$ = document.defaultView.getComputedStyle($aComputedStyle$$inline_225_aElement$$8_style$$24$$, null);
  var $JSCompiler_inline_result$$15$$;
  $JSCompiler_inline_result$$15$$ = $rflect$browser$css$findAndCacheProperty_$$("transform")[1];
  $aComputedStyle$$inline_225_aElement$$8_style$$24$$ = $aComputedStyle$$inline_225_aElement$$8_style$$24$$[$JSCompiler_inline_result$$15$$];
  return window.WebKitCSSMatrix ? new WebKitCSSMatrix($aComputedStyle$$inline_225_aElement$$8_style$$24$$) : window.MSCSSMatrix ? new MSCSSMatrix($aComputedStyle$$inline_225_aElement$$8_style$$24$$) : window.CSSMatrix ? new CSSMatrix($aComputedStyle$$inline_225_aElement$$8_style$$24$$) : null;
}
function $JSCompiler_StaticMethods_setTransitionAll$$($JSCompiler_StaticMethods_setTransitionAll$self$$, $aTransition$$) {
  $rflect$browser$css$setTransition$$($JSCompiler_StaticMethods_setTransitionAll$self$$.$a$, $aTransition$$);
  $rflect$browser$css$setTransition$$($JSCompiler_StaticMethods_getScrollBarContainer$$($JSCompiler_StaticMethods_setTransitionAll$self$$), $aTransition$$);
  $rflect$browser$css$setTransition$$($JSCompiler_StaticMethods_getScrollBarLine$$($JSCompiler_StaticMethods_setTransitionAll$self$$), $aTransition$$);
}
function $JSCompiler_StaticMethods_getEndVelocity$$($JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$) {
  var $velocity$$3$$ = ($JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$.$currentPoint_$ - $JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$.$previousPoint_$) / ($JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$.$currentMoment_$ - $JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$.$previousMoment_$);
  console.log("previousMoment_: ", $JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$.$previousMoment_$);
  console.log("currentMoment_: ", $JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$.$currentMoment_$);
  console.log("velocity: ", $velocity$$3$$);
  $JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$ = $rflect$math$sign$$($JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$.$currentPoint_$ - $JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$.$previousPoint_$);
  console.log("velocitySign: ", $JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$);
  console.log("cappedVelocity: ", 3.5 < Math.abs($velocity$$3$$) ? 3.5 * $JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$ : $velocity$$3$$);
  return isNaN($velocity$$3$$) ? 0 : 3.5 < Math.abs($velocity$$3$$) ? 3.5 * $JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$ : $velocity$$3$$;
}
function $JSCompiler_StaticMethods_getStyleSheetId$$() {
  return "momentum-scroller-stylesheet-" + (document[$goog$UID_PROPERTY_$$] || (document[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$));
}
function $JSCompiler_StaticMethods_addStyleSheet$$() {
  var $style$$25$$ = $goog$dom$createDom$$("style", {id:$JSCompiler_StaticMethods_getStyleSheetId$$()});
  $style$$25$$.appendChild(document.createTextNode(""));
  document.head.appendChild($style$$25$$);
  $rflect$ui$MomentumScroller$SCROLLBAR_STYLESHEET$$.forEach(function($rule$$3$$) {
    $style$$25$$.sheet.insertRule($rule$$3$$);
  });
}
function $JSCompiler_StaticMethods_getScrollBarContainer$$($JSCompiler_StaticMethods_getScrollBarContainer$self$$) {
  $JSCompiler_StaticMethods_getScrollBarContainer$self$$.$m$ || ($JSCompiler_StaticMethods_getScrollBarContainer$self$$.$m$ = $goog$dom$createDom$$("div", "scrollbar-vertical-cont", $JSCompiler_StaticMethods_getScrollBarLine$$($JSCompiler_StaticMethods_getScrollBarContainer$self$$)));
  return $JSCompiler_StaticMethods_getScrollBarContainer$self$$.$m$;
}
function $JSCompiler_StaticMethods_getScrollBarLine$$($JSCompiler_StaticMethods_getScrollBarLine$self$$) {
  $JSCompiler_StaticMethods_getScrollBarLine$self$$.$o$ || ($JSCompiler_StaticMethods_getScrollBarLine$self$$.$o$ = $goog$dom$createDom$$("div", "scrollbar-vertical-line"));
  return $JSCompiler_StaticMethods_getScrollBarLine$self$$.$o$;
}
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$$(this, !1, !1);
  $JSCompiler_StaticMethods_resetInternal$$(this);
  this.$o$ = this.$m$ = null;
  $rflect$ui$MomentumScroller$$.$superClass_$.$disposeInternal$.call(this);
};
$goog$exportSymbol$$("MomentumScroller", $rflect$ui$MomentumScroller$$);
$goog$exportSymbol$$("MomentumScroller.prototype.add", $rflect$ui$MomentumScroller$$.prototype.$rflect_ui_MomentumScroller_prototype$add$);
$goog$exportSymbol$$("MomentumScroller.prototype.remove", $rflect$ui$MomentumScroller$$.prototype.$rflect_ui_MomentumScroller_prototype$remove$);
$goog$exportSymbol$$("MomentumScroller.prototype.reset", $rflect$ui$MomentumScroller$$.prototype.$rflect_ui_MomentumScroller_prototype$reset$);
$goog$exportSymbol$$("MomentumScroller.prototype.getScrollTop", $rflect$ui$MomentumScroller$$.prototype.$getScrollTop$);
$goog$exportSymbol$$("MomentumScroller.prototype.setScrollTop", $rflect$ui$MomentumScroller$$.prototype.$setScrollTop$);
$goog$exportSymbol$$("MomentumScroller.prototype.dispose", $rflect$ui$MomentumScroller$$.prototype.$w$);
})();
