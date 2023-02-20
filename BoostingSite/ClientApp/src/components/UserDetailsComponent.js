
export function UserDetailsComponent() {
    const inputFrom = (
        <form className="input-block">
            <label>
                First Name:
                <input type="text" name="name" required />
            </label>
            <label>
                Last Name:
                <input type="text" name="name" required />
            </label>
            <label>
                Email:
                <input type="email" name="name" required />
            </label>
        </form>
        )
    return (
        <div className="input-details-container">
            {inputFrom}
        </div>
        )
}

