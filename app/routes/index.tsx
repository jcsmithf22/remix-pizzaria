import Navbar from "~/components/Navbar";

export default function Index() {
  return (
    <div className="font-main">
      <Navbar />
      <div
      className="
        flex flex-col
        max-w-screen-xl
        mx-auto
        content-wrapper
        sm:p-8 sm:gap-8
      "
    >
      <div
        className="
          flex flex-col
          justify-end
          w-full
          p-4
          bg-purple-400
          shadow-lg
          sm:shadow-xl sm:rounded-xl
          blankspace
          h-96
          max-h-xsmax
          lg:max-h-screen
          heading
        "
      >
        <div
          className="
            p-4
            text-3xl
            font-semibold
            text-center
            bg-white
            rounded-lg
            bg-opacity-70
            heading-text
            sm:text-4xl
            font-header
          "
        >
          Fresh <span className="text-indigo-600">Pizza</span>. Delicious 
          <span className="text-red-600"> Ice Cream</span>.
        </div>
      </div>

      <div className="w-full p-4 sm:p-0 sm:rounded-xl blankspace">
        <h3
          className="
            p-4
            text-xl text-center text-indigo-100
            bg-indigo-500
            shadow-lg
            rounded-xl
            sm:text-2xl
          "
        >
          ...A Place for Family and Friends
        </h3>
        <div
          className="
            flex flex-col
            w-full
            gap-4
            pt-4
            flex-container
            sm:pt-8 sm:px-8
            md:flex-row
            sm:gap-8
            md:gap-4
            lg:gap-8
          "
        >
          <div
            className="
              flex flex-row flex-auto
              overflow-hidden
              border border-gray-200
              rounded-lg
              shadow-lg
              md:flex-col
              card-item
              md:flex-1 md:border-0 md:bg-green-100
            "
          >
            <div className="w-3/12 image-container1 md:w-auto">
              <img
                className="hidden md:inline"
                src="images/heart_pizza.jpg"
                alt="heart pizza"
              />
            </div>
            <div className="w-9/12 p-4 sm:p-8 md:p-4">
              <h3 className="text-xl text-gray-700">Homemade Pizza</h3>
              <p className="text-gray-600">
                We lovingly make our own dough and pizza
              </p>
            </div>
          </div>
          <div
            className="
              flex flex-row flex-auto
              overflow-hidden
              border border-gray-200
              rounded-lg
              shadow-lg
              md:flex-col
              card-item
              md:flex-1 md:border-0 md:bg-yellow-100
            "
          >
            <div className="w-3/12 image-container2 md:w-auto">
              <img
                className="hidden md:inline"
                src="images/ice_cream.jpg"
                alt="ice cream"
              />
            </div>
            <div className="w-9/12 p-4 sm:p-8 md:p-4">
              <h3 className="text-xl text-gray-700">Pure Goodness</h3>
              <p className="text-gray-600">
                Enjoy our fantastic ice cream and handcrafted cones
              </p>
            </div>
          </div>
          <div
            className="
              flex flex-row flex-auto
              overflow-hidden
              border border-gray-200
              rounded-lg
              shadow-lg
              md:flex-col
              card-item
              md:flex-1 md:border-0 md:bg-purple-100
            "
          >
            <div className="w-3/12 md:w-auto image-container3">
              <img
                className="hidden md:inline"
                src="images/inside_building.jpg"
                alt="inside building"
              />
            </div>
            <div className="w-9/12 p-4 sm:p-8 md:p-4">
              <h3 className="text-xl text-gray-700">Quality Service</h3>
              <p className="text-gray-600">Small town service, big city pizza</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 pb-4 sm:pb-0 sm:p-0">
        <div
          className="
            flex flex-col
            gap-4
            p-4
            text-xl text-indigo-100
            bg-indigo-500
            shadow-lg
            sm:gap-8 sm:p-8
            lg:text-2xl
            rounded-xl
            md:flex-row md:leading-normal
            lg:leading-relaxed
          "
        >
          <div className="flex flex-col justify-center flex-1">
            <img className="rounded-xl" src="images/yummy.jpg" alt="" />
          </div>
          <div className="flex flex-col justify-center flex-1">
            <div className="text-justify">
              As the creator of Random Lake Pizzeria, I wanted to make a space
              where people could not only enjoy good food but where family is
              cherished and good times could be had! I put my heart and soul
              into making good food for people.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-4 pt-0 sm:p-0 sm:rounded-xl blankspace text">
        <h3
          className="
            p-4
            text-xl text-center text-red-100
            bg-red-500
            shadow-lg
            rounded-xl
            sm:text-2xl
          "
        >
          COME JOIN US!
        </h3>
      </div>
      <div className="w-full p-4 bg-gray-400 sm:rounded-xl blankspace h-96"></div>
      <div className="w-full p-4 bg-red-400 sm:rounded-xl blankspace h-96"></div>
      <div className="w-full p-4 bg-blue-400 sm:rounded-xl blankspace h-96"></div>
      <div className="w-full p-4 bg-gray-400 sm:rounded-xl blankspace h-96"></div>
    </div>
    </div>
  );
}
