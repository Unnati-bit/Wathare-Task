import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar bg-body-tertiary">
                <form class="container-fluid justify-content-start">
                    <button class="btn btn-outline-success me-2" type="button">1hr</button>
                    <button class="btn btn-sm btn-outline-secondary" type="button">8hr</button>
                    <button class="btn btn-sm btn-outline-secondary" type="button">24hr</button>
                </form>
            </nav>
        </div>
    )
}

