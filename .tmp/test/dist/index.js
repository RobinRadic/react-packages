'use strict';



function __$styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var reactTypestyle = require('react-typestyle');
var hoistNonReactStatics = _interopDefault(require('hoist-non-react-statics'));
var typestyle = require('typestyle');
var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

var cssSelector = function (selector) { return function () {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    var _a;
    var prefinal = Object.assign.apply(Object, [{}].concat(objects));
    var $nest = Object.assign.apply(Object, [{}].concat(objects.map(function (obj) { return obj.$nest; })));
    prefinal.$nest = $nest;
    var final = prefinal;
    return {
        $nest: (_a = {}, _a["" + selector] = final, _a)
    };
}; };
var child = function () {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    return cssSelector('&>*').apply(void 0, objects);
};
var firstChild = function () {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    return cssSelector('&>*:first-child').apply(void 0, objects);
};
var lastChild = function () {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    return cssSelector('&>*:last-child').apply(void 0, objects);
};
var active = function () {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    return cssSelector('&:active').apply(void 0, objects);
};
var hover = function () {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    return cssSelector('&:hover').apply(void 0, objects);
};
var focus = function () {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    return cssSelector('&:focus').apply(void 0, objects);
};
var visited = function () {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    return cssSelector('&:visited').apply(void 0, objects);
};

var helpers = /*#__PURE__*/Object.freeze({
    cssSelector: cssSelector,
    child: child,
    firstChild: firstChild,
    lastChild: lastChild,
    active: active,
    hover: hover,
    focus: focus,
    visited: visited
});



var types = /*#__PURE__*/Object.freeze({

});

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

var style = typestyle.style;

function factory(tag) {
    return function () {
        var styles = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            styles[_i] = arguments[_i];
        }
        var StyledComponent = /** @class */ (function (_super) {
            __extends(StyledComponent, _super);
            function StyledComponent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StyledComponent.prototype.render = function () {
                var _this = this;
                var _a = this.props, children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
                var cssObjects = styles.map(function (obj) {
                    if (typeof obj === 'function') {
                        return obj(__assign({}, rest, { theme: _this.context.theme }));
                    }
                    return obj;
                }).reduce(function (acc, cur) { return acc.concat(cur); }, []);
                var computedClassName = style.apply(void 0, cssObjects);
                return React.createElement(tag, __assign({}, rest, { className: typestyle.classes(computedClassName, className) }), children);
            };
            StyledComponent.contextTypes = {
                theme: PropTypes.object.isRequired
            };
            return StyledComponent;
        }(React.Component));
        return StyledComponent;
    };
}

var a = factory('a');
var abbr = factory('abbr');
var address = factory('address');
var area = factory('area');
var article = factory('article');
var aside = factory('aside');
var audio = factory('audio');
var b = factory('b');
var base = factory('base');
var bdi = factory('bdi');
var bdo = factory('bdo');
var big = factory('big');
var blockquote = factory('blockquote');
var body = factory('body');
var br = factory('br');
var button = factory('button');
var canvas = factory('canvas');
var caption = factory('caption');
var cite = factory('cite');
var code = factory('code');
var col = factory('col');
var colgroup = factory('colgroup');
var data = factory('data');
var datalist = factory('datalist');
var dd = factory('dd');
var del = factory('del');
var details = factory('details');
var dfn = factory('dfn');
var dialog = factory('dialog');
var div = factory('div');
var dl = factory('dl');
var dt = factory('dt');
var em = factory('em');
var embed = factory('embed');
var fieldset = factory('fieldset');
var figcaption = factory('figcaption');
var figure = factory('figure');
var footer = factory('footer');
var form = factory('form');
var h1 = factory('h1');
var h2 = factory('h2');
var h3 = factory('h3');
var h4 = factory('h4');
var h5 = factory('h5');
var h6 = factory('h6');
var head = factory('head');
var header = factory('header');
var hgroup = factory('hgroup');
var hr = factory('hr');
var html = factory('html');
var i = factory('i');
var iframe = factory('iframe');
var img = factory('img');
var input = factory('input');
var ins = factory('ins');
var kbd = factory('kbd');
var keygen = factory('keygen');
var label = factory('label');
var legend = factory('legend');
var li = factory('li');
var link = factory('link');
var main = factory('main');
var map = factory('map');
var mark = factory('mark');
var menu = factory('menu');
var menuitem = factory('menuitem');
var meta = factory('meta');
var meter = factory('meter');
var nav = factory('nav');
var noscript = factory('noscript');
var object = factory('object');
var ol = factory('ol');
var optgroup = factory('optgroup');
var option = factory('option');
var output = factory('output');
var p = factory('p');
var param = factory('param');
var picture = factory('picture');
var pre = factory('pre');
var progress = factory('progress');
var q = factory('q');
var rp = factory('rp');
var rt = factory('rt');
var ruby = factory('ruby');
var s = factory('s');
var samp = factory('samp');
var script = factory('script');
var section = factory('section');
var select = factory('select');
var small = factory('small');
var source = factory('source');
var span = factory('span');
var strong = factory('strong');
var sub = factory('sub');
var summary = factory('summary');
var sup = factory('sup');
var table = factory('table');
var tbody = factory('tbody');
var td = factory('td');
var textarea = factory('textarea');
var tfoot = factory('tfoot');
var th = factory('th');
var thead = factory('thead');
var time = factory('time');
var title = factory('title');
var tr = factory('tr');
var track = factory('track');
var u = factory('u');
var ul = factory('ul');
var video = factory('video');
var wbr = factory('wbr');

var hoc = function (_a) {
    var plugins = _a.plugins, renderer = _a.renderer, shouldStylesUpdate = _a.shouldStylesUpdate;
    return function (Component, componentOptions) {
        if (componentOptions === void 0) { componentOptions = {}; }
        var _a;
        // Get sheet
        var sheet = componentOptions.styles || Component.styles;
        return _a = /** @class */ (function (_super) {
                __extends(class_1, _super);
                function class_1() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.classNames = {};
                    _this.registry = new reactTypestyle.Cache({ plugins: plugins }).register(sheet);
                    return _this;
                }
                /** Handle style sheet attach */
                class_1.prototype.componentWillMount = function () {
                    renderer.mount(this.registry);
                    this.updateStyles(this.props);
                };
                /** Handle style sheet updates */
                class_1.prototype.componentWillReceiveProps = function (nextProps) {
                    if (shouldStylesUpdate(this.props, nextProps))
                        this.updateStyles(nextProps);
                };
                /** Handle style sheet detach */
                class_1.prototype.componentWillUnmount = function () {
                    renderer.unmount(this.registry);
                };
                /** React render */
                class_1.prototype.render = function () {
                    return React.createElement(Component, __assign({ className: typestyle.classes(this.classNames.root) }, this.props));
                };
                /** Update styles */
                class_1.prototype.updateStyles = function (props) {
                    this.classNames = this.registry.render(__assign({}, props, { theme: this.context.theme }));
                };
                return class_1;
            }(React.Component)),
            _a.defaultProps = Component.defaultProps,
            _a.propTypes = Component.propTypes,
            _a.contextTypes = {
                theme: PropTypes.object.isRequired
            },
            _a;
    };
};
var HoC = hoc({
    renderer: reactTypestyle.defaultRenderer,
    shouldStylesUpdate: reactTypestyle.shallowCompare,
    plugins: []
});
var extendHoc = function () { return function (Component, styles) {
    var componentOptions = {
        styles: {
            root: styles
        }
        // styles: {
        // root: {
        //     backgroundColor: '#333'
        // },
        // bemy: ({ theme }: { theme: Theme }) => ({
        //     backgroundColor: theme.colors.primary
        // })
        // }
    };
    return HoC(Component, componentOptions);
}; };

var Extend = /** @class */ (function () {
    function Extend() {
    }
    Extend.styled = function (type) {
        return function () {
            var objects = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                objects[_i] = arguments[_i];
            }
            return (function (props) {
                var cssObjects = objects.map(function (obj) {
                    if (typeof obj === 'function') {
                        var fn = obj;
                        return fn(props);
                    }
                    return obj;
                }).reduce(function (acc, cur) {
                    // noinspection TypeScriptUnresolvedVariable
                    if (Array.isArray(cur)) {
                        return acc.concat(cur);
                    }
                    acc.push(cur);
                    return acc;
                }, []);
                var className = props.className;
                var computedClassName = style.apply(void 0, cssObjects);
                var finalClassName = className ? className + " + " + computedClassName : computedClassName;
                var passedProps = Object.assign({}, props, { className: finalClassName });
                return React.createElement(type, passedProps, props.children);
            });
        };
    };
    Extend.style = extendHoc();
    return Extend;
}());
var extend = Extend.style;



var styled = /*#__PURE__*/Object.freeze({
    helpers: helpers,
    types: types,
    extend: extend,
    a: a,
    abbr: abbr,
    address: address,
    area: area,
    article: article,
    aside: aside,
    audio: audio,
    b: b,
    base: base,
    bdi: bdi,
    bdo: bdo,
    big: big,
    blockquote: blockquote,
    body: body,
    br: br,
    button: button,
    canvas: canvas,
    caption: caption,
    cite: cite,
    code: code,
    col: col,
    colgroup: colgroup,
    data: data,
    datalist: datalist,
    dd: dd,
    del: del,
    details: details,
    dfn: dfn,
    dialog: dialog,
    div: div,
    dl: dl,
    dt: dt,
    em: em,
    embed: embed,
    fieldset: fieldset,
    figcaption: figcaption,
    figure: figure,
    footer: footer,
    form: form,
    h1: h1,
    h2: h2,
    h3: h3,
    h4: h4,
    h5: h5,
    h6: h6,
    head: head,
    header: header,
    hgroup: hgroup,
    hr: hr,
    html: html,
    i: i,
    iframe: iframe,
    img: img,
    input: input,
    ins: ins,
    kbd: kbd,
    keygen: keygen,
    label: label,
    legend: legend,
    li: li,
    link: link,
    main: main,
    map: map,
    mark: mark,
    menu: menu,
    menuitem: menuitem,
    meta: meta,
    meter: meter,
    nav: nav,
    noscript: noscript,
    object: object,
    ol: ol,
    optgroup: optgroup,
    option: option,
    output: output,
    p: p,
    param: param,
    picture: picture,
    pre: pre,
    progress: progress,
    q: q,
    rp: rp,
    rt: rt,
    ruby: ruby,
    s: s,
    samp: samp,
    script: script,
    section: section,
    select: select,
    small: small,
    source: source,
    span: span,
    strong: strong,
    sub: sub,
    summary: summary,
    sup: sup,
    table: table,
    tbody: tbody,
    td: td,
    textarea: textarea,
    tfoot: tfoot,
    th: th,
    thead: thead,
    time: time,
    title: title,
    tr: tr,
    track: track,
    u: u,
    ul: ul,
    video: video,
    wbr: wbr
});

var Styled = function () {
    return function (Component) {
        var WrappedComponent = /** @class */ (function (_super) {
            __extends(WrappedComponent, _super);
            function WrappedComponent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WrappedComponent.prototype.render = function () {
                var _a = this.props, children = _a.children, props = __rest(_a, ["children"]);
                var styledProps = {
                    classNames: {}
                };
                // classNames
                if (Component.styles !== undefined) {
                    Object
                        .keys(Component.styles)
                        .forEach(function (className) {
                        return styledProps.classNames[className] = style(Component.styles[className]);
                    });
                }
                var className = [];
                if (Component.style !== undefined) {
                    className.push(style(Component.style));
                }
                if (props.className) {
                    className.push(props.className);
                }
                styledProps.className = typestyle.classes.apply(void 0, className);
                var passedProps = Object.assign.apply(Object, [{}].concat(props, [styledProps]));
                return React.createElement(Component, passedProps, children);
            };
            return WrappedComponent;
        }(React.Component));
        return hoistNonReactStatics(WrappedComponent, Component);
    };
};

function createThemeProvider(themes, defaultTheme) {
    var ThemeProvider = /** @class */ (function (_super) {
        __extends(ThemeProvider, _super);
        function ThemeProvider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ThemeProvider.prototype.getChildContext = function () {
            return {
                theme: themes[this.props.theme]
            };
        };
        ThemeProvider.prototype.render = function () {
            return React.Children.only(this.props.children);
        };
        ThemeProvider.displayName = 'ThemeProvider';
        ThemeProvider.childContextTypes = {
            theme: PropTypes.object.isRequired
        };
        return ThemeProvider;
    }(React.Component));
    return ThemeProvider;
}

exports.styled = styled;
exports.Styled = Styled;
exports.createThemeProvider = createThemeProvider;
//# sourceMappingURL=index.js.map
