(function ($, $document) {
  "use strict";

    const   URL = document.location.pathname,
            MASTER = "master",
            CFM_EDITOR_SEL = ".content-fragment-editor",
            CMF_SELECTOR = "[data-granite-coral-multifield-name$='CMF']",
            CMF_TEMPLATE = "Template";
            
    let initialized = false;

  const SELECTORS = {
    container: ".additional-offers-accordion",
    multifieldItem: "coral-multifield-item",
    formField: "input, textarea, select, .coral-Form-field",
    icon: ".coral-Icon"
  };

  const CLASSES = {
    headerBtn: "coral-Button coral-Button--quiet coral-Button--block cf-acc-header",
    headerTitle: "cf-acc-title",
    iconChevronRight: "coral-Icon coral-Icon--sizeS coral-Icon--chevronRight",
    iconChevronDown: "coral-Icon coral-Icon--sizeS coral-Icon--chevronDown",
    innerWrapper: "cf-acc-inner"
  };

  const LABELS = {
    accordionTitle: "Additional Offer"
  };

  const SETTINGS = {
    animationSpeed: 140
  };

    if( !isCFEditor() ){
        return;
    }

    init();

    function init(){
        if(initialized){
            return;
        }

        initialized = true;

        window.Dam.CFM.Core.registerReadyHandler(() => {
            extendRequestSave();

            addCMFMultiFieldListener();
            initAccordion();

            Dam.CFM.editor.UI.addBeforeApplyHandler( () => {
                Dam.CFM.EditSession.notifyActiveSession();
                Dam.CFM.EditSession.setDirty(true);
            });
        });
    }

    function addCMFMultiFieldListener(){
        const $cmfMultis = $(CMF_SELECTOR);

        createMultiFieldTemplates();

        _.each($cmfMultis, (cmfMulti) => {
            Coral.commons.ready(cmfMulti, splitKeyValueJSONIntoFields);
        })
    }

    function splitKeyValueJSONIntoFields(cmfMFField){
        const $cmfMFField = $(cmfMFField),
              cmfMFName = $cmfMFField.attr("data-granite-coral-multifield-name");

        _.each(cmfMFField.items.getAll(), function(item) {
            const $content = $(item).find("coral-multifield-item-content");
            let jsonData = $content.find("[name=" + cmfMFName + "]").val();

            if(!jsonData){
                return;
            }

            jsonData = JSON.parse(jsonData);

            $content.html(getParkedMFHtml($cmfMFField));

            fillMultiFieldItem(item, jsonData);
        });
    }

    function fillMultiFieldItem(mfItem, jsonData){
        _.each(jsonData, function(fValue, fKey){
            const field = mfItem.querySelector("[name='" + fKey + "']");

            if(!field) return;

            if(field.tagName === "CORAL-DATEPICKER"){
                field.valueAsDate = new Date(fValue);
            }else{
                field.value = fValue;
            }
        });
    }

    function createMultiFieldTemplates(){
        const $cmfMultis = $(CMF_SELECTOR);

        _.each($cmfMultis, (cmfMulti) => {
            let $cmfMulti = $(cmfMulti);

            $cmfMulti.find("template").remove();

            let template = '<template coral-multifield-template=""><div>' + getParkedMFHtml($cmfMulti) + '</div></template>';

            hideTemplateTab($cmfMulti);

            $cmfMulti.append(template);
        })
    }

    function getParkedMFHtml($cmfMulti){
        let $tabView = $cmfMulti.closest("coral-tabview");
        return $($tabView.find("coral-panel").get(getTemplateIndex($cmfMulti))).find("coral-panel-content").html();
    }

    function getTemplateIndex($cmfMulti){
        let cmfMultiName = $cmfMulti.attr("data-granite-coral-multifield-name"),
            cmfMultiTemplateName =  cmfMultiName + CMF_TEMPLATE,
            $tabView = $cmfMulti.closest("coral-tabview"),
            $tabLabels = $tabView.find("coral-tab-label"),
            templateIndex;

        _.each($tabLabels, (tabLabel, index) => {
            if($(tabLabel).html().trim() == cmfMultiTemplateName){
                templateIndex = index;
            }
        })

        return templateIndex;
    }

    function hideTemplateTab($cmfMulti){
        let $tabView = $cmfMulti.closest("coral-tabview");
        $($tabView.find("coral-tab").get(getTemplateIndex($cmfMulti))).hide();
    }

    function getCompositeFieldsData(){
        const $cmfMultis = $(CMF_SELECTOR), allData = {};

        _.each($cmfMultis, (cmfMulti) => {
            let $cmfMulti = $(cmfMulti),
                kevValueData = [],
                cmfName = $cmfMulti.attr("data-granite-coral-multifield-name");

            _.each(cmfMulti.items.getAll(), function(item) {
                const $fields = $(item.content).find("[name]"),
                    cmfData = {};

                _.each($fields, function(field){
                    if(canBeSkipped(field)){
                        return;
                    }

                    cmfData[field.getAttribute("name")] =  field.value;
                });

                kevValueData.push(JSON.stringify(cmfData));
            });

            allData[cmfName] = kevValueData;
        })

        return allData ;
    }

    function canBeSkipped(field){
        return (($(field).attr("type") == "hidden") || !field.value);
    }

    function extendRequestSave(){
        const CFM = window.Dam.CFM,
            orignFn = CFM.editor.Page.requestSave;

        CFM.editor.Page.requestSave = requestSave;

        function requestSave(callback, options) {
            orignFn.call(this, callback, options);

            const kvData = getCompositeFieldsData();

            if(_.isEmpty(kvData)){
                return;
            }

            const url = CFM.EditSession.fragment.urlBase + ".cfm.content.json",
                variation = getVariation(),
                createNewVersion = (options && !!options.newVersion) || false;

            let data = {
                ":type": "multiple",
                ":newVersion": createNewVersion,
                "_charset_": "utf-8"
            };

            if(variation !== MASTER){
                data[":variation"] = variation;
            }

            const request = {
                url: url,
                method: "post",
                dataType: "json",
                data: _.merge(data, kvData),
                cache: false
            };

            CFM.RequestManager.schedule({
                request: request,
                type: CFM.RequestManager.REQ_BLOCKING,
                condition: CFM.RequestManager.COND_EDITSESSION,
                ui: (options && options.ui)
            });
        }
    }

    function getVariation(){
        var variation = $(CFM_EDITOR_SEL).data("variation");
    return variation || "master";
  }

  function isCFEditor() {
    return (
      URL.indexOf("/editor.html") == 0 ||
      URL.indexOf("/mnt/overlay/dam/cfm/admin/content/v2/fragment-editor.html") == 0
    );
  }

  /* ------------------ Accordion Functions ------------------ */

  function initAccordion() {
    var $containers = $(SELECTORS.container);
    if ($containers.length === 0) return;

    $containers.each(function () {
      var $container = $(this);
      if ($container.data("cfAccordionInit")) return;
      $container.data("cfAccordionInit", true);

      function getItems() {
        return $container.find(SELECTORS.multifieldItem);
      }

      function createHeader($item) {
        if ($item.data("cfHeaderCreated")) return;

        var $btn = $(`
          <button type="button" class="${CLASSES.headerBtn}" aria-expanded="false"
            style="text-align:left; padding:8px; margin:4px 0; width:100%; border:1px solid #ccc; border-radius:4px; background:#f9f9f9;">
            <span class="${CLASSES.headerTitle}" style="font-weight:bold;">${LABELS.accordionTitle}</span>
            <span class="${CLASSES.iconChevronRight}" aria-hidden="true" style="float:right;"></span>
          </button>
        `);

        $item.children().first().before($btn);

        var $fields = $item.children()
          .not($btn)
          .not("coral-icon")
          .not("coral-buttonlist")
          .not("[is*='coral-button']")
          .not("[is='coral-Button']");

        $fields = $fields.filter(function() {
          var $this = $(this);
          var isAttr = $this.attr('is');
          
          if (isAttr && (isAttr.includes('coral-button') || isAttr.includes('coral-Button'))) {
            return false;
          }
          
          if ($this.find('[is*="coral-button"]').length || $this.find('[is*="coral-Button"]').length) {
            return false;
          }
          
          return true;
        });
        $fields.wrapAll(`<div class="${CLASSES.innerWrapper}" 
            style="padding:8px; border:1px solid #ccc; border-top:none; border-radius:0 0 4px 4px;"></div>`);
        var $inner = $item.find(`.${CLASSES.innerWrapper}`);
        $inner.hide();

        $item.data("cfHeaderCreated", true);

        var $icon = $btn.find(SELECTORS.icon).first();

        function toggle() {
          var expanded = $btn.attr("aria-expanded") === "true";
          if (expanded) {
            $inner.slideUp(SETTINGS.animationSpeed);
            $btn.attr("aria-expanded", "false");
            $icon.removeClass(CLASSES.iconChevronDown).addClass(CLASSES.iconChevronRight);
          } else {
            $inner.slideDown(SETTINGS.animationSpeed);
            $btn.attr("aria-expanded", "true");
            $icon.removeClass(CLASSES.iconChevronRight).addClass(CLASSES.iconChevronDown);
          }
        }

        $btn.on("click keydown", function (e) {
          if (e.type === "click" || (e.type === "keydown" && (e.key === "Enter" || e.key === " "))) {
            toggle();
            e.preventDefault();
          }
        });
      }

      getItems().each(function () {
        createHeader($(this));
      });

      try {
        var mo = new MutationObserver(function () {
          var $new = getItems().filter(function () {
            return !$(this).data("cfHeaderCreated");
          });
          $new.each(function () {
            createHeader($(this));
          });
        });
        mo.observe($container[0], { childList: true, subtree: true });
      } catch (e) {}
    });
  }

  $document.on("foundation-contentloaded", initAccordion);
  setTimeout(initAccordion, 300);
  setInterval(initAccordion, 1000);

})(jQuery, jQuery(document));