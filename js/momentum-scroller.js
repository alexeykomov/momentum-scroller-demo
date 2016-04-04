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
var $goog$UID_PROPERTY_$$ = "closure_uid_" + (1E9 * Math.random() >>> 0), $goog$uidCounter_$$ = 0, $goog$now$$ = Date.now || function() {
  return +new Date;
};
function $goog$exportSymbol$$($publicPath$$, $object$$) {
  var $parts$$inline_16$$ = $publicPath$$.split("."), $cur$$inline_17$$ = $goog$global$$;
  $parts$$inline_16$$[0] in $cur$$inline_17$$ || !$cur$$inline_17$$.execScript || $cur$$inline_17$$.execScript("var " + $parts$$inline_16$$[0]);
  for (var $part$$inline_18$$;$parts$$inline_16$$.length && ($part$$inline_18$$ = $parts$$inline_16$$.shift());) {
    $parts$$inline_16$$.length || void 0 === $object$$ ? $cur$$inline_17$$[$part$$inline_18$$] ? $cur$$inline_17$$ = $cur$$inline_17$$[$part$$inline_18$$] : $cur$$inline_17$$ = $cur$$inline_17$$[$part$$inline_18$$] = {} : $cur$$inline_17$$[$part$$inline_18$$] = $object$$;
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
function $goog$string$compareElements_$$($left$$3$$, $right$$3$$) {
  return $left$$3$$ < $right$$3$$ ? -1 : $left$$3$$ > $right$$3$$ ? 1 : 0;
}
function $goog$string$toTitleCase$$($str$$52$$) {
  return $str$$52$$.replace(/(^|[\s]+)([a-z])/g, function($all$$1$$, $p1$$, $p2$$) {
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
    var $message$$inline_24$$ = "Assertion failed";
    if ($opt_message$$8$$) {
      var $message$$inline_24$$ = $message$$inline_24$$ + (": " + $opt_message$$8$$), $args$$inline_25$$ = Array.prototype.slice.call(arguments, 2)
    }
    throw new $goog$asserts$AssertionError$$("" + $message$$inline_24$$, $args$$inline_25$$ || []);
  }
}
;function $goog$object$forEach$$($obj$$29$$, $f$$1$$, $opt_obj$$2$$) {
  for (var $key$$24$$ in $obj$$29$$) {
    $f$$1$$.call($opt_obj$$2$$, $obj$$29$$[$key$$24$$], $key$$24$$, $obj$$29$$);
  }
}
;var $goog$array$indexOf$$ = Array.prototype.indexOf ? function($arr$$8$$, $obj$$58$$, $opt_fromIndex$$6$$) {
  $goog$asserts$assert$$(null != $arr$$8$$.length);
  return Array.prototype.indexOf.call($arr$$8$$, $obj$$58$$, $opt_fromIndex$$6$$);
} : function($arr$$9$$, $obj$$59$$, $fromIndex_i$$27_opt_fromIndex$$7$$) {
  $fromIndex_i$$27_opt_fromIndex$$7$$ = null == $fromIndex_i$$27_opt_fromIndex$$7$$ ? 0 : 0 > $fromIndex_i$$27_opt_fromIndex$$7$$ ? Math.max(0, $arr$$9$$.length + $fromIndex_i$$27_opt_fromIndex$$7$$) : $fromIndex_i$$27_opt_fromIndex$$7$$;
  if ("string" == typeof $arr$$9$$) {
    return "string" == typeof $obj$$59$$ && 1 == $obj$$59$$.length ? $arr$$9$$.indexOf($obj$$59$$, $fromIndex_i$$27_opt_fromIndex$$7$$) : -1;
  }
  for (;$fromIndex_i$$27_opt_fromIndex$$7$$ < $arr$$9$$.length;$fromIndex_i$$27_opt_fromIndex$$7$$++) {
    if ($fromIndex_i$$27_opt_fromIndex$$7$$ in $arr$$9$$ && $arr$$9$$[$fromIndex_i$$27_opt_fromIndex$$7$$] === $obj$$59$$) {
      return $fromIndex_i$$27_opt_fromIndex$$7$$;
    }
  }
  return -1;
};
var $goog$labs$userAgent$util$userAgent_$$;
a: {
  var $navigator$$inline_28$$ = $goog$global$$.navigator;
  if ($navigator$$inline_28$$) {
    var $userAgent$$inline_29$$ = $navigator$$inline_28$$.userAgent;
    if ($userAgent$$inline_29$$) {
      $goog$labs$userAgent$util$userAgent_$$ = $userAgent$$inline_29$$;
      break a;
    }
  }
  $goog$labs$userAgent$util$userAgent_$$ = "";
}
;var $goog$userAgent$OPERA$$ = -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf("Opera") || -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf("OPR"), $goog$userAgent$IE$$ = -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf("Trident") || -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf("MSIE"), $goog$userAgent$EDGE$$ = -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf("Edge"), $goog$userAgent$GECKO$$ = -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf("Gecko") && !(-1 != $goog$labs$userAgent$util$userAgent_$$.toLowerCase().indexOf("webkit") && 
-1 == $goog$labs$userAgent$util$userAgent_$$.indexOf("Edge")) && !(-1 != $goog$labs$userAgent$util$userAgent_$$.indexOf("Trident") || -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf("MSIE")) && -1 == $goog$labs$userAgent$util$userAgent_$$.indexOf("Edge"), $goog$userAgent$WEBKIT$$ = -1 != $goog$labs$userAgent$util$userAgent_$$.toLowerCase().indexOf("webkit") && -1 == $goog$labs$userAgent$util$userAgent_$$.indexOf("Edge");
function $goog$userAgent$getDocumentMode_$$() {
  var $doc$$5$$ = $goog$global$$.document;
  return $doc$$5$$ ? $doc$$5$$.documentMode : void 0;
}
var $goog$userAgent$VERSION$$;
a: {
  var $version$$inline_31$$ = "", $arr$$inline_32$$ = function() {
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
  $arr$$inline_32$$ && ($version$$inline_31$$ = $arr$$inline_32$$ ? $arr$$inline_32$$[1] : "");
  if ($goog$userAgent$IE$$) {
    var $docMode$$inline_33$$ = $goog$userAgent$getDocumentMode_$$();
    if (null != $docMode$$inline_33$$ && $docMode$$inline_33$$ > parseFloat($version$$inline_31$$)) {
      $goog$userAgent$VERSION$$ = String($docMode$$inline_33$$);
      break a;
    }
  }
  $goog$userAgent$VERSION$$ = $version$$inline_31$$;
}
var $goog$userAgent$isVersionOrHigherCache_$$ = {};
function $goog$userAgent$isVersionOrHigher$$($version$$13$$) {
  var $JSCompiler_temp$$1_order$$inline_37$$;
  if (!($JSCompiler_temp$$1_order$$inline_37$$ = $goog$userAgent$isVersionOrHigherCache_$$[$version$$13$$])) {
    $JSCompiler_temp$$1_order$$inline_37$$ = 0;
    for (var $v1Subs$$inline_38$$ = $goog$string$trim$$(String($goog$userAgent$VERSION$$)).split("."), $v2Subs$$inline_39$$ = $goog$string$trim$$(String($version$$13$$)).split("."), $subCount$$inline_40$$ = Math.max($v1Subs$$inline_38$$.length, $v2Subs$$inline_39$$.length), $subIdx$$inline_41$$ = 0;0 == $JSCompiler_temp$$1_order$$inline_37$$ && $subIdx$$inline_41$$ < $subCount$$inline_40$$;$subIdx$$inline_41$$++) {
      var $v1Sub$$inline_42$$ = $v1Subs$$inline_38$$[$subIdx$$inline_41$$] || "", $v2Sub$$inline_43$$ = $v2Subs$$inline_39$$[$subIdx$$inline_41$$] || "", $v1CompParser$$inline_44$$ = /(\d*)(\D*)/g, $v2CompParser$$inline_45$$ = /(\d*)(\D*)/g;
      do {
        var $v1Comp$$inline_46$$ = $v1CompParser$$inline_44$$.exec($v1Sub$$inline_42$$) || ["", "", ""], $v2Comp$$inline_47$$ = $v2CompParser$$inline_45$$.exec($v2Sub$$inline_43$$) || ["", "", ""];
        if (0 == $v1Comp$$inline_46$$[0].length && 0 == $v2Comp$$inline_47$$[0].length) {
          break;
        }
        $JSCompiler_temp$$1_order$$inline_37$$ = $goog$string$compareElements_$$(0 == $v1Comp$$inline_46$$[1].length ? 0 : parseInt($v1Comp$$inline_46$$[1], 10), 0 == $v2Comp$$inline_47$$[1].length ? 0 : parseInt($v2Comp$$inline_47$$[1], 10)) || $goog$string$compareElements_$$(0 == $v1Comp$$inline_46$$[2].length, 0 == $v2Comp$$inline_47$$[2].length) || $goog$string$compareElements_$$($v1Comp$$inline_46$$[2], $v2Comp$$inline_47$$[2]);
      } while (0 == $JSCompiler_temp$$1_order$$inline_37$$);
    }
    $JSCompiler_temp$$1_order$$inline_37$$ = $goog$userAgent$isVersionOrHigherCache_$$[$version$$13$$] = 0 <= $JSCompiler_temp$$1_order$$inline_37$$;
  }
  return $JSCompiler_temp$$1_order$$inline_37$$;
}
var $doc$$inline_49$$ = $goog$global$$.document, $goog$userAgent$DOCUMENT_MODE$$ = $doc$$inline_49$$ && $goog$userAgent$IE$$ ? $goog$userAgent$getDocumentMode_$$() || ("CSS1Compat" == $doc$$inline_49$$.compatMode ? parseInt($goog$userAgent$VERSION$$, 10) : 5) : void 0;
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
!$goog$userAgent$GECKO$$ && !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && 9 <= Number($goog$userAgent$DOCUMENT_MODE$$) || $goog$userAgent$GECKO$$ && $goog$userAgent$isVersionOrHigher$$("1.9.1");
$goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("9");
function $goog$reflect$sinkValue$$($x$$70$$) {
  $goog$reflect$sinkValue$$[" "]($x$$70$$);
  return $x$$70$$;
}
$goog$reflect$sinkValue$$[" "] = function $$goog$reflect$sinkValue$$$__0$() {
};
function $goog$style$evaluateWithTemporaryDisplay_$$($element$$55_retVal$$1$$) {
  var $fn$$5$$ = $goog$style$getSizeWithDisplay_$$, $JSCompiler_inline_result$$186_doc$$inline_197_style$$13_styles$$inline_198$$;
  a: {
    $goog$asserts$assert$$($element$$55_retVal$$1$$, "Node cannot be null or undefined.");
    $JSCompiler_inline_result$$186_doc$$inline_197_style$$13_styles$$inline_198$$ = 9 == $element$$55_retVal$$1$$.nodeType ? $element$$55_retVal$$1$$ : $element$$55_retVal$$1$$.ownerDocument || $element$$55_retVal$$1$$.document;
    if ($JSCompiler_inline_result$$186_doc$$inline_197_style$$13_styles$$inline_198$$.defaultView && $JSCompiler_inline_result$$186_doc$$inline_197_style$$13_styles$$inline_198$$.defaultView.getComputedStyle && ($JSCompiler_inline_result$$186_doc$$inline_197_style$$13_styles$$inline_198$$ = $JSCompiler_inline_result$$186_doc$$inline_197_style$$13_styles$$inline_198$$.defaultView.getComputedStyle($element$$55_retVal$$1$$, null))) {
      $JSCompiler_inline_result$$186_doc$$inline_197_style$$13_styles$$inline_198$$ = $JSCompiler_inline_result$$186_doc$$inline_197_style$$13_styles$$inline_198$$.display || $JSCompiler_inline_result$$186_doc$$inline_197_style$$13_styles$$inline_198$$.getPropertyValue("display") || "";
      break a;
    }
    $JSCompiler_inline_result$$186_doc$$inline_197_style$$13_styles$$inline_198$$ = "";
  }
  if ("none" != ($JSCompiler_inline_result$$186_doc$$inline_197_style$$13_styles$$inline_198$$ || ($element$$55_retVal$$1$$.currentStyle ? $element$$55_retVal$$1$$.currentStyle.display : null) || $element$$55_retVal$$1$$.style && $element$$55_retVal$$1$$.style.display)) {
    return $fn$$5$$($element$$55_retVal$$1$$);
  }
  $JSCompiler_inline_result$$186_doc$$inline_197_style$$13_styles$$inline_198$$ = $element$$55_retVal$$1$$.style;
  var $originalDisplay$$ = $JSCompiler_inline_result$$186_doc$$inline_197_style$$13_styles$$inline_198$$.display, $originalVisibility$$ = $JSCompiler_inline_result$$186_doc$$inline_197_style$$13_styles$$inline_198$$.visibility, $originalPosition$$ = $JSCompiler_inline_result$$186_doc$$inline_197_style$$13_styles$$inline_198$$.position;
  $JSCompiler_inline_result$$186_doc$$inline_197_style$$13_styles$$inline_198$$.visibility = "hidden";
  $JSCompiler_inline_result$$186_doc$$inline_197_style$$13_styles$$inline_198$$.position = "absolute";
  $JSCompiler_inline_result$$186_doc$$inline_197_style$$13_styles$$inline_198$$.display = "inline";
  $element$$55_retVal$$1$$ = $fn$$5$$($element$$55_retVal$$1$$);
  $JSCompiler_inline_result$$186_doc$$inline_197_style$$13_styles$$inline_198$$.display = $originalDisplay$$;
  $JSCompiler_inline_result$$186_doc$$inline_197_style$$13_styles$$inline_198$$.position = $originalPosition$$;
  $JSCompiler_inline_result$$186_doc$$inline_197_style$$13_styles$$inline_198$$.visibility = $originalVisibility$$;
  return $element$$55_retVal$$1$$;
}
function $goog$style$getSizeWithDisplay_$$($doc$$inline_62_element$$56$$) {
  var $offsetWidth$$ = $doc$$inline_62_element$$56$$.offsetWidth, $offsetHeight$$ = $doc$$inline_62_element$$56$$.offsetHeight, $webkitOffsetsZero$$ = $goog$userAgent$WEBKIT$$ && !$offsetWidth$$ && !$offsetHeight$$;
  if ((void 0 === $offsetWidth$$ || $webkitOffsetsZero$$) && $doc$$inline_62_element$$56$$.getBoundingClientRect) {
    var $clientRect_rect$$inline_61$$;
    a: {
      try {
        $clientRect_rect$$inline_61$$ = $doc$$inline_62_element$$56$$.getBoundingClientRect();
      } catch ($e$$inline_63$$) {
        $clientRect_rect$$inline_61$$ = {left:0, top:0, right:0, bottom:0};
        break a;
      }
      $goog$userAgent$IE$$ && $doc$$inline_62_element$$56$$.ownerDocument.body && ($doc$$inline_62_element$$56$$ = $doc$$inline_62_element$$56$$.ownerDocument, $clientRect_rect$$inline_61$$.left -= $doc$$inline_62_element$$56$$.documentElement.clientLeft + $doc$$inline_62_element$$56$$.body.clientLeft, $clientRect_rect$$inline_61$$.top -= $doc$$inline_62_element$$56$$.documentElement.clientTop + $doc$$inline_62_element$$56$$.body.clientTop);
    }
    return new $goog$math$Size$$($clientRect_rect$$inline_61$$.right - $clientRect_rect$$inline_61$$.left, $clientRect_rect$$inline_61$$.bottom - $clientRect_rect$$inline_61$$.top);
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
    var $arr$$inline_65$$ = $JSCompiler_StaticMethods_removeByKey$self$$.$a$[$type$$95$$], $i$$inline_67$$ = $goog$array$indexOf$$($arr$$inline_65$$, $listener$$45$$), $rv$$inline_68$$;
    if ($rv$$inline_68$$ = 0 <= $i$$inline_67$$) {
      $goog$asserts$assert$$(null != $arr$$inline_65$$.length), Array.prototype.splice.call($arr$$inline_65$$, $i$$inline_67$$, 1);
    }
    $rv$$inline_68$$ && ($JSCompiler_StaticMethods_markAsRemoved$$($listener$$45$$), 0 == $JSCompiler_StaticMethods_removeByKey$self$$.$a$[$type$$95$$].length && (delete $JSCompiler_StaticMethods_removeByKey$self$$.$a$[$type$$95$$], $JSCompiler_StaticMethods_removeByKey$self$$.$b$--));
  }
}
;var $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ = !$goog$userAgent$IE$$ || 9 <= Number($goog$userAgent$DOCUMENT_MODE$$), $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$ = $goog$userAgent$IE$$ && !$goog$userAgent$isVersionOrHigher$$("9");
!$goog$userAgent$WEBKIT$$ || $goog$userAgent$isVersionOrHigher$$("528");
$goog$userAgent$GECKO$$ && $goog$userAgent$isVersionOrHigher$$("1.9b") || $goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("8") || $goog$userAgent$OPERA$$ && $goog$userAgent$isVersionOrHigher$$("9.5") || $goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersionOrHigher$$("528");
$goog$userAgent$GECKO$$ && !$goog$userAgent$isVersionOrHigher$$("8") || $goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("9");
function $goog$Disposable$$() {
  0 != $goog$Disposable$MonitoringMode$OFF$$ && ($goog$Disposable$instances_$$[this[$goog$UID_PROPERTY_$$] || (this[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$)] = this);
  this.$c$ = this.$c$;
  this.$h$ = this.$h$;
}
var $goog$Disposable$MonitoringMode$OFF$$ = 0, $goog$Disposable$instances_$$ = {};
$goog$Disposable$$.prototype.$c$ = !1;
$goog$Disposable$$.prototype.$l$ = function $$goog$Disposable$$$$$l$$() {
  if (!this.$c$ && (this.$c$ = !0, this.$disposeInternal$(), 0 != $goog$Disposable$MonitoringMode$OFF$$)) {
    var $uid$$ = this[$goog$UID_PROPERTY_$$] || (this[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$);
    delete $goog$Disposable$instances_$$[$uid$$];
  }
};
$goog$Disposable$$.prototype.$disposeInternal$ = function $$goog$Disposable$$$$$disposeInternal$$() {
  if (this.$h$) {
    for (;this.$h$.length;) {
      this.$h$.shift()();
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
    var $relevantTouch$$inline_74$$ = $opt_e$$.changedTouches ? $opt_e$$.changedTouches[0] : null;
    this.$f$ = $opt_e$$.target || $opt_e$$.srcElement;
    this.$b$ = $opt_currentTarget$$;
    var $relatedTarget$$inline_75$$ = $opt_e$$.relatedTarget;
    if ($relatedTarget$$inline_75$$ && $goog$userAgent$GECKO$$) {
      try {
        $goog$reflect$sinkValue$$($relatedTarget$$inline_75$$.nodeName);
      } catch ($e$$inline_204$$) {
      }
    }
    null === $relevantTouch$$inline_74$$ ? (this.clientX = void 0 !== $opt_e$$.clientX ? $opt_e$$.clientX : $opt_e$$.pageX, this.clientY = void 0 !== $opt_e$$.clientY ? $opt_e$$.clientY : $opt_e$$.pageY) : (this.clientX = void 0 !== $relevantTouch$$inline_74$$.clientX ? $relevantTouch$$inline_74$$.clientX : $relevantTouch$$inline_74$$.pageX, this.clientY = void 0 !== $relevantTouch$$inline_74$$.clientY ? $relevantTouch$$inline_74$$.clientY : $relevantTouch$$inline_74$$.pageY);
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
function $goog$events$listen$$($JSCompiler_temp$$8_src$$15$$, $type$$102$$, $capture$$inline_83_listener$$48$$, $listenerObj$$inline_214_listenerObj$$inline_85_opt_capt$$, $opt_handler$$1_proxy$$inline_86$$) {
  if ("array" == $goog$typeOf$$($type$$102$$)) {
    for (var $i$$79_listener$$inline_79$$ = 0;$i$$79_listener$$inline_79$$ < $type$$102$$.length;$i$$79_listener$$inline_79$$++) {
      $goog$events$listen$$($JSCompiler_temp$$8_src$$15$$, $type$$102$$[$i$$79_listener$$inline_79$$], $capture$$inline_83_listener$$48$$, $listenerObj$$inline_214_listenerObj$$inline_85_opt_capt$$, $opt_handler$$1_proxy$$inline_86$$);
    }
    return null;
  }
  $capture$$inline_83_listener$$48$$ = $goog$events$wrapListener$$($capture$$inline_83_listener$$48$$);
  if ($JSCompiler_temp$$8_src$$15$$ && $JSCompiler_temp$$8_src$$15$$[$goog$events$Listenable$IMPLEMENTED_BY_PROP$$]) {
    $JSCompiler_temp$$8_src$$15$$ = $JSCompiler_temp$$8_src$$15$$.$b$($type$$102$$, $capture$$inline_83_listener$$48$$, $listenerObj$$inline_214_listenerObj$$inline_85_opt_capt$$, $opt_handler$$1_proxy$$inline_86$$);
  } else {
    $i$$79_listener$$inline_79$$ = $capture$$inline_83_listener$$48$$;
    if (!$type$$102$$) {
      throw Error("Invalid event type");
    }
    $capture$$inline_83_listener$$48$$ = !!$listenerObj$$inline_214_listenerObj$$inline_85_opt_capt$$;
    var $listenerArray$$inline_213_listenerMap$$inline_84$$ = $goog$events$getListenerMap_$$($JSCompiler_temp$$8_src$$15$$);
    $listenerArray$$inline_213_listenerMap$$inline_84$$ || ($JSCompiler_temp$$8_src$$15$$[$goog$events$LISTENER_MAP_PROP_$$] = $listenerArray$$inline_213_listenerMap$$inline_84$$ = new $goog$events$ListenerMap$$($JSCompiler_temp$$8_src$$15$$));
    var $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$self$$inline_206$$ = $listenerArray$$inline_213_listenerMap$$inline_84$$, $typeStr$$inline_212$$ = $type$$102$$.toString(), $listenerArray$$inline_213_listenerMap$$inline_84$$ = $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$self$$inline_206$$.$a$[$typeStr$$inline_212$$];
    $listenerArray$$inline_213_listenerMap$$inline_84$$ || ($listenerArray$$inline_213_listenerMap$$inline_84$$ = $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$self$$inline_206$$.$a$[$typeStr$$inline_212$$] = [], $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$self$$inline_206$$.$b$++);
    var $i$$inline_237_index$$inline_215$$;
    b: {
      for ($i$$inline_237_index$$inline_215$$ = 0;$i$$inline_237_index$$inline_215$$ < $listenerArray$$inline_213_listenerMap$$inline_84$$.length;++$i$$inline_237_index$$inline_215$$) {
        var $listenerObj$$inline_238$$ = $listenerArray$$inline_213_listenerMap$$inline_84$$[$i$$inline_237_index$$inline_215$$];
        if (!$listenerObj$$inline_238$$.$removed$ && $listenerObj$$inline_238$$.listener == $i$$79_listener$$inline_79$$ && $listenerObj$$inline_238$$.$capture$ == !!$listenerObj$$inline_214_listenerObj$$inline_85_opt_capt$$ && $listenerObj$$inline_238$$.$b$ == $opt_handler$$1_proxy$$inline_86$$) {
          break b;
        }
      }
      $i$$inline_237_index$$inline_215$$ = -1;
    }
    -1 < $i$$inline_237_index$$inline_215$$ ? ($listenerObj$$inline_214_listenerObj$$inline_85_opt_capt$$ = $listenerArray$$inline_213_listenerMap$$inline_84$$[$i$$inline_237_index$$inline_215$$], $listenerObj$$inline_214_listenerObj$$inline_85_opt_capt$$.$callOnce$ = !1) : ($listenerObj$$inline_214_listenerObj$$inline_85_opt_capt$$ = new $goog$events$Listener$$($i$$79_listener$$inline_79$$, $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$self$$inline_206$$.src, $typeStr$$inline_212$$, 
    !!$listenerObj$$inline_214_listenerObj$$inline_85_opt_capt$$, $opt_handler$$1_proxy$$inline_86$$), $listenerObj$$inline_214_listenerObj$$inline_85_opt_capt$$.$callOnce$ = !1, $listenerArray$$inline_213_listenerMap$$inline_84$$.push($listenerObj$$inline_214_listenerObj$$inline_85_opt_capt$$));
    if (!$listenerObj$$inline_214_listenerObj$$inline_85_opt_capt$$.$a$) {
      $opt_handler$$1_proxy$$inline_86$$ = $goog$events$getProxy$$();
      $listenerObj$$inline_214_listenerObj$$inline_85_opt_capt$$.$a$ = $opt_handler$$1_proxy$$inline_86$$;
      $opt_handler$$1_proxy$$inline_86$$.src = $JSCompiler_temp$$8_src$$15$$;
      $opt_handler$$1_proxy$$inline_86$$.listener = $listenerObj$$inline_214_listenerObj$$inline_85_opt_capt$$;
      if ($JSCompiler_temp$$8_src$$15$$.addEventListener) {
        $JSCompiler_temp$$8_src$$15$$.addEventListener($type$$102$$.toString(), $opt_handler$$1_proxy$$inline_86$$, $capture$$inline_83_listener$$48$$);
      } else {
        if ($JSCompiler_temp$$8_src$$15$$.attachEvent) {
          $JSCompiler_temp$$8_src$$15$$.attachEvent($goog$events$getOnString_$$($type$$102$$.toString()), $opt_handler$$1_proxy$$inline_86$$);
        } else {
          throw Error("addEventListener and attachEvent are unavailable.");
        }
      }
      $goog$events$listenerCountEstimate_$$++;
    }
    $JSCompiler_temp$$8_src$$15$$ = $listenerObj$$inline_214_listenerObj$$inline_85_opt_capt$$;
  }
  return $JSCompiler_temp$$8_src$$15$$;
}
function $goog$events$getProxy$$() {
  var $proxyCallbackFunction$$ = $goog$events$handleBrowserEvent_$$, $f$$31$$ = $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ ? function($eventObject$$) {
    return $proxyCallbackFunction$$.call($f$$31$$.src, $f$$31$$.listener, $eventObject$$);
  } : function($eventObject$$1_v$$) {
    $eventObject$$1_v$$ = $proxyCallbackFunction$$.call($f$$31$$.src, $f$$31$$.listener, $eventObject$$1_v$$);
    if (!$eventObject$$1_v$$) {
      return $eventObject$$1_v$$;
    }
  };
  return $f$$31$$;
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
    var $JSCompiler_temp$$0_evt$$21_parts$$inline_90$$;
    if (!($JSCompiler_temp$$0_evt$$21_parts$$inline_90$$ = $opt_evt$$)) {
      a: {
        $JSCompiler_temp$$0_evt$$21_parts$$inline_90$$ = ["window", "event"];
        for (var $cur$$inline_91_retval$$1$$ = $goog$global$$, $ancestors$$1_ieEvent_part$$inline_92$$;$ancestors$$1_ieEvent_part$$inline_92$$ = $JSCompiler_temp$$0_evt$$21_parts$$inline_90$$.shift();) {
          if (null != $cur$$inline_91_retval$$1$$[$ancestors$$1_ieEvent_part$$inline_92$$]) {
            $cur$$inline_91_retval$$1$$ = $cur$$inline_91_retval$$1$$[$ancestors$$1_ieEvent_part$$inline_92$$];
          } else {
            $JSCompiler_temp$$0_evt$$21_parts$$inline_90$$ = null;
            break a;
          }
        }
        $JSCompiler_temp$$0_evt$$21_parts$$inline_90$$ = $cur$$inline_91_retval$$1$$;
      }
    }
    $ancestors$$1_ieEvent_part$$inline_92$$ = $JSCompiler_temp$$0_evt$$21_parts$$inline_90$$;
    $JSCompiler_temp$$0_evt$$21_parts$$inline_90$$ = new $goog$events$BrowserEvent$$($ancestors$$1_ieEvent_part$$inline_92$$, this);
    $cur$$inline_91_retval$$1$$ = !0;
    if (!(0 > $ancestors$$1_ieEvent_part$$inline_92$$.keyCode || void 0 != $ancestors$$1_ieEvent_part$$inline_92$$.returnValue)) {
      a: {
        var $parent$$17_type$$113_useReturnValue$$inline_95$$ = !1;
        if (0 == $ancestors$$1_ieEvent_part$$inline_92$$.keyCode) {
          try {
            $ancestors$$1_ieEvent_part$$inline_92$$.keyCode = -1;
            break a;
          } catch ($ex$$inline_96$$) {
            $parent$$17_type$$113_useReturnValue$$inline_95$$ = !0;
          }
        }
        if ($parent$$17_type$$113_useReturnValue$$inline_95$$ || void 0 == $ancestors$$1_ieEvent_part$$inline_92$$.returnValue) {
          $ancestors$$1_ieEvent_part$$inline_92$$.returnValue = !0;
        }
      }
      $ancestors$$1_ieEvent_part$$inline_92$$ = [];
      for ($parent$$17_type$$113_useReturnValue$$inline_95$$ = $JSCompiler_temp$$0_evt$$21_parts$$inline_90$$.$b$;$parent$$17_type$$113_useReturnValue$$inline_95$$;$parent$$17_type$$113_useReturnValue$$inline_95$$ = $parent$$17_type$$113_useReturnValue$$inline_95$$.parentNode) {
        $ancestors$$1_ieEvent_part$$inline_92$$.push($parent$$17_type$$113_useReturnValue$$inline_95$$);
      }
      for (var $parent$$17_type$$113_useReturnValue$$inline_95$$ = $listener$$58$$.type, $i$$84$$ = $ancestors$$1_ieEvent_part$$inline_92$$.length - 1;!$JSCompiler_temp$$0_evt$$21_parts$$inline_90$$.$g$ && 0 <= $i$$84$$;$i$$84$$--) {
        $JSCompiler_temp$$0_evt$$21_parts$$inline_90$$.$b$ = $ancestors$$1_ieEvent_part$$inline_92$$[$i$$84$$];
        var $result$$14$$ = $goog$events$fireListeners_$$($ancestors$$1_ieEvent_part$$inline_92$$[$i$$84$$], $parent$$17_type$$113_useReturnValue$$inline_95$$, !0, $JSCompiler_temp$$0_evt$$21_parts$$inline_90$$), $cur$$inline_91_retval$$1$$ = $cur$$inline_91_retval$$1$$ && $result$$14$$;
      }
      for ($i$$84$$ = 0;!$JSCompiler_temp$$0_evt$$21_parts$$inline_90$$.$g$ && $i$$84$$ < $ancestors$$1_ieEvent_part$$inline_92$$.length;$i$$84$$++) {
        $JSCompiler_temp$$0_evt$$21_parts$$inline_90$$.$b$ = $ancestors$$1_ieEvent_part$$inline_92$$[$i$$84$$], $result$$14$$ = $goog$events$fireListeners_$$($ancestors$$1_ieEvent_part$$inline_92$$[$i$$84$$], $parent$$17_type$$113_useReturnValue$$inline_95$$, !1, $JSCompiler_temp$$0_evt$$21_parts$$inline_90$$), $cur$$inline_91_retval$$1$$ = $cur$$inline_91_retval$$1$$ && $result$$14$$;
      }
    }
    return $cur$$inline_91_retval$$1$$;
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
  this.$u$ = $opt_scope$$1$$;
  this.$g$ = {};
}
$goog$inherits$$($goog$events$EventHandler$$, $goog$Disposable$$);
var $goog$events$EventHandler$typeArray_$$ = [];
$goog$events$EventHandler$$.prototype.$b$ = function $$goog$events$EventHandler$$$$$b$$($src$$25$$, $type$$114_type$$inline_101$$, $opt_fn$$, $opt_capture$$2$$) {
  "array" != $goog$typeOf$$($type$$114_type$$inline_101$$) && ($type$$114_type$$inline_101$$ && ($goog$events$EventHandler$typeArray_$$[0] = $type$$114_type$$inline_101$$.toString()), $type$$114_type$$inline_101$$ = $goog$events$EventHandler$typeArray_$$);
  for (var $i$$inline_105$$ = 0;$i$$inline_105$$ < $type$$114_type$$inline_101$$.length;$i$$inline_105$$++) {
    var $listenerObj$$inline_106$$ = $goog$events$listen$$($src$$25$$, $type$$114_type$$inline_101$$[$i$$inline_105$$], $opt_fn$$ || this.handleEvent, $opt_capture$$2$$ || !1, this.$u$ || this);
    if (!$listenerObj$$inline_106$$) {
      break;
    }
    this.$g$[$listenerObj$$inline_106$$.$goog_events_ListenableKey_prototype$key$] = $listenerObj$$inline_106$$;
  }
  return this;
};
function $JSCompiler_StaticMethods_goog_events_EventHandler_prototype$removeAll$$($JSCompiler_StaticMethods_goog_events_EventHandler_prototype$removeAll$self$$) {
  $goog$object$forEach$$($JSCompiler_StaticMethods_goog_events_EventHandler_prototype$removeAll$self$$.$g$, function($listenerObj$$8$$, $key$$64$$) {
    this.$g$.hasOwnProperty($key$$64$$) && $goog$events$unlistenByKey$$($listenerObj$$8$$);
  }, $JSCompiler_StaticMethods_goog_events_EventHandler_prototype$removeAll$self$$);
  $JSCompiler_StaticMethods_goog_events_EventHandler_prototype$removeAll$self$$.$g$ = {};
}
$goog$events$EventHandler$$.prototype.$disposeInternal$ = function $$goog$events$EventHandler$$$$$disposeInternal$$() {
  $goog$events$EventHandler$$.$superClass_$.$disposeInternal$.call(this);
  $JSCompiler_StaticMethods_goog_events_EventHandler_prototype$removeAll$$(this);
};
$goog$events$EventHandler$$.prototype.handleEvent = function $$goog$events$EventHandler$$$$handleEvent$() {
  throw Error("EventHandler.handleEvent not implemented");
};
function $rflect$browser$css$setTransition$$($aElement$$, $aTransitionString$$) {
  var $props$$inline_119$$ = $rflect$browser$css$findAndCacheProperty_$$("transition");
  $aElement$$.style[$props$$inline_119$$[1]] = $aTransitionString$$;
}
function $rflect$browser$css$setTransform$$($aElement$$1$$, $aTransformString$$) {
  var $props$$inline_124$$ = $rflect$browser$css$findAndCacheProperty_$$("transform");
  $aElement$$1$$.style[$props$$inline_124$$[1]] = $aTransformString$$;
}
var $rflect$browser$css$propertyToPrefixedProperties_$$ = {};
function $rflect$browser$css$findAndCacheProperty_$$($aPropertyName$$) {
  if (!$rflect$browser$css$propertyToPrefixedProperties_$$[$aPropertyName$$]) {
    var $property$$7$$, $style$$23$$ = document.createElement("div").style;
    " Webkit ms Ms Moz O o webkit moz".split(" ").some(function($aPrefix$$inline_126_vendorPrefix$$) {
      $property$$7$$ = $aPrefix$$inline_126_vendorPrefix$$ + $goog$string$toTitleCase$$($aPropertyName$$).replace(/\-/, "");
      return $property$$7$$ in $style$$23$$ ? ($aPrefix$$inline_126_vendorPrefix$$ = $aPrefix$$inline_126_vendorPrefix$$.toLowerCase(), $rflect$browser$css$propertyToPrefixedProperties_$$[$aPropertyName$$] = [($aPrefix$$inline_126_vendorPrefix$$ ? "-" : "") + $aPrefix$$inline_126_vendorPrefix$$ + ($aPrefix$$inline_126_vendorPrefix$$ ? "-" : "") + $aPropertyName$$, $property$$7$$], !0) : !1;
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
var $rflect$ui$MomentumScroller$instancesCount_$$ = 0;
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
function $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$$($JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$, $aEnabled$$) {
  $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$o$ != $aEnabled$$ && (($JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$o$ = $aEnabled$$) ? ($rflect$ui$MomentumScroller$instancesCount_$$++, $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$m$ = $goog$style$evaluateWithTemporaryDisplay_$$($JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$a$), $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$s$ = 
  $goog$style$evaluateWithTemporaryDisplay_$$($JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$i$), $JSCompiler_StaticMethods_enterDocument$$($JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$), $JSCompiler_StaticMethods_animateTo$$($JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$, 0)) : ($rflect$ui$MomentumScroller$instancesCount_$$--, 0 > $rflect$ui$MomentumScroller$instancesCount_$$ && ($rflect$ui$MomentumScroller$instancesCount_$$ = 
  0), $JSCompiler_StaticMethods_goog_events_EventHandler_prototype$removeAll$$($JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$), $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$a$ = null, $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$i$ = null, $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$startTouchY$ = 0, $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$contentOffsetY$ = 
  0, $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$self$$.$contentStartOffsetY$ = 0));
}
$JSCompiler_prototypeAlias$$.$rflect_ui_MomentumScroller_prototype$add$ = function $$JSCompiler_prototypeAlias$$$$rflect_ui_MomentumScroller_prototype$add$$($JSCompiler_temp$$183_aElement$$5_node$$inline_217$$) {
  this.$i$ = $JSCompiler_temp$$183_aElement$$5_node$$inline_217$$;
  if (void 0 !== $JSCompiler_temp$$183_aElement$$5_node$$inline_217$$.firstElementChild) {
    $JSCompiler_temp$$183_aElement$$5_node$$inline_217$$ = $JSCompiler_temp$$183_aElement$$5_node$$inline_217$$.firstElementChild;
  } else {
    for ($JSCompiler_temp$$183_aElement$$5_node$$inline_217$$ = $JSCompiler_temp$$183_aElement$$5_node$$inline_217$$.firstChild;$JSCompiler_temp$$183_aElement$$5_node$$inline_217$$ && 1 != $JSCompiler_temp$$183_aElement$$5_node$$inline_217$$.nodeType;) {
      $JSCompiler_temp$$183_aElement$$5_node$$inline_217$$ = $JSCompiler_temp$$183_aElement$$5_node$$inline_217$$.nextSibling;
    }
  }
  this.$a$ = $JSCompiler_temp$$183_aElement$$5_node$$inline_217$$;
  $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$$(this, !0);
};
$JSCompiler_prototypeAlias$$.$rflect_ui_MomentumScroller_prototype$remove$ = function $$JSCompiler_prototypeAlias$$$$rflect_ui_MomentumScroller_prototype$remove$$() {
  $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$$(this, !1);
};
$JSCompiler_prototypeAlias$$.$rflect_ui_MomentumScroller_prototype$reset$ = function $$JSCompiler_prototypeAlias$$$$rflect_ui_MomentumScroller_prototype$reset$$($aElement$$6_lowestContentPosition$$inline_156$$) {
  this.$rflect_ui_MomentumScroller_prototype$remove$();
  this.$rflect_ui_MomentumScroller_prototype$add$($aElement$$6_lowestContentPosition$$inline_156$$);
  $aElement$$6_lowestContentPosition$$inline_156$$ = $JSCompiler_StaticMethods_getLowestContentPosition$$(this);
  var $offsetY$$inline_157$$ = 0;
  0 < $offsetY$$inline_157$$ ? $offsetY$$inline_157$$ = 0 : $offsetY$$inline_157$$ < $aElement$$6_lowestContentPosition$$inline_156$$ && ($offsetY$$inline_157$$ = $aElement$$6_lowestContentPosition$$inline_156$$);
  $JSCompiler_StaticMethods_animateTo$$(this, $offsetY$$inline_157$$);
};
function $JSCompiler_StaticMethods_enterDocument$$($JSCompiler_StaticMethods_enterDocument$self$$) {
  $JSCompiler_StaticMethods_enterDocument$self$$.$b$($JSCompiler_StaticMethods_enterDocument$self$$.$i$, "touchstart", function($aEvent$$) {
    $aEvent$$.preventDefault();
  });
  $JSCompiler_StaticMethods_enterDocument$self$$.$b$($JSCompiler_StaticMethods_enterDocument$self$$.$a$, "touchstart", $JSCompiler_StaticMethods_enterDocument$self$$.$onTouchStart$, !0);
  $JSCompiler_StaticMethods_enterDocument$self$$.$b$($JSCompiler_StaticMethods_enterDocument$self$$.$a$, "touchmove", $JSCompiler_StaticMethods_enterDocument$self$$.$onTouchMove$);
  $JSCompiler_StaticMethods_enterDocument$self$$.$b$($JSCompiler_StaticMethods_enterDocument$self$$.$a$, "touchend", $JSCompiler_StaticMethods_enterDocument$self$$.$onTouchEnd$, !0);
  $JSCompiler_StaticMethods_enterDocument$self$$.$b$($JSCompiler_StaticMethods_enterDocument$self$$.$a$, $rflect$browser$transitionend$VENDOR_TRANSITION_END_NAMES$$, $JSCompiler_StaticMethods_enterDocument$self$$.$onTransitionEnd$);
}
$JSCompiler_prototypeAlias$$.$onTouchStart$ = function $$JSCompiler_prototypeAlias$$$$onTouchStart$$($aEvent$$2$$) {
  console.log("onTouchStart");
  if (this.$isDecelerating_$) {
    var $aComputedStyle$$inline_219_matrix$$inline_161$$;
    $aComputedStyle$$inline_219_matrix$$inline_161$$ = document.defaultView.getComputedStyle(this.$a$, null)[$rflect$browser$css$findAndCacheProperty_$$("transform")[1]];
    $aComputedStyle$$inline_219_matrix$$inline_161$$ = window.WebKitCSSMatrix ? new WebKitCSSMatrix($aComputedStyle$$inline_219_matrix$$inline_161$$) : window.MSCSSMatrix ? new MSCSSMatrix($aComputedStyle$$inline_219_matrix$$inline_161$$) : window.CSSMatrix ? new CSSMatrix($aComputedStyle$$inline_219_matrix$$inline_161$$) : null;
    $rflect$browser$css$setTransition$$(this.$a$, "");
    $JSCompiler_StaticMethods_animateTo$$(this, $aComputedStyle$$inline_219_matrix$$inline_161$$.m42);
    this.$queuedTransitionStage_$ = -1;
    this.$stopPropagationOnTouchEnd_$ = !0;
  } else {
    this.$stopPropagationOnTouchEnd_$ = !1;
  }
  this.$isDecelerating_$ = !1;
  this.$stopPropagationOnTouchEnd_$ && (console.log("aEvent touch start: ", $aEvent$$2$$), $aEvent$$2$$.$c$(), $aEvent$$2$$.preventDefault());
  this.$startTouchY$ = $aEvent$$2$$.$a$.touches[0].clientY;
  this.$j$ = $aEvent$$2$$.$a$.touches[0].clientX;
  this.$contentStartOffsetY$ = this.$contentOffsetY$;
  this.$previousPoint_$ = this.$currentPoint_$ = this.$startTouchY$;
  this.$previousMoment_$ = this.$currentMoment_$ = $goog$now$$();
  this.$isDragging_$ = !0;
};
$JSCompiler_prototypeAlias$$.$onTouchMove$ = function $$JSCompiler_prototypeAlias$$$$onTouchMove$$($aEvent$$3_currentY$$) {
  console.log("onTouchMove");
  if (this.$isDragging_$ || (this.$isDragging_$ = 5 <= Math.abs(this.$currentPoint_$ - this.$startTouchY$))) {
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
$JSCompiler_prototypeAlias$$.$onTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$onTouchEnd$$($aEvent$$4_evt$$inline_172_length$$inline_229$$) {
  console.log("onTouchEnd");
  if (this.$isDragging_$ || (this.$isDragging_$ = 5 <= Math.abs(this.$currentPoint_$ - this.$startTouchY$))) {
    if ($JSCompiler_StaticMethods_positionIsOutOfBounds$$(this, this.$contentOffsetY$)) {
      $JSCompiler_StaticMethods_snapToBounds$$(this);
    } else {
      var $aClientY$$inline_171_acceleration$$inline_223_newY$$inline_167_time$$inline_225_velocity$$inline_164$$ = $JSCompiler_StaticMethods_getEndVelocity$$(this);
      console.log("velocity", $aClientY$$inline_171_acceleration$$inline_223_newY$$inline_167_time$$inline_225_velocity$$inline_164$$);
      if (0 != $aClientY$$inline_171_acceleration$$inline_223_newY$$inline_167_time$$inline_225_velocity$$inline_164$$) {
        var $acceleration$$inline_165_displacement$$inline_224$$ = 0 > $aClientY$$inline_171_acceleration$$inline_223_newY$$inline_167_time$$inline_225_velocity$$inline_164$$ ? 5E-4 : -5E-4, $aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$ = -$aClientY$$inline_171_acceleration$$inline_223_newY$$inline_167_time$$inline_225_velocity$$inline_164$$ / $acceleration$$inline_165_displacement$$inline_224$$, $aClientY$$inline_171_acceleration$$inline_223_newY$$inline_167_time$$inline_225_velocity$$inline_164$$ = 
        this.$contentOffsetY$ + -($aClientY$$inline_171_acceleration$$inline_223_newY$$inline_167_time$$inline_225_velocity$$inline_164$$ * $aClientY$$inline_171_acceleration$$inline_223_newY$$inline_167_time$$inline_225_velocity$$inline_164$$) / (2 * $acceleration$$inline_165_displacement$$inline_224$$);
        $JSCompiler_StaticMethods_positionIsOutOfBounds$$(this, $aClientY$$inline_171_acceleration$$inline_223_newY$$inline_167_time$$inline_225_velocity$$inline_164$$) ? (console.log("stage1"), $aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$ = $JSCompiler_StaticMethods_getEndVelocity$$(this), $aClientY$$inline_171_acceleration$$inline_223_newY$$inline_167_time$$inline_225_velocity$$inline_164$$ = 0 > $aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$ ? 
        5E-4 : -5E-4, 0 < $aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$ ? ($acceleration$$inline_165_displacement$$inline_224$$ = -this.$contentOffsetY$, this.$contentOffsetY$ = 0) : ($acceleration$$inline_165_displacement$$inline_224$$ = $JSCompiler_StaticMethods_getLowestContentPosition$$(this) - this.$contentOffsetY$, this.$contentOffsetY$ = $JSCompiler_StaticMethods_getLowestContentPosition$$(this)), console.log("displacement", 
        $acceleration$$inline_165_displacement$$inline_224$$), this.$f$ = (0 > $aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$ ? -1 : 1) * Math.sqrt($aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$ * $aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$ + 2 * $acceleration$$inline_165_displacement$$inline_224$$ * 
        $aClientY$$inline_171_acceleration$$inline_223_newY$$inline_167_time$$inline_225_velocity$$inline_164$$), console.log("this.endMomentumVelocity_", this.$f$), $aClientY$$inline_171_acceleration$$inline_223_newY$$inline_167_time$$inline_225_velocity$$inline_164$$ = Math.abs(($aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$ - this.$f$) / $aClientY$$inline_171_acceleration$$inline_223_newY$$inline_167_time$$inline_225_velocity$$inline_164$$), 
        $aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$ = .33 * Math.abs(this.$f$ / $aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$), $rflect$browser$css$setTransition$$(this.$a$, $rflect$browser$css$getSelectorCasedProperty$$() + " " + $aClientY$$inline_171_acceleration$$inline_223_newY$$inline_167_time$$inline_225_velocity$$inline_164$$ + "ms cubic-bezier(.33," + 
        (.66 - $aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$) + ",.66," + (1 - $aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$) + ")"), $rflect$browser$css$setTransform$$(this.$a$, "translate3d(0, " + this.$contentOffsetY$ + "px, 0)"), this.$queuedTransitionStage_$ = 0) : ($rflect$browser$css$setTransition$$(this.$a$, $rflect$browser$css$getSelectorCasedProperty$$() + 
        " " + $aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$ + "ms cubic-bezier(0.33, 0.66, 0.66, 1)"), this.$contentOffsetY$ = $aClientY$$inline_171_acceleration$$inline_223_newY$$inline_167_time$$inline_225_velocity$$inline_164$$, $rflect$browser$css$setTransform$$(this.$a$, "translate3d(0, " + $aClientY$$inline_171_acceleration$$inline_223_newY$$inline_167_time$$inline_225_velocity$$inline_164$$ + "px, 0)"));
        this.$isDecelerating_$ = !0;
      }
    }
  }
  this.$stopPropagationOnTouchEnd_$ || 5 <= Math.abs(this.$currentPoint_$ - this.$startTouchY$) ? (console.log("aEvent touch end: ", $aEvent$$4_evt$$inline_172_length$$inline_229$$), $aEvent$$4_evt$$inline_172_length$$inline_229$$.$c$ ? $aEvent$$4_evt$$inline_172_length$$inline_229$$.$c$() : $aEvent$$4_evt$$inline_172_length$$inline_229$$.$a$.stopPropagation(), $aEvent$$4_evt$$inline_172_length$$inline_229$$.preventDefault(), this.$stopPropagationOnTouchEnd_$ = !1) : ($aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$ = 
  this.$j$, $aClientY$$inline_171_acceleration$$inline_223_newY$$inline_167_time$$inline_225_velocity$$inline_164$$ = this.$startTouchY$, $aEvent$$4_evt$$inline_172_length$$inline_229$$ = document.createEvent("MouseEvents"), $aEvent$$4_evt$$inline_172_length$$inline_229$$.initMouseEvent("click", !0, !1, window, 0, 0, 0, $aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$, $aClientY$$inline_171_acceleration$$inline_223_newY$$inline_167_time$$inline_225_velocity$$inline_164$$, 
  !1, !1, !1, !1, 0, null), $aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$ = document.elementFromPoint($aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$, $aClientY$$inline_171_acceleration$$inline_223_newY$$inline_167_time$$inline_225_velocity$$inline_164$$), $aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$.dispatchEvent($aEvent$$4_evt$$inline_172_length$$inline_229$$), 
  $rflect$ui$MomentumScroller$needsFocus$$($aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$) && ($aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$.setSelectionRange && 0 !== $aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$.type.indexOf("date") && "time" !== $aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$.type && 
  "month" !== $aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$.type ? ($aEvent$$4_evt$$inline_172_length$$inline_229$$ = $aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$.value.length, $aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$.setSelectionRange($aEvent$$4_evt$$inline_172_length$$inline_229$$, 
  $aEvent$$4_evt$$inline_172_length$$inline_229$$)) : $aClientX$$inline_170_element$$inline_173_time$$inline_166_valueToLowerCubicBezierWith$$inline_226_velocity$$inline_222$$.focus()));
  this.$j$ = this.$startTouchY$ = this.$previousPoint_$ = this.$previousMoment_$ = this.$currentPoint_$ = this.$currentMoment_$ = 0;
  this.$isDragging_$ = !1;
};
function $rflect$ui$MomentumScroller$needsFocus$$($aElement$$8$$) {
  switch($aElement$$8$$.nodeName.toLowerCase()) {
    case "textarea":
      return !0;
    case "select":
      return !0;
    case "input":
      switch($aElement$$8$$.type) {
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
      return !$aElement$$8$$.disabled && !$aElement$$8$$.readOnly;
    default:
      return !1;
  }
}
$JSCompiler_prototypeAlias$$.$onTransitionEnd$ = function $$JSCompiler_prototypeAlias$$$$onTransitionEnd$$($aEvent$$5_newY$$inline_178_velocity$$inline_176$$) {
  if ($aEvent$$5_newY$$inline_178_velocity$$inline_176$$.$f$ == this.$a$) {
    switch(this.$queuedTransitionStage_$) {
      case -1:
        $rflect$browser$css$setTransition$$(this.$a$, "");
        this.$isDecelerating_$ = !1;
        break;
      case 0:
        console.log("stage2");
        $aEvent$$5_newY$$inline_178_velocity$$inline_176$$ = this.$f$;
        var $displacement$$inline_177$$ = -($aEvent$$5_newY$$inline_178_velocity$$inline_176$$ * $aEvent$$5_newY$$inline_178_velocity$$inline_176$$) / (20 * (0 > $aEvent$$5_newY$$inline_178_velocity$$inline_176$$ ? 5E-4 : -5E-4));
        console.log("velocity", $aEvent$$5_newY$$inline_178_velocity$$inline_176$$);
        100 < $displacement$$inline_177$$ && ($displacement$$inline_177$$ = 100);
        -100 > $displacement$$inline_177$$ && ($displacement$$inline_177$$ = -100);
        this.$contentOffsetY$ = $aEvent$$5_newY$$inline_178_velocity$$inline_176$$ = 0 < $aEvent$$5_newY$$inline_178_velocity$$inline_176$$ ? $displacement$$inline_177$$ : this.$contentOffsetY$ + $displacement$$inline_177$$;
        $rflect$browser$css$setTransition$$(this.$a$, $rflect$browser$css$getSelectorCasedProperty$$() + " 100ms cubic-bezier(0.33, 0.66, 0.66, 1)");
        $rflect$browser$css$setTransform$$(this.$a$, "translate3d(0, " + $aEvent$$5_newY$$inline_178_velocity$$inline_176$$ + "px, 0)");
        this.$queuedTransitionStage_$ = 1;
        break;
      case 1:
        $JSCompiler_StaticMethods_snapToBounds$$(this);
        this.$queuedTransitionStage_$ = 2;
        break;
      case 2:
        this.$queuedTransitionStage_$ = -1, $rflect$browser$css$setTransition$$(this.$a$, ""), this.$isDecelerating_$ = !1;
    }
  }
};
function $JSCompiler_StaticMethods_animateTo$$($JSCompiler_StaticMethods_animateTo$self$$, $offsetY$$) {
  $JSCompiler_StaticMethods_animateTo$self$$.$contentOffsetY$ = $offsetY$$;
  $rflect$browser$css$setTransform$$($JSCompiler_StaticMethods_animateTo$self$$.$a$, "translate3d(0, " + $offsetY$$ + "px, 0)");
}
function $JSCompiler_StaticMethods_snapToBounds$$($JSCompiler_StaticMethods_snapToBounds$self$$) {
  $rflect$browser$css$setTransition$$($JSCompiler_StaticMethods_snapToBounds$self$$.$a$, $rflect$browser$css$getSelectorCasedProperty$$() + " 500ms ease-out");
  $JSCompiler_StaticMethods_snapToBounds$self$$.$contentOffsetY$ = 0 < $JSCompiler_StaticMethods_snapToBounds$self$$.$contentOffsetY$ ? 0 : $JSCompiler_StaticMethods_getLowestContentPosition$$($JSCompiler_StaticMethods_snapToBounds$self$$);
  $rflect$browser$css$setTransform$$($JSCompiler_StaticMethods_snapToBounds$self$$.$a$, "translate3d(0, " + $JSCompiler_StaticMethods_snapToBounds$self$$.$contentOffsetY$ + "px, 0)");
  $JSCompiler_StaticMethods_snapToBounds$self$$.$isDecelerating_$ = !0;
}
function $JSCompiler_StaticMethods_positionIsOutOfBounds$$($JSCompiler_StaticMethods_positionIsOutOfBounds$self$$, $aPosition$$) {
  return 0 < $aPosition$$ || $aPosition$$ < $JSCompiler_StaticMethods_getLowestContentPosition$$($JSCompiler_StaticMethods_positionIsOutOfBounds$self$$);
}
function $JSCompiler_StaticMethods_getLowestContentPosition$$($JSCompiler_StaticMethods_getLowestContentPosition$self$$) {
  return -$JSCompiler_StaticMethods_getLowestContentPosition$self$$.$m$.height + $JSCompiler_StaticMethods_getLowestContentPosition$self$$.$s$.height;
}
function $JSCompiler_StaticMethods_getEndVelocity$$($JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$) {
  var $velocity$$3$$ = ($JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$.$currentPoint_$ - $JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$.$previousPoint_$) / ($JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$.$currentMoment_$ - $JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$.$previousMoment_$);
  console.log("previousMoment_: ", $JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$.$previousMoment_$);
  console.log("currentMoment_: ", $JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$.$currentMoment_$);
  console.log("velocity: ", $velocity$$3$$);
  $JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$ = $rflect$math$sign$$($JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$.$currentPoint_$ - $JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$.$previousPoint_$);
  console.log("velocitySign: ", $JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$);
  console.log("cappedVelocity: ", 3.5 < Math.abs($velocity$$3$$) ? 3.5 * $JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$ : $velocity$$3$$);
  return isNaN($velocity$$3$$) ? 3.5 * $JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$ : 3.5 < Math.abs($velocity$$3$$) ? 3.5 * $JSCompiler_StaticMethods_getEndVelocity$self_velocitySign$$ : $velocity$$3$$;
}
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $JSCompiler_StaticMethods_rflect_ui_MomentumScroller_prototype$enable$$(this, !1);
  $rflect$ui$MomentumScroller$$.$superClass_$.$disposeInternal$.call(this);
};
$goog$exportSymbol$$("MomentumScroller", $rflect$ui$MomentumScroller$$);
$goog$exportSymbol$$("MomentumScroller.prototype.add", $rflect$ui$MomentumScroller$$.prototype.$rflect_ui_MomentumScroller_prototype$add$);
$goog$exportSymbol$$("MomentumScroller.prototype.remove", $rflect$ui$MomentumScroller$$.prototype.$rflect_ui_MomentumScroller_prototype$remove$);
$goog$exportSymbol$$("MomentumScroller.prototype.reset", $rflect$ui$MomentumScroller$$.prototype.$rflect_ui_MomentumScroller_prototype$reset$);
$goog$exportSymbol$$("MomentumScroller.prototype.dispose", $rflect$ui$MomentumScroller$$.prototype.$l$);
})();
