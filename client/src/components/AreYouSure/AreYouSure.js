const AreYouSure = ({confirmDelete,cancelDelete,name}) => {
    return (
        <div className="modal modal-alert position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalChoice">
            <div className="modal-dialog" role="document">
                <div className="modal-content rounded-3 shadow">
                <div className="modal-body p-4 text-center">
                    <h5 className="mb-0">Delete this {name}?</h5>
                    <p className="mb-0">Are you sure you want to delete this {name}?</p>
                </div>
                <div className="modal-footer flex-nowrap p-0">
                    <button 
                    onClick={confirmDelete} 
                    type="button" 
                    style={{color:"red"}}
                    className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-end">Confirm</button>
                    <button 
                    onClick={cancelDelete} 
                    type="button" 
                    style={{color:"black"}}
                    className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0" data-bs-dismiss="modal">Cancel</button>
                </div>
                </div>
            </div>
        </div>

);
}

export default AreYouSure;