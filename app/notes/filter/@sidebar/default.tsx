import css from "./SidebarNotes.module.css";
function Sidebar() {
  const tags = ["Todo", "Work", "Personal", "Meeting", "Shopping"];

  return (
    <ul className={css.menuList}>
      {/* список тегів */}
      <li className={css.menuItem}>
        <a href={`/notes/filter/all`} className={css.menuLink}>
          All notes
        </a>
      </li>
    {tags.map(tag => (
         <li className={css.menuItem}
         key={tag}>
        <a
          href={`/notes/filter/${tag}`}
          className={css.menuLink}
        >
          {tag}
        </a>
      </li>
    ))}
    </ul>
  );
}
export default Sidebar;
