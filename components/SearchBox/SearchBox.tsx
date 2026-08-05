
import css from './SearchBox.module.css'
interface SearchBoxProps {
    onChangeValue: (search: string) => void
}
export default function SearchBox({onChangeValue}: SearchBoxProps) {
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => onChangeValue(event.target.value)

  return <input className={css.input} type="text" placeholder="Search notes" onChange={handleChange}/>;
}
