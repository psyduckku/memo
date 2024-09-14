
export default function EditHead({onBack,onEdit, isEditing}) {
    return(
        <>
            <header>
                <div className="header-section" onClick={onBack}>
                    <button className="header-button">Back</button>
                </div>

                <div className="header-section header-center">
                    <h1>Todo List</h1>
                </div>

                <div className="header-section" onClick={onEdit}>
                    <button>
                        {isEditing? '저장':'편집' }
                    </button>
                </div>
            </header>
        </>

    )
}