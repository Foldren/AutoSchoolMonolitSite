// index = modalEl-{number}
export function generate_modal(index_model, s_btn_open, s_btn_close) {
// set the modal menu element
    const $targetEl = document.getElementById(`modalEl-${index_model}`);

// options with default values
    const options = {
        placement: 'center',
        backdrop: 'dynamic',
        backdropClasses: 'z-40',
        closable: true,
        onHide: () => {
            $('body').find(`:not(#modalEl-${index_model})`).removeClass("blur")
        },
        onShow: () => {
            $('body').children(`:not(#modalEl-${index_model})`).addClass("blur")
        },
        onToggle: () => {}
    }

    const modal = new Modal($targetEl, options)

    $(s_btn_open).on("click", function () {
        modal.show()
    })

    $(s_btn_close).on("click", function () {
        modal.hide()
    })

    return modal
}