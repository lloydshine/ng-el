import './ngform.css';

export default function NgForm() {
  return (
    <form>
      <label htmlFor='message'>Message:</label>
      <textarea name='message' id='message' rows="7" cols="40" placeholder='Enter Message'></textarea>
      <button type='submit'>Send</button>
    </form>
  )
}
