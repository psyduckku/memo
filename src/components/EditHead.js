
export default function EditHead({onBack, save, isEditing}) {
    return(
        <>
            <header>
                <div className="header-section" onClick={onBack}>
                    <button className="header-button">Back</button>
                </div>

                <div className="header-section header-center">
                    <h1>Todo List</h1>
                </div>

                <div className="header-section">
                    <button>저장</button>
                </div>
            </header>
        </>

    )
}