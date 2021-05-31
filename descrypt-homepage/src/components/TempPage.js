import React from 'react';

const TempPage = ({handleLogout}) => {
    return(
        <section className="temp">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
}

export default TempPage;

