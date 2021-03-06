System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../pdf/pdf', 'kendo.pivotgrid.min', 'kendo.pivot.fieldmenu.min'], function (_export) {
  'use strict';

  var inject, customElement, children, ViewResources, WidgetBase, generateBindables, constants, PDF, PivotGrid;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      children = _aureliaTemplating.children;
      ViewResources = _aureliaTemplating.ViewResources;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_pdfPdf) {
      PDF = _pdfPdf.PDF;
    }, function (_kendoPivotgridMin) {}, function (_kendoPivotFieldmenuMin) {}],
    execute: function () {
      PivotGrid = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(PivotGrid, [{
          key: 'templates',
          decorators: [children(constants.elementPrefix + 'template')],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function PivotGrid(element, widgetBase, viewResources) {
          _classCallCheck(this, _PivotGrid);

          _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoPivotGrid').linkViewModel(this).useViewResources(viewResources);
        }

        PivotGrid.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        PivotGrid.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        PivotGrid.prototype.recreate = function recreate() {
          this.widgetBase.useTemplates(this, 'kendoPivotGrid', this.templates);

          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        PivotGrid.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _PivotGrid = PivotGrid;
        PivotGrid = inject(Element, WidgetBase, ViewResources)(PivotGrid) || PivotGrid;
        PivotGrid = generateBindables('kendoPivotGrid')(PivotGrid) || PivotGrid;
        PivotGrid = customElement(constants.elementPrefix + 'pivot-grid')(PivotGrid) || PivotGrid;
        return PivotGrid;
      })();

      _export('PivotGrid', PivotGrid);
    }
  };
});