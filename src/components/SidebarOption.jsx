import React from 'react'
import classNames from 'classnames'

function SidebarOption({header, children, childrenClass}) {
  const [isExpanded, setExpanded] = React.useState(false)
  return (
    <div className={classNames('sidebar__option', 'dropdown', {'dropdown--active':isExpanded})}>
      <div onClick={() => setExpanded((prev) => !prev)} className="dropdown__trigger">
        <h3>{header}</h3>
        <div className="dropdown__arrow">
          <span></span>
        </div>
      </div>
      <ul className={classNames(childrenClass, "dropdown__content")}>
        {children}
      </ul>
    </div>
  )
}

export default SidebarOption
