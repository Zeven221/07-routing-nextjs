import React from "react"
import css from './LayoutNotes.module.css'
interface SideBarLayoutProps {
    children: React.ReactNode,
    sidebar: React.ReactNode
}
function SideBarLayout({children,sidebar}: SideBarLayoutProps){
return (<section className={css.container}>
  <aside className={css.sidebar}>{sidebar}</aside>
  <div className={css.notesWrapper}>{children}</div>
</section>
)
}
export default SideBarLayout