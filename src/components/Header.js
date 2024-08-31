import './Header.css';

export default function Header({onBack, onEdit, isEditing, cal}){
    return(
        <header>
            <div className="header-section" onClick={onBack}>
                <button className="header-button">Back</button>
            </div>

            <div className="header-section header-center">
                <h1>Todo List</h1>
            </div>

            <div className="header-section" onClick={onEdit}>
                <button className="header-section">
                    {isEditing? 'Finish' : 'Edit'}
                </button>
            </div>
            <div className="header-section" onClick={cal}>
                <button>+</button>
            </div>
        </header>
    );
}