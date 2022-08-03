(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-serialization-kotlinx-serialization-core-js-legacy', 'kotlin-react', 'react-dom', 'kotlin-react-dom', 'kotlin-react-core', 'kotlin-csstype', 'kotlin-react-css', 'react-share', 'react-youtube-lite', 'kotlinx-coroutines-core', 'kotlinx-serialization-kotlinx-serialization-json-js-legacy', 'react'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-core-js-legacy'), require('kotlin-react'), require('react-dom'), require('kotlin-react-dom'), require('kotlin-react-core'), require('kotlin-csstype'), require('kotlin-react-css'), require('react-share'), require('react-youtube-lite'), require('kotlinx-coroutines-core'), require('kotlinx-serialization-kotlinx-serialization-json-js-legacy'), require('react'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'untitled'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' is loaded prior to 'untitled'.");
    }
    if (typeof this['kotlin-react'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'kotlin-react' was not found. Please, check whether 'kotlin-react' is loaded prior to 'untitled'.");
    }
    if (typeof this['react-dom'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'react-dom' was not found. Please, check whether 'react-dom' is loaded prior to 'untitled'.");
    }
    if (typeof this['kotlin-react-dom'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'kotlin-react-dom' was not found. Please, check whether 'kotlin-react-dom' is loaded prior to 'untitled'.");
    }
    if (typeof this['kotlin-react-core'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'kotlin-react-core' was not found. Please, check whether 'kotlin-react-core' is loaded prior to 'untitled'.");
    }
    if (typeof this['kotlin-csstype'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'kotlin-csstype' was not found. Please, check whether 'kotlin-csstype' is loaded prior to 'untitled'.");
    }
    if (typeof this['kotlin-react-css'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'kotlin-react-css' was not found. Please, check whether 'kotlin-react-css' is loaded prior to 'untitled'.");
    }
    if (typeof this['react-share'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'react-share' was not found. Please, check whether 'react-share' is loaded prior to 'untitled'.");
    }
    if (typeof this['react-youtube-lite'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'react-youtube-lite' was not found. Please, check whether 'react-youtube-lite' is loaded prior to 'untitled'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'untitled'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-legacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-legacy' is loaded prior to 'untitled'.");
    }
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'untitled'.");
    }
    root.untitled = factory(typeof untitled === 'undefined' ? {} : untitled, kotlin, this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'], this['kotlin-react'], this['react-dom'], this['kotlin-react-dom'], this['kotlin-react-core'], this['kotlin-csstype'], this['kotlin-react-css'], this['react-share'], this['react-youtube-lite'], this['kotlinx-coroutines-core'], this['kotlinx-serialization-kotlinx-serialization-json-js-legacy'], react);
  }
}(this, function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy, $module$kotlin_react, $module$react_dom, $module$kotlin_react_dom, $module$kotlin_react_core, $module$kotlin_csstype, $module$kotlin_react_css, $module$react_share, $module$react_youtube_lite, $module$kotlinx_coroutines_core, $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy, $module$react) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var PluginGeneratedSerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.PluginGeneratedSerialDescriptor;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException_init = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.MissingFieldException_init_61zpoe$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var create = $module$kotlin_react.react.create_oaj82i$;
  var render = $module$react_dom.render;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var html = $module$kotlin_react_dom.react.dom.html;
  var Unit = Kotlin.kotlin.Unit;
  var equals = Kotlin.equals;
  var FC = $module$kotlin_react.react.FC_4y0n3r$;
  var NamedColor$lightgreen = (/*union*/{aliceblue: '#F0F8FF', antiquewhite: '#FAEBD7', aqua: '#00FFFF', aquamarine: '#7FFFD4', azure: '#F0FFFF', beige: '#F5F5DC', bisque: '#FFE4C4', black: '#000000', blanchedalmond: '#FFEBCD', blue: '#0000FF', blueviolet: '#8A2BE2', brown: '#A52A2A', burlywood: '#DEB887', cadetblue: '#5F9EA0', chartreuse: '#7FFF00', chocolate: '#D2691E', coral: '#FF7F50', cornflowerblue: '#6495ED', cornsilk: '#FFF8DC', crimson: '#DC143C', cyan: '#00FFFF', darkblue: '#00008B', darkcyan: '#008B8B', darkgoldenrod: '#B8860B', darkgray: '#A9A9A9', darkgreen: '#006400', darkgrey: '#A9A9A9', darkkhaki: '#BDB76B', darkmagenta: '#8B008B', darkolivegreen: '#556B2F', darkorange: '#FF8C00', darkorchid: '#9932CC', darkred: '#8B0000', darksalmon: '#E9967A', darkseagreen: '#8FBC8F', darkslateblue: '#483D8B', darkslategray: '#2F4F4F', darkslategrey: '#2F4F4F', darkturquoise: '#00CED1', darkviolet: '#9400D3', deeppink: '#FF1493', deepskyblue: '#00BFFF', dimgray: '#696969', dimgrey: '#696969', dodgerblue: '#1E90FF', firebrick: '#B22222', floralwhite: '#FFFAF0', forestgreen: '#228B22', fuchsia: '#FF00FF', gainsboro: '#DCDCDC', ghostwhite: '#F8F8FF', gold: '#FFD700', goldenrod: '#DAA520', gray: '#808080', green: '#008000', greenyellow: '#ADFF2F', grey: '#808080', honeydew: '#F0FFF0', hotpink: '#FF69B4', indianred: '#CD5C5C', indigo: '#4B0082', ivory: '#FFFFF0', khaki: '#F0E68C', lavender: '#E6E6FA', lavenderblush: '#FFF0F5', lawngreen: '#7CFC00', lemonchiffon: '#FFFACD', lightblue: '#ADD8E6', lightcoral: '#F08080', lightcyan: '#E0FFFF', lightgoldenrodyellow: '#FAFAD2', lightgray: '#D3D3D3', lightgreen: '#90EE90', lightgrey: '#D3D3D3', lightpink: '#FFB6C1', lightsalmon: '#FFA07A', lightseagreen: '#20B2AA', lightskyblue: '#87CEFA', lightslategray: '#778899', lightslategrey: '#778899', lightsteelblue: '#B0C4DE', lightyellow: '#FFFFE0', lime: '#00FF00', limegreen: '#32CD32', linen: '#FAF0E6', magenta: '#FF00FF', maroon: '#800000', mediumaquamarine: '#66CDAA', mediumblue: '#0000CD', mediumorchid: '#BA55D3', mediumpurple: '#9370D8', mediumseagreen: '#3CB371', mediumslateblue: '#7B68EE', mediumspringgreen: '#00FA9A', mediumturquoise: '#48D1CC', mediumvioletred: '#C71585', midnightblue: '#191970', mintcream: '#F5FFFA', mistyrose: '#FFE4E1', moccasin: '#FFE4B5', navajowhite: '#FFDEAD', navy: '#000080', oldlace: '#FDF5E6', olive: '#808000', olivedrab: '#6B8E23', orange: '#FFA500', orangered: '#FF4500', orchid: '#DA70D6', palegoldenrod: '#EEE8AA', palegreen: '#98FB98', paleturquoise: '#AFEEEE', palevioletred: '#DB7093', papayawhip: '#FFEFD5', peachpuff: '#FFDAB9', peru: '#CD853F', pink: '#FFC0CB', plum: '#DDA0DD', powderblue: '#B0E0E6', purple: '#800080', rebeccapurple: '#663399', red: '#FF0000', rosybrown: '#BC8F8F', royalblue: '#4169E1', saddlebrown: '#8B4513', salmon: '#FA8072', sandybrown: '#F4A460', seagreen: '#2E8B57', seashell: '#FFF5EE', sienna: '#A0522D', silver: '#C0C0C0', skyblue: '#87CEEB', slateblue: '#6A5ACD', slategray: '#708090', slategrey: '#708090', snow: '#FFFAFA', springgreen: '#00FF7F', steelblue: '#4682B4', tan: '#D2B48C', teal: '#008080', thistle: '#D8BFD8', tomato: '#FF6347', transparent: 'rgba(0,0,0,0)', turquoise: '#40E0D0', violet: '#EE82EE', wheat: '#F5DEB3', white: '#FFFFFF', whitesmoke: '#F5F5F5', yellow: '#FFFF00', yellowgreen: '#9ACD32'}/*union*/).lightgreen;
  var NamedColor$red = (/*union*/{aliceblue: '#F0F8FF', antiquewhite: '#FAEBD7', aqua: '#00FFFF', aquamarine: '#7FFFD4', azure: '#F0FFFF', beige: '#F5F5DC', bisque: '#FFE4C4', black: '#000000', blanchedalmond: '#FFEBCD', blue: '#0000FF', blueviolet: '#8A2BE2', brown: '#A52A2A', burlywood: '#DEB887', cadetblue: '#5F9EA0', chartreuse: '#7FFF00', chocolate: '#D2691E', coral: '#FF7F50', cornflowerblue: '#6495ED', cornsilk: '#FFF8DC', crimson: '#DC143C', cyan: '#00FFFF', darkblue: '#00008B', darkcyan: '#008B8B', darkgoldenrod: '#B8860B', darkgray: '#A9A9A9', darkgreen: '#006400', darkgrey: '#A9A9A9', darkkhaki: '#BDB76B', darkmagenta: '#8B008B', darkolivegreen: '#556B2F', darkorange: '#FF8C00', darkorchid: '#9932CC', darkred: '#8B0000', darksalmon: '#E9967A', darkseagreen: '#8FBC8F', darkslateblue: '#483D8B', darkslategray: '#2F4F4F', darkslategrey: '#2F4F4F', darkturquoise: '#00CED1', darkviolet: '#9400D3', deeppink: '#FF1493', deepskyblue: '#00BFFF', dimgray: '#696969', dimgrey: '#696969', dodgerblue: '#1E90FF', firebrick: '#B22222', floralwhite: '#FFFAF0', forestgreen: '#228B22', fuchsia: '#FF00FF', gainsboro: '#DCDCDC', ghostwhite: '#F8F8FF', gold: '#FFD700', goldenrod: '#DAA520', gray: '#808080', green: '#008000', greenyellow: '#ADFF2F', grey: '#808080', honeydew: '#F0FFF0', hotpink: '#FF69B4', indianred: '#CD5C5C', indigo: '#4B0082', ivory: '#FFFFF0', khaki: '#F0E68C', lavender: '#E6E6FA', lavenderblush: '#FFF0F5', lawngreen: '#7CFC00', lemonchiffon: '#FFFACD', lightblue: '#ADD8E6', lightcoral: '#F08080', lightcyan: '#E0FFFF', lightgoldenrodyellow: '#FAFAD2', lightgray: '#D3D3D3', lightgreen: '#90EE90', lightgrey: '#D3D3D3', lightpink: '#FFB6C1', lightsalmon: '#FFA07A', lightseagreen: '#20B2AA', lightskyblue: '#87CEFA', lightslategray: '#778899', lightslategrey: '#778899', lightsteelblue: '#B0C4DE', lightyellow: '#FFFFE0', lime: '#00FF00', limegreen: '#32CD32', linen: '#FAF0E6', magenta: '#FF00FF', maroon: '#800000', mediumaquamarine: '#66CDAA', mediumblue: '#0000CD', mediumorchid: '#BA55D3', mediumpurple: '#9370D8', mediumseagreen: '#3CB371', mediumslateblue: '#7B68EE', mediumspringgreen: '#00FA9A', mediumturquoise: '#48D1CC', mediumvioletred: '#C71585', midnightblue: '#191970', mintcream: '#F5FFFA', mistyrose: '#FFE4E1', moccasin: '#FFE4B5', navajowhite: '#FFDEAD', navy: '#000080', oldlace: '#FDF5E6', olive: '#808000', olivedrab: '#6B8E23', orange: '#FFA500', orangered: '#FF4500', orchid: '#DA70D6', palegoldenrod: '#EEE8AA', palegreen: '#98FB98', paleturquoise: '#AFEEEE', palevioletred: '#DB7093', papayawhip: '#FFEFD5', peachpuff: '#FFDAB9', peru: '#CD853F', pink: '#FFC0CB', plum: '#DDA0DD', powderblue: '#B0E0E6', purple: '#800080', rebeccapurple: '#663399', red: '#FF0000', rosybrown: '#BC8F8F', royalblue: '#4169E1', saddlebrown: '#8B4513', salmon: '#FA8072', sandybrown: '#F4A460', seagreen: '#2E8B57', seashell: '#FFF5EE', sienna: '#A0522D', silver: '#C0C0C0', skyblue: '#87CEEB', slateblue: '#6A5ACD', slategray: '#708090', slategrey: '#708090', snow: '#FFFAFA', springgreen: '#00FF7F', steelblue: '#4682B4', tan: '#D2B48C', teal: '#008080', thistle: '#D8BFD8', tomato: '#FF6347', transparent: 'rgba(0,0,0,0)', turquoise: '#40E0D0', violet: '#EE82EE', wheat: '#F5DEB3', white: '#FFFFFF', whitesmoke: '#F5F5F5', yellow: '#FFFF00', yellowgreen: '#9ACD32'}/*union*/).red;
  var css = $module$kotlin_react_css.$$importsForInline$$['@emotion/css'].css;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var Json = $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy.kotlinx.serialization.json.Json;
  var getKClass = Kotlin.getKClass;
  var createKType = Kotlin.createKType;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var awaitAll = $module$kotlinx_coroutines_core.kotlinx.coroutines.awaitAll_60afti$;
  var coroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.coroutineScope_awg8ri$;
  var MainScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.MainScope;
  var useState = $module$react.useState;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var useEffectOnce = $module$kotlin_react_core.react.useEffectOnce_yy86ve$;
  var minus = Kotlin.kotlin.collections.minus_2ws7j4$;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var serializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.serializer_ca95z9$;
  var KSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.KSerializer;
  var throwCCE = Kotlin.throwCCE;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function Video(id, title, speaker, videoUrl) {
    Video$Companion_getInstance();
    this.id = id;
    this.title = title;
    this.speaker = speaker;
    this.videoUrl = videoUrl;
  }
  function Video$Companion() {
    Video$Companion_instance = this;
  }
  Video$Companion.prototype.serializer = function () {
    return Video$$serializer_getInstance();
  };
  Video$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Video$Companion_instance = null;
  function Video$Companion_getInstance() {
    if (Video$Companion_instance === null) {
      new Video$Companion();
    }
    return Video$Companion_instance;
  }
  function Video$$serializer() {
    this.descriptor_9qzcbk$_0 = new PluginGeneratedSerialDescriptor('Video', this, 4);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('title', false);
    this.descriptor.addElement_ivxn3r$('speaker', false);
    this.descriptor.addElement_ivxn3r$('videoUrl', false);
    Video$$serializer_instance = this;
  }
  Object.defineProperty(Video$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_9qzcbk$_0;
    }
  });
  Video$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.id);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.title);
    output.encodeStringElement_iij8qq$(this.descriptor, 2, value.speaker);
    output.encodeStringElement_iij8qq$(this.descriptor, 3, value.videoUrl);
    output.endStructure_24f42q$(this.descriptor);
  };
  Video$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeStringElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeStringElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case -1:
          break loopLabel;
        default:
          throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Video_init(bitMask0, local0, local1, local2, local3, null);
  };
  Video$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  Video$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Video$$serializer_instance = null;
  function Video$$serializer_getInstance() {
    if (Video$$serializer_instance === null) {
      new Video$$serializer();
    }
    return Video$$serializer_instance;
  }
  function Video_init(seen1, id, title, speaker, videoUrl, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Video.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('id');
    else
      $this.id = id;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('title');
    else
      $this.title = title;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('speaker');
    else
      $this.speaker = speaker;
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('videoUrl');
    else
      $this.videoUrl = videoUrl;
    return $this;
  }
  Video.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Video',
    interfaces: []
  };
  Video.prototype.component1 = function () {
    return this.id;
  };
  Video.prototype.component2 = function () {
    return this.title;
  };
  Video.prototype.component3 = function () {
    return this.speaker;
  };
  Video.prototype.component4 = function () {
    return this.videoUrl;
  };
  Video.prototype.copy_cgs6fs$ = function (id, title, speaker, videoUrl) {
    return new Video(id === void 0 ? this.id : id, title === void 0 ? this.title : title, speaker === void 0 ? this.speaker : speaker, videoUrl === void 0 ? this.videoUrl : videoUrl);
  };
  Video.prototype.toString = function () {
    return 'Video(id=' + Kotlin.toString(this.id) + (', title=' + Kotlin.toString(this.title)) + (', speaker=' + Kotlin.toString(this.speaker)) + (', videoUrl=' + Kotlin.toString(this.videoUrl)) + ')';
  };
  Video.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.speaker) | 0;
    result = result * 31 + Kotlin.hashCode(this.videoUrl) | 0;
    return result;
  };
  Video.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.speaker, other.speaker) && Kotlin.equals(this.videoUrl, other.videoUrl)))));
  };
  function main() {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = document.getElementById('root')) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init("Couldn't find root container!".toString());
    }
    var container = tmp$_0;
    render(create(Welcome), container);
  }
  function VideoList$lambda$lambda$lambda(closure$props, closure$video) {
    return function (it) {
      closure$props.onSelectVideo(closure$video);
      return Unit;
    };
  }
  function VideoList$lambda$lambda(closure$video, closure$props) {
    return function ($receiver) {
      $receiver.key = closure$video.id.toString();
      $receiver.onClick = VideoList$lambda$lambda$lambda(closure$props, closure$video);
      if (equals(closure$video, closure$props.selectedVideo)) {
        $receiver.unaryPlus_pdl1vz$('\u25B6 ');
      }
      $receiver.unaryPlus_pdl1vz$(closure$video.speaker + ': ' + closure$video.title);
      return Unit;
    };
  }
  function VideoList$lambda($receiver, props) {
    var tmp$;
    tmp$ = props.videos.iterator();
    while (tmp$.hasNext()) {
      var video = tmp$.next();
      $receiver.invoke_gax9jq$(html.ReactHTML.p, VideoList$lambda$lambda(video, props));
    }
    return Unit;
  }
  var VideoList;
  function VideoPlayer$lambda$lambda$lambda(closure$props) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$props.video.speaker + ': ' + closure$props.video.title);
      return Unit;
    };
  }
  function VideoPlayer$lambda$lambda$lambda$lambda(closure$props) {
    return function (it) {
      closure$props.onWatchedButtonPressed(closure$props.video);
      return Unit;
    };
  }
  function VideoPlayer$lambda$lambda$lambda_0(closure$props) {
    return function ($receiver) {
      var $receiver_0 = {};
      var closure$props_0 = closure$props;
      $receiver_0.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item', none: 'none'}/*union*/).block;
      $receiver_0.backgroundColor = closure$props_0.unwatchedVideo ? NamedColor$lightgreen : NamedColor$red;
      $receiver.className = css($receiver_0);
      $receiver.onClick = VideoPlayer$lambda$lambda$lambda$lambda(closure$props);
      if (closure$props.unwatchedVideo) {
        $receiver.unaryPlus_pdl1vz$('Mark as watched');
      } else {
        $receiver.unaryPlus_pdl1vz$('Mark as unwatched');
      }
      return Unit;
    };
  }
  function VideoPlayer$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.size = 32;
    $receiver.round = true;
    return Unit;
  }
  function VideoPlayer$lambda$lambda$lambda$lambda_0(closure$props) {
    return function ($receiver) {
      $receiver.url = closure$props.video.videoUrl;
      $receiver.invoke_gax9jq$($module$react_share.EmailIcon, VideoPlayer$lambda$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function VideoPlayer$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.size = 32;
    $receiver.round = true;
    return Unit;
  }
  function VideoPlayer$lambda$lambda$lambda$lambda_1(closure$props) {
    return function ($receiver) {
      $receiver.url = closure$props.video.videoUrl;
      $receiver.invoke_gax9jq$($module$react_share.TelegramIcon, VideoPlayer$lambda$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function VideoPlayer$lambda$lambda$lambda_1(closure$props) {
    return function ($receiver) {
      var $receiver_0 = {};
      $receiver_0.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item', none: 'none'}/*union*/).flex;
      $receiver_0.marginBottom = (10).toString() + 'px';
      $receiver.className = css($receiver_0);
      $receiver.invoke_gax9jq$($module$react_share.EmailShareButton, VideoPlayer$lambda$lambda$lambda$lambda_0(closure$props));
      $receiver.invoke_gax9jq$($module$react_share.TelegramShareButton, VideoPlayer$lambda$lambda$lambda$lambda_1(closure$props));
      return Unit;
    };
  }
  function VideoPlayer$lambda$lambda$lambda_2(closure$props) {
    return function ($receiver) {
      $receiver.url = closure$props.video.videoUrl;
      return Unit;
    };
  }
  function VideoPlayer$lambda$lambda(closure$props) {
    return function ($receiver) {
      var $receiver_0 = {};
      $receiver_0.position = (/*union*/{absolute: 'absolute', fixed: 'fixed', relative: 'relative', static: 'static', sticky: 'sticky'}/*union*/).absolute;
      $receiver_0.top = (10).toString() + 'px';
      $receiver_0.right = (10).toString() + 'px';
      $receiver_0.paddingRight = (30).toString() + 'px';
      $receiver.className = css($receiver_0);
      $receiver.invoke_gax9jq$(html.ReactHTML.h3, VideoPlayer$lambda$lambda$lambda(closure$props));
      $receiver.invoke_gax9jq$(html.ReactHTML.button, VideoPlayer$lambda$lambda$lambda_0(closure$props));
      $receiver.invoke_gax9jq$(html.ReactHTML.div, VideoPlayer$lambda$lambda$lambda_1(closure$props));
      $receiver.invoke_gax9jq$($module$react_youtube_lite.ReactYouTubeLite, VideoPlayer$lambda$lambda$lambda_2(closure$props));
      return Unit;
    };
  }
  function VideoPlayer$lambda($receiver, props) {
    $receiver.invoke_gax9jq$(html.ReactHTML.div, VideoPlayer$lambda$lambda(props));
    return Unit;
  }
  var VideoPlayer;
  function Coroutine$fetchVideo(id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$id = id_0;
  }
  Coroutine$fetchVideo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$fetchVideo.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fetchVideo.prototype.constructor = Coroutine$fetchVideo;
  Coroutine$fetchVideo.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(window.fetch('https://my-json-server.typicode.com/kotlin-hands-on/kotlinconf-json/videos/' + this.local$id), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = await_0(this.result_0.text(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var response = this.result_0;
            var $receiver = Json.Default;
            var tmp$;
            return $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$ = serializer($receiver.serializersModule, createKType(getKClass(Video), [], false)), KSerializer) ? tmp$ : throwCCE(), response);
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function fetchVideo(id_0, continuation_0, suspended) {
    var instance = new Coroutine$fetchVideo(id_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$fetchVideos$lambda$lambda$lambda(closure$id_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$id = closure$id_0;
  }
  Coroutine$fetchVideos$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$fetchVideos$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fetchVideos$lambda$lambda$lambda.prototype.constructor = Coroutine$fetchVideos$lambda$lambda$lambda;
  Coroutine$fetchVideos$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = fetchVideo(this.local$closure$id, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function fetchVideos$lambda$lambda$lambda(closure$id_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$fetchVideos$lambda$lambda$lambda(closure$id_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$fetchVideos$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$fetchVideos$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$fetchVideos$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fetchVideos$lambda.prototype.constructor = Coroutine$fetchVideos$lambda;
  Coroutine$fetchVideos$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = new IntRange(1, 25);
            var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
              var item = tmp$.next();
              destination.add_11rb$(async(this.local$$receiver, void 0, void 0, fetchVideos$lambda$lambda$lambda(item)));
            }

            this.state_0 = 2;
            this.result_0 = awaitAll(destination, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function fetchVideos$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$fetchVideos$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function fetchVideos(continuation) {
    return coroutineScope(fetchVideos$lambda, continuation);
  }
  var mainScope;
  function Coroutine$Welcome$lambda$lambda$lambda(closure$unwatchedVideos_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$unwatchedVideos = closure$unwatchedVideos_0;
  }
  Coroutine$Welcome$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Welcome$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Welcome$lambda$lambda$lambda.prototype.constructor = Coroutine$Welcome$lambda$lambda$lambda;
  Coroutine$Welcome$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = fetchVideos(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $this = this.local$closure$unwatchedVideos;
            var value = this.result_0;
            $this[1](value);
            return Unit;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Welcome$lambda$lambda$lambda(closure$unwatchedVideos_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Welcome$lambda$lambda$lambda(closure$unwatchedVideos_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Welcome$lambda$lambda(closure$unwatchedVideos) {
    return function ($receiver) {
      launch(mainScope, void 0, void 0, Welcome$lambda$lambda$lambda(closure$unwatchedVideos));
      return Unit;
    };
  }
  function Welcome$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Unwatched Videos');
    return Unit;
  }
  function Welcome$lambda$lambda$lambda$lambda(closure$currentVideo) {
    return function (video) {
      closure$currentVideo[1](video);
      return Unit;
    };
  }
  function Welcome$lambda$lambda$lambda_1(closure$unwatchedVideos, closure$currentVideo) {
    return function ($receiver) {
      $receiver.videos = closure$unwatchedVideos[0];
      $receiver.selectedVideo = closure$currentVideo[0];
      $receiver.onSelectVideo = Welcome$lambda$lambda$lambda$lambda(closure$currentVideo);
      return Unit;
    };
  }
  function Welcome$lambda$lambda_0(closure$unwatchedVideos, closure$currentVideo) {
    return function ($receiver) {
      $receiver.invoke_gax9jq$(html.ReactHTML.h1, Welcome$lambda$lambda$lambda_0);
      $receiver.invoke_gax9jq$(VideoList, Welcome$lambda$lambda$lambda_1(closure$unwatchedVideos, closure$currentVideo));
      return Unit;
    };
  }
  function Welcome$lambda$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('Watched Videos');
    return Unit;
  }
  function Welcome$lambda$lambda$lambda$lambda_0(closure$currentVideo) {
    return function (video) {
      closure$currentVideo[1](video);
      return Unit;
    };
  }
  function Welcome$lambda$lambda$lambda_3(closure$watchedVideos, closure$currentVideo) {
    return function ($receiver) {
      $receiver.videos = closure$watchedVideos[0];
      $receiver.selectedVideo = closure$currentVideo[0];
      $receiver.onSelectVideo = Welcome$lambda$lambda$lambda$lambda_0(closure$currentVideo);
      return Unit;
    };
  }
  function Welcome$lambda$lambda_1(closure$watchedVideos, closure$currentVideo) {
    return function ($receiver) {
      $receiver.invoke_gax9jq$(html.ReactHTML.h1, Welcome$lambda$lambda$lambda_2);
      $receiver.invoke_gax9jq$(VideoList, Welcome$lambda$lambda$lambda_3(closure$watchedVideos, closure$currentVideo));
      return Unit;
    };
  }
  function Welcome$lambda$lambda$lambda$lambda_1(closure$unwatchedVideos, this$, closure$watchedVideos) {
    return function (it) {
      if (closure$unwatchedVideos[0].contains_11rb$(this$.video)) {
        var tmp$ = closure$unwatchedVideos;
        var value = minus(closure$unwatchedVideos[0], this$.video);
        tmp$[1](value);
        var tmp$_0 = closure$watchedVideos;
        var value_0 = plus(closure$watchedVideos[0], this$.video);
        tmp$_0[1](value_0);
      } else {
        var tmp$_1 = closure$watchedVideos;
        var value_1 = minus(closure$watchedVideos[0], this$.video);
        tmp$_1[1](value_1);
        var tmp$_2 = closure$unwatchedVideos;
        var value_2 = plus(closure$unwatchedVideos[0], this$.video);
        tmp$_2[1](value_2);
      }
      return Unit;
    };
  }
  function Welcome$lambda$lambda$lambda_4(closure$curr, closure$unwatchedVideos, closure$watchedVideos) {
    return function ($receiver) {
      $receiver.video = closure$curr;
      $receiver.unwatchedVideo = closure$unwatchedVideos[0].contains_11rb$(closure$curr);
      $receiver.onWatchedButtonPressed = Welcome$lambda$lambda$lambda$lambda_1(closure$unwatchedVideos, $receiver, closure$watchedVideos);
      return Unit;
    };
  }
  function Welcome$lambda($receiver, it) {
    var tmp$;
    var currentVideo = useState(null);
    var unwatchedVideos = useState(emptyList());
    var watchedVideos = useState(emptyList());
    useEffectOnce(Welcome$lambda$lambda(unwatchedVideos));
    $receiver.invoke_gax9jq$(html.ReactHTML.div, Welcome$lambda$lambda_0(unwatchedVideos, currentVideo));
    $receiver.invoke_gax9jq$(html.ReactHTML.div, Welcome$lambda$lambda_1(watchedVideos, currentVideo));
    if ((tmp$ = currentVideo[0]) != null) {
      $receiver.invoke_gax9jq$(VideoPlayer, Welcome$lambda$lambda$lambda_4(tmp$, unwatchedVideos, watchedVideos));
    }
    return Unit;
  }
  var Welcome;
  Object.defineProperty(Video, 'Companion', {
    get: Video$Companion_getInstance
  });
  Object.defineProperty(Video, '$serializer', {
    get: Video$$serializer_getInstance
  });
  _.Video_init_80amq2$ = Video_init;
  _.Video = Video;
  _.main = main;
  $$importsForInline$$['kotlin-react-core'] = $module$kotlin_react_core;
  Object.defineProperty(_, 'VideoList', {
    get: function () {
      return VideoList;
    }
  });
  $$importsForInline$$['kotlin-csstype'] = $module$kotlin_csstype;
  $$importsForInline$$['kotlin-react-css'] = $module$kotlin_react_css;
  Object.defineProperty(_, 'VideoPlayer', {
    get: function () {
      return VideoPlayer;
    }
  });
  $$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy;
  _.fetchVideo_za3lpa$ = fetchVideo;
  _.fetchVideos = fetchVideos;
  Object.defineProperty(_, 'mainScope', {
    get: function () {
      return mainScope;
    }
  });
  Object.defineProperty(_, 'Welcome', {
    get: function () {
      return Welcome;
    }
  });
  Video$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  VideoList = FC(VideoList$lambda);
  VideoPlayer = FC(VideoPlayer$lambda);
  mainScope = MainScope();
  Welcome = FC(Welcome$lambda);
  main();
  Kotlin.defineModule('untitled', _);
  return _;
}));

//# sourceMappingURL=untitled.js.map
