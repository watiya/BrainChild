$(function () {
    // Tooltip
    $("body").tooltip({
        selector: "[data-toggle='tooltip']",
        container: ".tooltip-label"
    });

    // Dropdown
    $(".dropdown-select").selectpicker();

    // Menu Select for DropDown Depth
    $(".dropdown-depth-scope").menu({
        items: "> :not(.ui-widget-header)",
    });

    // MultiSelect
    $.Fastselect.defaults.placeholder = "검색어를 입력해주세요";
    $(".multiple-select").fastselect();

    // Range Slider Function
    $("#range-slider").slider({
        range: "min",
        value: 50,
        min: 1,
        max: 100,
        slide: function (event, data) {
            console.log("Range Slider Value", data.value);
        }
    });

    // Alert Notification Config
    toastr.options = {
        closeButton: true,
        debug: true,
        newestOnTop: false,
        progressBar: false,
        positionClass: "toast-bottom-center",
        preventDuplicates: false,
        showDuration: "1000",
        hideDuration: "1000",
        timeOut: "3000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
    };

    // Input Function
    $(".input-field").keyup(function () {
        var max = parseInt($(this).attr("maxlength"));
        var maxend = $(this).attr("maxend");
        var value = $(this).val().length;

        if (max !== undefined && maxend !== undefined) {
            var container = $("[data-target='#" + $(this).attr('id') + "']");
            $("[data-target='#" + $(this).attr('id') + "'] .max-display").remove();
            var display = '<small class="max-display"><span>' + value + '</span>/' + max + maxend + '</small>'
            container.append(display);
        }

    }).focus(function () { 
        $(this).closest(".input-container").addClass("input-focused");
    }).blur(function () { 
        $(this).closest(".input-container").removeClass("input-focused");
    });

    $(function () {

        // Find all input container
        $(".input-container").each((index) => {
            
            // Select Individual Input Container
            var container = $('.input-container')[index];

            // Get data-target value
            var field = $(container).attr("data-target");

            // Get maxlength value
            var max = $(field).attr("maxlength");

            // Get maxend value
            var maxend = $(field).attr("maxend");

            // Check if maxlength and maxend is not set
            if (max !== undefined && maxend !== undefined) { 
                // Add text counter display
                var display = "<small class='max-display'>0/" + max + maxend + "</small>";
                $("[data-target='" + field + "']").append(display);
            }
        });
    });
    // End of Input Function

    // Search Data
    var data = [
        "A 검색어 1",
        "A 검색어 2",
        "A 검색어 3",
        "B 검색어 4",
        "B 검색어 5",
        "B 검색어 6",
        "C 검색어 7",
        "C 검색어 8",
        "C 검색어 9",
        "D 검색어 10",
        "D 검색어 11",
        "D 검색어 12"
    ];

    // Search Input Element ID
    var search_id = "#search-input";
    var search_id_2 = "#search-input-2";

    // Search Initialization
    createSearch(search_id, data);
    createSearch(search_id_2, data);

    // Delete / Clear Search Field
    $('.search-field-clear').click(function (data) {
        var field = $(this).attr('data-target');
        $(field).val("")
    });
    // End of Search Function

    // Date Picker
    $(".datepicker-init").datepicker({
        language: "kr",
        dateFormat: "yyyy-mm-d",
    });
    // End of Date Picker

    // Date Range Picker Function
    var daterangepicker_kr = {
        cancelLabel: '취소',
        applyLabel: '적용하기',
        direction: "ltr",
        format: "YYYY/MM/DD",
        separator: "  ~  ",
        daysOfWeek: ['화', '수', '목', '금', '토', '일', '월'],
        monthNames: ['1월','2월','3월','4월','5월','6월', '7월','8월','9월','10월','11월','12월']
    };
    
    $('input[name="daterange"]').daterangepicker({
        autoUpdateInput: false,
        locale: daterangepicker_kr,
        drops: "auto"
    },  function (dateRangeStart, dateRangeEnd) {
        // Using moment js
        var start = dateRangeStart.format("YYYY-MM-DD");
            console.log(start);

        var end = dateRangeEnd.format("YYYY-MM-DD");
        console.log(end);
    });
    
    // End of Date Range Picker Function

    // Color Picker Function
    var $input = $("input.pickr-field");
    var current_color = $(".pickr-field").val() || null;

    // Default Color Swatches
    var swatches = [
        "#a3ebbd",
        "#ffd1d7",
        "#bce4fd",
        "#fc7675",
        "#e290fe",
        "#fff177",
        "#ffcf8d",
    ];

    if ($(".pickr")[0]) {
        var pickr = new Pickr({
            el: $(".pickr")[0],
            theme: "nano",
            swatches: swatches,
            defaultRepresentation: "HEXA",
            default: current_color,
            comparison: false,
            components: {
                preview: true,
                opacity: true,
                hue: true,
                interaction: {
                    hex: true,
                    rgba: true,
                    hsva: false,
                    input: true,
                    clear: false,
                    cancel: false,
                    save: false,
                },
            },
        });
    
        pickr
            .on("clear", function(instance) {
                //console.log("clear");
                $input.val("").trigger("change");
            })
            .on("cancel", function(instance) {
            current_color = instance
                .getSelectedColor()
                .toHEXA()
                .toString();
            //console.log("cancel", current_color);
            $input.val(current_color).trigger("change");
            })
            .on("change", function(color,instance) {
            current_color = color
                .toHEXA()
                .toString();
            $input.val(current_color).trigger("change");
            console.log("change", current_color);
            });
    
        // End of Color Picker Function
    }

    // Start of Nestable Function
    $(".nestable").nestable({});

    $(".nestable").on('change', function (data) { 
        console.log("Something Change", data)
    });

    // Show Nest Item Action
    var items = $(".nestable .dd-list .dd-item .dd-handle");
    $(items).each(function (index) { 
        var item = $(items)[index];
        $(item).mouseover(function () {
            $(this).closest('.dd-handle').addClass('action-visible');
        });
    });

    // Nestable Depth Clicked function 
    var nestable_depth_action = $(".nestable").find('[nestable-action="depth"]');
    $(nestable_depth_action).each(function (index) { 
        $(nestable_depth_action)[index].addEventListener('click', function () { 
            console.log("CLICKED SUBDEPTH");
        });
    });

    var nestable_edit_action = $(".nestable").find('[nestable-action="edit"]');
    $(nestable_edit_action).each(function (index) {
        $(nestable_edit_action)[index].addEventListener("click", function () {
            console.log($(this).closest(".dd-item-update"));
        });
    });
    
    // End of Nestable Function

    // Navigation Data Toggle Function
    $.each($("[nav-data-toggle]"), function (index) { 
        var me = $(this);
        me.click(function () { 
            $(me).toggleClass('open-sub-menu');
            $(me.attr("nav-data-toggle"))
                .toggleClass(me.attr("nav-data-toggle-class"));
        });
    });
    // End of Data Toggle Function

    

});


// DEMO Plugin Inplementatu
$(function () { 

    // DEMO User Random Email Data
    var user_random_email_data = [
        "violinhi@yahoo.com",
        "augusto@yahoo.ca",
        "bwcarty@att.net",
        "dprice@msn.com",
        "staikos@optonline.net",
        "psharpe@mac.com",
        "andale@yahoo.com",
        "magusnet@icloud.com"
    ];

    // DEMO User Page Inquiry
    createSearch("#user-inquiry", user_random_email_data);

})
// Toggle Menu
function toggleMenu() {
    $("#menu").toggleClass("open-menu");
}

// Alert Default
function showDefaultAlert() {
    toastr.info("전정국님 로그인 하셨습니다.");
}

function showSuccessAlert() {
    toastr.success("전정국님 로그인 하셨습니다.");
}

function showErrorAlert() {
    toastr.error("전정국님 로그인 하셨습니다.");
}

// Search Function
function createSearch(search_id, data) { 
    $(search_id).autocomplete({
        source: data,
    })
    .on("autocompleteopen", function (event, ui) {
        $(this).closest(".search-input-container").addClass("open");
    })
    .on("autocompleteclose", function (event, ui) {
        $(this).closest(".search-input-container").removeClass("open");
    })
    .on('keyup', function () {
        if ($(this).val().length > 0) {
            $("[data-target='" + search_id + "'].search-field-clear").addClass("show");
        } else { 
            $("[data-target='" + search_id + "'].search-field-clear").removeClass("show");
        }
    });
}