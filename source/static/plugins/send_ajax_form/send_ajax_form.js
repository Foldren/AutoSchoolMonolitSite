export function set_form_ajax_listener(s_form, url, s_submit_btn, {success_f = null}) {
    $(s_submit_btn).on("click", () => {
        let valid = document.querySelector(s_form).checkValidity()

        if(valid){
            $(s_submit_btn).attr("disabled","disabled")
            $("#spinner_1").toggleClass('hidden')
            $(s_submit_btn).toggleClass("btn-load-custom btn-custom")
            console.log($(s_submit_btn))

            $.ajax({
                url: url,
                method: 'post',
                data: $(s_form).serialize(),
                success: function (data) {
                    $(s_submit_btn).removeAttr("disabled")
                    $("#spinner_1").toggleClass('hidden')
                    $(s_submit_btn).toggleClass("btn-load-custom btn-custom")

                    if(success_f !== null) {
                        success_f(data)
                    }
                }
            })
        }
    })
}


