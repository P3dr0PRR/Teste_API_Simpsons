import React, { useState } from "react";

const api = "https://thesimpsonsapi.com/api";

export function Simpsons() {
  const [apiCharacters, setApiCharacters] = useState([]);

  const [simpsons, setSimpsons] = useState(0);
  const apiSimpsons = async () => {
    const response = await fetch(`${api}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
  };

  const apiChars = async (page = 1) => {
    const response = await fetch(`${api}/characters?page=${page}`);
    const data = await response.json();
    setApiCharacters(data.results);
  };

  return (
    <div>
      {simpsons === 0 ? (
        <div className="min-h-screen bg-sky-400 flex flex-col justify-center items-center">
          <img
            src="/simpsonsBG.png"
            alt="Simpsons Background"
            className="h-40 w-40"
          />

          <div className="flex-grow">
            <div className="items-center text-center p-6 ">
              <h1 className="text-2xl font-bold">
                Do you know all the characters from The Simpsons?
              </h1>

              <h2 className="text-lg mt-4">
                Welcome to Springfield, the most chaotic and fun city on TV!
                Here, every corner holds an iconic character, an unexpected
                joke, and never-ending stories. If you like humor, craziness,
                and a world full of personality, then you need to learn more
                about The Simpsons!
              </h2>
            </div>
            <div className="flex justify-center mt-6">
              <button
                onClick={() => {
                  setSimpsons(1);
                  apiChars();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 border border-stone-400 shadow-xl transition-transform duration-300  hover:scale-110 rounded"
              >
                Wow!!!
                <br />
                Meet Characters
              </button>
            </div>
          </div>
          <footer className="mb-4 text-white">
            &copy; Pedro Paulo Simpsons API Fan Page.
          </footer>
        </div>
      ) : null}

      {simpsons === 1 ? (
        <div className="min-h-screen bg-sky-400 flex flex-col justify-center items-center p-4">
          <img
            src="/simpsonsBG.png"
            alt="Simpsons Background"
            className="h-40 w-40"
          />

          <h1 className="text-3xl font-bold mb-6">
            The Simpsons Characters...
          </h1>

          <div className="flex-grow">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {apiCharacters.map((character) => (
                <div
                  className="group flex flex-col items-center text-center p-6 bg-stone-100 hover:bg-yellow-200 hover:shadow-yellow-600 hover: border-2 hover:border-yellow-400 rounded-xl shadow-md gap-6"
                  key={character.id}
                >
                  <h2 className="text-lg mt-4 font-bold group-hover:text-2xl">
                    {character.name}
                  </h2>
                  <img
                    src={
                      "https://cdn.thesimpsonsapi.com/200" +
                      character.portrait_path
                    }
                    alt={character.name}
                    className="border border-stone-300 rounded-lg group-hover:border-yellow-400 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-yellow-300"
                  />
                  <p className="text-md mt-2 group-hover:font-semibold">
                    {character.occupation}
                  </p>
                  <div className="flex justify-between items-center w-[75%]">
                    <p className="p-1 bg-stone-50 border border-stone-400 rounded-md">
                      Age: {character.age}
                    </p>
                    <p
                      className={`p-1 border border-stone-400 rounded-md ${character.status === "Alive" ? "bg-green-200" : "bg-red-200"}`}
                    >
                      {character.status}
                    </p>
                  </div>
                  <p className="group-hover:font-semibold group-hover:text-yellow-600">
                    "
                    {
                      character.phrases[
                        Math.floor(Math.random() * character.phrases.length)
                      ]
                    }
                    "
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6 gap-3">
              <button
                onClick={() => {
                  setSimpsons(1);
                  apiChars(1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                1
              </button>
              <button
                onClick={() => {
                  setSimpsons(2);
                  apiChars(2);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                2
              </button>
              <button
                onClick={() => {
                  setSimpsons(3);
                  apiChars(3);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                3
              </button>
              <button
                onClick={() => {
                  setSimpsons(4);
                  apiChars(4);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                4
              </button>
              <button
                onClick={() => {
                  setSimpsons(5);
                  apiChars(5);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                5
              </button>
            </div>
          </div>
          <footer className="my-4 text-white">
            &copy; Pedro Paulo Simpsons API Fan Page.
          </footer>
        </div>
      ) : null}

      {simpsons === 2 ? (
        <div className="min-h-screen bg-sky-400 flex flex-col justify-center items-center p-4">
          <img
            src="/simpsonsBG.png"
            alt="Simpsons Background"
            className="h-40 w-40"
          />

          <h1 className="text-3xl font-bold mb-6">
            The Simpsons Characters...
          </h1>

          <div className="flex-grow">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {apiCharacters.map((character) => (
                <div
                  className="group flex flex-col items-center text-center p-6 bg-stone-100 hover:bg-yellow-200 hover:shadow-yellow-600 hover: border-2 hover:border-yellow-400 rounded-xl shadow-md gap-6"
                  key={character.id}
                >
                  <h2 className="text-lg mt-4 font-bold group-hover:text-2xl">
                    {character.name}
                  </h2>
                  <img
                    src={
                      "https://cdn.thesimpsonsapi.com/200" +
                      character.portrait_path
                    }
                    alt={character.name}
                    className="border border-stone-300 rounded-lg group-hover:border-yellow-400 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-yellow-300"
                  />
                  <p className="text-md mt-2 group-hover:font-semibold">
                    {character.occupation}
                  </p>
                  <div className="flex justify-between items-center w-[75%]">
                    <p className="p-1 bg-stone-50 border border-stone-400 rounded-md">
                      Age: {character.age}
                    </p>
                    <p
                      className={`p-1 border border-stone-400 rounded-md ${character.status === "Alive" ? "bg-green-200" : "bg-red-200"}`}
                    >
                      {character.status}
                    </p>
                  </div>
                  <p className="group-hover:font-semibold group-hover:text-yellow-600">
                    "
                    {
                      character.phrases[
                        Math.floor(Math.random() * character.phrases.length)
                      ]
                    }
                    "
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6 gap-3">
              <button
                onClick={() => {
                  setSimpsons(1);
                  apiChars(1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                1
              </button>
              <button
                onClick={() => {
                  setSimpsons(2);
                  apiChars(2);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                2
              </button>
              <button
                onClick={() => {
                  setSimpsons(3);
                  apiChars(3);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                3
              </button>
              <button
                onClick={() => {
                  setSimpsons(4);
                  apiChars(4);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                4
              </button>
              <button
                onClick={() => {
                  setSimpsons(5);
                  apiChars(5);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                5
              </button>
            </div>
          </div>
          <footer className="my-4 text-white">
            &copy; Pedro Paulo Simpsons API Fan Page.
          </footer>
        </div>
      ) : null}

      {simpsons === 3 ? (
        <div className="min-h-screen bg-sky-400 flex flex-col justify-center items-center p-4">
          <img
            src="/simpsonsBG.png"
            alt="Simpsons Background"
            className="h-40 w-40"
          />

          <h1 className="text-3xl font-bold mb-6">
            The Simpsons Characters...
          </h1>

          <div className="flex-grow">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {apiCharacters.map((character) => (
                <div
                  className="group flex flex-col items-center text-center p-6 bg-stone-100 hover:bg-yellow-200 hover:shadow-yellow-600 hover: border-2 hover:border-yellow-400 rounded-xl shadow-md gap-6"
                  key={character.id}
                >
                  <h2 className="text-lg mt-4 font-bold group-hover:text-2xl">
                    {character.name}
                  </h2>
                  <img
                    src={
                      "https://cdn.thesimpsonsapi.com/200" +
                      character.portrait_path
                    }
                    alt={character.name}
                    className="border border-stone-300 rounded-lg group-hover:border-yellow-400 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-yellow-300"
                  />
                  <p className="text-md mt-2 group-hover:font-semibold">
                    {character.occupation}
                  </p>
                  <div className="flex justify-between items-center w-[75%]">
                    <p className="p-1 bg-stone-50 border border-stone-400 rounded-md">
                      Age: {character.age}
                    </p>
                    <p
                      className={`p-1 border border-stone-400 rounded-md ${character.status === "Alive" ? "bg-green-200" : "bg-red-200"}`}
                    >
                      {character.status}
                    </p>
                  </div>
                  <p className="group-hover:font-semibold group-hover:text-yellow-600">
                    "
                    {
                      character.phrases[
                        Math.floor(Math.random() * character.phrases.length)
                      ]
                    }
                    "
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6 gap-3">
              <button
                onClick={() => {
                  setSimpsons(1);
                  apiChars(1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                1
              </button>
              <button
                onClick={() => {
                  setSimpsons(2);
                  apiChars(2);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                2
              </button>
              <button
                onClick={() => {
                  setSimpsons(3);
                  apiChars(3);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                3
              </button>
              <button
                onClick={() => {
                  setSimpsons(4);
                  apiChars(4);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                4
              </button>
              <button
                onClick={() => {
                  setSimpsons(5);
                  apiChars(5);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                5
              </button>
            </div>
          </div>
          <footer className="my-4 text-white">
            &copy; Pedro Paulo Simpsons API Fan Page.
          </footer>
        </div>
      ) : null}

      {simpsons === 4 ? (
        <div className="min-h-screen bg-sky-400 flex flex-col justify-center items-center p-4">
          <img
            src="/simpsonsBG.png"
            alt="Simpsons Background"
            className="h-40 w-40"
          />

          <h1 className="text-3xl font-bold mb-6">
            The Simpsons Characters...
          </h1>

          <div className="flex-grow">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {apiCharacters.map((character) => (
                <div
                  className="group flex flex-col items-center text-center p-6 bg-stone-100 hover:bg-yellow-200 hover:shadow-yellow-600 hover: border-2 hover:border-yellow-400 rounded-xl shadow-md gap-6"
                  key={character.id}
                >
                  <h2 className="text-lg mt-4 font-bold group-hover:text-2xl">
                    {character.name}
                  </h2>
                  <img
                    src={
                      "https://cdn.thesimpsonsapi.com/200" +
                      character.portrait_path
                    }
                    alt={character.name}
                    className="border border-stone-300 rounded-lg group-hover:border-yellow-400 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-yellow-300"
                  />
                  <p className="text-md mt-2 group-hover:font-semibold">
                    {character.occupation}
                  </p>
                  <div className="flex justify-between items-center w-[75%]">
                    <p className="p-1 bg-stone-50 border border-stone-400 rounded-md">
                      Age: {character.age}
                    </p>
                    <p
                      className={`p-1 border border-stone-400 rounded-md ${character.status === "Alive" ? "bg-green-200" : "bg-red-200"}`}
                    >
                      {character.status}
                    </p>
                  </div>
                  <p className="group-hover:font-semibold group-hover:text-yellow-600">
                    "
                    {
                      character.phrases[
                        Math.floor(Math.random() * character.phrases.length)
                      ]
                    }
                    "
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6 gap-3">
              <button
                onClick={() => {
                  setSimpsons(1);
                  apiChars(1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                1
              </button>
              <button
                onClick={() => {
                  setSimpsons(2);
                  apiChars(2);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                2
              </button>
              <button
                onClick={() => {
                  setSimpsons(3);
                  apiChars(3);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                3
              </button>
              <button
                onClick={() => {
                  setSimpsons(4);
                  apiChars(4);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                4
              </button>
              <button
                onClick={() => {
                  setSimpsons(5);
                  apiChars(5);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                5
              </button>
            </div>
          </div>
          <footer className="my-4 text-white">
            &copy; Pedro Paulo Simpsons API Fan Page.
          </footer>
        </div>
      ) : null}
      {simpsons === 5 ? (
        <div className="min-h-screen bg-sky-400 flex flex-col justify-center items-center p-4">
          <img
            src="/simpsonsBG.png"
            alt="Simpsons Background"
            className="h-40 w-40"
          />

          <h1 className="text-3xl font-bold mb-6">
            The Simpsons Characters...
          </h1>

          <div className="flex-grow">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {apiCharacters.map((character) => (
                <div
                  className="group flex flex-col items-center text-center p-6 bg-stone-100 hover:bg-yellow-200 hover:shadow-yellow-600 hover: border-2 hover:border-yellow-400 rounded-xl shadow-md gap-6"
                  key={character.id}
                >
                  <h2 className="text-lg mt-4 font-bold group-hover:text-2xl">
                    {character.name}
                  </h2>
                  <img
                    src={
                      "https://cdn.thesimpsonsapi.com/200" +
                      character.portrait_path
                    }
                    alt={character.name}
                    className="border border-stone-300 rounded-lg group-hover:border-yellow-400 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-yellow-300"
                  />
                  <p className="text-md mt-2 group-hover:font-semibold">
                    {character.occupation}
                  </p>
                  <div className="flex justify-between items-center w-[75%]">
                    <p className="p-1 bg-stone-50 border border-stone-400 rounded-md">
                      Age: {character.age}
                    </p>
                    <p
                      className={`p-1 border border-stone-400 rounded-md ${character.status === "Alive" ? "bg-green-200" : "bg-red-200"}`}
                    >
                      {character.status}
                    </p>
                  </div>
                  <p className="group-hover:font-semibold group-hover:text-yellow-600">
                    "
                    {
                      character.phrases[
                        Math.floor(Math.random() * character.phrases.length)
                      ]
                    }
                    "
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6 gap-3">
              <button
                onClick={() => {
                  setSimpsons(1);
                  apiChars(1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                1
              </button>
              <button
                onClick={() => {
                  setSimpsons(2);
                  apiChars(2);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                2
              </button>
              <button
                onClick={() => {
                  setSimpsons(3);
                  apiChars(3);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                3
              </button>
              <button
                onClick={() => {
                  setSimpsons(4);
                  apiChars(4);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                4
              </button>
              <button
                onClick={() => {
                  setSimpsons(5);
                  apiChars(5);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 bg-stone-50 border border-stone-400 rounded-md transition-transform duration-300  hover:scale-110 "
              >
                5
              </button>
            </div>
          </div>
          <footer className="my-4 text-white">
            &copy; Pedro Paulo Simpsons API Fan Page.
          </footer>
        </div>
      ) : null}
    </div>
  );
}
export default Simpsons;
