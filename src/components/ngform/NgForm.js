import './ngform.css';

export default function NgForm() {
  return (
    <form name='message' method="post">
      <input type='hidden' name='form-name' value='message' />
      <label htmlFor='secretmessage'>Message:</label>
      <textarea name='secretmessage' id='secretmessage' placeholder='Enter Message'></textarea>
      <button type='submit'>Send</button>
    </form>
  )
}
