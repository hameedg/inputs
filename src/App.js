import "./App.css";

function App() {
  return (
    <div>
      <div class="flex items-center justify-center h-screen bg-gray-300">
        <div class="bg-gray-100 text-black font-normal rounded-lg border shadow-lg p-10">
          <form>
            <div className="grid grid-cols-2">
              <div className="p-2">
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="John"
                  required
                ></input>
              </div>
              <div className="p-2">
                <label
                  for="last_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="John"
                  required
                ></input>
              </div>
            </div>

            <div class="mb-6"></div>
            <div class="mb-6">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
              >
                Share your Experience
              </label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
/*class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"

 <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500" //idhar
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required=""
                ></input>\


                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  class="shadow-sm border border-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400 dark:text-black "
                  placeholder="name@flowbite.com"
                  required=""
                ></input>

*/
