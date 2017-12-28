Type.registerNamespace('CUI');
Type.registerNamespace('CUI.Page');
if (typeof CUI.Page.PageComponent == "undefined") {
    CUI.Page.ICommandHandler = function() {
    };
    CUI.Page.ICommandHandler.registerInterface('CUI.Page.ICommandHandler');
    CUI.Page.PageComponent = function() {
    };
    CUI.Page.PageComponent.prototype = {
        init: function() {
        },
        getGlobalCommands: function() {
            return null;
        },
        getFocusedCommands: function() {
            return null;
        },
        handleCommand: function(commandId, properties, sequence) {
            return false;
        },
        canHandleCommand: function(commandId) {
            return false;
        },
        isFocusable: function() {
            return false;
        },
        receiveFocus: function() {
            return false;
        },
        yieldFocus: function() {
            return true;
        },
        getId: function() {
            return 'PageComponent';
        }
    };
    CUI.Page.PageComponent.registerClass('CUI.Page.PageComponent', null, CUI.Page.ICommandHandler);
}
Type.registerNamespace('RTE');
RTE.Rectangle = function RTE_Rectangle() {
};
RTE.Alignment = function() {
};
RTE.Alignment.prototype = {
    left: 0,
    right: 1,
    center: 2,
    justify: 3
};
RTE.Alignment.registerEnum('RTE.Alignment', false);
RTE.ApplyType = function() {
};
RTE.ApplyType.prototype = {
    tag: 0,
    className: 1,
    style: 2,
    attribute: 3
};
RTE.ApplyType.registerEnum('RTE.ApplyType', false);
RTE.ApplyRestrictions = function() {
};
RTE.ApplyRestrictions.prototype = {
    none: 0,
    nonBlock: 1
};
RTE.ApplyRestrictions.registerEnum('RTE.ApplyRestrictions', false);
RTE.EmbeddingInsertArgs = function RTE_EmbeddingInsertArgs() {
    this.$5j_0 = false;
    this.$BO_0 = null;
    this.$7b_0 = 0;
};
RTE.FontSizeInfo = function RTE_FontSizeInfo() {
};
RTE.FontFamilyInfo = function RTE_FontFamilyInfo() {
};
RTE.IAutocomplete = function() {
};
RTE.IAutocomplete.registerInterface('RTE.IAutocomplete');
RTE.ICommandProcessor = function() {
};
RTE.ICommandProcessor.registerInterface('RTE.ICommandProcessor');
RTE.InsertTableCommandType = function() {
};
RTE.InsertTableCommandType.prototype = {
    insert: 0,
    preview: 1,
    revertPreview: 2
};
RTE.InsertTableCommandType.registerEnum('RTE.InsertTableCommandType', false);
RTE.InsertTableOptions = function RTE_InsertTableOptions() {
};
RTE.InsertLinkDialogArguments = function RTE_InsertLinkDialogArguments() {
};
RTE.RangeEndPointOption = function() {
};
RTE.RangeEndPointOption.prototype = {
    startToEnd: 0,
    startToStart: 1,
    endToStart: 2,
    endToEnd: 3
};
RTE.RangeEndPointOption.registerEnum('RTE.RangeEndPointOption', false);
RTE.GalleryData = function RTE_GalleryData() {
    this.ribbonButtons = new Array(0);
};
RTE.StyleButton = function RTE_StyleButton() {
};
RTE.CommandType = function() {
};
RTE.CommandType.prototype = {
    command: 0,
    preview: 1,
    previewRevert: 2
};
RTE.CommandType.registerEnum('RTE.CommandType', false);
RTE.TableCellInfo = function RTE_TableCellInfo() {
};
RTE.TableColumnInfo = function RTE_TableColumnInfo() {
};
RTE.TableGrid = function RTE_TableGrid() {
};
RTE.CircularArray = function RTE_CircularArray($p0) {
    this.$2f_0 = new Array($p0);
};
RTE.CircularArray.prototype = {
    $2f_0: null,
    $2j_0: 0,
    $13_0: 0,
    push: function RTE_CircularArray$push($p0) {
        this.$2f_0[this.$2j_0] = $p0;
        this.$2j_0++;
        if (this.$2j_0 >= this.$2f_0.length) {
            this.$2j_0 = 0;
        }
        if (this.$13_0 < this.$2f_0.length) {
            this.$13_0++;
        }
    },
    pop: function RTE_CircularArray$pop() {
        if (this.$13_0 <= 0) {
            return null;
        }
        this.$2j_0--;
        this.$13_0--;
        var $v_0 = this.$2f_0[this.$2j_0];

        this.$2f_0[this.$2j_0] = null;
        return $v_0;
    },
    get_length: function RTE_CircularArray$get_length() {
        return this.$13_0;
    },
    getItemAt: function RTE_CircularArray$getItemAt($p0) {
        if ($p0 >= this.$13_0) {
            return null;
        }
        var $v_0 = this.$2j_0 - this.$13_0 + $p0;

        if ($v_0 < 0) {
            $v_0 += this.$2f_0.length;
        }
        return this.$2f_0[$v_0];
    }
};
RTE.HtmlTagName = function RTE_HtmlTagName() {
};
RTE.SelectionNodesProcessor = function RTE_SelectionNodesProcessor() {
};
RTE.SelectionNodesProcessor.prototype = {
    $O_0: null,
    $5E_0: null,
    setSelectionSettings: function RTE_SelectionNodesProcessor$setSelectionSettings($p0) {
        this.$O_0 = $p0;
        this.$5E_0 = null;
    },
    get_parentElement: function RTE_SelectionNodesProcessor$get_parentElement() {
        return this.$O_0.parentElement();
    },
    get_range: function RTE_SelectionNodesProcessor$get_range() {
        return this.$O_0;
    },
    get_innerNodes: function RTE_SelectionNodesProcessor$get_innerNodes() {
        if (!this.$5E_0) {
            var $v_0 = this.$O_0.isEmpty();

            this.$5E_0 = this.$O_0.getReducedInnerNodes(!$v_0);
            RTE.RteUtility.$Kk(this.$5E_0);
        }
        return this.$5E_0;
    }
};
RTE.ApplyOnSelectionProcessor = function RTE_ApplyOnSelectionProcessor() {
    this.$$d_$Ex_1 = Function.createDelegate(this, this.$Ex_1);
    this.$$d_$Ez_1 = Function.createDelegate(this, this.$Ez_1);
    this.$$d_$F5_1 = Function.createDelegate(this, this.$F5_1);
    this.$22_1 = new RTE.NodeDictionaryCache();
    RTE.ApplyOnSelectionProcessor.initializeBase(this);
};
RTE.ApplyOnSelectionProcessor.$F6 = function RTE_ApplyOnSelectionProcessor$$F6($p0, $p1) {
    if (RTE.ApplyOnSelectionProcessor.$5e($p0)) {
        var $v_0 = $p0.ownerDocument.createElement($p1.$3O_1[0]);

        SP.UI.UIUtility.insertBefore($v_0, $p0);
        $v_0.appendChild($p0);
    }
};
RTE.ApplyOnSelectionProcessor.$F0 = function RTE_ApplyOnSelectionProcessor$$F0($p0, $p1) {
    var $v_0 = RTE.ApplyOnSelectionProcessor.$F4($p0, $p1.$C_1);

    $p1.$5o_1($v_0);
};
RTE.ApplyOnSelectionProcessor.$AU = function RTE_ApplyOnSelectionProcessor$$AU($p0, $p1) {
    var $v_0 = RTE.ApplyOnSelectionProcessor.$AS($p0, $p1.$U_1, $p1.$C_1);

    $p1.$5o_1($v_0);
};
RTE.ApplyOnSelectionProcessor.$F4 = function RTE_ApplyOnSelectionProcessor$$F4($p0, $p1) {
    if (RTE.ApplyOnSelectionProcessor.$5e($p0)) {
        var $v_0 = $p0.ownerDocument.createElement('SPAN');

        SP.UI.UIUtility.insertBefore($v_0, $p0);
        $v_0.appendChild($p0);
        $v_0.className = $p1;
        return $v_0;
    }
    return $p0;
};
RTE.ApplyOnSelectionProcessor.$AS = function RTE_ApplyOnSelectionProcessor$$AS($p0, $p1, $p2) {
    if (RTE.ApplyOnSelectionProcessor.$5e($p0)) {
        var $v_0 = $p0.ownerDocument.createElement('SPAN');

        SP.UI.UIUtility.insertBefore($v_0, $p0);
        $v_0.appendChild($p0);
        $v_0.style[$p1] = $p2;
        return $v_0;
    }
    return $p0;
};
RTE.ApplyOnSelectionProcessor.$Ey = function RTE_ApplyOnSelectionProcessor$$Ey($p0, $p1) {
    if (RTE.ApplyOnSelectionProcessor.$5e($p0)) {
        var $v_0 = $p0.ownerDocument.createElement('SPAN');

        SP.UI.UIUtility.insertBefore($v_0, $p0);
        $v_0.appendChild($p0);
        $v_0[$p1.$U_1] = $p1.$C_1;
    }
};
RTE.ApplyOnSelectionProcessor.$5e = function RTE_ApplyOnSelectionProcessor$$5e($p0) {
    var $v_0 = RTE.RteUtility.$1y($p0, true) && (!$p0.previousSibling || RTE.RteUtility.$N($p0.previousSibling) || RTE.RteUtility.$1P($p0.previousSibling)) && (!$p0.nextSibling || RTE.RteUtility.$N($p0.nextSibling) || RTE.RteUtility.$1P($p0.nextSibling));

    return !$v_0;
};
RTE.ApplyOnSelectionProcessor.$Ha = function RTE_ApplyOnSelectionProcessor$$Ha($p0, $p1) {
};
RTE.ApplyOnSelectionProcessor.prototype = {
    $3O_1: null,
    $2I_1: null,
    $6n_1: null,
    $3N_1: null,
    $12_1: 0,
    $U_1: null,
    $C_1: null,
    $46_1: null,
    $D4_1: 0,
    $3f_1: null,
    $2Y_1: null,
    setSettings: function RTE_ApplyOnSelectionProcessor$setSettings($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8, $p9) {
        RTE.SelectionNodesProcessor.prototype.setSelectionSettings.call(this, $p0);
        this.$12_1 = $p1;
        this.$3O_1 = $p2;
        this.$2I_1 = $p3;
        this.$6n_1 = $p9;
        this.$U_1 = $p4;
        this.$C_1 = $p5;
        this.$46_1 = $p6;
        this.$D4_1 = !RTE.SU.$7($p8) ? $p8 : 0;
        this.$3N_1 = !RTE.SU.$7($p7) ? $p7 : new Array(0);
        if (!RTE.SU.$2(this.$U_1)) {
            this.$3N_1[this.$3N_1.length] = this.$U_1;
        }
        this.$22_1 = new RTE.NodeDictionaryCache();
        if (!this.$3O_1) {
            this.$3O_1 = [];
        }
        if (!$p3) {
            this.$2I_1 = [];
        }
        if (!this.$12_1) {
            this.$3f_1 = RTE.ApplyOnSelectionProcessor.$F6;
            this.$2Y_1 = RTE.ApplyOnSelectionProcessor.$Ha;
        }
        else if (this.$12_1 === 1) {
            var $v_0 = $p0.getEditableRegion();
            var $v_1 = RTE.Canvas.getCachedRestriction($v_0, 'UseInlineStyle', false);

            if ($v_1) {
                this.$12_1 = 2;
                this.$3f_1 = RTE.ApplyOnSelectionProcessor.$AU;
                this.$2Y_1 = this.$$d_$F5_1;
                var $v_2 = $p0.$4_0;

                this.$C_1 = RTE.RteUtility.$I5($v_2.ownerDocument, $v_2, this.$C_1, this.$U_1);
            }
            else {
                this.$3f_1 = RTE.ApplyOnSelectionProcessor.$F0;
                this.$2Y_1 = this.$$d_$Ez_1;
            }
        }
        else if (this.$12_1 === 2) {
            this.$3f_1 = RTE.ApplyOnSelectionProcessor.$AU;
            this.$2Y_1 = this.$$d_$F5_1;
        }
        else if (this.$12_1 === 3) {
            this.$3f_1 = RTE.ApplyOnSelectionProcessor.$Ey;
            this.$2Y_1 = this.$$d_$Ex_1;
        }
    },
    $EI_1: function RTE_ApplyOnSelectionProcessor$$EI_1() {
        var $v_0 = this.$O_0.getCurrentStateNode();

        return !this.$6x_1($v_0);
    },
    $DM_1: function RTE_ApplyOnSelectionProcessor$$DM_1($p0) {
        return RTE.RteUtility.$54($p0.tagName, this.$3O_1);
    },
    $DK_1: function RTE_ApplyOnSelectionProcessor$$DK_1($p0) {
        if (this.$12_1 === 1) {
            var $v_0 = $p0.className;

            if (this.$4C_1) {
                for (var $v_1 = 0; $v_1 < this.$2I_1.length; $v_1++) {
                    if ($v_0.indexOf(this.$2I_1[$v_1]) !== -1) {
                        return true;
                    }
                }
            }
            else {
                return RTE.RteUtility.$6P($p0, this.$C_1);
            }
        }
        return false;
    },
    $DL_1: function RTE_ApplyOnSelectionProcessor$$DL_1($p0) {
        var $v_0 = $p0.style[this.$U_1];

        if ($v_0 === this.$C_1 || this.$4C_1 && !RTE.SU.$2($v_0)) {
            return true;
        }
        return false;
    },
    $DJ_1: function RTE_ApplyOnSelectionProcessor$$DJ_1($p0) {
        var $v_0 = $p0.getAttribute(this.$U_1);

        if ($v_0 === this.$C_1) {
            return true;
        }
        return false;
    },
    $D9_1: function RTE_ApplyOnSelectionProcessor$$D9_1($p0) {
        if ($p0.nodeType === 1) {
            if (this.$4C_1) {
                var $v_0 = this.$DM_1($p0);
                var $v_1 = this.$DK_1($p0);

                if (this.$U_1) {
                    var $v_2 = this.$DL_1($p0);
                    var $v_3 = this.$DJ_1($p0);

                    return $v_0 || $v_1 || $v_2 || $v_3;
                }
                return $v_0 || $v_1;
            }
            else if (this.$12_1 === 1) {
                return this.$DK_1($p0);
            }
            else if (!this.$12_1) {
                return this.$DM_1($p0);
            }
            else if (this.$12_1 === 3) {
                return this.$DJ_1($p0);
            }
            else if (this.$12_1 === 2) {
                return this.$DL_1($p0);
            }
        }
        return false;
    },
    $Bx_1: function RTE_ApplyOnSelectionProcessor$$Bx_1($p0) {
        var $v_0 = $p0;

        while ($v_0 && !RTE.Canvas.$i($v_0)) {
            if (this.$D9_1($v_0)) {
                return $v_0;
            }
            $v_0 = $v_0.parentNode;
        }
        return null;
    },
    $6x_1: function RTE_ApplyOnSelectionProcessor$$6x_1($p0) {
        var $v_0 = false;
        var $v_1 = this.$22_1.getEntry($p0);

        if (!RTE.SU.$7($v_1)) {
            return $v_1;
        }
        if ((this.$C_1 || this.$46_1) && this.$U_1 && this.$U_1.toLowerCase() !== 'textdecoration') {
            var $v_3 = RTE.RteUtility.$1c($p0);

            if ($v_3) {
                var $v_4 = $v_3[this.$U_1];

                if (this.$C_1 && $v_4 === this.$C_1) {
                    this.$62_1($p0, true);
                    return true;
                }
                if (this.$46_1 && $v_4 === this.$46_1) {
                    this.$62_1($p0, false);
                    return false;
                }
                if (this.$U_1 === 'fontWeight' && this.$C_1 === 'bold' && typeof $v_4 === 'number') {
                    $v_0 = $v_4 > 400;
                    this.$62_1($p0, $v_0);
                    return $v_0;
                }
            }
        }
        var $v_2 = this.$Bx_1($p0);

        if ($v_2 && $v_2.parentNode) {
            $v_0 = true;
        }
        this.$62_1($p0, $v_0);
        return $v_0;
    },
    $62_1: function RTE_ApplyOnSelectionProcessor$$62_1($p0, $p1) {
        if (!RTE.RteUtility.$1P($p0)) {
            this.$22_1.addEntry($p0, $p1);
        }
    },
    queryApply: function RTE_ApplyOnSelectionProcessor$queryApply() {
        this.$22_1 = new RTE.NodeDictionaryCache();
        var $v_0 = new RTE.CommandState();

        $v_0.$B_0 = true;
        $v_0.$1I_0 = !this.$EI_1();
        return $v_0;
    },
    process: function RTE_ApplyOnSelectionProcessor$process() {
        if (this.$EI_1()) {
            this.apply();
        }
        else {
            this.remove();
        }
    },
    apply: function RTE_ApplyOnSelectionProcessor$apply() {
        this.$22_1 = new RTE.NodeDictionaryCache();
        var $v_0 = this.$O_0.isEmpty();
        var $v_1 = !$v_0 ? this.get_innerNodes() : [];

        if (!$v_1.length) {
            var $v_2 = this.$O_0.$4_0.ownerDocument;
            var $v_3 = null;

            switch (this.$12_1) {
            case 0:
                $v_3 = $v_2.createElement(this.$3O_1[0]);
                break;
            case 2:
                $v_3 = $v_2.createElement('SPAN');
                $v_3.style[this.$U_1] = this.$C_1;
                break;
            case 3:
                $v_3 = $v_2.createElement('SPAN');
                $v_3.setAttribute(this.$U_1, this.$C_1);
                break;
            case 1:
                $v_3 = $v_2.createElement('SPAN');
                $v_3.className = this.$C_1;
                break;
            }
            this.$5o_1($v_3);
            this.$DX_1();
            SP.UI.UIUtility.insertBefore($v_3, this.$O_0.$4_0);
            this.$O_0.moveToStartOfNode($v_3);
            this.$7s_1($v_3);
            if (RTE.RteUtility.$40($v_3)) {
                RTE.RteUtility.removeNodeAndKeepChildNodes($v_3);
            }
        }
        else {
            this.$AQ_1($v_1);
        }
        if (!$v_0) {
            this.$O_0.normalize();
        }
        this.$O_0.resetCacheRange();
    },
    $Ez_1: function RTE_ApplyOnSelectionProcessor$$Ez_1($p0, $p1) {
        if (RTE.RteUtility.$1P($p0) || this.$53_1($p0)) {
            return;
        }
        RTE.RteUtility.$26($p0, $p1.$C_1, $p1.$2I_1);
        $p1.$5o_1($p0);
    },
    $F5_1: function RTE_ApplyOnSelectionProcessor$$F5_1($p0, $p1) {
        if (RTE.RteUtility.$1P($p0) || this.$53_1($p0)) {
            return;
        }
        if ($p0.style) {
            RTE.SnapshotManager.setCurrentRegionDirtyIf($p0.style[$p1.$U_1] !== $p1.$C_1);
            $p0.style[$p1.$U_1] = $p1.$C_1;
        }
        $p1.$5o_1($p0);
    },
    $5o_1: function RTE_ApplyOnSelectionProcessor$$5o_1($p0) {
        if (this.$U_1 === 'color' && $p0.nodeType === 1) {
            var $v_0 = RTE.Canvas.getEditableRegion($p0);
            var $v_1 = $p0;

            while ($v_1 && $v_1 !== $v_0) {
                var $v_2 = RTE.RteUtility.$1c($v_1);

                if ($v_2 && $v_2.textDecoration !== 'none') {
                    $p0.style.textDecoration = $v_2.textDecoration;
                    return;
                }
                $v_1 = $v_1.parentNode;
            }
        }
    },
    $Ex_1: function RTE_ApplyOnSelectionProcessor$$Ex_1($p0, $p1) {
        if (RTE.RteUtility.$1P($p0) || this.$53_1($p0)) {
            return;
        }
        RTE.SnapshotManager.setCurrentRegionDirtyIf($p0.getAttribute($p1.$U_1) !== $p1.$C_1);
        $p0.setAttribute($p1.$U_1, $p1.$C_1);
    },
    $AQ_1: function RTE_ApplyOnSelectionProcessor$$AQ_1($p0) {
        var $v_0 = null;
        var $v_1 = this.$O_0.parentElement();
        var $v_2 = [];
        var $v_3 = [];

        for (var $v_4 = 0; $v_4 < $p0.length; $v_4++) {
            var $v_5 = $p0[$v_4];

            this.$5T_1($v_5);
            if (!RTE.RteUtility.$b($v_5, $v_0, $v_1)) {
                if ($v_5.nodeType === 3) {
                    this.$3f_1($v_5, this);
                }
                else {
                    this.$22_1.clearEntry($v_5);
                    this.$2Y_1($v_5, this);
                }
                if (this.$6x_1($v_5)) {
                    $v_0 = $v_5;
                }
            }
            if (Array.indexOf($v_2, $v_5.parentNode) === -1) {
                Array.add($v_2, $v_5.parentNode);
                Array.add($v_3, $v_5);
            }
        }
        for (var $v_6 = 0; $v_6 < $v_3.length; $v_6++) {
            this.$7s_1($v_3[$v_6]);
        }
    },
    $7s_1: function RTE_ApplyOnSelectionProcessor$$7s_1($p0) {
        if (!this.$12_1) {
            return;
        }
        if (this.$4C_1) {
            return;
        }
        var $v_0 = $p0.parentNode;

        if (!RTE.Canvas.isEditable($v_0) || RTE.Canvas.$i($v_0)) {
            return;
        }
        if (this.$53_1($v_0) && RTE.RteUtility.$1x($v_0, true) === RTE.RteUtility.$1e($v_0, true)) {
            return;
        }
        var $v_1 = $v_0.childNodes;
        var $v_2 = RTE.RteUtility.$N($v_0);
        var $v_3 = $v_1.length;

        for (var $v_4 = 0; $v_4 < $v_3; $v_4++) {
            var $v_5 = $v_1[$v_4];

            if (SP.UI.UIUtility.isTextNode($v_5) && ($v_5.nodeValue.replace(RTE.RteUtility.$2p, '') === '' || $v_2 && (!$v_5.nextSibling || !$v_5.previousSibling) && RTE.RteUtility.$6X($v_5.nodeValue, false))) {
                continue;
            }
            if ($v_5.nodeType === 3 && !RTE.ApplyOnSelectionProcessor.$5e($v_5)) {
                continue;
            }
            if (this.$D9_1($v_5)) {
                continue;
            }
            if (this.$6x_1($v_5)) {
                continue;
            }
            if (!RTE.RteUtility.$40($v_5) || $v_5.childNodes.length > 0) {
                return;
            }
        }
        for (var $v_6 = 0; $v_6 < $v_0.childNodes.length; $v_6++) {
            var $v_7 = $v_0.childNodes[$v_6];

            if (this.$12_1 === 1 && $v_7.className === this.$C_1 || this.$12_1 !== 1 && RTE.SU.$2($v_7.className)) {
                this.$5T_1($v_7);
            }
        }
        RTE.RteUtility.$Dv($v_0);
        if (this.$53_1($v_0)) {
            var $v_8 = document.createElement('SPAN');

            RTE.RteUtility.$k($v_0, $v_8);
            $v_0.appendChild($v_8);
            this.$2Y_1($v_8, this);
        }
        else {
            this.$22_1.clearEntry($p0);
            this.$2Y_1($v_0, this);
            this.$7s_1($v_0);
        }
    },
    $53_1: function RTE_ApplyOnSelectionProcessor$$53_1($p0) {
        if (this.$D4_1 === 1 && $p0.nodeType === 1) {
            if (RTE.RteUtility.$N($p0) || $p0.tagName === 'A') {
                return true;
            }
            if (this.$6n_1 && $p0.className) {
                for (var $v_0 = 0; $v_0 < this.$6n_1.length; $v_0++) {
                    if ($p0.className.indexOf(this.$6n_1[$v_0]) !== -1) {
                        return true;
                    }
                }
            }
        }
        return false;
    },
    $Kq_1: function RTE_ApplyOnSelectionProcessor$$Kq_1($p0) {
        if (RTE.RteUtility.$54($p0.tagName, this.$3O_1)) {
            var $v_0 = !RTE.SU.$2($p0.style.cssText);
            var $v_1 = !RTE.SU.$2($p0.className);

            if ($v_0 || $v_1) {
                var $v_2 = document.createElement('SPAN');

                if ($v_0) {
                    $v_2.style.cssText = $p0.style.cssText;
                }
                if ($v_1) {
                    $v_2.className = $p0.className;
                }
                RTE.RteUtility.$k($p0, $v_2);
                $p0.parentNode.replaceChild($v_2, $p0);
            }
            else {
                RTE.RteUtility.removeNodeAndKeepChildNodes($p0);
            }
            return true;
        }
        return false;
    },
    $Kg_1: function RTE_ApplyOnSelectionProcessor$$Kg_1($p0) {
        var $v_0 = $p0.className;

        RTE.RteUtility.$9Q($p0, RTE.ApplyOnSelectionProcessor.$23.$2I_1);
        var $v_1 = $p0.className;

        RTE.SnapshotManager.setCurrentRegionDirtyIf($v_0 !== $v_1);
        if ($v_1 === '') {
            $p0.removeAttribute('class');
            $p0.removeAttribute('className');
        }
        return $v_0 !== $v_1;
    },
    $Kp_1: function RTE_ApplyOnSelectionProcessor$$Kp_1($p0) {
        var $v_0 = false;

        if ($p0.style) {
            for (var $v_1 = 0; $v_1 < this.$3N_1.length; $v_1++) {
                var $v_2 = this.$3N_1[$v_1];
                var $v_3 = $p0.style[$v_2];

                if (!RTE.SU.$2($v_3)) {
                    RTE.SnapshotManager.setCurrentRegionDirty();
                    if ($p0.style.removeAttribute) {
                        $p0.style.removeAttribute($v_2);
                        $v_0 = true;
                    }
                    else {
                        $p0.style[$v_2] = '';
                        $v_0 = true;
                    }
                }
            }
        }
        if ($p0.nodeType === 1 && $p0.tagName === 'FONT') {
            for (var $v_4 = 0; $v_4 < this.$3N_1.length; $v_4++) {
                var $v_5 = RTE.ApplyOnSelectionProcessor.$Bc[this.$3N_1[$v_4]];

                if (!RTE.SU.$2($v_5)) {
                    $p0.removeAttribute($v_5);
                    $v_0 = true;
                }
            }
        }
        return $v_0;
    },
    $Ke_1: function RTE_ApplyOnSelectionProcessor$$Ke_1($p0) {
        var $v_0 = $p0.getAttribute(this.$U_1);

        if (!RTE.SU.$2($v_0)) {
            $p0.removeAttribute(this.$U_1);
            RTE.SnapshotManager.setCurrentRegionDirty();
            return true;
        }
        return false;
    },
    $5T_1: function RTE_ApplyOnSelectionProcessor$$5T_1($p0) {
        this.$22_1.clearEntry($p0);
        if (!SP.UI.UIUtility.isTextNode($p0)) {
            var $v_0 = this.$Kg_1($p0);
            var $v_1 = this.$Kp_1($p0);
            var $v_2 = this.$Ke_1($p0);
            var $v_3 = this.$Kq_1($p0);

            return $v_0 || $v_1 || $v_2 || $v_3;
        }
        return false;
    },
    $Kd_1: function RTE_ApplyOnSelectionProcessor$$Kd_1($p0, $p1) {
        var $v_0 = [];
        var $v_1 = this.$Bx_1($p0);

        if ($v_1) {
            var $v_2 = new RTE.CanvasRange('parent');

            $v_2.moveToNode($v_1);
            var $v_3 = $v_2.getReducedInnerNodes(true);

            $v_2.dispose();
            this.$5T_1($v_1);
            var $v_4 = this.$C_1;

            if (this.$2I_1 && this.$2I_1.length > 0 && this.$12_1 === 1) {
                this.$C_1 = RTE.RteUtility.$I7($v_1, this.$2I_1);
            }
            for (var $v_5 = 0; $v_5 < $v_3.length; $v_5++) {
                var $v_6 = $v_3[$v_5];

                if (!Array.contains($p1, $v_6) && !Array.contains($v_0, $v_6) && !RTE.RteUtility.$b(this.$O_0.$4_0, $v_6, $v_1) && !RTE.RteUtility.$b(this.$O_0.$3_0, $v_6, $v_1)) {
                    Array.add($v_0, $v_6);
                }
            }
            this.$AQ_1($v_0);
            this.$C_1 = $v_4;
        }
        else if (this.$46_1) {
            this.$22_1.clearEntry($p0);
            RTE.ApplyOnSelectionProcessor.$AS($p0, this.$U_1, this.$46_1);
        }
    },
    $4C_1: false,
    remove: function RTE_ApplyOnSelectionProcessor$remove() {
        var $v_0 = this.$O_0.isEmpty();

        this.$4C_1 = true;
        var $v_1 = !$v_0 ? this.get_innerNodes() : [];

        if (!$v_1.length) {
            this.$5T_1(this.$O_0.$4_0);
        }
        else {
            for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2];

                this.$5T_1($v_3);
                RTE.RteUtility.$Kj($v_3);
            }
        }
        this.$Dw_1(this.$O_0.$4_0, $v_1);
        this.$Dw_1(this.$O_0.$3_0, $v_1);
        RTE.RteUtility.$Dv(this.$O_0.$4_0.parentNode);
        this.$4C_1 = false;
        if (!$v_0) {
            this.$O_0.normalize();
        }
        else {
            this.$DX_1();
        }
        this.$O_0.resetCacheRange();
    },
    $DX_1: function RTE_ApplyOnSelectionProcessor$$DX_1() {
        if (RTE.RteUtility.isInternetExplorer()) {
            var $v_0 = this.$O_0.$4_0.parentNode;

            if ($v_0 && $v_0 === this.$O_0.$3_0.parentNode && $v_0.childNodes.length === 2 && $v_0.tagName === 'P') {
                var $v_1 = $v_0.cloneNode(false);

                RTE.RteUtility.$k($v_0, $v_1);
                $v_0.parentNode.insertBefore($v_1, $v_0);
                $v_0.parentNode.removeChild($v_0);
            }
        }
    },
    $Dw_1: function RTE_ApplyOnSelectionProcessor$$Dw_1($p0, $p1) {
        if (this.$6x_1($p0)) {
            this.$Kd_1($p0, $p1);
        }
    }
};
RTE.Autocomplete = function RTE_Autocomplete(id, doc, resultSource) {
    this.$$d_$Jw_0 = Function.createDelegate(this, this.$Jw_0);
    this.$$d_$KA_0 = Function.createDelegate(this, this.$KA_0);
    this.$$d_$KE_0 = Function.createDelegate(this, this.$KE_0);
    this.$Cv_0 = id;
    this.$S_0 = doc;
    this.$47_0 = resultSource;
    resultSource.m_autocomplete = this;
};
RTE.Autocomplete.prototype = {
    $Cv_0: null,
    $S_0: null,
    $F_0: null,
    $3M_0: null,
    $3K_0: null,
    $19_0: null,
    $47_0: null,
    $1L_0: null,
    $1K_0: null,
    $Y_0: null,
    $1M_0: 0,
    $10_0: false,
    $92_0: 25,
    get_maxResults: function RTE_Autocomplete$get_maxResults() {
        return this.$92_0;
    },
    set_maxResults: function RTE_Autocomplete$set_maxResults(value) {
        this.$92_0 = value;
        return value;
    },
    $21_0: false,
    get_isStarted: function RTE_Autocomplete$get_isStarted() {
        return this.$21_0;
    },
    get_selectedResult: function RTE_Autocomplete$get_selectedResult() {
        if (RTE.SU.$7(this.$Y_0)) {
            return null;
        }
        else {
            return this.$47_0.complete(this.$1M_0, this.$10_0, false);
        }
    },
    get_visible: function RTE_Autocomplete$get_visible() {
        if (!this.$21_0) {
            return false;
        }
        return this.$F_0.style.visibility === 'visible';
    },
    set_visible: function RTE_Autocomplete$set_visible(value) {
        if (!this.$21_0) {
            return value;
        }
        if (value) {
            this.$F_0.style.width = '250px';
            this.$F_0.style.left = '-500px';
            this.$F_0.style.zIndex = 100;
            this.$F_0.style.visibility = 'visible';
            var $v_0, $v_1, $v_2, $v_3;
            var $v_4 = RTE.Cursor.get_range();
            var $v_5 = RTE.RteUtility.$8V($v_4.$3_0);

            $v_0 = $v_5.x;
            $v_1 = $v_5.y;
            $v_2 = $v_4.$3_0.offsetWidth;
            $v_3 = $v_4.$3_0.offsetHeight;
            var $v_6, $v_7;

            $v_7 = RTE.RteUtility.$6N(window.self);
            $v_6 = RTE.RteUtility.$6O(window.self);
            var $v_8 = RTE.RteUtility.$I2(this.$F_0);
            var $v_9 = $get('s4-workspace');

            if (!$v_9) {
                $v_9 = document.body;
            }
            var $v_A = -$v_9.scrollLeft, $v_B = -$v_9.scrollTop;

            if ($v_0 + $v_2 + $v_8.width > $v_6) {
                $v_A += $v_0 - $v_8.width - 11;
            }
            else {
                $v_A += $v_0 + $v_2 + 11;
            }
            if ($v_1 + $v_3 + $v_8.height > $v_7) {
                $v_B += $v_1 - $v_8.height - 11;
            }
            else {
                $v_B += $v_1 + $v_3 + 11;
            }
            this.$F_0.style.top = $v_B.toString() + 'px';
            this.$F_0.style.left = $v_A.toString() + 'px';
        }
        else {
            this.$F_0.style.visibility = 'hidden';
        }
        return value;
    },
    $K7_0: function RTE_Autocomplete$$K7_0($p0) {
        var $v_0 = false;

        if (this.$21_0) {
            if (!$p0.ctrlKey && !$p0.altKey) {
                switch ($p0.keyCode) {
                case 27:
                    this.stop();
                    $v_0 = true;
                    break;
                case 13:
                case 9:
                    if (null !== this.$Y_0) {
                        this.$Av_0(13 === $p0.keyCode ? ']]' : null, true);
                    }
                    else if (13 === $p0.keyCode) {
                        (RTE.Cursor.get_range()).insertTextBefore(']]');
                        RTE.Cursor.update();
                    }
                    $v_0 = true;
                    break;
                case 38:
                    if (null !== this.$Y_0) {
                        Sys.UI.DomElement.removeCssClass(this.$Y_0, 'ms-rte-autocomplete-selected');
                        this.$Y_0.removeAttribute('role');
                        this.$1M_0--;
                        if (this.$1M_0 < 0) {
                            this.$ET_0();
                            this.$1M_0 = (this.$10_0 ? this.$1K_0 : this.$1L_0).length - 1;
                        }
                        this.$Y_0 = (this.$10_0 ? this.$1K_0 : this.$1L_0)[this.$1M_0];
                        Sys.UI.DomElement.addCssClass(this.$Y_0, 'ms-rte-autocomplete-selected');
                        this.$Y_0.setAttribute('role', 'alert');
                        $v_0 = true;
                    }
                    break;
                case 40:
                    if (null !== this.$Y_0) {
                        Sys.UI.DomElement.removeCssClass(this.$Y_0, 'ms-rte-autocomplete-selected');
                        this.$Y_0.removeAttribute('role');
                        this.$1M_0++;
                        if (this.$1M_0 >= (this.$10_0 ? this.$1K_0 : this.$1L_0).length) {
                            this.$ET_0();
                            this.$1M_0 = 0;
                        }
                        this.$Y_0 = (this.$10_0 ? this.$1K_0 : this.$1L_0)[this.$1M_0];
                        Sys.UI.DomElement.addCssClass(this.$Y_0, 'ms-rte-autocomplete-selected');
                        this.$Y_0.setAttribute('role', 'alert');
                        $v_0 = true;
                    }
                    break;
                case 37:
                case 39:
                    this.stop();
                    break;
                default:
                    break;
                }
            }
            else if ($p0.ctrlKey && 32 === $p0.keyCode) {
                this.$47_0.invalidateCache();
                this.start();
                this.$9G_0();
            }
        }
        else {
            if ($p0.ctrlKey && 32 === $p0.keyCode) {
                var $v_1 = this.$7q_0();

                if (null !== $v_1) {
                    this.start();
                    this.set_visible(true);
                    this.$9G_0();
                    $v_0 = true;
                }
            }
        }
        return $v_0;
    },
    $D6_0: 0,
    $9G_0: function RTE_Autocomplete$$9G_0() {
        if (this.$21_0) {
            window.clearTimeout(this.$D6_0);
            this.$D6_0 = window.setTimeout(this.$$d_$KE_0, 0);
        }
    },
    $KE_0: function RTE_Autocomplete$$KE_0() {
        if (this.$21_0) {
            var $v_0 = this.$7q_0();

            if ($v_0) {
                this.set_visible(true);
                if (this.$KL_0($v_0.$93_0)) {
                    RTE.Cursor.$9y();
                }
            }
            else {
                this.stop();
            }
        }
    },
    $KA_0: function RTE_Autocomplete$$KA_0($p0) {
        $p0.preventDefault();
        $p0.stopPropagation();
    },
    $Jw_0: function RTE_Autocomplete$$Jw_0($p0) {
        var $v_0 = $p0.target;
        var $v_1 = false;

        if (null !== this.$1L_0) {
            var $v_2 = this.$1L_0.length;

            for (var $v_3 = 0; $v_3 < $v_2; $v_3++) {
                if ($v_0 === this.$1L_0[$v_3]) {
                    this.$1M_0 = $v_3;
                    this.$10_0 = false;
                    $v_1 = true;
                    break;
                }
            }
        }
        if (null !== this.$1K_0) {
            var $v_4 = this.$1K_0.length;

            for (var $v_5 = 0; $v_5 < $v_4; $v_5++) {
                if ($v_0 === this.$1K_0[$v_5]) {
                    this.$1M_0 = $v_5;
                    this.$10_0 = true;
                    $v_1 = true;
                    break;
                }
            }
        }
        if ($v_1) {
            this.$Av_0(null, true);
            $p0.preventDefault();
            $p0.stopPropagation();
        }
    },
    start: function RTE_Autocomplete$start() {
        if (null === this.$F_0) {
            this.$F_0 = this.$S_0.createElement('div');
            this.$F_0.id = this.$Cv_0;
            this.$F_0.className = 'ms-rte-autocomplete';
            this.$F_0.setAttribute('unselectable', 'on');
            this.$F_0.title = SP.Res.autocompleteAccessibleMenuName;
            this.$F_0.setAttribute('aria-live', 'assertive');
            this.$F_0.setAttribute('aria-relevant', 'all');
            this.$F_0.setAttribute('role', 'menu');
            this.$F_0.style.visibility = 'hidden';
            $addHandler(this.$F_0, 'mousedown', this.$$d_$KA_0);
            $addHandler(this.$F_0, 'mouseup', this.$$d_$KA_0);
            $addHandler(this.$F_0, 'click', this.$$d_$Jw_0);
            this.$S_0.body.appendChild(this.$F_0);
        }
        if (null === this.$3M_0) {
            this.$3M_0 = this.$S_0.createElement('div');
            this.$3M_0.className = 'ms-rte-autocomplete-results';
            this.$3M_0.setAttribute('unselectable', 'on');
        }
        if (null === this.$3K_0) {
            this.$3K_0 = this.$S_0.createElement('div');
            this.$3K_0.className = 'ms-rte-autocomplete-modes';
            this.$3K_0.setAttribute('unselectable', 'on');
        }
        if (null === this.$19_0) {
            this.$19_0 = this.$S_0.createElement('div');
            this.$19_0.className = 'ms-rte-autocomplete-info';
            this.$19_0.setAttribute('unselectable', 'on');
            this.$19_0.setAttribute('role', 'alert');
        }
        this.$F_0.setAttribute('aria-busy', 'true');
        RTE.RteUtility.removeChildNodes(this.$F_0);
        SP.UI.UIUtility.setInnerText(this.$19_0, SP.Res.autocompleteLoading);
        this.$F_0.appendChild(this.$19_0);
        this.$F_0.removeAttribute('aria-busy');
        RTE.Canvas.changeKeyTimeout(true);
        this.$21_0 = true;
    },
    $6h_0: null,
    $KL_0: function RTE_Autocomplete$$KL_0($p0) {
        if (this.$6h_0 && this.$6h_0 === $p0 && this.get_visible()) {
            return false;
        }
        this.$6h_0 = $p0;
        this.$F_0.setAttribute('aria-busy', 'true');
        RTE.RteUtility.removeChildNodes(this.$F_0);
        SP.UI.UIUtility.setInnerText(this.$19_0, SP.Res.autocompleteLoading);
        this.$F_0.appendChild(this.$19_0);
        this.$F_0.removeAttribute('aria-busy');
        this.$47_0.process($p0, this.$92_0);
        return true;
    },
    $9q_0: function RTE_Autocomplete$$9q_0($p0, $p1, $p2, $p3, $p4) {
        if (window.IsFullNameDefined('CUI.PMetrics.perfMark')) {
            CUI.PMetrics.perfMark(7710);
        }
        this.$F_0.setAttribute('aria-busy', 'true');
        this.$Y_0 = null;
        if ($p0) {
            this.$1L_0 = null;
            this.$1K_0 = null;
            RTE.RteUtility.removeChildNodes(this.$F_0);
            SP.UI.UIUtility.setInnerText(this.$19_0, SP.Res.autocompleteTooManyResults);
            this.$F_0.appendChild(this.$19_0);
        }
        else if (0 === $p2.length && 0 === $p3.length) {
            this.$1L_0 = null;
            this.$1K_0 = null;
            RTE.RteUtility.removeChildNodes(this.$F_0);
            SP.UI.UIUtility.setInnerText(this.$19_0, SP.Res.autocompleteNoResults);
            this.$F_0.appendChild(this.$19_0);
        }
        else {
            RTE.RteUtility.removeChildNodes(this.$F_0);
            var $v_0 = $p2.length;

            if ($v_0 > 0) {
                this.$1L_0 = [];
                this.$3M_0.innerHTML = '';
                var $v_2 = null;

                for (var $v_3 = 0; $v_3 < $v_0; $v_3++) {
                    $v_2 = $p2[$v_3].toString();
                    var $v_4 = this.$S_0.createElement('div');

                    $v_4.title = $v_2;
                    $v_4.setAttribute('unselectable', 'on');
                    if (null === this.$Y_0) {
                        this.$Y_0 = $v_4;
                        this.$10_0 = false;
                        this.$1M_0 = $v_3;
                    }
                    this.$1L_0[$v_3] = $v_4;
                    SP.UI.UIUtility.setInnerText($v_4, $v_2);
                    this.$3M_0.appendChild($v_4);
                }
                this.$F_0.appendChild(this.$3M_0);
            }
            else {
                this.$1L_0 = null;
            }
            var $v_1 = $p3.length;

            if ($v_1 > 0) {
                this.$1K_0 = [];
                this.$3K_0.innerHTML = '';
                for (var $v_5 = 0; $v_5 < $v_1; $v_5++) {
                    var $v_6 = this.$S_0.createElement('div');

                    $v_6.title = $p4[$v_5].toString();
                    $v_6.setAttribute('unselectable', 'on');
                    if (null === this.$Y_0) {
                        this.$Y_0 = $v_6;
                        this.$10_0 = true;
                        this.$1M_0 = $v_5;
                    }
                    this.$1K_0[$v_5] = $v_6;
                    $v_6.innerHTML = $p4[$v_5].toString();
                    this.$3K_0.appendChild($v_6);
                }
                this.$F_0.appendChild(this.$3K_0);
            }
            else {
                this.$1K_0 = null;
            }
            if (null !== this.$Y_0) {
                Sys.UI.DomElement.addCssClass(this.$Y_0, 'ms-rte-autocomplete-selected');
                this.$Y_0.setAttribute('role', 'alert');
            }
        }
        this.set_visible(true);
        if (this.$47_0.isAutocompleteFinished()) {
            this.stop();
        }
        this.$F_0.removeAttribute('aria-busy');
        if (window.IsFullNameDefined('CUI.PMetrics.perfMark')) {
            CUI.PMetrics.perfMark(7711);
        }
    },
    $E9_0: function RTE_Autocomplete$$E9_0($p0) {
        this.$1L_0 = null;
        this.$1K_0 = null;
        this.$F_0.setAttribute('aria-busy', 'true');
        RTE.RteUtility.removeChildNodes(this.$F_0);
        SP.UI.UIUtility.setInnerText(this.$19_0, $p0);
        this.$F_0.appendChild(this.$19_0);
        this.$F_0.removeAttribute('aria-busy');
    },
    $Av_0: function RTE_Autocomplete$$Av_0($p0, $p1) {
        var $v_0 = this.$47_0.complete(this.$1M_0, this.$10_0, $p1);

        if (!RTE.SU.$2($p0)) {
            $v_0 += $p0;
        }
        var $v_1 = this.$7q_0();

        if ($v_1) {
            $v_1.replaceWith(this.$S_0.createTextNode('[[' + $v_0));
            RTE.Cursor.update();
        }
    },
    stop: function RTE_Autocomplete$stop() {
        if (null !== this.$F_0) {
            this.$F_0.style.visibility = 'hidden';
        }
        RTE.Canvas.changeKeyTimeout(false);
        this.$21_0 = false;
        this.$6h_0 = null;
    },
    $ET_0: function RTE_Autocomplete$$ET_0() {
        var $v_0 = null !== this.$1L_0;
        var $v_1 = null !== this.$1K_0;

        if (!$v_0 && !$v_1) {
            return;
        }
        this.$10_0 = !this.$10_0;
        if (this.$10_0 && !$v_1) {
            this.$10_0 = false;
        }
        else if (!this.$10_0 && !$v_0) {
            this.$10_0 = true;
        }
    },
    $7q_0: function RTE_Autocomplete$$7q_0() {
        return RTE.AutocompleteParseData.parseCurrent('[[');
    },
    $7M_0: 0,
    $K8_0: function RTE_Autocomplete$$K8_0($p0) {
        if (this.$21_0) {
            if (93 === $p0.charCode) {
                this.$7M_0++;
                if (2 === this.$7M_0) {
                    this.stop();
                    this.$7M_0 = 0;
                }
            }
            else {
                this.$7M_0 = 0;
            }
        }
        else {
            if (91 === $p0.charCode) {
                this.start();
            }
        }
        return false;
    }
};
RTE.AutocompleteParseData = function RTE_AutocompleteParseData($p0, $p1) {
    this.$98_0 = $p0;
    this.$93_0 = $p1;
};
RTE.AutocompleteParseData.parseCurrent = function RTE_AutocompleteParseData$parseCurrent(prefix) {
    if (RTE.SU.$7(RTE.Canvas.currentEditableRegion())) {
        return null;
    }
    if (!prefix || prefix.length !== 2) {
        return null;
    }
    var $v_0 = RTE.Cursor.get_range();

    if (!$v_0.isValid()) {
        return null;
    }
    var $v_1 = prefix.charAt(0);
    var $v_2 = prefix.charAt(1);
    var $v_3 = $v_1 === ' ';
    var $v_4 = '';
    var $v_5 = new RTE.DOMTreePosition($v_0.$4_0, 0);

    while (true) {
        if (SP.UI.UIUtility.isTextNode($v_5.$1_0)) {
            var $v_6 = $v_5.$1_0.data;
            var $v_7 = $v_5.$H_0;
            var $v_8 = ($v_6.substring(0, $v_7)).lastIndexOf(prefix);

            if ($v_8 === -1 && $v_3) {
                $v_8 = ($v_6.substring(0, $v_7)).lastIndexOf(RTE.RteUtility.$3X + $v_2);
            }
            if ($v_8 >= 0) {
                if ($v_3) {
                    $v_8++;
                }
                $v_4 = $v_6.substring($v_8, $v_7) + $v_4;
                $v_5.setOffset($v_8);
                return new RTE.AutocompleteParseData($v_5, $v_4);
            }
            var $v_9 = $v_6.substring(0, $v_7);

            if ($v_7 > 0 && ($v_9.endsWith($v_1) || $v_3 && $v_9.endsWith(RTE.RteUtility.$3X)) && $v_4.startsWith($v_2)) {
                if (!$v_3) {
                    $v_4 = $v_1 + $v_4;
                    $v_5.setOffset($v_7 - 1);
                }
                else {
                    $v_5.moveToNextElement();
                    $v_5.setOffset(0);
                }
                return new RTE.AutocompleteParseData($v_5, $v_4);
            }
            $v_4 = ($v_6.substring(0, $v_7)).replace(String.fromCharCode(8203), '') + $v_4;
        }
        else if ($v_3 && $v_4.startsWith($v_2)) {
            $v_5.moveToNextElement();
            $v_5.setOffset(0);
            return new RTE.AutocompleteParseData($v_5, $v_4);
        }
        if (!RTE.RteUtility.$50($v_5.$1_0) || Sys.UI.DomElement.containsCssClass($v_5.$1_0.parentNode, 'ms-rtestate-read') || !$v_5.moveToPreviousElement()) {
            break;
        }
    }
    return null;
};
RTE.AutocompleteParseData.prototype = {
    $98_0: null,
    $93_0: null,
    get_treePosition: function RTE_AutocompleteParseData$get_treePosition() {
        return this.$98_0;
    },
    get_parsedText: function RTE_AutocompleteParseData$get_parsedText() {
        return this.$93_0;
    },
    replaceWith: function RTE_AutocompleteParseData$replaceWith(content) {
        var $v_0 = RTE.Cursor.get_range();
        var $v_1 = $v_0.$4_0;
        var $v_2 = $v_0.$3_0;
        var $v_3 = document.createElement('SPAN');
        var $v_4 = document.createElement('SPAN');

        $v_1.parentNode.insertBefore($v_3, $v_1);
        $v_0.insertBefore(content);
        $v_2.parentNode.insertBefore($v_4, $v_2.nextSibling);
        var $v_5 = this.$98_0;

        if (SP.UI.UIUtility.isTextNode($v_5.$1_0)) {
            $v_5.moveCount(true, 0);
        }
        $v_5.insertMarker($v_1);
        $v_2.parentNode.removeChild($v_2);
        $v_3.parentNode.replaceChild($v_2, $v_3);
        $v_0.deleteContent();
        $v_4.parentNode.insertBefore($v_1, $v_4);
        $v_4.parentNode.insertBefore($v_2, $v_4);
        $v_4.parentNode.removeChild($v_4);
    }
};
RTE.WikiLinkAutoComplete = function RTE_WikiLinkAutoComplete($p0) {
    this.$33_0 = $p0;
};
RTE.WikiLinkAutoComplete.prototype = {
    $33_0: null,
    get_isStarted: function RTE_WikiLinkAutoComplete$get_isStarted() {
        if (!this.$5f_0()) {
            return false;
        }
        return this.$33_0.$21_0;
    },
    onKeyDown: function RTE_WikiLinkAutoComplete$onKeyDown($p0) {
        if (!this.$5f_0()) {
            return false;
        }
        return this.$33_0.$K7_0($p0);
    },
    onKeyUp: function RTE_WikiLinkAutoComplete$onKeyUp($p0) {
        return false;
    },
    onKeyPress: function RTE_WikiLinkAutoComplete$onKeyPress($p0) {
        if (!this.$5f_0()) {
            return false;
        }
        return this.$33_0.$K8_0($p0);
    },
    stop: function RTE_WikiLinkAutoComplete$stop() {
        if (!this.$5f_0()) {
            return;
        }
        this.$33_0.stop();
    },
    onTextChanged: function RTE_WikiLinkAutoComplete$onTextChanged() {
        if (!this.$5f_0()) {
            return;
        }
        this.$33_0.$9G_0();
    },
    isSuggestionNode: function RTE_WikiLinkAutoComplete$isSuggestionNode($p0) {
        return false;
    },
    $5f_0: function RTE_WikiLinkAutoComplete$$5f_0() {
        return !!this.$33_0 && RTE.Canvas.currentRegionWikilinkEnabled();
    }
};
RTE.AutocompleteResultSource = function RTE_AutocompleteResultSource() {
};
RTE.AutocompleteResultSource.prototype = {
    m_autocomplete: null,
    get_autocomplete: function RTE_AutocompleteResultSource$get_autocomplete() {
        return this.m_autocomplete;
    },
    set_autocomplete: function RTE_AutocompleteResultSource$set_autocomplete(value) {
        this.m_autocomplete = value;
        return value;
    },
    complete: function RTE_AutocompleteResultSource$complete(selectedIndex, selectedMode, showDisplayName) {
        return '';
    },
    isAutocompleteFinished: function RTE_AutocompleteResultSource$isAutocompleteFinished() {
        return false;
    },
    invalidateCache: function RTE_AutocompleteResultSource$invalidateCache() {
    }
};
RTE.AutocompleteWikiLinkSource = function RTE_AutocompleteWikiLinkSource() {
    this.$$d_$Lm_1 = Function.createDelegate(this, this.$Lm_1);
    this.$$d_$Jb_1 = Function.createDelegate(this, this.$Jb_1);
    this.$$d_$Ja_1 = Function.createDelegate(this, this.$Ja_1);
    this.$$d_$Es_1 = Function.createDelegate(this, this.$Es_1);
    this.$$d_$Er_1 = Function.createDelegate(this, this.$Er_1);
    this.$$d_$Jc_1 = Function.createDelegate(this, this.$Jc_1);
    this.$$d_$LY_1 = Function.createDelegate(this, this.$LY_1);
    this.$1C_1 = '';
    this.$3L_1 = -1;
    RTE.AutocompleteWikiLinkSource.initializeBase(this);
    this.$5A_1 = [];
    this.$6m_1 = [];
    this.$5A_1[0] = 'List:';
    this.$6m_1[0] = SP.Res.autocompleteList;
    this.$5A_1[1] = 'View:';
    this.$6m_1[1] = SP.Res.autocompleteView;
    this.$B1_1();
};
RTE.AutocompleteWikiLinkSource.prototype = {
    $v_1: 0,
    $D1_1: null,
    $3J_1: null,
    $n_1: null,
    $2J_1: null,
    $d_1: null,
    $2K_1: 0,
    $96_1: null,
    $90_1: null,
    $6r_1: null,
    $44_1: null,
    $91_1: null,
    $6p_1: null,
    $f_1: 0,
    $c_1: null,
    $o_1: null,
    $1A_1: null,
    $1l_1: null,
    $20_1: null,
    $5M_1: null,
    $94_1: null,
    $2H_1: null,
    $Z_1: null,
    $5K_1: null,
    $6t_1: null,
    $5F_1: null,
    $5C_1: null,
    $5L_1: null,
    $5A_1: null,
    $6m_1: null,
    $B1_1: function RTE_AutocompleteWikiLinkSource$$B1_1() {
        this.$90_1 = {};
        this.$6r_1 = {};
        this.$44_1 = null;
        this.$91_1 = {};
        this.$6p_1 = {};
    },
    invalidateCache: function RTE_AutocompleteWikiLinkSource$invalidateCache() {
        RTE.AutocompleteResultSource.prototype.invalidateCache.call(this);
        this.$B1_1();
    },
    process: function RTE_AutocompleteWikiLinkSource$process($p0, $p1) {
        var $v_0 = this.$6r_1[$p0];

        if (!RTE.SU.$7($v_0)) {
            this.$1C_1 = $v_0.$1C_0;
            this.$v_1 = $v_0.$v_0;
            this.$f_1 = $v_0.$f_0;
            this.$c_1 = $v_0.$c_0;
            this.$o_1 = $v_0.$o_0;
            this.$1A_1 = $v_0.$1A_0;
            this.$1l_1 = $v_0.$1l_0;
            this.m_autocomplete.$9q_0($v_0.$D7_0, this.$f_1, this.$c_1, this.$o_1, this.$1A_1);
            return;
        }
        this.$D1_1 = $p0;
        this.$c_1 = [];
        this.$o_1 = [];
        this.$1l_1 = [];
        this.$3J_1 = null;
        this.$n_1 = null;
        this.$2J_1 = null;
        this.$d_1 = null;
        this.$f_1 = 0;
        this.$2H_1 = null;
        this.$Z_1 = null;
        this.$2K_1 = $p1;
        if (!$p0.startsWith('[[')) {
            this.$v_1 = 0;
            this.m_autocomplete.$9q_0(false, 0, this.$c_1, this.$o_1, this.$1A_1);
        }
        else {
            var $v_1 = $p0.substr(2);
            var $v_2 = $v_1.indexOf(':');
            var $v_3 = $v_1.indexOf('|');

            this.$1C_1 = '[[';
            if ($v_3 >= 0) {
                this.$v_1 = 5;
                this.$1C_1 = $p0;
            }
            else if ($p0.indexOf(']]') >= 0) {
                this.$v_1 = 6;
                this.$1C_1 = $p0;
            }
            else if ($v_2 >= 0) {
                this.$3J_1 = $v_1.substring(0, $v_2);
                this.$1C_1 += this.$3J_1 + ':';
                if (this.$3J_1.toLowerCase() === 'list' || this.$3J_1.toLowerCase() === 'view') {
                    var $v_4 = -1;
                    var $v_5 = this.$6r_1[this.$1C_1];

                    if ($v_5) {
                        var $v_6 = $v_5.$f_0;

                        for (var $v_7 = 0; $v_7 < $v_6; $v_7++) {
                            var $v_8 = $v_5.$c_0[$v_7];
                            var $v_9 = $v_1.indexOf($v_8);

                            if ($v_9 !== -1 && $v_8.endsWith('/')) {
                                $v_4 = $v_9 + $v_8.length - 1;
                            }
                        }
                    }
                    if ($v_4 === -1) {
                        $v_4 = $v_1.indexOf('/', $v_2);
                    }
                    if ($v_4 > $v_2) {
                        this.$n_1 = $v_1.substring($v_2 + 1, $v_4);
                        this.$d_1 = $v_1.substr($v_4 + 1);
                        this.$1C_1 += this.$n_1 + '/';
                        if (this.$3J_1.toLowerCase() === 'view') {
                            this.$v_1 = 4;
                        }
                        else {
                            this.$v_1 = 3;
                            var $v_A = this.$d_1.lastIndexOf('/');

                            if ($v_A >= 0) {
                                this.$2J_1 = this.$d_1.substring(0, $v_A);
                                this.$d_1 = this.$d_1.substr($v_A + 1);
                                this.$1C_1 += this.$2J_1 + '/';
                            }
                        }
                    }
                    else {
                        this.$v_1 = 2;
                        this.$d_1 = $v_1.substr($v_2 + 1);
                    }
                }
                else {
                    this.$v_1 = 3;
                    this.$n_1 = this.$3J_1;
                    this.$d_1 = $v_1.substr($v_2 + 1);
                    var $v_B = this.$d_1.lastIndexOf('/');

                    if ($v_B >= 0) {
                        this.$2J_1 = this.$d_1.substring(0, $v_B);
                        this.$d_1 = this.$d_1.substr($v_B + 1);
                        this.$1C_1 += this.$2J_1 + '/';
                    }
                }
            }
            else {
                var $v_C = $v_1.lastIndexOf('/');

                if ($v_C >= 0) {
                    this.$v_1 = 3;
                    this.$2J_1 = $v_1.substring(0, $v_C);
                    this.$d_1 = $v_1.substr($v_C + 1);
                    this.$1C_1 += this.$2J_1 + '/';
                }
                else {
                    this.$v_1 = 1;
                    this.$d_1 = $v_1;
                    var $v_D = [];
                    var $v_E = [];
                    var $v_F = 0;

                    for (var $v_G = 0; $v_G < this.$5A_1.length; $v_G++) {
                        var $v_H = this.$5A_1[$v_G].toString();

                        if (($v_H.toLowerCase()).startsWith(this.$d_1.toLowerCase())) {
                            $v_D[$v_F] = $v_H;
                            $v_E[$v_F] = this.$6m_1[$v_G];
                            $v_F++;
                        }
                    }
                    this.$o_1 = $v_D;
                    this.$1A_1 = $v_E;
                }
            }
            this.$Cu_1(true);
        }
    },
    $Cu_1: function RTE_AutocompleteWikiLinkSource$$Cu_1($p0) {
        if (RTE.SU.$7(this.$20_1)) {
            this.$20_1 = new SP.ClientContext();
            this.$5M_1 = this.$20_1.get_web();
        }
        switch (this.$v_1) {
        case 2:
            this.$BT_1();
            break;
        case 1:
        case 3:
            if (null === this.$n_1 && null !== this.$96_1) {
                this.$n_1 = this.$96_1;
            }
            var $v_0 = this.$90_1[this.$n_1];

            if (!RTE.SU.$7($v_0) && this.$3L_1 >= 0) {
                this.$Z_1 = $v_0.$D2_0;
                this.$Aa_1($v_0.$D5_0, $v_0.$Cy_0);
                return;
            }
            if (null === this.$n_1) {
                var $v_1 = RTE.Canvas.getRTEFieldRegion();
                var $v_2 = RTE.RteUtility.getAttribute($v_1, 'ListId');

                if (!RTE.SU.$2($v_2)) {
                    this.$Z_1 = (this.$5M_1.get_lists()).getById(new SP.Guid($v_2));
                }
                else {
                    this.$1p_1(false, 0, this.$c_1, this.$o_1, this.$1A_1, null);
                    return;
                }
            }
            else {
                this.$Z_1 = (this.$5M_1.get_lists()).getByTitle(this.$n_1);
            }
            this.$94_1 = this.$20_1.get_site();
            this.$94_1.retrieve(SP.SitePropertyNames.maxItemsPerThrottledOperation);
            this.$Z_1.retrieve(SP.ListPropertyNames.title, SP.ListPropertyNames.baseType, SP.ListPropertyNames.baseTemplate, SP.ListPropertyNames.itemCount);
            this.$5K_1 = this.$Z_1.get_rootFolder();
            this.$5K_1.retrieve(SP.FolderPropertyNames.serverRelativeUrl);
            if ($p0) {
                this.$6t_1 = (this.$Z_1.get_fields()).getByInternalNameOrTitle('Title');
                this.$20_1.load(this.$6t_1);
            }
            this.$20_1.executeQueryAsync(this.$$d_$LY_1, this.$$d_$Jc_1);
            break;
        case 4:
            this.$BU_1();
            break;
        case 0:
        case 5:
        case 6:
        default:
            this.$1p_1(false, 0, this.$c_1, this.$o_1, this.$1A_1, null);
            break;
        }
    },
    $BT_1: function RTE_AutocompleteWikiLinkSource$$BT_1() {
        if (this.$44_1) {
            var $v_0 = [];
            var $v_1 = this.$44_1.length;
            var $v_2 = 0;

            for (var $v_3 = 0; $v_3 < $v_1; $v_3++) {
                var $v_4 = this.$44_1[$v_3].toString();

                if (($v_4.toLowerCase()).startsWith(this.$d_1.toLowerCase())) {
                    $v_0[$v_2] = $v_4 + '/';
                    $v_2++;
                }
            }
            this.$f_1 = $v_2;
            if (this.$f_1 <= this.$2K_1) {
                this.$c_1 = $v_0;
            }
            this.$1p_1(this.$f_1 > this.$2K_1, this.$f_1, this.$c_1, this.$o_1, this.$1A_1, null);
        }
        else {
            this.$2H_1 = this.$5M_1.get_lists();
            var $v_5 = this.$2H_1.retrieveItems();

            $v_5.retrieve(SP.ListPropertyNames.title, SP.ListPropertyNames.dataSource, SP.ListPropertyNames.hidden);
            (((this.$20_1.get_pendingRequest()).get_webRequest()).get_headers())[SP.ClientConstants.useWebLanguageHeader] = SP.ClientConstants.useWebLanguageHeaderValue;
            this.$20_1.executeQueryAsync(this.$$d_$Er_1, this.$$d_$Es_1);
        }
    },
    $Er_1: function RTE_AutocompleteWikiLinkSource$$Er_1($p0, $p1) {
        if (null !== this.$2H_1) {
            this.$44_1 = [];
            var $v_0 = this.$2H_1.get_count();

            for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
                if (RTE.SU.$7((this.$2H_1.itemAt($v_1)).get_dataSource()) && !RTE.SU.$2((this.$2H_1.itemAt($v_1)).get_title()) && !(this.$2H_1.itemAt($v_1)).get_hidden()) {
                    Array.add(this.$44_1, (this.$2H_1.itemAt($v_1)).get_title());
                }
            }
            this.$BT_1();
        }
    },
    $Es_1: function RTE_AutocompleteWikiLinkSource$$Es_1($p0, $p1) {
        this.$1p_1(true, this.$2K_1 + 1, null, null, null, null);
    },
    $LY_1: function RTE_AutocompleteWikiLinkSource$$LY_1($p0, $p1) {
        if (null !== this.$Z_1) {
            var $v_0 = !!this.$6t_1;
            var $v_1;

            if (null !== this.$5K_1 && !RTE.SU.$2(this.$5K_1.get_serverRelativeUrl())) {
                $v_1 = this.$5K_1.get_serverRelativeUrl();
            }
            else {
                $v_1 = '';
            }
            if (1 === this.$v_1) {
                this.$n_1 = this.$Z_1.get_title();
                this.$96_1 = this.$n_1;
            }
            this.$90_1[this.$n_1] = new RTE.AutocompleteListCacheObject(this.$Z_1, $v_1, $v_0);
            if (this.$3L_1 < 0) {
                this.$3L_1 = Math.min(2000, this.$94_1.get_maxItemsPerThrottledOperation());
            }
            this.$Aa_1($v_1, $v_0);
        }
        else {
            this.$1p_1(false, 0, this.$c_1, this.$o_1, this.$1A_1, null);
        }
    },
    $Aa_1: function RTE_AutocompleteWikiLinkSource$$Aa_1($p0, $p1) {
        if (null !== this.$Z_1) {
            var $v_0 = $p0;

            if (!RTE.SU.$2(this.$2J_1)) {
                $v_0 += '/' + this.$2J_1;
            }
            this.$5F_1 = $v_0 + '/';
            if (!RTE.SU.$2(this.$d_1)) {
                this.$5F_1 += this.$d_1;
            }
            var $v_1 = this.$6p_1[this.$n_1];
            var $v_2 = null;

            if (!RTE.SU.$7($v_1)) {
                var $v_3 = this.$5F_1;

                while ($v_3.length > 0) {
                    $v_2 = $v_1[$v_3];
                    if (!RTE.SU.$7($v_2) || $v_3.endsWith('/')) {
                        break;
                    }
                    $v_3 = $v_3.substring(0, $v_3.length - 1);
                }
            }
            if (!RTE.SU.$7($v_2)) {
                this.$BS_1($v_2);
            }
            else {
                var $v_4 = new SP.CamlQuery();

                $v_4.set_folderServerRelativeUrl($v_0);
                var $v_5;
                var $v_6;

                if (1 === this.$Z_1.get_baseType()) {
                    $v_5 = 'FileRef';
                    $v_6 = this.$5F_1.substr(1);
                }
                else if ($p1) {
                    if (this.$Z_1.get_itemCount() > this.$3L_1) {
                        this.m_autocomplete.$E9_0(SP.Res.autocompleteListTooLarge);
                        return;
                    }
                    $v_5 = 'Title';
                    $v_6 = this.$d_1;
                }
                else {
                    this.$1p_1(false, 0, this.$c_1, this.$o_1, this.$1A_1, null);
                    return;
                }
                if (!RTE.SU.$2($v_5) && !RTE.SU.$2($v_6)) {
                    var $v_8;

                    if ('FileRef' === $v_5) {
                        $v_8 = '<FieldRef Name=\"FileDirRef\"/><FieldRef Name=\"FileLeafRef\"/>';
                    }
                    else {
                        $v_8 = '<FieldRef Name=\"' + $v_5 + '\"/>';
                    }
                    var $v_9;

                    if ($p1) {
                        $v_9 = '<ViewFields><FieldRef Name=\"ID\" /><FieldRef Name=\"FileLeafRef\" /><FieldRef Name=\"FSObjType\" /><FieldRef Name=\"Title\" /></ViewFields>';
                    }
                    else {
                        $v_9 = '<ViewFields><FieldRef Name=\"ID\" /><FieldRef Name=\"FileLeafRef\" /><FieldRef Name=\"FSObjType\" /></ViewFields>';
                    }
                    $v_4.set_viewXml('\r\n<View>' + $v_9 + '\r\n    <Query>\r\n        <Where>\r\n            <BeginsWith>\r\n                <FieldRef Name=\"' + $v_5 + '\" />\r\n                <Value Type=\"Text\">' + RTE.RteUtility.htmlEncode($v_6) + '</Value>\r\n            </BeginsWith>\r\n        </Where>\r\n        <OrderBy Override=\"TRUE\">' + $v_8 + '</OrderBy>\r\n    </Query>\r\n    <RowLimit>' + this.$3L_1.toString() + '</RowLimit>\r\n</View>\r\n');
                }
                this.$5C_1 = this.$Z_1.getItems($v_4);
                var $v_7 = this.$5C_1.retrieveItems();

                if ($p1) {
                    $v_7.retrieve(SP.ListItemPropertyNames.id, SP.ListItemPropertyNames.fileSystemObjectType, 'FileLeafRef', 'Title');
                }
                else {
                    $v_7.retrieve(SP.ListItemPropertyNames.id, SP.ListItemPropertyNames.fileSystemObjectType, 'FileLeafRef');
                }
                this.$20_1.executeQueryAsync(this.$$d_$Ja_1, this.$$d_$Jb_1);
            }
        }
        else {
            this.$1p_1(false, 0, this.$c_1, this.$o_1, this.$1A_1, null);
        }
    },
    $BS_1: function RTE_AutocompleteWikiLinkSource$$BS_1($p0) {
        if (null !== this.$Z_1) {
            var $v_0;
            var $v_1;
            var $v_2;
            var $v_3 = false;
            var $v_4 = false;
            var $v_5 = false;
            var $v_6 = false;

            if (1 === this.$Z_1.get_baseType()) {
                $v_0 = false;
                $v_1 = false;
                $v_2 = false;
                if (119 === this.$Z_1.get_baseTemplate()) {
                    $v_4 = true;
                }
                else {
                    $v_5 = true;
                }
            }
            else {
                $v_0 = true;
                $v_1 = true;
                $v_2 = true;
                if (108 === this.$Z_1.get_baseTemplate()) {
                    $v_3 = false;
                    $v_6 = true;
                }
                else {
                    $v_3 = true;
                }
            }
            var $v_7 = $p0.length;
            var $v_8 = 0;
            var $v_9 = [];

            for (var $v_A = 0; $v_A < $v_7; $v_A++) {
                var $v_B = $p0[$v_A];
                var $v_C;

                if ($v_0) {
                    $v_C = $v_B.$97_0;
                }
                else {
                    $v_C = $v_B.$6o_0;
                }
                if (!RTE.SU.$2($v_C) && ($v_C.toLowerCase()).startsWith(this.$d_1.toLowerCase())) {
                    $v_9[$v_8] = $v_B;
                    $v_8++;
                }
            }
            this.$f_1 = $v_8;
            if (this.$f_1 > 0 && this.$f_1 <= this.$2K_1) {
                for (var $v_D = 0; $v_D < this.$f_1; $v_D++) {
                    var $v_E = $v_9[$v_D];
                    var $v_F;

                    if ($v_1) {
                        $v_F = $v_E.$97_0;
                    }
                    else {
                        $v_F = $v_E.$6o_0;
                    }
                    if ($v_E.$8z_0 && !$v_6) {
                        $v_F = $v_F + '/';
                    }
                    else if ($v_4) {
                        var $v_G = $v_F.lastIndexOf('.');

                        if ($v_G > 0) {
                            $v_F = $v_F.substring(0, $v_G);
                        }
                    }
                    else if ($v_5) {
                        var $v_H = $v_F.lastIndexOf('.');

                        if ($v_H > 0) {
                            if (($v_F.substring($v_H, $v_F.length)).toLowerCase() === '.aspx') {
                                $v_F = $v_F.substring(0, $v_H);
                            }
                        }
                    }
                    this.$c_1[$v_D] = $v_F;
                    if ($v_E.$8z_0 && !$v_6) {
                        this.$1l_1[$v_D] = $v_F;
                    }
                    else if ($v_2) {
                        var $v_I;

                        if ($v_3) {
                            $v_I = $v_E.$Cz_0.toString();
                        }
                        else {
                            $v_I = $v_E.$6o_0;
                        }
                        this.$1l_1[$v_D] = $v_I;
                    }
                    else {
                        this.$1l_1[$v_D] = $v_F;
                    }
                }
            }
            this.$1p_1(this.$f_1 > this.$2K_1, this.$f_1, this.$c_1, this.$o_1, this.$1A_1, this.$1l_1);
        }
        else {
            this.$1p_1(false, 0, this.$c_1, this.$o_1, this.$1A_1, null);
        }
    },
    $Ja_1: function RTE_AutocompleteWikiLinkSource$$Ja_1($p0, $p1) {
        if (null !== this.$Z_1 && null !== this.$5C_1) {
            var $v_0 = [];
            var $v_1 = 0;

            try {
                $v_1 = this.$5C_1.get_count();
            }
            catch ($$e_4) { }
            for (var $v_2 = 0; $v_2 < $v_1; $v_2++) {
                var $v_3 = this.$5C_1.itemAt($v_2);
                var $v_4 = $v_3.get_id();
                var $v_5 = ($v_3.get_fieldValues())['FileLeafRef'];
                var $v_6 = RTE.SU.$7($v_5) ? '' : $v_5.toString();
                var $v_7 = 1 === $v_3.get_fileSystemObjectType();
                var $v_8 = ($v_3.get_fieldValues())['Title'];
                var $v_9 = RTE.SU.$7($v_8) ? null : $v_8.toString();

                $v_0[$v_2] = new RTE.AutocompleteListItemCacheObject($v_4, $v_9, $v_6, $v_7);
            }
            if ($v_0.length <= 0.5 * this.$3L_1) {
                var $v_A = this.$6p_1[this.$n_1];

                if (RTE.SU.$7($v_A)) {
                    this.$6p_1[this.$n_1] = ($v_A = {});
                }
                $v_A[this.$5F_1] = $v_0;
            }
            this.$BS_1($v_0);
        }
    },
    $Jb_1: function RTE_AutocompleteWikiLinkSource$$Jb_1($p0, $p1) {
        this.$1p_1(true, this.$2K_1 + 1, null, null, null, null);
    },
    $BU_1: function RTE_AutocompleteWikiLinkSource$$BU_1() {
        var $v_0 = this.$91_1[this.$n_1];

        if (!RTE.SU.$7($v_0)) {
            var $v_1 = [];
            var $v_2 = $v_0.length;
            var $v_3 = 0;

            for (var $v_4 = 0; $v_4 < $v_2; $v_4++) {
                var $v_5 = $v_0[$v_4].toString();

                if (($v_5.toLowerCase()).startsWith(this.$d_1.toLowerCase())) {
                    $v_1[$v_3] = $v_5;
                    $v_3++;
                }
            }
            this.$f_1 = $v_3;
            if (this.$f_1 <= this.$2K_1) {
                this.$c_1 = $v_1;
            }
            this.$1p_1(this.$f_1 > this.$2K_1, this.$f_1, this.$c_1, this.$o_1, this.$1A_1, null);
        }
        else {
            this.$Z_1 = (this.$5M_1.get_lists()).getByTitle(this.$n_1);
            this.$5L_1 = this.$Z_1.get_views();
            var $v_6 = this.$5L_1.retrieveItems();

            $v_6.retrieve(SP.ViewPropertyNames.title, SP.ViewPropertyNames.hidden);
            this.$20_1.executeQueryAsync(this.$$d_$Lm_1, this.$$d_$Jc_1);
        }
    },
    $Lm_1: function RTE_AutocompleteWikiLinkSource$$Lm_1($p0, $p1) {
        if (null !== this.$Z_1 && null !== this.$5L_1) {
            var $v_0 = [];
            var $v_1 = this.$5L_1.get_count();
            var $v_2 = 0;

            for (var $v_3 = 0; $v_3 < $v_1; $v_3++) {
                var $v_4 = this.$5L_1.itemAt($v_3);

                if ($v_4.get_hidden()) {
                    continue;
                }
                $v_0[$v_2] = $v_4.get_title();
                $v_2++;
            }
            this.$91_1[this.$n_1] = $v_0;
            this.$BU_1();
        }
    },
    $Jc_1: function RTE_AutocompleteWikiLinkSource$$Jc_1($p0, $p1) {
        var $v_0 = $p1.get_errorCode() === -2147024809;

        if ($v_0) {
            this.$6t_1 = null;
            this.$Cu_1(false);
            return;
        }
        var $v_1 = SP.Res.autocompleteListNotFound;

        this.m_autocomplete.$E9_0($v_1);
    },
    $1p_1: function RTE_AutocompleteWikiLinkSource$$1p_1($p0, $p1, $p2, $p3, $p4, $p5) {
        if (RTE.SU.$7($p5)) {
            $p5 = $p2;
            this.$1l_1 = this.$c_1;
        }
        this.$6r_1[this.$D1_1] = new RTE.AutocompleteCacheObject(this.$1C_1, this.$v_1, $p0, $p1, $p2, $p3, $p4, $p5);
        this.m_autocomplete.$9q_0($p0, $p1, $p2, $p3, $p4);
    },
    isAutocompleteFinished: function RTE_AutocompleteWikiLinkSource$isAutocompleteFinished() {
        return 5 === this.$v_1 || 6 === this.$v_1;
    },
    complete: function RTE_AutocompleteWikiLinkSource$complete($p0, $p1, $p2) {
        var $v_0 = this.$1C_1;

        if ($p1) {
            if (RTE.SU.$7(this.$o_1)) {
                return '';
            }
            $v_0 += this.$o_1[$p0];
        }
        else {
            if (RTE.SU.$7(this.$1l_1)) {
                return '';
            }
            var $v_1 = this.$1l_1[$p0];
            var $v_2 = RTE.SU.$7($v_1) ? '' : $v_1.toString();

            $v_0 += $v_2;
            if ($p2) {
                var $v_3 = this.$c_1[$p0];
                var $v_4 = RTE.SU.$7($v_3) ? '' : $v_3.toString();

                if ($v_4 !== $v_2) {
                    $v_0 += '|' + $v_4;
                }
            }
        }
        return $v_0.substr(2);
    }
};
RTE.AutocompleteListCacheObject = function RTE_AutocompleteListCacheObject($p0, $p1, $p2) {
    this.$D2_0 = $p0;
    this.$D5_0 = $p1;
    this.$Cy_0 = $p2;
};
RTE.AutocompleteListCacheObject.prototype = {
    $D2_0: null,
    $D5_0: null,
    $Cy_0: false
};
RTE.AutocompleteListItemCacheObject = function RTE_AutocompleteListItemCacheObject($p0, $p1, $p2, $p3) {
    this.$Cz_0 = $p0;
    this.$97_0 = $p1;
    this.$6o_0 = $p2;
    this.$8z_0 = $p3;
};
RTE.AutocompleteListItemCacheObject.prototype = {
    $Cz_0: 0,
    $97_0: null,
    $6o_0: null,
    $8z_0: false
};
RTE.AutocompleteCacheObject = function RTE_AutocompleteCacheObject($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7) {
    this.$1C_0 = $p0;
    this.$v_0 = $p1;
    this.$D7_0 = $p2;
    this.$f_0 = $p3;
    this.$c_0 = $p4;
    this.$o_0 = $p5;
    this.$1A_0 = $p6;
    this.$1l_0 = $p7;
};
RTE.AutocompleteCacheObject.prototype = {
    $1C_0: null,
    $v_0: 0,
    $D7_0: false,
    $f_0: 0,
    $c_0: null,
    $o_0: null,
    $1A_0: null,
    $1l_0: null
};
RTE.RTFieldFlags = function RTE_RTFieldFlags() {
};
RTE.Canvas = function RTE_Canvas() {
};
RTE.Canvas.$LJ = function RTE_Canvas$$LJ() {
    return !RTE.Canvas.$6Z || RTE.Canvas.initialFocusOnRichText();
};
RTE.Canvas.initialFocusOnRichText = function RTE_Canvas$initialFocusOnRichText() {
    try {
        if (!RTE.SU.$7(_ribbon)) {
            var $v_0 = _ribbon.initialTabId;

            if (!RTE.SU.$2($v_0)) {
                return $v_0 === 'Ribbon.EditingTools.CPEditTab';
            }
        }
    }
    catch ($$e_1) { }
    return true;
};
RTE.Canvas.setIgnoreClear = function RTE_Canvas$setIgnoreClear(ignore) {
    RTE.Canvas.$8f = ignore;
};
RTE.Canvas.getIgnoreClear = function RTE_Canvas$getIgnoreClear() {
    return RTE.Canvas.$8f;
};
RTE.Canvas.setIgnoreUpDownArrows = function RTE_Canvas$setIgnoreUpDownArrows(ignore) {
    RTE.Canvas.$8i = ignore;
};
RTE.Canvas.getIgnoreUpDownArrows = function RTE_Canvas$getIgnoreUpDownArrows() {
    return RTE.Canvas.$8i;
};
RTE.Canvas.$37 = function RTE_Canvas$$37($p0) {
    var $v_0 = $p0;
    var $v_1 = $p0;

    while ($v_1) {
        var $v_2 = $v_1.className;

        if (!RTE.SU.$2($v_2) && $v_2.indexOf('ms-rtestate-field') !== -1) {
            $v_0 = $v_1;
            break;
        }
        $v_1 = $v_1.parentNode;
    }
    return $v_0;
};
RTE.Canvas.getEditableRegion = function RTE_Canvas$getEditableRegion(node) {
    return RTE.Canvas.$Bw(RTE.Canvas.$i, node);
};
RTE.Canvas.getRegion = function RTE_Canvas$getRegion(node) {
    return RTE.Canvas.$Bw(RTE.Canvas.$8l, node);
};
RTE.Canvas.$Bw = function RTE_Canvas$$Bw($p0, $p1) {
    $p1 = RTE.Canvas.$1w($p1);
    while ($p1) {
        if ($p0($p1)) {
            return $p1;
        }
        $p1 = RTE.Canvas.$1w($p1.parentNode);
    }
    return null;
};
RTE.Canvas.getNonEditableRegion = function RTE_Canvas$getNonEditableRegion(node) {
    var $v_0 = null;

    node = RTE.Canvas.$1w(node);
    while (node) {
        if (RTE.Canvas.$1Q(node)) {
            $v_0 = node;
        }
        else if ($v_0) {
            return $v_0;
        }
        node = RTE.Canvas.$1w(node.parentNode);
    }
    return $v_0;
};
RTE.Canvas.getDirectAtomicParent = function RTE_Canvas$getDirectAtomicParent(node) {
    var $v_0 = null;

    node = RTE.Canvas.$1w(node);
    while (node) {
        if (RTE.Canvas.$i(node)) {
            break;
        }
        else if (RTE.Canvas.$1Q(node)) {
            $v_0 = node;
        }
        else if ($v_0) {
            return $v_0;
        }
        node = RTE.Canvas.$1w(node.parentNode);
    }
    return $v_0;
};
RTE.Canvas.isEditable = function RTE_Canvas$isEditable(elem) {
    var $v_0 = RTE.Canvas.$1w(elem);

    if ($v_0 && RTE.Canvas.$8o === $v_0) {
        return true;
    }
    while ($v_0) {
        if (RTE.Canvas.$i($v_0)) {
            RTE.Canvas.$8o = $v_0;
            return true;
        }
        else if (RTE.Canvas.$1Q($v_0)) {
            return false;
        }
        $v_0 = RTE.Canvas.$1w($v_0.parentNode);
    }
    return false;
};
RTE.Canvas.isInEditable = function RTE_Canvas$isInEditable(elem) {
    var $v_0 = RTE.Canvas.$1w(elem);

    while ($v_0) {
        if (RTE.Canvas.$i($v_0)) {
            return true;
        }
        $v_0 = RTE.Canvas.$1w($v_0.parentNode);
    }
    return false;
};
RTE.Canvas.$1w = function RTE_Canvas$$1w($p0) {
    while ($p0) {
        if (RTE.Canvas.$Jm($p0)) {
            return $p0;
        }
        $p0 = $p0.parentNode;
    }
    return null;
};
RTE.Canvas.isInRedirect = function RTE_Canvas$isInRedirect(node) {
    node = RTE.Canvas.$Br(node);
    return !!node;
};
RTE.Canvas.getRedirectEditableRegion = function RTE_Canvas$getRedirectEditableRegion(node) {
    node = RTE.Canvas.$Br(node);
    if (!node) {
        return null;
    }
    var $v_0 = RTE.RteUtility.getAttribute(node, 'RteRedirect');

    if ($v_0) {
        var $v_1 = $v_0;

        return $get($v_1);
    }
    return null;
};
RTE.Canvas.$Br = function RTE_Canvas$$Br($p0) {
    while ($p0 && $p0.nodeType !== 11 && $p0.nodeType !== 9) {
        var $v_0 = RTE.RteUtility.getAttribute($p0, 'RteRedirect');

        if ($v_0) {
            return $p0;
        }
        $p0 = $p0.parentNode;
    }
    return null;
};
RTE.Canvas.$i = function RTE_Canvas$$i($p0) {
    var $v_0 = $p0.className;

    return !RTE.SU.$2($v_0) && $v_0.indexOf('ms-rtestate-write') >= 0;
};
RTE.Canvas.$8l = function RTE_Canvas$$8l($p0) {
    var $v_0 = $p0.className;

    return !RTE.SU.$2($v_0) && $v_0.indexOf('ms-rtestate-field') >= 0;
};
RTE.Canvas.$1Q = function RTE_Canvas$$1Q($p0) {
    var $v_0 = $p0.className;

    return !RTE.SU.$2($v_0) && $v_0.indexOf('ms-rtestate-read') >= 0;
};
RTE.Canvas.$Jm = function RTE_Canvas$$Jm($p0) {
    var $v_0 = $p0.className;

    return !RTE.SU.$2($v_0) && $v_0.indexOf('ms-rtestate-') >= 0;
};
RTE.Canvas.load = function RTE_Canvas$load() {
    if (RTE.Canvas.$6j) {
        return;
    }
    else {
        RTE.Canvas.$6j = true;
    }
    RTE.Canvas.$6Z = true;
    if (document.body) {
        RTE.RteUtility.$s('mouseup', RTE.Canvas.onMouseUp);
        RTE.RteUtility.$s('mousedown', RTE.Canvas.onMouseDown);
        RTE.RteUtility.$s('keypress', RTE.Cursor.onKeyPress);
        RTE.RteUtility.$s('keydown', RTE.Cursor.onKeyDown);
        RTE.RteUtility.$s('keyup', RTE.Cursor.onKeyUp);
        RTE.RteUtility.$s('paste', RTE.Cursor.$KC);
        RTE.RteUtility.$s('cut', RTE.Cursor.$Jy);
        RTE.RteUtility.$s('copy', RTE.Cursor.$Jx);
        RTE.RteUtility.$s('beforepaste', RTE.Cursor.$Js);
        RTE.RteUtility.$s('drop', RTE.Cursor.$DT);
        RTE.RteUtility.$s('deactivate', RTE.Canvas.onDeactivate);
        if (navigator && navigator.msPointerEnabled) {
            document.addEventListener('MSPointerDown', RTE.Canvas.onMSPointerDown, false);
            document.addEventListener('MSPointerUp', RTE.Canvas.onMSPointerUp, false);
            document.addEventListener('selectionchange', RTE.Canvas.onSelectionChange, false);
        }
        else {
            RTE.RteUtility.$s('touchstart', RTE.Canvas.onTouchStart);
            RTE.RteUtility.$s('touchend', RTE.Canvas.onTouchEnd);
        }
        $addHandler(document.body, 'dragstart', RTE.Cursor.$DS);
        $addHandler(document.body, 'draggesture', RTE.Cursor.$DS);
        $addHandler(document.body, 'dragend', RTE.Cursor.$K0);
        RTE.RteUtility.$s('dragover', RTE.Cursor.$K1);
        document.body.setAttribute('spellcheck', false);
        $addHandler(window.self.self, 'beforeunload', RTE.Canvas.onBeforeUnload);
        if (RTE.RteUtility.isInternetExplorer()) {
            $addHandler(document.body, 'deactivate', RTE.Canvas.onElementFocusChanged);
        }
        else if (document.addEventListener) {
            document.addEventListener('blur', RTE.Canvas.onElementFocusChanged, true);
            document.addEventListener('drop', RTE.Cursor.$DT, true);
        }
        if (RTE.RteUtility.isFirefox()) {
            RTE.RteUtility.$s('DOMNodeInserted', RTE.Canvas.$Jz);
        }
    }
    try {
        window.document.execCommand('EnableInlineTableEditing', false, false);
    }
    catch ($$e_0) { }
    window.setTimeout(RTE.RteUtility.$85, 1800000);
    RTE.CanvasEvents.registerListener('EditableRegionBlur', RTE.CanvasEvents.onEditableRegionBlur);
    RTE.CanvasEvents.registerListener('EditableRegionFocus', RTE.CanvasEvents.onEditableRegionFocus);
    RTE.CanvasEvents.registerListener('ImageFocus', RTE.CanvasEvents.onImageSelected);
    RTE.CanvasEvents.registerListener('ImageBlur', RTE.CanvasEvents.onImageDeselected);
    RTE.CanvasEvents.registerListener('AtomicFocus', RTE.CanvasEvents.onAtomicSelected);
    RTE.CanvasEvents.registerListener('AtomicBlur', RTE.CanvasEvents.onAtomicDeselected);
    RTE.CanvasEvents.registerListener('LinkBlur', RTE.CanvasEvents.onLinkDeselected);
    RTE.CanvasEvents.registerListener('TableBlur', RTE.CanvasEvents.onTableDeselected);
    RTE.CanvasEvents.registerListener('ElementAdded', RTE.EmbeddingCommands.$Hb);
    var $v_0 = window._spRteFieldEditableRegionIds;

    if (!RTE.SU.$7($v_0)) {
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];

            RTE.Canvas.fixRegion($v_2, true);
        }
    }
    RTE.DirtyBitManager.start();
    RTE.Canvas.setInitialFocus();
    RTE.Canvas.$6Z = false;
};
RTE.Canvas.loadPageComponent = function RTE_Canvas$loadPageComponent() {
    RTE.Imports.ExecuteOrDelayUntilScriptLoaded(RTE.RichTextEditorComponent.$EY, 'sp.ribbon.js');
};
RTE.Canvas.restoreViewHtml = function RTE_Canvas$restoreViewHtml(editableRegion) {
    var $v_0 = editableRegion.id;

    if (!RTE.SU.$2($v_0)) {
        for (var $v_2 = 0; $v_2 < RTE.Canvas.$5U.length; $v_2++) {
            if ($v_0 === RTE.Canvas.$5U[$v_2]) {
                return;
            }
        }
        RTE.Canvas.$5U[RTE.Canvas.$5U.length] = $v_0;
    }
    var $v_1 = RTE.RteUtility.getAttribute(editableRegion, 'InputFieldId');

    if ($v_1) {
        var $v_3 = $get($v_1);

        if ($v_3) {
            var $v_4 = new RTE.Snapshot();

            $v_4.$Q_0 = editableRegion;
            $v_4.$8Q_0 = true;
            $v_4.set_$8d_0($v_3.value);
            $v_4.$E3_0(false);
        }
    }
};
RTE.Canvas.storeViewHtml = function RTE_Canvas$storeViewHtml(editableRegion) {
    var $v_0 = RTE.RteUtility.getAttribute(editableRegion, 'InputFieldId');

    if ($v_0) {
        var $v_1 = $get($v_0);

        if ($v_1) {
            $v_1.value = editableRegion.innerHTML;
        }
    }
};
RTE.Canvas.$8Z = function RTE_Canvas$$8Z($p0) {
    var $v_0 = $p0;

    if (!Sys.UI.DomElement.containsCssClass($p0, 'ms-inputBox')) {
        var $v_1 = $p0.parentNode;

        while ($v_1 && ($v_1.tagName === 'DIV' || $v_1.tagName === 'SPAN')) {
            if (Sys.UI.DomElement.containsCssClass($v_1, 'ms-rtestate-field')) {
                $v_0 = $v_1;
                break;
            }
            $v_1 = $v_1.parentNode;
        }
    }
    return $v_0;
};
RTE.Canvas.$F2 = function RTE_Canvas$$F2($p0) {
    var $v_0 = RTE.Canvas.$8Z($p0);
    var $v_1 = $v_0;

    do {
        if (Sys.UI.DomElement.containsCssClass($v_1, 'ms-inputBox')) {
            break;
        }
        if (Sys.UI.DomElement.containsCssClass($v_1, 'ms-formbody')) {
            Sys.UI.DomElement.addCssClass($v_0, 'ms-inputBox');
            $v_0.style.display = '';
            break;
        }
        $v_1 = $v_1.parentNode;
    } while ($v_1 && $v_1 !== document.body);
};
RTE.Canvas.$L4 = function RTE_Canvas$$L4($p0) {
    var $v_0 = RTE.Canvas.$8Z($p0);

    if (!Sys.UI.DomElement.containsCssClass($v_0, 'ms-inputBox')) {
        return;
    }
    Sys.UI.DomElement.addCssClass($v_0, 'ms-inputBoxActive');
};
RTE.Canvas.$LD = function RTE_Canvas$$LD($p0) {
    var $v_0 = RTE.Canvas.$8Z($p0);

    if (!Sys.UI.DomElement.containsCssClass($v_0, 'ms-inputBox')) {
        return;
    }
    Sys.UI.DomElement.removeCssClass($v_0, 'ms-inputBoxActive');
};
RTE.Canvas.$L3 = function RTE_Canvas$$L3() {
    if (RTE.RteUtility.isFirefox()) {
        if (RTE.Canvas.$27 > 0) {
            window.clearTimeout(RTE.Canvas.$27);
            RTE.Canvas.$27 = 0;
        }
        RTE.Canvas.$E6();
    }
    else {
        RTE.Canvas.$P();
    }
};
RTE.Canvas.$P = function RTE_Canvas$$P() {
    if (RTE.Canvas.$27 <= 0) {
        RTE.Canvas.$27 = window.setTimeout(RTE.Canvas.$E6, 0);
    }
};
RTE.Canvas.$E6 = function RTE_Canvas$$E6() {
    RTE.Canvas.$27 = 0;
    RTE.Imports.ExecuteOrDelayUntilScriptLoaded(RTE.Canvas.$Lg, 'sp.ribbon.js');
};
RTE.Canvas.$Lg = function RTE_Canvas$$Lg() {
    var $v_0 = RTE.RichTextEditorComponent.$4s();

    if ($v_0) {
        ($v_0.get_commandDispatcher()).executeCommand(Commands.CommandIds.ApplicationStateChanged, null);
    }
};
RTE.Canvas.fixRegion = function RTE_Canvas$fixRegion(regionId, restoreViewHtml) {
    if (!RTE.Canvas.$6j) {
        RTE.Canvas.load();
    }
    if (arguments.length === 1) {
        restoreViewHtml = true;
    }
    if (!RTE.Canvas.$1N) {
        RTE.Canvas.$1N = [];
        RTE.Canvas.$2o = {};
    }
    var $v_0;

    if (RTE.SU.$7(RTE.Canvas.$2o[regionId])) {
        $v_0 = RTE.Canvas.$1N.length;
    }
    else {
        $v_0 = RTE.Canvas.$2o[regionId];
    }
    var $v_1 = $get(regionId);

    if ($v_1) {
        RTE.Canvas.$F2($v_1);
        if (restoreViewHtml) {
            RTE.Canvas.restoreViewHtml($v_1);
        }
        else {
            RTE.Canvas.$4n($v_1);
        }
        var $v_2 = $v_1.parentNode;

        for (var $v_4 = 0; $v_4 < 3 && $v_2; $v_4++) {
            if ($v_2.tagName === 'TD' && Sys.UI.DomElement.containsCssClass($v_2, 'ms-formbody')) {
                $v_2.RteRedirect = regionId;
                break;
            }
            $v_2 = $v_2.parentNode;
        }
        var $v_3 = RTE.Canvas.$ID($v_1);

        if (0 !== ($v_3 & RTE.RTFieldFlags.$Dq)) {
            RTE.Canvas.$1h = $v_1;
        }
        if (RTE.SU.$2($v_1.className) || !Sys.UI.DomElement.containsCssClass($v_1, 'ms-rtestate-field')) {
            Sys.UI.DomElement.addCssClass($v_1, 'ms-rtestate-field');
        }
        if (RTE.Canvas.$8n($v_1)) {
            RTE.LayoutsEditor.create($v_1);
        }
        else {
            RTE.Canvas.makeRegionEditable($v_1);
            RTE.Canvas.$9D($v_1);
        }
        RTE.Canvas.$1N[$v_0] = $v_1;
        RTE.Canvas.$2o[regionId] = $v_0;
    }
};
RTE.Canvas.$4n = function RTE_Canvas$$4n($p0) {
    RTE.RteUtility.forEachChildWithTagAndClass($p0, null, 'ms-rtestate-notify', function($p1_0) {
        var $v_0 = {};

        $v_0.node = $p1_0;
        RTE.CanvasEvents.dispatchEvent('ElementAdded', 'restore', $v_0);
    });
};
RTE.Canvas.$Kl = function RTE_Canvas$$Kl($p0) {
    if (!RTE.Canvas.$1N) {
        return;
    }
    var $v_0 = RTE.Canvas.$2o[$p0];

    if (RTE.SU.$7($v_0)) {
        return;
    }
    var $v_1 = RTE.Canvas.$1N.length;
    var $v_2 = RTE.Canvas.$1N[$v_1 - 1];

    RTE.Canvas.$1N[$v_0] = $v_2;
    RTE.Canvas.$2o[$v_2.id] = $v_0;
    Array.removeAt(RTE.Canvas.$1N, $v_1 - 1);
    delete RTE.Canvas.$2o[$p0];
};
RTE.Canvas.revertWikiRegion = function RTE_Canvas$revertWikiRegion(regionId) {
    if (RTE.Canvas.$4H) {
        RTE.Canvas.$4H.stop();
    }
    RTE.Canvas.$Kl(regionId);
    var $v_0 = RTE.Cursor.get_range();

    if ($v_0) {
        $v_0.clear();
    }
    try {
        document.body.focus();
    }
    catch ($$e_2) { }
    RTE.Canvas.$1D = false;
    RTE.Cursor.update();
};
RTE.Canvas.$9D = function RTE_Canvas$$9D($p0) {
    if (!RTE.RteUtility.$4c($p0)) {
        var $v_0 = document.createElement('P');

        $v_0.appendChild(RTE.RteUtility.createTextNode($p0.ownerDocument, RTE.RteUtility.$2p));
        $p0.appendChild($v_0);
    }
};
RTE.Canvas.$6E = function RTE_Canvas$$6E($p0) {
    window.document.execCommand($p0, false, null);
};
RTE.Canvas.$8N = function RTE_Canvas$$8N($p0) {
    RTE.Cursor.s_range.$65_0();
    RTE.Canvas.$6E($p0);
    RTE.Cursor.updateRangeToCurrentSelection();
    RTE.Cursor.update();
};
RTE.Canvas.$BP = function RTE_Canvas$$BP($p0) {
    var $v_0 = new RTE.CommandState();

    if (RTE.Canvas.$6F($p0)) {
        $v_0.$B_0 = true;
        try {
            if (window.document.queryCommandState($p0)) {
                $v_0.$1I_0 = true;
            }
        }
        catch ($$e_2) { }
    }
    return $v_0;
};
RTE.Canvas.$6F = function RTE_Canvas$$6F($p0) {
    try {
        RTE.Cursor.ignoreBeforePasteOrDrop = true;
        var $v_0 = window.document.queryCommandEnabled($p0);

        RTE.Cursor.ignoreBeforePasteOrDrop = false;
        return $v_0;
    }
    catch ($$e_2) {
        RTE.Cursor.ignoreBeforePasteOrDrop = false;
        return false;
    }
};
RTE.Canvas.$6L = function RTE_Canvas$$6L($p0) {
    while ($p0 && RTE.Canvas.$1Q($p0.parentNode)) {
        $p0 = $p0.parentNode;
    }
    return $p0;
};
RTE.Canvas.$5c = function RTE_Canvas$$5c($p0) {
    var $v_0 = RTE.Canvas.$2P ? Sys.UI.DomElement.containsCssClass(RTE.Canvas.$2P, 'ms-rte-wpbox') : false;
    var $v_1 = $p0 ? Sys.UI.DomElement.containsCssClass($p0, 'ms-rte-wpbox') : false;

    RTE.Canvas.set_$R($p0);
    if (!!($v_0 ^ $v_1)) {
        if ($v_1) {
            var $v_2 = null;

            RTE.RteUtility.forEachChildWithTagAndClass($p0, 'TD', 's4-wpcell', function($p1_0) {
                if (!$v_2 && !RTE.SU.$2($p1_0.id) && $p1_0.id.startsWith('MSOZoneCell')) {
                    $v_2 = $p1_0;
                }
            });
            if ($v_2) {
                if (window.SelectWp) {
                    window.SelectWp($v_2);
                }
            }
        }
        else {
            if (window.DeselectWpWz) {
                window.DeselectWpWz();
            }
        }
    }
};
RTE.Canvas.get_$R = function RTE_Canvas$get_$R() {
    return RTE.Canvas.$2P;
};
RTE.Canvas.set_$R = function RTE_Canvas$set_$R($p0) {
    RTE.Canvas.$2P = RTE.Canvas.$6L($p0);
    return $p0;
};
RTE.Canvas.onMouseDown = function RTE_Canvas$onMouseDown(evt) {
    var $v_0 = evt.target;

    RTE.Canvas.$ES();
    RTE.Canvas.$3m = true;
    if (!RTE.RteUtility.$2b($v_0)) {
        return;
    }
    RTE.Canvas.$3Q = null;
    RTE.Canvas.set_$R(null);
    RTE.Canvas.$2w = null;
    if (RTE.Canvas.isInEditable($v_0)) {
        var $v_1 = RTE.RteUtility.$Hz($v_0);

        if ($v_1 && evt.ctrlKey && !evt.shiftKey) {
            window.open($v_1.href);
        }
        if (RTE.RteUtility.isSafari() && $v_0 && $v_0.tagName === 'IMG') {
            (RTE.Cursor.get_range()).moveToNode($v_0);
            RTE.Cursor.select();
        }
        var $v_2;

        if (RTE.RteUtility.isFirefox() && null !== ($v_2 = RTE.RteUtility.$2d($v_0, ['TD', 'TH'])) && RTE.Canvas.isInEditable($v_2)) {
            RTE.Canvas.$2w = $v_2;
        }
        var $v_3 = RTE.Canvas.getEditableRegion($v_0);

        if ($v_0 === $v_3) {
            var $v_4 = RTE.RteUtility.$1e($v_0, true);

            if ($v_4 && $v_4.nodeType === 1 && $v_4.offsetParent === $v_0.offsetParent && evt.offsetY > $v_4.offsetTop - $v_0.offsetTop + $v_4.clientHeight && ($v_4.tagName === 'TABLE' || RTE.Canvas.$1Q($v_4))) {
                var $v_5 = RTE.RteUtility.$4d($v_0.ownerDocument);

                $v_0.appendChild($v_5);
                (RTE.Cursor.get_range()).moveToStartOfNode($v_5);
                RTE.Cursor.update();
                SP.UI.UIUtility.cancelEvent(evt);
                return;
            }
        }
        if (!RTE.Canvas.isEditable($v_0)) {
            RTE.Canvas.set_$R(RTE.Cursor.$Ia($v_0));
            if (RTE.Canvas.get_$R()) {
                var $v_6 = $v_0.tagName;

                if (!RTE.Canvas.$3x($v_6)) {
                    if (!RTE.Canvas.$5P) {
                        RTE.Canvas.$56 = null;
                        RTE.RteUtility.$s('mousemove', RTE.Canvas.$9F);
                        RTE.Canvas.$5P = true;
                    }
                    RTE.Canvas.$6B = true;
                    RTE.Canvas.$9i = RTE.Canvas.$2P.style.cssText;
                    if (RTE.RteUtility.getAttribute(RTE.Canvas.get_$R(), 'unselectable') !== 'on') {
                        RTE.Canvas.$D8(RTE.Canvas.get_$R());
                    }
                    RTE.Cursor.s_range.moveToNode(RTE.Canvas.get_$R());
                    RTE.Cursor.select();
                }
            }
        }
    }
    else {
        RTE.Canvas.$3Q = $v_0;
    }
    if (RTE.PasteFlyout.get_isVisible()) {
        window.setTimeout(RTE.PasteFlyout.collapseOptions, 0);
    }
    if (!RTE.PasteFlyout.get_isVisible() && RTE.SnapshotManager.$1z(RTE.Canvas.currentEditableRegion())) {
        RTE.SnapshotManager.takeSnapshot();
    }
};
RTE.Canvas.$3x = function RTE_Canvas$$3x($p0) {
    return $p0 === 'TEXTAREA' || $p0 === 'INPUT' || $p0 === 'IFRAME' || $p0 === 'OBJECT' || $p0 === 'EMBED';
};
RTE.Canvas.$Cf = function RTE_Canvas$$Cf($p0) {
    return $p0 === 'SELECT' || $p0 === 'OPTION' || $p0 === 'INPUT';
};
RTE.Canvas.$D8 = function RTE_Canvas$$D8($p0) {
    $p0.setAttribute('unselectable', 'on');
    var $v_0 = $p0.getElementsByTagName('*');
    var $v_1 = RTE.Canvas.getEditableRegion($p0);

    for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
        var $v_3 = $v_0[$v_2];

        if (!RTE.Canvas.$3x($v_3.tagName) && !SP.UI.UIUtility.isTextNode($v_3) && !SP.UI.UIUtility.isSvgNode($v_3) && $v_1 === RTE.Canvas.getEditableRegion($v_3)) {
            $v_3.setAttribute('unselectable', 'on');
        }
    }
};
RTE.Canvas.$Ds = function RTE_Canvas$$Ds() {
    if (RTE.Canvas.$41) {
        RTE.Canvas.$41.style.cursor = RTE.Canvas.$9H;
        RTE.Canvas.$41 = null;
    }
};
RTE.Canvas.onMouseMove = function RTE_Canvas$onMouseMove(evt) {
    if (RTE.Canvas.$2P) {
        RTE.Canvas.$DD(evt);
    }
};
RTE.Canvas.$DD = function RTE_Canvas$$DD($p0) {
    try {
        var $v_0 = RTE.RteUtility.$HU($p0.rawEvent);

        if ($v_0) {
            var $v_1 = $v_0.commonAncestorContainer || $v_0.parentElement();
            var $v_2 = RTE.Canvas.getEditableRegion($v_1);

            if ($v_2 !== RTE.Canvas.$41 && $v_2) {
                RTE.Canvas.$Ds();
                RTE.Canvas.$9H = $v_2.style.cursor;
                $v_2.style.cursor = 'move';
                RTE.Canvas.$41 = $v_2;
            }
            if (RTE.Canvas.isEditable($v_1)) {
                RTE.Canvas.$56 = $v_0;
            }
        }
        if (RTE.Canvas.$56) {
            window.setTimeout(function() {
                RTE.Range.$9j(RTE.Canvas.$56);
            }, 0);
        }
    }
    catch ($$e_4) { }
};
RTE.Canvas.onMSPointerDown = function RTE_Canvas$onMSPointerDown(evt) {
    var $v_0 = evt.pointerType;

    if (typeof $v_0 !== 'undefined' && $v_0 === 2) {
        RTE.Canvas.onMouseDown(evt);
    }
};
RTE.Canvas.onMSPointerUp = function RTE_Canvas$onMSPointerUp(evt) {
    var $v_0 = evt.pointerType;

    if (typeof $v_0 !== 'undefined' && $v_0 === 2) {
        RTE.Canvas.onMouseUp(evt);
    }
};
RTE.Canvas.onSelectionChange = function RTE_Canvas$onSelectionChange(evt) {
    try {
        if (RTE.Canvas.$3m || RTE.Cursor.$39 || !RTE.RteUtility.$2b(evt.target) || SP.UI.ModalDialog.get_childDialog()) {
            return;
        }
        var $v_1 = RTE.Canvas.currentEditableRegion();

        if (!$v_1 || !evt.target || evt.target.ownerDocument && $v_1.ownerDocument !== evt.target.ownerDocument || evt.target !== $v_1.ownerDocument) {
            return;
        }
    }
    catch ($$e_2) {
        return;
    }
    var $v_0 = RTE.QuickRange.$3s();

    if ($v_0 && $v_0.get_$3y_0()) {
        var $v_2 = $v_0.get_$9U_0();
        var $v_3 = $v_0.get_$9T_0();

        if (RTE.Cursor.s_range.isValid()) {
            var $v_4 = $v_2 === RTE.Cursor.s_range.$4_0 || $v_2.previousSibling === RTE.Cursor.s_range.$4_0 || $v_2.nextSibling === RTE.Cursor.s_range.$4_0;
            var $v_5 = $v_3 === RTE.Cursor.s_range.$3_0 || $v_3.previousSibling === RTE.Cursor.s_range.$3_0 || $v_3.nextSibling === RTE.Cursor.s_range.$3_0;

            if (RTE.Cursor.s_range.isEmpty() && $v_2 === $v_3 && $v_0.$2t_0 === $v_0.$2F_0 && ($v_4 || $v_5) || $v_4 && $v_5) {
                return;
            }
        }
        RTE.Cursor.waitAndUpdateRangeToCurrentSelection(false, RTE.Canvas.$EW);
    }
};
RTE.Canvas.onTouchStart = function RTE_Canvas$onTouchStart(evt) {
    RTE.Canvas.onMouseDown(evt);
};
RTE.Canvas.onTouchEnd = function RTE_Canvas$onTouchEnd(evt) {
    if (!RTE.RteUtility.$2b(evt.target)) {
        return;
    }
    RTE.Cursor.cursorRangeIsNowOutdated();
    RTE.Canvas.$BI(evt);
    RTE.CanvasEvents.onImageResize(evt);
};
RTE.Canvas.onMouseUp = function RTE_Canvas$onMouseUp(evt) {
    RTE.Canvas.$3m = false;
    if (RTE.RteUtility.isInternetExplorer() && RTE.Canvas.$3Q && RTE.Canvas.$3Q === evt.target && !RTE.Canvas.$Cf(evt.target.tagName)) {
        var $v_0 = RTE.Cursor.getSelectedImage();

        if ($v_0 && $v_0 !== RTE.Canvas.$3Q) {
            var $v_1 = RTE.RteUtility.$IX($v_0);
            var $v_2 = evt.clientX;
            var $v_3 = evt.clientY;

            if ($v_2 >= $v_1.x && $v_2 <= $v_1.x + $v_0.offsetWidth && $v_3 >= $v_1.y && $v_3 <= $v_1.y + $v_0.offsetHeight) {
                RTE.Canvas.$3Q.click();
            }
        }
    }
    if (RTE.RteUtility.isFirefox() && RTE.Canvas.$2w) {
        var $v_4 = RTE.RteUtility.$2d(evt.target, ['TD', 'TH']);

        if ($v_4 && RTE.Canvas.$2w !== $v_4) {
            if (RTE.RteUtility.$G(RTE.Canvas.$2w, 'TABLE') === RTE.RteUtility.$G($v_4, 'TABLE')) {
                RTE.Canvas.$2w.insertBefore(RTE.Cursor.s_range.$4_0, RTE.Canvas.$2w.firstChild);
                $v_4.appendChild(RTE.Cursor.s_range.$3_0);
                RTE.Cursor.update();
            }
        }
    }
    RTE.Canvas.$Lf(evt);
    RTE.Canvas.$BI(evt);
    RTE.CanvasEvents.onImageResize(evt);
    if (RTE.Cursor.$24) {
        RTE.Cursor.s_range.clear();
    }
};
RTE.Canvas.$BI = function RTE_Canvas$$BI($p0) {
    if (RTE.Canvas.$2P && RTE.Canvas.$6B) {
        var $v_0 = RTE.Canvas.$2P;
        var $v_1 = RTE.Canvas.getNonEditableRegion($p0.target);

        if (!$v_1) {
            RTE.Canvas.set_$R(null);
            RTE.Canvas.$DD($p0);
            RTE.Cursor.updateRangeToCurrentSelection();
            var $v_2 = RTE.Cursor.get_range();

            RTE.Canvas.set_$R($v_0);
            if ($v_2.isValid()) {
                $v_2.insertNode($v_0);
                $v_2.moveToNode($v_0);
                window.setTimeout(RTE.Cursor.update, 0);
            }
        }
        $v_0.style.cssText = RTE.Canvas.$9i;
        RTE.Canvas.$ES();
    }
};
RTE.Canvas.$ES = function RTE_Canvas$$ES() {
    if (RTE.Canvas.$5P) {
        RTE.RteUtility.$BC('mousemove', RTE.Canvas.$9F);
        RTE.Canvas.$5P = false;
    }
    RTE.Canvas.$6B = false;
    RTE.Canvas.$Ds();
};
RTE.Canvas.onElementFocusChanged = function RTE_Canvas$onElementFocusChanged(evt) {
    if (evt.target && RTE.Cursor.$24) {
        var $v_0 = RTE.Canvas.getEditableRegion(evt.target);

        if ($v_0) {
            RTE.CanvasEvents.dispatchChangedOnEditableRegion($v_0);
        }
    }
};
RTE.Canvas.onDeactivate = function RTE_Canvas$onDeactivate(evt) {
    var $v_0 = evt.rawEvent.toElement;

    if ($v_0 && $v_0.ownerDocument !== window.document) {
        RTE.Canvas.$Eb($v_0, evt);
    }
};
RTE.Canvas.$Lf = function RTE_Canvas$$Lf($p0) {
    RTE.Canvas.$Eb($p0.target, $p0);
};
RTE.Canvas.$Eb = function RTE_Canvas$$Eb($p0, $p1) {
    if ($p0 && $p0.parentNode && RTE.RteUtility.$2b($p0)) {
        if (RTE.Canvas.get_activeAutocomplete()) {
            (RTE.Canvas.get_activeAutocomplete()).stop();
        }
        var $v_0 = RTE.Canvas.getRedirectEditableRegion($p0);

        if ($v_0 && RTE.Canvas.$JG($v_0)) {
            RTE.Canvas.moveToRedirect($p0, $v_0);
            $p1.preventDefault();
            return;
        }
        RTE.Cursor.$52 = true;
        if (RTE.Canvas.$Cf($p0.tagName)) {
            RTE.Cursor.$4a();
        }
        else {
            RTE.Cursor.waitAndUpdateRangeToCurrentSelection(false, 300);
        }
    }
};
RTE.Canvas.setRedirectOnNode = function RTE_Canvas$setRedirectOnNode(node, editableRegionID) {
    node.RteRedirect = editableRegionID;
};
RTE.Canvas.moveToRedirectIfItExist = function RTE_Canvas$moveToRedirectIfItExist(node) {
    var $v_0 = RTE.Canvas.getRedirectEditableRegion(node);

    if ($v_0) {
        if (RTE.Canvas.moveToRedirect(node, $v_0)) {
            if (window.event) {
                SP.UI.UIUtility.cancelEvent(new Sys.UI.DomEvent(window.event));
            }
            return true;
        }
    }
    return false;
};
RTE.Canvas.moveToRedirect = function RTE_Canvas$moveToRedirect(node, redirectToEditableRegion) {
    var $v_0 = RTE.Canvas.getEditableRegion(node);

    if (!$v_0 || redirectToEditableRegion !== $v_0) {
        if (redirectToEditableRegion.innerHTML === '') {
            redirectToEditableRegion.innerText = RTE.RteUtility.$2p;
        }
        window.setTimeout(RTE.Canvas.$Lh, 2000);
        (RTE.Cursor.get_range()).moveToEndOfNode(redirectToEditableRegion);
        if (RTE.RteUtility.isFirefox()) {
            RTE.CanvasEvents.$8I();
            RTE.Cursor.select();
            redirectToEditableRegion.focus();
        }
        else {
            RTE.RteUtility.focusNoFail(redirectToEditableRegion);
            RTE.Cursor.update();
        }
        return true;
    }
    return false;
};
RTE.Canvas.$Lh = function RTE_Canvas$$Lh() {
    if (!RTE.Cursor.$3C) {
        RTE.Cursor.$9y();
        RTE.Cursor.$39 = true;
        document.body.focus();
        RTE.Cursor.select();
        RTE.Cursor.$39 = false;
    }
};
RTE.Canvas.$Lc = function RTE_Canvas$$Lc($p0) {
    if (RTE.Canvas.$4z($p0)) {
        RTE.Canvas.showEmptyPanel($p0);
    }
};
RTE.Canvas.showEmptyPanel = function RTE_Canvas$showEmptyPanel(editableRegion) {
    RTE.Canvas.$EK(editableRegion, '', 'none');
};
RTE.Canvas.hideEmptyPanel = function RTE_Canvas$hideEmptyPanel(editableRegion) {
    RTE.Canvas.$EK(editableRegion, 'none', '');
};
RTE.Canvas.$Jz = function RTE_Canvas$$Jz($p0) {
    var $v_0 = $p0.target;

    if (!SP.UI.UIUtility.isTextNode($v_0) && $v_0.tagName !== 'BR') {
        return;
    }
    if (RTE.Cursor.$14) {
        return;
    }
    var $v_1 = $v_0;

    if (!$v_1) {
        return;
    }
    var $v_2 = false;
    var $v_3 = null;

    while ($v_1) {
        var $v_7 = $v_1.className;

        if ($v_7 && $v_7.indexOf('ms-rtestate-write') !== -1) {
            $v_2 = true;
            $v_3 = $v_1;
            if (!RTE.Canvas.getCachedRestriction($v_1, 'AllowMultiLines', true)) {
                return;
            }
            break;
        }
        if (RTE.RteUtility.$N($v_1)) {
            return;
        }
        $v_1 = $v_1.parentNode;
    }
    if (!$v_2) {
        return;
    }
    var $v_4 = $v_3.childNodes;
    var $v_5 = $v_4.length;

    for (var $v_8 = 0; $v_8 < $v_5; $v_8++) {
        var $v_9 = $v_4[$v_8];

        if ($v_9 !== $v_0 && (!$v_9.id || $v_9.id.indexOf('ms-rterangecursor') === -1)) {
            return;
        }
    }
    if (SP.UI.UIUtility.isTextNode($v_0)) {
        var $v_A = $v_0.nodeValue;

        if ($v_A.replace(RTE.Canvas.$Ei, '') === '') {
            return;
        }
    }
    var $v_6 = document.createElement('P');

    $v_0.parentNode.insertBefore($v_6, $v_0);
    $v_6.appendChild($v_0);
    if ($v_0.tagName === 'BR') {
        RTE.Canvas.$5y = $v_0;
        window.setTimeout(RTE.Canvas.$Kf, 0);
    }
    (RTE.Cursor.get_range()).$65_0();
    RTE.Cursor.cursorRangeIsNowOutdated();
};
RTE.Canvas.$Kf = function RTE_Canvas$$Kf() {
    if (!RTE.Canvas.$5y) {
        return;
    }
    RTE.RteUtility.$J(RTE.Canvas.$5y);
};
RTE.Canvas.$4z = function RTE_Canvas$$4z($p0) {
    if ($p0.childNodes.length < 10) {
        var $v_0 = $p0.innerHTML;

        $v_0 = RTE.RteUtility.$4B($v_0, false, true);
        $v_0 = $v_0.replace(RTE.RteUtility.$2p, '');
        $v_0 = $v_0.toLowerCase();
        if ($v_0 === '' || $v_0 === '<br>' || $v_0 === '<p></p>' || $v_0 === '<p><br></p>' || $v_0 === '<p><br/></p>' || $v_0 === '<p>&nbsp;</p>') {
            return true;
        }
    }
    return false;
};
RTE.Canvas.$JG = function RTE_Canvas$$JG($p0) {
    var $v_0 = RTE.Canvas.getProperty($p0, 'EmptyPanelId');

    if (!RTE.SU.$2($v_0)) {
        var $v_1 = $get($v_0);

        if ($v_1) {
            return $v_1.style.display !== 'none';
        }
    }
    return false;
};
RTE.Canvas.$EK = function RTE_Canvas$$EK($p0, $p1, $p2) {
    var $v_0 = RTE.Canvas.getProperty($p0, 'EmptyPanelId');

    if (!RTE.SU.$2($v_0)) {
        var $v_1 = $get($v_0);

        $v_1.style.display = $p1;
        var $v_2 = RTE.Canvas.getProperty($p0, 'DisplayPanelId');
        var $v_3 = $p0;

        if (!RTE.SU.$2($v_2)) {
            $v_3 = $get($v_2);
        }
        if ($v_3.style.display !== $p2) {
            $v_3.style.display = $p2;
            if ($p2 !== 'none' && !(RTE.Cursor.get_range()).isValid()) {
                (RTE.Cursor.get_range()).moveToEndOfNode($v_3);
                RTE.Cursor.update();
            }
        }
        var $v_4 = $v_3.nextSibling;

        if ($v_4 && $v_4.className === 'ms-rteclear' && $v_4.style.display !== $p2) {
            $v_4.style.display = $p2;
        }
    }
};
RTE.Canvas.getEditableRegionHtml = function RTE_Canvas$getEditableRegionHtml(editableRegion, keepCursorMarkup) {
    if (!editableRegion) {
        return null;
    }
    var $v_0 = RTE.RteUtility.getAttribute(editableRegion, 'dir');
    var $v_1 = RTE.RteUtility.$I9(editableRegion, keepCursorMarkup);

    if (RTE.Canvas.$4z(editableRegion)) {
        return '';
    }
    else if (!RTE.SU.$2($v_0)) {
        return '<div class=\"ms-rtedir\" dir=\"' + $v_0 + '\">' + $v_1 + '</div>';
    }
    else {
        return $v_1;
    }
};
RTE.Canvas.currentEditableRegion = function RTE_Canvas$currentEditableRegion() {
    return RTE.CanvasEvents.$2E;
};
RTE.Canvas.getRTEFieldRegion = function RTE_Canvas$getRTEFieldRegion() {
    if (!RTE.Canvas.$1N) {
        return null;
    }
    var $v_0 = RTE.Canvas.$1N.length;

    if (1 === $v_0) {
        return RTE.Canvas.$1N[0];
    }
    else {
        var $v_1 = RTE.Canvas.currentEditableRegion();

        for (var $v_2 = 0; $v_2 < $v_0; $v_2++) {
            var $v_3 = RTE.Canvas.$1N[$v_2];

            if ($v_1 === $v_3 || RTE.RteUtility.$b($v_1, $v_3, null)) {
                return $v_3;
            }
        }
    }
    return null;
};
RTE.Canvas.currentRegionWikilinkEnabled = function RTE_Canvas$currentRegionWikilinkEnabled() {
    var $v_0 = RTE.Canvas.getRTEFieldRegion();

    if (!$v_0) {
        return false;
    }
    var $v_1 = RTE.Canvas.getProperty($v_0, 'WikiLinking');

    return !RTE.SU.$2($v_1) && 'on' === $v_1.toLowerCase();
};
RTE.Canvas.get_activeAutocomplete = function RTE_Canvas$get_activeAutocomplete() {
    if (RTE.Canvas.$4E && !RTE.Canvas.$4E.get_isStarted()) {
        RTE.Canvas.$4E = null;
    }
    return RTE.Canvas.$4E;
};
RTE.Canvas.get_autocompleteHandlers = function RTE_Canvas$get_autocompleteHandlers() {
    if (!RTE.Canvas.$7K) {
        RTE.Canvas.$7K = new Array(0);
        RTE.Canvas.registerAutocomplete(new RTE.WikiLinkAutoComplete(RTE.Canvas.getWikiLinkAutocomplete()));
    }
    return RTE.Canvas.$7K;
};
RTE.Canvas.invokeInAutoComplete = function RTE_Canvas$invokeInAutoComplete(action) {
    var $v_0 = RTE.Canvas.get_activeAutocomplete();

    if ($v_0) {
        return action($v_0);
    }
    var $v_1 = false;
    var $v_2 = RTE.Canvas.get_autocompleteHandlers();

    for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
        var $v_4 = $v_2[$v_3];

        $v_1 = $v_1 || action($v_4);
        if ($v_4.get_isStarted()) {
            RTE.Canvas.$4E = $v_4;
            break;
        }
    }
    return $v_1;
};
RTE.Canvas.registerAutocomplete = function RTE_Canvas$registerAutocomplete(autoCompleteSource) {
    Array.add(RTE.Canvas.get_autocompleteHandlers(), autoCompleteSource);
};
RTE.Canvas.getWikiLinkAutocomplete = function RTE_Canvas$getWikiLinkAutocomplete() {
    if (!RTE.Canvas.$4H) {
        RTE.Canvas.$4H = new RTE.Autocomplete('SPRTEWikiAutocomplete', window.document, new RTE.AutocompleteWikiLinkSource());
    }
    return RTE.Canvas.$4H;
};
RTE.Canvas.isMultiline = function RTE_Canvas$isMultiline(editableRegion) {
    return RTE.Canvas.getCachedRestriction(editableRegion, 'AllowMultiLines', true);
};
RTE.Canvas.getCachedRestriction = function RTE_Canvas$getCachedRestriction(editableRegion, restrictionName, defaultValue) {
    if (!editableRegion) {
        return defaultValue;
    }
    if (RTE.Canvas.$80 !== editableRegion) {
        RTE.Canvas.resetCacheRestriction();
        RTE.Canvas.$80 = editableRegion;
    }
    var $v_0 = RTE.Canvas.$61[restrictionName];

    if (typeof $v_0 === 'undefined') {
        $v_0 = RTE.Canvas.getRestriction(editableRegion, restrictionName, defaultValue);
        RTE.Canvas.$61[restrictionName] = $v_0;
    }
    return $v_0;
};
RTE.Canvas.resetCacheRestriction = function RTE_Canvas$resetCacheRestriction() {
    RTE.Canvas.$61 = {};
};
RTE.Canvas.getRestriction = function RTE_Canvas$getRestriction(editableRegion, restrictionName, defaultValue) {
    return RTE.Canvas.getStringRestriction(editableRegion, restrictionName, defaultValue ? 'True' : 'False') === 'True';
};
RTE.Canvas.getStringRestriction = function RTE_Canvas$getStringRestriction(editableRegion, restrictionName, defaultValue) {
    if (!editableRegion) {
        return defaultValue;
    }
    var $v_0 = RTE.RteUtility.getAttribute(editableRegion, restrictionName);

    if (!$v_0) {
        if (editableRegion.className.indexOf('ms-rtestate-field') !== -1) {
            return defaultValue;
        }
        var $v_1 = RTE.Canvas.getRegion(editableRegion);

        if (!$v_1) {
            return defaultValue;
        }
        $v_0 = RTE.RteUtility.getAttribute($v_1, restrictionName);
        if (!$v_0) {
            return defaultValue;
        }
    }
    return $v_0;
};
RTE.Canvas.setRestriction = function RTE_Canvas$setRestriction(editableRegion, restrictionName, value) {
    var $v_0 = value ? 'True' : 'false';

    editableRegion.setAttribute(restrictionName, $v_0);
};
RTE.Canvas.getProperty = function RTE_Canvas$getProperty(editableRegion, propertyName) {
    return RTE.RteUtility.getAttribute(editableRegion, propertyName);
};
RTE.Canvas.getBooleanProperty = function RTE_Canvas$getBooleanProperty(editableRegion, propertyName) {
    var $v_0 = RTE.RteUtility.getAttribute(editableRegion, propertyName);

    return $v_0 === 'True';
};
RTE.Canvas.makeRegionEditable = function RTE_Canvas$makeRegionEditable(region) {
    region.setAttribute('contentEditable', true);
    region.setAttribute('role', 'textbox');
    region.setAttribute('aria-autocomplete', 'both');
    region.setAttribute('aria-multiline', true);
    if (!region.getAttribute('aria-labelledby') && !region.getAttribute('aria-label')) {
        region.setAttribute('aria-label', Strings.STS.L_RichTextHiddenLabelText);
    }
    Sys.UI.DomElement.addCssClass(region, 'ms-rtestate-write');
    Sys.UI.DomElement.removeCssClass(region, 'ms-rtestate-read');
    Array.add(RTE.Canvas.$35, region);
};
RTE.Canvas.makeRegionUnEditable = function RTE_Canvas$makeRegionUnEditable(region) {
    region.setAttribute('contentEditable', false);
    region.removeAttribute('role');
    region.removeAttribute('aria-autocomplete');
    region.removeAttribute('aria-multiline');
    region.removeAttribute('aria-label');
    Sys.UI.DomElement.removeCssClass(region, 'ms-rtestate-write');
    Sys.UI.DomElement.addCssClass(region, 'ms-rtestate-read');
    Array.remove(RTE.Canvas.$35, region);
};
RTE.Canvas.getCurrentStyleSheetPrefix = function RTE_Canvas$getCurrentStyleSheetPrefix() {
    var $v_0 = RTE.Canvas.currentEditableRegion();

    if ($v_0) {
        var $v_1 = RTE.Canvas.getProperty($v_0, 'PrefixStyleSheet');

        if (!RTE.SU.$2($v_1)) {
            return $v_1;
        }
    }
    return 'ms-rte';
};
RTE.Canvas.setInitialFocus = function RTE_Canvas$setInitialFocus() {
    var $v_0 = RTE.SnapshotManager.getMarkers();

    if (!RTE.Canvas.$1h && $v_0.length === 2 && $v_0[0] && $v_0[1]) {
        RTE.Canvas.$1h = RTE.Canvas.getEditableRegion($v_0[0]);
    }
    if (null !== RTE.Canvas.$1h && RTE.Canvas.$1h.parentNode) {
        var $v_1 = RTE.Cursor.get_range();

        if ($v_0.length === 2 && $v_0[0] && $v_0[1] && RTE.RteUtility.$b($v_0[0], RTE.Canvas.$1h, null) && RTE.RteUtility.$b($v_0[1], RTE.Canvas.$1h, null)) {
            $v_1.moveToMarkersCollection($v_0);
            if ($v_0[0] !== $v_1.$4_0) {
                RTE.RteUtility.removeNodeAndKeepChildNodes($v_0[0]);
            }
            if ($v_0[1] !== $v_1.$3_0) {
                RTE.RteUtility.removeNodeAndKeepChildNodes($v_0[1]);
            }
        }
        else {
            var $v_2;

            if (RTE.Canvas.$8n(RTE.Canvas.$1h)) {
                $v_2 = (RTE.LayoutsEditor.getLayoutsEditorForRegion(RTE.Canvas.$1h)).$Bo_0();
            }
            else {
                $v_2 = RTE.Canvas.$1h;
            }
            var $v_3 = RTE.Canvas.getEditableRegion($v_2);

            if ($v_3) {
                RTE.RteUtility.focusNoFail($v_3);
            }
            (RTE.Cursor.get_range()).moveToStartOfNode($v_2);
        }
        RTE.Canvas.$1D = true;
        RTE.Cursor.update();
    }
    else {
        window.setTimeout(RTE.Canvas.checkCurrentFocus, 0);
    }
};
RTE.Canvas.checkCurrentFocus = function RTE_Canvas$checkCurrentFocus() {
    var $v_0 = RTE.Selection.getSelectionRange();

    if ($v_0) {
        var $v_1 = $v_0.parentElement();

        if (RTE.Canvas.isInEditable($v_1) && !(RTE.Cursor.get_range()).isValid()) {
            RTE.Cursor.updateRangeToCurrentSelection();
            RTE.Cursor.update();
        }
    }
};
RTE.Canvas.getVisibleHtml = function RTE_Canvas$getVisibleHtml(region) {
    var $v_0 = region.cloneNode(false), $v_1, $v_2;

    RTE.RteUtility.$2r($v_0, region.innerHTML);
    $v_2 = $v_0.firstChild;
    while (null !== $v_2) {
        $v_1 = $v_2.nextSibling;
        if (!RTE.RteUtility.$4c($v_2)) {
            $v_0.removeChild($v_2);
        }
        $v_2 = $v_1;
    }
    var $v_3 = $v_0.innerHTML;

    $v_0 = null;
    return $v_3;
};
RTE.Canvas.canHandleInsertWebPart = function RTE_Canvas$canHandleInsertWebPart() {
    if (!RTE.Canvas.$1D) {
        return false;
    }
    var $v_0 = RTE.Canvas.currentEditableRegion();

    if (!RTE.Canvas.getCachedRestriction($v_0, 'AllowWebParts', false)) {
        return false;
    }
    if (RTE.RteUtility.isInWebpartBox($v_0)) {
        return false;
    }
    var $v_1 = window.WPAdder;

    if (!$v_1) {
        window.LoadWPAdderOnDemand();
    }
    $v_1 = window.WPAdder;
    if (!$v_1) {
        return typeof loadWPAdderCallback === 'function';
    }
    return true;
};
RTE.Canvas.$8n = function RTE_Canvas$$8n($p0) {
    var $v_0 = RTE.RteUtility.getAttribute($p0, 'isWiki');

    return !RTE.SU.$7($v_0) && $v_0;
};
RTE.Canvas.$ID = function RTE_Canvas$$ID($p0) {
    var $v_0 = 'ms-rteflags-';
    var $v_1 = $p0.className.indexOf($v_0);
    var $v_2 = 0;

    if (-1 !== $v_1) {
        var $v_3 = (($p0.className.substr($v_1 + $v_0.length)).split(' '))[0];

        $v_2 = $v_3;
    }
    return $v_2;
};
RTE.Canvas.onBeforeUnload = function RTE_Canvas$onBeforeUnload(evt) {
    for (var $v_0 = 0; $v_0 < RTE.Canvas.$35.length; $v_0++) {
        RTE.Canvas.storeViewHtml(RTE.Canvas.$35[$v_0]);
    }
};
RTE.Canvas.changeKeyTimeout = function RTE_Canvas$changeKeyTimeout(autocompleteMode) {
    RTE.Canvas.$3l = autocompleteMode ? 0 : 500;
};
RTE.Canvas.isSkipNode = function RTE_Canvas$isSkipNode(element) {
    if (element.nodeType === 1 && Sys.UI.DomElement.containsCssClass(element, 'ms-rtegenerate-skip')) {
        return true;
    }
    while (element) {
        if (element.nodeType === 1 && Sys.UI.DomElement.containsCssClass(element, 'ms-rtegenerate-allskip')) {
            return true;
        }
        element = element.parentNode;
    }
    return false;
};
RTE.CanvasEvents = function RTE_CanvasEvents() {
};
RTE.CanvasEvents.registerListener = function RTE_CanvasEvents$registerListener(eventId, listener) {
    RTE.CanvasEvents.$6i.addHandler(eventId, listener);
    if (!RTE.CanvasEvents.$2M[eventId]) {
        RTE.CanvasEvents.$2M[eventId] = 0;
    }
    RTE.CanvasEvents.$2M[eventId] = RTE.CanvasEvents.$2M[eventId] + 1;
    return true;
};
RTE.CanvasEvents.unRegisterListener = function RTE_CanvasEvents$unRegisterListener(eventId, listener) {
    RTE.CanvasEvents.$6i.removeHandler(eventId, listener);
    RTE.CanvasEvents.$2M[eventId] = RTE.CanvasEvents.$2M[eventId] - 1;
    return true;
};
RTE.CanvasEvents.dispatchEvent = function RTE_CanvasEvents$dispatchEvent(eventId, sender, data) {
    if (RTE.Canvas.get_activeAutocomplete()) {
        (RTE.Canvas.get_activeAutocomplete()).onTextChanged();
    }
    if (RTE.CanvasEvents.$2M[eventId] > 0) {
        var $v_0 = RTE.CanvasEvents.$6i.getHandler(eventId);

        if ($v_0) {
            try {
                $v_0(sender, data);
            }
            catch ($$e_4) { }
        }
    }
};
RTE.CanvasEvents.dispatchChanged = function RTE_CanvasEvents$dispatchChanged() {
    if (RTE.CanvasEvents.$2M['EditableRegionChanged'] > 0) {
        var $v_0 = RTE.CanvasEvents.$2E;

        if ($v_0) {
            if (RTE.SnapshotManager.$3I(RTE.SnapshotManager.$1U, $v_0) && RTE.SnapshotManager.$1z($v_0)) {
                RTE.CanvasEvents.dispatchChangedOnEditableRegion($v_0);
            }
        }
    }
};
RTE.CanvasEvents.dispatchChangedOnEditableRegion = function RTE_CanvasEvents$dispatchChangedOnEditableRegion(editableRegion) {
    var $v_0 = {};

    $v_0.editableRegion = editableRegion;
    RTE.CanvasEvents.dispatchEvent('EditableRegionChanged', null, $v_0);
};
RTE.CanvasEvents.$HY = function RTE_CanvasEvents$$HY() {
    var $v_0 = {};

    $v_0.editableRegion = RTE.CanvasEvents.$2E;
    RTE.CanvasEvents.dispatchEvent('EditableRegionSelection', null, $v_0);
};
RTE.CanvasEvents.$BF = function RTE_CanvasEvents$$BF($p0, $p1) {
    if ($p0 && (!RTE.CanvasEvents.$2E || !RTE.RteUtility.$b(RTE.CanvasEvents.$2E, $p0, null))) {
        var $v_0 = {};

        $v_0.oldEditableRegion = $p0;
        $v_0.newEditableRegion = $p1;
        RTE.CanvasEvents.dispatchEvent('EditableRegionBlur', null, $v_0);
        RTE.CanvasEvents.$BF(RTE.Canvas.getEditableRegion($p0.parentNode), $p1);
    }
};
RTE.CanvasEvents.dispatchFocus = function RTE_CanvasEvents$dispatchFocus(editableRegion) {
    if (editableRegion === RTE.CanvasEvents.$2E) {
        return;
    }
    var $v_0 = RTE.CanvasEvents.$2E;

    RTE.CanvasEvents.$2E = editableRegion;
    RTE.CanvasEvents.$BF($v_0, editableRegion);
    if (editableRegion) {
        if (!RTE.SnapshotManager.$3I(RTE.SnapshotManager.$1U, editableRegion)) {
            RTE.SnapshotManager.takeEditableRegionSnapshot(editableRegion);
        }
        var $v_1 = {};

        $v_1.oldEditableRegion = $v_0;
        $v_1.newEditableRegion = editableRegion;
        RTE.CanvasEvents.dispatchEvent('EditableRegionFocus', null, $v_1);
        if (!Array.contains(RTE.Canvas.$35, editableRegion)) {
            Array.add(RTE.Canvas.$35, editableRegion);
        }
    }
};
RTE.CanvasEvents.getNodeFromEvent = function RTE_CanvasEvents$getNodeFromEvent(eventType) {
    var $v_0 = RTE.CanvasEvents.$3p[eventType];

    if (RTE.SU.$1R($v_0)) {
        return null;
    }
    return $v_0;
};
RTE.CanvasEvents.dispatchNodeEvents = function RTE_CanvasEvents$dispatchNodeEvents(eventType, newNode) {
    if (!newNode) {
        RTE.CanvasEvents.$BG(eventType, null);
    }
    else {
        RTE.CanvasEvents.$HX(eventType, newNode);
    }
};
RTE.CanvasEvents.$BG = function RTE_CanvasEvents$$BG($p0, $p1) {
    var $v_0 = RTE.CanvasEvents.$3p[$p0];

    if ($v_0) {
        var $v_1 = {};

        $v_1['old' + $p0] = $v_0;
        $v_1['new' + $p0] = $p1;
        RTE.CanvasEvents.$3p[$p0] = null;
        RTE.CanvasEvents.dispatchEvent($p0 + 'Blur', null, $v_1);
    }
};
RTE.CanvasEvents.$HX = function RTE_CanvasEvents$$HX($p0, $p1) {
    var $v_0 = RTE.CanvasEvents.$3p[$p0];

    if (!$p1 || $p1 === $v_0) {
        return;
    }
    RTE.CanvasEvents.$BG($p0, $v_0);
    RTE.CanvasEvents.$3p[$p0] = $p1;
    var $v_1 = {};

    $v_1['old' + $p0] = $v_0;
    $v_1['new' + $p0] = $p1;
    RTE.CanvasEvents.dispatchEvent($p0 + 'Focus', null, $v_1);
};
RTE.CanvasEvents.$8I = function RTE_CanvasEvents$$8I() {
    if (RTE.CanvasEvents.$4h) {
        return;
    }
    if ((RTE.PreviewManager.get_instance()).get_hasPreview()) {
        return;
    }
    var $v_0 = RTE.Cursor.s_range;

    RTE.Canvas.$1D = $v_0.isValid();
    var $v_1 = RTE.Canvas.currentEditableRegion();
    var $v_2 = $v_0.getEditableRegion();

    if (!$v_1 && !$v_2) {
        return;
    }
    RTE.CanvasEvents.$4h = true;
    try {
        RTE.CanvasEvents.dispatchFocus($v_2);
        RTE.CanvasEvents.$HY();
        var $v_3 = RTE.Cursor.getSelectedTable();

        RTE.CanvasEvents.dispatchNodeEvents('Table', $v_3);
        var $v_4 = RTE.Cursor.getSelectedAtomic();

        RTE.CanvasEvents.dispatchNodeEvents('Atomic', $v_4);
        var $v_5 = null;
        var $v_6 = null;

        if (!$v_4) {
            $v_5 = RTE.Cursor.getSelectedLink();
            $v_6 = RTE.Cursor.getSelectedImage();
        }
        RTE.CanvasEvents.dispatchNodeEvents('Link', $v_5);
        RTE.CanvasEvents.dispatchNodeEvents('Image', $v_6);
        if (RTE.Canvas.get_activeAutocomplete()) {
            (RTE.Canvas.get_activeAutocomplete()).onTextChanged();
        }
        RTE.CanvasEvents.dispatchChanged();
    }
    catch ($$e_7) {
        RTE.CanvasEvents.$4h = false;
    }
    finally {
        RTE.CanvasEvents.$4h = false;
    }
};
RTE.CanvasEvents.onEditableRegionBlur = function RTE_CanvasEvents$onEditableRegionBlur(sender, args) {
    var $v_0 = args.oldEditableRegion;

    if (RTE.SnapshotManager.$1z($v_0)) {
        RTE.SnapshotManager.takeEditableRegionSnapshot($v_0);
    }
    RTE.Canvas.$LD($v_0);
    RTE.Canvas.$Lc($v_0);
    RTE.Canvas.$P();
};
RTE.CanvasEvents.onEditableRegionFocus = function RTE_CanvasEvents$onEditableRegionFocus(sender, args) {
    var $v_0 = args.oldEditableRegion;
    var $v_1 = args.newEditableRegion;

    if ((!$v_0 || RTE.Canvas.getCachedRestriction($v_0, 'DisableRibbonCommands', false)) && !RTE.Canvas.getCachedRestriction($v_1, 'DisableRibbonCommands', false)) {
        RTE.RteUtility.$LO('Ribbon.EditingTools.CPEditTab');
    }
    if (RTE.SnapshotManager.$1z($v_1)) {
        RTE.SnapshotManager.takeEditableRegionSnapshot($v_1);
    }
    RTE.Canvas.hideEmptyPanel($v_1);
    RTE.Canvas.$L4($v_1);
    RTE.Canvas.$P();
};
RTE.CanvasEvents.onLinkDeselected = function RTE_CanvasEvents$onLinkDeselected(sender, args) {
    var $v_0 = args.newLink;

    if (!$v_0) {
        RTE.RteUtility.showNextBestTabIfSelectedRibbonTabIs(['LinkTab']);
    }
};
RTE.CanvasEvents.onTableDeselected = function RTE_CanvasEvents$onTableDeselected(sender, args) {
    var $v_0 = args.newTable;

    if (!$v_0) {
        RTE.RteUtility.showNextBestTabIfSelectedRibbonTabIs(['TableLayoutTab', 'TableDesignTab']);
    }
};
RTE.CanvasEvents.onImageSelected = function RTE_CanvasEvents$onImageSelected(sender, args) {
    var $v_0 = args.newImage;

    RTE.CanvasEvents.waitAndSetImageSize();
};
RTE.CanvasEvents.onImageDeselected = function RTE_CanvasEvents$onImageDeselected(sender, args) {
    var $v_0 = args.newImage;

    if (!$v_0) {
        RTE.RteUtility.showNextBestTabIfSelectedRibbonTabIs(['ImageTab']);
    }
};
RTE.CanvasEvents.resetImageSizes = function RTE_CanvasEvents$resetImageSizes(image) {
    image.removeAttribute('setHeight');
    image.removeAttribute('setWidth');
    image.removeAttribute('hasHeight');
};
RTE.CanvasEvents.onImageResize = function RTE_CanvasEvents$onImageResize(evt) {
    var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Image');

    if (!$v_0) {
        return;
    }
    var $v_1 = RTE.RichTextEditor.isRatioLocked($v_0);
    var $v_2 = RTE.RteUtility.getAttribute($v_0, 'setHeight');
    var $v_3 = RTE.RteUtility.getAttribute($v_0, 'setWidth');
    var $v_4 = RTE.RteUtility.getAttribute($v_0, 'hasHeight');

    if (!RTE.SU.$7($v_2)) {
        var $v_5 = Number.parseInvariant($v_2);
        var $v_6 = Number.parseInvariant($v_3);
        var $v_7 = Boolean.parse($v_4);
        var $v_8 = RTE.RichTextEditor.$5u();
        var $v_9 = $v_8 ? $v_0.height : $v_5;
        var $v_A = $v_8 ? $v_0.width : $v_6;

        if ($v_8 && ($v_1 || evt.shiftKey)) {
            if ($v_A !== $v_6 || $v_9 !== $v_5) {
                if (Math.abs($v_9 - $v_5) > Math.abs($v_A - $v_6)) {
                    $v_A = Math.round($v_9 * $v_6 / $v_5);
                }
                else {
                    $v_9 = Math.round($v_A * $v_5 / $v_6);
                }
                if (!isNaN($v_A)) {
                    $v_0.style.width = $v_A + 'px';
                }
                if ($v_7 && !isNaN($v_9)) {
                    $v_0.style.height = $v_9 + 'px';
                }
            }
            if (!$v_7) {
                $v_0.style.height = '';
            }
        }
        else {
            $v_0.style.width = $v_A + 'px';
            $v_0.style.height = $v_8 || $v_7 ? $v_9 + 'px' : '';
        }
        $v_0.removeAttribute('height');
        $v_0.removeAttribute('width');
        var $v_B = $v_8 && ($v_5 !== -1 && $v_5 !== $v_0.height || $v_6 !== $v_0.width);

        if ($v_B) {
            RTE.SnapshotManager.setCurrentRegionDirty();
            RTE.Canvas.$P();
        }
    }
    RTE.CanvasEvents.waitAndSetImageSize();
};
RTE.CanvasEvents.waitAndSetImageSize = function RTE_CanvasEvents$waitAndSetImageSize() {
    if (RTE.CanvasEvents.$7g > 0) {
        window.clearTimeout(RTE.CanvasEvents.$7g);
    }
    RTE.CanvasEvents.$7g = window.setTimeout(RTE.CanvasEvents.$EE, 100);
};
RTE.CanvasEvents.setImageSize = function RTE_CanvasEvents$setImageSize() {
    var $v_0 = RTE.Cursor.getSelectedImage();

    if (!$v_0) {
        return;
    }
    if ($v_0.complete || $v_0.readyState === 'complete') {
        var $v_1 = $v_0.height;
        var $v_2 = $v_0.width;
        var $v_3 = RTE.RteUtility.getAttribute($v_0, 'setHeight');
        var $v_4 = RTE.RteUtility.getAttribute($v_0, 'setWidth');
        var $v_5 = RTE.RteUtility.getAttribute($v_0, 'hasHeight');

        $v_0.setAttribute('setHeight', $v_1);
        $v_0.setAttribute('setWidth', $v_2);
        $v_0.setAttribute('hasHeight', !RTE.SU.$2($v_0.style.height));
        var $v_6 = $v_0.getAttribute('setHeight') !== $v_3 || $v_0.getAttribute('setWidth') !== $v_4 || $v_0.getAttribute('hasHeight') !== $v_5;

        if ($v_6) {
            RTE.Canvas.$P();
        }
    }
    else {
        RTE.CanvasEvents.waitAndSetImageSize();
        return;
    }
    if (RTE.SnapshotManager.$1z(RTE.Canvas.currentEditableRegion())) {
        RTE.SnapshotManager.takeSnapshotIfNotInPreview();
    }
};
RTE.CanvasEvents.onAtomicSelected = function RTE_CanvasEvents$onAtomicSelected(sender, args) {
    var $v_0 = args.newAtomic;

    if ($v_0.className.indexOf('ms-rte-wpbox') === -1) {
        Sys.UI.DomElement.addCssClass($v_0, 's4-wpActive');
    }
    $addHandler($v_0, 'resizestart', RTE.CanvasEvents.$7o);
};
RTE.CanvasEvents.onAtomicDeselected = function RTE_CanvasEvents$onAtomicDeselected(sender, args) {
    var $v_0 = args.oldAtomic;

    Sys.UI.DomElement.removeCssClass($v_0, 's4-wpActive');
    if ($v_0.parentNode && $v_0.parentNode.parentNode) {
        try {
            $removeHandler($v_0, 'resizestart', RTE.CanvasEvents.$7o);
        }
        catch ($$e_3) { }
    }
};
RTE.CanvasEvents.onAtomicResize = function RTE_CanvasEvents$onAtomicResize(evt) {
    evt.preventDefault();
    evt.rawEvent.returnValue = false;
    evt.rawEvent.cancelBubble = true;
    evt.stopPropagation();
};
RTE.CanvasRange = function RTE_CanvasRange(type) {
    this.$$d_$LS_0 = Function.createDelegate(this, this.$LS_0);
    this.$4_0 = document.createElement('SPAN');
    this.$3_0 = document.createElement('SPAN');
    this.$4_0.id = 'ms-rterange' + type + '-start';
    this.$3_0.id = 'ms-rterange' + type + '-end';
    this.$4_0.setAttribute('aria-hidden', 'true');
    this.$3_0.setAttribute('aria-hidden', 'true');
};
RTE.CanvasRange.$Dr = function RTE_CanvasRange$$Dr($p0) {
    var $v_0;

    while (null !== ($v_0 = $get($p0))) {
        RTE.RteUtility.removeNodeAndKeepChildNodes($v_0);
    }
};
RTE.CanvasRange.$EJ = function RTE_CanvasRange$$EJ($p0) {
    if (RTE.RteUtility.$N($p0)) {
        return true;
    }
    if ($p0.nodeType === 1) {
        var $v_0 = $p0.tagName;

        return $v_0 === 'SPAN' || $v_0 === 'STRONG' || $v_0 === 'B' || $v_0 === 'I' || $v_0 === 'U' || $v_0 === 'EM' || $v_0 === 'CENTER' || $v_0 === 'FONT' || $v_0 === 'S' || $v_0 === 'STRIKE' || $v_0 === 'SUB' || $v_0 === 'SUP';
    }
    return false;
};
RTE.CanvasRange.$8A = function RTE_CanvasRange$$8A($p0) {
    var $v_0 = null;

    if ($p0) {
        $v_0 = $p0 === $p0.ownerDocument.body ? new Array(0) : RTE.CanvasRange.$8A($p0.parentNode);
    }
    if ($v_0) {
        $v_0[$v_0.length] = $p0;
    }
    return $v_0;
};
RTE.CanvasRange.$Cb = function RTE_CanvasRange$$Cb($p0) {
    var $v_0 = $p0.getBoundingClientRect();
    var $v_1 = $v_0.top, $v_2 = $v_0.left, $v_3 = $v_0.bottom, $v_4 = $v_0.right;
    var $v_5 = window.innerWidth;

    if (RTE.SU.$7($v_5)) {
        $v_5 = document.documentElement.clientWidth;
    }
    var $v_6 = window.innerHeight;

    if (RTE.SU.$7($v_6)) {
        $v_6 = document.documentElement.clientHeight;
    }
    if ($v_1 >= 0 && $v_2 >= 0 && $v_3 <= $v_5 && $v_4 <= $v_6) {
        return 0;
    }
    return $v_1 < 0 ? -1 : 1;
};
RTE.CanvasRange.prototype = {
    $7y_0: null,
    $7z_0: false,
    $1a_0: null,
    $60_0: false,
    $CK_0: function RTE_CanvasRange$$CK_0() {
        if (!this.$1a_0) {
            this.$1a_0 = RTE.Range.createRange();
        }
    },
    resetCacheRange: function RTE_CanvasRange$resetCacheRange() {
        this.$60_0 = false;
        this.$7z_0 = false;
        this.$81_0 = false;
        this.$7x_0 = false;
    },
    duplicate: function RTE_CanvasRange$duplicate(type) {
        var $v_0 = new RTE.CanvasRange(type);

        $v_0.moveToMarkersCollection(this.getMarkers());
        return $v_0;
    },
    normalize: function RTE_CanvasRange$normalize() {
        if (!this.isValid()) {
            return;
        }
        var $v_0 = new RTE.DOMTreePosition(this.$4_0, 0);

        $v_0.setLocationAtEnd();
        $v_0.moveCount(false, 0);
        $v_0.insertMarker(this.$4_0);
        var $v_1 = new RTE.DOMTreePosition(this.$3_0, 0);

        $v_1.moveCount(true, 0);
        $v_1.insertMarker(this.$3_0);
        this.fixMarkers();
        this.resetCacheRange();
    },
    moveToRange: function RTE_CanvasRange$moveToRange(range) {
        RTE.RteUtility.assertNotNull('range', range);
        var $v_0 = document.createElement('SPAN');
        var $v_1 = document.createElement('SPAN');

        $v_1.id = 'ms-rterangenew-start';
        $v_0.id = 'ms-rterangenew-end';
        var $v_2 = true;
        var $v_3 = true;
        var $v_4 = null;
        var $v_5 = null;

        try {
            var $v_8 = range.$D_0.item;

            if ($v_8) {
                var $v_9 = range.$D_0.item(0);

                SP.UI.UIUtility.insertBefore($v_1, $v_9);
                SP.UI.UIUtility.insertAfter($v_0, $v_9);
            }
            else {
                var $v_A = range.$D_0.startContainer;

                if (!$v_A) {
                    $v_A = range.$D_0.parentElement();
                }
                if (!$v_A || window.document !== $v_A.ownerDocument) {
                    return false;
                }
                var $v_B = range.duplicate();
                var $v_C = range.duplicate();

                $v_B.collapse(false);
                $v_2 = $v_B.$CP_0($v_0, true, RTE.Cursor.$52);
                $v_C.collapse(true);
                $v_3 = $v_C.$CP_0($v_1, false, RTE.Cursor.$52);
            }
            $v_4 = RTE.Canvas.getEditableRegion($v_1);
            if (!$v_4) {
                var $v_D = new RTE.DOMTreePosition($v_1, 0);

                $v_D.normalizeRight();
                if ($v_D.$1_0 !== $v_1) {
                    $v_D.insertMarker($v_1);
                    $v_4 = RTE.Canvas.getEditableRegion($v_1);
                }
                if (!$v_4 && $v_1.nextSibling) {
                    $v_4 = RTE.Canvas.getEditableRegion($v_1.nextSibling);
                }
                if ($v_4) {
                    $v_4.insertBefore($v_1, $v_4.firstChild);
                }
            }
            $v_5 = RTE.Canvas.getEditableRegion($v_0);
            if (!$v_5) {
                var $v_E = new RTE.DOMTreePosition($v_0, 0);

                $v_E.normalizeLeft();
                if ($v_E.$1_0 !== $v_0) {
                    $v_E.insertMarker($v_0);
                    $v_5 = RTE.Canvas.getEditableRegion($v_0);
                }
                if (!$v_5 && $v_0.previousSibling) {
                    $v_5 = RTE.Canvas.getEditableRegion($v_0.previousSibling);
                }
                if ($v_5) {
                    $v_5.appendChild($v_0);
                }
            }
        }
        catch ($$e_E) {
            $v_2 = false;
            $v_3 = false;
        }
        var $v_6 = $v_0.parentNode;
        var $v_7 = $v_1.parentNode;

        if ($v_2 && $v_3 && $v_4 && $v_5) {
            RTE.RteUtility.$4N(this.$4_0);
            RTE.RteUtility.$5k(this.$3_0);
            RTE.RteUtility.assertNotNull('endMarkerLoc.ParentNode', $v_6);
            RTE.RteUtility.assertNotNull('startMarkerLoc.ParentNode', $v_7);
            if ($v_0.nextSibling === $v_1) {
                SP.UI.UIUtility.insertBefore($v_1, $v_0);
            }
            $v_6.replaceChild(this.$3_0, $v_0);
            $v_7.replaceChild(this.$4_0, $v_1);
            this.$Ao_0();
            this.resetCacheRange();
            this.$6w_0(this.$3_0);
            this.$6w_0(this.$4_0);
            this.$BX_0();
            return true;
        }
        else {
            var $v_F = RTE.Canvas.moveToRedirectIfItExist($v_1);

            if ($v_6) {
                $v_6.removeChild($v_0);
            }
            if ($v_7) {
                $v_7.removeChild($v_1);
            }
            return $v_F;
        }
    },
    makeSafe: function RTE_CanvasRange$makeSafe() {
        this.fixMarkers();
        var $v_0 = this.parentElement();
        var $v_1 = new RTE.DOMTreePosition(this.$4_0, 0);

        $v_1.setLocationAtEnd();
        $v_1.moveToNextElement();
        while (true) {
            var $v_2 = $v_1.$1_0;

            $v_1.setLocationAtEnd();
            $v_1.moveToNextElement();
            if (RTE.RteUtility.$b(this.$3_0, $v_2, $v_0)) {
                RTE.SafeHtml.$9S($v_2, true, true, false);
                break;
            }
            else {
                RTE.SafeHtml.$9S($v_2, true, true, false);
            }
        }
        this.resetCacheRange();
    },
    $Ao_0: function RTE_CanvasRange$$Ao_0() {
        if (RTE.CanvasRange.$69) {
            return;
        }
        var $v_0 = this.$4_0.id;
        var $v_1 = this.$3_0.id;

        this.$4_0.id = '';
        this.$3_0.id = '';
        RTE.CanvasRange.$Dr($v_0);
        RTE.CanvasRange.$Dr($v_1);
        this.$4_0.id = $v_0;
        this.$3_0.id = $v_1;
        RTE.RteUtility.$4N(this.$4_0);
        RTE.RteUtility.$5k(this.$3_0);
    },
    $1d_0: function RTE_CanvasRange$$1d_0() {
        if (!this.$60_0) {
            this.$CK_0();
            this.$BX_0();
            var $v_0 = this.isEmpty();

            if (this.get_$6b_0()) {
                if (!$v_0) {
                    this.$1a_0.$D_0.setStartAfter(this.$4_0);
                    this.$1a_0.$D_0.setEndBefore(this.$3_0);
                }
                else {
                    this.$1a_0.$D_0.setEndAfter(this.$3_0);
                    this.$1a_0.$D_0.setStartAfter(this.$3_0);
                    this.$1a_0.collapse(true);
                }
                this.$60_0 = true;
            }
            else {
                this.$1a_0.moveToMarkers(this.$4_0, this.$3_0, this.isEmpty());
                this.$60_0 = true;
            }
        }
        return this.$1a_0;
    },
    get_$6b_0: function RTE_CanvasRange$get_$6b_0() {
        this.$CK_0();
        return !!this.$1a_0.$D_0.setEndBefore;
    },
    $BX_0: function RTE_CanvasRange$$BX_0() {
        var $v_0 = this.$3_0.parentNode;

        if ($v_0.tagName === 'LI') {
            var $v_1 = $v_0.lastChild;

            if ($v_0.childNodes.length === 3) {
                var $v_2 = null;

                for (var $v_3 = 0; $v_3 < $v_0.childNodes.length; $v_3++) {
                    var $v_4 = $v_0.childNodes[$v_3];

                    if ($v_4 === this.$4_0 || $v_4 === this.$3_0) {
                        continue;
                    }
                    if (!$v_2 && $v_4.nodeType === 1 && $v_4.tagName === 'BR') {
                        $v_2 = $v_4;
                        continue;
                    }
                    $v_2 = null;
                    break;
                }
                if ($v_2) {
                    $v_0.removeChild($v_2);
                }
            }
        }
    },
    getMarkers: function RTE_CanvasRange$getMarkers() {
        var $v_0 = [];

        $v_0[0] = this.$4_0;
        $v_0[1] = this.$3_0;
        return $v_0;
    },
    get_endMarker: function RTE_CanvasRange$get_endMarker() {
        return this.$3_0;
    },
    get_startMarker: function RTE_CanvasRange$get_startMarker() {
        return this.$4_0;
    },
    setMarkersCollection: function RTE_CanvasRange$setMarkersCollection(markers) {
        RTE.RteUtility.assertNotNull('markers', markers);
        if (markers.length === 2) {
            this.setMarkers(markers[0], markers[1]);
        }
    },
    setMarkers: function RTE_CanvasRange$setMarkers(newStartMarker, newEndMarker) {
        if (this.$4_0 !== newStartMarker) {
            RTE.RteUtility.$J(this.$4_0);
        }
        if (this.$3_0 !== newEndMarker) {
            RTE.RteUtility.$J(this.$3_0);
        }
        this.$4_0 = newStartMarker;
        this.$3_0 = newEndMarker;
        this.$Ao_0();
        this.resetCacheRange();
    },
    moveToMarkersCollection: function RTE_CanvasRange$moveToMarkersCollection(markers) {
        RTE.RteUtility.assertNotNull('markers', markers);
        if (markers.length === 2) {
            this.moveToMarkers(markers[0], markers[1]);
        }
    },
    moveToMarkers: function RTE_CanvasRange$moveToMarkers(moveToStartMarker, moveToEndMarker) {
        SP.UI.UIUtility.insertBefore(this.$4_0, moveToStartMarker);
        SP.UI.UIUtility.insertBefore(this.$3_0, moveToEndMarker);
        this.resetCacheRange();
    },
    $2u_0: null,
    $3n_0: null,
    isValid: function RTE_CanvasRange$isValid() {
        var $v_0 = this.$4_0.parentNode;
        var $v_1 = this.$3_0.parentNode;

        return !!$v_0 && !!$v_1 && $v_0.nodeType !== 11 && $v_1.nodeType !== 11 && $v_0 !== RTE.CanvasRange.$1f && $v_1 !== RTE.CanvasRange.$1f;
    },
    $BR_0: function RTE_CanvasRange$$BR_0() {
        this.$2u_0 = [];
        this.$3n_0 = [];
        if (!this.isValid()) {
            return;
        }
        var $v_0 = this.$4_0;

        if ($v_0.nextSibling && $v_0.nextSibling.firstChild && RTE.Canvas.isEditable($v_0.nextSibling)) {
            $v_0 = $v_0.nextSibling;
            while ($v_0.firstChild && !SP.UI.UIUtility.isTextNode($v_0.firstChild)) {
                $v_0 = $v_0.firstChild;
            }
        }
        while ($v_0 && !RTE.Canvas.$8l($v_0)) {
            this.$2u_0.push($v_0);
            $v_0 = $v_0.parentNode;
        }
        if ($v_0) {
            this.$2u_0.push($v_0);
        }
        var $v_1 = this.$3_0;

        if ($v_1.previousSibling && $v_1.previousSibling.lastChild && RTE.Canvas.isEditable($v_1.previousSibling)) {
            $v_1 = $v_1.previousSibling;
            while ($v_1.lastChild && !SP.UI.UIUtility.isTextNode($v_1.lastChild)) {
                $v_1 = $v_1.lastChild;
            }
        }
        while ($v_1 && !RTE.Canvas.$8l($v_1)) {
            this.$3n_0.push($v_1);
            $v_1 = $v_1.parentNode;
        }
        if ($v_1) {
            this.$3n_0.push($v_1);
        }
    },
    parentElement: function RTE_CanvasRange$parentElement() {
        var $v_0 = this.getParentChain();

        if ($v_0.length > 0) {
            return $v_0[0];
        }
        return null;
    },
    fixMarkers: function RTE_CanvasRange$fixMarkers() {
        this.$BR_0();
        if (!this.$2u_0.length) {
            return;
        }
        var $v_0 = null;
        var $v_1 = null;

        while (this.$2u_0.length > 0) {
            $v_0 = this.$2u_0.pop();
            $v_1 = this.$3n_0.pop();
            if ($v_0 !== $v_1) {
                break;
            }
        }
        var $v_2 = $v_0.parentNode;
        var $v_3 = false;

        for (var $v_4 = 0; $v_4 < $v_2.childNodes.length; $v_4++) {
            var $v_5 = $v_2.childNodes[$v_4];

            if ($v_3 && $v_5 === $v_0) {
                var $v_6 = document.createElement('SPAN');

                SP.UI.UIUtility.insertBefore($v_6, this.$4_0);
                SP.UI.UIUtility.insertBefore(this.$4_0, this.$3_0);
                SP.UI.UIUtility.insertBefore(this.$3_0, $v_6);
                $v_6.parentNode.removeChild($v_6);
                return;
            }
            else if ($v_5 === $v_1) {
                $v_3 = true;
            }
        }
    },
    inRange: function RTE_CanvasRange$inRange(r) {
        var $v_0 = this.$1d_0();

        return $v_0.inRange(r);
    },
    inCanvasRange: function RTE_CanvasRange$inCanvasRange(r) {
        RTE.RteUtility.assertNotNull('r', r);
        var $v_0 = r.$1d_0();

        return this.inRange($v_0);
    },
    collapse: function RTE_CanvasRange$collapse(atStart) {
        if (atStart) {
            SP.UI.UIUtility.insertAfter(this.$3_0, this.$4_0);
        }
        else {
            SP.UI.UIUtility.insertBefore(this.$4_0, this.$3_0);
        }
        this.resetCacheRange();
    },
    get_text: function RTE_CanvasRange$get_text() {
        var $v_0 = this.$1d_0();

        return $v_0.get_innerText();
    },
    wrapRange: function RTE_CanvasRange$wrapRange(wrapNode) {
        var $v_0 = this.parentElement();
        var $v_1 = this.$4_0;

        while ($v_1 && $v_1.parentNode !== $v_0) {
            $v_1 = $v_1.parentNode;
        }
        if (!$v_1) {
            while (this.$4_0.parentNode !== $v_0) {
                $v_0 = $v_0.parentNode;
            }
            $v_1 = this.$4_0;
        }
        var $v_2 = new RTE.ExtractChildNodesProcessor($v_0, this.$4_0, this.$3_0, wrapNode, false);

        $v_2.process();
        SP.UI.UIUtility.insertAfter(wrapNode, $v_1);
        SP.UI.UIUtility.insertBefore(this.$4_0, wrapNode);
        SP.UI.UIUtility.insertAfter(this.$3_0, wrapNode);
    },
    getEditableRegion: function RTE_CanvasRange$getEditableRegion() {
        var $v_0 = this.parentElement();

        return RTE.Canvas.getEditableRegion($v_0);
    },
    getNonEditableRegion: function RTE_CanvasRange$getNonEditableRegion() {
        var $v_0 = this.parentElement();

        return RTE.Canvas.getNonEditableRegion($v_0);
    },
    get_isInEditableRegion: function RTE_CanvasRange$get_isInEditableRegion() {
        var $v_0 = this.getEditableRegion();

        return !!$v_0;
    },
    get_isInNonEditableRegion: function RTE_CanvasRange$get_isInNonEditableRegion() {
        var $v_0 = this.getNonEditableRegion();

        return !!$v_0;
    },
    get_isEditableRegion: function RTE_CanvasRange$get_isEditableRegion() {
        var $v_0 = this.parentElement();

        if (RTE.Canvas.$i($v_0)) {
            return !this.$4_0.previousSibling && this.$4_0.parentNode === $v_0 && !this.$3_0.nextSibling && this.$3_0.parentNode === $v_0;
        }
        return false;
    },
    get_isNonEditableRegion: function RTE_CanvasRange$get_isNonEditableRegion() {
        var $v_0 = this.parentElement();

        if (RTE.Canvas.$1Q($v_0)) {
            var $v_1 = RTE.Range.createRange();

            $v_1.moveToElementText($v_0);
            return this.inRange($v_1);
        }
        return false;
    },
    get_isEditable: function RTE_CanvasRange$get_isEditable() {
        var $v_0 = this.parentElement();

        if ($v_0 && $v_0.previousSibling === this.$4_0 && $v_0.nextSibling === this.$3_0) {
            $v_0 = $v_0.parentNode;
        }
        return RTE.Canvas.isEditable($v_0);
    },
    expandInNonEditableRegion: function RTE_CanvasRange$expandInNonEditableRegion() {
        if (this.get_isInEditableRegion() && !RTE.Canvas.isEditable(this.parentElement())) {
            var $v_0 = this.getNonEditableRegion();

            this.moveToNode($v_0);
            return $v_0;
        }
        return null;
    },
    getParentBlockNode: function RTE_CanvasRange$getParentBlockNode() {
        var $v_0 = this.parentElement();

        while ($v_0 && !RTE.RteUtility.$N($v_0)) {
            $v_0 = $v_0.parentNode;
        }
        return $v_0;
    },
    expandToBlock: function RTE_CanvasRange$expandToBlock() {
        var $v_0 = this.getParentBlockNode();

        if ($v_0) {
            this.moveToNode($v_0);
        }
    },
    $He_0: function RTE_CanvasRange$$He_0() {
        var $v_0 = new RTE.DOMTreePosition(this.$4_0, 0);
        var $v_1 = null;
        var $v_2 = this.$4_0;

        while ($v_0.moveToPreviousElement() && $v_0.atStart() && !RTE.Canvas.$i($v_0.$1_0) && $v_2.parentNode === $v_0.$1_0) {
            if (!SP.UI.UIUtility.isNodeOfType($v_0.$1_0, RTE.CanvasRange.$9c)) {
                $v_1 = $v_0.$1_0;
            }
            $v_2 = $v_0.$1_0;
        }
        if ($v_1) {
            SP.UI.UIUtility.insertBefore(this.$4_0, $v_1);
        }
        var $v_3 = new RTE.DOMTreePosition(this.$3_0, 0);

        $v_3.setLocationAtEnd();
        var $v_4 = null;

        $v_2 = this.$3_0;
        while ($v_3.moveToNextElement() && $v_3.atEnd() && !RTE.Canvas.$i($v_3.$1_0) && $v_2.parentNode === $v_3.$1_0) {
            if (!SP.UI.UIUtility.isNodeOfType($v_3.$1_0, RTE.CanvasRange.$9c)) {
                $v_4 = $v_3.$1_0;
            }
            $v_2 = $v_3.$1_0;
        }
        if ($v_4) {
            SP.UI.UIUtility.insertAfter(this.$3_0, $v_4);
        }
        this.resetCacheRange();
    },
    moveToNode: function RTE_CanvasRange$moveToNode(node) {
        if (SP.UI.UIUtility.isNodeOfType(node, RTE.CanvasRange.$7N)) {
            this.moveToChildren(node);
        }
        else {
            SP.UI.UIUtility.insertBefore(this.$4_0, node);
            SP.UI.UIUtility.insertAfter(this.$3_0, node);
        }
        this.resetCacheRange();
        return true;
    },
    moveToChildren: function RTE_CanvasRange$moveToChildren(node) {
        RTE.RteUtility.assertNotNull('node', node);
        if (node.tagName === 'TR' || node.tagName === 'TBODY' || node.tagName === 'TABLE') {
            var $v_0 = node;

            while ($v_0 && $v_0.tagName !== 'TD' && $v_0.tagName !== 'TH') {
                $v_0 = RTE.RteUtility.$1x($v_0, true);
            }
            var $v_1 = node;

            while ($v_1 && $v_1.tagName !== 'TD' && $v_1.tagName !== 'TH') {
                $v_1 = RTE.RteUtility.$1e($v_1, true);
            }
            if ($v_0 && $v_1) {
                if (RTE.RteUtility.$2p !== $v_0.innerHTML) {
                    $v_0.insertBefore(this.$4_0, RTE.RteUtility.$1x($v_0, true));
                }
                else {
                    $v_0.appendChild(this.$4_0);
                }
                $v_1.appendChild(this.$3_0);
            }
        }
        else {
            var $v_2 = RTE.Canvas.getEditableRegion(node);

            if ($v_2 === node && RTE.Canvas.$4z($v_2) && RTE.Canvas.isMultiline($v_2)) {
                var $v_3 = $v_2.ownerDocument.createElement('P');

                node.appendChild($v_3);
                return this.moveToStartOfNode($v_3);
            }
            node.insertBefore(this.$4_0, RTE.RteUtility.$1x(node, false));
            node.appendChild(this.$3_0);
        }
        this.resetCacheRange();
        return true;
    },
    moveToStartOfNode: function RTE_CanvasRange$moveToStartOfNode(node) {
        this.$4l_0();
        RTE.RteUtility.assertNotNull('node', node);
        try {
            if (RTE.Canvas.$1Q(node)) {
                var $v_2 = this.moveToNode(node);

                RTE.Canvas.$5c(node);
                return $v_2;
            }
            var $v_0 = RTE.RteUtility.$1x(node, true);

            if ($v_0 && RTE.CanvasRange.$EJ($v_0)) {
                return this.moveToStartOfNode($v_0);
            }
            var $v_1 = RTE.Canvas.getEditableRegion(node);

            if ($v_1 === node && !$v_1.firstChild && RTE.Canvas.isMultiline($v_1)) {
                var $v_3 = RTE.RteUtility.$4d($v_1.ownerDocument);

                $v_1.appendChild($v_3);
                return this.moveToStartOfNode($v_3);
            }
            node.insertBefore(this.$3_0, node.firstChild);
            SP.UI.UIUtility.insertBefore(this.$4_0, this.$3_0);
            this.resetCacheRange();
        }
        catch ($$e_5) { }
        return true;
    },
    $Jl_0: function RTE_CanvasRange$$Jl_0($p0) {
        var $v_0 = null;

        if ($p0.firstChild) {
            var $v_1 = new RTE.DOMTreePosition($p0.firstChild, 0);

            while ($v_1.$1_0 !== $p0) {
                if (RTE.Canvas.$1Q($v_1.$1_0)) {
                    $v_0 = $v_1.$1_0;
                }
                else if (SP.UI.UIUtility.isTextNode($v_1.$1_0) && !RTE.SU.$2($v_1.$1_0.nodeValue) || $v_1.$1_0.tagName === 'A' && $v_1.$1_0.innerHTML !== '' || $v_1.$1_0.tagName === 'IMG') {
                    $v_0 = $v_1.$1_0;
                    break;
                }
                if (!$v_1.moveToNextElement()) {
                    break;
                }
            }
        }
        if ($v_0) {
            SP.UI.UIUtility.insertBefore(this.$3_0, $v_0);
        }
        else {
            if (!$p0.firstChild) {
                $p0.appendChild(this.$3_0);
            }
            else {
                SP.UI.UIUtility.insertBefore(this.$3_0, $p0.firstChild);
            }
        }
        SP.UI.UIUtility.insertBefore(this.$4_0, this.$3_0);
        this.resetCacheRange();
    },
    moveToEndOfNode: function RTE_CanvasRange$moveToEndOfNode(node) {
        this.$4l_0();
        RTE.RteUtility.assertNotNull('node', node);
        if (RTE.Canvas.$1Q(node)) {
            var $v_1 = this.moveToNode(node);

            RTE.Canvas.$5c(node);
            return $v_1;
        }
        var $v_0 = RTE.RteUtility.$1e(node, true);

        if ($v_0 && RTE.CanvasRange.$EJ($v_0)) {
            return this.moveToEndOfNode($v_0);
        }
        if (node.tagName === 'P') {
            if (node.innerHTML === '&nbsp;') {
                node.insertBefore(this.$3_0, node.firstChild);
                node.insertBefore(this.$4_0, this.$3_0);
            }
            else if ($v_0 && $v_0.tagName === 'BR') {
                node.insertBefore(this.$3_0, $v_0);
                node.insertBefore(this.$4_0, this.$3_0);
            }
            else {
                node.appendChild(this.$4_0);
                node.appendChild(this.$3_0);
            }
        }
        else {
            var $v_2 = RTE.Canvas.getEditableRegion(node);

            if ($v_2 === node && !$v_2.firstChild && RTE.Canvas.isMultiline($v_2)) {
                var $v_3 = RTE.RteUtility.$4d($v_2.ownerDocument);

                $v_2.appendChild($v_3);
                return this.moveToStartOfNode($v_3);
            }
            node.appendChild(this.$4_0);
            node.appendChild(this.$3_0);
        }
        this.resetCacheRange();
        return true;
    },
    moveToMarkersPlaceholders: function RTE_CanvasRange$moveToMarkersPlaceholders(node, placeholderId) {
        var $v_0 = false;

        if (node && node.ownerDocument) {
            var $v_1 = node.ownerDocument.getElementById(placeholderId + '-start');
            var $v_2 = node.ownerDocument.getElementById(placeholderId + '-end');

            if ($v_1 && $v_2) {
                SP.UI.UIUtility.insertAfter(this.$4_0, $v_1);
                SP.UI.UIUtility.insertAfter(this.$3_0, $v_2);
                this.$6w_0(this.$3_0);
                this.$6w_0(this.$4_0);
                this.resetCacheRange();
                $v_0 = true;
            }
            this.$Du_0($v_1);
            this.$Du_0($v_2);
            this.$Lj_0();
        }
        return $v_0 ? true : this.moveToEndOfNode(node);
    },
    $Du_0: function RTE_CanvasRange$$Du_0($p0) {
        if ($p0) {
            var $v_0 = $p0.parentNode;

            SP.UI.UIUtility.removeNode($p0);
            if (RTE.SU.$2($v_0.tagName) && !$v_0.childNodes.length) {
                SP.UI.UIUtility.removeNode($v_0);
            }
        }
    },
    $6w_0: function RTE_CanvasRange$$6w_0($p0) {
        while ($p0 && $p0.parentNode) {
            var $v_0 = $p0.parentNode;
            var $v_1 = null;

            do {
                $v_1 = $v_0.tagName;
                $v_0 = $v_0.parentNode;
            } while ($v_0 && RTE.SU.$2($v_1));
            switch ($v_1) {
            case 'TABLE':
            case 'TBODY':
            case 'THEAD':
            case 'TR':
                this.$DG_0($p0, ['TD', 'TH'], 'TABLE');
                break;
            case 'OL':
            case 'UL':
                this.$DG_0($p0, ['LI'], $v_1);
                break;
            default:
                return;
            }
        }
    },
    $Lj_0: function RTE_CanvasRange$$Lj_0() {
        if (this.$4_0.parentNode !== this.$3_0.parentNode) {
            var $v_0 = this.$3_0.parentNode;

            if ($v_0.tagName === 'TD' || $v_0.tagName === 'TH') {
                if ($v_0.firstChild === this.$3_0) {
                    var $v_1 = RTE.RteUtility.$Dj($v_0);

                    if (!$v_1) {
                        var $v_2 = RTE.RteUtility.$Dj($v_0.parentNode);

                        if ($v_2) {
                            $v_1 = $v_2.children[$v_2.children.length - 1];
                        }
                    }
                    if ($v_1 && $v_1.nodeType === 1 && ($v_1.tagName === 'TD' || $v_1.tagName === 'TH')) {
                        $v_1.insertBefore(this.$3_0, null);
                    }
                }
            }
        }
    },
    $DG_0: function RTE_CanvasRange$$DG_0($p0, $p1, $p2) {
        var $v_0 = RTE.RteUtility.$G($p0, $p2);
        var $v_1 = new RTE.DOMTreePosition($p0, 0);

        while ($v_1.moveToNextElement()) {
            if (SP.UI.UIUtility.isNodeOfType($v_1.$1_0, $p1)) {
                $v_1.$1_0.insertBefore($p0, $v_1.$1_0.firstChild);
                return;
            }
            if ($v_1.$1_0 === $v_0 && $v_1.atEnd()) {
                SP.UI.UIUtility.insertAfter($p0, $v_0);
                return;
            }
        }
    },
    moveBeforeNode: function RTE_CanvasRange$moveBeforeNode(node) {
        this.$4l_0();
        var $v_0 = RTE.RteUtility.$m(node, true);

        if ($v_0 && RTE.RteUtility.$N($v_0)) {
            return this.moveToEndOfNode($v_0);
        }
        if (SP.UI.UIUtility.isNodeOfType(node, RTE.CanvasRange.$7N)) {
            return this.moveBeforeNode(node.parentNode);
        }
        var $v_1 = RTE.Canvas.getEditableRegion(node);

        if ($v_1 && $v_1.firstChild === node && RTE.Canvas.isMultiline($v_1)) {
            var $v_2 = RTE.RteUtility.$4d($v_1.ownerDocument);

            SP.UI.UIUtility.insertBefore($v_2, node);
            return this.moveToStartOfNode($v_2);
        }
        SP.UI.UIUtility.insertBefore(this.$3_0, node);
        SP.UI.UIUtility.insertBefore(this.$4_0, this.$3_0);
        this.resetCacheRange();
        return true;
    },
    moveAfterNode: function RTE_CanvasRange$moveAfterNode(node) {
        this.$4l_0();
        var $v_0 = RTE.RteUtility.$t(node, true);

        if ($v_0 && RTE.RteUtility.$N($v_0)) {
            return this.moveToStartOfNode($v_0);
        }
        if (SP.UI.UIUtility.isNodeOfType(node, RTE.CanvasRange.$7N)) {
            return this.moveAfterNode(node.parentNode);
        }
        var $v_1 = RTE.Canvas.getEditableRegion(node);

        if ($v_1 && $v_1.lastChild === node && RTE.Canvas.isMultiline($v_1)) {
            var $v_2 = RTE.RteUtility.$4d($v_1.ownerDocument);

            SP.UI.UIUtility.insertAfter($v_2, node);
            return this.moveToStartOfNode($v_2);
        }
        SP.UI.UIUtility.insertAfter(this.$3_0, node);
        SP.UI.UIUtility.insertBefore(this.$4_0, this.$3_0);
        this.resetCacheRange();
        return true;
    },
    $4l_0: function RTE_CanvasRange$$4l_0() {
        if (this.$4_0.parentNode) {
            this.$4_0.parentNode.removeChild(this.$4_0);
        }
        if (this.$3_0.parentNode) {
            this.$3_0.parentNode.removeChild(this.$3_0);
        }
    },
    dispose: function RTE_CanvasRange$dispose() {
        RTE.RteUtility.$J(this.$4_0);
        RTE.RteUtility.$J(this.$3_0);
    },
    clear: function RTE_CanvasRange$clear() {
        return this.$65_0();
    },
    $65_0: function RTE_CanvasRange$$65_0() {
        if (!RTE.Canvas.currentEditableRegion() || !RTE.Canvas.getIgnoreClear()) {
            RTE.RteUtility.$4N(this.$4_0);
            RTE.RteUtility.$5k(this.$3_0);
            if (RTE.RteUtility.isFirefox()) {
                if (RTE.SU.$7(RTE.CanvasRange.$1f)) {
                    RTE.CanvasRange.$1f = document.createElement('DIV');
                    RTE.CanvasRange.$1f.style.display = 'none';
                    document.body.appendChild(RTE.CanvasRange.$1f);
                }
                RTE.CanvasRange.$1f.appendChild(this.$4_0);
                RTE.CanvasRange.$1f.appendChild(this.$3_0);
            }
            else {
                this.$4l_0();
            }
            this.resetCacheRange();
        }
        return true;
    },
    selectAll: function RTE_CanvasRange$selectAll() {
        return this.$Hf_0();
    },
    $Hf_0: function RTE_CanvasRange$$Hf_0() {
        var $v_0 = this.getEditableRegion();

        if ($v_0) {
            return this.moveToChildren($v_0);
        }
        return false;
    },
    isVisible: function RTE_CanvasRange$isVisible() {
        return !this.isEmpty();
    },
    insertNode: function RTE_CanvasRange$insertNode(node) {
        RTE.RteUtility.$CO(node, this.$3_0);
        this.resetCacheRange();
    },
    insertBefore: function RTE_CanvasRange$insertBefore(node) {
        RTE.RteUtility.$CO(node, this.$4_0);
        this.resetCacheRange();
    },
    insertAfter: function RTE_CanvasRange$insertAfter(node) {
        RTE.RteUtility.$6V(node, this.$3_0);
        this.resetCacheRange();
    },
    insertText: function RTE_CanvasRange$insertText(text) {
        RTE.DomHelper.insertAdjacentText(this.$3_0, 'beforeBegin', text);
        this.resetCacheRange();
    },
    insertTextBefore: function RTE_CanvasRange$insertTextBefore(text) {
        RTE.DomHelper.insertAdjacentText(this.$4_0, 'beforeBegin', text);
        this.resetCacheRange();
    },
    isEmpty: function RTE_CanvasRange$isEmpty() {
        var $v_0 = this.$4_0.nextSibling;

        while ($v_0 && $v_0 !== this.$3_0 && ($v_0.nodeValue === '' || $v_0.tagName === 'SPAN' && !$v_0.childNodes.length)) {
            $v_0 = $v_0.nextSibling;
        }
        return $v_0 === this.$3_0;
    },
    deleteContent: function RTE_CanvasRange$deleteContent() {
        if (this.get_isEditable() && !this.isEmpty() && this.canDeleteContent()) {
            var $v_0 = this.get_isEditableRegion();
            var $v_1 = this.getEditableRegion();

            RTE.ClientWebPartManager.updateRendererNodes();
            var $v_2 = false;

            if ($v_0) {
                RTE.ClientWebPartManager.$4m($v_1);
                $v_2 = true;
                $v_1.innerHTML = '';
                this.moveToChildren($v_1);
            }
            else {
                var $v_3 = RTE.CanvasRange.$8A(this.$4_0);
                var $v_4 = RTE.CanvasRange.$8A(this.$3_0);
                var $v_5 = $v_3.length - 1;

                RTE.RteUtility.assertNotNull('DeleteContent: startMarker parent chain is null', $v_3);
                RTE.RteUtility.assertNotNull('DeleteContent: endMarker parent chain is null', $v_4);
                var $v_6 = this.$4_0.nextSibling;
                var $v_7 = this.$4_0.parentNode;

                while ($v_6 !== this.$3_0) {
                    while (!$v_6 || $v_5 + 1 < $v_4.length && $v_6 === $v_4[$v_5]) {
                        if ($v_6) {
                            $v_5++;
                            $v_7 = $v_6;
                            $v_6 = $v_6.firstChild;
                        }
                        else {
                            $v_5--;
                            $v_6 = $v_7.nextSibling;
                            $v_7 = $v_7.parentNode;
                        }
                        if ($v_5 < 0) {
                            return;
                        }
                    }
                    $v_7 = $v_6.parentNode;
                    if ($v_6 !== this.$3_0) {
                        var $v_8 = $v_6;

                        $v_6 = $v_6.nextSibling;
                        RTE.ClientWebPartManager.$4m($v_8);
                        $v_2 = true;
                        if ($v_8.nodeType === 1 && !Sys.UI.DomElement.containsCssClass($v_8, 'ms-rte-wpbox')) {
                            if (typeof $v_8.innerHTML !== 'undefined') {
                                try {
                                    $v_8.innerHTML = '';
                                }
                                catch ($$e_9) { }
                            }
                        }
                        $v_8.parentNode.removeChild($v_8);
                    }
                }
                RTE.RteUtility.assertNotNull('DeleteContent: Last element is null', $v_6);
            }
            if ($v_2) {
                RTE.ClientWebPartManager.replaceRenderNodesToCurrent();
            }
        }
    },
    canDeleteContent: function RTE_CanvasRange$canDeleteContent() {
        if (!this.isValid()) {
            return false;
        }
        this.fixMarkers();
        var $v_0 = this.parentElement();
        var $v_1 = new RTE.DOMTreePosition(this.$4_0, 0);

        $v_1.setLocationAtEnd();
        while ($v_1.$1_0 !== this.$3_0) {
            var $v_2 = $v_1.$1_0.tagName;

            if ($v_2 === 'TABLE') {
                if (RTE.RteUtility.$b(this.$3_0, $v_1.$1_0, $v_0)) {
                    return false;
                }
                $v_1.setLocationAtEnd();
            }
            else if ($v_2 === 'TD' || $v_2 === 'TH' || $v_2 === 'TR') {
                return false;
            }
            if (!$v_1.moveToNextElement()) {
                return true;
            }
        }
        return true;
    },
    getInnerNodes: function RTE_CanvasRange$getInnerNodes(expand) {
        return this.$Bs_0(false, expand);
    },
    $4K_0: null,
    $81_0: false,
    getSingleElement: function RTE_CanvasRange$getSingleElement() {
        if (this.$81_0) {
            return this.$4K_0;
        }
        this.$81_0 = true;
        var $v_0 = this.parentElement();
        var $v_1 = new RTE.DOMTreePosition(this.$4_0, 0);

        $v_1.setLocationAtEnd();
        $v_1.moveToNextElement();
        while ($v_1.atEnd() && !$v_1.atStart()) {
            if (!$v_1.moveToNextElement()) {
                this.$4K_0 = null;
                return null;
            }
        }
        this.$DH_0($v_1);
        var $v_2 = $v_1.$1_0;

        if (RTE.RteUtility.$b(this.$3_0, $v_2, $v_0)) {
            this.$4K_0 = $v_2;
            return $v_2;
        }
        $v_1.setLocationAtEnd();
        $v_1.moveToNextElement();
        this.$DH_0($v_1);
        while ($v_1.atStart()) {
            if ($v_1.$1_0 === this.$3_0) {
                this.$4K_0 = $v_2;
                return $v_2;
            }
            if (!$v_1.moveToNextElement()) {
                this.$4K_0 = null;
                return null;
            }
        }
        this.$4K_0 = null;
        return null;
    },
    $DH_0: function RTE_CanvasRange$$DH_0($p0) {
        var $v_0 = $p0.$1_0;

        if (SP.UI.UIUtility.isTextNode($v_0) && $v_0.nodeValue === RTE.RteUtility.$2p) {
            $p0.moveToNextElement();
            $v_0 = $p0.$1_0;
        }
    },
    getReducedInnerNodes: function RTE_CanvasRange$getReducedInnerNodes(expand) {
        return this.$Bs_0(true, expand);
    },
    $JX_0: function RTE_CanvasRange$$JX_0($p0, $p1, $p2, $p3) {
        if ($p1) {
            this.$He_0();
        }
        var $v_0 = this.getEditableRegion();

        if (this.$4_0.parentNode === this.$3_0.parentNode && !RTE.RteUtility.$m(this.$4_0, false) && !RTE.RteUtility.$t(this.$3_0, false) && !RTE.Canvas.$i(this.$4_0.parentNode)) {
            if (!$p2(this.$4_0.parentNode, $p3)) {
                return;
            }
        }
        var $v_1 = new RTE.DOMTreePosition(this.$4_0, 0);

        $v_1.setLocationAtEnd();
        $v_1.moveToNextElement();
        $v_1.$8g_0 = false;
        while ($v_1.$1_0 !== this.$3_0) {
            var $v_2 = $v_1.$1_0;

            if ($p0) {
                if ($v_2.nextSibling && SP.UI.UIUtility.isTextNode($v_2) && SP.UI.UIUtility.isTextNode($v_2.nextSibling)) {
                    $v_1.moveToNextElement();
                    RTE.RteUtility.$Jh($v_2, $v_2.nextSibling, false);
                    continue;
                }
            }
            if ($v_1.atStart() && (SP.UI.UIUtility.isTextNode($v_2) || $v_2.nodeType === 1 && !RTE.RteUtility.$b(this.$4_0, $v_2, $v_0) && !RTE.RteUtility.$b(this.$3_0, $v_2, $v_0) && !RTE.RteUtility.$1P($v_2))) {
                if (!$p2($v_1.$1_0, $p3)) {
                    return;
                }
            }
            $v_1.moveToNextElement();
        }
    },
    $LS_0: function RTE_CanvasRange$$LS_0($p0, $p1) {
        Array.add($p1['nodes'], $p0);
        return true;
    },
    $Bs_0: function RTE_CanvasRange$$Bs_0($p0, $p1) {
        if (!this.isValid()) {
            return [];
        }
        var $v_0 = {};

        $v_0['nodes'] = [];
        this.$JX_0($p0, $p1, this.$$d_$LS_0, $v_0);
        return $v_0['nodes'];
    },
    getParentChain: function RTE_CanvasRange$getParentChain() {
        if (!this.$7z_0) {
            this.$HT_0();
            this.$7z_0 = true;
        }
        return this.$7y_0;
    },
    $HT_0: function RTE_CanvasRange$$HT_0() {
        this.$7y_0 = [];
        var $v_0 = [];
        var $v_1 = 0;

        this.$BR_0();
        var $v_2 = false;

        while (this.$2u_0.length > 0 && this.$3n_0.length > 0) {
            var $v_3 = this.$2u_0.pop();
            var $v_4 = this.$3n_0.pop();

            if ($v_3 === $v_4) {
                if (RTE.Canvas.$i($v_3)) {
                    $v_2 = true;
                }
                if ($v_2) {
                    $v_0[$v_1] = $v_3;
                    $v_1++;
                }
                if (RTE.Canvas.$1Q($v_3)) {
                    $v_2 = false;
                }
            }
            else {
                break;
            }
        }
        $v_1--;
        for (var $v_5 = 0; $v_5 <= $v_1; $v_5++) {
            var $v_6 = $v_0[$v_1 - $v_5];

            this.$7y_0[$v_5] = $v_6;
        }
    },
    replaceWithChildren: function RTE_CanvasRange$replaceWithChildren(container) {
        this.deleteContent();
        var $v_0 = RTE.RteUtility.$4v(container);

        if (!!($v_0 ^ RTE.RteUtility.$N(container))) {
            var $v_1 = document.createElement($v_0 ? 'DIV' : 'SPAN');

            RTE.RteUtility.$k(container, $v_1);
            RTE.RteUtility.$J(container);
            container = $v_1;
        }
        this.insertNode(container);
        RTE.Canvas.$4n(container);
        RTE.RteUtility.removeNodeAndKeepChildNodes(container);
    },
    replaceHtml: function RTE_CanvasRange$replaceHtml(html) {
        var $v_0 = document.createElement('SPAN');

        RTE.RteUtility.$2r($v_0, html);
        this.replaceWithChildren($v_0);
    },
    convertToText: function RTE_CanvasRange$convertToText() {
        var $v_0 = this.get_text();

        this.deleteContent();
        this.insertText($v_0);
    },
    convertToStrip: function RTE_CanvasRange$convertToStrip() {
        var $v_0 = RTE.RemoveStyleOnSelectionProcessor.$23;

        $v_0.setSettings(this, true);
        $v_0.process();
    },
    getFirstTextNode: function RTE_CanvasRange$getFirstTextNode() {
        var $v_0 = new RTE.DOMTreePosition(this.$4_0, 0);

        $v_0.setLocationAtEnd();
        var $v_1 = null;

        while ($v_0.moveToNextElement() && $v_0.$1_0 !== this.$3_0) {
            if (RTE.Canvas.$1Q($v_0.$1_0)) {
                $v_0.setLocationAtEnd();
            }
            else if (SP.UI.UIUtility.isTextNode($v_0.$1_0)) {
                if (!RTE.RteUtility.$1y($v_0.$1_0, true)) {
                    return $v_0.$1_0;
                }
                $v_1 = $v_0.$1_0;
            }
        }
        return $v_1;
    },
    $B7_0: null,
    $7x_0: false,
    getCurrentStateNode: function RTE_CanvasRange$getCurrentStateNode() {
        if (this.$7x_0) {
            return this.$B7_0;
        }
        this.$7x_0 = true;
        var $v_0 = this.getFirstTextNode();

        if (!$v_0) {
            $v_0 = this.$4_0;
        }
        this.$B7_0 = $v_0;
        return $v_0;
    },
    $L0_0: function RTE_CanvasRange$$L0_0() {
        if (!this.$4_0 || !this.$4_0.parentNode || this.$4_0.parentNode === RTE.CanvasRange.$1f || !this.$3_0 || !this.$3_0.parentNode || this.$3_0.parentNode === RTE.CanvasRange.$1f) {
            return;
        }
        var $v_0 = RTE.Canvas.getEditableRegion(this.$4_0);

        if (!$v_0 || !RTE.Canvas.getCachedRestriction($v_0, 'AllowMultiLines', true)) {
            return;
        }
        var $v_1 = this.$1a_0 || RTE.Range.createRange();

        if ($v_1.$D_0.select) {
            return;
        }
        var $v_2 = RTE.CanvasRange.$Cb(this.$4_0);
        var $v_3 = RTE.CanvasRange.$Cb(this.$3_0);

        if ($v_2 && $v_2 === $v_3) {
            if ($v_2 === -1) {
                this.$4_0.scrollIntoView(true);
            }
            else {
                this.$3_0.scrollIntoView(false);
            }
        }
    }
};
RTE.QuickRange = function RTE_QuickRange($p0, $p1, $p2, $p3, $p4) {
    this.$1E_0 = $p0;
    this.$2t_0 = $p1;
    this.$l_0 = $p2;
    this.$2F_0 = $p3;
    this.$8K_0 = $p4;
};
RTE.QuickRange.$3s = function RTE_QuickRange$$3s() {
    var $v_0;
    var $v_1 = -1;
    var $v_2;
    var $v_3 = -1;
    var $v_4 = RTE.Selection.getSelectionRange();

    if ($v_4 && $v_4.$D_0 && $v_4.$D_0.startContainer) {
        $v_0 = $v_4.$D_0.startContainer;
        $v_1 = $v_4.$D_0.startOffset;
        $v_2 = $v_4.$D_0.endContainer;
        $v_3 = $v_4.$D_0.endOffset;
    }
    else {
        var $v_6 = RTE.Cursor.get_range();

        $v_0 = $v_6.$4_0;
        $v_2 = $v_6.$3_0;
    }
    if (!$v_0 || !$v_2) {
        return null;
    }
    var $v_5 = RTE.Canvas.getEditableRegion($v_0);

    if (!$v_5) {
        return null;
    }
    return new RTE.QuickRange($v_0, $v_1, $v_2, $v_3, $v_5);
};
RTE.QuickRange.$Cl = function RTE_QuickRange$$Cl($p0) {
    return $p0 === RTE.Cursor.s_range.$4_0 || $p0 === RTE.Cursor.s_range.$3_0 || RTE.RteUtility.$1y($p0, true);
};
RTE.QuickRange.$E2 = function RTE_QuickRange$$E2($p0, $p1) {
    if ($p0.nodeType !== 1 || $p1 < 0 || !$p0.childNodes.length) {
        return $p0;
    }
    if ($p0.childNodes.length <= $p1) {
        return $p0.lastChild;
    }
    return $p0.childNodes[$p1];
};
RTE.QuickRange.prototype = {
    $1E_0: null,
    $2t_0: 0,
    $l_0: null,
    $2F_0: 0,
    $8K_0: null,
    get_$3y_0: function RTE_QuickRange$get_$3y_0() {
        return RTE.Canvas.isEditable(this.$1E_0) && RTE.Canvas.isEditable(this.$l_0);
    },
    get_$4z_0: function RTE_QuickRange$get_$4z_0() {
        var $v_0 = this.get_$9U_0();
        var $v_1 = this.get_$9T_0();

        return $v_0 === $v_1 || $v_0 === $v_1.previousSibling;
    },
    get_$9U_0: function RTE_QuickRange$get_$9U_0() {
        return RTE.QuickRange.$E2(this.$1E_0, this.$2t_0);
    },
    get_$EP_0: function RTE_QuickRange$get_$EP_0() {
        if (this.$1E_0.nodeType === 1 && this.$1E_0 === this.$l_0 && this.$2t_0 >= 0 && this.$2t_0 === this.$2F_0 - 1) {
            return this.get_$9U_0();
        }
        if (RTE.RteUtility.$1P(this.$1E_0) && RTE.RteUtility.$1P(this.$l_0) && this.$1E_0.parentNode === this.$l_0.parentNode) {
            var $v_0 = this.$1E_0.nextSibling;

            if ($v_0 && $v_0 === this.$l_0.previousSibling) {
                return $v_0;
            }
        }
        return null;
    },
    get_$9T_0: function RTE_QuickRange$get_$9T_0() {
        return RTE.QuickRange.$E2(this.$l_0, this.$2F_0);
    },
    get_$JP_0: function RTE_QuickRange$get_$JP_0() {
        if (this.$2t_0 <= 0) {
            return true;
        }
        if (this.$1E_0.nodeType === 1) {
            for (var $v_0 = this.$2t_0 - 1; $v_0 >= 0; $v_0--) {
                var $v_1 = this.$1E_0.childNodes[$v_0];

                if (!RTE.QuickRange.$Cl($v_1)) {
                    return false;
                }
            }
            return true;
        }
        if (this.$1E_0.nodeType === 3) {
            if (this.$2t_0 === 1 && this.$1E_0.nodeValue.length <= 1 && RTE.RteUtility.$1y(this.$1E_0, true)) {
                return true;
            }
        }
        return false;
    },
    get_$Ce_0: function RTE_QuickRange$get_$Ce_0() {
        if (this.$2F_0 === -1) {
            return true;
        }
        if (this.$l_0.nodeType === 1) {
            var $v_0 = this.$l_0.childNodes.length;

            if (this.$2F_0 === $v_0) {
                return true;
            }
            var $v_1 = RTE.RteUtility.$N(this.$l_0);
            var $v_2 = RTE.RteUtility.$1e(this.$l_0, false);

            for (var $v_3 = this.$2F_0; $v_3 < $v_0; $v_3++) {
                var $v_4 = this.$l_0.childNodes[$v_3];

                if ($v_1 && $v_2 === $v_4 && $v_4.nodeType === 1 && $v_4.tagName === 'BR') {
                    return true;
                }
                if (!RTE.QuickRange.$Cl($v_4)) {
                    return false;
                }
            }
            return true;
        }
        if (this.$l_0.nodeType === 3) {
            if (this.$2F_0 >= this.$l_0.nodeValue.length) {
                return true;
            }
            if (this.$2F_0 + 1 === this.$l_0.nodeValue.length && RTE.RteUtility.$6X(this.$l_0.nodeValue.substr(this.$l_0.nodeValue.length - 1), true)) {
                return true;
            }
        }
        return false;
    }
};
RTE.ClientWebPartManager = function RTE_ClientWebPartManager() {
};
RTE.ClientWebPartManager.$4r = function RTE_ClientWebPartManager$$4r() {
    return window.vwpcm;
};
RTE.ClientWebPartManager.init = function RTE_ClientWebPartManager$init() {
    if (!RTE.ClientWebPartManager.$9a) {
        RTE.CanvasEvents.registerListener('ElementAdded', RTE.ClientWebPartManager.$K2);
        RTE.CanvasEvents.registerListener('ElementGenerateTag', RTE.ClientWebPartManager.$K5);
        RTE.ClientWebPartManager.$9a = true;
    }
};
RTE.ClientWebPartManager.$K2 = function RTE_ClientWebPartManager$$K2($p0, $p1) {
    if (!$p1) {
        return;
    }
    var $v_0 = $p1.node;

    if (!$v_0) {
        return;
    }
    var $v_1 = RTE.ClientWebPartManager.$4r();

    if (!$v_1 || !$v_1.rgparts) {
        return;
    }
    var $v_2 = RTE.RteUtility.$6J($v_0);

    if (!RTE.SU.$2($v_2)) {
        var $v_3 = $v_1.rgparts[$v_2];

        if (!RTE.SU.$7($v_3) && $v_3.render && $v_0 !== $v_3.render) {
            $v_0.parentNode.replaceChild($v_3.render, $v_0);
        }
    }
};
RTE.ClientWebPartManager.$K5 = function RTE_ClientWebPartManager$$K5($p0, $p1) {
    if (!$p1) {
        return;
    }
    var $v_0 = $p1.node;
    var $v_1 = $p1.html;

    if (!$v_0 || !$v_1) {
        return;
    }
    var $v_2 = RTE.ClientWebPartManager.$4r();

    if (!$v_2 || !$v_2.rgparts) {
        return;
    }
    var $v_3 = RTE.RteUtility.$6J($v_0);

    if (!RTE.SU.$2($v_3)) {
        var $v_4 = [];
        var $v_5 = $v_0.className;

        if ($v_5) {
            $v_0.className = $v_5.replace('ms-rtegenerate-notify', '');
        }
        RTE.RteUtility.$36($v_4, $v_0);
        RTE.RteUtility.$6H($v_4, $v_0.tagName.toLowerCase());
        $v_0.className = $v_5;
        $v_1.append($v_4.join(''));
    }
};
RTE.ClientWebPartManager.$KY = function RTE_ClientWebPartManager$$KY() {
    eval('if (typeof(refreshAllWebParts) != \'undefined\' && refreshAllWebParts) { refreshAllWebParts(); }');
};
RTE.ClientWebPartManager.$4m = function RTE_ClientWebPartManager$$4m($p0) {
    if ($p0 && $p0.nodeType === 1) {
        RTE.RteUtility.forEachChildWithTagAndClass($p0, 'DIV', 'ms-rte-wpbox', function($p1_0) {
            if ($p1_0.childNodes.length > 0) {
                var $v_0 = $p1_0.childNodes[0];
                var $v_1 = 0;

                while (SP.UI.UIUtility.isTextNode($v_0) && $v_1 < $p1_0.childNodes.length - 1) {
                    $v_1++;
                    $v_0 = $p1_0.childNodes[$v_1];
                }
                if (!SP.UI.UIUtility.isTextNode($v_0) && $v_0.id.length === 40 && RTE.RteUtility.$6Y($v_0)) {
                    var $v_2 = $v_0.cloneNode(false);

                    $p1_0.replaceChild($v_2, $v_0);
                }
            }
        });
    }
};
RTE.ClientWebPartManager.updateRendererNodes = function RTE_ClientWebPartManager$updateRendererNodes() {
    var $v_0 = RTE.ClientWebPartManager.$4r();

    if (!$v_0 || !$v_0.rgparts) {
        return;
    }
    var $$dict_1 = $v_0.rgparts;

    for (var $$key_2 in $$dict_1) {
        var $v_1 = {
            key: $$key_2,
            value: $$dict_1[$$key_2]
        };
        var $v_2 = $v_1.key;
        var $v_3 = $v_1.value;

        if (!RTE.RteUtility.$Ca($v_3.render)) {
            var $v_4 = $get('div_' + $v_2);

            if ($v_4 && $v_4 !== $v_3.render && $v_4.firstChild) {
                $v_3.render = $v_4;
            }
        }
    }
};
RTE.ClientWebPartManager.replaceRenderNodesToCurrent = function RTE_ClientWebPartManager$replaceRenderNodesToCurrent() {
    var $v_0 = RTE.ClientWebPartManager.$4r();

    if (!$v_0 || !$v_0.rgparts) {
        return;
    }
    var $$dict_1 = $v_0.rgparts;

    for (var $$key_2 in $$dict_1) {
        var $v_1 = {
            key: $$key_2,
            value: $$dict_1[$$key_2]
        };
        var $v_2 = $v_1.key;
        var $v_3 = $v_1.value;
        var $v_4 = $get('div_' + $v_2);

        if ($v_4 && $v_4 !== $v_3.render && !RTE.RteUtility.$Ca($v_3.render)) {
            $v_4.parentNode.replaceChild($v_3.render, $v_4);
        }
    }
    RTE.ClientWebPartManager.$KY();
};
RTE.RibbonCommandNames = function RTE_RibbonCommandNames() {
};
RTE.CommandNames = function RTE_CommandNames() {
};
RTE.Cursor = function RTE_Cursor() {
};
RTE.Cursor.cursorRangeIsNowOutdated = function RTE_Cursor$cursorRangeIsNowOutdated() {
    RTE.Cursor.$24 = true;
};
RTE.Cursor.get_isRangeOutdatedFromCurrentSelection = function RTE_Cursor$get_isRangeOutdatedFromCurrentSelection() {
    return RTE.Cursor.$24;
};
RTE.Cursor.get_range = function RTE_Cursor$get_range() {
    if (RTE.Cursor.$24 && !RTE.Cursor.$3C) {
        RTE.Cursor.$9x(RTE.Cursor.$4O);
    }
    return RTE.Cursor.s_range;
};
RTE.Cursor.onKeyPress = function RTE_Cursor$onKeyPress(evt) {
    if (!RTE.RteUtility.$2b(evt.target)) {
        return;
    }
    if (RTE.Cursor.$7L) {
        SP.UI.UIUtility.cancelEvent(evt);
        return;
    }
    RTE.Canvas.invokeInAutoComplete(function($p1_0) {
        return $p1_0.onKeyPress(evt);
    });
    var $v_0 = true;
    var $v_1 = RTE.Canvas.currentEditableRegion();
    var $v_2 = RTE.Canvas.getCachedRestriction($v_1, 'AllowMultiLines', true);

    if (!evt.altKey && !evt.ctrlKey && evt.charCode === 13) {
        if (RTE.Canvas.moveToRedirectIfItExist(evt.target) || !$v_2) {
            SP.UI.UIUtility.cancelEvent(evt);
        }
        else {
            RTE.Cursor.$Hi($v_1);
            var $v_3 = RTE.QuickRange.$3s();

            $v_0 = false;
            if ($v_3 && $v_3.get_$3y_0()) {
                var $v_4 = RTE.RteUtility.$6I($v_3.$1E_0);
                var $v_5 = $v_4 ? $v_4.tagName.toUpperCase() : null;

                if ($v_4 && !RTE.SU.$2($v_5) && ($v_5 === 'H1' || $v_5 === 'H2' || $v_5 === 'H3' || $v_5 === 'H4' || $v_5 === 'H5' || $v_5 === 'H6') && !RTE.RteUtility.$JJ($v_4, true) && RTE.Canvas.isEditable($v_4)) {
                    var $v_6 = $v_4.parentNode;

                    window.setTimeout(function() {
                        var $v_7 = RTE.Cursor.get_range();
                        var $v_8 = RTE.RteUtility.$6I($v_7.parentElement());

                        if ($v_8) {
                            if ($v_8.parentNode === $v_6) {
                                var $v_9 = $v_8.innerText || $v_8.textContent;

                                if (!RTE.RteUtility.$6X($v_9, true)) {
                                    return;
                                }
                            }
                            else if ($v_8 === $v_6) {
                                var $v_A = $v_7.$4_0;

                                while ($v_A.previousSibling && $v_A.previousSibling.tagName.toUpperCase() === 'BR') {
                                    $v_A.parentNode.removeChild($v_A.previousSibling);
                                }
                            }
                            else {
                                return;
                            }
                            RTE.FontCommands.$B3('P', '');
                            if (RTE.RteUtility.isFirefox()) {
                                var $v_B = RTE.RteUtility.$6I($v_7.parentElement());

                                if ($v_B && $v_B.tagName === 'P' && $v_B.childNodes.length <= 2) {
                                    var $v_C = $v_B.lastChild;

                                    if (!$v_C || $v_C.nodeType !== 1 || $v_C.tagName !== 'BR') {
                                        var $v_D = $v_B.ownerDocument.createElement('BR');

                                        $v_B.appendChild($v_D);
                                    }
                                }
                            }
                        }
                    }, 0);
                }
            }
        }
    }
    if ($v_2) {
        RTE.Cursor.waitAndUpdateRangeToCurrentSelection($v_0, RTE.Canvas.$3l);
    }
    else {
        RTE.Cursor.waitAndUpdateRangeToCurrentSelection(true, 200);
    }
};
RTE.Cursor.$Hi = function RTE_Cursor$$Hi($p0) {
    if (!$p0 || !RTE.RteUtility.isInternetExplorer()) {
        return;
    }
    window.setTimeout(function() {
        RTE.RteUtility.forEachChildWithTagAndClass($p0, 'SPAN', 'ms-rtestate-read', RTE.Cursor.$Hj);
    }, 0);
};
RTE.Cursor.$Hj = function RTE_Cursor$$Hj($p0) {
    if (RTE.RteUtility.$4v($p0)) {
        var $v_0 = RTE.RteUtility.$6I($p0);
        var $v_1 = $v_0 ? $v_0.tagName.toUpperCase() : null;

        if ($v_0 && !RTE.SU.$2($v_1) && RTE.Canvas.isEditable($v_0) && ($v_1 === 'P' || $v_1 === 'H1' || $v_1 === 'H2' || $v_1 === 'H3' || $v_1 === 'H4' || $v_1 === 'H5' || $v_1 === 'H6')) {
            RTE.RteUtility.removeNodeAndKeepChildNodes($v_0);
        }
    }
};
RTE.Cursor.onKeyUp = function RTE_Cursor$onKeyUp(evt) {
    RTE.Canvas.$3m = false;
    var $v_0 = RTE.RteUtility.$2b(evt.target);

    if (!$v_0) {
        return;
    }
    if (RTE.Cursor.$3C) {
        if (evt.keyCode === 13) {
            RTE.CanvasEvents.dispatchChanged();
        }
    }
    else if (evt.keyCode === 16 || evt.keyCode === 17) {
        RTE.Cursor.waitAndUpdateRangeToCurrentSelection(false, RTE.Canvas.$3l);
    }
    if (RTE.Cursor.$7h && evt.keyCode === 17) {
        RTE.PasteFlyout.expandOptions();
    }
    RTE.Cursor.$7h = false;
    RTE.Canvas.invokeInAutoComplete(function($p1_0) {
        return $p1_0.onKeyUp(evt);
    });
};
RTE.Cursor.$LZ = function RTE_Cursor$$LZ($p0) {
    if (RTE.RteUtility.$JE($p0.rawEvent)) {
        return;
    }
    if ($p0.keyCode === 38 || $p0.keyCode === 40 || $p0.keyCode === 39 || $p0.keyCode === 37) {
        if ($p0.shiftKey || $p0.ctrlKey || $p0.altKey) {
            return;
        }
        var $v_0 = RTE.Canvas.get_$R() || RTE.CanvasEvents.getNodeFromEvent('Image');

        if (!$v_0 && RTE.Selection.isControlRangeSelection() && RTE.RteUtility.isInternetExplorer()) {
            if (RTE.Cursor.s_range.get_$6b_0()) {
                var $v_1 = RTE.QuickRange.$3s();

                if ($v_1 && $v_1.get_$3y_0()) {
                    $v_0 = $v_1.get_$EP_0();
                }
            }
            if (!$v_0) {
                $v_0 = RTE.Cursor.$I6(RTE.Cursor.s_range.$4_0.nextSibling);
            }
        }
        if ($v_0) {
            if ($p0.keyCode === 40 || $p0.keyCode === 39) {
                (RTE.Cursor.get_range()).moveAfterNode($v_0);
            }
            else {
                (RTE.Cursor.get_range()).moveBeforeNode($v_0);
            }
            SP.UI.UIUtility.cancelEvent($p0);
            RTE.Canvas.$5c(null);
            RTE.Cursor.update();
            return;
        }
        if ($p0.keyCode === 38 || $p0.keyCode === 40) {
            var $v_2 = RTE.QuickRange.$3s();

            if (!$v_2 || !$v_2.get_$3y_0()) {
                return;
            }
            var $v_3 = $v_2.get_$9T_0();
            var $v_4 = $v_2.get_$Ce_0();
            var $v_5 = RTE.RteUtility.$2d($v_3, ['TD', 'TH']);

            if ($v_5 && RTE.Canvas.isEditable($v_5)) {
                var $v_6 = $v_5.parentNode;
                var $v_7 = $p0.keyCode === 40;

                if (RTE.RteUtility.isSafari()) {
                    var $v_B = $v_7 ? RTE.RteUtility.$1e($v_6, true) : RTE.RteUtility.$1x($v_6, true);

                    if ($v_B !== $v_5) {
                        return;
                    }
                }
                var $v_8 = $v_7 ? RTE.RteUtility.$1e($v_6.parentNode, true) : RTE.RteUtility.$1x($v_6.parentNode, true);

                if ($v_8 !== $v_6) {
                    return;
                }
                var $v_9 = $v_3;
                var $v_A = true;

                $v_4 = $v_4 || !$v_7;
                while ($v_9 !== $v_5) {
                    if (!$v_4 && $v_9 !== $v_5 && (RTE.RteUtility.$N($v_9) || $v_9.nodeType === 1 && $v_9.tagName === 'BR')) {
                        $v_A = false;
                        break;
                    }
                    $v_4 = false;
                    var $v_C = $v_7 ? $v_9.nextSibling : $v_9.previousSibling;

                    while (!$v_C) {
                        $v_9 = $v_9.parentNode;
                        if ($v_9 === $v_5) {
                            $v_C = $v_9;
                            break;
                        }
                        $v_C = $v_7 ? $v_9.nextSibling : $v_9.previousSibling;
                    }
                    $v_9 = $v_C;
                }
                if ($v_A) {
                    if (!RTE.Cursor.s_range.isValid() && !RTE.Cursor.$24) {
                        RTE.Cursor.cursorRangeIsNowOutdated();
                    }
                    var $v_D = RTE.Cursor.get_range();

                    if (!$v_D.isValid()) {
                        return;
                    }
                    var $v_E = $v_3.ownerDocument.createElement('SPAN');

                    $v_E.appendChild($v_3.ownerDocument.createTextNode(RTE.RteUtility.$3X));
                    $v_D.$3_0.parentNode.insertBefore($v_E, $v_D.$3_0.nextSibling);
                    var $v_F = $v_E.offsetTop + $v_E.clientHeight;
                    var $v_G = $v_5;

                    while (true) {
                        var $v_I = $v_7 ? RTE.RteUtility.$1e($v_G, false) : RTE.RteUtility.$1x($v_G, false);

                        if (!$v_I || !RTE.RteUtility.$N($v_I)) {
                            break;
                        }
                        $v_G = $v_I;
                    }
                    if ($v_7 && $v_G.lastChild !== $v_E) {
                        $v_G.appendChild($v_E);
                    }
                    else if (!$v_7 && $v_G.firstChild !== $v_E) {
                        $v_G.insertBefore($v_E, $v_G.firstChild);
                    }
                    $v_F -= $v_E.offsetTop + $v_E.clientHeight;
                    $v_E.parentNode.removeChild($v_E);
                    if ($v_F) {
                        return;
                    }
                    var $v_H = RTE.RteUtility.$G($v_6, 'TABLE');

                    if (RTE.Canvas.isEditable($v_H)) {
                        if ($v_7) {
                            (RTE.Cursor.get_range()).moveAfterNode($v_H);
                        }
                        else {
                            (RTE.Cursor.get_range()).moveBeforeNode($v_H);
                        }
                    }
                    SP.UI.UIUtility.cancelEvent($p0);
                    RTE.Cursor.update();
                    return;
                }
            }
        }
    }
    if ($p0.keyCode === 8 || $p0.keyCode === 127) {
        var $v_J = RTE.QuickRange.$3s();

        if (!$v_J || !$v_J.get_$3y_0()) {
            return;
        }
        var $v_K = $v_J.get_$EP_0();
        var $v_L = $v_K;

        if (!$v_K) {
            if ($v_J.get_$JP_0() && $v_J.get_$Ce_0()) {
                $v_K = $v_J.$1E_0;
                $v_L = $v_J.$l_0;
            }
            else {
                return;
            }
        }
        var $v_M = RTE.RteUtility.$Bm($v_K, $v_J.$8K_0, true);
        var $v_N = RTE.RteUtility.$Bm($v_L, $v_J.$8K_0, false);

        if (!$v_M || !$v_N) {
            return;
        }
        var $v_O = null;
        var $v_P = null;
        var $$t_W, $$t_X;

        RTE.Cursor.$Kx($v_M, $v_N, $$t_W = {
            'val': $v_O
        }, $$t_X = {
            'val': $v_P
        }), $v_O = $$t_W.val, $v_P = $$t_X.val;
        if ($v_O && $v_P) {
            if ($p0.keyCode === 8) {
                (RTE.Cursor.get_range()).moveBeforeNode($v_O);
            }
            else {
                (RTE.Cursor.get_range()).moveAfterNode($v_P);
            }
            RTE.Cursor.select();
            var $v_Q = $v_P.nextSibling;
            var $v_R = $v_O;
            var $v_S = null;
            var $v_T = false;

            while ($v_R !== $v_Q) {
                var $v_U = $v_R;

                $v_R = $v_R.nextSibling;
                if (RTE.Canvas.setTableWidths && $v_U.tagName === 'TR') {
                    if (!$v_S) {
                        $v_S = RTE.RteUtility.$G($v_U, 'TABLE');
                        $v_T = RTE.RteUtility.$1x($v_U.parentNode, true) === $v_U && RTE.TableCommands.hasHeaderRow($v_S);
                    }
                    RTE.TableCommands.$CR($v_U, $v_S, false);
                }
                else {
                    $v_U.parentNode.removeChild($v_U);
                }
            }
            if ($v_S) {
                RTE.TableCommands.$CW($v_T, $v_S);
            }
            RTE.Cursor.update();
            SP.UI.UIUtility.cancelEvent($p0);
            return;
        }
    }
};
RTE.Cursor.$I6 = function RTE_Cursor$$I6($p0) {
    if ($p0 && $p0.nodeType === 1) {
        var $v_0 = $p0.tagName;

        if ($v_0 === 'TBODY' || $v_0 === 'THEAD' || $v_0 === 'TH' || $v_0 === 'TR' || $v_0 === 'TD') {
            return RTE.RteUtility.$G($p0, 'TABLE') || $p0;
        }
    }
    return $p0;
};
RTE.Cursor.$Kx = function RTE_Cursor$$Kx($p0, $p1, $p2, $p3) {
    $p2.val = null;
    $p3.val = null;
    var $v_0 = Math.min($p0.length, $p1.length);

    for (var $v_1 = 1; $v_1 < $v_0; $v_1++) {
        var $v_2 = $p0[$v_1];
        var $v_3 = $p1[$v_1];

        if ($v_2 && $v_3 && $v_2.parentNode === $v_3.parentNode) {
            if (!$p2.val && RTE.Cursor.$C7($v_2) && RTE.Cursor.$C7($v_3) || $p2.val && $v_2 === $v_3 && RTE.Cursor.$Ii($v_2)) {
                $p2.val = $v_2;
                $p3.val = $v_3;
            }
        }
    }
};
RTE.Cursor.$Ii = function RTE_Cursor$$Ii($p0) {
    if ($p0.nodeType === 1) {
        var $v_0 = $p0.tagName;

        return $v_0 === 'HR' || $v_0 === 'IMG';
    }
    return false;
};
RTE.Cursor.$C7 = function RTE_Cursor$$C7($p0) {
    if ($p0.nodeType === 1) {
        var $v_0 = $p0.tagName;

        return $v_0 === 'TABLE' || $v_0 === 'TR' || $v_0 === 'P' || $v_0 === 'H1' || $v_0 === 'H2' || $v_0 === 'H3' || $v_0 === 'H4' || $v_0 === 'H5' || $v_0 === 'H6' || $v_0 === 'DIV' || $v_0 === 'OL' || $v_0 === 'UL' || $v_0 === 'HR' || $v_0 === 'IMG';
    }
    return false;
};
RTE.Cursor.onKeyDown = function RTE_Cursor$onKeyDown(evt) {
    RTE.Cursor.$7L = false;
    RTE.Canvas.$3m = true;
    var $v_0 = evt.target;
    var $v_1 = RTE.RteUtility.$2b($v_0);

    if (!$v_1 || !RTE.Canvas.isInEditable($v_0)) {
        if (evt.keyCode === 8 && !RTE.Canvas.$3x($v_0.tagName) && !RTE.RteUtility.$JD($v_0)) {
            SP.UI.UIUtility.cancelEvent(evt);
        }
        else if (evt.keyCode === 9 && $v_1) {
            RTE.Cursor.waitAndUpdateRangeToCurrentSelection(false, RTE.Canvas.$3l);
        }
        return;
    }
    if (evt.keyCode !== 8 && evt.keyCode !== 127) {
        RTE.Cursor.$4L = true;
    }
    RTE.Canvas.invokeInAutoComplete(function($p1_0) {
        if ($p1_0.onKeyDown(evt)) {
            SP.UI.UIUtility.cancelEvent(evt);
            RTE.Cursor.$7L = true;
            return true;
        }
        return false;
    });
    RTE.ShortcutKeys.initializeDictionary();
    RTE.MovementKeys.initializeDictionary();
    RTE.SelectionClearingKeys.initializeDictionary();
    var $v_2 = RTE.MovementKeys.isMovementKey(evt);

    if ($v_2) {
        if ((evt.keyCode === 38 || evt.keyCode === 40) && RTE.Canvas.getIgnoreUpDownArrows()) {
            SP.UI.UIUtility.cancelEvent(evt);
            return;
        }
        if (9 === evt.keyCode) {
            RTE.Cursor.onKeyDownTabKey(evt);
        }
        else {
            if (evt.keyCode === 8 || evt.keyCode === 127) {
                if (RTE.Cursor.$4L) {
                    RTE.SnapshotManager.takeSnapshot();
                    RTE.Cursor.$4L = false;
                }
                RTE.Cursor.$4a();
                if (!RTE.Canvas.$3x(evt.target.tagName)) {
                    if (RTE.Canvas.get_$R()) {
                        if (RTE.SnapshotManager.$1z(RTE.Canvas.currentEditableRegion())) {
                            RTE.SnapshotManager.takeSnapshot();
                        }
                        if (evt.keyCode === 8) {
                            (RTE.Cursor.get_range()).moveBeforeNode(RTE.Canvas.get_$R());
                        }
                        else {
                            (RTE.Cursor.get_range()).moveAfterNode(RTE.Canvas.get_$R());
                        }
                        RTE.RteUtility.$J(RTE.Canvas.get_$R());
                        RTE.Cursor.update();
                        SP.UI.UIUtility.cancelEvent(evt);
                    }
                    else if (RTE.RteUtility.isInternetExplorer()) {
                        var $v_6 = RTE.QuickRange.$3s();

                        if ($v_6 && $v_6.get_$3y_0() && !$v_6.get_$4z_0()) {
                            var $v_7 = RTE.Cursor.get_range();

                            if ($v_7.isValid()) {
                                var $v_8 = $v_7.parentElement();

                                if ($v_8) {
                                    RTE.ClientWebPartManager.updateRendererNodes();
                                    RTE.ClientWebPartManager.$4m($v_8);
                                    window.setTimeout(RTE.ClientWebPartManager.replaceRenderNodesToCurrent, 0);
                                }
                            }
                        }
                    }
                }
            }
            if (RTE.Cursor.s_range.isValid() && RTE.Cursor.s_range.isEmpty()) {
                RTE.Cursor.s_range.$65_0();
            }
        }
    }
    var $v_3 = RTE.SelectionClearingKeys.isSelectionClearKey(evt);
    var $v_4 = $v_3;

    if (RTE.Cursor.$4L && $v_3 && RTE.Selection.get_hasSelection()) {
        RTE.SnapshotManager.takeSnapshot();
        RTE.Cursor.$4L = false;
    }
    RTE.Cursor.$LZ(evt);
    if (!(evt.keyCode === 16 && RTE.Cursor.$3C)) {
        RTE.Cursor.$3C = false;
    }
    if (evt.keyCode === 229) {
        RTE.Cursor.$3C = true;
        RTE.Cursor.$4a();
    }
    else if (evt.keyCode === 16 || evt.keyCode === 17 || $v_2 && (evt.ctrlKey || evt.shiftKey) && evt.keyCode !== 9 || evt.ctrlKey) {
        RTE.Cursor.$4a();
    }
    else {
        RTE.Cursor.waitAndUpdateRangeToCurrentSelection(!$v_2, RTE.Canvas.$3l);
    }
    var $v_5 = RTE.ShortcutKeys.getShortcut(evt);

    if (!RTE.SU.$7($v_5)) {
        $v_4 = false;
        if ((RTE.RichTextEditorComponentProvider.get_latestProvider()).canHandleCommand($v_5)) {
            if ((RTE.RichTextEditorComponentProvider.get_latestProvider()).handleCommand($v_5, null, 0)) {
                SP.UI.UIUtility.cancelEvent(evt);
                RTE.Canvas.$L3();
            }
        }
    }
    RTE.Cursor.$7h = evt.keyCode === 17;
    RTE.PasteFlyout.collapseOptions();
    if ($v_4 && evt.keyCode !== 9 || evt.keyCode === 27) {
        RTE.PasteFlyout.hide();
    }
    if ($v_4) {
        RTE.SnapshotManager.setRegionDirty(RTE.Canvas.currentEditableRegion());
        RTE.DirtyBitManager.$BD();
    }
    else if ($v_2 && !RTE.PasteFlyout.get_isVisible() && RTE.SnapshotManager.$1z(RTE.Canvas.currentEditableRegion())) {
        RTE.SnapshotManager.takeSnapshot();
    }
};
RTE.Cursor.onKeyDownTabKey = function RTE_Cursor$onKeyDownTabKey(evt) {
    RTE.RteUtility.assertNotNull('evt', evt);
    var $v_0 = false;
    var $v_1 = !evt.shiftKey;
    var $v_2 = null;
    var $v_3 = RTE.Cursor.$1G(['TD', 'TH', 'LI']);

    if ($v_3 && RTE.Canvas.isInEditable($v_3)) {
        if ($v_3.tagName === 'TD' || $v_3.tagName === 'TH') {
            $v_2 = new RTE.TableKeyTabProcessor($v_1);
        }
        else if ($v_3.tagName === 'LI') {
            if ($v_1) {
                RTE.RichTextEditor.increaseIndent();
            }
            else {
                RTE.RichTextEditor.decreaseIndent();
            }
            $v_0 = true;
        }
        $v_3 = $v_3.parentNode;
    }
    if ($v_2) {
        $v_0 = $v_2.process();
    }
    if ($v_0) {
        SP.UI.UIUtility.cancelEvent(evt);
    }
    return $v_0;
};
RTE.Cursor.cut = function RTE_Cursor$cut() {
    RTE.Cursor.select();
    try {
        RTE.Canvas.$6E('cut');
        RTE.Cursor.waitAndUpdateRangeToCurrentSelection(true, 0);
    }
    catch ($$e_0) {
        alert(SP.Res.errorClipboard);
    }
};
RTE.Cursor.copy = function RTE_Cursor$copy() {
    RTE.Cursor.select();
    try {
        RTE.Canvas.$6E('copy');
    }
    catch ($$e_0) {
        alert(SP.Res.errorClipboard);
    }
};
RTE.Cursor.get_pasteInProgress = function RTE_Cursor$get_pasteInProgress() {
    return RTE.Cursor.$14;
};
RTE.Cursor.paste = function RTE_Cursor$paste(pasteModeId) {
    RTE.Cursor.$48 = pasteModeId;
    try {
        var $v_0 = RTE.Selection.getSelectionRange();
        var $v_1 = $v_0.parentElement();

        if (!RTE.Canvas.isEditable($v_1)) {
            RTE.Canvas.$6E('paste');
        }
        else {
            RTE.Cursor.$CG();
        }
    }
    catch ($$e_3) {
        alert(SP.Res.errorClipboard);
        RTE.Cursor.$1g();
        return;
    }
};
RTE.Cursor.$DS = function RTE_Cursor$$DS($p0) {
    if (RTE.RteUtility.isSafari() && !RTE.Cursor.allowSafariDragAndDrop) {
        SP.UI.UIUtility.cancelEvent($p0);
    }
    RTE.Cursor.$6C = RTE.Canvas.getEditableRegion($p0.target);
    if (RTE.Cursor.$6C) {
        RTE.Cursor.updateRangeToCurrentSelection();
        RTE.Cursor.$4I = true;
        RTE.SnapshotManager.takeEditableRegionSnapshot(RTE.Cursor.$6C);
        var $v_0 = RTE.RteUtility.$G($p0.target, 'A');

        if ($v_0) {
            $p0.rawEvent.dataTransfer.dropEffect = 'None';
            $p0.rawEvent.dataTransfer.effectAllowed = 'None';
        }
    }
};
RTE.Cursor.$K0 = function RTE_Cursor$$K0($p0) {
    RTE.Cursor.$4I = false;
    var $v_0 = RTE.Canvas.getEditableRegion($p0.target);

    if (!$v_0) {
        return;
    }
    if (!RTE.RteUtility.isInternetExplorer()) {
        RTE.SnapshotManager.setRegionDirty($v_0);
        RTE.SnapshotManager.takePartialSnapshot($v_0);
    }
    RTE.Canvas.onMouseUp($p0);
};
RTE.Cursor.$DT = function RTE_Cursor$$DT($p0) {
    var $v_0 = RTE.Canvas.getEditableRegion($p0.target);

    if (!$v_0) {
        return;
    }
    RTE.Cursor.cursorRangeIsNowOutdated();
    if (RTE.Cursor.$4I) {
        if (!RTE.RteUtility.isInternetExplorer()) {
            RTE.Cursor.$7p();
        }
        window.setTimeout(RTE.Cursor.$DP, 0);
    }
    else {
        if (RTE.RteUtility.isInternetExplorer()) {
            SP.UI.UIUtility.cancelEvent($p0);
        }
        else {
            RTE.Cursor.$DV($p0, true);
        }
    }
};
RTE.Cursor.$KC = function RTE_Cursor$$KC($p0) {
    if (!RTE.Canvas.isEditable($p0.target)) {
        return;
    }
    RTE.Cursor.$4X = false;
    try {
        if (RTE.RteUtility.isInternetExplorer()) {
            RTE.Cursor.$CG();
            SP.UI.UIUtility.cancelEvent($p0);
        }
        else {
            RTE.Cursor.$DV($p0, false);
        }
    }
    catch ($$e_1) {
        RTE.Cursor.$14 = false;
        RTE.Cursor.$1V = 0;
        SP.UI.UIUtility.cancelEvent($p0);
        RTE.Cursor.$1g();
    }
};
RTE.Cursor.$Jx = function RTE_Cursor$$Jx($p0) {
    if (!SP.UI.UIUtility.focusValidOnThisNode($p0.target)) {
        return;
    }
    RTE.Cursor.updateRangeToCurrentSelection();
};
RTE.Cursor.$Jy = function RTE_Cursor$$Jy($p0) {
    if (!SP.UI.UIUtility.focusValidOnThisNode($p0.target)) {
        return;
    }
    RTE.Cursor.updateRangeToCurrentSelection();
    var $v_0 = RTE.Cursor.get_range();

    if (!$v_0.isEmpty()) {
        var $v_1 = RTE.Canvas.currentEditableRegion();

        if (RTE.SnapshotManager.$1z($v_1)) {
            RTE.SnapshotManager.takeSnapshot();
        }
        if (RTE.RteUtility.isInternetExplorer()) {
            RTE.ClientWebPartManager.updateRendererNodes();
            RTE.ClientWebPartManager.$4m($v_1);
            RTE.Cursor.select();
        }
        window.setTimeout(function() {
            RTE.Cursor.updateRangeToCurrentSelection();
            if (RTE.RteUtility.isInternetExplorer()) {
                RTE.ClientWebPartManager.replaceRenderNodesToCurrent();
            }
            RTE.SnapshotManager.takeSnapshot();
        }, 0);
    }
};
RTE.Cursor.$DV = function RTE_Cursor$$DV($p0, $p1) {
    try {
        if (!$p1 && RTE.Cursor.$14) {
            SP.UI.UIUtility.cancelEvent($p0);
            return;
        }
        RTE.Cursor.$9s();
        RTE.Cursor.$DR($p0, $p1);
        RTE.Cursor.$14 = true;
        RTE.Cursor.$7p();
        if ($p1) {
            window.setTimeout(RTE.Cursor.$DP, 0);
        }
        else {
            window.setTimeout(RTE.Cursor.$KG, 0);
        }
    }
    catch ($v_0) {
        RTE.Cursor.$1g();
        throw $v_0;
    }
};
RTE.Cursor.$KG = function RTE_Cursor$$KG() {
    SP.UI.UIUtility.insertAfter(RTE.Cursor.$K, RTE.Cursor.$L.$4_0);
    RTE.Cursor.$L.resetCacheRange();
    RTE.Cursor.s_range.moveAfterNode(RTE.Cursor.$K);
    RTE.ScrollPosition.$5v(RTE.Cursor.$73);
    RTE.Cursor.$73 = null;
    RTE.RteUtility.forEachChildWithTagAndClass(RTE.Cursor.$K, 'div', 'ms-rte-pasteremove', function($p1_0) {
        if ($p1_0 !== RTE.Cursor.$K) {
            RTE.Cursor.$9R($p1_0.lastChild);
            do {
                var $v_1 = $p1_0.parentNode;

                $v_1 = $v_1.firstChild === $v_1.lastChild ? $v_1 : null;
                RTE.RteUtility.removeNodeAndKeepChildNodes($p1_0);
                $p1_0 = $v_1;
            } while ($p1_0 && $p1_0 !== RTE.Cursor.$K && RTE.RteUtility.$JM($p1_0));
        }
    });
    RTE.Cursor.$9R(RTE.Cursor.$K.firstChild);
    RTE.Cursor.$9R(RTE.Cursor.$K.lastChild);
    RTE.Cursor.$BZ(RTE.Cursor.$K);
    var $v_0 = RTE.Cursor.$48;

    RTE.Cursor.$48 = null;
    RTE.Cursor.s_range.moveAfterNode(RTE.Cursor.$K);
    RTE.RtePasteManager.$9K(RTE.Cursor.$K, false, $v_0, function() {
        SP.UI.UIUtility.insertBefore(RTE.Cursor.s_range.$4_0, RTE.Cursor.$K);
        if (!RTE.RteUtility.$4v(RTE.Cursor.$K)) {
            var $v_2 = document.createElement('SPAN');

            RTE.RteUtility.$k(RTE.Cursor.$K, $v_2);
            RTE.RteUtility.$J(RTE.Cursor.$K);
            RTE.RteUtility.$6V($v_2, RTE.Cursor.s_range.$4_0);
            RTE.Cursor.$K = $v_2;
        }
        else {
            RTE.Cursor.$K.parentNode.removeChild(RTE.Cursor.$K);
            RTE.RteUtility.$6V(RTE.Cursor.$K, RTE.Cursor.s_range.$4_0);
        }
        SP.UI.UIUtility.insertBefore(RTE.Cursor.$L.$4_0, RTE.Cursor.$K);
        SP.UI.UIUtility.insertAfter(RTE.Cursor.$L.$3_0, RTE.Cursor.$K);
        RTE.Cursor.$L.resetCacheRange();
        RTE.Canvas.$4n(RTE.Cursor.$K);
        RTE.RteUtility.removeNodeAndKeepChildNodes(RTE.Cursor.$K);
        RTE.Cursor.$K = null;
        RTE.Cursor.$DQ();
    });
};
RTE.Cursor.$BZ = function RTE_Cursor$$BZ($p0) {
    RTE.RteUtility.forEachChildWithTagAndClass($p0, 'LI', null, function($p1_0) {
        if ($p1_0.parentNode === $p0) {
            var $v_0 = $p1_0.parentNode.tagName;

            if ($v_0 !== 'OL' && $v_0 !== 'UL') {
                var $v_1 = $p0.ownerDocument.createElement('UL');
                var $v_2 = $p1_0.parentNode;

                RTE.RteUtility.$k($v_2, $v_1);
                $v_2.appendChild($v_1);
            }
        }
        else if ($p1_0.parentNode.tagName === 'SPAN' && ($p1_0.parentNode.parentNode.tagName === 'OL' || $p1_0.parentNode.parentNode.tagName === 'UL')) {
            RTE.RteUtility.removeNodeAndKeepChildNodes($p1_0.parentNode);
        }
    });
};
RTE.Cursor.$9R = function RTE_Cursor$$9R($p0) {
    if ($p0 && $p0.nodeType === 3) {
        var $v_0 = $p0.nodeValue;

        if ($v_0 === RTE.RteUtility.$3X || $v_0 === String.fromCharCode(8203)) {
            RTE.RteUtility.$J($p0);
        }
    }
};
RTE.Cursor.$EM = function RTE_Cursor$$EM($p0) {
    if (!RTE.Cursor.$3a) {
        if (RTE.RteUtility.isClassAvailable('SP.UI.ModalDialog')) {
            RTE.Cursor.$3a = SP.UI.ModalDialog.showWaitScreenWithNoClose($p0);
        }
    }
};
RTE.Cursor.$CC = function RTE_Cursor$$CC() {
    if (RTE.Cursor.$3a) {
        RTE.Cursor.$3a.close(1);
        RTE.Cursor.$3a = null;
    }
};
RTE.Cursor.$9s = function RTE_Cursor$$9s() {
    RTE.Cursor.$EM(SP.Res.pasteWaitScreenText);
    RTE.Cursor.$4X = false;
};
RTE.Cursor.$1g = function RTE_Cursor$$1g() {
    if (!RTE.Cursor.$1V) {
        RTE.Cursor.$CC();
    }
};
RTE.Cursor.onPasteWaitingScreenCallback = function RTE_Cursor$onPasteWaitingScreenCallback(dialogResult, returnValue) {
    if (!dialogResult) {
        RTE.Cursor.$4X = true;
        RTE.Cursor.$3a = null;
        RTE.Cursor.$14 = false;
        RTE.Cursor.$1V = 0;
        RTE.RtePasteManager.cancelCurrentPaste();
    }
};
RTE.Cursor.$9L = function RTE_Cursor$$9L($p0) {
    if (!RTE.Cursor.$X) {
        RTE.Cursor.$X = document.createElement('IFRAME');
        RTE.Cursor.$X.src = SP.Utilities.Utility.get_layoutsLatestVersionUrl() + 'blank.htm';
        RTE.Cursor.$X.style.display = 'none';
        RTE.Cursor.$X.style.width = '1px';
        RTE.Cursor.$X.style.height = '1px';
        RTE.Cursor.$X.style.position = 'absolute';
        RTE.Cursor.$X.style.zIndex = -100;
        document.body.appendChild(RTE.Cursor.$X);
    }
    RTE.Cursor.$7H($p0);
};
RTE.Cursor.$7H = function RTE_Cursor$$7H($p0) {
    RTE.Cursor.$X.contentWindow.document.designMode = 'On';
    RTE.Cursor.$X.contentWindow.document.open('text/html', 'replace');
    RTE.Cursor.$X.contentWindow.document.write('<DIV id=\"pasteDiv\">' + String.fromCharCode(8203) + '</DIV>');
    RTE.Cursor.$X.contentWindow.document.close('');
    if ($p0) {
        var $v_0 = RTE.Cursor.$X.contentDocument || RTE.Cursor.$X.contentWindow.document;
        var $v_1 = $v_0 ? $v_0.getElementsByTagName('head') : null;

        if ($v_1 && $v_1.length > 0) {
            var $v_2 = $v_1[0];
            var $v_3 = document.styleSheets;
            var $v_4 = $v_3.length;

            for (var $v_5 = 0; $v_5 < $v_4; $v_5++) {
                var $v_6 = $v_3[$v_5];

                if ($v_6 && !RTE.SU.$2($v_6.href)) {
                    var $v_7 = $v_0.createElement('LINK');

                    $v_7.type = $v_6.type;
                    $v_7.rel = 'stylesheet';
                    $v_7.href = $v_6.href;
                    $v_2.appendChild($v_7);
                }
            }
        }
    }
};
RTE.Cursor.$CG = function RTE_Cursor$$CG() {
    if (!RTE.RteUtility.isInternetExplorer() && RTE.Cursor.$3S && !RTE.Cursor.$49) {
        throw Error.invalidOperation('Can\'t access clipboard');
    }
    if (RTE.Cursor.$14) {
        RTE.Cursor.$1V++;
        return;
    }
    var $v_0 = RTE.Cursor.get_range();

    if ($v_0.isValid()) {
        var $v_1 = true;
        var $v_2 = window.self.clipboardData;

        if (!RTE.SU.$7($v_2)) {
            var $v_3 = $v_2.getData('Text');

            if (!RTE.SU.$7($v_3)) {
                if ($v_3.length < 3000) {
                    $v_1 = false;
                }
            }
        }
        if ($v_1) {
            RTE.Cursor.$9s();
        }
        RTE.Cursor.$1V++;
        RTE.Cursor.$14 = true;
        if (RTE.RteUtility.isInternetExplorer() || RTE.Cursor.$3S && RTE.Cursor.$49) {
            $v_0.deleteContent();
            window.setTimeout(RTE.Cursor.$9N, 10);
        }
        else {
            RTE.Cursor.$9N();
        }
    }
};
RTE.Cursor.$9N = function RTE_Cursor$$9N() {
    try {
        if (RTE.Cursor.$4X) {
            return;
        }
        RTE.Cursor.$1V--;
        RTE.Cursor.$14 = true;
        RTE.Cursor.$9L(true);
        RTE.Cursor.$X.style.display = '';
        var $v_0 = RTE.Cursor.$X.contentWindow.document;
        var $v_1 = $v_0.body;
        var $v_2 = RTE.DomHelper.createRange($v_0);
        var $v_3 = new RTE.Range($v_2);

        $v_3.moveToElementText($v_1);
        $v_3.select();
        $v_0.execCommand('paste', false, null);
        RTE.Cursor.updateRangeToCurrentSelectionWithOptions(true);
        var $v_4 = RTE.Cursor.get_range();
        var $v_5 = $v_4.$1d_0();

        $v_4.deleteContent();
        $v_5.select();
        RTE.Cursor.$X.style.display = 'none';
        RTE.Cursor.$49 = true;
        RTE.Cursor.$3S = true;
        RTE.Cursor.$KN();
    }
    catch ($v_6) {
        if (RTE.Cursor.$3S && RTE.Cursor.$49) {
            RTE.Cursor.$1g();
        }
        RTE.Cursor.$X.style.display = 'none';
        RTE.Cursor.$7H(true);
        if (!RTE.Cursor.$3S) {
            RTE.Cursor.$3S = true;
            RTE.Cursor.$49 = false;
        }
        RTE.Cursor.$14 = false;
        RTE.Cursor.$1V = 0;
        throw $v_6;
    }
};
RTE.Cursor.$KN = function RTE_Cursor$$KN() {
    try {
        var $v_0 = RTE.Cursor.$X.contentWindow.document.body;
        var $v_1 = $v_0.childNodes;
        var $v_2;

        if ($v_1.length === 1 && $v_1[0].id === 'pasteDiv') {
            $v_2 = $v_1[0];
        }
        else {
            $v_2 = $v_0.ownerDocument.createElement('DIV');
            RTE.RteUtility.$k($v_0, $v_2);
            $v_0.appendChild($v_2);
        }
        var $v_3 = RTE.Cursor.$48;

        RTE.Cursor.$48 = null;
        RTE.Cursor.$BZ($v_2);
        RTE.RtePasteManager.$9K($v_2, false, $v_3, function() {
            try {
                RTE.RteUtility.removeNodeAndKeepChildNodes($v_2);
                RTE.Cursor.$KO();
                RTE.Cursor.$8P();
                RTE.Cursor.$9L(true);
                window.setTimeout(function() {
                    RTE.Cursor.$DQ();
                    if (RTE.Cursor.$1V > 0) {
                        RTE.PasteFlyout.hide();
                        RTE.Cursor.$Df();
                        RTE.Cursor.$9N();
                    }
                }, 0);
            }
            catch ($v_4) {
                RTE.Cursor.$7H(false);
                RTE.Cursor.$14 = false;
                RTE.Cursor.$1V = 0;
                RTE.Cursor.$1g();
                throw $v_4;
            }
        });
    }
    catch ($v_5) {
        RTE.Cursor.$7H(false);
        RTE.Cursor.$14 = false;
        RTE.Cursor.$1V = 0;
        RTE.Cursor.$1g();
        throw $v_5;
    }
};
RTE.Cursor.$KO = function RTE_Cursor$$KO() {
    var $v_0 = RTE.Cursor.$X.contentWindow.document.body;
    var $v_1 = RTE.Cursor.get_range();

    $v_1.replaceHtml(RTE.RteUtility.$4B($v_0.innerHTML, false, false));
    SP.UI.UIUtility.insertAfter(RTE.Cursor.$L.$4_0, $v_1.$4_0);
    SP.UI.UIUtility.insertBefore(RTE.Cursor.$L.$3_0, $v_1.$3_0);
    RTE.Cursor.$L.resetCacheRange();
    $v_1.collapse(false);
    RTE.Cursor.select();
};
RTE.Cursor.$Js = function RTE_Cursor$$Js($p0) {
    if (RTE.RteUtility.isInternetExplorer()) {
        RTE.Cursor.$DR($p0, false);
    }
};
RTE.Cursor.$DR = function RTE_Cursor$$DR($p0, $p1) {
    if (!RTE.Canvas.isEditable($p0.target) || RTE.Cursor.ignoreBeforePasteOrDrop) {
        $p0.rawEvent.returnValue = true;
        return;
    }
    if (RTE.Cursor.$14) {
        SP.UI.UIUtility.cancelEvent($p0);
        $p0.rawEvent.returnValue = false;
    }
    var $v_0 = $p0.rawEvent.rangeParent;
    var $v_1 = $p0.rawEvent.rangeOffset;

    if ($v_0 && $v_1) {
        var $v_2 = new RTE.DOMTreePosition($v_0, $v_1);

        $v_2.insertMarker((RTE.Cursor.get_range()).$4_0);
        (RTE.Cursor.get_range()).collapse(true);
    }
    else {
        RTE.Cursor.updateRangeToCurrentSelectionWithOptions(true);
    }
    if ((RTE.Cursor.get_range()).isValid()) {
        if ($p1 || !RTE.PasteFlyout.get_isVisible()) {
            RTE.SnapshotManager.takeSnapshot();
        }
        RTE.Cursor.$8P();
        RTE.Cursor.$L.resetCacheRange();
        RTE.Cursor.$82();
        if ($p1 || RTE.RteUtility.isInternetExplorer()) {
            RTE.Cursor.$Df();
        }
        else {
            RTE.Cursor.$KK();
        }
        $p0.rawEvent.returnValue = true;
    }
    else {
        SP.UI.UIUtility.cancelEvent($p0);
        $p0.rawEvent.returnValue = false;
    }
};
RTE.Cursor.$KK = function RTE_Cursor$$KK() {
    var $v_0 = RTE.Cursor.get_range();

    $v_0.deleteContent();
    var $v_1 = $v_0.getEditableRegion();

    RTE.Cursor.$73 = RTE.ScrollPosition.$7u($v_1);
    RTE.Cursor.$K = document.createElement('DIV');
    RTE.Cursor.$K.setAttribute('contentEditable', 'true');
    RTE.Cursor.$K.className = 'ms-rte-pasteremove';
    RTE.Cursor.$K.style.width = '1px';
    RTE.Cursor.$K.style.height = '1px';
    RTE.Cursor.$K.style.overflow = 'hidden';
    SP.UI.UIUtility.insertAfter(RTE.Cursor.$L.$3_0, $v_0.$3_0);
    SP.UI.UIUtility.insertAfter(RTE.Cursor.$L.$4_0, $v_0.$3_0);
    if (RTE.RteUtility.isFirefox()) {
        $v_1.appendChild(RTE.Cursor.$K);
    }
    else {
        SP.UI.UIUtility.insertAfter(RTE.Cursor.$K, $v_1);
    }
    var $v_2 = RTE.Range.createRange();

    $v_2.moveToElementText(RTE.Cursor.$K);
    RTE.Range.$9j($v_2.$D_0);
};
RTE.Cursor.$Df = function RTE_Cursor$$Df() {
    var $v_0 = RTE.Cursor.get_range();

    $v_0.insertBefore(RTE.Cursor.$L.$4_0);
    document.body.appendChild(RTE.Cursor.$L.$3_0);
};
RTE.Cursor.$K6 = function RTE_Cursor$$K6($p0) {
    var $v_0 = $p0.target;

    if (!$p0.target) {
        return;
    }
    if (RTE.Cursor.$4I) {
        var $v_1 = $v_0.id;

        if ($v_1 && $v_1.indexOf('ms-rterangecursor') !== -1) {
            var $v_2 = RTE.Cursor.get_range();

            if ($v_0 !== $v_2.$4_0 && $v_0 !== $v_2.$3_0) {
                RTE.RteUtility.removeNodeAndKeepChildNodes($v_0);
            }
        }
    }
};
RTE.Cursor.$7p = function RTE_Cursor$$7p() {
    if (!RTE.Cursor.$4w) {
        RTE.Cursor.$4w = true;
        RTE.RteUtility.$s('DOMNodeInserted', RTE.Cursor.$8k);
    }
};
RTE.Cursor.$BB = function RTE_Cursor$$BB() {
    if (RTE.Cursor.$4w) {
        RTE.RteUtility.$BC('DOMNodeInserted', RTE.Cursor.$8k);
        RTE.Cursor.$4w = false;
    }
};
RTE.Cursor.$K1 = function RTE_Cursor$$K1($p0) {
    if (!RTE.Canvas.isInEditable($p0.target)) {
        return;
    }
    if (!RTE.Cursor.$4I) {
        if (RTE.RteUtility.isInternetExplorer()) {
            SP.UI.UIUtility.cancelEvent($p0);
            $p0.rawEvent.dataTransfer.dropEffect = 'None';
        }
        else {
            RTE.Cursor.$7p();
            window.setTimeout(RTE.Cursor.$Fl, 200);
            RTE.Cursor.$6A++;
        }
    }
};
RTE.Cursor.$Fl = function RTE_Cursor$$Fl() {
    RTE.Cursor.$6A--;
    if (RTE.Cursor.$6A <= 0) {
        RTE.Cursor.$9E(true);
    }
};
RTE.Cursor.$DQ = function RTE_Cursor$$DQ() {
    try {
        RTE.Cursor.$9E(false);
        RTE.Cursor.$14 = false;
        RTE.Cursor.$1g();
    }
    catch ($$e_0) {
        RTE.Cursor.$1g();
        RTE.Cursor.$14 = false;
        RTE.Cursor.$1V = 0;
        RTE.Cursor.$BB();
    }
};
RTE.Cursor.$9E = function RTE_Cursor$$9E($p0) {
    RTE.Cursor.$BB();
    var $v_0 = RTE.Cursor.get_range();

    if ($p0) {
        $v_0.insertBefore(RTE.Cursor.$L.$4_0);
        $v_0.insertAfter(RTE.Cursor.$L.$3_0);
        RTE.Cursor.updateRangeToCurrentSelectionWithOptions(true);
    }
    else {
        $v_0.moveBeforeNode(RTE.Cursor.$L.$3_0);
    }
    if (!$v_0.isValid()) {
        return;
    }
    if (!RTE.Cursor.$L.$4_0.parentNode) {
        SP.UI.UIUtility.insertBefore(RTE.Cursor.$L.$4_0, $v_0.$4_0);
    }
    RTE.Cursor.$8P();
    RTE.Cursor.$Jr($p0);
};
RTE.Cursor.$DP = function RTE_Cursor$$DP() {
    RTE.Cursor.$9E(true);
    RTE.Cursor.$1g();
};
RTE.Cursor.$Jr = function RTE_Cursor$$Jr($p0) {
    var $v_0 = RTE.Canvas.getCachedRestriction(RTE.Canvas.currentEditableRegion(), 'RestrictPasteToText', false);

    if ($v_0) {
        RTE.Cursor.$L.convertToText();
        RTE.Cursor.$L.clear();
    }
    RTE.Cursor.$Hl();
    RTE.ClientWebPartManager.replaceRenderNodesToCurrent();
    RTE.SnapshotManager.setCurrentRegionDirtyIf(!$p0 && !RTE.Cursor.$L.isEmpty());
    RTE.SnapshotManager.takeSnapshot();
    RTE.Cursor.update();
};
RTE.Cursor.$8P = function RTE_Cursor$$8P() {
    var $v_0 = RTE.Cursor.$L;

    RTE.RteUtility.$4N($v_0.$4_0);
    RTE.RteUtility.$5k($v_0.$3_0);
    var $v_1 = RTE.Cursor.get_range();

    RTE.RteUtility.$4N($v_1.$4_0);
    RTE.RteUtility.$5k($v_1.$3_0);
};
RTE.Cursor.$Hl = function RTE_Cursor$$Hl() {
    var $v_0 = RTE.Cursor.$L.parentElement();

    RTE.XhtmlProcessor.$Hm($v_0);
};
RTE.Cursor.get_pasteRange = function RTE_Cursor$get_pasteRange() {
    return RTE.Cursor.$L;
};
RTE.Cursor.update = function RTE_Cursor$update() {
    RTE.Cursor.s_range.resetCacheRange();
    if (!(RTE.PreviewManager.get_instance()).get_hasPreview()) {
        RTE.Cursor.$9y();
        RTE.CanvasEvents.$8I();
        RTE.Cursor.select();
    }
};
RTE.Cursor.$9y = function RTE_Cursor$$9y() {
    if (RTE.Cursor.$24) {
        RTE.Cursor.updateRangeToCurrentSelectionWithOptions(RTE.Cursor.$4O);
    }
};
RTE.Cursor.waitAndUpdateRangeToCurrentSelection = function RTE_Cursor$waitAndUpdateRangeToCurrentSelection(ifValid, delay) {
    if (RTE.Cursor.$39) {
        return;
    }
    if (!ifValid) {
        RTE.Cursor.$4O = false;
    }
    RTE.Cursor.$4a();
    RTE.Cursor.$4P = window.setTimeout(RTE.Cursor.$Ea, delay);
};
RTE.Cursor.$82 = function RTE_Cursor$$82() {
    if (RTE.Cursor.$4P > 0) {
        window.clearTimeout(RTE.Cursor.$4P);
        RTE.Cursor.$4P = 0;
    }
    if (RTE.Canvas.$27 > 0) {
        window.clearTimeout(RTE.Canvas.$27);
        RTE.Canvas.$27 = 0;
    }
};
RTE.Cursor.$4a = function RTE_Cursor$$4a() {
    RTE.Cursor.$82();
    RTE.Cursor.cursorRangeIsNowOutdated();
};
RTE.Cursor.$Le = function RTE_Cursor$$Le() {
    RTE.Cursor.$4P = 0;
    RTE.Cursor.$9x(RTE.Cursor.$4O);
};
RTE.Cursor.updateRangeToCurrentSelectionAndDispatch = function RTE_Cursor$updateRangeToCurrentSelectionAndDispatch() {
    RTE.Cursor.$9x(false);
};
RTE.Cursor.$9x = function RTE_Cursor$$9x($p0) {
    RTE.Cursor.updateRangeToCurrentSelectionWithOptions($p0);
    RTE.Cursor.$4O = true;
    RTE.Cursor.$52 = false;
    RTE.CanvasEvents.$8I();
};
RTE.Cursor.updateRangeToCurrentSelection = function RTE_Cursor$updateRangeToCurrentSelection() {
    RTE.Cursor.updateRangeToCurrentSelectionWithOptions(false);
};
RTE.Cursor.updateRangeToCurrentSelectionWithOptions = function RTE_Cursor$updateRangeToCurrentSelectionWithOptions(ifValid) {
    RTE.Cursor.$6d = false;
    RTE.Cursor.$6c = false;
    RTE.Cursor.$82();
    if ((RTE.PreviewManager.get_instance()).get_hasPreview()) {
        return;
    }
    RTE.Cursor.$24 = false;
    var $v_0 = RTE.Selection.getSelectionRange();
    var $v_1 = true;

    if (RTE.Canvas.get_$R() && (RTE.Canvas.get_$R()).parentNode && (RTE.Canvas.get_$R()).parentNode.parentNode) {
        $v_1 = RTE.Cursor.s_range.moveToNode(RTE.Canvas.get_$R());
    }
    else if (!$v_0) {
        $v_1 = false;
    }
    else {
        $v_1 = RTE.Cursor.s_range.moveToRange($v_0);
    }
    if (!$v_1 && !ifValid) {
        RTE.Cursor.s_range.clear();
    }
    else if ($v_1) {
        var $v_2 = RTE.Cursor.s_range.expandInNonEditableRegion();

        if ($v_2 && $v_2 !== RTE.Canvas.get_$R()) {
            RTE.Canvas.$5c($v_2);
            RTE.Cursor.s_range.moveToNode($v_2);
        }
        if (!RTE.RteUtility.isInternetExplorer() && !RTE.Canvas.get_$R()) {
            var $v_3 = RTE.Cursor.s_range.$1d_0();

            $v_3.select();
        }
    }
    if (!ifValid) {
        RTE.Canvas.$P();
    }
};
RTE.Cursor.$Cn = function RTE_Cursor$$Cn() {
    if (!RTE.Cursor.$6d && RTE.Cursor.s_range.isValid()) {
        var $v_0 = ((RTE.Cursor.s_range.$1d_0()).get_innerHTML()).toLowerCase();
        var $v_1 = new RegExp('<\\/?t[r|h|d|able]');

        RTE.Cursor.$6c = $v_0.search($v_1) !== -1;
        RTE.Cursor.$6d = true;
    }
    return RTE.Cursor.$6c;
};
RTE.Cursor.select = function RTE_Cursor$select() {
    try {
        RTE.Cursor.$CV();
    }
    catch ($$e_0) {
        window.setTimeout(RTE.Cursor.$CV, 0);
    }
};
RTE.Cursor.$CV = function RTE_Cursor$$CV() {
    if ((RTE.PreviewManager.get_instance()).get_hasPreview()) {
        return;
    }
    RTE.Cursor.$39 = true;
    var $v_0 = RTE.Cursor.get_range();

    if ($v_0.isValid()) {
        RTE.Canvas.$5c(RTE.Cursor.$Hg());
        if (!RTE.Canvas.get_$R()) {
            if (RTE.RteUtility.isInternetExplorer()) {
                if (!$v_0.isEmpty()) {
                    var $v_1 = $v_0.$1d_0();
                    var $v_2 = RTE.Cursor.getSelectedImage();

                    if ($v_2) {
                        try {
                            var $v_3 = document.body.createControlRange();

                            $v_3.add($v_2);
                            $v_3.select();
                        }
                        catch ($$e_4) {
                            $v_1.select();
                        }
                    }
                    else {
                        $v_1.select();
                    }
                }
                else if ($v_0.get_$6b_0()) {
                    var $v_4 = $v_0.$1d_0();

                    $v_4.select();
                }
                else {
                    var $v_5 = null;
                    var $v_6 = null;

                    try {
                        $v_5 = document.createElement('SPAN');
                        $v_5.innerHTML = String.fromCharCode(8203);
                        $v_0.insertBefore($v_5);
                        $v_6 = document.createElement('SPAN');
                        $v_6.innerHTML = String.fromCharCode(8203);
                        $v_0.insertAfter($v_6);
                        var $v_7 = $v_0.$1d_0();

                        $v_7.select();
                    }
                    finally {
                        if ($v_5 && $v_5.parentNode) {
                            $v_5.parentNode.removeChild($v_5);
                        }
                        if ($v_6 && $v_6.parentNode) {
                            $v_6.parentNode.removeChild($v_6);
                        }
                    }
                }
            }
            else {
                var $v_8 = $v_0.parentElement();
                var $v_9 = RTE.Canvas.getEditableRegion($v_8);

                if ($v_9 && !RTE.RteUtility.isSafari()) {
                    $v_9.focus();
                }
                var $v_A = $v_0.$1d_0();

                if ($v_A.$D_0.startContainer !== $v_A.$D_0.endContainer || !RTE.Canvas.$1Q($v_A.$D_0.startContainer)) {
                    $v_A.select();
                }
            }
        }
        else {
            var $v_B = $v_0.$1d_0();

            $v_B.select();
            var $v_C = RTE.Selection.getSelection();

            $v_C.clear();
        }
        if (!(RTE.PreviewManager.get_instance()).get_hasPreview()) {
            $v_0.$L0_0();
        }
    }
    RTE.Cursor.$24 = false;
    RTE.Cursor.$39 = false;
};
RTE.Cursor.getCurrentElement = function RTE_Cursor$getCurrentElement() {
    var $v_0 = RTE.Cursor.get_range();

    if (!$v_0) {
        return null;
    }
    if (!$v_0.isValid()) {
        return null;
    }
    if (!$v_0.get_isEditable()) {
        return null;
    }
    return $v_0.parentElement();
};
RTE.Cursor.$JF = function RTE_Cursor$$JF($p0) {
    var $v_0 = RTE.Cursor.getCurrentElement();

    if ($v_0) {
        if ($v_0.tagName === $p0) {
            return true;
        }
    }
    return false;
};
RTE.Cursor.$IM = function RTE_Cursor$$IM() {
    var $v_0 = RTE.Cursor.getCurrentElement();

    return RTE.RteUtility.$6K($v_0, false);
};
RTE.Cursor.getNearestContainingElementOfType = function RTE_Cursor$getNearestContainingElementOfType(strTagName) {
    var $v_0 = RTE.Cursor.getCurrentElement();

    return RTE.RteUtility.$G($v_0, strTagName);
};
RTE.Cursor.$1G = function RTE_Cursor$$1G($p0) {
    var $v_0 = RTE.Cursor.getCurrentElement();

    return RTE.RteUtility.$2d($v_0, $p0);
};
RTE.Cursor.$C1 = function RTE_Cursor$$C1($p0) {
    var $v_0 = (RTE.Cursor.get_range()).getSingleElement();

    while ($v_0 && RTE.Canvas.isEditable($v_0)) {
        if ($v_0.tagName === $p0) {
            return $v_0;
        }
        var $v_1 = RTE.RteUtility.$1x($v_0, true);

        if ($v_1 && $v_1 === RTE.RteUtility.$1e($v_0, true) && $v_1.nodeType === 1) {
            $v_0 = $v_1;
        }
        else {
            return null;
        }
    }
    return null;
};
RTE.Cursor.getSelectedTable = function RTE_Cursor$getSelectedTable() {
    return RTE.Cursor.$C0('TABLE');
};
RTE.Cursor.$C0 = function RTE_Cursor$$C0($p0) {
    var $v_0 = RTE.Cursor.get_range();

    if (!$v_0.isValid()) {
        return null;
    }
    var $v_1 = $v_0.getParentChain();

    for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
        var $v_3 = $v_1[$v_2];
        var $v_4 = $v_3.tagName;

        if ($v_4 && $v_4 === $p0) {
            return $v_3;
        }
    }
    return RTE.Cursor.$C1($p0);
};
RTE.Cursor.getSelectedImage = function RTE_Cursor$getSelectedImage() {
    return RTE.Cursor.$C1('IMG');
};
RTE.Cursor.getSelectedLink = function RTE_Cursor$getSelectedLink() {
    return RTE.Cursor.$C0('A');
};
RTE.Cursor.getSelectedAtomic = function RTE_Cursor$getSelectedAtomic() {
    return RTE.Canvas.get_$R();
};
RTE.Cursor.$Ia = function RTE_Cursor$$Ia($p0) {
    var $v_0 = RTE.Canvas.getDirectAtomicParent($p0);

    if (RTE.Canvas.isInEditable($v_0)) {
        return RTE.Canvas.$6L($v_0);
    }
    else {
        return null;
    }
};
RTE.Cursor.$Hg = function RTE_Cursor$$Hg() {
    var $v_0 = RTE.Cursor.get_range();

    if (!$v_0.isValid()) {
        return null;
    }
    $v_0.fixMarkers();
    var $v_1 = $v_0.parentElement();
    var $v_2 = RTE.Canvas.getDirectAtomicParent($v_1);

    if ($v_2) {
        return RTE.Canvas.$6L($v_2);
    }
    var $v_3 = (RTE.Cursor.get_range()).getSingleElement();

    if ($v_3 && RTE.Canvas.$1Q($v_3)) {
        return RTE.Canvas.$6L($v_3);
    }
    return null;
};
RTE.DirtyBitManager = function RTE_DirtyBitManager() {
};
RTE.DirtyBitManager.start = function RTE_DirtyBitManager$start() {
    var $v_0 = $get('ms-rtedirtybit');

    if ($v_0 && $v_0.value === '1') {
        RTE.DirtyBitManager.$5W = true;
    }
    RTE.DirtyBitManager.$4F = true;
};
RTE.DirtyBitManager.stop = function RTE_DirtyBitManager$stop() {
    RTE.DirtyBitManager.$4F = false;
};
RTE.DirtyBitManager.isDirty = function RTE_DirtyBitManager$isDirty() {
    if (RTE.DirtyBitManager.$4F) {
        if (RTE.DirtyBitManager.$5W) {
            if (typeof rteRegionIsDirty === 'boolean' && rteRegionIsDirty) {
                return true;
            }
            return RTE.SnapshotManager.get_undoEnabled();
        }
    }
    return false;
};
RTE.DirtyBitManager.cleanRTE = function RTE_DirtyBitManager$cleanRTE() {
    if (!RTE.DirtyBitManager.$4F) {
        return;
    }
    RTE.DirtyBitManager.$5W = false;
};
RTE.DirtyBitManager.$BD = function RTE_DirtyBitManager$$BD() {
    if (!RTE.DirtyBitManager.$4F) {
        return;
    }
    RTE.DirtyBitManager.$5W = true;
};
RTE.DOMTreePosition = function RTE_DOMTreePosition(p_node, p_offset) {
    this.$1_0 = p_node;
    this.$H_0 = p_offset;
};
RTE.DOMTreePosition.prototype = {
    $1_0: null,
    $H_0: 0,
    $4Y_0: null,
    $8g_0: true,
    getCurrentNode: function RTE_DOMTreePosition$getCurrentNode() {
        return this.$1_0;
    },
    setCurrentNode: function RTE_DOMTreePosition$setCurrentNode(newNode) {
        this.$1_0 = newNode;
    },
    atStart: function RTE_DOMTreePosition$atStart() {
        return !this.$H_0;
    },
    atEnd: function RTE_DOMTreePosition$atEnd() {
        if (SP.UI.UIUtility.isTextNode(this.$1_0)) {
            return this.$H_0 === this.$1_0.nodeValue.length;
        }
        else {
            return this.$H_0 === this.$1_0.childNodes.length;
        }
    },
    $F7_0: function RTE_DOMTreePosition$$F7_0($p0) {
        if (SP.UI.UIUtility.isTextNode(this.$1_0)) {
            return this.$H_0 === this.$1_0.nodeValue.length;
        }
        else {
            return this.$H_0 === $p0.length;
        }
    },
    move: function RTE_DOMTreePosition$move(left) {
        return this.moveCount(left, 1);
    },
    moveCount: function RTE_DOMTreePosition$moveCount(left, count) {
        var $v_0;

        if (left) {
            $v_0 = this.$DC_0(count);
        }
        else {
            $v_0 = this.$DF_0(count);
        }
        if (!$v_0) {
            return false;
        }
        if (this.$1_0.parentNode && RTE.RteUtility.$CX(this.$1_0)) {
            return this.move(left);
        }
        return true;
    },
    moveRight: function RTE_DOMTreePosition$moveRight() {
        return this.moveCount(false, 1);
    },
    moveLeft: function RTE_DOMTreePosition$moveLeft() {
        return this.moveCount(true, 1);
    },
    $DF_0: function RTE_DOMTreePosition$$DF_0($p0) {
        var $v_0 = false;

        while ($p0 >= 0) {
            if (this.$1_0 && SP.UI.UIUtility.isTextNode(this.$1_0)) {
                $v_0 = false;
                var $v_1 = this.$1_0.nodeValue.length - this.$H_0;

                if ($v_1 > 0) {
                    if ($v_1 <= $p0) {
                        this.$H_0 += $v_1;
                        $p0 -= $v_1;
                    }
                    else {
                        this.$H_0 += $p0;
                        $p0 = -1;
                    }
                }
                else {
                    if (!this.moveToNextElement()) {
                        return false;
                    }
                }
            }
            else {
                if (SP.UI.UIUtility.isNodeOfType(this.$1_0, RTE.HtmlTagName.blockElements)) {
                    if (!$v_0) {
                        $p0--;
                        $v_0 = true;
                    }
                    if ($p0 < 0) {
                        return this.moveToPreviousElement();
                    }
                }
                else if (RTE.RteUtility.$3v(this.$1_0) || this.$1_0.className && this.$1_0.className.indexOf('ms-rtestate-read') !== -1) {
                    $v_0 = false;
                    $p0--;
                    if ($p0 < 0) {
                        return this.moveToPreviousElement();
                    }
                }
                else {
                    $v_0 = false;
                }
                if (!this.moveToNextElement()) {
                    return false;
                }
            }
            if (this.$4Y_0 && !this.$1_0.childNodes.length) {
                this.$4Y_0 = null;
            }
        }
        return true;
    },
    $DC_0: function RTE_DOMTreePosition$$DC_0($p0) {
        var $v_0 = false;

        while ($p0 >= 0) {
            if (this.$1_0 && SP.UI.UIUtility.isTextNode(this.$1_0) && this.$H_0 > 0) {
                $v_0 = false;
                if (this.$H_0 <= $p0) {
                    $p0 -= this.$H_0;
                    this.$H_0 = 0;
                }
                else {
                    this.$H_0 -= $p0;
                    $p0 = -1;
                }
            }
            else {
                if (SP.UI.UIUtility.isNodeOfType(this.$1_0, RTE.HtmlTagName.blockElements)) {
                    if (!$v_0) {
                        $p0--;
                        $v_0 = true;
                    }
                    if ($p0 < 0) {
                        return this.moveToNextElement();
                    }
                }
                else if (RTE.RteUtility.$3v(this.$1_0) || this.$1_0.className && this.$1_0.className.indexOf('ms-rtestate-read') !== -1) {
                    $v_0 = false;
                    $p0--;
                    if ($p0 < 0) {
                        return this.moveToNextElement();
                    }
                }
                else {
                    $v_0 = false;
                }
                if (!this.moveToPreviousElement()) {
                    return false;
                }
            }
            if (this.$4Y_0 && !this.$1_0.childNodes.length) {
                this.$4Y_0 = null;
            }
        }
        return true;
    },
    normalize: function RTE_DOMTreePosition$normalize() {
        if (!SP.UI.UIUtility.isTextNode(this.$1_0)) {
            var $v_0 = this.$1_0.childNodes;
            var $v_1 = $v_0.length;

            if ($v_1 > 0) {
                if ($v_1 === this.$H_0 && this.$H_0 > 0) {
                    this.$1_0 = $v_0[this.$H_0 - 1];
                    this.setLocationAtEnd();
                    this.normalize();
                }
                else {
                    this.$1_0 = $v_0[this.$H_0];
                    this.setLocationAtStart();
                    this.normalize();
                }
                this.$4Y_0 = null;
            }
        }
    },
    normalizeLeft: function RTE_DOMTreePosition$normalizeLeft() {
        var $v_0 = this.$1_0;

        while ($v_0) {
            if ($v_0.style && $v_0.style.display === 'none') {
                this.$1_0 = $v_0;
                this.setLocationAtStart();
            }
            $v_0 = $v_0.parentNode;
        }
        this.$DC_0(0);
    },
    normalizeRight: function RTE_DOMTreePosition$normalizeRight() {
        var $v_0 = this.$1_0;

        while ($v_0) {
            if ($v_0.style && $v_0.style.display === 'none') {
                this.$1_0 = $v_0;
                this.setLocationAtEnd();
            }
            $v_0 = $v_0.parentNode;
        }
        this.$DF_0(0);
    },
    moveToPreviousElement: function RTE_DOMTreePosition$moveToPreviousElement() {
        var $v_0 = this.$1_0;

        if (!$v_0) {
            return false;
        }
        if (this.atStart()) {
            var $v_1 = $v_0.parentNode;

            if (!$v_1) {
                $v_1 = this.$1_0.parentElement;
            }
            if (!$v_1) {
                return false;
            }
            var $v_2 = $v_0.previousSibling;

            if (RTE.RteUtility.isInternetExplorer()) {
                var $v_3 = $v_1.uniqueID;

                if (!$v_2 || $v_2.parentNode && $v_2.parentNode.uniqueID !== $v_3) {
                    var $v_4 = $v_1.childNodes;

                    if ($v_4[0] !== this.$1_0) {
                        var $v_5 = $v_4.length;

                        for (var $v_6 = $v_5 - 1; $v_6 >= 0; $v_6--) {
                            var $v_7 = $v_4[$v_6];

                            if ($v_7 === $v_0) {
                                $v_6--;
                                if ($v_6 >= 0) {
                                    $v_2 = $v_4[$v_6];
                                }
                                else {
                                    $v_2 = null;
                                }
                                while ($v_2 && $v_2.parentNode && $v_2.parentNode.uniqueID === $v_3) {
                                    $v_6--;
                                    if ($v_6 >= 0) {
                                        $v_2 = $v_4[$v_6];
                                    }
                                    else {
                                        $v_2 = null;
                                    }
                                }
                                break;
                            }
                        }
                    }
                    else {
                        $v_2 = null;
                    }
                }
            }
            if ($v_2) {
                this.$1_0 = $v_2;
                this.setLocationAtEnd();
            }
            else {
                this.$1_0 = $v_1;
                this.setLocationAtStart();
            }
        }
        else {
            var $v_8 = $v_0.childNodes;

            if ($v_8 && $v_8.length > 0) {
                this.$1_0 = $v_8[$v_8.length - 1];
                this.setLocationAtEnd();
            }
            else {
                this.setLocationAtStart();
                return this.moveToPreviousElement();
            }
        }
        if (this.$8g_0 && SP.UI.UIUtility.isTextNode(this.$1_0) && !this.$1_0.nodeValue.length) {
            return this.moveToPreviousElement();
        }
        return !!this.$1_0;
    },
    moveToNextElement: function RTE_DOMTreePosition$moveToNextElement() {
        var $v_0 = this.$1_0;

        if (!$v_0) {
            return false;
        }
        var $v_1 = $v_0.childNodes;

        if (this.$F7_0($v_1)) {
            var $v_2 = $v_0.parentNode;

            if (!$v_2) {
                $v_2 = this.$1_0.parentElement;
            }
            if (!$v_2) {
                return false;
            }
            var $v_3 = $v_0.nextSibling;

            if (RTE.RteUtility.isInternetExplorer()) {
                var $v_4 = !!$v_3;
                var $v_5 = $v_2.uniqueID;

                if (!$v_3 || $v_3.parentNode && $v_3.parentNode.uniqueID !== $v_5) {
                    $v_3 = null;
                    var $v_6 = $v_2.childNodes;
                    var $v_7 = $v_6.length;

                    if ($v_6[$v_7 - 1] !== this.$1_0) {
                        for (var $v_8 = 0; $v_8 < $v_7; $v_8++) {
                            var $v_9 = $v_6[$v_8];

                            if ($v_9 === this.$1_0) {
                                $v_8++;
                                if ($v_7 > $v_8) {
                                    $v_3 = $v_6[$v_8];
                                }
                                else {
                                    $v_3 = null;
                                }
                                while ($v_3 && $v_3.parentNode && $v_3.parentNode.uniqueID !== $v_5) {
                                    $v_8++;
                                    if ($v_7 > $v_8) {
                                        $v_3 = $v_6[$v_8];
                                    }
                                    else {
                                        $v_3 = null;
                                    }
                                }
                                break;
                            }
                        }
                    }
                    else {
                        $v_3 = null;
                    }
                    if (!!($v_4 ^ !!$v_3)) {
                        RTE.RteUtility.$7c = false;
                    }
                }
            }
            if ($v_3) {
                this.$1_0 = $v_3;
                this.setLocationAtStart();
            }
            else {
                this.$1_0 = $v_2;
                this.setLocationAtEnd();
            }
        }
        else {
            if ($v_1 && $v_1[0]) {
                this.$1_0 = $v_1[0];
                this.setLocationAtStart();
            }
            else {
                this.setLocationAtEnd();
                return this.moveToNextElement();
            }
        }
        if (this.$8g_0 && SP.UI.UIUtility.isTextNode(this.$1_0) && !this.$1_0.nodeValue.length) {
            return this.moveToNextElement();
        }
        return !!this.$1_0;
    },
    setLocationAtEnd: function RTE_DOMTreePosition$setLocationAtEnd() {
        if (SP.UI.UIUtility.isTextNode(this.$1_0)) {
            this.$H_0 = this.$1_0.nodeValue.length;
        }
        else {
            this.$H_0 = this.$1_0.childNodes.length;
        }
    },
    setLocationAtStart: function RTE_DOMTreePosition$setLocationAtStart() {
        this.$H_0 = 0;
    },
    setLocation: function RTE_DOMTreePosition$setLocation(atStart) {
        if (atStart) {
            this.setLocationAtStart();
        }
        else {
            this.setLocationAtEnd();
        }
    },
    setOffset: function RTE_DOMTreePosition$setOffset(newOffset) {
        this.$H_0 = newOffset;
    },
    getOffset: function RTE_DOMTreePosition$getOffset() {
        return this.$H_0;
    },
    insertMarker: function RTE_DOMTreePosition$insertMarker(marker) {
        if (marker === this.$1_0) {
            return;
        }
        this.removeNode(marker);
        var $v_0 = this.$1_0.nodeType === 1 ? this.$1_0 : this.$1_0.parentNode;

        if (RTE.Canvas.$3x($v_0.tagName)) {
            return;
        }
        if (!SP.UI.UIUtility.isTextNode(this.$1_0)) {
            if (RTE.RteUtility.$3v(this.$1_0)) {
                this.$1_0.parentNode.insertBefore(marker, this.$1_0);
            }
            else if (this.$H_0 === this.$1_0.childNodes.length) {
                try {
                    this.$1_0.appendChild(marker);
                    this.$H_0 = this.$1_0.childNodes.length;
                }
                catch ($$e_2) {
                    this.$1_0.parentNode.insertBefore(marker, this.$1_0);
                }
            }
            else if (!this.$H_0) {
                SP.UI.UIUtility.insertBefore(marker, this.$1_0.childNodes[this.$H_0]);
            }
            else {
                SP.UI.UIUtility.insertBefore(marker, this.$1_0.childNodes[this.$H_0]);
                this.$1_0 = marker;
                this.$H_0 = 0;
                this.moveToNextElement();
            }
        }
        else if (this.$1_0.nodeValue.length === this.$H_0) {
            SP.UI.UIUtility.insertAfter(marker, this.$1_0);
        }
        else {
            if (this.$H_0) {
                var $v_1 = this.$1_0.nodeValue.substr(this.$H_0);

                this.$1_0.nodeValue = this.$1_0.nodeValue.substr(0, this.$H_0);
                SP.UI.UIUtility.insertAfter(marker, this.$1_0);
                var $v_2 = RTE.RteUtility.createTextNode(window.document, $v_1);

                SP.UI.UIUtility.insertAfter($v_2, marker);
            }
            else {
                SP.UI.UIUtility.insertBefore(marker, this.$1_0);
            }
        }
    },
    removeNode: function RTE_DOMTreePosition$removeNode(marker) {
        if (this.$1_0 === marker) {
            this.moveToPreviousElement();
            RTE.RteUtility.$J(marker);
        }
        else if (!SP.UI.UIUtility.isTextNode(this.$1_0)) {
            if (this.$H_0 === this.$1_0.childNodes.length) {
                RTE.RteUtility.$J(marker);
                this.$H_0 = this.$1_0.childNodes.length;
            }
            else if (this.$H_0) {
                var $v_0 = this.$1_0.childNodes[this.$H_0];
                var $v_1 = this.$1_0.childNodes.length;

                RTE.RteUtility.$J(marker);
                var $v_2 = this.$1_0.childNodes.length;

                if ($v_0 !== marker && $v_1 !== $v_2) {
                    for (var $v_3 = 0; $v_3 < $v_2; $v_3++) {
                        if (this.$1_0.childNodes[$v_3] === $v_0) {
                            this.$H_0 = $v_3;
                        }
                    }
                }
            }
            else {
                RTE.RteUtility.$J(marker);
            }
        }
        else {
            RTE.RteUtility.$J(marker);
        }
    },
    clone: function RTE_DOMTreePosition$clone() {
        return new RTE.DOMTreePosition(this.$1_0, this.$H_0);
    }
};
RTE.EmbeddingCommands = function RTE_EmbeddingCommands() {
};
RTE.EmbeddingCommands.canUserEmbedIframes = function RTE_EmbeddingCommands$canUserEmbedIframes() {
    var $v_0 = RTE.Canvas.currentEditableRegion();

    return $v_0 ? RTE.Canvas.getCachedRestriction($v_0, 'AllowEmbedding', false) : false;
};
RTE.EmbeddingCommands.canUserEmbedWebPart = function RTE_EmbeddingCommands$canUserEmbedWebPart() {
    if (!RTE.Canvas.canHandleInsertWebPart()) {
        return false;
    }
    var $v_0 = RTE.Canvas.currentEditableRegion();

    if (!$v_0 || !RTE.Canvas.getCachedRestriction($v_0, 'AllowScriptWebParts', false)) {
        return false;
    }
    return !RTE.SU.$2(RTE.EmbeddingCommands.getEmbeddingWebPartId());
};
RTE.EmbeddingCommands.canHandleInsertEmbeddingButton = function RTE_EmbeddingCommands$canHandleInsertEmbeddingButton() {
    if (RTE.Canvas.get_$R() && RTE.RteUtility.containsCssClass(RTE.Canvas.get_$R(), 'ms-rte-wpbox')) {
        if (RTE.EmbeddingCommands.$Bl(RTE.Canvas.get_$R())) {
            return RTE.EmbeddingCommands.canUserEmbedWebPart();
        }
    }
    return RTE.EmbeddingCommands.canHandleInsertEmbedding();
};
RTE.EmbeddingCommands.canHandleInsertEmbedding = function RTE_EmbeddingCommands$canHandleInsertEmbedding() {
    return RTE.EmbeddingCommands.canUserEmbedIframes() || RTE.EmbeddingCommands.canUserEmbedWebPart();
};
RTE.EmbeddingCommands.getEmbeddingWebPartId = function RTE_EmbeddingCommands$getEmbeddingWebPartId() {
    return RTE.Canvas.getStringRestriction(RTE.Canvas.currentEditableRegion(), 'EmbeddingWPId', null);
};
RTE.EmbeddingCommands.$BV = function RTE_EmbeddingCommands$$BV($p0) {
    var $v_0 = null;

    while ($p0 && $p0 !== document.body) {
        if (RTE.RteUtility.containsCssClass($p0, 'ms-rte-embedcode')) {
            $v_0 = $p0;
            break;
        }
        $p0 = $p0.parentNode;
    }
    return $v_0;
};
RTE.EmbeddingCommands.launchEmbedDialog = function RTE_EmbeddingCommands$launchEmbedDialog($p0) {
    var $v_0 = '';
    var $v_1 = RTE.EmbeddingCommands.$BV($p0) || RTE.Canvas.get_$R();

    if ($v_1 && RTE.RteUtility.containsCssClass($v_1, 'ms-rte-wpbox')) {
        $v_1 = RTE.EmbeddingCommands.$Bl($v_1);
    }
    if ($v_1) {
        if (RTE.RteUtility.containsCssClass($v_1, 'ms-rte-embedwp')) {
            var $v_3 = $v_1.getAttribute('InputField');

            if (!RTE.SU.$2($v_3)) {
                var $v_4 = $get($v_3);

                if ($v_4) {
                    $v_0 = $v_4.value;
                    var $v_5 = new RTE.WebPartEmbeddingDialog($v_1, $v_4);

                    $v_5.show($v_0);
                    return;
                }
            }
        }
        else if (RTE.RteUtility.containsCssClass($v_1, 'ms-rte-embedcode') && $v_1.firstChild) {
            $v_0 = RTE.EmbeddingCommands.$IA($v_1);
        }
    }
    var $v_2 = new RTE.RteEmbeddingDialog($v_1);

    $v_2.show($v_0);
};
RTE.EmbeddingCommands.$Bl = function RTE_EmbeddingCommands$$Bl($p0) {
    var $v_0 = null;

    RTE.RteUtility.forEachChildWithTagAndClass($p0, 'DIV', 'ms-rte-embedcode', function($p1_0) {
        if (!$v_0) {
            $v_0 = $p1_0;
        }
    });
    return $v_0;
};
RTE.EmbeddingCommands.$IA = function RTE_EmbeddingCommands$$IA($p0) {
    var $v_0 = $p0;

    if ($v_0.firstChild && $v_0.firstChild.nodeType === 1 && RTE.RteUtility.containsCssClass($v_0.firstChild, 'ms-rte-embedcode-title')) {
        $v_0 = $v_0.firstChild.nextSibling;
    }
    while ($v_0.firstChild && $v_0.firstChild.nodeType === 1 && RTE.RteUtility.containsCssClass($v_0.firstChild, 'ms-rtegenerate-skip')) {
        $v_0 = $v_0.firstChild;
    }
    var $v_1 = $v_0.innerHTML;

    return RTE.RteUtility.$4B($v_1, false, false);
};
RTE.EmbeddingCommands.$B2 = function RTE_EmbeddingCommands$$B2() {
    var $v_0 = document.createElement('DIV');

    $v_0.className = 'ms-rtestate-read ms-rte-embedcode ms-rte-embedil ms-rtestate-notify';
    return $v_0;
};
RTE.EmbeddingCommands.moveEmbeddingBoxIntoEditMode = function RTE_EmbeddingCommands$moveEmbeddingBoxIntoEditMode($p0) {
    if (!$p0) {
        return;
    }
    if ($p0.firstChild && $p0.firstChild.nodeType === 1 && RTE.RteUtility.containsCssClass($p0.firstChild, 'ms-rte-embedcode-title')) {
        $p0.removeChild($p0.firstChild);
    }
    while ($p0.firstChild && $p0.firstChild.nodeType === 1 && RTE.RteUtility.containsCssClass($p0.firstChild, 'ms-rtegenerate-skip')) {
        RTE.RteUtility.removeNodeAndKeepChildNodes($p0.firstChild);
    }
    if ($p0.lastChild && $p0.lastChild.nodeType === 1 && RTE.RteUtility.containsCssClass($p0.lastChild, 'ms-rte-embedcode-link')) {
        $p0.removeChild($p0.lastChild);
    }
    var $v_0 = RTE.RteUtility.containsCssClass($p0, 'ms-rte-embedwp');

    $p0.setAttribute('contentEditable', 'false');
    var $v_1 = document.createElement('DIV');

    Sys.UI.DomElement.addCssClass($v_1, 'ms-rte-embedholder');
    Sys.UI.DomElement.addCssClass($v_1, 'ms-rtegenerate-skip');
    RTE.RteUtility.$k($p0, $v_1);
    if (!$v_0) {
        var $v_4 = document.createElement('DIV');

        Sys.UI.DomElement.addCssClass($v_4, 'ms-rte-embedcode-title');
        Sys.UI.DomElement.addCssClass($v_4, 'ms-rtegenerate-allskip');
        $p0.appendChild($v_4);
        var $v_5 = document.createElement('A');

        Sys.UI.DomElement.addCssClass($v_5, 'ms-rte-embedcode-delete');
        $v_5.setAttribute('role', 'button');
        $v_5.title = SP.Res.deleteText;
        $v_5.innerHTML = String.format('<img src=\'/_layouts/images/DelItem.gif\' alt=\'{0}\' style=\'border-style: none\' />', RTE.RteUtility.htmlEncode(SP.Res.deleteText));
        $v_5.href = 'javascript:;';
        $addHandler($v_5, 'click', function($p1_0) {
            var $v_9 = RTE.EmbeddingCommands.$BV($p1_0.target);

            if ($v_9) {
                RTE.SnapshotManager.takeSnapshot();
                RTE.Cursor.s_range.moveBeforeNode($v_9);
                $v_9.parentNode.removeChild($v_9);
                RTE.SnapshotManager.setCurrentRegionDirty();
                RTE.Cursor.update();
                RTE.SnapshotManager.takeSnapshot();
                RTE.Canvas.set_$R(null);
            }
            SP.UI.UIUtility.cancelEvent($p1_0);
            return false;
        });
        $v_4.appendChild($v_5);
        var $v_6 = document.createElement('H2');

        Sys.UI.DomElement.addCssClass($v_6, 'ms-webpart-titleText');
        $v_4.appendChild($v_6);
        var $v_7 = document.createElement('SPAN');

        $v_6.appendChild($v_7);
        $v_7.appendChild(document.createTextNode(SP.Res.embeddingEditTitle));
        var $v_8 = document.createElement('DIV');

        Sys.UI.DomElement.addCssClass($v_8, 'ms-WPBorder');
        Sys.UI.DomElement.addCssClass($v_8, 'ms-rtegenerate-skip');
        $p0.appendChild($v_8);
        $p0 = $v_8;
    }
    $p0.appendChild($v_1);
    var $v_2 = document.createElement('DIV');

    Sys.UI.DomElement.addCssClass($v_2, 'ms-rtegenerate-allskip');
    Sys.UI.DomElement.addCssClass($v_2, 'ms-rte-embedcode-link');
    var $v_3 = $v_0 ? $p0.getAttribute('EditEnabled') : null;

    if ($v_0 && !RTE.SU.$2($v_3) && $v_3 === 'False') {
        Sys.UI.DomElement.addCssClass($v_2, 'ms-metadata');
        $v_2.appendChild(document.createTextNode(SP.Res.embeddingWebPartNoPermissions));
    }
    else {
        Sys.UI.DomElement.addCssClass($v_2, 'ms-rte-embedcode-linkedit');
        var $v_A = document.createElement('A');

        $v_A.setAttribute('role', 'button');
        $v_A.title = SP.Res.embeddingEditLinkText;
        $v_A.href = 'javascript:;';
        $addHandler($v_A, 'click', function($p1_0) {
            RTE.EmbeddingCommands.launchEmbedDialog($p1_0.target);
            SP.UI.UIUtility.cancelEvent($p1_0);
            return false;
        });
        $v_2.appendChild($v_A);
        var $v_B = document.createElement('SPAN');

        $v_B.className = 'ms-metadata';
        $v_B.appendChild(document.createTextNode(SP.Res.embeddingEditLinkText));
        $v_A.appendChild($v_B);
    }
    $p0.appendChild($v_2);
};
RTE.EmbeddingCommands.$Ks = function RTE_EmbeddingCommands$$Ks($p0, $p1, $p2) {
    var $v_0 = !!$p1 && RTE.Canvas.getCachedRestriction($p1, 'AllowScripts', false);

    if ($v_0) {
        $p2($p0, false);
        return;
    }
    var $v_1 = RTE.RteUtility.$4p($p0);

    RTE.EmbeddingCommands.$7d($v_1, $p1, function($p1_0) {
        var $v_2 = false;

        for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
            if (!$p1_0[$v_3]) {
                $v_2 = true;
                $p0 = RTE.RteUtility.$Ki($p0, $v_1[$v_3]);
            }
        }
        $p2($p0, $v_2);
    });
};
RTE.EmbeddingCommands.$7d = function RTE_EmbeddingCommands$$7d($p0, $p1, $p2) {
    var $v_0 = new Array(0);
    var $v_1 = new Array(0);
    var $v_2 = new Array($p0.length);

    if ($p1) {
        if (RTE.Canvas.getCachedRestriction($p1, 'AllowScripts', false)) {
            for (var $v_6 = 0; $v_6 < $p0.length; $v_6++) {
                $v_2[$v_2.length] = true;
            }
            $p2($v_2);
            return;
        }
    }
    for (var $v_7 = 0; $v_7 < $p0.length; $v_7++) {
        var $v_8 = RTE.EmbeddingCommands.$9f[$p0[$v_7]];

        if (typeof $v_8 === 'boolean') {
            $v_2[$v_7] = $v_8;
        }
        else {
            $v_0[$v_0.length] = $p0[$v_7];
            $v_1[$v_1.length] = $v_7;
        }
    }
    if (!$v_0.length) {
        $p2($v_2);
        return;
    }
    var $v_3 = new XMLHttpRequest();
    var $v_4 = SP.PageContextInfo.get_webServerRelativeUrl();

    if (!$v_4.startsWith('/')) {
        $v_4 = '/' + $v_4;
    }
    $v_3.open('POST', SP.Utilities.UrlBuilder.urlCombine(encodeURI($v_4), '_vti_bin/sites.asmx'), true);
    $v_3.onreadystatechange = function() {
        if ($v_3.readyState === 4) {
            if ($v_3.status === 200 && $v_3.responseXML) {
                var $v_A = RTE.EmbeddingCommands.$KF($v_3.responseXML);

                if ($v_A.length === $v_0.length) {
                    for (var $v_B = 0; $v_B < $v_0.length; $v_B++) {
                        RTE.EmbeddingCommands.$9f[$v_0[$v_B]] = $v_A[$v_B];
                        $v_2[$v_1[$v_B]] = $v_A[$v_B];
                    }
                }
            }
            else {
                for (var $v_C = 0; $v_C < $v_0.length; $v_C++) {
                    $v_2[$v_1[$v_C]] = false;
                }
            }
            $p2($v_2);
        }
    };
    $v_3.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
    $v_3.setRequestHeader('SOAPAction', 'http://schemas.microsoft.com/sharepoint/soap/IsScriptSafeUrl');
    var $v_5 = '<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n                    <soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"\r\n                        xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\r\n                        <soap:Body>\r\n                            <IsScriptSafeUrl xmlns=\"http://schemas.microsoft.com/sharepoint/soap/\">\r\n                                <urls>';

    for (var $v_9 = 0; $v_9 < $v_0.length; $v_9++) {
        $v_5 += '<string>' + RTE.RteUtility.htmlEncode($v_0[$v_9]) + '</string>';
    }
    $v_5 += '</urls>\r\n                            </IsScriptSafeUrl>\r\n                        </soap:Body>\r\n                    </soap:Envelope>';
    $v_3.send($v_5);
};
RTE.EmbeddingCommands.$KF = function RTE_EmbeddingCommands$$KF($p0) {
    var $v_0 = new Array(0);

    if ($p0) {
        var $v_1 = $p0.lastChild;

        while ($v_1 && $v_1.nodeType === 1 && $v_1.nodeName.indexOf('IsScriptSafeUrlResult') === -1) {
            $v_1 = $v_1.firstChild;
        }
        if ($v_1) {
            for (var $v_2 = 0; $v_2 < $v_1.childNodes.length; $v_2++) {
                var $v_3 = $v_1.childNodes[$v_2];

                if ($v_3.nodeType !== 1 || !$v_3.childNodes.length) {
                    return $v_0;
                }
                var $v_4 = $v_3.childNodes[0].nodeValue;

                $v_0[$v_0.length] = !RTE.SU.$2($v_4) && $v_4.indexOf('true') !== -1;
            }
        }
    }
    return $v_0;
};
RTE.EmbeddingCommands.$Hb = function RTE_EmbeddingCommands$$Hb($p0, $p1) {
    if (!$p1) {
        return;
    }
    var $v_0 = $p1.node;

    if (!$v_0 || $v_0.tagName !== 'DIV' || !$v_0.className || $v_0.className.indexOf('ms-rte-embedcode') === -1) {
        return;
    }
    RTE.EmbeddingCommands.moveEmbeddingBoxIntoEditMode($v_0);
};
RTE.EmbeddingMethods = function RTE_EmbeddingMethods() {
};
RTE.EmbeddingMethods.moveBoxToEdit = function RTE_EmbeddingMethods$moveBoxToEdit(boxId) {
    if (!RTE.SU.$2(boxId)) {
        var $v_0 = $get(boxId);

        if ($v_0) {
            RTE.EmbeddingCommands.moveEmbeddingBoxIntoEditMode($v_0);
        }
    }
};
RTE.EmbeddingMethods.canHandleInsertEmbeddingButton = function RTE_EmbeddingMethods$canHandleInsertEmbeddingButton() {
    return RTE.EmbeddingCommands.canHandleInsertEmbeddingButton();
};
RTE.EmbeddingMethods.insertEmbedding = function RTE_EmbeddingMethods$insertEmbedding(html, done) {
    html = RTE.RteUtility.$BW(html);
    RTE.RteEmbeddingDialog.$Ec(html, null, function($p1_0) {
        if (done) {
            done($p1_0.$5j_0);
        }
    });
};
RTE.EmbeddingDialog = function RTE_EmbeddingDialog() {
    this.$$d_$FK_0 = Function.createDelegate(this, this.$FK_0);
    this.$$d_$J7_0 = Function.createDelegate(this, this.$J7_0);
    this.$$d_$Is_0 = Function.createDelegate(this, this.$Is_0);
    this.$$d_$Ir_0 = Function.createDelegate(this, this.$Ir_0);
    this.$7a_0 = 2500;
};
RTE.EmbeddingDialog.$9z = function RTE_EmbeddingDialog$$9z($p0) {
    var $v_0 = RTE.RteUtility.$4p($p0);

    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        if ($v_0[$v_1].endsWith('://')) {
            return false;
        }
    }
    return true;
};
RTE.EmbeddingDialog.prototype = {
    dialogDiv: null,
    previewArea: null,
    messageArea: null,
    insertButton: null,
    $29_0: null,
    dialog: null,
    originalHtml: null,
    $Cq_0: null,
    $2x_0: 0,
    $Dg_0: 0,
    $Dh_0: 0,
    $9M_0: 0,
    $Di_0: 0,
    show: function RTE_EmbeddingDialog$show(currentHtml) {
        this.originalHtml = currentHtml;
        this.dialogDiv = document.createElement('DIV');
        this.dialogDiv.className = 'ms-core-form';
        var $v_0 = document.createElement('P');

        this.dialogDiv.appendChild($v_0);
        $v_0.appendChild(document.createTextNode(SP.Res.embeddingDialogDescription));
        this.$29_0 = document.createElement('TEXTAREA');
        this.$29_0.value = currentHtml;
        this.$29_0.id = 'embeddingText';
        this.$29_0.className = 'ms-rte-embeddialog-textarea ms-fullWidth';
        $addHandler(this.$29_0, 'keyup', this.$$d_$Ir_0);
        $addHandler(this.$29_0, 'beforepaste', this.$$d_$Is_0);
        $addHandler(this.$29_0, 'paste', this.$$d_$Is_0);
        this.dialogDiv.appendChild(this.$29_0);
        var $v_1 = document.createElement('DIV');

        $v_1.className = 'ms-core-form-bottomButtonBox';
        this.dialogDiv.appendChild($v_1);
        this.insertButton = document.createElement('INPUT');
        this.insertButton.type = 'button';
        this.insertButton.id = 'embeddingInsertBtn';
        this.insertButton.className = 'ms-ButtonHeightWidth';
        this.insertButton.value = SP.Res.embeddingDialogInsertButtonText;
        $addHandler(this.insertButton, 'click', this.$$d_$J7_0);
        $v_1.appendChild(this.insertButton);
        $v_1.appendChild(document.createTextNode(RTE.RteUtility.$7w));
        var $v_2 = document.createElement('INPUT');

        $v_2.type = 'button';
        $v_2.id = 'embeddingCancelBtn';
        this.insertButton.className = 'ms-ButtonHeightWidth';
        $v_2.value = SP.Res.cancelButtonText;
        $addHandler($v_2, 'click', this.$$d_$FK_0);
        $v_1.appendChild($v_2);
        this.messageArea = document.createElement('DIV');
        this.messageArea.className = 'ms-rte-embeddialog-message';
        this.dialogDiv.appendChild(this.messageArea);
        this.previewArea = document.createElement('DIV');
        this.previewArea.className = 'ms-rte-embeddialog-preview';
        this.dialogDiv.appendChild(this.previewArea);
        var $v_3 = document.createElement('DIV');

        $v_3.appendChild(this.dialogDiv);
        var $v_4 = new SP.UI.DialogOptions();

        $v_4.html = $v_3;
        $v_4.title = SP.Res.embeddingDialogTitle;
        $v_4.autoSize = true;
        $v_4.allowMaximize = true;
        this.dialog = SP.UI.ModalDialog.showModalDialog($v_4);
        this.$FI_0();
        this.$29_0.focus();
        this.$9w_0();
    },
    close: function RTE_EmbeddingDialog$close() {
        if (this.dialog) {
            if (this.$2x_0) {
                window.clearTimeout(this.$2x_0);
                this.$2x_0 = 0;
            }
            RTE.RteUtility.removeChildNodes(this.previewArea);
            RTE.RteUtility.removeChildNodes(this.dialogDiv);
            this.dialog.close(1);
            this.previewArea.innerHTML = '';
            this.previewArea = null;
            this.dialogDiv = null;
            this.dialog = null;
            this.messageArea = null;
        }
    },
    $Ir_0: function RTE_EmbeddingDialog$$Ir_0($p0) {
        this.$CE_0();
    },
    $Is_0: function RTE_EmbeddingDialog$$Is_0($p0) {
        this.$7a_0 = 500;
        this.$CE_0();
    },
    $CE_0: function RTE_EmbeddingDialog$$CE_0() {
        if (this.$2x_0) {
            window.clearTimeout(this.$2x_0);
            this.$2x_0 = 0;
        }
        var $$t_0 = this;

        this.$2x_0 = window.setTimeout(function() {
            $$t_0.$7a_0 = 2500;
            $$t_0.$2x_0 = 0;
            $$t_0.$9w_0();
        }, this.$7a_0);
    },
    $J7_0: function RTE_EmbeddingDialog$$J7_0($p0) {
        this.$9w_0();
        if (!this.insertButton.disabled) {
            var $v_0 = this.insertClick();

            if ($v_0) {
                this.dialog.close(1);
            }
        }
    },
    $FK_0: function RTE_EmbeddingDialog$$FK_0($p0) {
        this.dialog.close(1);
        RTE.Cursor.update();
    },
    $9w_0: function RTE_EmbeddingDialog$$9w_0() {
        var $v_0 = this.get_htmlContent();

        if (this.dialog && this.$Cq_0 !== $v_0) {
            this.$Cq_0 = $v_0;
            this.previewArea.innerHTML = '';
            this.messageArea.innerHTML = '';
            if (RTE.SU.$2($v_0)) {
                this.insertButton.disabled = true;
            }
            else {
                if (RTE.EmbeddingDialog.$9z($v_0)) {
                    this.previewArea.innerHTML = this.$By_0($v_0);
                    this.htmlCodeChanged();
                }
                else {
                    this.setInsertEnabled(false);
                    this.messageArea.appendChild(document.createTextNode(SP.Res.embeddingDialogWebPartNotAllowed));
                }
            }
            this.$F8_0();
        }
    },
    $F8_0: function RTE_EmbeddingDialog$$F8_0() {
        this.dialogDiv.style.width = '10px';
        this.previewArea.style.overflow = 'scroll';
        this.previewArea.style.maxWidth = '';
        this.previewArea.style.maxHeight = '';
        this.previewArea.style.height = 'auto';
        this.previewArea.style.width = 'auto';
        var $v_0 = this.get_htmlContent();
        var $v_1 = !!$v_0 && $v_0.length > 0;

        this.previewArea.style.display = !$v_1 ? 'none' : '';
        this.previewArea.style.height = this.previewArea.scrollHeight + 5 + 'px';
        this.previewArea.style.width = this.previewArea.scrollWidth + 20 + 'px';
        if (this.$9M_0) {
            var $v_2 = RTE.RteUtility.$6N(window.top);
            var $v_3 = RTE.RteUtility.$6O(window.top);
            var $v_4 = this.messageArea.firstChild ? this.messageArea.scrollHeight : 0;

            this.previewArea.style.maxWidth = Math.max(0, this.$Dh_0 - this.$Di_0 + $v_3) + 'px';
            this.previewArea.style.maxHeight = Math.max(0, this.$Dg_0 - $v_4 - this.$9M_0 + $v_2 - 10) + 'px';
        }
        this.dialogDiv.style.width = '';
        this.previewArea.style.overflow = 'auto';
        if (!this.dialog.get_isMaximized()) {
            this.dialogDiv.parentNode.style.overflow = 'scroll';
            this.dialog.autoSize();
            this.dialogDiv.parentNode.style.overflow = '';
        }
    },
    $By_0: function RTE_EmbeddingDialog$$By_0($p0) {
        return $p0;
    },
    setInsertEnabled: function RTE_EmbeddingDialog$setInsertEnabled(enable) {
        var $v_0 = this.get_htmlContent();

        if (this.insertButton.disabled === enable) {
            this.insertButton.disabled = !enable;
        }
        this.previewArea.innerHTML = enable ? this.$By_0($v_0) : '';
    },
    get_htmlContent: function RTE_EmbeddingDialog$get_htmlContent() {
        var $v_0 = this.$29_0.value || '';

        return RTE.RteUtility.$BW($v_0);
    },
    htmlCodeChanged: function RTE_EmbeddingDialog$htmlCodeChanged() {
    },
    $FI_0: function RTE_EmbeddingDialog$$FI_0() {
        var $v_0 = this.dialog.get_dialogElement();

        if ($v_0) {
            var $v_1 = $v_0.offsetHeight;
            var $v_2 = $v_0.offsetWidth;
            var $v_3 = this.previewArea.offsetWidth;
            var $v_4 = RTE.RteUtility.$6N(window.top);
            var $v_5 = RTE.RteUtility.$6O(window.top);

            this.$Dg_0 = $v_4 - $v_1 - 20;
            this.$Dh_0 = $v_5 - $v_2 + $v_3 - 10;
            this.$Di_0 = $v_5;
            this.$9M_0 = $v_4;
        }
    }
};
RTE.RteEmbeddingDialog = function RTE_RteEmbeddingDialog(container) {
    RTE.RteEmbeddingDialog.initializeBase(this);
    this.$2z_1 = container;
};
RTE.RteEmbeddingDialog.$9z = function RTE_RteEmbeddingDialog$$9z($p0, $p1, $p2) {
    var $v_0 = !!$p1 && RTE.Canvas.getCachedRestriction($p1, 'AllowScripts', false);

    if ($v_0) {
        $p2(1);
        return;
    }
    var $v_1 = new RegExp('<\\s*script', 'ig');

    if ($v_1.test($p0)) {
        $p2(0);
        return;
    }
    RTE.Cursor.$9L(false);
    var $v_2 = RTE.Cursor.$X;
    var $v_3 = $v_2.contentWindow.document;
    var $v_4 = $v_3.createElement('DIV');

    $v_4.innerHTML = $p0;
    $v_3.body.appendChild($v_4);
    var $v_5 = ($v_4.getElementsByTagName('*')).length;

    RTE.SafeHtml.$Kn($v_4);
    var $v_6 = ($v_4.getElementsByTagName('*')).length;

    if ($v_5 !== $v_6) {
        $p2(0);
        return;
    }
    var $v_7 = RTE.RteUtility.$4p($p0);

    if (!$v_7 || !$v_7.length) {
        $p2(1);
        return;
    }
    RTE.RteEmbeddingDialog.$7d($v_7, $p1, $p2);
};
RTE.RteEmbeddingDialog.$7d = function RTE_RteEmbeddingDialog$$7d($p0, $p1, $p2) {
    RTE.EmbeddingCommands.$7d($p0, $p1, function($p1_0) {
        var $v_0 = true;

        for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            $v_0 = $v_0 && $p1_0[$v_1];
        }
        $p2($v_0 ? 1 : 0);
    });
};
RTE.RteEmbeddingDialog.$Ec = function RTE_RteEmbeddingDialog$$Ec($p0, $p1, $p2) {
    RTE.RteEmbeddingDialog.$9z($p0, RTE.Canvas.getEditableRegion($p1) || (RTE.Cursor.get_range()).getEditableRegion(), function($p1_0) {
        var $v_0;

        switch ($p1_0) {
        case 1:
            $v_0 = RTE.RteEmbeddingDialog.$J5($p0, $p1);
            break;
        default:
            $v_0 = RTE.RteEmbeddingDialog.$J6($p0, $p1);
            break;
        }
        $p2($v_0);
    });
};
RTE.RteEmbeddingDialog.$J5 = function RTE_RteEmbeddingDialog$$J5($p0, $p1) {
    var $v_0 = new RTE.EmbeddingInsertArgs();

    $v_0.$7b_0 = 1;
    var $v_1 = RTE.Cursor.get_range();
    var $v_2 = $v_1.parentElement();

    if (!$v_2 && !$p1) {
        return $v_0;
    }
    RTE.SnapshotManager.takeSnapshot();
    var $v_3 = RTE.EmbeddingCommands.$B2();

    $v_3.innerHTML = $p0;
    RTE.EmbeddingCommands.moveEmbeddingBoxIntoEditMode($v_3);
    if (!$p1) {
        $v_1.deleteContent();
        $v_1.insertNode($v_3);
        RTE.SnapshotManager.setCurrentRegionDirty();
    }
    else {
        $p1.innerHTML = '';
        $p1.parentNode.replaceChild($v_3, $p1);
        $v_1.moveAfterNode($v_3);
    }
    RTE.Cursor.update();
    RTE.SnapshotManager.takeSnapshot();
    $v_0.$5j_0 = true;
    return $v_0;
};
RTE.RteEmbeddingDialog.$J6 = function RTE_RteEmbeddingDialog$$J6($p0, $p1) {
    var $v_0 = new RTE.EmbeddingInsertArgs();

    $v_0.$7b_0 = 0;
    if (!RTE.EmbeddingCommands.canUserEmbedWebPart()) {
        $v_0.$BO_0 = SP.Res.embeddingDialogWebPartNotAllowed;
        return $v_0;
    }
    var $v_1 = RTE.Cursor.get_range();
    var $v_2 = $v_1.parentElement();

    if (!$v_2) {
        return $v_0;
    }
    if ($p1) {
        $v_1.moveToNode($p1);
        RTE.RteUtility.$J($p1);
    }
    $v_1.deleteContent();
    var $v_3 = RTE.EmbeddingCommands.getEmbeddingWebPartId();
    var $v_4 = SP.Ribbon.WebPartComponent.getWebPartAdder();
    var $v_5 = $v_4._createWebpartPlaceholderInRte(RTE.Cursor.get_range());
    var $v_6 = document.createElement('INPUT');

    $v_6.type = 'hidden';
    $v_6.name = $v_5 + 'scriptcontent';
    $v_6.value = $p0;
    var $v_7 = RTE.RteUtility.$G(RTE.Canvas.currentEditableRegion(), 'FORM');

    if ($v_7) {
        $v_7.appendChild($v_6);
    }
    $v_4.addItemToPageByItemIdAndZoneId($v_3, 'wpz', 0, $v_5);
    $v_0.$5j_0 = true;
    return $v_0;
};
RTE.RteEmbeddingDialog.prototype = {
    $2z_1: null,
    insertClick: function RTE_RteEmbeddingDialog$insertClick() {
        var $v_0 = this.get_htmlContent();

        this.$BE_1();
        var $$t_2 = this;

        RTE.RteEmbeddingDialog.$Ec($v_0, this.$2z_1, function($p1_0) {
            $$t_2.$BN_1();
            if ($p1_0.$7b_0 === 1) {
                RTE.SnapshotManager.setCurrentRegionDirtyIf($$t_2.originalHtml !== $v_0);
            }
            if ($p1_0.$5j_0) {
                $$t_2.close();
            }
        });
        return false;
    },
    htmlCodeChanged: function RTE_RteEmbeddingDialog$htmlCodeChanged() {
        var $v_0 = this.get_htmlContent();

        this.$BE_1();
        var $$t_2 = this;

        RTE.RteEmbeddingDialog.$9z($v_0, RTE.Canvas.getEditableRegion(this.$2z_1) || (RTE.Cursor.get_range()).getEditableRegion(), function($p1_0) {
            $$t_2.$BN_1();
            switch ($p1_0) {
            case 1:
                $$t_2.$LG_1();
                break;
            default:
                $$t_2.$LH_1();
                break;
            }
        });
    },
    $LH_1: function RTE_RteEmbeddingDialog$$LH_1() {
        var $v_0 = RTE.EmbeddingCommands.canUserEmbedWebPart();
        var $v_1 = $v_0 ? true : RTE.Canvas.canHandleInsertWebPart();

        this.setInsertEnabled($v_0);
        var $v_2 = $v_0 ? SP.Res.embeddingDialogWebPartInsert : $v_1 ? SP.Res.embeddingDialogCannotInsert : SP.Res.embeddingDialogWebPartNotAllowed;

        this.messageArea.appendChild(document.createTextNode($v_2));
    },
    $LG_1: function RTE_RteEmbeddingDialog$$LG_1() {
        this.setInsertEnabled(RTE.EmbeddingCommands.canUserEmbedIframes());
    },
    $BE_1: function RTE_RteEmbeddingDialog$$BE_1() {
        this.insertButton.disabled = true;
        this.insertButton.value = SP.Res.embeddingDialogWaitText;
    },
    $BN_1: function RTE_RteEmbeddingDialog$$BN_1() {
        this.insertButton.value = SP.Res.embeddingDialogInsertButtonText;
    }
};
RTE.WebPartEmbeddingDialog = function RTE_WebPartEmbeddingDialog(container, inputNode) {
    RTE.WebPartEmbeddingDialog.initializeBase(this);
    this.$2z_1 = container;
    this.$A6_1 = inputNode;
};
RTE.WebPartEmbeddingDialog.prototype = {
    $2z_1: null,
    $A6_1: null,
    htmlCodeChanged: function RTE_WebPartEmbeddingDialog$htmlCodeChanged() {
        this.setInsertEnabled(true);
    },
    insertClick: function RTE_WebPartEmbeddingDialog$insertClick() {
        var $v_0 = this.get_htmlContent();

        this.$2z_1.innerHTML = '';
        this.$2z_1.innerHTML = $v_0;
        RTE.RteUtility.setInputValue(this.$A6_1, $v_0);
        RTE.EmbeddingCommands.moveEmbeddingBoxIntoEditMode(this.$2z_1);
        return true;
    }
};
RTE.ExtractChildNodesProcessor = function RTE_ExtractChildNodesProcessor($p0, $p1, $p2, $p3, $p4) {
    this.$5D_0 = $p0;
    this.$6s_0 = $p1;
    this.$1i_0 = $p2;
    this.$2i_0 = $p3;
    this.$D0_0 = $p4;
};
RTE.ExtractChildNodesProcessor.prototype = {
    $6l_0: false,
    $59_0: false,
    $6k_0: false,
    $5D_0: null,
    $6s_0: null,
    $1i_0: null,
    $2i_0: null,
    $2L_0: null,
    $Je_0: null,
    $D0_0: false,
    $6q_0: null,
    process: function RTE_ExtractChildNodesProcessor$process() {
        this.$6l_0 = false;
        this.$59_0 = false;
        this.$6k_0 = false;
        this.$2L_0 = [];
        this.$Je_0 = [];
        while (this.$1i_0 && this.$1i_0.parentNode.firstChild === this.$1i_0 && this.$1i_0.parentNode !== this.$5D_0) {
            this.$1i_0 = this.$1i_0.parentNode;
        }
        this.$6q_0 = [];
        var $v_0 = this.$6s_0;

        while ($v_0 !== this.$5D_0) {
            this.$6q_0.push($v_0);
            $v_0 = $v_0.parentNode;
        }
        this.$Ah_0(this.$5D_0);
        for (var $v_1 = 0; $v_1 < this.$2L_0.length; $v_1++) {
            var $v_2;

            if (this.$2L_0[$v_1] === 'UP') {
                $v_1++;
                $v_2 = this.$2L_0[$v_1];
                this.$2i_0.appendChild($v_2);
                this.$2i_0 = $v_2;
                continue;
            }
            $v_2 = this.$2L_0[$v_1];
            if ($v_2) {
                this.$2i_0.appendChild($v_2);
            }
            else {
                this.$2i_0 = this.$2i_0.parentNode;
            }
        }
    },
    $Ai_0: function RTE_ExtractChildNodesProcessor$$Ai_0($p0) {
        if (this.$1i_0 && $p0 === this.$1i_0) {
            this.$59_0 = true;
            return null;
        }
        var $v_0 = $p0.childNodes.length;

        for (var $v_2 = 0; $v_2 < $v_0; $v_2++) {
            var $v_3 = $p0.childNodes[$v_2];
            var $v_4 = this.$Ai_0($v_3);

            if (this.$59_0) {
                var $v_5 = [];

                if (!$v_4 && $v_2 === $v_0 - 1) {
                    Array.add($v_5, $p0);
                }
                else {
                    Array.add($v_5, 'UP');
                    Array.add($v_5, $p0.cloneNode(false));
                    for (var $v_6 = 0; $v_6 < $v_2; $v_6++) {
                        Array.add($v_5, $p0.childNodes[$v_6]);
                    }
                }
                return $v_4 ? $v_5.concat($v_4) : $v_5;
            }
        }
        var $v_1 = [];

        Array.add($v_1, $p0);
        return $v_1;
    },
    $Ah_0: function RTE_ExtractChildNodesProcessor$$Ah_0($p0) {
        if (this.$6l_0) {
            if (!this.$6k_0) {
                var $v_1 = [];
                var $v_2 = $p0.parentNode;

                while ($v_2 !== this.$5D_0) {
                    $v_1.push($v_2);
                    $v_2 = $v_2.parentNode;
                }
                while ($v_1.length > 0) {
                    $v_2 = $v_1.pop();
                    var $v_3;

                    if ($v_2.tagName === 'A') {
                        $v_3 = $v_2.ownerDocument.createElement('SPAN');
                    }
                    else {
                        $v_3 = $v_2.cloneNode(false);
                    }
                    this.$2i_0.appendChild($v_3);
                    this.$2i_0 = $v_3;
                }
                this.$6k_0 = true;
            }
            var $v_0 = this.$Ai_0($p0);

            this.$2L_0 = this.$2L_0.concat($v_0);
        }
        else {
            var $v_4 = this.$6q_0.length > 0 ? this.$6q_0.pop() : null;

            for (var $v_5 = 0; $v_5 < $p0.childNodes.length; $v_5++) {
                var $v_6 = $p0.childNodes[$v_5];

                if ($v_6 === this.$6s_0) {
                    this.$6l_0 = true;
                    if (this.$D0_0) {
                        Array.add(this.$2L_0, this.$6s_0);
                    }
                }
                else if (this.$1i_0 && $v_6 === this.$1i_0) {
                    this.$59_0 = true;
                    return;
                }
                else {
                    if (this.$6l_0 || !$v_4 || $v_4 === $v_6) {
                        this.$Ah_0($v_6);
                        if (this.$59_0) {
                            return;
                        }
                    }
                }
            }
            if (this.$6k_0) {
                Array.add(this.$2L_0, null);
            }
        }
    }
};
RTE.FontCommands = function RTE_FontCommands() {
};
RTE.FontCommands.$FA = function RTE_FontCommands$$FA() {
    RTE.FontCommands.$3g(0, ['STRONG', 'B'], null, 'fontWeight', 'bold', 'normal');
};
RTE.FontCommands.$KS = function RTE_FontCommands$$KS() {
    return RTE.FontCommands.$4A(0, ['STRONG', 'B'], null, 'fontWeight', 'bold', 'normal');
};
RTE.FontCommands.$JW = function RTE_FontCommands$$JW() {
    RTE.FontCommands.$3g(0, ['EM', 'I'], null, 'fontStyle', 'italic', 'normal');
};
RTE.FontCommands.$KT = function RTE_FontCommands$$KT() {
    return RTE.FontCommands.$4A(0, ['EM', 'I'], null, 'fontStyle', 'italic', 'normal');
};
RTE.FontCommands.$LT = function RTE_FontCommands$$LT() {
    RTE.FontCommands.$3g(2, null, null, 'textDecoration', 'line-through', 'none');
    RTE.Canvas.$P();
};
RTE.FontCommands.$KU = function RTE_FontCommands$$KU() {
    return RTE.FontCommands.$4A(2, null, null, 'textDecoration', 'line-through', 'none');
};
RTE.FontCommands.$LV = function RTE_FontCommands$$LV() {
    RTE.FontCommands.$15(0, ['SUP'], null, null);
    RTE.FontCommands.$3g(0, ['SUB'], null, null, null, null);
    RTE.Canvas.$P();
};
RTE.FontCommands.$KV = function RTE_FontCommands$$KV() {
    return RTE.FontCommands.$4A(0, ['SUB'], null, null, null, null);
};
RTE.FontCommands.$LW = function RTE_FontCommands$$LW() {
    RTE.FontCommands.$15(0, ['SUB'], null, null);
    RTE.FontCommands.$3g(0, ['SUP'], null, null, null, null);
    RTE.Canvas.$P();
};
RTE.FontCommands.$KW = function RTE_FontCommands$$KW() {
    return RTE.FontCommands.$4A(0, ['SUP'], null, null, null, null);
};
RTE.FontCommands.$La = function RTE_FontCommands$$La() {
    RTE.FontCommands.$3g(2, null, null, 'textDecoration', 'underline', 'none');
    RTE.Canvas.$P();
};
RTE.FontCommands.$KX = function RTE_FontCommands$$KX() {
    return RTE.FontCommands.$4A(2, null, null, 'textDecoration', 'underline', 'none');
};
RTE.FontCommands.$LE = function RTE_FontCommands$$LE($p0) {
    RTE.FontCommands.$AO(3, null, null, 'xml:lang', $p0, null);
    RTE.FontCommands.$AO(3, null, null, 'lang', $p0, null);
};
RTE.FontCommands.$IJ = function RTE_FontCommands$$IJ() {
    var $v_0 = RTE.Cursor.get_range();

    if (!$v_0.isValid()) {
        return '';
    }
    var $v_1 = '';
    var $v_2 = $v_0.getCurrentStateNode();
    var $v_3 = $v_2;

    while ($v_3 && !RTE.Canvas.$i($v_3)) {
        if ($v_3.getAttribute) {
            var $v_4 = $v_3.getAttribute('lang');

            if ($v_4) {
                $v_1 = $v_4;
                break;
            }
        }
        $v_3 = $v_3.parentNode;
    }
    if (RTE.FontCommands.$8y) {
        RTE.FontCommands.$8y = false;
        return $v_1;
    }
    if ($v_1) {
        var $v_5 = RTE.Canvas.getCurrentStyleSheetPrefix();
        var $v_6 = RTE.StyleRuleUtility.getStyleRules($v_5 + RTE.RichTextEditor.$6f + '-' + $v_1, $v_5, false);

        if ($v_6.length > 0) {
            return RTE.StyleRuleUtility.$2G($v_6[0], null, null);
        }
    }
    return $v_1;
};
RTE.FontCommands.get_$6Q = function RTE_FontCommands$get_$6Q() {
    var $v_0 = RTE.Canvas.getCurrentStyleSheetPrefix();

    return [$v_0 + 'Style' + '-'];
};
RTE.FontCommands.$5Z = function RTE_FontCommands$$5Z($p0, $p1) {
    var $v_0 = 2;

    if ($p1) {
        $v_0 = 1;
    }
    RTE.FontCommands.$3e($v_0, null, ['ForeColor', 'ThemeForeColor'], 'color', $p0, '', null, RTE.FontCommands.get_$6Q(), 1);
};
RTE.FontCommands.$L6 = function RTE_FontCommands$$L6($p0, $p1) {
    var $v_0 = 2;

    if ($p1) {
        $v_0 = 1;
    }
    RTE.FontCommands.$3e($v_0, null, ['BackColor', 'ThemeBackColor'], 'backgroundColor', $p0, '', null, RTE.FontCommands.get_$6Q(), 1);
};
RTE.FontCommands.$LF = function RTE_FontCommands$$LF($p0, $p1) {
    if (!RTE.SU.$2($p0)) {
        var $v_0 = RTE.Canvas.getCurrentStyleSheetPrefix();

        if ($p1 || RTE.SU.$1R($p1)) {
            var $v_1 = $v_0 + 'Style' + '-' + $p0;

            RTE.FontCommands.$3e(1, null, [$v_0 + 'Style' + '-', $v_0 + 'BackColor' + '-', $v_0 + 'ForeColor' + '-', $v_0 + 'ThemeBackColor' + '-', $v_0 + 'ThemeForeColor' + '-'], null, $v_1, '', ['color', 'backgroundColor'], null, 1);
        }
        else {
            RTE.FontCommands.$15(1, null, [$v_0 + 'Style' + '-'], null);
        }
    }
};
RTE.FontCommands.$Ie = function RTE_FontCommands$$Ie() {
    var $v_0 = RTE.Cursor.get_range();
    var $v_1 = RTE.Canvas.currentEditableRegion();
    var $v_2 = $v_0.parentElement();

    if (!$v_2 || $v_2.nodeType !== 1) {
        return null;
    }
    var $v_3 = $v_2.tagName.toUpperCase();

    while ($v_2 && $v_2.nodeType === 1 && (RTE.RteUtility.getCssClassName($v_2)).indexOf('Element') === -1 && !RTE.HtmlTagName.$7r[$v_3] && $v_2.parentNode !== $v_1) {
        $v_2 = $v_2.parentNode;
    }
    return $v_2 && $v_2.nodeType === 1 ? $v_2 : null;
};
RTE.FontCommands.$Ih = function RTE_FontCommands$$Ih() {
    return RTE.FontCommands.$IO('Style');
};
RTE.FontCommands.$IO = function RTE_FontCommands$$IO($p0) {
    var $v_0 = RTE.Cursor.get_range();
    var $v_1 = $v_0.parentElement();

    while ($v_1 && !$v_1.className && $v_1.className.indexOf($p0) === -1 && $v_1.tagName.toUpperCase() === 'SPAN') {
        $v_1 = $v_1.parentNode;
    }
    return $v_1;
};
RTE.FontCommands.$B3 = function RTE_FontCommands$$B3($p0, $p1) {
    var $v_0 = RTE.Cursor.get_range();
    var $v_1 = $v_0.getEditableRegion();
    var $v_2 = '';

    if (!RTE.Canvas.getCachedRestriction($v_1, 'UseInlineStyle', false)) {
        $v_2 = $p1;
    }
    var $v_3 = $v_0.$4_0;
    var $v_4 = $v_0.$3_0;
    var $v_5 = RTE.RteUtility.$m($v_4, false);

    if ($v_5 && $v_5.nodeType === 1 && $v_5.tagName === 'BR') {
        $v_5.parentNode.insertBefore($v_4, $v_5);
    }
    var $v_6 = new RTE.DOMTreePosition($v_3, 0);

    $v_6.moveToNextElement();
    if ($v_6.$1_0 !== $v_4) {
        while ($v_6.$1_0 !== $v_4) {
            var $v_7 = $v_6.$1_0;

            if (!RTE.RteUtility.$N($v_7) && !RTE.RteUtility.$54($v_7.parentNode.tagName.toUpperCase(), RTE.FontCommands.$DN) && RTE.Canvas.isEditable($v_7) && !SP.UI.UIUtility.isSvgNode($v_7) && !RTE.RteUtility.$40($v_7) && !RTE.RteUtility.$3w($v_7, false)) {
                var $v_8 = RTE.RteUtility.$Bv($v_7, $v_4, true);
                var $v_9 = RTE.FontCommands.$AT($v_8, $p0, $v_2);

                if (RTE.RteUtility.$b($v_4, $v_9, $v_1) || $v_9.tagName === 'HR') {
                    break;
                }
                $v_6.setCurrentNode($v_9);
                $v_6.setLocationAtEnd();
            }
            $v_6.moveToNextElement();
        }
    }
    else {
        var $v_A = RTE.RteUtility.$6K($v_0.$4_0, true);

        RTE.FontCommands.$AT($v_A, $p0, $v_2);
    }
    $v_0.resetCacheRange();
    RTE.Cursor.update();
};
RTE.FontCommands.$AT = function RTE_FontCommands$$AT($p0, $p1, $p2) {
    var $v_0 = document.createElement($p1);

    if (!RTE.SU.$2($p2)) {
        $v_0.className = $p2;
    }
    var $v_1 = $p0.tagName.toUpperCase();

    RTE.SnapshotManager.setCurrentRegionDirtyIf($p1 !== $p0.tagName || !RTE.SU.$2($p2) && (RTE.SU.$2($p0.className) || $p0.className.indexOf($p2) === -1));
    if ($v_1 === 'TR' || $v_1 === 'THEAD' || $v_1 === 'TBODY' || $v_1 === 'TFOOT') {
        $p0 = RTE.RteUtility.$G($p0, 'TABLE');
    }
    var $v_2 = RTE.Cursor.get_range();

    if ($p1.toUpperCase() === 'HR') {
        $v_2.deleteContent();
        $v_2.insertNode($v_0);
        $v_2.moveAfterNode($v_0);
    }
    else {
        var $v_3 = null;

        if ($v_1 === 'H1' || $v_1 === 'H2' || $v_1 === 'H3' || $v_1 === 'H4' || $v_1 === 'H5' || $v_1 === 'H6' || $v_1 === 'P') {
            $v_3 = document.createElement('DIV');
            $p0.parentNode.insertBefore($v_3, $p0);
            $v_3.appendChild($p0);
        }
        var $v_4 = new RTE.CanvasRange('block');

        $v_4.moveToChildren($p0);
        var $v_5 = RTE.RemoveStyleOnSelectionProcessor.$23;

        $v_5.setSettings($v_4, false);
        $v_5.process();
        $v_4.dispose();
        if ($v_3) {
            if ($v_3.firstChild && $v_3.firstChild === $v_3.lastChild && RTE.RteUtility.$N($v_3.firstChild) && RTE.SU.$2($v_3.className) && RTE.SU.$2($v_3.style.cssText)) {
                $p0 = $v_3.childNodes[0];
                RTE.RteUtility.$4N($v_3);
                $v_3.parentNode.removeChild($v_3);
            }
            else {
                $p0 = $v_3;
            }
        }
        if (RTE.Canvas.$i($p0)) {
            RTE.RteUtility.$k($p0, $v_0);
            $p0.appendChild($v_0);
        }
        else if ($p0.tagName === 'LI' || $p0.tagName === 'TD' || $p0.tagName === 'TH') {
            RTE.RteUtility.$k($p0, $v_0);
            $p0.appendChild($v_0);
        }
        else if ($p0.tagName === 'UL' || $p0.tagName === 'OL' || $p0.tagName === 'MENU' || $p0.tagName === 'DIR' || $p0.tagName === 'TABLE') {
            $p0.parentNode.insertBefore($v_0, $p0);
            $v_0.appendChild($p0);
        }
        else {
            $p0.parentNode.insertBefore($v_0, $p0);
            RTE.RteUtility.$k($p0, $v_0);
            RTE.RteUtility.$J($p0);
        }
    }
    return $v_0;
};
RTE.FontCommands.$9n = function RTE_FontCommands$$9n($p0, $p1) {
    var $v_0 = 2;

    if ($p1) {
        $v_0 = 1;
    }
    RTE.FontCommands.$3e($v_0, null, ['FontSize'], 'fontSize', $p0, '', null, RTE.FontCommands.get_$6Q(), 1);
};
RTE.FontCommands.$LA = function RTE_FontCommands$$LA($p0, $p1) {
    var $v_0 = 2;

    if ($p1) {
        $v_0 = 1;
    }
    RTE.FontCommands.$3e($v_0, null, ['FontFace', 'ThemeFontFace'], 'fontFamily', $p0, '', null, RTE.FontCommands.get_$6Q(), 1);
};
RTE.FontCommands.$15 = function RTE_FontCommands$$15($p0, $p1, $p2, $p3) {
    var $v_0 = RTE.Cursor.get_range();

    if (!$v_0.get_isInEditableRegion()) {
        return;
    }
    var $v_1 = RTE.ApplyOnSelectionProcessor.$23;

    $v_1.setSettings($v_0, $p0, $p1, $p2, $p3, null, null);
    $v_1.remove();
    RTE.Cursor.update();
};
RTE.FontCommands.$3g = function RTE_FontCommands$$3g($p0, $p1, $p2, $p3, $p4, $p5) {
    var $v_0 = RTE.Cursor.get_range();

    if (!$v_0.get_isInEditableRegion()) {
        return;
    }
    var $v_1 = RTE.ApplyOnSelectionProcessor.$23;

    $v_1.setSettings($v_0, $p0, $p1, $p2, $p3, $p4, $p5);
    $v_1.process();
    RTE.Cursor.update();
};
RTE.FontCommands.$AO = function RTE_FontCommands$$AO($p0, $p1, $p2, $p3, $p4, $p5) {
    RTE.FontCommands.$3e($p0, $p1, $p2, $p3, $p4, $p5, null, null, 0);
};
RTE.FontCommands.$3e = function RTE_FontCommands$$3e($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
    var $v_0 = RTE.Cursor.get_range();

    if (!$v_0.get_isInEditableRegion()) {
        return;
    }
    var $v_1 = RTE.ApplyOnSelectionProcessor.$23;

    $v_1.setSettings($v_0, $p0, $p1, $p2, $p3, $p4, $p5, $p6, $p8, $p7);
    $v_1.apply();
    RTE.Cursor.update();
};
RTE.FontCommands.$4A = function RTE_FontCommands$$4A($p0, $p1, $p2, $p3, $p4, $p5) {
    var $v_0 = new RTE.CommandState();
    var $v_1 = RTE.Cursor.get_range();

    if (!$v_1.isValid() || !$v_1.get_isInEditableRegion()) {
        return $v_0;
    }
    var $v_2 = RTE.ApplyOnSelectionProcessor.$23;

    $v_2.setSettings($v_1, $p0, $p1, $p2, $p3, $p4, $p5);
    return $v_2.queryApply();
};
RTE.FontCommands.$E0 = function RTE_FontCommands$$E0() {
    var $v_0 = RTE.Cursor.get_range();

    if (!$v_0.get_isInEditableRegion()) {
        return;
    }
    if (!$v_0.isVisible()) {
        return;
    }
    var $v_1 = RTE.RemoveStyleOnSelectionProcessor.$23;

    $v_1.setSettings($v_0, true);
    $v_1.process();
    (RTE.Cursor.get_range()).resetCacheRange();
    RTE.Cursor.update();
    RTE.Canvas.$P();
};
RTE.FontCommands.$IG = function RTE_FontCommands$$IG() {
    var $v_0 = RTE.Canvas.getCurrentStyleSheetPrefix();
    var $v_1 = RTE.StyleRuleUtility.getStyleRules($v_0 + 'FontSize', $v_0, false);
    var $v_2 = [];
    var $v_3 = [];
    var $v_4 = [];
    var $v_5 = [];
    var $v_6 = [];
    var $v_7 = [];
    var $v_8 = [];

    for (var $v_A = 0; $v_A < $v_1.length; $v_A++) {
        var $v_B = $v_1[$v_A];
        var $v_C = RTE.StyleRuleUtility.$2c($v_B.rule.selectorText);

        if (RTE.SU.$2($v_C)) {
            continue;
        }
        var $v_D = $v_B.rule.style.fontSize;

        if (RTE.SU.$2($v_D)) {
            continue;
        }
        var $v_E = 1;
        var $v_F = 0;
        var $v_G = null;

        if (($v_D.toLowerCase()).endsWith('pt')) {
            $v_E = 0;
            $v_G = $v_3;
        }
        else if (($v_D.toLowerCase()).endsWith('em')) {
            $v_E = 2;
            $v_G = $v_4;
        }
        else if (($v_D.toLowerCase()).endsWith('px')) {
            $v_E = 1;
            $v_G = $v_5;
        }
        else if (($v_D.toLowerCase()).endsWith('in')) {
            $v_E = 4;
            $v_G = $v_6;
        }
        else if (($v_D.toLowerCase()).endsWith('cm')) {
            $v_E = 3;
            $v_G = $v_7;
        }
        else if (($v_D.toLowerCase()).endsWith('mm')) {
            $v_E = 5;
            $v_G = $v_8;
        }
        if ($v_G) {
            $v_F = parseFloat($v_D);
            var $v_H = new RTE.FontSizeInfo();

            $v_H.className = $v_C;
            $v_H.size = $v_F;
            $v_H.unit = $v_E;
            Array.add($v_G, $v_H);
        }
    }
    var $v_9 = RTE.FontCommands.$Hs;

    $v_7.sort($v_9);
    $v_4.sort($v_9);
    $v_6.sort($v_9);
    $v_8.sort($v_9);
    $v_3.sort($v_9);
    $v_5.sort($v_9);
    Array.add($v_2, $v_3);
    Array.add($v_2, $v_5);
    Array.add($v_2, $v_4);
    Array.add($v_2, $v_7);
    Array.add($v_2, $v_6);
    Array.add($v_2, $v_8);
    return $v_2;
};
RTE.FontCommands.$Hs = function RTE_FontCommands$$Hs($p0, $p1) {
    var $v_0 = $p0;
    var $v_1 = $p1;

    if ($v_0.size < $v_1.size) {
        return -1;
    }
    else if ($v_0.size === $v_1.size) {
        return 0;
    }
    return 1;
};
RTE.FontCommands.initFontSizeDropDownMenu = function RTE_FontCommands$initFontSizeDropDownMenu() {
    RTE.RteUtility.classMustExist('CUI.JsonXmlElement');
    return RTE.FontCommands.$KJ();
};
RTE.FontCommands.$KJ = function RTE_FontCommands$$KJ() {
    var $v_0 = RTE.FontCommands.$IG();
    var $v_1 = [SP.Res.fontSizeUnitPt, SP.Res.fontSizeUnitPx, SP.Res.fontSizeUnitEm, SP.Res.fontSizeUnitIn, SP.Res.fontSizeUnitMm];
    var $v_2 = new CUI.JsonXmlElement('Menu', {
        Id: 'Ribbon.EditingTools.CPEditTab.Font.FontSize.Menu'
    });
    var $v_3 = null;

    for (var $v_4 = 0; $v_4 < $v_1.length; $v_4++) {
        var $v_5 = $v_0[$v_4];

        if (!$v_5 || !$v_5.length) {
            continue;
        }
        var $v_6 = ($v_2.appendChild('MenuSection', {
            Id: 'msFontSize-' + $v_4.toString(),
            Title: $v_1[$v_4],
            Description: '',
            Scrollable: 'false'
        })).appendChild('Controls', null);

        for (var $v_7 = 0; $v_7 < $v_5.length; $v_7++) {
            var $v_8 = $v_5[$v_7];

            if (!$v_3) {
                $v_3 = $v_8;
            }
            $v_6.appendChild('Button', {
                Id: 'fseaFontSize-' + $v_4.toString() + '-' + $v_7.toString(),
                LabelText: $v_8.size.toString(),
                LabelStyle: 'ms-ribbon-FontSizea',
                CommandValueId: $v_8.className,
                Command: 'FontSizeCssClass',
                CommandPreview: 'FontSizeCssClassPreview',
                CommandRevert: 'FontSizeCssClassPreviewRevert'
            });
        }
    }
    return $v_2;
};
RTE.FontCommands.$E4 = function RTE_FontCommands$$E4($p0, $p1) {
    var $v_0 = RTE.Cursor.get_range();

    if (!$v_0.isValid()) {
        return '';
    }
    var $v_1 = $v_0.getCurrentStateNode();
    var $v_2 = null;
    var $v_3 = null;
    var $v_4 = $v_1;

    while ($v_4) {
        if ($v_4.style && !RTE.SU.$2($v_4.style[$p1])) {
            break;
        }
        else if ($v_4.className && RTE.RteUtility.$3F($p0, RTE.RteUtility.getCssClassName($v_4))) {
            var $v_8 = $v_4.className.split(' ');
            var $v_9 = $v_8.length;

            for (var $v_A = 0; $v_A < $v_9; $v_A++) {
                var $v_B = $v_8[$v_A];
                var $v_C = $p0.length;

                for (var $v_D = 0; $v_D < $v_C; $v_D++) {
                    var $v_E = $v_B.indexOf($p0[$v_D]);

                    if ($v_E !== -1) {
                        $v_2 = $v_B;
                        $v_3 = $v_B.substr(0, $v_E);
                        $v_4 = null;
                        break;
                    }
                }
            }
        }
        if ($v_4) {
            $v_4 = $v_4.parentNode;
        }
    }
    if ($v_2) {
        var $v_F = RTE.StyleRuleUtility.getStyleRules($v_2, $v_3, true);

        if ($v_F.length > 0) {
            return RTE.StyleRuleUtility.$2G($v_F[0], null, $p1);
        }
    }
    if (RTE.SU.$2($p1)) {
        return '';
    }
    var $v_5 = RTE.RteUtility.$1c($v_1);
    var $v_6 = RTE.StyleRuleUtility.$8F($v_5, $p1);

    $v_3 = RTE.Canvas.getCurrentStyleSheetPrefix();
    var $v_7 = $p0.length;

    for (var $v_G = 0; $v_G < $v_7; $v_G++) {
        var $v_H = RTE.StyleRuleUtility.getStyleRules($v_3 + $p0[$v_G], $v_3, true);
        var $v_I = $v_H.length;

        for (var $v_J = 0; $v_J < $v_I; $v_J++) {
            var $v_K = $v_H[$v_J];
            var $v_L = RTE.StyleRuleUtility.$8F($v_K.rule.style, $p1);

            if ($v_L.toUpperCase() === $v_6.toUpperCase()) {
                return RTE.StyleRuleUtility.$2G($v_K, null, $p1);
            }
        }
    }
    return $v_6;
};
RTE.FontCommands.$IF = function RTE_FontCommands$$IF() {
    var $v_0 = RTE.FontCommands.$E4(['FontSize'], 'fontSize');

    if (RTE.FontCommands.$8s !== $v_0) {
        RTE.FontCommands.$8s = $v_0;
        var $v_1 = RTE.RteUtility.parseUnitValue($v_0);

        if ($v_1 && !RTE.SU.$2($v_1.unit)) {
            RTE.FontCommands.$8t = $v_1.unit;
        }
    }
    return $v_0;
};
RTE.FontCommands.initFontFamilyDropDownMenu = function RTE_FontCommands$initFontFamilyDropDownMenu() {
    RTE.RteUtility.classMustExist('CUI.JsonXmlElement');
    return RTE.FontCommands.$KI();
};
RTE.FontCommands.$KI = function RTE_FontCommands$$KI() {
    var $v_0 = RTE.Canvas.getCurrentStyleSheetPrefix();
    var $v_1 = [$v_0 + 'ThemeFontFace', $v_0 + 'FontFace'];
    var $v_2 = RTE.StyleRuleUtility.getStyleRules($v_1[1], $v_0, false);
    var $v_3 = RTE.StyleRuleUtility.getStyleRules($v_1[0], $v_0, false);
    var $v_4 = null;
    var $v_5 = RTE.FontCommands.$Az($v_2, $v_1[1]);
    var $v_6 = RTE.FontCommands.$Az($v_3, $v_1[0]);
    var $v_7 = [SP.Res.themeFonts, SP.Res.fonts];
    var $v_8 = ['FontFamilyThemeClass', 'FontFamilyCssClass'];
    var $v_9 = ['FontFamilyThemeClassPreview', 'FontFamilyCssClassPreview'];
    var $v_A = ['FontFamilyThemeClassPreviewRevert', 'FontFamilyCssClassPreviewRevert'];
    var $v_B = new CUI.JsonXmlElement('Menu', {
        Id: 'Ribbon.EditingTools.CPEditTab.Font.FontSize.Menu'
    });

    for (var $v_C = 0; $v_C < $v_7.length; $v_C++) {
        var $v_D;

        if (!$v_C) {
            $v_D = $v_6;
        }
        else {
            $v_D = $v_5;
        }
        if (!$v_D || !$v_D.length) {
            continue;
        }
        var $v_E = ($v_B.appendChild('MenuSection', {
            Id: 'msFontFamily-' + $v_C.toString(),
            Title: $v_7[$v_C],
            Description: '',
            Scrollable: 'false'
        })).appendChild('Controls', null);

        for (var $v_F = 0; $v_F < $v_D.length; $v_F++) {
            var $v_G = $v_D[$v_F];
            var $v_H = $v_G.$3u_0;
            var $v_I = $v_H.rule.selectorText;
            var $v_J = RTE.StyleRuleUtility.$2c($v_I);
            var $v_K = $v_G.$8J_0;

            if (!$v_4) {
                $v_4 = $v_K;
            }
            var $v_L = $v_H.rule.style.fontFamily;
            var $v_M = RTE.SU.$2($v_L) ? '' : 'font-family:' + $v_L;

            $v_E.appendChild('Button', {
                Id: 'fseaFont-' + $v_C.toString() + '-' + $v_F.toString(),
                LabelText: $v_K,
                LabelCss: $v_M,
                CommandValueId: $v_J,
                Command: $v_8[$v_C],
                CommandPreview: $v_9[$v_C],
                CommandRevert: $v_A[$v_C]
            });
        }
    }
    return $v_B;
};
RTE.FontCommands.$IE = function RTE_FontCommands$$IE() {
    return RTE.FontCommands.$E4(['ThemeFontFace', 'FontFace'], 'fontFamily');
};
RTE.FontCommands.$Az = function RTE_FontCommands$$Az($p0, $p1) {
    var $v_0 = new Array($p0.length);

    for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        var $v_2 = new RTE.FontFamilyInfo();

        $v_2.$3u_0 = $p0[$v_1];
        var $v_3 = RTE.StyleRuleUtility.$38($v_2.$3u_0.rule.selectorText, $p1 + '-');

        $v_2.$8J_0 = RTE.StyleRuleUtility.$2G($v_2.$3u_0, $v_3, 'fontFamily');
        $v_2.$8w_0 = $v_2.$8J_0.toLowerCase();
        $v_0[$v_1] = $v_2;
    }
    $v_0.sort(RTE.FontCommands.$Hr);
    return $v_0;
};
RTE.FontCommands.$Hr = function RTE_FontCommands$$Hr($p0, $p1) {
    var $v_0 = $p0;
    var $v_1 = $p1;

    return $v_0.$8w_0.localeCompare($v_1.$8w_0);
};
RTE.FontCommands.initFontColorMenu = function RTE_FontCommands$initFontColorMenu() {
    RTE.RteUtility.classMustExist('CUI.JsonXmlElement');
    return RTE.FontCommands.$CJ('Ribbon.EditingTools.CPEditTab.Font.FontColor.Menu', 'ForeColor', 'ThemeForeColor', 'color', 'ColorCssClass', 'ColorCssClassPreview', 'ColorCssClassPreviewRevert', 'ColorThemeClass', 'ColorThemeClassPreview', 'ColorThemeClassPreviewRevert', 'ColorCustom');
};
RTE.FontCommands.initFontBackgroundColorMenu = function RTE_FontCommands$initFontBackgroundColorMenu() {
    return RTE.FontCommands.$CJ('Ribbon.EditingTools.CPEditTab.Font.FontBackgroundColor.Menu', 'BackColor', 'ThemeBackColor', 'backgroundColor', 'BackgroundColorCssClass', 'BackgroundColorCssClassPreview', 'BackgroundColorCssClassPreviewRevert', 'BackgroundColorThemeClass', 'BackgroundColorThemeClassPreview', 'BackgroundColorThemeClassPreviewRevert', 'BackgroundColorCustom');
};
RTE.FontCommands.$CJ = function RTE_FontCommands$$CJ($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8, $p9, $p10) {
    var $v_0 = RTE.Canvas.getCurrentStyleSheetPrefix();
    var $v_1 = new CUI.JsonXmlElement('Menu', {
        Id: $p0
    });
    var $v_2 = ($v_1.appendChild('MenuSection', {
        Id: $p0 + '.MsTheme',
        Title: SP.Res.colorPickerThemeHeaderText
    })).appendChild('Controls', {
        Id: $p0 + '.MsTheme.Controls'
    });

    RTE.FontCommands.$AX($v_2, $p0 + 'themeColor', $v_0 + $p2, $p3, $p7, $p8, $p9);
    var $v_3 = ($v_1.appendChild('MenuSection', {
        Id: $p0 + '.Ms',
        Title: SP.Res.colorPickerStandardHeaderText
    })).appendChild('Controls', {
        Id: $p0 + '.Ms.Controls'
    });

    RTE.FontCommands.$AX($v_3, $p0 + 'standardColor', $v_0 + $p1, $p3, $p4, $p5, $p6);
    var $v_4 = ($v_1.appendChild('MenuSection', {
        Id: $p0 + '.MsCustom'
    })).appendChild('Controls', {
        Id: $p0 + '.MsCustom.Controls'
    });

    $v_4.appendChild('Button', {
        Id: $p0 + 'customColor',
        LabelText: SP.Res.colorPickerMoreColorsText,
        Image16by16: '/_layouts/images/customcolors.png',
        CommandType: 'General',
        Command: $p10
    });
    return $v_1;
};
RTE.FontCommands.$AX = function RTE_FontCommands$$AX($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
    var $v_0 = ($p0.appendChild('ColorPicker', {
        Id: $p1,
        Command: $p4,
        CommandPreview: $p5,
        CommandRevert: $p6
    })).appendChild('Colors', null);
    var $v_1 = RTE.Canvas.getCurrentStyleSheetPrefix();
    var $v_2 = RTE.StyleRuleUtility.getStyleRules($p2, $v_1, false);

    for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
        var $v_4 = $v_2[$v_3];
        var $v_5 = $v_4.rule.selectorText;
        var $v_6 = RTE.StyleRuleUtility.$2c($v_5);
        var $v_7 = RTE.StyleRuleUtility.$38($v_5, $p2 + '-');
        var $v_8 = $v_2[$v_3].rule.style[$p3];
        var $v_9 = RTE.StyleRuleUtility.$IT($v_4, $v_7, $p3);
        var $v_A = RTE.StyleRuleUtility.$2G($v_4, $v_7, $p3);

        if (!RTE.SU.$2($v_A)) {
            $v_9 = $v_9 + ', ' + $v_A;
        }
        $v_0.appendChild('Color', {
            Title: $v_9,
            Style: $v_6,
            DisplayColor: $v_8,
            Color: $v_8
        });
    }
};
RTE.HtmlFormat = function RTE_HtmlFormat() {
};
RTE.HtmlFormat.formatHtml = function RTE_HtmlFormat$formatHtml($p0) {
    var $v_0 = new RTE.HtmlAndSelection();

    try {
        $p0 = RTE.RteUtility.$Kh($p0);
        var $v_1 = new Sys.StringBuilder();
        var $v_2 = 0;
        var $v_3 = null;
        var $v_4 = [];
        var $v_5 = $p0.search(RTE.HtmlFormat.$BA);
        var $v_6 = $p0.search(RTE.HtmlFormat.$B8);
        var $v_7 = -1;
        var $v_8 = -1;
        var $v_9 = false;
        var $v_A = false;
        var $v_B = -1;

        do {
            var $v_C = $p0.indexOf('<' + ($v_3 ? '/' + $v_3 : ''), $v_2);
            var $v_D = $v_5 !== -1 && $v_C === $v_5 || $v_6 !== -1 && $v_C === $v_6;

            if ($v_C !== $v_2) {
                var $v_E = $v_C !== -1 ? $v_C : $p0.length;
                var $v_F = $p0.substring($v_2, $v_E);

                $v_F = !$v_3 && $v_B === -1 ? RTE.HtmlFormat.$Kr($v_F) : $v_F;
                $v_9 = RTE.HtmlFormat.$Ev($v_1, $v_F);
                if ($v_C === -1) {
                    break;
                }
                $v_2 = $v_C;
                if ($v_B === -1 && ($v_F.trim()).length > 0 || $v_B !== -1 && $v_F.length > 0) {
                    $v_A = false;
                }
            }
            if ($v_D) {
                if ($v_5 === $v_C) {
                    $v_7 = ($v_1.toString()).length;
                }
                if ($v_6 === $v_C) {
                    $v_8 = ($v_1.toString()).length;
                }
                $v_2 = $p0.indexOf('</span>', $v_2);
                if ($v_2 === -1) {
                    break;
                }
                $v_2 += 7;
            }
            else if ($p0.indexOf('/', $v_2) === $v_2 + 1) {
                $v_3 = null;
                $v_2++;
                var $v_G = $p0.indexOf('>', $v_C);
                var $v_H = $p0.substring($v_2 + 1, $v_G);

                if (RTE.HtmlFormat.$JR($v_4, $v_H)) {
                    while ($v_4.length > 0 && $v_4.pop() !== $v_H) { }
                }
                if ($v_B > $v_4.length) {
                    $v_B = -1;
                }
                RTE.HtmlFormat.$Et($v_1, $v_4.length, $v_H, $v_A);
                $v_2 = $v_G + 1;
                $v_A = RTE.RteUtility.$4x($v_H);
            }
            else {
                $v_3 = null;
                var $v_I = $p0.indexOf('>', $v_C);
                var $v_J = $p0.indexOf('/', $v_I - 1) === $v_I - 1;
                var $v_K = ($p0.substring($v_2 + 1, $v_I)).replace(RTE.HtmlFormat.$9P, '');

                RTE.HtmlFormat.$Eu($v_1, $v_4.length, $v_K, $v_9 || $v_A);
                if (!$v_J) {
                    $v_A = false;
                    var $v_L = $p0.indexOf(' ', $v_C);
                    var $v_M = $p0.substring($v_2 + 1, $v_L !== -1 ? Math.min($v_I, $v_L) : $v_I);

                    if (!RTE.HtmlFormat.$JI($v_M)) {
                        $v_3 = RTE.HtmlFormat.$JO($v_M) ? $v_M : null;
                        $v_4.push($v_M);
                        $v_A = RTE.RteUtility.$4x($v_M);
                        if ($v_B === -1) {
                            if ($v_M.toUpperCase() === 'PRE' || RTE.HtmlFormat.$Eh.test($v_K)) {
                                $v_B = $v_4.length;
                            }
                        }
                    }
                }
                $v_2 = $v_I + 1;
            }
        } while ($v_2 !== -1 && $v_2 < $p0.length);
        $v_0.html = $v_1.toString();
        if ($v_7 !== -1 && $v_8 !== -1 && ($v_7 !== $v_8 || $v_7 !== $v_0.html.length)) {
            $v_0.selectionStart = $v_7;
            $v_0.selectionEnd = $v_8;
        }
    }
    catch ($$e_O) {
        $v_0.html = RTE.RteUtility.$4B($p0, false, false);
        $v_0.selectionStart = 0;
        $v_0.selectionEnd = 0;
    }
    return $v_0;
};
RTE.HtmlFormat.$JR = function RTE_HtmlFormat$$JR($p0, $p1) {
    var $v_0 = $p0;

    for (var $v_1 = $v_0.length - 1; $v_1 >= 0; $v_1--) {
        if ($v_0[$v_1] === $p1) {
            return true;
        }
    }
    return false;
};
RTE.HtmlFormat.$JO = function RTE_HtmlFormat$$JO($p0) {
    if (!RTE.HtmlFormat.$2s) {
        RTE.HtmlFormat.$2s = {};
        RTE.HtmlFormat.$2s['SCRIPT'] = null;
        RTE.HtmlFormat.$2s['XML'] = null;
        RTE.HtmlFormat.$2s['STYLE'] = null;
    }
    return !RTE.SU.$1R(RTE.HtmlFormat.$2s[$p0.toUpperCase()]);
};
RTE.HtmlFormat.getSkipTags = function RTE_HtmlFormat$getSkipTags() {
    var $v_0 = new Array(0);
    var $$enum_1 = RTE.HtmlFormat.$2s.getEnumerator();

    while ($$enum_1.moveNext()) {
        var $v_1 = $$enum_1.get_current();

        $v_0[$v_0.length] = $v_1;
    }
    return $v_0;
};
RTE.HtmlFormat.$JI = function RTE_HtmlFormat$$JI($p0) {
    if (!RTE.HtmlFormat.$3B) {
        RTE.HtmlFormat.$3B = {};
        RTE.HtmlFormat.$3B['BR'] = null;
        RTE.HtmlFormat.$3B['IMG'] = null;
        RTE.HtmlFormat.$3B['HR'] = null;
    }
    return !RTE.SU.$1R(RTE.HtmlFormat.$3B[$p0.toUpperCase()]);
};
RTE.HtmlFormat.$Ev = function RTE_HtmlFormat$$Ev($p0, $p1) {
    if (!RTE.SU.$2($p1)) {
        $p0.append($p1);
        return $p1.endsWith(' ');
    }
    return false;
};
RTE.HtmlFormat.$Eu = function RTE_HtmlFormat$$Eu($p0, $p1, $p2, $p3) {
    var $v_0 = ($p2.split(' '))[0];

    if ($p3 || RTE.RteUtility.$4x($v_0) && !$p0.isEmpty()) {
        $p0.append('\n');
        RTE.HtmlFormat.$Bg($p0, $p1);
    }
    $p0.append('<' + $p2 + '>');
};
RTE.HtmlFormat.$Et = function RTE_HtmlFormat$$Et($p0, $p1, $p2, $p3) {
    if ($p3 && RTE.RteUtility.$4x($p2)) {
        $p0.append('\n');
        RTE.HtmlFormat.$Bg($p0, $p1);
    }
    $p0.append('</' + $p2.trim() + '>');
};
RTE.HtmlFormat.$Bg = function RTE_HtmlFormat$$Bg($p0, $p1) {
    for (var $v_0 = 0; $v_0 < $p1; $v_0++) {
        $p0.append('   ');
    }
};
RTE.HtmlFormat.$Kr = function RTE_HtmlFormat$$Kr($p0) {
    var $v_0 = $p0.split(RTE.HtmlFormat.$9P);

    for (var $v_3 = 0; $v_3 < $v_0.length; $v_3++) {
        var $v_4 = $v_0[$v_3];
        var $v_5 = !$v_3;
        var $v_6 = $v_3 === $v_0.length - 1;

        if (!$v_5 && !$v_6) {
            $v_4 = $v_4.trim();
        }
        else if ($v_5 && !$v_6) {
            $v_4 = $v_4.trimEnd();
        }
        else if (!$v_5) {
            $v_4 = $v_4.trimStart();
        }
        if ($v_4.length > 0 && !$v_6) {
            $v_4 = $v_4 + ' ';
        }
        $v_0[$v_3] = $v_4;
    }
    var $v_1 = $p0.startsWith('\n') ? ' ' : '';
    var $v_2 = $v_0.join('');

    return $v_1 + $v_2;
};
RTE.HtmlAndSelection = function RTE_HtmlAndSelection() {
};
RTE.HtmlAndSelection.prototype = {
    html: null,
    selectionStart: 0,
    selectionEnd: 0
};
RTE.HtmlSourceCommands = function RTE_HtmlSourceCommands() {
};
RTE.HtmlSourceCommands.editSource = function RTE_HtmlSourceCommands$editSource() {
    var $v_0 = RTE.Canvas.currentEditableRegion();

    if (!$v_0) {
        return;
    }
    var $v_1 = new RTE.EditHtmlSourceDialog($v_0);

    $v_1.show();
};
RTE.EditHtmlSourceDialog = function RTE_EditHtmlSourceDialog($p0) {
    this.$$d_$E1_0 = Function.createDelegate(this, this.$E1_0);
    this.$$d_$Kw_0 = Function.createDelegate(this, this.$Kw_0);
    this.$$d_$Jt_0 = Function.createDelegate(this, this.$Jt_0);
    this.$$d_$KB_0 = Function.createDelegate(this, this.$KB_0);
    this.$$d_$7W_0 = Function.createDelegate(this, this.$7W_0);
    this.$$d_$JY_0 = Function.createDelegate(this, this.$JY_0);
    this.$z_0 = $p0;
};
RTE.EditHtmlSourceDialog.$DE = function RTE_EditHtmlSourceDialog$$DE($p0, $p1, $p2) {
    if ($p2) {
        var $v_2 = $p0.lastIndexOf('<', $p1 - 1);
        var $v_3 = $p0.lastIndexOf('>', $p1 - 1);

        if ($v_2 !== -1 && ($v_3 === -1 || $v_3 < $v_2)) {
            $p1 = $v_2;
        }
    }
    else {
        var $v_4 = $p0.indexOf('<', $p1);
        var $v_5 = $p0.indexOf('>', $p1);

        if ($v_5 !== -1 && ($v_4 === -1 || $v_5 < $v_4)) {
            $p1 = $v_5 + 1;
        }
    }
    var $v_0 = $p0.lastIndexOf('&', $p1 - 1);
    var $v_1 = $p0.lastIndexOf(';', $p1 - 1);

    if ($v_0 !== -1 && ($v_1 === -1 || $v_1 < $v_0)) {
        $v_1 = $p0.indexOf(';', $p1);
        if ($p1 - 15 < $v_0 && $v_1 !== -1 && $v_1 < $p1 + 15) {
            $p1 = $v_0;
        }
    }
    $p1 = RTE.EditHtmlSourceDialog.$Jj('TABLE', ['TD', 'TH'], $p0, $p1);
    $p1 = RTE.EditHtmlSourceDialog.$99('TEXTAREA', $p0, $p1);
    $p1 = RTE.EditHtmlSourceDialog.$99('IFRAME', $p0, $p1);
    $p1 = RTE.EditHtmlSourceDialog.$99('INPUT', $p0, $p1);
    return $p1;
};
RTE.EditHtmlSourceDialog.$Jj = function RTE_EditHtmlSourceDialog$$Jj($p0, $p1, $p2, $p3) {
    var $v_0 = RTE.RteUtility.$3U($p2, RTE.EditHtmlSourceDialog.$3h($p0, true), $p3);
    var $v_1 = RTE.RteUtility.$3U($p2, RTE.EditHtmlSourceDialog.$3h($p0, false), $p3);

    if ($v_1 !== -1 && ($v_0 === -1 || $v_1 < $v_0)) {
        var $v_2 = -1;

        for (var $v_3 = 0; $v_3 < $p1.length; $v_3++) {
            var $v_4 = $p1[$v_3];
            var $v_5 = RTE.RteUtility.$3U($p2, RTE.EditHtmlSourceDialog.$3h($v_4, true), $p3);
            var $v_6 = RTE.RteUtility.$3U($p2, RTE.EditHtmlSourceDialog.$3h($v_4, false), $p3);

            if ($v_6 !== -1 && ($v_5 === -1 || $v_5 > $v_6)) {
                return $p3;
            }
            if ($v_5 !== -1) {
                var $v_7 = $p2.indexOf('>', $v_5 + 1) + 1;

                $v_2 = !$v_3 ? $v_7 : Math.min($v_2, $v_7);
            }
        }
        $p3 = $v_2 !== -1 ? $v_2 : $p2.indexOf('>', $v_1 + 1) + 1;
    }
    return $p3;
};
RTE.EditHtmlSourceDialog.$99 = function RTE_EditHtmlSourceDialog$$99($p0, $p1, $p2) {
    var $v_0 = RTE.EditHtmlSourceDialog.$3h($p0, true);
    var $v_1 = RTE.EditHtmlSourceDialog.$3h($p0, false);
    var $v_2 = RTE.RteUtility.$3U($p1, $v_0, $p2);
    var $v_3 = RTE.RteUtility.$3U($p1, $v_1, $p2);

    if ($v_3 !== -1 && ($v_2 === -1 || $v_3 < $v_2)) {
        $p2 = $p1.indexOf('>', $v_3 + 1) + 1;
    }
    return $p2;
};
RTE.EditHtmlSourceDialog.$3h = function RTE_EditHtmlSourceDialog$$3h($p0, $p1) {
    if ($p1) {
        return new RegExp('<\\s*' + $p0 + '[^>]*>', 'gi');
    }
    return new RegExp('<\\s*/\\s*' + $p0 + '[^>]*>', 'gi');
};
RTE.EditHtmlSourceDialog.prototype = {
    $z_0: null,
    $2g_0: null,
    $M_0: null,
    $g_0: null,
    show: function RTE_EditHtmlSourceDialog$show() {
        RTE.RteUtility.classMustExist('SP.UI.ModalDialog');
        RTE.RteUtility.classMustExist('SP.PageContextInfo');
        RTE.PasteFlyout.hide();
        var $v_0 = RTE.Canvas.getEditableRegionHtml(this.$z_0, true);

        this.$g_0 = RTE.HtmlFormat.formatHtml($v_0);
        var $v_1 = new SP.UI.DialogOptions();

        $v_1.html = this.$FD_0();
        $v_1.width = 750;
        $v_1.height = 550;
        $v_1.title = SP.Res.editHtmlSourceTitle;
        $v_1.showMaximized = true;
        $v_1.allowMaximize = true;
        this.$2g_0 = SP.UI.ModalDialog.showModalDialog($v_1);
        this.$KD_0();
    },
    $LB_0: function RTE_EditHtmlSourceDialog$$LB_0($p0) {
        if ($p0 === 1) {
            RTE.Cursor.$EM(SP.Res.dialogLoading15);
            var $v_0 = this.$II_0();
            var $$t_5 = this;

            RTE.EmbeddingCommands.$Ks($v_0, this.$z_0, function($p1_0, $p1_1) {
                RTE.RteUtility.$9p($$t_5.$z_0, $p1_0);
                var $v_1 = RTE.SafeHtml.$Km($$t_5.$z_0);

                if (($p1_1 || $v_1) && RTE.RteUtility.isClassAvailable('SP.UI.Notify')) {
                    SP.UI.Notify.addNotification('<b>' + SP.Res.htmlSourceChangedTitle + ':</b> ' + SP.Res.htmlSourceChangedText15, false);
                }
                (RTE.Cursor.get_range()).moveToMarkersPlaceholders($$t_5.$z_0, 'ms-rterangeselectionplaceholder');
                RTE.Cursor.$CC();
                $$t_5.$EA_0();
            });
        }
        else {
            this.$EA_0();
        }
    },
    $EA_0: function RTE_EditHtmlSourceDialog$$EA_0() {
        if (RTE.RteUtility.isSafari()) {
            var $v_0 = RTE.ScrollPosition.$7u(this.$z_0);

            this.$z_0.focus();
            RTE.ScrollPosition.$5v($v_0);
        }
        RTE.Cursor.update();
    },
    $FD_0: function RTE_EditHtmlSourceDialog$$FD_0() {
        var $v_0 = document.createElement('DIV');

        $addHandler($v_0, 'keypress', this.$$d_$JY_0);
        var $v_1 = document.createElement('DIV');

        $v_1.className = 'ms-input-divAroundTextArea ms-fullWidth';
        $v_1.style.height = '100%';
        $v_1.style.marginBottom = '24px';
        $v_0.appendChild($v_1);
        this.$M_0 = document.createElement('TEXTAREA');
        this.$M_0.style.width = '100%';
        this.$M_0.style.height = '100%';
        this.$M_0.style.margin = '0px';
        this.$M_0.style.border = 'transparent';
        this.$M_0.className = 'ms-rte-srcdialog-text ms-fullWidth';
        this.$M_0.id = 'PropertyEditor';
        this.$M_0.dir = this.$z_0.dir;
        this.$M_0.value = this.$g_0.html;
        $addHandler(this.$M_0, 'keyup', this.$$d_$7W_0);
        $addHandler(this.$M_0, 'mousedown', this.$$d_$7W_0);
        $addHandler(this.$M_0, 'mouseup', this.$$d_$7W_0);
        $v_1.appendChild(this.$M_0);
        var $v_2 = document.createElement('DIV');

        $v_2.className = 'ms-core-form-bottomButtonBox';
        $v_0.appendChild($v_2);
        var $v_3 = document.createElement('INPUT');

        $v_3.type = 'button';
        $addHandler($v_3, 'click', this.$$d_$KB_0);
        $v_3.value = SP.Res.okButtonText;
        $v_3.className = 'ms-ButtonHeightWidth';
        $v_3.id = 'sourcedialog_okbutton';
        $v_2.appendChild($v_3);
        $v_2.appendChild(document.createTextNode(RTE.RteUtility.$7w));
        var $v_4 = document.createElement('INPUT');

        $v_4.type = 'button';
        $addHandler($v_4, 'click', this.$$d_$Jt_0);
        $v_4.value = SP.Res.cancelButtonText;
        $v_4.id = 'sourcedialog_cancelbutton';
        $v_4.className = 'ms-ButtonHeightWidth';
        $v_2.appendChild($v_4);
        return $v_0;
    },
    $KB_0: function RTE_EditHtmlSourceDialog$$KB_0($p0) {
        if (this.$2g_0) {
            this.$g_0.html = this.$M_0.value;
            this.$88_0(1);
        }
    },
    $Jt_0: function RTE_EditHtmlSourceDialog$$Jt_0($p0) {
        this.$88_0(0);
    },
    $KD_0: function RTE_EditHtmlSourceDialog$$KD_0() {
        try {
            $addHandler(this.$2g_0.get_dialogElement(), 'click', this.$$d_$Kw_0);
            $addHandler(this.$2g_0.get_dialogElement(), 'dblclick', this.$$d_$Kw_0);
            $addHandler(window, 'resize', this.$$d_$Kw_0);
            this.$E1_0();
            this.$EF_0(this.$M_0, this.$g_0.selectionStart, this.$g_0.selectionEnd, true);
            var $$t_1 = this;

            window.setTimeout(function() {
                $$t_1.$M_0.focus();
                $$t_1.$7W_0(null);
            }, 0);
        }
        catch ($$e_0) { }
    },
    $Kw_0: function RTE_EditHtmlSourceDialog$$Kw_0($p0) {
        window.setTimeout(this.$$d_$E1_0, 0);
    },
    $E1_0: function RTE_EditHtmlSourceDialog$$E1_0() {
        var $v_0 = (this.$2g_0.get_html()).parentNode.clientHeight;

        this.$M_0.parentNode.style.height = $v_0 - 80 + 'px';
    },
    $7W_0: function RTE_EditHtmlSourceDialog$$7W_0($p0) {
        if (this.$M_0) {
            if (typeof this.$M_0.selectionStart !== 'undefined' && !RTE.RteUtility.isInternetExplorer()) {
                this.$g_0.selectionStart = this.$M_0.selectionStart;
                this.$g_0.selectionEnd = this.$M_0.selectionEnd;
            }
            else if (document.selection) {
                var $v_0 = document.selection.createRange();
                var $v_1 = $v_0.duplicate();

                $v_1.moveToElementText(this.$M_0);
                $v_1.setEndPoint('EndToEnd', $v_0);
                var $v_2 = $v_1.text.length;
                var $v_3 = $v_0.text.length;

                this.$g_0.selectionStart = $v_2 - $v_3;
                this.$g_0.selectionEnd = this.$g_0.selectionStart + $v_3;
            }
        }
    },
    $JY_0: function RTE_EditHtmlSourceDialog$$JY_0($p0) {
        if ($p0.charCode === 27) {
            if ($p0.target === this.$M_0) {
                this.$7W_0(null);
            }
            this.$88_0(0);
        }
        else if ($p0.target === this.$M_0 && $p0.charCode === 13) {
            this.$Em_0($p0);
        }
    },
    $Em_0: function RTE_EditHtmlSourceDialog$$Em_0($p0) {
        this.$7W_0(null);
        var $v_0 = this.$M_0.value;
        var $v_1 = $v_0.lastIndexOf('\n', this.$g_0.selectionStart - 1);

        if ($v_1 >= 0) {
            var $v_2 = '';

            while ($v_0.charAt($v_1 + 1) === ' ') {
                $v_2 += ' ';
                $v_1++;
            }
            if ($v_2.length > 0) {
                if (document.selection) {
                    var $v_3 = document.selection.createRange();

                    $v_3.text = '\r\n' + $v_2;
                    $v_3.collapse(false);
                    $v_3.select();
                    SP.UI.UIUtility.cancelEvent($p0);
                }
                else {
                    var $$t_6 = this;

                    window.setTimeout(function() {
                        var $v_4 = $$t_6.$M_0.scrollTop;

                        $v_0 = $v_0.substring(0, $$t_6.$g_0.selectionStart) + '\n' + $v_2 + $v_0.substring($$t_6.$g_0.selectionEnd, $v_0.length);
                        $$t_6.$M_0.value = $v_0;
                        $$t_6.$M_0.scrollTop = $v_4;
                        $$t_6.$EF_0($$t_6.$M_0, $$t_6.$g_0.selectionStart + $v_2.length + 1, $$t_6.$g_0.selectionStart + $v_2.length + 1, false);
                    }, 0);
                }
            }
        }
    },
    $EF_0: function RTE_EditHtmlSourceDialog$$EF_0($p0, $p1, $p2, $p3) {
        if ($p0.createTextRange) {
            var $v_0 = $p0.createTextRange();

            $v_0.collapse(true);
            $v_0.moveEnd('character', $p2);
            $v_0.moveStart('character', $p1);
            $v_0.select();
        }
        else if ($p0.setSelectionRange) {
            $p0.setSelectionRange($p1, $p2);
            if ($p3) {
                this.$L1_0($p0, $p1, $p2);
            }
        }
        this.$g_0.selectionStart = $p1;
        this.$g_0.selectionEnd = $p2;
    },
    $L1_0: function RTE_EditHtmlSourceDialog$$L1_0($p0, $p1, $p2) {
        if (!$p1) {
            $p0.scrollTop = 0;
            return;
        }
        var $v_0 = document.createEvent('KeyboardEvent');

        if ($v_0.initKeyEvent) {
            $p0.setSelectionRange($p1, $p2);
            $v_0.initKeyEvent('keypress', true, true, window, false, false, false, false, 0, 32);
            $p0.dispatchEvent($v_0);
            $v_0 = document.createEvent('KeyboardEvent');
            $v_0.initKeyEvent('keypress', true, true, window, false, false, false, false, 8, 0);
            $p0.dispatchEvent($v_0);
            $p0.setSelectionRange($p1, $p2);
        }
        else {
            $p0.setSelectionRange($p1, $p1);
            $p0.blur();
            $p0.focus();
            if ($p1 !== $p2) {
                var $$t_4 = this;

                window.setTimeout(function() {
                    $p0.setSelectionRange($p1, $p2);
                }, 0);
            }
        }
    },
    $88_0: function RTE_EditHtmlSourceDialog$$88_0($p0) {
        if (this.$2g_0) {
            $removeHandler(window, 'resize', this.$$d_$Kw_0);
            this.$2g_0.close(1);
            this.$2g_0 = null;
            this.$M_0 = null;
            this.$LB_0($p0);
        }
    },
    $II_0: function RTE_EditHtmlSourceDialog$$II_0() {
        var $v_0 = this.$g_0.html;
        var $v_1 = this.$g_0.selectionStart;
        var $v_2 = this.$g_0.selectionEnd;
        var $v_3 = RTE.Canvas.getCachedRestriction(this.$z_0, 'AllowScripts', false);

        if (!$v_3 && !RTE.SU.$2($v_0) && !RTE.SU.$7($v_1) && !RTE.SU.$7($v_2)) {
            $v_1 = RTE.EditHtmlSourceDialog.$DE($v_0, $v_1, true);
            $v_2 = RTE.EditHtmlSourceDialog.$DE($v_0, $v_2, false);
            $v_0 = $v_0.substring(0, $v_1) + '<span id=\'' + 'ms-rterangeselectionplaceholder' + '-start\'></span>' + $v_0.substring($v_1, $v_2) + '<span id=\'' + 'ms-rterangeselectionplaceholder' + '-end\'></span>' + $v_0.substring($v_2, $v_0.length);
        }
        return $v_0;
    }
};
RTE.ShortcutKeys = function RTE_ShortcutKeys() {
};
RTE.ShortcutKeys.initializeDictionary = function RTE_ShortcutKeys$initializeDictionary() {
    if (!RTE.SU.$7(RTE.ShortcutKeys.$u)) {
        return;
    }
    RTE.ShortcutKeys.$u = {};
    var $v_0;

    $v_0 = SP.Res.keyboardShortcutUndo_Ctrl + SP.Res.keyboardShortcutUndo_Alt + SP.Res.keyboardShortcutUndo_Shift + SP.Res.keyboardShortcutUndo_AccessKey;
    RTE.ShortcutKeys.$u[$v_0] = 'Undo';
    $v_0 = SP.Res.keyboardShortcutRedo_Ctrl + SP.Res.keyboardShortcutRedo_Alt + SP.Res.keyboardShortcutRedo_Shift + SP.Res.keyboardShortcutRedo_AccessKey;
    RTE.ShortcutKeys.$u[$v_0] = 'Redo';
    $v_0 = SP.Res.keyboardShortcutSelectAll_Ctrl + SP.Res.keyboardShortcutSelectAll_Alt + SP.Res.keyboardShortcutSelectAll_Shift + SP.Res.keyboardShortcutSelectAll_AccessKey;
    RTE.ShortcutKeys.$u[$v_0] = 'SelectAll';
    $v_0 = SP.Res.keyboardShortcutClearFormatting_Ctrl + SP.Res.keyboardShortcutClearFormatting_Alt + SP.Res.keyboardShortcutClearFormatting_Shift + SP.Res.keyboardShortcutClearFormatting_AccessKey;
    RTE.ShortcutKeys.$u[$v_0] = 'ClearFormatting';
    $v_0 = SP.Res.keyboardShortcutBold_Ctrl + SP.Res.keyboardShortcutBold_Alt + SP.Res.keyboardShortcutBold_Shift + SP.Res.keyboardShortcutBold_AccessKey;
    RTE.ShortcutKeys.$u[$v_0] = 'Bold';
    $v_0 = SP.Res.keyboardShortcutItalic_Ctrl + SP.Res.keyboardShortcutItalic_Alt + SP.Res.keyboardShortcutItalic_Shift + SP.Res.keyboardShortcutItalic_AccessKey;
    RTE.ShortcutKeys.$u[$v_0] = 'Italics';
    $v_0 = SP.Res.keyboardShortcutUnderline_Ctrl + SP.Res.keyboardShortcutUnderline_Alt + SP.Res.keyboardShortcutUnderline_Shift + SP.Res.keyboardShortcutUnderline_AccessKey;
    RTE.ShortcutKeys.$u[$v_0] = 'Underline';
    $v_0 = SP.Res.keyboardShortcutIndent_Ctrl + SP.Res.keyboardShortcutIndent_Alt + SP.Res.keyboardShortcutIndent_Shift + SP.Res.keyboardShortcutIndent_AccessKey;
    RTE.ShortcutKeys.$u[$v_0] = 'IncreaseIndent';
    $v_0 = SP.Res.keyboardShortcutOutdent_Ctrl + SP.Res.keyboardShortcutOutdent_Alt + SP.Res.keyboardShortcutOutdent_Shift + SP.Res.keyboardShortcutOutdent_AccessKey;
    RTE.ShortcutKeys.$u[$v_0] = 'DecreaseIndent';
    $v_0 = SP.Res.keyboardShortcutLeftAlign_Ctrl + SP.Res.keyboardShortcutLeftAlign_Alt + SP.Res.keyboardShortcutLeftAlign_Shift + SP.Res.keyboardShortcutLeftAlign_AccessKey;
    RTE.ShortcutKeys.$u[$v_0] = 'AlignLeft';
    $v_0 = SP.Res.keyboardShortcutCenterAlign_Ctrl + SP.Res.keyboardShortcutCenterAlign_Alt + SP.Res.keyboardShortcutCenterAlign_Shift + SP.Res.keyboardShortcutCenterAlign_AccessKey;
    RTE.ShortcutKeys.$u[$v_0] = 'AlignCenter';
    $v_0 = SP.Res.keyboardShortcutRightAlign_Ctrl + SP.Res.keyboardShortcutRightAlign_Alt + SP.Res.keyboardShortcutRightAlign_Shift + SP.Res.keyboardShortcutRightAlign_AccessKey;
    RTE.ShortcutKeys.$u[$v_0] = 'AlignRight';
    $v_0 = SP.Res.keyboardShortcutMakeHyperlink_Ctrl + SP.Res.keyboardShortcutMakeHyperlink_Alt + SP.Res.keyboardShortcutMakeHyperlink_Shift + SP.Res.keyboardShortcutMakeHyperlink_AccessKey;
    RTE.ShortcutKeys.$u[$v_0] = 'InsertLink';
};
RTE.ShortcutKeys.getShortcut = function RTE_ShortcutKeys$getShortcut($p0) {
    var $v_0 = $p0.ctrlKey ? 't' : 'f';

    $v_0 += $p0.altKey ? 't' : 'f';
    $v_0 += $p0.shiftKey ? 't' : 'f';
    $v_0 += String.fromCharCode($p0.keyCode);
    return RTE.ShortcutKeys.$u[$v_0];
};
RTE.MovementKeys = function RTE_MovementKeys() {
};
RTE.MovementKeys.initializeDictionary = function RTE_MovementKeys$initializeDictionary() {
    if (!RTE.SU.$7(RTE.MovementKeys.$1B)) {
        return;
    }
    RTE.MovementKeys.$1B = {};
    RTE.MovementKeys.$1B[String.fromCharCode(9)] = null;
    RTE.MovementKeys.$1B[String.fromCharCode(37)] = null;
    RTE.MovementKeys.$1B[String.fromCharCode(39)] = null;
    RTE.MovementKeys.$1B[String.fromCharCode(38)] = null;
    RTE.MovementKeys.$1B[String.fromCharCode(40)] = null;
    RTE.MovementKeys.$1B[String.fromCharCode(36)] = null;
    RTE.MovementKeys.$1B[String.fromCharCode(35)] = null;
    RTE.MovementKeys.$1B[String.fromCharCode(34)] = null;
    RTE.MovementKeys.$1B[String.fromCharCode(33)] = null;
    RTE.MovementKeys.$1B[String.fromCharCode(127)] = null;
    RTE.MovementKeys.$1B[String.fromCharCode(8)] = null;
};
RTE.MovementKeys.isMovementKey = function RTE_MovementKeys$isMovementKey($p0) {
    return !RTE.SU.$1R(RTE.MovementKeys.$1B[String.fromCharCode($p0.keyCode)]);
};
RTE.SelectionClearingKeys = function RTE_SelectionClearingKeys() {
};
RTE.SelectionClearingKeys.initializeDictionary = function RTE_SelectionClearingKeys$initializeDictionary() {
    if (!RTE.SU.$7(RTE.SelectionClearingKeys.$11)) {
        return;
    }
    RTE.SelectionClearingKeys.$11 = {};
    RTE.SelectionClearingKeys.$11[String.fromCharCode(37)] = null;
    RTE.SelectionClearingKeys.$11[String.fromCharCode(39)] = null;
    RTE.SelectionClearingKeys.$11[String.fromCharCode(38)] = null;
    RTE.SelectionClearingKeys.$11[String.fromCharCode(40)] = null;
    RTE.SelectionClearingKeys.$11[String.fromCharCode(36)] = null;
    RTE.SelectionClearingKeys.$11[String.fromCharCode(35)] = null;
    RTE.SelectionClearingKeys.$11[String.fromCharCode(34)] = null;
    RTE.SelectionClearingKeys.$11[String.fromCharCode(33)] = null;
    RTE.SelectionClearingKeys.$11[String.fromCharCode(27)] = null;
    RTE.SelectionClearingKeys.$11[String.fromCharCode(16)] = null;
    RTE.SelectionClearingKeys.$11[String.fromCharCode(17)] = null;
    RTE.SelectionClearingKeys.$11[String.fromCharCode(18)] = null;
};
RTE.SelectionClearingKeys.isSelectionClearKey = function RTE_SelectionClearingKeys$isSelectionClearKey($p0) {
    return !$p0.ctrlKey && !$p0.altKey && RTE.SU.$1R(RTE.SelectionClearingKeys.$11[String.fromCharCode($p0.keyCode)]);
};
RTE.LayoutsEditor = function RTE_LayoutsEditor($p0) {
    this.$z_0 = $p0;
    this.$5G_0 = $p0.id;
    this.$S_0 = $p0.ownerDocument;
    this.$y_0 = [];
};
RTE.LayoutsEditor.create = function RTE_LayoutsEditor$create(region) {
    if (null === RTE.LayoutsEditor.$2m) {
        RTE.LayoutsEditor.$2m = {};
    }
    var $v_0 = null;

    if (null !== region) {
        $v_0 = new RTE.LayoutsEditor(region);
        $v_0.$Iw_0();
        RTE.LayoutsEditor.$2m[region.id] = $v_0;
    }
    return $v_0;
};
RTE.LayoutsEditor.getLayoutsEditorForRegion = function RTE_LayoutsEditor$getLayoutsEditorForRegion(region) {
    if (RTE.SU.$7(region) || RTE.SU.$7(RTE.LayoutsEditor.$2m)) {
        return null;
    }
    return RTE.LayoutsEditor.$2m[region.id];
};
RTE.LayoutsEditor.relayoutRegion = function RTE_LayoutsEditor$relayoutRegion(region, newNumColumns, newHasHeader, newHasFooter, hasSidebar) {
    if (!RTE.SU.$7(region)) {
        if (RTE.LayoutsEditor.$2m) {
            var $v_0 = RTE.LayoutsEditor.$2m[region.id];

            if (!RTE.SU.$7($v_0)) {
                $v_0.$Kc_0(newNumColumns, newHasHeader, newHasFooter, hasSidebar);
            }
            else {
                alert(SP.Res.layoutsNotSupported);
            }
        }
        else {
            alert(SP.Res.layoutsNotSupported);
        }
    }
};
RTE.LayoutsEditor.prototype = {
    $5G_0: null,
    $z_0: null,
    $S_0: null,
    $1Y_0: null,
    $j_0: null,
    $1J_0: false,
    $1S_0: false,
    $I_0: 0,
    $1k_0: null,
    $1j_0: null,
    $y_0: null,
    $Iw_0: function RTE_LayoutsEditor$$Iw_0() {
        this.$1Y_0 = $get(this.$5G_0 + '_layoutsData');
        this.$j_0 = $get(this.$5G_0 + '_layoutsTable');
        if (null === this.$1Y_0 || null === this.$j_0 || this.$j_0.tagName !== 'TABLE') {
            if (this.$1Y_0) {
                SP.UI.UIUtility.removeNode(this.$1Y_0);
            }
            if (this.$j_0) {
                this.$BY_0(this.$j_0);
            }
            this.$1J_0 = false;
            this.$1S_0 = false;
            this.$I_0 = 1;
            var $v_0 = RTE.LayoutsZone.$5N(this.$S_0);

            RTE.RteUtility.$k(this.$z_0, $v_0.$h_0);
            $v_0.$E8_0();
            this.$y_0[0] = $v_0;
            this.$7v_0();
            this.$1Y_0 = this.$S_0.createElement('SPAN');
            this.$1Y_0.id = this.$5G_0 + '_layoutsData';
            this.$1Y_0.style.display = 'none';
            SP.UI.UIUtility.setInnerText(this.$1Y_0, 'false,false,1');
            this.$z_0.appendChild(this.$j_0);
            this.$z_0.appendChild(this.$1Y_0);
            if (!RTE.SU.$2(this.$z_0.style.minHeight)) {
                $v_0.set_$Ji_0(this.$z_0.style.minHeight);
            }
        }
        else {
            this.validateLayouts();
        }
    },
    $7v_0: function RTE_LayoutsEditor$$7v_0() {
        this.$j_0 = this.$S_0.createElement('TABLE');
        this.$j_0.style.width = '100%';
        this.$j_0.id = this.$5G_0 + '_layoutsTable';
        var $v_0 = this.$S_0.createElement('TBODY');

        this.$j_0.appendChild($v_0);
        var $v_1;

        if (this.$1J_0) {
            $v_1 = this.$S_0.createElement('TR');
            $v_0.appendChild($v_1);
            this.$1k_0.$1m_0.colSpan = this.$I_0;
            $v_1.style.verticalAlign = 'top';
            $v_1.appendChild(this.$1k_0.$1m_0);
        }
        $v_1 = this.$S_0.createElement('TR');
        $v_1.style.verticalAlign = 'top';
        $v_0.appendChild($v_1);
        for (var $v_2 = 0; $v_2 < this.$I_0; $v_2++) {
            $v_1.appendChild(this.$y_0[$v_2].$1m_0);
        }
        if (this.$1S_0) {
            $v_1 = this.$S_0.createElement('TR');
            $v_0.appendChild($v_1);
            this.$1j_0.$1m_0.colSpan = this.$I_0;
            $v_1.style.verticalAlign = 'top';
            $v_1.appendChild(this.$1j_0.$1m_0);
        }
    },
    validateLayouts: function RTE_LayoutsEditor$validateLayouts() {
        var $v_0 = this.$1Y_0.innerHTML;
        var $v_1 = $v_0.split(',');

        this.$1J_0 = 'true' === ($v_1[0].trim()).toLowerCase();
        this.$1S_0 = 'true' === ($v_1[1].trim()).toLowerCase();
        this.$I_0 = parseInt($v_1[2].trim());
        if (isNaN(this.$I_0) || this.$I_0 < 1) {
            this.$I_0 = 1;
        }
        if (this.$I_0 > 3) {
            this.$I_0 = 3;
        }
        this.$Lk_0();
    },
    $BY_0: function RTE_LayoutsEditor$$BY_0($p0) {
        var $v_0 = $p0.childNodes;

        if ($v_0.length) {
            var $v_2 = $v_0[0];

            while ($v_2) {
                $v_2 = this.$BY_0($v_2);
            }
        }
        var $v_1 = $p0;

        if ($p0.id && ($p0.id.indexOf('layoutsTable') >= 0 || $p0.id.indexOf('layoutsData') >= 0) || $p0.className && ($p0.className.indexOf('ms-rtestate-write') >= 0 || $p0.className.indexOf('ms-rte-layoutszone-inner-editable') >= 0 || $p0.className.indexOf('ms-rte-layoutszone-inner') >= 0 || $p0.className.indexOf('ms-rte-layoutszone-outer') >= 0)) {
            $v_1 = $p0.lastChild;
            RTE.RteUtility.removeNodeAndKeepChildNodes($p0);
        }
        $v_1 = $v_1.nextSibling;
        return $v_1;
    },
    $Lk_0: function RTE_LayoutsEditor$$Lk_0() {
        var $v_0;
        var $v_1 = 0;

        if (this.$1J_0) {
            $v_0 = this.$j_0.rows[$v_1++];
            this.$1k_0 = RTE.LayoutsZone.$71($v_0.cells[0]);
            if (!this.$1k_0) {
                this.$1J_0 = false;
            }
        }
        $v_0 = this.$j_0.rows[$v_1];
        if ($v_0.cells.length === this.$I_0) {
            this.$y_0 = [];
            var $v_3 = 0;

            for (var $v_4 = 0; $v_4 < $v_0.cells.length; $v_4++) {
                this.$y_0[$v_3] = RTE.LayoutsZone.$71($v_0.cells[$v_4]);
                if (!this.$y_0[$v_3]) {
                    $v_3--;
                    this.$I_0--;
                }
                $v_3++;
            }
        }
        else {
            if ($v_0.cells.length < this.$I_0) {
                this.$I_0 = $v_0.cells.length;
            }
            else {
                if ($v_0.cells.length >= 3) {
                    this.$I_0 = 3;
                }
                else {
                    this.$I_0 = $v_0.cells.length;
                }
            }
            var $v_5 = 0;

            for (var $v_6 = 0; $v_6 < this.$I_0; $v_6++) {
                this.$y_0[$v_6] = RTE.LayoutsZone.$71($v_0.cells[$v_6]);
                if (!this.$y_0[$v_5]) {
                    $v_5--;
                    this.$I_0--;
                }
                $v_5++;
            }
        }
        if (this.$I_0 < 1) {
            this.$I_0 = 1;
            this.$y_0[0] = RTE.LayoutsZone.$5N(this.$j_0.ownerDocument);
        }
        $v_1++;
        if (this.$1S_0) {
            $v_0 = this.$j_0.rows[$v_1++];
            this.$1j_0 = RTE.LayoutsZone.$71($v_0.cells[0]);
            if (!this.$1j_0) {
                this.$1S_0 = false;
            }
        }
        var $v_2 = this.$j_0;

        this.$7v_0();
        $v_2.parentNode.replaceChild(this.$j_0, $v_2);
        SP.UI.UIUtility.setInnerText(this.$1Y_0, this.$1J_0 + ',' + this.$1S_0 + ',' + this.$I_0.toString());
    },
    get_parentLayoutsContainer: function RTE_LayoutsEditor$get_parentLayoutsContainer() {
        return this.$j_0;
    },
    $Kc_0: function RTE_LayoutsEditor$$Kc_0($p0, $p1, $p2, $p3) {
        if ($p0 < 0 || $p0 > 3) {
            throw Error.argumentOutOfRange('newNumColumns');
        }
        var $v_0 = this.$1J_0;
        var $v_1 = this.$1S_0;
        var $v_2 = this.$I_0;
        var $v_3 = this.$1k_0;
        var $v_4 = this.$1j_0;
        var $v_5 = this.$y_0;
        var $v_6 = this.$j_0;
        var $v_7 = [];

        if (this.$1J_0) {
            $v_7[0] = this.$1k_0;
        }
        for (var $v_A = 0; $v_A < this.$I_0; $v_A++) {
            $v_7[1 + $v_A] = this.$y_0[$v_A];
        }
        if (this.$1S_0) {
            $v_7[4] = this.$1j_0;
        }
        this.$1J_0 = $p1;
        this.$1S_0 = $p2;
        this.$I_0 = $p0;
        if (isNaN(this.$I_0) || this.$I_0 < 1) {
            this.$I_0 = $v_2;
        }
        var $v_8 = [];

        if (this.$1J_0) {
            this.$1k_0 = RTE.LayoutsZone.$5N(this.$S_0);
            $v_8[0] = this.$1k_0;
        }
        for (var $v_B = 0; $v_B < this.$I_0; $v_B++) {
            this.$y_0[$v_B] = RTE.LayoutsZone.$5N(this.$S_0);
            $v_8[$v_B + 1] = this.$y_0[$v_B];
        }
        if (this.$1S_0) {
            this.$1j_0 = RTE.LayoutsZone.$5N(this.$S_0);
            $v_8[4] = this.$1j_0;
        }
        for (var $v_C = 0; $v_C < 5; $v_C++) {
            var $v_D = $v_7[$v_C];
            var $v_E = $v_8[$v_C];

            if (!RTE.SU.$7($v_D) && !RTE.SU.$7($v_E)) {
                $v_D.$5Q_0($v_E, true);
            }
        }
        for (var $v_F = 0; $v_F < 5; $v_F++) {
            var $v_G = $v_7[$v_F];
            var $v_H = $v_8[$v_F];

            if (!RTE.SU.$7($v_G) && RTE.SU.$7($v_H)) {
                var $v_I = null;
                var $v_J = 0;
                var $v_K = null;
                var $v_L = 0;

                for ($v_J = 0; $v_F - $v_J >= 0; $v_J++) {
                    $v_I = $v_8[$v_F - $v_J];
                    if (!RTE.SU.$7($v_I)) {
                        break;
                    }
                }
                for ($v_L = 0; $v_F + $v_L < 5; $v_L++) {
                    $v_K = $v_8[$v_F + $v_L];
                    if (!RTE.SU.$7($v_K)) {
                        break;
                    }
                }
                if ($v_I && $v_K) {
                    if ($v_J <= $v_L) {
                        $v_G.$5Q_0($v_I, true);
                    }
                    else {
                        $v_G.$5Q_0($v_K, false);
                    }
                }
                else if ($v_I) {
                    $v_G.$5Q_0($v_I, true);
                }
                else if ($v_K) {
                    $v_G.$5Q_0($v_K, false);
                }
            }
        }
        var $v_9 = null;

        if (this.$1J_0) {
            $v_9 = this.$1k_0;
            this.$1k_0.$1m_0.colSpan = this.$I_0;
        }
        if (!this.$1J_0 && !this.$1S_0 && 1 === this.$I_0) {
            var $v_M = this.$y_0[0];

            $v_M.$E8_0();
            if (!$v_9) {
                $v_9 = $v_M;
            }
        }
        else {
            $p3 = $p3 && 2 === this.$I_0;
            for (var $v_N = 0; $v_N < this.$I_0; $v_N++) {
                var $v_O = this.$y_0[$v_N];

                $v_O.$L5_0($v_N, this.$I_0, $p3);
                if (!$v_9) {
                    $v_9 = $v_O;
                }
            }
        }
        if (this.$1S_0) {
            this.$1j_0.$1m_0.colSpan = this.$I_0;
            if (!$v_9) {
                $v_9 = this.$1j_0;
            }
        }
        this.$7v_0();
        $v_6.parentNode.replaceChild(this.$j_0, $v_6);
        SP.UI.UIUtility.setInnerText(this.$1Y_0, this.$1J_0 + ',' + this.$1S_0 + ',' + this.$I_0.toString());
        if ($v_9) {
            (RTE.Cursor.get_range()).$Jl_0($v_9.$h_0);
            RTE.Cursor.update();
        }
    },
    $Bo_0: function RTE_LayoutsEditor$$Bo_0() {
        var $v_0;

        if (this.$1J_0) {
            $v_0 = this.$1k_0.$h_0;
        }
        else if (this.$I_0 > 0) {
            $v_0 = this.$y_0[0].$h_0;
        }
        else {
            $v_0 = this.$1j_0.$h_0;
        }
        return $v_0;
    }
};
RTE.LayoutsZone = function RTE_LayoutsZone($p0, $p1, $p2, $p3) {
    this.$S_0 = $p0;
    this.$1m_0 = $p1;
    this.$D3_0 = $p2;
    this.$h_0 = $p3;
    Sys.UI.DomElement.addCssClass($p3, 'ms-rtestate-write');
    RTE.Canvas.makeRegionEditable($p3);
    this.$D3_0.style.width = '100%';
};
RTE.LayoutsZone.$5N = function RTE_LayoutsZone$$5N($p0) {
    var $v_0 = $p0.createElement('TD');
    var $v_1 = $p0.createElement('DIV');
    var $v_2 = $p0.createElement('DIV');

    $v_1.appendChild($v_2);
    Sys.UI.DomElement.addCssClass($v_2, 'ms-rte-layoutszone-inner-editable');
    Sys.UI.DomElement.addCssClass($v_1, 'ms-rte-layoutszone-outer');
    $v_0.appendChild($v_1);
    var $v_3 = new RTE.LayoutsZone($p0, $v_0, $v_1, $v_2);

    return $v_3;
};
RTE.LayoutsZone.$71 = function RTE_LayoutsZone$$71($p0) {
    if (!$p0) {
        return null;
    }
    if ($p0.tagName !== 'TD') {
        return null;
    }
    var $v_0 = $p0;

    $p0 = $v_0.firstChild;
    var $v_1 = document.createElement('DIV');

    Sys.UI.DomElement.addCssClass($v_1, 'ms-rte-layoutszone-outer');
    var $v_2 = document.createElement('DIV');

    Sys.UI.DomElement.addCssClass($v_2, 'ms-rte-layoutszone-inner-editable');
    if (!$p0) {
        $v_0.appendChild($v_1);
        $v_1.appendChild($v_2);
        return new RTE.LayoutsZone(window.document, $v_0, $v_1, $v_2);
    }
    else {
        $p0 = RTE.LayoutsZone.$DY($v_0.childNodes, $v_1);
        $v_0.appendChild($p0);
    }
    if (!$p0.firstChild) {
        $v_0.appendChild($v_1);
        $v_1.appendChild($v_2);
        return new RTE.LayoutsZone($p0.ownerDocument, $v_0, $v_1, $v_2);
    }
    else {
        $v_1.appendChild(RTE.LayoutsZone.$DY($v_1.childNodes, $v_2));
    }
    var $v_3 = new RTE.LayoutsZone($p0.ownerDocument, $v_0, $v_1, $v_2);

    return $v_3;
};
RTE.LayoutsZone.$DY = function RTE_LayoutsZone$$DY($p0, $p1) {
    var $v_0 = $p0[0];

    while ($v_0) {
        if (!RTE.LayoutsZone.$JV($v_0)) {
            if ('DIV' === $v_0.tagName && $v_0.className && (Sys.UI.DomElement.containsCssClass($v_0, 'ms-rte-layoutszone-inner') || Sys.UI.DomElement.containsCssClass($v_0, 'ms-rte-layoutszone-inner-editable') || Sys.UI.DomElement.containsCssClass($v_0, 'ms-rte-layoutszone-outer'))) {
                RTE.RteUtility.$k($v_0, $p1);
                RTE.RteUtility.$J($v_0);
            }
            else {
                $p1.appendChild($v_0);
            }
        }
        else {
            RTE.RteUtility.$J($v_0);
        }
        $v_0 = $p0[0];
    }
    return $p1;
};
RTE.LayoutsZone.$JV = function RTE_LayoutsZone$$JV($p0) {
    return SP.UI.UIUtility.isTextNode($p0) && (RTE.SU.$7($p0.nodeValue) || RTE.SU.$2($p0.nodeValue.trim()));
};
RTE.LayoutsZone.prototype = {
    $S_0: null,
    $1m_0: null,
    $D3_0: null,
    $h_0: null,
    $5Q_0: function RTE_LayoutsZone$$5Q_0($p0, $p1) {
        var $v_0 = !$p0.$h_0.childNodes.length;

        if ($p1) {
            if (!$v_0) {
                $p0.$7l_0(this.$S_0.createElement('BR'));
                $p0.$7l_0(this.$S_0.createElement('BR'));
            }
            while (this.$h_0.childNodes.length > 0) {
                $p0.$7l_0(this.$h_0.childNodes[0]);
            }
        }
        else {
            if (!$v_0) {
                $p0.$h_0.insertBefore(this.$S_0.createElement('BR'), $p0.$h_0.firstChild);
                $p0.$h_0.insertBefore(this.$S_0.createElement('BR'), $p0.$h_0.firstChild);
            }
            while (this.$h_0.childNodes.length > 0) {
                $p0.$h_0.insertBefore(this.$h_0.lastChild, $p0.$h_0.firstChild);
            }
        }
    },
    get_$Ji_0: function RTE_LayoutsZone$get_$Ji_0() {
        return this.$h_0.style.minHeight;
    },
    set_$Ji_0: function RTE_LayoutsZone$set_$Ji_0($p0) {
        this.$h_0.style.minHeight = $p0;
        return $p0;
    },
    $7l_0: function RTE_LayoutsZone$$7l_0($p0) {
        this.$h_0.appendChild($p0);
    },
    $E8_0: function RTE_LayoutsZone$$E8_0() {
        this.$1m_0.style.width = '100%';
    },
    $L5_0: function RTE_LayoutsZone$$L5_0($p0, $p1, $p2) {
        var $v_0;

        if ($p2 && 0 === $p0) {
            $v_0 = 66.6;
        }
        else if ($p2 && 1 === $p0) {
            $v_0 = 33.3;
        }
        else {
            $v_0 = 99.9 / $p1;
        }
        this.$1m_0.style.width = $v_0.toString() + '%';
        if ($p0 > 0) {
            this.$1m_0.className = 'ms-wiki-columnSpacing';
        }
    }
};
RTE.NodeDictionaryCache = function RTE_NodeDictionaryCache() {
    this.$7e_0 = {};
};
RTE.NodeDictionaryCache.prototype = {
    addEntry: function RTE_NodeDictionaryCache$addEntry($p0, $p1) {
        if (RTE.RteUtility.isValidRteNodeId($p0)) {
            var $v_0 = RTE.RteUtility.getRteNodeId($p0);

            this.$7e_0[$v_0] = $p1;
        }
    },
    getEntry: function RTE_NodeDictionaryCache$getEntry($p0) {
        if (RTE.RteUtility.isValidRteNodeId($p0)) {
            var $v_0 = RTE.RteUtility.getRteNodeId($p0);

            return this.$7e_0[$v_0];
        }
        return null;
    },
    clearEntry: function RTE_NodeDictionaryCache$clearEntry($p0) {
        if (RTE.RteUtility.isValidRteNodeId($p0)) {
            var $v_0 = RTE.RteUtility.getRteNodeId($p0);

            delete this.$7e_0[$v_0];
        }
    }
};
RTE.DialogUtility = function RTE_DialogUtility() {
};
RTE.DialogUtility.$Cr = function RTE_DialogUtility$$Cr($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
    if (!$p5) {
        $p5 = {};
    }
    $p5['Dialog'] = $p1;
    if (!$p2) {
        $p5['FirstLine'] = 'false';
    }
    RTE.DialogUtility.$Cs($p0, $p3, $p4, $p5, $p6, $p7, $p8);
};
RTE.DialogUtility.$Cs = function RTE_DialogUtility$$Cs($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
    RTE.RteUtility.classMustExist('SP.UI.ModalDialog');
    RTE.RteUtility.classMustExist('SP.PageContextInfo');
    var $v_0 = new SP.UI.DialogOptions();

    if ($p6 > 0) {
        $v_0.autoSizeStartWidth = $p6;
    }
    $v_0.autoSize = true;
    $v_0.showMaximized = $p5;
    var $v_1 = SP.PageContextInfo.get_currentLanguage();

    $v_0.url = SP.Utilities.Utility.get_layoutsLatestVersionUrl() + $p0 + '?UseDivDialog=true&LCID=' + $v_1.toString();
    if (!RTE.SU.$7($p3)) {
        var $$dict_9 = $p3;

        for (var $$key_A in $$dict_9) {
            var $v_2 = {
                key: $$key_A,
                value: $$dict_9[$$key_A]
            };
            var $v_3 = '&' + SP.Utilities.HttpUtility.urlKeyValueEncode($v_2.key) + '=' + SP.Utilities.HttpUtility.urlKeyValueEncode($v_2.value.toString());

            $v_0.url = $v_0.url + $v_3;
        }
    }
    if (!$p1) {
        $v_0.url = $v_0.url + '&seed=' + (Math.random()).toString();
    }
    $v_0.args = $p2;
    $v_0.dialogReturnValueCallback = $p4;
    if (RTE.SU.$2(RTE.DialogUtility.$2n)) {
        RTE.DialogUtility.$2n = SP.PageContextInfo.get_webServerRelativeUrl();
        if (RTE.DialogUtility.$2n.endsWith('/')) {
            RTE.DialogUtility.$2n = RTE.DialogUtility.$2n.substring(0, RTE.DialogUtility.$2n.length - 1);
        }
    }
    $v_0.url = RTE.DialogUtility.$2n + $v_0.url;
    SP.UI.ModalDialog.showModalDialog($v_0);
};
RTE.InsertLinkDialog = function RTE_InsertLinkDialog() {
    this.$$d_$JA_0 = Function.createDelegate(this, this.$JA_0);
};
RTE.InsertLinkDialog.prototype = {
    show: function RTE_InsertLinkDialog$show() {
        var $v_0 = new RTE.InsertLinkDialogArguments();

        $v_0.allowRelativeLinks = false;
        $v_0.text = (RTE.Cursor.get_range()).get_text();
        RTE.DialogUtility.$Cr('RteDialog.aspx', 'CreateLink', true, true, $v_0, null, this.$$d_$JA_0, false, 300);
    },
    $JA_0: function RTE_InsertLinkDialog$$JA_0($p0, $p1) {
        if ($p0 === 1) {
            var $v_0 = $p1;
            var $v_1 = $v_0[0];
            var $v_2 = $v_0[1];

            if (RTE.RteUtility.$Cj($v_2, false)) {
                var $v_3 = RTE.Cursor.get_range();
                var $v_4 = $v_3.parentElement();

                if (!$v_4) {
                    return;
                }
                var $v_5 = $v_4.ownerDocument.createElement('A');

                $v_5.href = $v_2;
                if ($v_3.isEmpty()) {
                    SP.UI.UIUtility.setInnerText($v_5, $v_1.trim() !== '' ? $v_1 : $v_2);
                    $v_3.insertBefore($v_5);
                }
                else {
                    if (RTE.Cursor.getSelectedImage()) {
                        $v_5.title = $v_1;
                    }
                    else if ($v_1.trim() !== '') {
                        $v_3.replaceHtml($v_1);
                    }
                    $v_3.wrapRange($v_5);
                }
                $v_3.moveToEndOfNode($v_5);
                RTE.Cursor.update();
                RTE.RteUtility.showRibbonTab('Ribbon.Link', 'LinkTab');
            }
        }
    }
};
RTE.InsertHtmlDialog = function RTE_InsertHtmlDialog($p0, $p1, $p2) {
    this.$$d_$J8_0 = Function.createDelegate(this, this.$J8_0);
    this.$8x_0 = $p0;
    this.$5B_0 = $p1;
    this.$Jf_0 = $p2;
    this.$5H_0 = 'UploadImage' === $p1 ? true : false;
};
RTE.InsertHtmlDialog.prototype = {
    $8x_0: null,
    $5B_0: null,
    $Jf_0: false,
    $5H_0: false,
    show: function RTE_InsertHtmlDialog$show() {
        var $v_0 = {};

        $v_0['Source'] = unescapeProperly(GetSource());
        $v_0['AssetPageFolder'] = 'true';
        var $v_1 = 300;

        if (this.$5B_0 === 'UploadImage') {
            $v_0['Title'] = SP.Res.imageUploadTitle;
            $v_0['DefaultList'] = 'Asset';
        }
        if (this.$8x_0 === 'Upload.aspx') {
            $v_1 = 0;
        }
        RTE.DialogUtility.$Cs(this.$8x_0, false, null, $v_0, this.$$d_$J8_0, false, $v_1);
    },
    $J8_0: function RTE_InsertHtmlDialog$$J8_0($p0, $p1) {
        if ($p0 === 1) {
            var $v_0 = $p1;
            var $v_1 = RTE.CanvasEvents.getNodeFromEvent('Image');

            if (this.$5H_0 && $v_1 && $v_1.parentNode && $v_1.parentNode) {
                $v_1.src = $v_0.newFileUrl;
                (RTE.Cursor.get_range()).moveToNode($v_1);
                RTE.Cursor.update();
            }
            else {
                var $v_2 = document.createElement('SPAN');

                $v_2.appendChild(this.$FG_0($v_0));
                (RTE.Cursor.get_range()).replaceWithChildren($v_2);
                if (this.$5B_0 === 'UploadImage') {
                    $v_1 = RTE.Cursor.getSelectedImage();
                    if ($v_1) {
                        RTE.RteUtility.initImage($v_1);
                    }
                    RTE.Cursor.update();
                }
                else {
                    (RTE.Cursor.get_range()).collapse(false);
                }
            }
            if ('UploadImage' === this.$5B_0) {
                RTE.RteUtility.showRibbonTab('Ribbon.Image', 'ImageTab');
            }
        }
    },
    $FG_0: function RTE_InsertHtmlDialog$$FG_0($p0) {
        switch (this.$5B_0) {
        case 'UploadImage':
            var $v_0 = document.createElement('IMG');

            $v_0.src = $p0.newFileUrl;
            $v_0.alt = this.$Bn_0($p0.newFileUrl);
            return $v_0;
        case 'UploadDocument':
            var $v_1 = document.createElement('A');

            $v_1.href = $p0.newFileUrl;
            if (!RTE.SU.$2($p0.newFileIcon)) {
                var $v_2 = document.createElement('IMG');

                $v_2.className = 'ms-asset-icon ms-rtePosition-4';
                $v_2.src = SP.Utilities.Utility.getImageUrl($p0.newFileIcon);
                $v_1.appendChild($v_2);
            }
            $v_1.appendChild(document.createTextNode(this.$Bn_0($p0.newFileUrl)));
            return $v_1;
        }
        throw Error.invalidOperation('Not supported');
    },
    $Bn_0: function RTE_InsertHtmlDialog$$Bn_0($p0) {
        var $v_0 = $p0.lastIndexOf('/');

        if ($v_0 > 0) {
            $p0 = $p0.substr($v_0 + 1);
        }
        return $p0;
    }
};
RTE.InsertImageDialog = function RTE_InsertImageDialog($p0) {
    this.$$d_$J9_0 = Function.createDelegate(this, this.$J9_0);
    this.$5H_0 = $p0;
};
RTE.InsertImageDialog.prototype = {
    $5H_0: false,
    show: function RTE_InsertImageDialog$show() {
        var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Image');
        var $v_1 = this.$5H_0 && null !== $v_0;
        var $v_2 = null;

        if ($v_1) {
            $v_2 = {};
            $v_2['Param1'] = $v_0.src;
            $v_2['Param2'] = $v_0.alt;
        }
        RTE.DialogUtility.$Cr('RteDialog.aspx', 'InsertImage', true, true, null, $v_1 ? $v_2 : null, this.$$d_$J9_0, false, 300);
    },
    $J9_0: function RTE_InsertImageDialog$$J9_0($p0, $p1) {
        if ($p0 === 1) {
            var $v_0 = $p1;
            var $v_1 = $v_0[0];
            var $v_2 = $v_0[1];

            if (RTE.RteUtility.$Cj($v_1, false)) {
                var $v_3 = RTE.CanvasEvents.getNodeFromEvent('Image');

                if (this.$5H_0 && null !== $v_3) {
                    $v_3.src = $v_1;
                    $v_3.alt = $v_2;
                }
                else {
                    var $v_4 = RTE.Cursor.get_range();

                    $v_4.deleteContent();
                    var $v_5 = $v_4.parentElement();

                    if (!$v_5) {
                        return;
                    }
                    $v_3 = $v_5.ownerDocument.createElement('IMG');
                    RTE.RteUtility.initImage($v_3);
                    $v_3.src = $v_1;
                    $v_3.alt = $v_2;
                    $v_4.insertNode($v_3);
                }
                if ($v_3) {
                    (RTE.Cursor.get_range()).moveToNode($v_3);
                    RTE.RteUtility.showRibbonTab('Ribbon.Image', 'ImageTab');
                    RTE.Cursor.update();
                }
            }
            RTE.Canvas.$P();
        }
    }
};
RTE.ObjectCommands = function RTE_ObjectCommands() {
};
RTE.ObjectCommands.insertHtmlFromDialog = function RTE_ObjectCommands$insertHtmlFromDialog($p0, $p1, $p2) {
    var $v_0 = RTE.Cursor.get_range();

    if (!$v_0.get_isEditable()) {
        return;
    }
    if (!$v_0.canDeleteContent()) {
        return;
    }
    var $v_1 = new RTE.InsertHtmlDialog($p0, $p1, $p2);

    $v_1.show();
};
RTE.ObjectCommands.insertImage = function RTE_ObjectCommands$insertImage($p0) {
    var $v_0 = RTE.Cursor.get_range();

    if (!$v_0.get_isEditable()) {
        return;
    }
    if (!$v_0.canDeleteContent()) {
        return;
    }
    var $v_1 = new RTE.InsertImageDialog($p0);

    $v_1.show();
};
RTE.ObjectCommands.insertLink = function RTE_ObjectCommands$insertLink() {
    var $v_0 = RTE.Cursor.get_range();

    if (!$v_0.get_isEditable()) {
        return;
    }
    var $v_1 = new RTE.InsertLinkDialog();

    $v_1.show();
};
RTE.ParagraphCommands = function RTE_ParagraphCommands() {
};
RTE.ParagraphCommands.$JC = function RTE_ParagraphCommands$$JC($p0, $p1) {
    switch ($p0) {
    case 2:
        return $p1 === 'center' || $p1 === '-moz-center';
    case 3:
        return $p1 === 'justify';
    case 0:
        return $p1 === 'left' || $p1 === '-moz-left';
    case 1:
        return $p1 === 'right' || $p1 === '-moz-right';
    }
    return false;
};
RTE.ParagraphCommands.queryAlign = function RTE_ParagraphCommands$queryAlign($p0) {
    var $v_0 = new RTE.CommandState();
    var $v_1 = RTE.Cursor.getCurrentElement();

    if ($v_1) {
        $v_0.$B_0 = true;
        var $v_2 = (RTE.RteUtility.$1c((RTE.Cursor.get_range()).$4_0)).textAlign;

        $v_0.$1I_0 = RTE.ParagraphCommands.$JC($p0, $v_2);
    }
    return $v_0;
};
RTE.ParagraphCommands.setDirection = function RTE_ParagraphCommands$setDirection($p0) {
    var $v_0 = $p0 ? 'ltr' : 'rtl';

    RTE.ParagraphCommands.$9k('direction', $v_0, 'dir', true);
    var $v_1 = $p0 ? 'left' : 'right';

    RTE.ParagraphCommands.$9k('textAlign', $v_1, 'align', false);
};
RTE.ParagraphCommands.$9k = function RTE_ParagraphCommands$$9k($p0, $p1, $p2, $p3) {
    var $v_0 = RTE.Cursor.get_range();

    if (!$v_0.get_isEditable()) {
        return false;
    }
    var $v_1 = RTE.Cursor.$IM();

    if (!RTE.Canvas.isEditable($v_1)) {
        return false;
    }
    var $v_2 = $p3 ? $p2 : $p0;

    if ($v_0.isEmpty()) {
        $v_1 = RTE.RteUtility.$6K($v_0.$4_0, true);
        if ($p0 === 'direction') {
            RTE.ParagraphCommands.$9u($v_1);
        }
        RTE.ParagraphCommands.$7k($v_1, $v_2, $p1, $p3);
    }
    else {
        var $v_3 = (RTE.Cursor.get_range()).$4_0;
        var $v_4 = (RTE.Cursor.get_range()).$3_0;
        var $v_5 = RTE.RteUtility.$m($v_4, false);

        if ($v_5 && $v_5.nodeType === 1 && $v_5.tagName === 'BR') {
            $v_5.parentNode.insertBefore($v_4, $v_5);
        }
        var $v_6 = new RTE.DOMTreePosition($v_3, 0);

        while ($v_6.$1_0) {
            var $v_7 = RTE.RteUtility.$6K($v_6.$1_0, true);

            RTE.ParagraphCommands.$86($v_7, $p0, $p2, true);
            if ($p0 === 'direction') {
                RTE.ParagraphCommands.$9u($v_7);
            }
            RTE.ParagraphCommands.$7k($v_7, $v_2, $p1, $p3);
            RTE.ParagraphCommands.$7t($v_7.parentNode, $v_2, $p1, $p2, $v_2, $p3);
            $v_6.setCurrentNode($v_7);
            $v_6.setLocationAtEnd();
            if (RTE.RteUtility.$b($v_4, $v_7, $v_1)) {
                break;
            }
            while ($v_6.atEnd() && !RTE.RteUtility.$b($v_4, $v_6.$1_0, $v_1) && $v_6.$1_0 !== $v_4) {
                $v_6.moveToNextElement();
            }
            if ($v_6.$1_0.firstChild === $v_4 || $v_6.$1_0 === $v_4) {
                break;
            }
            $v_6.normalize();
        }
    }
    RTE.ParagraphCommands.$7t($v_1, $v_2, $p1, $p2, $v_2, $p3);
    (RTE.Cursor.get_range()).resetCacheRange();
    RTE.Cursor.update();
    return true;
};
RTE.ParagraphCommands.$9u = function RTE_ParagraphCommands$$9u($p0) {
    if ($p0.style && $p0.style.cssText) {
        var $v_0 = $p0.style.cssText.toLowerCase();

        if ($v_0.indexOf('right') !== -1 || $v_0.indexOf('left') !== -1 || $v_0.indexOf('rtl') !== -1 || $v_0.indexOf('ltr') !== -1) {
            $v_0 = $v_0.replace('right', 'ms-oldright');
            $v_0 = $v_0.replace('left', 'right');
            $v_0 = $v_0.replace('ms-oldright', 'left');
            $v_0 = $v_0.replace('rtl', 'ms-oldrtl');
            $v_0 = $v_0.replace('ltr', 'rtl');
            $v_0 = $v_0.replace('ms-oldrtl', 'ltr');
            $p0.style.cssText = $v_0;
            RTE.SnapshotManager.setCurrentRegionDirty();
        }
    }
    for (var $v_1 = 0; $v_1 < $p0.childNodes.length; $v_1++) {
        RTE.ParagraphCommands.$9u($p0.childNodes[$v_1]);
    }
};
RTE.ParagraphCommands.$7k = function RTE_ParagraphCommands$$7k($p0, $p1, $p2, $p3) {
    var $v_0 = $p3 ? $p0 : $p0.style;
    var $v_1 = $v_0[$p1];

    $v_0[$p1] = $p2;
    RTE.SnapshotManager.setCurrentRegionDirtyIf($v_1 !== $p2);
};
RTE.ParagraphCommands.$Eq = function RTE_ParagraphCommands$$Eq($p0, $p1, $p2, $p3, $p4) {
    for (var $v_0 = 0; $v_0 < $p0.childNodes.length; $v_0++) {
        var $v_1 = $p0.childNodes[$v_0];

        if ($p4) {
            var $v_2 = $v_1[$p3];

            if ($v_2 !== $p2) {
                return false;
            }
        }
        else {
            if (!$v_1.style) {
                $v_1 = $v_1.parentNode;
            }
            var $v_3 = $v_1.style[$p1];

            if ($v_3 !== $p2) {
                return false;
            }
        }
    }
    return true;
};
RTE.ParagraphCommands.$7t = function RTE_ParagraphCommands$$7t($p0, $p1, $p2, $p3, $p4, $p5) {
    if (!RTE.Canvas.isEditable($p0.parentNode)) {
        return;
    }
    var $v_0 = RTE.ParagraphCommands.$Eq($p0, $p1, $p2, $p3, $p5);

    if (!$v_0 && ($p3 !== 'direction' || $p3 === 'direction' && $p0.tagName !== 'OL' && $p0.tagName !== 'UL')) {
        return;
    }
    for (var $v_1 = 0; $v_1 < $p0.childNodes.length; $v_1++) {
        var $v_2 = $p0.childNodes[$v_1];

        RTE.ParagraphCommands.$86($v_2, $p1, $p3, false);
    }
    RTE.ParagraphCommands.$7k($p0, $p4, $p2, $p5);
    RTE.ParagraphCommands.$7t($p0.parentNode, $p1, $p2, $p3, $p4, $p5);
};
RTE.ParagraphCommands.$86 = function RTE_ParagraphCommands$$86($p0, $p1, $p2, $p3) {
    if ($p0.nodeType === 1) {
        if ($p3 && $p0.childNodes.length > 0) {
            for (var $v_0 = 0; $v_0 < $p0.childNodes.length; $v_0++) {
                RTE.ParagraphCommands.$86($p0.childNodes[$v_0], $p1, $p2, $p3);
            }
        }
        if (!RTE.SU.$2($p0.style[$p1])) {
            $p0.style[$p1] = '';
        }
        if (!RTE.SU.$2($p2) && $p0.getAttribute($p2)) {
            $p0.removeAttribute($p2);
        }
    }
};
RTE.ParagraphCommands.queryDirection = function RTE_ParagraphCommands$queryDirection($p0) {
    var $v_0 = new RTE.CommandState();
    var $v_1 = RTE.Cursor.getCurrentElement();

    if (!$v_1) {
        return $v_0;
    }
    $v_0.$B_0 = true;
    var $v_2 = RTE.RteUtility.$1c((RTE.Cursor.get_range()).$4_0);

    if ($p0) {
        $v_0.$1I_0 = $v_2.direction === 'ltr';
    }
    else {
        $v_0.$1I_0 = $v_2.direction === 'rtl';
    }
    return $v_0;
};
RTE.ParagraphCommands.queryBulletedList = function RTE_ParagraphCommands$queryBulletedList() {
    return RTE.Canvas.$BP('InsertUnorderedList');
};
RTE.ParagraphCommands.bulletedList = function RTE_ParagraphCommands$bulletedList() {
    RTE.ParagraphCommands.$Bd('UL', 'InsertUnorderedList');
};
RTE.ParagraphCommands.queryNumberedList = function RTE_ParagraphCommands$queryNumberedList() {
    return RTE.Canvas.$BP('InsertOrderedList');
};
RTE.ParagraphCommands.numberedList = function RTE_ParagraphCommands$numberedList() {
    RTE.ParagraphCommands.$Bd('OL', 'InsertOrderedList');
};
RTE.ParagraphCommands.$Bd = function RTE_ParagraphCommands$$Bd($p0, $p1) {
    if (!RTE.ParagraphCommands.$Ij($p0)) {
        var $v_0 = null;

        try {
            if (RTE.RteUtility.isFirefox()) {
                var $v_1 = RTE.Canvas.currentEditableRegion();

                if ($v_1) {
                    $v_0 = document.createElement('DIV');
                    $v_0.style.height = '0px';
                    $v_0.style.width = '0px';
                    $v_1.insertBefore($v_0, $v_1.firstChild);
                }
            }
            RTE.Canvas.$8N($p1);
        }
        finally {
            if ($v_0 && $v_0.parentNode) {
                $v_0.parentNode.removeChild($v_0);
            }
        }
        RTE.ParagraphCommands.$Hn();
    }
    RTE.Canvas.$P();
};
RTE.ParagraphCommands.$Hn = function RTE_ParagraphCommands$$Hn() {
    var $v_0 = RTE.RteUtility.$2d(RTE.Cursor.s_range.$4_0, ['UL', 'OL']);

    if ($v_0 && RTE.Canvas.isEditable($v_0)) {
        while ($v_0.parentNode.tagName === 'UL' || $v_0.parentNode.tagName === 'OL') {
            $v_0 = $v_0.parentNode;
        }
        var $v_1 = $v_0.parentNode;

        if ($v_1.firstChild === $v_0 && $v_1.lastChild === $v_0 && RTE.HtmlTagName.allowedElementStyleTags[$v_1.tagName.toUpperCase()]) {
            if (!$v_0.dir) {
                $v_0.dir = $v_1.dir;
            }
            if (!$v_0.className) {
                $v_0.className = $v_1.className;
            }
            if (!$v_0.style.cssText) {
                $v_0.style.cssText = $v_1.style.cssText;
            }
            RTE.RteUtility.removeNodeAndKeepChildNodes($v_1);
            RTE.Cursor.update();
        }
    }
};
RTE.ParagraphCommands.$Ij = function RTE_ParagraphCommands$$Ij($p0) {
    if ((RTE.Cursor.get_range()).isValid()) {
        var $v_0 = RTE.RteUtility.$G(RTE.Cursor.s_range.$4_0, 'LI');
        var $v_1 = RTE.RteUtility.$G(RTE.Cursor.s_range.$3_0, 'LI');

        if ($v_0 && $v_1 && RTE.Canvas.isInEditable($v_0) && RTE.Canvas.isInEditable($v_1)) {
            var $v_2 = $v_0.parentNode;
            var $v_3 = $v_1.parentNode;

            while ($v_2.parentNode.tagName === $p0) {
                $v_2 = $v_2.parentNode;
            }
            while ($v_3.parentNode.tagName === $p0) {
                $v_3 = $v_3.parentNode;
            }
            if ($v_2.tagName === $p0 && $v_2 === $v_3) {
                for (var $v_4 = 0; $v_4 < $v_2.childNodes.length; $v_4++) {
                    var $v_5 = $v_2.childNodes[$v_4];

                    if ($v_5.tagName === 'LI') {
                        var $v_6 = $v_5.ownerDocument.createElement('P');

                        RTE.RteUtility.$k($v_5, $v_6);
                        $v_5 = $v_6;
                        var $v_7 = RTE.RteUtility.$1e($v_5, false);

                        if ($v_7 && $v_7.nodeType === 1 && $v_7.tagName === 'BR') {
                            $v_5.removeChild($v_7);
                        }
                    }
                    if (!RTE.RteUtility.$3w($v_5, true)) {
                        SP.UI.UIUtility.insertBefore($v_5, $v_2);
                    }
                }
                $v_2.parentNode.removeChild($v_2);
                RTE.Cursor.update();
                return true;
            }
        }
    }
    return false;
};
RTE.ParagraphCommands.indent = function RTE_ParagraphCommands$indent($p0) {
    if ($p0) {
        RTE.Canvas.$8N('Indent');
    }
    else {
        RTE.Canvas.$8N('Outdent');
    }
};
RTE.ParagraphCommands.align = function RTE_ParagraphCommands$align($p0) {
    var $v_0 = null;

    if ($p0 === 2) {
        $v_0 = 'center';
    }
    else if ($p0 === 3) {
        $v_0 = 'justify';
    }
    else if (!$p0) {
        $v_0 = 'left';
    }
    else if ($p0 === 1) {
        $v_0 = 'right';
    }
    if (RTE.SU.$2($v_0)) {
        return;
    }
    RTE.ParagraphCommands.$9k('textAlign', $v_0, 'align', false);
    RTE.Canvas.$P();
};
RTE.PasteFlyout = function RTE_PasteFlyout($p0, $p1) {
    this.$$d_$Hq_0 = Function.createDelegate(this, this.$Hq_0);
    this.$30_0 = $p0;
    this.$A8_0 = $p1;
};
RTE.PasteFlyout.$LL = function RTE_PasteFlyout$$LL($p0, $p1) {
    if (RTE.PasteFlyout.$W) {
        RTE.PasteFlyout.$W.$CB_0(true);
    }
    RTE.PasteFlyout.$W = new RTE.PasteFlyout($p0, $p1);
    RTE.PasteFlyout.$W.$LM_0();
};
RTE.PasteFlyout.expandOptions = function RTE_PasteFlyout$expandOptions() {
    if (RTE.PasteFlyout.$W) {
        RTE.PasteFlyout.$W.$BQ_0();
    }
};
RTE.PasteFlyout.collapseOptions = function RTE_PasteFlyout$collapseOptions() {
    if (RTE.PasteFlyout.$W) {
        RTE.PasteFlyout.$W.$89_0(false);
    }
};
RTE.PasteFlyout.hide = function RTE_PasteFlyout$hide() {
    RTE.PasteFlyout.$CD(false);
};
RTE.PasteFlyout.$CD = function RTE_PasteFlyout$$CD($p0) {
    if (RTE.PasteFlyout.$W) {
        RTE.PasteFlyout.$W.$CB_0($p0);
        RTE.PasteFlyout.$W = null;
    }
};
RTE.PasteFlyout.get_isVisible = function RTE_PasteFlyout$get_isVisible() {
    return !!RTE.PasteFlyout.$W;
};
RTE.PasteFlyout.$JH = function RTE_PasteFlyout$$JH($p0) {
    if (RTE.PasteFlyout.$W) {
        return RTE.PasteFlyout.$W.$HP_0($p0);
    }
    return false;
};
RTE.PasteFlyout.$JU = function RTE_PasteFlyout$$JU($p0) {
    if ($p0.nodeType === 1) {
        var $v_0 = $p0.tagName.toUpperCase();

        if ($v_0 === 'TABLE') {
            return true;
        }
        if ($v_0 === 'FONT') {
            return false;
        }
        if (RTE.RteUtility.$N($p0)) {
            return false;
        }
        if (RTE.RteUtility.$4v($p0)) {
            return false;
        }
    }
    return !RTE.RteUtility.$3w($p0, true);
};
RTE.PasteFlyout.prototype = {
    $30_0: null,
    $A8_0: null,
    $16_0: null,
    $q_0: null,
    $1q_0: null,
    $e_0: null,
    $17_0: null,
    $5r_0: null,
    $A4_0: null,
    $A9_0: null,
    $LM_0: function RTE_PasteFlyout$$LM_0() {
        this.$17_0 = RTE.Canvas.$37(RTE.Canvas.currentEditableRegion());
        if (!this.$16_0 && this.$17_0) {
            this.$16_0 = this.$17_0.ownerDocument.createElement('DIV');
            this.$16_0.style.position = 'relative';
            this.$16_0.style.width = '0px';
            this.$16_0.style.height = '0px';
            var $v_0 = RTE.RteUtility.$1c(this.$17_0.parentNode);
            var $v_1 = !!$v_0 && $v_0.direction === 'rtl';

            if ($v_1) {
                this.$16_0.style.right = this.$17_0.offsetWidth + 'px';
            }
            var $$t_E = this;

            $addHandler(this.$16_0, 'mousedown', function($p1_0) {
                SP.UI.UIUtility.cancelEvent($p1_0);
                return false;
            });
            this.$17_0.parentNode.insertBefore(this.$16_0, this.$17_0);
            this.$FE_0();
            this.$FF_0();
            var $v_2 = this.$IL_0();
            var $v_3 = null;

            if (!RTE.RteUtility.$N($v_2)) {
                $v_3 = document.createElement('SPAN');
                $v_3.className = 'ms-rtegenerate-skip';
                SP.UI.UIUtility.insertAfter($v_3, $v_2);
                $v_3.appendChild($v_2);
                $v_2 = $v_3;
            }
            var $v_4 = RTE.RteUtility.$8V($v_2);
            var $v_5 = RTE.RteUtility.$8V(this.$17_0);
            var $v_6 = $v_4.x - $v_5.x + (!$v_1 ? 10 + $v_2.offsetWidth : -10);
            var $v_7 = $v_4.y + $v_2.offsetHeight - $v_5.y;
            var $v_8 = this.$q_0.clientHeight + this.$e_0.clientHeight;
            var $v_9 = Math.max(Math.max(this.$q_0.clientWidth, this.$q_0.scrollWidth), Math.max(this.$e_0.clientWidth, this.$e_0.scrollWidth));

            if ($v_3) {
                RTE.RteUtility.removeNodeAndKeepChildNodes($v_3);
            }
            var $v_A = RTE.RteUtility.$IY(this.$16_0);
            var $v_B = RTE.RteUtility.$6O(window.self);
            var $v_C = RTE.RteUtility.$6N(window.self);

            $v_B = Math.min($v_B, $v_5.x + this.$17_0.offsetWidth - $v_A.x);
            $v_C = Math.min($v_C, $v_5.y + this.$17_0.offsetHeight - $v_A.y);
            $v_6 = Math.min($v_6, $v_A.x + $v_B - 30 - $v_5.x + (!$v_1 ? -$v_9 : 0));
            $v_6 = Math.max($v_6, $v_A.x + 10 + (!$v_1 ? 0 : $v_9));
            $v_7 = Math.min($v_7, $v_A.y + $v_C - $v_8 - 10 - $v_5.y);
            $v_7 = Math.max($v_7, $v_A.y + 10 - $v_5.y);
            this.$q_0.style.top = $v_7 + 'px';
            this.$e_0.style.top = $v_7 + this.$q_0.clientHeight + 'px';
            if (!$v_1) {
                this.$q_0.style.left = $v_6 + 'px';
                this.$e_0.style.left = $v_6 + 'px';
            }
            else {
                this.$q_0.style.right = -$v_6 + 'px';
                this.$e_0.style.right = -$v_6 + 'px';
            }
            this.$89_0(false);
        }
    },
    $CB_0: function RTE_PasteFlyout$$CB_0($p0) {
        if (this.$16_0) {
            if (this.$q_0) {
                RTE.RteUtility.$J(this.$q_0);
                this.$q_0 = null;
            }
            if (this.$e_0) {
                RTE.RteUtility.$J(this.$e_0);
                this.$e_0 = null;
            }
            RTE.RteUtility.$J(this.$16_0);
            this.$16_0 = null;
            this.$1q_0 = null;
            if (!$p0) {
                if (RTE.SnapshotManager.$1z(this.$17_0)) {
                    RTE.SnapshotManager.takeEditableRegionSnapshot(this.$17_0);
                }
                RTE.Cursor.$L.clear();
            }
        }
    },
    $BQ_0: function RTE_PasteFlyout$$BQ_0() {
        if (this.$e_0) {
            this.$e_0.style.display = '';
            RTE.Cursor.updateRangeToCurrentSelectionWithOptions(true);
            if (this.$5r_0) {
                this.$5r_0.focus();
            }
        }
    },
    $89_0: function RTE_PasteFlyout$$89_0($p0) {
        if (this.$e_0) {
            this.$e_0.style.display = 'none';
            if ($p0) {
                RTE.Cursor.select();
            }
        }
    },
    $HP_0: function RTE_PasteFlyout$$HP_0($p0) {
        if (this.$16_0) {
            while ($p0) {
                if ($p0 === this.$16_0) {
                    return true;
                }
                $p0 = $p0.parentNode;
            }
        }
        return false;
    },
    $FE_0: function RTE_PasteFlyout$$FE_0() {
        this.$q_0 = this.$17_0.ownerDocument.createElement('DIV');
        this.$q_0.id = 'rtePasteFlyout';
        this.$q_0.className = 'ms-cui-menu ms-noWrap';
        this.$q_0.style.position = 'absolute';
        var $v_0 = document.createElement('DIV');

        $v_0.className = 'ms-cui-menusection';
        this.$q_0.appendChild($v_0);
        this.$1q_0 = document.createElement('A');
        this.$1q_0.id = 'rtePasteFlyoutLink';
        this.$1q_0.className = 'ms-cui-ctl';
        this.$1q_0.href = 'javascript:;';
        $v_0.appendChild(this.$1q_0);
        var $$t_5 = this;

        $addHandler(this.$1q_0, 'click', function($p1_0) {
            $$t_5.$BQ_0();
            SP.UI.UIUtility.cancelEvent($p1_0);
            return false;
        });
        var $v_1 = RTE.RibbonReferences.$4b(RTE.RibbonReferences.$9I, '-199', '-235', 16, 16);

        $v_1.id = 'rtePasteFlyoutImg';
        $v_1.className = 'ms-cui-img-16by16 ms-cui-img-cont-float';
        this.$1q_0.appendChild($v_1);
        var $v_2 = document.createElement('SPAN');

        $v_2.id = 'rtePasteFlyoutText';
        $v_2.appendChild(document.createTextNode(SP.Res.pasteFlyoutExpand));
        this.$1q_0.appendChild($v_2);
        var $v_3 = RTE.RibbonReferences.$4b(RTE.RibbonReferences.$BH, '-27', '-35', 5, 3);

        $v_3.id = 'rtePasteFlyoutArrow';
        $v_3.className = 'ms-cui-img-5by3 ms-cui-img-cont-float';
        this.$1q_0.appendChild($v_3);
        this.$16_0.appendChild(this.$q_0);
    },
    $FF_0: function RTE_PasteFlyout$$FF_0() {
        this.$e_0 = document.createElement('DIV');
        this.$e_0.id = 'rtePasteFlyoutOptions';
        this.$e_0.className = 'ms-cui-menu ms-noWrap';
        this.$e_0.style.position = 'absolute';
        $addHandler(this.$e_0, 'keydown', this.$$d_$Hq_0);
        var $v_0 = document.createElement('DIV');

        $v_0.className = 'ms-cui-smenu-inner';
        this.$e_0.appendChild($v_0);
        var $v_1 = document.createElement('DIV');

        $v_1.className = 'ms-cui-menusection';
        $v_0.appendChild($v_1);
        var $v_2 = document.createElement('DIV');

        $v_2.className = 'ms-cui-menusection-title';
        $v_2.appendChild(document.createTextNode(SP.Res.pasteFlyoutPasteOptions));
        $v_1.appendChild($v_2);
        var $v_3 = RTE.RtePasteManager.get_pasteModes();

        for (var $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
            var $v_5 = $v_3[$v_4];
            var $v_6 = this.$A8_0 === $v_5.id;
            var $v_7 = document.createElement('A');

            $v_7.title = $v_5.flyoutTooltip || $v_5.displayName;
            $v_7.id = 'rtePasteFlyoutOption' + $v_4;
            $v_7.className = 'ms-cui-ctl ms-rtePasteFlyout-option' + ($v_6 ? ' ms-cui-ctl-on' : '');
            $v_7.href = 'javascript:;';
            $v_7.setAttribute('PasteModeId', $v_5.id);
            $v_1.appendChild($v_7);
            var $v_8 = $v_5.flyoutIcon.cloneNode(true);

            $v_8.className = 'ms-cui-img-cont-float';
            var $v_9 = $v_8;

            while ($v_9 && $v_9.nodeType === 1 && $v_9.tagName.toUpperCase() !== 'IMG') {
                $v_9 = $v_9.firstChild;
            }
            if ($v_9 && $v_9.nodeType === 1 && $v_9.tagName.toUpperCase() === 'IMG') {
                $v_9.alt = $v_7.title;
            }
            $v_7.appendChild($v_8);
            var $$t_D = this;

            $addHandler($v_7, 'click', function($p1_0) {
                var $v_A = RTE.RteUtility.$G($p1_0.target, 'A');

                if ($v_A) {
                    var $v_B = $v_A.getAttribute('PasteModeId');

                    if (!RTE.SU.$2($v_B)) {
                        $$t_D.$AR_0($v_B);
                    }
                }
                SP.UI.UIUtility.cancelEvent($p1_0);
                return false;
            });
            if ($v_6 || !this.$5r_0) {
                this.$5r_0 = $v_7;
            }
            if (!$v_4) {
                this.$A4_0 = $v_7;
            }
            if ($v_4 === $v_3.length - 1) {
                this.$A9_0 = $v_7;
            }
        }
        SP.UI.UIUtility.insertAfter(this.$e_0, this.$q_0);
    },
    $Hq_0: function RTE_PasteFlyout$$Hq_0($p0) {
        if ($p0.keyCode === 39 || $p0.keyCode === 37) {
            var $v_2 = $p0.keyCode === 39;
            var $v_3 = $p0.target;

            if ($v_3 && $v_3.nodeType === 1 && $v_3.tagName.toUpperCase() === 'A') {
                var $v_4 = $v_3;

                do {
                    $v_4 = $v_2 ? RTE.RteUtility.$t($v_4, false) : RTE.RteUtility.$m($v_4, false);
                } while ($v_4 && ($v_4.nodeType !== 1 || $v_4.tagName.toUpperCase() !== 'A'));
                if (!$v_4) {
                    $v_4 = $v_2 ? this.$A4_0 : this.$A9_0;
                }
                if ($v_4) {
                    $v_4.focus();
                    SP.UI.UIUtility.cancelEvent($p0);
                }
            }
            return;
        }
        if ($p0.keyCode === 27) {
            this.$89_0(true);
            SP.UI.UIUtility.cancelEvent($p0);
            return;
        }
        var $v_0 = (String.fromCharCode($p0.keyCode)).toUpperCase();

        if ($p0.ctrlKey && $v_0 === 'A') {
            SP.UI.UIUtility.cancelEvent($p0);
            return;
        }
        var $v_1 = RTE.RtePasteManager.get_pasteModes();

        for (var $v_5 = 0; $v_5 < $v_1.length; $v_5++) {
            var $v_6 = $v_1[$v_5];

            if ($v_6 && !RTE.SU.$2($v_6.flyoutShortcutKey) && $v_6.flyoutShortcutKey.toUpperCase() === $v_0) {
                SP.UI.UIUtility.cancelEvent($p0);
                this.$AR_0($v_6.id);
                return;
            }
        }
    },
    $AR_0: function RTE_PasteFlyout$$AR_0($p0) {
        this.$30_0.style.width = '1px';
        this.$30_0.style.height = '1px';
        this.$30_0.style.overflow = 'hidden';
        document.body.appendChild(this.$30_0);
        var $$t_1 = this;

        RTE.RtePasteManager.$9K(this.$30_0, true, $p0, function() {
            RTE.Cursor.s_range.clear();
            RTE.Cursor.$L.replaceWithChildren($$t_1.$30_0);
            RTE.Cursor.s_range.moveBeforeNode(RTE.Cursor.$L.$3_0);
            RTE.Cursor.update();
            RTE.ClientWebPartManager.replaceRenderNodesToCurrent();
        });
    },
    $IL_0: function RTE_PasteFlyout$$IL_0() {
        var $v_0 = RTE.Cursor.$L.$3_0;

        do {
            $v_0 = $v_0.lastChild || RTE.RteUtility.$m($v_0, false) || RTE.RteUtility.$m($v_0.parentNode, false);
        } while ($v_0 && $v_0 !== this.$17_0 && !RTE.PasteFlyout.$JU($v_0));
        if (!$v_0 || $v_0 === this.$17_0 || $v_0 === RTE.Cursor.$L.$4_0) {
            $v_0 = RTE.Cursor.$L.$3_0;
        }
        return $v_0;
    }
};
RTE.RtePasteManager = function RTE_RtePasteManager() {
};
RTE.RtePasteManager.registerPasteMode = function RTE_RtePasteManager$registerPasteMode(mode) {
    RTE.RtePasteManager.$6D();
    RTE.RtePasteManager.$34[mode.id] = mode;
};
RTE.RtePasteManager.removePasteMode = function RTE_RtePasteManager$removePasteMode(pasteModeId) {
    RTE.RtePasteManager.$6D();
    delete RTE.RtePasteManager.$34[pasteModeId];
};
RTE.RtePasteManager.get_pasteModes = function RTE_RtePasteManager$get_pasteModes() {
    RTE.RtePasteManager.$6D();
    var $v_0 = new Array(0);
    var $$dict_1 = RTE.RtePasteManager.$34;

    for (var $$key_2 in $$dict_1) {
        var $v_1 = {
            key: $$key_2,
            value: $$dict_1[$$key_2]
        };

        Array.add($v_0, $v_1.value);
    }
    return $v_0;
};
RTE.RtePasteManager.getPasteMode = function RTE_RtePasteManager$getPasteMode(pasteModeId) {
    RTE.RtePasteManager.$6D();
    if (!RTE.SU.$2(pasteModeId)) {
        return RTE.RtePasteManager.$34[pasteModeId] || null;
    }
    return null;
};
RTE.RtePasteManager.cancelCurrentPaste = function RTE_RtePasteManager$cancelCurrentPaste() {
    if (RTE.RtePasteManager.$2D) {
        RTE.RtePasteManager.$2D.cancel();
    }
    if (RTE.RtePasteManager.$3k) {
        RTE.RteUtility.removeChildNodes(RTE.RtePasteManager.$3k);
        RTE.RtePasteManager.$3k = null;
    }
    RTE.Cursor.$1g();
};
RTE.RtePasteManager.pasteModeResolver = function RTE_RtePasteManager$pasteModeResolver(container) {
    if ((container.getElementsByTagName('o:p')).length > 0) {
        return 'PasteClean';
    }
    if (container.querySelectorAll) {
        var $v_0 = container.querySelectorAll('p, h1, h2, h3, b, i, u, table');

        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            var $v_3 = $v_2.getAttribute('style');

            if (!RTE.SU.$7($v_3) && $v_3.indexOf('mso-') > -1) {
                return 'PasteClean';
            }
        }
    }
    return 'PasteAsIs';
};
RTE.RtePasteManager.$9K = function RTE_RtePasteManager$$9K($p0, $p1, $p2, $p3) {
    RTE.PasteFlyout.$CD(true);
    var $v_0 = RTE.Canvas.currentEditableRegion() || RTE.Cursor.s_range.getEditableRegion();
    var $v_1 = RTE.Canvas.getCachedRestriction($v_0, 'RestrictPasteToText', false) || RTE.Canvas.getCachedRestriction($v_0, 'DisableRibbonCommands', false);

    RTE.RtePasteManager.$2D = !$v_1 ? RTE.RtePasteManager.$IP($p2, $p0) : null;
    if (!$p1) {
        try {
            RTE.RtePasteManager.$Dy($p0);
        }
        catch ($$e_6) {
            RTE.RteUtility.removeChildNodes($p0);
        }
    }
    if ($v_1) {
        RTE.Canvas.$4n($p0);
        if ($p3) {
            $p3();
        }
        return;
    }
    RTE.RtePasteManager.$3k = $p0;
    var $v_2 = document.createElement('DIV');

    $v_2.innerHTML = $p0.innerHTML;
    var $v_3 = !$p0.firstChild || $p0.firstChild === $p0.lastChild && RTE.RteUtility.$3w($p0.firstChild, false);
    var $v_4 = !$v_3 && $p0.firstChild === $p0.lastChild && SP.UI.UIUtility.isTextNode($p0.firstChild);
    var $v_5 = RTE.RtePasteManager.$2D ? RTE.RtePasteManager.$2D.id : null;
    var $v_6 = new RTE.PasteOperationArgs();

    $v_6.showFlyoutAfterOperation = !$v_3 && (RTE.RtePasteManager.get_pasteModes()).length > 1 && (!$v_4 || RTE.RtePasteManager.$Ip($p0));
    $v_6.isFlyoutOperation = $p1;
    $v_6.container = $p0;
    $v_6.editableRegion = $v_0;
    var $v_7 = false;
    var $v_8 = function() {
        $v_7 = true;
        RTE.RteUtility.removeRteNodeId(RTE.Cursor.s_range.$4_0);
        RTE.RteUtility.removeRteNodeId(RTE.Cursor.s_range.$3_0);
        RTE.RtePasteManager.$Fn($p0);
        if ($p3) {
            $p3();
        }
        RTE.RteUtility.forEachChildWithTagAndClass($v_0, 'TABLE', 'ms-rte-paste-settablesizes', function($p2_0) {
            Sys.UI.DomElement.removeCssClass($p2_0, 'ms-rte-paste-settablesizes');
            if (RTE.Canvas.setTableWidths) {
                RTE.TableCommands.$EG($p2_0);
            }
        });
        RTE.RteUtility.forEachChildWithTagAndClass($v_0, 'IMG', 'ms-rte-paste-setimagesize', function($p2_0) {
            Sys.UI.DomElement.removeCssClass($p2_0, 'ms-rte-paste-setimagesize');
            var $v_9 = $p2_0;

            RTE.RteUtility.initImage($p2_0);
            var $v_A = $p2_0.style.height;
            var $v_B = $v_9.getAttribute('height');

            if (!RTE.SU.$2($v_A) || !RTE.SU.$2($v_B)) {
                var $v_C = $v_9.width + 'px';
                var $v_D = $v_9.height;

                $p2_0.removeAttribute('height');
                $p2_0.style.height = '';
                if (Math.abs($v_D - $v_9.height) <= 2) {
                    $p2_0.removeAttribute('width');
                    $p2_0.style.width = $v_C;
                }
                else {
                    if (!RTE.SU.$2($v_B)) {
                        $p2_0.setAttribute('height', $v_B);
                    }
                    if (!RTE.SU.$2($v_A)) {
                        $p2_0.style.height = $v_A;
                    }
                }
            }
        });
        RTE.RtePasteManager.$2D = null;
        RTE.RtePasteManager.$3k = null;
        RTE.Cursor.$1g();
        if ($v_6.showFlyoutAfterOperation) {
            window.setTimeout(function() {
                RTE.PasteFlyout.$LL($v_2, $v_5);
            }, 0);
        }
    };

    if (!RTE.SU.$7(RTE.RtePasteManager.$2D)) {
        RTE.RtePasteManager.$2D.execute($v_6, $v_8);
    }
    else {
        $v_8();
    }
    if (!$v_7) {
        RTE.Cursor.$9s();
    }
};
RTE.RtePasteManager.$IP = function RTE_RtePasteManager$$IP($p0, $p1) {
    var $v_0 = RTE.RtePasteManager.getPasteMode($p0);

    if (!RTE.SU.$7($v_0)) {
        return $v_0;
    }
    var $v_1 = RTE.Canvas.getStringRestriction(RTE.Canvas.currentEditableRegion(), 'DefaultPasteModeResolver', null);

    $p0 = RTE.RtePasteManager.$JB($v_1, $p1);
    return RTE.RtePasteManager.getPasteMode($p0);
};
RTE.RtePasteManager.$JB = function RTE_RtePasteManager$$JB($p0, $p1) {
    var $v_0 = RTE.RtePasteManager.getPasteMode($p0);

    if (!RTE.SU.$7($v_0)) {
        return $v_0.id;
    }
    try {
        var $v_2;

        try {
            $v_2 = !RTE.SU.$2($p0) ? eval($p0) : null;
        }
        catch ($$e_4) {
            $v_2 = null;
        }
        if (!$v_2 || typeof $v_2 !== 'function') {
            $v_2 = RTE.RtePasteManager.pasteModeResolver;
        }
        var $v_3 = $v_2($p1);

        if (typeof $v_3 === 'string') {
            if (!RTE.SU.$7(RTE.RtePasteManager.getPasteMode($v_3))) {
                return $v_3;
            }
        }
    }
    catch ($$e_6) { }
    var $v_1 = RTE.RtePasteManager.get_pasteModes();

    if ($v_1.length > 0) {
        return $v_1[0].id;
    }
    return null;
};
RTE.RtePasteManager.$Dy = function RTE_RtePasteManager$$Dy($p0) {
    RTE.RteUtility.forEachChildWithTagAndClass($p0, 'o:p', null, function($p1_0) {
        do {
            var $v_0 = $p1_0.parentNode;

            RTE.RteUtility.removeNodeAndKeepChildNodes($p1_0);
            $p1_0 = $v_0;
        } while (!$p1_0.firstChild && $p1_0 !== $p0);
    });
    RTE.RteUtility.forEachChildWithTagAndClass($p0, null, 'ms-rtegenerate-allskip', RTE.RteUtility.$J);
    RTE.RteUtility.forEachChildWithTagAndClass($p0, null, 'ms-rtegenerate-skip', RTE.RteUtility.removeNodeAndKeepChildNodes);
    RTE.RteUtility.forEachChildWithTagAndClass($p0, null, 'ms-rtestate-write', function($p1_0) {
        var $v_1 = $p1_0.parentNode;

        while ($v_1 && $v_1 !== $p0) {
            if (Sys.UI.DomElement.containsCssClass($v_1, 'ms-rte-wpbox')) {
                return;
            }
            if (Sys.UI.DomElement.containsCssClass($v_1, 'ms-rtestate-write')) {
                break;
            }
            $v_1 = $v_1.parentNode;
        }
        Sys.UI.DomElement.removeCssClass($p1_0, 'ms-rtestate-write');
    });
    RTE.SafeHtml.$Ko($p0);
};
RTE.RtePasteManager.$Ip = function RTE_RtePasteManager$$Ip($p0) {
    var $v_0 = RTE.RtePasteManager.get_pasteModes();

    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        if ($v_0[$v_1].changesTextOnly($p0)) {
            return true;
        }
    }
    return false;
};
RTE.RtePasteManager.$6D = function RTE_RtePasteManager$$6D() {
    if (!RTE.RtePasteManager.$34) {
        RTE.RtePasteManager.$34 = {};
        RTE.RtePasteManager.registerPasteMode(new RTE.AsIsPasteMode());
        RTE.RtePasteManager.registerPasteMode(new RTE.CleanPasteMode());
        RTE.RtePasteManager.registerPasteMode(new RTE.PlainTextPasteMode());
    }
};
RTE.RtePasteManager.$Fn = function RTE_RtePasteManager$$Fn($p0) {
    if ($p0.querySelectorAll) {
        var $v_0 = $p0.querySelectorAll('p, h1, h2, h3, b, i, u, table');

        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            var $v_3 = $v_2.getAttribute('style');

            if (!RTE.SU.$7($v_3) && $v_3.indexOf('mso-') > -1) {
                var $v_4 = $v_3.split(';');
                var $v_5 = '';

                for (var $v_6 = 0; $v_6 < $v_4.length; $v_6++) {
                    if ($v_4[$v_6].indexOf('mso-') === -1) {
                        $v_5 += $v_4[$v_6] + ';';
                    }
                }
                $v_2.setAttribute('style', $v_5);
            }
        }
    }
};
RTE.PasteOperationArgs = function RTE_PasteOperationArgs() {
};
RTE.PasteOperationArgs.prototype = {
    container: null,
    isFlyoutOperation: false,
    showFlyoutAfterOperation: false,
    editableRegion: null
};
RTE.PasteMode = function RTE_PasteMode() {
};
RTE.PasteMode.$Dx = function RTE_PasteMode$$Dx($p0) {
    RTE.PasteMode.$7D($p0.lastChild);
    RTE.PasteMode.$7D($p0.firstChild);
    var $v_0 = $p0.firstChild;

    if ($v_0 && $v_0 === $p0.lastChild) {
        if ($v_0.nodeType === 1 && $v_0.tagName.toUpperCase() === 'P') {
            RTE.RteUtility.removeNodeAndKeepChildNodes($v_0);
            RTE.PasteMode.$7D($p0.lastChild);
            RTE.PasteMode.$7D($p0.firstChild);
        }
    }
};
RTE.PasteMode.$7D = function RTE_PasteMode$$7D($p0) {
    if ($p0 && $p0.nodeType === 1) {
        if ($p0.tagName.toUpperCase() === 'P') {
            var $v_0 = $p0.firstChild;
            var $v_1 = !$v_0;

            if (!$v_1 && $v_0 === $p0.lastChild && $v_0.nodeType === 1) {
                var $v_2 = $v_0.tagName.toUpperCase();

                if ($v_2 === 'BR' || $v_2 === 'DIV' && !$v_0.firstChild) {
                    $v_1 = true;
                }
            }
            if ($v_1) {
                RTE.RteUtility.$J($p0);
            }
        }
        else if ($p0.tagName.toUpperCase() === 'BR') {
            RTE.RteUtility.$J($p0);
        }
    }
};
RTE.PasteMode.prototype = {
    id: null,
    displayName: null,
    displayTooltipTitle: null,
    displayTooltipDescription: null,
    ribbonImage: null,
    ribbonImageLeft: null,
    ribbonImageTop: null,
    flyoutIcon: null,
    flyoutShortcutKey: null,
    flyoutTooltip: null,
    cancel: function RTE_PasteMode$cancel() {
    },
    changesTextOnly: function RTE_PasteMode$changesTextOnly(container) {
        return false;
    },
    appendRibbonButtonProperties: function RTE_PasteMode$appendRibbonButtonProperties(props) {
        props['LabelText'] = this.displayName;
        props['ToolTipTitle'] = this.displayTooltipTitle || this.displayName;
        props['ToolTipDescription'] = this.displayTooltipDescription || this.displayName;
        if (!RTE.SU.$2(this.ribbonImage)) {
            props['Image16by16'] = this.ribbonImage;
            if (!RTE.SU.$2(this.ribbonImageLeft)) {
                props['Image16by16Left'] = this.ribbonImageLeft;
            }
            if (!RTE.SU.$2(this.ribbonImageTop)) {
                props['Image16by16Top'] = this.ribbonImageTop;
            }
        }
    }
};
RTE.WordConverterPasteMode = function RTE_WordConverterPasteMode() {
    this.$$d_$Eo_1 = Function.createDelegate(this, this.$Eo_1);
    this.$$d_$KH_1 = Function.createDelegate(this, this.$KH_1);
    RTE.WordConverterPasteMode.initializeBase(this);
};
RTE.WordConverterPasteMode.prototype = {
    $5p_1: null,
    $2k_1: null,
    arguments: null,
    doneCallback: null,
    convertWordLists: true,
    execute: function RTE_WordConverterPasteMode$execute(args, done) {
        this.arguments = args;
        var $$t_2 = this;

        this.doneCallback = function() {
            if (!$$t_2.arguments.isFlyoutOperation && $$t_2.$5p_1 && $$t_2.$5p_1.$7i_0 > 0) {
                if (RTE.RteUtility.isClassAvailable('SP.UI.Notify')) {
                    SP.UI.Notify.addNotification('<b>' + SP.Res.pasteListConvertedTitle + ':</b> ' + SP.Res.pasteListConvertedText, false);
                }
            }
            if (done) {
                done();
            }
        };
        this.$2k_1 = new RTE.PasteCommon.SimpleOperation(null, this.$$d_$KH_1, null);
        this.$2k_1.$9Y_1();
    },
    $KH_1: function RTE_WordConverterPasteMode$$KH_1($p0, $p1) {
        this.$5p_1 = null;
        if (this.convertWordLists) {
            this.$5p_1 = new RTE.HtmlImport.WordConverter();
            this.$5p_1.process(this.arguments.container, $p0);
        }
        $p0.$63_1(this.$$d_$Eo_1);
        return true;
    },
    cancel: function RTE_WordConverterPasteMode$cancel() {
        if (this.$2k_1) {
            this.$2k_1.$FJ_1();
        }
        this.$2k_1 = null;
        this.arguments = null;
        this.doneCallback = null;
    }
};
RTE.AsIsPasteMode = function RTE_AsIsPasteMode() {
    this.$$d_$AP_2 = Function.createDelegate(this, this.$AP_2);
    RTE.AsIsPasteMode.initializeBase(this);
    this.id = 'PasteAsIs';
    this.displayName = SP.Res.pasteAsIsLabel;
    this.displayTooltipTitle = SP.Res.pasteAsIsTooltipTitle;
    this.displayTooltipDescription = SP.Res.pasteAsIsTooltipDescription;
    this.ribbonImage = RTE.RibbonReferences.$9I;
    this.ribbonImageLeft = '-199';
    this.ribbonImageTop = '-235';
    this.flyoutIcon = RTE.RibbonReferences.$4b(RTE.RibbonReferences.$Da, '-1', '-35', 24, 24);
    this.flyoutShortcutKey = SP.Res.pasteAsIsShortcut;
    this.flyoutTooltip = SP.Res.pasteAsIsLabelFlyout;
};
RTE.AsIsPasteMode.$Ch = function RTE_AsIsPasteMode$$Ch($p0) {
    var $v_0 = $p0.childNodes.length;

    for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
        var $v_2 = $p0.childNodes[$v_1];

        if (SP.UI.UIUtility.isTextNode($v_2)) {
            continue;
        }
        if ($v_2.nodeType === 1 && $v_2.tagName === 'A') {
            if ($v_2.firstChild && $v_2.firstChild === $v_2.lastChild && SP.UI.UIUtility.isTextNode($v_2.firstChild)) {
                var $v_3 = $v_2.firstChild.nodeValue;
                var $v_4 = $v_2.href;

                if ($v_3 === $v_4) {
                    continue;
                }
            }
        }
        return false;
    }
    return $v_0 > 0;
};
RTE.AsIsPasteMode.replaceTag = function RTE_AsIsPasteMode$replaceTag(container, srcTagName, srcClassName, trgTagName, trgClassName, trgStyle) {
    var $v_0 = null;

    RTE.RteUtility.forEachChildWithTagAndClass(container, srcTagName, srcClassName, function($p1_0) {
        if (!$v_0) {
            $v_0 = container.ownerDocument.createElement(trgTagName);
            if (!RTE.SU.$2(trgClassName)) {
                $v_0.className = trgClassName;
            }
            if (!RTE.SU.$2(trgStyle)) {
                $v_0.style.cssText = trgStyle;
            }
        }
        var $v_1 = $v_0.cloneNode(false);

        RTE.RteUtility.$k($p1_0, $v_1);
        $p1_0.parentNode.replaceChild($v_1, $p1_0);
    });
};
RTE.AsIsPasteMode.prototype = {
    convertIframes: true,
    $Eo_1: function RTE_AsIsPasteMode$$Eo_1($p0, $p1) {
        var $v_0 = this.arguments.container;

        if (this.convertIframes && RTE.AsIsPasteMode.$Ch($v_0)) {
            var $v_1;

            if (typeof $v_0.innerText === 'string') {
                $v_1 = $v_0.innerText;
            }
            else {
                $v_1 = $v_0.textContent;
            }
            var $v_2 = RTE.RteUtility.$4p($v_1);

            if ($v_2 && $v_2.length > 0) {
                try {
                    var $$t_B = this;

                    RTE.EmbeddingCommands.$7d($v_2, this.arguments.editableRegion, function($p1_0) {
                        try {
                            var $v_3 = true;

                            for (var $v_4 = 0; $v_4 < $v_2.length; $v_4++) {
                                $v_3 = $v_3 && $p1_0[$v_4];
                            }
                            if ($v_3) {
                                var $v_5 = RTE.EmbeddingCommands.$B2();

                                $v_5.innerHTML = $v_1;
                                RTE.RtePasteManager.$Dy($v_5);
                                RTE.RteUtility.removeChildNodes($v_0);
                                $v_0.appendChild($v_5);
                                RTE.EmbeddingCommands.moveEmbeddingBoxIntoEditMode($v_5);
                                $$t_B.arguments.showFlyoutAfterOperation = true;
                            }
                        }
                        catch ($$e_A) { }
                        $$t_B.$Al_2();
                    });
                    return false;
                }
                catch ($$e_5) { }
            }
        }
        $p0.$63_1(this.$$d_$AP_2);
        return true;
    },
    $AP_2: function RTE_AsIsPasteMode$$AP_2($p0, $p1) {
        this.$Al_2();
        return false;
    },
    $Al_2: function RTE_AsIsPasteMode$$Al_2() {
        var $v_0 = this.arguments.container;

        RTE.AsIsPasteMode.replaceTag($v_0, 'B', null, 'STRONG', null, null);
        RTE.AsIsPasteMode.replaceTag($v_0, 'I', null, 'EM', null, null);
        RTE.AsIsPasteMode.replaceTag($v_0, 'U', null, 'SPAN', null, 'text-decoration: underline;');
        RTE.PasteMode.$Dx($v_0);
        var $$t_3 = this;

        RTE.RteUtility.forEachChildWithTagAndClass($v_0, 'IMG', null, function($p1_0) {
            if (!RTE.Canvas.isSkipNode($p1_0)) {
                var $v_1 = $p1_0;

                if (RTE.SU.$2($v_1.src)) {
                    RTE.RteUtility.$J($p1_0);
                }
                else {
                    Sys.UI.DomElement.addCssClass($p1_0, 'ms-rte-paste-setimagesize');
                }
            }
        });
        this.$2k_1 = null;
        if (this.doneCallback) {
            this.doneCallback();
        }
    },
    changesTextOnly: function RTE_AsIsPasteMode$changesTextOnly(container) {
        if (RTE.AsIsPasteMode.$Ch(container)) {
            var $v_0;

            if (typeof container.innerText === 'string') {
                $v_0 = container.innerText;
            }
            else {
                $v_0 = container.textContent;
            }
            var $v_1 = RTE.RteUtility.$4p($v_0);

            if ($v_1 && $v_1.length > 0) {
                return true;
            }
        }
        return RTE.PasteMode.prototype.changesTextOnly.call(this, container);
    }
};
RTE.CleanPasteMode = function RTE_CleanPasteMode() {
    this.$$d_$AP_2 = Function.createDelegate(this, this.$AP_2);
    RTE.CleanPasteMode.initializeBase(this);
    this.id = 'PasteClean';
    this.displayName = SP.Res.pasteCleanLabel;
    this.displayTooltipTitle = SP.Res.pasteCleanTooltipTitle;
    this.displayTooltipDescription = SP.Res.pasteCleanTooltipDescription;
    this.ribbonImage = RTE.RibbonReferences.$Dc;
    this.ribbonImageLeft = '-217';
    this.ribbonImageTop = '-235';
    this.flyoutIcon = RTE.RibbonReferences.$4b(RTE.RibbonReferences.$Db, '-35', '-27', 24, 24);
    this.flyoutShortcutKey = SP.Res.pasteCleanShortcut;
    this.flyoutTooltip = SP.Res.pasteCleanLabelFlyout;
};
RTE.CleanPasteMode.$$cctor = function RTE_CleanPasteMode$$$cctor() {
    RTE.CleanPasteMode.passThroughClasses[RTE.CleanPasteMode.passThroughClasses.length] = 'ms-rte-wpbox';
    RTE.CleanPasteMode.passThroughClasses[RTE.CleanPasteMode.passThroughClasses.length] = 'ms-rte-embedcode';
};
RTE.CleanPasteMode.prototype = {
    $4f_2: null,
    convertWordQuotes: true,
    execute: function RTE_CleanPasteMode$execute(args, done) {
        var $$t_3 = this;

        RTE.RteUtility.forEachChildWithTagAndClass(args.container, 'STYLE', null, function($p1_0) {
            $p1_0.parentNode.removeChild($p1_0);
        });
        RTE.WordConverterPasteMode.prototype.execute.call(this, args, done);
    },
    $Eo_1: function RTE_CleanPasteMode$$Eo_1($p0, $p1) {
        var $v_0 = this.arguments.container;

        this.$4f_2 = $v_0.ownerDocument.createElement('DIV');
        var $v_1 = new RTE.RteHtmlPasteSteward(this.$4f_2);

        $v_1.$Ay_1 = this.convertWordQuotes;
        var $v_2 = new RTE.RteHtmlNormalizer($v_1);
        var $v_3 = new RTE.RteHtmlTranslator($v_2);

        $v_3.$4T_2 = RTE.CleanPasteMode.passThroughClasses;
        var $v_4 = new RTE.HtmlImport.HtmlProcessor($v_3);

        $v_4.registerNewTag('SPAN');
        var $v_5 = new RTE.PasteCommon.HtmlProcessorPercentage();

        $p0.set_$76_1($v_5.$$d_$Lb_0);
        $v_4.process($v_0, this.$2k_1);
        $p0.$63_1(this.$$d_$AP_2);
        return true;
    },
    $AP_2: function RTE_CleanPasteMode$$AP_2($p0, $p1) {
        var $v_0 = this.arguments.container;

        $p0.set_$76_1(null);
        this.$2k_1 = null;
        RTE.RteUtility.removeChildNodes($v_0);
        RTE.RteUtility.$k(this.$4f_2, $v_0);
        RTE.PasteMode.$Dx($v_0);
        if (this.doneCallback) {
            this.doneCallback();
        }
        this.arguments = null;
        this.$4f_2 = null;
        return false;
    },
    cancel: function RTE_CleanPasteMode$cancel() {
        RTE.WordConverterPasteMode.prototype.cancel.call(this);
        this.$4f_2 = null;
    }
};
RTE.PlainTextPasteMode = function RTE_PlainTextPasteMode() {
    RTE.PlainTextPasteMode.initializeBase(this);
    this.id = 'PastePlain';
    this.displayName = SP.Res.pastePlainLabel;
    this.displayTooltipTitle = SP.Res.pastePlainTooltipTitle;
    this.displayTooltipDescription = SP.Res.pastePlainTooltipDescription;
    this.ribbonImage = RTE.RibbonReferences.$De;
    this.ribbonImageLeft = '-249';
    this.ribbonImageTop = '-1';
    this.flyoutIcon = RTE.RibbonReferences.$4b(RTE.RibbonReferences.$Dd, '-35', '-1', 24, 24);
    this.flyoutShortcutKey = SP.Res.pastePlainShortcut;
    this.flyoutTooltip = SP.Res.pastePlainLabelFlyout;
};
RTE.PlainTextPasteMode.prototype = {
    execute: function RTE_PlainTextPasteMode$execute(args, done) {
        var $v_0 = args.container;

        RTE.ClientWebPartManager.$4m($v_0);
        var $v_1;

        try {
            if (typeof $v_0.innerText === 'string') {
                $v_1 = $v_0.innerText;
            }
            else {
                $v_1 = $v_0.textContent;
            }
        }
        catch ($$e_4) {
            var $v_2 = RTE.Range.createRange();

            $v_2.moveToElementText($v_0);
            $v_1 = $v_2.get_innerText();
        }
        $v_1 = RTE.RteUtility.htmlEncode($v_1);
        $v_1 = (($v_1.replace(RTE.PlainTextPasteMode.$AC, '')).replace(RTE.PlainTextPasteMode.$AD, '\n')).replace(RTE.PlainTextPasteMode.$AE, '<br/>');
        $v_1 = $v_1.replace(RTE.PlainTextPasteMode.$AF, ' ');
        RTE.RteUtility.removeChildNodes($v_0);
        $v_0.innerHTML = $v_1;
        if (done) {
            done();
        }
    }
};
RTE.PreviewManager = function RTE_PreviewManager() {
    this.$6T_0 = new RTE.ElementPlaceholderReplacer();
};
RTE.PreviewManager.get_instance = function RTE_PreviewManager$get_instance() {
    if (!RTE.PreviewManager.$W) {
        RTE.PreviewManager.$W = new RTE.PreviewManager();
    }
    return RTE.PreviewManager.$W;
};
RTE.PreviewManager.prototype = {
    $1n_0: null,
    $8O_0: false,
    $5X_0: null,
    beginPreview: function RTE_PreviewManager$beginPreview() {
        if (this.$1n_0) {
            return;
        }
        var $v_0 = RTE.Selection.getSelectionRange();

        if ($v_0) {
            var $v_2 = $v_0.parentElement();

            if ($v_2 && RTE.RteUtility.$2b($v_2) && RTE.Canvas.isEditable($v_2)) {
                RTE.Cursor.cursorRangeIsNowOutdated();
            }
        }
        if (!(RTE.Cursor.get_range()).get_isInEditableRegion()) {
            return;
        }
        var $v_1 = (RTE.Cursor.get_range()).getEditableRegion();

        if (!$v_1) {
            return;
        }
        RTE.SnapshotManager.takeSnapshot();
        this.$6T_0.$Kt_0($v_1, 'IFRAME', null, 'ms-rteIframePlaceholder');
        this.$1n_0 = RTE.Snapshot.$IC($v_1);
        this.$1H_0 = null;
        this.$8O_0 = true;
        if (RTE.RteUtility.isInternetExplorer() && Sys.Browser.version === 8) {
            var $v_3 = RTE.Selection.getSelectionRange();

            $v_3.collapse(true);
            $v_3.select();
            (RTE.Selection.getSelection()).clear();
            RTE.ScrollPosition.$5v(this.$5X_0);
        }
        this.$5X_0 = RTE.ScrollPosition.$7u($v_1);
    },
    $1H_0: null,
    endPreview: function RTE_PreviewManager$endPreview() {
        if (!this.$1n_0) {
            return;
        }
        var $v_0 = this.$1n_0;

        this.$1n_0 = null;
        this.$5X_0 = null;
        $v_0.$9V_0();
        this.$6T_0.$9W_0();
        RTE.SnapshotManager.$5b($v_0.$Q_0, $v_0.$1T_0);
        this.$1H_0 = null;
    },
    restoreBeginState: function RTE_PreviewManager$restoreBeginState() {
        if (!this.$1n_0) {
            return;
        }
        if (this.$8O_0) {
            this.$8O_0 = false;
            if (RTE.RteUtility.isInternetExplorer()) {
                var $v_0 = RTE.Selection.getSelectionRange();

                if ($v_0) {
                    $v_0.collapse(true);
                    $v_0.select();
                }
            }
            if (RTE.Cursor.s_range.get_$6b_0()) {
                (RTE.Selection.getSelection()).clear();
            }
        }
        this.$1n_0.$9V_0();
        RTE.SnapshotManager.$5b(this.$1n_0.$Q_0, this.$1n_0.$1T_0);
        this.$1H_0 = null;
    },
    commitCommandOrAfterPreview: function RTE_PreviewManager$commitCommandOrAfterPreview(commandId) {
        if (!RTE.SPRichTextEditorComponentProvider.$3j(commandId)) {
            this.commitPreview();
            return true;
        }
        else if (RTE.SPRichTextEditorComponentProvider.$3j(commandId) === 1) {
            RTE.ScrollPosition.$5v(this.$5X_0);
        }
        return false;
    },
    commitPreview: function RTE_PreviewManager$commitPreview() {
        this.$6T_0.$9W_0();
        this.$1n_0 = null;
        this.$1H_0 = null;
        this.$5X_0 = null;
        RTE.SnapshotManager.takeSnapshot();
    },
    get_hasPreview: function RTE_PreviewManager$get_hasPreview() {
        return !!this.$1n_0;
    }
};
RTE.ScrollPosition = function RTE_ScrollPosition() {
};
RTE.ScrollPosition.$7u = function RTE_ScrollPosition$$7u($p0) {
    var $v_0 = new Array(0);

    while ($p0) {
        var $v_1 = $p0.scrollTop;
        var $v_2 = $p0.scrollLeft;
        var $v_3 = !!$v_1 || !!$v_2;

        if (!$v_3) {
            var $v_4 = $p0.scrollHeight;
            var $v_5 = $p0.scrollWidth;

            $v_3 = !!$v_4 && !!$v_5 && $v_4 !== $p0.clientHeight || $v_5 !== $p0.clientWidth;
        }
        if ($v_3) {
            var $v_6 = new RTE.ScrollPosition();

            $v_6.$4o_0 = $p0;
            $v_6.$9h_0 = $v_1;
            $v_6.$9g_0 = $v_2;
            $v_0[$v_0.length] = $v_6;
        }
        $p0 = $p0.parentNode;
    }
    return $v_0;
};
RTE.ScrollPosition.$5v = function RTE_ScrollPosition$$5v($p0) {
    if ($p0 && $p0.length > 0) {
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            $p0[$v_0].$Ew_0();
        }
    }
};
RTE.ScrollPosition.prototype = {
    $4o_0: null,
    $9h_0: 0,
    $9g_0: 0,
    $Ew_0: function RTE_ScrollPosition$$Ew_0() {
        if (this.$4o_0.scrollTop !== this.$9h_0) {
            this.$4o_0.scrollTop = this.$9h_0;
        }
        if (this.$4o_0.scrollLeft !== this.$9g_0) {
            this.$4o_0.scrollLeft = this.$9g_0;
        }
    }
};
RTE.ElementPlaceholderReplacer = function RTE_ElementPlaceholderReplacer() {
    this.$1b_0 = {};
};
RTE.ElementPlaceholderReplacer.prototype = {
    $Kt_0: function RTE_ElementPlaceholderReplacer$$Kt_0($p0, $p1, $p2, $p3) {
        this.$9W_0();
        var $$t_7 = this;

        RTE.RteUtility.forEachChildWithTagAndClass($p0, $p1, $p2, function($p1_0) {
            var $v_0 = 'hold' + SP.Guid.newGuid();
            var $v_1 = $p1_0.ownerDocument.createElement('DIV');

            $v_1.style.width = $p1_0.clientWidth + 'px';
            $v_1.style.height = $p1_0.clientHeight + 'px';
            $v_1.id = $v_0;
            if (!RTE.SU.$2($p3)) {
                $v_1.className = $p3;
            }
            $$t_7.$1b_0[$v_0] = $p1_0;
            $p1_0.parentNode.replaceChild($v_1, $p1_0);
        });
    },
    $9W_0: function RTE_ElementPlaceholderReplacer$$9W_0() {
        var $$dict_0 = this.$1b_0;

        for (var $$key_1 in $$dict_0) {
            var $v_0 = {
                key: $$key_1,
                value: $$dict_0[$$key_1]
            };
            var $v_1 = $get($v_0.key);

            if ($v_1 && $v_1.parentNode) {
                $v_1.parentNode.replaceChild($v_0.value, $v_1);
            }
        }
        this.$1b_0 = {};
    }
};
RTE.Range = function RTE_Range(rawRange) {
    this.$D_0 = rawRange;
};
RTE.Range.createRange = function RTE_Range$createRange() {
    var $v_0 = RTE.DomHelper.createRange(window.document);

    if ($v_0) {
        return new RTE.Range($v_0);
    }
    return null;
};
RTE.Range.$9j = function RTE_Range$$9j($p0) {
    if ($p0.select) {
        $p0.select();
        return;
    }
    var $v_0 = null;
    var $v_1 = null;

    if (RTE.RteUtility.isSafari()) {
        if ($p0.startContainer && $p0.startContainer.nodeType === 1) {
            $v_0 = $p0.startContainer.style.display;
            if (!$p0.startOffset && $p0.startContainer.nodeName === 'SPAN' && $p0.startContainer.innerHTML === '') {
                $p0.startContainer.style.display = 'none';
            }
        }
        if ($p0.endContainer && $p0.endContainer.nodeType === 1) {
            $v_1 = $p0.endContainer.style.display;
            if (!$p0.endOffset && $p0.endContainer.nodeName === 'SPAN' && $p0.endContainer.innerHTML === '') {
                $p0.endContainer.style.display = 'none';
            }
        }
        if ($p0.startContainer.nodeType === 1 && RTE.RteUtility.$N($p0.startContainer) && $p0.startContainer === $p0.endContainer && $p0.startOffset === $p0.endOffset && $p0.endOffset === $p0.endContainer.childNodes.length) {
            var $v_3 = $p0.endContainer.ownerDocument.createElement('BR');

            $p0.endContainer.appendChild($v_3);
        }
    }
    var $v_2 = RTE.Selection.getSelection();

    $v_2.$2h_0.removeAllRanges();
    $v_2.$2h_0.addRange($p0);
    if (RTE.RteUtility.isSafari()) {
        if ($p0.startContainer && $p0.startContainer.nodeType === 1) {
            $p0.startContainer.style.display = $v_0;
            RTE.RteUtility.$Dz($p0.startContainer);
        }
        if ($p0.endContainer && $p0.endContainer.nodeType === 1) {
            $p0.endContainer.style.display = $v_1;
            RTE.RteUtility.$Dz($p0.endContainer);
        }
    }
};
RTE.Range.prototype = {
    $D_0: null,
    duplicate: function RTE_Range$duplicate() {
        var $v_0 = RTE.DomHelper.duplicateRange(this.$D_0);

        return new RTE.Range($v_0);
    },
    collapse: function RTE_Range$collapse(toStart) {
        if (this.$D_0.collapse) {
            this.$D_0.collapse(toStart);
        }
    },
    moveToElementText: function RTE_Range$moveToElementText(elem) {
        if (this.$D_0.moveToElementText) {
            this.$D_0.moveToElementText(elem);
            return;
        }
        if (this.$D_0.selectNodeContents) {
            this.$D_0.selectNodeContents(elem);
        }
    },
    pasteHtml: function RTE_Range$pasteHtml(html) {
        RTE.DomHelper.pasteHtmlIntoRange(this.$D_0, html);
    },
    get_innerText: function RTE_Range$get_innerText() {
        var $v_0 = this.$D_0.text;

        if (RTE.SU.$7($v_0)) {
            $v_0 = this.$D_0.toString();
        }
        return $v_0;
    },
    get_innerHTML: function RTE_Range$get_innerHTML() {
        if (!RTE.SU.$1R(this.$D_0.htmlText)) {
            return this.$D_0.htmlText;
        }
        else {
            var $v_0 = this.$D_0.cloneContents();
            var $v_1 = document.createElement('DIV');

            $v_1.appendChild($v_0);
            return $v_1.innerHTML;
        }
    },
    compareEndPoints: function RTE_Range$compareEndPoints(option, range) {
        var $v_0 = RTE.Range.$9d[option];

        return RTE.DomHelper.compareRangeEndPoints(this.$D_0, $v_0, range.$D_0);
    },
    $5a_0: function RTE_Range$$5a_0($p0, $p1) {
        var $v_0 = RTE.Range.$9d[$p0];

        RTE.DomHelper.setRangeEndPoint(this.$D_0, $v_0, $p1.$D_0);
    },
    inRange: function RTE_Range$inRange(range) {
        return RTE.DomHelper.isRangeInRange(this.$D_0, range.$D_0);
    },
    isVisible: function RTE_Range$isVisible() {
        return RTE.DomHelper.isRangeVisible(this.$D_0);
    },
    parentElement: function RTE_Range$parentElement() {
        var $v_0 = this.$D_0;

        if ($v_0.parentElement) {
            var $v_2 = $v_0.parentElement();
            var $v_3 = RTE.DomHelper.createRange(window.document);

            if ($v_2) {
                try {
                    $v_3.moveToElementText($v_2);
                }
                catch ($$e_3) { }
            }
            while ($v_2 && !$v_3.inRange($v_0)) {
                $v_2 = $v_2.parentNode;
                try {
                    $v_3.moveToElementText($v_2);
                }
                catch ($$e_4) { }
            }
            if ($v_2) {
                var $v_4 = true;

                while ($v_4) {
                    $v_4 = false;
                    var $v_5 = $v_2.childNodes.length;

                    for (var $v_6 = 0; $v_6 < $v_5; $v_6++) {
                        if (!SP.UI.UIUtility.isTextNode($v_2.childNodes[$v_6])) {
                            $v_3.moveToElementText($v_2.childNodes[$v_6]);
                            if ($v_3.inRange($v_0)) {
                                $v_2 = $v_2.childNodes[$v_6];
                                $v_4 = true;
                                break;
                            }
                        }
                    }
                }
            }
            return $v_2;
        }
        var $v_1 = $v_0.commonAncestorContainer;

        if ($v_1) {
            return $v_1;
        }
        return null;
    },
    $9D_0: function RTE_Range$$9D_0($p0) {
        var $v_0 = this.$D_0.startContainer;

        if (!RTE.SU.$7($v_0) && RTE.RteUtility.$N($v_0) && $v_0.childNodes.length > 0) {
            var $v_1 = null;

            if (this.$D_0.startOffset !== $v_0.childNodes.length) {
                $v_1 = $v_0.childNodes[this.$D_0.startOffset];
                this.$D_0.setStart($v_1, 0);
            }
            if ($v_1 && $v_1.childNodes.length > 0) {
                this.$9D_0($p0);
            }
        }
    },
    $CP_0: function RTE_Range$$CP_0($p0, $p1, $p2) {
        this.$9D_0($p1);
        var $v_0 = this.$D_0;
        var $v_1 = $v_0.startContainer;
        var $v_2 = $p1 ? RTE.Cursor.s_range.$3_0.parentNode : RTE.Cursor.s_range.$4_0.parentNode;
        var $v_3 = false;

        if (!RTE.SU.$7($v_1)) {
            $v_3 = true;
            if (RTE.RteUtility.$CX($v_1)) {
                $v_3 = false;
            }
            else if (RTE.Canvas.$3x($v_1.tagName)) {
                return false;
            }
            else if (SP.UI.UIUtility.isSvgNode($v_1)) {
                while (SP.UI.UIUtility.isSvgNode($v_1.parentNode)) {
                    $v_1 = $v_1.parentNode;
                }
                SP.UI.UIUtility.insertBefore($p0, $v_1);
            }
            else if (!$v_0.startOffset) {
                if (SP.UI.UIUtility.isTextNode($v_1) || RTE.RteUtility.$3v($v_1)) {
                    SP.UI.UIUtility.insertBefore($p0, $v_1);
                }
                else {
                    if (!$v_1.firstChild) {
                        $v_1.appendChild($p0);
                    }
                    else {
                        $v_1.insertBefore($p0, $v_1.firstChild);
                    }
                }
            }
            else if (SP.UI.UIUtility.isTextNode($v_1) && $v_0.startOffset === $v_1.nodeValue.length) {
                SP.UI.UIUtility.insertAfter($p0, $v_1);
            }
            else if (!$p1 && SP.UI.UIUtility.isTextNode($v_1)) {
                var $v_8 = $v_0.startOffset;
                var $v_9 = $v_1.nodeValue.substr(0, $v_8);
                var $v_A = $v_1.nodeValue.substr($v_8);
                var $v_B = RTE.RteUtility.createTextNode($v_1.ownerDocument, $v_9);
                var $v_C = $v_1.parentNode;

                $v_C.insertBefore($v_B, $v_1);
                $v_C.insertBefore($p0, $v_1);
                var $v_D = RTE.DomHelper.createRange(window.document);

                $v_D.setStart($v_1, 0);
                $v_D.setEnd($v_1, $v_8);
                $v_D.deleteContents();
                $v_D.detach();
            }
            else {
                $v_3 = false;
            }
        }
        if (!$v_3) {
            if (!RTE.SU.$7($v_0.insertNode)) {
                $v_0.insertNode($p0);
            }
            else {
                var $v_E = null;

                try {
                    var $v_F = 'rangePosition' + (SP.Guid.newGuid()).toString();

                    this.pasteHtml('<span id=\'' + $v_F + '\'></span>');
                    var $v_G = $get($v_F);

                    $v_E = $v_G.parentNode;
                    if (RTE.RteUtility.$3v($v_E)) {
                        if ($v_E.tagName === 'IMG') {
                            if ($p1) {
                                SP.UI.UIUtility.insertAfter($p0, $v_E);
                            }
                            else {
                                SP.UI.UIUtility.insertBefore($p0, $v_E);
                            }
                        }
                        else {
                            SP.UI.UIUtility.insertBefore($p0, $v_E);
                        }
                    }
                    else {
                        $v_G.parentNode.replaceChild($p0, $v_G);
                    }
                }
                catch ($$e_G) {
                    if (!$v_E) {
                        $v_E = this.parentElement();
                        if (!$v_E) {
                            return false;
                        }
                    }
                    SP.UI.UIUtility.insertBefore($p0, $v_E);
                }
            }
        }
        var $v_4 = $p0.parentNode;

        while ($v_4 && $v_4.id.indexOf('range') !== -1) {
            $v_4.parentNode.insertBefore($p0, $v_4);
            $v_4 = $v_4.parentNode;
        }
        var $v_5 = $p0.nextSibling;
        var $v_6 = $p0.previousSibling;
        var $v_7 = $p0.parentNode;

        if ($v_7) {
            if ($v_7.tagName === 'BR') {
                if (!$p1) {
                    SP.UI.UIUtility.insertAfter($p0, $v_7);
                }
                else {
                    SP.UI.UIUtility.insertBefore($p0, $v_7);
                }
                $v_5 = $p0.nextSibling;
                $v_6 = $p0.previousSibling;
                $v_7 = $p0.parentNode;
            }
            if (($v_2 !== $v_7 || $p2) && $v_7.tagName === 'A') {
                if (!$v_5) {
                    SP.UI.UIUtility.insertAfter($p0, $v_7);
                }
                else if (!$v_6) {
                    SP.UI.UIUtility.insertBefore($p0, $v_7);
                }
                $v_5 = $p0.nextSibling;
                $v_6 = $p0.previousSibling;
                $v_7 = $p0.parentNode;
            }
            if (($v_2 !== $v_7 || $p2) && Sys.UI.DomElement.containsCssClass($v_7, 'ms-rtestate-read')) {
                if (!$v_5) {
                    SP.UI.UIUtility.insertAfter($p0, $v_7);
                }
                else if (!$v_6) {
                    SP.UI.UIUtility.insertBefore($p0, $v_7);
                }
            }
        }
        return true;
    },
    moveToMarkers: function RTE_Range$moveToMarkers(startMarker, endMarker, isEmtpy) {
        var $v_0 = RTE.Range.createRange();

        $v_0.moveToElementText(startMarker);
        if (isEmtpy) {
            this.$5a_0(2, $v_0);
            this.$5a_0(1, $v_0);
            this.collapse(true);
        }
        else {
            this.$5a_0(3, $v_0);
            this.$5a_0(0, $v_0);
            var $v_1 = RTE.Range.createRange();

            $v_1.moveToElementText(endMarker);
            this.$5a_0(2, $v_1);
        }
    },
    select: function RTE_Range$select() {
        RTE.Range.$9j(this.$D_0);
    }
};
RTE.RemoveStyleOnSelectionProcessor = function RTE_RemoveStyleOnSelectionProcessor() {
    RTE.RemoveStyleOnSelectionProcessor.initializeBase(this);
};
RTE.RemoveStyleOnSelectionProcessor.prototype = {
    $84_1: false,
    setSettings: function RTE_RemoveStyleOnSelectionProcessor$setSettings($p0, $p1) {
        this.$84_1 = $p1;
        RTE.SelectionNodesProcessor.prototype.setSelectionSettings.call(this, $p0);
    },
    process: function RTE_RemoveStyleOnSelectionProcessor$process() {
        this.$15_1();
    },
    $Ef_1: function RTE_RemoveStyleOnSelectionProcessor$$Ef_1($p0, $p1, $p2) {
        var $v_0 = null;

        if ($p2) {
            $v_0 = this.$O_0.$4_0;
        }
        else {
            $v_0 = this.$O_0.$3_0;
        }
        var $v_1 = $v_0.parentNode;

        while ($v_0 && $v_1) {
            if ($v_1 === $p0) {
                return $v_0;
            }
            else if (($p2 && !$v_0.previousSibling || !$p2 && !$v_0.nextSibling) && RTE.Canvas.isEditable($v_1) && !RTE.Canvas.$i($v_1)) {
                $p1.push($v_1);
            }
            $v_0 = $v_1;
            $v_1 = $v_0.parentNode;
        }
        return null;
    },
    $Ln_1: function RTE_RemoveStyleOnSelectionProcessor$$Ln_1($p0) {
        var $v_0 = this.get_parentElement();

        if (RTE.Canvas.$i($v_0)) {
            return;
        }
        var $v_1 = this.$Ef_1($v_0, $p0, true);
        var $v_2 = this.$Ef_1($v_0, $p0, false);

        if ($v_1 && $v_2 && $v_1 === $v_0.firstChild && $v_2 === $v_0.lastChild) {
            $p0.push($v_0);
            var $v_3 = $v_0.parentNode;

            while ($v_3 && $v_3.childNodes.length === 1 && !RTE.Canvas.$i($v_3)) {
                $p0.push($v_3);
                $v_3 = $v_3.parentNode;
            }
        }
    },
    $15_1: function RTE_RemoveStyleOnSelectionProcessor$$15_1() {
        var $v_0 = this.get_innerNodes();
        var $v_1 = 0;

        this.$Ln_1($v_0);
        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            var $v_3 = false;
            var $v_4 = $v_0[$v_2];

            if (!$v_4) {
                continue;
            }
            if (SP.UI.UIUtility.isTextNode($v_4)) {
                continue;
            }
            if (!RTE.Canvas.isEditable($v_4) || RTE.Canvas.$i($v_4)) {
                continue;
            }
            var $v_5 = $v_4.className;

            if ($v_5.indexOf('ms-rteKeepStyles') !== -1) {
                continue;
            }
            var $v_6 = $v_4.tagName;

            if ($v_6 === 'STRONG' || $v_6 === 'B' || $v_6 === 'U' || $v_6 === 'EM' || $v_6 === 'SUP' || $v_6 === 'SUB' || $v_6 === 'I' || $v_6 === 'FONT') {
                RTE.RteUtility.removeNodeAndKeepChildNodes($v_4);
                $v_0[$v_2] = null;
                $v_1++;
                continue;
            }
            else if ($v_6 === 'H1' || $v_6 === 'H2' || $v_6 === 'H3' || $v_6 === 'H4' || $v_6 === 'H5' || $v_6 === 'H6' || $v_6 === 'P') {
                if (RTE.RteUtility.$b(this.$O_0.$4_0, $v_4, $v_4) || RTE.RteUtility.$b(this.$O_0.$3_0, $v_4, $v_4)) {
                    if ($v_6 !== 'DIV') {
                        var $v_7 = $v_4.ownerDocument.createElement('DIV');

                        $v_4.parentNode.insertBefore($v_7, $v_4);
                        RTE.RteUtility.$k($v_4, $v_7);
                        RTE.RteUtility.$J($v_4);
                    }
                }
                else {
                    if (RTE.RteUtility.$t($v_4, false)) {
                        $v_4.parentNode.insertBefore($v_4.ownerDocument.createElement('BR'), $v_4.nextSibling);
                        if ($v_6 === 'P') {
                            $v_4.parentNode.insertBefore($v_4.ownerDocument.createElement('BR'), $v_4.nextSibling);
                        }
                    }
                    RTE.RteUtility.removeNodeAndKeepChildNodes($v_4);
                }
                $v_0[$v_2] = null;
                $v_1++;
                continue;
            }
            if (!this.$84_1 && $v_6 === 'IMG') {
                continue;
            }
            if (!this.$84_1 && ($v_6 === 'TH' || $v_6 === 'TD' || $v_6 === 'TR' || $v_6 === 'HR' || $v_6 === 'TABLE' || $v_6 === 'TBODY' || $v_6 === 'THEAD')) {
                $v_4.style.backgroundColor = '';
                $v_4.style.color = '';
                $v_4.style.fontFamily = '';
                $v_4.style.fontSize = '';
                $v_4.style.fontStyle = '';
                $v_4.style.fontWeight = '';
                continue;
            }
            var $v_8 = '';
            var $v_9 = '';
            var $v_A = $v_4.style;

            if ($v_6 === 'TABLE' || $v_6 === 'IMG') {
                $v_8 = $v_A.width;
                $v_9 = $v_A.height;
                $v_A.width = '';
                $v_A.height = '';
            }
            if ($v_4.style.cssText !== '') {
                $v_4.removeAttribute('style');
                $v_3 = true;
            }
            if ($v_8 !== '') {
                $v_A.width = $v_8;
            }
            if ($v_9 !== '') {
                $v_A.height = $v_9;
            }
            var $v_B = $v_5.split(' ');
            var $v_C = '';
            var $v_D = $v_B.length;

            for (var $v_E = 0; $v_E < $v_D; $v_E++) {
                var $v_F = $v_B[$v_E];

                if ($v_F !== '') {
                    if ((RTE.RteUtility.get_ignoreClasses())[$v_F] || $v_F.startsWith('ms-rterange')) {
                        $v_C += $v_F + ' ';
                    }
                    else {
                        $v_3 = true;
                    }
                }
            }
            if ($v_C === '') {
                $v_4.removeAttribute('className');
                $v_4.removeAttribute('class');
            }
            else {
                $v_4.className = $v_C;
            }
            if (RTE.RteUtility.$6W($v_4)) {
                RTE.RteUtility.removeNodeAndKeepChildNodes($v_4);
                $v_0[$v_2] = null;
                $v_1++;
                continue;
            }
            if ($v_3) {
                $v_1++;
            }
        }
        RTE.SnapshotManager.setCurrentRegionDirtyIf($v_1 > 0);
    }
};
RTE.RibbonIds = function RTE_RibbonIds() {
};
RTE.CommandState = function RTE_CommandState() {
};
RTE.CommandState.prototype = {
    $B_0: false,
    get_enabled: function RTE_CommandState$get_enabled() {
        return this.$B_0;
    },
    set_enabled: function RTE_CommandState$set_enabled(value) {
        this.$B_0 = value;
        return value;
    },
    $1I_0: false,
    get_applied: function RTE_CommandState$get_applied() {
        return this.$1I_0;
    },
    set_applied: function RTE_CommandState$set_applied(value) {
        this.$1I_0 = value;
        return value;
    },
    get_commandOn: function RTE_CommandState$get_commandOn() {
        return this.$B_0 && this.$1I_0;
    },
    $C_0: null,
    get_value: function RTE_CommandState$get_value() {
        return this.$C_0;
    },
    set_value: function RTE_CommandState$set_value(value) {
        this.$C_0 = value;
        return value;
    }
};
RTE.RichTextEditor = function RTE_RichTextEditor() {
};
RTE.RichTextEditor.align = function RTE_RichTextEditor$align(alignNew) {
    RTE.SnapshotManager.takeSnapshot();
    RTE.ParagraphCommands.align(alignNew);
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.bold = function RTE_RichTextEditor$bold() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.FontCommands.$FA();
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.removeStyles = function RTE_RichTextEditor$removeStyles() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.FontCommands.$E0();
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.bulletedList = function RTE_RichTextEditor$bulletedList() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.ParagraphCommands.bulletedList();
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.clearFormatting = function RTE_RichTextEditor$clearFormatting() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.FontCommands.$E0();
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.copy = function RTE_RichTextEditor$copy() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.Cursor.copy();
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.cut = function RTE_RichTextEditor$cut() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.Cursor.cut();
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.decreaseIndent = function RTE_RichTextEditor$decreaseIndent() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.ParagraphCommands.indent(false);
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.deleteCell = function RTE_RichTextEditor$deleteCell() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.TableCommands.deleteCell();
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.deleteRow = function RTE_RichTextEditor$deleteRow() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.TableCommands.deleteRow();
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.deleteTable = function RTE_RichTextEditor$deleteTable() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.TableCommands.deleteTable();
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.deleteColumn = function RTE_RichTextEditor$deleteColumn() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.TableCommands.deleteColumn();
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.editSource = function RTE_RichTextEditor$editSource() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.HtmlSourceCommands.editSource();
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.makeXhtml = function RTE_RichTextEditor$makeXhtml() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.XhtmlProcessor.xhtmlify();
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.increaseIndent = function RTE_RichTextEditor$increaseIndent() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.ParagraphCommands.indent(true);
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.insertLink = function RTE_RichTextEditor$insertLink() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.ObjectCommands.insertLink();
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.insertImage = function RTE_RichTextEditor$insertImage(replaceImage) {
    RTE.SnapshotManager.takeSnapshot();
    RTE.ObjectCommands.insertImage(replaceImage);
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.insertTable = function RTE_RichTextEditor$insertTable(options) {
    RTE.SnapshotManager.takeSnapshot();
    RTE.TableCommands.insertTable(options);
    RTE.RteUtility.showRibbonTab('Ribbon.Table', 'TableLayoutTab');
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.insertRowAbove = function RTE_RichTextEditor$insertRowAbove() {
    RTE.RichTextEditor.insertRow(true);
};
RTE.RichTextEditor.insertRowBelow = function RTE_RichTextEditor$insertRowBelow() {
    RTE.RichTextEditor.insertRow(false);
};
RTE.RichTextEditor.insertRow = function RTE_RichTextEditor$insertRow(above) {
    RTE.SnapshotManager.takeSnapshot();
    RTE.TableCommands.insertRow(above);
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.insertColumnLeft = function RTE_RichTextEditor$insertColumnLeft() {
    RTE.RichTextEditor.insertColumn(true);
};
RTE.RichTextEditor.insertColumnRight = function RTE_RichTextEditor$insertColumnRight() {
    RTE.RichTextEditor.insertColumn(false);
};
RTE.RichTextEditor.insertColumn = function RTE_RichTextEditor$insertColumn(left) {
    RTE.SnapshotManager.takeSnapshot();
    RTE.TableCommands.insertColumn(left);
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.insertHtmlFromDialog = function RTE_RichTextEditor$insertHtmlFromDialog(dialogFilename, dialogName, useSpan) {
    RTE.SnapshotManager.takeSnapshot();
    RTE.ObjectCommands.insertHtmlFromDialog(dialogFilename, dialogName, useSpan);
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.insertNewList = function RTE_RichTextEditor$insertNewList() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.WebPartCommands.insertNewList();
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.italic = function RTE_RichTextEditor$italic() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.FontCommands.$JW();
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.mergeCells = function RTE_RichTextEditor$mergeCells() {
    RTE.TableCommands.mergeCells();
};
RTE.RichTextEditor.mergeAbove = function RTE_RichTextEditor$mergeAbove() {
    RTE.TableCommands.mergeWithAbove();
};
RTE.RichTextEditor.mergeBellow = function RTE_RichTextEditor$mergeBellow() {
    RTE.TableCommands.mergeWithBelow();
};
RTE.RichTextEditor.mergeLeft = function RTE_RichTextEditor$mergeLeft() {
    RTE.TableCommands.mergeWithLeft();
};
RTE.RichTextEditor.mergeRight = function RTE_RichTextEditor$mergeRight() {
    RTE.TableCommands.mergeWithRight();
};
RTE.RichTextEditor.numberedList = function RTE_RichTextEditor$numberedList() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.ParagraphCommands.numberedList();
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.queryBold = function RTE_RichTextEditor$queryBold() {
    return RTE.FontCommands.$KS();
};
RTE.RichTextEditor.queryImageContextualGroup = function RTE_RichTextEditor$queryImageContextualGroup() {
    var $v_0 = new RTE.CommandState();
    var $v_1 = RTE.CanvasEvents.getNodeFromEvent('Image');

    $v_0.$B_0 = RTE.Canvas.$1D && !!$v_1;
    return $v_0;
};
RTE.RichTextEditor.queryItalic = function RTE_RichTextEditor$queryItalic() {
    return RTE.FontCommands.$KT();
};
RTE.RichTextEditor.queryLinkContextualGroup = function RTE_RichTextEditor$queryLinkContextualGroup() {
    var $v_0 = new RTE.CommandState();
    var $v_1 = RTE.CanvasEvents.getNodeFromEvent('Link');

    $v_0.$B_0 = RTE.Canvas.$1D && !!$v_1;
    return $v_0;
};
RTE.RichTextEditor.queryStrikeThrough = function RTE_RichTextEditor$queryStrikeThrough() {
    return RTE.FontCommands.$KU();
};
RTE.RichTextEditor.querySubscript = function RTE_RichTextEditor$querySubscript() {
    return RTE.FontCommands.$KV();
};
RTE.RichTextEditor.querySuperscript = function RTE_RichTextEditor$querySuperscript() {
    return RTE.FontCommands.$KW();
};
RTE.RichTextEditor.queryTableContextualGroup = function RTE_RichTextEditor$queryTableContextualGroup() {
    var $v_0 = new RTE.CommandState();
    var $v_1 = RTE.CanvasEvents.getNodeFromEvent('Table');

    $v_0.$B_0 = RTE.Canvas.$1D && !!$v_1;
    return $v_0;
};
RTE.RichTextEditor.queryUnderline = function RTE_RichTextEditor$queryUnderline() {
    return RTE.FontCommands.$KX();
};
RTE.RichTextEditor.relayout = function RTE_RichTextEditor$relayout(numColumns, header, footer, sidebar) {
    RTE.SnapshotManager.takeSnapshot();
    var $v_0 = RTE.Canvas.getRTEFieldRegion();

    (RTE.Cursor.get_range()).collapse(true);
    RTE.LayoutsEditor.relayoutRegion($v_0, numColumns, header, footer, sidebar);
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.showCustomColorDialog = function RTE_RichTextEditor$showCustomColorDialog(title, currentColor, callback) {
    var $v_0 = 310;

    RTE.RteUtility.classMustExist('SP.UI.ModalDialog');
    RTE.RteUtility.classMustExist('SP.Utilities.Utility');
    var $v_1 = new SP.UI.DialogOptions();

    $v_1.args = currentColor;
    var $v_2 = SP.Utilities.Utility.getLayoutsPageUrl('morecolors.aspx');

    $v_1.url = $v_2;
    $v_1.title = title;
    $v_1.dialogReturnValueCallback = callback;
    $v_1.autoSizeStartWidth = $v_0;
    $v_1.autoSize = true;
    SP.UI.ModalDialog.showModalDialog($v_1);
};
RTE.RichTextEditor.selectAll = function RTE_RichTextEditor$selectAll() {
    (RTE.Cursor.get_range()).selectAll();
    RTE.Cursor.update();
};
RTE.RichTextEditor.setLanguage = function RTE_RichTextEditor$setLanguage(language) {
    RTE.SnapshotManager.takeSnapshot();
    RTE.FontCommands.$LE(language);
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.$1c = function RTE_RichTextEditor$$1c($p0, $p1) {
    var $v_0 = RTE.Cursor.get_range();

    if ($v_0.isValid()) {
        var $v_1 = $v_0.getCurrentStateNode();

        if ($v_1) {
            var $v_2 = RTE.RteUtility.$1c($v_1);

            return $v_2[$p0];
        }
    }
    return $p1;
};
RTE.RichTextEditor.setColorCustom = function RTE_RichTextEditor$setColorCustom() {
    var $v_0 = RTE.RichTextEditor.$1c('color', '#000000');
    var $v_1 = SP.Res.customColorTitle;

    RTE.RichTextEditor.showCustomColorDialog($v_1, $v_0, RTE.RichTextEditor.$L8);
};
RTE.RichTextEditor.$L8 = function RTE_RichTextEditor$$L8($p0, $p1) {
    if ($p0 === 1) {
        RTE.RichTextEditor.$5Z(false, $p1, false);
    }
};
RTE.RichTextEditor.setBackgroundColorCustom = function RTE_RichTextEditor$setBackgroundColorCustom() {
    var $v_0 = RTE.RichTextEditor.$1c('backgroundColor', '#FFFFFF');
    var $v_1 = SP.Res.customBackgroundColorTitle;

    RTE.RichTextEditor.showCustomColorDialog($v_1, $v_0, RTE.RichTextEditor.$L7);
};
RTE.RichTextEditor.$L7 = function RTE_RichTextEditor$$L7($p0, $p1) {
    if ($p0 === 1) {
        RTE.RichTextEditor.$5Z(true, $p1, false);
    }
};
RTE.RichTextEditor.setBackgroundColorCssClass = function RTE_RichTextEditor$setBackgroundColorCssClass(className) {
    RTE.RichTextEditor.$5Z(true, className, true);
};
RTE.RichTextEditor.setColorCssClass = function RTE_RichTextEditor$setColorCssClass(className) {
    RTE.RichTextEditor.$5Z(false, className, true);
};
RTE.RichTextEditor.$5Z = function RTE_RichTextEditor$$5Z($p0, $p1, $p2) {
    if ($p0) {
        RTE.FontCommands.$L6($p1, $p2);
    }
    else {
        RTE.FontCommands.$5Z($p1, $p2);
    }
};
RTE.RichTextEditor.setDirection = function RTE_RichTextEditor$setDirection(leftToRight) {
    RTE.SnapshotManager.takeSnapshot();
    RTE.ParagraphCommands.setDirection(leftToRight);
    RTE.Canvas.$P();
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.setFontFamilyCssClass = function RTE_RichTextEditor$setFontFamilyCssClass(className) {
    RTE.RichTextEditor.setFontFamily(className, true);
};
RTE.RichTextEditor.setFontFamilyStyleValue = function RTE_RichTextEditor$setFontFamilyStyleValue(styleValue) {
    RTE.RichTextEditor.setFontFamily(styleValue, false);
};
RTE.RichTextEditor.setFontFamily = function RTE_RichTextEditor$setFontFamily(classNameOrStyleValue, isClassName) {
    RTE.FontCommands.$LA(classNameOrStyleValue, isClassName);
};
RTE.RichTextEditor.setFontSizeCssClass = function RTE_RichTextEditor$setFontSizeCssClass(className) {
    RTE.RichTextEditor.$9n(className, true);
};
RTE.RichTextEditor.setFontSizeStyleValue = function RTE_RichTextEditor$setFontSizeStyleValue(styleValue) {
    var $v_0 = RTE.RteUtility.parseUnitValue(styleValue);

    if (!$v_0) {
        return;
    }
    if (RTE.SU.$2($v_0.unit)) {
        $v_0.unit = RTE.FontCommands.$8t;
    }
    var $v_1 = '' + $v_0.value + $v_0.unit;

    RTE.RichTextEditor.$9n($v_1, false);
};
RTE.RichTextEditor.$9n = function RTE_RichTextEditor$$9n($p0, $p1) {
    RTE.FontCommands.$9n($p0, $p1);
};
RTE.RichTextEditor.setTableWidth = function RTE_RichTextEditor$setTableWidth(width) {
    RTE.SnapshotManager.takeSnapshot();
    RTE.TableCommands.setTableWidth(width);
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.setTableHeight = function RTE_RichTextEditor$setTableHeight(height) {
    RTE.SnapshotManager.takeSnapshot();
    RTE.TableCommands.setTableHeight(height);
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.setTableColumnWidth = function RTE_RichTextEditor$setTableColumnWidth(width) {
    RTE.SnapshotManager.takeSnapshot();
    RTE.TableCommands.setTableColumnWidth(width);
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.setTableRowHeight = function RTE_RichTextEditor$setTableRowHeight(height) {
    RTE.SnapshotManager.takeSnapshot();
    RTE.TableCommands.setTableRowHeight(height);
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.setTableStyle = function RTE_RichTextEditor$setTableStyle(suffix, on) {
    if (on || RTE.SU.$1R(on)) {
        var $v_0 = RTE.Cursor.getSelectedTable();

        RTE.TableCommands.setTableStyle($v_0, suffix, true);
    }
    else {
        RTE.RichTextEditor.clearTableStyle();
    }
};
RTE.RichTextEditor.setTableSummary = function RTE_RichTextEditor$setTableSummary(summary) {
    RTE.SnapshotManager.takeSnapshot();
    var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Table');

    $v_0.setAttribute('summary', summary);
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.queryTableSummary = function RTE_RichTextEditor$queryTableSummary() {
    var $v_0 = new RTE.CommandState();
    var $v_1 = RTE.CanvasEvents.getNodeFromEvent('Table');

    if (!$v_1) {
        return $v_0;
    }
    $v_0.$B_0 = true;
    var $v_2 = RTE.RteUtility.getAttribute($v_1, 'summary');

    $v_0.$C_0 = RTE.SU.$7($v_2) ? '' : $v_2;
    return $v_0;
};
RTE.RichTextEditor.setTableFirstColumn = function RTE_RichTextEditor$setTableFirstColumn(value) {
    RTE.SnapshotManager.takeSnapshot();
    var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Table');

    RTE.TableCommands.setFirstColumn($v_0, value);
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.setTableLastColumn = function RTE_RichTextEditor$setTableLastColumn(value) {
    RTE.SnapshotManager.takeSnapshot();
    var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Table');

    RTE.TableCommands.setLastColumn($v_0, value);
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.setTableHeaderRow = function RTE_RichTextEditor$setTableHeaderRow(value) {
    RTE.SnapshotManager.takeSnapshot();
    var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Table');

    RTE.TableCommands.setHeaderRow($v_0, value);
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.setTableFooterRow = function RTE_RichTextEditor$setTableFooterRow(value) {
    RTE.SnapshotManager.takeSnapshot();
    var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Table');

    RTE.TableCommands.setFooterRow($v_0, value);
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.clearTableStyle = function RTE_RichTextEditor$clearTableStyle() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.TableCommands.clearTableStyle();
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.setTableGridLines = function RTE_RichTextEditor$setTableGridLines(showGridline) {
    RTE.SnapshotManager.takeSnapshot();
    RTE.TableCommands.setTableGridLines(showGridline);
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.setLinkUrl = function RTE_RichTextEditor$setLinkUrl(url) {
    var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Link');

    if (!$v_0) {
        return;
    }
    RTE.SnapshotManager.takeSnapshot();
    RTE.SnapshotManager.setCurrentRegionDirtyIf($v_0.href !== url);
    $v_0.href = url;
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.queryLinkUrl = function RTE_RichTextEditor$queryLinkUrl() {
    var $v_0 = new RTE.CommandState();
    var $v_1 = RTE.CanvasEvents.getNodeFromEvent('Link');

    if (!$v_1) {
        return $v_0;
    }
    $v_0.$B_0 = true;
    var $v_2 = RTE.RteUtility.getAttribute($v_1, 'href');

    $v_0.$C_0 = RTE.RteUtility.$7G($v_2);
    return $v_0;
};
RTE.RichTextEditor.setLinkOpenInNewWindow = function RTE_RichTextEditor$setLinkOpenInNewWindow(openInNewWindow) {
    var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Link');

    if (!$v_0) {
        return;
    }
    RTE.SnapshotManager.takeSnapshot();
    var $v_1 = RTE.RteUtility.getAttribute($v_0, 'target');

    if (openInNewWindow) {
        $v_0.setAttribute('target', '_blank');
        RTE.SnapshotManager.setCurrentRegionDirtyIf(!$v_1 || $v_1.toLowerCase() !== '_blank');
    }
    else {
        $v_0.removeAttribute('target');
        RTE.SnapshotManager.setCurrentRegionDirtyIf(!RTE.SU.$2($v_1));
    }
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.queryLinkOpenInNewWindow = function RTE_RichTextEditor$queryLinkOpenInNewWindow() {
    var $v_0 = new RTE.CommandState();
    var $v_1 = RTE.CanvasEvents.getNodeFromEvent('Link');

    if (!$v_1) {
        return $v_0;
    }
    $v_0.$B_0 = true;
    var $v_2 = RTE.RteUtility.getAttribute($v_1, 'target');

    if ($v_2 && $v_2.toLowerCase() === '_blank') {
        $v_0.$1I_0 = true;
    }
    else {
        $v_0.$1I_0 = false;
    }
    return $v_0;
};
RTE.RichTextEditor.setLinkTitle = function RTE_RichTextEditor$setLinkTitle(title) {
    var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Link');

    if (!$v_0) {
        return;
    }
    RTE.SnapshotManager.takeSnapshot();
    RTE.SnapshotManager.setCurrentRegionDirtyIf($v_0.title !== title);
    $v_0.title = title;
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.queryLinkTitle = function RTE_RichTextEditor$queryLinkTitle() {
    var $v_0 = new RTE.CommandState();
    var $v_1 = RTE.CanvasEvents.getNodeFromEvent('Link');

    if (!$v_1) {
        return $v_0;
    }
    $v_0.$B_0 = true;
    $v_0.$C_0 = $v_1.title;
    return $v_0;
};
RTE.RichTextEditor.removeLink = function RTE_RichTextEditor$removeLink() {
    var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Link');

    if (!$v_0) {
        return;
    }
    RTE.SnapshotManager.takeSnapshot();
    RTE.RichTextEditor.setLinkDisplayIcon(false);
    if (RTE.Canvas.isEditable($v_0)) {
        if (RTE.Canvas.isEditable($v_0.parentNode)) {
            RTE.RteUtility.removeNodeAndKeepChildNodes($v_0);
        }
        else {
            RTE.RteUtility.removeChildNodes($v_0);
            $v_0.href = '';
            $v_0.title = '';
            (RTE.Cursor.get_range()).clear();
        }
        RTE.Cursor.update();
    }
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.getAssetIcon = function RTE_RichTextEditor$getAssetIcon(link) {
    var $v_0 = null;

    for (var $v_1 = 0; $v_1 < link.childNodes.length; $v_1++) {
        var $v_2 = link.childNodes[$v_1];

        if ($v_2.tagName === 'IMG' && Sys.UI.DomElement.containsCssClass($v_2, 'ms-asset-icon')) {
            $v_0 = $v_2;
        }
    }
    return $v_0;
};
RTE.RichTextEditor.queryLinkDisplayIcon = function RTE_RichTextEditor$queryLinkDisplayIcon() {
    var $v_0 = new RTE.CommandState();
    var $v_1 = RTE.CanvasEvents.getNodeFromEvent('Link');

    if ($v_1) {
        $v_0.$B_0 = true;
        var $v_2 = RTE.RichTextEditor.getAssetIcon($v_1);

        if ($v_2) {
            $v_0.$1I_0 = true;
        }
        else {
            $v_0.$1I_0 = false;
        }
    }
    return $v_0;
};
RTE.RichTextEditor.setLinkDisplayIcon = function RTE_RichTextEditor$setLinkDisplayIcon(displayWithIcon) {
    RTE.SnapshotManager.takeSnapshot();
    var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Link');

    if (!$v_0) {
        return;
    }
    var $v_1 = RTE.RichTextEditor.getAssetIcon($v_0);

    if (displayWithIcon) {
        if (!$v_1) {
            $v_1 = document.createElement('IMG');
            $v_1.className = 'ms-asset-icon ms-rtePosition-4';
            $v_1.alt = '';
            $v_1.src = '/_layouts/images/icgen.gif';
            $v_0.insertBefore($v_1, $v_0.firstChild);
        }
        var $v_2 = RTE.RteUtility.getAttribute($v_0, 'href');

        if (RTE.RteUtility.isClassAvailable('SP.ClientContext') && RTE.RteUtility.isClassAvailable('SP.Utilities.IconSize')) {
            var $v_3 = SP.ClientContext.get_current();
            var $v_4 = $v_3.get_web();
            var $v_5 = $v_4.mapToIcon($v_2, '', 0);

            $v_3.executeQueryAsync(function($p1_0, $p1_1) {
                RTE.RichTextEditor.$EC($v_1, $v_5.get_value());
            }, function($p1_0, $p1_1) {
                alert($p1_1.get_message());
                RTE.RichTextEditor.$EC($v_1, $v_5.get_value());
            });
        }
    }
    else {
        if ($v_1) {
            $v_0.removeChild($v_1);
        }
    }
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.$EC = function RTE_RichTextEditor$$EC($p0, $p1) {
    var $v_0 = !RTE.SU.$2($p1) && $p1 !== '0' ? '/_layouts/images/' + $p1 : '/_layouts/images/icgen.gif';

    RTE.SnapshotManager.setCurrentRegionDirtyIf($v_0 !== $p0.src);
    $p0.src = $v_0;
};
RTE.RichTextEditor.setImageSrc = function RTE_RichTextEditor$setImageSrc(src) {
    var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Image');

    if (!$v_0) {
        return;
    }
    RTE.SnapshotManager.takeSnapshot();
    RTE.SnapshotManager.setCurrentRegionDirtyIf($v_0.src !== src);
    $v_0.src = src;
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.queryImageSrc = function RTE_RichTextEditor$queryImageSrc() {
    var $v_0 = new RTE.CommandState();
    var $v_1 = RTE.CanvasEvents.getNodeFromEvent('Image');

    if (!$v_1) {
        return $v_0;
    }
    $v_0.$B_0 = true;
    var $v_2 = $v_1.src;

    $v_0.$C_0 = RTE.RteUtility.$7G($v_2);
    return $v_0;
};
RTE.RichTextEditor.setImageAlt = function RTE_RichTextEditor$setImageAlt(alt) {
    var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Image');

    if (!$v_0) {
        return;
    }
    RTE.SnapshotManager.takeSnapshot();
    RTE.SnapshotManager.setCurrentRegionDirtyIf($v_0.alt !== alt);
    $v_0.alt = alt;
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.queryImageAlt = function RTE_RichTextEditor$queryImageAlt() {
    var $v_0 = new RTE.CommandState();
    var $v_1 = RTE.CanvasEvents.getNodeFromEvent('Image');

    if (!$v_1) {
        return $v_0;
    }
    $v_0.$B_0 = true;
    $v_0.$C_0 = $v_1.alt;
    return $v_0;
};
RTE.RichTextEditor.setImageHeight = function RTE_RichTextEditor$setImageHeight(height, unit) {
    var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Image');

    if (!$v_0) {
        return;
    }
    if (!RTE.RichTextEditor.$5u()) {
        return;
    }
    RTE.SnapshotManager.takeSnapshot();
    var $v_1 = !RTE.RichTextEditor.isRatioLocked($v_0);
    var $v_2 = height + unit;

    RTE.SnapshotManager.setCurrentRegionDirtyIf($v_0.style.height !== $v_2);
    if (!$v_1) {
        var $v_3 = $v_0.height;
        var $v_4 = $v_0.width;
        var $v_5 = !RTE.SU.$2($v_0.style.height);

        $v_0.style.height = $v_2;
        var $v_6 = $v_0.height;
        var $v_7 = Math.round($v_6 * $v_4 / $v_3);

        if (!isNaN($v_7)) {
            $v_0.style.width = $v_7.toString() + 'px';
            if (!$v_5) {
                $v_0.style.height = '';
            }
        }
        RTE.CanvasEvents.waitAndSetImageSize();
    }
    else {
        $v_0.style.height = $v_2;
    }
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.queryImageHeight = function RTE_RichTextEditor$queryImageHeight() {
    var $v_0 = new RTE.CommandState();
    var $v_1 = RTE.CanvasEvents.getNodeFromEvent('Image');

    if (!$v_1) {
        return $v_0;
    }
    $v_0.$B_0 = true;
    var $v_2 = $v_1.style.height;

    if (RTE.SU.$2($v_2)) {
        $v_2 = RTE.RteUtility.getAttribute($v_1, 'height');
    }
    if (RTE.SU.$2($v_2) || !RTE.RteUtility.$3F(RTE.RichTextEditor.$A0, $v_2)) {
        $v_2 = $v_1.height.toString() + 'px';
    }
    $v_0.$C_0 = $v_2;
    return $v_0;
};
RTE.RichTextEditor.setImageWidth = function RTE_RichTextEditor$setImageWidth(width, unit) {
    var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Image');

    if (!$v_0) {
        return;
    }
    if (!RTE.RichTextEditor.$5u()) {
        return;
    }
    RTE.SnapshotManager.takeSnapshot();
    var $v_1 = !RTE.RichTextEditor.isRatioLocked($v_0);
    var $v_2 = width + unit;

    RTE.SnapshotManager.setCurrentRegionDirtyIf($v_0.style.height !== $v_2);
    if (!$v_1) {
        var $v_3 = $v_0.height;
        var $v_4 = $v_0.width;

        $v_0.style.width = $v_2;
        var $v_5 = $v_0.width;
        var $v_6 = Math.round($v_5 * $v_3 / $v_4);

        if (!isNaN($v_6)) {
            $v_0.style.height = $v_6.toString() + 'px';
        }
        RTE.CanvasEvents.waitAndSetImageSize();
    }
    else {
        $v_0.style.width = $v_2;
    }
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.$5u = function RTE_RichTextEditor$$5u() {
    return RTE.Canvas.getCachedRestriction(RTE.Canvas.currentEditableRegion(), 'AllowImageResize', true);
};
RTE.RichTextEditor.queryImageWidth = function RTE_RichTextEditor$queryImageWidth() {
    var $v_0 = new RTE.CommandState();
    var $v_1 = RTE.CanvasEvents.getNodeFromEvent('Image');

    if (!$v_1) {
        return $v_0;
    }
    $v_0.$B_0 = true;
    var $v_2 = $v_1.style.width;

    if (RTE.SU.$2($v_2)) {
        $v_2 = RTE.RteUtility.getAttribute($v_1, 'width');
    }
    if (RTE.SU.$2($v_2) || !RTE.RteUtility.$3F(RTE.RichTextEditor.$A0, $v_2)) {
        $v_2 = $v_1.width.toString() + 'px';
    }
    $v_0.$C_0 = $v_2;
    return $v_0;
};
RTE.RichTextEditor.setImageLockRatio = function RTE_RichTextEditor$setImageLockRatio(lockRatio) {
    var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Image');

    if (!$v_0) {
        return;
    }
    $v_0.setAttribute('unlockratio', !lockRatio);
};
RTE.RichTextEditor.queryImageLockRatio = function RTE_RichTextEditor$queryImageLockRatio() {
    var $v_0 = new RTE.CommandState();
    var $v_1 = RTE.CanvasEvents.getNodeFromEvent('Image');

    if (!$v_1) {
        return $v_0;
    }
    $v_0.$B_0 = true;
    $v_0.$1I_0 = RTE.RichTextEditor.isRatioLocked($v_1);
    return $v_0;
};
RTE.RichTextEditor.isRatioLocked = function RTE_RichTextEditor$isRatioLocked(image) {
    var $v_0 = RTE.RteUtility.getAttribute(image, 'unlockratio');

    if ($v_0 === 'false') {
        return true;
    }
    else if ($v_0 === 'true') {
        return false;
    }
    return !$v_0;
};
RTE.RichTextEditor.setImagePosition = function RTE_RichTextEditor$setImagePosition(suffix, on) {
    RTE.RichTextEditor.$ED(suffix, RTE.RichTextEditor.$5S, on);
};
RTE.RichTextEditor.setImageStyle = function RTE_RichTextEditor$setImageStyle(suffix, on) {
    RTE.RichTextEditor.$ED(suffix, RTE.RichTextEditor.$3A, on);
};
RTE.RichTextEditor.$ED = function RTE_RichTextEditor$$ED($p0, $p1, $p2) {
    if (!RTE.SU.$2($p0)) {
        var $v_0 = RTE.Canvas.getCurrentStyleSheetPrefix();
        var $v_1 = RTE.Cursor.getSelectedImage();
        var $v_2 = RTE.Canvas.getEditableRegion($v_1);

        if ($p2 || RTE.SU.$1R($p2)) {
            var $v_3 = $v_0 + $p1 + '-' + $p0;

            $v_1.style.styleFloat = '';
            $v_1.style.textAlign = '';
            RTE.RteUtility.$26($v_1, $v_3, [$v_0 + $p1]);
            if (RTE.Canvas.getCachedRestriction($v_2, 'UseInlineStyle', false)) {
                var $v_4 = RTE.RteUtility.$1c($v_1);

                $v_1.style.styleFloat = $v_4.styleFloat;
                $v_1.style.verticalAlign = $v_4.verticalAlign;
                RTE.RteUtility.$9Q($v_1, [$v_0 + $p1, $v_3]);
            }
        }
        else {
            if (!RTE.Canvas.getCachedRestriction($v_2, 'UseInlineStyle', false)) {
                RTE.RteUtility.$26($v_1, '', [$v_0 + RTE.RichTextEditor.$3A]);
            }
            else {
                RTE.RteUtility.$9Q($v_1, [$v_0 + $p1]);
                $v_1.style.styleFloat = '';
                $v_1.style.verticalAlign = '';
            }
        }
    }
};
RTE.RichTextEditor.clearImageStyle = function RTE_RichTextEditor$clearImageStyle() {
    RTE.SnapshotManager.takeSnapshot();
    var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Image');
    var $v_1 = RTE.Canvas.getCurrentStyleSheetPrefix();

    RTE.RteUtility.$26($v_0, '', [$v_1 + RTE.RichTextEditor.$3A]);
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.splitVertical = function RTE_RichTextEditor$splitVertical() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.TableCommands.splitVertical();
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.splitHorizontal = function RTE_RichTextEditor$splitHorizontal() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.TableCommands.splitHorizontal();
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.showInsertTableDialog = function RTE_RichTextEditor$showInsertTableDialog() {
    RTE.TableCommands.showInsertTableDialog();
};
RTE.RichTextEditor.paste = function RTE_RichTextEditor$paste(pasteModeId) {
    RTE.Cursor.paste(pasteModeId);
};
RTE.RichTextEditor.strikeThrough = function RTE_RichTextEditor$strikeThrough() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.FontCommands.$LT();
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.subscript = function RTE_RichTextEditor$subscript() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.FontCommands.$LV();
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.superscript = function RTE_RichTextEditor$superscript() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.FontCommands.$LW();
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.redo = function RTE_RichTextEditor$redo() {
    RTE.SnapshotManager.redo();
};
RTE.RichTextEditor.underline = function RTE_RichTextEditor$underline() {
    RTE.SnapshotManager.takeSnapshot();
    RTE.FontCommands.$La();
    RTE.SnapshotManager.takeSnapshot();
};
RTE.RichTextEditor.undo = function RTE_RichTextEditor$undo() {
    RTE.SnapshotManager.undo();
};
RTE.RichTextEditor.transferContentsToInputField = function RTE_RichTextEditor$transferContentsToInputField(editableRegionId, keepCursorIfFocused) {
    if (arguments.length === 1) {
        keepCursorIfFocused = false;
    }
    var $v_0 = $get(editableRegionId);

    if (!$v_0) {
        return;
    }
    RTE.RichTextEditor.transferContentsToInputFieldNode($v_0, keepCursorIfFocused);
};
RTE.RichTextEditor.transferContentsToInputFieldNode = function RTE_RichTextEditor$transferContentsToInputFieldNode(editableRegion, keepCursorIfFocused) {
    if (arguments.length === 1) {
        keepCursorIfFocused = false;
    }
    var $v_0 = RTE.RteUtility.getAttribute(editableRegion, 'InputFieldId');

    if (!$v_0) {
        return;
    }
    var $v_1 = {};

    $v_1.editableRegion = editableRegion;
    RTE.CanvasEvents.dispatchEvent('Transfer', null, $v_1);
    RTE.SelectionManager.$7F();
    RTE.TableCommands.setTableGridLines(false);
    (RTE.PreviewManager.get_instance()).endPreview();
    var $v_2 = keepCursorIfFocused && RTE.Canvas.$1D && RTE.RteUtility.$b((RTE.Cursor.get_range()).$4_0, editableRegion, null) && RTE.RteUtility.$b((RTE.Cursor.get_range()).$3_0, editableRegion, null);
    var $v_3 = $get($v_0);

    if ($v_3) {
        var $v_6 = RTE.Canvas.getEditableRegionHtml(editableRegion, $v_2);

        RTE.RteUtility.setInputValue($v_3, $v_6);
    }
    var $v_4 = $get('ms-rtefocuselementid');

    if ($v_4 && $v_2) {
        $v_4.value = editableRegion.id;
    }
    var $v_5 = $get('ms-rtedirtybit');

    if ($v_5) {
        $v_5.value = RTE.DirtyBitManager.isDirty() ? '1' : '0';
    }
};
RTE.RichTextEditor.getNotAvailableStyleGalleryButtonHtml = function RTE_RichTextEditor$getNotAvailableStyleGalleryButtonHtml() {
    return RTE.RteRibbonBuilder.$Bt();
};
RTE.WebPartCommands = function RTE_WebPartCommands() {
};
RTE.WebPartCommands.insertWebPart = function RTE_WebPartCommands$insertWebPart(commandId) {
    var $v_0 = RTE.Canvas.currentEditableRegion();

    if (!RTE.Canvas.getCachedRestriction($v_0, 'AllowWebParts', false)) {
        return;
    }
    var $v_1 = window.WPAdder;

    if (!$v_1) {
        window.LoadWPAdderOnDemand();
        return;
    }
    $v_1 = window.WPAdder;
    var $v_2 = RTE.WebPartCommands.$IR($v_1, commandId);

    if ($v_1) {
        var $v_3 = true;

        if ($v_2) {
            var $v_4 = $v_2;

            $v_1.selectCategoryByTitle($v_4);
            $v_3 = false;
        }
        $v_1._showCategoryColumn($v_3);
        $v_1.show();
    }
};
RTE.WebPartCommands.$IR = function RTE_WebPartCommands$$IR($p0, $p1) {
    var $v_0 = null;

    if ($p0) {
        var $v_1 = $p0._ribbonMap;

        if ($v_1) {
            $v_0 = $v_1[$p1];
        }
    }
    return $v_0;
};
RTE.WebPartCommands.insertNewList = function RTE_WebPartCommands$insertNewList() {
    RTE.RteUtility.classMustExist('SP.UI.ModalDialog');
    RTE.RteUtility.classMustExist('SP.Utilities.Utility');
    var $v_0 = RTE.Canvas.currentEditableRegion();

    if (!RTE.Canvas.getCachedRestriction($v_0, 'AllowWebParts', false)) {
        return;
    }
    var $v_1 = new SP.UI.DialogOptions();
    var $v_2 = SP.Utilities.Utility.getLayoutsPageUrl('CreateListPickerPage.aspx');

    $v_2 = $v_2 + '?UseDivDialog=true&seed=' + (Math.random()).toString();
    $v_1.url = $v_2;
    $v_1.width = 780;
    var $v_3 = RTE.Cursor.get_range();

    $v_1.dialogReturnValueCallback = function($p1_0, $p1_1) {
        if ($p1_0 === 1) {
            var $v_4 = window.WPAdder;
            var $v_5 = $v_4._createWebpartPlaceholderInRte($v_3);

            if (!RTE.SU.$2($v_5)) {
                if (RTE.RteUtility.isClassAvailable('SP.UI.ModalDialog')) {
                    SP.UI.ModalDialog.showWaitScreenWithNoClose(SP.Res.dialogLoading15);
                }
                var $v_6 = $p1_1;

                $v_4.addItemToPageByItemIdAndZoneId($v_6, 'wpz', 0, $v_5);
            }
        }
    };
    SP.UI.ModalDialog.showModalDialog($v_1);
};
RTE.RichTextEditorComponent = function RTE_RichTextEditorComponent() {
    RTE.RichTextEditorComponent.initializeBase(this);
};
RTE.RichTextEditorComponent.get_instance = function RTE_RichTextEditorComponent$get_instance() {
    if (!RTE.RichTextEditorComponent.$W) {
        RTE.RichTextEditorComponent.$W = new RTE.RichTextEditorComponent();
    }
    return RTE.RichTextEditorComponent.$W;
};
RTE.RichTextEditorComponent.$EY = function RTE_RichTextEditorComponent$$EY() {
    if (RTE.RichTextEditorComponentProvider.$2O && RTE.RichTextEditorComponentProvider.$2O === RTE.RichTextEditorComponentProvider.$4G) {
        return;
    }
    var $v_0 = RTE.RichTextEditorComponent.$4s();

    if ($v_0) {
        if (RTE.RichTextEditorComponentProvider.$2O) {
            $v_0.removePageComponent(RTE.RichTextEditorComponent.get_instance());
        }
        RTE.RichTextEditorComponentProvider.$2O = RTE.RichTextEditorComponentProvider.$4G;
        $v_0.addPageComponent(RTE.RichTextEditorComponent.get_instance());
        ($v_0.get_focusManager()).requestFocusForComponent(RTE.RichTextEditorComponent.get_instance());
    }
};
RTE.RichTextEditorComponent.$4s = function RTE_RichTextEditorComponent$$4s() {
    var $v_0 = null;

    if (window.SP && window.SP.Ribbon) {
        $v_0 = window.SP.Ribbon.PageManager.get_instance();
    }
    return $v_0;
};
RTE.RichTextEditorComponent.prototype = {
    init: function RTE_RichTextEditorComponent$init() {
    },
    getFocusedCommands: function RTE_RichTextEditorComponent$getFocusedCommands() {
        return (RTE.RichTextEditorComponentProvider.get_$2l()).getFocusedCommands();
    },
    getGlobalCommands: function RTE_RichTextEditorComponent$getGlobalCommands() {
        return (RTE.RichTextEditorComponentProvider.get_$2l()).getGlobalCommands();
    },
    canHandleCommand: function RTE_RichTextEditorComponent$canHandleCommand($p0) {
        return (RTE.RichTextEditorComponentProvider.get_$2l()).canHandleCommand($p0);
    },
    handleCommand: function RTE_RichTextEditorComponent$handleCommand($p0, $p1, $p2) {
        RTE.RteUtility.assertNotNull('commandId', $p0);
        var $v_0 = (RTE.RichTextEditorComponentProvider.get_$2l()).handleCommand($p0, $p1, $p2);

        return $v_0;
    },
    isFocusable: function RTE_RichTextEditorComponent$isFocusable() {
        return (RTE.RichTextEditorComponentProvider.get_$2l()).isFocusable();
    },
    receiveFocus: function RTE_RichTextEditorComponent$receiveFocus() {
        return (RTE.RichTextEditorComponentProvider.get_$2l()).receiveFocus();
    },
    yieldFocus: function RTE_RichTextEditorComponent$yieldFocus() {
        return (RTE.RichTextEditorComponentProvider.get_$2l()).yieldFocus();
    },
    getId: function RTE_RichTextEditorComponent$getId() {
        return 'RichTextEditorComponent';
    }
};
RTE.RichTextEditorComponentProvider = function RTE_RichTextEditorComponentProvider() {
};
RTE.RichTextEditorComponentProvider.get_$2l = function RTE_RichTextEditorComponentProvider$get_$2l() {
    if (!RTE.RichTextEditorComponentProvider.$2O) {
        RTE.RichTextEditorComponentProvider.$2O = new RTE.SPRichTextEditorComponentProvider();
        RTE.RichTextEditorComponentProvider.$2O.init(null);
    }
    return RTE.RichTextEditorComponentProvider.$2O;
};
RTE.RichTextEditorComponentProvider.get_latestProvider = function RTE_RichTextEditorComponentProvider$get_latestProvider() {
    if (!RTE.RichTextEditorComponentProvider.$4G) {
        return RTE.RichTextEditorComponentProvider.get_$2l();
    }
    return RTE.RichTextEditorComponentProvider.$4G;
};
RTE.RichTextEditorComponentProvider.register = function RTE_RichTextEditorComponentProvider$register(provider) {
    if (!provider) {
        return;
    }
    provider.init(RTE.RichTextEditorComponentProvider.get_latestProvider());
    RTE.RichTextEditorComponentProvider.$4G = provider;
    RTE.Imports.ExecuteOrDelayUntilScriptLoaded(RTE.RichTextEditorComponent.$EY, 'sp.ribbon.js');
};
RTE.RichTextEditorComponentProvider.prototype = {
    init: function RTE_RichTextEditorComponentProvider$init(previousProvider) {
    },
    getFocusedCommands: function RTE_RichTextEditorComponentProvider$getFocusedCommands() {
        return null;
    },
    getGlobalCommands: function RTE_RichTextEditorComponentProvider$getGlobalCommands() {
        return null;
    },
    canHandleCommand: function RTE_RichTextEditorComponentProvider$canHandleCommand(commandId) {
        return false;
    },
    handleCommand: function RTE_RichTextEditorComponentProvider$handleCommand(commandId, properties, sequence) {
        return false;
    },
    isFocusable: function RTE_RichTextEditorComponentProvider$isFocusable() {
        return true;
    },
    receiveFocus: function RTE_RichTextEditorComponentProvider$receiveFocus() {
        return true;
    },
    yieldFocus: function RTE_RichTextEditorComponentProvider$yieldFocus() {
        return true;
    }
};
RTE.RteHtmlPasteSteward = function RTE_RteHtmlPasteSteward($p0) {
    this.$7j_1 = RTE.Canvas.getCurrentStyleSheetPrefix();
    this.$AJ_1 = new RegExp('(\u201c|\u201d)', 'g');
    this.$AK_1 = new RegExp('(\u2018|\u2019)', 'g');
    RTE.RteHtmlPasteSteward.initializeBase(this, [$p0.ownerDocument]);
    this.$A5_1 = $p0;
    this.$5s_1 = this.get_defaultFormatting();
    RTE.RteHtmlPasteSteward.$18[RTE.RteHtmlPasteSteward.$1X(2)] = 'disc';
    RTE.RteHtmlPasteSteward.$18[RTE.RteHtmlPasteSteward.$1X(6)] = 'decimal';
    RTE.RteHtmlPasteSteward.$18[RTE.RteHtmlPasteSteward.$1X(0)] = '';
    RTE.RteHtmlPasteSteward.$18[RTE.RteHtmlPasteSteward.$1X(1)] = 'none';
    RTE.RteHtmlPasteSteward.$18[RTE.RteHtmlPasteSteward.$1X(3)] = 'disc';
    RTE.RteHtmlPasteSteward.$18[RTE.RteHtmlPasteSteward.$1X(4)] = 'circle';
    RTE.RteHtmlPasteSteward.$18[RTE.RteHtmlPasteSteward.$1X(5)] = 'square';
    RTE.RteHtmlPasteSteward.$18[RTE.RteHtmlPasteSteward.$1X(7)] = 'decimal';
    RTE.RteHtmlPasteSteward.$18[RTE.RteHtmlPasteSteward.$1X(10)] = 'upper-alpha';
    RTE.RteHtmlPasteSteward.$18[RTE.RteHtmlPasteSteward.$1X(8)] = 'lower-alpha';
    RTE.RteHtmlPasteSteward.$18[RTE.RteHtmlPasteSteward.$1X(11)] = 'upper-roman';
    RTE.RteHtmlPasteSteward.$18[RTE.RteHtmlPasteSteward.$1X(9)] = 'lower-roman';
};
RTE.RteHtmlPasteSteward.$1X = function RTE_RteHtmlPasteSteward$$1X($p0) {
    return RTE.HtmlImport.ListStyleType.toString($p0);
};
RTE.RteHtmlPasteSteward.prototype = {
    $5s_1: null,
    $A5_1: null,
    $Ej_1: false,
    $Ay_1: true,
    $2v_1: function RTE_RteHtmlPasteSteward$$2v_1() {
        RTE.PasteCommon.Debug.assertString(!!this.generatedHtmlLocation.parentNode, 'There\'s no parent DOMElement to move to!');
        var $v_0 = this.generatedHtmlLocation.firstChild;

        if ($v_0 && $v_0 === this.generatedHtmlLocation.lastChild) {
            if ($v_0.nodeType === 1 && $v_0.tagName === 'P') {
                RTE.RteUtility.removeNodeAndKeepChildNodes($v_0);
            }
        }
        this.generatedHtmlLocation = this.generatedHtmlLocation.parentNode;
    },
    reset: function RTE_RteHtmlPasteSteward$reset() {
        this.generatedHtmlLocation = this.$A5_1;
    },
    get_defaultFormatting: function RTE_RteHtmlPasteSteward$get_defaultFormatting() {
        return new RTE.RteHtmlPasteSteward.FormattingSteward(this.ownerDocument);
    },
    onText: function RTE_RteHtmlPasteSteward$onText($p0) {
        if (RTE.SU.$2($p0)) {
            return;
        }
        if (this.$Ay_1) {
            $p0 = $p0.replace(this.$AJ_1, '\"');
            $p0 = $p0.replace(this.$AK_1, '\'');
        }
        var $v_0 = this.$5s_1.$LU_0(this.ownerDocument.createTextNode($p0));

        this.generatedHtmlLocation.appendChild($v_0);
    },
    onLineBreak: function RTE_RteHtmlPasteSteward$onLineBreak() {
        this.generatedHtmlLocation.appendChild(this.ownerDocument.createElement('BR'));
    },
    onImage: function RTE_RteHtmlPasteSteward$onImage($p0) {
        if (RTE.SU.$2($p0.src)) {
            this.$Ej_1 = true;
            return;
        }
        var $v_0 = this.ownerDocument.createElement('IMG');

        $v_0.src = $p0.src;
        $v_0.alt = $p0.alt;
        if ($p0.width) {
            $v_0.style.width = $p0.width + 'px';
        }
        Sys.UI.DomElement.addCssClass($v_0, 'ms-rte-paste-setimagesize');
        this.generatedHtmlLocation.appendChild($v_0);
    },
    onFormattingChange: function RTE_RteHtmlPasteSteward$onFormattingChange($p0) {
        this.$5s_1 = $p0;
    },
    onAnchorStart: function RTE_RteHtmlPasteSteward$onAnchorStart($p0) {
        var $v_0 = this.ownerDocument.createElement('A');

        $v_0.href = $p0;
        this.generatedHtmlLocation.appendChild($v_0);
        this.generatedHtmlLocation = $v_0;
    },
    onAnchorEnd: function RTE_RteHtmlPasteSteward$onAnchorEnd() {
        RTE.PasteCommon.Debug.assertString(RTE.PasteCommon.StringUtils.toUpper(this.generatedHtmlLocation.tagName) === 'A', 'Expected Tag:  A\nActual Tag:  ' + RTE.PasteCommon.StringUtils.toUpper(this.generatedHtmlLocation.tagName));
        this.$2v_1();
    },
    onParagraphStart: function RTE_RteHtmlPasteSteward$onParagraphStart() {
        var $v_0 = this.$5s_1.$Hx_0();

        this.generatedHtmlLocation.appendChild($v_0);
        this.generatedHtmlLocation = $v_0;
    },
    onParagraphEnd: function RTE_RteHtmlPasteSteward$onParagraphEnd() {
        RTE.PasteCommon.Debug.assertString(RTE.PasteCommon.StringUtils.toUpper(this.generatedHtmlLocation.tagName) === 'P' || this.generatedHtmlLocation.tagName.length === 2 && !(RTE.PasteCommon.StringUtils.toUpper(this.generatedHtmlLocation.tagName)).indexOf('H'), 'Expected Tag:  P or H_\nActual Tag:  ' + RTE.PasteCommon.StringUtils.toUpper(this.generatedHtmlLocation.tagName));
        this.$2v_1();
    },
    onListStart: function RTE_RteHtmlPasteSteward$onListStart($p0) {
        var $v_0 = RTE.HtmlImport.ListStyleType.toString($p0.get_listStyleType());
        var $v_1 = this.ownerDocument.createElement($p0.get_isListNumbered() ? 'OL' : 'UL');

        if ($p0.get_isListStyleSpecified()) {
            $v_1.style.listStyleType = RTE.RteHtmlPasteSteward.$18[$v_0];
        }
        if ($p0.get_isListNumbered() && !$p0.$2W_0) {
            $v_1.start = $p0.$3d_0;
        }
        this.generatedHtmlLocation.appendChild($v_1);
        this.generatedHtmlLocation = $v_1;
    },
    onListEnd: function RTE_RteHtmlPasteSteward$onListEnd() {
        RTE.PasteCommon.Debug.assertString(RTE.PasteCommon.StringUtils.toUpper(this.generatedHtmlLocation.tagName) === 'UL' || RTE.PasteCommon.StringUtils.toUpper(this.generatedHtmlLocation.tagName) === 'OL', 'Expected Tag:  UL or OL\nActual Tag:  ' + RTE.PasteCommon.StringUtils.toUpper(this.generatedHtmlLocation.tagName));
        this.$2v_1();
    },
    onListItemStart: function RTE_RteHtmlPasteSteward$onListItemStart($p0) {
        var $v_0 = this.ownerDocument.createElement('LI');

        if ($p0.get_isListItemStyleSpecified()) {
            $v_0.style.listStyleType = RTE.RteHtmlPasteSteward.$18[RTE.HtmlImport.ListStyleType.toString($p0.get_listStyleType())];
        }
        if ($p0.get_isListNumbered() && !$p0.$2W_0) {
            $v_0.value = $p0.get_currentNumber();
        }
        this.generatedHtmlLocation.appendChild($v_0);
        this.generatedHtmlLocation = $v_0;
    },
    onListItemEnd: function RTE_RteHtmlPasteSteward$onListItemEnd() {
        RTE.PasteCommon.Debug.assertString(RTE.PasteCommon.StringUtils.toUpper(this.generatedHtmlLocation.tagName) === 'LI', 'Expected Tag:  LI\nActual Tag:  ' + RTE.PasteCommon.StringUtils.toUpper(this.generatedHtmlLocation.tagName));
        this.$2v_1();
    },
    onTableStart: function RTE_RteHtmlPasteSteward$onTableStart($p0) {
        var $v_0 = this.ownerDocument.createElement('TABLE');

        $v_0.setAttribute('cellspacing', '0');
        $v_0.setAttribute('width', '100%');
        $v_0.className = this.$7j_1 + 'Table' + '-default';
        if (RTE.Canvas.setTableWidths) {
            $v_0.className += ' ms-rte-paste-settablesizes';
        }
        this.generatedHtmlLocation.appendChild($v_0);
        var $v_1 = this.ownerDocument.createElement('TBODY');

        $v_0.appendChild($v_1);
        this.generatedHtmlLocation = $v_1;
    },
    onTableEnd: function RTE_RteHtmlPasteSteward$onTableEnd() {
        RTE.PasteCommon.Debug.assertString(RTE.PasteCommon.StringUtils.toUpper(this.generatedHtmlLocation.tagName) === 'TBODY', 'Expected Tag:  TBODY\nActual Tag:  ' + RTE.PasteCommon.StringUtils.toUpper(this.generatedHtmlLocation.tagName));
        this.$2v_1();
        this.$2v_1();
    },
    onTableRowStart: function RTE_RteHtmlPasteSteward$onTableRowStart() {
        var $v_0 = this.ownerDocument.createElement('TR');

        this.generatedHtmlLocation.appendChild($v_0);
        this.generatedHtmlLocation = $v_0;
    },
    onTableRowEnd: function RTE_RteHtmlPasteSteward$onTableRowEnd() {
        RTE.PasteCommon.Debug.assertString(RTE.PasteCommon.StringUtils.toUpper(this.generatedHtmlLocation.tagName) === 'TR', 'Expected Tag:  TR\nActual Tag:  ' + RTE.PasteCommon.StringUtils.toUpper(this.generatedHtmlLocation.tagName));
        this.$2v_1();
    },
    onTableCellStart: function RTE_RteHtmlPasteSteward$onTableCellStart($p0) {
        var $v_0 = this.ownerDocument.createElement('TD');

        $v_0.className = this.$7j_1 + 'Table' + '-default';
        this.generatedHtmlLocation.appendChild($v_0);
        this.generatedHtmlLocation = $v_0;
    },
    onTableCellEnd: function RTE_RteHtmlPasteSteward$onTableCellEnd() {
        RTE.PasteCommon.Debug.assertString(RTE.PasteCommon.StringUtils.toUpper(this.generatedHtmlLocation.tagName) === 'TD', 'Expected Tag:  TD\nActual Tag:  ' + RTE.PasteCommon.StringUtils.toUpper(this.generatedHtmlLocation.tagName));
        if (!this.generatedHtmlLocation.firstChild) {
            RTE.RteUtility.$3D(this.generatedHtmlLocation);
        }
        this.$2v_1();
    },
    onTablePartStart: function RTE_RteHtmlPasteSteward$onTablePartStart() {
        RTE.PasteCommon.Debug.assertNotReachedString('Table Parts Not Used!');
    },
    onTablePartEnd: function RTE_RteHtmlPasteSteward$onTablePartEnd() {
        RTE.PasteCommon.Debug.assertNotReachedString('Table Parts Not Used!');
    },
    $DU_1: function RTE_RteHtmlPasteSteward$$DU_1($p0) {
        this.generatedHtmlLocation.appendChild($p0.cloneNode(true));
    }
};
RTE.RteHtmlPasteSteward.FormattingSteward = function RTE_RteHtmlPasteSteward_FormattingSteward($p0, $p1) {
    this.$A2_0 = $p0;
    if ($p1) {
        this.$T_0 = $p1.$T_0.cloneNode(true);
        this.$2X_0 = $p1.$2X_0.cloneNode(false);
        this.$2V_0 = $p1.$2V_0;
        this.$1r_0 = $p1.$1r_0;
    }
    else {
        this.$T_0 = $p0.createElement('SPAN');
        this.$2X_0 = $p0.createElement('P');
        this.$2V_0 = 0;
        this.$1r_0 = 16;
    }
};
RTE.RteHtmlPasteSteward.FormattingSteward.$3o = function RTE_RteHtmlPasteSteward_FormattingSteward$$3o($p0, $p1, $p2) {
    var $v_0 = null;

    while ($p2 && $p2.tagName !== $p1) {
        $v_0 = $p2;
        $p2 = $p2.firstChild;
    }
    if ($p0 && !$p2 && $v_0) {
        $v_0.appendChild($v_0.ownerDocument.createElement($p1));
    }
    else if (!$p0 && $p2) {
        RTE.RteUtility.removeNodeAndKeepChildNodes($p2);
    }
};
RTE.RteHtmlPasteSteward.FormattingSteward.prototype = {
    $A2_0: null,
    $T_0: null,
    $2X_0: null,
    $2V_0: 0,
    $1r_0: 0,
    setLang: function RTE_RteHtmlPasteSteward_FormattingSteward$setLang($p0) {
        this.$T_0.lang = $p0;
        return true;
    },
    setTextDir: function RTE_RteHtmlPasteSteward_FormattingSteward$setTextDir($p0) {
        this.$T_0.dir = $p0;
        return true;
    },
    setBold: function RTE_RteHtmlPasteSteward_FormattingSteward$setBold($p0) {
        RTE.RteHtmlPasteSteward.FormattingSteward.$3o($p0, 'STRONG', this.$T_0);
        return true;
    },
    setItalics: function RTE_RteHtmlPasteSteward_FormattingSteward$setItalics($p0) {
        RTE.RteHtmlPasteSteward.FormattingSteward.$3o($p0, 'EM', this.$T_0);
        return true;
    },
    setUnderline: function RTE_RteHtmlPasteSteward_FormattingSteward$setUnderline($p0) {
        if (RTE.RteUtility.isInternetExplorer()) {
            this.$T_0.style.textDecorationUnderline = $p0;
        }
        else {
            if ($p0) {
                var $v_0 = this.$T_0.style.textDecoration;

                if (($v_0.toLowerCase()).indexOf('underline') < 0) {
                    this.$T_0.style.textDecoration = $v_0 + ' underline';
                }
            }
        }
        return true;
    },
    setStrikethrough: function RTE_RteHtmlPasteSteward_FormattingSteward$setStrikethrough($p0) {
        if (RTE.RteUtility.isInternetExplorer()) {
            this.$T_0.style.textDecorationLineThrough = $p0;
        }
        else {
            if ($p0) {
                var $v_0 = this.$T_0.style.textDecoration;

                if (($v_0.toLowerCase()).indexOf('line-through') < 0) {
                    this.$T_0.style.textDecoration = $v_0 + ' line-through';
                }
            }
        }
        return true;
    },
    setSubscript: function RTE_RteHtmlPasteSteward_FormattingSteward$setSubscript($p0) {
        RTE.RteHtmlPasteSteward.FormattingSteward.$3o($p0, 'SUB', this.$T_0);
        RTE.RteHtmlPasteSteward.FormattingSteward.$3o(!$p0, 'SUP', this.$T_0);
        return true;
    },
    setSuperscript: function RTE_RteHtmlPasteSteward_FormattingSteward$setSuperscript($p0) {
        RTE.RteHtmlPasteSteward.FormattingSteward.$3o($p0, 'SUP', this.$T_0);
        RTE.RteHtmlPasteSteward.FormattingSteward.$3o(!$p0, 'SUB', this.$T_0);
        return true;
    },
    setFontsize: function RTE_RteHtmlPasteSteward_FormattingSteward$setFontsize($p0) {
        if (RTE.SU.$2($p0)) {
            return false;
        }
        var $v_0 = RTE.RteUtility.parseUnitValue($p0);

        if ($v_0 && $v_0.unit.toLowerCase() === 'px') {
            this.$1r_0 = $v_0.value;
        }
        return true;
    },
    setFontface: function RTE_RteHtmlPasteSteward_FormattingSteward$setFontface($p0) {
        if (RTE.SU.$2($p0)) {
            return false;
        }
        return true;
    },
    growFontsize: function RTE_RteHtmlPasteSteward_FormattingSteward$growFontsize() {
        this.$1r_0 = this.$1r_0 + 4;
        return true;
    },
    shrinkFontsize: function RTE_RteHtmlPasteSteward_FormattingSteward$shrinkFontsize() {
        if (this.$1r_0 - 4 > 4) {
            this.$1r_0 = this.$1r_0 - 4;
        }
        else {
            this.$1r_0 = 4;
        }
        return true;
    },
    setFontColor: function RTE_RteHtmlPasteSteward_FormattingSteward$setFontColor($p0) {
        if (RTE.SU.$2($p0)) {
            return false;
        }
        return true;
    },
    setFontHighlight: function RTE_RteHtmlPasteSteward_FormattingSteward$setFontHighlight($p0) {
        if (RTE.SU.$7($p0)) {
            return false;
        }
        return true;
    },
    setHeading: function RTE_RteHtmlPasteSteward_FormattingSteward$setHeading($p0) {
        if ($p0 < 1 || 6 < $p0) {
            return false;
        }
        this.$2V_0 = $p0;
        return true;
    },
    setTextAlign: function RTE_RteHtmlPasteSteward_FormattingSteward$setTextAlign($p0) {
        if ($p0 === 'left' || $p0 === 'center' || $p0 === 'right' || $p0 === 'justify') {
            this.$2X_0.style.textAlign = $p0;
            return true;
        }
        return false;
    },
    clearFormatting: function RTE_RteHtmlPasteSteward_FormattingSteward$clearFormatting() {
        this.$T_0.removeAttribute('style');
        if (this.$T_0.firstChild) {
            this.$T_0.removeChild(this.$T_0.firstChild);
        }
        this.$2X_0.removeAttribute('style');
        return true;
    },
    clone: function RTE_RteHtmlPasteSteward_FormattingSteward$clone() {
        return new RTE.RteHtmlPasteSteward.FormattingSteward(this.$A2_0, this);
    },
    $LU_0: function RTE_RteHtmlPasteSteward_FormattingSteward$$LU_0($p0) {
        var $v_0 = !RTE.SU.$2(this.$T_0.style.cssText);

        if ($v_0 || this.$T_0.firstChild) {
            var $v_1 = this.$T_0.cloneNode(true);
            var $v_2 = $v_1;

            while ($v_2.firstChild) {
                $v_2 = $v_2.firstChild;
            }
            $v_2.appendChild($p0);
            $p0 = $v_0 ? $v_1 : $v_1.firstChild;
        }
        return $p0;
    },
    $Hx_0: function RTE_RteHtmlPasteSteward_FormattingSteward$$Hx_0() {
        var $v_0;

        if (!this.$2V_0) {
            $v_0 = this.$2X_0.cloneNode(false);
        }
        else {
            RTE.PasteCommon.Debug.assert(1 <= this.$2V_0 && this.$2V_0 <= 6);
            $v_0 = this.$2X_0.ownerDocument.createElement('H' + this.$2V_0);
            $v_0.style.cssText = this.$2X_0.style.cssText;
        }
        return $v_0;
    }
};
RTE.RteHtmlTranslator = function RTE_RteHtmlTranslator($p0) {
    this.$4T_2 = new Array(0);
    RTE.RteHtmlTranslator.initializeBase(this, [$p0]);
};
RTE.RteHtmlTranslator.$CY = function RTE_RteHtmlTranslator$$CY($p0) {
    if ($p0) {
        if ($p0.nodeType === 1) {
            return RTE.RteHtmlTranslator.$AL.test($p0.style.marginBottom);
        }
        return false;
    }
    return true;
};
RTE.RteHtmlTranslator.prototype = {
    onDivOpen: function RTE_RteHtmlTranslator$onDivOpen($p0) {
        if (this.$DZ_2($p0)) {
            return 3;
        }
        return RTE.HtmlImport.DefaultHtmlTranslator.prototype.onDivOpen.call(this, $p0);
    },
    onSpanOpen: function RTE_RteHtmlTranslator$onSpanOpen($p0) {
        if (this.$DZ_2($p0)) {
            return 3;
        }
        return 2;
    },
    onPOpen: function RTE_RteHtmlTranslator$onPOpen($p0) {
        var $v_0 = true;
        var $v_1 = RTE.PasteCommon.CustomData.getObject($p0, 'SpecialProcessing');

        if ($v_1) {
            if ($v_1 === 'IgnoreAll') {
                return 3;
            }
            if ($v_1 === 'IgnoreOpen') {
                $v_0 = false;
            }
        }
        var $v_2 = Sys.UI.DomElement.containsCssClass($p0, 'MsoTitle');
        var $v_3 = $p0.getAttribute('align');

        if ($v_0) {
            if ($v_2) {
                var $$t_B = this;

                this.handleSpecifiedFormatting(function($p1_0) {
                    return $p1_0.setHeading(1);
                });
            }
            var $$t_C = this;

            this.handleSpecifiedFormatting(function($p1_0) {
                return $p1_0.setTextAlign($v_3);
            });
            this.normalizer.onParagraphStart();
        }
        var $$t_D = this;

        this.registerOnCloseCallback(function() {
            var $v_4 = RTE.RteUtility.$t($p0, false);
            var $v_5 = true;

            if ($v_4 && $v_4.nodeType === 1 && $v_4.tagName.toUpperCase() === 'P') {
                var $v_6 = $v_4.getAttribute('align');
                var $v_7 = Sys.UI.DomElement.containsCssClass($v_4, 'MsoTitle');

                if ($v_3 === $v_6 && $v_2 === $v_7 && RTE.RteHtmlTranslator.$CY($p0)) {
                    if ($v_4.firstChild === $v_4.lastChild && (!$v_4.firstChild || RTE.RteUtility.$3w($v_4.firstChild, true)) && RTE.RteHtmlTranslator.$CY($v_4)) {
                        RTE.PasteCommon.CustomData.$4J($v_4, 'SpecialProcessing', 'IgnoreAll');
                        RTE.RteUtility.removeChildNodes($v_4);
                    }
                    else {
                        $v_5 = false;
                        $$t_D.normalizer.onLineBreak();
                        RTE.PasteCommon.CustomData.$4J($v_4, 'SpecialProcessing', 'IgnoreOpen');
                    }
                }
            }
            if ($v_5) {
                $$t_D.normalizer.onParagraphEnd();
            }
        });
        return 1;
    },
    $DZ_2: function RTE_RteHtmlTranslator$$DZ_2($p0) {
        if (this.$4T_2) {
            for (var $v_0 = 0; $v_0 < this.$4T_2.length; $v_0++) {
                if (Sys.UI.DomElement.containsCssClass($p0, this.$4T_2[$v_0])) {
                    this.normalizer.$DU_3($p0);
                    return true;
                }
            }
        }
        return false;
    }
};
RTE.RteHtmlNormalizer = function RTE_RteHtmlNormalizer($p0) {
    RTE.RteHtmlNormalizer.initializeBase(this, [$p0]);
};
RTE.RteHtmlNormalizer.prototype = {
    $DU_3: function RTE_RteHtmlNormalizer$$DU_3($p0) {
        if (RTE.RteUtility.$N($p0)) {
            this.ensureOutsideParagraph();
        }
        this.steward.$DU_1($p0);
    }
};
RTE.RteRibbonBuilder = function RTE_RteRibbonBuilder() {
};
RTE.RteRibbonBuilder.$AZ = function RTE_RteRibbonBuilder$$AZ($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
    RTE.RteUtility.classMustExist('CUI.JsonXmlElement');
    var $v_0 = new CUI.JsonXmlElement('Menu', {
        Id: $p1
    });
    var $v_1 = ($v_0.appendChild('MenuSection', {
        Id: $p2
    })).appendChild('Controls', {
        Id: $p2 + 'controls'
    });

    for (var $v_2 = 0; $v_2 < $p0.length; $v_2++) {
        var $v_3 = $p0[$v_2];
        var $v_4 = $v_3.rule.selectorText;
        var $v_5 = RTE.StyleRuleUtility.$38($v_4, $p8 + '-');
        var $v_6 = RTE.StyleRuleUtility.$2G($v_3, $v_5, null);

        if ($v_6) {
            $v_1.appendChild('Button', {
                Id: $p3 + $v_2.toString(),
                LabelText: $v_6,
                CommandType: 'OptionSelection',
                MenuItemId: $p4 + $v_2.toString(),
                CommandValueId: $v_3.rule.selectorText,
                Command: $p4,
                CommandPreview: $p5,
                CommandRevert: $p6,
                QueryCommand: $p7
            });
        }
    }
    return $v_0;
};
RTE.RteRibbonBuilder.$FH = function RTE_RteRibbonBuilder$$FH($p0, $p1) {
    var $v_0 = new RTE.GalleryData();
    var $v_1 = new Sys.StringBuilder();

    $v_1.append('<Menu Id=\'');
    $v_1.append('ms-rte-styleGalleryMenu');
    $v_1.append('\'>');
    var $v_2 = RTE.Canvas.getCurrentStyleSheetPrefix();
    var $v_3 = RTE.Canvas.currentEditableRegion();
    var $v_4 = RTE.RteUtility.$Bj($v_3);
    var $v_5 = RTE.RteRibbonBuilder.$I1($v_3, $v_4);
    var $v_6 = RTE.RteRibbonBuilder.$FC($v_4, $v_5);
    var $v_7 = RTE.Canvas.getCachedRestriction($v_3, 'UseInlineStyle', false);

    if ($p1 && $p1.length > 0) {
        RTE.RteRibbonBuilder.$AM($v_1, $v_0, SP.Res.markupStylesMenuTitle, $p1, 'Ribbon.EditingTools.CPEditTab.Paragraph.ElementWithStyle.Menu', 'Ribbon.EditingTools.CPEditTab.Paragraph.ElementWithStyle.Menu.Styles', 'ElementWithStyle', 'ElementWithStyle', 'ElementWithStylePreview', 'ElementWithStylePreviewRevert', 'QueryElementWithStyle', $v_2 + 'Element', true, $v_6, $v_7);
    }
    if (!$v_7 && $p0 && $p0.length > 0) {
        RTE.RteRibbonBuilder.$AM($v_1, $v_0, SP.Res.textStylesMenuTitle, $p0, 'ms-rte-styleGalleryMenu', 'Ribbon.EditingTools.CPEditTab.Styles.Styles.Menu.Styles', 'Ribbon.EditingTools.CPEditTab.Styles.Styles.Menu.Styles.TextStyle', 'TextStyle', 'TextStylePreview', 'TextStylePreviewRevert', 'QueryTextStyle', $v_2 + 'Style', false, $v_6, $v_7);
    }
    $v_1.append('</Menu>');
    $v_0.gallery = $v_1.toString();
    return $v_0;
};
RTE.RteRibbonBuilder.$I1 = function RTE_RteRibbonBuilder$$I1($p0, $p1) {
    var $v_0 = RTE.RteUtility.$Aw($p1.backgroundColor, 0.6);

    while (RTE.RteRibbonBuilder.$Co($v_0) && $p0.parentNode) {
        $p0 = $p0.parentNode;
        if (RTE.RteRibbonBuilder.$Co($v_0)) {
            var $v_1 = RTE.RteUtility.$Bj($p0);

            if ($v_1) {
                $v_0 = RTE.RteUtility.$Aw($v_1.backgroundColor, 0.6);
            }
        }
    }
    return $v_0;
};
RTE.RteRibbonBuilder.$Co = function RTE_RteRibbonBuilder$$Co($p0) {
    return !$p0 || !$p0.length || $p0 === 'transparent' || $p0.startsWith('rgba');
};
RTE.RteRibbonBuilder.$AM = function RTE_RteRibbonBuilder$$AM($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8, $p9, $p10, $p11, $p12, $p13, $p14) {
    $p0.append('<MenuSection Id=\'' + $p5 + '\'');
    $p0.append(' Title=\'');
    $p0.append(SP.Utilities.HttpUtility.escapeXmlText($p2));
    $p0.append('\'>');
    $p0.append('<Gallery Id=\'' + $p5 + '.Gallery\' ElementDimensions=\'SizeCustom\' Width=\'5\' Command=\'');
    $p0.append($p7);
    $p0.append('\'>');
    for (var $v_0 = 0; $v_0 < $p3.length; $v_0++) {
        var $v_1 = $p3[$v_0];
        var $v_2 = $v_1.rule.selectorText;
        var $v_3 = RTE.StyleRuleUtility.$38($v_2, $p11 + '-');
        var $v_4 = RTE.StyleRuleUtility.$2G($v_1, $v_3, null);

        if ($v_4 && (!$p14 || RTE.StyleRuleUtility.$Cc($v_1))) {
            $p0.append('<GalleryButton');
            $p0.append(' id=\'' + $p6);
            $p0.append($v_0.toString());
            $p0.append('\' InnerHTML=\"');
            $p0.append(SP.Utilities.HttpUtility.escapeXmlText(RTE.RteRibbonBuilder.$Be($v_1, $p13, $v_4, false)));
            $p0.append('\" Alt=\'');
            $p0.append(SP.Utilities.HttpUtility.escapeXmlText($v_4));
            $p0.append('\' CommandType=\'OptionSelection\' MenuItemId=\'');
            $p0.append($p7 + $v_0.toString());
            $p0.append('\' CommandValueId=\'');
            $p0.append(RTE.StyleRuleUtility.$AY($v_1, $p12));
            $p0.append('\' Command=\'');
            $p0.append($p7);
            $p0.append('\' CommandPreview=\'');
            $p0.append($p8);
            $p0.append('\' CommandRevert=\'');
            $p0.append($p9);
            $p0.append('\' QueryCommand=\'');
            $p0.append($p10);
            $p0.append('\' />');
            if ($p1.ribbonButtons.length < 5) {
                var $v_5 = new RTE.StyleButton();

                $v_5.preview = RTE.RteRibbonBuilder.$Be($v_1, $p13, $v_4, true);
                $v_5.commandValueId = RTE.StyleRuleUtility.$AY($v_1, $p12);
                $v_5.isElementStyle = $p12;
                $p1.ribbonButtons[$p1.ribbonButtons.length] = $v_5;
            }
        }
    }
    $p0.append('</Gallery></MenuSection>');
};
RTE.RteRibbonBuilder.$Be = function RTE_RteRibbonBuilder$$Be($p0, $p1, $p2, $p3) {
    var $v_0 = $p0.rule.selectorText;
    var $v_1 = RTE.StyleRuleUtility.$2c($v_0);
    var $v_2 = (RTE.StyleRuleUtility.$6M($v_0) || 'P').toUpperCase();
    var $v_3 = $v_2 === 'DIV' ? ' width: 100% !important; overflow: hidden !important;' : '';

    if ($v_2 === 'DIV' || !RTE.SU.$2($p0.rule.style.padding)) {
        $v_3 += ' padding: 5px !important;';
    }
    var $v_4 = SP.Utilities.HttpUtility.escapeXmlText(SP.Res.styleGalleryPreviewText);
    var $v_5 = String.format('<{0} unselectable=\'on\' class=\'{1}\' style=\'position: static !important; margin: 0px !important;line-height: 100% !important;{2}\'>{3}</{0}>', $v_2.toLowerCase(), $v_1, $v_3, $v_4);
    var $v_6 = $p3 ? 'ms-rte-styleRibbonPreview' : 'ms-rte-styleGalleryPreview';

    $v_5 = String.format('<div unselectable=\'on\' class=\'ms-rte-stylePreview {0}\'>\r\n                            <div unselectable=\'on\' class=\'ms-rte-stylePreviewBox\'>\r\n                                <div unselectable=\'on\' class=\'ms-rte-stylePreviewBoxInner\' style=\'{1}\'>\r\n                                    <div unselectable=\'on\' class=\'ms-rte-stylePreviewHolder\'><span style=\'white-space:nowrap;\'>{2}</span></div>\r\n                                </div>\r\n                            </div>\r\n                            <div unselectable=\'on\' class=\'ms-rte-stylePreviewTitle ms-cui-ctl-mediumlabel\'>{3}</div>\r\n                        </div>', $v_6, $p1, $v_5, $p2);
    return $v_5;
};
RTE.RteRibbonBuilder.$Bt = function RTE_RteRibbonBuilder$$Bt() {
    var $v_0 = RTE.RteUtility.htmlEncode(SP.Res.styleButtonNotAvailable);

    return String.format('<div unselectable=\'on\' class=\'ms-rte-stylePreview ms-rte-styleRibbonPreview ms-cui-disabled\'>\r\n                    <div unselectable=\'on\' class=\'ms-rte-stylePreviewTitleFull ms-cui-ctl-mediumlabel\'>{0}</div>\r\n                  </div>', $v_0);
};
RTE.RteRibbonBuilder.$FC = function RTE_RteRibbonBuilder$$FC($p0, $p1) {
    var $v_0 = '';

    if ($p0) {
        $v_0 += RTE.RteRibbonBuilder.$5z($p0, 'color', 'color');
        $v_0 += RTE.RteRibbonBuilder.$5z($p0, 'fontFamily', 'font-family');
        $v_0 += RTE.RteRibbonBuilder.$5z($p0, 'fontSize', 'font-size');
        $v_0 += RTE.RteRibbonBuilder.$5z($p0, 'fontWeight', 'font-weight');
        $v_0 += 'background-color: ' + RTE.RteUtility.htmlAttributeEncode($p1) + ';';
    }
    return $v_0;
};
RTE.RteRibbonBuilder.$5z = function RTE_RteRibbonBuilder$$5z($p0, $p1, $p2) {
    var $v_0 = $p0[$p1];

    if ($v_0 && $v_0.length > 0) {
        return $p2 + ':' + RTE.RteUtility.htmlAttributeEncode($v_0) + ';';
    }
    return '';
};
RTE.RteRibbonBuilder.parseRibbonStyleButtonIndex = function RTE_RteRibbonBuilder$parseRibbonStyleButtonIndex($p0) {
    var $v_0 = -1;

    if ($p0 && $p0.length > 0) {
        $v_0 = Number.parseInvariant($p0.substr($p0.length - 1));
    }
    return $v_0;
};
RTE.UnitValue = function RTE_UnitValue() {
};
RTE.UnitValue.prototype = {
    value: 0,
    unit: null
};
RTE.RteUtility = function RTE_RteUtility() {
};
RTE.RteUtility.get_nonbreakSpace = function RTE_RteUtility$get_nonbreakSpace() {
    return RTE.RteUtility.$3X;
};
RTE.RteUtility.$Jh = function RTE_RteUtility$$Jh($p0, $p1, $p2) {
    var $v_0 = $p0.nodeValue;
    var $v_1 = $p1.nodeValue;
    var $v_2 = $p1;
    var $v_3 = $p0;

    if ($p2) {
        $v_2 = $p0;
        $v_3 = $p1;
    }
    $v_2.nodeValue = $v_0 + $v_1;
    RTE.RteUtility.$J($v_3);
};
RTE.RteUtility.$Dz = function RTE_RteUtility$$Dz($p0) {
    if (RTE.SU.$2($p0.style.cssText)) {
        $p0.removeAttribute('style');
    }
};
RTE.RteUtility.removeQuotes = function RTE_RteUtility$removeQuotes(name) {
    if (name.charAt(0) === '\"' && name.length > 1 && name.charAt(name.length - 1) === '\"') {
        return name.substring(1, name.length - 1);
    }
    return name;
};
RTE.RteUtility.removeNodeAndKeepChildNodes = function RTE_RteUtility$removeNodeAndKeepChildNodes(node) {
    var $v_0 = node.parentNode;

    if (!$v_0) {
        return;
    }
    while (node.firstChild) {
        $v_0.insertBefore(node.firstChild, node);
    }
    $v_0.removeChild(node);
};
RTE.RteUtility.htmlEncode = function RTE_RteUtility$htmlEncode(value) {
    value = value.replace(new RegExp('&', 'g'), '&amp;');
    value = value.replace(new RegExp('\"', 'g'), '&quot;');
    value = value.replace(new RegExp('\'', 'g'), '&#39;');
    value = value.replace(new RegExp('<', 'g'), '&lt;');
    value = value.replace(new RegExp('>', 'g'), '&gt;');
    value = value.replace(new RegExp(RTE.RteUtility.$3X, 'g'), '&#160;');
    return value;
};
RTE.RteUtility.htmlAttributeEncode = function RTE_RteUtility$htmlAttributeEncode(value) {
    value = value.replace(new RegExp('&', 'g'), '&amp;');
    value = value.replace(new RegExp('<', 'g'), '&lt;');
    value = value.replace(new RegExp('\"', 'g'), '&quot;');
    value = value.replace(new RegExp('\'', 'g'), '&#39;');
    return value;
};
RTE.RteUtility.urlEncode = function RTE_RteUtility$urlEncode(value) {
    return encodeURIComponent(value);
};
RTE.RteUtility.$3U = function RTE_RteUtility$$3U($p0, $p1, $p2) {
    var $v_0 = ($p0.substring($p2, $p0.length)).search($p1);

    return $v_0 !== -1 ? $v_0 + $p2 : $v_0;
};
RTE.RteUtility.$Dj = function RTE_RteUtility$$Dj($p0) {
    var $v_0 = $p0.previousSibling;

    while ($v_0 && SP.UI.UIUtility.isTextNode($v_0)) {
        $v_0 = $v_0.previousSibling;
    }
    return $v_0;
};
RTE.RteUtility.focusNoFail = function RTE_RteUtility$focusNoFail(element) {
    try {
        element.focus();
    }
    catch ($$e_1) { }
};
RTE.RteUtility.getServerRelativeUrl = function RTE_RteUtility$getServerRelativeUrl(url) {
    var $v_0 = url.indexOf('://');

    if ($v_0 < 0) {
        return url;
    }
    var $v_1 = url.indexOf('/', $v_0 + 3);

    return $v_1 > 0 ? url.substr($v_1) : '';
};
RTE.RteUtility.$I9 = function RTE_RteUtility$$I9($p0, $p1) {
    var $v_0 = null;
    var $v_1 = $p0.innerHTML;

    if (RTE.RteUtility.$8r === $p0) {
        if ($v_1 === RTE.RteUtility.$8p) {
            $v_0 = RTE.RteUtility.$4B(RTE.RteUtility.$8q, $p1, $p1);
        }
    }
    if (RTE.SU.$2($v_0)) {
        var $v_2 = [];
        var $v_3 = null;

        if (RTE.RteUtility.$Li()) {
            $v_3 = new RTE.Ie8TreeValidator($p0);
        }
        RTE.RteUtility.$8T($v_2, $p0, $v_3);
        $v_0 = $v_2.join('');
        RTE.RteUtility.$8q = $v_0;
        RTE.RteUtility.$8p = $v_1;
        RTE.RteUtility.$8r = $p0;
        $v_0 = RTE.RteUtility.$4B($v_0, $p1, $p1);
    }
    return $v_0;
};
RTE.RteUtility.$6I = function RTE_RteUtility$$6I($p0) {
    while ($p0 && !RTE.RteUtility.$N($p0)) {
        $p0 = $p0.parentNode;
    }
    return $p0;
};
RTE.RteUtility.$Bm = function RTE_RteUtility$$Bm($p0, $p1, $p2) {
    var $v_0 = RTE.RteUtility.$CS($p0, $p1, $p2, true);

    if ($v_0) {
        $v_0[$v_0.length] = $p0;
    }
    return $v_0;
};
RTE.RteUtility.$CS = function RTE_RteUtility$$CS($p0, $p1, $p2, $p3) {
    var $v_0 = null;

    if ($p3 && $p0 !== $p1) {
        $p0 = RTE.RteUtility.$LR($p0, $p2);
        if (null === ($p2 ? RTE.RteUtility.$m($p0, false) : RTE.RteUtility.$t($p0, false))) {
            $v_0 = $p0.parentNode;
        }
    }
    var $v_1;

    if ($p0 === $p1) {
        $v_1 = new Array(0);
    }
    else if ($p0 === document.body) {
        $v_1 = null;
    }
    else {
        $v_1 = RTE.RteUtility.$CS($p0.parentNode, $p1, $p2, !!$v_0);
        if ($v_1) {
            $v_1[$v_1.length] = $v_0;
        }
    }
    return $v_1;
};
RTE.RteUtility.$LR = function RTE_RteUtility$$LR($p0, $p1) {
    var $v_0 = RTE.RteUtility.$1e($p0.parentNode, false);
    var $v_1 = !$p1 && RTE.RteUtility.$N($p0.parentNode) && !!$v_0 && $v_0.nodeType === 1 && $v_0.tagName === 'BR';

    do {
        var $v_2 = $p1 ? RTE.RteUtility.$m($p0, false) : RTE.RteUtility.$t($p0, false);

        if (!RTE.RteUtility.$1P($v_2) && !($v_1 && $v_2 === $v_0)) {
            break;
        }
        $p0 = $v_2;
    } while ($p0);
    return $p0;
};
RTE.RteUtility.$6V = function RTE_RteUtility$$6V($p0, $p1) {
    RTE.RteUtility.$CT($p0, $p1.nextSibling, $p1.parentNode);
};
RTE.RteUtility.$CO = function RTE_RteUtility$$CO($p0, $p1) {
    RTE.RteUtility.$CT($p0, $p1, $p1.parentNode);
};
RTE.RteUtility.$CT = function RTE_RteUtility$$CT($p0, $p1, $p2) {
    if (!$p2 || !$p0) {
        return;
    }
    if (!RTE.RteUtility.$N($p0) && !RTE.RteUtility.$4v($p0)) {
        if ($p0.nodeType !== 1 || !($p0.getElementsByTagName('DIV')).length && !($p0.getElementsByTagName('P')).length) {
            $p2.insertBefore($p0, $p1);
            return;
        }
    }
    var $v_0 = $p2;
    var $v_1 = new Array(0);

    while (!RTE.RteUtility.$N($v_0) && !RTE.Canvas.$i($v_0)) {
        Array.add($v_1, $v_0);
        $v_0 = $v_0.parentNode;
    }
    if (RTE.HtmlTagName.allowedElementStyleTags[$v_0.tagName.toUpperCase()]) {
        Array.add($v_1, $v_0);
    }
    if (!$v_1.length) {
        $p2.insertBefore($p0, $p1);
        return;
    }
    var $v_2 = null;

    for (var $v_4 = 0; $v_4 < $v_1.length; $v_4++) {
        var $v_5 = $v_1[$v_4];
        var $v_6 = $v_5.cloneNode(false);

        if ($v_2) {
            $v_6.appendChild($v_2);
        }
        while ($p1) {
            var $v_7 = $p1.nextSibling;

            if (!RTE.RteUtility.$6W($p1)) {
                $v_6.appendChild($p1);
            }
            $p1 = $v_7;
        }
        if ($v_6.firstChild) {
            $v_2 = $v_6;
        }
        $p1 = $v_5.nextSibling;
        if ($v_4 < $v_1.length - 1) {
            if (RTE.RteUtility.$8c($v_5)) {
                RTE.RteUtility.removeNodeAndKeepChildNodes($v_5);
            }
        }
    }
    var $v_3 = $v_1[$v_1.length - 1];

    if ($v_2) {
        SP.UI.UIUtility.insertAfter($v_2, $v_3);
        RTE.RteUtility.$Am($v_2);
    }
    SP.UI.UIUtility.insertAfter($p0, $v_3);
    if (RTE.RteUtility.$8c($v_3)) {
        RTE.RteUtility.removeNodeAndKeepChildNodes($v_3);
    }
};
RTE.RteUtility.$Am = function RTE_RteUtility$$Am($p0) {
    if ($p0.nodeType === 1 && !RTE.RteUtility.$1P($p0)) {
        if ($p0.firstChild && $p0.firstChild === $p0.lastChild) {
            RTE.RteUtility.$Am($p0.firstChild);
        }
        if (RTE.RteUtility.$8c($p0)) {
            RTE.RteUtility.removeNodeAndKeepChildNodes($p0);
        }
    }
};
RTE.RteUtility.$8c = function RTE_RteUtility$$8c($p0) {
    for (var $v_0 = 0; $v_0 < $p0.childNodes.length; $v_0++) {
        if (!RTE.RteUtility.$40($p0.childNodes[$v_0])) {
            return false;
        }
    }
    return true;
};
RTE.RteUtility.$4v = function RTE_RteUtility$$4v($p0) {
    if ($p0.nodeType === 1) {
        for (var $v_0 = 0; $v_0 < $p0.childNodes.length; $v_0++) {
            if (RTE.RteUtility.$N($p0.childNodes[$v_0])) {
                return true;
            }
        }
    }
    return false;
};
RTE.RteUtility.$Bj = function RTE_RteUtility$$Bj($p0) {
    try {
        var $v_0 = $p0.currentStyle;

        if (!$v_0) {
            var $v_1 = document.defaultView;

            if ($v_1 && $v_1.getComputedStyle) {
                $v_0 = $v_1.getComputedStyle($p0, null);
            }
        }
        return $v_0;
    }
    catch ($$e_3) {
        return null;
    }
};
RTE.RteUtility.$6a = function RTE_RteUtility$$6a($p0, $p1) {
    return !RTE.RteUtility.$1y($p0, true) && (!$p1 || !RTE.RteUtility.$1P($p0));
};
RTE.RteUtility.$m = function RTE_RteUtility$$m($p0, $p1) {
    var $v_0 = $p0;

    do {
        $v_0 = $v_0.previousSibling;
    } while ($v_0 && !RTE.RteUtility.$6a($v_0, $p1));
    return $v_0;
};
RTE.RteUtility.$Li = function RTE_RteUtility$$Li() {
    if (!RTE.RteUtility.isInternetExplorer()) {
        return false;
    }
    var $v_0 = true;

    if (typeof msRichTextEditorEnableIEValidator === 'boolean') {
        $v_0 = msRichTextEditorEnableIEValidator;
    }
    return $v_0;
};
RTE.RteUtility.$t = function RTE_RteUtility$$t($p0, $p1) {
    var $v_0 = $p0;

    do {
        $v_0 = $v_0.nextSibling;
    } while ($v_0 && !RTE.RteUtility.$6a($v_0, $p1));
    return $v_0;
};
RTE.RteUtility.$1x = function RTE_RteUtility$$1x($p0, $p1) {
    var $v_0 = $p0.firstChild;

    if ($v_0 && !RTE.RteUtility.$6a($v_0, $p1)) {
        $v_0 = RTE.RteUtility.$t($v_0, $p1);
    }
    return $v_0;
};
RTE.RteUtility.$1e = function RTE_RteUtility$$1e($p0, $p1) {
    var $v_0 = $p0.lastChild;

    if ($v_0 && !RTE.RteUtility.$6a($v_0, $p1)) {
        $v_0 = RTE.RteUtility.$m($v_0, $p1);
    }
    return $v_0;
};
RTE.RteUtility.$IH = function RTE_RteUtility$$IH($p0, $p1, $p2) {
    var $v_0 = null;

    try {
        $v_0 = $p1.outerHTML;
    }
    catch ($$e_4) { }
    if (!RTE.SU.$7($v_0) && RTE.RteUtility.$7c) {
        var $v_7 = RTE.RteUtility.$6R[$v_0];

        if (!RTE.SU.$7($v_7)) {
            var $v_8 = $v_7.length;

            for (var $v_9 = 0; $v_9 < $v_8; $v_9++) {
                var $v_A = $v_7[$v_9];

                $p0.push($v_A);
            }
            return false;
        }
    }
    var $v_1 = false;
    var $v_2 = [];
    var $v_3 = $p1.className;
    var $v_4 = $p1.tagName;

    if ($v_4) {
        $v_4 = $v_4.toUpperCase();
    }
    if (SP.UI.UIUtility.isTextNode($p1)) {
        var $v_B = $p1.nodeValue;

        $v_2.push(RTE.RteUtility.htmlEncode($v_B));
    }
    else if (SP.UI.UIUtility.isSvgNode($p1)) {
        var $v_C = RTE.RteUtility.$If($p1);

        $v_2.push($v_C);
    }
    else if ($v_3 && $v_3.indexOf('ms-rtegenerate-notify') !== -1) {
        var $v_D = new Sys.StringBuilder();
        var $v_E = {};

        $v_E.html = $v_D;
        $v_E.node = $p1;
        RTE.CanvasEvents.dispatchEvent('ElementGenerateTag', null, $v_E);
        $v_2.push($v_D.toString());
    }
    else if ($v_3 && $v_3.indexOf('ms-rtegenerate-object') !== -1) {
        $v_2.push($p1.getAttribute('object'));
    }
    else if ($v_4 === 'XML' || $v_4 === 'SCRIPT' || $v_4 === 'STYLE') {
        var $v_F = $v_4.toLowerCase();

        RTE.RteUtility.$36($v_2, $p1);
        $v_2.push($p1.innerHTML);
        RTE.RteUtility.$6H($v_2, $v_F);
    }
    else if ($v_4 === 'OBJECT' || $v_4 === 'EMBED') {
        var $v_G = [];
        var $v_H = $v_4.toLowerCase();

        RTE.RteUtility.$36($v_G, $p1);
        if (!$p1.childNodes.length || !RTE.RteUtility.isInternetExplorer()) {
            $v_G.push($p1.innerHTML);
        }
        else {
            RTE.RteUtility.$8T($v_G, $p1, $p2);
            $v_G.push($p1.altHtml);
        }
        RTE.RteUtility.$6H($v_G, $v_H);
        var $v_I = RTE.RteUtility.$Dt($v_G.join(''), false);

        $v_2.push($v_I);
        var $v_J = document.createElement('SPAN');

        $v_J.className = 'ms-rtegenerate-object';
        $v_J.setAttribute('object', $v_I);
        $v_J.contentEditable = false;
        $p1.parentNode.insertBefore($v_J, $p1);
        $v_J.appendChild($p1);
    }
    else if ($v_4 && $v_4.charAt(0) === '/') { }
    else {
        var $v_K = false;
        var $v_L = false;

        if ($v_3 && $v_3.indexOf('ms-rtegenerate-skip') !== -1) {
            $v_K = true;
        }
        else if ($v_3 && $v_3.indexOf('ms-rtegenerate-allskip') !== -1) {
            $v_K = true;
            $v_L = true;
        }
        else if (RTE.RteUtility.$3v($p1)) {
            RTE.RteUtility.$Hy($v_2, $p1);
            $v_L = true;
            $v_K = true;
        }
        else if (RTE.RteUtility.$CZ($p1)) {
            RTE.RteUtility.$Ht($v_2, $p1);
            $v_L = true;
            $v_K = true;
        }
        else if ($v_4.indexOf('<') > -1 || RTE.SU.$2($v_4)) {
            $v_K = true;
        }
        if (!$v_K) {
            RTE.RteUtility.$36($v_2, $p1);
            var $v_M = $p1.id;

            if ($v_M && $v_M.indexOf('ms-rterangecursor') !== -1) {
                $v_1 = true;
            }
        }
        if (!$v_L) {
            if ($p1.childNodes.length > 0) {
                var $v_N = RTE.RteUtility.$8T($v_2, $p1, $p2);

                $v_1 = !!($v_1 | $v_N);
            }
            else {
                RTE.RteUtility.$Hu($v_2, $p1);
            }
            if (($v_4 === 'DIV' || $v_4 === 'P') && $p1.innerText === '' && $p1.offsetHeight && RTE.SU.$2($p1.style.minHeight) && RTE.SU.$2($p1.style.height) && !RTE.Canvas.$i($p1)) {
                var $v_O = $p1.innerHTML;

                if (!$v_O || ($v_O.toUpperCase()).indexOf('<BR') === -1 && ($v_O.toUpperCase()).indexOf('<IMG') === -1) {
                    $v_2.push('&#160;');
                }
            }
        }
        if (!$v_K) {
            var $v_P = $v_4.toLowerCase();

            RTE.RteUtility.$6H($v_2, $v_P);
        }
    }
    var $v_5 = $v_2.length;
    var $v_6 = 0;

    for (var $v_Q = 0; $v_Q < $v_5; $v_Q++) {
        var $v_R = $v_2[$v_Q];

        $p0.push($v_R);
        $v_6 += $v_R.length;
    }
    if (!RTE.SU.$7($v_0) && !$v_1 && RTE.RteUtility.$7c) {
        RTE.RteUtility.$6R[$v_0] = $v_2;
        RTE.RteUtility.$6S += $v_6;
    }
    return $v_1;
};
RTE.RteUtility.$If = function RTE_RteUtility$$If($p0) {
    if (typeof XMLSerializer !== 'undefined') {
        var $v_0 = new XMLSerializer();

        return $v_0.serializeToString($p0);
    }
    return $p0.xml || '';
};
RTE.RteUtility.$8T = function RTE_RteUtility$$8T($p0, $p1, $p2) {
    var $v_0 = $p1.childNodes;
    var $v_1 = $v_0.length;
    var $v_2 = false;
    var $v_3 = $p1.uniqueID;

    for (var $v_4 = 0; $v_4 < $v_1; $v_4++) {
        var $v_5 = $v_0[$v_4];

        if (RTE.RteUtility.isInternetExplorer()) {
            if ($p2 && !$p2.$LK_0($p1, $v_5) || !$p2 && $v_5.parentNode && $v_5.parentNode.uniqueID !== $v_3) {
                continue;
            }
        }
        var $v_6 = RTE.RteUtility.$IH($p0, $v_5, $p2);

        $v_2 = !!($v_2 | $v_6);
    }
    return $v_2;
};
RTE.RteUtility.$Fm = function RTE_RteUtility$$Fm() {
    if (RTE.RteUtility.$6S > 1310720 && RTE.RteUtility.$6S < 0) {
        RTE.RteUtility.$6R = {};
    }
    if (RTE.RteUtility.$5g > 1310720 && RTE.RteUtility.$5g < 0) {
        RTE.RteUtility.$7V = {};
        RTE.RteUtility.$5g = 0;
    }
    window.setTimeout(RTE.RteUtility.$85, 1800000);
};
RTE.RteUtility.$C6 = function RTE_RteUtility$$C6() {
    if (!RTE.RteUtility.isFirefox()) {
        return document.body;
    }
    else {
        return window.self.self;
    }
};
RTE.RteUtility.$s = function RTE_RteUtility$$s($p0, $p1) {
    var $v_0 = RTE.RteUtility.$C6();

    $addHandler($v_0, $p0, $p1);
};
RTE.RteUtility.$BC = function RTE_RteUtility$$BC($p0, $p1) {
    var $v_0 = RTE.RteUtility.$C6();

    $removeHandler($v_0, $p0, $p1);
};
RTE.RteUtility.$5k = function RTE_RteUtility$$5k($p0) {
    while ($p0.childNodes.length > 0) {
        SP.UI.UIUtility.insertBefore($p0.childNodes[0], $p0);
    }
};
RTE.RteUtility.$4N = function RTE_RteUtility$$4N($p0) {
    while ($p0.childNodes.length > 0) {
        SP.UI.UIUtility.insertAfter($p0.childNodes[$p0.childNodes.length - 1], $p0);
    }
};
RTE.RteUtility.$8V = function RTE_RteUtility$$8V($p0) {
    var $v_0 = {};

    $v_0.x = 0;
    $v_0.y = 0;
    RTE.RteUtility.$IQ($p0, $v_0);
    return $v_0;
};
RTE.RteUtility.$IQ = function RTE_RteUtility$$IQ($p0, $p1) {
    while ($p0 && $p0 !== document.documentElement) {
        $p1.x += $p0.offsetLeft;
        $p1.y += $p0.offsetTop;
        $p0 = $p0.offsetParent;
    }
};
RTE.RteUtility.$IY = function RTE_RteUtility$$IY($p0) {
    var $v_0 = {};

    $v_0.x = 0;
    $v_0.y = 0;
    RTE.RteUtility.$IZ($p0, $v_0);
    return $v_0;
};
RTE.RteUtility.$IZ = function RTE_RteUtility$$IZ($p0, $p1) {
    while ($p0 && $p0 !== document.documentElement) {
        $p1.x += $p0.scrollLeft;
        $p1.y += $p0.scrollTop;
        $p0 = $p0.parentNode;
    }
};
RTE.RteUtility.$IX = function RTE_RteUtility$$IX($p0) {
    var $v_0 = {};

    $v_0.x = 0;
    $v_0.y = 0;
    RTE.RteUtility.$Bz($p0, $v_0);
    return $v_0;
};
RTE.RteUtility.$Bz = function RTE_RteUtility$$Bz($p0, $p1) {
    if (!$p0) {
        return;
    }
    $p1.x += $p0.offsetLeft - $p0.scrollLeft;
    $p1.y += $p0.offsetTop - $p0.scrollTop;
    RTE.RteUtility.$Bz($p0.offsetParent, $p1);
};
RTE.RteUtility.getOffset = function RTE_RteUtility$getOffset(elem) {
    var $v_0 = {};

    $v_0.x = 0;
    $v_0.y = 0;
    RTE.RteUtility.$Bu(elem, $v_0, false);
    return $v_0;
};
RTE.RteUtility.$Bu = function RTE_RteUtility$$Bu($p0, $p1, $p2) {
    var $v_0 = $p0.cachedOffsetSet;

    if ($v_0) {
        var $v_1 = $p0.cachedOffsetY;
        var $v_2 = $p0.cachedOffsetX;

        $p1.y += $v_1;
        $p1.x += $v_2;
        return;
    }
    if ($p0.parentNode && $p0.offsetParent) {
        RTE.RteUtility.$Bu($p0.offsetParent, $p1, true);
    }
    if (!SP.UI.UIUtility.isTextNode($p0) && $p0.tagName.toUpperCase() === 'TD' && $p0.runtimeStyle) {
        if ($p0.runtimeStyle.borderTopStyle !== 'none') {
            var $v_3 = parseInt($p0.runtimeStyle.borderTopWidth);

            if (!isNaN($v_3)) {
                $p1.y += $v_3;
            }
        }
        if ($p0.runtimeStyle.borderLeftStyle !== 'none') {
            var $v_4 = parseInt($p0.runtimeStyle.borderLeftWidth);

            if (!isNaN($v_4)) {
                $p1.x += $v_4;
            }
        }
    }
    $p1.y += $p0.offsetTop;
    $p1.x += $p0.offsetLeft;
};
RTE.RteUtility.$I2 = function RTE_RteUtility$$I2($p0) {
    var $v_0 = null;

    if (document.getBoxObjectFor) {
        $v_0 = RTE.RteUtility.$I3($p0);
    }
    else {
        if ($p0.tagName === 'SPAN' && $p0.innerHTML === '' && $p0.parentNode.tagName !== 'TEXTAREA') {
            var $v_1 = null;
            var $v_2 = null;
            var $v_3 = new RTE.DOMTreePosition($p0, 0);

            $v_3.setLocationAtEnd();
            while ($v_3.moveToNextElement()) {
                if (SP.UI.UIUtility.isNodeOfType($v_3.$1_0, RTE.HtmlTagName.blockElements)) {
                    var $v_4 = $p0.style.display;

                    $p0.style.display = 'inline-block';
                    $v_0 = RTE.RteUtility.getOffset($p0);
                    $v_0.width = $p0.offsetWidth;
                    $v_0.height = $p0.offsetHeight;
                    $p0.style.display = $v_4;
                    return $v_0;
                }
                else if (SP.UI.UIUtility.isTextNode($v_3.$1_0) && $v_3.$1_0.nodeValue && $v_3.$1_0.nodeValue.length > 0) {
                    $v_1 = $v_3.$1_0;
                    $v_2 = $v_1.nodeValue;
                    var $v_5 = $v_2.indexOf(' ');

                    if ($v_5 === -1) {
                        $p0.innerText = $v_2;
                        $v_1.nodeValue = '';
                    }
                    else {
                        $p0.innerText = $v_2.substr(0, $v_5 + 1);
                        $v_3.$1_0.nodeValue = $v_2.substr($v_5 + 1, $v_2.length - $v_5 - 1);
                    }
                    var $v_6 = $p0.getClientRects();
                    var $v_7 = -1;

                    for (var $v_8 = 0; $v_8 < $v_6.length; $v_8++) {
                        var $v_9 = $v_6[$v_8];

                        if ($v_7 === -1 || $v_9.left !== $v_9.right) {
                            $v_7 = $v_9.top;
                        }
                    }
                    $v_0 = RTE.RteUtility.getOffset($p0);
                    $v_0.y = $v_7;
                    $v_0.width = $p0.offsetWidth;
                    $v_0.height = $p0.offsetHeight;
                    $p0.innerText = '';
                    $v_1.nodeValue = $v_2;
                    return $v_0;
                }
            }
        }
        else {
            $v_0 = RTE.RteUtility.getOffset($p0);
            $v_0.width = $p0.offsetWidth;
            $v_0.height = $p0.offsetHeight;
        }
    }
    return $v_0;
};
RTE.RteUtility.$6P = function RTE_RteUtility$$6P($p0, $p1) {
    var $v_0 = RTE.RteUtility.getCssClassName($p0);

    return $v_0.endsWith($p1) || $v_0.indexOf($p1 + ' ') !== -1;
};
RTE.RteUtility.$I3 = function RTE_RteUtility$$I3($p0) {
    var $v_0 = document.getBoxObjectFor($p0);

    return new Sys.UI.Bounds($v_0.x, $v_0.y, $v_0.width, $v_0.height);
};
RTE.RteUtility.getCssClassName = function RTE_RteUtility$getCssClassName(element) {
    if (element && element.nodeType === 1 && !SP.UI.UIUtility.isSvgNode(element) && element.className) {
        return element.className;
    }
    return '';
};
RTE.RteUtility.$3v = function RTE_RteUtility$$3v($p0) {
    return RTE.RteUtility.$A3[$p0.tagName] === 'true';
};
RTE.RteUtility.$CZ = function RTE_RteUtility$$CZ($p0) {
    return $p0.nodeType === 8;
};
RTE.RteUtility.$Hv = function RTE_RteUtility$$Hv($p0) {
};
RTE.RteUtility.ignoreNodeInOutput = function RTE_RteUtility$ignoreNodeInOutput(node) {
    Sys.UI.DomElement.addCssClass(node, 'ms-rtegenerate-skip');
};
RTE.RteUtility.$Ht = function RTE_RteUtility$$Ht($p0, $p1) {
    $p0.push('<!--');
    $p0.push($p1.nodeValue);
    $p0.push('-->');
};
RTE.RteUtility.$Hy = function RTE_RteUtility$$Hy($p0, $p1) {
    RTE.RteUtility.$Bf($p0, $p1);
    $p0.push('/>');
};
RTE.RteUtility.$36 = function RTE_RteUtility$$36($p0, $p1) {
    RTE.RteUtility.$Bf($p0, $p1);
    $p0.push('>');
};
RTE.RteUtility.$Bf = function RTE_RteUtility$$Bf($p0, $p1) {
    var $v_0 = $p1.cloneNode(false);
    var $v_1 = null;

    try {
        $v_1 = $v_0.outerHTML;
    }
    catch ($$e_4) {
        $v_1 = null;
    }
    if (RTE.SU.$7($v_1)) {
        try {
            RTE.RteUtility.$7U.appendChild($v_0);
            $v_1 = RTE.RteUtility.$7U.innerHTML;
            RTE.RteUtility.$7U.removeChild($v_0);
        }
        catch ($$e_5) {
            $v_1 = null;
        }
    }
    var $v_2 = null;

    if ($v_1) {
        $v_2 = RTE.RteUtility.$7V[$v_1];
    }
    if (RTE.SU.$7($v_2)) {
        var $v_3 = RTE.RteUtility.htmlEncode;
        var $v_4 = [];
        var $v_5 = $p1.tagName;

        $v_4.push('<');
        $v_4.push($v_5.toLowerCase());
        var $v_6 = $p1.attributes;

        if ($v_6) {
            var $v_8 = $v_5 === 'IMG';
            var $v_9 = false;
            var $v_A = $v_6.length;

            for (var $v_B = 0; $v_B < $v_A; $v_B++) {
                var $v_C = $v_6[$v_B];
                var $v_D = $v_C.name;

                $v_D = $v_D.toLowerCase();
                if (!$v_C.specified) {
                    if ($v_D === 'name') {
                        if ($v_C.value === '') {
                            continue;
                        }
                    }
                    else {
                        continue;
                    }
                }
                var $v_E = $v_C.value;

                if ($v_5 === 'TABLE' && $v_D === 'class') {
                    $v_E = $v_E.replace('ms-rteTableGrid', '');
                }
                else if ($v_D === 'href' && $v_E.indexOf('#')) {
                    try {
                        var $v_F = $p1;

                        $v_E = $v_F.href;
                    }
                    catch ($$e_J) { }
                    $v_E = RTE.RteUtility.$7G($v_E);
                }
                else if ($v_D === 'src') {
                    try {
                        var $v_G = $p1;

                        $v_E = $v_G.src;
                    }
                    catch ($$e_L) { }
                    $v_E = RTE.RteUtility.$7G($v_E);
                }
                if ($v_E && $v_E !== '' && $v_E !== 'null' && $v_E !== 'inherit' && $v_D !== '_events' && $v_D !== 'style' && $v_D !== 'uniqueID' && $v_D !== 'setwidth' && $v_D !== 'setheight' && $v_D !== 'hasheight' && $v_D !== 'complete' && $v_D !== 'readystate' && ($v_D !== 'disabled' || $v_D === 'disabled' && $v_E !== 'false') && ($v_D !== 'hidefocus' || $v_D === 'hidefocus' && $v_E !== 'false') && ($v_D !== 'tabindex' || $v_D === 'tabindex' && $v_E !== '0') && ($v_D !== 'dir' || $v_D === 'dir' && $v_E !== 'none')) {
                    if ($v_8 && $v_D === 'alt') {
                        $v_9 = true;
                    }
                    $v_4.push(' ');
                    $v_4.push($v_D);
                    $v_4.push('=\"');
                    $v_4.push($v_3($v_E));
                    $v_4.push('\"');
                }
            }
            if ($v_8 && !$v_9) {
                $v_4.push(' alt=\"\"');
            }
        }
        var $v_7 = $p1.style.cssText;

        $v_7 = $v_7.toLowerCase();
        if ($v_7 !== '') {
            $v_7 = RTE.RteUtility.$Ho($v_7);
            $v_4.push(' style=\"');
            $v_4.push($v_3($v_7));
            $v_4.push('\"');
        }
        $v_2 = $v_4.join('');
        if ($v_1) {
            RTE.RteUtility.$7V[$v_1] = $v_2;
            RTE.RteUtility.$5g += $v_2.length;
        }
    }
    $p0.push($v_2);
};
RTE.RteUtility.$JT = function RTE_RteUtility$$JT($p0) {
    var $v_0 = new RegExp('[^:]*://' + window.location.hostname + '(:|/)', 'i');
    var $v_1 = new RegExp('[^:]*://', 'i');

    return $p0.search($v_1) === -1 || $p0.search($v_0) !== -1;
};
RTE.RteUtility.$Ho = function RTE_RteUtility$$Ho($p0) {
    if (!RTE.SU.$2($p0) && $p0.indexOf('rgb(') > -1) {
        var $v_0 = '';
        var $v_1 = $p0.indexOf('rgb(');
        var $v_2 = 0;

        while ($v_1 !== -1) {
            $v_0 += $p0.substring($v_2, $v_1);
            $v_2 = $p0.indexOf(')', $v_1 + 1) + 1;
            if ($v_2 !== -1) {
                $v_0 += RTE.RteUtility.$HR($p0.substring($v_1, $v_2));
            }
            $v_1 = $v_2 !== -1 ? $p0.indexOf('rgb(', $v_2) : -1;
        }
        $v_0 += $p0.substring($v_2, $p0.length);
        return $v_0;
    }
    return $p0;
};
RTE.RteUtility.$HR = function RTE_RteUtility$$HR($p0) {
    var $v_0 = ($p0.replace('rgb(', '')).replace(')', '');
    var $v_1 = $v_0.split(',');

    if ($v_1.length === 3) {
        $p0 = RTE.RteUtility.$Ax($v_1) || $p0;
    }
    return $p0;
};
RTE.RteUtility.$Aw = function RTE_RteUtility$$Aw($p0, $p1) {
    var $v_0 = ($p0.trim()).toLowerCase();

    if ($v_0.startsWith('rgba(') && $v_0.endsWith(')')) {
        $v_0 = ($p0.replace('rgba(', '')).replace(')', '');
        var $v_1 = $v_0.split(',');

        if ($v_1.length === 4) {
            try {
                var $v_2 = parseFloat($v_1[3]);

                if ($v_2 >= $p1) {
                    $p0 = RTE.RteUtility.$Ax($v_1) || $p0;
                }
            }
            catch ($$e_5) { }
        }
    }
    return $p0;
};
RTE.RteUtility.$Ax = function RTE_RteUtility$$Ax($p0) {
    if ($p0.length >= 3) {
        try {
            var $v_0 = RTE.RteUtility.$8E($p0[0].trim());
            var $v_1 = RTE.RteUtility.$8E($p0[1].trim());
            var $v_2 = RTE.RteUtility.$8E($p0[2].trim());

            return '#' + $v_0 + $v_1 + $v_2;
        }
        catch ($$e_4) { }
    }
    return null;
};
RTE.RteUtility.$8E = function RTE_RteUtility$$8E($p0) {
    var $v_0 = Number.parseInvariant($p0);
    var $v_1 = $v_0.toString(16);

    if ($v_1.length === 1) {
        $v_1 = '0' + $v_1;
    }
    return $v_1;
};
RTE.RteUtility.$7G = function RTE_RteUtility$$7G($p0) {
    var $v_0 = $p0;
    var $v_1 = window.location.protocol;
    var $v_2 = $v_1 + '//' + window.location.hostname;
    var $v_3 = '' + window.location.port;

    if ($v_3 === '') {
        if ($v_1 === 'https:') {
            $v_3 = '443';
        }
        else {
            $v_3 = '80';
        }
    }
    if ($v_3 === '80' && $v_1 === 'http:' || $v_3 === '443' && $v_1 === 'https:') {
        if ($v_0 === $v_2) {
            return '/';
        }
        else if (!$v_0.indexOf($v_2 + '/')) {
            return $v_0.replace($v_2 + '/', '/');
        }
    }
    $v_2 += ':' + $v_3;
    if ($v_0 === $v_2) {
        return '/';
    }
    else if (!$v_0.indexOf($v_2 + '/')) {
        return $v_0.replace($v_2 + '/', '/');
    }
    return $v_0;
};
RTE.RteUtility.$6H = function RTE_RteUtility$$6H($p0, $p1) {
    if ($p1) {
        $p0.push('</');
        $p0.push($p1);
        $p0.push('>');
    }
};
RTE.RteUtility.$Hu = function RTE_RteUtility$$Hu($p0, $p1) {
    if ($p1.innerText) {
        $p0.push($p1.innerText);
    }
};
RTE.RteUtility.getInnerText = function RTE_RteUtility$getInnerText(node) {
    if (node.nodeType === 3) {
        return node.nodeValue;
    }
    var $v_0 = node.innerText;

    if (!RTE.SU.$7($v_0)) {
        return $v_0;
    }
    var $v_1 = new Sys.StringBuilder();

    RTE.RteUtility.$Bp($v_1, node);
    return $v_1.toString();
};
RTE.RteUtility.$Bp = function RTE_RteUtility$$Bp($p0, $p1) {
    if ($p1.nodeType === 3) {
        $p0.append($p1.nodeValue);
    }
    else {
        if ($p1.attributes) {
            var $v_0 = $p1.attributes.getNamedItem('_moz_editor_bogus_node');

            if (!$p0.isEmpty() && $p1.nodeType === 1 && (!$v_0 || $v_0 && $v_0.value !== 'TRUE') && !RTE.RteUtility.$50($p1)) {
                $p0.append(' ');
            }
        }
        for (var $v_1 = 0; $v_1 < $p1.childNodes.length; $v_1++) {
            RTE.RteUtility.$Bp($p0, $p1.childNodes[$v_1]);
        }
    }
};
RTE.RteUtility.createTextNode = function RTE_RteUtility$createTextNode(doc, str) {
    return doc.createTextNode(str);
};
RTE.RteUtility.$4z = function RTE_RteUtility$$4z($p0) {
    return $p0.nodeValue === '' || $p0.tagName === 'SPAN' && !$p0.childNodes.length;
};
RTE.RteUtility.$1P = function RTE_RteUtility$$1P($p0) {
    return $p0 === RTE.Cursor.s_range.$4_0 || $p0 === RTE.Cursor.s_range.$3_0 || $p0 === RTE.Cursor.$L.$4_0 || $p0 === RTE.Cursor.$L.$3_0;
};
RTE.RteUtility.$40 = function RTE_RteUtility$$40($p0) {
    if ($p0.nodeType !== 1) {
        return false;
    }
    if ($p0.tagName.toUpperCase() !== 'SPAN') {
        return false;
    }
    if (RTE.RteUtility.$1P($p0)) {
        return true;
    }
    var $v_0 = [];

    RTE.RteUtility.$36($v_0, $p0);
    var $v_1 = $v_0.join('');
    var $v_2 = $v_1.match(RTE.RteUtility.$EO);

    return !!$v_2 && $v_2.length > 0;
};
RTE.RteUtility.$Cd = function RTE_RteUtility$$Cd($p0) {
    if ($p0.nodeType !== 1) {
        return false;
    }
    if ($p0.tagName.toUpperCase() !== 'FONT') {
        return false;
    }
    var $v_0 = [];

    RTE.RteUtility.$36($v_0, $p0);
    var $v_1 = $v_0.join('');
    var $v_2 = $v_1.match(RTE.RteUtility.$BL);

    return !!$v_2 && $v_2.length > 0;
};
RTE.RteUtility.$JM = function RTE_RteUtility$$JM($p0) {
    if ($p0.nodeType !== 1) {
        return false;
    }
    if ($p0.tagName.toUpperCase() !== 'DIV') {
        return false;
    }
    var $v_0 = [];

    RTE.RteUtility.$36($v_0, $p0);
    var $v_1 = $v_0.join('');
    var $v_2 = $v_1.match(RTE.RteUtility.$EN);

    return !!$v_2 && $v_2.length > 0;
};
RTE.RteUtility.$6W = function RTE_RteUtility$$6W($p0) {
    return RTE.SU.$2($p0.id) && RTE.RteUtility.$40($p0);
};
RTE.RteUtility.$Dv = function RTE_RteUtility$$Dv($p0) {
    RTE.RteUtility.$CU($p0, 1, 0);
};
RTE.RteUtility.$CU = function RTE_RteUtility$$CU($p0, $p1, $p2) {
    if ($p1 > 0 && $p2 > $p1 || SP.UI.UIUtility.isTextNode($p0)) {
        return;
    }
    for (var $v_0 = 0; $v_0 < $p0.childNodes.length; $v_0++) {
        RTE.RteUtility.$CU($p0.childNodes[$v_0], $p1, $p2 + 1);
    }
    if (RTE.RteUtility.$6W($p0) || RTE.RteUtility.$Cd($p0)) {
        RTE.RteUtility.removeNodeAndKeepChildNodes($p0);
    }
};
RTE.RteUtility.$Kj = function RTE_RteUtility$$Kj($p0) {
    if (RTE.RteUtility.$40($p0) || RTE.RteUtility.$Cd($p0)) {
        RTE.RteUtility.removeNodeAndKeepChildNodes($p0);
    }
};
RTE.RteUtility.$6K = function RTE_RteUtility$$6K($p0, $p1) {
    return RTE.RteUtility.$Bv($p0, null, $p1);
};
RTE.RteUtility.$Bv = function RTE_RteUtility$$Bv($p0, $p1, $p2) {
    if (!$p0) {
        return null;
    }
    var $v_0 = $p0;
    var $v_1 = null;

    while ($v_0 && RTE.RteUtility.$50($v_0)) {
        $v_1 = $v_0;
        $v_0 = $v_0.parentNode;
    }
    if (!$v_0) {
        return null;
    }
    var $v_2 = !$p1 ? $v_1 : RTE.RteUtility.$Bi($p1, $v_0, $v_0);

    if ($p2 && $v_1) {
        var $v_3 = RTE.RteUtility.$m($v_1, false);

        while ($v_3 && (RTE.RteUtility.$50($v_3) && ($v_3.nodeType !== 1 || $v_3.tagName !== 'BR' || !$v_3.previousSibling))) {
            $v_3 = RTE.RteUtility.$m($v_3, false);
        }
        var $v_4 = RTE.RteUtility.$t($v_1, false);
        var $v_5 = $v_2 ? RTE.RteUtility.$t($v_2, false) : null;
        var $v_6 = $v_4 === $v_5;

        while ($v_4 && (RTE.RteUtility.$50($v_4) && (!$v_6 || $v_4.nodeType !== 1 || $v_4.tagName !== 'BR' || !$v_4.nextSibling))) {
            $v_4 = RTE.RteUtility.$t($v_4, false);
            $v_6 = $v_6 || $v_4 === $v_5;
        }
        if ($v_3 || $v_4) {
            var $v_7 = RTE.Canvas.getEditableRegion($v_0);

            if (RTE.RteUtility.isSafari()) {
                var $v_9 = RTE.Selection.getSelection();

                $v_9.clear();
            }
            var $v_8 = $v_0 !== $v_7 && RTE.HtmlTagName.allowedElementStyleTags[$v_0.tagName.toUpperCase()];

            if ($v_8) {
                if ($v_3) {
                    var $v_A = $v_0.cloneNode(false);
                    var $v_B = $v_3.nextSibling;

                    while ($v_0.firstChild !== $v_B) {
                        $v_A.appendChild($v_0.firstChild);
                    }
                    $v_0.parentNode.insertBefore($v_A, $v_0);
                }
                if ($v_4) {
                    var $v_C = $v_0.cloneNode(false);
                    var $v_D = $v_4;

                    while ($v_D) {
                        var $v_E = $v_D.nextSibling;

                        $v_C.appendChild($v_D);
                        $v_D = $v_E;
                    }
                    $v_0.parentNode.insertBefore($v_C, $v_0.nextSibling);
                }
            }
            else {
                var $v_F = $v_3 ? $v_3.nextSibling : $v_0.firstChild;

                if ($v_F !== $v_0.firstChild || $v_4) {
                    var $v_G = $v_0.ownerDocument.createElement('DIV');

                    while ($v_F !== $v_4) {
                        var $v_H = $v_F.nextSibling;

                        $v_G.appendChild($v_F);
                        $v_F = $v_H;
                    }
                    $v_0.insertBefore($v_G, $v_4);
                    $v_0 = $v_G;
                }
            }
            if ($v_3 && $v_3.nodeType === 1 && $v_3.tagName === 'BR') {
                $v_3.parentNode.removeChild($v_3);
            }
            if ($v_4 && $v_4.nodeType === 1 && $v_4.tagName === 'BR') {
                $v_4.parentNode.removeChild($v_4);
            }
        }
    }
    if ($v_0.tagName === 'TR' && $v_0.parentNode && ($v_0.parentNode.tagName === 'TBODY' || $v_0.parentNode.tagName === 'THEAD' || $v_0.parentNode.tagName === 'TFOOT')) {
        $v_0 = $v_0.parentNode;
    }
    if (($v_0.tagName === 'TBODY' || $v_0.tagName === 'THEAD' || $v_0.tagName === 'TFOOT') && $v_0.parentNode && $v_0.parentNode.tagName === 'TABLE') {
        $v_0 = $v_0.parentNode;
    }
    return $v_0;
};
RTE.RteUtility.$G = function RTE_RteUtility$$G($p0, $p1) {
    return RTE.RteUtility.$2d($p0, [$p1]);
};
RTE.RteUtility.$2d = function RTE_RteUtility$$2d($p0, $p1) {
    var $v_0 = $p1.length;

    if (!$p0) {
        return null;
    }
    for (var $v_2 = 0; $v_2 < $v_0; $v_2++) {
        if ($p0.tagName === $p1[$v_2]) {
            return $p0;
        }
    }
    var $v_1 = $p0.parentNode;

    while ($v_1) {
        for (var $v_3 = 0; $v_3 < $v_0; $v_3++) {
            if ($v_1.tagName === $p1[$v_3]) {
                return $v_1;
            }
        }
        $v_1 = $v_1.parentNode;
    }
    return null;
};
RTE.RteUtility.$I8 = function RTE_RteUtility$$I8() {
    var $v_0 = '';
    var $v_1 = RTE.Selection.getSelectionRange();

    if (null === $v_1) {
        return $v_0;
    }
    var $v_2 = '|H1|H2|H3|H4|H5|H6|P|PRE|LI|TD|DIV|BLOCKQUOTE|DT|DD|TABLE|HR|IMG|TR|UL|OL|BODY|HTML|';
    var $v_3 = $v_1.parentElement();

    while ($v_3 && ($v_2.indexOf('|' + $v_3.tagName + '|') === -1 || $v_3.dir !== 'ltr' && $v_3.dir !== 'rtl')) {
        $v_3 = $v_3.parentNode;
    }
    if ($v_3) {
        if ($v_3.dir === 'ltr') {
            $v_0 = 'ltr';
        }
        else if ($v_3.dir === 'rtl') {
            $v_0 = 'rtl';
        }
    }
    return $v_0;
};
RTE.RteUtility.$50 = function RTE_RteUtility$$50($p0) {
    if (SP.UI.UIUtility.isTextNode($p0)) {
        return true;
    }
    if (RTE.SU.$2($p0.tagName)) {
        return true;
    }
    if ($p0._blockElement) {
        return false;
    }
    if (RTE.HtmlTagName.$CN[$p0.tagName]) {
        return true;
    }
    return false;
};
RTE.RteUtility.$N = function RTE_RteUtility$$N($p0) {
    if ($p0.nodeType !== 1) {
        return false;
    }
    if (RTE.RteUtility.$4x($p0.tagName)) {
        return true;
    }
    if ($p0._blockElement) {
        return true;
    }
    return false;
};
RTE.RteUtility.$4x = function RTE_RteUtility$$4x($p0) {
    if (RTE.SU.$2($p0)) {
        return false;
    }
    return RTE.HtmlTagName.$7r[$p0.toUpperCase()];
};
RTE.RteUtility.$1c = function RTE_RteUtility$$1c($p0) {
    if (SP.UI.UIUtility.isTextNode($p0)) {
        $p0 = $p0.parentNode;
    }
    var $v_0 = $p0.currentStyle;

    if (RTE.SU.$7($v_0)) {
        if (window.getComputedStyle) {
            $v_0 = window.getComputedStyle($p0, null);
        }
    }
    return $v_0;
};
RTE.RteUtility.$b = function RTE_RteUtility$$b($p0, $p1, $p2) {
    return !!RTE.RteUtility.$Bi($p0, $p1, $p2);
};
RTE.RteUtility.$Bi = function RTE_RteUtility$$Bi($p0, $p1, $p2) {
    if (!$p0 || !$p1) {
        return null;
    }
    var $v_0 = $p0;
    var $v_1 = null;

    while ($v_0 && $v_0 !== $p1 && $v_0 !== $p2) {
        $v_1 = $v_0;
        $v_0 = $v_0.parentNode;
    }
    return $v_0 === $p1 ? $v_1 : null;
};
RTE.RteUtility.$4c = function RTE_RteUtility$$4c($p0) {
    if (SP.UI.UIUtility.isTextNode($p0)) {
        return $p0.nodeValue.length > 0;
    }
    switch ($p0.tagName) {
    case 'IMG':
    case 'HR':
        return true;
    }
    for (var $v_0 = 0; $v_0 < $p0.childNodes.length; $v_0++) {
        var $v_1 = $p0.childNodes[$v_0];

        if (SP.UI.UIUtility.isTextNode($v_1)) {
            return $v_1.nodeValue.length > 0;
        }
        var $v_2 = RTE.RteUtility.$4c($v_1);

        if ($v_2) {
            return true;
        }
    }
    return false;
};
RTE.RteUtility.$JS = function RTE_RteUtility$$JS($p0) {
    var $v_0 = $p0.replace(new RegExp('( |\n|\u000c|\u000c|\t)', 'g'), '');

    return '' !== $v_0;
};
RTE.RteUtility.$k = function RTE_RteUtility$$k($p0, $p1) {
    while ($p0.childNodes.length > 0) {
        $p1.appendChild($p0.childNodes[0]);
    }
};
RTE.RteUtility.$3D = function RTE_RteUtility$$3D($p0) {
    RTE.RteUtility.$2r($p0, RTE.RteUtility.$2p);
};
RTE.RteUtility.$J = function RTE_RteUtility$$J($p0) {
    if ($p0.parentNode) {
        if ($p0.nodeType === 1 && !Sys.UI.DomElement.containsCssClass($p0, 'ms-rte-wpbox') && typeof $p0.innerHTML !== 'undefined') {
            try {
                $p0.innerHTML = '';
            }
            catch ($$e_1) { }
        }
        $p0.parentNode.removeChild($p0);
    }
};
RTE.RteUtility.removeChildNodes = function RTE_RteUtility$removeChildNodes(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
};
RTE.RteUtility.$CX = function RTE_RteUtility$$CX($p0) {
    var $v_0 = $p0.parentNode;

    return $p0.nodeType === 8 || RTE.SU.$7($v_0) || ($p0.tagName !== 'TD' && $p0.tagName !== 'TH' && ($v_0.tagName === 'TR' || $v_0.tagName === 'TBODY' || $v_0.tagName === 'TABLE') || $p0.tagName !== 'LI' && ($v_0.tagName === 'UL' || $v_0.tagName === 'OL'));
};
RTE.RteUtility.isFirefox = function RTE_RteUtility$isFirefox() {
    return Sys.Browser.agent === Sys.Browser.Firefox || (Sys.Browser.name.toLowerCase()).indexOf('firefox') !== -1;
};
RTE.RteUtility.isInternetExplorer = function RTE_RteUtility$isInternetExplorer() {
    return Sys.Browser.agent === Sys.Browser.InternetExplorer;
};
RTE.RteUtility.isSafari = function RTE_RteUtility$isSafari() {
    return Sys.Browser.agent === Sys.Browser.Safari || (Sys.Browser.name.toLowerCase()).indexOf('safari') !== -1 || (Sys.Browser.name.toLowerCase()).indexOf('webkit') !== -1;
};
RTE.RteUtility.$HU = function RTE_RteUtility$$HU($p0) {
    if (document.caretRangeFromPoint) {
        var $v_1 = $p0.clientX;
        var $v_2 = $p0.clientY;

        return document.caretRangeFromPoint($v_1, $v_2);
    }
    var $v_0 = document.body.createTextRange ? document.body.createTextRange() : RTE.DomHelper.createRange(window.document);

    if ($v_0.moveToPoint) {
        try {
            var $v_3 = $p0.clientX;
            var $v_4 = $p0.clientY;

            $v_0.moveToPoint($v_3, $v_4);
        }
        catch ($$e_6) {
            return null;
        }
    }
    else if ($p0.rangeParent) {
        var $v_5 = $p0.rangeParent;
        var $v_6 = $p0.rangeOffset;

        $v_0.setStart($v_5, $v_6);
        $v_0.setEnd($v_5, $v_6);
    }
    else {
        return null;
    }
    return $v_0;
};
RTE.RteUtility.$2b = function RTE_RteUtility$$2b($p0) {
    if ((RTE.PreviewManager.get_instance()).get_hasPreview()) {
        return false;
    }
    while ($p0 && SP.UI.UIUtility.isSvgNode($p0)) {
        $p0 = $p0.parentNode;
    }
    if (!$p0) {
        return true;
    }
    if (RTE.PasteFlyout.$JH($p0)) {
        return false;
    }
    for (var $$arr_1 = RTE.Canvas.get_autocompleteHandlers(), $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
        var $v_0 = $$arr_1[$$idx_3];

        if ($v_0.isSuggestionNode($p0)) {
            return false;
        }
    }
    return SP.UI.UIUtility.focusValidOnThisNode($p0);
};
RTE.RteUtility.$JE = function RTE_RteUtility$$JE($p0) {
    var $v_0 = $p0.defaultPrevented || $p0.returnValue === false;

    if (!$v_0 && $p0.getPreventDefault) {
        $v_0 = $p0.getPreventDefault();
    }
    return $v_0;
};
RTE.RteUtility.get_ignoreClasses = function RTE_RteUtility$get_ignoreClasses() {
    if (!RTE.RteUtility.$9Z) {
        RTE.RteUtility.$5V['ms-rtestate-write'] = true;
        RTE.RteUtility.$5V['ms-rtestate-read'] = true;
        RTE.RteUtility.$5V['ms-rtefocus-invalid'] = true;
        RTE.RteUtility.$9Z = true;
    }
    return RTE.RteUtility.$5V;
};
RTE.RteUtility.setInputValue = function RTE_RteUtility$setInputValue(inputNode, value) {
    RTE.RteUtility.assertNotNull('inputNode', inputNode);
    if (inputNode.tagName === 'TEXTAREA') {
        SP.UI.UIUtility.setInnerText(inputNode, value);
    }
    else {
        inputNode.value = value;
    }
};
RTE.RteUtility.$Dt = function RTE_RteUtility$$Dt($p0, $p1) {
    if ($p1) {
        return $p0.replace(RTE.RteUtility.$BM, '');
    }
    else {
        return $p0.replace(RTE.RteUtility.$B9, '');
    }
};
RTE.RteUtility.$4B = function RTE_RteUtility$$4B($p0, $p1, $p2) {
    $p0 = RTE.RteUtility.$Dt($p0, $p1);
    if (!$p2) {
        $p0 = $p0.replace(RTE.RteUtility.$9X, '');
    }
    return $p0;
};
RTE.RteUtility.$Kh = function RTE_RteUtility$$Kh($p0) {
    return ($p0.replace(RTE.RteUtility.$Do, '')).replace(RTE.RteUtility.$9X, '');
};
RTE.RteUtility.$BW = function RTE_RteUtility$$BW($p0) {
    var $v_0 = new RegExp('<\\s*iframe[^>]* src=[\\\"|\']([^\\\"|\']*)[\\\"|\']', 'gim');
    var $v_1 = 0;

    if (!RTE.SU.$2($p0)) {
        do {
            var $v_2 = $v_0.exec($p0);

            if (!$v_2 || $v_2.length !== 2) {
                break;
            }
            var $v_3 = $p0.indexOf('>', $v_0.lastIndex) + 1;

            if ($v_3 > 0) {
                var $v_4 = new RegExp('<\\s*/\\s*iframe', 'gim');
                var $v_5 = RTE.RteUtility.$3U($p0, $v_4, Math.max($v_3, $v_1 + 1));

                if ($v_5 === -1) {
                    $p0 = $p0.substr(0, $v_3) + '</iframe>' + $p0.substring($v_3, $p0.length);
                }
                else {
                    $v_1 = $v_5;
                }
            }
        } while (true);
    }
    return $p0;
};
RTE.RteUtility.$Ki = function RTE_RteUtility$$Ki($p0, $p1) {
    var $v_0 = new RegExp('<\\s*iframe[^>]* src=[\\\"|\']' + RTE.RteUtility.$KZ($p1) + '[\\\"|\'][^>]*>\\s*(<\\s*/\\s*iframe\\s*>)?', 'gim');

    return $p0.replace($v_0, '');
};
RTE.RteUtility.$KZ = function RTE_RteUtility$$KZ($p0) {
    return ($p0.replace('\\', '\\\\')).replace(new RegExp('[\\.\\[\\]\\{\\}\\?\\+\\*\\^\\$\\(\\)\\|]', 'g'), function($p1_0) {
        return '\\' + $p1_0;
    });
};
RTE.RteUtility.$4p = function RTE_RteUtility$$4p($p0) {
    var $v_0 = new RegExp('<\\s*iframe[^>]* src=[\\\"|\']([^\\\"|\']*)[\\\"|\']', 'gim');
    var $v_1 = new Array(0);

    if (!RTE.SU.$2($p0)) {
        do {
            var $v_2 = $v_0.exec($p0);

            if (!$v_2 || $v_2.length !== 2) {
                break;
            }
            $v_1[$v_1.length] = $v_2[1];
        } while (true);
    }
    return $v_1;
};
RTE.RteUtility.assertNotNull = function RTE_RteUtility$assertNotNull(name, obj) {
    if (!obj) {
        throw Error.argumentNull(name);
    }
};
RTE.RteUtility.$Cj = function RTE_RteUtility$$Cj($p0, $p1) {
    return window.IsSafeHrefAlert($p0, $p1);
};
RTE.RteUtility.createStyleSheet = function RTE_RteUtility$createStyleSheet() {
    if (document.createStyleSheet) {
        return document.createStyleSheet();
    }
    else {
        var $v_0 = document.createElement('STYLE');

        document.body.appendChild($v_0);
        if ($v_0.styleSheet) {
            return $v_0.styleSheet;
        }
        else if ($v_0.sheet) {
            return $v_0.sheet;
        }
        return null;
    }
};
RTE.RteUtility.getFirstStyleSheet = function RTE_RteUtility$getFirstStyleSheet() {
    var $v_0 = document.styleSheets;

    if (!$v_0.length) {
        return RTE.RteUtility.createStyleSheet();
    }
    else {
        return $v_0[0];
    }
};
RTE.RteUtility.addStyleSheetRule = function RTE_RteUtility$addStyleSheetRule(styleSheet, selector, style, index) {
    if (!styleSheet) {
        return;
    }
    if (styleSheet.addRule) {
        styleSheet.addRule(selector, style, index);
    }
    else if (styleSheet.insertRule) {
        styleSheet.insertRule(selector + ' {' + style + '}', index);
    }
};
RTE.RteUtility.removeStyleSheetRule = function RTE_RteUtility$removeStyleSheetRule(styleSheet, index) {
    if (!styleSheet) {
        return;
    }
    if (styleSheet.removeRule) {
        styleSheet.removeRule(index);
    }
    else if (styleSheet.deleteRule) {
        styleSheet.deleteRule(index);
    }
};
RTE.RteUtility.$I7 = function RTE_RteUtility$$I7($p0, $p1) {
    var $v_0 = $p0.className.split(' ');

    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        if ($v_0[$v_1].length > 0) {
            for (var $v_2 = 0; $v_2 < $p1.length; $v_2++) {
                if ($v_0[$v_1].indexOf($p1[$v_2]) !== -1) {
                    return $v_0[$v_1];
                }
            }
        }
    }
    return null;
};
RTE.RteUtility.$Bk = function RTE_RteUtility$$Bk($p0, $p1) {
    var $v_0 = '';
    var $v_1 = $p0.className.split(' ');

    for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
        if ($v_1[$v_2].length > 0) {
            var $v_3 = false;

            for (var $v_4 = 0; $v_4 < $p1.length; $v_4++) {
                if ($v_1[$v_2].indexOf($p1[$v_4]) !== -1) {
                    $v_3 = true;
                    break;
                }
            }
            if (!$v_3) {
                if ($v_0.length > 0) {
                    $v_0 = $v_0 + ' ';
                }
                $v_0 = $v_0 + $v_1[$v_2];
            }
        }
    }
    return $v_0;
};
RTE.RteUtility.$26 = function RTE_RteUtility$$26($p0, $p1, $p2) {
    var $v_0 = RTE.RteUtility.$Bk($p0, $p2);

    if ($v_0.length > 0) {
        $v_0 = $v_0 + ' ';
    }
    $v_0 = $v_0 + $p1;
    RTE.SnapshotManager.setCurrentRegionDirtyIf($p0.className !== $v_0);
    $p0.className = $v_0;
};
RTE.RteUtility.$9Q = function RTE_RteUtility$$9Q($p0, $p1) {
    var $v_0 = RTE.RteUtility.$Bk($p0, $p1);

    $p0.className = $v_0;
};
RTE.RteUtility.$Ck = function RTE_RteUtility$$Ck($p0) {
    var $v_0 = $p0.toLowerCase();
    var $v_1 = false;

    if ($v_0.indexOf('@') !== -1) {
        $v_1 = true;
    }
    if (!$v_0.indexOf('http://')) {
        return !$v_1;
    }
    if (!$v_0.indexOf('https://')) {
        return !$v_1;
    }
    if (!$v_0.indexOf('ftp://')) {
        return !$v_1;
    }
    if (!$v_0.indexOf('gopher:')) {
        return false;
    }
    if (!$v_0.indexOf('mailto:')) {
        return true;
    }
    if (!$v_0.indexOf('pnm://')) {
        return true;
    }
    if (!$v_0.indexOf('mms://')) {
        return true;
    }
    if (!$v_0.indexOf('news:')) {
        return !$v_1;
    }
    if (!$v_0.indexOf('file:///')) {
        return false;
    }
    if (!$v_0.indexOf('file://')) {
        return true;
    }
    if (!$v_0.indexOf('mhtml:')) {
        return false;
    }
    if (!$v_0.indexOf('cdi:')) {
        return false;
    }
    if (!$v_0.indexOf('\\\\')) {
        return false;
    }
    if (!$v_0.indexOf('//')) {
        return false;
    }
    if (!$v_0.indexOf('/\\')) {
        return false;
    }
    if (!$v_0.indexOf('\\/')) {
        return false;
    }
    if (RTE.RteUtility.$JN($v_0)) {
        return true;
    }
    return false;
};
RTE.RteUtility.$Hz = function RTE_RteUtility$$Hz($p0) {
    while ($p0 && $p0.tagName !== 'A') {
        $p0 = $p0.parentNode;
    }
    return $p0;
};
RTE.RteUtility.$JN = function RTE_RteUtility$$JN($p0) {
    var $v_0 = $p0;
    var $v_1 = $v_0.indexOf('#');

    if ($v_1 !== -1) {
        $v_0 = $v_0.substr(0, $v_1);
    }
    var $v_2 = $v_0.indexOf('?');

    if ($v_2 !== -1) {
        $v_0 = $v_0.substr(0, $v_2);
    }
    var $v_3 = $v_0.indexOf(':');

    if ($v_3 === -1) {
        return true;
    }
    return false;
};
RTE.RteUtility.$Fp = function RTE_RteUtility$$Fp($p0, $p1) {
    var $v_0 = $p0.cloneNode($p1);

    $v_0.id = '';
    return $v_0;
};
RTE.RteUtility.get_$EU = function RTE_RteUtility$get_$EU() {
    if (!RTE.RteUtility.$7Z) {
        RTE.RteUtility.$7Z = {
            CENTER: SP.Res.selectMenuCENTER,
            DIR: SP.Res.selectMenuDIR,
            FONT: SP.Res.selectMenuFONT,
            PLAINTEXT: SP.Res.selectMenuPLAINTEXT,
            S: SP.Res.selectMenuS,
            STRIKE: SP.Res.selectMenuSTRIKE,
            U: SP.Res.selectMenuU,
            XMP: SP.Res.selectMenuXMP,
            RT: SP.Res.selectMenuRT,
            RUBY: SP.Res.selectMenuRUBY,
            A: SP.Res.selectMenuA,
            ABBR: SP.Res.selectMenuABBR,
            ACRONYM: SP.Res.selectMenuACRONYM,
            ADDRESS: SP.Res.selectMenuADDRESS,
            B: SP.Res.selectMenuB,
            BDO: SP.Res.selectMenuBDO,
            BIG: SP.Res.selectMenuBIG,
            BLOCKQUOTE: SP.Res.selectMenuBLOCKQUOTE,
            CAPTION: SP.Res.selectMenuCAPTION,
            CITE: SP.Res.selectMenuCITE,
            CODE: SP.Res.selectMenuCODE,
            DD: SP.Res.selectMenuDD,
            DEL: SP.Res.selectMenuDEL,
            DFN: SP.Res.selectMenuDFN,
            DIV: SP.Res.selectMenuDIV,
            DL: SP.Res.selectMenuDL,
            DT: SP.Res.selectMenuDT,
            EM: SP.Res.selectMenuEM,
            FIELDSET: SP.Res.selectMenuFIELDSET,
            H1: SP.Res.selectMenuH1,
            H2: SP.Res.selectMenuH2,
            H3: SP.Res.selectMenuH3,
            H4: SP.Res.selectMenuH4,
            H5: SP.Res.selectMenuH5,
            H6: SP.Res.selectMenuH6,
            HR: SP.Res.selectMenuHR,
            I: SP.Res.selectMenuI,
            IMG: SP.Res.selectMenuIMG,
            INS: SP.Res.selectMenuINS,
            LABEL: SP.Res.selectMenuLABEL,
            LEGEND: SP.Res.selectMenuLEGEND,
            LI: SP.Res.selectMenuLI,
            MARQUEE: SP.Res.selectMenuMARQUEE,
            MENU: SP.Res.selectMenuMENU,
            NOBR: SP.Res.selectMenuNOBR,
            OL: SP.Res.selectMenuOL,
            P: SP.Res.selectMenuP,
            PRE: SP.Res.selectMenuPRE,
            Q: SP.Res.selectMenuQ,
            SAMP: SP.Res.selectMenuSAMP,
            SMALL: SP.Res.selectMenuSMALL,
            SPAN: SP.Res.selectMenuSPAN,
            STRONG: SP.Res.selectMenuSTRONG,
            SUB: SP.Res.selectMenuSUB,
            SUP: SP.Res.selectMenuSUP,
            TABLE: SP.Res.selectMenuTABLE,
            TBODY: SP.Res.selectMenuTBODY,
            TD: SP.Res.selectMenuTD,
            TFOOT: SP.Res.selectMenuTFOOT,
            TH: SP.Res.selectMenuTH,
            THEAD: SP.Res.selectMenuTHEAD,
            TR: SP.Res.selectMenuTR,
            TT: SP.Res.selectMenuTT,
            UL: SP.Res.selectMenuUL
        };
    }
    return RTE.RteUtility.$7Z;
};
RTE.RteUtility.getDisplayNameForTag = function RTE_RteUtility$getDisplayNameForTag(tagName) {
    return (RTE.RteUtility.get_$EU())[tagName];
};
RTE.RteUtility.getDisplayNameForTagWithNumber = function RTE_RteUtility$getDisplayNameForTagWithNumber(tagName, number) {
    var $v_0 = SP.Res.selectMenuItemWithNumber;

    $v_0 = $v_0.replace('{0}', (RTE.RteUtility.get_$EU())[tagName]);
    $v_0 = $v_0.replace('{1}', number.toString());
    return $v_0;
};
RTE.RteUtility.parseUnitValue = function RTE_RteUtility$parseUnitValue(valueWithUnit) {
    if (RTE.SU.$2(valueWithUnit) || valueWithUnit === 'auto') {
        return null;
    }
    var $v_0 = new RTE.UnitValue();
    var $v_1 = 0;

    for ($v_1 = 0; $v_1 < valueWithUnit.length; $v_1++) {
        var $v_2 = valueWithUnit.charCodeAt($v_1);

        if ($v_2 === 46 || $v_2 >= 48 && $v_2 <= 57) {
            continue;
        }
        else {
            break;
        }
    }
    $v_0.value = parseFloat(valueWithUnit.substr(0, $v_1));
    if (isNaN($v_0.value)) {
        return null;
    }
    if ($v_1 < valueWithUnit.length) {
        $v_0.unit = (valueWithUnit.substr($v_1)).trim();
        $v_0.unit = $v_0.unit.toLowerCase();
    }
    else {
        $v_0.unit = '';
    }
    if (!RTE.RteUtility.$54($v_0.unit, RTE.RteUtility.$Ee)) {
        return null;
    }
    return $v_0;
};
RTE.RteUtility.parseStringForSpinnerControl = function RTE_RteUtility$parseStringForSpinnerControl(valueWithUnit, properties, defaultValue, defaultUnit) {
    RTE.RteUtility.classMustExist('CUI.Controls.SpinnerCommandProperties');
    var $v_0 = RTE.RteUtility.parseUnitValue(valueWithUnit);

    if ($v_0) {
        properties[CUI.Controls.SpinnerCommandProperties.Value] = $v_0.value;
        if (RTE.SU.$2($v_0.unit)) {
            properties[CUI.Controls.SpinnerCommandProperties.Unit] = defaultUnit;
        }
        else {
            properties[CUI.Controls.SpinnerCommandProperties.Unit] = $v_0.unit;
        }
    }
    else {
        properties[CUI.Controls.SpinnerCommandProperties.Value] = defaultValue;
        properties[CUI.Controls.SpinnerCommandProperties.Unit] = defaultUnit;
    }
};
RTE.RteUtility.$8a = function RTE_RteUtility$$8a($p0) {
    RTE.RteUtility.classMustExist('CUI.Controls.SpinnerCommandProperties');
    var $v_0 = $p0[CUI.Controls.SpinnerCommandProperties.Unit];

    if (RTE.SU.$2($v_0)) {
        $v_0 = 'px';
    }
    else {
        $v_0 = $v_0.toLowerCase();
        if ($v_0 === 'pixel') {
            $v_0 = 'px';
        }
        else if ($v_0 === 'centimeter') {
            $v_0 = 'cm';
        }
        else if ($v_0 === 'percent') {
            $v_0 = '%';
        }
        else if ($v_0 === 'inch') {
            $v_0 = 'in';
        }
    }
    return $v_0;
};
RTE.RteUtility.$8b = function RTE_RteUtility$$8b($p0) {
    RTE.RteUtility.classMustExist('CUI.Controls.SpinnerCommandProperties');
    var $v_0 = $p0[CUI.Controls.SpinnerCommandProperties.Value];

    return $v_0;
};
RTE.RteUtility.getStringValueFromSpinnerControlProperties = function RTE_RteUtility$getStringValueFromSpinnerControlProperties(properties) {
    var $v_0 = (RTE.RteUtility.$8b(properties)).toString();
    var $v_1 = RTE.RteUtility.$8a(properties);

    return $v_0 + $v_1;
};
RTE.RteUtility.$4d = function RTE_RteUtility$$4d($p0) {
    var $v_0 = $p0.createElement('P');

    if (RTE.RteUtility.isFirefox()) {
        var $v_1 = $p0.createElement('BR');

        $v_0.appendChild($v_1);
    }
    return $v_0;
};
RTE.RteUtility.$2r = function RTE_RteUtility$$2r($p0, $p1) {
    if (RTE.RteUtility.isInternetExplorer() && $p0.tagName === 'TABLE') {
        var $v_0 = document.createElement('DIV');

        $v_0.innerHTML = '<table>' + $p1 + '</table>';
        while ($p0.childNodes.length > 0) {
            $p0.removeChild($p0.childNodes[0]);
        }
        RTE.RteUtility.$k($v_0.firstChild, $p0);
    }
    else {
        $p0.innerHTML = '<div>RTE</div>' + $p1;
        $p0.removeChild($p0.firstChild);
    }
};
RTE.RteUtility.$JD = function RTE_RteUtility$$JD($p0) {
    var $v_0 = RTE.RteUtility.getAttribute($p0, 'ContentEditable');

    while ($p0) {
        if ($v_0 === 'true') {
            return true;
        }
        $p0 = $p0.parentNode;
    }
    return false;
};
RTE.RteUtility.$9p = function RTE_RteUtility$$9p($p0, $p1) {
    var $v_0 = RTE.ClientWebPartManager.$4r();

    if (!$v_0 || !$v_0.rgparts) {
        RTE.RteUtility.$2r($p0, $p1);
    }
    else {
        RTE.ClientWebPartManager.updateRendererNodes();
        var $v_1 = [];

        RTE.RteUtility.forEachChildWithTagAndClass($p0, 'DIV', 'ms-rte-wpbox', function($p1_0) {
            if ($p1_0.childNodes.length > 0) {
                var $v_L = $p1_0.childNodes[0];
                var $v_M = 0;

                while (SP.UI.UIUtility.isTextNode($v_L) && $v_M < $p1_0.childNodes.length - 1) {
                    $v_M++;
                    $v_L = $p1_0.childNodes[$v_M];
                }
                if (!SP.UI.UIUtility.isTextNode($v_L) && $v_L.id.length === 40 && RTE.RteUtility.$6Y($v_L)) {
                    Array.add($v_1, $v_L);
                }
            }
        });
        var $v_2 = $v_1.length;
        var $v_3 = document.createElement('DIV');

        $v_3.style.display = 'none';
        document.body.appendChild($v_3);
        for (var $v_5 = 0; $v_5 < $v_2; $v_5++) {
            var $v_6 = $v_1[$v_5];

            $v_3.appendChild($v_6);
        }
        RTE.RteUtility.$2r($p0, $p1);
        $v_1 = [];
        RTE.RteUtility.forEachChildWithTagAndClass($p0, 'DIV', 'ms-rte-wpbox', function($p1_0) {
            if ($p1_0.childNodes.length > 0) {
                var $v_N = $p1_0.childNodes[0];
                var $v_O = 0;

                while (SP.UI.UIUtility.isTextNode($v_N) && $v_O < $p1_0.childNodes.length - 1) {
                    $v_O++;
                    $v_N = $p1_0.childNodes[$v_O];
                }
                if (!SP.UI.UIUtility.isTextNode($v_N) && $v_N.id.length === 40) {
                    if (RTE.RteUtility.$6Y($v_N)) {
                        Array.add($v_1, $v_N);
                    }
                    else {
                        RTE.RteUtility.$J($p1_0);
                    }
                }
            }
        });
        var $v_4 = [];

        $v_2 = $v_1.length;
        for (var $v_7 = 0; $v_7 < $v_2; $v_7++) {
            var $v_8 = $v_1[$v_7];
            var $v_9 = RTE.RteUtility.$6J($v_8);
            var $v_A = $v_0.rgparts[$v_9];

            if ($v_A && $v_A.render && $v_8 !== $v_A.render) {
                $v_8.parentNode.replaceChild($v_A.render, $v_8);
                $v_8.innerHTML = '';
                Array.add($v_4, $v_A);
            }
        }
        document.body.removeChild($v_3);
        $v_2 = $v_4.length;
        for (var $v_B = 0; $v_B < $v_2; $v_B++) {
            var $v_C = $v_4[$v_B];

            if (!$v_C.render.childNodes || !$v_C.render.childNodes.length) {
                var $v_D = document.createElement('TABLE');
                var $v_E = document.createElement('TBODY');
                var $v_F = document.createElement('TR');
                var $v_G = document.createElement('TD');

                $v_D.appendChild($v_E);
                $v_E.appendChild($v_F);
                $v_F.appendChild($v_G);
                var $v_H = document.createElement('DIV');

                if (!RTE.SU.$2($v_C.titleHtml)) {
                    var $v_J = document.createElement('DIV');

                    $v_J.className = 'ms-fakewptitle';
                    $v_J.innerHTML = $v_C.titleHtml;
                    $v_H.appendChild($v_J);
                    var $v_K = document.createElement('DIV');

                    $v_K.style.height = '8px';
                    $v_H.appendChild($v_K);
                }
                var $v_I = document.createElement('DIV');

                $v_I.className = 'ms-error ms-fakewpmsg';
                SP.UI.UIUtility.setInnerText($v_I, SP.Res.webPartNotDisplay);
                $v_H.appendChild($v_I);
                $v_G.appendChild($v_H);
                $v_C.render.appendChild($v_D);
                RTE.Canvas.$D8($v_C.render);
            }
        }
    }
};
RTE.RteUtility.$Ca = function RTE_RteUtility$$Ca($p0) {
    while ($p0) {
        if ($p0 === $p0.ownerDocument.body) {
            return true;
        }
        $p0 = $p0.parentNode;
    }
    return false;
};
RTE.RteUtility.$EX = function RTE_RteUtility$$EX($p0, $p1, $p2) {
    try {
        SP.UI.UIUtility.insertAfter($p0, $p1);
    }
    catch ($$e_3) {
        if (null === $p2) {
            $p1.parentNode.appendChild($p0);
        }
        else {
            SP.UI.UIUtility.insertBefore($p0, $p2);
        }
    }
};
RTE.RteUtility.$Kk = function RTE_RteUtility$$Kk($p0) {
    for (var $v_0 = $p0.length - 1; $v_0 >= 0; $v_0--) {
        var $v_1 = $p0[$v_0];

        if (RTE.RteUtility.$JL($v_1) || SP.UI.UIUtility.isSvgNode($v_1)) {
            Array.remove($p0, $v_1);
            continue;
        }
    }
};
RTE.RteUtility.$JL = function RTE_RteUtility$$JL($p0) {
    while (null !== $p0) {
        var $v_0 = $p0.className;

        if ($v_0) {
            if ($v_0.indexOf('ms-rtestate-write') !== -1) {
                return false;
            }
            if ($v_0.indexOf('ms-rtestate-read') !== -1) {
                return true;
            }
        }
        $p0 = $p0.parentNode;
    }
    return false;
};
RTE.RteUtility.isInWebpartBox = function RTE_RteUtility$isInWebpartBox(node) {
    while (null !== node) {
        var $v_0 = node.className;

        if ($v_0 && $v_0.indexOf('ms-rte-wpbox') >= 0) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
};
RTE.RteUtility.$6Y = function RTE_RteUtility$$6Y($p0) {
    var $v_0 = RTE.RteUtility.$6J($p0);

    if (RTE.SU.$2($v_0)) {
        return false;
    }
    return true;
};
RTE.RteUtility.$6J = function RTE_RteUtility$$6J($p0) {
    if ($p0 && window.vwpcm && window.vwpcm.rgparts) {
        if ($p0.tagName === 'DIV') {
            var $v_0 = $p0.id;

            if ($v_0 && $v_0.length === 40 && $v_0.startsWith('div_')) {
                var $v_1 = $v_0.substr(4);

                if ($p0.className && $p0.className.indexOf('ms-rtestate-read') >= 0 && $p0.className.indexOf($v_1) >= 0) {
                    var $v_2 = window.vwpcm.rgparts;

                    if ($v_2[$v_1]) {
                        return $v_1;
                    }
                    var $v_3 = window.WPCM.newWebPartIdElementId;

                    if (!RTE.SU.$2($v_3) && $get($v_3)) {
                        if ($v_1 === ($get($v_3)).value) {
                            return $v_1;
                        }
                    }
                    var $v_4 = window.WPCM.injectedWebPartIdElementId;

                    if (!RTE.SU.$2($v_4)) {
                        if ($v_1 === $v_4) {
                            return $v_1;
                        }
                    }
                }
            }
        }
    }
    return null;
};
RTE.RteUtility.$15 = function RTE_RteUtility$$15($p0, $p1) {
    if ($p0) {
        if ($p0.removeAttribute) {
            $p0.removeAttribute($p1);
        }
        else {
            $p0[$p1] = '';
        }
    }
};
RTE.RteUtility.$I5 = function RTE_RteUtility$$I5($p0, $p1, $p2, $p3) {
    var $v_0 = $p0.createElement('SPAN');

    SP.UI.UIUtility.insertBefore($v_0, $p1);
    $v_0.className = $p2;
    var $v_1 = RTE.RteUtility.$I4($v_0, $p3);

    SP.UI.UIUtility.removeNode($v_0);
    return $v_1;
};
RTE.RteUtility.$I4 = function RTE_RteUtility$$I4($p0, $p1) {
    var $v_0 = RTE.RteUtility.$1c($p0);

    return $v_0[$p1];
};
RTE.RteUtility.$54 = function RTE_RteUtility$$54($p0, $p1) {
    for (var $v_0 = 0; $v_0 < $p1.length; $v_0++) {
        if ($p0 === $p1[$v_0]) {
            return true;
        }
    }
    return false;
};
RTE.RteUtility.$3F = function RTE_RteUtility$$3F($p0, $p1) {
    for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
        if ($p1.indexOf($p0[$v_0]) !== -1) {
            return true;
        }
    }
    return false;
};
RTE.RteUtility.$BJ = function RTE_RteUtility$$BJ($p0) {
    var $v_0 = $p0.length;
    var $v_1 = new Array($v_0);

    for (var $v_2 = 0; $v_2 < $v_0; $v_2++) {
        $v_1[$v_2] = $p0[$v_2];
    }
    return $v_1;
};
RTE.RteUtility.forEachChildWithTagAndClass = function RTE_RteUtility$forEachChildWithTagAndClass(element, tag, className, callback) {
    var $v_0 = !RTE.SU.$2(className);
    var $v_1 = !RTE.SU.$2(tag);
    var $v_2;

    if (($v_1 && tag.indexOf(':') === -1 || $v_0) && element.querySelectorAll) {
        var $v_3 = ($v_1 ? tag : '') + ($v_0 ? '.' + className : '');

        $v_2 = element.querySelectorAll($v_3);
        $v_1 = false;
        $v_0 = false;
    }
    else if ($v_1) {
        $v_2 = element.getElementsByTagName(tag);
        $v_2 = RTE.RteUtility.$BJ($v_2);
        $v_1 = false;
    }
    else {
        $v_2 = element.getElementsByTagName('*');
        $v_2 = RTE.RteUtility.$BJ($v_2);
    }
    for (var $v_4 = 0; $v_4 < $v_2.length; $v_4++) {
        var $v_5 = $v_2[$v_4];

        if (!$v_0 || $v_5.className && $v_5.className.indexOf(className) !== -1) {
            callback($v_5);
        }
    }
};
RTE.RteUtility.showRibbonTab = function RTE_RteUtility$showRibbonTab(contextGroup, tabCommand) {
    var $v_0 = RTE.Canvas.currentEditableRegion();

    if (!$v_0 || RTE.Canvas.getCachedRestriction($v_0, 'DisableRibbonCommands', false)) {
        return;
    }
    RTE.RteUtility.$7S = contextGroup;
    RTE.RteUtility.$7T = tabCommand;
    window.setTimeout(RTE.RteUtility.$EL, 0);
};
RTE.RteUtility.$LO = function RTE_RteUtility$$LO($p0) {
    var $v_0 = RTE.RichTextEditorComponent.$4s();

    if ($v_0) {
        var $v_1 = $v_0.get_ribbon();

        if (!$v_1 || $v_1.get_selectedTabId() !== $p0) {
            try {
                RTE.Imports.SelectRibbonTab($p0, true);
            }
            catch ($$e_3) { }
        }
    }
};
RTE.RteUtility.$LP = function RTE_RteUtility$$LP() {
    if (!RTE.RteUtility.$7S || !RTE.RteUtility.$7T) {
        return;
    }
    var $v_0 = RTE.RichTextEditorComponent.$4s();

    if ($v_0) {
        var $v_1 = $v_0.get_ribbon();

        if ($v_1 && !(RTE.PreviewManager.get_instance()).get_hasPreview()) {
            $v_1.showContextualGroup(RTE.RteUtility.$7S);
            $v_1.selectTabByCommand(RTE.RteUtility.$7T);
        }
    }
};
RTE.RteUtility.showNextBestTabIfSelectedRibbonTabIs = function RTE_RteUtility$showNextBestTabIfSelectedRibbonTabIs(tabCommands) {
    var $v_0 = RTE.Canvas.currentEditableRegion();

    if (!$v_0 || RTE.Canvas.getCachedRestriction($v_0, 'DisableRibbonCommands', false)) {
        return;
    }
    var $v_1 = RTE.RichTextEditorComponent.$4s();

    if ($v_1) {
        var $v_2 = $v_1.get_ribbon();

        if ($v_2 && !(RTE.PreviewManager.get_instance()).get_hasPreview()) {
            if (RTE.RteUtility.$54($v_2.get_selectedTabCommand(), tabCommands)) {
                if (RTE.CanvasEvents.getNodeFromEvent('Image')) {
                    $v_2.showContextualGroup('Ribbon.Image');
                    $v_2.selectTabByCommand('ImageTab');
                }
                else if (RTE.CanvasEvents.getNodeFromEvent('Link')) {
                    $v_2.showContextualGroup('Ribbon.Link');
                    $v_2.selectTabByCommand('LinkTab');
                }
                else if (RTE.CanvasEvents.getNodeFromEvent('Table')) {
                    $v_2.showContextualGroup('Ribbon.Table');
                    $v_2.selectTabByCommand('TableLayoutTab');
                }
                else {
                    $v_2.showContextualGroup('Ribbon.EditingTools');
                    $v_2.selectTabByCommand('CPEditTab');
                }
            }
        }
    }
};
RTE.RteUtility.getAttribute = function RTE_RteUtility$getAttribute(node, name) {
    if (!node.getAttribute) {
        return null;
    }
    var $v_0 = node.getAttribute(name);

    if (!RTE.SU.$7($v_0)) {
        return $v_0;
    }
    else {
        return node[name];
    }
};
RTE.RteUtility.isClassAvailable = function RTE_RteUtility$isClassAvailable(classPath) {
    var $v_0 = classPath.split('.');
    var $v_1 = window;

    for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
        $v_1 = $v_1[$v_0[$v_2]];
        if (!$v_1) {
            return false;
        }
    }
    return true;
};
RTE.RteUtility.classMustExist = function RTE_RteUtility$classMustExist(classPath) {
    if (!RTE.RteUtility.isClassAvailable(classPath)) { }
};
RTE.RteUtility.initImageForce = function RTE_RteUtility$initImageForce(image) {
    image.setAttribute(RTE.RteUtility.$4q, 'true');
    RTE.RteUtility.initImage(image);
};
RTE.RteUtility.initImageSizeForce = function RTE_RteUtility$initImageSizeForce(image) {
    image.setAttribute(RTE.RteUtility.$4q, 'true');
    RTE.RteUtility.$CM(image);
};
RTE.RteUtility.initImage = function RTE_RteUtility$initImage(image) {
    image.style.margin = '5px';
    RTE.RteUtility.$CM(image);
};
RTE.RteUtility.$CM = function RTE_RteUtility$$CM($p0) {
    if (!$p0.style.width && !$p0.style.height) {
        if ($p0.src && $p0.src.length > 0) {
            RTE.RteUtility.$9o($p0);
        }
        else {
            $addHandler($p0, 'load', RTE.RteUtility.$8j);
        }
    }
};
RTE.RteUtility.$LC = function RTE_RteUtility$$LC($p0) {
    RTE.RteUtility.$9o($p0.target);
    $removeHandler($p0.target, 'load', RTE.RteUtility.$8j);
};
RTE.RteUtility.$9o = function RTE_RteUtility$$9o($p0) {
    if ($p0.complete || $p0.readyState === 'complete') {
        var $v_0 = $p0.getAttribute(RTE.RteUtility.$4q);

        if ($v_0 === 'true' || !$p0.style.width && !$p0.style.height) {
            var $v_1 = RTE.Canvas.getEditableRegion($p0) || RTE.Canvas.currentEditableRegion();

            if ($v_1) {
                if ($v_1.clientWidth < $p0.width) {
                    $p0.removeAttribute('width');
                    $p0.removeAttribute('height');
                    $p0.style.height = '';
                    $p0.style.width = Math.max(RTE.RteUtility.$CH, $v_1.clientWidth - RTE.RteUtility.$CI) + 'px';
                }
            }
        }
        $p0.removeAttribute(RTE.RteUtility.$4q);
    }
    else if ($p0.src && $p0.src.length > 0) {
        window.setTimeout(function() {
            RTE.RteUtility.$9o($p0);
        }, 20);
    }
};
RTE.RteUtility.$JJ = function RTE_RteUtility$$JJ($p0, $p1) {
    for (var $v_0 = 0; $v_0 < $p0.childNodes.length; $v_0++) {
        var $v_1 = $p0.childNodes[$v_0];

        if ($v_1 !== RTE.Cursor.s_range.$4_0 && $v_1 !== RTE.Cursor.s_range.$3_0 && !RTE.RteUtility.$1y($v_1, $p1) && !RTE.RteUtility.$4z($v_1)) {
            return false;
        }
    }
    return true;
};
RTE.RteUtility.$3w = function RTE_RteUtility$$3w($p0, $p1) {
    if (RTE.RteUtility.$1y($p0, $p1)) {
        return true;
    }
    if ($p0.nodeType === 1 && $p0.firstChild === $p0.lastChild) {
        var $v_0 = $p0.tagName.toUpperCase();

        if (($v_0 === 'FONT' || $v_0 === 'SPAN') && (!$p0.firstChild || RTE.RteUtility.$3w($p0.firstChild, $p1))) {
            return true;
        }
    }
    return false;
};
RTE.RteUtility.$1y = function RTE_RteUtility$$1y($p0, $p1) {
    if (!SP.UI.UIUtility.isTextNode($p0)) {
        return false;
    }
    return RTE.RteUtility.$6X($p0.nodeValue, $p1);
};
RTE.RteUtility.$6X = function RTE_RteUtility$$6X($p0, $p1) {
    if (RTE.SU.$2($p0)) {
        return true;
    }
    var $v_0 = $p1 ? RTE.RteUtility.$EQ : RTE.RteUtility.$ER;

    return $v_0.test($p0);
};
RTE.RteUtility.$6O = function RTE_RteUtility$$6O($p0) {
    var $v_0;

    $v_0 = $p0.document.documentElement.clientWidth;
    if (RTE.SU.$7($v_0) || $v_0 <= 0) {
        $v_0 = $p0.innerWidth;
    }
    if (RTE.SU.$7($v_0) || $v_0 <= 0) {
        $v_0 = $p0.document.body.clientWidth;
    }
    return $v_0;
};
RTE.RteUtility.$6N = function RTE_RteUtility$$6N($p0) {
    var $v_0;

    $v_0 = $p0.document.documentElement.clientHeight;
    if (RTE.SU.$7($v_0) || $v_0 <= 0) {
        $v_0 = $p0.innerHeight;
    }
    if (RTE.SU.$7($v_0) || $v_0 <= 0) {
        $v_0 = $p0.document.body.clientHeight;
    }
    return $v_0;
};
RTE.RteUtility.getRteNodeId = function RTE_RteUtility$getRteNodeId(node) {
    if (!RTE.RteUtility.isValidRteNodeId(node)) {
        throw Error.invalidOperation('this node cannot have id');
    }
    var $v_0 = node.getAttribute('RteNodeId');

    if (RTE.SU.$7($v_0)) {
        $v_0 = '' + RTE.RteUtility.$9B;
        RTE.RteUtility.$9B++;
        node.setAttribute('RteNodeId', $v_0);
    }
    return $v_0;
};
RTE.RteUtility.isValidRteNodeId = function RTE_RteUtility$isValidRteNodeId(node) {
    return node.nodeType === 1;
};
RTE.RteUtility.removeRteNodeId = function RTE_RteUtility$removeRteNodeId(node) {
    if (RTE.RteUtility.isValidRteNodeId(node)) {
        node.removeAttribute('RteNodeId');
    }
};
RTE.RteUtility.containsCssClass = function RTE_RteUtility$containsCssClass(element, className) {
    if (SP.UI.UIUtility.isSvgNode(element) || element.nodeType !== 1) {
        return false;
    }
    return Sys.UI.DomElement.containsCssClass(element, className);
};
RTE.SU = function RTE_SU() {
};
RTE.SU.$2 = function RTE_SU$$2($p0) {
    var $v_0 = null;

    return $p0 === $v_0 || typeof $p0 === 'undefined' || !$p0.length;
};
RTE.SU.$7 = function RTE_SU$$7($p0) {
    var $v_0 = null;

    return $p0 === $v_0 || typeof $p0 === 'undefined';
};
RTE.SU.$1R = function RTE_SU$$1R($p0) {
    return typeof $p0 === 'undefined';
};
RTE.Ie8TreeValidator = function RTE_Ie8TreeValidator($p0) {
    this.$8M_0 = {};
    this.$8L_0 = {};
    this.$Ab_0($p0, 0);
};
RTE.Ie8TreeValidator.prototype = {
    $Ab_0: function RTE_Ie8TreeValidator$$Ab_0($p0, $p1) {
        if ($p0.nodeType === 1) {
            var $v_0 = $p0.uniqueID;
            var $v_1 = $p0.childNodes;
            var $v_2 = $v_1.length;

            for (var $v_3 = 0; $v_3 < $v_2; $v_3++) {
                var $v_4 = $v_1[$v_3];

                if ($v_4.nodeType === 1) {
                    var $v_5 = $v_4.uniqueID;

                    if (typeof $v_5 !== 'undefined') {
                        var $v_6 = this.$8L_0[$v_5];

                        if (typeof $v_6 === 'undefined' || $v_6 > $p1) {
                            this.$8L_0[$v_5] = $p1;
                            this.$8M_0[$v_5] = $v_0;
                        }
                    }
                    this.$Ab_0($v_4, $p1 + 1);
                }
            }
        }
    },
    $LK_0: function RTE_Ie8TreeValidator$$LK_0($p0, $p1) {
        if ($p1.nodeType !== 1) {
            return true;
        }
        var $v_0 = $p1.uniqueID;

        if (typeof $v_0 === 'undefined') {
            return true;
        }
        var $v_1 = this.$8M_0[$v_0];

        return typeof $v_1 === 'undefined' || $v_1 === $p0.uniqueID;
    }
};
RTE.SafeHtml = function RTE_SafeHtml() {
};
RTE.SafeHtml.$It = function RTE_SafeHtml$$It() {
    if (!RTE.SafeHtml.$3Y) {
        RTE.SafeHtml.$3Y = {};
        RTE.SafeHtml.$9b = {};
        var $v_0 = RTE.NativeSafeHtml.getSafeHtmlRules();

        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1 += 2) {
            var $v_2 = $v_0[$v_1];
            var $v_3 = $v_0[$v_1 + 1];

            RTE.SafeHtml.$3Y[$v_2] = $v_3;
            if (!$v_2.startsWith('!--') && $v_2.indexOf('_') < 0) {
                RTE.SafeHtml.$9b[$v_2] = true;
            }
        }
        RTE.SafeHtml.$3Y['BR__moz_editor_bogus_node'] = 'A';
        RTE.SafeHtml.$3Y['BR__moz_dirty'] = 'A';
    }
};
RTE.SafeHtml.get_$9e = function RTE_SafeHtml$get_$9e() {
    RTE.SafeHtml.$It();
    return RTE.SafeHtml.$3Y;
};
RTE.SafeHtml.$Ig = function RTE_SafeHtml$$Ig($p0, $p1) {
    var $v_0 = RTE.SafeHtml.get_$9e();
    var $v_1 = $v_0[$p0];

    if (RTE.SU.$1R($v_1)) {
        return $p1;
    }
    return $v_1;
};
RTE.SafeHtml.$I0 = function RTE_SafeHtml$$I0($p0, $p1, $p2) {
    if ($p1 === 'contenteditable' || $p1.startsWith('data-') || $p1.startsWith('aria-')) {
        return 'A';
    }
    var $v_0 = $p0 + '_' + $p1;
    var $v_1 = (RTE.SafeHtml.get_$9e())[$v_0];

    if (!RTE.SU.$1R($v_1)) {
        return $v_1;
    }
    $v_0 = '!--_' + $p1;
    $v_1 = (RTE.SafeHtml.get_$9e())[$v_0];
    if (!RTE.SU.$1R($v_1)) {
        return $v_1;
    }
    return $p2;
};
RTE.SafeHtml.$Ic = function RTE_SafeHtml$$Ic($p0) {
    var $v_0 = [];
    var $v_1 = $p0.attributes;
    var $v_2 = $v_1.length;

    for (var $v_3 = 0; $v_3 < $v_2; $v_3++) {
        if ($v_1[$v_3].specified) {
            Array.add($v_0, $v_1[$v_3]);
        }
    }
    return $v_0;
};
RTE.SafeHtml.addDisallowedPasteClass = function RTE_SafeHtml$addDisallowedPasteClass(className) {
    RTE.SafeHtml.$4k.push(className);
};
RTE.SafeHtml.$Kn = function RTE_SafeHtml$$Kn($p0) {
    RTE.SafeHtml.$7E($p0, true, false, false, false);
};
RTE.SafeHtml.$Ko = function RTE_SafeHtml$$Ko($p0) {
    RTE.SafeHtml.$7E($p0, true, false, true, false);
};
RTE.SafeHtml.$Km = function RTE_SafeHtml$$Km($p0) {
    return RTE.SafeHtml.$7E($p0, true, false, false, true);
};
RTE.SafeHtml.$9S = function RTE_SafeHtml$$9S($p0, $p1, $p2, $p3) {
    RTE.SafeHtml.$7E($p0, $p1, $p2, $p3, true);
};
RTE.SafeHtml.$7E = function RTE_SafeHtml$$7E($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = false;
    var $v_1 = RTE.Canvas.getEditableRegion($p0);
    var $v_2 = RTE.Canvas.getCachedRestriction($v_1, 'AllowScripts', false);

    if ($v_2) {
        return false;
    }
    if (!$p2 && !$p0.childNodes.length) {
        return false;
    }
    var $v_3 = [];
    var $v_4 = [];
    var $v_5 = [];
    var $v_6 = [];
    var $v_7 = [];
    var $v_8 = new RTE.DOMTreePosition($p0, 0);

    if ($p2) {
        $v_8.moveToPreviousElement();
    }
    var $v_9 = new RTE.DOMTreePosition($p0, 0);

    $v_9.setLocationAtEnd();
    $v_9.moveToNextElement();
    while (true) {
        if (!$v_8.moveToNextElement()) {
            break;
        }
        var $v_D = $v_8.$1_0;

        if ($v_D === $v_9.$1_0 || $v_D === $v_1) {
            break;
        }
        if ($v_8.$1_0.childNodes.length && $v_8.atEnd()) {
            continue;
        }
        if (SP.UI.UIUtility.isTextNode($v_D)) {
            if (RTE.RteUtility.$1y($v_D, false)) {
                if (RTE.RteUtility.$N($v_D.parentNode)) {
                    var $v_N = RTE.RteUtility.$m($v_D, false);
                    var $v_O = RTE.RteUtility.$t($v_D, false);

                    if ((!$v_N || RTE.RteUtility.$N($v_N)) && (!$v_O || RTE.RteUtility.$N($v_O))) {
                        Array.add($v_3, $v_D);
                    }
                }
            }
            continue;
        }
        if (RTE.RteUtility.$CZ($v_D)) {
            var $v_P = $v_D.data;

            if ($v_P && ($v_P.trim()).toLowerCase() === '[if !supportlists]') {
                var $v_Q = $v_D;
                var $v_R = null;

                for (var $v_S = 0; $v_S < 4; $v_S++) {
                    $v_Q = RTE.RteUtility.$t($v_Q, false);
                    if (!$v_Q) {
                        break;
                    }
                    if ($v_Q.nodeType === 8) {
                        $v_P = $v_Q.data;
                        if ($v_P && ($v_P.trim()).toLowerCase() === '[endif]') {
                            $v_R = $v_Q;
                            break;
                        }
                    }
                }
                if ($v_R) {
                    var $v_T = $p0.ownerDocument.createElement('SPAN');

                    $v_T.setAttribute('style', 'mso-list: ignore');
                    $v_Q = RTE.RteUtility.$t($v_D, false);
                    while ($v_Q !== $v_R) {
                        $v_Q = $v_Q.nextSibling;
                        $v_T.appendChild($v_Q.previousSibling);
                    }
                    SP.UI.UIUtility.insertAfter($v_T, $v_D);
                }
            }
        }
        if ($v_D.scopeName && $v_D.scopeName !== 'HTML') {
            Array.add($v_4, $v_D);
            $v_0 = true;
            continue;
        }
        if (RTE.RteUtility.$6Y($v_D)) {
            $v_8.setLocationAtEnd();
            continue;
        }
        var $v_E = '';
        var $v_F = $v_D.tagName;

        if (!RTE.SU.$7($v_F)) {
            $v_E = $v_F.toUpperCase();
            if ($v_E === 'SVG') {
                $v_8.setLocationAtEnd();
                if ($v_8.$1_0 === $p0) {
                    break;
                }
                continue;
            }
        }
        var $v_G = RTE.SafeHtml.$Ig($v_E, 'DT');
        var $v_H = false;
        var $v_I = false;

        RTE.RteUtility.removeRteNodeId($v_D);
        var $v_J = '';
        var $v_K = $v_D.className;

        if (!RTE.SU.$7($v_K)) {
            $v_J = $v_K;
        }
        var $v_L = $v_E === 'IFRAME' && !!$v_D.src && ($v_D.src.toLowerCase()).startsWith('http') && RTE.EmbeddingCommands.canUserEmbedIframes();

        if (!$v_L) {
            var $v_U = $p3 && $v_D.nodeType === 1 && (!!$v_D.style.display && $v_D.style.display.toLowerCase() === 'none' || !!$v_D.style.visibility && $v_D.style.visibility.toLowerCase() === 'hidden');

            if ($v_G === 'DB' || $v_J.indexOf('ms-rtepaste-remove') !== -1 || $v_U) {
                $v_H = true;
                $v_I = true;
            }
            else if ($v_G === 'DT' || $v_D.tagUrn && $v_D.tagUrn !== '') {
                $v_H = true;
            }
        }
        if ($v_J.indexOf('ms-rtestate-notify') !== -1) {
            Array.add($v_5, $v_D);
        }
        if ($v_H) {
            $v_0 = true;
            $v_D.src = '';
            if ($v_E === 'LINK' && $v_D.href) {
                var $v_V = $v_D.ownerDocument.styleSheets;

                for (var $v_W = 0; $v_W < $v_V.length; $v_W++) {
                    if ($v_V[$v_W].href && $v_V[$v_W].href.toUpperCase() === $v_D.href.toUpperCase()) {
                        $v_V[$v_W].cssText = '';
                    }
                }
            }
            if (!$p1 && $v_E === 'SCRIPT') {
                $v_D.text = '';
                $v_8.setLocationAtEnd();
                if ($v_8.$1_0 === $p0) {
                    break;
                }
            }
            else if ($v_I) {
                Array.add($v_3, $v_D);
                $v_8.setLocationAtEnd();
                if ($v_8.$1_0 === $p0) {
                    break;
                }
            }
            else {
                Array.add($v_4, $v_D);
            }
            continue;
        }
        var $v_M = $v_D.getAttribute('style');

        if (!RTE.SU.$2($v_M)) {
            Array.add($v_6, $v_D);
            Array.add($v_7, $v_M);
        }
        $v_D.removeAttribute('style');
        if ($p3) {
            $v_0 = $v_0 || !!$v_D.id;
            $v_D.removeAttribute('id');
        }
        if (!RTE.SU.$2($v_J)) {
            for (var $v_X = 0; $v_X < RTE.SafeHtml.$4k.length; $v_X++) {
                if (Sys.UI.DomElement.containsCssClass($v_D, RTE.SafeHtml.$4k[$v_X])) {
                    $v_0 = true;
                    Sys.UI.DomElement.removeCssClass($v_D, RTE.SafeHtml.$4k[$v_X]);
                }
            }
        }
        if (!$v_L) {
            var $v_Y = RTE.SafeHtml.$Ic($v_D);
            var $v_Z = $v_Y.length;

            if ($v_Y && $v_Z > 0) {
                var $v_a = {};

                $v_a['DA'] = [];
                $v_a['DANV'] = [];
                $v_a['DAURL'] = [];
                $v_a['DTURL'] = [];
                $v_a['RAV'] = [];
                $v_a['A'] = [];
                for (var $v_l = 0; $v_l < $v_Z; $v_l++) {
                    var $v_m = $v_Y[$v_l];

                    if ($v_m.specified) {
                        var $v_n = $v_m.name;
                        var $v_o = $v_n.toLowerCase();

                        if (!RTE.SU.$2($v_n)) {
                            var $v_p = RTE.SafeHtml.$I0($v_E, $v_o, 'DA');

                            Array.add($v_a[$v_p], $v_n);
                        }
                    }
                }
                var $v_b = $v_a['DA'];
                var $v_c = $v_b.length;

                for (var $v_q = 0; $v_q < $v_c; $v_q++) {
                    $v_0 = true;
                    var $v_r = $v_b[$v_q];

                    $v_D.removeAttributeNode($v_D.getAttributeNode($v_r));
                }
                var $v_d = $v_a['RAV'];
                var $v_e = $v_d.length;

                for (var $v_s = 0; $v_s < $v_e; $v_s++) {
                    var $v_t = $v_d[$v_s];

                    $v_D.removeAttributeNode($v_D.getAttributeNode($v_t));
                }
                var $v_f = $v_a['DANV'];
                var $v_g = $v_f.length;

                for (var $v_u = 0; $v_u < $v_g; $v_u++) {
                    var $v_v = $v_f[$v_u];
                    var $v_w = $v_D.getAttribute($v_v);

                    if (RTE.SU.$7($v_w)) {
                        $v_0 = true;
                        $v_D.removeAttributeNode($v_D.getAttributeNode($v_v));
                    }
                }
                var $v_h = $v_a['DAURL'];
                var $v_i = $v_h.length;

                for (var $v_x = 0; $v_x < $v_i; $v_x++) {
                    var $v_y = $v_h[$v_x];
                    var $v_z = $v_D.getAttribute($v_y);

                    if ($v_z && typeof $v_z === 'string') {
                        var $v_10 = $v_z;

                        $v_10 = $v_10.toLowerCase();
                        if (!RTE.RteUtility.$Ck($v_10)) {
                            $v_0 = true;
                            $v_D.removeAttributeNode($v_D.getAttributeNode($v_y));
                        }
                    }
                }
                var $v_j = $v_a['DTURL'];
                var $v_k = $v_j.length;

                for (var $v_11 = 0; $v_11 < $v_k; $v_11++) {
                    var $v_12 = $v_j[$v_11];
                    var $v_13 = $v_D.getAttribute($v_12);

                    if ($v_13 && typeof $v_13 === 'string') {
                        var $v_14 = $v_13;

                        $v_14 = $v_14.toLowerCase();
                        if (!RTE.RteUtility.$Ck($v_14)) {
                            Array.add($v_4, $v_D);
                            break;
                        }
                    }
                }
            }
        }
    }
    var $v_A = $v_4.length;

    for (var $v_15 = 0; $v_15 < $v_A; $v_15++) {
        RTE.RteUtility.removeNodeAndKeepChildNodes($v_4[$v_15]);
    }
    var $v_B = $v_3.length;

    for (var $v_16 = 0; $v_16 < $v_B; $v_16++) {
        var $v_17 = $v_3[$v_16];

        try {
            $v_17.parentNode.removeChild($v_17);
        }
        catch ($$e_1C) { }
    }
    var $v_C = $v_6.length;

    for (var $v_18 = 0; $v_18 < $v_C; $v_18++) {
        var $v_19 = $v_6[$v_18];
        var $v_1A = $v_7[$v_18];
        var $v_1B = RTE.NativeSafeHtml.cleanStyleText($v_1A);

        $v_19.setAttribute('style', $v_1B);
    }
    if ($p4) {
        var $v_1C = $v_5.length;

        for (var $v_1D = 0; $v_1D < $v_1C; $v_1D++) {
            var $v_1E = {};

            $v_1E.node = $v_5[$v_1D];
            RTE.CanvasEvents.dispatchEvent('ElementAdded', 'html', $v_1E);
        }
    }
    return $v_0;
};
RTE.Selection = function RTE_Selection($p0) {
    this.$2h_0 = $p0;
};
RTE.Selection.getSelection = function RTE_Selection$getSelection() {
    var $v_0 = window.document;
    var $v_1 = null;

    if (!$v_1) {
        var $v_2 = $v_0.defaultView;

        if ($v_2) {
            var $v_3 = $v_0.defaultView.getSelection;

            if ($v_3) {
                $v_1 = $v_0.defaultView.getSelection();
            }
        }
    }
    if (!$v_1) {
        var $v_4 = window.self.getSelection;

        if ($v_4) {
            $v_1 = window.self.getSelection();
        }
    }
    if (!$v_1) {
        $v_1 = $v_0.selection;
    }
    return new RTE.Selection($v_1);
};
RTE.Selection.isControlRangeSelection = function RTE_Selection$isControlRangeSelection() {
    var $v_0 = window.document.selection;

    return !!$v_0 && !RTE.SU.$2($v_0.type) && $v_0.type === 'Control';
};
RTE.Selection.getSelectionRange = function RTE_Selection$getSelectionRange() {
    var $v_0 = RTE.Selection.getSelection();

    if ($v_0) {
        return $v_0.createRange();
    }
    return null;
};
RTE.Selection.get_hasSelection = function RTE_Selection$get_hasSelection() {
    var $v_0 = RTE.Selection.getSelection();

    if (!$v_0) {
        return false;
    }
    var $v_1 = $v_0.createRange();

    if (!$v_1) {
        return false;
    }
    return $v_1.isVisible();
};
RTE.Selection.prototype = {
    $2h_0: null,
    createRange: function RTE_Selection$createRange() {
        var $v_0 = RTE.DomHelper.createRangeFromSelection(this.$2h_0);

        if (!$v_0) {
            return null;
        }
        return new RTE.Range($v_0);
    },
    clear: function RTE_Selection$clear() {
        if (this.$2h_0.removeAllRanges) {
            this.$2h_0.removeAllRanges();
        }
        else if (this.$2h_0.empty) {
            this.$2h_0.empty();
        }
    }
};
RTE.SelectionManager = function RTE_SelectionManager() {
};
RTE.SelectionManager.$J0 = function RTE_SelectionManager$$J0() {
    RTE.RteUtility.classMustExist('CUI.JsonXmlElement');
    var $v_0 = new CUI.JsonXmlElement('Menu', {
        Id: 'Ribbon.EditingTools.CPEditTab.Html.Select.Menu'
    });
    var $v_1 = ($v_0.appendChild('MenuSection', {
        Id: 'Ribbon.EditingTools.CPEditTab.Html.Select.Menu.Elements'
    })).appendChild('Controls', {
        Id: 'Ribbon.EditingTools.CPEditTab.Html.Select.Menu.Elementscontrols'
    });

    if ((RTE.Cursor.get_range()).isValid() && RTE.SelectionManager.$7Q) {
        RTE.SelectionManager.$2q = (RTE.Cursor.get_range()).getParentChain();
        var $v_2 = {};

        for (var $v_4 = 0; $v_4 < RTE.SelectionManager.$2q.length; $v_4++) {
            var $v_5 = RTE.SelectionManager.$2q[$v_4].tagName;

            if (!$v_2[$v_5]) {
                $v_2[$v_5] = 1;
            }
            else {
                $v_2[$v_5] = $v_2[$v_5] + 1;
            }
        }
        var $v_3 = {};

        for (var $v_6 = 0; $v_6 < RTE.SelectionManager.$2q.length; $v_6++) {
            var $v_7 = RTE.SelectionManager.$2q[$v_6].tagName;
            var $v_8;

            if ($v_2[$v_7] > 1) {
                var $v_9 = 1;

                if ($v_3[$v_7]) {
                    $v_9 = $v_3[$v_7] + 1;
                }
                $v_8 = RTE.RteUtility.getDisplayNameForTagWithNumber($v_7, $v_9);
                $v_3[$v_7] = $v_9;
            }
            else {
                $v_8 = RTE.RteUtility.getDisplayNameForTag($v_7);
            }
            $v_1.appendChild('Button', {
                Id: 'SelectMenuItem' + $v_6.toString(),
                LabelText: $v_8,
                CommandType: 'General',
                MenuItemId: 'SelectMenuItem' + $v_6.toString(),
                CommandValueId: $v_6.toString(),
                Command: 'SelectMenuItem',
                CommandPreview: 'SelectMenuItemPreview'
            });
        }
    }
    return $v_0;
};
RTE.SelectionManager.$7F = function RTE_SelectionManager$$7F() {
    for (var $v_0 = RTE.SelectionManager.$5Y.length - 1; $v_0 >= 0; $v_0--) {
        var $v_1 = RTE.SelectionManager.$5Y[$v_0];

        if ($v_1 && $v_1.style) {
            $v_1.style.cssText = RTE.SelectionManager.$6z[$v_0];
        }
    }
    RTE.SelectionManager.$5Y = [];
    RTE.SelectionManager.$6z = [];
};
RTE.SelectionManager.$AN = function RTE_SelectionManager$$AN($p0) {
    if (SP.UI.UIUtility.isTextNode($p0)) {
        return;
    }
    if ($p0.tagName === 'TBODY' || $p0.tagName === 'TR' || $p0.tagName === 'THEAD' || $p0.tagName === 'TFOOT') {
        for (var $v_0 = 0; $v_0 < $p0.childNodes.length; $v_0++) {
            RTE.SelectionManager.$AN($p0.childNodes[$v_0]);
        }
    }
    else {
        RTE.SelectionManager.$5Y.push($p0);
        RTE.SelectionManager.$6z.push($p0.style.cssText);
        $p0.style.border = 'red dashed 2px';
    }
};
RTE.SelectionManager.selectParentElement = function RTE_SelectionManager$selectParentElement(index, commandType) {
    switch (commandType) {
    case 0:
        RTE.SelectionManager.$7F();
        (RTE.Cursor.get_range()).moveToChildren(RTE.SelectionManager.$2q[index]);
        RTE.Cursor.update();
        break;
    case 1:
        RTE.SelectionManager.$7Q = false;
        RTE.SelectionManager.$7F();
        RTE.SelectionManager.$7Q = true;
        RTE.SelectionManager.$AN(RTE.SelectionManager.$2q[index]);
        break;
    }
};
RTE.Snapshot = function RTE_Snapshot() {
    this.$1o_0 = -1;
    this.$1b_0 = -1;
};
RTE.Snapshot.$C3 = function RTE_Snapshot$$C3($p0) {
    return RTE.Snapshot.$8Y($p0, false, true);
};
RTE.Snapshot.$8X = function RTE_Snapshot$$8X($p0) {
    return RTE.Snapshot.$8Y($p0, false, false);
};
RTE.Snapshot.$IC = function RTE_Snapshot$$IC($p0) {
    var $v_0 = RTE.Snapshot.$8Y($p0, true, true);
    var $v_1 = $v_0.get_$8d_0();

    return $v_0;
};
RTE.Snapshot.$8Y = function RTE_Snapshot$$8Y($p0, $p1, $p2) {
    if (!$p0 || !$p0.parentNode) {
        return null;
    }
    $p0 = RTE.Canvas.$37($p0);
    var $v_0 = new RTE.Snapshot();

    $v_0.$Q_0 = $p0;
    $v_0.$1O_0 = $p0.cloneNode(true);
    $v_0.$8Q_0 = $p1;
    $v_0.$1T_0 = $p2 ? RTE.SnapshotManager.$8m($p0, $v_0, null) : false;
    return $v_0;
};
RTE.Snapshot.prototype = {
    $1O_0: null,
    $Q_0: null,
    $8Q_0: false,
    $1T_0: false,
    $72_0: false,
    $3E_0: null,
    $64_0: false,
    get_$8d_0: function RTE_Snapshot$get_$8d_0() {
        if (!this.$3E_0 && this.$3E_0 !== '') {
            this.$Ak_0();
            this.$3E_0 = this.$1O_0 ? this.$1O_0.innerHTML : '';
        }
        return this.$3E_0;
    },
    set_$8d_0: function RTE_Snapshot$set_$8d_0($p0) {
        this.$3E_0 = $p0 || '';
        return $p0;
    },
    get_$DO_0: function RTE_Snapshot$get_$DO_0() {
        if (this.$1b_0 === -1 && this.$1O_0) {
            if (this.$1O_0.querySelectorAll) {
                this.$Ak_0();
                this.$1b_0 = (this.$1O_0.getElementsByTagName('*')).length;
                this.$1b_0 -= (this.$1O_0.querySelectorAll('#ms-rterangecursor-start, #ms-rterangecursor-end, .ms-rtegenerate-skip')).length;
            }
        }
        return this.$1b_0;
    },
    $9V_0: function RTE_Snapshot$$9V_0() {
        this.$E3_0(true);
    },
    $E3_0: function RTE_Snapshot$$E3_0($p0) {
        RTE.CanvasRange.$69 = true;
        RTE.PasteFlyout.hide();
        RTE.RteUtility.$9p(this.$Q_0, this.get_$8d_0());
        if (this.$Q_0.childNodes.length > 0) {
            RTE.Canvas.$4n(this.$Q_0);
        }
        var $v_0 = null;

        if (RTE.Canvas.$8n(this.$Q_0)) {
            $v_0 = RTE.LayoutsEditor.create(this.$Q_0);
        }
        if (!(RTE.PreviewManager.get_instance()).get_hasPreview()) {
            RTE.CanvasEvents.dispatchChangedOnEditableRegion(this.$Q_0);
        }
        var $v_1 = RTE.Cursor.get_range();
        var $v_2 = $v_1.$4_0.id;
        var $v_3 = $v_1.$3_0.id;

        $v_1.$4_0.id = '';
        $v_1.$3_0.id = '';
        var $v_4 = RTE.SnapshotManager.getMarkers();

        if ($v_4.length === 2 && $v_4[0] && $v_4[1]) {
            (RTE.Cursor.get_range()).setMarkersCollection($v_4);
        }
        else if ($p0) {
            if ($v_0) {
                var $v_5 = $v_0.$Bo_0();

                (RTE.Cursor.get_range()).moveToEndOfNode($v_5);
            }
            else {
                (RTE.Cursor.get_range()).moveToEndOfNode(this.$Q_0);
            }
        }
        $v_1.$4_0.id = $v_2;
        $v_1.$3_0.id = $v_3;
        RTE.CanvasRange.$69 = false;
        if (!this.$8Q_0) {
            var $v_6 = RTE.Snapshot.$8X(this.$Q_0);
            var $v_7 = this.$1T_0;

            this.$8G_0($v_6);
            this.$1T_0 = $v_7;
        }
        if (RTE.Canvas.$LJ()) {
            RTE.Cursor.update();
        }
    },
    $Ak_0: function RTE_Snapshot$$Ak_0() {
        if (!this.$64_0 && this.$1O_0) {
            if (this.$1O_0.querySelectorAll) {
                var $v_0 = this.$1O_0.querySelectorAll('.ms-rtegenerate-notify');

                for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
                    RTE.RteUtility.removeChildNodes($v_0[$v_2]);
                }
                var $v_1 = this.$1O_0.querySelectorAll('.ms-rtegenerate-skip');

                for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
                    RTE.RteUtility.removeNodeAndKeepChildNodes($v_1[$v_3]);
                }
            }
            this.$64_0 = true;
        }
    },
    $8G_0: function RTE_Snapshot$$8G_0($p0) {
        this.$1O_0 = $p0.$1O_0;
        this.$3E_0 = $p0.$3E_0;
        this.$72_0 = $p0.$72_0;
        this.$1o_0 = $p0.$1o_0;
        this.$64_0 = $p0.$64_0;
        this.$1b_0 = $p0.$1b_0;
        this.$1T_0 = $p0.$1T_0;
    }
};
RTE.SnapshotManager = function RTE_SnapshotManager() {
};
RTE.SnapshotManager.takeSnapshot = function RTE_SnapshotManager$takeSnapshot() {
    var $v_0 = RTE.Cursor.get_range();
    var $v_1 = $v_0.getEditableRegion();

    if (!$v_1 || !$v_1.parentNode) {
        return;
    }
    RTE.SnapshotManager.takeEditableRegionSnapshot($v_1);
};
RTE.SnapshotManager.takeSnapshotIfNotInPreview = function RTE_SnapshotManager$takeSnapshotIfNotInPreview() {
    if (!(RTE.PreviewManager.get_instance()).get_hasPreview()) {
        RTE.SnapshotManager.takeSnapshot();
    }
};
RTE.SnapshotManager.takePartialSnapshot = function RTE_SnapshotManager$takePartialSnapshot(editableRegion) {
    if (!editableRegion) {
        return;
    }
    var $v_0 = RTE.Snapshot.$C3(editableRegion);

    $v_0.$72_0 = true;
    $v_0.$1o_0 = RTE.SnapshotManager.$DI++ % 2 + 1;
    if ($v_0.$1T_0) {
        RTE.CanvasEvents.dispatchChangedOnEditableRegion($v_0.$Q_0);
    }
    RTE.SnapshotManager.$1U.push($v_0);
    RTE.SnapshotManager.clearRegionDirty(editableRegion);
};
RTE.SnapshotManager.takeEditableRegionSnapshot = function RTE_SnapshotManager$takeEditableRegionSnapshot(editableRegion) {
    editableRegion = RTE.Canvas.$37(editableRegion);
    if (!editableRegion || !editableRegion.parentNode || (RTE.PreviewManager.get_instance()).get_hasPreview()) {
        return;
    }
    var $v_0 = RTE.Snapshot.$C3(editableRegion);
    var $v_1 = RTE.SnapshotManager.$JZ(RTE.SnapshotManager.$1U);

    if ($v_1 && $v_1.$72_0) {
        $v_0.$1o_0 = $v_1.$1o_0;
    }
    var $v_2 = $v_0.$1T_0;

    RTE.SnapshotManager.$7O(true, $v_0, true);
    RTE.SnapshotManager.clearRegionDirty(editableRegion);
    if ($v_2) {
        RTE.PasteFlyout.hide();
    }
};
RTE.SnapshotManager.$Kb = function RTE_SnapshotManager$$Kb() {
    if (!RTE.SnapshotManager.$7B) {
        RTE.CanvasEvents.registerListener('EditableRegionChanged', RTE.SnapshotManager.$4j);
        RTE.SnapshotManager.$7B = true;
    }
};
RTE.SnapshotManager.undo = function RTE_SnapshotManager$undo() {
    RTE.SnapshotManager.$Kb();
    RTE.SnapshotManager.$5m(true, -1);
    RTE.Canvas.$P();
    RTE.SnapshotManager.$Aj();
};
RTE.SnapshotManager.$Aj = function RTE_SnapshotManager$$Aj() {
    var $v_0 = RTE.SnapshotManager.$3Z;

    RTE.SnapshotManager.$3Z = RTE.SnapshotManager.$Il(RTE.SnapshotManager.$1U);
    if (RTE.SnapshotManager.$3Z !== $v_0) {
        RTE.Canvas.$P();
    }
};
RTE.SnapshotManager.redo = function RTE_SnapshotManager$redo() {
    RTE.SnapshotManager.$5m(false, -1);
    RTE.Canvas.$P();
};
RTE.SnapshotManager.$7m = function RTE_SnapshotManager$$7m($p0, $p1, $p2) {
    var $v_0 = $p1 ? $p1.$1T_0 : true;
    var $v_1 = $p0 ? $p0.$1T_0 : true;

    return $p2 ? !$v_0 : !$v_1;
};
RTE.SnapshotManager.$5m = function RTE_SnapshotManager$$5m($p0, $p1) {
    var $v_0 = $p0 ? RTE.SnapshotManager.$1U : RTE.SnapshotManager.$3T;
    var $v_1 = $p0 ? RTE.SnapshotManager.$3T : RTE.SnapshotManager.$1U;

    if (!$v_0.$13_0) {
        return;
    }
    var $v_2 = $v_0.pop();

    if (!$v_2 || !$v_2.$Q_0 || !$v_2.$Q_0.parentNode) {
        RTE.SnapshotManager.$5m($p0, $p1);
        return;
    }
    if ($p1 !== -1 && $v_2.$1o_0 !== $p1) {
        $v_0.push($v_2);
        return;
    }
    var $v_3 = RTE.Snapshot.$8X($v_2.$Q_0);

    $v_3.$1T_0 = RTE.SnapshotManager.$8m($v_2.$Q_0, $v_3, $p0 ? $v_2 : null);
    if (!RTE.SnapshotManager.$3I($v_1, $v_2.$Q_0)) {
        RTE.SnapshotManager.$7O(!$p0, $v_3, false);
    }
    if (RTE.SnapshotManager.$7m($v_2, $v_3, $p0) && $v_0.$13_0 > 0) {
        RTE.SnapshotManager.$5b($v_2.$Q_0, $v_2.$1T_0);
        RTE.SnapshotManager.$7O(!$p0, $v_2, false);
        RTE.SnapshotManager.$5m($p0, $v_2.$1o_0);
        return;
    }
    RTE.SnapshotManager.clearRegionDirty($v_2.$Q_0);
    RTE.SnapshotManager.$7O(true, $v_2, false);
    RTE.CanvasEvents.unRegisterListener('EditableRegionChanged', RTE.SnapshotManager.$4j);
    $v_2.$9V_0();
    RTE.CanvasEvents.registerListener('EditableRegionChanged', RTE.SnapshotManager.$4j);
    if ($v_2.$1o_0 !== -1) {
        RTE.SnapshotManager.$5m($p0, $v_2.$1o_0);
    }
};
RTE.SnapshotManager.$Il = function RTE_SnapshotManager$$Il($p0) {
    var $v_0 = [];

    for (var $v_1 = $p0.$13_0 - 1; $v_1 >= 0; $v_1--) {
        var $v_2 = $p0.getItemAt($v_1);

        if (Array.contains($v_0, $v_2.$Q_0)) {
            return true;
        }
        Array.add($v_0, $v_2.$Q_0);
    }
    return false;
};
RTE.SnapshotManager.$Ju = function RTE_SnapshotManager$$Ju($p0, $p1) {
    RTE.CanvasEvents.unRegisterListener('EditableRegionChanged', RTE.SnapshotManager.$4j);
    RTE.SnapshotManager.$7B = false;
    RTE.SnapshotManager.clearRedo();
};
RTE.SnapshotManager.$7O = function RTE_SnapshotManager$$7O($p0, $p1, $p2) {
    var $v_0 = $p0 ? RTE.SnapshotManager.$1U : RTE.SnapshotManager.$3T;
    var $v_1 = RTE.SnapshotManager.$3I($v_0, $p1.$Q_0);

    if (!RTE.SnapshotManager.$7m($v_1, $p1, $p0)) {
        if ($p2) {
            RTE.CanvasEvents.dispatchChangedOnEditableRegion($p1.$Q_0);
        }
        $v_0.push($p1);
        RTE.DirtyBitManager.$BD();
    }
    else {
        var $v_2 = RTE.SnapshotManager.$L2($v_0, $p1.$Q_0);

        if ($v_1 && RTE.SnapshotManager.$7m($v_2, $v_1, $p0)) {
            $v_1.$8G_0($p1);
        }
        else if ($v_1 && !$v_2 && $p1.$1o_0 === -1) {
            $v_1.$8G_0($p1);
        }
        else {
            $v_0.push($p1);
        }
    }
    RTE.SnapshotManager.$Aj();
};
RTE.SnapshotManager.get_undoEnabled = function RTE_SnapshotManager$get_undoEnabled() {
    if (RTE.SnapshotManager.$3Z) {
        return true;
    }
    RTE.SnapshotManager.$3Z = RTE.SnapshotManager.$Im();
    if (RTE.SnapshotManager.$3Z) {
        return true;
    }
    RTE.SnapshotManager.$Ka();
    return false;
};
RTE.SnapshotManager.$Im = function RTE_SnapshotManager$$Im() {
    var $v_0 = RTE.Canvas.currentEditableRegion();

    if ($v_0) {
        return !!RTE.SnapshotManager.$3I(RTE.SnapshotManager.$1U, $v_0) && RTE.SnapshotManager.$1z($v_0);
    }
    return false;
};
RTE.SnapshotManager.$Ka = function RTE_SnapshotManager$$Ka() {
    if (!RTE.SnapshotManager.$7C) {
        RTE.CanvasEvents.registerListener('EditableRegionChanged', RTE.SnapshotManager.$8H);
        RTE.SnapshotManager.$7C = true;
    }
};
RTE.SnapshotManager.$Jv = function RTE_SnapshotManager$$Jv($p0, $p1) {
    var $v_0 = RTE.SnapshotManager.get_undoEnabled();

    if ($v_0) {
        RTE.CanvasEvents.unRegisterListener('EditableRegionChanged', RTE.SnapshotManager.$8H);
        RTE.SnapshotManager.$7C = false;
        RTE.Canvas.$P();
    }
};
RTE.SnapshotManager.$3I = function RTE_SnapshotManager$$3I($p0, $p1) {
    $p1 = RTE.Canvas.$37($p1);
    for (var $v_0 = $p0.$13_0 - 1; $v_0 >= 0; $v_0--) {
        var $v_1 = $p0.getItemAt($v_0);

        if ($v_1.$Q_0 === $p1) {
            return $v_1;
        }
    }
    return null;
};
RTE.SnapshotManager.$JZ = function RTE_SnapshotManager$$JZ($p0) {
    return $p0.$13_0 > 0 ? $p0.getItemAt($p0.$13_0 - 1) : null;
};
RTE.SnapshotManager.$L2 = function RTE_SnapshotManager$$L2($p0, $p1) {
    var $v_0 = false;

    for (var $v_1 = $p0.$13_0 - 1; $v_1 >= 0; $v_1--) {
        var $v_2 = $p0.getItemAt($v_1);

        if ($v_2.$Q_0 === $p1) {
            if (!$v_0) {
                $v_0 = true;
            }
            else {
                return $v_2;
            }
        }
    }
    return null;
};
RTE.SnapshotManager.clearRedo = function RTE_SnapshotManager$clearRedo() {
    RTE.SnapshotManager.$3T = new RTE.CircularArray(200);
    RTE.Canvas.$P();
};
RTE.SnapshotManager.getMarkers = function RTE_SnapshotManager$getMarkers() {
    var $v_0 = $get('ms-rterangecursor-start');
    var $v_1 = $get('ms-rterangecursor-end');
    var $v_2 = [];

    $v_2[0] = $v_0;
    $v_2[1] = $v_1;
    return $v_2;
};
RTE.SnapshotManager.clear = function RTE_SnapshotManager$clear() {
    RTE.SnapshotManager.$1U = new RTE.CircularArray(200);
    RTE.SnapshotManager.clearRedo();
};
RTE.SnapshotManager.$1z = function RTE_SnapshotManager$$1z($p0) {
    return RTE.SnapshotManager.$8m($p0, null, null);
};
RTE.SnapshotManager.$8m = function RTE_SnapshotManager$$8m($p0, $p1, $p2) {
    $p0 = RTE.Canvas.$37($p0);
    if (!$p0) {
        return false;
    }
    if (RTE.SnapshotManager.$55 === $p0) {
        return true;
    }
    var $v_0 = $p0.getAttribute('RteDirty') === 'true';

    if (!$v_0) {
        $p2 = $p2 || RTE.SnapshotManager.$3I(RTE.SnapshotManager.$1U, $p0);
        if (!$p2) {
            $v_0 = true;
        }
        else {
            $p1 = $p1 || RTE.Snapshot.$8X($p0);
            if ($p1) {
                $v_0 = $p2.get_$DO_0() !== $p1.get_$DO_0();
            }
        }
        RTE.SnapshotManager.setRegionDirtyIf($v_0, $p0);
    }
    if ($v_0) {
        RTE.SnapshotManager.$55 = $p0;
    }
    return $v_0;
};
RTE.SnapshotManager.$5b = function RTE_SnapshotManager$$5b($p0, $p1) {
    $p0.setAttribute('RteDirty', $p1 ? 'true' : 'false');
    RTE.SnapshotManager.$55 = $p1 ? $p0 : null;
};
RTE.SnapshotManager.setCurrentRegionDirty = function RTE_SnapshotManager$setCurrentRegionDirty() {
    RTE.SnapshotManager.setRegionDirty(RTE.Canvas.currentEditableRegion());
};
RTE.SnapshotManager.setCurrentRegionDirtyIf = function RTE_SnapshotManager$setCurrentRegionDirtyIf(setDirty) {
    RTE.SnapshotManager.setRegionDirtyIf(setDirty, RTE.Canvas.currentEditableRegion());
};
RTE.SnapshotManager.setRegionDirty = function RTE_SnapshotManager$setRegionDirty(region) {
    region = RTE.Canvas.$37(region);
    if (region && region !== RTE.SnapshotManager.$55) {
        RTE.SnapshotManager.$5b(region, true);
        if (RTE.SnapshotManager.$3T.$13_0 > 0 && RTE.SnapshotManager.$3I(RTE.SnapshotManager.$1U, region) && !(RTE.PreviewManager.get_instance()).get_hasPreview()) {
            RTE.SnapshotManager.clearRedo();
        }
    }
};
RTE.SnapshotManager.setRegionDirtyIf = function RTE_SnapshotManager$setRegionDirtyIf(setDirty, region) {
    if (setDirty) {
        RTE.SnapshotManager.setRegionDirty(region);
    }
};
RTE.SnapshotManager.clearRegionDirty = function RTE_SnapshotManager$clearRegionDirty(region) {
    region = RTE.Canvas.$37(region);
    if (region) {
        RTE.SnapshotManager.$5b(region, false);
    }
};
RTE.SPRichTextEditorComponentProvider = function RTE_SPRichTextEditorComponentProvider() {
    this.$$d_$Fk_1 = Function.createDelegate(this, this.$Fk_1);
    this.$$d_$Fh_1 = Function.createDelegate(this, this.$Fh_1);
    this.$$d_$FZ_1 = Function.createDelegate(this, this.$FZ_1);
    this.$$d_$FY_1 = Function.createDelegate(this, this.$FY_1);
    this.$$d_$FX_1 = Function.createDelegate(this, this.$FX_1);
    this.$$d_$FW_1 = Function.createDelegate(this, this.$FW_1);
    this.$$d_$FV_1 = Function.createDelegate(this, this.$FV_1);
    this.$$d_$Fj_1 = Function.createDelegate(this, this.$Fj_1);
    this.$$d_$Ag_1 = Function.createDelegate(this, this.$Ag_1);
    this.$$d_$Fi_1 = Function.createDelegate(this, this.$Fi_1);
    this.$$d_$Af_1 = Function.createDelegate(this, this.$Af_1);
    this.$$d_$FL_1 = Function.createDelegate(this, this.$FL_1);
    this.$$d_$FO_1 = Function.createDelegate(this, this.$FO_1);
    this.$$d_$Fg_1 = Function.createDelegate(this, this.$Fg_1);
    this.$$d_$Ae_1 = Function.createDelegate(this, this.$Ae_1);
    this.$$d_$Ff_1 = Function.createDelegate(this, this.$Ff_1);
    this.$$d_$Fe_1 = Function.createDelegate(this, this.$Fe_1);
    this.$$d_$Fd_1 = Function.createDelegate(this, this.$Fd_1);
    this.$$d_$Fc_1 = Function.createDelegate(this, this.$Fc_1);
    this.$$d_$Fb_1 = Function.createDelegate(this, this.$Fb_1);
    this.$$d_$Fa_1 = Function.createDelegate(this, this.$Fa_1);
    this.$$d_$Ad_1 = Function.createDelegate(this, this.$Ad_1);
    this.$$d_$FU_1 = Function.createDelegate(this, this.$FU_1);
    this.$$d_$FT_1 = Function.createDelegate(this, this.$FT_1);
    this.$$d_$FS_1 = Function.createDelegate(this, this.$FS_1);
    this.$$d_$FR_1 = Function.createDelegate(this, this.$FR_1);
    this.$$d_$FQ_1 = Function.createDelegate(this, this.$FQ_1);
    this.$$d_$FP_1 = Function.createDelegate(this, this.$FP_1);
    this.$$d_$FN_1 = Function.createDelegate(this, this.$FN_1);
    this.$$d_$FM_1 = Function.createDelegate(this, this.$FM_1);
    this.$$d_$H0_1 = Function.createDelegate(this, this.$H0_1);
    this.$$d_$Gr_1 = Function.createDelegate(this, this.$Gr_1);
    this.$$d_$Gq_1 = Function.createDelegate(this, this.$Gq_1);
    this.$$d_$Gn_1 = Function.createDelegate(this, this.$Gn_1);
    this.$$d_$Gm_1 = Function.createDelegate(this, this.$Gm_1);
    this.$$d_$Go_1 = Function.createDelegate(this, this.$Go_1);
    this.$$d_$Gi_1 = Function.createDelegate(this, this.$Gi_1);
    this.$$d_$Gh_1 = Function.createDelegate(this, this.$Gh_1);
    this.$$d_$Gg_1 = Function.createDelegate(this, this.$Gg_1);
    this.$$d_$Gk_1 = Function.createDelegate(this, this.$Gk_1);
    this.$$d_$Gp_1 = Function.createDelegate(this, this.$Gp_1);
    this.$$d_$Gl_1 = Function.createDelegate(this, this.$Gl_1);
    this.$$d_$Gj_1 = Function.createDelegate(this, this.$Gj_1);
    this.$$d_$Gf_1 = Function.createDelegate(this, this.$Gf_1);
    this.$$d_$Ge_1 = Function.createDelegate(this, this.$Ge_1);
    this.$$d_$Gd_1 = Function.createDelegate(this, this.$Gd_1);
    this.$$d_$Gc_1 = Function.createDelegate(this, this.$Gc_1);
    this.$$d_$Gb_1 = Function.createDelegate(this, this.$Gb_1);
    this.$$d_$Ga_1 = Function.createDelegate(this, this.$Ga_1);
    this.$$d_$GZ_1 = Function.createDelegate(this, this.$GZ_1);
    this.$$d_$GY_1 = Function.createDelegate(this, this.$GY_1);
    this.$$d_$GX_1 = Function.createDelegate(this, this.$GX_1);
    this.$$d_$GV_1 = Function.createDelegate(this, this.$GV_1);
    this.$$d_$GW_1 = Function.createDelegate(this, this.$GW_1);
    this.$$d_$GU_1 = Function.createDelegate(this, this.$GU_1);
    this.$$d_$GT_1 = Function.createDelegate(this, this.$GT_1);
    this.$$d_$GS_1 = Function.createDelegate(this, this.$GS_1);
    this.$$d_$GP_1 = Function.createDelegate(this, this.$GP_1);
    this.$$d_$GQ_1 = Function.createDelegate(this, this.$GQ_1);
    this.$$d_$GR_1 = Function.createDelegate(this, this.$GR_1);
    this.$$d_$GO_1 = Function.createDelegate(this, this.$GO_1);
    this.$$d_$GN_1 = Function.createDelegate(this, this.$GN_1);
    this.$$d_$GM_1 = Function.createDelegate(this, this.$GM_1);
    this.$$d_$GL_1 = Function.createDelegate(this, this.$GL_1);
    this.$$d_$GK_1 = Function.createDelegate(this, this.$GK_1);
    this.$$d_$GJ_1 = Function.createDelegate(this, this.$GJ_1);
    this.$$d_$GI_1 = Function.createDelegate(this, this.$GI_1);
    this.$$d_$GH_1 = Function.createDelegate(this, this.$GH_1);
    this.$$d_$GG_1 = Function.createDelegate(this, this.$GG_1);
    this.$$d_$GF_1 = Function.createDelegate(this, this.$GF_1);
    this.$$d_$GE_1 = Function.createDelegate(this, this.$GE_1);
    this.$$d_$GD_1 = Function.createDelegate(this, this.$GD_1);
    this.$$d_$H1_1 = Function.createDelegate(this, this.$H1_1);
    this.$$d_$Gz_1 = Function.createDelegate(this, this.$Gz_1);
    this.$$d_$H5_1 = Function.createDelegate(this, this.$H5_1);
    this.$$d_$H4_1 = Function.createDelegate(this, this.$H4_1);
    this.$$d_$H3_1 = Function.createDelegate(this, this.$H3_1);
    this.$$d_$H2_1 = Function.createDelegate(this, this.$H2_1);
    this.$$d_$Gy_1 = Function.createDelegate(this, this.$Gy_1);
    this.$$d_$Gx_1 = Function.createDelegate(this, this.$Gx_1);
    this.$$d_$Gw_1 = Function.createDelegate(this, this.$Gw_1);
    this.$$d_$Gv_1 = Function.createDelegate(this, this.$Gv_1);
    this.$$d_$Gu_1 = Function.createDelegate(this, this.$Gu_1);
    this.$$d_$H8_1 = Function.createDelegate(this, this.$H8_1);
    this.$$d_$Gt_1 = Function.createDelegate(this, this.$Gt_1);
    this.$$d_$Ar_1 = Function.createDelegate(this, this.$Ar_1);
    this.$$d_$HD_1 = Function.createDelegate(this, this.$HD_1);
    this.$$d_$H6_1 = Function.createDelegate(this, this.$H6_1);
    this.$$d_$HA_1 = Function.createDelegate(this, this.$HA_1);
    this.$$d_$G9_1 = Function.createDelegate(this, this.$G9_1);
    this.$$d_$HO_1 = Function.createDelegate(this, this.$HO_1);
    this.$$d_$HN_1 = Function.createDelegate(this, this.$HN_1);
    this.$$d_$HJ_1 = Function.createDelegate(this, this.$HJ_1);
    this.$$d_$HI_1 = Function.createDelegate(this, this.$HI_1);
    this.$$d_$HC_1 = Function.createDelegate(this, this.$HC_1);
    this.$$d_$HF_1 = Function.createDelegate(this, this.$HF_1);
    this.$$d_$HM_1 = Function.createDelegate(this, this.$HM_1);
    this.$$d_$HL_1 = Function.createDelegate(this, this.$HL_1);
    this.$$d_$HK_1 = Function.createDelegate(this, this.$HK_1);
    this.$$d_$HB_1 = Function.createDelegate(this, this.$HB_1);
    this.$$d_$H9_1 = Function.createDelegate(this, this.$H9_1);
    this.$$d_$H7_1 = Function.createDelegate(this, this.$H7_1);
    this.$$d_$Gs_1 = Function.createDelegate(this, this.$Gs_1);
    this.$$d_$G2_1 = Function.createDelegate(this, this.$G2_1);
    this.$$d_$HH_1 = Function.createDelegate(this, this.$HH_1);
    this.$$d_$Fx_1 = Function.createDelegate(this, this.$Fx_1);
    this.$$d_$GB_1 = Function.createDelegate(this, this.$GB_1);
    this.$$d_$GA_1 = Function.createDelegate(this, this.$GA_1);
    this.$$d_$HG_1 = Function.createDelegate(this, this.$HG_1);
    this.$$d_$G8_1 = Function.createDelegate(this, this.$G8_1);
    this.$$d_$G6_1 = Function.createDelegate(this, this.$G6_1);
    this.$$d_$G5_1 = Function.createDelegate(this, this.$G5_1);
    this.$$d_$G4_1 = Function.createDelegate(this, this.$G4_1);
    this.$$d_$G1_1 = Function.createDelegate(this, this.$G1_1);
    this.$$d_$G0_1 = Function.createDelegate(this, this.$G0_1);
    this.$$d_$Fs_1 = Function.createDelegate(this, this.$Fs_1);
    this.$$d_$Fz_1 = Function.createDelegate(this, this.$Fz_1);
    this.$$d_$Fy_1 = Function.createDelegate(this, this.$Fy_1);
    this.$$d_$G3_1 = Function.createDelegate(this, this.$G3_1);
    this.$$d_$HE_1 = Function.createDelegate(this, this.$HE_1);
    this.$$d_$G7_1 = Function.createDelegate(this, this.$G7_1);
    this.$$d_$Fv_1 = Function.createDelegate(this, this.$Fv_1);
    this.$$d_$Fw_1 = Function.createDelegate(this, this.$Fw_1);
    this.$$d_$GC_1 = Function.createDelegate(this, this.$GC_1);
    this.$$d_$Fu_1 = Function.createDelegate(this, this.$Fu_1);
    this.$$d_$Ft_1 = Function.createDelegate(this, this.$Ft_1);
    this.$$d_$Fr_1 = Function.createDelegate(this, this.$Fr_1);
    this.$6U_1 = {};
    this.$77_1 = {};
    this.$7Y_1 = {};
    this.$9v_1 = {};
    this.$6g_1 = {};
    this.$66_1 = {};
    this.$5x_1 = {};
    RTE.SPRichTextEditorComponentProvider.initializeBase(this);
};
RTE.SPRichTextEditorComponentProvider.$Jk = function RTE_SPRichTextEditorComponentProvider$$Jk($p0, $p1) {
    var $v_0 = ($p1 + 'P').toLowerCase();
    var $v_1 = null;

    for (var $v_3 = 0; $v_3 < $p0.length; $v_3++) {
        if ($p0[$v_3].$7P_0.endsWith($v_0)) {
            $v_1 = $p0[$v_3];
            break;
        }
    }
    if (!$v_1) {
        return $p0;
    }
    var $v_2 = new Array(0);

    $v_2[0] = $v_1;
    for (var $v_4 = 0; $v_4 < $p0.length; $v_4++) {
        if ($v_1 !== $p0[$v_4]) {
            $v_2[$v_2.length] = $p0[$v_4];
        }
    }
    return $v_2;
};
RTE.SPRichTextEditorComponentProvider.$3j = function RTE_SPRichTextEditorComponentProvider$$3j($p0) {
    if ($p0.endsWith('Preview')) {
        return 1;
    }
    else if ($p0.endsWith('Revert')) {
        return 2;
    }
    return 0;
};
RTE.SPRichTextEditorComponentProvider.$Dm = function RTE_SPRichTextEditorComponentProvider$$Dm($p0) {
    var $v_0 = RTE.StyleRuleUtility.$C2($p0);
    var $v_1 = RTE.StyleRuleUtility.$Bq($p0);

    if (!$v_0) {
        return true;
    }
    var $v_2 = RTE.StyleRuleUtility.$2c($v_0);
    var $v_3 = RTE.StyleRuleUtility.$6M($v_0);
    var $v_4 = RTE.FontCommands.$Ie();

    return !!$v_4 && $v_4.tagName.toUpperCase() === $v_3.toUpperCase() && ($v_1 && (!$v_4.className || !$v_4.className.length) || RTE.RteUtility.$6P($v_4, $v_2));
};
RTE.SPRichTextEditorComponentProvider.prototype = {
    $9J_1: null,
    $Cw_1: null,
    $Cx_1: null,
    $0_1: null,
    $9_1: null,
    $58_1: null,
    init: function RTE_SPRichTextEditorComponentProvider$init($p0) {
        this.$Cw_1 = ['ClipboardGroup', 'MarkupGroup', 'CommandContextChanged', 'EditingToolsContextualGroup', 'CPEditTab', 'EditingGroup', 'EmbedGroup', 'ElementWithStyleOptions', 'ExistingDataGroup', 'FontGroup', 'GetFontColorMenuXml', 'GetFontBackgroundColorMenuXml', 'GetFontFamilyMenuXml', 'GetFontSizeMenuXml', 'GetImageStyleMenuXml', 'GetPositionMenuXml', 'GetSelectElementMenuXml', 'GetTableStyleMenuXml', 'GetTextStyleMenuXml', 'GetLanguagesMenuXml', 'GetPasteMenuXml', 'HomeTab', 'ImageAltLabel', 'ImageArrangeGroup', 'ImageArrange', 'ImageContextualGroup', 'ImageEditGroup', 'ImageHorizontalLabel', 'ImagePropertyGroup', 'ImageSizeGroup', 'ImageStyleGroup', 'ImageStyleOptions', 'ImageTab', 'ImageUrlLabel', 'ImageVerticalLabel', 'InsertDocumentOptions', 'InsertTab', 'InsertDocumentMenuClose', 'InsertDocumentMenuOpen', 'InsertImageMenuClose', 'InsertImageMenuOpen', 'InsertLinkMenuClose', 'InsertLinkMenuOpen', 'HtmlMenuOpen', 'LanguageLabel', 'HtmlLabel', 'SelectLabel', 'LinkAltLabel', 'LinkBehaviorGroup', 'LinkContextualGroup', 'LinkGroup', 'LinkUrlLabel', 'LinkPropertyGroup', 'LinkTab', 'LinksGroup', 'MediaGroup', 'NewListGroup', 'PageLayoutOptions', 'ParagraphGroup', 'PasteOption', 'PasteClose', 'PasteOpen', 'SelectElement', 'SelectTextStyle', 'TextStyleGroup', 'TableCellGroup', 'TableColumnWidthLabel', 'TableContextualGroup', 'TableDesignTab', 'TableHeightLabel', 'TableMiscGroup', 'TableLayoutTab', 'TableRowColumnGroup', 'TableRowHeightLabel', 'TableStyleGroup', 'TableStyleOptions', 'TableStyleOptionGroup', 'TableSummaryLabel', 'TableSummaryGroup', 'TableWidthHeightGroup', 'TableWidthLabel', 'TableDeleteOptions', 'TableMergeOptions', 'TableSplitOptions', 'TablesGroup', 'UndoClose', 'UndoOpen', 'WebPartsGroup', 'WikiGroup', 'SelectTextStyleOpen', 'SelectTextStyleClose', 'ElementWithStyleOptionsOpen', 'ElementWithStyleOptionsClose', 'SelectElementOpen', 'SelectElementClose', 'TableStyleOptionsOpen', 'TableStyleOptionsClose', 'ImageStyleOptionsOpen', 'ImageStyleOptionsClose', 'ImageArrangeMenuOpen', 'ImageArrangeMenuClose', 'FontFamilyStyleOpen', 'FontFamilyStyleClose', 'FontSizeStyleOpen', 'FontSizeStyleClose', 'SelectBackgroundColorOpen', 'SelectBackgroundColorClose', 'SelectFontColorOpen', 'SelectFontColorClose', 'AlignLeft', 'AlignCenter', 'AlignRight', 'AlignJustify', 'BackgroundColorCssClass', 'BackgroundColorCssClassPreview', 'BackgroundColorThemeClass', 'BackgroundColorThemeClassPreview', 'BackgroundColorCustom', 'Bold', 'BulletedList', 'ClearFormatting', 'Copy', 'ColorCssClass', 'ColorCssClassPreview', 'ColorThemeClass', 'ColorThemeClassPreview', 'ColorCustom', 'Cut', 'DecreaseIndent', 'DeleteCell', 'DeleteRow', 'DeleteColumn', 'DeleteTable', 'EditSource', 'EditImage', 'EditImageUpload', 'EditImageWeb', 'ElementWithStyle', 'ElementWithStylePreview', 'FontFamilyCssClass', 'FontFamilyCssClassPreview', 'FontFamilyThemeClass', 'FontFamilyThemeClassPreview', 'FontFamilyStyleValue', 'FontSizeCssClass', 'FontSizeCssClassPreview', 'FontSizeStyleValue', 'ImageAlt', 'ImageClearStyle', 'ImageEdit', 'ImagePosition', 'ImagePositionPreview', 'ImageHeight', 'ImageLockRatio', 'ImageSrc', 'ImageStyle', 'ImageStylePreview', 'ImageWidth', 'IncreaseIndent', 'InsertEmbedding', 'InsertLink', 'InsertLinkWeb', 'InsertList', 'InsertNewList', 'InsertImage', 'InsertImageUpload', 'InsertImageWeb', 'InsertTable', 'InsertTableMenu', 'InsertTableDialog', 'InsertRowAbove', 'InsertRowBelow', 'InsertColumnLeft', 'InsertColumnRight', 'Italics', 'LeftToRight', 'LinkDisplayIcon', 'LinkEditWeb', 'LinkInNewTab', 'LinkTitleChanged', 'LinkUrlChanged', 'LinkRemove', 'LayoutOneColumn', 'LayoutOneColumnSidebar', 'LayoutThreeColumn', 'LayoutThreeColumnHeader', 'LayoutThreeColumnHeaderFooter', 'LayoutTwoColumn', 'LayoutTwoColumnHeader', 'LayoutTwoColumnHeaderFooter', 'MakeXhtml', 'MergeCellAbove', 'MergeCellBelow', 'MergeCellLeft', 'MergeCellRight', 'MergeCells', 'NumberedList', 'Paste', 'PasteDefault', 'QueryAlignCenter', 'QueryAlignJustify', 'QueryAlignLeft', 'QueryAlignRight', 'QueryBold', 'QueryBulletedList', 'QueryElementWithStyle', 'QueryFontFamily', 'QueryFontSize', 'QueryImageAlt', 'QueryImageLockRatio', 'QueryImageHeight', 'QueryImageSrc', 'QueryImageStyle', 'QueryImageWidth', 'QueryItalics', 'QueryLanguage', 'QueryLeftToRight', 'QueryLinkBookmark', 'QueryLinkDisplayIcon', 'QueryLinkInNewTab', 'QueryLinkTitle', 'QueryLinkUrl', 'QueryNumberedList', 'QueryRightToLeft', 'QueryStrikeThrough', 'QuerySubscript', 'QuerySuperscript', 'QueryTableColumnWidth', 'QueryTableHeight', 'QueryTableRowHeight', 'QueryTableWidth', 'QueryTableFirstColumn', 'QueryTableFooterRow', 'QueryTableHeadingRow', 'QueryTableLastColumn', 'QueryTableViewGridlines', 'QueryTableStyle', 'QueryTableSummary', 'QueryTextStyle', 'QueryUnderline', 'Redo', 'RemoveStyles', 'RightToLeft', 'SelectAll', 'SelectBackgroundColor', 'SelectFontColor', 'SelectFont', 'SelectFontSize', 'SelectMenuItem', 'SelectMenuItemPreview', 'SetLanguage', 'SetTableWidth', 'SetTableHeight', 'SetTableRowHeight', 'SetTableColumnWidth', 'SplitHorizontal', 'SplitVertical', 'StrikeThrough', 'TableFirstColumn', 'TableFooterRow', 'TableHeadingRow', 'TableLastColumn', 'TableClearFormatting', 'TableStyle', 'TableStylePreview', 'TableSummary', 'TableViewGridlines', 'TextStyle', 'TextStylePreview', 'Subscript', 'Superscript', 'Underline', 'Undo', 'UploadDocumentRTE', 'InsertWebPart', 'ServerButton', 'ServerQueryButton', 'ApplyLiveGalleryStyle', 'ApplyLiveGalleryStylePreview', 'ApplyLiveGalleryStylePreviewRevert', 'QueryLiveGalleryStyle'];
        this.$Cx_1 = ['CopyPageAddress'];
    },
    getFocusedCommands: function RTE_SPRichTextEditorComponentProvider$getFocusedCommands() {
        return this.$Cw_1;
    },
    getGlobalCommands: function RTE_SPRichTextEditorComponentProvider$getGlobalCommands() {
        return this.$Cx_1;
    },
    $J1_1: function RTE_SPRichTextEditorComponentProvider$$J1_1() {
        return (this.$8R_1()).gallery;
    },
    $J2_1: function RTE_SPRichTextEditorComponentProvider$$J2_1($p0) {
        var $v_0 = null;

        try {
            if ($p0 >= 0 && $p0 < 5) {
                var $v_1 = this.$8R_1();

                if (!$v_1) {
                    $v_0 = '<img src=\'' + SP.Utilities.Utility.get_layoutsLatestVersionUrl() + '/images/loadingcirclests16.gif\'/>';
                }
                else if ($v_1.ribbonButtons.length > $p0) {
                    $v_0 = $v_1.ribbonButtons[$p0].preview;
                }
            }
        }
        catch ($$e_3) { }
        return $v_0 || RTE.RteRibbonBuilder.$Bt();
    },
    $JQ_1: function RTE_SPRichTextEditorComponentProvider$$JQ_1($p0) {
        var $v_0 = false;
        var $v_1 = this.$C4_1($p0);

        if ($v_1 && $v_1.commandValueId && $v_1.commandValueId.length > 0) {
            if ($v_1.isElementStyle) {
                $v_0 = RTE.SPRichTextEditorComponentProvider.$Dm($v_1.commandValueId);
            }
            else {
                $v_0 = this.$Dn_1($v_1.commandValueId);
            }
        }
        return $v_0;
    },
    $C4_1: function RTE_SPRichTextEditorComponentProvider$$C4_1($p0) {
        try {
            if ($p0 >= 0 && $p0 < 5) {
                var $v_0 = this.$8R_1();

                if ($v_0.ribbonButtons.length > $p0) {
                    return $v_0.ribbonButtons[$p0];
                }
            }
        }
        catch ($$e_2) { }
        return null;
    },
    $8R_1: function RTE_SPRichTextEditorComponentProvider$$8R_1() {
        var $v_0 = RTE.Canvas.getCurrentStyleSheetPrefix();
        var $v_1 = RTE.Canvas.currentEditableRegion();
        var $v_2 = this.$9v_1[$v_0 + $v_1.id];

        if (!$v_2) {
            var $v_3 = $v_0 + 'Element' + '-';
            var $v_4 = RTE.StyleRuleUtility.getStyleRules($v_3, $v_0, false);

            $v_4 = RTE.SPRichTextEditorComponentProvider.$Jk($v_4, $v_3);
            var $v_5 = RTE.StyleRuleUtility.getStyleRules($v_0 + 'Style', $v_0, false);
            var $v_6 = (RTE.RichTextEditorComponentProvider.get_latestProvider()).canHandleCommand('ElementWithStyle');
            var $v_7 = (RTE.RichTextEditorComponentProvider.get_latestProvider()).canHandleCommand('TextStyle');

            $v_2 = RTE.RteRibbonBuilder.$FH($v_7 ? $v_5 : null, $v_6 ? $v_4 : null);
            this.$9v_1[$v_0 + $v_1.id] = $v_2;
        }
        return $v_2;
    },
    $Iv_1: function RTE_SPRichTextEditorComponentProvider$$Iv_1() {
        var $v_0 = RTE.Canvas.getCurrentStyleSheetPrefix();

        if (!this.$66_1[$v_0]) {
            this.$66_1[$v_0] = RTE.FontCommands.initFontColorMenu();
        }
        return this.$66_1[$v_0];
    },
    $Iu_1: function RTE_SPRichTextEditorComponentProvider$$Iu_1() {
        var $v_0 = RTE.Canvas.getCurrentStyleSheetPrefix();

        if (!this.$5x_1[$v_0]) {
            this.$5x_1[$v_0] = RTE.FontCommands.initFontBackgroundColorMenu();
        }
        return this.$5x_1[$v_0];
    },
    $Ix_1: function RTE_SPRichTextEditorComponentProvider$$Ix_1() {
        RTE.RteUtility.classMustExist('CUI.JsonXmlElement');
        var $v_0 = RTE.Canvas.getCurrentStyleSheetPrefix();

        if (!this.$6U_1[$v_0]) {
            var $v_1 = RTE.StyleRuleUtility.getStyleRules($v_0 + RTE.RichTextEditor.$3A, $v_0, false);

            this.$6U_1[$v_0] = RTE.RteRibbonBuilder.$AZ($v_1, 'Ribbon.Image.Image.Styles.ImageStyles.Menu', 'Ribbon.Image.Image.Styles.ImageStyles.Menu.Styles', 'ImageStyle', 'ImageStyle', 'ImageStylePreview', 'ImageStylePreviewRevert', 'QueryImageStyle', $v_0 + RTE.RichTextEditor.$3A);
        }
        return this.$6U_1[$v_0];
    },
    $Iz_1: function RTE_SPRichTextEditorComponentProvider$$Iz_1() {
        RTE.RteUtility.classMustExist('CUI.JsonXmlElement');
        var $v_0 = RTE.Canvas.getCurrentStyleSheetPrefix();

        if (!this.$77_1[$v_0]) {
            var $v_1 = RTE.StyleRuleUtility.getStyleRules($v_0 + RTE.RichTextEditor.$5S, $v_0, false);
            var $v_2 = false;
            var $v_3 = false;
            var $v_4 = new CUI.JsonXmlElement('Menu', {
                Id: 'Ribbon.Image.Position.Menu'
            });
            var $v_5 = new CUI.JsonXmlElement('Controls', {
                Id: 'Ribbon.Image.Position.Menu.Floatcontrols'
            });
            var $v_6 = new CUI.JsonXmlElement('Controls', {
                Id: 'Ribbon.Image.Position.Menu.Inlinecontrols'
            });

            for (var $v_7 = 0; $v_7 < $v_1.length; $v_7++) {
                var $v_8 = $v_1[$v_7];
                var $v_9;

                if ($v_8.rule.style.styleFloat !== '') {
                    $v_2 = true;
                    $v_9 = $v_5;
                }
                else {
                    $v_3 = true;
                    $v_9 = $v_6;
                }
                var $v_A = $v_8.rule.selectorText;
                var $v_B = RTE.StyleRuleUtility.$38($v_A, $v_0 + RTE.RichTextEditor.$5S + '-');
                var $v_C = RTE.StyleRuleUtility.$2G($v_8, $v_B, null);

                if ($v_C) {
                    $v_9.appendChild('Button', {
                        Id: 'ImagePosition' + $v_7.toString(),
                        LabelText: $v_C,
                        CommandType: 'General',
                        CommandValueId: $v_A,
                        Command: 'ImagePosition',
                        CommandPreview: 'ImagePositionPreview',
                        CommandRevert: 'ImagePositionPreviewRevert'
                    });
                }
            }
            if ($v_2) {
                ($v_4.appendChild('MenuSection', {
                    Id: 'Ribbon.Image.Position.Menu.Float',
                    Title: SP.Res.menuArrangeFloatTitle
                })).appendChildNode($v_5);
            }
            if ($v_3) {
                ($v_4.appendChild('MenuSection', {
                    Id: 'Ribbon.Image.Position.Menu.Inline',
                    Title: SP.Res.menuArrangeInlineTitle
                })).appendChildNode($v_6);
            }
            this.$77_1[$v_0] = $v_4;
        }
        return this.$77_1[$v_0];
    },
    $J3_1: function RTE_SPRichTextEditorComponentProvider$$J3_1() {
        RTE.RteUtility.classMustExist('CUI.JsonXmlElement');
        var $v_0 = RTE.Canvas.getCurrentStyleSheetPrefix();

        if (!this.$7Y_1[$v_0]) {
            var $v_1 = RTE.StyleRuleUtility.getStyleRules($v_0 + 'Table' + '-', $v_0, false);

            this.$7Y_1[$v_0] = RTE.RteRibbonBuilder.$AZ($v_1, 'Ribbon.Table.Design.Style.TableStyles.Menu', 'Ribbon.Table.Design.Styles.TableStyles.Menu.TableStyles', 'TableStyle', 'TableStyle', 'TableStylePreview', 'TableStylePreviewRevert', 'QueryTableStyle', $v_0 + 'Table');
        }
        return this.$7Y_1[$v_0];
    },
    $Iy_1: function RTE_SPRichTextEditorComponentProvider$$Iy_1() {
        RTE.RteUtility.classMustExist('CUI.JsonXmlElement');
        var $v_0 = RTE.Canvas.getCurrentStyleSheetPrefix();

        if (!this.$6g_1[$v_0]) {
            var $v_1 = RTE.StyleRuleUtility.getStyleRules($v_0 + RTE.RichTextEditor.$6f, $v_0, false);
            var $v_2 = new CUI.JsonXmlElement('Menu', {
                Id: 'Ribbon.EditingTools.CPEditTab.Html.Languages.Menu'
            });
            var $v_3 = ($v_2.appendChild('MenuSection', {
                Id: 'Ribbon.EditingTools.CPEditTab.Html.Languages.Menu.Languages'
            })).appendChild('Controls', {
                Id: 'Ribbon.EditingTools.CPEditTab.Html.Languages.Menu.Languagescontrols'
            });

            for (var $v_4 = 0; $v_4 < $v_1.length; $v_4++) {
                var $v_5 = $v_1[$v_4];
                var $v_6 = $v_5.rule.selectorText;
                var $v_7 = RTE.StyleRuleUtility.$38($v_6, $v_0 + RTE.RichTextEditor.$6f + '-');
                var $v_8 = RTE.StyleRuleUtility.$2G($v_5, $v_7, null);

                if ($v_8) {
                    $v_3.appendChild('Button', {
                        Id: 'Ribbon.EditingTools.CPEditTab.Html.Languages.Menu.Languages' + $v_4.toString(),
                        LabelText: $v_8,
                        CommandType: 'OptionSelection',
                        CommandValueId: $v_7,
                        Command: 'SetLanguage',
                        QueryCommand: 'QueryLanguage'
                    });
                }
            }
            this.$6g_1[$v_0] = $v_2;
        }
        return this.$6g_1[$v_0];
    },
    initPasteMenu: function RTE_SPRichTextEditorComponentProvider$initPasteMenu() {
        RTE.RteUtility.classMustExist('CUI.JsonXmlElement');
        if (!this.$9J_1) {
            var $v_0 = new CUI.JsonXmlElement('Menu', {
                Id: 'Ribbon.EditingTools.CPEditTab.Clipboard.Paste.Menu'
            });
            var $v_1 = ($v_0.appendChild('MenuSection', {
                Id: 'Ribbon.EditingTools.CPEditTab.Clipboard.Paste.Menu.PasteModes',
                DisplayMode: 'Menu16'
            })).appendChild('Controls', {
                Id: 'Ribbon.EditingTools.CPEditTab.Clipboard.Paste.Menu.PasteModescontrols'
            });
            var $v_2 = RTE.RtePasteManager.get_pasteModes();

            for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
                var $v_4 = $v_2[$v_3];
                var $v_5 = {
                    Id: 'Ribbon.EditingTools.CPEditTab.Html.Languages.Menu.Languages' + $v_3,
                    CommandValueId: $v_4.id,
                    Command: 'Paste'
                };

                $v_4.appendRibbonButtonProperties($v_5);
                $v_1.appendChild('Button', $v_5);
            }
            this.$9J_1 = $v_0;
        }
        return this.$9J_1;
    },
    canHandleCommand: function RTE_SPRichTextEditorComponentProvider$canHandleCommand($p0) {
        var $v_0 = RTE.Canvas.currentEditableRegion();

        if (!$v_0) {
            return false;
        }
        if (RTE.Canvas.getCachedRestriction($v_0, 'DisableRibbonCommands', false)) {
            return false;
        }
        this.initializeCanHandleHandlerDictionary();
        var $v_1 = this.$9_1[$p0];

        if (!RTE.SU.$7($v_1)) {
            var $v_2 = $v_1;

            return $v_2();
        }
        return this.$K3_1($p0);
    },
    $K3_1: function RTE_SPRichTextEditorComponentProvider$$K3_1($p0) {
        this.initializeAllCommandsDictionary();
        var $v_0 = this.$58_1[$p0];

        return !RTE.SU.$7($v_0);
    },
    $79_1: 0,
    $78_1: null,
    $Ac_1: function RTE_SPRichTextEditorComponentProvider$$Ac_1() {
        if (this.$79_1) {
            this.$78_1 = null;
            window.clearTimeout(this.$79_1);
        }
    },
    handleCommand: function RTE_SPRichTextEditorComponentProvider$handleCommand($p0, $p1, $p2) {
        RTE.RteUtility.assertNotNull('commandId', $p0);
        var $v_0 = RTE.Canvas.currentEditableRegion();

        if (!$v_0) {
            return false;
        }
        if (RTE.Canvas.getCachedRestriction($v_0, 'DisableRibbonCommands', false)) {
            return false;
        }
        this.initializeCommandHandlerDictionary();
        var $v_1 = this.$0_1[$p0];

        if (!RTE.SU.$7($v_1)) {
            var $v_2 = $v_1;

            this.$Ac_1();
            if ((RTE.PreviewManager.get_instance()).get_hasPreview() && RTE.SPRichTextEditorComponentProvider.$3j($p0) === 1) {
                var $v_3 = new RTE.RteRibbonCommand();

                $v_3.$C8_0 = $v_2;
                $v_3.$Au_0 = $p0;
                $v_3.$Dl_0 = $p1;
                $v_3.$E7_0 = $p2;
                this.$78_1 = $v_3;
                var $$t_8 = this;

                this.$79_1 = window.setTimeout(function() {
                    $$t_8.$79_1 = 0;
                    var $v_4 = $$t_8.$78_1;

                    $$t_8.$78_1 = null;
                    if ($v_4) {
                        $v_4.$C8_0($v_4.$Au_0, $v_4.$Dl_0, $v_4.$E7_0);
                    }
                }, 100);
                return true;
            }
            return $v_2($p0, $p1, $p2);
        }
        return true;
    },
    isFocusable: function RTE_SPRichTextEditorComponentProvider$isFocusable() {
        return true;
    },
    receiveFocus: function RTE_SPRichTextEditorComponentProvider$receiveFocus() {
        return true;
    },
    yieldFocus: function RTE_SPRichTextEditorComponentProvider$yieldFocus() {
        return true;
    },
    $Fr_1: function RTE_SPRichTextEditorComponentProvider$$Fr_1($p0, $p1, $p2) {
        switch ($p0) {
        case 'AlignCenter':
            RTE.RichTextEditor.align(2);
            break;
        case 'AlignJustify':
            RTE.RichTextEditor.align(3);
            break;
        case 'AlignLeft':
            RTE.RichTextEditor.align(0);
            break;
        case 'AlignRight':
            RTE.RichTextEditor.align(1);
            break;
        }
        return true;
    },
    $Ft_1: function RTE_SPRichTextEditorComponentProvider$$Ft_1($p0, $p1, $p2) {
        return this.$Ap_1($p0, $p1, $p2, 'BackgroundColorCustom', RTE.RichTextEditor.setBackgroundColorCustom, RTE.RichTextEditor.setBackgroundColorCssClass);
    },
    $Fw_1: function RTE_SPRichTextEditorComponentProvider$$Fw_1($p0, $p1, $p2) {
        return this.$Ap_1($p0, $p1, $p2, 'ColorCustom', RTE.RichTextEditor.setColorCustom, RTE.RichTextEditor.setColorCssClass);
    },
    $Ap_1: function RTE_SPRichTextEditorComponentProvider$$Ap_1($p0, $p1, $p2, $p3, $p4, $p5) {
        if ($p0 === $p3) {
            $p4();
        }
        else {
            var $v_0 = $p1['Style'];

            if ($v_0 === (RTE.PreviewManager.get_instance()).$1H_0) {
                return true;
            }
            (RTE.PreviewManager.get_instance()).restoreBeginState();
            (RTE.PreviewManager.get_instance()).$1H_0 = $v_0;
            $p5($v_0);
            (RTE.PreviewManager.get_instance()).commitCommandOrAfterPreview($p0);
        }
        return true;
    },
    $Fu_1: function RTE_SPRichTextEditorComponentProvider$$Fu_1($p0, $p1, $p2) {
        switch ($p0) {
        case 'Bold':
            RTE.RichTextEditor.bold();
            break;
        case 'ClearFormatting':
            RTE.RichTextEditor.clearFormatting();
            break;
        case 'Italics':
            RTE.RichTextEditor.italic();
            break;
        case 'Subscript':
            RTE.RichTextEditor.subscript();
            break;
        case 'Superscript':
            RTE.RichTextEditor.superscript();
            break;
        case 'StrikeThrough':
            RTE.RichTextEditor.strikeThrough();
            break;
        case 'Underline':
            RTE.RichTextEditor.underline();
            break;
        }
        return true;
    },
    $Fv_1: function RTE_SPRichTextEditorComponentProvider$$Fv_1($p0, $p1, $p2) {
        switch ($p0) {
        case 'Copy':
            RTE.RichTextEditor.copy();
            break;
        case 'Cut':
            RTE.RichTextEditor.cut();
            break;
        case 'Paste':
            var $v_0 = $p1['CommandValueId'];

            RTE.RichTextEditor.paste($v_0);
            break;
        case 'PasteDefault':
            RTE.RichTextEditor.paste(null);
            break;
        }
        return true;
    },
    $Fx_1: function RTE_SPRichTextEditorComponentProvider$$Fx_1($p0, $p1, $p2) {
        switch ($p0) {
        case 'LeftToRight':
            RTE.RichTextEditor.setDirection(true);
            break;
        case 'RightToLeft':
            RTE.RichTextEditor.setDirection(false);
            break;
        }
        return true;
    },
    $Fy_1: function RTE_SPRichTextEditorComponentProvider$$Fy_1($p0, $p1, $p2) {
        switch ($p0) {
        case 'EditImageUpload':
            RTE.RichTextEditor.insertHtmlFromDialog('Upload.aspx', 'UploadImage', false);
            break;
        case 'EditImageWeb':
            RTE.RichTextEditor.insertImage(true);
            break;
        }
        return true;
    },
    $4D_1: 0,
    $8h_1: false,
    $7I_1: null,
    $Fs_1: function RTE_SPRichTextEditorComponentProvider$$Fs_1($p0, $p1, $p2) {
        var $v_0 = $p1['SourceControlId'];
        var $v_1 = RTE.RteRibbonBuilder.parseRibbonStyleButtonIndex($v_0);
        var $v_2 = this.$C4_1($v_1);

        if ($v_2 && $v_2.commandValueId && $v_2.commandValueId.length > 0) {
            var $v_3 = RTE.SPRichTextEditorComponentProvider.$3j($p0);

            if (!(RTE.PreviewManager.get_instance()).get_hasPreview() && $v_3 === 1 && this.$8h_1) {
                return true;
            }
            if (this.$4D_1 > 0) {
                window.clearTimeout(this.$4D_1);
                this.$4D_1 = 0;
                this.$7I_1 = null;
            }
            if (!(RTE.PreviewManager.get_instance()).get_hasPreview() && $v_3 === 1) {
                (RTE.PreviewManager.get_instance()).beginPreview();
            }
            if ($v_2.isElementStyle) {
                this.$BK_1($p0, $v_2.commandValueId);
            }
            else {
                this.$EV_1($p0, $v_2.commandValueId);
            }
            if (!$v_3) {
                RTE.Cursor.update();
                this.$8h_1 = true;
            }
        }
        return true;
    },
    $Fz_1: function RTE_SPRichTextEditorComponentProvider$$Fz_1($p0, $p1, $p2) {
        var $v_0 = $p1['CommandValueId'];

        return this.$BK_1($p0, $v_0);
    },
    $BK_1: function RTE_SPRichTextEditorComponentProvider$$BK_1($p0, $p1) {
        var $v_0 = RTE.StyleRuleUtility.$C2($p1);
        var $v_1 = RTE.StyleRuleUtility.$Bq($p1);

        if (!$v_0) {
            return true;
        }
        var $v_2 = RTE.StyleRuleUtility.$6M($v_0);
        var $v_3 = !$v_1 ? RTE.StyleRuleUtility.$2c($v_0) : null;
        var $v_4 = $v_2 + $v_3;

        if ($v_4 !== (RTE.PreviewManager.get_instance()).$1H_0) {
            (RTE.PreviewManager.get_instance()).restoreBeginState();
            (RTE.PreviewManager.get_instance()).$1H_0 = $v_4;
            RTE.FontCommands.$B3($v_2, $v_3);
        }
        if ((RTE.PreviewManager.get_instance()).commitCommandOrAfterPreview($p0)) {
            RTE.Canvas.$P();
        }
        return true;
    },
    $G0_1: function RTE_SPRichTextEditorComponentProvider$$G0_1($p0, $p1, $p2) {
        return this.$Aq_1($p0, $p1, $p2, RTE.RichTextEditor.setFontFamilyCssClass, RTE.RichTextEditor.setFontFamilyStyleValue);
    },
    $G1_1: function RTE_SPRichTextEditorComponentProvider$$G1_1($p0, $p1, $p2) {
        return this.$Aq_1($p0, $p1, $p2, RTE.RichTextEditor.setFontSizeCssClass, RTE.RichTextEditor.setFontSizeStyleValue);
    },
    $Aq_1: function RTE_SPRichTextEditorComponentProvider$$Aq_1($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = $p1.CommandValueId;

        if (!RTE.SU.$2($v_0)) {
            if ($v_0 === (RTE.PreviewManager.get_instance()).$1H_0) {
                return true;
            }
            (RTE.PreviewManager.get_instance()).restoreBeginState();
            (RTE.PreviewManager.get_instance()).$1H_0 = $v_0;
            $p3($v_0);
        }
        else {
            var $v_1 = $p1.Value;

            if (!RTE.SU.$2($v_1)) {
                $p4($v_1);
            }
        }
        if ((RTE.PreviewManager.get_instance()).commitCommandOrAfterPreview($p0)) {
            RTE.Canvas.$P();
        }
        return true;
    },
    $G2_1: function RTE_SPRichTextEditorComponentProvider$$G2_1($p0, $p1, $p2) {
        switch ($p0) {
        case 'Redo':
            RTE.RichTextEditor.redo();
            break;
        case 'Undo':
            RTE.RichTextEditor.undo();
            break;
        }
        return true;
    },
    $G3_1: function RTE_SPRichTextEditorComponentProvider$$G3_1($p0, $p1, $p2) {
        switch ($p0) {
        case 'EditSource':
            RTE.RichTextEditor.editSource();
            break;
        case 'MakeXhtml':
            RTE.RichTextEditor.makeXhtml();
            break;
        }
        return true;
    },
    $G4_1: function RTE_SPRichTextEditorComponentProvider$$G4_1($p0, $p1, $p2) {
        switch ($p0) {
        case 'ImageAlt':
            var $v_0 = $p1['Value'];

            RTE.RichTextEditor.setImageAlt($v_0);
            break;
        case 'ImageClearStyle':
            RTE.RichTextEditor.clearImageStyle();
            break;
        case 'ImageHeight':
            RTE.RichTextEditor.setImageHeight(RTE.RteUtility.$8b($p1), RTE.RteUtility.$8a($p1));
            break;
        case 'ImageLockRatio':
            var $v_1 = $p1['On'];

            RTE.RichTextEditor.setImageLockRatio($v_1);
            break;
        case 'ImageSrc':
            var $v_2 = $p1['Value'];

            RTE.RichTextEditor.setImageSrc($v_2);
            break;
        case 'ImageWidth':
            RTE.RichTextEditor.setImageWidth(RTE.RteUtility.$8b($p1), RTE.RteUtility.$8a($p1));
            break;
        }
        return true;
    },
    $G5_1: function RTE_SPRichTextEditorComponentProvider$$G5_1($p0, $p1, $p2) {
        return this.$8B_1($p0, $p1, $p2, RTE.RichTextEditor.$5S, RTE.RichTextEditor.setImagePosition, true);
    },
    $G6_1: function RTE_SPRichTextEditorComponentProvider$$G6_1($p0, $p1, $p2) {
        return this.$8B_1($p0, $p1, $p2, RTE.RichTextEditor.$3A, RTE.RichTextEditor.setImageStyle, true);
    },
    $HK_1: function RTE_SPRichTextEditorComponentProvider$$HK_1($p0, $p1, $p2) {
        return this.$8B_1($p0, $p1, $p2, 'Table', RTE.RichTextEditor.setTableStyle, true);
    },
    $HM_1: function RTE_SPRichTextEditorComponentProvider$$HM_1($p0, $p1, $p2) {
        var $v_0 = $p1['CommandValueId'];

        return this.$EV_1($p0, $v_0);
    },
    $EV_1: function RTE_SPRichTextEditorComponentProvider$$EV_1($p0, $p1) {
        return this.$At_1($p0, $p1, 'Style', RTE.FontCommands.$LF, true);
    },
    $8B_1: function RTE_SPRichTextEditorComponentProvider$$8B_1($p0, $p1, $p2, $p3, $p4, $p5) {
        var $v_0 = $p1['CommandValueId'];

        return this.$At_1($p0, $v_0, $p3, $p4, $p5);
    },
    $At_1: function RTE_SPRichTextEditorComponentProvider$$At_1($p0, $p1, $p2, $p3, $p4) {
        RTE.RteUtility.classMustExist('CUI.Controls.GalleryButtonCommandProperties');
        if (!$p1) {
            return true;
        }
        if ((RTE.PreviewManager.get_instance()).$1H_0 === $p1) {
            return true;
        }
        (RTE.PreviewManager.get_instance()).$1H_0 = $p1;
        if ($p4) {
            (RTE.PreviewManager.get_instance()).restoreBeginState();
        }
        var $v_0 = RTE.StyleRuleUtility.$38($p1, $p2 + '-');

        $p3($v_0, true);
        (RTE.PreviewManager.get_instance()).commitCommandOrAfterPreview($p0);
        return true;
    },
    $G7_1: function RTE_SPRichTextEditorComponentProvider$$G7_1($p0, $p1, $p2) {
        switch ($p0) {
        case 'DecreaseIndent':
            RTE.RichTextEditor.decreaseIndent();
            break;
        case 'IncreaseIndent':
            RTE.RichTextEditor.increaseIndent();
            break;
        }
        return true;
    },
    $G8_1: function RTE_SPRichTextEditorComponentProvider$$G8_1($p0, $p1, $p2) {
        switch ($p0) {
        case 'InsertImageUpload':
        case 'InsertImage':
            RTE.RichTextEditor.insertHtmlFromDialog('Upload.aspx', 'UploadImage', false);
            break;
        case 'InsertImageWeb':
            RTE.RichTextEditor.insertImage(false);
            break;
        case 'InsertLinkWeb':
        case 'InsertLink':
            RTE.RichTextEditor.insertLink();
            break;
        case 'InsertList':
            RTE.WebPartCommands.insertWebPart('insertExistingList');
            break;
        case 'InsertNewList':
            RTE.RichTextEditor.insertNewList();
            break;
        }
        return true;
    },
    $GA_1: function RTE_SPRichTextEditorComponentProvider$$GA_1($p0, $p1, $p2) {
        switch ($p0) {
        case 'LayoutOneColumn':
            RTE.RichTextEditor.relayout(1, false, false, false);
            break;
        case 'LayoutOneColumnSidebar':
            RTE.RichTextEditor.relayout(2, false, false, true);
            break;
        case 'LayoutTwoColumn':
            RTE.RichTextEditor.relayout(2, false, false, false);
            break;
        case 'LayoutTwoColumnHeader':
            RTE.RichTextEditor.relayout(2, true, false, false);
            break;
        case 'LayoutTwoColumnHeaderFooter':
            RTE.RichTextEditor.relayout(2, true, true, false);
            break;
        case 'LayoutThreeColumn':
            RTE.RichTextEditor.relayout(3, false, false, false);
            break;
        case 'LayoutThreeColumnHeader':
            RTE.RichTextEditor.relayout(3, true, false, false);
            break;
        case 'LayoutThreeColumnHeaderFooter':
            RTE.RichTextEditor.relayout(3, true, true, false);
            break;
        }
        return true;
    },
    $GB_1: function RTE_SPRichTextEditorComponentProvider$$GB_1($p0, $p1, $p2) {
        RTE.RteUtility.classMustExist('CUI.Controls.ToggleButtonCommandProperties');
        RTE.RteUtility.classMustExist('CUI.Controls.TextBoxCommandProperties');
        switch ($p0) {
        case 'LinkDisplayIcon':
            RTE.RichTextEditor.setLinkDisplayIcon($p1[CUI.Controls.ToggleButtonCommandProperties.On]);
            break;
        case 'LinkEditWeb':
            RTE.RichTextEditor.insertLink();
            break;
        case 'LinkInNewTab':
            RTE.RichTextEditor.setLinkOpenInNewWindow($p1[CUI.Controls.ToggleButtonCommandProperties.On]);
            break;
        case 'LinkRemove':
            RTE.RichTextEditor.removeLink();
            break;
        case 'LinkTitleChanged':
            RTE.RichTextEditor.setLinkTitle($p1[CUI.Controls.TextBoxCommandProperties.Value]);
            break;
        case 'LinkUrlChanged':
            RTE.RichTextEditor.setLinkUrl($p1[CUI.Controls.TextBoxCommandProperties.Value]);
            break;
        }
        return true;
    },
    $GC_1: function RTE_SPRichTextEditorComponentProvider$$GC_1($p0, $p1, $p2) {
        switch ($p0) {
        case 'BulletedList':
            RTE.RichTextEditor.bulletedList();
            break;
        case 'NumberedList':
            RTE.RichTextEditor.numberedList();
            break;
        }
        return true;
    },
    $Gs_1: function RTE_SPRichTextEditorComponentProvider$$Gs_1($p0, $p1, $p2) {
        RTE.RichTextEditor.removeStyles();
        RTE.Canvas.$P();
        return true;
    },
    $H7_1: function RTE_SPRichTextEditorComponentProvider$$H7_1($p0, $p1, $p2) {
        RTE.RichTextEditor.selectAll();
        RTE.Canvas.$P();
        return true;
    },
    $H9_1: function RTE_SPRichTextEditorComponentProvider$$H9_1($p0, $p1, $p2) {
        var $v_0 = parseInt($p1['CommandValueId']);

        RTE.SelectionManager.selectParentElement($v_0, RTE.SPRichTextEditorComponentProvider.$3j($p0));
        return true;
    },
    $HB_1: function RTE_SPRichTextEditorComponentProvider$$HB_1($p0, $p1, $p2) {
        var $v_0 = $p1['CommandValueId'];

        if (!RTE.SU.$2($v_0)) {
            RTE.RichTextEditor.setLanguage($v_0);
        }
        else {
            var $v_1 = $p1['Value'];

            if (!RTE.SU.$2($v_1)) {
                RTE.RichTextEditor.setLanguage($v_1);
            }
        }
        return true;
    },
    $GT_1: function RTE_SPRichTextEditorComponentProvider$$GT_1($p0, $p1, $p2) {
        $p1['IsFreeForm'] = true;
        $p1['Value'] = RTE.FontCommands.$IJ();
        return true;
    },
    $HA_1: function RTE_SPRichTextEditorComponentProvider$$HA_1($p0, $p1, $p2) {
        RTE.RteUtility.classMustExist('CUI.RibbonComand');
        switch ($p0) {
        case 'ServerButton':
            if ($p1) {
                CUI.RibbonCommand.serverButton($p1['SourceControlId'], $p1['MenuItemId']);
            }
            break;
        case 'ServerQueryButton':
            if ($p1) {
                return CUI.RibbonCommand.serverQueryButton($p1['SourceControlId']);
            }
            break;
        }
        return true;
    },
    $HC_1: function RTE_SPRichTextEditorComponentProvider$$HC_1($p0, $p1, $p2) {
        switch ($p0) {
        case 'SplitHorizontal':
            RTE.RichTextEditor.splitHorizontal();
            break;
        case 'SplitVertical':
            RTE.RichTextEditor.splitVertical();
            break;
        }
        return true;
    },
    $HE_1: function RTE_SPRichTextEditorComponentProvider$$HE_1($p0, $p1, $p2) {
        switch ($p0) {
        case 'DeleteCell':
            RTE.RichTextEditor.deleteCell();
            break;
        case 'DeleteColumn':
            RTE.RichTextEditor.deleteColumn();
            break;
        case 'DeleteRow':
            RTE.RichTextEditor.deleteRow();
            break;
        case 'DeleteTable':
            RTE.RichTextEditor.deleteTable();
            break;
        }
        return true;
    },
    $HF_1: function RTE_SPRichTextEditorComponentProvider$$HF_1($p0, $p1, $p2) {
        var $v_0 = RTE.RteUtility.getStringValueFromSpinnerControlProperties($p1);

        switch ($p0) {
        case 'SetTableColumnWidth':
            RTE.RichTextEditor.setTableColumnWidth($v_0);
            break;
        case 'SetTableHeight':
            RTE.RichTextEditor.setTableHeight($v_0);
            break;
        case 'SetTableWidth':
            RTE.RichTextEditor.setTableWidth($v_0);
            break;
        case 'SetTableRowHeight':
            RTE.RichTextEditor.setTableRowHeight($v_0);
            break;
        }
        RTE.Canvas.$P();
        return true;
    },
    $HG_1: function RTE_SPRichTextEditorComponentProvider$$HG_1($p0, $p1, $p2) {
        switch ($p0) {
        case 'InsertTable':
            var $v_0 = $p1['Columns'];
            var $v_1 = $p1['Rows'];
            var $v_2 = new RTE.InsertTableOptions();

            $v_2.columns = $v_0;
            $v_2.rows = $v_1;
            $v_2.commandType = RTE.SPRichTextEditorComponentProvider.$3j($p0);
            RTE.RichTextEditor.insertTable($v_2);
            break;
        case 'InsertTableDialog':
            RTE.RichTextEditor.showInsertTableDialog();
            break;
        case 'InsertColumnLeft':
            RTE.RichTextEditor.insertColumn(true);
            break;
        case 'InsertColumnRight':
            RTE.RichTextEditor.insertColumn(false);
            break;
        case 'InsertRowAbove':
            RTE.RichTextEditor.insertRow(true);
            break;
        case 'InsertRowBelow':
            RTE.RichTextEditor.insertRow(false);
            break;
        }
        return true;
    },
    $HH_1: function RTE_SPRichTextEditorComponentProvider$$HH_1($p0, $p1, $p2) {
        switch ($p0) {
        case 'MergeCellAbove':
            RTE.RichTextEditor.mergeAbove();
            break;
        case 'MergeCellBelow':
            RTE.RichTextEditor.mergeBellow();
            break;
        case 'MergeCells':
            RTE.RichTextEditor.mergeCells();
            break;
        case 'MergeCellLeft':
            RTE.RichTextEditor.mergeLeft();
            break;
        case 'MergeCellRight':
            RTE.RichTextEditor.mergeRight();
            break;
        }
        return true;
    },
    $HI_1: function RTE_SPRichTextEditorComponentProvider$$HI_1($p0, $p1, $p2) {
        RTE.RteUtility.classMustExist('CUI.Controls.ToggleButtonCommandProperties');
        switch ($p0) {
        case 'TableClearFormatting':
            RTE.RichTextEditor.clearTableStyle();
            break;
        case 'TableViewGridlines':
            RTE.RichTextEditor.setTableGridLines($p1[CUI.Controls.ToggleButtonCommandProperties.On]);
            break;
        }
        return true;
    },
    $HJ_1: function RTE_SPRichTextEditorComponentProvider$$HJ_1($p0, $p1, $p2) {
        RTE.RteUtility.classMustExist('CUI.Controls.ToggleButtonCommandProperties');
        switch ($p0) {
        case 'TableFirstColumn':
            RTE.RichTextEditor.setTableFirstColumn($p1[CUI.Controls.ToggleButtonCommandProperties.On]);
            break;
        case 'TableFooterRow':
            RTE.RichTextEditor.setTableFooterRow($p1[CUI.Controls.ToggleButtonCommandProperties.On]);
            break;
        case 'TableHeadingRow':
            RTE.RichTextEditor.setTableHeaderRow($p1[CUI.Controls.ToggleButtonCommandProperties.On]);
            break;
        case 'TableLastColumn':
            RTE.RichTextEditor.setTableLastColumn($p1[CUI.Controls.ToggleButtonCommandProperties.On]);
            break;
        }
        return true;
    },
    $HL_1: function RTE_SPRichTextEditorComponentProvider$$HL_1($p0, $p1, $p2) {
        var $v_0 = $p1['Value'];

        RTE.RichTextEditor.setTableSummary($v_0);
        return true;
    },
    $HN_1: function RTE_SPRichTextEditorComponentProvider$$HN_1($p0, $p1, $p2) {
        RTE.RichTextEditor.insertHtmlFromDialog('Upload.aspx', 'UploadDocument', false);
        return true;
    },
    $HO_1: function RTE_SPRichTextEditorComponentProvider$$HO_1($p0, $p1, $p2) {
        switch ($p0) {
        case 'InsertWebPart':
            RTE.WebPartCommands.insertWebPart($p0);
            break;
        }
        return true;
    },
    $G9_1: function RTE_SPRichTextEditorComponentProvider$$G9_1($p0, $p1, $p2) {
        RTE.EmbeddingCommands.launchEmbedDialog(null);
        return true;
    },
    $Gu_1: function RTE_SPRichTextEditorComponentProvider$$Gu_1($p0, $p1, $p2) {
        var $v_0 = $p1;

        $v_0.PopulationJSON = this.$Iu_1();
        return true;
    },
    $Gv_1: function RTE_SPRichTextEditorComponentProvider$$Gv_1($p0, $p1, $p2) {
        var $v_0 = $p1;

        $v_0.PopulationJSON = this.$Iv_1();
        return true;
    },
    $Gx_1: function RTE_SPRichTextEditorComponentProvider$$Gx_1($p0, $p1, $p2) {
        var $v_0 = $p1;

        $v_0.PopulationJSON = RTE.FontCommands.initFontSizeDropDownMenu();
        return true;
    },
    $Gw_1: function RTE_SPRichTextEditorComponentProvider$$Gw_1($p0, $p1, $p2) {
        var $v_0 = $p1;

        $v_0.PopulationJSON = RTE.FontCommands.initFontFamilyDropDownMenu();
        return true;
    },
    $H5_1: function RTE_SPRichTextEditorComponentProvider$$H5_1($p0, $p1, $p2) {
        var $v_0 = $p1;

        $v_0.PopulationXML = this.$J1_1();
        return true;
    },
    $H0_1: function RTE_SPRichTextEditorComponentProvider$$H0_1($p0, $p1, $p2) {
        var $v_0 = $p1;
        var $v_1 = $p1['SourceControlId'];
        var $v_2 = RTE.RteRibbonBuilder.parseRibbonStyleButtonIndex($v_1);

        $v_0.InnerHTML = this.$J2_1($v_2);
        $p1['On'] = this.$JQ_1($v_2);
        return true;
    },
    $Gy_1: function RTE_SPRichTextEditorComponentProvider$$Gy_1($p0, $p1, $p2) {
        var $v_0 = $p1;

        $v_0.PopulationJSON = this.$Ix_1();
        return true;
    },
    $H2_1: function RTE_SPRichTextEditorComponentProvider$$H2_1($p0, $p1, $p2) {
        var $v_0 = $p1;

        $v_0.PopulationJSON = this.$Iz_1();
        return true;
    },
    $H3_1: function RTE_SPRichTextEditorComponentProvider$$H3_1($p0, $p1, $p2) {
        var $v_0 = $p1;

        $v_0.PopulationJSON = RTE.SelectionManager.$J0();
        return true;
    },
    $H4_1: function RTE_SPRichTextEditorComponentProvider$$H4_1($p0, $p1, $p2) {
        var $v_0 = $p1;

        $v_0.PopulationJSON = this.$J3_1();
        return true;
    },
    $Gz_1: function RTE_SPRichTextEditorComponentProvider$$Gz_1($p0, $p1, $p2) {
        var $v_0 = $p1;

        $v_0.PopulationJSON = this.$Iy_1();
        return true;
    },
    $H1_1: function RTE_SPRichTextEditorComponentProvider$$H1_1($p0, $p1, $p2) {
        var $v_0 = $p1;

        $v_0.PopulationJSON = this.initPasteMenu();
        return true;
    },
    $H6_1: function RTE_SPRichTextEditorComponentProvider$$H6_1($p0, $p1, $p2) {
        RTE.RteUtility.classMustExist('CUI.CommandContextSwitchCommandProperties');
        var $v_0 = $p1;

        if (!$v_0.ChangedByUser) {
            return true;
        }
        switch ($v_0.NewContextCommand) {
        case 'TableDesignTab':
        case 'TableLayoutTab':
            RTE.Cursor.select();
            break;
        default:
            break;
        }
        return true;
    },
    $HD_1: function RTE_SPRichTextEditorComponentProvider$$HD_1($p0, $p1, $p2) {
        (RTE.PreviewManager.get_instance()).beginPreview();
        return true;
    },
    $Ar_1: function RTE_SPRichTextEditorComponentProvider$$Ar_1($p0, $p1, $p2) {
        this.$Ac_1();
        var $v_0 = (RTE.PreviewManager.get_instance()).get_hasPreview();

        (RTE.PreviewManager.get_instance()).endPreview();
        if ($v_0) {
            RTE.Canvas.$P();
        }
        return true;
    },
    $Gt_1: function RTE_SPRichTextEditorComponentProvider$$Gt_1($p0, $p1, $p2) {
        this.$8h_1 = false;
        if (!this.$4D_1) {
            var $$t_3 = this;

            this.$4D_1 = window.setTimeout(function() {
                $$t_3.$4D_1 = 0;
                if ($$t_3.$7I_1 && (RTE.PreviewManager.get_instance()).$1H_0 === $$t_3.$7I_1) {
                    $$t_3.$Ar_1($p0, $p1, $p2);
                }
            }, 200);
        }
        this.$7I_1 = (RTE.PreviewManager.get_instance()).get_hasPreview() ? (RTE.PreviewManager.get_instance()).$1H_0 : null;
        return true;
    },
    $H8_1: function RTE_SPRichTextEditorComponentProvider$$H8_1($p0, $p1, $p2) {
        RTE.SelectionManager.$7F();
        return true;
    },
    $GD_1: function RTE_SPRichTextEditorComponentProvider$$GD_1($p0, $p1, $p2) {
        $p1['On'] = (RTE.ParagraphCommands.queryAlign(2)).get_commandOn();
        return true;
    },
    $GE_1: function RTE_SPRichTextEditorComponentProvider$$GE_1($p0, $p1, $p2) {
        $p1['On'] = (RTE.ParagraphCommands.queryAlign(3)).get_commandOn();
        return true;
    },
    $GF_1: function RTE_SPRichTextEditorComponentProvider$$GF_1($p0, $p1, $p2) {
        $p1['On'] = (RTE.ParagraphCommands.queryAlign(0)).get_commandOn();
        return true;
    },
    $GG_1: function RTE_SPRichTextEditorComponentProvider$$GG_1($p0, $p1, $p2) {
        $p1['On'] = (RTE.ParagraphCommands.queryAlign(1)).get_commandOn();
        return true;
    },
    $GH_1: function RTE_SPRichTextEditorComponentProvider$$GH_1($p0, $p1, $p2) {
        $p1['On'] = (RTE.RichTextEditor.queryBold()).get_commandOn();
        return true;
    },
    $GI_1: function RTE_SPRichTextEditorComponentProvider$$GI_1($p0, $p1, $p2) {
        $p1['On'] = (RTE.ParagraphCommands.queryBulletedList()).get_commandOn();
        return true;
    },
    $GJ_1: function RTE_SPRichTextEditorComponentProvider$$GJ_1($p0, $p1, $p2) {
        var $v_0 = $p1['CommandValueId'];
        var $v_1 = RTE.SPRichTextEditorComponentProvider.$Dm($v_0);

        $p1['On'] = $v_1;
        return true;
    },
    $GK_1: function RTE_SPRichTextEditorComponentProvider$$GK_1($p0, $p1, $p2) {
        $p1['IsFreeForm'] = true;
        $p1['Value'] = RTE.FontCommands.$IE();
        return true;
    },
    $GL_1: function RTE_SPRichTextEditorComponentProvider$$GL_1($p0, $p1, $p2) {
        $p1['IsFreeForm'] = true;
        $p1['Value'] = RTE.FontCommands.$IF();
        return true;
    },
    $GM_1: function RTE_SPRichTextEditorComponentProvider$$GM_1($p0, $p1, $p2) {
        var $v_0 = RTE.RichTextEditor.queryImageAlt();

        if ($v_0.$B_0) {
            $p1['On'] = true;
            $p1['Value'] = $v_0.$C_0;
        }
        return true;
    },
    $GN_1: function RTE_SPRichTextEditorComponentProvider$$GN_1($p0, $p1, $p2) {
        var $v_0 = RTE.RichTextEditor.queryImageHeight();

        if ($v_0.$B_0) {
            $p1['On'] = true;
            RTE.RteUtility.parseStringForSpinnerControl($v_0.$C_0, $p1, 100, 'px');
        }
        else {
            $p1['On'] = false;
        }
        return true;
    },
    $GO_1: function RTE_SPRichTextEditorComponentProvider$$GO_1($p0, $p1, $p2) {
        $p1['On'] = (RTE.RichTextEditor.queryImageLockRatio()).get_commandOn();
        return true;
    },
    $GR_1: function RTE_SPRichTextEditorComponentProvider$$GR_1($p0, $p1, $p2) {
        var $v_0 = RTE.RichTextEditor.queryImageWidth();

        if ($v_0.$B_0) {
            $p1['On'] = true;
            RTE.RteUtility.parseStringForSpinnerControl($v_0.$C_0, $p1, 100, 'px');
        }
        else {
            $p1['On'] = false;
        }
        return true;
    },
    $GP_1: function RTE_SPRichTextEditorComponentProvider$$GP_1($p0, $p1, $p2) {
        var $v_0 = RTE.RichTextEditor.queryImageSrc();

        if ($v_0.$B_0) {
            $p1['On'] = true;
            $p1['Value'] = $v_0.$C_0;
        }
        return true;
    },
    $GS_1: function RTE_SPRichTextEditorComponentProvider$$GS_1($p0, $p1, $p2) {
        $p1['On'] = (RTE.RichTextEditor.queryItalic()).get_commandOn();
        return true;
    },
    $GU_1: function RTE_SPRichTextEditorComponentProvider$$GU_1($p0, $p1, $p2) {
        $p1['On'] = (RTE.ParagraphCommands.queryDirection(true)).get_commandOn();
        return true;
    },
    $GV_1: function RTE_SPRichTextEditorComponentProvider$$GV_1($p0, $p1, $p2) {
        return true;
    },
    $GW_1: function RTE_SPRichTextEditorComponentProvider$$GW_1($p0, $p1, $p2) {
        RTE.RteUtility.classMustExist('CUI.Controls.ToggleButtonCommandProperties');
        $p1[CUI.Controls.ToggleButtonCommandProperties.On] = (RTE.RichTextEditor.queryLinkDisplayIcon()).get_commandOn();
        return true;
    },
    $GX_1: function RTE_SPRichTextEditorComponentProvider$$GX_1($p0, $p1, $p2) {
        RTE.RteUtility.classMustExist('CUI.Controls.ToggleButtonCommandProperties');
        $p1[CUI.Controls.ToggleButtonCommandProperties.On] = (RTE.RichTextEditor.queryLinkOpenInNewWindow()).get_commandOn();
        return true;
    },
    $GY_1: function RTE_SPRichTextEditorComponentProvider$$GY_1($p0, $p1, $p2) {
        RTE.RteUtility.classMustExist('CUI.Controls.TextBoxCommandProperties');
        var $v_0 = RTE.RichTextEditor.queryLinkTitle();

        if ($v_0.$B_0) {
            $p1[CUI.Controls.TextBoxCommandProperties.Value] = $v_0.$C_0;
        }
        return true;
    },
    $GZ_1: function RTE_SPRichTextEditorComponentProvider$$GZ_1($p0, $p1, $p2) {
        RTE.RteUtility.classMustExist('CUI.Controls.TextBoxCommandProperties');
        var $v_0 = RTE.RichTextEditor.queryLinkUrl();

        if ($v_0.$B_0) {
            $p1[CUI.Controls.TextBoxCommandProperties.Value] = $v_0.$C_0;
        }
        return true;
    },
    $Ga_1: function RTE_SPRichTextEditorComponentProvider$$Ga_1($p0, $p1, $p2) {
        $p1['On'] = (RTE.ParagraphCommands.queryNumberedList()).get_commandOn();
        return true;
    },
    $Gb_1: function RTE_SPRichTextEditorComponentProvider$$Gb_1($p0, $p1, $p2) {
        $p1['On'] = (RTE.ParagraphCommands.queryDirection(false)).get_commandOn();
        return true;
    },
    $Gc_1: function RTE_SPRichTextEditorComponentProvider$$Gc_1($p0, $p1, $p2) {
        $p1['On'] = (RTE.RichTextEditor.queryStrikeThrough()).get_commandOn();
        return true;
    },
    $Gd_1: function RTE_SPRichTextEditorComponentProvider$$Gd_1($p0, $p1, $p2) {
        $p1['On'] = (RTE.RichTextEditor.querySubscript()).get_commandOn();
        return true;
    },
    $Ge_1: function RTE_SPRichTextEditorComponentProvider$$Ge_1($p0, $p1, $p2) {
        $p1['On'] = (RTE.RichTextEditor.querySuperscript()).get_commandOn();
        return true;
    },
    $Gf_1: function RTE_SPRichTextEditorComponentProvider$$Gf_1($p0, $p1, $p2) {
        var $v_0 = RTE.TableCommands.queryTableColumnWidth();

        if ($v_0.$B_0) {
            RTE.RteUtility.parseStringForSpinnerControl($v_0.$C_0, $p1, 100, 'px');
        }
        return true;
    },
    $Gj_1: function RTE_SPRichTextEditorComponentProvider$$Gj_1($p0, $p1, $p2) {
        var $v_0 = RTE.TableCommands.queryTableHeight();

        if ($v_0.$B_0) {
            RTE.RteUtility.parseStringForSpinnerControl($v_0.$C_0, $p1, 100, 'px');
        }
        return true;
    },
    $Gl_1: function RTE_SPRichTextEditorComponentProvider$$Gl_1($p0, $p1, $p2) {
        var $v_0 = RTE.TableCommands.queryTableRowHeight();

        if ($v_0.$B_0) {
            RTE.RteUtility.parseStringForSpinnerControl($v_0.$C_0, $p1, 18, 'px');
        }
        return true;
    },
    $Gp_1: function RTE_SPRichTextEditorComponentProvider$$Gp_1($p0, $p1, $p2) {
        var $v_0 = RTE.TableCommands.queryTableWidth();

        if ($v_0.$B_0) {
            RTE.RteUtility.parseStringForSpinnerControl($v_0.$C_0, $p1, 100, 'px');
        }
        return true;
    },
    $Gk_1: function RTE_SPRichTextEditorComponentProvider$$Gk_1($p0, $p1, $p2) {
        var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Table');

        if ($v_0) {
            $p1['On'] = RTE.TableCommands.hasLastColumn($v_0);
        }
        return true;
    },
    $Gg_1: function RTE_SPRichTextEditorComponentProvider$$Gg_1($p0, $p1, $p2) {
        var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Table');

        if ($v_0) {
            $p1['On'] = RTE.TableCommands.hasFirstColumn($v_0);
        }
        return true;
    },
    $Gh_1: function RTE_SPRichTextEditorComponentProvider$$Gh_1($p0, $p1, $p2) {
        var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Table');

        if ($v_0) {
            $p1['On'] = RTE.TableCommands.hasFooterRow($v_0);
        }
        return true;
    },
    $Gi_1: function RTE_SPRichTextEditorComponentProvider$$Gi_1($p0, $p1, $p2) {
        var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Table');

        if ($v_0) {
            $p1['On'] = RTE.TableCommands.hasHeaderRow($v_0);
        }
        return true;
    },
    $Go_1: function RTE_SPRichTextEditorComponentProvider$$Go_1($p0, $p1, $p2) {
        var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Table');

        if ($v_0) {
            $p1['On'] = (RTE.TableCommands.queryTableGridLines()).get_commandOn();
        }
        return true;
    },
    $Gm_1: function RTE_SPRichTextEditorComponentProvider$$Gm_1($p0, $p1, $p2) {
        return this.$As_1($p0, $p1, $p2, 'Table');
    },
    $As_1: function RTE_SPRichTextEditorComponentProvider$$As_1($p0, $p1, $p2, $p3) {
        var $v_0 = $p1['CommandValueId'];

        if (!$v_0) {
            return true;
        }
        var $v_1 = RTE.StyleRuleUtility.$2c($v_0);
        var $v_2 = RTE.CanvasEvents.getNodeFromEvent($p3);

        if ($v_2 && RTE.RteUtility.$6P($v_2, $v_1)) {
            $p1['On'] = true;
        }
        return true;
    },
    $GQ_1: function RTE_SPRichTextEditorComponentProvider$$GQ_1($p0, $p1, $p2) {
        return this.$As_1($p0, $p1, $p2, 'Image');
    },
    $Gn_1: function RTE_SPRichTextEditorComponentProvider$$Gn_1($p0, $p1, $p2) {
        var $v_0 = RTE.RichTextEditor.queryTableSummary();

        if ($v_0.$B_0) {
            $p1['On'] = true;
            $p1['Value'] = $v_0.$C_0;
        }
        return true;
    },
    $Gq_1: function RTE_SPRichTextEditorComponentProvider$$Gq_1($p0, $p1, $p2) {
        var $v_0 = $p1['CommandValueId'];

        if (!$v_0) {
            return true;
        }
        var $v_1 = this.$Dn_1($v_0);

        $p1['On'] = $v_1;
        return true;
    },
    $Dn_1: function RTE_SPRichTextEditorComponentProvider$$Dn_1($p0) {
        var $v_0 = RTE.StyleRuleUtility.$2c($p0);
        var $v_1 = RTE.FontCommands.$Ih();

        return !!$v_1 && RTE.RteUtility.$6P($v_1, $v_0);
    },
    $Gr_1: function RTE_SPRichTextEditorComponentProvider$$Gr_1($p0, $p1, $p2) {
        $p1['On'] = (RTE.RichTextEditor.queryUnderline()).get_commandOn();
        return true;
    },
    $FM_1: function RTE_SPRichTextEditorComponentProvider$$FM_1() {
        return (RTE.RichTextEditor.queryBold()).$B_0;
    },
    $FN_1: function RTE_SPRichTextEditorComponentProvider$$FN_1() {
        return !RTE.Cursor.$Cn() && (RTE.ParagraphCommands.queryBulletedList()).$B_0;
    },
    $FO_1: function RTE_SPRichTextEditorComponentProvider$$FO_1() {
        return RTE.Canvas.$1D;
    },
    $FL_1: function RTE_SPRichTextEditorComponentProvider$$FL_1() {
        return true;
    },
    $Af_1: function RTE_SPRichTextEditorComponentProvider$$Af_1() {
        var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Link');

        if ($v_0) {
            return false;
        }
        var $v_1 = RTE.CanvasEvents.getNodeFromEvent('Atomic');

        if ($v_1) {
            return false;
        }
        return true;
    },
    $Fi_1: function RTE_SPRichTextEditorComponentProvider$$Fi_1() {
        if (!this.$Ag_1()) {
            return false;
        }
        return this.$Af_1();
    },
    $Ag_1: function RTE_SPRichTextEditorComponentProvider$$Ag_1() {
        return !window.browseris.safariMobile;
    },
    $FP_1: function RTE_SPRichTextEditorComponentProvider$$FP_1() {
        return RTE.Canvas.$6F('copy');
    },
    $FQ_1: function RTE_SPRichTextEditorComponentProvider$$FQ_1() {
        return RTE.Canvas.$6F('cut');
    },
    $Fk_1: function RTE_SPRichTextEditorComponentProvider$$Fk_1() {
        if (!RTE.Canvas.$1D) {
            return false;
        }
        var $v_0 = RTE.Canvas.currentEditableRegion();

        if (!RTE.Canvas.getCachedRestriction($v_0, 'AllowWebParts', false)) {
            return false;
        }
        if (RTE.RteUtility.isInWebpartBox($v_0)) {
            return false;
        }
        return true;
    },
    $Fh_1: function RTE_SPRichTextEditorComponentProvider$$Fh_1() {
        if (!RTE.Canvas.$1D) {
            return false;
        }
        if (!RTE.RteUtility.isClassAvailable('SP.Ribbon.DocLibAspxPageComponent')) {
            return false;
        }
        var $v_0 = SP.Ribbon.DocLibAspxPageComponent.get_instance() != null && (SP.Ribbon.DocLibAspxPageComponent.get_instance()).get_allowInsertNewList();

        if (!$v_0) {
            return false;
        }
        var $v_1 = RTE.Canvas.currentEditableRegion();

        if (!RTE.Canvas.getCachedRestriction($v_1, 'AllowWebParts', false)) {
            return false;
        }
        if (RTE.RteUtility.isInWebpartBox($v_1)) {
            return false;
        }
        return true;
    },
    $FS_1: function RTE_SPRichTextEditorComponentProvider$$FS_1() {
        return (RTE.RichTextEditor.queryItalic()).$B_0;
    },
    $FT_1: function RTE_SPRichTextEditorComponentProvider$$FT_1() {
        return !RTE.Cursor.$Cn() && (RTE.ParagraphCommands.queryNumberedList()).$B_0;
    },
    $FU_1: function RTE_SPRichTextEditorComponentProvider$$FU_1() {
        return RTE.Canvas.$6F('paste');
    },
    $Fa_1: function RTE_SPRichTextEditorComponentProvider$$Fa_1() {
        return (RTE.RichTextEditor.queryStrikeThrough()).$B_0;
    },
    $Fb_1: function RTE_SPRichTextEditorComponentProvider$$Fb_1() {
        return (RTE.RichTextEditor.querySubscript()).$B_0;
    },
    $Fc_1: function RTE_SPRichTextEditorComponentProvider$$Fc_1() {
        return (RTE.RichTextEditor.querySuperscript()).$B_0;
    },
    $Fd_1: function RTE_SPRichTextEditorComponentProvider$$Fd_1() {
        var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Table');

        return RTE.TableCommands.hasTableStyle($v_0);
    },
    $Fe_1: function RTE_SPRichTextEditorComponentProvider$$Fe_1() {
        var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Table');

        return RTE.TableCommands.hasTableStyle($v_0);
    },
    $Ff_1: function RTE_SPRichTextEditorComponentProvider$$Ff_1() {
        return (RTE.RichTextEditor.queryUnderline()).$B_0;
    },
    $Ae_1: function RTE_SPRichTextEditorComponentProvider$$Ae_1() {
        return RTE.SnapshotManager.get_undoEnabled();
    },
    $Ad_1: function RTE_SPRichTextEditorComponentProvider$$Ad_1() {
        return RTE.SnapshotManager.$3T.$13_0 > 0;
    },
    $Fj_1: function RTE_SPRichTextEditorComponentProvider$$Fj_1() {
        var $v_0 = RTE.Canvas.currentEditableRegion();

        return !RTE.Canvas.getCachedRestriction($v_0, 'UseInlineStyle', false);
    },
    $Fg_1: function RTE_SPRichTextEditorComponentProvider$$Fg_1() {
        return this.$Ae_1() || this.$Ad_1();
    },
    $FV_1: function RTE_SPRichTextEditorComponentProvider$$FV_1() {
        return RTE.Canvas.$1D;
    },
    $FW_1: function RTE_SPRichTextEditorComponentProvider$$FW_1() {
        return (RTE.RichTextEditor.queryImageContextualGroup()).$B_0;
    },
    $FX_1: function RTE_SPRichTextEditorComponentProvider$$FX_1() {
        return (RTE.RichTextEditor.queryLinkContextualGroup()).$B_0;
    },
    $FY_1: function RTE_SPRichTextEditorComponentProvider$$FY_1() {
        return (RTE.RichTextEditor.queryTableContextualGroup()).$B_0;
    },
    $FZ_1: function RTE_SPRichTextEditorComponentProvider$$FZ_1() {
        return (RTE.TableCommands.queryTableDesignTab()).$B_0;
    },
    $FR_1: function RTE_SPRichTextEditorComponentProvider$$FR_1() {
        return RTE.Canvas.$1D;
    },
    initializeCommandHandlerDictionary: function RTE_SPRichTextEditorComponentProvider$initializeCommandHandlerDictionary() {
        if (!RTE.SU.$7(this.$0_1)) {
            return;
        }
        var $v_0;

        this.$0_1 = {};
        $v_0 = this.$$d_$Fr_1;
        this.$0_1['AlignCenter'] = $v_0;
        this.$0_1['AlignJustify'] = $v_0;
        this.$0_1['AlignLeft'] = $v_0;
        this.$0_1['AlignRight'] = $v_0;
        $v_0 = this.$$d_$Ft_1;
        this.$0_1['BackgroundColorCssClass'] = $v_0;
        this.$0_1['BackgroundColorCssClassPreview'] = $v_0;
        this.$0_1['BackgroundColorThemeClass'] = $v_0;
        this.$0_1['BackgroundColorThemeClassPreview'] = $v_0;
        this.$0_1['BackgroundColorCustom'] = $v_0;
        $v_0 = this.$$d_$Fu_1;
        this.$0_1['Bold'] = $v_0;
        this.$0_1['ClearFormatting'] = $v_0;
        this.$0_1['Italics'] = $v_0;
        this.$0_1['StrikeThrough'] = $v_0;
        this.$0_1['Subscript'] = $v_0;
        this.$0_1['Superscript'] = $v_0;
        this.$0_1['Underline'] = $v_0;
        $v_0 = this.$$d_$GC_1;
        this.$0_1['BulletedList'] = $v_0;
        this.$0_1['NumberedList'] = $v_0;
        $v_0 = this.$$d_$Fw_1;
        this.$0_1['ColorCssClass'] = $v_0;
        this.$0_1['ColorCssClassPreview'] = $v_0;
        this.$0_1['ColorCustom'] = $v_0;
        this.$0_1['ColorThemeClass'] = $v_0;
        this.$0_1['ColorThemeClassPreview'] = $v_0;
        $v_0 = this.$$d_$Fv_1;
        this.$0_1['Copy'] = $v_0;
        this.$0_1['Cut'] = $v_0;
        this.$0_1['Paste'] = $v_0;
        this.$0_1['PasteDefault'] = $v_0;
        $v_0 = this.$$d_$G7_1;
        this.$0_1['DecreaseIndent'] = $v_0;
        this.$0_1['IncreaseIndent'] = $v_0;
        $v_0 = this.$$d_$HE_1;
        this.$0_1['DeleteCell'] = $v_0;
        this.$0_1['DeleteColumn'] = $v_0;
        this.$0_1['DeleteRow'] = $v_0;
        this.$0_1['DeleteTable'] = $v_0;
        $v_0 = this.$$d_$G3_1;
        this.$0_1['EditSource'] = $v_0;
        this.$0_1['MakeXhtml'] = $v_0;
        $v_0 = this.$$d_$Fy_1;
        this.$0_1['EditImageUpload'] = $v_0;
        this.$0_1['EditImageWeb'] = $v_0;
        $v_0 = this.$$d_$Fz_1;
        this.$0_1['ElementWithStyle'] = $v_0;
        this.$0_1['ElementWithStylePreview'] = $v_0;
        $v_0 = this.$$d_$Fs_1;
        this.$0_1['ApplyLiveGalleryStyle'] = $v_0;
        this.$0_1['ApplyLiveGalleryStylePreview'] = $v_0;
        $v_0 = this.$$d_$G0_1;
        this.$0_1['FontFamilyCssClass'] = $v_0;
        this.$0_1['FontFamilyCssClassPreview'] = $v_0;
        this.$0_1['FontFamilyThemeClass'] = $v_0;
        this.$0_1['FontFamilyThemeClassPreview'] = $v_0;
        this.$0_1['FontFamilyStyleValue'] = $v_0;
        $v_0 = this.$$d_$G1_1;
        this.$0_1['FontSizeCssClass'] = $v_0;
        this.$0_1['FontSizeCssClassPreview'] = $v_0;
        this.$0_1['FontSizeStyleValue'] = $v_0;
        $v_0 = this.$$d_$G4_1;
        this.$0_1['ImageAlt'] = $v_0;
        this.$0_1['ImageClearStyle'] = $v_0;
        this.$0_1['ImageEdit'] = $v_0;
        this.$0_1['ImageHeight'] = $v_0;
        this.$0_1['ImageLockRatio'] = $v_0;
        this.$0_1['ImageSrc'] = $v_0;
        this.$0_1['ImageWidth'] = $v_0;
        $v_0 = this.$$d_$G5_1;
        this.$0_1['ImagePosition'] = $v_0;
        this.$0_1['ImagePositionPreview'] = $v_0;
        $v_0 = this.$$d_$G6_1;
        this.$0_1['ImageStyle'] = $v_0;
        this.$0_1['ImageStylePreview'] = $v_0;
        $v_0 = this.$$d_$G8_1;
        this.$0_1['InsertImageUpload'] = $v_0;
        this.$0_1['InsertImageWeb'] = $v_0;
        this.$0_1['InsertImage'] = $v_0;
        this.$0_1['InsertLinkWeb'] = $v_0;
        this.$0_1['InsertLink'] = $v_0;
        this.$0_1['InsertList'] = $v_0;
        this.$0_1['InsertNewList'] = $v_0;
        $v_0 = this.$$d_$HG_1;
        this.$0_1['InsertColumnLeft'] = $v_0;
        this.$0_1['InsertColumnRight'] = $v_0;
        this.$0_1['InsertRowAbove'] = $v_0;
        this.$0_1['InsertRowBelow'] = $v_0;
        this.$0_1['InsertTable'] = $v_0;
        this.$0_1['InsertTableDialog'] = $v_0;
        $v_0 = this.$$d_$GA_1;
        this.$0_1['LayoutOneColumn'] = $v_0;
        this.$0_1['LayoutOneColumnSidebar'] = $v_0;
        this.$0_1['LayoutTwoColumn'] = $v_0;
        this.$0_1['LayoutTwoColumnHeader'] = $v_0;
        this.$0_1['LayoutTwoColumnHeaderFooter'] = $v_0;
        this.$0_1['LayoutThreeColumn'] = $v_0;
        this.$0_1['LayoutThreeColumnHeader'] = $v_0;
        this.$0_1['LayoutThreeColumnHeaderFooter'] = $v_0;
        $v_0 = this.$$d_$GB_1;
        this.$0_1['LinkDisplayIcon'] = $v_0;
        this.$0_1['LinkEditWeb'] = $v_0;
        this.$0_1['LinkInNewTab'] = $v_0;
        this.$0_1['LinkRemove'] = $v_0;
        this.$0_1['LinkTitleChanged'] = $v_0;
        this.$0_1['LinkUrlChanged'] = $v_0;
        $v_0 = this.$$d_$Fx_1;
        this.$0_1['LeftToRight'] = $v_0;
        this.$0_1['RightToLeft'] = $v_0;
        $v_0 = this.$$d_$HH_1;
        this.$0_1['MergeCellAbove'] = $v_0;
        this.$0_1['MergeCellBelow'] = $v_0;
        this.$0_1['MergeCellLeft'] = $v_0;
        this.$0_1['MergeCellRight'] = $v_0;
        this.$0_1['MergeCells'] = $v_0;
        $v_0 = this.$$d_$G2_1;
        this.$0_1['Redo'] = $v_0;
        this.$0_1['Undo'] = $v_0;
        this.$0_1['RemoveStyles'] = this.$$d_$Gs_1;
        this.$0_1['SelectAll'] = this.$$d_$H7_1;
        $v_0 = this.$$d_$H9_1;
        this.$0_1['SelectMenuItem'] = $v_0;
        this.$0_1['SelectMenuItemPreview'] = $v_0;
        $v_0 = this.$$d_$HB_1;
        this.$0_1['SetLanguage'] = $v_0;
        $v_0 = this.$$d_$HK_1;
        this.$0_1['TableStyle'] = $v_0;
        this.$0_1['TableStylePreview'] = $v_0;
        this.$0_1['TableSummary'] = this.$$d_$HL_1;
        $v_0 = this.$$d_$HM_1;
        this.$0_1['TextStyle'] = $v_0;
        this.$0_1['TextStylePreview'] = $v_0;
        $v_0 = this.$$d_$HF_1;
        this.$0_1['SetTableColumnWidth'] = $v_0;
        this.$0_1['SetTableHeight'] = $v_0;
        this.$0_1['SetTableRowHeight'] = $v_0;
        this.$0_1['SetTableWidth'] = $v_0;
        $v_0 = this.$$d_$HC_1;
        this.$0_1['SplitHorizontal'] = $v_0;
        this.$0_1['SplitVertical'] = $v_0;
        $v_0 = this.$$d_$HI_1;
        this.$0_1['TableClearFormatting'] = $v_0;
        this.$0_1['TableViewGridlines'] = $v_0;
        $v_0 = this.$$d_$HJ_1;
        this.$0_1['TableFirstColumn'] = $v_0;
        this.$0_1['TableFooterRow'] = $v_0;
        this.$0_1['TableHeadingRow'] = $v_0;
        this.$0_1['TableLastColumn'] = $v_0;
        this.$0_1['UploadDocumentRTE'] = this.$$d_$HN_1;
        $v_0 = this.$$d_$HO_1;
        this.$0_1['InsertWebPart'] = $v_0;
        $v_0 = this.$$d_$G9_1;
        this.$0_1['InsertEmbedding'] = $v_0;
        $v_0 = this.$$d_$HA_1;
        this.$0_1['ServerButton'] = $v_0;
        this.$0_1['ServerQueryButton'] = $v_0;
        $v_0 = this.$$d_$H6_1;
        this.$0_1['CommandContextChanged'] = $v_0;
        $v_0 = this.$$d_$HD_1;
        this.$0_1['SelectTextStyleOpen'] = $v_0;
        this.$0_1['ElementWithStyleOptionsOpen'] = $v_0;
        this.$0_1['TableStyleOptionsOpen'] = $v_0;
        this.$0_1['ImageStyleOptionsOpen'] = $v_0;
        this.$0_1['ImageArrangeMenuOpen'] = $v_0;
        this.$0_1['FontFamilyStyleOpen'] = $v_0;
        this.$0_1['FontSizeStyleOpen'] = $v_0;
        this.$0_1['SelectBackgroundColorOpen'] = $v_0;
        this.$0_1['SelectFontColorOpen'] = $v_0;
        $v_0 = this.$$d_$Ar_1;
        this.$0_1['SelectFontColorClose'] = $v_0;
        this.$0_1['SelectBackgroundColorClose'] = $v_0;
        this.$0_1['FontSizeStyleClose'] = $v_0;
        this.$0_1['FontFamilyStyleClose'] = $v_0;
        this.$0_1['ImageArrangeMenuClose'] = $v_0;
        this.$0_1['ImageStyleOptionsClose'] = $v_0;
        this.$0_1['TableStyleOptionsClose'] = $v_0;
        this.$0_1['ElementWithStyleOptionsClose'] = $v_0;
        this.$0_1['SelectTextStyleClose'] = $v_0;
        this.$0_1['ApplyLiveGalleryStylePreviewRevert'] = this.$$d_$Gt_1;
        $v_0 = this.$$d_$H8_1;
        this.$0_1['SelectElementClose'] = $v_0;
        this.$0_1['GetFontBackgroundColorMenuXml'] = this.$$d_$Gu_1;
        this.$0_1['GetFontColorMenuXml'] = this.$$d_$Gv_1;
        this.$0_1['GetFontFamilyMenuXml'] = this.$$d_$Gw_1;
        this.$0_1['GetFontSizeMenuXml'] = this.$$d_$Gx_1;
        this.$0_1['GetImageStyleMenuXml'] = this.$$d_$Gy_1;
        this.$0_1['GetPositionMenuXml'] = this.$$d_$H2_1;
        this.$0_1['GetSelectElementMenuXml'] = this.$$d_$H3_1;
        this.$0_1['GetTableStyleMenuXml'] = this.$$d_$H4_1;
        this.$0_1['GetTextStyleMenuXml'] = this.$$d_$H5_1;
        this.$0_1['GetLanguagesMenuXml'] = this.$$d_$Gz_1;
        this.$0_1['GetPasteMenuXml'] = this.$$d_$H1_1;
        this.$0_1['QueryAlignCenter'] = this.$$d_$GD_1;
        this.$0_1['QueryAlignJustify'] = this.$$d_$GE_1;
        this.$0_1['QueryAlignLeft'] = this.$$d_$GF_1;
        this.$0_1['QueryAlignRight'] = this.$$d_$GG_1;
        this.$0_1['QueryBold'] = this.$$d_$GH_1;
        this.$0_1['QueryBulletedList'] = this.$$d_$GI_1;
        this.$0_1['QueryElementWithStyle'] = this.$$d_$GJ_1;
        this.$0_1['QueryFontFamily'] = this.$$d_$GK_1;
        this.$0_1['QueryFontSize'] = this.$$d_$GL_1;
        this.$0_1['QueryImageAlt'] = this.$$d_$GM_1;
        this.$0_1['QueryImageHeight'] = this.$$d_$GN_1;
        this.$0_1['QueryImageLockRatio'] = this.$$d_$GO_1;
        this.$0_1['QueryImageWidth'] = this.$$d_$GR_1;
        this.$0_1['QueryImageStyle'] = this.$$d_$GQ_1;
        this.$0_1['QueryImageSrc'] = this.$$d_$GP_1;
        this.$0_1['QueryItalics'] = this.$$d_$GS_1;
        this.$0_1['QueryLanguage'] = this.$$d_$GT_1;
        this.$0_1['QueryLeftToRight'] = this.$$d_$GU_1;
        this.$0_1['QueryLinkDisplayIcon'] = this.$$d_$GW_1;
        this.$0_1['QueryLinkBookmark'] = this.$$d_$GV_1;
        this.$0_1['QueryLinkInNewTab'] = this.$$d_$GX_1;
        this.$0_1['QueryLinkTitle'] = this.$$d_$GY_1;
        this.$0_1['QueryLinkUrl'] = this.$$d_$GZ_1;
        this.$0_1['QueryNumberedList'] = this.$$d_$Ga_1;
        this.$0_1['QueryRightToLeft'] = this.$$d_$Gb_1;
        this.$0_1['QueryStrikeThrough'] = this.$$d_$Gc_1;
        this.$0_1['QuerySubscript'] = this.$$d_$Gd_1;
        this.$0_1['QuerySuperscript'] = this.$$d_$Ge_1;
        this.$0_1['QueryTableColumnWidth'] = this.$$d_$Gf_1;
        this.$0_1['QueryTableHeight'] = this.$$d_$Gj_1;
        this.$0_1['QueryTableRowHeight'] = this.$$d_$Gl_1;
        this.$0_1['QueryTableWidth'] = this.$$d_$Gp_1;
        this.$0_1['QueryTableLastColumn'] = this.$$d_$Gk_1;
        this.$0_1['QueryTableFirstColumn'] = this.$$d_$Gg_1;
        this.$0_1['QueryTableFooterRow'] = this.$$d_$Gh_1;
        this.$0_1['QueryTableHeadingRow'] = this.$$d_$Gi_1;
        this.$0_1['QueryTableViewGridlines'] = this.$$d_$Go_1;
        this.$0_1['QueryTableStyle'] = this.$$d_$Gm_1;
        this.$0_1['QueryTableSummary'] = this.$$d_$Gn_1;
        this.$0_1['QueryTextStyle'] = this.$$d_$Gq_1;
        this.$0_1['QueryUnderline'] = this.$$d_$Gr_1;
        this.$0_1['QueryLiveGalleryStyle'] = this.$$d_$H0_1;
    },
    initializeCanHandleHandlerDictionary: function RTE_SPRichTextEditorComponentProvider$initializeCanHandleHandlerDictionary() {
        if (!RTE.SU.$7(this.$9_1)) {
            return;
        }
        this.$9_1 = {};
        this.$9_1['Bold'] = this.$$d_$FM_1;
        this.$9_1['BulletedList'] = this.$$d_$FN_1;
        this.$9_1['Copy'] = this.$$d_$FP_1;
        this.$9_1['Cut'] = this.$$d_$FQ_1;
        this.$9_1['EditSource'] = this.$$d_$FR_1;
        this.$9_1['Italics'] = this.$$d_$FS_1;
        this.$9_1['MakeXhtml'] = this.$$d_$FR_1;
        this.$9_1['NumberedList'] = this.$$d_$FT_1;
        this.$9_1['Paste'] = this.$$d_$FU_1;
        this.$9_1['PasteDefault'] = this.$$d_$FU_1;
        this.$9_1['Redo'] = this.$$d_$Ad_1;
        this.$9_1['StrikeThrough'] = this.$$d_$Fa_1;
        this.$9_1['Subscript'] = this.$$d_$Fb_1;
        this.$9_1['Superscript'] = this.$$d_$Fc_1;
        this.$9_1['TableFooterRow'] = this.$$d_$Fd_1;
        this.$9_1['TableLastColumn'] = this.$$d_$Fe_1;
        this.$9_1['Underline'] = this.$$d_$Ff_1;
        this.$9_1['Undo'] = this.$$d_$Ae_1;
        this.$9_1['UndoOpen'] = this.$$d_$Fg_1;
        this.$9_1['FontGroup'] = this.$$d_$FO_1;
        this.$9_1['ParagraphGroup'] = this.$$d_$FO_1;
        this.$9_1['EditingGroup'] = this.$$d_$FO_1;
        this.$9_1['SelectFontColorOpen'] = this.$$d_$FL_1;
        this.$9_1['ColorCssClass'] = this.$$d_$FL_1;
        this.$9_1['ColorCssClassPreview'] = this.$$d_$FL_1;
        this.$9_1['ColorCustom'] = this.$$d_$FL_1;
        this.$9_1['ColorThemeClass'] = this.$$d_$FL_1;
        this.$9_1['ColorThemeClassPreview'] = this.$$d_$FL_1;
        this.$9_1['InsertLink'] = this.$$d_$Af_1;
        this.$9_1['InsertLinkMenuOpen'] = this.$$d_$Af_1;
        this.$9_1['InsertLinkWeb'] = this.$$d_$Af_1;
        this.$9_1['UploadDocumentRTE'] = this.$$d_$Fi_1;
        this.$9_1['InsertImageUpload'] = (this.$9_1['EditImageUpload'] = this.$$d_$Ag_1);
        this.$9_1['TablesGroup'] = this.$$d_$FO_1;
        this.$9_1['MediaGroup'] = this.$$d_$FO_1;
        this.$9_1['LinksGroup'] = this.$$d_$FO_1;
        this.$9_1['ImageStyleOptionsOpen'] = this.$$d_$Fj_1;
        this.$9_1['TableStyleOptionsOpen'] = this.$$d_$Fj_1;
        this.$9_1['EditingToolsContextualGroup'] = this.$$d_$FV_1;
        this.$9_1['ImageContextualGroup'] = this.$$d_$FW_1;
        this.$9_1['LinkContextualGroup'] = this.$$d_$FX_1;
        this.$9_1['TableContextualGroup'] = this.$$d_$FY_1;
        this.$9_1['TableDesignTab'] = this.$$d_$FZ_1;
        this.$9_1['InsertColumnLeft'] = RTE.TableCommands.canInsertColumn;
        this.$9_1['InsertColumnRight'] = RTE.TableCommands.canInsertColumn;
        this.$9_1['InsertRowAbove'] = RTE.TableCommands.canInsertRow;
        this.$9_1['InsertRowBelow'] = RTE.TableCommands.canInsertRow;
        this.$9_1['MergeCellAbove'] = RTE.TableCommands.canMergeCells;
        this.$9_1['MergeCellBelow'] = RTE.TableCommands.canMergeCells;
        this.$9_1['MergeCellLeft'] = RTE.TableCommands.canMergeCells;
        this.$9_1['MergeCellRight'] = RTE.TableCommands.canMergeCells;
        this.$9_1['MergeCells'] = RTE.TableCommands.canMergeSelected;
        this.$9_1['SplitHorizontal'] = RTE.TableCommands.canSplit;
        this.$9_1['SplitVertical'] = RTE.TableCommands.canSplit;
        this.$9_1['ImageSizeGroup'] = RTE.RichTextEditor.$5u;
        this.$9_1['InsertWebPart'] = RTE.Canvas.canHandleInsertWebPart;
        this.$9_1['InsertList'] = RTE.Canvas.canHandleInsertWebPart;
        this.$9_1['InsertNewList'] = this.$$d_$Fh_1;
        this.$9_1['WebPartsGroup'] = this.$$d_$Fk_1;
        this.$9_1['InsertEmbedding'] = RTE.EmbeddingCommands.canHandleInsertEmbeddingButton;
        this.$9_1['EmbedGroup'] = RTE.EmbeddingCommands.canHandleInsertEmbedding;
    },
    initializeAllCommandsDictionary: function RTE_SPRichTextEditorComponentProvider$initializeAllCommandsDictionary() {
        if (!RTE.SU.$7(this.$58_1)) {
            return;
        }
        var $v_0, $v_1;
        var $v_2;

        this.$58_1 = {};
        $v_2 = this.getFocusedCommands();
        $v_1 = $v_2.length;
        for ($v_0 = 0; $v_0 < $v_1; $v_0++) {
            this.$58_1[$v_2[$v_0]] = true;
        }
        $v_2 = this.getGlobalCommands();
        $v_1 = $v_2.length;
        for ($v_0 = 0; $v_0 < $v_1; $v_0++) {
            this.$58_1[$v_2[$v_0]] = true;
        }
    }
};
RTE.RteRibbonCommand = function RTE_RteRibbonCommand() {
};
RTE.RteRibbonCommand.prototype = {
    $C8_0: null,
    $Au_0: null,
    $Dl_0: null,
    $E7_0: 0
};
RTE.CssStyleInfo = function RTE_CssStyleInfo() {
};
RTE.CssStyleInfo.prototype = {
    $EH_0: null,
    rule: null,
    $7P_0: null
};
RTE.StyleRuleUtility = function RTE_StyleRuleUtility() {
};
RTE.StyleRuleUtility.$C2 = function RTE_StyleRuleUtility$$C2($p0) {
    var $v_0 = $p0.indexOf(';');

    return $v_0 === -1 ? $p0 : $p0.substr(0, $v_0);
};
RTE.StyleRuleUtility.$Bq = function RTE_StyleRuleUtility$$Bq($p0) {
    var $v_0 = $p0.indexOf(';');

    return $v_0 === -1 ? false : $p0.substring($v_0 + 1, $p0.length) === 'true';
};
RTE.StyleRuleUtility.$2c = function RTE_StyleRuleUtility$$2c($p0) {
    var $v_0 = $p0.indexOf('.');

    if ($v_0 >= 0) {
        $p0 = $p0.substr($v_0 + 1);
    }
    return $p0;
};
RTE.StyleRuleUtility.$6M = function RTE_StyleRuleUtility$$6M($p0) {
    var $v_0 = $p0.indexOf('.');

    if ($v_0 >= 0) {
        return $p0.substring(0, $v_0);
    }
    return '';
};
RTE.StyleRuleUtility.$IW = function RTE_StyleRuleUtility$$IW($p0, $p1, $p2, $p3, $p4) {
    if (!RTE.SU.$1R($p0.href) && !RTE.SU.$2($p0.href)) {
        if (RTE.StyleRuleUtility.checkOnlyCssFromSameDomain && !RTE.RteUtility.$JT($p0.href)) {
            return false;
        }
        var $v_0 = null;

        if ($p4) {
            $v_0 = RTE.StyleRuleUtility.$Kz($p0.href);
            if (!$v_0) {
                return false;
            }
        }
        else {
            $v_0 = RTE.StyleRuleUtility.$E5($p0.href);
        }
        if ($v_0.indexOf($p1) === -1) {
            return true;
        }
        return RTE.StyleRuleUtility.$Cp($p0, $p1, $p2, $p3);
    }
    return RTE.StyleRuleUtility.$Cp($p0, $p1, $p2, $p3);
};
RTE.StyleRuleUtility.$Cp = function RTE_StyleRuleUtility$$Cp($p0, $p1, $p2, $p3) {
    var $v_0 = RTE.StyleRuleUtility.$IU($p0);
    var $v_1 = $v_0.length;

    for (var $v_2 = 0; $v_2 < $v_1; $v_2++) {
        var $v_3 = $v_0[$v_2];
        var $v_4 = $v_3.selectorText;

        if (!RTE.SU.$2($v_4)) {
            var $v_5 = $v_4.split(',');

            for (var $v_6 = 0; $v_6 < $v_5.length; $v_6++) {
                var $v_7 = RTE.StyleRuleUtility.$IV($p1, $v_5[$v_6].trim());

                if ($v_7 && !$p3[$v_7]) {
                    var $v_8 = new RTE.CssStyleInfo();

                    $v_8.$EH_0 = $p0;
                    $v_8.rule = $v_3;
                    $v_8.$7P_0 = $v_7;
                    $p3[$v_7] = $v_3;
                    $p2.push($v_8);
                }
            }
        }
    }
    return true;
};
RTE.StyleRuleUtility.$IV = function RTE_StyleRuleUtility$$IV($p0, $p1) {
    if ($p1 && typeof $p1 !== 'undefined' && $p1.length && $p1.indexOf($p0) !== -1) {
        $p1 = $p1.toLowerCase();
        var $v_0;
        var $v_1 = null;

        if (($v_0 = $p1.lastIndexOf(' ')) >= 0) {
            if (++$v_0 < $p1.length) {
                $v_1 = $p1.substr($v_0);
            }
            else {
                $v_1 = '';
            }
        }
        else {
            $v_1 = $p1;
        }
        var $v_2 = $v_1.indexOf('.');

        if ($v_2 !== -1) {
            $v_1 = $v_1.substr($v_2);
        }
        if ($v_1.indexOf($p0) !== -1) {
            return $v_1;
        }
    }
    return null;
};
RTE.StyleRuleUtility.$IU = function RTE_StyleRuleUtility$$IU($p0) {
    if ($p0.rules) {
        return $p0.rules;
    }
    else {
        return $p0.cssRules;
    }
};
RTE.StyleRuleUtility.getStyleRules = function RTE_StyleRuleUtility$getStyleRules(prefixWithClass, prefix, onlyIfLoaded) {
    if (!prefixWithClass.startsWith('.')) {
        prefixWithClass = '.' + prefixWithClass;
    }
    prefixWithClass = prefixWithClass.toLowerCase();
    if (!RTE.StyleRuleUtility.$5I) {
        RTE.StyleRuleUtility.$5I = {};
    }
    var $v_0 = null;

    $v_0 = RTE.StyleRuleUtility.$5I[prefixWithClass];
    if ($v_0) {
        return $v_0;
    }
    else {
        if (!RTE.StyleRuleUtility.$5J) {
            RTE.StyleRuleUtility.$5J = {};
        }
        var $v_1 = true;
        var $v_2 = RTE.StyleRuleUtility.$5J[prefix];

        if (!$v_2) {
            $v_2 = [];
            var $v_5 = {};
            var $v_6 = document.styleSheets;
            var $v_7 = $v_6.length;

            for (var $v_8 = 0; $v_8 < $v_7; $v_8++) {
                var $v_9 = RTE.StyleRuleUtility.$IW($v_6[$v_8], prefix, $v_2, $v_5, onlyIfLoaded);

                if (!$v_9) {
                    $v_1 = false;
                }
            }
            if ($v_1) {
                RTE.StyleRuleUtility.$5J[prefix] = $v_2;
            }
        }
        var $v_3 = [];
        var $v_4 = $v_2.length;

        for (var $v_A = 0; $v_A < $v_4; $v_A++) {
            var $v_B = $v_2[$v_A];

            if ($v_B.$7P_0.indexOf(prefixWithClass) !== -1) {
                $v_3.push($v_B);
            }
        }
        if ($v_1) {
            RTE.StyleRuleUtility.$5I[prefixWithClass] = $v_3;
        }
        return $v_3;
    }
};
RTE.StyleRuleUtility.$38 = function RTE_StyleRuleUtility$$38($p0, $p1) {
    var $v_0 = $p0.indexOf($p1);

    if ($v_0 !== -1) {
        var $v_1 = $v_0 + $p1.length;
        var $v_2 = $p0.indexOf(',', $v_0);

        if ($v_2 === -1) {
            $v_2 = $p0.length;
        }
        var $v_3 = $v_2 - $v_1;

        return $p0.substr($v_1, $v_3);
    }
    else {
        return '';
    }
};
RTE.StyleRuleUtility.$2G = function RTE_StyleRuleUtility$$2G($p0, $p1, $p2) {
    return RTE.StyleRuleUtility.$8W($p0, $p1, $p2, '-ms-name');
};
RTE.StyleRuleUtility.$AY = function RTE_StyleRuleUtility$$AY($p0, $p1) {
    if (!$p1) {
        return $p0.rule.selectorText;
    }
    return $p0.rule.selectorText + (RTE.StyleRuleUtility.$Cc($p0) ? ';true' : ';false');
};
RTE.StyleRuleUtility.$Cc = function RTE_StyleRuleUtility$$Cc($p0) {
    var $v_0 = RTE.StyleRuleUtility.$6M($p0.rule.selectorText);

    if (RTE.SU.$2($v_0) || !RTE.HtmlTagName.allowedElementStyleTags[$v_0.toUpperCase()]) {
        return false;
    }
    var $v_1 = RTE.StyleRuleUtility.$8W($p0, null, null, '-ms-element');

    return !RTE.SU.$2($v_1) && ($v_1.trim()).toLowerCase() === 'true';
};
RTE.StyleRuleUtility.$IT = function RTE_StyleRuleUtility$$IT($p0, $p1, $p2) {
    return RTE.StyleRuleUtility.$8W($p0, $p1, $p2, '-ms-color');
};
RTE.StyleRuleUtility.$8W = function RTE_StyleRuleUtility$$8W($p0, $p1, $p2, $p3) {
    var $v_0 = $p0.rule.style[$p3];

    if (RTE.SU.$7($v_0)) {
        $v_0 = RTE.StyleRuleUtility.$Ky($p0, $p3);
    }
    if (!RTE.SU.$7($v_0)) {
        $v_0 = unescape($v_0);
    }
    else if (!RTE.SU.$2($p2)) {
        $v_0 = RTE.StyleRuleUtility.$8F($p0.rule.style, $p2);
    }
    if (!RTE.SU.$7($v_0)) {
        $v_0 = RTE.RteUtility.removeQuotes($v_0);
    }
    return $v_0;
};
RTE.StyleRuleUtility.$8F = function RTE_StyleRuleUtility$$8F($p0, $p1) {
    if ($p1 === 'fontSize') {
        return RTE.StyleRuleUtility.$HS($p0.fontSize);
    }
    else if ($p1 === 'fontFamily') {
        return RTE.StyleRuleUtility.convertFontFamilyToDisplay($p0.fontFamily);
    }
    return $p0[$p1];
};
RTE.StyleRuleUtility.convertFontFamilyToDisplay = function RTE_StyleRuleUtility$convertFontFamilyToDisplay(fontFamily) {
    var $v_0 = fontFamily.indexOf(',');

    if ($v_0 > 0) {
        fontFamily = fontFamily.substr(0, $v_0);
    }
    if (fontFamily.startsWith('\"')) {
        fontFamily = fontFamily.substr(1);
    }
    if (fontFamily.endsWith('\"')) {
        fontFamily = fontFamily.substr(0, fontFamily.length - 1);
    }
    if (fontFamily.length > 0) {
        fontFamily = (fontFamily.charAt(0)).toUpperCase() + fontFamily.substr(1);
    }
    return fontFamily;
};
RTE.StyleRuleUtility.$HS = function RTE_StyleRuleUtility$$HS($p0) {
    var $v_0 = RTE.RteUtility.parseUnitValue($p0);

    if (!$v_0) {
        return '';
    }
    if ($v_0.unit === 'px' && Math.round($v_0.value * 10) !== Math.round($v_0.value) * 10) {
        if (RTE.StyleRuleUtility.$7A === -1) {
            var $v_1 = document.createElement('SPAN');

            $v_1.style.height = '100pt';
            $v_1.style.position = 'absolute';
            document.body.appendChild($v_1);
            RTE.StyleRuleUtility.$7A = $v_1.offsetHeight / 100;
            $v_1.parentNode.removeChild($v_1);
        }
        $v_0.unit = 'pt';
        $v_0.value = Math.round($v_0.value / RTE.StyleRuleUtility.$7A * 10) / 10;
    }
    return $v_0.value + $v_0.unit;
};
RTE.StyleRuleUtility.$Ky = function RTE_StyleRuleUtility$$Ky($p0, $p1) {
    var $v_0 = $p0.$EH_0.href;

    if (!$v_0) {
        return null;
    }
    var $v_1 = $p0.$7P_0;

    if (!$v_1) {
        return null;
    }
    var $v_2 = RTE.StyleRuleUtility.$E5($v_0);

    if (!$v_2) {
        return null;
    }
    var $v_3 = $v_2.toLowerCase();

    $v_1 = $v_1.toLowerCase();
    var $v_4 = -1;

    $v_4 = $v_3.indexOf($v_1, $v_4 + 1);
    while ($v_4 !== -1) {
        var $v_5 = $v_3.indexOf($p1, $v_4);

        if ($v_5 !== -1) {
            var $v_6 = $v_3.indexOf(':', $v_5);

            if ($v_6 !== -1) {
                var $v_7 = $v_3.indexOf(';', $v_6);

                if ($v_7 !== -1) {
                    var $v_8 = $v_3.indexOf('}', $v_4);

                    if ($v_8 !== -1) {
                        if ($v_8 >= $v_7) {
                            var $v_9 = $v_2.substr($v_6 + 1, $v_7 - $v_6 - 1);

                            return $v_9.trim();
                        }
                    }
                }
            }
        }
        $v_4 = $v_3.indexOf($v_1, $v_4 + 1);
    }
    return null;
};
RTE.StyleRuleUtility.$E5 = function RTE_StyleRuleUtility$$E5($p0) {
    if (!RTE.StyleRuleUtility.$2Q[$p0]) {
        try {
            var $v_0 = new XMLHttpRequest();

            $v_0.open('GET', $p0, false);
            $v_0.send(null);
            RTE.StyleRuleUtility.$2Q[$p0] = $v_0.responseText;
        }
        catch ($$e_2) {
            RTE.StyleRuleUtility.$2Q[$p0] = '';
        }
    }
    return RTE.StyleRuleUtility.$2Q[$p0];
};
RTE.StyleRuleUtility.$Kz = function RTE_StyleRuleUtility$$Kz($p0) {
    var $v_0 = RTE.StyleRuleUtility.$2Q[$p0];

    if (!$v_0) {
        var $v_1 = RTE.StyleRuleUtility.$5h[$p0];

        if (!$v_1 || !$v_1) {
            RTE.StyleRuleUtility.$5h[$p0] = true;
            RTE.StyleRuleUtility.$5i++;
            RTE.StyleRuleUtility.$2Q[$p0] = '';
            try {
                var $v_2 = new XMLHttpRequest();

                $v_2.open('GET', $p0, true);
                $v_2.onreadystatechange = function() {
                    if ($v_2.readyState === 4) {
                        RTE.StyleRuleUtility.$5h[$p0] = false;
                        RTE.StyleRuleUtility.$5i--;
                        if ($v_2.status === 200) {
                            RTE.StyleRuleUtility.$2Q[$p0] = $v_2.responseText;
                        }
                        else {
                            RTE.StyleRuleUtility.$2Q[$p0] = '';
                        }
                        if (!RTE.StyleRuleUtility.$5i) {
                            RTE.Canvas.$P();
                        }
                    }
                };
                $v_2.send(null);
            }
            catch ($$e_4) {
                RTE.StyleRuleUtility.$5h[$p0] = false;
                RTE.StyleRuleUtility.$5i--;
            }
        }
    }
    return $v_0;
};
RTE.TableCommands = function RTE_TableCommands() {
};
RTE.TableCommands.queryTableDesignTab = function RTE_TableCommands$queryTableDesignTab() {
    var $v_0 = new RTE.CommandState();
    var $v_1 = RTE.CanvasEvents.getNodeFromEvent('Table');

    $v_0.$B_0 = RTE.Canvas.$1D && !!$v_1;
    return $v_0;
};
RTE.TableCommands.insertTable = function RTE_TableCommands$insertTable($p0) {
    if (!(RTE.Cursor.get_range()).canDeleteContent()) {
        return;
    }
    (RTE.Cursor.get_range()).deleteContent();
    var $v_0 = RTE.Canvas.getCurrentStyleSheetPrefix();
    var $v_1 = (RTE.Cursor.get_range()).$3_0;
    var $v_2 = $v_1.ownerDocument;
    var $v_3 = $v_2.createElement('TABLE');

    $v_3.setAttribute('cellspacing', '0');
    $v_3.setAttribute('width', '100%');
    var $v_4 = $v_2.createElement('TBODY');
    var $v_5 = $v_2.createElement('TR');

    $v_4.appendChild($v_5);
    var $v_6 = $v_2.createElement('TD');

    $v_6.className = $v_0 + 'Table' + '-default';
    RTE.RteUtility.$3D($v_6);
    $v_5.appendChild($v_6);
    for (var $v_7 = 1; $v_7 < $p0.columns; $v_7++) {
        $v_5.appendChild($v_6.cloneNode(true));
    }
    for (var $v_8 = 1; $v_8 < $p0.rows; $v_8++) {
        $v_4.appendChild($v_5.cloneNode(true));
    }
    $v_3.appendChild($v_4);
    $v_3.className = $v_0 + 'Table' + '-default';
    if ($v_5 && $v_5.childNodes.length > 0) {
        $v_6 = $v_5.firstChild;
    }
    RTE.RteUtility.$6V($v_3, $v_1);
    if (!$p0.commandType && $v_6) {
        (RTE.Cursor.get_range()).moveToEndOfNode($v_6);
        RTE.Cursor.update();
    }
    if ($v_3.parentNode === RTE.Canvas.currentEditableRegion() && !RTE.RteUtility.$t($v_3, false)) {
        var $v_9 = $v_3.ownerDocument.createElement('P');

        SP.UI.UIUtility.insertAfter($v_9, $v_3);
    }
    if (RTE.Canvas.setTableWidths) {
        RTE.TableCommands.$EG($v_3);
    }
};
RTE.TableCommands.$EG = function RTE_TableCommands$$EG($p0) {
    var $v_0 = $p0;

    if ($p0.firstChild && $p0.firstChild.nodeType === 1 && $p0.firstChild.tagName === 'TBODY') {
        $v_0 = $p0.firstChild;
    }
    if ($v_0.childNodes.length > 0 && $v_0.childNodes[0].childNodes.length > 0) {
        var $v_1 = $v_0.childNodes[0];
        var $v_2 = $v_1.childNodes.length;

        for (var $v_3 = 0; $v_3 < $v_2; $v_3++) {
            if (RTE.SU.$2($v_1.childNodes[$v_3].style.width)) {
                var $v_4 = 100 / $v_2;
                var $v_5 = $v_4 + '%';

                $v_1.childNodes[$v_3].style.width = $v_5;
            }
        }
    }
};
RTE.TableCommands.$CQ = function RTE_TableCommands$$CQ($p0, $p1, $p2) {
    var $v_0 = $p1.cloneNode(false);
    var $v_1 = $p1.rowIndex;

    for (var $v_5 = 0; $v_5 < $v_1; $v_5++) {
        var $v_6 = $p0.rows[$v_5];
        var $v_7 = $v_6.cells;

        for (var $v_8 = 0; $v_8 < $v_7.length; $v_8++) {
            var $v_9 = $v_7[$v_8];

            if ($v_5 + $v_9.rowSpan >= $v_1 + 1) {
                $v_9.rowSpan = $v_9.rowSpan + 1;
            }
        }
    }
    if ($p2) {
        SP.UI.UIUtility.insertBefore($v_0, $p1);
    }
    else {
        SP.UI.UIUtility.insertAfter($v_0, $p1);
    }
    var $v_2 = RTE.TableCommands.hasHeaderRow($p0);
    var $v_3 = RTE.TableCommands.hasFooterRow($p0);

    RTE.TableCommands.$9r($p0, $v_1, false);
    var $v_4 = $p1.cells;

    for (var $v_A = 0; $v_A < $v_4.length; $v_A++) {
        var $v_B = $v_4[$v_A].cloneNode(false);

        RTE.RteUtility.$3D($v_B);
        $v_B.rowSpan = 1;
        $v_0.appendChild($v_B);
    }
    RTE.TableCommands.setHeaderRow($p0, $v_2);
    RTE.TableCommands.setFooterRow($p0, $v_3);
    return $v_0;
};
RTE.TableCommands.insertRow = function RTE_TableCommands$insertRow($p0) {
    var $v_0 = RTE.Cursor.getNearestContainingElementOfType('TR');

    if (!$v_0) {
        return;
    }
    var $v_1 = RTE.RteUtility.$G($v_0, 'TABLE');

    if (!$v_1) {
        return;
    }
    if (!RTE.Canvas.isEditable($v_1)) {
        return;
    }
    var $v_2 = RTE.TableCommands.$CQ($v_1, $v_0, $p0);

    RTE.TableCommands.$25($v_1);
    var $v_3 = RTE.Cursor.get_range();
    var $v_4 = RTE.RteUtility.$I8();

    if ($v_4 === 'rtl') {
        $v_3.moveToNode($v_2.childNodes[$v_2.childNodes.length - 1]);
    }
    else {
        $v_3.moveToNode($v_2.childNodes[0]);
    }
    RTE.Cursor.update();
};
RTE.TableCommands.insertColumn = function RTE_TableCommands$insertColumn($p0) {
    var $v_0 = RTE.Cursor.$1G(RTE.HtmlTagName.tableCellTagNames);

    if (!$v_0) {
        return;
    }
    var $v_1 = RTE.RteUtility.$G($v_0, 'TABLE');

    if (!$v_1) {
        return;
    }
    if (!RTE.Canvas.isEditable($v_1)) {
        return;
    }
    if ((RTE.ParagraphCommands.queryDirection(false)).get_commandOn()) {
        $p0 = !$p0;
    }
    var $v_2 = RTE.TableCommands.$x($v_1, $v_0, false);
    var $v_3 = $v_2.targetCellColSpanIndex;
    var $v_4 = $v_0.colSpan;
    var $v_5 = RTE.TableCommands.hasFirstColumn($v_1);
    var $v_6 = RTE.TableCommands.hasLastColumn($v_1);

    RTE.TableCommands.$9l($v_1, $v_2, $v_3, false);
    $v_2 = RTE.TableCommands.$x($v_1, $v_0, false);
    var $v_7 = [];
    var $v_8 = [];

    for (var $v_C = 0; $v_C < $v_1.rows.length * 2; $v_C++) {
        var $v_D = $v_2.columns[$v_3].cells[$v_C];

        if (!RTE.SU.$7($v_D)) {
            if (!Array.contains($v_7, $v_D.cell)) {
                Array.add($v_7, $v_D.cell);
                Array.add($v_8, $v_D.colSpanIndex);
            }
        }
    }
    var $v_9 = null;
    var $v_A;
    var $v_B = RTE.Cursor.get_range();

    if ($p0) {
        for (var $v_E = 0; $v_E < $v_7.length; $v_E++) {
            var $v_F = $v_7[$v_E];
            var $v_G = $v_8[$v_E];

            if ($v_G === $v_3) {
                $v_A = $v_F.cloneNode(false);
                $v_A.colSpan = 1;
                RTE.RteUtility.$3D($v_A);
                SP.UI.UIUtility.insertBefore($v_A, $v_F);
                if (!$v_9) {
                    $v_9 = $v_A;
                    $v_B.moveToNode($v_9);
                }
            }
            else {
                $v_F.colSpan = $v_F.colSpan + 1;
            }
        }
    }
    else {
        for (var $v_H = 0; $v_H < $v_7.length; $v_H++) {
            var $v_I = $v_7[$v_H];
            var $v_J = $v_8[$v_H];

            if ($v_J + $v_I.colSpan === $v_3 + $v_4) {
                $v_A = $v_I.cloneNode(false);
                $v_A.colSpan = 1;
                RTE.RteUtility.$3D($v_A);
                SP.UI.UIUtility.insertAfter($v_A, $v_I);
                if (!$v_9) {
                    $v_9 = $v_A;
                    $v_B.moveToNode($v_9);
                }
            }
            else {
                $v_I.colSpan = $v_I.colSpan + 1;
            }
        }
    }
    RTE.TableCommands.setFirstColumn($v_1, $v_5);
    RTE.TableCommands.setLastColumn($v_1, $v_6);
    RTE.TableCommands.$25($v_1);
    (RTE.Cursor.get_range()).resetCacheRange();
    RTE.Cursor.update();
};
RTE.TableCommands.deleteColumn = function RTE_TableCommands$deleteColumn() {
    var $v_0 = RTE.Cursor.$1G(RTE.HtmlTagName.tableCellTagNames);

    if (!$v_0) {
        return;
    }
    var $v_1 = RTE.RteUtility.$G($v_0, 'TR');

    if (!$v_1) {
        return;
    }
    var $v_2 = RTE.RteUtility.$G($v_1, 'TABLE');

    if (!$v_2) {
        return;
    }
    if (!RTE.Canvas.isEditable($v_2)) {
        return;
    }
    var $v_3 = RTE.TableCommands.$x($v_2, $v_0, false);
    var $v_4 = $v_3.targetCellColSpanIndex;
    var $v_5 = $v_0.colSpan;
    var $v_6 = [];
    var $v_7 = [];

    for (var $v_8 = 0; $v_8 < $v_2.rows.length * 2; $v_8++) {
        var $v_9 = $v_3.columns[$v_4].cells[$v_8];

        if (!RTE.SU.$7($v_9)) {
            if (!Array.contains($v_6, $v_9.cell)) {
                Array.add($v_6, $v_9.cell);
                Array.add($v_7, $v_9.colSpanIndex);
            }
        }
    }
    for (var $v_A = 0; $v_A < $v_6.length; $v_A++) {
        var $v_B = $v_6[$v_A];
        var $v_C = $v_7[$v_A];
        var $v_D = RTE.TableCommands.$8U($v_4, $v_5, $v_C, $v_B.colSpan);

        if ($v_D === $v_B.colSpan) {
            $v_B.parentNode.removeChild($v_B);
        }
        else {
            $v_B.colSpan = $v_B.colSpan - $v_D;
        }
    }
    for (var $v_E = $v_2.rows.length - 1; $v_E >= 0; $v_E--) {
        var $v_F = $v_2.rows[$v_E];
        var $v_G = $v_F.cells;

        if (!$v_G.length) {
            $v_F.parentNode.removeChild($v_F);
        }
    }
    if (!$v_2.rows.length) {
        (RTE.Cursor.get_range()).moveAfterNode($v_2);
        $v_2.parentNode.removeChild($v_2);
    }
    else {
        RTE.TableCommands.$25($v_2);
        var $v_H = 0;
        var $v_I = 0;
        var $v_J = $v_2.rows[0].cells;

        for (var $v_M = 0; $v_M < $v_J.length; $v_M++) {
            $v_H = $v_M;
            var $v_N = RTE.TableCommands.$3r($v_J[$v_M]);

            if ($v_I + $v_N > $v_4) {
                break;
            }
            $v_I += $v_N;
        }
        var $v_K = RTE.Cursor.get_range();
        var $v_L = $v_J[$v_H];

        $v_K.moveToStartOfNode($v_L);
    }
    RTE.Cursor.update();
};
RTE.TableCommands.$3r = function RTE_TableCommands$$3r($p0) {
    return $p0.colSpan;
};
RTE.TableCommands.$9m = function RTE_TableCommands$$9m($p0, $p1) {
    $p0.setAttribute('colSpan', $p1);
};
RTE.TableCommands.$Ib = function RTE_TableCommands$$Ib() {
    var $v_0 = [];
    var $v_1 = RTE.Cursor.getNearestContainingElementOfType('TR');

    if (!$v_1) {
        return $v_0;
    }
    var $v_2 = RTE.Cursor.get_range();
    var $v_3 = $v_2.$4_0;
    var $v_4 = $v_2.$3_0;
    var $v_5 = $v_1.cells;
    var $v_6 = false;
    var $v_7 = false;

    for (var $v_8 = 0; $v_8 < $v_5.length; $v_8++) {
        if (!$v_6) {
            $v_6 = RTE.RteUtility.$b($v_3, $v_5[$v_8], $v_1);
        }
        if ($v_6 && !$v_7) {
            Array.add($v_0, $v_5[$v_8]);
        }
        if (!$v_7) {
            $v_7 = RTE.RteUtility.$b($v_4, $v_5[$v_8], $v_1);
        }
        if ($v_7) {
            break;
        }
    }
    return $v_0;
};
RTE.TableCommands.splitHorizontal = function RTE_TableCommands$splitHorizontal() {
    var $v_0 = RTE.Cursor.$1G(RTE.HtmlTagName.tableCellTagNames);

    if (!$v_0) {
        return;
    }
    var $v_1 = RTE.RteUtility.$G($v_0, 'TR');

    if (!$v_1) {
        return;
    }
    var $v_2 = RTE.RteUtility.$G($v_1, 'TABLE');

    if (!$v_2) {
        return;
    }
    if (!RTE.Canvas.isEditable($v_2)) {
        return;
    }
    var $v_3 = $v_0.cloneNode(false);

    RTE.RteUtility.$3D($v_3);
    var $v_4 = RTE.TableCommands.$3r($v_0);

    if ($v_4 > 1) {
        RTE.TableCommands.$9m($v_3, Math.floor($v_4 / 2));
        RTE.TableCommands.$9m($v_0, $v_4 - RTE.TableCommands.$3r($v_3));
    }
    else {
        var $v_5 = RTE.TableCommands.$x($v_2, $v_0, false);
        var $v_6 = $v_5.targetCellColSpanIndex;
        var $v_7 = [];

        for (var $v_8 = 0; $v_8 < $v_2.rows.length * 2; $v_8++) {
            var $v_9 = $v_5.columns[$v_6].cells[$v_8];

            if (!RTE.SU.$7($v_9)) {
                if (!Array.contains($v_7, $v_9.cell) && $v_9.cell !== $v_0) {
                    Array.add($v_7, $v_9.cell);
                }
            }
        }
        for (var $v_A = 0; $v_A < $v_7.length; $v_A++) {
            var $v_B = $v_7[$v_A];

            $v_B.colSpan = $v_B.colSpan + 1;
        }
    }
    SP.UI.UIUtility.insertAfter($v_3, $v_0);
    (RTE.Cursor.get_range()).moveToStartOfNode($v_3);
    RTE.TableCommands.$25($v_2);
    RTE.Cursor.update();
};
RTE.TableCommands.splitVertical = function RTE_TableCommands$splitVertical() {
    var $v_0 = RTE.Cursor.$1G(RTE.HtmlTagName.tableCellTagNames);

    if (!$v_0) {
        return;
    }
    var $v_1 = RTE.RteUtility.$G($v_0, 'TR');

    if (!$v_1) {
        return;
    }
    var $v_2 = RTE.RteUtility.$G($v_1, 'TABLE');

    if (!$v_2) {
        return;
    }
    if (!RTE.Canvas.isEditable($v_2)) {
        return;
    }
    var $v_3 = $v_1.cells;

    if ($v_0.rowSpan > 1) {
        var $v_9 = true;

        for (var $v_A = 0; $v_A < $v_3.length; $v_A++) {
            if ($v_3[$v_A].rowSpan !== $v_0.rowSpan) {
                $v_9 = false;
                break;
            }
        }
        if ($v_9) {
            for (var $v_B = 0; $v_B < $v_3.length; $v_B++) {
                $v_3[$v_B].rowSpan = 1;
            }
        }
    }
    var $v_4 = $v_1.rowIndex;
    var $v_5 = $v_0.cloneNode(false);

    RTE.RteUtility.$3D($v_5);
    var $v_6 = RTE.TableCommands.$x($v_2, $v_0, false);
    var $v_7 = $v_6.targetCellColSpanIndex;
    var $v_8 = $v_0.rowSpan;

    if ($v_8 > 1) {
        var $v_C = Math.floor($v_8 / 2);
        var $v_D = $v_1;

        for (var $v_H = 0; $v_H < $v_C; $v_H++) {
            if ($v_D) {
                $v_D = $v_D.nextSibling;
            }
        }
        if (!$v_D) {
            return;
        }
        var $v_E = 0;
        var $v_F = $v_D.cells;
        var $v_G = null;

        for (var $v_I = 0; $v_I < $v_F.length; $v_I++) {
            var $v_J = $v_F[$v_I];

            $v_E += RTE.TableCommands.$3r($v_J);
            if ($v_E > $v_7) {
                $v_G = $v_J;
                break;
            }
        }
        $v_5.rowSpan = $v_8 - $v_C;
        $v_0.rowSpan = $v_C;
        if (!$v_G) {
            $v_D.appendChild($v_5);
        }
        else {
            SP.UI.UIUtility.insertBefore($v_5, $v_G);
        }
    }
    else {
        var $v_K = $v_1.cloneNode(false);

        SP.UI.UIUtility.insertAfter($v_K, $v_1);
        $v_K.appendChild($v_5);
        for (var $v_L = 0; $v_L < $v_4 + 1 && $v_L < $v_2.rows.length; $v_L++) {
            var $v_M = $v_2.rows[$v_L];
            var $v_N = $v_M.cells;

            for (var $v_O = 0; $v_O < $v_N.length; $v_O++) {
                var $v_P = $v_N[$v_O];

                if ($v_P !== $v_0 && $v_P.rowSpan + $v_L === $v_4 + 1) {
                    $v_P.rowSpan = $v_P.rowSpan + 1;
                }
            }
        }
    }
    (RTE.Cursor.get_range()).moveToStartOfNode($v_5);
    RTE.TableCommands.$25($v_2);
    RTE.Cursor.update();
};
RTE.TableCommands.mergeCells = function RTE_TableCommands$mergeCells() {
    var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Table');

    if (!$v_0) {
        return;
    }
    if (!RTE.Canvas.isEditable($v_0)) {
        return;
    }
    if (RTE.Cursor.$JF('TR')) {
        RTE.TableCommands.$DA();
    }
    else {
        RTE.TableCommands.$5O(0);
    }
};
RTE.TableCommands.mergeWithRight = function RTE_TableCommands$mergeWithRight() {
    RTE.TableCommands.$5O(1);
};
RTE.TableCommands.mergeWithLeft = function RTE_TableCommands$mergeWithLeft() {
    RTE.TableCommands.$5O(2);
};
RTE.TableCommands.mergeWithAbove = function RTE_TableCommands$mergeWithAbove() {
    RTE.TableCommands.$5O(3);
};
RTE.TableCommands.mergeWithBelow = function RTE_TableCommands$mergeWithBelow() {
    RTE.TableCommands.$5O(4);
};
RTE.TableCommands.$5O = function RTE_TableCommands$$5O($p0) {
    RTE.TableCommands.$DA();
    var $v_0 = RTE.Cursor.getCurrentElement();

    if (!$v_0) {
        return;
    }
    var $v_1 = RTE.RteUtility.$2d($v_0, RTE.HtmlTagName.tableCellTagNames);

    if (!$v_1) {
        return;
    }
    var $v_2 = RTE.RteUtility.$G($v_1, 'TR');

    if (!$v_2) {
        return;
    }
    var $v_3 = RTE.RteUtility.$G($v_2, 'TABLE');

    if (!$v_3) {
        return;
    }
    if (!RTE.Canvas.isEditable($v_3)) {
        return;
    }
    var $v_4 = $v_2.cells;
    var $v_5 = (RTE.ParagraphCommands.queryDirection(false)).get_commandOn();

    if ($v_5) {
        if (1 === $p0) {
            $p0 = 2;
        }
        else if (2 === $p0) {
            $p0 = 1;
        }
    }
    var $v_6;

    if (1 === $p0) {
        $v_6 = $v_1.cellIndex;
        if ($v_6 + 1 >= $v_4.length) {
            return;
        }
        if ($v_4[$v_6 + 1].rowSpan === $v_4[$v_6].rowSpan) {
            RTE.TableCommands.$6v($v_3, $v_2, $v_6);
        }
        else {
            alert(SP.Res.invalidMerge);
        }
    }
    else if (2 === $p0) {
        $v_6 = $v_1.cellIndex - 1;
        if ($v_6 < 0) {
            return;
        }
        if ($v_4[$v_6 + 1].rowSpan === $v_4[$v_6].rowSpan) {
            RTE.TableCommands.$6v($v_3, $v_2, $v_6);
        }
        else {
            alert(SP.Res.invalidMerge);
        }
    }
    else if (3 === $p0) {
        if (!$v_2.rowIndex) {
            return;
        }
        var $v_7 = $v_2;
        var $v_8 = $v_1;
        var $v_9 = $v_2.rowIndex;
        var $v_A = RTE.TableCommands.$x($v_3, $v_1, true);
        var $v_B = $v_A.targetCellColSpanIndex;
        var $v_C = $v_A.columns[$v_B].cells[$v_9 - 1];
        var $v_D = $v_C.cell;

        if ($v_8.colSpan === $v_D.colSpan && $v_C.colSpanIndex === $v_B) {
            RTE.TableCommands.$DB($v_3, $v_7, $v_8, $v_D);
        }
        else {
            alert(SP.Res.invalidMerge);
        }
    }
    else if (4 === $p0) {
        var $v_E = $v_1;
        var $v_F = RTE.TableCommands.$x($v_3, $v_E, false);
        var $v_G = $v_F.targetCellColSpanIndex;
        var $v_H = $v_2.rowIndex;
        var $v_I = $v_F.columns[$v_G].cells[$v_H + $v_E.rowSpan];

        if (!$v_I) {
            return;
        }
        var $v_J = $v_I.cell;
        var $v_K = RTE.RteUtility.$G($v_J, 'TR');

        if (!$v_K) {
            return;
        }
        if ($v_J.colSpan === $v_E.colSpan && $v_I.colSpanIndex === $v_G) {
            RTE.TableCommands.$DB($v_3, $v_K, $v_J, $v_E);
        }
        else {
            alert(SP.Res.invalidMerge);
        }
    }
    else if (0 === $p0) {
        var $v_L = $v_1.cellIndex;

        if ($v_4[$v_L] && $v_4[$v_L + 1]) {
            if ($v_5 && ($v_L === $v_4.length - 1 || $v_L)) {
                var $v_M = $v_L - 1;

                if ($v_M < 0) {
                    return;
                }
                RTE.TableCommands.$6v($v_3, $v_2, $v_M);
            }
            else {
                if ($v_L + 1 >= $v_4.length) {
                    return;
                }
                RTE.TableCommands.$6v($v_3, $v_2, $v_L);
            }
        }
    }
};
RTE.TableCommands.$6v = function RTE_TableCommands$$6v($p0, $p1, $p2) {
    RTE.RteUtility.$J((RTE.Cursor.get_range()).$4_0);
    RTE.RteUtility.$J((RTE.Cursor.get_range()).$3_0);
    var $v_0 = $p1.cells;
    var $v_1 = $v_0[$p2];
    var $v_2 = $v_0[$p2 + 1];
    var $v_3 = $v_1.innerHTML;

    if ($v_3.length > 0) {
        $v_3 += ' ';
    }
    $v_3 += $v_2.innerHTML;
    RTE.RteUtility.$2r($v_1, $v_3);
    $v_1.colSpan += $v_2.colSpan;
    $p1.removeChild($v_2);
    (RTE.Cursor.get_range()).moveToStartOfNode($v_1);
    RTE.TableCommands.$25($p0);
    RTE.Cursor.update();
};
RTE.TableCommands.$DB = function RTE_TableCommands$$DB($p0, $p1, $p2, $p3) {
    RTE.RteUtility.$J((RTE.Cursor.get_range()).$4_0);
    RTE.RteUtility.$J((RTE.Cursor.get_range()).$3_0);
    var $v_0 = $p3.innerHTML;

    if ($v_0.length > 0) {
        $v_0 += ' ';
    }
    $v_0 += $p2.innerHTML;
    RTE.RteUtility.$2r($p3, $v_0);
    $p3.rowSpan += $p2.rowSpan;
    $p1.removeChild($p2);
    (RTE.Cursor.get_range()).moveToStartOfNode($p3);
    RTE.TableCommands.$25($p0);
    RTE.Cursor.update();
};
RTE.TableCommands.deleteCell = function RTE_TableCommands$deleteCell() {
    var $v_0 = RTE.Cursor.$1G(RTE.HtmlTagName.tableCellTagNames);

    if (!$v_0) {
        return;
    }
    var $v_1 = RTE.RteUtility.$G($v_0, 'TR');

    if (!$v_1) {
        return;
    }
    var $v_2 = RTE.RteUtility.$G($v_0, 'TABLE');

    if (!$v_2) {
        return;
    }
    if (!RTE.Canvas.isEditable($v_2)) {
        return;
    }
    var $v_3 = $v_1.cells;

    if ($v_3.length <= 1) {
        RTE.TableCommands.deleteRow();
        return;
    }
    var $v_4 = $v_0.nextSibling;
    var $v_5 = $v_0.previousSibling;
    var $v_6;

    if ($v_4 && $v_4.rowSpan === $v_0.rowSpan) {
        $v_4.colSpan = $v_4.colSpan + $v_0.colSpan;
        $v_6 = $v_4;
    }
    else if ($v_5 && $v_5.rowSpan === $v_0.rowSpan) {
        $v_5.colSpan = $v_5.colSpan + $v_0.colSpan;
        $v_6 = $v_5;
    }
    else {
        var $v_7 = $v_1.rowIndex;
        var $v_8 = RTE.TableCommands.$x($v_2, $v_0, true);
        var $v_9;

        $v_9 = $v_8.columns[$v_8.targetCellColSpanIndex].cells[$v_7 - 1];
        if (!RTE.SU.$7($v_9) && $v_9.colSpanIndex === $v_8.targetCellColSpanIndex && $v_9.cell.colSpan === $v_0.colSpan) {
            $v_9.cell.rowSpan = $v_9.cell.rowSpan + $v_0.rowSpan;
            $v_6 = $v_9.cell;
        }
        else {
            if ($v_4) {
                $v_6 = $v_4;
            }
            else {
                $v_6 = $v_5;
            }
        }
    }
    (RTE.Cursor.get_range()).moveToStartOfNode($v_6);
    $v_0.parentNode.removeChild($v_0);
    RTE.TableCommands.$25($v_2);
    RTE.Cursor.update();
};
RTE.TableCommands.deleteTable = function RTE_TableCommands$deleteTable() {
    var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Table');

    if (!$v_0) {
        return;
    }
    if (!RTE.Canvas.isEditable($v_0)) {
        return;
    }
    (RTE.Cursor.get_range()).moveAfterNode($v_0);
    $v_0.parentNode.removeChild($v_0);
    RTE.Cursor.update();
    RTE.Canvas.$P();
};
RTE.TableCommands.$IS = function RTE_TableCommands$$IS($p0) {
    var $v_0 = $p0.parentNode;

    return $v_0.rowIndex;
};
RTE.TableCommands.$8U = function RTE_TableCommands$$8U($p0, $p1, $p2, $p3) {
    if ($p0 === $p2) {
        return $p1 < $p3 ? $p1 : $p3;
    }
    if ($p0 > $p2) {
        return RTE.TableCommands.$8U($p2, $p3, $p0, $p1);
    }
    if ($p2 > $p0 + $p1) {
        return 0;
    }
    else {
        if ($p2 + $p3 <= $p0 + $p1) {
            return $p3;
        }
        return $p0 + $p1 - $p2;
    }
};
RTE.TableCommands.deleteRow = function RTE_TableCommands$deleteRow() {
    var $v_0 = RTE.Cursor.$1G(RTE.HtmlTagName.tableCellTagNames);

    if (!$v_0) {
        return;
    }
    var $v_1 = RTE.RteUtility.$G($v_0, 'TR');

    if (!$v_1) {
        return;
    }
    var $v_2 = RTE.RteUtility.$G($v_1, 'TABLE');

    if (!$v_2) {
        return;
    }
    var $v_3 = $v_1.rowIndex;
    var $v_4 = !$v_3 && RTE.TableCommands.hasHeaderRow($v_2);

    RTE.TableCommands.$CR($v_1, $v_2, true);
    RTE.TableCommands.$CW($v_4, $v_2);
    (RTE.Cursor.get_range()).resetCacheRange();
    RTE.Cursor.update();
};
RTE.TableCommands.$CR = function RTE_TableCommands$$CR($p0, $p1, $p2) {
    if (!RTE.Canvas.isEditable($p1)) {
        return;
    }
    if ($p1.rows.length === 1) {
        if ($p2) {
            (RTE.Cursor.get_range()).moveAfterNode($p1);
        }
        $p1.parentNode.removeChild($p1);
    }
    else {
        var $v_0 = $p0.rowIndex;
        var $v_1 = !$v_0 && RTE.Canvas.setTableWidths;
        var $v_2 = RTE.TableCommands.$x($p1, null, false);
        var $v_3 = [];

        for (var $v_4 = 0; $v_4 < $v_2.totalColSpan; $v_4++) {
            for (var $v_5 = $v_0; $v_5 < $v_0 + 1; $v_5++) {
                var $v_6 = $v_2.columns[$v_4];

                if (!RTE.SU.$7($v_6)) {
                    var $v_7 = $v_6.cells[$v_5];

                    if (!RTE.SU.$7($v_7)) {
                        if (!Array.contains($v_3, $v_7.cell)) {
                            Array.add($v_3, $v_7.cell);
                        }
                        if (!RTE.SU.$2($v_7.cell.style.width) && $v_1 && $v_5 + 1 < $v_6.cells.length) {
                            var $v_8 = $v_6.cells[$v_5 + 1];

                            if (!RTE.SU.$7($v_8) && RTE.SU.$2($v_8.cell.style.width)) {
                                $v_8.cell.style.width = $v_8.cell.offsetWidth + 'px';
                            }
                        }
                    }
                }
            }
        }
        for (var $v_9 = 0; $v_9 < $v_3.length; $v_9++) {
            var $v_A = $v_3[$v_9];
            var $v_B = RTE.TableCommands.$IS($v_A);
            var $v_C = RTE.TableCommands.$8U($v_0, 1, $v_B, $v_A.rowSpan);

            if ($v_C === $v_A.rowSpan) {
                $v_A.parentNode.removeChild($v_A);
            }
            else {
                $v_A.rowSpan = $v_A.rowSpan - $v_C;
            }
        }
        for (var $v_D = $p1.rows.length - 1; $v_D >= 0; $v_D--) {
            var $v_E = $p1.rows[$v_D];
            var $v_F = $p1.rows[$v_D].cells;

            if (!$v_F.length) {
                $v_E.parentNode.removeChild($v_E);
            }
        }
        if ($p2) {
            if (!$p1.rows.length) {
                (RTE.Cursor.get_range()).moveAfterNode($p1);
                $p1.parentNode.removeChild($p1);
            }
            else {
                var $v_G = null;

                if ($v_0 >= $p1.rows.length) {
                    $v_G = $p1.rows[$p1.rows.length - 1];
                }
                else {
                    $v_G = $p1.rows[$v_0];
                }
                (RTE.Cursor.get_range()).moveToNode($v_G.childNodes[0]);
            }
        }
    }
};
RTE.TableCommands.$CW = function RTE_TableCommands$$CW($p0, $p1) {
    if ($p0) {
        RTE.TableCommands.setHeaderRow($p1, true);
    }
    else {
        RTE.TableCommands.$25($p1);
    }
};
RTE.TableCommands.$DA = function RTE_TableCommands$$DA() {
    var $v_0 = RTE.Cursor.getCurrentElement();

    if (!$v_0) {
        return;
    }
    if ($v_0.tagName !== 'TR') {
        return;
    }
    var $v_1 = RTE.RteUtility.$G($v_0, 'TABLE');

    if (!$v_1) {
        return;
    }
    if (!RTE.Canvas.isEditable($v_1)) {
        return;
    }
    var $v_2 = RTE.TableCommands.$Ib();

    if ($v_2.length > 1) {
        var $v_3 = $v_2[0];
        var $v_4 = new Sys.StringBuilder();

        $v_4.append($v_3.innerHTML);
        var $v_5 = RTE.TableCommands.$3r($v_3);

        for (var $v_7 = 1; $v_7 < $v_2.length; $v_7++) {
            $v_4.append(' ');
            $v_4.append($v_2[$v_7].innerHTML);
            $v_5 += RTE.TableCommands.$3r($v_2[$v_7]);
            $v_0.removeChild($v_2[$v_7]);
        }
        RTE.RteUtility.$2r($v_3, $v_4.toString());
        RTE.TableCommands.$9m($v_3, $v_5);
        var $v_6 = RTE.Cursor.get_range();

        $v_6.moveToStartOfNode($v_3);
        RTE.TableCommands.$25($v_1);
        RTE.Cursor.update();
    }
};
RTE.TableCommands.showInsertTableDialog = function RTE_TableCommands$showInsertTableDialog() {
    RTE.RteUtility.classMustExist('SP.UI.ModalDialog');
    RTE.RteUtility.classMustExist('SP.Utilities.Utility');
    RTE.RteUtility.classMustExist('SP.PageContextInfo');
    (RTE.PreviewManager.get_instance()).endPreview();
    var $v_0 = new SP.UI.DialogOptions();
    var $v_1 = SP.PageContextInfo.get_currentLanguage();

    $v_0.url = SP.Utilities.Utility.getLayoutsPageUrl('RteDialog.aspx?LCID=' + $v_1.toString() + '&Dialog=InsertTable&UseDivDialog=true');
    $v_0.autoSizeStartWidth = 300;
    $v_0.autoSize = true;
    $v_0.dialogReturnValueCallback = RTE.TableCommands.$LN;
    SP.UI.ModalDialog.showModalDialog($v_0);
};
RTE.TableCommands.$LN = function RTE_TableCommands$$LN($p0, $p1) {
    if ($p0 === 1) {
        var $v_0 = $p1;
        var $v_1 = $v_0[0];
        var $v_2 = $v_0[1];

        if (typeof $v_0[0] === 'string') {
            $v_1 = parseInt($v_0[0]);
        }
        if (typeof $v_0[1] === 'string') {
            $v_2 = parseInt($v_0[1]);
        }
        var $v_3 = new RTE.InsertTableOptions();

        $v_3.columns = $v_1;
        $v_3.rows = $v_2;
        $v_3.commandType = 0;
        RTE.TableCommands.insertTable($v_3);
    }
};
RTE.TableCommands.$x = function RTE_TableCommands$$x($p0, $p1, $p2) {
    var $v_0 = new RTE.TableGrid();

    $v_0.columns = [];
    $v_0.targetCellColSpanIndex = -1;
    $v_0.totalColSpan = -1;
    for (var $v_1 = 0; $v_1 < $p0.rows.length; $v_1++) {
        var $v_2 = 0;
        var $v_3 = $p0.rows[$v_1].cells;

        for (var $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
            while ($v_0.columns[$v_2] && $v_0.columns[$v_2].cells[$v_1]) {
                $v_2++;
            }
            if (!$v_0.columns[$v_2]) {
                $v_0.columns[$v_2] = new RTE.TableColumnInfo();
                $v_0.columns[$v_2].cells = [];
            }
            var $v_5 = $v_3[$v_4];

            if ($v_5 === $p1) {
                $v_0.targetCellColSpanIndex = $v_2;
            }
            $v_0.columns[$v_2].cells[$v_1] = new RTE.TableCellInfo();
            $v_0.columns[$v_2].cells[$v_1].cell = $v_5;
            $v_0.columns[$v_2].cells[$v_1].colSpanIndex = $v_2;
            for (var $v_6 = 0; $v_6 < $v_5.colSpan; $v_6++) {
                if (!$v_0.columns[$v_2 + $v_6]) {
                    $v_0.columns[$v_2 + $v_6] = new RTE.TableColumnInfo();
                    $v_0.columns[$v_2 + $v_6].cells = [];
                }
                for (var $v_7 = 0; $v_7 < $v_5.rowSpan; $v_7++) {
                    $v_0.columns[$v_2 + $v_6].cells[$v_1 + $v_7] = new RTE.TableCellInfo();
                    $v_0.columns[$v_2 + $v_6].cells[$v_1 + $v_7].cell = $v_5;
                    $v_0.columns[$v_2 + $v_6].cells[$v_1 + $v_7].colSpanIndex = $v_2;
                }
            }
            $v_2 += $v_5.colSpan;
            if ($p2) {
                if ($v_0.targetCellColSpanIndex !== -1 && $v_2 > $v_0.targetCellColSpanIndex + $p1.colSpan && $v_1 !== $p1.parentNode.rowIndex + $p1.rowSpan - 1) {
                    break;
                }
            }
        }
        if ($v_2 > $v_0.totalColSpan) {
            $v_0.totalColSpan = $v_2;
        }
    }
    return $v_0;
};
RTE.TableCommands.queryTableWidth = function RTE_TableCommands$queryTableWidth() {
    var $v_0 = new RTE.CommandState();
    var $v_1 = RTE.CanvasEvents.getNodeFromEvent('Table');

    if (!$v_1 || !RTE.Canvas.isEditable($v_1)) {
        return $v_0;
    }
    $v_0.$B_0 = true;
    var $v_2 = $v_1.style.width;

    if (RTE.SU.$2($v_2)) {
        $v_2 = $v_1.width;
    }
    if (RTE.SU.$2($v_2) || !RTE.RteUtility.$3F(RTE.TableCommands.$5n, $v_2)) {
        $v_2 = $v_1.offsetWidth.toString() + 'px';
    }
    $v_0.$C_0 = $v_2;
    return $v_0;
};
RTE.TableCommands.queryTableHeight = function RTE_TableCommands$queryTableHeight() {
    var $v_0 = new RTE.CommandState();
    var $v_1 = RTE.CanvasEvents.getNodeFromEvent('Table');

    if (!$v_1 || !RTE.Canvas.isEditable($v_1)) {
        return $v_0;
    }
    $v_0.$B_0 = true;
    var $v_2 = $v_1.style.height;

    if (RTE.SU.$2($v_2)) {
        $v_2 = $v_1.height;
    }
    if (RTE.SU.$2($v_2) || !RTE.RteUtility.$3F(RTE.TableCommands.$5n, $v_2)) {
        $v_2 = $v_1.offsetHeight.toString() + 'px';
    }
    $v_0.$C_0 = $v_2;
    return $v_0;
};
RTE.TableCommands.queryTableRowHeight = function RTE_TableCommands$queryTableRowHeight() {
    var $v_0 = new RTE.CommandState();
    var $v_1 = RTE.Cursor.$1G(RTE.HtmlTagName.tableCellTagNames);

    if (!$v_1 || !RTE.Canvas.isEditable($v_1)) {
        return $v_0;
    }
    var $v_2 = RTE.RteUtility.$G($v_1, 'TABLE');

    if (!$v_2 || !RTE.Canvas.isEditable($v_2)) {
        return $v_0;
    }
    $v_0.$B_0 = true;
    var $v_3 = $v_1.style.height;

    if (RTE.SU.$2($v_3) || !RTE.RteUtility.$3F(RTE.TableCommands.$5n, $v_3)) {
        $v_3 = $v_1.offsetHeight.toString() + 'px';
    }
    $v_0.$C_0 = $v_3;
    return $v_0;
};
RTE.TableCommands.queryTableColumnWidth = function RTE_TableCommands$queryTableColumnWidth() {
    var $v_0 = new RTE.CommandState();
    var $v_1 = RTE.Cursor.$1G(RTE.HtmlTagName.tableCellTagNames);

    if (!$v_1 || !RTE.Canvas.isEditable($v_1)) {
        return $v_0;
    }
    var $v_2 = RTE.RteUtility.$G($v_1, 'TABLE');

    if (!$v_2 || !RTE.Canvas.isEditable($v_2)) {
        return $v_0;
    }
    $v_0.$B_0 = true;
    var $v_3 = $v_1.style.width;

    if (RTE.SU.$2($v_3) || !RTE.RteUtility.$3F(RTE.TableCommands.$5n, $v_3)) {
        $v_3 = $v_1.offsetWidth.toString() + 'px';
    }
    $v_0.$C_0 = $v_3;
    return $v_0;
};
RTE.TableCommands.setTableWidth = function RTE_TableCommands$setTableWidth($p0) {
    var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Table');

    if (!$v_0) {
        return;
    }
    if (!RTE.Canvas.isEditable($v_0)) {
        return;
    }
    if (RTE.RteUtility.getAttribute($v_0, 'width')) {
        $v_0.removeAttribute('width');
    }
    RTE.SnapshotManager.setCurrentRegionDirtyIf($v_0.style.width !== $p0);
    $v_0.style.width = $p0;
};
RTE.TableCommands.setTableHeight = function RTE_TableCommands$setTableHeight($p0) {
    var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Table');

    if (!$v_0) {
        return;
    }
    if (!RTE.Canvas.isEditable($v_0)) {
        return;
    }
    if (RTE.RteUtility.getAttribute($v_0, 'height')) {
        $v_0.removeAttribute('height');
    }
    RTE.SnapshotManager.setCurrentRegionDirtyIf($v_0.style.height !== $p0);
    $v_0.style.height = $p0;
};
RTE.TableCommands.setTableColumnWidth = function RTE_TableCommands$setTableColumnWidth($p0) {
    var $v_0 = RTE.Cursor.$1G(RTE.HtmlTagName.tableCellTagNames);

    if (!$v_0) {
        return;
    }
    var $v_1 = RTE.RteUtility.$G($v_0, 'TABLE');

    if (!$v_1) {
        return;
    }
    if (!RTE.Canvas.isEditable($v_1)) {
        return;
    }
    var $v_2 = RTE.TableCommands.$x($v_1, $v_0, false);
    var $v_3 = $v_2.targetCellColSpanIndex;
    var $v_4 = $v_0.colSpan;
    var $v_5 = [];
    var $v_6 = [];

    for (var $v_7 = 0; $v_7 < $v_1.rows.length * 2; $v_7++) {
        var $v_8 = $v_2.columns[$v_3].cells[$v_7];

        if (!RTE.SU.$7($v_8)) {
            if (!Array.contains($v_5, $v_8.cell)) {
                Array.add($v_5, $v_8.cell);
                Array.add($v_6, $v_8.colSpanIndex);
            }
        }
    }
    for (var $v_9 = 0; $v_9 < $v_5.length; $v_9++) {
        var $v_A = $v_5[$v_9];
        var $v_B = $v_6[$v_9];

        if ($v_B === $v_3 && $v_A.colSpan === $v_4) {
            if ($v_A.attributes.getNamedItem('width')) {
                $v_A.removeAttribute('width');
            }
            RTE.SnapshotManager.setCurrentRegionDirtyIf($v_A.style.width !== $p0);
            $v_A.style.width = $p0;
        }
    }
};
RTE.TableCommands.setTableRowHeight = function RTE_TableCommands$setTableRowHeight($p0) {
    var $v_0 = RTE.Cursor.$1G(RTE.HtmlTagName.tableCellTagNames);

    if (!$v_0) {
        return;
    }
    var $v_1 = RTE.RteUtility.$G($v_0, 'TR');

    if (!$v_0) {
        return;
    }
    var $v_2 = RTE.RteUtility.$G($v_1, 'TABLE');

    if (!$v_2) {
        return;
    }
    if (!RTE.Canvas.isEditable($v_2)) {
        return;
    }
    var $v_3 = $v_1.cells;

    for (var $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
        var $v_5 = $v_3[$v_4];

        if ($v_5.rowSpan === $v_0.rowSpan) {
            if (RTE.RteUtility.getAttribute($v_5, 'height')) {
                $v_5.removeAttribute('height');
            }
            RTE.SnapshotManager.setCurrentRegionDirtyIf($v_5.style.height !== $p0);
            $v_5.style.height = $p0;
        }
    }
};
RTE.TableCommands.$Io = function RTE_TableCommands$$Io($p0, $p1) {
    var $v_0 = true;

    for (var $v_1 = 0; $v_1 < $p0.columns.length; $v_1++) {
        var $v_2 = $p0.columns[$v_1].cells;

        if ($v_2 && $p1 < $v_2.length) {
            var $v_3 = $v_2[$p1];

            if ($v_3 && $v_3.cell) {
                if ($v_3.cell.tagName === 'TH') {
                    if ($v_3.colSpanIndex && $v_3.colSpanIndex + $v_3.cell.colSpan !== $p0.totalColSpan) {
                        return true;
                    }
                }
                else {
                    $v_0 = false;
                }
            }
        }
    }
    return $v_0;
};
RTE.TableCommands.$In = function RTE_TableCommands$$In($p0, $p1) {
    var $v_0 = true;

    if ($p1 < $p0.columns.length) {
        var $v_1 = $p0.columns[$p1].cells;

        if ($v_1 && $v_1.length > 0) {
            var $v_2 = null;
            var $v_3 = null;

            if ($v_1[0]) {
                $v_2 = $v_1[0].cell;
            }
            if ($v_1[$v_1.length - 1]) {
                $v_3 = $v_1[$v_1.length - 1].cell;
            }
            for (var $v_4 = 0; $v_4 < $v_1.length; $v_4++) {
                var $v_5 = $v_1[$v_4];

                if ($v_5 && $v_5.cell) {
                    if ($v_5.cell.tagName === 'TH') {
                        if ($v_5.cell !== $v_2 && $v_5.cell !== $v_3) {
                            return true;
                        }
                    }
                    else {
                        $v_0 = false;
                    }
                }
            }
        }
    }
    return $v_0;
};
RTE.TableCommands.$CA = function RTE_TableCommands$$CA($p0, $p1, $p2) {
    if ($p0.rows.length > 0) {
        var $v_0 = $p0.rows[$p2];

        if ($v_0.className.indexOf('Table' + $p1) !== -1) {
            return true;
        }
        else {
            var $v_1 = RTE.TableCommands.$x($p0, null, false);

            return RTE.TableCommands.$Io($v_1, $p2);
        }
    }
    return true;
};
RTE.TableCommands.hasHeaderRow = function RTE_TableCommands$hasHeaderRow($p0) {
    return RTE.TableCommands.$CA($p0, 'Header', 0);
};
RTE.TableCommands.hasFooterRow = function RTE_TableCommands$hasFooterRow($p0) {
    return RTE.TableCommands.$CA($p0, 'Footer', $p0.rows.length - 1);
};
RTE.TableCommands.$C9 = function RTE_TableCommands$$C9($p0, $p1, $p2) {
    if ($p2 < $p0.columns.length) {
        var $v_0 = $p0.columns[$p2].cells;

        if ($v_0) {
            for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                if ($v_0[$v_1] && $v_0[$v_1].cell) {
                    var $v_2 = $v_0[$v_1].cell;

                    if ($v_2.className.indexOf('Table' + $p1) !== -1) {
                        return true;
                    }
                    else if ($v_2.className.indexOf('TableHeader' + $p1) !== -1) {
                        return true;
                    }
                    else if ($v_2.className.indexOf('TableFooter' + $p1) !== -1) {
                        return true;
                    }
                }
            }
            if ($v_0.length > 0) {
                return RTE.TableCommands.$In($p0, $p2);
            }
        }
    }
    return true;
};
RTE.TableCommands.hasFirstColumn = function RTE_TableCommands$hasFirstColumn($p0) {
    var $v_0 = RTE.TableCommands.$x($p0, null, false);

    return RTE.TableCommands.$C9($v_0, 'First', 0);
};
RTE.TableCommands.hasLastColumn = function RTE_TableCommands$hasLastColumn($p0) {
    var $v_0 = RTE.TableCommands.$x($p0, null, false);

    if ($v_0.totalColSpan > 0) {
        return RTE.TableCommands.$C9($v_0, 'Last', $v_0.totalColSpan - 1);
    }
    return false;
};
RTE.TableCommands.$7R = function RTE_TableCommands$$7R($p0, $p1) {
    var $v_0 = null;

    if ($p0.tagName === 'TD' && $p1) {
        $v_0 = document.createElement('TH');
    }
    else if ($p0.tagName === 'TH' && !$p1) {
        $v_0 = document.createElement('TD');
    }
    if ($v_0) {
        RTE.RteUtility.$k($p0, $v_0);
        $v_0.style.cssText = $p0.style.cssText;
        $v_0.className = $p0.className;
        $v_0.rowSpan = $p0.rowSpan;
        $v_0.colSpan = $p0.colSpan;
        $p0.parentNode.replaceChild($v_0, $p0);
    }
};
RTE.TableCommands.$9r = function RTE_TableCommands$$9r($p0, $p1, $p2) {
    if ($p0.rows.length > 0) {
        var $v_0 = RTE.TableCommands.$x($p0, null, false);

        for (var $v_1 = 0; $v_1 < $v_0.columns.length; $v_1++) {
            var $v_2 = $v_0.columns[$v_1].cells;

            if ($v_2 && $p1 < $v_2.length) {
                var $v_3 = $v_2[$p1];

                if ($v_3 && $v_3.cell) {
                    var $v_4 = $v_3.cell;

                    if (!$v_3.colSpanIndex && RTE.TableCommands.hasFirstColumn($p0)) {
                        RTE.TableCommands.$7R($v_4, true);
                    }
                    else {
                        RTE.TableCommands.$7R($v_4, $p2);
                    }
                }
            }
        }
    }
};
RTE.TableCommands.setHeaderRow = function RTE_TableCommands$setHeaderRow($p0, $p1) {
    RTE.TableCommands.$9r($p0, 0, $p1);
    var $v_0 = RTE.TableCommands.$4t($p0);
    var $v_1 = RTE.TableCommands.hasFooterRow($p0);
    var $v_2 = RTE.TableCommands.hasFirstColumn($p0);
    var $v_3 = RTE.TableCommands.hasLastColumn($p0);

    RTE.TableCommands.$5d($p0, $v_0, $p1, $v_1, $v_2, $v_3, false);
    RTE.Cursor.update();
};
RTE.TableCommands.setFooterRow = function RTE_TableCommands$setFooterRow($p0, $p1) {
    if (!$p1) {
        RTE.TableCommands.$9r($p0, $p0.rows.length - 1, $p1);
    }
    var $v_0 = RTE.TableCommands.$4t($p0);
    var $v_1 = RTE.TableCommands.hasHeaderRow($p0);
    var $v_2 = RTE.TableCommands.hasFirstColumn($p0);
    var $v_3 = RTE.TableCommands.hasLastColumn($p0);

    RTE.TableCommands.$5d($p0, $v_0, $v_1, $p1, $v_2, $v_3, false);
    RTE.Cursor.update();
};
RTE.TableCommands.$9l = function RTE_TableCommands$$9l($p0, $p1, $p2, $p3) {
    if ($p2 < $p1.columns.length) {
        var $v_0 = $p1.columns[$p2].cells;

        if ($v_0) {
            for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                var $v_2 = $v_0[$v_1];

                if ($v_2 && $v_2.cell) {
                    var $v_3 = $v_2.cell;

                    if (!$v_1 && RTE.TableCommands.hasHeaderRow($p0)) {
                        RTE.TableCommands.$7R($v_3, true);
                    }
                    else {
                        RTE.TableCommands.$7R($v_3, $p3);
                    }
                }
            }
        }
    }
};
RTE.TableCommands.setFirstColumn = function RTE_TableCommands$setFirstColumn($p0, $p1) {
    var $v_0 = RTE.TableCommands.$x($p0, null, false);

    RTE.TableCommands.$9l($p0, $v_0, 0, $p1);
    var $v_1 = RTE.TableCommands.$4t($p0);
    var $v_2 = RTE.TableCommands.hasHeaderRow($p0);
    var $v_3 = RTE.TableCommands.hasFooterRow($p0);
    var $v_4 = RTE.TableCommands.hasLastColumn($p0);

    RTE.TableCommands.$5d($p0, $v_1, $v_2, $v_3, $p1, $v_4, false);
    RTE.Cursor.update();
};
RTE.TableCommands.setLastColumn = function RTE_TableCommands$setLastColumn($p0, $p1) {
    if (!$p1) {
        var $v_4 = RTE.TableCommands.$x($p0, null, false);

        RTE.TableCommands.$9l($p0, $v_4, $v_4.totalColSpan - 1, $p1);
    }
    var $v_0 = RTE.TableCommands.$4t($p0);
    var $v_1 = RTE.TableCommands.hasHeaderRow($p0);
    var $v_2 = RTE.TableCommands.hasFooterRow($p0);
    var $v_3 = RTE.TableCommands.hasFirstColumn($p0);

    RTE.TableCommands.$5d($p0, $v_0, $v_1, $v_2, $v_3, $p1, false);
    RTE.Cursor.update();
};
RTE.TableCommands.$4t = function RTE_TableCommands$$4t($p0) {
    var $v_0 = $p0.className;
    var $v_1 = 'Table-';
    var $v_2 = $v_0.indexOf($v_1);

    if ($v_2 !== -1) {
        var $v_3 = $v_0.substr($v_2 + $v_1.length);
        var $v_4 = $v_3.indexOf(' ');

        if ($v_4 !== -1) {
            return $v_3.substring(0, $v_4);
        }
        else {
            return $v_3;
        }
    }
    return null;
};
RTE.TableCommands.$25 = function RTE_TableCommands$$25($p0) {
    var $v_0 = RTE.TableCommands.$4t($p0);

    RTE.TableCommands.setTableStyle($p0, $v_0, false);
};
RTE.TableCommands.hasTableStyle = function RTE_TableCommands$hasTableStyle($p0) {
    if ($p0 && $p0.className) {
        var $v_0 = RTE.Canvas.getCurrentStyleSheetPrefix();

        return $p0.className.indexOf($v_0 + 'Table') !== -1;
    }
    return false;
};
RTE.TableCommands.getTableStyle = function RTE_TableCommands$getTableStyle($p0) {
    if ($p0 && $p0.className) {
        var $v_0 = RTE.Canvas.getCurrentStyleSheetPrefix();
        var $v_1 = $p0.className.split(' ');

        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            if ($v_1[$v_2].indexOf($v_0 + 'Table') !== -1) {
                return $v_1[$v_2];
            }
        }
    }
    return null;
};
RTE.TableCommands.setTableStyle = function RTE_TableCommands$setTableStyle($p0, $p1, $p2) {
    var $v_0 = RTE.TableCommands.hasHeaderRow($p0);
    var $v_1 = RTE.TableCommands.hasFooterRow($p0);
    var $v_2 = RTE.TableCommands.hasFirstColumn($p0);
    var $v_3 = RTE.TableCommands.hasLastColumn($p0);

    RTE.TableCommands.$5d($p0, $p1, $v_0, $v_1, $v_2, $v_3, $p2);
};
RTE.TableCommands.$5d = function RTE_TableCommands$$5d($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
    var $v_0 = RTE.Canvas.getCurrentStyleSheetPrefix();
    var $v_1 = RTE.TableCommands.$AV($p0);
    var $v_2;

    if ($p6) {
        $v_2 = [$v_0 + 'Table', $v_0 + 'BackColor', $v_0 + 'ThemeBackColor'];
    }
    else {
        $v_2 = [$v_0 + 'Table'];
    }
    var $v_3 = false;

    RTE.RteUtility.assertNotNull('Cursor.GetSelectedTable()', $p0);
    var $v_4 = '';

    if (!RTE.SU.$2($p1)) {
        $v_4 = $v_0 + 'Table' + '-' + $p1;
    }
    var $v_5 = $p0.className;

    RTE.RteUtility.$26($p0, $v_4, $v_2);
    if ($v_5 !== $p0.className) {
        $v_3 = true;
        $p0.removeAttribute('border');
        RTE.TableCommands.$87($p0.style);
    }
    for (var $v_6 = 0; $v_6 < $p0.rows.length; $v_6++) {
        var $v_7 = $p0.rows[$v_6];
        var $v_8 = '';
        var $v_9 = '';

        if (!$v_6 && $p2) {
            $v_9 = 'Header';
            $v_8 = 'Header';
        }
        else if ($v_6 === $p0.rows.length - 1 && $p3) {
            $v_9 = 'Footer';
            $v_8 = 'Footer';
        }
        else if ($v_6 % 2 === 1) {
            $v_9 = 'Odd';
        }
        else {
            $v_9 = 'Even';
        }
        var $v_A = '';

        if (!RTE.SU.$2($p1)) {
            $v_A = $v_0 + 'Table' + $v_9 + 'Row' + '-' + $p1;
        }
        RTE.RteUtility.$26($v_7, $v_A, $v_2);
        if ($v_3) {
            RTE.TableCommands.$87($v_7.style);
        }
        for (var $v_B = 0; $v_B < $v_7.cells.length; $v_B++) {
            var $v_C = $v_7.cells[$v_B];
            var $v_D = '';

            if (!$v_B && $p4) {
                $v_D = 'First';
            }
            else if ($v_B === $v_7.cells.length - 1 && $p5) {
                $v_D = 'Last';
            }
            else if ($v_B % 2 === 1) {
                $v_D = 'Odd';
            }
            else {
                $v_D = 'Even';
            }
            var $v_E = '';

            if (!RTE.SU.$2($p1)) {
                $v_E = $v_0 + 'Table' + $v_8 + $v_D + 'Col' + '-' + $p1;
            }
            RTE.RteUtility.$26($v_C, $v_E, $v_2);
            if ($v_3) {
                RTE.TableCommands.$87($v_C.style);
            }
        }
    }
    if (!(RTE.PreviewManager.get_instance()).get_hasPreview()) {
        RTE.TableCommands.$EB($p0, $v_1);
    }
};
RTE.TableCommands.$87 = function RTE_TableCommands$$87($p0) {
    RTE.RteUtility.$15($p0, 'border');
    RTE.RteUtility.$15($p0, 'background');
    RTE.RteUtility.$15($p0, 'color');
    RTE.RteUtility.$15($p0, 'direction');
    RTE.RteUtility.$15($p0, 'font');
    RTE.RteUtility.$15($p0, 'margin');
    RTE.RteUtility.$15($p0, 'padding');
    RTE.RteUtility.$15($p0, 'textAlign');
    RTE.RteUtility.$15($p0, 'textDecoration');
    RTE.RteUtility.$15($p0, 'textJustify');
    RTE.RteUtility.$15($p0, 'textTransform');
    RTE.RteUtility.$15($p0, 'verticalAlign');
    $p0.cssText = $p0.cssText.replace(new RegExp('(border-width|border-color)[^;]*;', 'gi'), '');
};
RTE.TableCommands.clearTableStyle = function RTE_TableCommands$clearTableStyle() {
    var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Table');
    var $v_1 = RTE.Canvas.getCurrentStyleSheetPrefix();

    RTE.RteUtility.$26($v_0, '', [$v_1 + 'Table']);
    for (var $v_2 = 0; $v_2 < $v_0.rows.length; $v_2++) {
        var $v_3 = $v_0.rows[$v_2];

        RTE.RteUtility.$26($v_3, '', [$v_1 + 'Table']);
    }
    for (var $v_4 = 0; $v_4 < $v_0.cells.length; $v_4++) {
        var $v_5 = $v_0.cells[$v_4];

        RTE.RteUtility.$26($v_5, '', [$v_1 + 'Table']);
    }
};
RTE.TableCommands.setTableGridLines = function RTE_TableCommands$setTableGridLines($p0) {
    var $v_0 = RTE.CanvasEvents.getNodeFromEvent('Table');

    if (null === $v_0) {
        return;
    }
    RTE.TableCommands.$EB($v_0, $p0);
};
RTE.TableCommands.queryTableGridLines = function RTE_TableCommands$queryTableGridLines() {
    var $v_0 = new RTE.CommandState();
    var $v_1 = RTE.CanvasEvents.getNodeFromEvent('Table');

    if (!$v_1) {
        return $v_0;
    }
    $v_0.$B_0 = true;
    $v_0.$1I_0 = RTE.TableCommands.$AV($v_1);
    return $v_0;
};
RTE.TableCommands.$EB = function RTE_TableCommands$$EB($p0, $p1) {
    if ($p1) {
        Sys.UI.DomElement.addCssClass($p0, RTE.TableCommands.$7X);
    }
    else {
        Sys.UI.DomElement.removeCssClass($p0, RTE.TableCommands.$7X);
    }
};
RTE.TableCommands.$AV = function RTE_TableCommands$$AV($p0) {
    return !RTE.SU.$2($p0.className) && $p0.className.indexOf(RTE.TableCommands.$7X) >= 0;
};
RTE.TableCommands.canInsertRow = function RTE_TableCommands$canInsertRow() {
    var $v_0;

    if (null === ($v_0 = RTE.Cursor.getNearestContainingElementOfType('TR'))) {
        return false;
    }
    var $v_1;

    if (null === ($v_1 = RTE.RteUtility.$G($v_0, 'TABLE'))) {
        return false;
    }
    return RTE.Canvas.isEditable($v_1);
};
RTE.TableCommands.canInsertColumn = function RTE_TableCommands$canInsertColumn() {
    var $v_0;

    if (null === ($v_0 = RTE.Cursor.$1G(RTE.HtmlTagName.tableCellTagNames))) {
        return false;
    }
    var $v_1;

    if (null === ($v_1 = RTE.RteUtility.$G($v_0, 'TABLE'))) {
        return false;
    }
    return RTE.Canvas.isEditable($v_1);
};
RTE.TableCommands.canMergeCells = function RTE_TableCommands$canMergeCells() {
    var $v_0;

    if (null === ($v_0 = RTE.Cursor.getCurrentElement())) {
        return false;
    }
    var $v_1;

    if (null === ($v_1 = RTE.RteUtility.$2d($v_0, RTE.HtmlTagName.tableCellTagNames))) {
        return false;
    }
    var $v_2;

    if (null === ($v_2 = RTE.RteUtility.$G($v_1, 'TR'))) {
        return false;
    }
    var $v_3;

    if (null === ($v_3 = RTE.RteUtility.$G($v_2, 'TABLE'))) {
        return false;
    }
    return RTE.Canvas.isEditable($v_3);
};
RTE.TableCommands.canMergeSelected = function RTE_TableCommands$canMergeSelected() {
    var $v_0;

    if (null === ($v_0 = RTE.Cursor.getCurrentElement()) || 'TR' !== $v_0.tagName) {
        return false;
    }
    var $v_1;

    if (null === ($v_1 = RTE.RteUtility.$G($v_0, 'TABLE'))) {
        return false;
    }
    return RTE.Canvas.isEditable($v_1);
};
RTE.TableCommands.canSplit = function RTE_TableCommands$canSplit() {
    var $v_0;

    if (null === ($v_0 = RTE.Cursor.$1G(RTE.HtmlTagName.tableCellTagNames))) {
        return false;
    }
    var $v_1;

    if (null === ($v_1 = RTE.RteUtility.$G($v_0, 'TR'))) {
        return false;
    }
    var $v_2;

    if (null === ($v_2 = RTE.RteUtility.$G($v_1, 'TABLE'))) {
        return false;
    }
    return RTE.Canvas.isEditable($v_2);
};
RTE.TableKeyTabProcessor = function RTE_TableKeyTabProcessor($p0) {
    this.$45_0 = $p0;
    this.$3P_0 = RTE.Cursor.$1G(RTE.HtmlTagName.tableCellTagNames);
    this.$6u_0 = RTE.RteUtility.$G(this.$3P_0, 'TR');
    this.$95_0 = RTE.RteUtility.$G(this.$6u_0, 'TABLE');
};
RTE.TableKeyTabProcessor.prototype = {
    $3P_0: null,
    $6u_0: null,
    $95_0: null,
    $45_0: false,
    process: function RTE_TableKeyTabProcessor$process() {
        if (!this.$3P_0 || !this.$6u_0 || !this.$95_0) {
            return false;
        }
        var $v_0 = this.$45_0 ? RTE.RteUtility.$t(this.$3P_0, false) : RTE.RteUtility.$m(this.$3P_0, false);

        if (!$v_0) {
            var $v_1 = this.$45_0 ? RTE.RteUtility.$t(this.$3P_0.parentNode, false) : RTE.RteUtility.$m(this.$3P_0.parentNode, false);

            if ($v_1) {
                $v_0 = this.$45_0 ? $v_1.children[0] : $v_1.children[$v_1.children.length - 1];
            }
        }
        if (!$v_0) {
            var $v_2 = RTE.TableCommands.$CQ(this.$95_0, this.$6u_0, !this.$45_0);

            $v_0 = this.$45_0 ? $v_2.children[0] : $v_2.children[$v_2.children.length - 1];
        }
        if ($v_0 && $v_0.nodeType === 1) {
            var $v_3 = RTE.Cursor.get_range();

            $v_3.moveToEndOfNode($v_0);
            RTE.Cursor.update();
            return true;
        }
        return false;
    }
};
RTE.XhtmlProcessor = function RTE_XhtmlProcessor() {
};
RTE.XhtmlProcessor.$HZ = function RTE_XhtmlProcessor$$HZ() {
    if (null !== RTE.XhtmlProcessor.$3W) {
        return;
    }
    if (RTE.RteUtility.isClassAvailable('SP.UI.ModalDialog')) {
        RTE.XhtmlProcessor.$3W = SP.UI.ModalDialog.showWaitScreenSize(SP.Res.xhtmlWaitScreenTitle, SP.Res.xhtmlWaitScreenText, RTE.XhtmlProcessor.$Lq, 80, 200);
    }
};
RTE.XhtmlProcessor.$Fq = function RTE_XhtmlProcessor$$Fq() {
    if (null !== RTE.XhtmlProcessor.$3W) {
        RTE.XhtmlProcessor.$3W.close(1);
        RTE.XhtmlProcessor.$3W = null;
    }
};
RTE.XhtmlProcessor.xhtmlify = function RTE_XhtmlProcessor$xhtmlify() {
    if (null === (RTE.XhtmlProcessor.$2N = RTE.Cursor.getCurrentElement())) {
        return;
    }
    if (null === (RTE.XhtmlProcessor.$2N = RTE.Canvas.getEditableRegion(RTE.XhtmlProcessor.$2N))) {
        return;
    }
    RTE.XhtmlProcessor.$HZ();
    window.setTimeout(RTE.XhtmlProcessor.$Lp, 0);
};
RTE.XhtmlProcessor.$Lp = function RTE_XhtmlProcessor$$Lp() {
    RTE.RteUtility.$J((RTE.Cursor.get_range()).$4_0);
    RTE.RteUtility.$J((RTE.Cursor.get_range()).$3_0);
    RTE.RteUtility.$9p(RTE.XhtmlProcessor.$2N, RTE.Canvas.getEditableRegionHtml(RTE.XhtmlProcessor.$2N));
    RTE.SafeHtml.$9S(RTE.XhtmlProcessor.$2N, false, false, false);
    RTE.XhtmlProcessor.$Hc(RTE.XhtmlProcessor.$2N);
    if (RTE.RteUtility.isClassAvailable('SP.UI.Notify')) {
        SP.UI.Notify.addNotification(SP.Res.xhtmlDone, false);
    }
    RTE.XhtmlProcessor.$Fq();
    (RTE.Cursor.get_range()).moveToEndOfNode(RTE.XhtmlProcessor.$2N);
    RTE.Cursor.update();
};
RTE.XhtmlProcessor.$Lq = function RTE_XhtmlProcessor$$Lq($p0, $p1) {
    RTE.XhtmlProcessor.$3W = null;
};
RTE.XhtmlProcessor.$Hc = function RTE_XhtmlProcessor$$Hc($p0) {
    var $v_0 = new RTE.DOMTreePosition($p0, 0);
    var $v_1, $v_2 = $v_0.$1_0;

    while ($v_0.moveToNextElement()) {
        if ($p0 === $v_0.$1_0.previousSibling) {
            break;
        }
        if ($p0 === $v_0.$1_0) {
            break;
        }
        if ($v_2.parentNode !== $v_0.$1_0) {
            if (!SP.UI.UIUtility.isTextNode($v_0.$1_0) && -1 !== $v_0.$1_0.className.indexOf('ms-rtestate-read')) {
                $v_0.setLocationAtEnd();
            }
            else {
                if (null !== ($v_1 = RTE.XhtmlProcessor.$Ed($v_0.$1_0, $p0))) {
                    $v_0 = null;
                    $v_0 = new RTE.DOMTreePosition($v_1, 0);
                }
            }
        }
        $v_2 = $v_0.$1_0;
    }
};
RTE.XhtmlProcessor.$Ed = function RTE_XhtmlProcessor$$Ed($p0, $p1) {
    var $v_0;
    var $v_1;
    var $v_2 = null;

    $v_0 = RTE.XhtmlProcessor.$Id($p0, $p1);
    if (null !== $v_0) {
        $v_1 = $v_0.pop();
    }
    else {
        $v_1 = null;
    }
    if (!SP.UI.UIUtility.isTextNode($p0)) {
        switch ($p0.tagName) {
        case 'TABLE':
        case 'TBODY':
        case 'TR':
            RTE.XhtmlProcessor.$Hp($p0);
            break;
        case 'OL':
        case 'UL':
            RTE.XhtmlProcessor.$Hk($p0);
            break;
        }
    }
    if ($v_1 !== $p0.parentNode) {
        if (SP.UI.UIUtility.isTextNode($p0) && !RTE.RteUtility.$JS($p0.nodeValue)) {
            var $v_3 = new RTE.DOMTreePosition($p0, 0);

            $v_3.moveToPreviousElement();
            $v_2 = $v_3.$1_0;
            SP.UI.UIUtility.removeNode($p0);
        }
        else if (null === $v_1) {
            var $v_4;
            var $v_5;

            switch ($p0.tagName) {
            case 'LI':
                $v_4 = 'UL';
                $v_5 = false;
                break;
            case 'TD':
            case 'TH':
                $v_4 = 'TR';
                $v_5 = false;
                break;
            case 'TR':
                $v_4 = 'TBODY';
                $v_5 = false;
                break;
            case 'TBODY':
                $v_4 = 'TABLE';
                $v_5 = false;
                break;
            default:
                $v_4 = 'DIV';
                $v_5 = true;
                break;
            }
            var $v_6 = document.createElement($v_4);

            if ($v_5) {
                $v_6.innerText = $p0.innerText;
            }
            $p0.parentNode.replaceChild($v_6, $p0);
            if (!$v_5) {
                $v_6.appendChild($p0);
            }
            if (!RTE.XhtmlRules.isValidChild($v_6.parentNode.tagName, $v_4)) {
                RTE.XhtmlProcessor.$Ed($v_6, $p1);
            }
            $v_2 = $v_6;
        }
        else {
            var $v_7 = $v_0.pop();
            var $v_8 = RTE.RteUtility.$Fp($v_7, false);

            RTE.RteUtility.$EX($v_8, $v_7, null);
            var $v_9 = new RTE.ExtractChildNodesProcessor($v_7, $p0, null, $v_8, false);

            $v_9.process();
            RTE.RteUtility.$EX($p0, $v_7, $v_8);
            if (!RTE.RteUtility.$4c($v_7)) {
                SP.UI.UIUtility.removeNode($v_7);
            }
            if (!RTE.RteUtility.$4c($v_8)) {
                SP.UI.UIUtility.removeNode($v_8);
            }
        }
    }
    return $v_2;
};
RTE.XhtmlProcessor.$Id = function RTE_XhtmlProcessor$$Id($p0, $p1) {
    if (null === $p0) {
        return null;
    }
    var $v_0 = [];
    var $v_1 = SP.UI.UIUtility.isTextNode($p0);
    var $v_2 = $p0.parentNode;
    var $v_3 = $p0;

    while (null !== $v_2) {
        if ($v_1) {
            if (RTE.XhtmlRules.canHaveInlineChildren($v_2.tagName)) {
                $v_0.push($v_3);
                $v_0.push($v_2);
                return $v_0;
            }
        }
        else {
            if (RTE.XhtmlRules.isValidChild($v_2.tagName, $p0.tagName)) {
                $v_0.push($v_3);
                $v_0.push($v_2);
                return $v_0;
            }
        }
        $v_3 = $v_2;
        $v_2 = $v_2.parentNode;
        if ($v_3 === $p1) {
            break;
        }
    }
    return null;
};
RTE.XhtmlProcessor.$Hp = function RTE_XhtmlProcessor$$Hp($p0) {
    var $v_0 = [];

    switch ($p0.tagName) {
    case 'TABLE':
        Array.add($v_0, 'TBODY');
        break;
    case 'TBODY':
        Array.add($v_0, 'TR');
        break;
    case 'TR':
        Array.add($v_0, 'TD');
        Array.add($v_0, 'TH');
        break;
    }
    var $v_1 = $p0.firstChild;

    while (null !== $v_1) {
        if (!SP.UI.UIUtility.isTextNode($v_1) && Array.contains($v_0, $v_1.tagName)) {
            return;
        }
        $v_1 = $v_1.nextSibling;
    }
    var $v_2 = document.createElement($v_0[0]);

    $p0.appendChild($v_2);
};
RTE.XhtmlProcessor.$Hk = function RTE_XhtmlProcessor$$Hk($p0) {
    var $v_0 = $p0.firstChild;
    var $v_1 = null;
    var $v_2 = null;

    while (null !== $v_0) {
        if (!SP.UI.UIUtility.isTextNode($v_0) && SP.UI.UIUtility.isNodeOfType($v_0, RTE.HtmlTagName.$Ct)) {
            if (null === $v_1 || SP.UI.UIUtility.isTextNode($v_1) || 'LI' !== $v_1.tagName) {
                $v_2 = document.createElement('LI');
                $p0.insertBefore($v_2, $v_0);
                $v_2.appendChild($v_0);
            }
            else {
                $v_1.appendChild($v_0);
            }
        }
        if (null !== $v_2) {
            $v_1 = $v_2;
            $v_2 = null;
        }
        else {
            $v_1 = $v_0;
        }
        $v_0 = $v_0.nextSibling;
    }
};
RTE.XhtmlProcessor.$Hm = function RTE_XhtmlProcessor$$Hm($p0) {
    if (!SP.UI.UIUtility.isNodeOfType($p0, RTE.HtmlTagName.$6G)) {
        var $v_0 = false;
        var $v_1 = [];

        for (var $v_2 = $p0.childNodes.length - 1; $v_2 >= 0; $v_2--) {
            var $v_3 = $p0.childNodes[$v_2];

            if ($v_3.tagName === 'LI') {
                $v_0 = true;
                $v_1.push($v_3);
            }
            else if (SP.UI.UIUtility.isNodeOfType($v_3, RTE.HtmlTagName.$6G)) {
                $v_1.push($v_3);
            }
            else if ($v_1.length > 0 && $v_0) {
                var $v_4 = RTE.XhtmlProcessor.$B0($v_1);

                SP.UI.UIUtility.insertAfter($v_4, $v_3);
            }
        }
        if ($v_1.length > 0 && $v_0) {
            var $v_5 = RTE.XhtmlProcessor.$B0($v_1);

            if ($p0.firstChild) {
                SP.UI.UIUtility.insertBefore($v_5, $p0.firstChild);
            }
            else {
                $p0.appendChild($v_5);
            }
        }
    }
};
RTE.XhtmlProcessor.$B0 = function RTE_XhtmlProcessor$$B0($p0) {
    var $v_0 = document.createElement('UL');

    while ($p0.length > 0) {
        var $v_1 = $p0.pop();

        if ($v_1.tagName === 'LI' || SP.UI.UIUtility.isNodeOfType($v_1, RTE.HtmlTagName.$6G)) {
            $v_0.appendChild($v_1);
        }
        else {
            var $v_2 = document.createElement('LI');

            $v_0.appendChild($v_2);
            $v_2.appendChild($v_1);
        }
    }
    return $v_0;
};
RTE.XhtmlRules = function RTE_XhtmlRules() {
};
RTE.XhtmlRules.$CL = function RTE_XhtmlRules$$CL() {
    if (!SP.ScriptUtility.isNullOrUndefined(RTE.XhtmlRules.$A)) {
        return;
    }
    RTE.XhtmlRules.$A = {};
    RTE.XhtmlRules.$A['HR'] = 0;
    RTE.XhtmlRules.$A['BR'] = 1;
    RTE.XhtmlRules.$A['IMG'] = 2;
    RTE.XhtmlRules.$A['SUB'] = 3;
    RTE.XhtmlRules.$A['SUP'] = 4;
    RTE.XhtmlRules.$A['BIG'] = 5;
    RTE.XhtmlRules.$A['SMALL'] = 6;
    RTE.XhtmlRules.$A['SPAN'] = 7;
    RTE.XhtmlRules.$A['B'] = 8;
    RTE.XhtmlRules.$A['I'] = 9;
    RTE.XhtmlRules.$A['U'] = 10;
    RTE.XhtmlRules.$A['STRONG'] = 11;
    RTE.XhtmlRules.$A['EM'] = 12;
    RTE.XhtmlRules.$A['A'] = 13;
    RTE.XhtmlRules.$A['H1'] = 14;
    RTE.XhtmlRules.$A['H2'] = 15;
    RTE.XhtmlRules.$A['H3'] = 16;
    RTE.XhtmlRules.$A['H4'] = 17;
    RTE.XhtmlRules.$A['H5'] = 18;
    RTE.XhtmlRules.$A['H6'] = 19;
    RTE.XhtmlRules.$A['P'] = 20;
    RTE.XhtmlRules.$A['DEL'] = 21;
    RTE.XhtmlRules.$A['DIV'] = 22;
    RTE.XhtmlRules.$A['TABLE'] = 23;
    RTE.XhtmlRules.$A['CAPTION'] = 24;
    RTE.XhtmlRules.$A['COLGROUP'] = 25;
    RTE.XhtmlRules.$A['COL'] = 26;
    RTE.XhtmlRules.$A['THEAD'] = 27;
    RTE.XhtmlRules.$A['TFOOT'] = 28;
    RTE.XhtmlRules.$A['TBODY'] = 29;
    RTE.XhtmlRules.$A['TR'] = 30;
    RTE.XhtmlRules.$A['TD'] = 31;
    RTE.XhtmlRules.$A['TH'] = 32;
    RTE.XhtmlRules.$A['OL'] = 33;
    RTE.XhtmlRules.$A['UL'] = 34;
    RTE.XhtmlRules.$A['LI'] = 35;
    RTE.XhtmlRules.$A['DL'] = 36;
    RTE.XhtmlRules.$A['DT'] = 37;
    RTE.XhtmlRules.$A['DD'] = 38;
    RTE.XhtmlRules.$A['CODE'] = 39;
    RTE.XhtmlRules.$A['CITE'] = 40;
    RTE.XhtmlRules.$A['ACRONYM'] = 41;
    RTE.XhtmlRules.$A['ABBR'] = 42;
    RTE.XhtmlRules.$A['KBD'] = 43;
    RTE.XhtmlRules.$A['SAMP'] = 44;
    RTE.XhtmlRules.$A['VAR'] = 45;
    RTE.XhtmlRules.$A['DFN'] = 46;
    RTE.XhtmlRules.$A['TT'] = 47;
    RTE.XhtmlRules.$A['BDO'] = 48;
    RTE.XhtmlRules.$A['LABEL'] = 49;
    RTE.XhtmlRules.$A['Q'] = 50;
    RTE.XhtmlRules.$A['ADDRESS'] = 51;
    RTE.XhtmlRules.$A['INS'] = 52;
    RTE.XhtmlRules.$A['PRE'] = 53;
    RTE.XhtmlRules.$A['BLOCKQUOTE'] = 54;
    RTE.XhtmlRules.$A['NOSCRIPT'] = 55;
    RTE.XhtmlRules.$A['MAP'] = 56;
    RTE.XhtmlRules.$A['AREA'] = 57;
};
RTE.XhtmlRules.isValidChild = function RTE_XhtmlRules$isValidChild($p0, $p1) {
    RTE.XhtmlRules.$CL();
    var $v_0 = RTE.XhtmlRules.$A[$p0] * 59 + RTE.XhtmlRules.$A[$p1];

    return !!RTE.XhtmlRules.$9O[$v_0];
};
RTE.XhtmlRules.canHaveInlineChildren = function RTE_XhtmlRules$canHaveInlineChildren($p0) {
    RTE.XhtmlRules.$CL();
    var $v_0 = (RTE.XhtmlRules.$A[$p0] + 1) * 59 - 1;

    return !!RTE.XhtmlRules.$9O[$v_0];
};
RTE.RibbonReferences = function RTE_RibbonReferences() {
};
RTE.RibbonReferences.$3V = function RTE_RibbonReferences$$3V($p0) {
    $p0 = $p0.replace('$Resources:core,Language;', SP.Res.lcid);
    return $p0;
};
RTE.RibbonReferences.$4b = function RTE_RibbonReferences$$4b($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = document.createElement('IMG');

    $v_0.src = $p0;
    $v_0.style.left = $p1 + 'px';
    $v_0.style.top = $p2 + 'px';
    var $v_1 = document.createElement('SPAN');

    $v_1.style.width = $p3 + 'px';
    $v_1.style.height = $p4 + 'px';
    $v_1.style.overflow = 'hidden';
    $v_1.appendChild($v_0);
    return $v_1;
};
Type.registerNamespace('RTE.PasteCommon');
RTE.PasteCommon.Debug = function RTE_PasteCommon_Debug() {
};
RTE.PasteCommon.Debug.$1v = function RTE_PasteCommon_Debug$$1v($p0, $p1, $p2) {
    if (!$p0) {
        RTE.PasteCommon.Debug.$5w($p1, $p2);
    }
};
RTE.PasteCommon.Debug.$E = function RTE_PasteCommon_Debug$$E($p0, $p1) {
    RTE.PasteCommon.Debug.$5w($p0, $p1);
};
RTE.PasteCommon.Debug.assertTag = function RTE_PasteCommon_Debug$assertTag($p0, $p1) {
    if (!$p0) {
        RTE.PasteCommon.Debug.$5w('Failed assert', $p1);
    }
};
RTE.PasteCommon.Debug.$Jd = function RTE_PasteCommon_Debug$$Jd($p0, $p1, $p2, $p3) {
};
RTE.PasteCommon.Debug.$7n = function RTE_PasteCommon_Debug$$7n($p0) {
    RTE.PasteCommon.Debug.$E('Failed assert not reached', $p0);
};
RTE.PasteCommon.Debug.$AW = function RTE_PasteCommon_Debug$$AW($p0, $p1, $p2) {
    if ($p0 && !$p1) {
        RTE.PasteCommon.Debug.$5w('Assert implies failed', $p2);
    }
};
RTE.PasteCommon.Debug.$5w = function RTE_PasteCommon_Debug$$5w($p0, $p1) {
};
RTE.PasteCommon.Debug.assertString = function RTE_PasteCommon_Debug$assertString($p0, $p1) {
    RTE.PasteCommon.Debug.$1v($p0, $p1, 0);
};
RTE.PasteCommon.Debug.assertNotReachedString = function RTE_PasteCommon_Debug$assertNotReachedString($p0) {
    RTE.PasteCommon.Debug.$E($p0, 0);
};
RTE.PasteCommon.Debug.assert = function RTE_PasteCommon_Debug$assert($p0) {
    RTE.PasteCommon.Debug.assertTag($p0, 0);
};
RTE.PasteCommon.Debug.log = function RTE_PasteCommon_Debug$log($p0, $p1, $p2) {
    RTE.PasteCommon.Debug.$Jd($p0, $p1, $p2, 0);
};
RTE.PasteCommon.Debug.assertNotReached = function RTE_PasteCommon_Debug$assertNotReached() {
    RTE.PasteCommon.Debug.$7n(0);
};
RTE.PasteCommon.LogLevel = function RTE_PasteCommon_LogLevel() {
};
RTE.PasteCommon.StringUtils = function RTE_PasteCommon_StringUtils() {
};
RTE.PasteCommon.StringUtils.toLower = function RTE_PasteCommon_StringUtils$toLower($p0) {
    return $p0.toLowerCase();
};
RTE.PasteCommon.StringUtils.toUpper = function RTE_PasteCommon_StringUtils$toUpper($p0) {
    return $p0.toUpperCase();
};
RTE.PasteCommon.CustomData = function RTE_PasteCommon_CustomData() {
};
RTE.PasteCommon.CustomData.$4J = function RTE_PasteCommon_CustomData$$4J($p0, $p1, $p2) {
    if (RTE.RteUtility.isValidRteNodeId($p0)) {
        var $v_0 = RTE.RteUtility.getRteNodeId($p0);

        if (!RTE.SU.$2($v_0)) {
            var $v_1 = RTE.PasteCommon.CustomData.dict[$v_0];

            if (RTE.SU.$7($v_1)) {
                $v_1 = {};
                RTE.PasteCommon.CustomData.dict[$v_0] = $v_1;
            }
            $v_1[$p1] = $p2;
        }
    }
};
RTE.PasteCommon.CustomData.getObject = function RTE_PasteCommon_CustomData$getObject($p0, $p1) {
    if (RTE.RteUtility.isValidRteNodeId($p0)) {
        var $v_0 = RTE.RteUtility.getRteNodeId($p0);

        if (!RTE.SU.$2($v_0)) {
            var $v_1 = RTE.PasteCommon.CustomData.dict[$v_0];

            if (!RTE.SU.$7($v_1)) {
                return $v_1[$p1];
            }
        }
    }
    return null;
};
RTE.PasteCommon.CustomData.removeObject = function RTE_PasteCommon_CustomData$removeObject($p0, $p1) {
    RTE.PasteCommon.CustomData.$4J($p0, $p1, null);
};
RTE.PasteCommon.AOperation = function RTE_PasteCommon_AOperation() {
};
RTE.PasteCommon.SimpleOperation = function RTE_PasteCommon_SimpleOperation($p0, $p1, $p2) {
    RTE.PasteCommon.SimpleOperation.initializeBase(this);
    this.$V_1 = $p0;
    this.$9t_1 = $p2;
    this.$83_1 = $p1;
    this.$3i_1 = this.$V_1 ? this.$V_1.$3i_1 : new SP.Utilities.CommandBlock(this, RTE.PasteCommon.SimpleOperation.$KR, RTE.PasteCommon.SimpleOperation.$Hh);
    this.$4Z_1 = this.$V_1 ? this.$V_1.$4Z_1 : new SP.Utilities.Task(null, 0, 1920000, this.$3i_1, null, null, null);
};
RTE.PasteCommon.SimpleOperation.$KR = function RTE_PasteCommon_SimpleOperation$$KR($p0, $p1) {
    var $v_0 = $p0;

    try {
        $v_0.set_$5R_1($p1);
        var $v_1;

        do {
            if (!$v_0.get_$2e_1() && $p1()) {
                return $v_0.get_$B6_1();
            }
            $v_0.$Ld_1();
            $v_1 = $v_0.$83_1($v_0, $v_0.$9t_1);
            if (!$v_1) {
                if ($v_0.$V_1) {
                    $v_0.$3i_1.state = $v_0.$V_1;
                    $v_1 = true;
                }
            }
            $v_0 = $v_0.$3i_1.state;
        } while ($v_1 && $v_0);
        return 1;
    }
    catch ($v_2) {
        RTE.PasteCommon.Debug.assertNotReachedString($v_2.message);
        $v_0.$4Z_1.cancel(0);
        throw $v_2;
    }
};
RTE.PasteCommon.SimpleOperation.$Hh = function RTE_PasteCommon_SimpleOperation$$Hh($p0, $p1) {
    var $v_0 = $p1;

    $v_0.set_$5R_1(null);
};
RTE.PasteCommon.SimpleOperation.prototype = {
    $B5_1: null,
    $Cm_1: false,
    $75_1: null,
    $74_1: 0.99,
    $3i_1: null,
    $4Z_1: null,
    $V_1: null,
    $9t_1: null,
    $83_1: null,
    get_$5R_1: function RTE_PasteCommon_SimpleOperation$get_$5R_1() {
        return !this.$V_1 ? this.$B5_1 : this.$V_1.get_$5R_1();
    },
    set_$5R_1: function RTE_PasteCommon_SimpleOperation$set_$5R_1($p0) {
        this.$B5_1 = $p0;
        if (this.$V_1) {
            this.$V_1.set_$5R_1($p0);
        }
        return $p0;
    },
    get_$2e_1: function RTE_PasteCommon_SimpleOperation$get_$2e_1() {
        return !this.$V_1 ? this.$Cm_1 : this.$V_1.get_$2e_1();
    },
    set_$2e_1: function RTE_PasteCommon_SimpleOperation$set_$2e_1($p0) {
        if (!this.$V_1) {
            this.$Cm_1 = $p0;
        }
        else {
            this.$V_1.set_$2e_1($p0);
        }
        return $p0;
    },
    get_$B6_1: function RTE_PasteCommon_SimpleOperation$get_$B6_1() {
        return !this.$V_1 ? this.$74_1 : this.$V_1.get_$B6_1();
    },
    get_$76_1: function RTE_PasteCommon_SimpleOperation$get_$76_1() {
        return !this.$V_1 ? this.$75_1 : this.$V_1.get_$76_1();
    },
    set_$76_1: function RTE_PasteCommon_SimpleOperation$set_$76_1($p0) {
        if (!this.$V_1) {
            this.$75_1 = $p0;
            this.$74_1 = 0.99;
        }
        else {
            this.$V_1.set_$76_1($p0);
        }
        return $p0;
    },
    $63_1: function RTE_PasteCommon_SimpleOperation$$63_1($p0) {
        this.$83_1 = $p0;
    },
    $9Y_1: function RTE_PasteCommon_SimpleOperation$$9Y_1() {
        this.$3i_1.state = this;
        if (!this.get_$5R_1() && !this.get_$2e_1()) {
            this.$4Z_1.start();
        }
    },
    $FJ_1: function RTE_PasteCommon_SimpleOperation$$FJ_1() {
        this.$4Z_1.cancel(0);
    },
    setDebugName: function RTE_PasteCommon_SimpleOperation$setDebugName($p0) {
    },
    $Ld_1: function RTE_PasteCommon_SimpleOperation$$Ld_1() {
        this.$EZ_1(this, this.$9t_1);
    },
    $EZ_1: function RTE_PasteCommon_SimpleOperation$$EZ_1($p0, $p1) {
        try {
            if (!this.$V_1) {
                if (this.$75_1) {
                    this.$74_1 = Math.min(0.99, this.$75_1($p0, $p1));
                }
            }
            else {
                this.$V_1.$EZ_1($p0, $p1);
            }
        }
        catch ($$e_2) {
            this.$74_1 = 0.99;
        }
    }
};
RTE.PasteCommon.HtmlProcessorPercentage = function RTE_PasteCommon_HtmlProcessorPercentage() {
    this.$$d_$Lb_0 = Function.createDelegate(this, this.$Lb_0);
    this.$3c_0 = -1;
};
RTE.PasteCommon.HtmlProcessorPercentage.prototype = {
    $AH_0: 0,
    $A7_0: null,
    $Lb_0: function RTE_PasteCommon_HtmlProcessorPercentage$$Lb_0($p0, $p1) {
        var $v_0 = $p1;

        if ($v_0 && $v_0.$2Z_0) {
            if (this.$3c_0 === -1 && $v_0.$2Z_0.length > 0) {
                this.$3c_0 = ($v_0.$2Z_0[0].parentNode.getElementsByTagName('*')).length;
            }
            if (this.$3c_0 > 0) {
                var $v_1 = $v_0.$2Z_0[$v_0.$4e_0];

                if ($v_1 && $v_1 !== this.$A7_0) {
                    if ($v_1.nodeType === 1) {
                        this.$AH_0++;
                    }
                }
                this.$A7_0 = $v_1;
            }
        }
        return this.$3c_0 > 0 ? Math.min(0.99, this.$AH_0 / this.$3c_0) : 0.99;
    }
};
Type.registerNamespace('RTE.HtmlImport');
RTE.HtmlImport.HtmlProcessorArguments = function RTE_HtmlImport_HtmlProcessorArguments($p0) {
    this.$2Z_0 = $p0.childNodes;
    this.$4e_0 = 0;
    this.$4y_0 = false;
};
RTE.HtmlImport.ProcessorInstructions = function() {
};
RTE.HtmlImport.ProcessorInstructions.prototype = {
    notifyOnClose: 1,
    ignoreCloseTag: 2,
    pruneElement: 3
};
RTE.HtmlImport.ProcessorInstructions.registerEnum('RTE.HtmlImport.ProcessorInstructions', false);
RTE.HtmlImport.IFormattingSteward = function() {
};
RTE.HtmlImport.IFormattingSteward.registerInterface('RTE.HtmlImport.IFormattingSteward');
RTE.HtmlImport.IHtmlEventAcceptor = function() {
};
RTE.HtmlImport.IHtmlEventAcceptor.registerInterface('RTE.HtmlImport.IHtmlEventAcceptor');
RTE.HtmlImport.ISemanticEventAcceptor = function() {
};
RTE.HtmlImport.ISemanticEventAcceptor.registerInterface('RTE.HtmlImport.ISemanticEventAcceptor');
RTE.HtmlImport.ListStyleType = function() {
};
RTE.HtmlImport.ListStyleType.prototype = {
    unspecified: 0,
    none: 1,
    defaultUnordered: 2,
    disc: 3,
    circle: 4,
    square: 5,
    defaultOrdered: 6,
    decimal: 7,
    lowerAlpha: 8,
    lowerRoman: 9,
    upperAlpha: 10,
    upperRoman: 11
};
RTE.HtmlImport.ListStyleType.registerEnum('RTE.HtmlImport.ListStyleType', false);
RTE.HtmlImport.WordConverterArguments = function RTE_HtmlImport_WordConverterArguments($p0) {
    this.$9C_0 = $p0;
    this.$2a_0 = 0;
    this.$8u_0 = {};
    this.$43_0 = new Array(0);
    this.$1W_0 = new Array(0);
    this.$1W_0[0] = new RTE.HtmlImport.LevelLists();
    this.$57_0 = null;
};
RTE.HtmlImport.LevelLists = function RTE_HtmlImport_LevelLists() {
    this.$8v_0 = {};
    this.$4i_0 = -1;
};
RTE.HtmlImport.ListItemMetadata = function RTE_HtmlImport_ListItemMetadata() {
};
RTE.HtmlImport.ListMetadata = function RTE_HtmlImport_ListMetadata() {
    this.$2R_0 = 'UL';
    this.$3q_0 = null;
    this.$3t_0 = false;
    this.$6y_0 = 0;
};
RTE.HtmlImport.AHtmlNormalizer = function RTE_HtmlImport_AHtmlNormalizer($p0) {
    this.steward = $p0;
};
RTE.HtmlImport.AHtmlNormalizer.prototype = {
    steward: null,
    reset: function RTE_HtmlImport_AHtmlNormalizer$reset() {
        this.steward.reset();
    },
    get_defaultFormatting: function RTE_HtmlImport_AHtmlNormalizer$get_defaultFormatting() {
        return this.steward.get_defaultFormatting();
    },
    onText: function RTE_HtmlImport_AHtmlNormalizer$onText(text) {
        this.steward.onText(text);
    },
    onLineBreak: function RTE_HtmlImport_AHtmlNormalizer$onLineBreak() {
        this.steward.onLineBreak();
    },
    onImage: function RTE_HtmlImport_AHtmlNormalizer$onImage(args) {
        this.steward.onImage(args);
    },
    onFormattingChange: function RTE_HtmlImport_AHtmlNormalizer$onFormattingChange(newFormatting) {
        this.steward.onFormattingChange(newFormatting);
    },
    onAnchorStart: function RTE_HtmlImport_AHtmlNormalizer$onAnchorStart(href) {
        this.steward.onAnchorStart(href);
    },
    onAnchorEnd: function RTE_HtmlImport_AHtmlNormalizer$onAnchorEnd() {
        this.steward.onAnchorEnd();
    },
    onParagraphStart: function RTE_HtmlImport_AHtmlNormalizer$onParagraphStart() {
        this.steward.onParagraphStart();
    },
    onParagraphEnd: function RTE_HtmlImport_AHtmlNormalizer$onParagraphEnd() {
        this.steward.onParagraphEnd();
    },
    onListStart: function RTE_HtmlImport_AHtmlNormalizer$onListStart(args) {
        this.steward.onListStart(args);
    },
    onListEnd: function RTE_HtmlImport_AHtmlNormalizer$onListEnd() {
        this.steward.onListEnd();
    },
    onListItemStart: function RTE_HtmlImport_AHtmlNormalizer$onListItemStart(args) {
        this.steward.onListItemStart(args);
    },
    onListItemEnd: function RTE_HtmlImport_AHtmlNormalizer$onListItemEnd() {
        this.steward.onListItemEnd();
    },
    onTableStart: function RTE_HtmlImport_AHtmlNormalizer$onTableStart(args) {
        this.steward.onTableStart(args);
    },
    onTableEnd: function RTE_HtmlImport_AHtmlNormalizer$onTableEnd() {
        this.steward.onTableEnd();
    },
    onTableRowStart: function RTE_HtmlImport_AHtmlNormalizer$onTableRowStart() {
        this.steward.onTableRowStart();
    },
    onTableRowEnd: function RTE_HtmlImport_AHtmlNormalizer$onTableRowEnd() {
        this.steward.onTableRowEnd();
    },
    onTableCellStart: function RTE_HtmlImport_AHtmlNormalizer$onTableCellStart(args) {
        this.steward.onTableCellStart(args);
    },
    onTableCellEnd: function RTE_HtmlImport_AHtmlNormalizer$onTableCellEnd() {
        this.steward.onTableCellEnd();
    },
    onTablePartStart: function RTE_HtmlImport_AHtmlNormalizer$onTablePartStart() {
        this.steward.onTablePartStart();
    },
    onTablePartEnd: function RTE_HtmlImport_AHtmlNormalizer$onTablePartEnd() {
        this.steward.onTablePartEnd();
    }
};
RTE.HtmlImport.AHtmlPasteSteward = function RTE_HtmlImport_AHtmlPasteSteward(ownerDocument) {
    this.ownerDocument = ownerDocument;
};
RTE.HtmlImport.AHtmlPasteSteward.prototype = {
    ownerDocument: null,
    generatedHtmlLocation: null,
    reset: function RTE_HtmlImport_AHtmlPasteSteward$reset() {
        this.generatedHtmlLocation = this.ownerDocument.body;
    }
};
RTE.HtmlImport.AHtmlTranslator = function RTE_HtmlImport_AHtmlTranslator(normalizer) {
    this.$$d_$K4_0 = Function.createDelegate(this, this.$K4_0);
    this.normalizer = normalizer;
};
RTE.HtmlImport.AHtmlTranslator.prototype = {
    normalizer: null,
    $1t_0: null,
    $4Q_0: null,
    get_$B4_0: function RTE_HtmlImport_AHtmlTranslator$get_$B4_0() {
        return this.$4Q_0.peek();
    },
    $5q_0: false,
    reset: function RTE_HtmlImport_AHtmlTranslator$reset() {
        this.normalizer.reset();
        this.$1t_0 = new (RTE.HtmlImport.Stack.$$(Object))();
        this.$4Q_0 = new (RTE.HtmlImport.Stack.$$(RTE.HtmlImport.IFormattingSteward))();
        this.$4Q_0.push(this.normalizer.get_defaultFormatting());
        this.$5q_0 = false;
    },
    onBeforeNewElement: function RTE_HtmlImport_AHtmlTranslator$onBeforeNewElement() {
        this.$5q_0 = false;
    },
    registerOnCloseCallback: function RTE_HtmlImport_AHtmlTranslator$registerOnCloseCallback(callback) {
        if (!this.$5q_0) {
            RTE.PasteCommon.Debug.$1v(!this.$1t_0.get_count() || !!this.$1t_0.peek(), 'When encountering a new element, we should have a non-null callback on top of the stack if it\'s not empty.', 582539);
            this.$1t_0.push(null);
            this.$5q_0 = true;
        }
        this.$1t_0.push(callback);
    },
    onClose: function RTE_HtmlImport_AHtmlTranslator$onClose() {
        RTE.PasteCommon.Debug.$1v(!!this.$1t_0.get_count() && !!this.$1t_0.peek(), 'In OnClose, we should have a non-null callback on top of the stack.', 582540);
        while (true) {
            var $v_0 = this.$1t_0.pop();

            if (!$v_0) {
                break;
            }
            var $v_1 = $v_0;

            $v_1();
        }
        RTE.PasteCommon.Debug.$1v(!this.$1t_0.get_count() || !!this.$1t_0.peek(), 'After OnClose, we should have a non-null callback on top of the stack if it\'s not empty.', 582541);
    },
    setFormattingFromAttributes: function RTE_HtmlImport_AHtmlTranslator$setFormattingFromAttributes(formatting, element) {
        return false;
    },
    notifyNormalizerOfCurrentFormatting: function RTE_HtmlImport_AHtmlTranslator$notifyNormalizerOfCurrentFormatting() {
        var $$t_0 = this;

        return this.handleSpecifiedFormatting(function() {
            return true;
        });
    },
    handleSpecifiedFormatting: function RTE_HtmlImport_AHtmlTranslator$handleSpecifiedFormatting(setFormattingOn) {
        var $v_0 = (this.get_$B4_0()).clone();

        if (setFormattingOn($v_0)) {
            this.$4Q_0.push($v_0);
            this.normalizer.onFormattingChange($v_0);
            this.registerOnCloseCallback(this.$$d_$K4_0);
            return true;
        }
        return false;
    },
    handleCommonAttributes: function RTE_HtmlImport_AHtmlTranslator$handleCommonAttributes(element) {
        if (!element.style) {
            return 2;
        }
        var $$t_3 = this;
        var $v_0 = this.handleSpecifiedFormatting(function($p1_0) {
            return $$t_3.setFormattingFromAttributes($p1_0, element);
        });

        return $v_0 ? 1 : 2;
    },
    $K4_0: function RTE_HtmlImport_AHtmlTranslator$$K4_0() {
        this.$4Q_0.pop();
        this.normalizer.onFormattingChange(this.get_$B4_0());
    },
    onText: function RTE_HtmlImport_AHtmlTranslator$onText(text) {
    },
    onAOpen: function RTE_HtmlImport_AHtmlTranslator$onAOpen(element) {
        return 2;
    },
    onAbbrOpen: function RTE_HtmlImport_AHtmlTranslator$onAbbrOpen(element) {
        RTE.PasteCommon.Debug.$E('ABBR tags are transparent by default.  If this behavior has been overriden, provide a real handler', 582542);
        return 2;
    },
    onAcronymOpen: function RTE_HtmlImport_AHtmlTranslator$onAcronymOpen(element) {
        RTE.PasteCommon.Debug.$E('ACRONYM tags are transparent by default.  If this behavior has been overriden, provide a real handler', 582543);
        return 2;
    },
    onAddressOpen: function RTE_HtmlImport_AHtmlTranslator$onAddressOpen(element) {
        RTE.PasteCommon.Debug.$E('ADDRESS tags are transparent by default.  If this behavior has been overriden, provide a real handler', 582544);
        return 2;
    },
    onAppletOpen: function RTE_HtmlImport_AHtmlTranslator$onAppletOpen(element) {
        RTE.PasteCommon.Debug.$E('APPLET tags are pruned by default.  If this behavior has been overriden, provide a real handler', 582545);
        return 3;
    },
    onAreaTag: function RTE_HtmlImport_AHtmlTranslator$onAreaTag(element) {
        RTE.PasteCommon.Debug.$E('AREA tags are pruned by default.  If this behavior has been overriden, provide a real handler', 582546);
    },
    onBOpen: function RTE_HtmlImport_AHtmlTranslator$onBOpen(element) {
        return 2;
    },
    onBaseTag: function RTE_HtmlImport_AHtmlTranslator$onBaseTag(element) {
        RTE.PasteCommon.Debug.$E('BASE tags are pruned by default.  If this behavior has been overriden, provide a real handler', 582547);
    },
    onBasefontTag: function RTE_HtmlImport_AHtmlTranslator$onBasefontTag(element) {
        RTE.PasteCommon.Debug.$E('BASEFONT tags are pruned by default.  If this behavior has been overriden, provide a real handler', 582548);
    },
    onBdoOpen: function RTE_HtmlImport_AHtmlTranslator$onBdoOpen(element) {
        RTE.PasteCommon.Debug.$E('BDO tags are transparent by default.  If this behavior has been overriden, provide a real handler', 582549);
        return 2;
    },
    onBigOpen: function RTE_HtmlImport_AHtmlTranslator$onBigOpen(element) {
        return 2;
    },
    onBlockquoteOpen: function RTE_HtmlImport_AHtmlTranslator$onBlockquoteOpen(element) {
        return 2;
    },
    onBodyOpen: function RTE_HtmlImport_AHtmlTranslator$onBodyOpen(element) {
        RTE.PasteCommon.Debug.$E('BODY tags are transparent by default.  If this behavior has been overriden, provide a real handler', 582550);
        return 2;
    },
    onBrTag: function RTE_HtmlImport_AHtmlTranslator$onBrTag(element) {
    },
    onButtonOpen: function RTE_HtmlImport_AHtmlTranslator$onButtonOpen(element) {
        RTE.PasteCommon.Debug.$E('BUTTON tags are transparent by default.  If this behavior has been overriden, provide a real handler', 582551);
        return 2;
    },
    onCaptionOpen: function RTE_HtmlImport_AHtmlTranslator$onCaptionOpen(element) {
        return 2;
    },
    onCenterOpen: function RTE_HtmlImport_AHtmlTranslator$onCenterOpen(element) {
        return 2;
    },
    onCiteOpen: function RTE_HtmlImport_AHtmlTranslator$onCiteOpen(element) {
        return 2;
    },
    onCodeOpen: function RTE_HtmlImport_AHtmlTranslator$onCodeOpen(element) {
        return 2;
    },
    onColTag: function RTE_HtmlImport_AHtmlTranslator$onColTag(element) {
    },
    onColgroupOpen: function RTE_HtmlImport_AHtmlTranslator$onColgroupOpen(element) {
        return 2;
    },
    onDdOpen: function RTE_HtmlImport_AHtmlTranslator$onDdOpen(element) {
        return 2;
    },
    onDelOpen: function RTE_HtmlImport_AHtmlTranslator$onDelOpen(element) {
        return 2;
    },
    onDfnOpen: function RTE_HtmlImport_AHtmlTranslator$onDfnOpen(element) {
        return 2;
    },
    onDirOpen: function RTE_HtmlImport_AHtmlTranslator$onDirOpen(element) {
        return 2;
    },
    onDivOpen: function RTE_HtmlImport_AHtmlTranslator$onDivOpen(element) {
        return 2;
    },
    onDlOpen: function RTE_HtmlImport_AHtmlTranslator$onDlOpen(element) {
        return 2;
    },
    onDtOpen: function RTE_HtmlImport_AHtmlTranslator$onDtOpen(element) {
        return 2;
    },
    onEmOpen: function RTE_HtmlImport_AHtmlTranslator$onEmOpen(element) {
        return 2;
    },
    onFieldsetOpen: function RTE_HtmlImport_AHtmlTranslator$onFieldsetOpen(element) {
        RTE.PasteCommon.Debug.$E('FIELDSET tags are transparent by default.  If this behavior has been overriden, provide a real handler', 582552);
        return 2;
    },
    onFontOpen: function RTE_HtmlImport_AHtmlTranslator$onFontOpen(element) {
        return 2;
    },
    onFormOpen: function RTE_HtmlImport_AHtmlTranslator$onFormOpen(element) {
        RTE.PasteCommon.Debug.$E('FORM tags are transparent by default.  If this behavior has been overriden, provide a real handler', 582553);
        return 2;
    },
    onFrameTag: function RTE_HtmlImport_AHtmlTranslator$onFrameTag(element) {
        RTE.PasteCommon.Debug.$E('FRAME tags are pruned by default.  If this behavior has been overriden, provide a real handler', 582554);
    },
    onFramesetOpen: function RTE_HtmlImport_AHtmlTranslator$onFramesetOpen(element) {
        RTE.PasteCommon.Debug.$E('FRAMESET tags are transparent by default.  If this behavior has been overriden, provide a real handler', 582555);
        return 2;
    },
    onH1Open: function RTE_HtmlImport_AHtmlTranslator$onH1Open(element) {
        return 2;
    },
    onH2Open: function RTE_HtmlImport_AHtmlTranslator$onH2Open(element) {
        return 2;
    },
    onH3Open: function RTE_HtmlImport_AHtmlTranslator$onH3Open(element) {
        return 2;
    },
    onH4Open: function RTE_HtmlImport_AHtmlTranslator$onH4Open(element) {
        return 2;
    },
    onH5Open: function RTE_HtmlImport_AHtmlTranslator$onH5Open(element) {
        return 2;
    },
    onH6Open: function RTE_HtmlImport_AHtmlTranslator$onH6Open(element) {
        return 2;
    },
    onHeadOpen: function RTE_HtmlImport_AHtmlTranslator$onHeadOpen(element) {
        RTE.PasteCommon.Debug.$E('HEAD tags are pruned by default.  If this behavior has been overriden, provide a real handler', 582556);
        return 3;
    },
    onHrTag: function RTE_HtmlImport_AHtmlTranslator$onHrTag(element) {
    },
    onHtmlOpen: function RTE_HtmlImport_AHtmlTranslator$onHtmlOpen(element) {
        return 2;
    },
    onIOpen: function RTE_HtmlImport_AHtmlTranslator$onIOpen(element) {
        return 2;
    },
    onIframeOpen: function RTE_HtmlImport_AHtmlTranslator$onIframeOpen(element) {
        RTE.PasteCommon.Debug.$E('IFRAME tags are pruned by default.  If this behavior has been overriden, provide a real handler', 582557);
        return 3;
    },
    onImgTag: function RTE_HtmlImport_AHtmlTranslator$onImgTag(element) {
    },
    onInputTag: function RTE_HtmlImport_AHtmlTranslator$onInputTag(element) {
        RTE.PasteCommon.Debug.$E('INPUT tags are pruned by default.  If this behavior has been overriden, provide a real handler', 582558);
    },
    onInsOpen: function RTE_HtmlImport_AHtmlTranslator$onInsOpen(element) {
        return 2;
    },
    onIsindexOpen: function RTE_HtmlImport_AHtmlTranslator$onIsindexOpen(element) {
        RTE.PasteCommon.Debug.$E('ISINDEX tags are pruned by default.  If this behavior has been overriden, provide a real handler', 582559);
        return 3;
    },
    onKbdOpen: function RTE_HtmlImport_AHtmlTranslator$onKbdOpen(element) {
        return 2;
    },
    onLabelOpen: function RTE_HtmlImport_AHtmlTranslator$onLabelOpen(element) {
        return 2;
    },
    onLegendOpen: function RTE_HtmlImport_AHtmlTranslator$onLegendOpen(element) {
        return 2;
    },
    onLiOpen: function RTE_HtmlImport_AHtmlTranslator$onLiOpen(element) {
        return 2;
    },
    onLinkTag: function RTE_HtmlImport_AHtmlTranslator$onLinkTag(element) {
        RTE.PasteCommon.Debug.$E('LINK tags are pruned by default.  If this behavior has been overriden, provide a real handler', 582560);
    },
    onMapOpen: function RTE_HtmlImport_AHtmlTranslator$onMapOpen(element) {
        RTE.PasteCommon.Debug.$E('MAP tags are pruned by default.  If this behavior has been overriden, provide a real handler', 582561);
        return 3;
    },
    onMenuOpen: function RTE_HtmlImport_AHtmlTranslator$onMenuOpen(element) {
        return 2;
    },
    onMetaTag: function RTE_HtmlImport_AHtmlTranslator$onMetaTag(element) {
        RTE.PasteCommon.Debug.$E('META tags are pruned by default.  If this behavior has been overriden, provide a real handler', 582562);
    },
    onNoframesOpen: function RTE_HtmlImport_AHtmlTranslator$onNoframesOpen(element) {
        RTE.PasteCommon.Debug.$E('NOFRAMES tags are transparent by default.  If this behavior has been overriden, provide a real handler', 582563);
        return 2;
    },
    onNoscriptOpen: function RTE_HtmlImport_AHtmlTranslator$onNoscriptOpen(element) {
        RTE.PasteCommon.Debug.$E('NOSCRIPT tags are transparent by default.  If this behavior has been overriden, provide a real handler', 582592);
        return 2;
    },
    onObjectOpen: function RTE_HtmlImport_AHtmlTranslator$onObjectOpen(element) {
        RTE.PasteCommon.Debug.$E('OBJECT tags are pruned by default.  If this behavior has been overriden, provide a real handler', 582593);
        return 3;
    },
    onOlOpen: function RTE_HtmlImport_AHtmlTranslator$onOlOpen(element) {
        return 2;
    },
    onOptgroupOpen: function RTE_HtmlImport_AHtmlTranslator$onOptgroupOpen(element) {
        RTE.PasteCommon.Debug.$E('OPTGROUP tags are transparent by default.  If this behavior has been overriden, provide a real handler', 582594);
        return 2;
    },
    onOptionOpen: function RTE_HtmlImport_AHtmlTranslator$onOptionOpen(element) {
        return 2;
    },
    onPOpen: function RTE_HtmlImport_AHtmlTranslator$onPOpen(element) {
        return 2;
    },
    onParamTag: function RTE_HtmlImport_AHtmlTranslator$onParamTag(element) {
        RTE.PasteCommon.Debug.$E('PARAM tags are pruned by default.  If this behavior has been overriden, provide a real handler', 582595);
    },
    onPreOpen: function RTE_HtmlImport_AHtmlTranslator$onPreOpen(element) {
        return 2;
    },
    onQOpen: function RTE_HtmlImport_AHtmlTranslator$onQOpen(element) {
        RTE.PasteCommon.Debug.$E('Q tags are transparent by default.  If this behavior has been overriden, provide a real handler', 582596);
        return 2;
    },
    onSOpen: function RTE_HtmlImport_AHtmlTranslator$onSOpen(element) {
        return 2;
    },
    onSampOpen: function RTE_HtmlImport_AHtmlTranslator$onSampOpen(element) {
        return 2;
    },
    onScriptOpen: function RTE_HtmlImport_AHtmlTranslator$onScriptOpen(element) {
        RTE.PasteCommon.Debug.$E('SCRIPT tags are pruned by default.  If this behavior has been overriden, provide a real handler', 582597);
        return 3;
    },
    onSelectOpen: function RTE_HtmlImport_AHtmlTranslator$onSelectOpen(element) {
        RTE.PasteCommon.Debug.$E('SELECT tags are transparent by default.  If this behavior has been overriden, provide a real handler', 582598);
        return 2;
    },
    onSmallOpen: function RTE_HtmlImport_AHtmlTranslator$onSmallOpen(element) {
        return 2;
    },
    onSpanOpen: function RTE_HtmlImport_AHtmlTranslator$onSpanOpen(element) {
        RTE.PasteCommon.Debug.$E('SPAN tags are transparent by default.  If this behavior has been overriden, provide a real handler', 582599);
        return 2;
    },
    onStrikeOpen: function RTE_HtmlImport_AHtmlTranslator$onStrikeOpen(element) {
        return 2;
    },
    onStrongOpen: function RTE_HtmlImport_AHtmlTranslator$onStrongOpen(element) {
        return 2;
    },
    onStyleOpen: function RTE_HtmlImport_AHtmlTranslator$onStyleOpen(element) {
        RTE.PasteCommon.Debug.$E('STYLE tags are pruned by default.  If this behavior has been overriden, provide a real handler', 582600);
        return 3;
    },
    onSubOpen: function RTE_HtmlImport_AHtmlTranslator$onSubOpen(element) {
        return 2;
    },
    onSupOpen: function RTE_HtmlImport_AHtmlTranslator$onSupOpen(element) {
        return 2;
    },
    onTableOpen: function RTE_HtmlImport_AHtmlTranslator$onTableOpen(element) {
        return 2;
    },
    onTbodyOpen: function RTE_HtmlImport_AHtmlTranslator$onTbodyOpen(element) {
        return 2;
    },
    onTdOpen: function RTE_HtmlImport_AHtmlTranslator$onTdOpen(element) {
        return 2;
    },
    onTextareaOpen: function RTE_HtmlImport_AHtmlTranslator$onTextareaOpen(element) {
        RTE.PasteCommon.Debug.$E('TEXTAREA tags are transparent by default.  If this behavior has been overriden, provide a real handler', 582601);
        return 2;
    },
    onTfootOpen: function RTE_HtmlImport_AHtmlTranslator$onTfootOpen(element) {
        return 2;
    },
    onThOpen: function RTE_HtmlImport_AHtmlTranslator$onThOpen(element) {
        return 2;
    },
    onTheadOpen: function RTE_HtmlImport_AHtmlTranslator$onTheadOpen(element) {
        return 2;
    },
    onTitleOpen: function RTE_HtmlImport_AHtmlTranslator$onTitleOpen(element) {
        RTE.PasteCommon.Debug.$E('TITLE tags are pruned by default.  If this behavior has been overriden, provide a real handler', 582602);
        return 3;
    },
    onTrOpen: function RTE_HtmlImport_AHtmlTranslator$onTrOpen(element) {
        return 2;
    },
    onTtOpen: function RTE_HtmlImport_AHtmlTranslator$onTtOpen(element) {
        return 2;
    },
    onUOpen: function RTE_HtmlImport_AHtmlTranslator$onUOpen(element) {
        return 2;
    },
    onUlOpen: function RTE_HtmlImport_AHtmlTranslator$onUlOpen(element) {
        return 2;
    },
    onVarOpen: function RTE_HtmlImport_AHtmlTranslator$onVarOpen(element) {
        return 2;
    },
    onUnknownOpen: function RTE_HtmlImport_AHtmlTranslator$onUnknownOpen(element) {
        RTE.PasteCommon.Debug.$E('If the HTML Processor has registered an unrecognized tag, its Translator must override OnUnknownOpen to handle it', 582603);
        return 2;
    }
};
RTE.HtmlImport.AQueuingHtmlNormalizer = function RTE_HtmlImport_AQueuingHtmlNormalizer($p0) {
    this.$$d_processTablePartEnd = Function.createDelegate(this, this.processTablePartEnd);
    this.$$d_processTablePartStart = Function.createDelegate(this, this.processTablePartStart);
    this.$$d_processTableCellEnd = Function.createDelegate(this, this.processTableCellEnd);
    this.$$d_processTableRowEnd = Function.createDelegate(this, this.processTableRowEnd);
    this.$$d_processTableRowStart = Function.createDelegate(this, this.processTableRowStart);
    this.$$d_processTableEnd = Function.createDelegate(this, this.processTableEnd);
    this.$$d_processListItemEnd = Function.createDelegate(this, this.processListItemEnd);
    this.$$d_processListEnd = Function.createDelegate(this, this.processListEnd);
    this.$$d_processParagraphEnd = Function.createDelegate(this, this.processParagraphEnd);
    this.$$d_processParagraphStart = Function.createDelegate(this, this.processParagraphStart);
    this.$$d_processAnchorEnd = Function.createDelegate(this, this.processAnchorEnd);
    this.$$d_processLineBreak = Function.createDelegate(this, this.processLineBreak);
    RTE.HtmlImport.AQueuingHtmlNormalizer.initializeBase(this, [$p0]);
};
RTE.HtmlImport.AQueuingHtmlNormalizer.prototype = {
    queueMode: false,
    onText: function RTE_HtmlImport_AQueuingHtmlNormalizer$onText(text) {
        if (this.queueMode) {
            var $$t_1 = this;

            (this.get_queueManager()).$a_0(function() {
                $$t_1.processText(text);
            });
            return;
        }
        this.processText(text);
    },
    processText: function RTE_HtmlImport_AQueuingHtmlNormalizer$processText(text) {
        this.steward.onText(text);
    },
    onLineBreak: function RTE_HtmlImport_AQueuingHtmlNormalizer$onLineBreak() {
        if (this.queueMode) {
            (this.get_queueManager()).$a_0(this.$$d_processLineBreak);
            return;
        }
        this.processLineBreak();
    },
    processLineBreak: function RTE_HtmlImport_AQueuingHtmlNormalizer$processLineBreak() {
        this.steward.onLineBreak();
    },
    onImage: function RTE_HtmlImport_AQueuingHtmlNormalizer$onImage(args) {
        if (this.queueMode) {
            var $$t_1 = this;

            (this.get_queueManager()).$a_0(function() {
                $$t_1.processImage(args);
            });
            return;
        }
        this.processImage(args);
    },
    processImage: function RTE_HtmlImport_AQueuingHtmlNormalizer$processImage(args) {
        this.steward.onImage(args);
    },
    onFormattingChange: function RTE_HtmlImport_AQueuingHtmlNormalizer$onFormattingChange(newFormatting) {
        if (this.queueMode) {
            var $$t_1 = this;

            (this.get_queueManager()).$a_0(function() {
                $$t_1.processFormattingChange(newFormatting);
            });
            return;
        }
        this.processFormattingChange(newFormatting);
    },
    processFormattingChange: function RTE_HtmlImport_AQueuingHtmlNormalizer$processFormattingChange(newFormatting) {
        this.steward.onFormattingChange(newFormatting);
    },
    onAnchorStart: function RTE_HtmlImport_AQueuingHtmlNormalizer$onAnchorStart(href) {
        if (this.queueMode) {
            var $$t_1 = this;

            (this.get_queueManager()).$a_0(function() {
                $$t_1.processAnchorStart(href);
            });
            return;
        }
        this.processAnchorStart(href);
    },
    processAnchorStart: function RTE_HtmlImport_AQueuingHtmlNormalizer$processAnchorStart(href) {
        this.steward.onAnchorStart(href);
    },
    onAnchorEnd: function RTE_HtmlImport_AQueuingHtmlNormalizer$onAnchorEnd() {
        if (this.queueMode) {
            (this.get_queueManager()).$a_0(this.$$d_processAnchorEnd);
            return;
        }
        this.processAnchorEnd();
    },
    processAnchorEnd: function RTE_HtmlImport_AQueuingHtmlNormalizer$processAnchorEnd() {
        this.steward.onAnchorEnd();
    },
    onParagraphStart: function RTE_HtmlImport_AQueuingHtmlNormalizer$onParagraphStart() {
        if (this.queueMode) {
            (this.get_queueManager()).$a_0(this.$$d_processParagraphStart);
            return;
        }
        this.processParagraphStart();
    },
    processParagraphStart: function RTE_HtmlImport_AQueuingHtmlNormalizer$processParagraphStart() {
        this.steward.onParagraphStart();
    },
    onParagraphEnd: function RTE_HtmlImport_AQueuingHtmlNormalizer$onParagraphEnd() {
        if (this.queueMode) {
            (this.get_queueManager()).$a_0(this.$$d_processParagraphEnd);
            return;
        }
        this.processParagraphEnd();
    },
    processParagraphEnd: function RTE_HtmlImport_AQueuingHtmlNormalizer$processParagraphEnd() {
        this.steward.onParagraphEnd();
    },
    onListStart: function RTE_HtmlImport_AQueuingHtmlNormalizer$onListStart(args) {
        if (this.queueMode) {
            var $$t_1 = this;

            (this.get_queueManager()).$a_0(function() {
                $$t_1.processListStart(args);
            });
            return;
        }
        this.processListStart(args);
    },
    processListStart: function RTE_HtmlImport_AQueuingHtmlNormalizer$processListStart(args) {
        this.steward.onListStart(args);
    },
    onListEnd: function RTE_HtmlImport_AQueuingHtmlNormalizer$onListEnd() {
        if (this.queueMode) {
            (this.get_queueManager()).$a_0(this.$$d_processListEnd);
            return;
        }
        this.processListEnd();
    },
    processListEnd: function RTE_HtmlImport_AQueuingHtmlNormalizer$processListEnd() {
        this.steward.onListEnd();
    },
    onListItemStart: function RTE_HtmlImport_AQueuingHtmlNormalizer$onListItemStart(args) {
        if (this.queueMode) {
            var $$t_1 = this;

            (this.get_queueManager()).$a_0(function() {
                $$t_1.processListItemStart(args);
            });
            return;
        }
        this.processListItemStart(args);
    },
    processListItemStart: function RTE_HtmlImport_AQueuingHtmlNormalizer$processListItemStart(args) {
        this.steward.onListItemStart(args);
    },
    onListItemEnd: function RTE_HtmlImport_AQueuingHtmlNormalizer$onListItemEnd() {
        if (this.queueMode) {
            (this.get_queueManager()).$a_0(this.$$d_processListItemEnd);
            return;
        }
        this.processListItemEnd();
    },
    processListItemEnd: function RTE_HtmlImport_AQueuingHtmlNormalizer$processListItemEnd() {
        this.steward.onListItemEnd();
    },
    onTableStart: function RTE_HtmlImport_AQueuingHtmlNormalizer$onTableStart(args) {
        if (this.queueMode) {
            var $$t_1 = this;

            (this.get_queueManager()).$a_0(function() {
                $$t_1.processTableStart(args);
            });
            return;
        }
        this.processTableStart(args);
    },
    processTableStart: function RTE_HtmlImport_AQueuingHtmlNormalizer$processTableStart(args) {
        this.steward.onTableStart(args);
    },
    onTableEnd: function RTE_HtmlImport_AQueuingHtmlNormalizer$onTableEnd() {
        if (this.queueMode) {
            (this.get_queueManager()).$a_0(this.$$d_processTableEnd);
            return;
        }
        this.processTableEnd();
    },
    processTableEnd: function RTE_HtmlImport_AQueuingHtmlNormalizer$processTableEnd() {
        this.steward.onTableEnd();
    },
    onTableRowStart: function RTE_HtmlImport_AQueuingHtmlNormalizer$onTableRowStart() {
        if (this.queueMode) {
            (this.get_queueManager()).$a_0(this.$$d_processTableRowStart);
            return;
        }
        this.processTableRowStart();
    },
    processTableRowStart: function RTE_HtmlImport_AQueuingHtmlNormalizer$processTableRowStart() {
        this.steward.onTableRowStart();
    },
    onTableRowEnd: function RTE_HtmlImport_AQueuingHtmlNormalizer$onTableRowEnd() {
        if (this.queueMode) {
            (this.get_queueManager()).$a_0(this.$$d_processTableRowEnd);
            return;
        }
        this.processTableRowEnd();
    },
    processTableRowEnd: function RTE_HtmlImport_AQueuingHtmlNormalizer$processTableRowEnd() {
        this.steward.onTableRowEnd();
    },
    onTableCellStart: function RTE_HtmlImport_AQueuingHtmlNormalizer$onTableCellStart(args) {
        if (this.queueMode) {
            var $$t_1 = this;

            (this.get_queueManager()).$a_0(function() {
                $$t_1.processTableCellStart(args);
            });
            return;
        }
        this.processTableCellStart(args);
    },
    processTableCellStart: function RTE_HtmlImport_AQueuingHtmlNormalizer$processTableCellStart(args) {
        this.steward.onTableCellStart(args);
    },
    onTableCellEnd: function RTE_HtmlImport_AQueuingHtmlNormalizer$onTableCellEnd() {
        if (this.queueMode) {
            (this.get_queueManager()).$a_0(this.$$d_processTableCellEnd);
            return;
        }
        this.processTableCellEnd();
    },
    processTableCellEnd: function RTE_HtmlImport_AQueuingHtmlNormalizer$processTableCellEnd() {
        this.steward.onTableCellEnd();
    },
    onTablePartStart: function RTE_HtmlImport_AQueuingHtmlNormalizer$onTablePartStart() {
        if (this.queueMode) {
            (this.get_queueManager()).$a_0(this.$$d_processTablePartStart);
            return;
        }
        this.processTablePartStart();
    },
    processTablePartStart: function RTE_HtmlImport_AQueuingHtmlNormalizer$processTablePartStart() {
        this.steward.onTablePartStart();
    },
    onTablePartEnd: function RTE_HtmlImport_AQueuingHtmlNormalizer$onTablePartEnd() {
        if (this.queueMode) {
            (this.get_queueManager()).$a_0(this.$$d_processTablePartEnd);
            return;
        }
        this.processTablePartEnd();
    },
    processTablePartEnd: function RTE_HtmlImport_AQueuingHtmlNormalizer$processTablePartEnd() {
        this.steward.onTablePartEnd();
    }
};
RTE.HtmlImport.DefaultHtmlNormalizer = function RTE_HtmlImport_DefaultHtmlNormalizer(pasteSteward) {
    RTE.HtmlImport.DefaultHtmlNormalizer.initializeBase(this, [pasteSteward]);
    this.$2B_2 = new (RTE.HtmlImport.Stack.$$(RTE.HtmlImport.DefaultHtmlNormalizer.ContentState))();
};
RTE.HtmlImport.DefaultHtmlNormalizer.prototype = {
    $8_2: null,
    $2B_2: null,
    reset: function RTE_HtmlImport_DefaultHtmlNormalizer$reset() {
        RTE.HtmlImport.AHtmlNormalizer.prototype.reset.call(this);
        this.$8_2 = new RTE.HtmlImport.DefaultHtmlNormalizer.ContentState(this);
        this.$2B_2.clear();
        this.queueMode = false;
    },
    get_queueManager: function RTE_HtmlImport_DefaultHtmlNormalizer$get_queueManager() {
        return this.$8_2 && this.$8_2.get_$2C_1() ? this.$8_2.$28_1 : this.$8_2;
    },
    ensureReadyForText: function RTE_HtmlImport_DefaultHtmlNormalizer$ensureReadyForText(doNotCreateHyperlink) {
        RTE.PasteCommon.Debug.$AW(this.$8_2.$3H_1, this.$8_2.$3z_1 === !this.$8_2.$3G_1, 582607);
        if (!this.$8_2.$3G_1) {
            this.closeExpiredImpliedList();
            this.steward.onParagraphStart();
            this.$8_2.$3G_1 = true;
            this.$8_2.$3z_1 = false;
        }
        if (!doNotCreateHyperlink && this.$8_2.$4g_1 && !this.$8_2.$51_1) {
            this.steward.onAnchorStart(this.$8_2.$4g_1);
            this.$8_2.$51_1 = true;
        }
    },
    ensureOutsideHyperlink: function RTE_HtmlImport_DefaultHtmlNormalizer$ensureOutsideHyperlink() {
        if (!this.$8_2.$51_1) {
            return;
        }
        RTE.PasteCommon.Debug.assertTag(this.$8_2.$3G_1 && !!this.$8_2.$4g_1, 582608);
        this.steward.onAnchorEnd();
        this.$8_2.$51_1 = false;
    },
    ensureOutsideParagraph: function RTE_HtmlImport_DefaultHtmlNormalizer$ensureOutsideParagraph() {
        RTE.PasteCommon.Debug.$1v(!this.$8_2.$51_1, 'It\'s invalid to call EnsureOutsideParagraph while inside a hyperlink!', 582609);
        if (!this.$8_2.$3G_1) {
            return;
        }
        this.steward.onParagraphEnd();
        this.$8_2.$3G_1 = false;
        this.$8_2.$70_1 = '';
    },
    ensureOutsideListItem: function RTE_HtmlImport_DefaultHtmlNormalizer$ensureOutsideListItem(ignoreIfEmpty) {
        RTE.PasteCommon.Debug.$1v(!this.$8_2.$3G_1, 'It\'s invalid to call EnsureOutsideListItem while inside a paragraph!', 582610);
        if (!this.$8_2.$3H_1) {
            return;
        }
        if (this.$8_2.$3z_1) {
            if (!ignoreIfEmpty) {
                this.steward.onParagraphStart();
                this.steward.onParagraphEnd();
                this.steward.onListItemEnd();
                this.$8_2.$3H_1 = false;
            }
        }
        else {
            this.steward.onListItemEnd();
            this.$8_2.$3H_1 = false;
            this.$8_2.$3z_1 = true;
        }
    },
    ensureCurrentContentEnded: function RTE_HtmlImport_DefaultHtmlNormalizer$ensureCurrentContentEnded(ignoreEmptyListItems) {
        this.ensureOutsideHyperlink();
        this.ensureOutsideParagraph();
        this.ensureOutsideListItem(ignoreEmptyListItems);
    },
    openNewImpliedList: function RTE_HtmlImport_DefaultHtmlNormalizer$openNewImpliedList() {
        this.steward.onListStart(new RTE.HtmlImport.ListSemanticArgs(2, 1));
        this.$8_2.$3R_1++;
        this.$8_2.$6e_1 = true;
    },
    closeExpiredImpliedList: function RTE_HtmlImport_DefaultHtmlNormalizer$closeExpiredImpliedList() {
        if (!this.$8_2.$3H_1 && this.$8_2.$6e_1) {
            RTE.PasteCommon.Debug.assertTag(this.$8_2.$3R_1 === 1, 582611);
            this.steward.onListEnd();
            this.$8_2.$3R_1--;
            this.$8_2.$6e_1 = false;
        }
    },
    processText: function RTE_HtmlImport_DefaultHtmlNormalizer$processText(text) {
        text = text.replace(RTE.HtmlImport.DefaultHtmlNormalizer.$CF, ' ');
        if (text.startsWith(' ') && (this.$8_2.$70_1.endsWith(' ') || this.$8_2.$70_1 === '')) {
            text = text.substring(1, text.length);
        }
        if (text === '') {
            return;
        }
        this.$8_2.$70_1 += text;
        this.ensureReadyForText();
        this.steward.onText(text);
    },
    processLineBreak: function RTE_HtmlImport_DefaultHtmlNormalizer$processLineBreak() {
        this.ensureOutsideHyperlink();
        this.ensureReadyForText(true);
        this.steward.onLineBreak();
    },
    processFormattingChange: function RTE_HtmlImport_DefaultHtmlNormalizer$processFormattingChange(newFormatting) {
        if (this.$8_2.get_$2C_1()) {
            return;
        }
        this.steward.onFormattingChange(newFormatting);
    },
    processAnchorStart: function RTE_HtmlImport_DefaultHtmlNormalizer$processAnchorStart(href) {
        this.ensureOutsideHyperlink();
        this.$8_2.$4g_1 = href;
    },
    processAnchorEnd: function RTE_HtmlImport_DefaultHtmlNormalizer$processAnchorEnd() {
        this.ensureOutsideHyperlink();
        this.$8_2.$4g_1 = null;
    },
    processParagraphStart: function RTE_HtmlImport_DefaultHtmlNormalizer$processParagraphStart() {
        this.ensureCurrentContentEnded(true);
    },
    processParagraphEnd: function RTE_HtmlImport_DefaultHtmlNormalizer$processParagraphEnd() {
        this.ensureCurrentContentEnded(true);
    },
    processListStart: function RTE_HtmlImport_DefaultHtmlNormalizer$processListStart(args) {
        this.ensureCurrentContentEnded(false);
        this.closeExpiredImpliedList();
        this.steward.onListStart(args);
        this.$8_2.$3R_1++;
    },
    processListEnd: function RTE_HtmlImport_DefaultHtmlNormalizer$processListEnd() {
        RTE.PasteCommon.Debug.assertTag(this.$8_2.$3R_1 > 0 && !this.$8_2.$6e_1, 582612);
        this.ensureCurrentContentEnded(false);
        this.steward.onListEnd();
        this.$8_2.$3R_1--;
    },
    processListItemStart: function RTE_HtmlImport_DefaultHtmlNormalizer$processListItemStart(args) {
        RTE.PasteCommon.Debug.$1v(!this.$8_2.$3H_1, 'It had seemed that the browser wouldn\'t ever nest LIs in the DOM, but apparently it does.\nInvestigate this case, and then turn this Assert into a Log (or remove it)', 582613);
        this.ensureCurrentContentEnded(false);
        if (!this.$8_2.$3R_1) {
            this.openNewImpliedList();
        }
        this.steward.onListItemStart(args);
        this.$8_2.$3H_1 = true;
        this.$8_2.$3z_1 = true;
    },
    processListItemEnd: function RTE_HtmlImport_DefaultHtmlNormalizer$processListItemEnd() {
        this.ensureCurrentContentEnded(false);
    },
    onTableStart: function RTE_HtmlImport_DefaultHtmlNormalizer$onTableStart(args) {
        if (this.$8_2.get_$2C_1()) {
            return;
        }
        RTE.PasteCommon.Debug.assertTag(this.queueMode === !this.$2B_2.get_isEmpty(), 582614);
        RTE.PasteCommon.Debug.$AW(!this.queueMode, (this.get_queueManager()).get_$JK_0(), 582615);
        this.queueMode = true;
        this.$8_2.$28_1 = new RTE.HtmlImport.DefaultHtmlNormalizer.NormalizedTable(this);
    },
    processTableStart: function RTE_HtmlImport_DefaultHtmlNormalizer$processTableStart(args) {
        RTE.PasteCommon.Debug.$E('We should handle Tables directly in OnTableStart', 582616);
    },
    onTableEnd: function RTE_HtmlImport_DefaultHtmlNormalizer$onTableEnd() {
        RTE.PasteCommon.Debug.assertTag(this.queueMode && this.$8_2.get_$2C_1(), 582617);
        if (!this.$8_2.$28_1) {
            return;
        }
        var $v_0 = this.$8_2.$28_1;

        this.$8_2.$28_1 = null;
        if (this.$2B_2.get_isEmpty()) {
            this.queueMode = false;
            $v_0.$Bb_1();
        }
        else {
            (this.get_queueManager()).$a_0($v_0.$$d_$Bb_1);
        }
    },
    processTableEnd: function RTE_HtmlImport_DefaultHtmlNormalizer$processTableEnd() {
        RTE.PasteCommon.Debug.$E('We should handle Tables directly in OnTableEnd', 582618);
    },
    onTableRowStart: function RTE_HtmlImport_DefaultHtmlNormalizer$onTableRowStart() {
        if (!this.$8_2.get_$2C_1()) {
            return;
        }
        this.$8_2.$28_1.$En_1();
    },
    processTableRowStart: function RTE_HtmlImport_DefaultHtmlNormalizer$processTableRowStart() {
        RTE.PasteCommon.Debug.$E('We should handle Table Rows directly in OnTableRowStart', 582619);
    },
    onTableRowEnd: function RTE_HtmlImport_DefaultHtmlNormalizer$onTableRowEnd() {
    },
    processTableRowEnd: function RTE_HtmlImport_DefaultHtmlNormalizer$processTableRowEnd() {
        RTE.PasteCommon.Debug.$E('We should handle Table Rows directly in OnTableRowEnd', 582620);
    },
    onTableCellStart: function RTE_HtmlImport_DefaultHtmlNormalizer$onTableCellStart(args) {
        var $v_0 = false;

        if (this.$8_2.get_$2C_1()) {
            var $v_1 = new RTE.HtmlImport.DefaultHtmlNormalizer.ContentState(this);

            if (this.$8_2.$28_1.$El_1(args.colSpan, args.rowSpan, $v_1)) {
                this.$2B_2.push(this.$8_2);
                this.$8_2 = $v_1;
            }
            else {
                $v_0 = true;
            }
        }
        else {
            $v_0 = true;
        }
        if ($v_0) {
            this.$8_2.$9A_1++;
        }
    },
    processTableCellStart: function RTE_HtmlImport_DefaultHtmlNormalizer$processTableCellStart(args) {
        RTE.PasteCommon.Debug.$E('We should handle Table Cells directly in OnTableCellStart', 582621);
    },
    onTableCellEnd: function RTE_HtmlImport_DefaultHtmlNormalizer$onTableCellEnd() {
        if (this.$8_2.$9A_1 > 0) {
            this.$8_2.$9A_1--;
            return;
        }
        RTE.PasteCommon.Debug.assertTag(!this.$2B_2.get_isEmpty() && !this.$8_2.get_$2C_1(), 582622);
        this.$8_2 = this.$2B_2.pop();
        RTE.PasteCommon.Debug.assertTag(this.$8_2.get_$2C_1(), 582623);
    },
    processTableCellEnd: function RTE_HtmlImport_DefaultHtmlNormalizer$processTableCellEnd() {
        RTE.PasteCommon.Debug.$E('We should handle Table Cells directly in OnTableCellEnd', 582624);
    }
};
RTE.HtmlImport.DefaultHtmlNormalizer.NormalizedTable = function RTE_HtmlImport_DefaultHtmlNormalizer_NormalizedTable($p0) {
    this.$$d_$Bb_1 = Function.createDelegate(this, this.$Bb_1);
    RTE.HtmlImport.DefaultHtmlNormalizer.NormalizedTable.initializeBase(this);
    this.$r_1 = $p0;
    this.$1Z_1 = new (RTE.HtmlImport.List.$$(Array))();
    this.$5t_1 = new Array(0);
    this.$2U_1 = -1;
    this.$2A_1 = 0;
};
RTE.HtmlImport.DefaultHtmlNormalizer.NormalizedTable.prototype = {
    $r_1: null,
    get_$4M_1: function RTE_HtmlImport_DefaultHtmlNormalizer_NormalizedTable$get_$4M_1() {
        return this.$r_1.steward;
    },
    $1Z_1: null,
    $2U_1: 0,
    $2A_1: 0,
    $5t_1: null,
    $En_1: function RTE_HtmlImport_DefaultHtmlNormalizer_NormalizedTable$$En_1() {
        this.$2U_1++;
        this.$2A_1 = 0;
    },
    get_$HV_1: function RTE_HtmlImport_DefaultHtmlNormalizer_NormalizedTable$get_$HV_1() {
        while (this.$2A_1 >= this.$1Z_1.get_count()) {
            this.$1Z_1.add(new Array(this.$2U_1 + 1));
        }
        return this.$1Z_1.get_item(this.$2A_1);
    },
    $El_1: function RTE_HtmlImport_DefaultHtmlNormalizer_NormalizedTable$$El_1($p0, $p1, $p2) {
        if (this.$2U_1 < 0) {
            return false;
        }
        while (this.$5t_1[this.$2A_1] >= this.$2U_1) {
            this.$2A_1++;
        }
        var $v_0 = new RTE.HtmlImport.DefaultHtmlNormalizer.NormalizedTable.TableCell($p0, $p1, $p2);

        (this.get_$HV_1())[this.$2U_1] = $v_0;
        if ($v_0.$7J_0 > 1) {
            var $v_1 = this.$2U_1 + $v_0.$7J_0 - 1;
            var $v_2 = this.$2A_1;
            var $v_3 = this.$2A_1 + $v_0.$67_0 - 1;

            for (var $v_4 = $v_2; $v_4 <= $v_3; $v_4++) {
                if (this.$5t_1[$v_4] >= $v_1) {
                    continue;
                }
                this.$5t_1[$v_4] = $v_1;
            }
        }
        this.$2A_1 += $v_0.$67_0;
        return true;
    },
    $L9_0: function RTE_HtmlImport_DefaultHtmlNormalizer_NormalizedTable$$L9_0() {
        RTE.PasteCommon.Debug.assertTag(!this.$r_1.$8_2.get_$2C_1(), 582605);
        this.$r_1.$8_2.$28_1 = this;
    },
    $Ku_0: function RTE_HtmlImport_DefaultHtmlNormalizer_NormalizedTable$$Ku_0() {
        this.$r_1.$8_2.$28_1 = null;
    },
    $Bb_1: function RTE_HtmlImport_DefaultHtmlNormalizer_NormalizedTable$$Bb_1() {
        this.$Ba_0(true);
        var $v_0 = this.$2U_1 + 1;
        var $v_1 = true;

        for (var $v_2 = 0; $v_2 < this.$1Z_1.get_count(); $v_2++) {
            var $v_3 = this.$1Z_1.get_item($v_2);
            var $v_4 = true;

            for (var $v_5 = 0; $v_5 < $v_0; $v_5++) {
                if ($v_3[$v_5]) {
                    $v_4 = false;
                    break;
                }
            }
            if ($v_4) {
                this.$1Z_1.removeAt($v_2);
                $v_2--;
            }
            else {
                $v_1 = false;
            }
        }
        if ($v_1) {
            return;
        }
        this.$r_1.ensureCurrentContentEnded(true);
        this.$r_1.closeExpiredImpliedList();
        RTE.PasteCommon.Debug.assertTag($v_0 > 0 && this.$1Z_1.get_count() > 0, 582606);
        (this.get_$4M_1()).onTableStart(new RTE.HtmlImport.TableSemanticArgs($v_0, this.$1Z_1.get_count()));
        for (var $v_6 = 0; $v_6 < $v_0; $v_6++) {
            (this.get_$4M_1()).onTableRowStart();
            for (var $v_7 = 0; $v_7 < this.$1Z_1.get_count(); $v_7++) {
                var $v_8 = (this.$1Z_1.get_item($v_7))[$v_6];
                var $v_9 = !$v_8 ? 0 : $v_8.$67_0;
                var $v_A = !$v_8 ? 0 : $v_8.$7J_0;

                (this.get_$4M_1()).onTableCellStart(new RTE.HtmlImport.TableCellSemanticArgs($v_9, $v_A));
                if ($v_8) {
                    $v_8.$68_0.$L9_0();
                    $v_8.$68_0.$Ba_0();
                    this.$r_1.ensureCurrentContentEnded(false);
                    this.$r_1.closeExpiredImpliedList();
                    $v_8.$68_0.$Ku_0();
                }
                (this.get_$4M_1()).onTableCellEnd();
            }
            (this.get_$4M_1()).onTableRowEnd();
        }
        (this.get_$4M_1()).onTableEnd();
        this.$r_1.$8_2.$3z_1 = false;
        this.$r_1.ensureOutsideListItem(false);
    }
};
RTE.HtmlImport.DefaultHtmlNormalizer.NormalizedTable.TableCell = function RTE_HtmlImport_DefaultHtmlNormalizer_NormalizedTable_TableCell($p0, $p1, $p2) {
    RTE.PasteCommon.Debug.assertTag($p0 > 0 && $p1 > 0 && !!$p2, 582604);
    this.$67_0 = $p0;
    this.$7J_0 = $p1;
    this.$68_0 = $p2;
};
RTE.HtmlImport.DefaultHtmlNormalizer.ContentState = function RTE_HtmlImport_DefaultHtmlNormalizer_ContentState($p0) {
    RTE.HtmlImport.DefaultHtmlNormalizer.ContentState.initializeBase(this);
    this.$r_1 = $p0;
};
RTE.HtmlImport.DefaultHtmlNormalizer.ContentState.prototype = {
    $r_1: null,
    $3G_1: false,
    $70_1: '',
    $51_1: false,
    $4g_1: null,
    $3R_1: 0,
    $6e_1: false,
    $3H_1: false,
    $3z_1: false,
    $28_1: null,
    get_$2C_1: function RTE_HtmlImport_DefaultHtmlNormalizer_ContentState$get_$2C_1() {
        return !!this.$28_1;
    },
    $9A_1: 0,
    $L9_0: function RTE_HtmlImport_DefaultHtmlNormalizer_ContentState$$L9_0() {
        this.$r_1.$2B_2.push(this.$r_1.$8_2);
        this.$r_1.$8_2 = this;
    },
    $Ku_0: function RTE_HtmlImport_DefaultHtmlNormalizer_ContentState$$Ku_0() {
        this.$r_1.$8_2 = this.$r_1.$2B_2.pop();
    }
};
RTE.HtmlImport.DefaultHtmlTranslator = function RTE_HtmlImport_DefaultHtmlTranslator(normalizer) {
    this.$$d_$K9_1 = Function.createDelegate(this, this.$K9_1);
    this.$AB_1 = {
        none: 1,
        disc: 3,
        circle: 4,
        square: 5,
        '1': 7,
        A: 10,
        a: 8,
        I: 11,
        i: 9,
        armenian: 7,
        decimal: 7,
        'decimal-leading-zero': 7,
        georgian: 7,
        'lower-alpha': 8,
        'lower-greek': 8,
        'lower-latin': 8,
        'lower-roman': 9,
        'upper-alpha': 10,
        'upper-latin': 10,
        'upper-roman': 11
    };
    RTE.HtmlImport.DefaultHtmlTranslator.initializeBase(this, [normalizer]);
};
RTE.HtmlImport.DefaultHtmlTranslator.$8D = function RTE_HtmlImport_DefaultHtmlTranslator$$8D($p0) {
    var $v_0 = '';

    if (!$p0 || $p0 === '') {
        return $v_0;
    }
    $v_0 = $p0.trim();
    if ($v_0.startsWith('rgb')) {
        $v_0 = $v_0.substring($v_0.indexOf('(') + 1, $v_0.length - 1);
        var $v_1 = $v_0.split(',');

        if ($v_1.length !== 3) {
            return '';
        }
        $v_0 = '';
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = parseInt($v_1[$v_2]);

            if (isNaN($v_3) || $v_3 < 0 || $v_3 > 255) {
                return '';
            }
            var $v_4 = $v_3.toString(16);

            if ($v_4.length === 1) {
                $v_4 = '0' + $v_4;
            }
            $v_0 += $v_4;
        }
        return $v_0;
    }
    if (RTE.HtmlImport.DefaultHtmlTranslator.$8e[$v_0.toLowerCase()]) {
        return RTE.HtmlImport.DefaultHtmlTranslator.$8e[$v_0.toLowerCase()];
    }
    if ($v_0.startsWith('#')) {
        $v_0 = $v_0.substring(1, $v_0.length);
    }
    if (isNaN(parseInt($v_0, 16)) || $v_0.length !== 6) {
        return '';
    }
    return $v_0;
};
RTE.HtmlImport.DefaultHtmlTranslator.$Cg = function RTE_HtmlImport_DefaultHtmlTranslator$$Cg($p0) {
    if (!$p0 || $p0 === '') {
        return false;
    }
    $p0 = $p0.toLowerCase();
    return $p0.indexOf('monospace') >= 0 || $p0.indexOf('consolas') >= 0 || $p0.indexOf('courier') >= 0;
};
RTE.HtmlImport.DefaultHtmlTranslator.$Bh = function RTE_HtmlImport_DefaultHtmlTranslator$$Bh($p0, $p1, $p2) {
    RTE.PasteCommon.Debug.assertTag($p2 >= 0, 596181);
    var $v_0 = $p0[$p1];
    var $v_1 = parseInt($v_0);

    RTE.PasteCommon.Debug.log('GetAttributeValueAsNonNegativeInt(' + ($p0.tagName || DOMElementType.toString($p0.nodeType)) + ', ' + $p1 + ')\n' + 'rawValue:  ' + $v_0 + ' | ' + 'intValue:  ' + $v_1, 'HtmlImport.Translator', RTE.PasteCommon.LogLevel.$7f);
    return isNaN($v_1) || $v_1 < 0 ? $p2 : $v_1;
};
RTE.HtmlImport.DefaultHtmlTranslator.prototype = {
    $4R_1: null,
    get_listStyleTypes: function RTE_HtmlImport_DefaultHtmlTranslator$get_listStyleTypes() {
        return this.$AB_1;
    },
    getListStyleTypeFromElement: function RTE_HtmlImport_DefaultHtmlTranslator$getListStyleTypeFromElement(element, defaultType) {
        var $v_0;
        var $v_1 = !element.style ? '' : element.style.listStyleType;

        if ($v_1 && $v_1 !== '') {
            RTE.PasteCommon.Debug.log('list-style-type:  ' + $v_1, 'HtmlImport.Translator', RTE.PasteCommon.LogLevel.$7f);
            $v_0 = (this.get_listStyleTypes())[$v_1];
            if ($v_0) {
                return $v_0;
            }
        }
        var $v_2 = element.type;

        if ($v_2 && $v_2 !== '') {
            RTE.PasteCommon.Debug.log('list type attribute:  ' + $v_1, 'HtmlImport.Translator', RTE.PasteCommon.LogLevel.$7f);
            $v_0 = (this.get_listStyleTypes())[$v_2.toLowerCase()];
            if ($v_0) {
                return $v_0;
            }
        }
        return defaultType;
    },
    $K9_1: function RTE_HtmlImport_DefaultHtmlTranslator$$K9_1() {
        this.$4R_1.pop();
        this.normalizer.onListEnd();
    },
    $4u_1: function RTE_HtmlImport_DefaultHtmlTranslator$$4u_1($p0, $p1) {
        var $v_0 = this.getListStyleTypeFromElement($p0, $p1 ? 6 : 2);
        var $v_1;

        if ($p1) {
            var $v_2 = RTE.HtmlImport.DefaultHtmlTranslator.$Bh($p0, 'start', 1);

            $v_1 = new RTE.HtmlImport.ListSemanticArgs($v_0, $v_2);
        }
        else {
            $v_1 = new RTE.HtmlImport.ListSemanticArgs($v_0, 1);
        }
        this.$4R_1.push($v_1);
        this.normalizer.onListStart($v_1);
        this.registerOnCloseCallback(this.$$d_$K9_1);
        return 1;
    },
    reset: function RTE_HtmlImport_DefaultHtmlTranslator$reset() {
        RTE.HtmlImport.AHtmlTranslator.prototype.reset.call(this);
        this.$4R_1 = new (RTE.HtmlImport.Stack.$$(RTE.HtmlImport.ListSemanticArgs))();
    },
    setFormattingFromAttributes: function RTE_HtmlImport_DefaultHtmlTranslator$setFormattingFromAttributes(formatting, element) {
        var $v_0 = false;
        var $v_1;

        try {
            $v_1 = element.getAttribute('xml:lang') || element.lang;
        }
        catch ($$e_4) {
            RTE.PasteCommon.Debug.log('Exception getting the lang or xml:lang attribute', 'HtmlImport.Translator', RTE.PasteCommon.LogLevel.$Eg);
            $v_1 = null;
        }
        if ($v_1 && $v_1 !== '') {
            $v_0 = formatting.setLang($v_1) || $v_0;
        }
        var $v_2 = element.dir;

        if ($v_2) {
            $v_0 = formatting.setTextDir($v_2) || $v_0;
        }
        var $v_3 = element.style;

        if ($v_3) {
            if ($v_3.fontWeight) {
                var $v_5 = RTE.PasteCommon.StringUtils.toUpper($v_3.fontWeight);
                var $v_6 = parseInt($v_5);

                if (!isNaN($v_6)) {
                    if ($v_6 >= 600) {
                        $v_0 = formatting.setBold(true) || $v_0;
                    }
                    else {
                        $v_0 = formatting.setBold(false) || $v_0;
                    }
                }
                else if ($v_5 === 'BOLD') {
                    $v_0 = formatting.setBold(true) || $v_0;
                }
                else if ($v_5 === 'NORMAL') {
                    $v_0 = formatting.setBold(false) || $v_0;
                }
            }
            if ($v_3.textAlign) {
                $v_0 = formatting.setTextAlign($v_3.textAlign.toLowerCase()) || $v_0;
            }
            if ($v_3.fontStyle) {
                var $v_7 = RTE.PasteCommon.StringUtils.toUpper($v_3.fontStyle);

                if ($v_7 === 'ITALIC' || $v_7 === 'OBLIQUE') {
                    $v_0 = formatting.setItalics(true) || $v_0;
                }
                else if ($v_7 === 'NORMAL') {
                    $v_0 = formatting.setItalics(false) || $v_0;
                }
            }
            var $v_4 = $v_3.textDecoration.toLowerCase();

            if ($v_3.textDecorationUnderline || $v_4.indexOf('underline') >= 0) {
                $v_0 = formatting.setUnderline(true) || $v_0;
            }
            if ($v_3.textDecorationLineThrough || $v_4.indexOf('line-through') >= 0) {
                $v_0 = formatting.setStrikethrough(true) || $v_0;
            }
            if ($v_3.verticalAlign) {
                var $v_8 = RTE.PasteCommon.StringUtils.toUpper($v_3.verticalAlign);

                if ($v_8 === 'SUB') {
                    $v_0 = formatting.setSubscript(true) || $v_0;
                }
                else if ($v_8 === 'SUPER') {
                    $v_0 = formatting.setSuperscript(true) || $v_0;
                }
            }
            if ($v_3.fontFamily) {
                if (RTE.HtmlImport.DefaultHtmlTranslator.$Cg($v_3.fontFamily)) {
                    $v_0 = formatting.setFontface('consolas') || $v_0;
                }
            }
            if ($v_3.color) {
                var $v_9 = $v_3.color;

                $v_0 = formatting.setFontColor(RTE.HtmlImport.DefaultHtmlTranslator.$8D($v_9)) || $v_0;
            }
            if ($v_3.backgroundColor) {
                var $v_A = $v_3.backgroundColor;

                $v_0 = formatting.setFontHighlight(RTE.HtmlImport.DefaultHtmlTranslator.$8D($v_A)) || $v_0;
            }
        }
        return $v_0;
    },
    onText: function RTE_HtmlImport_DefaultHtmlTranslator$onText(text) {
        this.normalizer.onText(text);
    },
    onAOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onAOpen(element) {
        var $v_0 = element.href;

        if ($v_0 && $v_0 !== '') {
            this.normalizer.onAnchorStart($v_0);
            var $$t_2 = this.normalizer;

            this.registerOnCloseCallback($$t_2.$$d_onAnchorEnd || ($$t_2.$$d_onAnchorEnd = Function.createDelegate($$t_2, $$t_2.onAnchorEnd)));
            return 1;
        }
        return 2;
    },
    onBOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onBOpen(element) {
        var $$t_3 = this;
        var $v_0 = this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setBold(true);
        });

        return $v_0 ? 1 : 2;
    },
    onBigOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onBigOpen(element) {
        var $$t_3 = this;
        var $v_0 = this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.growFontsize();
        });

        return $v_0 ? 1 : 2;
    },
    onBlockquoteOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onBlockquoteOpen(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onBrTag: function RTE_HtmlImport_DefaultHtmlTranslator$onBrTag(element) {
        this.normalizer.onLineBreak();
    },
    onCaptionOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onCaptionOpen(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onCiteOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onCiteOpen(element) {
        var $$t_3 = this;
        var $v_0 = this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setItalics(true);
        });

        return $v_0 ? 1 : 2;
    },
    onCenterOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onCenterOpen(element) {
        var $$t_3 = this;

        this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setTextAlign('center');
        });
        this.normalizer.onParagraphStart();
        var $$t_2 = this.normalizer;

        this.registerOnCloseCallback($$t_2.$$d_onParagraphEnd || ($$t_2.$$d_onParagraphEnd = Function.createDelegate($$t_2, $$t_2.onParagraphEnd)));
        return 1;
    },
    onCodeOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onCodeOpen(element) {
        var $$t_3 = this;
        var $v_0 = this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setFontface('consolas');
        });

        return $v_0 ? 1 : 2;
    },
    onDelOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onDelOpen(element) {
        var $$t_3 = this;
        var $v_0 = this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setStrikethrough(true);
        });

        return $v_0 ? 1 : 2;
    },
    onDdOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onDdOpen(element) {
        return this.$4u_1(element, false);
    },
    onDfnOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onDfnOpen(element) {
        var $$t_3 = this;
        var $v_0 = this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setItalics(true);
        });

        return $v_0 ? 1 : 2;
    },
    onDirOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onDirOpen(element) {
        return this.$4u_1(element, false);
    },
    onDivOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onDivOpen(element) {
        var $v_0 = element.getAttribute('align');
        var $$t_4 = this;

        this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setTextAlign($v_0);
        });
        this.normalizer.onParagraphStart();
        var $$t_3 = this.normalizer;

        this.registerOnCloseCallback($$t_3.$$d_onParagraphEnd || ($$t_3.$$d_onParagraphEnd = Function.createDelegate($$t_3, $$t_3.onParagraphEnd)));
        return 1;
    },
    onDlOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onDlOpen(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onDtOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onDtOpen(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onEmOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onEmOpen(element) {
        var $$t_3 = this;
        var $v_0 = this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setItalics(true);
        });

        return $v_0 ? 1 : 2;
    },
    onFontOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onFontOpen(element) {
        var $$t_5 = this;
        var $v_0 = this.handleSpecifiedFormatting(function($p1_0) {
            var $v_1 = RTE.HtmlImport.DefaultHtmlTranslator.$Cg(element.getAttribute('face')) && $p1_0.setFontface('consolas');
            var $v_2 = $p1_0.setFontColor(RTE.HtmlImport.DefaultHtmlTranslator.$8D(element.getAttribute('color')));

            return $v_1 || $v_2;
        });

        return $v_0 ? 1 : 2;
    },
    onH1Open: function RTE_HtmlImport_DefaultHtmlTranslator$onH1Open(element) {
        var $$t_3 = this;

        this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setHeading(1);
        });
        this.normalizer.onParagraphStart();
        var $$t_2 = this.normalizer;

        this.registerOnCloseCallback($$t_2.$$d_onParagraphEnd || ($$t_2.$$d_onParagraphEnd = Function.createDelegate($$t_2, $$t_2.onParagraphEnd)));
        return 1;
    },
    onH2Open: function RTE_HtmlImport_DefaultHtmlTranslator$onH2Open(element) {
        var $$t_3 = this;

        this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setHeading(2);
        });
        this.normalizer.onParagraphStart();
        var $$t_2 = this.normalizer;

        this.registerOnCloseCallback($$t_2.$$d_onParagraphEnd || ($$t_2.$$d_onParagraphEnd = Function.createDelegate($$t_2, $$t_2.onParagraphEnd)));
        return 1;
    },
    onH3Open: function RTE_HtmlImport_DefaultHtmlTranslator$onH3Open(element) {
        var $$t_3 = this;

        this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setHeading(3);
        });
        this.normalizer.onParagraphStart();
        var $$t_2 = this.normalizer;

        this.registerOnCloseCallback($$t_2.$$d_onParagraphEnd || ($$t_2.$$d_onParagraphEnd = Function.createDelegate($$t_2, $$t_2.onParagraphEnd)));
        return 1;
    },
    onH4Open: function RTE_HtmlImport_DefaultHtmlTranslator$onH4Open(element) {
        var $$t_3 = this;

        this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setHeading(4);
        });
        this.normalizer.onParagraphStart();
        var $$t_2 = this.normalizer;

        this.registerOnCloseCallback($$t_2.$$d_onParagraphEnd || ($$t_2.$$d_onParagraphEnd = Function.createDelegate($$t_2, $$t_2.onParagraphEnd)));
        return 1;
    },
    onH5Open: function RTE_HtmlImport_DefaultHtmlTranslator$onH5Open(element) {
        var $$t_3 = this;

        this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setHeading(5);
        });
        this.normalizer.onParagraphStart();
        var $$t_2 = this.normalizer;

        this.registerOnCloseCallback($$t_2.$$d_onParagraphEnd || ($$t_2.$$d_onParagraphEnd = Function.createDelegate($$t_2, $$t_2.onParagraphEnd)));
        return 1;
    },
    onH6Open: function RTE_HtmlImport_DefaultHtmlTranslator$onH6Open(element) {
        var $$t_3 = this;

        this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setHeading(6);
        });
        this.normalizer.onParagraphStart();
        var $$t_2 = this.normalizer;

        this.registerOnCloseCallback($$t_2.$$d_onParagraphEnd || ($$t_2.$$d_onParagraphEnd = Function.createDelegate($$t_2, $$t_2.onParagraphEnd)));
        return 1;
    },
    onHrTag: function RTE_HtmlImport_DefaultHtmlTranslator$onHrTag(element) {
        this.normalizer.onLineBreak();
    },
    onImgTag: function RTE_HtmlImport_DefaultHtmlTranslator$onImgTag(element) {
        var $v_0 = element.src;
        var $v_1 = element.alt;
        var $v_2 = element.width;
        var $v_3 = element.height;

        if (!$v_2 && !$v_3 && element.currentStyle) {
            var $v_5 = element.currentStyle.width;
            var $v_6 = element.currentStyle.height;

            if ($v_5 && $v_5.indexOf('px') !== -1) {
                $v_2 = parseInt($v_5.substring(0, $v_5.indexOf('px')));
            }
            if ($v_6 && $v_6.indexOf('px') !== -1) {
                $v_3 = parseInt($v_6.substring(0, $v_6.indexOf('px')));
            }
        }
        var $v_4 = new RTE.HtmlImport.ImageSemanticArgs($v_0, $v_1, $v_2, $v_3);

        this.normalizer.onImage($v_4);
    },
    onIOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onIOpen(element) {
        var $$t_3 = this;
        var $v_0 = this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setItalics(true);
        });

        return $v_0 ? 1 : 2;
    },
    onInsOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onInsOpen(element) {
        var $$t_3 = this;
        var $v_0 = this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setUnderline(true);
        });

        return $v_0 ? 1 : 2;
    },
    onKbdOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onKbdOpen(element) {
        var $$t_3 = this;
        var $v_0 = this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setFontface('consolas');
        });

        return $v_0 ? 1 : 2;
    },
    onLabelOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onLabelOpen(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onLegendOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onLegendOpen(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onLiOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onLiOpen(element) {
        var $v_0;
        var $v_1 = this.getListStyleTypeFromElement(element, 0);
        var $v_2 = RTE.HtmlImport.DefaultHtmlTranslator.$Bh(element, 'value', 0);

        if (this.$4R_1.get_count() > 0) {
            $v_0 = this.$4R_1.peek();
        }
        else {
            $v_0 = new RTE.HtmlImport.ListSemanticArgs(2, 1);
            if (!$v_2) {
                $v_2 = 1;
            }
        }
        $v_0.$F3_0($v_1, $v_2);
        this.normalizer.onListItemStart($v_0.$Fo_0());
        var $$t_4 = this.normalizer;

        this.registerOnCloseCallback($$t_4.$$d_onListItemEnd || ($$t_4.$$d_onListItemEnd = Function.createDelegate($$t_4, $$t_4.onListItemEnd)));
        return 1;
    },
    onMenuOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onMenuOpen(element) {
        return this.$4u_1(element, false);
    },
    onOlOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onOlOpen(element) {
        return this.$4u_1(element, true);
    },
    onOptionOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onOptionOpen(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onPOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onPOpen(element) {
        var $v_0 = element.getAttribute('align');
        var $$t_4 = this;

        this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setTextAlign($v_0);
        });
        this.normalizer.onParagraphStart();
        var $$t_3 = this.normalizer;

        this.registerOnCloseCallback($$t_3.$$d_onParagraphEnd || ($$t_3.$$d_onParagraphEnd = Function.createDelegate($$t_3, $$t_3.onParagraphEnd)));
        return 1;
    },
    onPreOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onPreOpen(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onSOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onSOpen(element) {
        var $$t_3 = this;
        var $v_0 = this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setStrikethrough(true);
        });

        return $v_0 ? 1 : 2;
    },
    onSampOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onSampOpen(element) {
        var $$t_3 = this;
        var $v_0 = this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setFontface('consolas');
        });

        return $v_0 ? 1 : 2;
    },
    onSmallOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onSmallOpen(element) {
        var $$t_3 = this;
        var $v_0 = this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.shrinkFontsize();
        });

        return $v_0 ? 1 : 2;
    },
    onStrikeOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onStrikeOpen(element) {
        var $$t_3 = this;
        var $v_0 = this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setStrikethrough(true);
        });

        return $v_0 ? 1 : 2;
    },
    onStrongOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onStrongOpen(element) {
        var $$t_3 = this;
        var $v_0 = this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setBold(true);
        });

        return $v_0 ? 1 : 2;
    },
    onSubOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onSubOpen(element) {
        var $$t_3 = this;
        var $v_0 = this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setSubscript(true);
        });

        return $v_0 ? 1 : 2;
    },
    onSupOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onSupOpen(element) {
        var $$t_3 = this;
        var $v_0 = this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setSuperscript(true);
        });

        return $v_0 ? 1 : 2;
    },
    onTableOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onTableOpen(element) {
        var $$t_3 = this;

        this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.clearFormatting();
        });
        this.normalizer.onTableStart(new RTE.HtmlImport.TableSemanticArgs(0, 0));
        var $$t_2 = this.normalizer;

        this.registerOnCloseCallback($$t_2.$$d_onTableEnd || ($$t_2.$$d_onTableEnd = Function.createDelegate($$t_2, $$t_2.onTableEnd)));
        return 1;
    },
    onTdOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onTdOpen(element) {
        var $v_0 = parseInt(element.colSpan);
        var $v_1 = parseInt(element.rowSpan);

        RTE.PasteCommon.Debug.assertTag($v_0 > 0 && $v_1 > 0, 596182);
        this.normalizer.onTableCellStart(new RTE.HtmlImport.TableCellSemanticArgs($v_0, $v_1));
        var $$t_3 = this.normalizer;

        this.registerOnCloseCallback($$t_3.$$d_onTableCellEnd || ($$t_3.$$d_onTableCellEnd = Function.createDelegate($$t_3, $$t_3.onTableCellEnd)));
        this.notifyNormalizerOfCurrentFormatting();
        return 1;
    },
    onThOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onThOpen(element) {
        this.onTdOpen(element);
        var $$t_4 = this;

        this.handleSpecifiedFormatting(function($p1_0) {
            var $v_0 = $p1_0.setBold(true);
            var $v_1 = $p1_0.setTextAlign('center');

            return $v_0 || $v_1;
        });
        return 1;
    },
    onTrOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onTrOpen(element) {
        this.normalizer.onTableRowStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onTableRowEnd || ($$t_1.$$d_onTableRowEnd = Function.createDelegate($$t_1, $$t_1.onTableRowEnd)));
        return 1;
    },
    onTtOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onTtOpen(element) {
        var $$t_3 = this;
        var $v_0 = this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setFontface('consolas');
        });

        return $v_0 ? 1 : 2;
    },
    onUOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onUOpen(element) {
        var $$t_3 = this;
        var $v_0 = this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setUnderline(true);
        });

        return $v_0 ? 1 : 2;
    },
    onUlOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onUlOpen(element) {
        return this.$4u_1(element, false);
    },
    onVarOpen: function RTE_HtmlImport_DefaultHtmlTranslator$onVarOpen(element) {
        var $$t_3 = this;
        var $v_0 = this.handleSpecifiedFormatting(function($p1_0) {
            return $p1_0.setUnderline(true);
        });

        return $v_0 ? 1 : 2;
    }
};
RTE.HtmlImport.HtmlProcessor = function RTE_HtmlImport_HtmlProcessor(translator) {
    this.$$d_$KM_0 = Function.createDelegate(this, this.$KM_0);
    this.$6_0 = translator;
    this.$LI_0();
};
RTE.HtmlImport.HtmlProcessor.$Jg = function RTE_HtmlImport_HtmlProcessor$$Jg($p0) {
    if ($p0.nodeType !== 3) {
        RTE.PasteCommon.CustomData.$4J($p0, 'alreadyPasted', true);
    }
};
RTE.HtmlImport.HtmlProcessor.$Ik = function RTE_HtmlImport_HtmlProcessor$$Ik($p0) {
    return $p0.nodeType !== 3 && RTE.PasteCommon.CustomData.getObject($p0, 'alreadyPasted');
};
RTE.HtmlImport.HtmlProcessor.$5l = function RTE_HtmlImport_HtmlProcessor$$5l($p0) {
    $p0.$4e_0++;
    $p0.$4y_0 = false;
    return $p0.$4e_0 < $p0.$2Z_0.length;
};
RTE.HtmlImport.HtmlProcessor.prototype = {
    $6_0: null,
    $AI_0: null,
    $4V_0: null,
    $32_0: null,
    $31_0: null,
    registerNewTag: function RTE_HtmlImport_HtmlProcessor$registerNewTag(tagName) {
        tagName = RTE.PasteCommon.StringUtils.toUpper(tagName);
        if (this.$4V_0[tagName]) {
            RTE.PasteCommon.Debug.assertTag(!!this.$31_0[tagName], 596183);
            delete this.$4V_0[tagName];
        }
        else if (this.$32_0[tagName]) {
            RTE.PasteCommon.Debug.assertTag(!!this.$31_0[tagName], 596184);
            delete this.$32_0[tagName];
        }
        else {
            var $$t_1 = this.$6_0;

            this.$31_0[tagName] = $$t_1.$$d_onUnknownOpen || ($$t_1.$$d_onUnknownOpen = Function.createDelegate($$t_1, $$t_1.onUnknownOpen));
        }
    },
    process: function RTE_HtmlImport_HtmlProcessor$process(root, parentOperation) {
        if (!root) {
            RTE.PasteCommon.Debug.$7n(596185);
            return;
        }
        this.$6_0.reset();
        this.$Dk_0(new RTE.HtmlImport.HtmlProcessorArguments(root), parentOperation);
    },
    $Dk_0: function RTE_HtmlImport_HtmlProcessor$$Dk_0($p0, $p1) {
        if (!$p0.$2Z_0.length) {
            return;
        }
        var $v_0 = new RTE.PasteCommon.SimpleOperation($p1, this.$$d_$KM_0, $p0);

        if (!$p1) {
            $v_0.set_$2e_1(true);
        }
        $v_0.$9Y_1();
    },
    $KM_0: function RTE_HtmlImport_HtmlProcessor$$KM_0($p0, $p1) {
        var $v_0 = $p1;
        var $v_1 = $v_0.$2Z_0[$v_0.$4e_0];

        if ($v_1.nodeType === 3) {
            this.$6_0.onBeforeNewElement();
            this.$6_0.onText($v_1.nodeValue);
            return RTE.HtmlImport.HtmlProcessor.$5l($v_0);
        }
        if ($v_1.nodeType !== 1) {
            RTE.PasteCommon.Debug.log('Skipping over DOMElement with NodeType = ' + $v_1.nodeType, 'HtmlProcessor', RTE.PasteCommon.LogLevel.$3u);
            return RTE.HtmlImport.HtmlProcessor.$5l($v_0);
        }
        if (!$v_0.$4y_0) {
            var $v_2 = RTE.PasteCommon.StringUtils.toUpper($v_1.tagName);

            if (!RTE.HtmlImport.HtmlProcessor.$Ik($v_1) && !this.$32_0[$v_2]) {
                RTE.HtmlImport.HtmlProcessor.$Jg($v_1);
                this.$6_0.onBeforeNewElement();
                if (this.$AI_0[$v_2]) {
                    this.$Jp_0($v_1, $v_2);
                    return RTE.HtmlImport.HtmlProcessor.$5l($v_0);
                }
                var $v_3 = false;

                switch (this.$Jo_0($v_1, $v_2)) {
                case 1:
                    $v_3 = true;
                    break;
                case 3:
                    return RTE.HtmlImport.HtmlProcessor.$5l($v_0);
                default:
                    break;
                }
                switch (this.$6_0.handleCommonAttributes($v_1)) {
                case 1:
                    $v_3 = true;
                    break;
                default:
                    break;
                }
                $v_0.$4y_0 = $v_3;
                this.$Dk_0(new RTE.HtmlImport.HtmlProcessorArguments($v_1), $p0);
                if (!$p0.get_$2e_1()) {
                    return true;
                }
            }
        }
        if ($v_0.$4y_0) {
            RTE.PasteCommon.Debug.assertTag(!this.$32_0[RTE.PasteCommon.StringUtils.toUpper($v_1.tagName)], 596187);
            RTE.PasteCommon.Debug.assertTag(!!this.$31_0[RTE.PasteCommon.StringUtils.toUpper($v_1.tagName)], 596188);
            this.$6_0.onClose();
        }
        return RTE.HtmlImport.HtmlProcessor.$5l($v_0);
    },
    $Jp_0: function RTE_HtmlImport_HtmlProcessor$$Jp_0($p0, $p1) {
        RTE.PasteCommon.Debug.assertTag($p1 === RTE.PasteCommon.StringUtils.toUpper($p0.tagName), 596189);
        RTE.PasteCommon.Debug.assertTag(!this.$32_0[$p1], 596190);
        if (this.$4V_0[$p1]) {
            return;
        }
        var $v_0 = this.$31_0[$p1];

        RTE.PasteCommon.Debug.assertTag(!!$v_0, 596191);
        $v_0($p0);
        return;
    },
    $Jo_0: function RTE_HtmlImport_HtmlProcessor$$Jo_0($p0, $p1) {
        RTE.PasteCommon.Debug.assertTag($p1 === RTE.PasteCommon.StringUtils.toUpper($p0.tagName), 596192);
        RTE.PasteCommon.Debug.assertTag(!this.$32_0[$p1], 596193);
        if (!this.$4V_0[$p1]) {
            var $v_0 = this.$31_0[$p1];

            if ($v_0) {
                return $v_0($p0);
            }
        }
        return 2;
    },
    $LI_0: function RTE_HtmlImport_HtmlProcessor$$LI_0() {
        this.$AI_0 = {
            AREA: true,
            BASE: true,
            BASEFONT: true,
            BR: true,
            COL: true,
            FRAME: true,
            HR: true,
            IMG: true,
            INPUT: true,
            LINK: true,
            META: true,
            PARAM: true
        };
        this.$4V_0 = {
            ABBR: true,
            ACRONYM: true,
            ADDRESS: true,
            BDO: true,
            BODY: true,
            BUTTON: true,
            FIELDSET: true,
            FORM: true,
            FRAMESET: true,
            NOFRAMES: true,
            NOSCRIPT: true,
            OPTGROUP: true,
            Q: true,
            SELECT: true,
            SPAN: true,
            TEXTAREA: true
        };
        this.$32_0 = {
            APPLET: true,
            AREA: true,
            BASE: true,
            BASEFONT: true,
            FRAME: true,
            HEAD: true,
            HTML: true,
            IFRAME: true,
            INPUT: true,
            ISINDEX: true,
            LINK: true,
            MAP: true,
            META: true,
            OBJECT: true,
            PARAM: true,
            SCRIPT: true,
            STYLE: true,
            TITLE: true
        };
        var $$t_0 = this.$6_0, $$t_1 = this.$6_0, $$t_2 = this.$6_0, $$t_3 = this.$6_0, $$t_4 = this.$6_0, $$t_5 = this.$6_0, $$t_6 = this.$6_0, $$t_7 = this.$6_0, $$t_8 = this.$6_0, $$t_9 = this.$6_0, $$t_A = this.$6_0, $$t_B = this.$6_0, $$t_C = this.$6_0, $$t_D = this.$6_0, $$t_E = this.$6_0, $$t_F = this.$6_0, $$t_G = this.$6_0, $$t_H = this.$6_0, $$t_I = this.$6_0, $$t_J = this.$6_0, $$t_K = this.$6_0, $$t_L = this.$6_0, $$t_M = this.$6_0, $$t_N = this.$6_0, $$t_O = this.$6_0, $$t_P = this.$6_0, $$t_Q = this.$6_0, $$t_R = this.$6_0, $$t_S = this.$6_0, $$t_T = this.$6_0, $$t_U = this.$6_0, $$t_V = this.$6_0, $$t_W = this.$6_0, $$t_X = this.$6_0, $$t_Y = this.$6_0, $$t_Z = this.$6_0, $$t_a = this.$6_0, $$t_b = this.$6_0, $$t_c = this.$6_0, $$t_d = this.$6_0, $$t_e = this.$6_0, $$t_f = this.$6_0, $$t_g = this.$6_0, $$t_h = this.$6_0, $$t_i = this.$6_0, $$t_j = this.$6_0, $$t_k = this.$6_0, $$t_l = this.$6_0, $$t_m = this.$6_0, $$t_n = this.$6_0, $$t_o = this.$6_0, $$t_p = this.$6_0, $$t_q = this.$6_0, $$t_r = this.$6_0, $$t_s = this.$6_0, $$t_t = this.$6_0, $$t_u = this.$6_0, $$t_v = this.$6_0, $$t_w = this.$6_0, $$t_x = this.$6_0, $$t_y = this.$6_0, $$t_z = this.$6_0, $$t_10 = this.$6_0, $$t_11 = this.$6_0, $$t_12 = this.$6_0, $$t_13 = this.$6_0, $$t_14 = this.$6_0, $$t_15 = this.$6_0, $$t_16 = this.$6_0, $$t_17 = this.$6_0, $$t_18 = this.$6_0, $$t_19 = this.$6_0, $$t_1A = this.$6_0, $$t_1B = this.$6_0, $$t_1C = this.$6_0, $$t_1D = this.$6_0, $$t_1E = this.$6_0, $$t_1F = this.$6_0, $$t_1G = this.$6_0, $$t_1H = this.$6_0, $$t_1I = this.$6_0, $$t_1J = this.$6_0, $$t_1K = this.$6_0, $$t_1L = this.$6_0, $$t_1M = this.$6_0, $$t_1N = this.$6_0, $$t_1O = this.$6_0, $$t_1P = this.$6_0, $$t_1Q = this.$6_0, $$t_1R = this.$6_0, $$t_1S = this.$6_0;

        this.$31_0 = {
            A: $$t_0.$$d_onAOpen || ($$t_0.$$d_onAOpen = Function.createDelegate($$t_0, $$t_0.onAOpen)),
            ABBR: $$t_1.$$d_onAbbrOpen || ($$t_1.$$d_onAbbrOpen = Function.createDelegate($$t_1, $$t_1.onAbbrOpen)),
            ACRONYM: $$t_2.$$d_onAcronymOpen || ($$t_2.$$d_onAcronymOpen = Function.createDelegate($$t_2, $$t_2.onAcronymOpen)),
            ADDRESS: $$t_3.$$d_onAddressOpen || ($$t_3.$$d_onAddressOpen = Function.createDelegate($$t_3, $$t_3.onAddressOpen)),
            APPLET: $$t_4.$$d_onAppletOpen || ($$t_4.$$d_onAppletOpen = Function.createDelegate($$t_4, $$t_4.onAppletOpen)),
            AREA: $$t_5.$$d_onAreaTag || ($$t_5.$$d_onAreaTag = Function.createDelegate($$t_5, $$t_5.onAreaTag)),
            B: $$t_6.$$d_onBOpen || ($$t_6.$$d_onBOpen = Function.createDelegate($$t_6, $$t_6.onBOpen)),
            BASE: $$t_7.$$d_onBaseTag || ($$t_7.$$d_onBaseTag = Function.createDelegate($$t_7, $$t_7.onBaseTag)),
            BASEFONT: $$t_8.$$d_onBasefontTag || ($$t_8.$$d_onBasefontTag = Function.createDelegate($$t_8, $$t_8.onBasefontTag)),
            BDO: $$t_9.$$d_onBdoOpen || ($$t_9.$$d_onBdoOpen = Function.createDelegate($$t_9, $$t_9.onBdoOpen)),
            BIG: $$t_A.$$d_onBigOpen || ($$t_A.$$d_onBigOpen = Function.createDelegate($$t_A, $$t_A.onBigOpen)),
            BLOCKQUOTE: $$t_B.$$d_onBlockquoteOpen || ($$t_B.$$d_onBlockquoteOpen = Function.createDelegate($$t_B, $$t_B.onBlockquoteOpen)),
            BODY: $$t_C.$$d_onBodyOpen || ($$t_C.$$d_onBodyOpen = Function.createDelegate($$t_C, $$t_C.onBodyOpen)),
            BR: $$t_D.$$d_onBrTag || ($$t_D.$$d_onBrTag = Function.createDelegate($$t_D, $$t_D.onBrTag)),
            BUTTON: $$t_E.$$d_onButtonOpen || ($$t_E.$$d_onButtonOpen = Function.createDelegate($$t_E, $$t_E.onButtonOpen)),
            CAPTION: $$t_F.$$d_onCaptionOpen || ($$t_F.$$d_onCaptionOpen = Function.createDelegate($$t_F, $$t_F.onCaptionOpen)),
            CENTER: $$t_G.$$d_onCenterOpen || ($$t_G.$$d_onCenterOpen = Function.createDelegate($$t_G, $$t_G.onCenterOpen)),
            CITE: $$t_H.$$d_onCiteOpen || ($$t_H.$$d_onCiteOpen = Function.createDelegate($$t_H, $$t_H.onCiteOpen)),
            CODE: $$t_I.$$d_onCodeOpen || ($$t_I.$$d_onCodeOpen = Function.createDelegate($$t_I, $$t_I.onCodeOpen)),
            COL: $$t_J.$$d_onColTag || ($$t_J.$$d_onColTag = Function.createDelegate($$t_J, $$t_J.onColTag)),
            COLGROUP: $$t_K.$$d_onColgroupOpen || ($$t_K.$$d_onColgroupOpen = Function.createDelegate($$t_K, $$t_K.onColgroupOpen)),
            DD: $$t_L.$$d_onDdOpen || ($$t_L.$$d_onDdOpen = Function.createDelegate($$t_L, $$t_L.onDdOpen)),
            DEL: $$t_M.$$d_onDelOpen || ($$t_M.$$d_onDelOpen = Function.createDelegate($$t_M, $$t_M.onDelOpen)),
            DFN: $$t_N.$$d_onDfnOpen || ($$t_N.$$d_onDfnOpen = Function.createDelegate($$t_N, $$t_N.onDfnOpen)),
            DIR: $$t_O.$$d_onDirOpen || ($$t_O.$$d_onDirOpen = Function.createDelegate($$t_O, $$t_O.onDirOpen)),
            DIV: $$t_P.$$d_onDivOpen || ($$t_P.$$d_onDivOpen = Function.createDelegate($$t_P, $$t_P.onDivOpen)),
            DL: $$t_Q.$$d_onDlOpen || ($$t_Q.$$d_onDlOpen = Function.createDelegate($$t_Q, $$t_Q.onDlOpen)),
            DT: $$t_R.$$d_onDtOpen || ($$t_R.$$d_onDtOpen = Function.createDelegate($$t_R, $$t_R.onDtOpen)),
            EM: $$t_S.$$d_onEmOpen || ($$t_S.$$d_onEmOpen = Function.createDelegate($$t_S, $$t_S.onEmOpen)),
            FIELDSET: $$t_T.$$d_onFieldsetOpen || ($$t_T.$$d_onFieldsetOpen = Function.createDelegate($$t_T, $$t_T.onFieldsetOpen)),
            FONT: $$t_U.$$d_onFontOpen || ($$t_U.$$d_onFontOpen = Function.createDelegate($$t_U, $$t_U.onFontOpen)),
            FORM: $$t_V.$$d_onFormOpen || ($$t_V.$$d_onFormOpen = Function.createDelegate($$t_V, $$t_V.onFormOpen)),
            FRAME: $$t_W.$$d_onFrameTag || ($$t_W.$$d_onFrameTag = Function.createDelegate($$t_W, $$t_W.onFrameTag)),
            FRAMESET: $$t_X.$$d_onFramesetOpen || ($$t_X.$$d_onFramesetOpen = Function.createDelegate($$t_X, $$t_X.onFramesetOpen)),
            H1: $$t_Y.$$d_onH1Open || ($$t_Y.$$d_onH1Open = Function.createDelegate($$t_Y, $$t_Y.onH1Open)),
            H2: $$t_Z.$$d_onH2Open || ($$t_Z.$$d_onH2Open = Function.createDelegate($$t_Z, $$t_Z.onH2Open)),
            H3: $$t_a.$$d_onH3Open || ($$t_a.$$d_onH3Open = Function.createDelegate($$t_a, $$t_a.onH3Open)),
            H4: $$t_b.$$d_onH4Open || ($$t_b.$$d_onH4Open = Function.createDelegate($$t_b, $$t_b.onH4Open)),
            H5: $$t_c.$$d_onH5Open || ($$t_c.$$d_onH5Open = Function.createDelegate($$t_c, $$t_c.onH5Open)),
            H6: $$t_d.$$d_onH6Open || ($$t_d.$$d_onH6Open = Function.createDelegate($$t_d, $$t_d.onH6Open)),
            HEAD: $$t_e.$$d_onHeadOpen || ($$t_e.$$d_onHeadOpen = Function.createDelegate($$t_e, $$t_e.onHeadOpen)),
            HR: $$t_f.$$d_onHrTag || ($$t_f.$$d_onHrTag = Function.createDelegate($$t_f, $$t_f.onHrTag)),
            HTML: $$t_g.$$d_onHtmlOpen || ($$t_g.$$d_onHtmlOpen = Function.createDelegate($$t_g, $$t_g.onHtmlOpen)),
            I: $$t_h.$$d_onIOpen || ($$t_h.$$d_onIOpen = Function.createDelegate($$t_h, $$t_h.onIOpen)),
            IFRAME: $$t_i.$$d_onIframeOpen || ($$t_i.$$d_onIframeOpen = Function.createDelegate($$t_i, $$t_i.onIframeOpen)),
            IMG: $$t_j.$$d_onImgTag || ($$t_j.$$d_onImgTag = Function.createDelegate($$t_j, $$t_j.onImgTag)),
            INPUT: $$t_k.$$d_onInputTag || ($$t_k.$$d_onInputTag = Function.createDelegate($$t_k, $$t_k.onInputTag)),
            INS: $$t_l.$$d_onInsOpen || ($$t_l.$$d_onInsOpen = Function.createDelegate($$t_l, $$t_l.onInsOpen)),
            ISINDEX: $$t_m.$$d_onIsindexOpen || ($$t_m.$$d_onIsindexOpen = Function.createDelegate($$t_m, $$t_m.onIsindexOpen)),
            KBD: $$t_n.$$d_onKbdOpen || ($$t_n.$$d_onKbdOpen = Function.createDelegate($$t_n, $$t_n.onKbdOpen)),
            LABEL: $$t_o.$$d_onLabelOpen || ($$t_o.$$d_onLabelOpen = Function.createDelegate($$t_o, $$t_o.onLabelOpen)),
            LEGEND: $$t_p.$$d_onLegendOpen || ($$t_p.$$d_onLegendOpen = Function.createDelegate($$t_p, $$t_p.onLegendOpen)),
            LI: $$t_q.$$d_onLiOpen || ($$t_q.$$d_onLiOpen = Function.createDelegate($$t_q, $$t_q.onLiOpen)),
            LINK: $$t_r.$$d_onLinkTag || ($$t_r.$$d_onLinkTag = Function.createDelegate($$t_r, $$t_r.onLinkTag)),
            MAP: $$t_s.$$d_onMapOpen || ($$t_s.$$d_onMapOpen = Function.createDelegate($$t_s, $$t_s.onMapOpen)),
            MENU: $$t_t.$$d_onMenuOpen || ($$t_t.$$d_onMenuOpen = Function.createDelegate($$t_t, $$t_t.onMenuOpen)),
            META: $$t_u.$$d_onMetaTag || ($$t_u.$$d_onMetaTag = Function.createDelegate($$t_u, $$t_u.onMetaTag)),
            NOFRAMES: $$t_v.$$d_onNoframesOpen || ($$t_v.$$d_onNoframesOpen = Function.createDelegate($$t_v, $$t_v.onNoframesOpen)),
            NOSCRIPT: $$t_w.$$d_onNoscriptOpen || ($$t_w.$$d_onNoscriptOpen = Function.createDelegate($$t_w, $$t_w.onNoscriptOpen)),
            OBJECT: $$t_x.$$d_onObjectOpen || ($$t_x.$$d_onObjectOpen = Function.createDelegate($$t_x, $$t_x.onObjectOpen)),
            OL: $$t_y.$$d_onOlOpen || ($$t_y.$$d_onOlOpen = Function.createDelegate($$t_y, $$t_y.onOlOpen)),
            OPTGROUP: $$t_z.$$d_onOptgroupOpen || ($$t_z.$$d_onOptgroupOpen = Function.createDelegate($$t_z, $$t_z.onOptgroupOpen)),
            OPTION: $$t_10.$$d_onOptionOpen || ($$t_10.$$d_onOptionOpen = Function.createDelegate($$t_10, $$t_10.onOptionOpen)),
            P: $$t_11.$$d_onPOpen || ($$t_11.$$d_onPOpen = Function.createDelegate($$t_11, $$t_11.onPOpen)),
            PARAM: $$t_12.$$d_onParamTag || ($$t_12.$$d_onParamTag = Function.createDelegate($$t_12, $$t_12.onParamTag)),
            PRE: $$t_13.$$d_onPreOpen || ($$t_13.$$d_onPreOpen = Function.createDelegate($$t_13, $$t_13.onPreOpen)),
            Q: $$t_14.$$d_onQOpen || ($$t_14.$$d_onQOpen = Function.createDelegate($$t_14, $$t_14.onQOpen)),
            S: $$t_15.$$d_onSOpen || ($$t_15.$$d_onSOpen = Function.createDelegate($$t_15, $$t_15.onSOpen)),
            SAMP: $$t_16.$$d_onSampOpen || ($$t_16.$$d_onSampOpen = Function.createDelegate($$t_16, $$t_16.onSampOpen)),
            SCRIPT: $$t_17.$$d_onScriptOpen || ($$t_17.$$d_onScriptOpen = Function.createDelegate($$t_17, $$t_17.onScriptOpen)),
            SELECT: $$t_18.$$d_onSelectOpen || ($$t_18.$$d_onSelectOpen = Function.createDelegate($$t_18, $$t_18.onSelectOpen)),
            SMALL: $$t_19.$$d_onSmallOpen || ($$t_19.$$d_onSmallOpen = Function.createDelegate($$t_19, $$t_19.onSmallOpen)),
            SPAN: $$t_1A.$$d_onSpanOpen || ($$t_1A.$$d_onSpanOpen = Function.createDelegate($$t_1A, $$t_1A.onSpanOpen)),
            STRIKE: $$t_1B.$$d_onStrikeOpen || ($$t_1B.$$d_onStrikeOpen = Function.createDelegate($$t_1B, $$t_1B.onStrikeOpen)),
            STRONG: $$t_1C.$$d_onStrongOpen || ($$t_1C.$$d_onStrongOpen = Function.createDelegate($$t_1C, $$t_1C.onStrongOpen)),
            STYLE: $$t_1D.$$d_onStyleOpen || ($$t_1D.$$d_onStyleOpen = Function.createDelegate($$t_1D, $$t_1D.onStyleOpen)),
            SUB: $$t_1E.$$d_onSubOpen || ($$t_1E.$$d_onSubOpen = Function.createDelegate($$t_1E, $$t_1E.onSubOpen)),
            SUP: $$t_1F.$$d_onSupOpen || ($$t_1F.$$d_onSupOpen = Function.createDelegate($$t_1F, $$t_1F.onSupOpen)),
            TABLE: $$t_1G.$$d_onTableOpen || ($$t_1G.$$d_onTableOpen = Function.createDelegate($$t_1G, $$t_1G.onTableOpen)),
            TBODY: $$t_1H.$$d_onTbodyOpen || ($$t_1H.$$d_onTbodyOpen = Function.createDelegate($$t_1H, $$t_1H.onTbodyOpen)),
            TD: $$t_1I.$$d_onTdOpen || ($$t_1I.$$d_onTdOpen = Function.createDelegate($$t_1I, $$t_1I.onTdOpen)),
            TEXTAREA: $$t_1J.$$d_onTextareaOpen || ($$t_1J.$$d_onTextareaOpen = Function.createDelegate($$t_1J, $$t_1J.onTextareaOpen)),
            TFOOT: $$t_1K.$$d_onTfootOpen || ($$t_1K.$$d_onTfootOpen = Function.createDelegate($$t_1K, $$t_1K.onTfootOpen)),
            TH: $$t_1L.$$d_onThOpen || ($$t_1L.$$d_onThOpen = Function.createDelegate($$t_1L, $$t_1L.onThOpen)),
            THEAD: $$t_1M.$$d_onTheadOpen || ($$t_1M.$$d_onTheadOpen = Function.createDelegate($$t_1M, $$t_1M.onTheadOpen)),
            TITLE: $$t_1N.$$d_onTitleOpen || ($$t_1N.$$d_onTitleOpen = Function.createDelegate($$t_1N, $$t_1N.onTitleOpen)),
            TR: $$t_1O.$$d_onTrOpen || ($$t_1O.$$d_onTrOpen = Function.createDelegate($$t_1O, $$t_1O.onTrOpen)),
            TT: $$t_1P.$$d_onTtOpen || ($$t_1P.$$d_onTtOpen = Function.createDelegate($$t_1P, $$t_1P.onTtOpen)),
            U: $$t_1Q.$$d_onUOpen || ($$t_1Q.$$d_onUOpen = Function.createDelegate($$t_1Q, $$t_1Q.onUOpen)),
            UL: $$t_1R.$$d_onUlOpen || ($$t_1R.$$d_onUlOpen = Function.createDelegate($$t_1R, $$t_1R.onUlOpen)),
            VAR: $$t_1S.$$d_onVarOpen || ($$t_1S.$$d_onVarOpen = Function.createDelegate($$t_1S, $$t_1S.onVarOpen))
        };
    }
};
RTE.HtmlImport.List = function RTE_HtmlImport_List() {
    this.$w_0 = [];
};
RTE.HtmlImport.List.$$ = function RTE_HtmlImport_List$$$(T) {
    var $$cn = 'List' + '$1' + '$' + (T.getName()).replace(/\./g, '_');

    if (!RTE.HtmlImport[$$cn]) {
        var $$ccr = RTE.HtmlImport[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['RTE.HtmlImport.List'] = {
                'T': T
            };
            var $v_0 = [];

            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            RTE.HtmlImport.List.apply(this, $v_0);
        };

        $$ccr.registerClass('RTE.HtmlImport.' + $$cn);
        var $$dict_5 = RTE.HtmlImport.List.prototype;

        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = {
                key: $$key_6,
                value: $$dict_5[$$key_6]
            };

            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return RTE.HtmlImport[$$cn];
};
RTE.HtmlImport.List.prototype = {
    $w_0: null,
    get_count: function RTE_HtmlImport_List$get_count() {
        return this.$w_0.length;
    },
    get_item: function RTE_HtmlImport_List$get_item(index) {
        return this.$w_0[index];
    },
    set_item: function RTE_HtmlImport_List$set_item(index, value) {
        this.$w_0[index] = value;
        return value;
    },
    add: function RTE_HtmlImport_List$add(item) {
        Array.add(this.$w_0, item);
    },
    clear: function RTE_HtmlImport_List$clear() {
        Array.clear(this.$w_0);
    },
    contains: function RTE_HtmlImport_List$contains(item) {
        return Array.contains(this.$w_0, item);
    },
    forEach: function RTE_HtmlImport_List$forEach(action) {
        var $$t_2 = this;

        Array.forEach(this.$w_0, function($p1_0) {
            RTE.PasteCommon.Debug.assertTag($$t_2.$$gta['RTE.HtmlImport.List']['T'].isInstanceOfType($p1_0), 596194);
            action($p1_0);
        });
    },
    getRange: function RTE_HtmlImport_List$getRange(index, count) {
        RTE.PasteCommon.Debug.assertTag(index + count <= this.get_count(), 596195);
        var $v_0 = new (RTE.HtmlImport.List.$$(this.$$gta['RTE.HtmlImport.List']['T']))();

        for (var $v_1 = 0; $v_1 < count; $v_1++) {
            $v_0.add(this.get_item(index + $v_1));
        }
        return $v_0;
    },
    indexOf: function RTE_HtmlImport_List$indexOf(item) {
        return Array.indexOf(this.$w_0, item);
    },
    insert: function RTE_HtmlImport_List$insert(index, item) {
        Array.insert(this.$w_0, index, item);
    },
    remove: function RTE_HtmlImport_List$remove(item) {
        return Array.remove(this.$w_0, item);
    },
    removeAt: function RTE_HtmlImport_List$removeAt(index) {
        Array.removeAt(this.$w_0, index);
    },
    removeRange: function RTE_HtmlImport_List$removeRange(index, count) {
        RTE.PasteCommon.Debug.assertTag(index + count <= this.get_count(), 598016);
        for (var $v_0 = 0; $v_0 < count; $v_0++) {
            Array.removeAt(this.$w_0, index);
        }
    },
    reverse: function RTE_HtmlImport_List$reverse() {
        this.$w_0.reverse();
    },
    sort: function RTE_HtmlImport_List$sort() {
        this.$w_0.sort();
    },
    toArray: function RTE_HtmlImport_List$toArray() {
        return Array.clone(this.$w_0);
    }
};
RTE.HtmlImport.PlaintextHtmlTranslator = function RTE_HtmlImport_PlaintextHtmlTranslator(normalizer) {
    RTE.HtmlImport.PlaintextHtmlTranslator.initializeBase(this, [normalizer]);
};
RTE.HtmlImport.PlaintextHtmlTranslator.prototype = {
    onText: function RTE_HtmlImport_PlaintextHtmlTranslator$onText(text) {
        this.normalizer.onText(text);
    },
    onBlockquoteOpen: function RTE_HtmlImport_PlaintextHtmlTranslator$onBlockquoteOpen(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onBrTag: function RTE_HtmlImport_PlaintextHtmlTranslator$onBrTag(element) {
        this.normalizer.onLineBreak();
    },
    onCaptionOpen: function RTE_HtmlImport_PlaintextHtmlTranslator$onCaptionOpen(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onCenterOpen: function RTE_HtmlImport_PlaintextHtmlTranslator$onCenterOpen(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onDdOpen: function RTE_HtmlImport_PlaintextHtmlTranslator$onDdOpen(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onDivOpen: function RTE_HtmlImport_PlaintextHtmlTranslator$onDivOpen(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onDlOpen: function RTE_HtmlImport_PlaintextHtmlTranslator$onDlOpen(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onDtOpen: function RTE_HtmlImport_PlaintextHtmlTranslator$onDtOpen(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onH1Open: function RTE_HtmlImport_PlaintextHtmlTranslator$onH1Open(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onH2Open: function RTE_HtmlImport_PlaintextHtmlTranslator$onH2Open(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onH3Open: function RTE_HtmlImport_PlaintextHtmlTranslator$onH3Open(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onH4Open: function RTE_HtmlImport_PlaintextHtmlTranslator$onH4Open(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onH5Open: function RTE_HtmlImport_PlaintextHtmlTranslator$onH5Open(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onH6Open: function RTE_HtmlImport_PlaintextHtmlTranslator$onH6Open(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onHrTag: function RTE_HtmlImport_PlaintextHtmlTranslator$onHrTag(element) {
        this.normalizer.onLineBreak();
    },
    onLabelOpen: function RTE_HtmlImport_PlaintextHtmlTranslator$onLabelOpen(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onLegendOpen: function RTE_HtmlImport_PlaintextHtmlTranslator$onLegendOpen(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onLiOpen: function RTE_HtmlImport_PlaintextHtmlTranslator$onLiOpen(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onOptionOpen: function RTE_HtmlImport_PlaintextHtmlTranslator$onOptionOpen(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onPOpen: function RTE_HtmlImport_PlaintextHtmlTranslator$onPOpen(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onPreOpen: function RTE_HtmlImport_PlaintextHtmlTranslator$onPreOpen(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onTdOpen: function RTE_HtmlImport_PlaintextHtmlTranslator$onTdOpen(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onThOpen: function RTE_HtmlImport_PlaintextHtmlTranslator$onThOpen(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    },
    onTrOpen: function RTE_HtmlImport_PlaintextHtmlTranslator$onTrOpen(element) {
        this.normalizer.onParagraphStart();
        var $$t_1 = this.normalizer;

        this.registerOnCloseCallback($$t_1.$$d_onParagraphEnd || ($$t_1.$$d_onParagraphEnd = Function.createDelegate($$t_1, $$t_1.onParagraphEnd)));
        return 1;
    }
};
RTE.HtmlImport.QueueNode = function RTE_HtmlImport_QueueNode() {
    this.data = this.$$gta['RTE.HtmlImport.QueueNode']['TNode'] === Number || Type.isEnum(this.$$gta['RTE.HtmlImport.QueueNode']['TNode']) ? 0 : this.$$gta['RTE.HtmlImport.QueueNode']['TNode'] === Boolean ? false : null;
};
RTE.HtmlImport.QueueNode.$$ = function RTE_HtmlImport_QueueNode$$$(TNode) {
    var $$cn = 'QueueNode' + '$1' + '$' + (TNode.getName()).replace(/\./g, '_');

    if (!RTE.HtmlImport[$$cn]) {
        var $$ccr = RTE.HtmlImport[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['RTE.HtmlImport.QueueNode'] = {
                'TNode': TNode
            };
            var $v_0 = [];

            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            RTE.HtmlImport.QueueNode.apply(this, $v_0);
        };

        $$ccr.registerClass('RTE.HtmlImport.' + $$cn);
        var $$dict_5 = RTE.HtmlImport.QueueNode.prototype;

        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = {
                key: $$key_6,
                value: $$dict_5[$$key_6]
            };

            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return RTE.HtmlImport[$$cn];
};
RTE.HtmlImport.QueueNode.prototype = {
    next: null
};
RTE.HtmlImport.Queue = function RTE_HtmlImport_Queue() {
    this.$2y_0 = null;
    this.$1s_0 = null;
    this.$p_0 = 0;
};
RTE.HtmlImport.Queue.$$ = function RTE_HtmlImport_Queue$$$(T) {
    var $$cn = 'Queue' + '$1' + '$' + (T.getName()).replace(/\./g, '_');

    if (!RTE.HtmlImport[$$cn]) {
        var $$ccr = RTE.HtmlImport[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['RTE.HtmlImport.Queue'] = {
                'T': T
            };
            var $v_0 = [];

            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            RTE.HtmlImport.Queue.apply(this, $v_0);
        };

        $$ccr.registerClass('RTE.HtmlImport.' + $$cn);
        var $$dict_5 = RTE.HtmlImport.Queue.prototype;

        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = {
                key: $$key_6,
                value: $$dict_5[$$key_6]
            };

            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return RTE.HtmlImport[$$cn];
};
RTE.HtmlImport.Queue.prototype = {
    $2y_0: null,
    $1s_0: null,
    $p_0: 0,
    get_count: function RTE_HtmlImport_Queue$get_count() {
        return this.$p_0;
    },
    get_isEmpty: function RTE_HtmlImport_Queue$get_isEmpty() {
        return !this.$p_0 || !this.$2y_0 || !this.$1s_0;
    },
    enqueue: function RTE_HtmlImport_Queue$enqueue(item) {
        var $v_0 = new (RTE.HtmlImport.QueueNode.$$(this.$$gta['RTE.HtmlImport.Queue']['T']))();

        $v_0.data = item;
        if (this.get_isEmpty()) {
            this.$2y_0 = $v_0;
            this.$1s_0 = $v_0;
        }
        else {
            RTE.PasteCommon.Debug.assertTag(!!this.$1s_0, 598018);
            this.$2y_0.next = $v_0;
            this.$2y_0 = $v_0;
        }
        this.$p_0++;
    },
    front: function RTE_HtmlImport_Queue$front() {
        if (this.get_isEmpty()) {
            return null;
        }
        return this.$1s_0.data;
    },
    dequeue: function RTE_HtmlImport_Queue$dequeue() {
        if (this.get_isEmpty()) {
            RTE.PasteCommon.Debug.$E('Attempting to Dequeue from an empty Queue!', 598019);
            return null;
        }
        var $v_0 = this.$1s_0;

        this.$1s_0 = $v_0.next;
        this.$p_0--;
        if (!this.$1s_0) {
            this.$2y_0 = null;
            RTE.PasteCommon.Debug.assertTag(this.get_isEmpty(), 598020);
        }
        return $v_0.data;
    },
    clear: function RTE_HtmlImport_Queue$clear() {
        this.$2y_0 = null;
        this.$1s_0 = null;
        this.$p_0 = 0;
    },
    toArray: function RTE_HtmlImport_Queue$toArray() {
        var $v_0 = new Array(this.$p_0);
        var $v_1 = this.$1s_0;

        for (var $v_2 = 0; $v_2 < this.$p_0; $v_2++) {
            if (!$v_1) {
                RTE.PasteCommon.Debug.$E('The Queue\'s Count is wrong!  Returning a partially-filled array', 598021);
                break;
            }
            $v_0[$v_2] = $v_1.data;
            $v_1 = $v_1.next;
        }
        RTE.PasteCommon.Debug.$1v(!$v_1, 'The Queue\'s Count is wrong!  Returning a partial array', 598022);
        return $v_0;
    }
};
RTE.HtmlImport.QueuedEventManager = function RTE_HtmlImport_QueuedEventManager() {
    this.$4U_0 = new (RTE.HtmlImport.Queue.$$(Object))();
};
RTE.HtmlImport.QueuedEventManager.prototype = {
    $4U_0: null,
    get_$JK_0: function RTE_HtmlImport_QueuedEventManager$get_$JK_0() {
        return this.$4U_0.get_isEmpty();
    },
    $a_0: function RTE_HtmlImport_QueuedEventManager$$a_0($p0) {
        this.$4U_0.enqueue($p0);
    },
    $Ba_0: function RTE_HtmlImport_QueuedEventManager$$Ba_0($p0) {
        if ($p0) {
            this.$L9_0();
        }
        while (!this.$4U_0.get_isEmpty()) {
            var $v_0 = this.$4U_0.dequeue();

            $v_0();
        }
        if ($p0) {
            this.$Ku_0();
        }
    },
    $L9_0: function RTE_HtmlImport_QueuedEventManager$$L9_0() {
    },
    $Ku_0: function RTE_HtmlImport_QueuedEventManager$$Ku_0() {
    }
};
RTE.HtmlImport.ListSemanticArgs = function RTE_HtmlImport_ListSemanticArgs($p0, $p1) {
    RTE.PasteCommon.Debug.$1v(!!$p0, 'Lists must specify a ListStyleType (eg DefaultUnordered/Ordered, Disc, Decimal, etc)', 598024);
    this.$4S_0 = $p0;
    this.$3b_0 = 0;
    this.$3d_0 = $p1;
    this.$2W_0 = $p1 === 1;
    this.$2T_0 = -1;
    this.$4W_0 = true;
};
RTE.HtmlImport.ListSemanticArgs.prototype = {
    $4S_0: 0,
    $3b_0: 0,
    $2T_0: 0,
    $4W_0: false,
    get_listStyleType: function RTE_HtmlImport_ListSemanticArgs$get_listStyleType() {
        return this.get_isListItemStyleSpecified() ? this.$3b_0 : this.$4S_0;
    },
    get_isListStyleSpecified: function RTE_HtmlImport_ListSemanticArgs$get_isListStyleSpecified() {
        return this.$4S_0 !== 2 && this.$4S_0 !== 6;
    },
    get_isListItemStyleSpecified: function RTE_HtmlImport_ListSemanticArgs$get_isListItemStyleSpecified() {
        return !!this.$3b_0;
    },
    get_startNumber: function RTE_HtmlImport_ListSemanticArgs$get_startNumber() {
        return this.$3d_0;
    },
    $3d_0: 0,
    get_isListNumbered: function RTE_HtmlImport_ListSemanticArgs$get_isListNumbered() {
        return this.get_listStyleType() >= 6;
    },
    get_isAutoNumber: function RTE_HtmlImport_ListSemanticArgs$get_isAutoNumber() {
        return this.$2W_0;
    },
    $2W_0: false,
    get_currentNumber: function RTE_HtmlImport_ListSemanticArgs$get_currentNumber() {
        RTE.PasteCommon.Debug.assertTag(this.$2T_0 >= 0, 598023);
        if (this.$4W_0) {
            return this.$3d_0 + this.$2T_0;
        }
        return this.$2T_0;
    },
    $Fo_0: function RTE_HtmlImport_ListSemanticArgs$$Fo_0() {
        var $v_0 = new RTE.HtmlImport.ListSemanticArgs(this.$4S_0, this.$3d_0);

        $v_0.$3b_0 = this.$3b_0;
        $v_0.$2W_0 = this.$2W_0;
        $v_0.$2T_0 = this.$2T_0;
        $v_0.$4W_0 = this.$4W_0;
        return $v_0;
    },
    $F3_0: function RTE_HtmlImport_ListSemanticArgs$$F3_0($p0, $p1) {
        RTE.PasteCommon.Debug.assertTag($p1 >= 0, 598025);
        this.$3b_0 = $p0;
        if ($p1 > 0) {
            this.$2W_0 = false;
            this.$2T_0 = $p1;
            this.$4W_0 = false;
        }
        else {
            this.$2T_0++;
            this.$2W_0 = true;
        }
    },
    resetListStartNumber: function RTE_HtmlImport_ListSemanticArgs$resetListStartNumber(newStartValue) {
        this.$3d_0 = newStartValue;
    }
};
RTE.HtmlImport.TableSemanticArgs = function RTE_HtmlImport_TableSemanticArgs($p0, $p1) {
    this.rowCount = $p0;
    this.colCount = $p1;
};
RTE.HtmlImport.TableSemanticArgs.prototype = {
    rowCount: 0,
    colCount: 0
};
RTE.HtmlImport.TableCellSemanticArgs = function RTE_HtmlImport_TableCellSemanticArgs($p0, $p1) {
    this.colSpan = $p0;
    this.rowSpan = $p1;
};
RTE.HtmlImport.TableCellSemanticArgs.prototype = {
    colSpan: 0,
    rowSpan: 0
};
RTE.HtmlImport.ImageSemanticArgs = function RTE_HtmlImport_ImageSemanticArgs($p0, $p1, $p2, $p3) {
    this.src = $p0;
    this.alt = $p1;
    this.width = $p2;
    this.height = $p3;
};
RTE.HtmlImport.ImageSemanticArgs.prototype = {
    src: null,
    alt: null,
    width: 0,
    height: 0
};
RTE.HtmlImport.StackNode = function RTE_HtmlImport_StackNode() {
    this.data = this.$$gta['RTE.HtmlImport.StackNode']['TNode'] === Number || Type.isEnum(this.$$gta['RTE.HtmlImport.StackNode']['TNode']) ? 0 : this.$$gta['RTE.HtmlImport.StackNode']['TNode'] === Boolean ? false : null;
};
RTE.HtmlImport.StackNode.$$ = function RTE_HtmlImport_StackNode$$$(TNode) {
    var $$cn = 'StackNode' + '$1' + '$' + (TNode.getName()).replace(/\./g, '_');

    if (!RTE.HtmlImport[$$cn]) {
        var $$ccr = RTE.HtmlImport[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['RTE.HtmlImport.StackNode'] = {
                'TNode': TNode
            };
            var $v_0 = [];

            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            RTE.HtmlImport.StackNode.apply(this, $v_0);
        };

        $$ccr.registerClass('RTE.HtmlImport.' + $$cn);
        var $$dict_5 = RTE.HtmlImport.StackNode.prototype;

        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = {
                key: $$key_6,
                value: $$dict_5[$$key_6]
            };

            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return RTE.HtmlImport[$$cn];
};
RTE.HtmlImport.StackNode.prototype = {
    next: null
};
RTE.HtmlImport.Stack = function RTE_HtmlImport_Stack() {
    this.$1u_0 = null;
    this.$p_0 = 0;
};
RTE.HtmlImport.Stack.$$ = function RTE_HtmlImport_Stack$$$(T) {
    var $$cn = 'Stack' + '$1' + '$' + (T.getName()).replace(/\./g, '_');

    if (!RTE.HtmlImport[$$cn]) {
        var $$ccr = RTE.HtmlImport[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['RTE.HtmlImport.Stack'] = {
                'T': T
            };
            var $v_0 = [];

            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            RTE.HtmlImport.Stack.apply(this, $v_0);
        };

        $$ccr.registerClass('RTE.HtmlImport.' + $$cn);
        var $$dict_5 = RTE.HtmlImport.Stack.prototype;

        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = {
                key: $$key_6,
                value: $$dict_5[$$key_6]
            };

            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return RTE.HtmlImport[$$cn];
};
RTE.HtmlImport.Stack.prototype = {
    $1u_0: null,
    $p_0: 0,
    get_count: function RTE_HtmlImport_Stack$get_count() {
        return this.$p_0;
    },
    get_isEmpty: function RTE_HtmlImport_Stack$get_isEmpty() {
        RTE.PasteCommon.Debug.assertTag(!this.$p_0 === !this.$1u_0, 598026);
        return !this.$p_0 || !this.$1u_0;
    },
    push: function RTE_HtmlImport_Stack$push(item) {
        var $v_0 = new (RTE.HtmlImport.StackNode.$$(this.$$gta['RTE.HtmlImport.Stack']['T']))();

        $v_0.data = item;
        $v_0.next = this.$1u_0;
        this.$1u_0 = $v_0;
        this.$p_0++;
    },
    peek: function RTE_HtmlImport_Stack$peek() {
        if (this.get_isEmpty()) {
            return null;
        }
        return this.$1u_0.data;
    },
    pop: function RTE_HtmlImport_Stack$pop() {
        if (this.get_isEmpty()) {
            RTE.PasteCommon.Debug.$E('Attempting to Pop off an empty Stack!', 598027);
            return null;
        }
        var $v_0 = this.$1u_0;

        this.$1u_0 = $v_0.next;
        this.$p_0--;
        return $v_0.data;
    },
    clear: function RTE_HtmlImport_Stack$clear() {
        this.$1u_0 = null;
        this.$p_0 = 0;
    },
    toArray: function RTE_HtmlImport_Stack$toArray() {
        var $v_0 = new Array(this.$p_0);
        var $v_1 = this.$1u_0;

        for (var $v_2 = this.$p_0 - 1; $v_2 >= 0; $v_2--) {
            if (!$v_1) {
                RTE.PasteCommon.Debug.$E('The Stack\'s Count is wrong!  Returning a partially-filled array', 598028);
                break;
            }
            $v_0[$v_2] = $v_1.data;
            $v_1 = $v_1.next;
        }
        RTE.PasteCommon.Debug.$1v(!$v_1, 'The Stack\'s Count is wrong!  Returning a partial array', 598029);
        return $v_0;
    }
};
RTE.HtmlImport.WordConverter = function RTE_HtmlImport_WordConverter() {
    this.$$d_$KP_0 = Function.createDelegate(this, this.$KP_0);
    this.$$d_$KQ_0 = Function.createDelegate(this, this.$KQ_0);
};
RTE.HtmlImport.WordConverter.$IN = function RTE_HtmlImport_WordConverter$$IN($p0, $p1, $p2) {
    var $v_0 = RTE.HtmlImport.WordConverter.$Dp($p0, $p1.$42_0, $p2);
    var $v_1 = RTE.PasteCommon.CustomData.getObject($v_0, 'UniqueListId');

    if ($v_1 && $v_1 !== $p1.$2S_0 || !$v_1 && $v_0.firstChild) {
        var $v_2 = $p0.ownerDocument.createElement($p2.$2R_0);

        $v_0.parentNode.insertBefore($v_2, $v_0.nextSibling);
        $v_0 = $v_2;
    }
    RTE.PasteCommon.CustomData.$4J($v_0, 'UniqueListId', $p1.$2S_0);
    return RTE.HtmlImport.WordConverter.$HQ($v_0, $p2);
};
RTE.HtmlImport.WordConverter.$HQ = function RTE_HtmlImport_WordConverter$$HQ($p0, $p1) {
    if ($p1.$2R_0 !== $p0.tagName) {
        var $v_0 = $p0.ownerDocument.createElement($p1.$2R_0);

        RTE.PasteCommon.CustomData.$4J($v_0, 'UniqueListId', RTE.PasteCommon.CustomData.getObject($p0, 'UniqueListId'));
        while ($p0.firstChild) {
            $v_0.appendChild($p0.firstChild);
        }
        $p0.parentNode.insertBefore($v_0, $p0);
        $p0.parentNode.removeChild($p0);
        $p0 = $v_0;
    }
    return $p0;
};
RTE.HtmlImport.WordConverter.$Dp = function RTE_HtmlImport_WordConverter$$Dp($p0, $p1, $p2) {
    var $v_0 = null;
    var $v_1;

    if ($p1 === 1) {
        $v_1 = RTE.HtmlImport.WordConverter.$m($p0);
    }
    else {
        $v_0 = RTE.HtmlImport.WordConverter.$Dp($p0, $p1 - 1, null);
        $v_1 = $v_0.lastChild;
    }
    if ($v_1 && $v_1.nodeType === 1) {
        var $v_3 = $v_1.tagName.toUpperCase();

        if ($v_3 === 'UL' || $v_3 === 'OL') {
            return $v_1;
        }
    }
    var $v_2 = $p0.ownerDocument.createElement($p2 ? $p2.$2R_0 : 'UL');

    if ($p1 === 1) {
        $p0.parentNode.insertBefore($v_2, $p0);
    }
    else {
        $v_0.appendChild($v_2);
    }
    return $v_2;
};
RTE.HtmlImport.WordConverter.$An = function RTE_HtmlImport_WordConverter$$An($p0, $p1) {
    for (var $v_0 = 0; $v_0 < $p0.childNodes.length; $v_0++) {
        var $v_1 = $p0.childNodes[$v_0];

        if ($v_1.nodeType === 1 && $p1 > 1) {
            RTE.HtmlImport.WordConverter.$An($v_1, $p1 - 1);
        }
        if (RTE.HtmlImport.WordConverter.$6W($v_1) || RTE.HtmlImport.WordConverter.$Ci($v_1)) {
            $p0.removeChild($v_1);
            $v_0--;
        }
    }
};
RTE.HtmlImport.WordConverter.$IK = function RTE_HtmlImport_WordConverter$$IK($p0) {
    if ($p0.nodeType === 1) {
        var $v_0 = RTE.HtmlImport.WordConverter.$C5($p0, 'mso-list');

        if ($v_0 && $v_0.length > 0) {
            try {
                var $v_1 = $v_0.split(' ');

                if ($v_1.length === 3) {
                    var $v_2 = new RTE.HtmlImport.ListItemMetadata();

                    $v_2.$42_0 = Number.parseInvariant($v_1[1].substr(5));
                    $v_2.$A1_0 = $v_0;
                    $v_2.$DW_0 = $p0;
                    return $v_2;
                }
            }
            catch ($v_3) {
                RTE.PasteCommon.Debug.$E('Error parsing mso-list: ' + $v_3.message, 840342);
            }
        }
    }
    return null;
};
RTE.HtmlImport.WordConverter.$IB = function RTE_HtmlImport_WordConverter$$IB($p0) {
    if ($p0 !== 'o' && $p0 !== '\u00b7' && $p0 !== '\u00a7' && $p0 !== '-') {
        return 'OL';
    }
    return 'UL';
};
RTE.HtmlImport.WordConverter.$8S = function RTE_HtmlImport_WordConverter$$8S($p0, $p1) {
    var $v_0 = null;

    for (var $v_1 = 0; !$v_0 && $v_1 < $p0.childNodes.length; $v_1++) {
        var $v_2 = $p0.childNodes[$v_1];

        if (RTE.HtmlImport.WordConverter.$Ci($v_2)) {
            if (typeof $v_2.innerText === 'string') {
                $v_0 = $v_2.innerText.trim();
            }
            else {
                $v_0 = $v_2.textContent.trim();
            }
            if (!$v_0.length) {
                $v_0 = 'o';
            }
        }
        else if ($v_2.nodeType === 1 && $p1 > 1) {
            $v_0 = RTE.HtmlImport.WordConverter.$8S($v_2, $p1 - 1);
        }
    }
    return $v_0;
};
RTE.HtmlImport.WordConverter.$Ci = function RTE_HtmlImport_WordConverter$$Ci($p0) {
    if ($p0.nodeType === 1) {
        var $v_0 = RTE.HtmlImport.WordConverter.$C5($p0, 'mso-list');

        if ($v_0 && $v_0.length > 0 && ($v_0.trim()).toLowerCase() === 'ignore') {
            return true;
        }
    }
    return false;
};
RTE.HtmlImport.WordConverter.$6W = function RTE_HtmlImport_WordConverter$$6W($p0) {
    return $p0.nodeType === 1 && !$p0.firstChild && $p0.tagName.toUpperCase() === 'SPAN';
};
RTE.HtmlImport.WordConverter.$C5 = function RTE_HtmlImport_WordConverter$$C5($p0, $p1) {
    var $v_0 = $p0.getAttribute('style');

    if ($v_0 && $v_0.length > 0 && $v_0.indexOf($p1) !== -1) {
        var $v_1 = $v_0.split(';');

        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = $v_1[$v_2].split(':');

            if ($v_3.length === 2 && $v_3[0].trim() === $p1) {
                return $v_3[1].trim();
            }
        }
    }
    return null;
};
RTE.HtmlImport.WordConverter.$m = function RTE_HtmlImport_WordConverter$$m($p0) {
    var $v_0 = $p0;

    do {
        $v_0 = $v_0.previousSibling;
    } while ($v_0 && RTE.HtmlImport.WordConverter.$1y($v_0));
    return $v_0;
};
RTE.HtmlImport.WordConverter.$1y = function RTE_HtmlImport_WordConverter$$1y($p0) {
    if (!$p0) {
        return true;
    }
    if ($p0.nodeType === 3) {
        var $v_0 = $p0.nodeValue;

        $v_0 = $v_0.replace(RTE.HtmlImport.WordConverter.$AA, '');
        return !($v_0.trim()).length;
    }
    if ($p0.nodeType === 1 && $p0.firstChild === $p0.lastChild && ($p0.tagName === 'SPAN' || $p0.tagName === 'FONT')) {
        return RTE.HtmlImport.WordConverter.$1y($p0.firstChild);
    }
    return false;
};
RTE.HtmlImport.WordConverter.$Kv = function RTE_HtmlImport_WordConverter$$Kv($p0) {
    for (var $v_0 = 0; $v_0 < $p0.$1W_0.length; $v_0++) {
        var $v_1 = $p0.$1W_0[$v_0];

        if ($v_1) {
            $v_1.$4i_0 = -1;
        }
    }
};
RTE.HtmlImport.WordConverter.prototype = {
    $Ek_0: 1,
    $AG_0: 0,
    $7i_0: 0,
    process: function RTE_HtmlImport_WordConverter$process(root, parentOperation) {
        if (!root) {
            RTE.PasteCommon.Debug.$7n(840341);
            return;
        }
        this.$7i_0 = 0;
        this.$AG_0 = 0;
        if (root.querySelectorAll) {
            var $v_0 = root.querySelectorAll('p');

            if ($v_0 && $v_0.length > 0) {
                var $v_1 = new RTE.PasteCommon.SimpleOperation(parentOperation, this.$$d_$KQ_0, new RTE.HtmlImport.WordConverterArguments($v_0));

                $v_1.set_$2e_1(!parentOperation || parentOperation.get_$2e_1());
                $v_1.$9Y_1();
            }
        }
    },
    $KQ_0: function RTE_HtmlImport_WordConverter$$KQ_0($p0, $p1) {
        var $v_0 = $p1;
        var $v_1 = $v_0.$9C_0[$v_0.$2a_0];
        var $v_2 = RTE.HtmlImport.WordConverter.$IK($v_1);

        if ($v_2) {
            var $v_3 = $v_0.$1W_0[$v_2.$42_0 - 1];

            if (!$v_3) {
                $v_3 = new RTE.HtmlImport.LevelLists();
                $v_0.$1W_0[$v_2.$42_0 - 1] = $v_3;
            }
            if ($v_0.$57_0 && RTE.HtmlImport.WordConverter.$m($v_1) !== $v_0.$57_0) {
                RTE.HtmlImport.WordConverter.$Kv($v_0);
            }
            var $v_4 = $v_3.$8v_0[$v_2.$A1_0];

            if (!$v_4) {
                $v_4 = new RTE.HtmlImport.ListMetadata();
                $v_4.$2S_0 = this.$Ek_0++;
                $v_4.$3q_0 = RTE.HtmlImport.WordConverter.$8S($v_1, 5);
                $v_4.$3t_0 = !$v_4.$3q_0 || !$v_4.$3q_0.length;
                $v_4.$2R_0 = RTE.HtmlImport.WordConverter.$IB($v_4.$3q_0);
                $v_3.$8v_0[$v_2.$A1_0] = $v_4;
                $v_0.$8u_0[$v_4.$2S_0.toString()] = $v_4;
            }
            else if (!$v_4.$3t_0 && $v_4.$6y_0 === 1) {
                var $v_5 = RTE.HtmlImport.WordConverter.$8S($v_1, 5);

                $v_4.$2R_0 = $v_4.$3q_0 === $v_5 ? 'UL' : 'OL';
            }
            $v_2.$2S_0 = $v_4.$2S_0;
            if ($v_4.$3t_0 || $v_4.$2R_0 === 'OL' && $v_4.$6y_0 > 0 && $v_3.$4i_0 !== $v_2.$2S_0) {
                $v_4.$3t_0 = true;
                $v_0.$1W_0[0].$4i_0 = -1;
                $v_0.$1W_0 = $v_0.$1W_0.slice(0, 1);
            }
            else {
                if ($v_0.$1W_0.length > $v_2.$42_0) {
                    $v_0.$1W_0 = $v_0.$1W_0.slice(0, $v_2.$42_0);
                }
                $v_3.$4i_0 = $v_2.$2S_0;
                $v_0.$43_0[$v_0.$43_0.length] = $v_2;
                $v_4.$6y_0++;
            }
            $v_0.$57_0 = $v_1;
        }
        else {
            var $v_6 = $v_0.$57_0;

            if ($v_6 && RTE.HtmlImport.WordConverter.$m($v_1) === $v_6 && $v_1.tagName === $v_6.tagName && $v_1.className === $v_6.className) {
                $v_6.appendChild($v_6.ownerDocument.createElement('BR'));
                $v_6.appendChild($v_6.ownerDocument.createElement('BR'));
                while ($v_1.firstChild) {
                    $v_6.appendChild($v_1.firstChild);
                }
                $v_1.parentNode.removeChild($v_1);
            }
        }
        $v_0.$2a_0++;
        if ($v_0.$9C_0.length <= $v_0.$2a_0) {
            if (!$v_0.$43_0.length) {
                return false;
            }
            $v_0.$2a_0 = 0;
            $p0.$63_1(this.$$d_$KP_0);
        }
        return true;
    },
    $KP_0: function RTE_HtmlImport_WordConverter$$KP_0($p0, $p1) {
        var $v_0 = $p1;
        var $v_1 = $v_0.$43_0[$v_0.$2a_0];
        var $v_2 = $v_1.$DW_0;
        var $v_3 = $v_0.$8u_0[$v_1.$2S_0.toString()];

        if (!$v_3.$3t_0) {
            var $v_4 = RTE.HtmlImport.WordConverter.$IN($v_2, $v_1, $v_3);

            if ($v_4) {
                RTE.HtmlImport.WordConverter.$An($v_2, 5);
                var $v_5 = $v_2.ownerDocument.createElement('LI');

                while ($v_2.firstChild) {
                    $v_5.appendChild($v_2.firstChild);
                }
                $v_4.appendChild($v_5);
                $v_2.parentNode.removeChild($v_2);
                if ($v_3.$2R_0 === 'UL') {
                    this.$AG_0++;
                }
                else {
                    this.$7i_0++;
                }
            }
        }
        $v_0.$2a_0++;
        return $v_0.$2a_0 < $v_0.$43_0.length;
    }
};
RTE.Rectangle.registerClass('RTE.Rectangle');
RTE.EmbeddingInsertArgs.registerClass('RTE.EmbeddingInsertArgs');
RTE.FontSizeInfo.registerClass('RTE.FontSizeInfo');
RTE.FontFamilyInfo.registerClass('RTE.FontFamilyInfo');
RTE.InsertTableOptions.registerClass('RTE.InsertTableOptions');
RTE.InsertLinkDialogArguments.registerClass('RTE.InsertLinkDialogArguments');
RTE.GalleryData.registerClass('RTE.GalleryData');
RTE.StyleButton.registerClass('RTE.StyleButton');
RTE.TableCellInfo.registerClass('RTE.TableCellInfo');
RTE.TableColumnInfo.registerClass('RTE.TableColumnInfo');
RTE.TableGrid.registerClass('RTE.TableGrid');
RTE.CircularArray.registerClass('RTE.CircularArray');
RTE.HtmlTagName.registerClass('RTE.HtmlTagName');
RTE.SelectionNodesProcessor.registerClass('RTE.SelectionNodesProcessor');
RTE.ApplyOnSelectionProcessor.registerClass('RTE.ApplyOnSelectionProcessor', RTE.SelectionNodesProcessor);
RTE.Autocomplete.registerClass('RTE.Autocomplete');
RTE.AutocompleteParseData.registerClass('RTE.AutocompleteParseData');
RTE.WikiLinkAutoComplete.registerClass('RTE.WikiLinkAutoComplete', null, RTE.IAutocomplete);
RTE.AutocompleteResultSource.registerClass('RTE.AutocompleteResultSource');
RTE.AutocompleteWikiLinkSource.registerClass('RTE.AutocompleteWikiLinkSource', RTE.AutocompleteResultSource);
RTE.AutocompleteListCacheObject.registerClass('RTE.AutocompleteListCacheObject');
RTE.AutocompleteListItemCacheObject.registerClass('RTE.AutocompleteListItemCacheObject');
RTE.AutocompleteCacheObject.registerClass('RTE.AutocompleteCacheObject');
RTE.RTFieldFlags.registerClass('RTE.RTFieldFlags');
RTE.Canvas.registerClass('RTE.Canvas');
RTE.CanvasEvents.registerClass('RTE.CanvasEvents');
RTE.CanvasRange.registerClass('RTE.CanvasRange');
RTE.QuickRange.registerClass('RTE.QuickRange');
RTE.ClientWebPartManager.registerClass('RTE.ClientWebPartManager');
RTE.RibbonCommandNames.registerClass('RTE.RibbonCommandNames');
RTE.CommandNames.registerClass('RTE.CommandNames');
RTE.Cursor.registerClass('RTE.Cursor');
RTE.DirtyBitManager.registerClass('RTE.DirtyBitManager');
RTE.DOMTreePosition.registerClass('RTE.DOMTreePosition');
RTE.EmbeddingCommands.registerClass('RTE.EmbeddingCommands');
RTE.EmbeddingMethods.registerClass('RTE.EmbeddingMethods');
RTE.EmbeddingDialog.registerClass('RTE.EmbeddingDialog');
RTE.RteEmbeddingDialog.registerClass('RTE.RteEmbeddingDialog', RTE.EmbeddingDialog);
RTE.WebPartEmbeddingDialog.registerClass('RTE.WebPartEmbeddingDialog', RTE.EmbeddingDialog);
RTE.ExtractChildNodesProcessor.registerClass('RTE.ExtractChildNodesProcessor');
RTE.FontCommands.registerClass('RTE.FontCommands');
RTE.HtmlFormat.registerClass('RTE.HtmlFormat');
RTE.HtmlAndSelection.registerClass('RTE.HtmlAndSelection');
RTE.HtmlSourceCommands.registerClass('RTE.HtmlSourceCommands');
RTE.EditHtmlSourceDialog.registerClass('RTE.EditHtmlSourceDialog');
RTE.ShortcutKeys.registerClass('RTE.ShortcutKeys');
RTE.MovementKeys.registerClass('RTE.MovementKeys');
RTE.SelectionClearingKeys.registerClass('RTE.SelectionClearingKeys');
RTE.LayoutsEditor.registerClass('RTE.LayoutsEditor');
RTE.LayoutsZone.registerClass('RTE.LayoutsZone');
RTE.NodeDictionaryCache.registerClass('RTE.NodeDictionaryCache');
RTE.DialogUtility.registerClass('RTE.DialogUtility');
RTE.InsertLinkDialog.registerClass('RTE.InsertLinkDialog');
RTE.InsertHtmlDialog.registerClass('RTE.InsertHtmlDialog');
RTE.InsertImageDialog.registerClass('RTE.InsertImageDialog');
RTE.ObjectCommands.registerClass('RTE.ObjectCommands');
RTE.ParagraphCommands.registerClass('RTE.ParagraphCommands');
RTE.PasteFlyout.registerClass('RTE.PasteFlyout');
RTE.RtePasteManager.registerClass('RTE.RtePasteManager');
RTE.PasteOperationArgs.registerClass('RTE.PasteOperationArgs');
RTE.PasteMode.registerClass('RTE.PasteMode');
RTE.WordConverterPasteMode.registerClass('RTE.WordConverterPasteMode', RTE.PasteMode);
RTE.AsIsPasteMode.registerClass('RTE.AsIsPasteMode', RTE.WordConverterPasteMode);
RTE.CleanPasteMode.registerClass('RTE.CleanPasteMode', RTE.WordConverterPasteMode);
RTE.PlainTextPasteMode.registerClass('RTE.PlainTextPasteMode', RTE.PasteMode);
RTE.PreviewManager.registerClass('RTE.PreviewManager');
RTE.ScrollPosition.registerClass('RTE.ScrollPosition');
RTE.ElementPlaceholderReplacer.registerClass('RTE.ElementPlaceholderReplacer');
RTE.Range.registerClass('RTE.Range');
RTE.RemoveStyleOnSelectionProcessor.registerClass('RTE.RemoveStyleOnSelectionProcessor', RTE.SelectionNodesProcessor);
RTE.RibbonIds.registerClass('RTE.RibbonIds');
RTE.CommandState.registerClass('RTE.CommandState');
RTE.RichTextEditor.registerClass('RTE.RichTextEditor');
RTE.WebPartCommands.registerClass('RTE.WebPartCommands');
RTE.RichTextEditorComponent.registerClass('RTE.RichTextEditorComponent', CUI.Page.PageComponent);
RTE.RichTextEditorComponentProvider.registerClass('RTE.RichTextEditorComponentProvider');
RTE.HtmlImport.AHtmlPasteSteward.registerClass('RTE.HtmlImport.AHtmlPasteSteward', null, RTE.HtmlImport.ISemanticEventAcceptor);
RTE.RteHtmlPasteSteward.registerClass('RTE.RteHtmlPasteSteward', RTE.HtmlImport.AHtmlPasteSteward);
RTE.RteHtmlPasteSteward.FormattingSteward.registerClass('RTE.RteHtmlPasteSteward.FormattingSteward', null, RTE.HtmlImport.IFormattingSteward);
RTE.HtmlImport.AHtmlTranslator.registerClass('RTE.HtmlImport.AHtmlTranslator', null, RTE.HtmlImport.IHtmlEventAcceptor);
RTE.HtmlImport.DefaultHtmlTranslator.registerClass('RTE.HtmlImport.DefaultHtmlTranslator', RTE.HtmlImport.AHtmlTranslator);
RTE.RteHtmlTranslator.registerClass('RTE.RteHtmlTranslator', RTE.HtmlImport.DefaultHtmlTranslator);
RTE.HtmlImport.AHtmlNormalizer.registerClass('RTE.HtmlImport.AHtmlNormalizer', null, RTE.HtmlImport.ISemanticEventAcceptor);
RTE.HtmlImport.AQueuingHtmlNormalizer.registerClass('RTE.HtmlImport.AQueuingHtmlNormalizer', RTE.HtmlImport.AHtmlNormalizer);
RTE.HtmlImport.DefaultHtmlNormalizer.registerClass('RTE.HtmlImport.DefaultHtmlNormalizer', RTE.HtmlImport.AQueuingHtmlNormalizer);
RTE.RteHtmlNormalizer.registerClass('RTE.RteHtmlNormalizer', RTE.HtmlImport.DefaultHtmlNormalizer);
RTE.RteRibbonBuilder.registerClass('RTE.RteRibbonBuilder');
RTE.UnitValue.registerClass('RTE.UnitValue');
RTE.RteUtility.registerClass('RTE.RteUtility');
RTE.SU.registerClass('RTE.SU');
RTE.Ie8TreeValidator.registerClass('RTE.Ie8TreeValidator');
RTE.SafeHtml.registerClass('RTE.SafeHtml');
RTE.Selection.registerClass('RTE.Selection');
RTE.SelectionManager.registerClass('RTE.SelectionManager');
RTE.Snapshot.registerClass('RTE.Snapshot');
RTE.SnapshotManager.registerClass('RTE.SnapshotManager');
RTE.SPRichTextEditorComponentProvider.registerClass('RTE.SPRichTextEditorComponentProvider', RTE.RichTextEditorComponentProvider);
RTE.RteRibbonCommand.registerClass('RTE.RteRibbonCommand');
RTE.CssStyleInfo.registerClass('RTE.CssStyleInfo');
RTE.StyleRuleUtility.registerClass('RTE.StyleRuleUtility');
RTE.TableCommands.registerClass('RTE.TableCommands');
RTE.TableKeyTabProcessor.registerClass('RTE.TableKeyTabProcessor', null, RTE.ICommandProcessor);
RTE.XhtmlProcessor.registerClass('RTE.XhtmlProcessor');
RTE.XhtmlRules.registerClass('RTE.XhtmlRules');
RTE.RibbonReferences.registerClass('RTE.RibbonReferences');
RTE.PasteCommon.Debug.registerClass('RTE.PasteCommon.Debug');
RTE.PasteCommon.LogLevel.registerClass('RTE.PasteCommon.LogLevel');
RTE.PasteCommon.StringUtils.registerClass('RTE.PasteCommon.StringUtils');
RTE.PasteCommon.CustomData.registerClass('RTE.PasteCommon.CustomData');
RTE.PasteCommon.AOperation.registerClass('RTE.PasteCommon.AOperation');
RTE.PasteCommon.SimpleOperation.registerClass('RTE.PasteCommon.SimpleOperation', RTE.PasteCommon.AOperation);
RTE.PasteCommon.HtmlProcessorPercentage.registerClass('RTE.PasteCommon.HtmlProcessorPercentage');
RTE.HtmlImport.HtmlProcessorArguments.registerClass('RTE.HtmlImport.HtmlProcessorArguments');
RTE.HtmlImport.WordConverterArguments.registerClass('RTE.HtmlImport.WordConverterArguments');
RTE.HtmlImport.LevelLists.registerClass('RTE.HtmlImport.LevelLists');
RTE.HtmlImport.ListItemMetadata.registerClass('RTE.HtmlImport.ListItemMetadata');
RTE.HtmlImport.ListMetadata.registerClass('RTE.HtmlImport.ListMetadata');
RTE.HtmlImport.QueuedEventManager.registerClass('RTE.HtmlImport.QueuedEventManager');
RTE.HtmlImport.DefaultHtmlNormalizer.NormalizedTable.registerClass('RTE.HtmlImport.DefaultHtmlNormalizer.NormalizedTable', RTE.HtmlImport.QueuedEventManager);
RTE.HtmlImport.DefaultHtmlNormalizer.NormalizedTable.TableCell.registerClass('RTE.HtmlImport.DefaultHtmlNormalizer.NormalizedTable.TableCell');
RTE.HtmlImport.DefaultHtmlNormalizer.ContentState.registerClass('RTE.HtmlImport.DefaultHtmlNormalizer.ContentState', RTE.HtmlImport.QueuedEventManager);
RTE.HtmlImport.HtmlProcessor.registerClass('RTE.HtmlImport.HtmlProcessor');
RTE.HtmlImport.PlaintextHtmlTranslator.registerClass('RTE.HtmlImport.PlaintextHtmlTranslator', RTE.HtmlImport.AHtmlTranslator);
RTE.HtmlImport.ListSemanticArgs.registerClass('RTE.HtmlImport.ListSemanticArgs');
RTE.HtmlImport.TableSemanticArgs.registerClass('RTE.HtmlImport.TableSemanticArgs');
RTE.HtmlImport.TableCellSemanticArgs.registerClass('RTE.HtmlImport.TableCellSemanticArgs');
RTE.HtmlImport.ImageSemanticArgs.registerClass('RTE.HtmlImport.ImageSemanticArgs');
RTE.HtmlImport.WordConverter.registerClass('RTE.HtmlImport.WordConverter');
function sp_ui_rte_initialize() {
    RTE.HtmlTagName.AREA = 'AREA';
    RTE.HtmlTagName.b = 'B';
    RTE.HtmlTagName.BODY = 'BODY';
    RTE.HtmlTagName.BUTTON = 'BUTTON';
    RTE.HtmlTagName.BR = 'BR';
    RTE.HtmlTagName.CENTER = 'CENTER';
    RTE.HtmlTagName.DEL = 'DEL';
    RTE.HtmlTagName.EM = 'EM';
    RTE.HtmlTagName.EMBED = 'EMBED';
    RTE.HtmlTagName.FONT = 'FONT';
    RTE.HtmlTagName.LI = 'LI';
    RTE.HtmlTagName.HTML = 'HTML';
    RTE.HtmlTagName.i = 'I';
    RTE.HtmlTagName.IFRAME = 'IFRAME';
    RTE.HtmlTagName.TABLE = 'TABLE';
    RTE.HtmlTagName.TBODY = 'TBODY';
    RTE.HtmlTagName.TFOOT = 'TFOOT';
    RTE.HtmlTagName.THEAD = 'THEAD';
    RTE.HtmlTagName.TD = 'TD';
    RTE.HtmlTagName.TH = 'TH';
    RTE.HtmlTagName.TR = 'TR';
    RTE.HtmlTagName.UL = 'UL';
    RTE.HtmlTagName.OBJECT = 'OBJECT';
    RTE.HtmlTagName.OL = 'OL';
    RTE.HtmlTagName.OPTION = 'OPTION';
    RTE.HtmlTagName.MENU = 'MENU';
    RTE.HtmlTagName.DIR = 'DIR';
    RTE.HtmlTagName.p = 'P';
    RTE.HtmlTagName.DIV = 'DIV';
    RTE.HtmlTagName.BLOCKQUOTE = 'BLOCKQUOTE';
    RTE.HtmlTagName.a = 'A';
    RTE.HtmlTagName.IMG = 'IMG';
    RTE.HtmlTagName.INPUT = 'INPUT';
    RTE.HtmlTagName.META = 'META';
    RTE.HtmlTagName.LINK = 'LINK';
    RTE.HtmlTagName.PARAM = 'PARAM';
    RTE.HtmlTagName.h1 = 'H1';
    RTE.HtmlTagName.h2 = 'H2';
    RTE.HtmlTagName.h3 = 'H3';
    RTE.HtmlTagName.h4 = 'H4';
    RTE.HtmlTagName.h5 = 'H5';
    RTE.HtmlTagName.h6 = 'H6';
    RTE.HtmlTagName.HR = 'HR';
    RTE.HtmlTagName.s = 'S';
    RTE.HtmlTagName.SELECT = 'SELECT';
    RTE.HtmlTagName.SPAN = 'SPAN';
    RTE.HtmlTagName.SCRIPT = 'SCRIPT';
    RTE.HtmlTagName.STYLE = 'STYLE';
    RTE.HtmlTagName.STRIKE = 'STRIKE';
    RTE.HtmlTagName.STRONG = 'STRONG';
    RTE.HtmlTagName.SUP = 'SUP';
    RTE.HtmlTagName.SUB = 'SUB';
    RTE.HtmlTagName.SVG = 'SVG';
    RTE.HtmlTagName.TEXTAREA = 'TEXTAREA';
    RTE.HtmlTagName.u = 'U';
    RTE.HtmlTagName.XML = 'XML';
    RTE.HtmlTagName.blockElements = ['ADDRESS', 'BLOCKQUOTE', 'BODY', 'CENTER', 'DD', 'DT', 'DIR', 'DIV', 'DL', 'FIELDSET', 'FORM', 'FRAMESET', 'H1', 'H2', 'H3', 'H3', 'H4', 'H5', 'H6', 'HR', 'ISINDEX', 'MENU', 'NOFRAMES', 'NOSCRIPT', 'LI', 'OL', 'P', 'PRE', 'TABLE', 'TBODY', 'TFOOT', 'TD', 'TH', 'THEAD', 'TR', 'UL'];
    RTE.HtmlTagName.$7r = {
        ADDRESS: true,
        BLOCKQUOTE: true,
        BODY: true,
        CENTER: true,
        DD: true,
        DT: true,
        DIR: true,
        DIV: true,
        DL: true,
        FIELDSET: true,
        FORM: true,
        FRAMESET: true,
        H1: true,
        H2: true,
        H3: true,
        H4: true,
        H5: true,
        H6: true,
        HR: true,
        ISINDEX: true,
        MENU: true,
        NOFRAMES: true,
        NOSCRIPT: true,
        LI: true,
        OL: true,
        P: true,
        PRE: true,
        TABLE: true,
        TBODY: true,
        TFOOT: true,
        TD: true,
        TH: true,
        THEAD: true,
        TR: true,
        UL: true
    };
    RTE.HtmlTagName.allowedElementStyleTags = {
        P: true,
        H1: true,
        H2: true,
        H3: true,
        H4: true,
        H5: true,
        H6: true
    };
    RTE.HtmlTagName.tableCellTagNames = ['TD', 'TH'];
    RTE.HtmlTagName.inlineElements = ['A', 'ABBR', 'ACRONYM', 'B', 'BASEFONT', 'BDO', 'BIG', 'BR', 'CITE', 'CODE', 'DEL', 'DFN', 'EM', 'FONT', 'I', 'IMG', 'INPUT', 'KBD', 'LABEL', 'Q', 'S', 'SAMP', 'SELECT', 'SMALL', 'SPAN', 'STRIKE', 'STRONG', 'SUB', 'SUP', 'TEXTAREA', 'TT', 'U', 'VAR'];
    RTE.HtmlTagName.$CN = {
        A: true,
        ABBR: true,
        ACRONYM: true,
        B: true,
        BASEFONT: true,
        BDO: true,
        BIG: true,
        BR: true,
        CITE: true,
        CODE: true,
        DEL: true,
        DFN: true,
        EM: true,
        FONT: true,
        I: true,
        IMG: true,
        INPUT: true,
        KBD: true,
        LABEL: true,
        Q: true,
        S: true,
        SAMP: true,
        SELECT: true,
        SMALL: true,
        SPAN: true,
        STRIKE: true,
        STRONG: true,
        SUB: true,
        SUP: true,
        TEXTAREA: true,
        TT: true,
        U: true,
        VAR: true
    };
    RTE.HtmlTagName.inlineOrBlockElements = ['APPLET', 'BUTTON', 'DEL', 'IFRAME', 'INS', 'MAP', 'OBJECT', 'SCRIPT'];
    RTE.HtmlTagName.$J4 = {
        APPLET: true,
        BUTTON: true,
        DEL: true,
        IFRAME: true,
        INS: true,
        MAP: true,
        OBJECT: true,
        SCRIPT: true
    };
    RTE.HtmlTagName.$HW = {
        CENTER: true,
        FONT: true,
        MENU: true,
        S: true,
        STRIKE: true,
        U: true
    };
    RTE.HtmlTagName.$F9 = {
        TABLE: true,
        TD: true,
        TH: true,
        TR: true
    };
    RTE.HtmlTagName.$Ep = {
        CAPTION: true,
        DIV: true,
        H1: true,
        H2: true,
        H3: true,
        H4: true,
        H5: true,
        H6: true,
        HR: true,
        IMG: true,
        INPUT: true,
        LEGEND: true,
        OBJECT: true,
        P: true,
        TABLE: true
    };
    RTE.HtmlTagName.$LQ = {
        HR: true
    };
    RTE.HtmlTagName.$Lo = {
        HR: true,
        PRE: true,
        TD: true,
        TH: true
    };
    RTE.HtmlTagName.$FB = {
        IMG: true,
        OBJECT: true
    };
    RTE.HtmlTagName.$Iq = {
        TD: true,
        TH: true
    };
    RTE.HtmlTagName.$Jq = {
        TD: true,
        TH: true
    };
    RTE.HtmlTagName.$F1 = {
        LI: true
    };
    RTE.HtmlTagName.$Ct = ['OL', 'UL'];
    RTE.HtmlTagName.$6G = ['OL', 'UL', 'DIR', 'MENU'];
    RTE.ApplyOnSelectionProcessor.$23 = new RTE.ApplyOnSelectionProcessor();
    RTE.ApplyOnSelectionProcessor.$Bc = {
        color: 'color',
        fontFamily: 'face',
        fontSize: 'size'
    };
    RTE.RTFieldFlags.$Dq = 2;
    RTE.Canvas.editableItemClass = 'ms-rtestate-write';
    RTE.Canvas.atomicItemClass = 'ms-rtestate-read';
    RTE.Canvas.regionItemClass = 'ms-rtestate-field';
    RTE.Canvas.removeOnPasteClass = 'ms-rtepaste-remove';
    RTE.Canvas.notifyOnAddedClass = 'ms-rtestate-notify';
    RTE.Canvas.notifyOnGenerateClass = 'ms-rtegenerate-notify';
    RTE.Canvas.objectGenerateClass = 'ms-rtegenerate-object';
    RTE.Canvas.skipOnGenerateClass = 'ms-rtegenerate-skip';
    RTE.Canvas.skipAllOnGenerateClass = 'ms-rtegenerate-allskip';
    RTE.Canvas.inputBoxClass = 'ms-inputBox';
    RTE.Canvas.inputBoxActiveClass = 'ms-inputBoxActive';
    RTE.Canvas.webPartBoxClass = 'ms-rte-wpbox';
    RTE.Canvas.restrictionInlineStyle = 'UseInlineStyle';
    RTE.Canvas.allowWebParts = 'AllowWebParts';
    RTE.Canvas.$EW = 300;
    RTE.Canvas.$35 = [];
    RTE.Canvas.$8f = false;
    RTE.Canvas.$8i = false;
    RTE.Canvas.$3Q = null;
    RTE.Canvas.$3l = 500;
    RTE.Canvas.$6Z = false;
    RTE.Canvas.setTableWidths = true;
    RTE.Canvas.$3m = false;
    RTE.Canvas.$1N = null;
    RTE.Canvas.$2o = null;
    RTE.Canvas.$1D = false;
    RTE.Canvas.$1h = null;
    RTE.Canvas.$8o = null;
    RTE.Canvas.$6j = false;
    RTE.Canvas.$5U = new Array(0);
    RTE.Canvas.$27 = 0;
    RTE.Canvas.$2P = null;
    RTE.Canvas.$9i = null;
    RTE.Canvas.$2w = null;
    RTE.Canvas.$6B = false;
    RTE.Canvas.$41 = null;
    RTE.Canvas.$9H = null;
    RTE.Canvas.$9F = RTE.Canvas.onMouseMove;
    RTE.Canvas.$5P = false;
    RTE.Canvas.$56 = null;
    RTE.Canvas.$Ei = new RegExp('\\W', 'g');
    RTE.Canvas.$5y = null;
    RTE.Canvas.$4E = null;
    RTE.Canvas.$7K = null;
    RTE.Canvas.$4H = null;
    RTE.Canvas.$61 = null;
    RTE.Canvas.$80 = null;
    RTE.CanvasEvents.imageEvent = 'Image';
    RTE.CanvasEvents.linkEvent = 'Link';
    RTE.CanvasEvents.tableEvent = 'Table';
    RTE.CanvasEvents.atomicEvent = 'Atomic';
    RTE.CanvasEvents.editableRegionEvent = 'EditableRegion';
    RTE.CanvasEvents.elementEvent = 'Element';
    RTE.CanvasEvents.transferEvent = 'Transfer';
    RTE.CanvasEvents.imageBlurEvent = 'ImageBlur';
    RTE.CanvasEvents.imageFocusEvent = 'ImageFocus';
    RTE.CanvasEvents.linkBlurEvent = 'LinkBlur';
    RTE.CanvasEvents.linkFocusEvent = 'LinkFocus';
    RTE.CanvasEvents.tableBlurEvent = 'TableBlur';
    RTE.CanvasEvents.tableFocusEvent = 'TableFocus';
    RTE.CanvasEvents.atomicBlurEvent = 'AtomicBlur';
    RTE.CanvasEvents.atomicFocusEvent = 'AtomicFocus';
    RTE.CanvasEvents.editableRegionBlurEvent = 'EditableRegionBlur';
    RTE.CanvasEvents.editableRegionFocusEvent = 'EditableRegionFocus';
    RTE.CanvasEvents.editableRegionSelectionEvent = 'EditableRegionSelection';
    RTE.CanvasEvents.editableRegionChangedEvent = 'EditableRegionChanged';
    RTE.CanvasEvents.elementAddedEvent = 'ElementAdded';
    RTE.CanvasEvents.elementGenerateTagEvent = 'ElementGenerateTag';
    RTE.CanvasEvents.$6i = new Sys.EventHandlerList();
    RTE.CanvasEvents.$2M = {};
    RTE.CanvasEvents.$2E = null;
    RTE.CanvasEvents.$3p = {};
    RTE.CanvasEvents.$4h = false;
    RTE.CanvasEvents.$7g = 0;
    RTE.CanvasEvents.$EE = RTE.CanvasEvents.setImageSize;
    RTE.CanvasEvents.$7o = RTE.CanvasEvents.onAtomicResize;
    RTE.CanvasRange.$69 = false;
    RTE.CanvasRange.$1f = null;
    RTE.CanvasRange.$9c = ['TD', 'TH', 'TR', 'LI', 'BR'];
    RTE.CanvasRange.$7N = ['TR', 'TBODY', 'TD', 'TH', 'LI'];
    RTE.ClientWebPartManager.$9a = false;
    RTE.RibbonCommandNames.clipboardGroup = 'ClipboardGroup';
    RTE.RibbonCommandNames.markupGroup = 'MarkupGroup';
    RTE.RibbonCommandNames.commandContextChanged = 'CommandContextChanged';
    RTE.RibbonCommandNames.editContextualGroup = 'EditingToolsContextualGroup';
    RTE.RibbonCommandNames.editTab = 'CPEditTab';
    RTE.RibbonCommandNames.editTabFullId = 'Ribbon.EditingTools.CPEditTab';
    RTE.RibbonCommandNames.editingGroup = 'EditingGroup';
    RTE.RibbonCommandNames.embedGroup = 'EmbedGroup';
    RTE.RibbonCommandNames.elementWithStyleOptions = 'ElementWithStyleOptions';
    RTE.RibbonCommandNames.existingDataGroup = 'ExistingDataGroup';
    RTE.RibbonCommandNames.fontGroup = 'FontGroup';
    RTE.RibbonCommandNames.getFontBackgroundColorMenuXml = 'GetFontBackgroundColorMenuXml';
    RTE.RibbonCommandNames.getFontColorMenuXml = 'GetFontColorMenuXml';
    RTE.RibbonCommandNames.getFontFamilyMenuXml = 'GetFontFamilyMenuXml';
    RTE.RibbonCommandNames.getFontSizeMenuXml = 'GetFontSizeMenuXml';
    RTE.RibbonCommandNames.getImageStyleMenuXml = 'GetImageStyleMenuXml';
    RTE.RibbonCommandNames.getPositionMenuXml = 'GetPositionMenuXml';
    RTE.RibbonCommandNames.getSelectElementMenuXml = 'GetSelectElementMenuXml';
    RTE.RibbonCommandNames.getTableStyleMenuXml = 'GetTableStyleMenuXml';
    RTE.RibbonCommandNames.getTextStyleMenuXml = 'GetTextStyleMenuXml';
    RTE.RibbonCommandNames.getLanguagesMenuXml = 'GetLanguagesMenuXml';
    RTE.RibbonCommandNames.getPasteMenuXml = 'GetPasteMenuXml';
    RTE.RibbonCommandNames.homeTab = 'HomeTab';
    RTE.RibbonCommandNames.imageAltLabel = 'ImageAltLabel';
    RTE.RibbonCommandNames.imageArrangeGroup = 'ImageArrangeGroup';
    RTE.RibbonCommandNames.imageArrange = 'ImageArrange';
    RTE.RibbonCommandNames.imageContextualGroup = 'ImageContextualGroup';
    RTE.RibbonCommandNames.imageEditGroup = 'ImageEditGroup';
    RTE.RibbonCommandNames.imageHorizontalLabel = 'ImageHorizontalLabel';
    RTE.RibbonCommandNames.imagePropertyGroup = 'ImagePropertyGroup';
    RTE.RibbonCommandNames.imageSizeGroup = 'ImageSizeGroup';
    RTE.RibbonCommandNames.imageStyleOptions = 'ImageStyleOptions';
    RTE.RibbonCommandNames.imageStyleGroup = 'ImageStyleGroup';
    RTE.RibbonCommandNames.imageTab = 'ImageTab';
    RTE.RibbonCommandNames.imageUrlLabel = 'ImageUrlLabel';
    RTE.RibbonCommandNames.imageVerticalLabel = 'ImageVerticalLabel';
    RTE.RibbonCommandNames.insertTab = 'InsertTab';
    RTE.RibbonCommandNames.insertImageMenuOpen = 'InsertImageMenuOpen';
    RTE.RibbonCommandNames.insertImageMenuClose = 'InsertImageMenuClose';
    RTE.RibbonCommandNames.insertLinkMenuOpen = 'InsertLinkMenuOpen';
    RTE.RibbonCommandNames.insertLinkMenuClose = 'InsertLinkMenuClose';
    RTE.RibbonCommandNames.insertDocumentMenuOpen = 'InsertDocumentMenuOpen';
    RTE.RibbonCommandNames.insertDocumentMenuClose = 'InsertDocumentMenuClose';
    RTE.RibbonCommandNames.insertDocumentOptions = 'InsertDocumentOptions';
    RTE.RibbonCommandNames.languageLabel = 'LanguageLabel';
    RTE.RibbonCommandNames.selectLabel = 'SelectLabel';
    RTE.RibbonCommandNames.htmlLabel = 'HtmlLabel';
    RTE.RibbonCommandNames.linkContextualGroup = 'LinkContextualGroup';
    RTE.RibbonCommandNames.linkGroup = 'LinkGroup';
    RTE.RibbonCommandNames.linkBehaviorGroup = 'LinkBehaviorGroup';
    RTE.RibbonCommandNames.linkAltLabel = 'LinkAltLabel';
    RTE.RibbonCommandNames.linkUrlLabel = 'LinkUrlLabel';
    RTE.RibbonCommandNames.linkPropertyGroup = 'LinkPropertyGroup';
    RTE.RibbonCommandNames.linkTab = 'LinkTab';
    RTE.RibbonCommandNames.linksGroup = 'LinksGroup';
    RTE.RibbonCommandNames.mediaGroup = 'MediaGroup';
    RTE.RibbonCommandNames.newListGroup = 'NewListGroup';
    RTE.RibbonCommandNames.pageLayoutOptions = 'PageLayoutOptions';
    RTE.RibbonCommandNames.pasteOption = 'PasteOption';
    RTE.RibbonCommandNames.pasteOpen = 'PasteOpen';
    RTE.RibbonCommandNames.pasteClose = 'PasteClose';
    RTE.RibbonCommandNames.paragraphGroup = 'ParagraphGroup';
    RTE.RibbonCommandNames.selectElement = 'SelectElement';
    RTE.RibbonCommandNames.selectTextStyle = 'SelectTextStyle';
    RTE.RibbonCommandNames.setLanguageOptions = 'SetLanguageOptions';
    RTE.RibbonCommandNames.textStyleGroup = 'TextStyleGroup';
    RTE.RibbonCommandNames.tableColumnWidthLabel = 'TableColumnWidthLabel';
    RTE.RibbonCommandNames.tableContextualGroup = 'TableContextualGroup';
    RTE.RibbonCommandNames.tableCellGroup = 'TableCellGroup';
    RTE.RibbonCommandNames.tableDeleteOptions = 'TableDeleteOptions';
    RTE.RibbonCommandNames.tableDesignTab = 'TableDesignTab';
    RTE.RibbonCommandNames.tableHeightLabel = 'TableHeightLabel';
    RTE.RibbonCommandNames.tableLayoutTab = 'TableLayoutTab';
    RTE.RibbonCommandNames.tableMiscGroup = 'TableMiscGroup';
    RTE.RibbonCommandNames.tableMergeOptions = 'TableMergeOptions';
    RTE.RibbonCommandNames.tableRowColumnGroup = 'TableRowColumnGroup';
    RTE.RibbonCommandNames.tableRowHeightLabel = 'TableRowHeightLabel';
    RTE.RibbonCommandNames.tableSplitOptions = 'TableSplitOptions';
    RTE.RibbonCommandNames.tableStyleGroup = 'TableStyleGroup';
    RTE.RibbonCommandNames.tableStyleOptions = 'TableStyleOptions';
    RTE.RibbonCommandNames.tableStyleOptionGroup = 'TableStyleOptionGroup';
    RTE.RibbonCommandNames.tableSummaryLabel = 'TableSummaryLabel';
    RTE.RibbonCommandNames.tableSummaryGroup = 'TableSummaryGroup';
    RTE.RibbonCommandNames.tableWidthHeightGroup = 'TableWidthHeightGroup';
    RTE.RibbonCommandNames.tableWidthLabel = 'TableWidthLabel';
    RTE.RibbonCommandNames.tablesGroup = 'TablesGroup';
    RTE.RibbonCommandNames.undoClose = 'UndoClose';
    RTE.RibbonCommandNames.undoOpen = 'UndoOpen';
    RTE.RibbonCommandNames.webPartsGroup = 'WebPartsGroup';
    RTE.RibbonCommandNames.wikiGroup = 'WikiGroup';
    RTE.RibbonCommandNames.selectTextStyleOpen = 'SelectTextStyleOpen';
    RTE.RibbonCommandNames.selectTextStyleClose = 'SelectTextStyleClose';
    RTE.RibbonCommandNames.elementWithStyleOptionsOpen = 'ElementWithStyleOptionsOpen';
    RTE.RibbonCommandNames.elementWithStyleOptionsClose = 'ElementWithStyleOptionsClose';
    RTE.RibbonCommandNames.selectElementOpen = 'SelectElementOpen';
    RTE.RibbonCommandNames.selectElementClose = 'SelectElementClose';
    RTE.RibbonCommandNames.tableStyleOptionsOpen = 'TableStyleOptionsOpen';
    RTE.RibbonCommandNames.tableStyleOptionsClose = 'TableStyleOptionsClose';
    RTE.RibbonCommandNames.imageStyleOptionsOpen = 'ImageStyleOptionsOpen';
    RTE.RibbonCommandNames.imageStyleOptionsClose = 'ImageStyleOptionsClose';
    RTE.RibbonCommandNames.imageArrangeMenuOpen = 'ImageArrangeMenuOpen';
    RTE.RibbonCommandNames.imageArrangeMenuClose = 'ImageArrangeMenuClose';
    RTE.RibbonCommandNames.fontFamilyStyleOpen = 'FontFamilyStyleOpen';
    RTE.RibbonCommandNames.fontFamilyStyleClose = 'FontFamilyStyleClose';
    RTE.RibbonCommandNames.fontSizeStyleOpen = 'FontSizeStyleOpen';
    RTE.RibbonCommandNames.fontSizeStyleClose = 'FontSizeStyleClose';
    RTE.RibbonCommandNames.selectBackgroundColorOpen = 'SelectBackgroundColorOpen';
    RTE.RibbonCommandNames.selectBackgroundColorClose = 'SelectBackgroundColorClose';
    RTE.RibbonCommandNames.selectFontColorOpen = 'SelectFontColorOpen';
    RTE.RibbonCommandNames.selectFontColorClose = 'SelectFontColorClose';
    RTE.RibbonCommandNames.htmlMenuOpen = 'HtmlMenuOpen';
    RTE.CommandNames.alignLeft = 'AlignLeft';
    RTE.CommandNames.alignCenter = 'AlignCenter';
    RTE.CommandNames.alignRight = 'AlignRight';
    RTE.CommandNames.alignJustify = 'AlignJustify';
    RTE.CommandNames.backgroundColorCssClass = 'BackgroundColorCssClass';
    RTE.CommandNames.backgroundColorCssClassPreview = 'BackgroundColorCssClassPreview';
    RTE.CommandNames.backgroundColorCssClassPreviewRevert = 'BackgroundColorCssClassPreviewRevert';
    RTE.CommandNames.backgroundColorThemeClass = 'BackgroundColorThemeClass';
    RTE.CommandNames.backgroundColorThemeClassPreview = 'BackgroundColorThemeClassPreview';
    RTE.CommandNames.backgroundColorThemeClassPreviewRevert = 'BackgroundColorThemeClassPreviewRevert';
    RTE.CommandNames.backgroundColorCustom = 'BackgroundColorCustom';
    RTE.CommandNames.bold = 'Bold';
    RTE.CommandNames.bulletedList = 'BulletedList';
    RTE.CommandNames.clearFormatting = 'ClearFormatting';
    RTE.CommandNames.copy = 'Copy';
    RTE.CommandNames.copyPageAddress = 'CopyPageAddress';
    RTE.CommandNames.colorCssClass = 'ColorCssClass';
    RTE.CommandNames.colorCssClassPreview = 'ColorCssClassPreview';
    RTE.CommandNames.colorCssClassPreviewRevert = 'ColorCssClassPreviewRevert';
    RTE.CommandNames.colorThemeClass = 'ColorThemeClass';
    RTE.CommandNames.colorThemeClassPreview = 'ColorThemeClassPreview';
    RTE.CommandNames.colorThemeClassPreviewRevert = 'ColorThemeClassPreviewRevert';
    RTE.CommandNames.colorCustom = 'ColorCustom';
    RTE.CommandNames.cut = 'Cut';
    RTE.CommandNames.decreaseIndent = 'DecreaseIndent';
    RTE.CommandNames.deleteCell = 'DeleteCell';
    RTE.CommandNames.deleteRow = 'DeleteRow';
    RTE.CommandNames.deleteColumn = 'DeleteColumn';
    RTE.CommandNames.deleteTable = 'DeleteTable';
    RTE.CommandNames.editImage = 'EditImage';
    RTE.CommandNames.editImageUpload = 'EditImageUpload';
    RTE.CommandNames.editImageWeb = 'EditImageWeb';
    RTE.CommandNames.editSource = 'EditSource';
    RTE.CommandNames.elementWithStyle = 'ElementWithStyle';
    RTE.CommandNames.elementWithStylePreview = 'ElementWithStylePreview';
    RTE.CommandNames.elementWithStylePreviewRevert = 'ElementWithStylePreviewRevert';
    RTE.CommandNames.applyLiveGalleryStyle = 'ApplyLiveGalleryStyle';
    RTE.CommandNames.applyLiveGalleryStylePreview = 'ApplyLiveGalleryStylePreview';
    RTE.CommandNames.applyLiveGalleryStylePreviewRevert = 'ApplyLiveGalleryStylePreviewRevert';
    RTE.CommandNames.fontFamilyCssClass = 'FontFamilyCssClass';
    RTE.CommandNames.fontFamilyCssClassPreview = 'FontFamilyCssClassPreview';
    RTE.CommandNames.fontFamilyCssClassPreviewRevert = 'FontFamilyCssClassPreviewRevert';
    RTE.CommandNames.fontFamilyThemeClass = 'FontFamilyThemeClass';
    RTE.CommandNames.fontFamilyThemeClassPreview = 'FontFamilyThemeClassPreview';
    RTE.CommandNames.fontFamilyThemeClassPreviewRevert = 'FontFamilyThemeClassPreviewRevert';
    RTE.CommandNames.fontFamilyStyleValue = 'FontFamilyStyleValue';
    RTE.CommandNames.fontSizeCssClass = 'FontSizeCssClass';
    RTE.CommandNames.fontSizeCssClassPreview = 'FontSizeCssClassPreview';
    RTE.CommandNames.fontSizeCssClassPreviewRevert = 'FontSizeCssClassPreviewRevert';
    RTE.CommandNames.fontSizeStyleValue = 'FontSizeStyleValue';
    RTE.CommandNames.leftToRight = 'LeftToRight';
    RTE.CommandNames.increaseIndent = 'IncreaseIndent';
    RTE.CommandNames.linkBookmark = 'LinkBookmark';
    RTE.CommandNames.linkDisplayIcon = 'LinkDisplayIcon';
    RTE.CommandNames.linkEditWeb = 'LinkEditWeb';
    RTE.CommandNames.linkInNewTab = 'LinkInNewTab';
    RTE.CommandNames.linkTitleChanged = 'LinkTitleChanged';
    RTE.CommandNames.linkUrlChanged = 'LinkUrlChanged';
    RTE.CommandNames.linkRemove = 'LinkRemove';
    RTE.CommandNames.imageAlt = 'ImageAlt';
    RTE.CommandNames.imageClearStyle = 'ImageClearStyle';
    RTE.CommandNames.imageEdit = 'ImageEdit';
    RTE.CommandNames.imagePosition = 'ImagePosition';
    RTE.CommandNames.imagePositionPreview = 'ImagePositionPreview';
    RTE.CommandNames.imagePositionPreviewRevert = 'ImagePositionPreviewRevert';
    RTE.CommandNames.imageHeight = 'ImageHeight';
    RTE.CommandNames.imageLockRatio = 'ImageLockRatio';
    RTE.CommandNames.imageSrc = 'ImageSrc';
    RTE.CommandNames.imageStyle = 'ImageStyle';
    RTE.CommandNames.imageStylePreview = 'ImageStylePreview';
    RTE.CommandNames.imageStylePreviewRevert = 'ImageStylePreviewRevert';
    RTE.CommandNames.imageWidth = 'ImageWidth';
    RTE.CommandNames.insertEmbedding = 'InsertEmbedding';
    RTE.CommandNames.insertLink = 'InsertLink';
    RTE.CommandNames.insertLinkWeb = 'InsertLinkWeb';
    RTE.CommandNames.insertImage = 'InsertImage';
    RTE.CommandNames.insertImageUpload = 'InsertImageUpload';
    RTE.CommandNames.insertImageWeb = 'InsertImageWeb';
    RTE.CommandNames.insertTable = 'InsertTable';
    RTE.CommandNames.insertTableMenu = 'InsertTableMenu';
    RTE.CommandNames.insertTableDialog = 'InsertTableDialog';
    RTE.CommandNames.insertTablePreview = 'InsertTablePreview';
    RTE.CommandNames.insertTablePreviewRevert = 'InsertTablePreviewRevert';
    RTE.CommandNames.insertRowAbove = 'InsertRowAbove';
    RTE.CommandNames.insertRowBelow = 'InsertRowBelow';
    RTE.CommandNames.insertColumnLeft = 'InsertColumnLeft';
    RTE.CommandNames.insertColumnRight = 'InsertColumnRight';
    RTE.CommandNames.insertList = 'InsertList';
    RTE.CommandNames.insertNewList = 'InsertNewList';
    RTE.CommandNames.insertWebPart = 'InsertWebPart';
    RTE.CommandNames.italic = 'Italics';
    RTE.CommandNames.layoutOneColumn = 'LayoutOneColumn';
    RTE.CommandNames.layoutOneColumnSidebar = 'LayoutOneColumnSidebar';
    RTE.CommandNames.layoutTwoColumn = 'LayoutTwoColumn';
    RTE.CommandNames.layoutTwoColumnHeader = 'LayoutTwoColumnHeader';
    RTE.CommandNames.layoutTwoColumnHeaderFooter = 'LayoutTwoColumnHeaderFooter';
    RTE.CommandNames.layoutThreeColumn = 'LayoutThreeColumn';
    RTE.CommandNames.layoutThreeColumnHeader = 'LayoutThreeColumnHeader';
    RTE.CommandNames.layoutThreeColumnHeaderFooter = 'LayoutThreeColumnHeaderFooter';
    RTE.CommandNames.makeXhtml = 'MakeXhtml';
    RTE.CommandNames.mergeCellAbove = 'MergeCellAbove';
    RTE.CommandNames.mergeCellBelow = 'MergeCellBelow';
    RTE.CommandNames.mergeCellLeft = 'MergeCellLeft';
    RTE.CommandNames.mergeCellRight = 'MergeCellRight';
    RTE.CommandNames.mergeCells = 'MergeCells';
    RTE.CommandNames.numberedList = 'NumberedList';
    RTE.CommandNames.paste = 'Paste';
    RTE.CommandNames.pasteDefault = 'PasteDefault';
    RTE.CommandNames.queryAlignCenter = 'QueryAlignCenter';
    RTE.CommandNames.queryAlignJustify = 'QueryAlignJustify';
    RTE.CommandNames.queryAlignLeft = 'QueryAlignLeft';
    RTE.CommandNames.queryAlignRight = 'QueryAlignRight';
    RTE.CommandNames.queryBold = 'QueryBold';
    RTE.CommandNames.queryBulletedList = 'QueryBulletedList';
    RTE.CommandNames.queryElementWithStyle = 'QueryElementWithStyle';
    RTE.CommandNames.queryLiveGalleryStyle = 'QueryLiveGalleryStyle';
    RTE.CommandNames.queryFontFamily = 'QueryFontFamily';
    RTE.CommandNames.queryFontSize = 'QueryFontSize';
    RTE.CommandNames.queryLanguage = 'QueryLanguage';
    RTE.CommandNames.queryLinkDisplayIcon = 'QueryLinkDisplayIcon';
    RTE.CommandNames.queryLinkBookmark = 'QueryLinkBookmark';
    RTE.CommandNames.queryLinkInNewTab = 'QueryLinkInNewTab';
    RTE.CommandNames.queryLinkTitle = 'QueryLinkTitle';
    RTE.CommandNames.queryLinkUrl = 'QueryLinkUrl';
    RTE.CommandNames.queryItalic = 'QueryItalics';
    RTE.CommandNames.queryImageAlt = 'QueryImageAlt';
    RTE.CommandNames.queryImageHeight = 'QueryImageHeight';
    RTE.CommandNames.queryImageLockRatio = 'QueryImageLockRatio';
    RTE.CommandNames.queryImageSrc = 'QueryImageSrc';
    RTE.CommandNames.queryImageStyle = 'QueryImageStyle';
    RTE.CommandNames.queryImageWidth = 'QueryImageWidth';
    RTE.CommandNames.queryLeftToRight = 'QueryLeftToRight';
    RTE.CommandNames.queryNumberedList = 'QueryNumberedList';
    RTE.CommandNames.queryRightToLeft = 'QueryRightToLeft';
    RTE.CommandNames.queryStrikeThrough = 'QueryStrikeThrough';
    RTE.CommandNames.querySubscript = 'QuerySubscript';
    RTE.CommandNames.querySuperscript = 'QuerySuperscript';
    RTE.CommandNames.queryTableColumnWidth = 'QueryTableColumnWidth';
    RTE.CommandNames.queryTableHeight = 'QueryTableHeight';
    RTE.CommandNames.queryTableRowHeight = 'QueryTableRowHeight';
    RTE.CommandNames.queryTableWidth = 'QueryTableWidth';
    RTE.CommandNames.queryTableHeadingRow = 'QueryTableHeadingRow';
    RTE.CommandNames.queryTableFirstColumn = 'QueryTableFirstColumn';
    RTE.CommandNames.queryTableFooterRow = 'QueryTableFooterRow';
    RTE.CommandNames.queryTableLastColumn = 'QueryTableLastColumn';
    RTE.CommandNames.queryTableViewGridlines = 'QueryTableViewGridlines';
    RTE.CommandNames.queryTableStyle = 'QueryTableStyle';
    RTE.CommandNames.queryTableSummary = 'QueryTableSummary';
    RTE.CommandNames.queryTextStyle = 'QueryTextStyle';
    RTE.CommandNames.queryUnderline = 'QueryUnderline';
    RTE.CommandNames.redo = 'Redo';
    RTE.CommandNames.removeStyles = 'RemoveStyles';
    RTE.CommandNames.rightToLeft = 'RightToLeft';
    RTE.CommandNames.selectAll = 'SelectAll';
    RTE.CommandNames.selectMenuItem = 'SelectMenuItem';
    RTE.CommandNames.selectMenuItemPreview = 'SelectMenuItemPreview';
    RTE.CommandNames.selectMenuItemPreviewRevert = 'SelectMenuItemPreviewRevert';
    RTE.CommandNames.selectBackgroundColor = 'SelectBackgroundColor';
    RTE.CommandNames.selectFontColor = 'SelectFontColor';
    RTE.CommandNames.selectFontFamily = 'SelectFont';
    RTE.CommandNames.selectFontSize = 'SelectFontSize';
    RTE.CommandNames.serverButton = 'ServerButton';
    RTE.CommandNames.serverQueryButton = 'ServerQueryButton';
    RTE.CommandNames.setLanguage = 'SetLanguage';
    RTE.CommandNames.setTableWidth = 'SetTableWidth';
    RTE.CommandNames.setTableHeight = 'SetTableHeight';
    RTE.CommandNames.setTableRowHeight = 'SetTableRowHeight';
    RTE.CommandNames.setTableColumnWidth = 'SetTableColumnWidth';
    RTE.CommandNames.splitHorizontal = 'SplitHorizontal';
    RTE.CommandNames.splitVertical = 'SplitVertical';
    RTE.CommandNames.strikeThrough = 'StrikeThrough';
    RTE.CommandNames.subscript = 'Subscript';
    RTE.CommandNames.superscript = 'Superscript';
    RTE.CommandNames.tableViewGridlines = 'TableViewGridlines';
    RTE.CommandNames.tableHeadingRow = 'TableHeadingRow';
    RTE.CommandNames.tableFooterRow = 'TableFooterRow';
    RTE.CommandNames.tableFirstColumn = 'TableFirstColumn';
    RTE.CommandNames.tableLastColumn = 'TableLastColumn';
    RTE.CommandNames.tableClearFormatting = 'TableClearFormatting';
    RTE.CommandNames.tableStyle = 'TableStyle';
    RTE.CommandNames.tableStylePreview = 'TableStylePreview';
    RTE.CommandNames.tableStylePreviewRevert = 'TableStylePreviewRevert';
    RTE.CommandNames.tableSummary = 'TableSummary';
    RTE.CommandNames.textStyle = 'TextStyle';
    RTE.CommandNames.textStylePreview = 'TextStylePreview';
    RTE.CommandNames.textStylePreviewRevert = 'TextStylePreviewRevert';
    RTE.CommandNames.underline = 'Underline';
    RTE.CommandNames.undo = 'Undo';
    RTE.CommandNames.uploadDocumentRTE = 'UploadDocumentRTE';
    RTE.Cursor.$7h = false;
    RTE.Cursor.$6c = false;
    RTE.Cursor.$6d = false;
    RTE.Cursor.$24 = true;
    RTE.Cursor.s_range = new RTE.CanvasRange('cursor');
    RTE.Cursor.$7L = false;
    RTE.Cursor.$3C = false;
    RTE.Cursor.$4L = true;
    RTE.Cursor.$14 = false;
    RTE.Cursor.$48 = null;
    RTE.Cursor.$6C = null;
    RTE.Cursor.allowSafariDragAndDrop = false;
    RTE.Cursor.$4I = false;
    RTE.Cursor.$4X = false;
    RTE.Cursor.$3a = null;
    RTE.Cursor.$X = null;
    RTE.Cursor.$49 = false;
    RTE.Cursor.$3S = false;
    RTE.Cursor.$1V = 0;
    RTE.Cursor.ignoreBeforePasteOrDrop = false;
    RTE.Cursor.$K = null;
    RTE.Cursor.$73 = null;
    RTE.Cursor.$8k = RTE.Cursor.$K6;
    RTE.Cursor.$4w = false;
    RTE.Cursor.$6A = 0;
    RTE.Cursor.$L = new RTE.CanvasRange('paste');
    RTE.Cursor.$39 = false;
    RTE.Cursor.$52 = false;
    RTE.Cursor.$4P = 0;
    RTE.Cursor.$4O = true;
    RTE.Cursor.$Ea = RTE.Cursor.$Le;
    RTE.DirtyBitManager.$5W = false;
    RTE.DirtyBitManager.$4F = false;
    RTE.EmbeddingCommands.$9f = {};
    RTE.FontCommands.$8y = true;
    RTE.FontCommands.$DN = ['UL', 'OL', 'MENU', 'DIR', 'TR', 'TBODY', 'TABLE'];
    RTE.FontCommands.$8t = 'pt';
    RTE.FontCommands.$8s = null;
    RTE.HtmlFormat.$BA = new RegExp('<span[^>]*id=(\"|\'|)ms-rterangecursor-start(\"|\'|)', 'i');
    RTE.HtmlFormat.$B8 = new RegExp('<span[^>]*id=(\"|\'|)ms-rterangecursor-end(\"|\'|)', 'i');
    RTE.HtmlFormat.$9P = new RegExp('\\n|\\r', 'g');
    RTE.HtmlFormat.$Eh = new RegExp('style\\s*=\\s*(\"|\')[^(\"|\')]*white-space:\\s*pre', 'i');
    RTE.HtmlFormat.$2s = null;
    RTE.HtmlFormat.$3B = null;
    RTE.ShortcutKeys.$u = null;
    RTE.MovementKeys.$1B = null;
    RTE.SelectionClearingKeys.$11 = null;
    RTE.LayoutsEditor.$2m = null;
    RTE.DialogUtility.$2n = null;
    RTE.InsertHtmlDialog.uploadImageDialogName = 'UploadImage';
    RTE.InsertHtmlDialog.uploadDocumentDialogName = 'UploadDocument';
    RTE.PasteFlyout.$W = null;
    RTE.RtePasteManager.$34 = null;
    RTE.RtePasteManager.$2D = null;
    RTE.RtePasteManager.$3k = null;
    RTE.PasteMode.pasteAsIsId = 'PasteAsIs';
    RTE.PasteMode.pasteCleanId = 'PasteClean';
    RTE.PasteMode.pastePlainId = 'PastePlain';
    RTE.CleanPasteMode.passThroughClasses = new Array(0);
    RTE.CleanPasteMode.$$cctor();
    RTE.PlainTextPasteMode.$AC = new RegExp('\r', 'gi');
    RTE.PlainTextPasteMode.$AE = new RegExp('\n', 'gi');
    RTE.PlainTextPasteMode.$AD = new RegExp('\n *\n', 'gi');
    RTE.PlainTextPasteMode.$AF = new RegExp('  +', 'gi');
    RTE.PreviewManager.$W = null;
    RTE.Range.$9d = ['StartToEnd', 'StartToStart', 'EndToStart', 'EndToEnd'];
    RTE.RemoveStyleOnSelectionProcessor.keepStyleOnNode = 'ms-rteKeepStyles';
    RTE.RemoveStyleOnSelectionProcessor.$23 = new RTE.RemoveStyleOnSelectionProcessor();
    RTE.RibbonIds.bold = 'Ribbon.EditingTools.CPEditTab.Font.Bold';
    RTE.RibbonIds.editContextualGroup = 'Ribbon.EditingTools';
    RTE.RibbonIds.editSource = 'Ribbon.EditingTools.CPEditTab.Html.EditSource';
    RTE.RibbonIds.elementWithStyle = 'ElementWithStyle';
    RTE.RibbonIds.elementWithStyleMenu = 'Ribbon.EditingTools.CPEditTab.Paragraph.ElementWithStyle.Menu';
    RTE.RibbonIds.elementWithStyleMenuSection = 'Ribbon.EditingTools.CPEditTab.Paragraph.ElementWithStyle.Menu.Styles';
    RTE.RibbonIds.fontFaceMenu = 'Ribbon.EditingTools.CPEditTab.Font.FontFace.Menu';
    RTE.RibbonIds.fontSizeMenu = 'Ribbon.EditingTools.CPEditTab.Font.FontSize.Menu';
    RTE.RibbonIds.fontColorMenu = 'Ribbon.EditingTools.CPEditTab.Font.FontColor.Menu';
    RTE.RibbonIds.fontBackgroundColorMenu = 'Ribbon.EditingTools.CPEditTab.Font.FontBackgroundColor.Menu';
    RTE.RibbonIds.fontGroup = 'Font';
    RTE.RibbonIds.homeTab = 'Ribbon.tabhome';
    RTE.RibbonIds.languagesMenuItem = 'Ribbon.EditingTools.CPEditTab.Html.Languages.Menu.Languages';
    RTE.RibbonIds.languagesMenu = 'Ribbon.EditingTools.CPEditTab.Html.Languages.Menu';
    RTE.RibbonIds.languagesMenuSection = 'Ribbon.EditingTools.CPEditTab.Html.Languages.Menu.Languages';
    RTE.RibbonIds.pasteMenu = 'Ribbon.EditingTools.CPEditTab.Clipboard.Paste.Menu';
    RTE.RibbonIds.pasteMenuSection = 'Ribbon.EditingTools.CPEditTab.Clipboard.Paste.Menu.PasteModes';
    RTE.RibbonIds.linkContextualGroup = 'Ribbon.Link';
    RTE.RibbonIds.imageStyle = 'ImageStyle';
    RTE.RibbonIds.imageStyleMenu = 'Ribbon.Image.Image.Styles.ImageStyles.Menu';
    RTE.RibbonIds.imageStyleMenuSection = 'Ribbon.Image.Image.Styles.ImageStyles.Menu.Styles';
    RTE.RibbonIds.imageRemoveStyle = 'ImageRemoveStyle';
    RTE.RibbonIds.imagePosition = 'ImagePosition';
    RTE.RibbonIds.imagePositionMenu = 'Ribbon.Image.Position.Menu';
    RTE.RibbonIds.imagePositionMenuInlineSection = 'Ribbon.Image.Position.Menu.Inline';
    RTE.RibbonIds.imagePositionMenuFloatSection = 'Ribbon.Image.Position.Menu.Float';
    RTE.RibbonIds.imageWidth = 'fsspImageWidth';
    RTE.RibbonIds.imageWidthLabel = 'ImageWidthLabel';
    RTE.RibbonIds.imageContextualGroup = 'Ribbon.Image';
    RTE.RibbonIds.imageGroup = 'Ribbon.Image.Image.Properties';
    RTE.RibbonIds.imageTab = 'Ribbon.Image.Image';
    RTE.RibbonIds.italic = 'Ribbon.EditingTools.CPEditTab.Font.Italics';
    RTE.RibbonIds.paragraphGroup = 'Ribbon.EditingTools.CPEditTab.Paragraph';
    RTE.RibbonIds.selectMenu = 'Ribbon.EditingTools.CPEditTab.Html.Select.Menu';
    RTE.RibbonIds.selectMenuSection = 'Ribbon.EditingTools.CPEditTab.Html.Select.Menu.Elements';
    RTE.RibbonIds.selectMenuItem = 'SelectMenuItem';
    RTE.RibbonIds.tableStyleMenu = 'Ribbon.Table.Design.Style.TableStyles.Menu';
    RTE.RibbonIds.tableStyleMenuSection = 'Ribbon.Table.Design.Styles.TableStyles.Menu.TableStyles';
    RTE.RibbonIds.tableStyle = 'TableStyle';
    RTE.RibbonIds.tablesGroup = 'grpTables';
    RTE.RibbonIds.tableHeadingRow = 'Ribbon.Table.Design.StyleOptions.TableHead';
    RTE.RibbonIds.tableFooterRow = 'Ribbon.Table.Design.StyleOptions.TableLastRow';
    RTE.RibbonIds.tableFirstColumn = 'Ribbon.Table.Design.StyleOptions.TableFirstCol';
    RTE.RibbonIds.tableLastColumn = 'Ribbon.Table.Design.StyleOptions.TableLastCol';
    RTE.RibbonIds.tableLayoutContextualGroup = 'tabTableLayout';
    RTE.RibbonIds.tableRemoveStyle = 'TableRemoveStyle';
    RTE.RibbonIds.textStyle = 'Ribbon.EditingTools.CPEditTab.Styles.Styles.Menu.Styles.TextStyle';
    RTE.RibbonIds.textStyleMenu = 'ms-rte-styleGalleryMenu';
    RTE.RibbonIds.textStyleMenuSection = 'Ribbon.EditingTools.CPEditTab.Styles.Styles.Menu.Styles';
    RTE.RibbonIds.tableContextualGroup = 'Ribbon.Table';
    RTE.RibbonIds.tableDesignTab = 'Ribbon.Table.Design';
    RTE.RibbonIds.underline = 'Ribbon.EditingTools.CPEditTab.Font.Underline';
    RTE.RichTextEditor.$6f = 'Language';
    RTE.RichTextEditor.$A0 = ['px', '%'];
    RTE.RichTextEditor.$5S = 'Position';
    RTE.RichTextEditor.$3A = 'Image';
    RTE.RichTextEditor.$Ll = ['px', '%'];
    RTE.RichTextEditorComponent.$W = null;
    RTE.RichTextEditorComponentProvider.$2O = null;
    RTE.RichTextEditorComponentProvider.$4G = null;
    RTE.RteHtmlPasteSteward.$18 = {};
    RTE.RteHtmlTranslator.$AL = new RegExp('^0(px|em|in|pt)$', 'i');
    RTE.RteRibbonBuilder.numStyleRibbonButtons = 5;
    RTE.RteUtility.$CH = 20;
    RTE.RteUtility.$CI = 20;
    RTE.RteUtility.$8j = RTE.RteUtility.$LC;
    RTE.RteUtility.$4q = 'ForceImageSizeInit';
    RTE.RteUtility.$7w = String.fromCharCode(160) + String.fromCharCode(160);
    RTE.RteUtility.$3X = String.fromCharCode(160);
    RTE.RteUtility.$2p = '\u200b';
    RTE.RteUtility.$8r = null;
    RTE.RteUtility.$8p = null;
    RTE.RteUtility.$8q = null;
    RTE.RteUtility.$7c = true;
    RTE.RteUtility.$6R = {};
    RTE.RteUtility.$6S = 0;
    RTE.RteUtility.$85 = RTE.RteUtility.$Fm;
    RTE.RteUtility.$A3 = {
        IMG: 'true',
        BR: 'true',
        INPUT: 'true',
        META: 'true',
        LINK: 'true',
        PARAM: 'true',
        AREA: 'true',
        HR: 'true'
    };
    RTE.RteUtility.$Hw = RTE.RteUtility.$Hv;
    RTE.RteUtility.$7U = document.createElement('DIV');
    RTE.RteUtility.$7V = {};
    RTE.RteUtility.$5g = 0;
    RTE.RteUtility.$EO = new RegExp('<span((id|rtenodeid)=\"[^\"]*\"|style=\"display:[ ]*none;[ ]*\"|\\s*)*>');
    RTE.RteUtility.$BL = new RegExp('<font(rtenodeid=\"[^\"]*\"|\\s*)*>');
    RTE.RteUtility.$EN = new RegExp('<div((id|rtenodeid)=\"[^\"]*\"|style=\"display:[ ]*none;[ ]*\"|\\s*)*>');
    RTE.RteUtility.$5V = {};
    RTE.RteUtility.$9Z = false;
    RTE.RteUtility.$BM = new RegExp('(<span/>)', 'ig');
    RTE.RteUtility.$B9 = new RegExp('(<span(([^<]*) id=(\"|)ms-rterange([^-]*)-(end|start)(\"|)([^<]*)|)></span>|<span/>)', 'ig');
    RTE.RteUtility.$9X = new RegExp('\\s*RteNodeId\\s*=\\s*(\"|\'|)[\\d]*(\"|\'|)', 'ig');
    RTE.RteUtility.$Do = new RegExp('(<span(([^<]*) id=(\"|)ms-rterange(?!cursor)([^-]*)-(end|start)(\"|)([^<]*)|)></span>|<span/>)', 'ig');
    RTE.RteUtility.$7Z = null;
    RTE.RteUtility.$Ee = ['px', 'pt', '%', 'em', 'in', 'mm', 'cm', 'ex', 'pc', ''];
    RTE.RteUtility.$EL = RTE.RteUtility.$LP;
    RTE.RteUtility.$7S = null;
    RTE.RteUtility.$7T = null;
    RTE.RteUtility.$ER = new RegExp('^[ \\n\\r\\t\\v\\f]*$', 'i');
    RTE.RteUtility.$EQ = new RegExp('^[ \\n\\r\\t\\v\\f\\u00A0\\u200B]*$', 'i');
    RTE.RteUtility.$9B = 1;
    RTE.SafeHtml.$9b = null;
    RTE.SafeHtml.$3Y = null;
    RTE.SafeHtml.$4k = ['ms-rtestate-field'];
    RTE.SelectionManager.$2q = null;
    RTE.SelectionManager.$7Q = true;
    RTE.SelectionManager.$5Y = [];
    RTE.SelectionManager.$6z = [];
    RTE.SnapshotManager.$55 = null;
    RTE.SnapshotManager.$1U = new RTE.CircularArray(200);
    RTE.SnapshotManager.$3T = new RTE.CircularArray(200);
    RTE.SnapshotManager.$DI = 1;
    RTE.SnapshotManager.$7B = false;
    RTE.SnapshotManager.$4j = RTE.SnapshotManager.$Ju;
    RTE.SnapshotManager.$3Z = false;
    RTE.SnapshotManager.$7C = false;
    RTE.SnapshotManager.$8H = RTE.SnapshotManager.$Jv;
    RTE.StyleRuleUtility.$5I = null;
    RTE.StyleRuleUtility.$5J = null;
    RTE.StyleRuleUtility.checkOnlyCssFromSameDomain = true;
    RTE.StyleRuleUtility.$7A = -1;
    RTE.StyleRuleUtility.$2Q = {};
    RTE.StyleRuleUtility.$5h = {};
    RTE.StyleRuleUtility.$5i = 0;
    RTE.TableCommands.$5n = ['in', 'cm', 'px', '%'];
    RTE.TableCommands.$7X = 'ms-rteTableGrid';
    RTE.XhtmlProcessor.$3W = null;
    RTE.XhtmlProcessor.$2N = null;
    RTE.XhtmlRules.$A = null;
    RTE.XhtmlRules.$9O = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    RTE.RibbonReferences.$9I = RTE.RibbonReferences.$3V('/_layouts/15/$Resources:core,Language;/images/formatmap16x16.png?rev=23');
    RTE.RibbonReferences.$Da = RTE.RibbonReferences.$3V('/_layouts/15/$Resources:core,Language;/images/formatmap16x16.png?rev=23');
    RTE.RibbonReferences.$Dc = RTE.RibbonReferences.$3V('/_layouts/15/$Resources:core,Language;/images/formatmap16x16.png?rev=23');
    RTE.RibbonReferences.$Db = RTE.RibbonReferences.$3V('/_layouts/15/$Resources:core,Language;/images/formatmap16x16.png?rev=23');
    RTE.RibbonReferences.$De = RTE.RibbonReferences.$3V('/_layouts/15/$Resources:core,Language;/images/formatmap16x16.png?rev=23');
    RTE.RibbonReferences.$Dd = RTE.RibbonReferences.$3V('/_layouts/15/$Resources:core,Language;/images/formatmap16x16.png?rev=23');
    RTE.RibbonReferences.$BH = RTE.RibbonReferences.$3V('/_layouts/15/$Resources:core,Language;/images/formatmap16x16.png?rev=23');
    RTE.PasteCommon.LogLevel.$7f = 0;
    RTE.PasteCommon.LogLevel.$3u = 1;
    RTE.PasteCommon.LogLevel.$Eg = 2;
    RTE.PasteCommon.LogLevel.$Hd = 3;
    RTE.PasteCommon.CustomData.dict = {};
    RTE.HtmlImport.DefaultHtmlNormalizer.$CF = new RegExp('[ \t\u000c\u200b\r\n]+', 'g');
    RTE.HtmlImport.DefaultHtmlTranslator.$8e = {
        aliceblue: 'F0F8FF',
        antiquewhite: 'FAEBD7',
        aqua: '00FFFF',
        aquamarine: '7FFFD4',
        azure: 'F0FFFF',
        beige: 'F5F5DC',
        bisque: 'FFE4C4',
        black: '000000',
        blanchedalmond: 'FFEBCD',
        blue: '0000FF',
        blueviolet: '8A2BE2',
        brown: 'A52A2A',
        burlywood: 'DEB887',
        cadetblue: '5F9EA0',
        chartreuse: '7FFF00',
        chocolate: 'D2691E',
        coral: 'FF7F50',
        cornflowerblue: '6495ED',
        cornsilk: 'FFF8DC',
        crimson: 'DC143C',
        cyan: '00FFFF',
        darkblue: '00008B',
        darkcyan: '008B8B',
        darkgoldenrod: 'B8860B',
        darkgray: 'A9A9A9',
        darkgrey: 'A9A9A9',
        darkgreen: '006400',
        darkkhaki: 'BDB76B',
        darkmagenta: '8B008B',
        darkolivegreen: '556B2F',
        darkorange: 'FF8C00',
        darkorchid: '9932CC',
        darkred: '8B0000',
        darksalmon: 'E9967A',
        darkseagreen: '8FBC8F',
        darkslateblue: '483D8B',
        darkslategray: '2F4F4F',
        darkslategrey: '2F4F4F',
        darkturquoise: '00CED1',
        darkviolet: '9400D3',
        deeppink: 'FF1493',
        deepskyblue: '00BFFF',
        dimgray: '696969',
        dimgrey: '696969',
        dodgerblue: '1E90FF',
        firebrick: 'B22222',
        floralwhite: 'FFFAF0',
        forestgreen: '228B22',
        fuchsia: 'FF00FF',
        gainsboro: 'DCDCDC',
        ghostwhite: 'F8F8FF',
        gold: 'FFD700',
        goldenrod: 'DAA520',
        gray: '808080',
        grey: '808080',
        green: '008000',
        greenyellow: 'ADFF2F',
        honeydew: 'F0FFF0',
        hotpink: 'FF69B4',
        indianred: 'CD5C5C',
        indigo: '4B0082',
        ivory: 'FFFFF0',
        khaki: 'F0E68C',
        lavender: 'E6E6FA',
        lavenderblush: 'FFF0F5',
        lawngreen: '7CFC00',
        lemonchiffon: 'FFFACD',
        lightblue: 'ADD8E6',
        lightcoral: 'F08080',
        lightcyan: 'E0FFFF',
        lightgoldenrodyellow: 'FAFAD2',
        lightgray: 'D3D3D3',
        lightgrey: 'D3D3D3',
        lightgreen: '90EE90',
        lightpink: 'FFB6C1',
        lightsalmon: 'FFA07A',
        lightseagreen: '20B2AA',
        lightskyblue: '87CEFA',
        lightslategray: '778899',
        lightslategrey: '778899',
        lightsteelblue: 'B0C4DE',
        lightyellow: 'FFFFE0',
        lime: '00FF00',
        limegreen: '32CD32',
        linen: 'FAF0E6',
        magenta: 'FF00FF',
        maroon: '800000',
        mediumaquamarine: '66CDAA',
        mediumblue: '0000CD',
        mediumorchid: 'BA55D3',
        mediumpurple: '9370D8',
        mediumseagreen: '3CB371',
        mediumslateblue: '7B68EE',
        mediumspringgreen: '00FA9A',
        mediumturquoise: '48D1CC',
        mediumvioletred: 'C71585',
        midnightblue: '191970',
        mintcream: 'F5FFFA',
        mistyrose: 'FFE4E1',
        moccasin: 'FFE4B5',
        navajowhite: 'FFDEAD',
        navy: '000080',
        oldlace: 'FDF5E6',
        olive: '808000',
        olivedrab: '6B8E23',
        orange: 'FFA500',
        orangered: 'FF4500',
        orchid: 'DA70D6',
        palegoldenrod: 'EEE8AA',
        palegreen: '98FB98',
        paleturquoise: 'AFEEEE',
        palevioletred: 'D87093',
        papayawhip: 'FFEFD5',
        peachpuff: 'FFDAB9',
        peru: 'CD853F',
        pink: 'FFC0CB',
        plum: 'DDA0DD',
        powderblue: 'B0E0E6',
        purple: '800080',
        red: 'FF0000',
        rosybrown: 'BC8F8F',
        royalblue: '4169E1',
        saddlebrown: '8B4513',
        salmon: 'FA8072',
        sandybrown: 'F4A460',
        seagreen: '2E8B57',
        seashell: 'FFF5EE',
        sienna: 'A0522D',
        silver: 'C0C0C0',
        skyblue: '87CEEB',
        slateblue: '6A5ACD',
        slategray: '708090',
        slategrey: '708090',
        snow: 'FFFAFA',
        springgreen: '00FF7F',
        steelblue: '4682B4',
        tan: 'D2B48C',
        teal: '008080',
        thistle: 'D8BFD8',
        tomato: 'FF6347',
        turquoise: '40E0D0',
        violet: 'EE82EE',
        wheat: 'F5DEB3',
        white: 'FFFFFF',
        whitesmoke: 'F5F5F5',
        yellow: 'FFFF00',
        yellowgreen: '9ACD32'
    };
    RTE.HtmlImport.WordConverter.$AA = new RegExp('[\n|\r]', 'gi');
}
;
sp_ui_rte_initialize();
function SPAutoSaveIsPageDirty() {
    if (typeof _spRteScriptLoaded != 'undefined' && _spRteScriptLoaded) {
        if (RTE.DirtyBitManager.isDirty()) {
            return true;
        }
    }
    return false;
}
RTE.DomHelper = function RTE_DomHelper() {
};
RTE.DomHelper.focus = function Node_CBX_focus(elem) {
    if (elem.contentWindow) {
        var cw = elem.contentWindow;

        if (cw.focus) {
            try {
                cw.focus();
            }
            catch (e) { }
        }
    }
    if (elem.setActive) {
        elem.setActive();
    }
};
RTE.DomHelper.insertAdjacentHtml = function insertAdjacentHtml(elem, location, html) {
    if (elem.insertAdjacentHTML)
        return elem.insertAdjacentHTML(location, html);
    var range = elem.ownerDocument.createRange();

    range.setStartBefore(elem);
    var newElements = range.createContextualFragment(html);

    switch (location) {
    case "afterEnd":
        if (elem.nextSibling) {
            elem.parentNode.insertBefore(newElements, elem.nextSibling);
        }
        else {
            elem.parentNode.appendChild(newElements);
        }
        break;
    case "beforeBegin":
        elem.parentNode.insertBefore(newElements, elem);
        break;
    }
};
RTE.DomHelper.insertAdjacentText = function Node_CBX_insertAdjacentText(elem, location, text) {
    var textNode = document.createTextNode(text);

    switch (location) {
    case "afterEnd":
        if (elem.nextSibling && SP.UI.UIUtility.isTextNode(elem.nextSibling)) {
            elem.nextSibling.nodeValue = text + elem.nextSibling.nodeValue;
        }
        else if (elem.nextSibling) {
            elem.parentNode.insertBefore(textNode, elem.nextSibling);
        }
        else {
            elem.parentNode.appendChild(textNode);
        }
        break;
    case "beforeBegin":
        if (elem.previousSibling && SP.UI.UIUtility.isTextNode(elem.previousSibling)) {
            elem.previousSibling.nodeValue += text;
        }
        else {
            elem.parentNode.insertBefore(textNode, elem);
        }
        break;
    }
};
RTE.DomHelper.insertAdjacentElement = function Node_CBX_insertAdjacentElement(elem, location, node) {
    if (elem.insertAdjacentElement)
        return elem.insertAdjacentElement(location, node);
    switch (location) {
    case "afterEnd":
        if (elem.nextSibling) {
            elem.parentNode.insertBefore(node, elem.nextSibling);
        }
        else {
            elem.parentNode.appendChild(node);
        }
        break;
    case "beforeBegin":
        elem.parentNode.insertBefore(node, elem);
        break;
    }
};
RTE.DomHelper.getKeyCode = function Event_CBX_getKeyCode(evt) {
    var rawEvent;

    if (evt.rawEvent)
        rawEvent = evt.rawEvent;
    else
        rawEvent = evt;
    if (rawEvent.charCode && rawEvent.charCode != 0) {
        return rawEvent.charCode;
    }
    else if (rawEvent.keyCode) {
        return rawEvent.keyCode;
    }
};
RTE.DomHelper.preventDefault = function Event_CBX_PreventDefault(evt) {
    var rawEvent;

    if (evt.rawEvent)
        rawEvent = evt.rawEvent;
    else
        rawEvent = evt;
    rawEvent.returnValue = false;
    if (rawEvent.preventDefault)
        rawEvent.preventDefault();
};
RTE.DomHelper.createRange = function SP_UI_Rte_DomHelper$createRange(doc) {
    var rawRange;

    if (doc.createRange) {
        rawRange = doc.createRange();
    }
    else if (doc.body.createTextRange) {
        rawRange = doc.body.createTextRange();
    }
    else {
        alert("Browser does not support CBX_GetRange");
        return;
    }
    return rawRange;
};
RTE.DomHelper.createRangeFromSelection = function Selection_CBX_createRange(rawSelection) {
    if (rawSelection.createRange) {
        try {
            var rawRange = rawSelection.createRange();

            return rawRange;
        }
        catch (e) {
            return null;
        }
    }
    if (rawSelection.rangeCount > 0) {
        var rawRange = rawSelection.getRangeAt(0);

        return rawRange;
    }
    else {
        return null;
    }
};
RTE.DomHelper.duplicateRange = function Range_CBX_duplicate(rawRange) {
    var range;

    if (rawRange.duplicate) {
        range = rawRange.duplicate();
    }
    if (rawRange.cloneRange) {
        range = rawRange.cloneRange();
    }
    return range;
};
RTE.DomHelper.isRangeInRange = function Range_CBX_inRange(rawRange, otherRange) {
    if (rawRange.inRange)
        return rawRange.inRange(otherRange);
    var start = otherRange.compareBoundaryPoints(Range.START_TO_START, rawRange);
    var end = otherRange.compareBoundaryPoints(Range.END_TO_END, rawRange);

    return start <= 0 && end >= 0;
};
RTE.DomHelper.pasteHtmlIntoRange = function Range_CBX_pasteHTML(rawRange, html) {
    if (rawRange.pasteHTML) {
        try {
            rawRange.pasteHTML(html);
        }
        catch (e) {
            rawRange.text = "";
            rawRange.pasteHTML(html);
        }
        return;
    }
    rawRange.extractContents();
    var fragment = rawRange.createContextualFragment(html);

    rawRange.insertNode(fragment);
};
RTE.DomHelper.compareRangeEndPoints = function Range_CBX_compareEndPoints(rawRange, sType, oRange) {
    if (rawRange.compareEndPoints)
        return rawRange.compareEndPoints(sType, oRange);
    switch (sType) {
    case "StartToEnd":
        return -oRange.compareBoundaryPoints(Range.START_TO_END, rawRange);
        break;
    case "StartToStart":
        return -oRange.compareBoundaryPoints(Range.START_TO_START, rawRange);
        break;
    case "EndToStart":
        return -oRange.compareBoundaryPoints(Range.END_TO_START, rawRange);
        break;
    case "EndToEnd":
        return -oRange.compareBoundaryPoints(Range.END_TO_END, rawRange);
        break;
    }
};
RTE.DomHelper.setRangeEndPoint = function Range_CBX_setEndPoint(rawRange, sType, oTextRange) {
    if (rawRange.setEndPoint)
        return rawRange.setEndPoint(sType, oTextRange);
    switch (sType) {
    case "StartToEnd":
        return rawRange.setStart(oTextRange.endContainer, oTextRange.endOffset);
        break;
    case "StartToStart":
        return rawRange.setStart(oTextRange.startContainer, oTextRange.startOffset);
        break;
    case "EndToStart":
        return rawRange.setEnd(oTextRange.startContainer, oTextRange.startOffset);
        break;
    case "EndToEnd":
        return rawRange.setEnd(oTextRange.endContainer, oTextRange.endOffset);
        break;
    }
};
RTE.DomHelper.isRangeVisible = function Range_CBX_isVisible(rawRange) {
    var hasText = false;
    var hasImage = false;
    var text = null;

    if (typeof rawRange.text !== "undefined") {
        text = rawRange.text;
    }
    else if (typeof rawRange.toString !== "undefined") {
        text = rawRange.toString();
    }
    hasText = text != null && text != "";
    if (rawRange.htmlText != undefined && rawRange.htmlText != null && rawRange.htmlText.indexOf("<IMG") != -1) {
        hasImage = true;
    }
    return hasText || hasImage;
};
RTE.NativeSafeHtml = function RTE_NativeSafeHtml() {
};
RTE.NativeSafeHtml.getSafeHtmlRules = function RTE_NativeSafeHtml$getSafeHtmlRules() {
    var tempRuleArray = new Array("!--_accesskey", "A", "!--_class", "A", "!--_contextmenu", "A", "!--_dir", "A", "!--_hidden", "A", "!--_hidefocus", "A", "!--_id", "A", "!--_lang", "A", "!--_spellcheck", "A", "!--_style", "A", "!--_tabindex", "A", "!--_title", "A", "!--_unselectable", "A", "!--_atomicselection", "A", "!--_msallowcapture", "A", "!--_role", "A", "A", "A", "A_href", "A", "A_target", "A", "A_rel", "A", "A_media", "A", "A_hreflang", "A", "A_type", "A", "A_charset", "A", "A_name", "A", "A_coords", "A", "A_rev", "A", "A_shape", "A", "A_datasrc", "A", "ABBR", "A", "ABBR_cite", "A", "ACRONYM", "A", "ACRONYM_cite", "A", "ADDRESS", "A", "ADDRESS_clear", "A", "APPLET", "DB", "AREA", "A", "AREA_href", "A", "AREA_target", "A", "AREA_rel", "A", "AREA_media", "A", "AREA_hreflang", "A", "AREA_type", "A", "AREA_alt", "A", "AREA_coords", "A", "AREA_shape", "A", "ARTICLE", "A", "ASIDE", "A", "AUDIO", "A", "AUDIO_src", "A", "AUDIO_preload", "A", "AUDIO_autoplay", "A", "AUDIO_loop", "A", "AUDIO_controls", "A", "AUDIO_autobuffer", "A", "AUDIO_mediagroup", "A", "AUDIO_msaudiocategory", "A", "AUDIO_muted", "A", "B", "A", "B_cite", "A", "BASEFONT", "A", "BASEFONT_size", "A", "BASEFONT_face", "A", "BASEFONT_color", "A", "BDI", "A", "BDO", "A", "BDO_cite", "A", "BGSOUND", "A", "BGSOUND_src", "A", "BGSOUND_loop", "A", "BIG", "A", "BIG_cite", "A", "BLOCKQUOTE", "A", "BLOCKQUOTE_cite", "A", "BLOCKQUOTE_clear", "A", "BR", "A", "BR_clear", "A", "BUTTON", "A", "BUTTON_autofocus", "A", "BUTTON_disabled", "A", "BUTTON_form", "A", "BUTTON_formenctype", "A", "BUTTON_formmethod", "A", "BUTTON_formnovalidate", "A", "BUTTON_formtarget", "A", "BUTTON_name", "A", "BUTTON_type", "A", "BUTTON_value", "A", "BUTTON_datasrc", "A", "BUTTON_autofocus", "A", "CANVAS", "A", "CANVAS_width", "A", "CANVAS_height", "A", "CAPTION", "A", "CAPTION_align", "A", "CAPTION_valign", "A", "CENTER", "A", "CENTER_clear", "A", "CITE", "A", "CITE_cite", "A", "CODE", "A", "CODE_cite", "A", "COL", "A", "COL_span", "A", "COL_align", "A", "COL_valign", "A", "COL_width", "A", "COL_char", "A", "COL_charoff", "A", "COL_bgcolor", "A", "COL_ch", "A", "COL_choff", "A", "COLGROUP", "A", "COLGROUP_span", "A", "COLGROUP_align", "A", "COLGROUP_valign", "A", "COLGROUP_width", "A", "COLGROUP_char", "A", "COLGROUP_charoff", "A", "COLGROUP_bgcolor", "A", "COLGROUP_ch", "A", "COLGROUP_choff", "A", "COMMAND", "A", "COMMAND_type", "A", "COMMAND_label", "A", "COMMAND_icon", "A", "COMMAND_disabled", "A", "COMMAND_checked", "A", "COMMAND_radiogroup", "A", "COMMENT", "DB", "DATALIST", "A", "DD", "A", "DD_nowrap", "A", "DEL", "A", "DEL_cite", "A", "DEL_datetime", "A", "DETAILS", "A", "DETAILS_open", "A", "DFN", "A", "DIR", "A", "DIR_compact", "A", "DIV", "A", "DIV_datasrc", "A", "DIV_align", "A", "DIV_webpartid", "A", "DIV_nowrap", "A", "DL", "A", "DL_compact", "A", "DT", "A", "DT_nowrap", "A", "EM", "A", "EM_cite", "A", "EVENT", "DB", "FIELDSET", "A", "FIELDSET_disabled", "A", "FIELDSET_form", "A", "FIELDSET_name", "A", "FIELDSET_tabindex", "A", "FIGCAPTION", "A", "FIGURE", "A", "FONT", "A", "FONT_size", "A", "FONT_face", "A", "FONT_color", "A", "FOOTER", "A", "FRAMESET", "DB", "H1", "A", "H1_align", "A", "H1_clear", "A", "H2", "A", "H2_align", "A", "H2_clear", "A", "H3", "A", "H3_align", "A", "H3_clear", "A", "H4", "A", "H4_align", "A", "H4_clear", "A", "H5", "A", "H5_align", "A", "H5_clear", "A", "H6", "A", "H6_align", "A", "H6_clear", "A", "HEAD", "DB", "HEADER", "A", "HGROUP", "A", "HR", "A", "HR_width", "A", "HR_size", "A", "HR_align", "A", "HR_color", "A", "HR_noshade", "A", "I", "A", "I_cite", "A", "IMG", "A", "IMG_alt", "A", "IMG_src", "A", "IMG_usemap", "A", "IMG_width", "A", "IMG_height", "A", "IMG_datasrc", "A", "IMG_align", "A", "IMG_hspace", "A", "IMG_vspace", "A", "IMG_dynsrc", "A", "IMG_lowsrc", "A", "IMG_border", "A", "IMG_loop", "A", "IMG_controls", "A", "IMG_start", "A", "IMG_longdesc", "A", "IMG_name", "A", "IMG_mstagchanged", "A", "INPUT", "A", "INPUT_accept", "A", "INPUT_alt", "A", "INPUT_autocomplete", "A", "INPUT_autofocus", "A", "INPUT_checked", "A", "INPUT_dirname", "A", "INPUT_disabled", "A", "INPUT_form", "A", "INPUT_formenctype", "A", "INPUT_formmethod", "A", "INPUT_formnovalidate", "A", "INPUT_formtarget", "A", "INPUT_height", "A", "INPUT_max", "A", "INPUT_maxlength", "A", "INPUT_min", "A", "INPUT_multiple", "A", "INPUT_name", "A", "INPUT_pattern", "A", "INPUT_placeholder", "A", "INPUT_readonly", "A", "INPUT_required", "A", "INPUT_size", "A", "INPUT_src", "A", "INPUT_step", "A", "INPUT_type", "A", "INPUT_value", "A", "INPUT_width", "A", "INPUT_datasrc", "A", "INPUT_align", "A", "INPUT_accesskey", "A", "INPUT_tabindex", "A", "INPUT_usemap", "A", "INS", "A", "INS_cite", "A", "INS_datetime", "A", "KEYGEN", "A", "KEYGEN_autofocus", "A", "KEYGEN_challenge", "A", "KEYGEN_disabled", "A", "KEYGEN_form", "A", "KEYGEN_keytype", "A", "KEYGEN_name", "A", "LABEL", "A", "LABEL_form", "A", "LABEL_datasrc", "A", "LABEL_accesskey", "A", "LABEL_for", "A", "LEGEND", "A", "LEGEND_datasrc", "A", "LEGEND_align", "A", "LEGEND_accesskey", "A", "LI", "A", "LI_value", "A", "LI_type", "A", "LISTING", "A", "LISTING_align", "A", "LISTING_clear", "A", "MAP", "A", "MAP_name", "A", "MARK", "A", "MARQUEE", "A", "MARQUEE_datasrc", "A", "MARQUEE_behavior", "A", "MARQUEE_bgcolor", "A", "MARQUEE_direction", "A", "MARQUEE_height", "A", "MARQUEE_hspace", "A", "MARQUEE_loop", "A", "MARQUEE_scrollamount", "A", "MARQUEE_scrolldelay", "A", "MARQUEE_vspace", "A", "MARQUEE_width", "A", "MENU", "A", "MENU_type", "A", "MENU_label", "A", "MENU_compact", "A", "METER", "A", "METER_value", "A", "METER_min", "A", "METER_max", "A", "METER_low", "A", "METER_high", "A", "METER_optimum", "A", "METER_form", "A", "NAV", "A", "NEXTID", "A", "NOBR", "A", "NOBR_cite", "A", "NOFRAMES", "A", "OL", "A", "OL_reversed", "A", "OL_start", "A", "OL_type", "A", "OL_compact", "A", "OPTGROUP", "A", "OPTGROUP_disabled", "A", "OPTGROUP_label", "A", "OPTGROUP_datasrc", "A", "OPTION", "A", "OPTION_disabled", "A", "OPTION_label", "A", "OPTION_selected", "A", "OPTION_value", "A", "OPTION_datasrc", "A", "OUTPUT", "A", "OUTPUT_form", "A", "OUTPUT_name", "A", "P", "A", "P_align", "A", "P_clear", "A", "PLAINTEXT", "A", "PLAINTEXT_align", "A", "PLAINTEXT_clear", "A", "PRE", "A", "PRE_width", "A", "PRE_clear", "A", "PROGRESS", "A", "PROGRESS_value", "A", "PROGRESS_max", "A", "PROGRESS_form", "A", "Q", "A", "Q_cite", "A", "RP", "A", "RT", "A", "RT_cite", "A", "RUBY", "A", "RUBY_cite", "A", "S", "A", "S_cite", "A", "SAMP", "A", "SAMP_cite", "A", "SCRIPT", "DB", "SECTION", "A", "SELECT", "A", "SELECT_autofocus", "A", "SELECT_disabled", "A", "SELECT_form", "A", "SELECT_multiple", "A", "SELECT_name", "A", "SELECT_required", "A", "SELECT_size", "A", "SELECT_align", "A", "SELECT_datasrc", "A", "SELECT_tabindex", "A", "SELECT_value", "A", "SMALL", "A", "SMALL_cite", "A", "SOURCE", "A", "SOURCE_src", "A", "SOURCE_type", "A", "SOURCE_media", "A", "SPAN", "A", "SPAN_datasrc", "A", "SPAN_fragmentid", "A", "SPAN_xml:lang", "A", "STRIKE", "A", "STRIKE_cite", "A", "STRONG", "A", "STRONG_cite", "A", "STYLE", "A", "STYLE_media", "A", "STYLE_type", "A", "STYLE_scoped", "A", "STYLE_disabled", "A", "SUB", "A", "SUB_cite", "A", "SUMMARY", "A", "SUP", "A", "SUP_cite", "A", "TABLE", "A", "TABLE_border", "A", "TABLE_datasrc", "A", "TABLE_width", "A", "TABLE_align", "A", "TABLE_bordercolor", "A", "TABLE_bgcolor", "A", "TABLE_cellpadding", "A", "TABLE_cellspacing", "A", "TABLE_background", "A", "TABLE_bordercolordark", "A", "TABLE_bordercolorlight", "A", "TABLE_height", "A", "TABLE_rules", "A", "TABLE_cols", "A", "TABLE_summary", "A", "TBODY", "A", "TBODY_align", "A", "TBODY_char", "A", "TBODY_charoff", "A", "TBODY_valign", "A", "TD", "A", "TD_colspan", "A", "TD_rowspan", "A", "TD_headers", "A", "TD_align", "A", "TD_width", "A", "TD_height", "A", "TD_valign", "A", "TD_bgcolor", "A", "TD_background", "A", "TD_bordercolor", "A", "TD_bordercolordark", "A", "TD_bordercolorlight", "A", "TD_nowrap", "A", "TD_char", "A", "TD_charoff", "A", "TD_scope", "A", "TD_abbr", "A", "TEXTAREA", "A", "TEXTAREA_autofocus", "A", "TEXTAREA_cols", "A", "TEXTAREA_disabled", "A", "TEXTAREA_form", "A", "TEXTAREA_maxlength", "A", "TEXTAREA_name", "A", "TEXTAREA_placeholder", "A", "TEXTAREA_readonly", "A", "TEXTAREA_required", "A", "TEXTAREA_rows", "A", "TEXTAREA_wrap", "A", "TEXTAREA_datasrc", "A", "TEXTAREA_tabindex", "A", "TEXTAREA_form", "A", "TEXTAREA_dirname", "A", "TFOOT", "A", "TFOOT_align", "A", "TFOOT_char", "A", "TFOOT_charoff", "A", "TFOOT_valign", "A", "TH", "A", "TH_colspan", "A", "TH_rowspan", "A", "TH_headers", "A", "TH_scope", "A", "TH_align", "A", "TH_valign", "A", "TH_width", "A", "TH_height", "A", "TH_bgcolor", "A", "TH_background", "A", "TH_bordercolor", "A", "TH_bordercolordark", "A", "TH_bordercolorlight", "A", "TH_nowrap", "A", "TH_char", "A", "TH_charoff", "A", "TH_abbr", "A", "THEAD", "A", "THEAD_align", "A", "THEAD_char", "A", "THEAD_charoff", "A", "THEAD_valign", "A", "TIME", "A", "TIME_datetime", "A", "TIME_pubdate", "A", "TITLE", "DB", "TR", "A", "TR_align", "A", "TR_valign", "A", "TR_height", "A", "TR_bgcolor", "A", "TR_bordercolor", "A", "TR_bordercolordark", "A", "TR_bordercolorlight", "A", "TR_char", "A", "TR_charoff", "A", "TRACK", "A", "TRACK_default", "A", "TRACK_kind", "A", "TRACK_label", "A", "TRACK_srclang", "A", "TT", "A", "TT_cite", "A", "U", "A", "U_cite", "A", "UL", "A", "UL_compact", "A", "UL_type", "A", "VIDEO", "A", "VIDEO_src", "A", "VIDEO_poster", "A", "VIDEO_preload", "A", "VIDEO_autoplay", "A", "VIDEO_mediagroup", "A", "VIDEO_loop", "A", "VIDEO_muted", "A", "VIDEO_controls", "A", "VIDEO_width", "A", "VIDEO_height", "A", "VIDEO_audio", "A", "VIDEO_autobuffer", "A", "VIDEO_msaudiocategory", "A", "WBR", "A", "XML", "DB", "XMP", "A", "XMP_align", "A", "XMP_clear", "A");

    return tempRuleArray;
};
RTE.NativeSafeHtml.cleanStyleText = function RTE_NativeSafeHtml$cleanStyleText(styleText) {
    var newStyleText = "";
    var styleElements = styleText.split(";");

    for (var i = 0; i < styleElements.length; i++) {
        var styleElement = styleElements[i].replace(/opacity=/, "_opacity");

        styleElement = styleElement.replace(/=/, ":");
        styleElement = styleElement.replace(/_opacity/, "opacity=");
        var styleElementParts = styleElement.split(":");
        var styleName = null;
        var styleValue = "";

        if (styleElementParts.length > 0) {
            styleName = styleElementParts[0];
            styleName = styleName.replace(/^[ \t]+/g, "");
            styleName = styleName.replace(/[ \t]+$/g, "");
            styleName = styleName.replace(/[ \t]+/g, " ");
            styleName = styleName.toLowerCase();
        }
        var dropStyle = false;

        if (styleName.indexOf("position") == 0) {
            dropStyle = true;
        }
        if (!dropStyle) {
            switch (styleName) {
            case "behavior":
                {
                    dropStyle = true;
                    break;
                }
            }
        }
        if (dropStyle) {
            continue;
        }
        for (var j = 1; j < styleElementParts.length; j++) {
            styleValue += styleElementParts[j];
            if (j + 1 < styleElementParts.length) {
                styleValue += ":";
            }
        }
        styleValue = styleValue.replace(/^[ \t]+/g, "");
        styleValue = styleValue.replace(/[ \t]+$/g, "");
        styleValue = styleValue.replace(/[ \t]+/g, " ");
        styleValue = styleValue.toLowerCase();
        if (!dropStyle && styleValue != "") {
            var functionParametersIndex = styleValue.indexOf("(");

            while (functionParametersIndex != -1) {
                dropStyle = true;
                var functionName = styleValue.slice(0, functionParametersIndex);
                var lastSpace = functionName.lastIndexOf(' ');

                if (lastSpace > -1) {
                    functionName = functionName.slice(lastSpace + 1, functionName.length);
                }
                switch (functionName.toLowerCase()) {
                case "rect":
                    {
                        dropStyle = false;
                        break;
                    }
                case "alpha":
                    {
                        dropStyle = false;
                        break;
                    }
                case "rgb":
                    {
                        dropStyle = false;
                        break;
                    }
                }
                if (dropStyle) {
                    break;
                }
                functionParametersIndex = styleValue.indexOf(")", functionParametersIndex + 1);
                if (functionParametersIndex != -1) {
                    functionParametersIndex = styleValue.indexOf("(", functionParametersIndex + 1);
                }
            }
        }
        if (!dropStyle) {
            newStyleText += styleName;
            if (styleValue != "") {
                newStyleText += ":" + styleValue;
            }
            newStyleText += ";";
        }
    }
    return newStyleText;
};
ExecuteAndRegisterBeginEndFunctions("sp.ui.rte.js", sp_ui_rte_initialize, null, function() {
    RTE.Imports = function SP_UI_Rte_Imports() {
    };
    RTE.Imports.ExecuteOrDelayUntilScriptLoaded = ExecuteOrDelayUntilScriptLoaded;
    RTE.Imports.SelectRibbonTab = SelectRibbonTab;
    if (typeof _spBodyOnLoadCalled == 'undefined' || _spBodyOnLoadCalled) {
        window.setTimeout(RTE.Canvas.load, 0);
    }
    else {
        _spBodyOnLoadFunctionNames.push("RTE.Canvas.load");
    }
    RTE.Canvas.loadPageComponent();
    _spRteScriptLoaded = true;
});
if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("sp.ui.rte.js");
