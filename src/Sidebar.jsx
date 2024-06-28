function Sidebar() {
    return (
      <div className="drawer drawer-end">
        <input id="drawer-checkbox" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content"></div>
        <div className="drawer-side">
          <label htmlFor="drawer-checkbox" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul id="sidebar-body" className="min-h-full w-[350px] bg-base-200/95 p-3 text-base-content">
          </ul>
        </div>
      </div>
    );
}

export default Sidebar;
