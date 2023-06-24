export function generate_collapse(index_collapse) {
    const $targetEl = document.getElementById(`targetEl-${index_collapse}`);
    const $triggerEl = document.getElementById(`triggerEl-${index_collapse}`);

    const options = {
        onCollapse: () => {
            $('#triggerEl-1').html('\
                <path className="group-hover:fill-lime-custom" d="M0 1.5C0 2.05228 0.447715 2.5 1 2.5H17C17.5523 2.5 18 2.05228 18 1.5C18 0.947715 17.5523 0.5 17 0.5H1C0.447716 0.5 0 0.947715 0 1.5Z" fill="#323942"/>\
                <path className="group-hover:fill-lime-custom" d="M18 5.5C18 6.05228 17.5523 6.5 17 6.5H1C0.447716 6.5 0 6.05228 0 5.5C0 4.94772 0.447715 4.5 1 4.5H17C17.5523 4.5 18 4.94772 18 5.5Z" fill="#323942"/>\
                <path className="group-hover:fill-lime-custom" d="M18 9.5C18 10.0523 17.5523 10.5 17 10.5H1C0.447716 10.5 0 10.0523 0 9.5C0 8.94771 0.447715 8.5 1 8.5H17C17.5523 8.5 18 8.94771 18 9.5Z" fill="#323942"/>')
            $('#triggerEl-1').attr('viewBox', "0 0 18 11")
            $('#triggerEl-1').attr('width', "18")
            $('#triggerEl-1').attr('height', "11")
        },
        onExpand: () => {
            $('#triggerEl-1').html(
                '<path class="group-hover:fill-lime-custom" d="M2.04853 0.851472C1.5799 0.382843 0.820101 0.382843 0.351472 0.851472C-0.117157 1.3201 -0.117157 2.0799 0.351472 2.54853L6.30294 8.5L0.351473 14.4515C-0.117156 14.9201 -0.117156 15.6799 0.351473 16.1485C0.820102 16.6172 1.5799 16.6172 2.04853 16.1485L8 10.1971L13.9515 16.1485C14.4201 16.6172 15.1799 16.6172 15.6485 16.1485C16.1172 15.6799 16.1172 14.9201 15.6485 14.4515L9.69705 8.5L15.6485 2.54853C16.1172 2.0799 16.1172 1.3201 15.6485 0.851472C15.1799 0.382843 14.4201 0.382843 13.9515 0.851472L8 6.80294L2.04853 0.851472Z" fill="#323942"/>'
            )
            $('#triggerEl-1').attr('viewBox', "0 0 16 17")
            $('#triggerEl-1').attr('width', "16")
            $('#triggerEl-1').attr('height', "17")
        },
        onToggle: () => {
            $('#phone-school, #header-school').toggle()
            $("#navbar-body").toggleClass('lg-custom-max:justify-between justify-end')
        },
    };

    const collapse = new Collapse($targetEl, $triggerEl, options);

    return collapse
}

