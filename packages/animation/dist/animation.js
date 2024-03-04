(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("animation", [], factory);
	else if(typeof exports === 'object')
		exports["animation"] = factory();
	else
		root["animation"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/path-browserify/index.js":
/*!***************************************************!*\
  !*** ../../node_modules/path-browserify/index.js ***!
  \***************************************************/
/***/ ((module) => {

// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
  }
}

// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
  var res = '';
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;
  for (var i = 0; i <= path.length; ++i) {
    if (i < path.length)
      code = path.charCodeAt(i);
    else if (code === 47 /*/*/)
      break;
    else
      code = 47 /*/*/;
    if (code === 47 /*/*/) {
      if (lastSlash === i - 1 || dots === 1) {
        // NOOP
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/ || res.charCodeAt(res.length - 2) !== 46 /*.*/) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf('/');
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = '';
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
              }
              lastSlash = i;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = '';
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += '/..';
          else
            res = '..';
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += '/' + path.slice(lastSlash + 1, i);
        else
          res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === 46 /*.*/ && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}

function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
  if (!dir) {
    return base;
  }
  if (dir === pathObject.root) {
    return dir + base;
  }
  return dir + sep + base;
}

var posix = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedPath = '';
    var resolvedAbsolute = false;
    var cwd;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path;
      if (i >= 0)
        path = arguments[i];
      else {
        if (cwd === undefined)
          cwd = process.cwd();
        path = cwd;
      }

      assertPath(path);

      // Skip empty entries
      if (path.length === 0) {
        continue;
      }

      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/;
    }

    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the path
    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);

    if (resolvedAbsolute) {
      if (resolvedPath.length > 0)
        return '/' + resolvedPath;
      else
        return '/';
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return '.';
    }
  },

  normalize: function normalize(path) {
    assertPath(path);

    if (path.length === 0) return '.';

    var isAbsolute = path.charCodeAt(0) === 47 /*/*/;
    var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/;

    // Normalize the path
    path = normalizeStringPosix(path, !isAbsolute);

    if (path.length === 0 && !isAbsolute) path = '.';
    if (path.length > 0 && trailingSeparator) path += '/';

    if (isAbsolute) return '/' + path;
    return path;
  },

  isAbsolute: function isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47 /*/*/;
  },

  join: function join() {
    if (arguments.length === 0)
      return '.';
    var joined;
    for (var i = 0; i < arguments.length; ++i) {
      var arg = arguments[i];
      assertPath(arg);
      if (arg.length > 0) {
        if (joined === undefined)
          joined = arg;
        else
          joined += '/' + arg;
      }
    }
    if (joined === undefined)
      return '.';
    return posix.normalize(joined);
  },

  relative: function relative(from, to) {
    assertPath(from);
    assertPath(to);

    if (from === to) return '';

    from = posix.resolve(from);
    to = posix.resolve(to);

    if (from === to) return '';

    // Trim any leading backslashes
    var fromStart = 1;
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47 /*/*/)
        break;
    }
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;

    // Trim any leading backslashes
    var toStart = 1;
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47 /*/*/)
        break;
    }
    var toEnd = to.length;
    var toLen = toEnd - toStart;

    // Compare paths to find the longest common path from root
    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;
    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === 47 /*/*/) {
            // We get here if `from` is the exact base path for `to`.
            // For example: from='/foo/bar'; to='/foo/bar/baz'
            return to.slice(toStart + i + 1);
          } else if (i === 0) {
            // We get here if `from` is the root
            // For example: from='/'; to='/foo'
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === 47 /*/*/) {
            // We get here if `to` is the exact base path for `from`.
            // For example: from='/foo/bar/baz'; to='/foo/bar'
            lastCommonSep = i;
          } else if (i === 0) {
            // We get here if `to` is the root.
            // For example: from='/foo'; to='/'
            lastCommonSep = 0;
          }
        }
        break;
      }
      var fromCode = from.charCodeAt(fromStart + i);
      var toCode = to.charCodeAt(toStart + i);
      if (fromCode !== toCode)
        break;
      else if (fromCode === 47 /*/*/)
        lastCommonSep = i;
    }

    var out = '';
    // Generate the relative path based on the path difference between `to`
    // and `from`
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/) {
        if (out.length === 0)
          out += '..';
        else
          out += '/..';
      }
    }

    // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts
    if (out.length > 0)
      return out + to.slice(toStart + lastCommonSep);
    else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47 /*/*/)
        ++toStart;
      return to.slice(toStart);
    }
  },

  _makeLong: function _makeLong(path) {
    return path;
  },

  dirname: function dirname(path) {
    assertPath(path);
    if (path.length === 0) return '.';
    var code = path.charCodeAt(0);
    var hasRoot = code === 47 /*/*/;
    var end = -1;
    var matchedSlash = true;
    for (var i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          if (!matchedSlash) {
            end = i;
            break;
          }
        } else {
        // We saw the first non-path separator
        matchedSlash = false;
      }
    }

    if (end === -1) return hasRoot ? '/' : '.';
    if (hasRoot && end === 1) return '//';
    return path.slice(0, end);
  },

  basename: function basename(path, ext) {
    if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
    assertPath(path);

    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path) return '';
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);
        if (code === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end) end = firstNonSlashEnd;else if (end === -1) end = path.length;
      return path.slice(start, end);
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else if (end === -1) {
          // We saw the first non-path separator, mark this as the end of our
          // path component
          matchedSlash = false;
          end = i + 1;
        }
      }

      if (end === -1) return '';
      return path.slice(start, end);
    }
  },

  extname: function extname(path) {
    assertPath(path);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;
    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1)
            startDot = i;
          else if (preDotState !== 1)
            preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return '';
    }
    return path.slice(startDot, end);
  },

  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== 'object') {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
    }
    return _format('/', pathObject);
  },

  parse: function parse(path) {
    assertPath(path);

    var ret = { root: '', dir: '', base: '', ext: '', name: '' };
    if (path.length === 0) return ret;
    var code = path.charCodeAt(0);
    var isAbsolute = code === 47 /*/*/;
    var start;
    if (isAbsolute) {
      ret.root = '/';
      start = 1;
    } else {
      start = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1;

    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;

    // Get non-dir info
    for (; i >= start; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
    // We saw a non-dot character immediately before the dot
    preDotState === 0 ||
    // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);else ret.base = ret.name = path.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        ret.name = path.slice(1, startDot);
        ret.base = path.slice(1, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
      }
      ret.ext = path.slice(startDot, end);
    }

    if (startPart > 0) ret.dir = path.slice(0, startPart - 1);else if (isAbsolute) ret.dir = '/';

    return ret;
  },

  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null
};

posix.posix = posix;

module.exports = posix;


/***/ }),

/***/ "./src/scripts/helpers.ts":
/*!********************************!*\
  !*** ./src/scripts/helpers.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.applyAnimation = exports.getElement = void 0;
const loader_1 = __webpack_require__(/*! ./loader */ "./src/scripts/loader.ts");
/**
   * Effectue une animation de commutation sur un élément HTML spécifié.
   * @param element - L'élément HTML sur lequel l'animation doit être appliquée.
   * @param fromInToOut - Détermine si l'animation va de l'état "in" (entrée) à l'état "out" (sortie) ou vice versa.
   * @param animation - Les informations sur le type et la position de l'animation (facultatif).
   */
function switchAnimation(element, fromInToOut, animCSSProps, clearAfterApplying) {
    var _a, _b;
    if (animCSSProps) {
        const animeType = (_a = animCSSProps.animationType) !== null && _a !== void 0 ? _a : "fade";
        const animePosition = (_b = animCSSProps.animationPosition) !== null && _b !== void 0 ? _b : "top";
        (0, loader_1.loadCSSAnimation)(animCSSProps); // Charge les animations CSS si ce n'est pas déjà fait.
        if (fromInToOut) {
            element.classList.remove(`${animeType}-out-${animePosition}`);
            element.classList.add(`${animeType}-in-${animePosition}`);
            if (clearAfterApplying && clearAfterApplying === true) {
                setTimeout(() => {
                    element.classList.remove(`${animeType}-in-${animePosition}`);
                }, 1000);
            }
        }
        else {
            element.classList.remove(`${animeType}-in-${animePosition}`);
            element.classList.add(`${animeType}-out-${animePosition}`);
            if (clearAfterApplying && clearAfterApplying === true) {
                setTimeout(() => {
                    element.classList.remove(`${animeType}-out-${animePosition}`);
                }, 1000);
            }
        }
    }
}
function getElement(options) {
    const _element = options.element;
    return {
        element: _element instanceof HTMLElement ? _element : _element === null || _element === void 0 ? void 0 : _element.element,
        animateElement: _element instanceof HTMLElement ? undefined : _element === null || _element === void 0 ? void 0 : _element.animateElement,
    };
}
exports.getElement = getElement;
function applyAnimation(element, animateElement, fromInToOut, options, animCSSProps) {
    switchAnimation(animateElement !== null && animateElement !== void 0 ? animateElement : element, fromInToOut, animCSSProps);
    if (options.display !== null) {
        setTimeout(() => {
            var _a;
            element.style.display = (_a = options.display) !== null && _a !== void 0 ? _a : "none";
        }, options.delay || 0);
    }
    else {
        setTimeout(() => {
            element.remove();
        }, options.delay || 0);
    }
}
exports.applyAnimation = applyAnimation;


/***/ }),

/***/ "./src/scripts/loader.ts":
/*!*******************************!*\
  !*** ./src/scripts/loader.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __dirname = "/";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const path_1 = __importDefault(__webpack_require__(/*! path */ "../../node_modules/path-browserify/index.js"));
// Structure de cache pour stocker les mixins déjà transformés
const mixinCache = new Map();
/**
 * Fonction principale pour charger, transformer et appliquer les mixins avec des paramètres optionnels.
 */
function loadCSSAnimation(options) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Déterminer les noms des mixins pour "in" et "out"
            const oppositeEnter = options.animationEnter === 'in' ? 'out' : 'in';
            const mixinNames = [
                `${options.animationType}-${options.animationEnter}-${options.animationPosition}`,
                `${options.animationType}-${oppositeEnter}-${options.animationPosition}`
            ];
            let combinedCSS = '';
            for (const mixinName of mixinNames) {
                // Vérifier si le mixin est déjà dans le cache
                if (mixinCache.has(mixinName)) {
                    combinedCSS += mixinCache.get(mixinName);
                }
                else {
                    const SCSSContent = yield fetchSCSS(options.animationType);
                    const css = convertMixinToCSS(SCSSContent, mixinName, options.animCSSProps);
                    // Stocker dans le cache si le mixin est transformé avec succès
                    if (css) {
                        mixinCache.set(mixinName, css);
                        combinedCSS += css;
                    }
                }
            }
            if (combinedCSS) {
                addCSSToDocument(combinedCSS); // Ajoute le CSS transformé à la balise <style>
            }
            else {
                console.error('Mixin non trouvé.');
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
/**
 * Fonction pour charger le contenu d'un fichier SCSS
 */
function fetchSCSS(animationType) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = path_1.default.resolve(__dirname, `node_modules/@easylibs/animation/dist/assets/styles/${animationType}.scss`);
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error('Erreur lors du chargement du fichier SCSS');
        }
        return response.text();
    });
}
/**
 * Fonction pour trouver et convertir un mixin en CSS, avec gestion des paramètres optionnels.
 */
function convertMixinToCSS(SCSSContent, mixinName, animCSSProps) {
    // Trouver le début du mixin spécifié
    const mixinStartRegex = new RegExp(`(@mixin ${mixinName}\\(.*?\\)\\s*{)`, 's');
    let mixinStartMatch = mixinStartRegex.exec(SCSSContent);
    if (!mixinStartMatch)
        return null;
    // Extraire le contenu à partir du début du mixin
    const startIndex = mixinStartMatch.index + mixinStartMatch[1].length;
    const SCSSContentAfterMixin = SCSSContent.substring(startIndex);
    // Chercher le prochain '@' qui n'est pas immédiatement suivi par 'keyframes' après le mixin spécifié
    const mixinEndRegex = /@keyframes[\s\S]+?}([\s\S]*?)(?=@mixin|$)/;
    let mixinEndMatch = mixinEndRegex.exec(SCSSContentAfterMixin);
    if (!mixinEndMatch)
        return null;
    // Extraire tout le contenu jusqu'au prochain '@mixin' après les @keyframes
    const endIndex = mixinEndMatch.index + mixinEndMatch[0].length;
    let mixinContent = SCSSContent.substring(mixinStartMatch.index, startIndex + endIndex);
    // Remplacer les variables animCSSProps dans le contenu extrait, si fourni
    if (animCSSProps) {
        Object.keys(animCSSProps).forEach(key => {
            const paramRegex = new RegExp(`\\$${key}`, 'g');
            mixinContent = mixinContent.replace(paramRegex, animCSSProps[key]);
        });
    }
    return parseSCSSToCSS(mixinContent, animCSSProps);
}
function parseSCSSToCSS(mixinContent, animCSSProps) {
    // Pré-nettoyage pour supprimer les déclarations @mixin et les blocs @keyframes
    let cleanedContent = mixinContent.replace(/@mixin\s+[^\{]+\{/, '')
        .replace(/@keyframes\s+[^\{]+\{([^\}]+\})+\}/g, '');
    // Extraire les valeurs par défaut des paramètres du mixin
    const defaultValuesRegex = /\$([a-zA-Z0-9_-]+):\s*([^;]+);/g;
    let defaultValueMatches;
    let defaultValues = {};
    while ((defaultValueMatches = defaultValuesRegex.exec(cleanedContent)) !== null) {
        defaultValues[defaultValueMatches[1]] = defaultValueMatches[2].trim();
        // Supprimer la déclaration de la variable avec sa valeur par défaut
        cleanedContent = cleanedContent.replace(defaultValueMatches[0], '');
    }
    // Remplacer les variables dans le contenu du mixin, en gérant spécifiquement $element
    const variableRegex = /\$([a-zA-Z0-9_-]+)/g;
    cleanedContent = cleanedContent.replace(variableRegex, (match, varName) => {
        // Traitement spécial pour $element
        if (varName === 'element' && (!animCSSProps || !animCSSProps.hasOwnProperty(varName))) {
            return ''; // Remplacer par une chaîne vide si $element est non défini
        }
        else if (animCSSProps && animCSSProps.hasOwnProperty(varName)) {
            return animCSSProps[varName]; // Utiliser la valeur d'animCSSProps si disponible
        }
        else if (defaultValues.hasOwnProperty(varName)) {
            return defaultValues[varName]; // Sinon, utiliser la valeur par défaut
        }
        else {
            return match; // Conserver la variable non remplacée si non trouvée
        }
    });
    // Nettoyage final pour supprimer toute syntaxe résiduelle spécifique à SCSS
    cleanedContent = cleanedContent.trim()
        .replace(/^\{|\}$/g, '') // Supprimer les accolades extérieures
        .replace(/\#{\$(.*?)}/g, '') // Supprimer les interpolations SCSS restantes
        .replace(/(\r\n|\r|\n){2,}/g, '\n') // Réduire les sauts de ligne multiples
        .replace(/\s{2,}/g, ' '); // Réduire les espaces multiples
    return cleanedContent;
}
/**
 * Ajoute ou met à jour une balise <style> avec le CSS généré
 */
function addCSSToDocument(css) {
    let styleTag = document.getElementById('@animation-style');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = '@animation-style';
        document.head.appendChild(styleTag);
    }
    styleTag.innerHTML += css; // Ajoute le nouveau CSS à la balise <style>
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**************************!*\
  !*** ./src/animation.ts ***!
  \**************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const helpers_1 = __webpack_require__(/*! ./scripts/helpers */ "./src/scripts/helpers.ts");
/**
 * Provides animation functionalities for HTML elements.
 */
class Animation {
    /**
     * Stops the propagation of the given event.
     * @param e The event to stop propagation for.
     */
    static stopPropagation(e) {
        e.stopPropagation();
    }
    /**
     * Performs an entrance animation on the specified HTML element.
     * @param options Configuration options for the animation.
     */
    animeIn(options, animCSSProps) {
        const { element, animateElement } = (0, helpers_1.getElement)(options);
        const fromInToOut = true;
        (0, helpers_1.applyAnimation)(element, animateElement, fromInToOut, options, animCSSProps);
    }
    /**
     * Performs an exit animation on the specified HTML element, then hides or removes it.
     * @param options Configuration options for the animation.
     */
    animeOut(options, animCSSProps) {
        const { element, animateElement } = (0, helpers_1.getElement)(options);
        const fromInToOut = false;
        (0, helpers_1.applyAnimation)(element, animateElement, fromInToOut, options, animCSSProps);
    }
    /**
     * Performs either an entrance or exit animation on the specified HTML element in response to open and close button events.
     * @param options Configuration options for the animation, including elements and buttons involved.
     */
    animeInOut(options) {
        var _a, _b;
        let modalIsOpen = false;
        const toggleModal = () => {
            if (!modalIsOpen) {
                this.animeIn(options);
            }
            else {
                this.animeOut(options);
            }
            modalIsOpen = !modalIsOpen;
        };
        (_a = options.openButton) === null || _a === void 0 ? void 0 : _a.addEventListener("click", toggleModal);
        (_b = options.closeButton) === null || _b === void 0 ? void 0 : _b.addEventListener("click", toggleModal);
    }
}
exports["default"] = Animation;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=animation.js.map