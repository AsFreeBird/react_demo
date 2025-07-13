

function Alert(pros){
    return(
        <div role="alert" className={
                ["alert","alert-dismissible","alert-"+pros.type].join()
            }>
            <button type="button" className="close" data-dismiss ="alert" aria-label="close">
                <span ara-hidden = "true">&times; </span>
            </button>
            <strong>提示！</strong>{UNSAFE_withComponentProps.alert}
        </div>
    )
}