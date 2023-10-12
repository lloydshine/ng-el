import './ngform.css';

export default function NgForm() {
  return (
    <form name='message v1' method="post" onSubmit="submit" data-netlify="true">
      <input type='hidden' name='form-name' value='message v1' />
      <label htmlFor='message'>Message:</label>
      <textarea name='message' id='message' rows="7" cols="40" placeholder='Enter Message'></textarea>
      <button type='submit'>Send</button>
    </form>
  )
}
