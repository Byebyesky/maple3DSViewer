// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.Ms3dslevel = factory(root.KaitaiStream);
  }
}(this, function (KaitaiStream) {
var Ms3dslevel = (function() {
  function Ms3dslevel(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  Ms3dslevel.prototype._read = function() {
    this.seg1Collision = new Segment(this._io, this, this._root);
    this.seg2Unk = new Segment(this._io, this, this._root);
    this.seg3Unk = new Segment(this._io, this, this._root);
    this.seg4Unk = new Segment(this._io, this, this._root);
  }

  var Point = Ms3dslevel.Point = (function() {
    function Point(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Point.prototype._read = function() {
      this.xCoord = this._io.readU2le();
      this.yCoord = this._io.readU2le();
    }

    return Point;
  })();

  var Line = Ms3dslevel.Line = (function() {
    function Line(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Line.prototype._read = function() {
      this.point1 = new Point(this._io, this, this._root);
      this.point2 = new Point(this._io, this, this._root);
    }

    return Line;
  })();

  var Element = Ms3dslevel.Element = (function() {
    function Element(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Element.prototype._read = function() {
      this.unknown = this._io.readU2le();
      this.line = new Line(this._io, this, this._root);
    }

    return Element;
  })();

  var Segment = Ms3dslevel.Segment = (function() {
    function Segment(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Segment.prototype._read = function() {
      this.seglength = this._io.readU1();
      this.elements = new Array(this.seglength);
      for (var i = 0; i < this.seglength; i++) {
        this.elements[i] = new Element(this._io, this, this._root);
      }
      this.terminator = this._io.readU1();
    }

    return Segment;
  })();

  /**
   * collision data
   */

  return Ms3dslevel;
})();
return Ms3dslevel;
}));
