export default function Subscribe() {
  return (
    <section className="rounded p-4 bg-gray-100 -mx-4">
      <h2 className="font-bold text-2xl mb-2 text-gray-800">
        Email Newsletter
      </h2>
      <p className="text-gray-700 mb-4">
        I'll let you know when I write another blog post and maybe keep you up
        to date with other interesting things I do online.
      </p>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/jessesibley"
        method="post"
        target="popupwindow"
        onSubmit={() => {
          window.open('https://buttondown.email/jessesibley', 'popupwindow')
        }}
      >
        <label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="mb-4 px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded border outline-none focus:outline-none focus:shadow-outline w-full"
          />
        </label>
        <input type="hidden" value="1" name="embed" />
        <input
          type="submit"
          value="Subscribe"
          className="mb-2 w-full bg-green-500 text-gray-800 active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded cursor-pointer outline-none focus:shadow-outline mr-1"
        />
        <p className="text-sm text-gray-600">
          <a href="https://buttondown.email" target="_blank">
            Powered by Buttondown.
          </a>
        </p>
      </form>
    </section>
  )
}
