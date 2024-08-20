const Navbar = () => {
    return (
        <div className="p-4">
            <div className="flex items-center justify-between">
                <div className="">Logo</div>
                <div className="flex justify-between gap-8">
                    <p>Table</p>
                    <p>Login</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;