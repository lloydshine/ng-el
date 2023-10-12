import './ng.css';
import { NgForm } from '../../components';

export default function Ng() {
  return (
    <section className='ng'>
      <NgForm />
      <div className='ng-intro'>
        <h1>Secret Message</h1>
        <p>Kung naa kay hinanakit sa akoa, ayg kaulaw send diri</p>
      </div>
    </section>
  )
}
