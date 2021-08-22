import React from 'react'

const Forecast = () => {

    useEffect(() => document.title = "Forecast - Runner's Inertia", [])

    return (
        <nav className="navbar-wrapper fadeaway">
          <div className="">
            <NavLink to="/">
              Runner's Inertia
            </NavLink>
            <SignedInLink />
          </div>
        </nav>
      );
}

export default Forecast