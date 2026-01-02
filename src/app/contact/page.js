export default function Contact() {
  return (
    <section className="px-6 py-20 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <form className="flex flex-col gap-4">
        <input className="p-3 bg-gray-900 rounded" placeholder="Your Name" />
        <input className="p-3 bg-gray-900 rounded" placeholder="Email" />
        <textarea className="p-3 bg-gray-900 rounded" placeholder="Message" />
        <button className="bg-blue-600 py-2 rounded">Send Message</button>
      </form>
    </section>
  );
}
