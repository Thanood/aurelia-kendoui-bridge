System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.progressbar.min'], function (_export) {
  'use strict';

  var inject, customAttribute, bindable, WidgetBase, generateBindables, constants, ProgressBar;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
      bindable = _aureliaTemplating.bindable;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_kendoProgressbarMin) {}],
    execute: function () {
      ProgressBar = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(ProgressBar, [{
          key: 'kEnabled',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function ProgressBar(element, widgetBase) {
          _classCallCheck(this, _ProgressBar);

          _defineDecoratedPropertyDescriptor(this, 'kEnabled', _instanceInitializers);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoProgressBar').bindToKendo('kEnabled', 'enable').linkViewModel(this);
        }

        ProgressBar.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        ProgressBar.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        ProgressBar.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        ProgressBar.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        ProgressBar.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _ProgressBar = ProgressBar;
        ProgressBar = inject(Element, WidgetBase)(ProgressBar) || ProgressBar;
        ProgressBar = generateBindables('kendoProgressBar')(ProgressBar) || ProgressBar;
        ProgressBar = customAttribute(constants.attributePrefix + 'progress-bar')(ProgressBar) || ProgressBar;
        return ProgressBar;
      })();

      _export('ProgressBar', ProgressBar);
    }
  };
});