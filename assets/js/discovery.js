/**
 * Created by huang on 1/22/18.
 */
(function ($) {
    /*var aladin = A.aladin('#aladin-lite-div', {
        cooFrame: 'J2000',
        target: '30 -30',
        survey: 'NOAO/ExposureMap',
        fov: '180'
    });
    aladin.getBaseImageLayer().getColorMap().update('rainbow');
    $('#measure-table')[0].appendChild($('.aladin-measurement-div')[0]);
    var version = 'NOAO_exposure';*/
    $(".discovery_option").click(function () {
        $(".discovery_option").removeClass("active");
        $(this).addClass("active");
    });
    updateOutsideMenu();
    $(".gaia_discovery").click(function () {
        aladin.removeOverlayImageSurveys();
        aladin.setBaseImageLayer('GAIA2flux');
        aladin.setFrame('GAL');
        aladin.gotoObject('360 +5');
        version = 'gaia';
        if ($('#displayMay').length == 1) {
            $('#displayMay')[0].checked = 0;
        }
        if ($('#displayNSC').length == 1) {
            $('#displayNSC')[0].checked = 0;
        }
        if ($('#displayMell').length == 1) {
            $('#displayMell')[0].checked = 0;
        }
        if ($('#displayDes').length == 1) {
            $('#displayDes')[0].checked = 0;
        }
        if ($('#displaySmash').length == 1) {
            $('#displaySmash')[0].checked = 0;
        }
        if ($('#displayMayCat').length == 1) {
            $('#displayMayCat')[0].checked = 0;
        }
        if ($('#displaySmashCat').length == 1) {
            $('#displaySmashCat')[0].checked = 0;
        }
        $('.slider-control').hide();
        $('.smash-slider-control').hide();
        $('.may-slider-control').hide();
        $('.des-slider-control').hide();
        $('.nsc-slider-control').hide();
        /*        $('.smash_version').hide();
         $('.des_version').hide();
         $('.slider-control').hide();
         $('.NOAO_exposure').show();*/
        aladin.view.catalogs = [];
        $('.aladin-measurement-div').empty();
        $('.aladin-measurement-div').hide();
        updateOutsideMenu();
    });
    $(".nsc_discovery").click(function () {
        aladin.removeOverlayImageSurveys();
        aladin.setBaseImageLayer('NOAO_Source_Catalog');
        aladin.setFrame('J2000');
        aladin.gotoObject('30 -30');
        aladin.getBaseImageLayer().getColorMap().update('rainbow');
        if ($('.aladin-cmSelection').length == 1) {
            $('.aladin-cmSelection')[0].options.selectedIndex = 4;
        }
        version = 'NSC';
        if ($('#displayMay').length == 1) {
            $('#displayMay')[0].checked = 0;
        }
        if ($('#displayNSC').length == 1) {
            $('#displayNSC')[0].checked = 0;
        }
        if ($('#displayMell').length == 1) {
            $('#displayMell')[0].checked = 0;
        }
        if ($('#displayDes').length == 1) {
            $('#displayDes')[0].checked = 0;
        }
        if ($('#displaySmash').length == 1) {
            $('#displaySmash')[0].checked = 0;
        }
        if ($('#displayMayCat').length == 1) {
            $('#displayMayCat')[0].checked = 0;
        }
        if ($('#displaySmashCat').length == 1) {
            $('#displaySmashCat')[0].checked = 0;
        }
        $('.slider-control').hide();
        $('.smash-slider-control').hide();
        $('.may-slider-control').hide();
        $('.des-slider-control').hide();
        $('.nsc-slider-control').hide();
        /*        $('.smash_version').hide();
         $('.des_version').hide();
         $('.slider-control').hide();
         $('.NOAO_exposure').show();*/
        aladin.view.catalogs = [];
        $('.aladin-measurement-div').empty();
        $('.aladin-measurement-div').hide();
        updateOutsideMenu();
    });
    $(".image_discovery").click(function () {
        aladin.removeOverlayImageSurveys();
        aladin.setBaseImageLayer('NOAO/ExposureMap');
        aladin.setFrame('J2000');
        aladin.gotoObject('30 -30');
        aladin.getBaseImageLayer().getColorMap().update('rainbow');
        if ($('.aladin-cmSelection').length == 1) {
            $('.aladin-cmSelection')[0].options.selectedIndex = 4;
        }
        version = 'NOAO_exposure';
        if ($('#displayMay').length == 1) {
            $('#displayMay')[0].checked = 0;
        }
        if ($('#displayNSC').length == 1) {
            $('#displayNSC')[0].checked = 0;
        }
        if ($('#displayMell').length == 1) {
            $('#displayMell')[0].checked = 0;
        }
        if ($('#displayDes').length == 1) {
            $('#displayDes')[0].checked = 0;
        }
        if ($('#displaySmash').length == 1) {
            $('#displaySmash')[0].checked = 0;
        }
        if ($('#displayMayCat').length == 1) {
            $('#displayMayCat')[0].checked = 0;
        }
        if ($('#displaySmashCat').length == 1) {
            $('#displaySmashCat')[0].checked = 0;
        }
        $('.slider-control').hide();
        $('.smash-slider-control').hide();
        $('.may-slider-control').hide();
        $('.des-slider-control').hide();
        $('.nsc-slider-control').hide();
        /*        $('.smash_version').hide();
         $('.des_version').hide();
         $('.slider-control').hide();
         $('.NOAO_exposure').show();*/
        aladin.view.catalogs = [];
        $('.aladin-measurement-div').empty();
        $('.aladin-measurement-div').hide();
        updateOutsideMenu();
    });
    $(".catalog_discovery").click(function () {
        aladin.removeOverlayImageSurveys();
        aladin.setBaseImageLayer('P/Mellinger/color');
        aladin.getBaseImageLayer().getColorMap().update('native');
        if ($('.aladin-cmSelection').length == 1) {
            $('.aladin-cmSelection')[0].options.selectedIndex = 0;
        }
        aladin.setFov(180);
        aladin.setFrame('J2000');
        aladin.gotoObject('LMC');
        aladin.setOverlayImageLayer(HpxImageSurvey.getSurveyFromId('SMASH'));
        aladin.getOverlayImageLayer('SMASH').setAlpha(0.5);
        if ($('#displayMay').length == 1) {
            $('#displayMay')[0].checked = 0;
        }
        if ($('#displayNSC').length == 1) {
            $('#displayNSC')[0].checked = 0;
        }
        if ($('#displayMell').length == 1) {
            $('#displayMell')[0].checked = 0;
        }
        if ($('#displayDes').length == 1) {
            $('#displayDes')[0].checked = 0;
        }
        if ($('#displaySmash').length == 1) {
            $('#displaySmash')[0].checked = 1;
        }
        if ($('#displayMayCat').length == 1) {
            $('#displayMayCat')[0].checked = 0;
        }
        if ($('#displaySmashCat').length == 1) {
            $('#displaySmashCat')[0].checked = 0;
        }
        $('.smash-slider-control').show();
        $('.may-slider-control').hide();
        $('.des-slider-control').hide();
        $('.slider-control').hide();
        $('.nsc-slider-control').hide();
        $("#smashSlider").slider('value', aladin.getOverlayImageLayer('SMASH').alpha * 100);
        $("#smashOpacity").html("50%");
        version = 'smash';
        /*        $('.smash_version').show();
         $('.des_version').hide();
         $('.NOAO_exposure').hide();*/
        aladin.view.catalogs = [];
        $('.aladin-measurement-div').empty();
        $('.aladin-measurement-div').hide();
        updateOutsideMenu();
    });
    $(".des_discovery").click(function () {
        aladin.removeOverlayImageSurveys();
        aladin.setBaseImageLayer('P/Mellinger/color');
        aladin.getBaseImageLayer().getColorMap().update('native');
        if ($('.aladin-cmSelection').length == 1) {
            $('.aladin-cmSelection')[0].options.selectedIndex = 0;
        }
        aladin.setFov(180);
        aladin.setFrame('J2000');
        aladin.gotoObject('30 -30');
        aladin.setOverlayImageLayer(HpxImageSurvey.getSurveyFromId('DESDR1'));
        aladin.getOverlayImageLayer('DESDR1').setAlpha(0.5);

        if ($('#displayMay').length == 1) {
            $('#displayMay')[0].checked = 0;
        }
        if ($('#displayNSC').length == 1) {
            $('#displayNSC')[0].checked = 0;
        }
        if ($('#displayMell').length == 1) {
            $('#displayMell')[0].checked = 0;
        }
        if ($('#displayDes').length == 1) {
            $('#displayDes')[0].checked = 1;
        }
        if ($('#displaySmash').length == 1) {
            $('#displaySmash')[0].checked = 0;
        }
        if ($('#displayMayCat').length == 1) {
            $('#displayMayCat')[0].checked = 0;
        }
        if ($('#displaySmashCat').length == 1) {
            $('#displaySmashCat')[0].checked = 0;
        }
        $('.smash-slider-control').hide();
        $('.may-slider-control').hide();
        $('.des-slider-control').show();
        $('.slider-control').hide();
        $('.nsc-slider-control').hide();
        $("#desSlider").slider('value', aladin.getOverlayImageLayer('DESDR1').alpha * 100);
        $("#desOpacity").html("50%");
        version = 'des';
        /*   $('.des_version').show();
         $('.smash_version').hide();
         $('.NOAO_exposure').hide();*/
        aladin.view.catalogs = [];
        $('.aladin-measurement-div').empty();
        $('.aladin-measurement-div').hide();
        updateOutsideMenu();
    });

    $('.smash-slider-control').hide();
    $("#smashSlider").slider({
        value: 50,
        min: 0,
        max: 100,
        slide: function (event, ui) {
            $("#smashOpacity").html(ui.value + "%");
            var valuePoints = ui.value / 100;
            aladin.getOverlayImageLayer('SMASH').setAlpha(valuePoints);
        }
    });

    if (aladin.getOverlayImageLayer('SMASH')) {
        $('#displaySmash')[0].checked = 1;
        $('.smash-slider-control').show();
        $("#smashSlider").slider('value', aladin.getOverlayImageLayer('SMASH').alpha * 100);
        $("#smashOpacity").html(aladin.getOverlayImageLayer('SMASH').alpha * 100 + "%");
    }
    $('#displaySmash').change(function() {
        if ($('#displaySmash').is(':checked')) {
            aladin.setOverlayImageLayer(HpxImageSurvey.getSurveyFromId('SMASH'));
            aladin.getOverlayImageLayer('SMASH').setAlpha(0.5);
            $('.smash-slider-control').show();
            $("#smashSlider").slider('value', aladin.getOverlayImageLayer('SMASH').alpha * 100);
            $("#smashOpacity").html("50%");
        }
        else {
            aladin.removeOverlayImageSurvey('SMASH');
            $('.smash-slider-control').hide();
        }
    });

    $('.des-slider-control').hide();
    $("#desSlider").slider({
        value: 50,
        min: 0,
        max: 100,
        slide: function (event, ui) {
            $("#desOpacity").html(ui.value + "%");
            var valuePoints = ui.value / 100;
            aladin.getOverlayImageLayer('DESDR1').setAlpha(valuePoints);
        }
    });

    if (aladin.getOverlayImageLayer('DESDR1')) {
        $('#displayDes')[0].checked = 1;
        $('.des-slider-control').show();
        $("#desSlider").slider('value', aladin.getOverlayImageLayer('DESDR1').alpha * 100);
        $("#desOpacity").html(aladin.getOverlayImageLayer('DESDR1').alpha * 100 + "%");
    }
    $('#displayDes').change(function() {
        if ($('#displayDes').is(':checked')) {
            aladin.setOverlayImageLayer(HpxImageSurvey.getSurveyFromId('DESDR1'));
            aladin.getOverlayImageLayer('DESDR1').setAlpha(0.5);
            $('.des-slider-control').show();
            $("#desSlider").slider('value', aladin.getOverlayImageLayer('DESDR1').alpha * 100);
            $("#desOpacity").html("50%");
        }
        else {
            aladin.removeOverlayImageSurvey('DESDR1');
            $('.des-slider-control').hide();
        }
    });

    $('.slider-control').hide();
    $("#slider").slider({
        value: 50,
        min: 0,
        max: 100,
        slide: function (event, ui) {
            $("#opacity").html(ui.value + "%");
            var valuePoints = ui.value / 100;
            aladin.getOverlayImageLayer('P/Mellinger/color').setAlpha(valuePoints);
        }
    });

    if (aladin.getOverlayImageLayer('P/Mellinger/color')) {
        $('#displayMell')[0].checked = 1;
        $('.slider-control').show();
        $("#slider").slider('value', aladin.getOverlayImageLayer('P/Mellinger/color').alpha * 100);
        $("#opacity").html(aladin.getOverlayImageLayer('P/Mellinger/color').alpha * 100 + "%");
    }
    $('#displayMell').change(function () {
        if ($('#displayMell').is(':checked')) {
            aladin.setOverlayImageLayer(HpxImageSurvey.getSurveyFromId('P/Mellinger/color'));
            aladin.getOverlayImageLayer('P/Mellinger/color').setAlpha(0.5);
            $('.slider-control').show();
            $("#slider").slider('value', aladin.getOverlayImageLayer('P/Mellinger/color').alpha * 100);
            $("#opacity").html("50%");
        }
        else {
            aladin.removeOverlayImageSurvey('P/Mellinger/color');
            $('.slider-control').hide();
        }
    });

    $('.may-slider-control').hide();
    $("#maySlider").slider({
        value: 50,
        min: 0,
        max: 100,
        slide: function (event, ui) {
            $("#may-opacity").html(ui.value + "%");
            var valuePoints = ui.value / 100;
            aladin.getOverlayImageLayer('NOAO/ExposureMap').setAlpha(valuePoints);
        }
    });

    if (aladin.getOverlayImageLayer('NOAO/ExposureMap')) {
        $('#displayMay')[0].checked = 1;
        $('.may-slider-control').show();
        $("#maySlider").slider('value', aladin.getOverlayImageLayer('NOAO/ExposureMap').alpha * 100);
        $("#may-opacity").html(aladin.getOverlayImageLayer('NOAO/ExposureMap').alpha * 100 + "%");
    }
    $('#displayMay').change(function () {
        if ($('#displayMay').is(':checked')) {
            aladin.setOverlayImageLayer(HpxImageSurvey.getSurveyFromId('NOAO/ExposureMap'));
            aladin.getOverlayImageLayer('NOAO/ExposureMap').setAlpha(0.5);
            $('.may-slider-control').show();
            $("#maySlider").slider('value', aladin.getOverlayImageLayer('NOAO/ExposureMap').alpha * 100);
            $("#may-opacity").html("50%");
        }
        else {
            aladin.removeOverlayImageSurvey('NOAO/ExposureMap');
            $('.may-slider-control').hide();
        }
    });

    $('.nsc-slider-control').hide();
    $("#nscSlider").slider({
        value: 50,
        min: 0,
        max: 100,
        slide: function (event, ui) {
            $("#nsc-opacity").html(ui.value + "%");
            var valuePoints = ui.value / 100;
            aladin.getOverlayImageLayer('NOAO_Source_Catalog').setAlpha(valuePoints);
        }
    });

    if (aladin.getOverlayImageLayer('NOAO_Source_Catalog')) {
        $('#displayNSC')[0].checked = 1;
        $('.nsc-slider-control').show();
        $("#nscSlider").slider('value', aladin.getOverlayImageLayer('NOAO_Source_Catalog').alpha * 100);
        $("#nsc-opacity").html(aladin.getOverlayImageLayer('NOAO_Source_Catalog').alpha * 100 + "%");
    }
    $('#displayNSC').change(function () {
        if ($('#displayNSC').is(':checked')) {
            aladin.setOverlayImageLayer(HpxImageSurvey.getSurveyFromId('NOAO_Source_Catalog'));
            aladin.getOverlayImageLayer('NOAO_Source_Catalog').setAlpha(0.5);
            aladin.getOverlayImageLayer('NOAO_Source_Catalog').getColorMap().update('rainbow');
            $('.nsc-slider-control').show();
            $("#nscSlider").slider('value', aladin.getOverlayImageLayer('NOAO_Source_Catalog').alpha * 100);
            $("#nsc-opacity").html("50%");
        }
        else {
            aladin.removeOverlayImageSurvey('NOAO_Source_Catalog');
            $('.nsc-slider-control').hide();
        }
    });

    $('#displayMayCat').change(function () {
        if ($('#displayMayCat').is(':checked')) {
            aladin.addCatalog(aladin.createProgressiveCatalog('https://datalab.noao.edu/HiPS/noao_image_center/jan2018_imgcen/', 'J2000', 5, {
                name: 'May16',
                sourceSize: 8,
                onClick: 'showTable',
                color: 'red'
            }));
        }
        else {
            aladin.view.removeCatalog('May16');
        }
    });
    $('#displaySmashCat').change(function () {
        if ($('#displaySmashCat').is(':checked')) {
            aladin.addCatalog(aladin.createProgressiveCatalog('https://datalab.noao.edu/HiPS/smash/allsky_rc_hipscat/', 'equatorial', 11, {
                name: 'SmashCatalog',
                sourceSize: 8,
                onClick: 'showTable',
                color: 'red'
            }));
        }
        else {
            aladin.view.removeCatalog('SmashCatalog');
        }
    });
    $('.outside-baselayer .aladin-surveySelection').change(function () {
        var selectBox = $('.outside-baselayer .aladin-surveySelection')[0];
        var selectedSurvey = selectBox.options[selectBox.selectedIndex].value;
        aladin.setBaseImageLayer(selectedSurvey);
        if (selectedSurvey == "NOAO_Source_Catalog" || selectedSurvey == "NOAO/ExposureMap") {
            aladin.getBaseImageLayer().getColorMap().update('rainbow');
        }
        aladin.setFrame('J2000');
        updateColor();
    });
    $('.outside-baselayer .aladin-cmap').change(function () {
        var selectCmap = $('.outside-baselayer .aladin-cmSelection')[0];
        var selectedColor = selectCmap.options[selectCmap.selectedIndex].value;
        aladin.getBaseImageLayer().getColorMap().update(selectedColor);
    });

    $('.outside-baselayer .aladin-reverseCm').click(function () {
        aladin.getBaseImageLayer().getColorMap().reverse();
    });

    function updateOutsideMenu() {
        updateSurvey();
        updateColor();
    }
    function updateSurvey() {
        var baseSurvey = aladin.getBaseImageLayer().id;
        var surveyList = HpxImageSurvey.getAvailableSurveys();
        for (var i = 0; i < surveyList.length; i++) {
            var isCurSurvey = surveyList[i].id == baseSurvey;
            $('.outside-baselayer .aladin-surveySelection').append($("<option />").attr("selected", isCurSurvey).val(surveyList[i].id).text(surveyList[i].name));

        }
    }
    function updateColor() {
        var color = aladin.getBaseImageLayer().getColorMap().map;
        var colorList = $('.outside-baselayer .aladin-cmSelection')[0];
        for (var j = 0; j < colorList.options.length; j++) {
            if (colorList.options[j].text == color) {
                colorList.selectedIndex = j;
            }
        }
    }

})(jQuery);