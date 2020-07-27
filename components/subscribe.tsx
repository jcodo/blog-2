export default function Subscribe() {
  return (
    <section>
      <h2 className="font-bold text-2xl text-gray-800">Newsletter</h2>
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
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="block w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded border outline-snone focus:outline-none focus:shadow-outline"
          />
          <input type="hidden" value="1" name="embed" />
          <input
            type="submit"
            value="Subscribe"
            className="block w-full text-white bg-pinkyred-500 active:bg-pinkyred-600 border-2 border-pinkyred-500 font-bold uppercase text-sm px-6 py-2 rounded cursor-pointer outline-none focus:shadow-outline"
          />
        </div>
        <p className="text-sm mt-4 text-gray-500">
          <a href="https://buttondown.email" target="_blank">
            Powered by Buttondown.
          </a>
        </p>
      </form>
    </section>
  )
}
