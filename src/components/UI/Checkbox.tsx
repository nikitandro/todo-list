import doneIMG from '../../img/done.svg';
import undoneIMG from '../../img/undone.svg';

type CheckboxProps = {
  isChecked?: boolean;
  onClick?: () => void;
};

export default function Checkbox({ isChecked, onClick }: CheckboxProps) {
  return (
    <button className='checkbox' onClick={onClick}>
      <img src={isChecked ? doneIMG : undoneIMG} alt='' />
    </button>
  );
}
