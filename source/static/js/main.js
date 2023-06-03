import {generate_carousel_flick} from "/source/static/plugins/carousel_flick/carousel_flick.js";
import {generate_accordion} from "/source/static/plugins/accordion/accordion.js";
import {generate_collapse} from "/source/static/plugins/collapse/collapse.js";
import {generate_modal} from "/source/static/plugins/modal/modal.js";
import {activate_empty_forms} from "/source/static/plugins/required-empty-form/required-empty-form.js";
import {set_form_ajax_listener} from "/source/static/plugins/send_ajax_form/send_ajax_form.js";
import {generate_alert, show_alert} from "/source/static/plugins/alert/alert.js";


const alert = generate_alert('#target_a', '#trigger_a')

set_form_ajax_listener(
    "#send-application",
    window.location.host+"/send-application",
    "#send-application-btn",
    {success_f: function() {
        $("#close-modal").click()
        show_alert("#target_a", alert)
    }
})

activate_empty_forms("#send-application")

generate_modal(1, '.open-modal', '#close-modal')

generate_collapse(1)

generate_carousel_flick(
    '#carousel-0',
    {"prevNextButtons": false,
            "groupCells": '100%',
            "initialIndex": 0,
            "pageDots": false,
            "cellAlign": 'left',
    },
    {blur: false, s_prev:'#prev-carousel-0', s_next: '#next-carousel-0'}

)

generate_carousel_flick(
    '#carousel-1',
    {"prevNextButtons": false,
            "groupCells": '100%',
            "cellAlign": 'left',
            "pageDots": false,
            "draggable": true,

    },
    {
        blur: false,
        s_indicators: '#carousel-1-indicators', s_prev:'#prev-carousel-1', s_next: '#next-carousel-1'
    }

)

generate_carousel_flick(
    '#carousel-2',
    {"prevNextButtons": false,
            "groupCells": '100%',
            "initialIndex": 1,
            "pageDots": false,
            "draggable": false,
    },
    {blur: true, s_prev:'#prev-carousel-2', s_next: '#next-carousel-2'}

)

generate_carousel_flick(
    '#carousel-6',
    {"prevNextButtons": false,
            "groupCells": '100%',
            "initialIndex": 0,
            "pageDots": false,
            "draggable": true,
            'cellAlign': 'left',
    },
    {blur: false}

)

generate_accordion(
    5,
    1,
    {active_item: 1}
)
