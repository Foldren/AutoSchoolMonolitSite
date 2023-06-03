export function generate_alert(s_target, s_triger) {
    // target element that will be dismissed
    const $targetEl = document.querySelector(s_target);

    // optional trigger element
    const $triggerEl = document.querySelector(s_triger);

    // options object
    const options = {
      transition: 'transition-all',
      duration: 0,
      timing: 'ease-out',

      // callback functions
      onHide: (context, targetEl) => {
        console.log('element has been dismissed')
        console.log(targetEl)
      }
    };

    const alert = new Dismiss($targetEl, $triggerEl, options);

    return alert
}

export function show_alert(s_target_a, alert) {
    $(s_target_a).removeClass("hidden")
    setTimeout(function (){
        alert.hide()
    }, 2800)
}